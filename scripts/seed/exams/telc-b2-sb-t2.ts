// telc Deutsch B2 — Sprachbausteine, Teil 2 (Wortschatz aus einer Wortliste).
//
// OFFICIAL CELL: 10 gaps in one text, shared word bank a–o (15 words; 5 left over,
// each word usable at most once). Eight instances — SB has two Teile and the rule7
// floor is ≥15 per section, so ~8 per Teil. A floor, not a quota.
//
// ── WHY THIS IS THE HIGHEST DOUBLE-ANSWER RISK IN THE EXAM ─────────────────
// Teil 1 gaps are grammatical: case, connector, verb form. Wrongness there is a RULE,
// so a second correct option is rare and provable. Teil 2 gaps are LEXICAL, and
// lexical fit is a gradient — two nouns of the same gender can both be grammatical in
// a slot and one merely reads oddly. That is the whole defect: the mechanical gates
// see a valid id in the bank and pass. Only reading each gap against all fifteen
// words catches it. Stage A's Teil 1 surfaced thirteen such defects that way, and its
// gaps were the EASY kind.
//
// Two rules were applied while writing, both aimed at that:
//   1. Every key is fixed by a COLLOCATION or a unique referent, not by register —
//      "einen Antrag stellen", "Rücksicht nehmen", "Bescheid geben". A gap whose
//      answer is merely the most natural of several possible words is rewritten.
//   2. Distractors are semantically FAR, not near-synonyms. The temptation is to add
//      a close word to raise difficulty; that is precisely how a second correct
//      answer gets in. Difficulty comes from the fifteen-word field, not from
//      shading two words together.
//
// Same-gender nouns were then re-checked ACROSS gaps: wherever two gaps take the same
// article, each key was tested in the other's slot, because a bank word may be used
// only once and a solver will try exactly that substitution.
//
// ORIGINALITY (doctrine #1): all texts original. Ordinary workplace and tenancy
// notices; no real company, authority or person named, no invented facts about the
// world, no prices or addresses.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B2;
const LETTERS = "abcdefghijklmno".split("");

const base = {
  exam: "TELC_B2" as const,
  level: L,
  section: SECTION.SPRACHBAUSTEINE,
  difficulty: "CORE" as const,
  taskType: "TELC_B2_SB_T2_WORTSCHATZ",
  prompt: "Lesen Sie den Text und füllen Sie die Lücken mit den passenden Wörtern aus der Liste.",
  topicTag: "wortschatz",
  timeLimitSeconds: 600,
};

const INSTR =
  "Ordnen Sie jeder Lücke (1–10) ein Wort aus der Liste (a–o) zu. Nicht alle Wörter passen; jedes Wort kann höchstens einmal verwendet werden.";

