// TestDaF — Schriftlicher Ausdruck, Aufgabe 2: Lesetext und Grafik zusammenfassen.
//
// ORIGINALITY (doctrine #1): every text and task below is ORIGINAL to AlmiGoethe —
// never copied or derived from TestDaF / g.a.s.t. / TestDaF-Institut materials.
//
// ── WHY THIS FILE IS ADDITIVE, NOT A REPLACEMENT ────────────────────────────
// The section has TWO Aufgaben. Only one existed in the bank — the argumentative
// text — and its 16 items are CONFORMANT: TESTDAF_SA_ARGUMENT is a real Aufgabe and
// every item carries the published floor of 200 words. Nothing about them is wrong.
//
// The plan named "8 argumentative + 7 summary = 15". Following that literally would
// have meant deactivating eight correct items to hit a target number, and the
// reconciliation predictor would then have reported them as deactivated for a reason
// other than non-conformance — the one condition that is a hard stop. A depth policy
// is a FLOOR, not a quota: >=15 per section and >=3 per Aufgabe are both satisfied by
// 16 + 7 = 23, with no deactivations at all. Deleting correct content to match an
// arithmetic split would be tidying at the learner's expense.
//
// ── THE GRAFIK, AND HOW IT IS HONEST ────────────────────────────────────────
// This Aufgabe presents a short reading text plus a statistic, and asks for a
// summary of 100–150 words. Both ends of that range are published, so the
// conformance gate enforces them exactly.
//
// The figures are INVENTED for the exercise, and every item says so in its
// guidanceNote. They are task material, like the invented letters elsewhere in the
// bank — not claims about the world. What they must never be is a real statistic
// attributed to a real body, or an invented statistic attributed to one: that is the
// same failure as an invented letter signed by a real insurer. No organisation is
// named in any of them; the real-entity gate checks that independently.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TESTDAF;
const base = {
  exam: "TESTDAF" as const,
  level: L,
  section: SECTION.SCHRIFTLICHER_AUSDRUCK,
  taskType: "TESTDAF_SA_ZUSAMMENFASSUNG",
  difficulty: "CORE" as const,
  timeLimitSeconds: 1800,
  guidanceNote:
    "Die Zahlen in dieser Aufgabe sind für die Übung erfunden und stammen nicht aus einer veröffentlichten Statistik. Beschreiben Sie zuerst die wichtigsten Werte, ordnen Sie sie dann in den Lesetext ein. 100–150 Wörter.",
};

const INSTRUCTION =
  "Fassen Sie den Lesetext und die Grafik in 100 bis 150 Wörtern zusammen. Nennen Sie die wichtigsten Zahlen, vergleichen Sie sie und stellen Sie den Zusammenhang zum Text her. Eine eigene Meinung ist hier nicht gefragt.";

