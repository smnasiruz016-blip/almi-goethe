// telc Deutsch C1 Hochschule — Hörverstehen, Teil 3. NOTE-TAKING (Notizen ergänzen):
// the learner hears a longer talk and completes a skeleton note sheet, 10 blanks.
// TELC_C1H_HV_T3_NOTIZEN. Five talks → 5 rows, taking HOERVERSTEHEN to 15.
//
// ── THE ZOD-STRIP CELL ──────────────────────────────────────────────────────
// The note sheet is a NEW payload field, `notizen`, declared in objectivePayloadSchema
// (src/lib/exams/tasks.ts). HOERVERSTEHEN is served through the OBJECTIVE path
// (registry SECTION_META kind "objective" → objectivePayloadSchema.parse → deterministic
// lenient scoring), so the field lives on the objective schema, NOT productive. Because
// that schema is a non-strict z.object, an undeclared `notizen` would be silently
// stripped between database and learner with nothing erroring. The assertion at the foot
// of this file runs the REAL schema over every item and refuses to let the seed load if
// the note sheet does not survive parse — the only guard against the strip, exactly as
// warned for segments / bank / themen. Mutation-test: remove `notizen` from the schema
// and this throws.
//
// ── SEGMENT/AUDIO DISCIPLINE ────────────────────────────────────────────────
// The talk is the audioScript (spoken German, one continuous text, order intact). The
// blanks are the objective questions: free-text answers, no options, scored by the
// deterministic lenient match (trim / lowercase / collapse spaces). So every blank is
// authored to a SHORT, UNAMBIGUOUS answer the talk states as a term (a place, a name, a
// material) — never a phrasing the learner has to guess the exact wording of.
//
// Not distribution-gated (the questions carry no answer position), and no verdict to
// balance — but each blank is checked to map to a real question below.
//
// ORIGINALITY (doctrine #1): all talks original to AlmiGoethe. The facts are common
// cultural-historical knowledge, stated plainly; no real institution, living person or
// company is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { objectivePayloadSchema } from "../../../src/lib/exams/tasks";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;

const base = {
  exam: "TELC_C1_HOCHSCHULE" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
  topicTag: "hoerverstehen",
};

/** A note-sheet line: a plain heading/context line (no `a`) or a blank with its
 *  short expected answer (`a`). */
type Note = { text: string; a?: string };

function hvT3(title: string, audioScript: string, notes: Note[]): ExamItemInput {
  const gaps = notes.filter((n) => n.a !== undefined);
  if (gaps.length !== 10) throw new Error(`HV T3 "${title}": expected 10 blanks, got ${gaps.length}`);
  let gi = 0;
  const notizen = notes.map((n) => (n.a !== undefined ? { text: n.text, gap: `q${++gi}` } : { text: n.text }));
  return {
    ...base,
    taskType: "TELC_C1H_HV_T3_NOTIZEN",
    title,
    prompt: "Sie hören einen Vortrag. Ergänzen Sie die Notizen — je ein bis zwei Wörter pro Lücke.",
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Sie hören einen Vortrag, zweimal. Ergänzen Sie die Notizen (1–10). Schreiben Sie zu jeder Lücke ein oder zwei Wörter, so wie sie im Vortrag genannt werden.",
      audioScript,
      notizen,
      questions: gaps.map((g, i) => ({ id: `q${i + 1}`, stem: g.text, answer: g.a as string })),
    },
  };
}

