// telc Deutsch C1 Hochschule — Leseverstehen, Teil 1 and Teil 2. Both are ZUORDNUNG:
// one shared option bank per item, each question an assignment INTO it.
//
// OFFICIAL CELLS (handbook cell table, beta-g verify-first 2026-07-24)
//   Teil 1 — 6 kurze Texte, Überschriften/Aussagen zuordnen
//   Teil 2 — 6 Positionen, Aussagen zuordnen
// Five instances each (rule7 floor ≥15 across LV's cells — a floor, not a quota; LV
// Teil 3 adds more when it lands).
//
// ── BANK SIZE IS CONVENTION, NOT SOURCED ────────────────────────────────────
// The handbook table gives the ASSIGNMENT count (6), not the size of the option bank.
// So the bank of 8 (6 keys + 2 distractors) is THIS PRODUCT'S convention, documented
// here rather than smuggled in — exactly the discipline exam-structure.ts sets for an
// unsourced figure. It is why exam-structure.ts carries NO bankSize on these cells:
// nothing to enforce a bank spread against yet. The assertions below still enforce the
// invariants that do not depend on a sourced size (every key in the bank, no reuse,
// keys spread across the bank).
//
// ── THE INVARIANT THAT MATTERS: ASSIGNMENT UNIQUENESS (uniqueness by FIT) ────
// Exactly one bank entry may fit each text. The failure mode is the Zuordnung double
// answer: two headings that both describe the text (the Unterweisung/Schulung
// near-synonym class). It cannot be counted away — only WRITTEN away, by making each
// distractor about a DIFFERENT thing, never a vaguer wording of a correct one. The
// distractors here are plausible standalone headings about NEIGHBOURING topics.
//
// ── BALANCE IS AUTHORED, NEVER DE-GAMED ─────────────────────────────────────
// A Zuordnung is order-bound (heading n belongs to text n) and its answers are bank
// letters, not a/b/c positions — deRhythm has nothing correct to do here. The spread
// is authored and asserted at seed time.
//
// ORIGINALITY (doctrine #1): all texts and headings original to AlmiGoethe. No real
// company, publication, authority or person is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;
const LETTERS = "abcdefgh".split("");

const base = {
  exam: "TELC_C1_HOCHSCHULE" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
  topicTag: "leseverstehen",
};

type Assign = { text: string; key: string };

function assertBank(title: string, bankIds: string[], keys: string[], wantSize: number) {
  if (bankIds.length !== wantSize) throw new Error(`${title}: bank has ${bankIds.length}, expected ${wantSize}`);
  if (new Set(bankIds).size !== bankIds.length) throw new Error(`${title}: duplicate bank ids`);
  if (keys.length !== 6) throw new Error(`${title}: expected 6 assignments, got ${keys.length}`);
  for (const k of keys) if (!bankIds.includes(k)) throw new Error(`${title}: key "${k}" is not in the bank`);
  const reused = keys.filter((k, i) => keys.indexOf(k) !== i);
  if (reused.length) throw new Error(`${title}: bank entr(y/ies) assigned twice — ${[...new Set(reused)].join(", ")}`);
  // Spread: keys must not all sit in the first half of the bank.
  const half = bankIds.slice(0, Math.ceil(wantSize / 2));
  if (keys.every((k) => half.includes(k))) throw new Error(`${title}: every key sits in the first half of the bank`);
}

/** Teil 1: 6 short texts, bank of 8 headings (2 unused). Teil 2: 6 positions, bank of
 *  8 summary statements (2 unused). Same shape, different content role. */
function zuordnung(
  taskType: string,
  title: string,
  prompt: string,
  instructions: string,
  unitLabel: string,
  headings: string[],
  texts: Assign[],
  seconds: number,
): ExamItemInput {
  const bank = headings.map((text, i) => ({ id: LETTERS[i], text }));
  assertBank(title, bank.map((b) => b.id), texts.map((t) => t.key), 8);
  return {
    ...base,
    taskType,
    title,
    prompt,
    timeLimitSeconds: seconds,
    payload: {
      instructions,
      bank,
      segments: texts.map((t, i) => ({ id: `t${i + 1}`, label: `${unitLabel} ${i + 1}`, script: t.text })),
      questions: texts.map((t, i) => ({ id: `q${i + 1}`, stem: `${unitLabel} ${i + 1}`, answer: t.key })),
    },
  };
}