export const ITEMS: ExamItemInput[] = [
  {
    ...base,
    title: "Gründe für einen Studienabbruch",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "studium",
    payload: {
      situation:
        "LESETEXT\nEin Studienabbruch wird in der Öffentlichkeit häufig auf mangelnde Leistung zurückgeführt. Befragungen unter Abbrechenden zeichnen ein anderes Bild: Fachliche Überforderung ist nur einer von mehreren Gründen, und sie steht selten allein. Häufig kommen finanzielle Zwänge hinzu oder die Einsicht, das falsche Fach gewählt zu haben.\n\nGRAFIK — Hauptgrund für den Abbruch, Angaben in Prozent (erfundene Erhebung, 1200 Befragte)\n  Fachliche Überforderung        29\n  Falsche Fachwahl               24\n  Finanzielle Gründe             21\n  Familiäre Verpflichtungen      14\n  Wechsel in eine Ausbildung      8\n  Sonstiges                       4",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
  {
    ...base,
    title: "Wege zur Arbeit im Städtevergleich",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "verkehr",
    payload: {
      situation:
        "LESETEXT\nWelches Verkehrsmittel Menschen für den Weg zur Arbeit wählen, hängt weniger von persönlichen Vorlieben ab als von der Entfernung und vom vorhandenen Angebot. Wo ein dichtes Nahverkehrsnetz besteht, sinkt der Anteil des Autos deutlich, auch bei Personen, die ein Auto besitzen.\n\nGRAFIK — Verkehrsmittel auf dem Arbeitsweg, Anteile in Prozent (erfundene Erhebung in zwei Städten)\n                        Stadt A   Stadt B\n  Auto                     58        31\n  Öffentlicher Nahverkehr  17        42\n  Fahrrad                  12        19\n  Zu Fuß                    9         7\n  Sonstiges                 4         1",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
  {
    ...base,
    title: "Nutzung von Sprachkursen nach Zielgruppe",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "bildung",
    payload: {
      situation:
        "LESETEXT\nSprachkurse werden von sehr unterschiedlichen Gruppen besucht, und die Gründe unterscheiden sich stark. Wer für den Beruf lernt, wählt häufiger kurze, intensive Formate; wer aus privatem Interesse lernt, bevorzugt einen langsameren Rhythmus über mehrere Semester.\n\nGRAFIK — Wichtigster Grund für den Kursbesuch, Anteile in Prozent (erfundene Erhebung, 900 Teilnehmende)\n  Beruf / Arbeitsplatz           37\n  Studium / Prüfung              26\n  Privates Interesse             19\n  Familie und Umfeld             13\n  Keine Angabe                    5",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
  {
    ...base,
    title: "Energieverbrauch im Haushalt nach Bereich",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "umwelt",
    payload: {
      situation:
        "LESETEXT\nWer im Haushalt Energie sparen will, denkt zuerst an Beleuchtung und elektrische Geräte. Der weitaus größte Anteil entfällt jedoch auf das Heizen und auf warmes Wasser. Maßnahmen an der Gebäudehülle wirken deshalb stärker als der Austausch einzelner Geräte, kosten aber mehr und lohnen sich erst über viele Jahre.\n\nGRAFIK — Anteil am Energieverbrauch eines durchschnittlichen Haushalts, in Prozent (erfundene Modellrechnung)\n  Heizung                        68\n  Warmwasser                     14\n  Elektrische Geräte             11\n  Beleuchtung                     4\n  Kochen                          3",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
  {
    ...base,
    title: "Arbeitsort nach Wochentag",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "arbeit",
    payload: {
      situation:
        "LESETEXT\nSeit sich das Arbeiten von zu Hause verbreitet hat, verteilt sich die Anwesenheit im Betrieb sehr ungleich über die Woche. Die Mitte der Woche gilt vielerorts als gesetzter Termin für Besprechungen, während Montag und Freitag zu bevorzugten Tagen für das Arbeiten zu Hause geworden sind. Für die Planung von Räumen und Kantinen hat das erhebliche Folgen.\n\nGRAFIK — Anteil der Beschäftigten im Betrieb anwesend, in Prozent (erfundene Erhebung)\n  Montag        41\n  Dienstag      72\n  Mittwoch      78\n  Donnerstag    69\n  Freitag       33",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
  {
    ...base,
    title: "Ausgaben von Studierenden nach Posten",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "studium",
    payload: {
      situation:
        "LESETEXT\nDie Kosten eines Studiums werden meist mit Gebühren und Lernmitteln verbunden. Tatsächlich dominiert ein einziger Posten: die Miete. Sie schwankt zudem zwischen den Hochschulorten weit stärker als alle anderen Ausgaben, weshalb dieselbe monatliche Summe an verschiedenen Orten sehr Unterschiedliches bedeutet.\n\nGRAFIK — Monatliche Ausgaben, Anteile in Prozent (erfundene Erhebung, 2000 Studierende)\n  Miete und Nebenkosten          46\n  Lebensmittel                   19\n  Verkehr                        11\n  Lernmittel                      8\n  Freizeit                       11\n  Sonstiges                       5",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
  {
    ...base,
    title: "Getrennt gesammelte Abfälle nach Fraktion",
    prompt: "Fassen Sie Lesetext und Grafik zusammen (100–150 Wörter).",
    topicTag: "umwelt",
    payload: {
      situation:
        "LESETEXT\nDie getrennte Sammlung von Abfällen gilt als Erfolgsgeschichte, doch die Quoten unterscheiden sich zwischen den Fraktionen erheblich. Glas und Papier werden seit Jahrzehnten gesammelt und erreichen hohe Werte; bei Kunststoffen ist die Sortierung aufwendiger, und ein Teil der eingesammelten Menge lässt sich am Ende nicht verwerten.\n\nGRAFIK — Anteil getrennt gesammelt, in Prozent (erfundene Modellrechnung)\n  Glas                           84\n  Papier und Karton              79\n  Bioabfall                      58\n  Kunststoffverpackungen         47\n  Elektrogeräte                  36",
      instruction: INSTRUCTION,
      wordMin: 100,
      wordMax: 150,
    },
  },
];