export const ITEMS: ExamItemInput[] = [
  hvT3(
    "Vortrag: Die Geschichte des Kaffees",
    "Guten Tag. Der Kaffee, der heute überall getrunken wird, hat eine lange Geschichte. Seine Heimat ist das Hochland von Äthiopien, wo die Kaffeepflanze wild wuchs. Von dort gelangte sie über die Arabische Halbinsel in die Welt. Auf der Halbinsel, im Jemen, wurde Kaffee erstmals planmäßig angebaut. Die ersten Kaffeehäuser entstanden in der Stadt Mekka; sie wurden rasch zu Orten des Gesprächs. Nach Europa kam das Getränk später, zunächst über die Hafenstadt Venedig. Anfangs war Kaffee teuer und galt als Luxus. Mit der Zeit sank der Preis, und das Getränk verbreitete sich in allen Schichten. In den Kaffeehäusern der Aufklärung trafen sich Gelehrte und tauschten Gedanken aus; man nannte sie deshalb auch Penny Universities, weil ein Gespräch dort nur den Preis einer Tasse kostete. Heute ist Kaffee, gleich nach dem Erdöl, einer der meistgehandelten Rohstoffe der Welt. Der größte Produzent ist inzwischen Brasilien. Trotz aller Beliebtheit bleibt der Anbau anfällig: Schon eine kleine Änderung des Klimas kann die Ernte gefährden.",
    [
      { text: "Vortrag: Die Geschichte des Kaffees" },
      { text: "Ursprungsland der Kaffeepflanze", a: "Äthiopien" },
      { text: "Über welche Halbinsel er sich verbreitete (Adjektiv)", a: "Arabische" },
      { text: "Land des ersten planmäßigen Anbaus", a: "Jemen" },
      { text: "Stadt der ersten Kaffeehäuser", a: "Mekka" },
      { text: "Europäische Hafenstadt der Einfuhr", a: "Venedig" },
      { text: "Anfangs galt Kaffee als", a: "Luxus" },
      { text: "Beiname der Aufklärungs-Kaffeehäuser", a: "Penny Universities" },
      { text: "Meistgehandelter Rohstoff noch vor dem Kaffee", a: "Erdöl" },
      { text: "Größter Produzent heute", a: "Brasilien" },
      { text: "Eine kleine Änderung des … kann die Ernte gefährden", a: "Klimas" },
    ],
  ),

  hvT3(
    "Vortrag: Die Geschichte des Papiers",
    "Papier, wie wir es kennen, wurde vor rund zweitausend Jahren in China erfunden. Als sein Erfinder gilt der Beamte Cai Lun. Zuvor schrieb man in Europa vor allem auf Pergament, das aus Tierhaut hergestellt wurde. Über die Seidenstraße gelangte das Wissen um die Papierherstellung nach Westen. Die Araber lernten es kennen und errichteten in der Stadt Bagdad frühe Papiermühlen. In Europa setzte sich Papier erst spät durch; als erstes europäisches Land stellte Italien es her. Den entscheidenden Schub brachte später der Buchdruck, der große Mengen Papier verlangte. Der wichtigste Rohstoff war lange Zeit alter Stoff, also Lumpen. Erst später lernte man, Papier aus Holz zu gewinnen, was es billig machte. Heute wird zunehmend Altpapier wiederverwertet, um die Wälder zu schonen. Trotz der Digitalisierung ist der weltweite Verbrauch nicht gesunken, sondern gestiegen.",
    [
      { text: "Vortrag: Die Geschichte des Papiers" },
      { text: "Land der Erfindung des Papiers", a: "China" },
      { text: "Name des Erfinders", a: "Cai Lun" },
      { text: "Beschreibstoff in Europa zuvor", a: "Pergament" },
      { text: "Handelsweg der Verbreitung nach Westen", a: "Seidenstraße" },
      { text: "Stadt der frühen Papiermühlen", a: "Bagdad" },
      { text: "Erstes europäisches Herstellerland", a: "Italien" },
      { text: "Erfindung, die viel Papier verlangte", a: "Buchdruck" },
      { text: "Wichtigster Rohstoff früher", a: "Lumpen" },
      { text: "Späterer Rohstoff, der Papier billig machte", a: "Holz" },
      { text: "Was heute wiederverwertet wird", a: "Altpapier" },
    ],
  ),

  hvT3(
    "Vortrag: Die Geschichte der Kartoffel",
    "Die Kartoffel stammt ursprünglich aus Südamerika, genauer aus dem Hochland der Anden. Dort wurde sie schon vor Jahrtausenden von den Ureinwohnern angebaut. Nach Europa brachten sie spanische Seefahrer. Zunächst betrachtete man die Pflanze mit Misstrauen und baute sie eher wegen ihrer Blüten als Zierpflanze an. Erst allmählich erkannte man ihren Wert als Nahrungsmittel. In Preußen förderte der König ihren Anbau, weil sie zuverlässig satt machte und Hungersnöten vorbeugte. Ihr Vorteil ist, dass sie auch auf kargen Böden gedeiht und viel Ertrag liefert. Ihr Nachteil zeigte sich in Irland: Als dort eine Pflanzenkrankheit die Ernte vernichtete, kam es zu einer verheerenden Hungersnot. Heute gehört die Kartoffel weltweit zu den wichtigsten Grundnahrungsmitteln. Der größte Teil der Welternte wird inzwischen in Asien geerntet.",
    [
      { text: "Vortrag: Die Geschichte der Kartoffel" },
      { text: "Herkunftskontinent der Kartoffel", a: "Südamerika" },
      { text: "Gebirge ihrer Herkunft", a: "Anden" },
      { text: "Welche Seefahrer sie nach Europa brachten (Adjektiv)", a: "spanische" },
      { text: "Wozu man sie in Europa zuerst anbaute", a: "Zierpflanze" },
      { text: "Land, dessen König den Anbau förderte", a: "Preußen" },
      { text: "Auf welchen Böden sie gedeiht", a: "kargen" },
      { text: "Land der Hungersnot durch Ernteausfall", a: "Irland" },
      { text: "Ursache des Ausfalls dort", a: "Pflanzenkrankheit" },
      { text: "Was sie heute weltweit ist", a: "Grundnahrungsmittel" },
      { text: "Kontinent der größten Ernte heute", a: "Asien" },
    ],
  ),

  hvT3(
    "Vortrag: Der Buchdruck",
    "Der Buchdruck mit beweglichen Lettern wurde in der Stadt Mainz entwickelt. Als sein Erfinder gilt Johannes Gutenberg. Vor ihm wurden Bücher mühsam von Hand abgeschrieben, meist in Klöstern. Ein einziges Buch konnte so Monate dauern. Gutenbergs Verfahren erlaubte es, Seiten aus einzelnen Buchstaben aus Metall zusammenzusetzen und vielfach zu drucken. Sein berühmtestes Werk ist eine gedruckte Bibel. Die Erfindung verbreitete sich rasch über Europa und senkte den Preis für Bücher erheblich. Damit wurde Wissen für viele Menschen zugänglich. Historiker sehen im Buchdruck eine Voraussetzung für die Reformation, weil Schriften nun schnell verbreitet werden konnten. Auch für die Wissenschaft war er entscheidend, da Ergebnisse genau und unverändert weitergegeben werden konnten. Man zählt den Buchdruck deshalb zu den folgenreichsten Erfindungen der Geschichte.",
    [
      { text: "Vortrag: Der Buchdruck" },
      { text: "Stadt der Entwicklung", a: "Mainz" },
      { text: "Erfinder (Nachname)", a: "Gutenberg" },
      { text: "Wo Bücher zuvor abgeschrieben wurden", a: "Klöstern" },
      { text: "Material der einzelnen Buchstaben", a: "Metall" },
      { text: "Berühmtestes gedrucktes Werk", a: "Bibel" },
      { text: "Religiöse Bewegung, die er begünstigte", a: "Reformation" },
      { text: "Weiterer Bereich, für den er entscheidend war", a: "Wissenschaft" },
      { text: "Wie Ergebnisse weitergegeben werden konnten", a: "unverändert" },
      { text: "Bücher wurden vor ihm abgeschrieben — von …", a: "Hand" },
      { text: "Einordnung: eine der … Erfindungen", a: "folgenreichsten" },
    ],
  ),

  hvT3(
    "Vortrag: Die Geschichte der Zeitmessung",
    "Schon in der Antike suchten Menschen nach Wegen, die Zeit zu messen. Eine der ältesten Methoden war die Sonnenuhr, die den Schattenwurf nutzt. Ihr Nachteil liegt auf der Hand: Bei Nacht und bei bewölktem Himmel versagt sie. Deshalb erfand man die Wasseruhr, bei der die Zeit am Ablauf von Wasser abgelesen wird. Später entstanden die ersten mechanischen Uhren, die man in Kirchtürmen aufstellte. Sie hatten zunächst nur einen Zeiger, nämlich für die Stunde. Der Minutenzeiger kam erst danach hinzu. Eine große Verbesserung brachte das Pendel, das den Gang der Uhr viel genauer machte. Mit der Zeit wurden Uhren kleiner, bis man sie schließlich am Handgelenk tragen konnte. Die genauesten Uhren von heute beruhen nicht mehr auf Mechanik, sondern auf den Schwingungen von Atomen. Sie gehen so genau, dass sie in Millionen Jahren kaum eine Sekunde abweichen.",
    [
      { text: "Vortrag: Die Geschichte der Zeitmessung" },
      { text: "Älteste Methode (nutzt Schatten)", a: "Sonnenuhr" },
      { text: "Was die Sonnenuhr nutzt", a: "Schattenwurf" },
      { text: "Bei welchem Himmel sie versagt", a: "bewölktem" },
      { text: "Uhr, die den Ablauf von Wasser nutzt", a: "Wasseruhr" },
      { text: "Wo die ersten mechanischen Uhren standen", a: "Kirchtürmen" },
      { text: "Wofür der erste Zeiger war", a: "Stunde" },
      { text: "Welcher Zeiger später hinzukam", a: "Minutenzeiger" },
      { text: "Erfindung, die den Gang genauer machte", a: "Pendel" },
      { text: "Wo man kleine Uhren schließlich trug", a: "Handgelenk" },
      { text: "Grundlage der genauesten Uhren heute", a: "Atomen" },
    ],
  ),
];

