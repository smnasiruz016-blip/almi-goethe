// telc Deutsch C1 Hochschule — Leseverstehen, Teil 3. Two Aufgaben over ONE text:
//   TELC_C1H_LV_T3_RFN — 11 statements, each richtig / falsch / nicht im Text
//   TELC_C1H_LV_T3_MC  — 1 statement, best-title Mehrfachauswahl (a/b/c)
// (handbook: 12 items = 11 RFN + 1 MC; encoded as two Aufgaben so each answerFormat
// stays honest — see exam-structure.ts). Four texts → 4 RFN rows + 4 title rows.
//
// ── THE RFN DOUBLE-ANSWER CLASS (the "nicht im Text" trap) ──────────────────
// The three-way verdict is the format the repo has nowhere else, and its failure mode
// is specific: a statement is keyed "nicht im Text" but is in fact inferable-true from
// what the text DOES say — so a careful reader can defend BOTH "richtig" and "nicht im
// Text". Defence here:
//   • richtig  — the text states it (verbatim or clear paraphrase).
//   • falsch   — the text CONTRADICTS it (says the opposite), never merely omits it.
//   • nicht im Text — an ABSENT TOPIC the passage does not touch and that cannot be
//                     inferred from it (coffee, dreams, price, gender, meditation…),
//                     not an unmentioned-but-derivable detail. "Unmentioned" is not the
//                     test; "undecidable from the text" is.
//
// ── BALANCE IS AUTHORED, NOT DE-GAMED ──────────────────────────────────────
// The verdict is r/f/n, not an a/b/c position, so deGame has nothing to permute. The
// three verdicts are authored across the cell and asserted at seed time: every verdict
// present, none past 60% of the pooled statements, no item uniform. The RFN statements
// are order-bound to the text (they follow its flow), so nothing is reordered.
//
// ORIGINALITY (doctrine #1): all texts original to AlmiGoethe. No real institution,
// person, company or product is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;
const RFN = [
  { id: "r", text: "richtig" },
  { id: "f", text: "falsch" },
  { id: "n", text: "nicht im Text" },
];

const base = {
  exam: "TELC_C1_HOCHSCHULE" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
  topicTag: "leseverstehen",
};

type V = "r" | "f" | "n";
type St = { s: string; a: V };

function rfn(title: string, passage: string, sts: St[]): ExamItemInput {
  if (sts.length !== 11) throw new Error(`LV T3 RFN "${title}": expected 11 statements, got ${sts.length}`);
  if (new Set(sts.map((x) => x.a)).size < 2) throw new Error(`LV T3 RFN "${title}": verdict sequence is uniform`);
  return {
    ...base,
    taskType: "TELC_C1H_LV_T3_RFN",
    title,
    prompt: "Lesen Sie den Text. Entscheiden Sie für jede Aussage: richtig, falsch oder nicht im Text.",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Kreuzen Sie für jede Aussage (1–11) an: richtig, falsch oder nicht im Text.",
      passage,
      questions: sts.map((x, i) => ({ id: `q${i + 1}`, stem: x.s, options: RFN, answer: x.a })),
    },
  };
}

function titleMc(title: string, passage: string, opts: [string, string, string], answer: "a" | "b" | "c"): ExamItemInput {
  return {
    ...base,
    taskType: "TELC_C1H_LV_T3_MC",
    title,
    prompt: "Lesen Sie den Text und wählen Sie die passende Überschrift.",
    timeLimitSeconds: 180,
    payload: {
      instructions: "Welche Überschrift fasst den Text am besten zusammen? Wählen Sie a, b oder c.",
      passage,
      questions: [
        {
          id: "q1",
          stem: "Welche Überschrift passt am besten zum ganzen Text?",
          options: opts.map((text, i) => ({ id: (["a", "b", "c"] as const)[i], text })),
          answer,
        },
      ],
    },
  };
}