// ── WHY THE BANK IS SHUFFLED, NOT AUTHORED IN ORDER ────────────────────────
// Authored naturally, the ten answers get listed first and the five distractors last.
// The bank then reads a–j = always correct, k–o = never correct, and gap N keys to
// letter N. A solver never has to read the distractors at all. That is the Zuordnung
// form of the defect this whole restructure exists to remove ("option a correct 94%",
// "c never correct") — and NO mechanical gate sees it, because every key is a valid
// bank id and the format is right.
//
// So the bank is permuted DETERMINISTICALLY from the title (same FNV-1a + mulberry
// mix as _permute.ts). Deterministic because the seeder compares payloads: a random
// shuffle would rewrite every row on every deploy and the reconcile diff would never
// be empty. Word choice and correctness are untouched — only which letter each word
// sits under.
function seedFrom(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffle<T>(arr: T[], seedStr: string): T[] {
  const out = arr.slice();
  let a = seedFrom(seedStr);
  for (let i = out.length - 1; i > 0; i--) {
    a = (Math.imul(a ^ (a >>> 15), 1 | a) + 0x6d2b79f5) >>> 0;
    const j = a % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** words = the 15 bank words (any order); keys = the word chosen for gaps 1..10. */
function item(title: string, passage: string, words: string[], keys: string[]): ExamItemInput {
  if (words.length !== 15) throw new Error(`${title}: bank is 15 words, got ${words.length}`);
  if (keys.length !== 10) throw new Error(`${title}: Teil 2 has 10 gaps, got ${keys.length}`);
  if (new Set(words).size !== 15) throw new Error(`${title}: duplicate word in the bank`);
  for (let i = 1; i <= 10; i++) {
    if (!passage.includes(`(${i})`)) throw new Error(`${title}: passage has no marker (${i})`);
  }
  const ordered = shuffle(words, title);
  const bank = ordered.map((text, i) => ({ id: LETTERS[i], text }));
  const ids = keys.map((w) => {
    const i = ordered.indexOf(w);
    if (i < 0) throw new Error(`${title}: key "${w}" is not in the bank`);
    return LETTERS[i];
  });
  const reused = ids.filter((k, i) => ids.indexOf(k) !== i);
  if (reused.length) throw new Error(`${title}: word(s) used twice — ${[...new Set(reused)].join(", ")}`);
  // Spread. The weak version of this check ("not all in the first half") passed the
  // very defect it was meant to catch — ten keys on a–j with the distractors parked on
  // k–o. Both real conditions are asserted instead:
  //   1. the keys must not BE the first ten letters (distractors interleaved), and
  //   2. gap N must not simply key to letter N (no positional giveaway).
  const firstTen = LETTERS.slice(0, 10);
  if (ids.every((k) => firstTen.includes(k))) {
    throw new Error(`${title}: all 10 keys sit on a–j — the distractors are parked at the end and never need reading`);
  }
  const positional = ids.filter((k, i) => k === LETTERS[i]).length;
  if (positional >= 5) throw new Error(`${title}: ${positional}/10 gaps key to their own position letter`);
  return {
    ...base,
    title,
    payload: {
      instructions: INSTR,
      passage,
      bank,
      questions: ids.map((id, i) => ({ id: `l${i + 1}`, stem: `Lücke ${i + 1}`, answer: id })),
    },
  };
}

const RAW_ITEMS: ExamItemInput[] = [
  item(
    "Rundschreiben: Neue Regeln für Dienstreisen",
    "Sehr geehrte Kolleginnen und Kollegen,\n\nab dem kommenden Monat gelten neue Regeln für Dienstreisen. Wer eine Reise plant, muss vorher einen (1) stellen. Die Genehmigung (2) in der Regel innerhalb von drei Tagen. Belege müssen im Original (3) werden, sonst kann die Abrechnung nicht bearbeitet werden. Übernachtungen werden bis zu einem festen (4) erstattet. Für Mahlzeiten gilt eine (5), die sich nach der Dauer der Reise richtet. Wer mit dem eigenen Auto fährt, erhält eine Vergütung pro (6). Bitte tragen Sie Ihre Termine rechtzeitig in den gemeinsamen (7) ein, damit die (8) im Team geregelt werden kann. Bei Rückfragen wenden Sie sich an die (9) der Verwaltung. Wir bitten um (10) für die zusätzlichen Schritte.",
    ["Antrag", "erfolgt", "eingereicht", "Betrag", "Pauschale", "Kilometer", "Kalender", "Vertretung", "Leitung", "Verständnis", "Werbung", "Umleitung", "verschoben", "Umfrage", "Ausrüstung"],
    ["Antrag", "erfolgt", "eingereicht", "Betrag", "Pauschale", "Kilometer", "Kalender", "Vertretung", "Leitung", "Verständnis"],
  ),

  item(
    "Mitteilung: Umstellung der Ablage",
    "Liebe Kolleginnen und Kollegen,\n\nunsere Unterlagen werden bis zum Jahresende vollständig digital (1). Papierakten, die älter als zehn Jahre sind, werden nach Ablauf der gesetzlichen (2) vernichtet. Alle übrigen Dokumente werden eingescannt und mit einem eindeutigen (3) versehen, damit sie später wiedergefunden werden können. Wer ein Dokument nicht zuordnen kann, gibt bitte der Registratur (4). Der Zugriff auf sensible Ordner wird künftig über eine persönliche (5) geregelt. Bitte geben Sie diese unter keinen Umständen (6). Die Schulung dazu dauert etwa zwei Stunden und findet in kleinen (7) statt. Im ersten Monat rechnen wir mit einem erhöhten (8), danach sollte die Arbeit deutlich schneller gehen. Über den genauen (9) informieren wir Sie kommende Woche. Für Ihre (10) bedanken wir uns schon jetzt.",
    ["erfasst", "Frist", "Kennzeichen", "Bescheid", "Kennung", "weiter", "Gruppen", "Aufwand", "Zeitplan", "Mitarbeit", "Bahnsteig", "gestrichen", "Ernte", "Werkzeug", "Miete"],
    ["erfasst", "Frist", "Kennzeichen", "Bescheid", "Kennung", "weiter", "Gruppen", "Aufwand", "Zeitplan", "Mitarbeit"],
  ),

  item(
    "Aushang: Nutzung der Gemeinschaftsräume",
    "Liebe Mieterinnen und Mieter,\n\nfür die Gemeinschaftsräume im Erdgeschoss gelten ab sofort klare Regeln. Wer einen Raum nutzen möchte, trägt sich bitte vorher in die (1) am schwarzen Brett ein. Die Räume stehen werktags bis zweiundzwanzig Uhr zur (2). Nach der Nutzung ist jeder für die (3) selbst zuständig; Geschirr gehört gespült in den Schrank zurück. Auf die Nachbarn ist besonders am Abend (4) zu nehmen. Wer Möbel umstellt, bringt sie anschließend in die ursprüngliche (5) zurück. Schäden melden Sie bitte umgehend der (6). Für private Feiern ist eine schriftliche (7) erforderlich. Die Schlüssel werden gegen eine (8) ausgegeben, die Sie bei der Rückgabe zurückerhalten. Zigaretten sind in allen Räumen (9). Wir hoffen auf ein rücksichtsvolles (10).",
    ["Liste", "Verfügung", "Reinigung", "Rücksicht", "Ordnung", "Verwaltung", "Erlaubnis", "Kaution", "verboten", "Miteinander", "Ladung", "Ernte", "Werbung", "gemessen", "Auswahl"],
    ["Liste", "Verfügung", "Reinigung", "Rücksicht", "Ordnung", "Verwaltung", "Erlaubnis", "Kaution", "verboten", "Miteinander"],
  ),

  item(
    "Information: Krankmeldung und Urlaub",
    "Liebe Beschäftigte,\n\nzur Krankmeldung gilt weiterhin: Wer erkrankt, gibt der Führungskraft noch am selben Morgen (1). Ab dem vierten Tag ist eine ärztliche (2) vorzulegen. Diese kann auch elektronisch übermittelt werden. Wer im Urlaub erkrankt, kann die betroffenen Tage nachträglich (3) lassen, sofern ein Attest vorliegt. Urlaub wird grundsätzlich im Voraus (4) und in Absprache mit dem Team geplant. Reste aus dem Vorjahr (5) am einunddreißigsten März. Bei mehreren Wünschen für denselben Zeitraum entscheidet in erster (6) die betriebliche Notwendigkeit. Für längere Abwesenheiten ist eine geregelte (7) erforderlich. Bitte hinterlegen Sie rechtzeitig eine (8) in Ihrem Mailprogramm. Die genauen Regelungen finden Sie in der aktuellen (9). Bei Fragen steht Ihnen die Personalabteilung zur (10).",
    ["Bescheid", "Bescheinigung", "gutschreiben", "beantragt", "verfallen", "Linie", "Übergabe", "Abwesenheitsnotiz", "Betriebsvereinbarung", "Seite", "Ernte", "Werkstatt", "gestrichen", "Umleitung", "Auswahl"],
    ["Bescheid", "Bescheinigung", "gutschreiben", "beantragt", "verfallen", "Linie", "Übergabe", "Abwesenheitsnotiz", "Betriebsvereinbarung", "Seite"],
  ),

  item(
    "Rundmail: Sicherheit in der Werkstatt",
    "Liebe Kolleginnen und Kollegen,\n\nnach der letzten Begehung möchten wir an einige Punkte (1). Schutzbrille und Handschuhe sind in der gesamten Werkstatt (2) zu tragen, auch bei kurzen Arbeiten. Maschinen dürfen nur bedienen, wer dafür eine gültige (3) besitzt. Defekte Geräte werden sofort außer (4) genommen und deutlich gekennzeichnet. Die Fluchtwege sind jederzeit frei zu (5); dort abgestellte Kartons werden ohne Ankündigung entfernt. Jede Verletzung, auch eine kleine, gehört ins (6). Der Verbandskasten hängt neben der Tür und wird monatlich (7). An der Wand finden Sie einen (8) mit den wichtigsten Notrufnummern. Die jährliche (9) ist für alle verpflichtend. Wir zählen auf Ihre (10).",
    ["erinnern", "durchgehend", "Unterweisung", "Betrieb", "halten", "Verbandbuch", "geprüft", "Aushang", "Schulung", "Aufmerksamkeit", "Ernte", "Miete", "gestrichen", "Werbung", "Auswahl"],
    ["erinnern", "durchgehend", "Unterweisung", "Betrieb", "halten", "Verbandbuch", "geprüft", "Aushang", "Schulung", "Aufmerksamkeit"],
  ),

  item(
    "Mitteilung: Die neue Kundenhotline",
    "Liebe Kolleginnen und Kollegen,\n\nab Montag läuft die Kundenhotline über ein neues System. Anrufe werden künftig automatisch an die zuständige (1) verteilt. Wer ein Gespräch nicht abschließen kann, leitet es intern (2). Jedes Gespräch wird mit einer kurzen (3) im System dokumentiert; ohne diese lässt sich der Vorgang später nicht nachvollziehen. Beschwerden erhalten grundsätzlich (4) vor allen anderen Anliegen. Wenn eine Rückmeldung länger dauert, nennen Sie der Kundin oder dem Kunden bitte einen realistischen (5). Versprechen Sie niemals eine (6), die Sie nicht halten können. Die durchschnittliche (7) soll unter zwei Minuten liegen, ohne dass die Beratung darunter leidet. Wer unsicher ist, holt sich Unterstützung bei der (8). In der ersten Woche steht das Projektteam durchgehend zur (9). Für Ihre (10) in dieser Umstellungsphase danken wir Ihnen.",
    ["Abteilung", "weiter", "Notiz", "Vorrang", "Termin", "Lösung", "Wartezeit", "Teamleitung", "Verfügung", "Geduld", "Ernte", "Werkzeug", "gestrichen", "Umleitung", "Auswahl"],
    ["Abteilung", "weiter", "Notiz", "Vorrang", "Termin", "Lösung", "Wartezeit", "Teamleitung", "Verfügung", "Geduld"],
  ),

  item(
    "Aushang: Fahrradkeller und Diebstahlschutz",
    "Liebe Hausgemeinschaft,\n\nim Fahrradkeller ist es in den letzten Monaten zu mehreren (1) gekommen. Wir bitten alle, ihr Rad zusätzlich an den Bügeln zu (2). Ein einfaches Zahlenschloss bietet erfahrungsgemäß wenig (3). Notieren Sie sich die (4) Ihres Rahmens; ohne diese Angabe kann die Polizei ein Fahrrad kaum (5). Räder, die erkennbar seit Jahren nicht bewegt wurden, werden nach einer (6) von vier Wochen entfernt. Ein entsprechender Hinweis wird vorher am Rad (7). Der Keller wird in den nächsten Wochen mit einer besseren (8) ausgestattet. Der Zugang bleibt weiterhin nur mit dem Hausschlüssel (9). Wir hoffen, dass sich die Lage damit deutlich (10).",
    ["Diebstählen", "sichern", "Schutz", "Nummer", "zuordnen", "Frist", "angebracht", "Beleuchtung", "möglich", "bessert", "Ernte", "Miete", "gestrichen", "Werbung", "Auswahl"],
    ["Diebstählen", "sichern", "Schutz", "Nummer", "zuordnen", "Frist", "angebracht", "Beleuchtung", "möglich", "bessert"],
  ),

  item(
    "Information: Weiterbildung und Bildungsurlaub",
    "Liebe Beschäftigte,\n\nwer sich weiterbilden möchte, kann dafür Bildungsurlaub in (1) nehmen. Der Anspruch beträgt fünf Tage im Jahr und muss spätestens sechs Wochen vorher schriftlich (2) werden. Der Kurs muss von einer anerkannten Einrichtung (3) sein. Nach dem Kurs reichen Sie bitte eine (4) über die Teilnahme ein. Die Kosten übernimmt der Betrieb bis zu einer festgelegten (5); darüber hinaus ist eine Beteiligung möglich, wenn der Kurs unmittelbar dem (6) dient. Bitte klären Sie den Termin vorher mit Ihrem Team ab, damit es nicht zu (7) kommt. Wer eine längere Qualifizierung plant, sollte frühzeitig das (8) mit der Führungskraft suchen. Eine Übersicht über geförderte Angebote hängt im (9) aus. Wir unterstützen Weiterbildung ausdrücklich und freuen uns über Ihre (10).",
    ["Anspruch", "beantragt", "anerkannt", "Bestätigung", "Obergrenze", "Arbeitsbereich", "Engpässen", "Gespräch", "Flur", "Initiative", "Ernte", "Werkzeug", "gestrichen", "Umleitung", "Auswahl"],
    ["Anspruch", "beantragt", "anerkannt", "Bestätigung", "Obergrenze", "Arbeitsbereich", "Engpässen", "Gespräch", "Flur", "Initiative"],
  ),
];

// No deGame: the ten gaps run in text order and a Zuordnung's spread is a property of
// WHICH bank letters the keys land on, not of question order — reordering the gaps
// would detach them from the passage exactly as it would for the Ansagen in HV Teil 3.
export const ITEMS: ExamItemInput[] = RAW_ITEMS;