const t1 = (title: string, headings: string[], texts: Assign[]) =>
  zuordnung(
    "TELC_C1H_LV_T1_ZUORDNUNG",
    title,
    "Lesen Sie die sechs kurzen Texte und ordnen Sie jedem Text die passende Überschrift zu.",
    "Ordnen Sie jedem Text (1–6) eine Überschrift (a–h) zu. Zwei Überschriften bleiben übrig; jede Überschrift kann höchstens einmal verwendet werden.",
    "Text",
    headings,
    texts,
    600,
  );

const t2 = (title: string, statements: string[], positions: Assign[]) =>
  zuordnung(
    "TELC_C1H_LV_T2_ZUORDNUNG",
    title,
    "Lesen Sie die sechs Stellungnahmen und ordnen Sie jeder die passende Kernaussage zu.",
    "Ordnen Sie jeder Stellungnahme (1–6) die passende Kernaussage (a–h) zu. Zwei Aussagen bleiben übrig; jede Aussage kann höchstens einmal verwendet werden.",
    "Stellungnahme",
    statements,
    positions,
    600,
  );

// ── TEIL 1 — Überschriften zuordnen ─────────────────────────────────────────
const T1_ITEMS: ExamItemInput[] = [
  t1("Aus dem Hochschulalltag",
    [
      /* a */ "Mehr Geld für die Lehre",
      /* b */ "Ein neues Lernzentrum eröffnet",
      /* c */ "Prüfungen künftig am Computer",
      /* d */ "Weniger Hürden für ein Auslandssemester",
      /* e */ "Die Mensa ändert ihr Angebot",
      /* f */ "Ein Preis für gute Betreuung",
      /* g */ "Die Bibliothek öffnet länger",
      /* h */ "Studierende gründen ein Unternehmen",
    ],
    [
      { key: "g", text: "Die Universitätsbibliothek reagiert auf einen häufigen Wunsch: Ab dem kommenden Semester bleibt sie werktags zwei Stunden länger geöffnet, an drei Abenden sogar bis Mitternacht. Besonders in der Prüfungszeit soll so mehr Raum zum Arbeiten entstehen." },
      { key: "d", text: "Wer ein oder zwei Semester im Ausland studieren möchte, muss künftig weniger Formulare ausfüllen. Ein zentrales Büro erkennt die geplanten Kurse im Voraus an, sodass niemand fürchten muss, Leistungen später doppelt erbringen zu müssen." },
      { key: "b", text: "Im ehemaligen Verwaltungsgebäude ist ein offener Lernort entstanden. Auf drei Etagen finden Studierende Gruppenräume, ruhige Einzelplätze und Technik zum Ausleihen. Anders als in der Bibliothek darf hier auch gesprochen werden." },
      { key: "h", text: "Drei Absolventinnen der Informatik haben aus einer Studienarbeit ein junges Unternehmen gemacht. Ihre Software hilft sehbehinderten Menschen beim Lesen von Fahrplänen. Die Hochschule unterstützt sie mit Räumen und Beratung." },
      { key: "f", text: "Zum ersten Mal vergibt die Fakultät eine Auszeichnung nicht für Forschung, sondern für die Qualität der Lehre. Geehrt wird, wer Studierende besonders sorgfältig begleitet. Die Vorschläge kommen ausschließlich von den Studierenden selbst." },
      { key: "c", text: "Ab dem Wintersemester werden die ersten Klausuren nicht mehr auf Papier, sondern an bereitgestellten Rechnern geschrieben. Ein Testlauf soll zeigen, ob die Technik dem Andrang standhält. Handschriftliche Prüfungen bleiben vorerst die Ausnahme." },
    ]),

  t1("Meldungen aus der Forschung",
    [
      /* a */ "Ein Fund verändert die Zeitrechnung",
      /* b */ "Zwei Fächer arbeiten zusammen",
      /* c */ "Ein Irrtum wird richtiggestellt",
      /* d */ "Neue Geräte für das Labor",
      /* e */ "Forschung wird öffentlich erklärt",
      /* f */ "Ein Projekt läuft aus",
      /* g */ "Daten werden frei zugänglich",
      /* h */ "Ein Nachwuchspreis wird vergeben",
    ],
    [
      { key: "g", text: "Eine Arbeitsgruppe stellt ihre gesammelten Messreihen ab sofort kostenlos ins Netz. Wer möchte, kann die Zahlen für eigene Untersuchungen nutzen. Die Leitung hofft, dass so Ergebnisse schneller überprüft und weitergedacht werden." },
      { key: "b", text: "Um den Lärm in Städten besser zu verstehen, haben sich eine Akustikerin und ein Stadtplaner zusammengetan. Erst die Verbindung beider Blickwinkel, so die beiden, mache brauchbare Vorschläge möglich; ein Fach allein greife zu kurz." },
      { key: "e", text: "An einem offenen Abend erklärten Forschende ihre Arbeit in einfachen Worten und beantworteten Fragen aus dem Publikum. Der Andrang war groß. Solche Abende sollen künftig regelmäßig stattfinden, um die Distanz zur Öffentlichkeit zu verringern." },
      { key: "c", text: "Eine vielzitierte Studie aus dem Vorjahr enthielt einen Rechenfehler. Die Autoren haben ihn selbst gemeldet und die Ergebnisse berichtigt. An der Kernaussage ändert sich wenig, doch die offene Korrektur wird ausdrücklich gelobt." },
      { key: "h", text: "Für ihre Abschlussarbeit über sparsame Kühlverfahren erhält eine junge Physikerin eine mit Fördergeld verbundene Auszeichnung. Die Jury hob hervor, dass die Arbeit eine schwierige Frage besonders klar darstelle." },
      { key: "f", text: "Nach sechs Jahren endet ein groß angelegtes Projekt zur Sprachentwicklung bei Kindern. Die gesammelten Aufnahmen bleiben erhalten und stehen anderen Gruppen weiter zur Verfügung. Eine Fortsetzung ist derzeit nicht finanziert." },
    ]),

  t1("Rund ums Studium",
    [
      /* a */ "Hilfe beim Schreiben von Hausarbeiten",
      /* b */ "Ein Stipendium wird ausgeweitet",
      /* c */ "Beratung in schwierigen Zeiten",
      /* d */ "Weniger Pflichtveranstaltungen",
      /* e */ "Ein Mentor für den Anfang",
      /* f */ "Der Numerus clausus fällt",
      /* g */ "Neue Fristen für die Anmeldung",
      /* h */ "Ein Kurs zum Zeitmanagement",
    ],
    [
      { key: "e", text: "Erstsemester werden künftig im ersten Jahr von einer erfahrenen Studentin oder einem erfahrenen Studenten begleitet. Diese beantworten praktische Fragen und helfen, sich im Studienalltag zurechtzufinden. Die Teilnahme ist freiwillig." },
      { key: "a", text: "Die Schreibwerkstatt bietet nun das ganze Semester über offene Sprechstunden an. Wer mit der Gliederung einer Arbeit ringt oder eine Rückmeldung zu einem Entwurf sucht, kann ohne Anmeldung vorbeikommen." },
      { key: "g", text: "Achtung an alle, die sich für Seminare eintragen wollen: Die Anmeldung öffnet in diesem Semester eine Woche früher und schließt bereits am Monatsende. Wer die Frist verpasst, muss auf freie Restplätze hoffen." },
      { key: "c", text: "In belastenden Lebenslagen können Studierende jetzt kurzfristig ein vertrauliches Gespräch führen. Die Beratungsstelle hat dafür zusätzliche Zeiten eingerichtet. Sie hilft auch weiter, wenn andere Anlaufstellen besser geeignet sind." },
      { key: "b", text: "Ein Förderprogramm, das bisher nur besonders gute Noten belohnte, berücksichtigt künftig auch gesellschaftliches Engagement. Damit sollen mehr Studierende die monatliche Unterstützung erhalten können." },
      { key: "h", text: "Viele scheitern nicht am Stoff, sondern an der Einteilung ihrer Zeit. Ein neuer, kostenloser Kurs zeigt in vier Terminen, wie man große Aufgaben in überschaubare Schritte zerlegt und Aufschieben vermeidet." },
    ]),

  t1("Nachrichten vom Campus",
    [
      /* a */ "Ein Gebäude wird saniert",
      /* b */ "Fahrräder bekommen mehr Platz",
      /* c */ "Ein Café im Freien",
      /* d */ "Strom vom eigenen Dach",
      /* e */ "Der Hörsaal wird größer",
      /* f */ "Ruhe für die Lernenden",
      /* g */ "Ein Garten zum Mitmachen",
      /* h */ "Kunst auf dem Gelände",
    ],
    [
      { key: "d", text: "Auf den Dächern zweier Institute sind Solarzellen angebracht worden. Sie decken künftig einen Teil des Strombedarfs vor Ort. Überschüsse an sonnigen Tagen fließen ins Netz. Weitere Gebäude sollen folgen." },
      { key: "g", text: "Hinter der Mensa ist eine Fläche entstanden, auf der Beschäftigte und Studierende gemeinsam Kräuter und Gemüse ziehen können. Wer mitmachen will, trägt sich in eine Liste ein; Werkzeug und Saatgut werden gestellt." },
      { key: "b", text: "Weil vor den Eingängen kaum noch ein Rad einen Ständer fand, sind überdachte Abstellplätze für mehrere Hundert Fahrräder eingerichtet worden. An zwei Stellen gibt es nun auch eine Luftpumpe zur freien Nutzung." },
      { key: "f", text: "In der Bibliothek ist eine ganze Etage zur strengen Ruhezone erklärt worden. Gespräche und Telefonate sind dort untersagt. Wer sich austauschen möchte, findet dafür die Gruppenräume im Erdgeschoss." },
      { key: "a", text: "Das älteste Gebäude der Hochschule wird ab dem Sommer grundlegend erneuert. Während der Arbeiten ziehen die betroffenen Institute in Ausweichräume am Stadtrand. Die Wiedereröffnung ist für in zwei Jahren geplant." },
      { key: "c", text: "Auf dem Platz vor der Aula hat ein kleines Café mit Tischen unter freiem Himmel eröffnet. Bei gutem Wetter wird dort auch mittags ein einfaches Gericht angeboten. Die Einnahmen kommen studentischen Projekten zugute." },
    ]),

  t1("Kurz gemeldet: Lehre und Prüfung",
    [
      /* a */ "Vorlesungen werden aufgezeichnet",
      /* b */ "Ein Seminar fällt aus",
      /* c */ "Mehr Zeit in der Klausur",
      /* d */ "Anwesenheit wird nicht mehr geprüft",
      /* e */ "Ein neues Fach wird angeboten",
      /* f */ "Gruppenarbeit statt Einzelprüfung",
      /* g */ "Rückmeldung zu jeder Arbeit",
      /* h */ "Ein Gastvortrag am Abend",
    ],
    [
      { key: "a", text: "Die großen Einführungsvorlesungen werden ab sofort aufgezeichnet und stehen im Lernportal bereit. Wer einen Termin verpasst oder eine Stelle noch einmal hören möchte, kann sie in Ruhe nachholen. Die Präsenz bleibt weiterhin möglich." },
      { key: "g", text: "In einem Pilotversuch erhält jede eingereichte Hausarbeit eine ausführliche schriftliche Rückmeldung, nicht nur eine Note. Die Lehrenden erhoffen sich, dass Studierende so gezielter an ihren Schwächen arbeiten können." },
      { key: "e", text: "Ab dem Wintersemester können Studierende aller Fächer einen Kurs über die Grundlagen des wissenschaftlichen Arbeitens belegen. Er vermittelt, wie man Quellen prüft, zitiert und eine Fragestellung eingrenzt." },
      { key: "d", text: "Eine Fakultät streicht die Anwesenheitslisten in den meisten Seminaren. Entscheidend sei die erbrachte Leistung, nicht die bloße Anwesenheit, heißt es zur Begründung. Ausgenommen bleiben Übungen mit Sicherheitsvorschriften." },
      { key: "c", text: "Nach vielen Rückmeldungen wird die Bearbeitungszeit der Abschlussklausur um dreißig Minuten verlängert. Der Umfang der Aufgaben bleibt gleich. So soll weniger unter Zeitdruck und sorgfältiger gearbeitet werden können." },
      { key: "f", text: "In einem Aufbaumodul ersetzt eine gemeinsam erstellte Projektarbeit die bisherige Einzelklausur. Bewertet werden sowohl das Ergebnis als auch die Zusammenarbeit. Jede Teilnehmerin übernimmt einen klar umrissenen Teil." },
    ]),
];