// ── TEXT 1 — Schlaf und Lernen ──────────────────────────────────────────────
const P1 =
  "Lange galt Schlaf als ein Zustand der Untätigkeit, in dem das Gehirn ruht. Die Forschung hat dieses Bild grundlegend verändert. Während wir schlafen, ordnet das Gehirn die Eindrücke des Tages und überführt Wichtiges vom Kurzzeit- ins Langzeitgedächtnis. Besonders die Tiefschlafphasen spielen dabei eine Rolle. Studien zeigen, dass Menschen, die nach dem Lernen ausreichend schlafen, sich den Stoff besser merken als jene, die wach bleiben. Auch das Lösen von Problemen fällt nach einer durchschlafenen Nacht oft leichter; manche Einfälle stellen sich erst am Morgen ein. Wer dagegen dauerhaft zu wenig schläft, büßt an Konzentration ein und macht mehr Fehler. Wie viel Schlaf ein Mensch genau braucht, ist individuell verschieden und hängt auch vom Alter ab. Klar ist jedoch, dass Schlaf keine verlorene Zeit ist, sondern eine aktive Leistung des Gehirns.";

// ── TEXT 2 — Die Wiederentdeckung des Lastenrads ───────────────────────────
const P2 =
  "Das Lastenrad ist keine Erfindung der Gegenwart. Schon vor hundert Jahren transportierten Händler ihre Waren damit durch die Städte. Mit der Verbreitung des Autos geriet es jedoch weitgehend in Vergessenheit. In den letzten Jahren erlebt das Lastenrad eine Rückkehr. In vielen Städten nutzen Familien es, um Kinder und Einkäufe zu befördern, und immer mehr Betriebe stellen Lieferungen darauf um. Der Grund ist nicht allein das Umweltbewusstsein. In dichten Innenstädten ist das Rad oft schlicht schneller als der Lieferwagen, weil es Staus umfährt und näher an das Ziel gelangt. Einige Kommunen fördern die Anschaffung mit Zuschüssen. Kritiker geben zu bedenken, dass Lastenräder viel Abstellplatz beanspruchen und bei Regen unpraktisch seien. Für schwere oder weite Transporte bleibt das Auto überlegen. Dennoch dürfte das Lastenrad im städtischen Verkehr künftig eine größere Rolle spielen.";

// ── TEXT 3 — Mehr als ein Ritual: das Vorlesen ─────────────────────────────
const P3 =
  "Vorlesen gilt vielen als überholtes Ritual aus einer Zeit ohne Bildschirme. Die Forschung sieht das anders. Kinder, denen regelmäßig vorgelesen wird, verfügen im Schnitt über einen größeren Wortschatz und tun sich später mit dem eigenen Lesen leichter. Der Grund liegt nicht nur in den Wörtern selbst. Beim Vorlesen entsteht eine ruhige, zugewandte Situation, in der das Kind Fragen stellen darf und Aufmerksamkeit erfährt. Diese Erfahrung verbindet das Lesen mit etwas Angenehmem. Wichtig ist dabei weniger die Menge als die Regelmäßigkeit. Schon zehn Minuten am Tag genügen, wenn sie verlässlich stattfinden. Auch Kinder, die schon selbst lesen können, profitieren weiter, weil ihnen so Texte zugänglich werden, die sie allein noch nicht bewältigen. Fachleute empfehlen, das Kind mitwählen zu lassen, welches Buch an die Reihe kommt.";

