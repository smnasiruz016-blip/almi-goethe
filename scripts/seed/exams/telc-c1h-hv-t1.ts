// telc Deutsch C1 Hochschule — Hörverstehen, Teil 1. A LISTENING Zuordnung: you hear
// eight short statements (one speaker each) and match every statement to the point it
// makes, from a shared bank of headings. TELC_C1H_HV_T1_ZUORDNUNG, 8 assignments.
//
// ── SAME BANK MODEL AS LV Teil 1/2, WITH AUDIO SEGMENTS ────────────────────
// One bank per item; each question assigns a spoken statement INTO it. The eight
// statements live in `segments` (the audio, played in order — never reordered) and the
// assignments are the key, stripped by redactObjectivePayload. The bank is
// client-facing; the segments carry the spoken text.
//
// ── UNIQUENESS BY FIT (the Zuordnung double-answer class) ──────────────────
// Exactly one heading may fit each speaker. The failure mode is two headings that both
// describe a statement — so distractors are NEIGHBOURING points a different speaker
// could have made, never a vaguer wording of a correct heading. The two unused bank
// entries per item are plausible standalone points that no speaker actually makes.
//
// ── bankSize IS CONVENTION ──────────────────────────────────────────────────
// The handbook gives the assignment count (8), not the bank size, so the bank of 10
// (8 keys + 2 distractors) is this product's convention — documented here, and
// exam-structure.ts carries no bankSize to enforce a guessed spread against.
//
// ── BALANCE AUTHORED, NOT DE-GAMED ─────────────────────────────────────────
// The statements are order-bound to the recording and the answers are bank letters,
// not a/b/c positions — deGame has nothing correct to do. assertBank enforces the
// per-item invariants (size, no reuse, keys not all in the first half); a cell-wide
// assertion enforces the ≤60% bank-letter spread the distribution gate cannot see
// (Zuordnung questions carry no per-question options, so the gate skips them).
//
// ORIGINALITY (doctrine #1): all statements and headings original to AlmiGoethe. No
// real institution, person or company is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;
const LETTERS = "abcdefghij".split("");

const base = {
  exam: "TELC_C1_HOCHSCHULE" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
  topicTag: "hoerverstehen",
};

type Speaker = { script: string; key: string };

function assertBank(title: string, bankIds: string[], keys: string[]) {
  if (bankIds.length !== 10) throw new Error(`HV T1 "${title}": bank has ${bankIds.length}, expected 10`);
  if (new Set(bankIds).size !== bankIds.length) throw new Error(`HV T1 "${title}": duplicate bank ids`);
  if (keys.length !== 8) throw new Error(`HV T1 "${title}": expected 8 assignments, got ${keys.length}`);
  for (const k of keys) if (!bankIds.includes(k)) throw new Error(`HV T1 "${title}": key "${k}" not in bank`);
  const reused = keys.filter((k, i) => keys.indexOf(k) !== i);
  if (reused.length) throw new Error(`HV T1 "${title}": bank entr(y/ies) assigned twice — ${[...new Set(reused)].join(", ")}`);
  const half = bankIds.slice(0, 5);
  if (keys.every((k) => half.includes(k))) throw new Error(`HV T1 "${title}": every key sits in the first half of the bank`);
}

function hvT1(title: string, theme: string, headings: string[], speakers: Speaker[]): ExamItemInput {
  if (headings.length !== 10) throw new Error(`HV T1 "${title}": expected 10 headings, got ${headings.length}`);
  const bank = headings.map((text, i) => ({ id: LETTERS[i], text }));
  assertBank(title, bank.map((b) => b.id), speakers.map((s) => s.key));
  return {
    ...base,
    taskType: "TELC_C1H_HV_T1_ZUORDNUNG",
    title,
    prompt: "Sie hören acht kurze Aussagen zu einem Thema. Ordnen Sie jeder Aussage den passenden Gedanken zu.",
    timeLimitSeconds: 600,
    payload: {
      instructions: `Sie hören acht Personen zum Thema „${theme}". Ordnen Sie jeder Aussage (1–8) den passenden Gedanken (a–j) zu. Zwei Gedanken bleiben übrig; jeder Gedanke kann höchstens einmal verwendet werden.`,
      bank,
      segments: speakers.map((s, i) => ({ id: `p${i + 1}`, label: `Person ${i + 1}`, script: s.script })),
      questions: speakers.map((s, i) => ({ id: `q${i + 1}`, stem: `Person ${i + 1}`, answer: s.key })),
    },
  };
}