// ── TEIL 2 — Kernaussagen zu Stellungnahmen zuordnen ────────────────────────
const T2_ITEMS: ExamItemInput[] = [
  t2("Braucht das Studium eine Anwesenheitspflicht?",
    [
      /* a */ "Anwesenheit sagt nichts über das Gelernte aus.",
      /* b */ "Eine Pflicht schadet gerade den Schwächeren.",
      /* c */ "Nur der persönliche Austausch macht ein Seminar aus.",
      /* d */ "Wer bezahlt, soll auch erscheinen müssen.",
      /* e */ "Ohne Pflicht bleiben am Ende die Prüfungen leichter.",
      /* f */ "Eine Pflicht behandelt Erwachsene wie Schulkinder.",
      /* g */ "Manche Fächer kommen ohne gemeinsame Präsenz nicht aus.",
      /* h */ "Aufzeichnungen ersetzen die Präsenz vollständig.",
    ],
    [
      { key: "c", text: "Ein Seminar lebt vom Gespräch. Wer nur den Stoff nachlesen will, braucht keinen Raum voller Menschen. Der Wert liegt genau darin, dass man aufeinander reagiert, widerspricht und gemeinsam weiterdenkt — das lässt sich nicht nachholen." },
      { key: "f", text: "Wir reden hier über erwachsene Menschen, die selbst entscheiden können, wie sie lernen. Eine Liste, auf der Häkchen gemacht werden, gehört in die Schule, nicht an die Universität. Sie misstraut den Studierenden grundlos." },
      { key: "g", text: "So allgemein lässt sich das gar nicht beantworten. In einem Laborpraktikum oder einer Übung, in der man Handgriffe lernt, ist gemeinsame Anwesenheit unverzichtbar. Bei einer reinen Vorlesung sehe ich das ganz anders." },
      { key: "a", text: "Ob jemand im Raum sitzt, sagt noch nichts darüber, ob er etwas versteht. Ich kenne Leute, die jede Sitzung besuchen und trotzdem durchfallen, und andere, die selten kommen und die Prüfung glänzend bestehen. Kontrolliert wird das Falsche." },
      { key: "b", text: "Am härtesten trifft eine solche Pflicht die, die ohnehin kämpfen: Studierende, die nebenbei arbeiten müssen, oder die ein Kind versorgen. Wer die Zeit hat, dauernd da zu sein, hat sie oft, weil er es sich leisten kann." },
      { key: "h", text: "Man muss ehrlich sein: Seit die Vorlesungen aufgezeichnet werden, ist der Saal halb leer, und die Ergebnisse sind nicht schlechter. Für die reine Wissensvermittlung reicht die Aufnahme; dafür muss niemand mehr den Weg auf sich nehmen." },
    ]),

  t2("Sollte in der Wissenschaft mehr auf Englisch publiziert werden?",
    [
      /* a */ "Englisch sichert die größte Reichweite.",
      /* b */ "Die deutsche Fachsprache droht zu verkümmern.",
      /* c */ "Übersetzen kostet Zeit, die der Forschung fehlt.",
      /* d */ "Auf die Qualität kommt es an, nicht auf die Sprache.",
      /* e */ "Wer nur auf Englisch schreibt, verliert die eigene Gesellschaft.",
      /* f */ "Eine gemeinsame Sprache erleichtert die Zusammenarbeit.",
      /* g */ "Manche Begriffe lassen sich kaum übersetzen.",
      /* h */ "Englisch benachteiligt, wer es nicht perfekt beherrscht.",
    ],
    [
      { key: "a", text: "Wer gelesen werden will, muss dort veröffentlichen, wo die meisten mitlesen können. Ein Aufsatz auf Deutsch erreicht einen kleinen Kreis; derselbe Aufsatz auf Englisch steht der ganzen Welt offen. Alles andere ist Selbstbeschränkung." },
      { key: "e", text: "Forschung wird zu einem großen Teil aus Steuern bezahlt. Wenn ihre Ergebnisse nur noch auf Englisch erscheinen, kann die Öffentlichkeit, die sie finanziert, sie kaum noch lesen. So verliert die Wissenschaft den Kontakt zur eigenen Gesellschaft." },
      { key: "h", text: "Wir tun so, als hätten alle die gleichen Chancen, aber das stimmt nicht. Wer mit Englisch aufgewachsen ist, schreibt mühelos; andere ringen um jeden Satz und werden für ihre Sprache abgewertet, nicht für ihre Gedanken." },
      { key: "g", text: "In meinem Fach gibt es Begriffe, die über Jahrhunderte im Deutschen gewachsen sind. Übersetzt man sie, geht ein Teil ihrer Bedeutung verloren. Manche Feinheit lässt sich schlicht nicht ohne Verlust in eine andere Sprache übertragen." },
      { key: "f", text: "Ich arbeite in Projekten mit Kolleginnen aus sechs Ländern zusammen. Ohne eine gemeinsame Sprache wäre das unmöglich. Dass wir uns alle auf Englisch verständigen, ist kein Verlust, sondern die Bedingung dafür, dass wir überhaupt zusammenarbeiten." },
      { key: "b", text: "Meine Sorge ist eine andere: Wenn in der Lehre und in den Aufsätzen nur noch Englisch vorkommt, üben wir das Deutsche als Fachsprache nicht mehr. Was man nicht mehr gebraucht, verliert an Ausdruckskraft — und das lässt sich später kaum zurückholen." },
    ]),

  t2("Wie viel darf man in der Forschung dem Zufall verdanken?",
    [
      /* a */ "Der Zufall nützt nur dem vorbereiteten Geist.",
      /* b */ "Planbare Forschung bringt die verlässlicheren Ergebnisse.",
      /* c */ "Zu enge Vorgaben ersticken die Neugier.",
      /* d */ "Ein Fund allein ist noch keine Erkenntnis.",
      /* e */ "Fehlschläge sind so wertvoll wie Erfolge.",
      /* f */ "Geldgeber verlangen zu Unrecht Planbarkeit.",
      /* g */ "Ergebnisse müssen sich wiederholen lassen.",
      /* h */ "Freiheit ist der beste Nährboden für Entdeckungen.",
    ],
    [
      { key: "a", text: "Man hört gern die Geschichten vom glücklichen Zufall. Aber der Zufall hilft nur dem, der vorbereitet ist. Erst das geschulte Auge erkennt in einer unerwarteten Beobachtung überhaupt etwas Bedeutsames; wer nichts weiß, übersieht den Hinweis." },
      { key: "e", text: "Wir veröffentlichen fast nur, was gelungen ist, und schweigen über das Gescheiterte. Dabei bewahrt gerade ein sauber dokumentierter Fehlschlag andere davor, denselben Irrweg einzuschlagen. Ein Misserfolg ist ein Ergebnis, kein Makel." },
      { key: "h", text: "Die großen Durchbrüche kamen selten aus straff gesteuerten Programmen. Sie kamen dort, wo kluge Köpfe die Freiheit hatten, einer eigenen Frage nachzugehen. Wer alles bis zum Ende durchplant, verhindert genau das Unerwartete." },
      { key: "f", text: "Man verlangt heute schon im Antrag, das Ergebnis zu benennen. Aber wüsste ich es, müsste ich nicht mehr forschen. Diese Forderung nach Planbarkeit verkennt, was Forschung überhaupt ist, und sie schreckt die mutigen Fragen ab." },
      { key: "g", text: "Ein einzelnes verblüffendes Resultat sagt mir wenig. Erst wenn es sich unter denselben Bedingungen wiederholen lässt, wird aus einem Zufallsbefund verlässliches Wissen. Ohne diese Prüfung bleibt jede Entdeckung nur eine Behauptung." },
      { key: "b", text: "Ich halte das Loblied auf den Zufall für übertrieben. Die meisten Fortschritte entstehen durch geduldige, systematische Arbeit, Schritt für Schritt. Auf den glücklichen Moment zu warten, ist keine Methode, sondern Hoffnung." },
    ]),

  t2("Sollten Hochschulen stärker auf Online-Lehre setzen?",
    [
      /* a */ "Online spart Wege und schafft Freiheit.",
      /* b */ "Der Zufall auf dem Flur fehlt am Bildschirm.",
      /* c */ "Nicht jede Wohnung ist ein guter Lernort.",
      /* d */ "Aufnahmen erlauben das eigene Tempo.",
      /* e */ "Ohne Präsenz zerfällt die Gemeinschaft.",
      /* f */ "Die Technik schließt manche aus.",
      /* g */ "Eine Mischung nutzt die Stärken beider Formen.",
      /* h */ "Am Bildschirm sinkt die Aufmerksamkeit.",
    ],
    [
      { key: "a", text: "Für mich war die Online-Lehre eine Befreiung. Ich wohne weit draußen und habe früher täglich zwei Stunden im Zug gesessen. Diese Zeit nutze ich jetzt zum Lernen. Wer flexibel planen kann, holt aus dem Tag deutlich mehr heraus." },
      { key: "e", text: "Ein Studium ist mehr als das Abrufen von Inhalten. Man lernt miteinander, streitet, freundet sich an. All das entsteht im gemeinsamen Raum. Vor lauter Bildschirmen zerfällt die Gemeinschaft in lauter Einzelne, die sich nie begegnen." },
      { key: "g", text: "Die Frage ist falsch gestellt. Es geht nicht um entweder-oder. Eine Vorlesung kann man gut aufzeichnen, ein Seminar lebt von der Präsenz. Wer klug kombiniert, nutzt die Stärke jeder Form, statt eine gegen die andere auszuspielen." },
      { key: "c", text: "Man vergisst leicht, dass nicht alle einen ruhigen Schreibtisch haben. Wer sich das Zimmer mit anderen teilt oder nebenbei ein Kind betreut, kann zu Hause kaum konzentriert arbeiten. Für sie war der Weg an die Hochschule ein Rückzugsort." },
      { key: "f", text: "Online klingt nach Gleichheit, ist es aber nicht. Eine stabile Verbindung und ein gutes Gerät sind keine Selbstverständlichkeit. Wer beides nicht hat, fällt still zurück, ohne dass es jemand merkt. Die Technik entscheidet mit, wer mitkommt." },
      { key: "h", text: "Ich habe an mir selbst bemerkt, wie schnell die Gedanken abschweifen, wenn ich allein vor dem Bildschirm sitze. Im Hörsaal halte ich leichter durch. Die reine Aufnahme fordert eine Selbstdisziplin, die auf Dauer den meisten fehlt." },
    ]),

  t2("Was macht gute Wissenschaftskommunikation aus?",
    [
      /* a */ "Vereinfachen heißt nicht verfälschen.",
      /* b */ "Wer öffentlich erklärt, verliert Zeit für die Forschung.",
      /* c */ "Eine informierte Gesellschaft entscheidet besser.",
      /* d */ "Der Drang zur Schlagzeile verzerrt die Ergebnisse.",
      /* e */ "Auch Unsicherheit gehört ehrlich dazu.",
      /* f */ "Kommunikation sollte für die Karriere zählen.",
      /* g */ "Nicht jeder Forscher ist ein guter Erklärer.",
      /* h */ "Wer öffentlich zahlt, hat ein Recht auf Erklärung.",
    ],
    [
      { key: "c", text: "Warum wir das tun sollten, ist für mich klar: Eine Gesellschaft, die versteht, worum es geht, trifft bessere Entscheidungen — über Gesundheit, Umwelt, Technik. Unwissen macht anfällig für einfache Parolen. Erklären ist deshalb keine Zugabe, sondern Pflicht." },
      { key: "e", text: "Der größte Fehler ist, so zu tun, als sei alles gesichert. Gute Vermittlung sagt auch, was man noch nicht weiß und wie sicher ein Ergebnis ist. Wer jede Studie als endgültige Wahrheit verkauft, untergräbt am Ende das Vertrauen." },
      { key: "d", text: "Das Problem ist der Wettlauf um Aufmerksamkeit. Um in den Schlagzeilen zu landen, wird zugespitzt, bis aus einem vorsichtigen Befund eine Sensation wird. So lässt sich seriöse Forschung bald nicht mehr von spektakulärer unterscheiden." },
      { key: "a", text: "Immer heißt es, vereinfachen führe zu Fehlern. Das muss nicht sein. Man kann komplizierte Dinge verständlich machen, ohne sie falsch darzustellen — es ist nur schwerer und dauert länger. Die Antwort ist gute Vermittlung, nicht Schweigen." },
      { key: "g", text: "Wir sollten nicht von jedem verlangen, ein glänzender Redner zu sein. Manche brillante Forscherin erklärt vor Publikum unbeholfen — das ist keine Schwäche ihrer Arbeit. Sinnvoller ist, jene zu unterstützen, denen das Vermitteln liegt." },
      { key: "f", text: "Solange öffentliche Vorträge und verständliche Texte für die Laufbahn nichts zählen, werden viele sie als verlorene Zeit ansehen. Wenn wir wollen, dass Forschende sich erklären, muss dieser Einsatz auch anerkannt werden." },
    ]),
];

export const ITEMS: ExamItemInput[] = [...T1_ITEMS, ...T2_ITEMS];

// ── LV Zuordnung: authored key spread, ASSERTED across the whole cell ────────
// assertBank already guards each item (keys in bank, no reuse, not all in the first
// half). This adds the cell-wide check the answer-distribution gate makes: across all
// instances of a Teil, no single bank letter may be the answer past the 60% cluster
// line. A future edit that leans every text onto the same heading throws here.
(function assertLvZuordnungSpread() {
  for (const taskType of ["TELC_C1H_LV_T1_ZUORDNUNG", "TELC_C1H_LV_T2_ZUORDNUNG"]) {
    const cell = ITEMS.filter((it) => it.taskType === taskType);
    const count: Record<string, number> = {};
    let total = 0;
    for (const it of cell) {
      for (const q of (it.payload as { questions: { answer: string }[] }).questions) {
        count[q.answer] = (count[q.answer] ?? 0) + 1;
        total++;
      }
    }
    for (const [letter, n] of Object.entries(count)) {
      if (n / total > 0.6) throw new Error(`${taskType}: bank letter "${letter}" is the key ${n}/${total} (${Math.round((100 * n) / total)}%) — clustered past 60%`);
    }
  }
})();