// ── TEXT 4 — Der Nutzen des Nichtstuns ─────────────────────────────────────
const P4 =
  "In einer Kultur, die Geschäftigkeit belohnt, hat das Nichtstun einen schlechten Ruf. Wer eine Pause macht, fühlt sich leicht schuldig. Dabei ist Muße keine vergeudete Zeit. Das Gehirn ist auch dann aktiv, wenn wir scheinbar nichts tun; in solchen Momenten verknüpft es Gedanken auf neue Weise. Viele kennen die Erfahrung, dass ein Einfall gerade dann kommt, wenn man nicht angestrengt darüber nachdenkt, etwa beim Spazierengehen. Ununterbrochene Beschäftigung dagegen kann die Kreativität sogar hemmen. Auch die Erholung leidet, wenn jede freie Minute gefüllt wird. Fachleute raten deshalb, bewusst Leerlauf zuzulassen, ohne ihn sofort mit dem Blick auf das Handy zu überbrücken. Das fällt vielen schwer, weil sie Stille als unangenehm empfinden. Doch gerade das Aushalten von Langeweile kann fruchtbar sein.";

export const ITEMS: ExamItemInput[] = [
  rfn("Schlaf und Lernen — Aussagen", P1, [
    { s: "Früher hielt man den Schlaf für einen Zustand der Untätigkeit.", a: "r" },
    { s: "Im Schlaf überführt das Gehirn Wichtiges ins Langzeitgedächtnis.", a: "r" },
    { s: "Laut Text spielen die Tiefschlafphasen dabei keine Rolle.", a: "f" },
    { s: "Wer nach dem Lernen ausreichend schläft, merkt sich den Stoff besser.", a: "r" },
    { s: "Kaffee am Nachmittag verkürzt den Schlaf.", a: "n" },
    { s: "Zu wenig Schlaf verbessert die Konzentration.", a: "f" },
    { s: "Manche Einfälle stellen sich erst am Morgen ein.", a: "r" },
    { s: "Ältere Menschen träumen weniger als jüngere.", a: "n" },
    { s: "Der Schlafbedarf ist bei allen Menschen gleich hoch.", a: "f" },
    { s: "Zu wenig Schlaf führt laut Text zu weniger Fehlern.", a: "f" },
    { s: "Wer im Dunkeln schläft, erholt sich besser.", a: "n" },
  ]),
  titleMc("Schlaf und Lernen — Überschrift", P1,
    ["Warum Träume uns Rätsel aufgeben", "Schlaf als aktive Leistung des Gehirns", "Die ideale Schlafdauer in Zahlen"], "b"),

  rfn("Das Lastenrad — Aussagen", P2, [
    { s: "Das Lastenrad ist eine Erfindung der Gegenwart.", a: "f" },
    { s: "Vor hundert Jahren transportierten Händler damit Waren.", a: "r" },
    { s: "Mit der Verbreitung des Autos geriet es in Vergessenheit.", a: "r" },
    { s: "Das erste Lastenrad wurde in Deutschland gebaut.", a: "n" },
    { s: "Kein Betrieb nutzt Lastenräder für seine Lieferungen.", a: "f" },
    { s: "Der einzige Grund für die Rückkehr ist das Umweltbewusstsein.", a: "f" },
    { s: "In dichten Innenstädten ist das Rad oft schneller als der Lieferwagen.", a: "r" },
    { s: "Lastenräder sind teurer als gewöhnliche Fahrräder.", a: "n" },
    { s: "Kritiker halten Lastenräder bei Regen für besonders praktisch.", a: "f" },
    { s: "Die meisten Lastenräder haben einen Elektromotor.", a: "n" },
    { s: "Für schwere Transporte bleibt das Auto überlegen.", a: "r" },
  ]),
  titleMc("Das Lastenrad — Überschrift", P2,
    ["Die Geschichte des Fahrrads", "Warum das Auto unverzichtbar bleibt", "Das Lastenrad kehrt in die Städte zurück"], "c"),

  rfn("Das Vorlesen — Aussagen", P3, [
    { s: "Die Forschung hält das Vorlesen für ein überholtes Ritual.", a: "f" },
    { s: "Kinder, denen vorgelesen wird, haben im Schnitt einen größeren Wortschatz.", a: "r" },
    { s: "Sie tun sich später mit dem eigenen Lesen leichter.", a: "r" },
    { s: "Mädchen profitieren stärker vom Vorlesen als Jungen.", a: "n" },
    { s: "Beim Vorlesen darf das Kind Fragen stellen.", a: "r" },
    { s: "Wichtiger als die Regelmäßigkeit ist die Menge des Vorlesens.", a: "f" },
    { s: "Erst eine Stunde Vorlesen am Tag zeigt laut Text eine Wirkung.", a: "f" },
    { s: "Auch Kinder, die selbst lesen können, profitieren weiter.", a: "r" },
    { s: "Digitale Hörbücher wirken ebenso gut wie das Vorlesen.", a: "n" },
    { s: "Fachleute raten davon ab, das Kind das Buch wählen zu lassen.", a: "f" },
    { s: "Vorlesen erleichtert auch das Erlernen einer Fremdsprache.", a: "n" },
  ]),
  titleMc("Das Vorlesen — Überschrift", P3,
    ["Warum Vorlesen Kindern nützt", "Der Niedergang des gedruckten Buches", "Wie man schneller lesen lernt"], "a"),

  rfn("Der Nutzen des Nichtstuns — Aussagen", P4, [
    { s: "In einer Kultur, die Geschäftigkeit belohnt, hat Nichtstun einen schlechten Ruf.", a: "r" },
    { s: "Laut Text ist Muße vergeudete Zeit.", a: "f" },
    { s: "Das Gehirn ist auch in Ruhephasen aktiv.", a: "r" },
    { s: "Erwachsene brauchen mehr Muße als Kinder.", a: "n" },
    { s: "Manche Einfälle kommen beim Spazierengehen.", a: "r" },
    { s: "Ununterbrochene Beschäftigung fördert die Kreativität.", a: "f" },
    { s: "Ein kurzer Mittagsschlaf steigert die Kreativität.", a: "n" },
    { s: "Fachleute raten davon ab, bewusst Leerlauf zuzulassen.", a: "f" },
    { s: "Vielen fällt es leicht, Stille auszuhalten.", a: "f" },
    { s: "Meditation ist die wirksamste Form der Muße.", a: "n" },
    { s: "Das Aushalten von Langeweile kann fruchtbar sein.", a: "r" },
  ]),
  titleMc("Der Nutzen des Nichtstuns — Überschrift", P4,
    ["Techniken der Meditation", "Warum Pausen ein schlechtes Gewissen machen", "Muße ist keine vergeudete Zeit"], "c"),
];

