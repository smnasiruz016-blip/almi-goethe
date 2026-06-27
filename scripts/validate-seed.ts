// Dev-only: validate every seed item's payload against its runtime Zod schema, so
// a malformed payload is caught here, not at scoring time. Run: tsx scripts/validate-seed.ts
import { ITEMS as L } from "./seed/lesen";
import { ITEMS as H } from "./seed/hoeren";
import { ITEMS as W } from "./seed/schreiben";
import { ITEMS as S } from "./seed/sprechen";
import { lesenPayloadSchema } from "../src/lib/goethe/tasks/lesen";
import { hoerenPayloadSchema } from "../src/lib/goethe/tasks/hoeren";
import { schreibenPayloadSchema } from "../src/lib/goethe/tasks/schreiben";
import { sprechenPayloadSchema } from "../src/lib/goethe/tasks/sprechen";

type Schema = { safeParse: (v: unknown) => { success: boolean; error?: unknown } };

// One payload schema per module.
function schemaFor(module: string): Schema | null {
  if (module === "LESEN") return lesenPayloadSchema;
  if (module === "HOEREN") return hoerenPayloadSchema;
  if (module === "SCHREIBEN") return schreibenPayloadSchema;
  if (module === "SPRECHEN") return sprechenPayloadSchema;
  return null;
}

const all = [...L, ...H, ...W, ...S];
let bad = 0;
for (const it of all) {
  const sc = schemaFor(it.module as string);
  if (!sc) {
    bad++;
    console.error(`FAIL [${it.module}] ${it.title}: no schema for module`);
    continue;
  }
  const res = sc.safeParse(it.payload);
  if (!res.success) {
    bad++;
    console.error(`FAIL [${it.level} ${it.module}] ${it.title}:`, JSON.stringify(res.error).slice(0, 300));
  }
}
console.log(bad ? `\n${bad} invalid payload(s)` : `All ${all.length} payloads valid ✓`);
process.exit(bad ? 1 : 0);