// ── ASSERT THE NOTE SHEET SURVIVES PARSE (the only guard against the Zod-strip) ──
// Run the REAL objectivePayloadSchema over every item's payload. If `notizen` were not
// declared on the schema, .safeParse would strip it and pickClientItem would ship a
// note-taking item with no note sheet — no gate would notice. This refuses to load the
// seed in that case, and also checks each blank maps to a real question.
(function assertNotizenSurvivesParse() {
  for (const it of ITEMS) {
    const parsed = objectivePayloadSchema.safeParse(it.payload);
    if (!parsed.success) {
      throw new Error(`HV T3 "${it.title}": payload fails objective schema — ${parsed.error.issues[0]?.message}`);
    }
    const declared = (it.payload as { notizen?: unknown[] }).notizen ?? [];
    const survived = (parsed.data as { notizen?: unknown[] }).notizen ?? [];
    if (survived.length !== declared.length || survived.length === 0) {
      throw new Error(
        `HV T3 "${it.title}": notizen did not survive parse (declared ${declared.length}, got ${survived.length}) — is the field declared on objectivePayloadSchema?`,
      );
    }
    const qids = new Set(parsed.data.questions.map((q) => q.id));
    for (const line of survived as { gap?: string }[]) {
      if (line.gap && !qids.has(line.gap)) {
        throw new Error(`HV T3 "${it.title}": note blank ${line.gap} maps to no question`);
      }
    }
  }
})();