// ── LV T3: authored verdict/position balance, ASSERTED across each cell ──────
(function assertLvT3Balance() {
  // RFN: pool all richtig/falsch/nicht-im-Text verdicts; each present, none > 60%.
  const rfnItems = ITEMS.filter((it) => it.taskType === "TELC_C1H_LV_T3_RFN");
  const c: Record<string, number> = { r: 0, f: 0, n: 0 };
  let total = 0;
  for (const it of rfnItems) {
    for (const q of (it.payload as { questions: { answer: string }[] }).questions) {
      c[q.answer] = (c[q.answer] ?? 0) + 1;
      total++;
    }
  }
  for (const v of ["r", "f", "n"]) {
    if (!c[v]) throw new Error(`LV T3 RFN: verdict "${v}" never used across ${total} statements (dead verdict)`);
    if (c[v] / total > 0.6) throw new Error(`LV T3 RFN: verdict "${v}" is ${c[v]}/${total} (${Math.round((100 * c[v]) / total)}%) — clustered past 60%`);
  }
  // MC title: pool the single-question keys; every position used across the cell.
  const mcKeys = ITEMS.filter((it) => it.taskType === "TELC_C1H_LV_T3_MC").map(
    (it) => (it.payload as { questions: { answer: string }[] }).questions[0].answer,
  );
  for (const pos of ["a", "b", "c"]) {
    if (!mcKeys.includes(pos)) throw new Error(`LV T3 MC (title): position "${pos}" never keyed across ${mcKeys.length} items`);
  }
})();