export const ITEMS: ExamItemInput[] = [
  hvT1("Acht Stimmen zum Studium", "Warum studierst du das?",
    [
      /* a */ "Das Fach war rückblickend eine Fehlentscheidung.",
      /* b */ "Die Betreuung ist besser, als ich erwartet hatte.",
      /* c */ "Ohne einen Nebenjob könnte ich mir das Studium nicht leisten.",
      /* d */ "Dem Studium fehlt jeder Bezug zur Praxis.",
      /* e */ "Ein Auslandssemester hat meinen Blick völlig verändert.",
      /* f */ "Die Zahl der Prüfungen überfordert mich.",
      /* g */ "Ich habe die Uni nur wegen der Nähe zum Wohnort gewählt.",
      /* h */ "Die Begeisterung fürs Fach kam erst spät.",
      /* i */ "Die Anonymität der großen Vorlesungen macht mir zu schaffen.",
      /* j */ "Ausschlaggebend waren allein die Berufsaussichten.",
    ],
    [
      { key: "j", script: "Ehrlich gesagt habe ich mich für das Fach entschieden, weil die Aussichten auf eine feste Stelle gut sind. Ob es mir liegt, war zunächst zweitrangig." },
      { key: "b", script: "Ich hatte eine anonyme Massenuniversität erwartet. Tatsächlich kümmern sich die Lehrenden erstaunlich gründlich um uns — damit hatte ich nicht gerechnet." },
      { key: "e", script: "Mein Semester im Ausland war der Wendepunkt. Davor wollte ich abbrechen; danach habe ich mein Fach mit ganz anderen Augen gesehen." },
      { key: "c", script: "Ohne meinen Job neben dem Studium ginge es finanziell einfach nicht. Das kostet mich viel Zeit, aber eine andere Wahl habe ich nicht." },
      { key: "f", script: "Was mich wirklich fertigmacht, ist die schiere Menge an Prüfungen. Kaum ist eine geschafft, steht die nächste an. Zum Durchatmen bleibt keine Zeit." },
      { key: "h", script: "Die ersten Semester waren zäh, ich stand kurz vor dem Aufgeben. Erst im Hauptstudium hat mich das Fach dann richtig gepackt." },
      { key: "i", script: "In den großen Vorlesungen bin ich bloß eine Nummer. Man sitzt zu Hunderten im Saal, und niemand kennt einen. Das fällt mir schwer." },
      { key: "g", script: "Warum ausgerechnet diese Hochschule? Ganz banal: Sie liegt bei mir um die Ecke. So konnte ich wohnen bleiben und spare die teure Miete." },
    ]),

  hvT1("Acht Stimmen zum Berufseinstieg", "Wie war dein Start ins Berufsleben?",
    [
      /* a */ "Die Theorie aus dem Studium half im Alltag kaum weiter.",
      /* b */ "Erst ein Mentor gab mir die nötige Sicherheit.",
      /* c */ "Ich habe die erste Stelle nur als Sprungbrett genommen.",
      /* d */ "Die Bezahlung blieb hinter meinen Erwartungen zurück.",
      /* e */ "Die viele Verantwortung kam für mich zu früh.",
      /* f */ "Ein Praktikum hat mir die Tür geöffnet.",
      /* g */ "Ich habe bewusst ein kleines Unternehmen gewählt.",
      /* h */ "Der Wechsel in eine fremde Stadt fiel mir am schwersten.",
      /* i */ "Ohne ein Netzwerk hätte ich die Stelle nie gefunden.",
      /* j */ "Die ständige Erreichbarkeit belastet mich.",
    ],
    [
      { key: "f", script: "Meinen Einstieg verdanke ich einem Praktikum. Man hat mich dort behalten, obwohl eigentlich keine Stelle frei war. Ohne das wäre ich nicht hier." },
      { key: "a", script: "Im Studium habe ich viel Theorie gelernt, aber im Berufsalltag brauchte ich davon erstaunlich wenig. Das meiste habe ich erst vor Ort gelernt." },
      { key: "g", script: "Große Konzerne haben mich nie gereizt. Ich bin ganz bewusst in einen kleinen Betrieb gegangen, weil man dort früh viel bewegen kann." },
      { key: "b", script: "Anfangs war ich völlig unsicher. Zum Glück hat sich ein erfahrener Kollege meiner angenommen. Erst durch ihn habe ich Boden unter die Füße bekommen." },
      { key: "j", script: "Was mich am meisten mitnimmt, ist, dass nie Feierabend ist. Das Handy klingelt auch abends, und man traut sich kaum, nicht zu antworten." },
      { key: "e", script: "Man hat mir sofort ein ganzes Projekt übertragen. Ehrlich gesagt war das zu viel auf einmal — so viel Verantwortung kam für mich einfach zu früh." },
      { key: "h", script: "Fachlich lief alles gut. Schwer war für mich etwas anderes: Ich musste in eine fremde Stadt ziehen, in der ich keinen Menschen kannte." },
      { key: "d", script: "Die Arbeit selbst macht mir Freude. Nur beim Gehalt hatte ich mir mehr ausgerechnet; das liegt spürbar unter dem, was ich erwartet hatte." },
    ]),

  hvT1("Acht Stimmen zur Weiterbildung", "Warum bildest du dich neben dem Beruf weiter?",
    [
      /* a */ "Ich will mich auf einen Wechsel des Berufs vorbereiten.",
      /* b */ "Mein Arbeitgeber hat mich dazu gedrängt.",
      /* c */ "Die Kurse abends neben dem Job zehren an den Kräften.",
      /* d */ "Ich lerne vor allem aus Freude an der Sache.",
      /* e */ "Ohne einen Abschluss komme ich nicht weiter voran.",
      /* f */ "Die Kosten muss ich vollständig selbst tragen.",
      /* g */ "Am meisten bringt mir der Austausch mit den anderen Teilnehmenden.",
      /* h */ "Ich fürchtete, den Anschluss an neue Technik zu verlieren.",
      /* i */ "Online zu lernen fällt mir schwerer als im Kurs vor Ort.",
      /* j */ "Ich hole einen Abschluss nach, den ich früher versäumt habe.",
    ],
    [
      { key: "h", script: "In meinem Bereich ändert sich die Technik rasend schnell. Ich hatte schlicht Angst, abgehängt zu werden — deshalb die Weiterbildung." },
      { key: "d", script: "Ich muss das gar nicht für die Arbeit. Ich mache es, weil mich das Thema fesselt. Der reine Spaß am Lernen ist mein Antrieb." },
      { key: "a", script: "Mein jetziger Beruf ist nicht mehr das Richtige für mich. Die Kurse sollen mir den Übergang in ein ganz anderes Feld ermöglichen." },
      { key: "g", script: "Der Stoff ist das eine. Aber am wertvollsten sind für mich die anderen im Kurs — die Gespräche mit ihnen bringen mich am weitesten." },
      { key: "c", script: "Man unterschätzt das. Nach einem vollen Arbeitstag noch drei Stunden Unterricht — das geht an die Substanz. Manchmal bin ich am Ende." },
      { key: "j", script: "Ich habe die Schule damals ohne Abschluss verlassen. Das hole ich jetzt nach. Es ist nie zu spät, das wollte ich mir selbst beweisen." },
      { key: "f", script: "Unterstützung von der Firma? Fehlanzeige. Jeden Euro für die Kurse lege ich aus eigener Tasche hin. Billig ist das nicht." },
      { key: "b", script: "Freiwillig hätte ich das kaum angefangen. Mein Chef hat deutlich gemacht, dass ich ohne diese Qualifikation nicht bleiben kann." },
    ]),

  hvT1("Acht Stimmen zum Wohnen im Studium", "Wie wohnst du während des Studiums?",
    [
      /* a */ "Das Wohnheim war günstig, aber eng.",
      /* b */ "In der WG habe ich Freunde fürs Leben gefunden.",
      /* c */ "Ich pendle täglich, um Miete zu sparen.",
      /* d */ "Die Wohnungssuche hat Monate gedauert.",
      /* e */ "Allein zu wohnen war mir die Ruhe wert.",
      /* f */ "Ich wohne noch bei den Eltern und spare so.",
      /* g */ "Die Lage nah am Campus war mir am wichtigsten.",
      /* h */ "Ständig wechselnde Mitbewohner nerven mich.",
      /* i */ "Ich teile mir ein Zimmer, anders geht es nicht.",
      /* j */ "Die Nebenkosten haben mich überrascht.",
    ],
    [
      { key: "d", script: "Am schlimmsten war die Suche. Absage um Absage, Besichtigungen mit dreißig Bewerbern. Erst nach Monaten hatte ich endlich etwas." },
      { key: "b", script: "Meine WG ist mehr als eine Wohnung. Aus den Leuten, mit denen ich zusammenlebe, sind echte Freunde geworden — das möchte ich nicht missen." },
      { key: "f", script: "Ausziehen? Kann ich mir nicht leisten. Ich bleibe bei meinen Eltern wohnen; die Fahrt zur Uni nehme ich dafür in Kauf und spare eine Menge." },
      { key: "g", script: "Für mich zählte nur eines: kurze Wege. Ich wollte zu Fuß zur Uni kommen können, auch wenn die Wohnung dafür kleiner ausfällt." },
      { key: "e", script: "Ich habe lange in einer WG gelebt, aber ich brauche meine Ruhe zum Arbeiten. Jetzt wohne ich allein, und das ist mir den höheren Preis wert." },
      { key: "j", script: "Die Kaltmiete klang machbar. Womit ich nicht gerechnet hatte, waren die Nebenkosten — Heizung, Strom, das läppert sich gewaltig zusammen." },
      { key: "a", script: "Ins Wohnheim bin ich vor allem des Preises wegen gezogen. Billiger findet man kaum etwas. Nur ist das Zimmer wirklich winzig." },
      { key: "c", script: "In der Stadt ist alles zu teuer. Also wohne ich weiter auf dem Land und fahre jeden Tag mit dem Zug hin und zurück. Das spart ordentlich." },
    ]),

  hvT1("Acht Stimmen zu digitalen Werkzeugen", "Wie nutzt du digitale Werkzeuge im Studium?",
    [
      /* a */ "Ich schreibe längst alles nur noch am Rechner mit.",
      /* b */ "Aufgezeichnete Vorlesungen sind meine Rettung.",
      /* c */ "Programme mit künstlicher Intelligenz nutze ich mit Vorsicht.",
      /* d */ "Die Fülle an Apps lenkt mich eher ab.",
      /* e */ "Zum Lernen greife ich bewusst wieder zu Papier.",
      /* f */ "Gemeinsame Dokumente erleichtern die Gruppenarbeit.",
      /* g */ "Ich vermisse den direkten Austausch im Hörsaal.",
      /* h */ "Ohne Online-Kalender würde ich Termine verpassen.",
      /* i */ "Die Technik versagt immer im falschen Moment.",
      /* j */ "Ich prüfe jede Quelle aus dem Netz genau.",
    ],
    [
      { key: "e", script: "Ich habe alles digital versucht, aber zum Lernen kehre ich zum Heft zurück. Was ich mit der Hand schreibe, bleibt einfach besser hängen." },
      { key: "b", script: "Dass die Vorlesungen aufgezeichnet werden, rettet mich. Ich arbeite nebenbei und könnte längst nicht jeden Termin besuchen. So hole ich alles nach." },
      { key: "f", script: "Für Gruppenarbeiten sind gemeinsam bearbeitete Dokumente ein Segen. Jeder sieht sofort die Änderungen der anderen — früher war das ein einziges Durcheinander." },
      { key: "c", script: "Diese neuen KI-Programme benutze ich schon, aber vorsichtig. Ich lasse mir Ideen geben, verlasse mich aber nie blind darauf — zu oft erfinden sie etwas." },
      { key: "d", script: "Ehrlich? Die vielen Apps bringen mir wenig. Statt zu lernen, richte ich Werkzeuge ein und verliere mich darin. Am Ende lenkt mich das nur ab." },
      { key: "j", script: "Im Netz steht viel, aber nicht alles stimmt. Ich prüfe inzwischen jede Quelle genau, bevor ich sie in einer Arbeit verwende. Das kostet Zeit, lohnt sich aber." },
      { key: "h", script: "Ohne meinen digitalen Kalender wäre ich verloren. Fristen, Termine, Räume — das könnte ich mir unmöglich alles merken. Er erinnert mich rechtzeitig." },
      { key: "g", script: "So praktisch das alles ist — mir fehlt der Hörsaal. Am Bildschirm entsteht kein echtes Gespräch. Den unmittelbaren Austausch ersetzt keine Software." },
    ]),
];

// ── HV T1: authored bank-letter spread, ASSERTED across the whole cell ───────
(function assertHvT1Spread() {
  const cell = ITEMS.filter((it) => it.taskType === "TELC_C1H_HV_T1_ZUORDNUNG");
  const count: Record<string, number> = {};
  let total = 0;
  for (const it of cell) {
    for (const q of (it.payload as { questions: { answer: string }[] }).questions) {
      count[q.answer] = (count[q.answer] ?? 0) + 1;
      total++;
    }
  }
  for (const [letter, n] of Object.entries(count)) {
    if (n / total > 0.6) throw new Error(`HV T1: bank letter "${letter}" is the key ${n}/${total} (${Math.round((100 * n) / total)}%) — clustered past 60%`);
  }
})();
