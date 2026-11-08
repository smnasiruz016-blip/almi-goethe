// RR-401 · every factory gate must turn RED when broken. Break the source, run the factory proof, require exit != 0 AND a failure
// line naming that gate, restore the file byte-for-byte (checked), then the clean run must be GREEN.
// Run: npx tsx scripts/factory/sabotage-gates.mts      (not part of the build: it edits source files while it runs)
import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const CASES = [
  { gate: "German grammar gate: spelling", file: "src/lib/factory/grammar-gate.ts", from: 'const BLOCKING_CATEGORIES_DE = new Set(["TYPOS", "GRAMMAR", "CONFUSED_WORDS", "CASING", "PUNCTUATION"]);\nconst BLOCKING_ISSUES = new Set(["misspelling", "grammar"]);', to: 'const BLOCKING_CATEGORIES_DE = new Set(["GRAMMAR", "CONFUSED_WORDS", "CASING", "PUNCTUATION"]);\nconst BLOCKING_ISSUES = new Set(["grammar"]);', fail: "✗ planted German spelling error" },
  { gate: "English notes: UK and US must both flag", file: "src/lib/factory/grammar-gate.ts", from: ".filter((m) => isBlockingEn(m) && usHas(m) && !inQuote(m)", to: ".filter((m) => isBlockingEn(m) && !inQuote(m)", fail: "✗ a note flagged only in British English" },
  { gate: "nicht bestanden notes must exist", file: "src/lib/factory/grammar-gate.ts", from: 'if (all.length < 20) return "the notes are missing";', to: "if (all.length < 0) return null;", fail: "✗ nicht bestanden without notes" },
  { gate: "word-count gate (table)", file: "src/lib/factory/import.ts", from: "if (row.total !== words) {", to: "if (false) {", fail: "✗ a word count that differs from the table" },
  { gate: "greeting and closing left out of the count", file: "src/lib/factory/pack.ts", from: "  return paragraphs.slice(1, -1);\n}", to: "  return paragraphs;\n}", fail: "✗ word count" },
  { gate: "dry run unless --confirm AND FACTORY_WRITE=yes", file: "src/lib/factory/seed-plan.ts", from: 'argv.includes("--confirm") && env.FACTORY_WRITE === "yes";', to: 'argv.includes("--confirm") || env.FACTORY_WRITE === "yes";', fail: "✗ dry run by default" },
  { gate: "idempotence / stable ids", file: "src/lib/factory/pack.ts", from: 'export const itemId = (number: string) => `fac-goethe-b1-p1-${number.replace(".", "-").toLowerCase()}`;', to: 'export const itemId = (number: string) => `fac-goethe-b1-p1-${number.replace(".", "-").toLowerCase()}-${Math.random().toString(36).slice(2, 6)}`;', fail: "✗ import twice" },
  { gate: "seed:prod never reads the factory data", file: "scripts/seed/append.ts", from: 'import { ITEMS as SPRECHEN } from "./sprechen";', to: 'import { ITEMS as SPRECHEN } from "./sprechen";\nimport "../../src/content/factory/goethe-b1-model-answers.json";', fail: "✗ seed:prod's files never import the factory data" },
];
const run = () => spawnSync("npx", ["tsx", "scripts/factory/factory.test.mts"], { encoding: "utf8", shell: true });
const out: { gate: string; red: boolean; reason: string }[] = [];
for (const c of CASES) {
  const raw = readFileSync(c.file, "utf8");
  const crlf = raw.includes("\r\n"), lf = raw.replace(/\r\n/g, "\n");
  if (!lf.includes(c.from)) throw new Error(`anchor missing for: ${c.gate}`);
  try {
    const bad = lf.replace(c.from, c.to);
    writeFileSync(c.file, crlf ? bad.replace(/\n/g, "\r\n") : bad);
    const r = run();
    const all = r.stdout + r.stderr;
    const reason = all.split("\n").filter((l) => l.includes("✗")).join(" | ").trim();
    out.push({ gate: c.gate, red: r.status !== 0 && all.includes(c.fail), reason });
  } finally { writeFileSync(c.file, raw); }
  if (readFileSync(c.file, "utf8") !== raw) throw new Error(`${c.file} NOT restored`);
}
const clean = run();
for (const o of out) console.log(`  [${o.red ? "RED as required" : "STAYED GREEN: BLIND"}] ${o.gate}\n      reason: ${o.reason || "(none)"}`);
console.log(`  restored byte-for-byte, clean run: ${clean.status === 0 ? "GREEN" : "NOT GREEN"}`);
const ok = out.every((o) => o.red) && clean.status === 0;
console.log(ok ? `\nSABOTAGE PASS: ${out.length}/${out.length} gates turn RED when broken` : "\nSABOTAGE FAIL");
process.exitCode = ok ? 0 : 1;
