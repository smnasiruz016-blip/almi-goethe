// TestDaF — Hörverstehen. Original practice items (CEFR B2–C1).
//
// ORIGINALITY (doctrine #1): every script and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from TestDaF / g.a.s.t. / TestDaF-Institut
// materials, past papers or Modelltests. Written fresh in the exam's STYLE only.
//
// SEVEN Aufgaben with published item counts summing to the published section
// total of 30:
//
//   Übersicht ergänzen 5 · Textstellen einem Begriffspaar zuordnen 4 ·
//   Fehler in einer Zusammenfassung finden 2 · Aussagen Personen zuordnen 6 ·
//   Gliederungspunkte zuordnen 4 · Mehrfachauswahl 5 · Laut- und Schriftbild 4
//
// The previous 16 items in testdaf.ts carried four invented taskTypes (_HV_MCQ,
// _HV_DIALOG, _HV_LECTURE, _HV_ANNOUNCE) with three questions each. None of the
// seven real shapes existed. Re-authored, not relabelled.
//
// Depth per Option B: >=15 per section, >=3 per Aufgabe. 21 items, 3 of each.
//
// Audio: `audioScript` is spoken aloud by the client's speech synthesis; the
// learner never sees it. Scripts are written to be HEARD — speaker turns are
// marked, and nothing depends on punctuation a listener cannot perceive.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.TESTDAF;
const base = {
  exam: "TESTDAF" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
};

const RAW_ITEMS: ExamItemInput[] = [
  // ═══════════════════════════════════════ Aufgabe: Übersicht ergänzen (5 items)
  {
    ...base,
    taskType: "TESTDAF_HV_UEBERSICHT",
    title: "Beratungsgespräch im Studierendensekretariat",
    prompt: "Hören Sie das Gespräch und ergänzen Sie die Übersicht.",
    topicTag: "studium",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Ergänzen Sie die fünf Lücken in der Übersicht. Schreiben Sie jeweils ein Wort oder eine Zahl.",
      audioScript:
        "Mitarbeiterin: Guten Tag, was kann ich für Sie tun? — Student: Ich möchte mich für das Sommersemester beurlauben lassen. — Mitarbeiterin: Das ist möglich. Den Antrag müssen Sie bis zum fünfzehnten Februar einreichen, das ist die Frist. Bringen Sie bitte einen Nachweis mit; in Ihrem Fall wäre das die Bestätigung des Praktikumsbetriebs. — Student: Und was passiert mit meinen Prüfungen? — Mitarbeiterin: Während der Beurlaubung dürfen Sie keine Prüfungen ablegen, mit einer Ausnahme: Wiederholungsprüfungen sind erlaubt. — Student: Muss ich den Semesterbeitrag trotzdem zahlen? — Mitarbeiterin: Ja, den Beitrag zahlen Sie weiterhin, allerdings ohne den Anteil für das Semesterticket. — Student: Wie lange darf ich mich insgesamt beurlauben lassen? — Mitarbeiterin: Höchstens zwei Semester während des gesamten Studiums.",
      questions: [
        { id: "u1", stem: "Frist für den Antrag: bis zum ___ Februar", answer: "15", exact: false },
        { id: "u2", stem: "Erforderlicher Nachweis: Bestätigung des ___", answer: "Praktikumsbetriebs", exact: false },
        { id: "u3", stem: "Während der Beurlaubung erlaubt: ___", answer: "Wiederholungsprüfungen", exact: false },
        { id: "u4", stem: "Semesterbeitrag: weiter zu zahlen, ohne den Anteil für das ___", answer: "Semesterticket", exact: false },
        { id: "u5", stem: "Höchstdauer insgesamt: ___ Semester", answer: "zwei", exact: false },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_UEBERSICHT",
    title: "Auskunft zur Wohnheimbewerbung",
    prompt: "Hören Sie das Gespräch und ergänzen Sie die Übersicht.",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Ergänzen Sie die fünf Lücken in der Übersicht. Schreiben Sie jeweils ein Wort oder eine Zahl.",
      audioScript:
        "Beraterin: Studierendenwerk, guten Tag. — Studentin: Ich würde gern einen Wohnheimplatz beantragen. — Beraterin: Die Bewerbung läuft ausschließlich online, ein Formular auf Papier gibt es nicht mehr. — Studentin: Wie lange muss ich mit einer Wartezeit rechnen? — Beraterin: Im Durchschnitt sind es derzeit vier Monate, im Winter etwas länger. — Studentin: Gibt es Voraussetzungen? — Beraterin: Sie müssen immatrikuliert sein; ein Nachweis über Ihr Einkommen ist nicht erforderlich. Vorrang haben allerdings Studierende im ersten Studienjahr. — Studentin: Und die Kaution? — Beraterin: Die Kaution beträgt zwei Monatsmieten und wird beim Auszug zurückgezahlt. — Studentin: Kann ich mein Zimmer vorher besichtigen? — Beraterin: Eine Besichtigung ist leider nicht möglich, Sie erhalten aber Fotos.",
      questions: [
        { id: "u1", stem: "Form der Bewerbung: ausschließlich ___", answer: "online", exact: false },
        { id: "u2", stem: "Durchschnittliche Wartezeit: ___ Monate", answer: "vier", exact: false },
        { id: "u3", stem: "Vorrang haben Studierende im ersten ___", answer: "Studienjahr", exact: false },
        { id: "u4", stem: "Kaution: ___ Monatsmieten", answer: "zwei", exact: false },
        { id: "u5", stem: "Besichtigung: nicht möglich, stattdessen erhält man ___", answer: "Fotos", exact: false },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_UEBERSICHT",
    title: "Informationen zu einem Forschungspraktikum",
    prompt: "Hören Sie das Gespräch und ergänzen Sie die Übersicht.",
    topicTag: "forschung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Ergänzen Sie die fünf Lücken in der Übersicht. Schreiben Sie jeweils ein Wort oder eine Zahl.",
      audioScript:
        "Betreuer: Sie interessieren sich für das Praktikum in unserer Arbeitsgruppe? — Studentin: Ja, gern. Wie lange dauert es? — Betreuer: Sechs Wochen, in der vorlesungsfreien Zeit. — Studentin: Welche Vorkenntnisse brauche ich? — Betreuer: Statistik sollten Sie sicher beherrschen; Programmierkenntnisse sind hilfreich, aber keine Bedingung. — Studentin: Werde ich bezahlt? — Betreuer: Eine Vergütung gibt es nicht, dafür wird das Praktikum mit acht Kreditpunkten angerechnet. — Studentin: Muss ich einen Bericht schreiben? — Betreuer: Ja, am Ende einen kurzen Bericht, und Sie stellen Ihre Ergebnisse im Kolloquium vor. — Studentin: Bis wann soll ich mich melden? — Betreuer: Schreiben Sie mir bitte bis Ende April.",
      questions: [
        { id: "u1", stem: "Dauer: ___ Wochen", answer: "sechs", exact: false },
        { id: "u2", stem: "Sicher beherrschen muss man: ___", answer: "Statistik", exact: false },
        { id: "u3", stem: "Anrechnung: ___ Kreditpunkte", answer: "acht", exact: false },
        { id: "u4", stem: "Vorstellung der Ergebnisse im ___", answer: "Kolloquium", exact: false },
        { id: "u5", stem: "Anmeldung bis Ende ___", answer: "April", exact: false },
      ],
    },
  },

  // ══════════════════════ Aufgabe: Textstellen einem Begriffspaar zuordnen (4)
  {
    ...base,
    taskType: "TESTDAF_HV_BEGRIFFSPAAR",
    title: "Vortrag: Stadtklima und Bauweise",
    prompt: "Ordnen Sie die gehörten Aussagen einem der beiden Begriffe zu.",
    topicTag: "umwelt",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Bezieht sich die Aussage auf die DICHTE BEBAUUNG (A) oder auf die OFFENE BEBAUUNG (B)?",
      audioScript:
        "Vortragender: In der Klimaforschung werden zwei Bauformen verglichen. Die dichte Bebauung speichert tagsüber viel Wärme in Mauern und Asphalt und gibt sie nachts nur langsam ab; die Nächte bleiben dort spürbar wärmer. Sie hat allerdings den Vorteil, dass die Wege kurz sind und der Verkehr entsprechend geringer ausfällt. Die offene Bebauung kühlt nachts deutlich besser aus, weil die Luft zwischen den Gebäuden zirkulieren kann. Dafür verbraucht sie erheblich mehr Fläche pro Bewohner, und die Wege zu Geschäften und Haltestellen werden länger.",
      questions: [
        {
          id: "p1",
          stem: "Die Nächte bleiben spürbar wärmer.",
          options: [
            { id: "a", text: "A — dichte Bebauung" },
            { id: "b", text: "B — offene Bebauung" },
          ],
          answer: "a",
        },
        {
          id: "p2",
          stem: "Die Luft kann zwischen den Gebäuden zirkulieren.",
          options: [
            { id: "a", text: "A — dichte Bebauung" },
            { id: "b", text: "B — offene Bebauung" },
          ],
          answer: "b",
        },
        {
          id: "p3",
          stem: "Der Verkehr fällt geringer aus, weil die Wege kurz sind.",
          options: [
            { id: "a", text: "A — dichte Bebauung" },
            { id: "b", text: "B — offene Bebauung" },
          ],
          answer: "a",
        },
        {
          id: "p4",
          stem: "Pro Bewohner wird erheblich mehr Fläche benötigt.",
          options: [
            { id: "a", text: "A — dichte Bebauung" },
            { id: "b", text: "B — offene Bebauung" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_BEGRIFFSPAAR",
    title: "Vortrag: Zwei Formen der Prüfung",
    prompt: "Ordnen Sie die gehörten Aussagen einem der beiden Begriffe zu.",
    topicTag: "studium",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Bezieht sich die Aussage auf die KLAUSUR (A) oder auf die HAUSARBEIT (B)?",
      audioScript:
        "Vortragende: Beide Prüfungsformen messen Verschiedenes. Die Klausur prüft unter Zeitdruck, was jemand abrufbar im Kopf hat, und sie ist für die Lehrenden vergleichsweise leicht zu organisieren, weil alle zur selben Zeit im selben Raum sitzen. Die Hausarbeit dagegen prüft, ob jemand eine Frage selbst eingrenzen und über Wochen verfolgen kann. Sie erlaubt den Einsatz aller Hilfsmittel, was die Bewertung schwieriger macht: Man sieht das Ergebnis, aber nicht den Weg dorthin.",
      questions: [
        {
          id: "p1",
          stem: "Geprüft wird, was unter Zeitdruck abrufbar ist.",
          options: [
            { id: "a", text: "A — Klausur" },
            { id: "b", text: "B — Hausarbeit" },
          ],
          answer: "a",
        },
        {
          id: "p2",
          stem: "Die Fragestellung muss selbst eingegrenzt werden.",
          options: [
            { id: "a", text: "A — Klausur" },
            { id: "b", text: "B — Hausarbeit" },
          ],
          answer: "b",
        },
        {
          id: "p3",
          stem: "Die Organisation ist für die Lehrenden vergleichsweise einfach.",
          options: [
            { id: "a", text: "A — Klausur" },
            { id: "b", text: "B — Hausarbeit" },
          ],
          answer: "a",
        },
        {
          id: "p4",
          stem: "Der Weg zum Ergebnis bleibt für die Bewertenden unsichtbar.",
          options: [
            { id: "a", text: "A — Klausur" },
            { id: "b", text: "B — Hausarbeit" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_BEGRIFFSPAAR",
    title: "Vortrag: Befragung und Beobachtung",
    prompt: "Ordnen Sie die gehörten Aussagen einem der beiden Begriffe zu.",
    topicTag: "forschung",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Bezieht sich die Aussage auf die BEFRAGUNG (A) oder auf die BEOBACHTUNG (B)?",
      audioScript:
        "Vortragender: Beide Verfahren haben ihre eigene Schwäche. Bei der Befragung erfahren wir, was Menschen über ihr Verhalten sagen — und das weicht bekanntlich von dem ab, was sie tatsächlich tun, besonders wenn das Thema heikel ist. Dafür lassen sich mit ihr in kurzer Zeit sehr viele Personen erreichen. Die Beobachtung zeigt das Verhalten unmittelbar, ist aber aufwendig und deckt deshalb meist nur wenige Fälle ab. Hinzu kommt, dass die Anwesenheit der Forschenden das Geschehen verändern kann.",
      questions: [
        {
          id: "p1",
          stem: "In kurzer Zeit lassen sich sehr viele Personen erreichen.",
          options: [
            { id: "a", text: "A — Befragung" },
            { id: "b", text: "B — Beobachtung" },
          ],
          answer: "a",
        },
        {
          id: "p2",
          stem: "Das Verhalten wird unmittelbar sichtbar.",
          options: [
            { id: "a", text: "A — Befragung" },
            { id: "b", text: "B — Beobachtung" },
          ],
          answer: "b",
        },
        {
          id: "p3",
          stem: "Bei heiklen Themen weicht die Aussage besonders stark vom Handeln ab.",
          options: [
            { id: "a", text: "A — Befragung" },
            { id: "b", text: "B — Beobachtung" },
          ],
          answer: "a",
        },
        {
          id: "p4",
          stem: "Die Anwesenheit der Forschenden kann das Geschehen verändern.",
          options: [
            { id: "a", text: "A — Befragung" },
            { id: "b", text: "B — Beobachtung" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ═════════════ Aufgabe: Fehler in einer Zusammenfassung finden (2 items)
  {
    ...base,
    taskType: "TESTDAF_HV_FEHLER_ZUSAMMENFASSUNG",
    title: "Zusammenfassung eines Vortrags über Gletschermessung",
    prompt: "Finden Sie die zwei Stellen, an denen die Zusammenfassung dem Gehörten widerspricht.",
    topicTag: "forschung",
    timeLimitSeconds: 360,
    payload: {
      instructions:
        "Die Zusammenfassung enthält an zwei Stellen einen Fehler. Wählen Sie jeweils, was tatsächlich gesagt wurde.",
      audioScript:
        "Vortragende: Wie misst man den Rückgang eines Gletschers? Früher geschah das ausschließlich vor Ort: Man setzte Pegel in das Eis und las sie zweimal im Jahr ab. Heute liefern Satelliten die Fläche, aber nicht die Dicke — und die Dicke ist die entscheidende Größe. Deshalb kombinieren wir beides: Satellitendaten für die Ausdehnung, Messungen vor Ort für die Mächtigkeit. Ganz ohne Feldarbeit geht es also weiterhin nicht.\n\nZUSAMMENFASSUNG: Früher wurde ausschließlich vor Ort gemessen. Satelliten liefern heute sowohl Fläche als auch Dicke (1). Die Dicke ist die entscheidende Größe. Feldarbeit ist deshalb inzwischen überflüssig (2).",
      questions: [
        {
          id: "f1",
          stem: "Stelle (1): Was wurde gesagt?",
          options: [
            { id: "a", text: "Satelliten liefern Fläche und Dicke." },
            { id: "b", text: "Satelliten liefern die Fläche, aber nicht die Dicke." },
            { id: "c", text: "Satelliten liefern nur die Dicke." },
          ],
          answer: "b",
        },
        {
          id: "f2",
          stem: "Stelle (2): Was wurde gesagt?",
          options: [
            { id: "a", text: "Ohne Feldarbeit geht es weiterhin nicht." },
            { id: "b", text: "Feldarbeit ist überflüssig geworden." },
            { id: "c", text: "Feldarbeit findet nur noch alle zehn Jahre statt." },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_FEHLER_ZUSAMMENFASSUNG",
    title: "Zusammenfassung eines Vortrags über Lesekompetenz",
    prompt: "Finden Sie die zwei Stellen, an denen die Zusammenfassung dem Gehörten widerspricht.",
    topicTag: "bildung",
    timeLimitSeconds: 360,
    payload: {
      instructions:
        "Die Zusammenfassung enthält an zwei Stellen einen Fehler. Wählen Sie jeweils, was tatsächlich gesagt wurde.",
      audioScript:
        "Vortragender: Lesekompetenz besteht aus mehr als dem Entziffern von Wörtern. Wer flüssig liest, versteht nicht automatisch besser — Flüssigkeit ist eine Voraussetzung, aber keine Garantie. Entscheidend ist das Vorwissen: Über ein vertrautes Thema liest man auch schwierige Texte mit Gewinn, über ein fremdes Thema scheitert man an vergleichsweise leichten. Unsere Erhebung an weiterführenden Schulen bestätigt das deutlich.\n\nZUSAMMENFASSUNG: Lesekompetenz ist mehr als das Entziffern von Wörtern. Wer flüssig liest, versteht dadurch auch automatisch besser (1). Entscheidend ist das Vorwissen. Die Erhebung fand an Grundschulen statt (2).",
      questions: [
        {
          id: "f1",
          stem: "Stelle (1): Was wurde gesagt?",
          options: [
            { id: "a", text: "Flüssigkeit führt automatisch zu besserem Verständnis." },
            { id: "b", text: "Flüssigkeit ist eine Voraussetzung, aber keine Garantie." },
            { id: "c", text: "Flüssigkeit spielt für das Verständnis keine Rolle." },
          ],
          answer: "b",
        },
        {
          id: "f2",
          stem: "Stelle (2): Was wurde gesagt?",
          options: [
            { id: "a", text: "Die Erhebung fand an Grundschulen statt." },
            { id: "b", text: "Die Erhebung fand an weiterführenden Schulen statt." },
            { id: "c", text: "Die Erhebung fand an Hochschulen statt." },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_FEHLER_ZUSAMMENFASSUNG",
    title: "Zusammenfassung eines Vortrags über Pendelverkehr",
    prompt: "Finden Sie die zwei Stellen, an denen die Zusammenfassung dem Gehörten widerspricht.",
    topicTag: "verkehr",
    timeLimitSeconds: 360,
    payload: {
      instructions:
        "Die Zusammenfassung enthält an zwei Stellen einen Fehler. Wählen Sie jeweils, was tatsächlich gesagt wurde.",
      audioScript:
        "Vortragende: Die durchschnittliche Pendelstrecke ist in den letzten zwanzig Jahren gewachsen, die durchschnittliche Pendelzeit dagegen kaum — die Wege wurden länger, aber auch schneller. Interessant ist die Zufriedenheit: Sie hängt weniger von der Dauer ab als von der Verlässlichkeit. Eine planbare Fahrt von fünfzig Minuten wird besser bewertet als eine schwankende von dreißig. Für die Verkehrsplanung heißt das: Pünktlichkeit vor Beschleunigung.\n\nZUSAMMENFASSUNG: Die Pendelstrecken sind länger geworden, die Pendelzeit ebenfalls deutlich (1). Die Zufriedenheit hängt vor allem von der Verlässlichkeit ab. Für die Planung folgt daraus, dass Beschleunigung wichtiger ist als Pünktlichkeit (2).",
      questions: [
        {
          id: "f1",
          stem: "Stelle (1): Was wurde gesagt?",
          options: [
            { id: "a", text: "Auch die Pendelzeit ist deutlich gewachsen." },
            { id: "b", text: "Die Pendelzeit hat sich kaum verändert." },
            { id: "c", text: "Die Pendelzeit ist stark gesunken." },
          ],
          answer: "b",
        },
        {
          id: "f2",
          stem: "Stelle (2): Was wurde gesagt?",
          options: [
            { id: "a", text: "Pünktlichkeit ist wichtiger als Beschleunigung." },
            { id: "b", text: "Beschleunigung ist wichtiger als Pünktlichkeit." },
            { id: "c", text: "Beides ist gleich wichtig." },
          ],
          answer: "a",
        },
      ],
    },
  },

  // ══════════════════════════ Aufgabe: Aussagen Personen zuordnen (6 items)
  {
    ...base,
    taskType: "TESTDAF_HV_PERSONEN",
    title: "Drei Stimmen zur Anwesenheitspflicht",
    prompt: "Ordnen Sie jede Aussage der Person zu, die sie gemacht hat.",
    topicTag: "studium",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wer hat was gesagt? Wählen Sie für jede Aussage A, B oder C.",
      audioScript:
        "Moderatorin: Drei Meinungen zur Anwesenheitspflicht in Seminaren. — Sprecher A, Dozent: Ich führe keine Liste. Wer nicht kommt, merkt das in der Prüfung von selbst. Eine Pflicht würde nur Anwesende erzeugen, keine Beteiligten. — Sprecherin B, Studentin: Ich arbeite zwanzig Stunden in der Woche. Eine starre Pflicht schließt Leute wie mich faktisch aus, und das hat nichts mit Motivation zu tun. — Sprecher C, Fachschaftsvertreter: Bei Seminaren, die vom Gespräch leben, sehe ich das anders — wenn die Hälfte fehlt, funktioniert die Diskussion nicht mehr. Für Vorlesungen dagegen wäre eine Pflicht sinnlos.",
      questions: [
        {
          id: "n1",
          stem: "Eine Pflicht erzeugt Anwesende, aber keine Beteiligten.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "n2",
          stem: "Erwerbstätige Studierende würden faktisch ausgeschlossen.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "n3",
          stem: "In gesprächsbasierten Seminaren ist Anwesenheit notwendig.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "n4",
          stem: "Die Person führt selbst keine Anwesenheitsliste.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "n5",
          stem: "Für Vorlesungen wäre eine Pflicht sinnlos.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "n6",
          stem: "Fehlende Anwesenheit hat nichts mit fehlender Motivation zu tun.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_PERSONEN",
    title: "Drei Stimmen zum Homeoffice",
    prompt: "Ordnen Sie jede Aussage der Person zu, die sie gemacht hat.",
    topicTag: "arbeit",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wer hat was gesagt? Wählen Sie für jede Aussage A, B oder C.",
      audioScript:
        "Moderator: Wir haben drei Beschäftigte gefragt. — Sprecherin A: Mir fehlt vor allem das Zufällige. Die wichtigen Hinweise bekam ich früher in der Teeküche, nicht in Sitzungen. — Sprecher B: Ich bin zu Hause deutlich konzentrierter, weil mich niemand unterbricht. Schwierig finde ich nur, abends aufzuhören; das Büro habe ich früher verlassen können. — Sprecherin C: Für mich ist es schlicht eine Frage der Wohnung. Ich habe kein eigenes Zimmer, und am Küchentisch arbeitet es sich nach drei Stunden nicht mehr gut. Deshalb fahre ich freiwillig ins Büro.",
      questions: [
        {
          id: "n1",
          stem: "Der beiläufige Austausch fehlt.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "n2",
          stem: "Das Abschalten am Abend fällt schwer.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "n3",
          stem: "Die Wohnsituation ist der ausschlaggebende Faktor.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "n4",
          stem: "Zu Hause wird konzentrierter gearbeitet.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "n5",
          stem: "Die Person fährt aus eigenem Entschluss ins Büro.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "n6",
          stem: "Wichtige Informationen kamen früher außerhalb der Sitzungen.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_PERSONEN",
    title: "Drei Stimmen zum Fahrradausbau",
    prompt: "Ordnen Sie jede Aussage der Person zu, die sie gemacht hat.",
    topicTag: "verkehr",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wer hat was gesagt? Wählen Sie für jede Aussage A, B oder C.",
      audioScript:
        "Moderatorin: Drei Anwohnerinnen und Anwohner zum Ausbau der Radwege. — Sprecher A: Der neue Weg endet nach vierhundert Metern im Nichts. Ein Netz, das abbricht, nützt niemandem — das ist mein einziger Kritikpunkt, denn grundsätzlich bin ich dafür. — Sprecherin B: Ich fahre seit dem Umbau erstmals mit meinen Kindern zur Schule. Vorher hätte ich das nicht gewagt. — Sprecher C: Als Lieferant brauche ich Halteflächen. Die sind weggefallen, und jetzt stehe ich in zweiter Reihe, was für alle schlechter ist als vorher.",
      questions: [
        {
          id: "n1",
          stem: "Der Weg bricht nach kurzer Strecke ab.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "n2",
          stem: "Der Schulweg mit Kindern ist erst jetzt möglich geworden.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "n3",
          stem: "Der Wegfall von Halteflächen verursacht neue Probleme.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "n4",
          stem: "Die Person unterstützt das Vorhaben grundsätzlich.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "n5",
          stem: "Die jetzige Lage ist für alle schlechter als vorher.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "n6",
          stem: "Früher hätte sich die Person diesen Weg nicht zugetraut.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ═══════════════════════ Aufgabe: Gliederungspunkte zuordnen (4 items)
  {
    ...base,
    taskType: "TESTDAF_HV_GLIEDERUNG",
    title: "Gliederung eines Vortrags über Bodenerosion",
    prompt: "Ordnen Sie den Abschnitten des Vortrags die passenden Gliederungspunkte zu.",
    topicTag: "umwelt",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Welcher Gliederungspunkt passt zu welchem Abschnitt? Wählen Sie für jeden Abschnitt die passende Überschrift.",
      audioScript:
        "Vortragender: Abschnitt eins. Wenn Regen auf unbedeckten Boden trifft, lösen die Tropfen feine Teilchen, die dann abgeschwemmt werden. So verliert eine Fläche jährlich mehrere Tonnen Erde je Hektar. — Abschnitt zwei. Betroffen sind vor allem geneigte Äcker, die im Winter brachliegen, sowie Flächen mit geringem Humusanteil. — Abschnitt drei. Wirksam ist eine dauerhafte Bedeckung: Zwischenfrüchte, Mulch oder das Belassen der Ernterückstände auf dem Feld. — Abschnitt vier. Für die kommenden Jahre erwarten wir häufigere Starkregen, was den Druck erhöht und die genannten Maßnahmen dringlicher macht.",
      questions: [
        {
          id: "g1",
          stem: "Abschnitt 1",
          options: [
            { id: "a", text: "Wie Erosion entsteht" },
            { id: "b", text: "Wo sie besonders auftritt" },
            { id: "c", text: "Was dagegen hilft" },
            { id: "d", text: "Ausblick" },
          ],
          answer: "a",
        },
        {
          id: "g2",
          stem: "Abschnitt 2",
          options: [
            { id: "a", text: "Wie Erosion entsteht" },
            { id: "b", text: "Wo sie besonders auftritt" },
            { id: "c", text: "Was dagegen hilft" },
            { id: "d", text: "Ausblick" },
          ],
          answer: "b",
        },
        {
          id: "g3",
          stem: "Abschnitt 3",
          options: [
            { id: "a", text: "Wie Erosion entsteht" },
            { id: "b", text: "Wo sie besonders auftritt" },
            { id: "c", text: "Was dagegen hilft" },
            { id: "d", text: "Ausblick" },
          ],
          answer: "c",
        },
        {
          id: "g4",
          stem: "Abschnitt 4",
          options: [
            { id: "a", text: "Wie Erosion entsteht" },
            { id: "b", text: "Wo sie besonders auftritt" },
            { id: "c", text: "Was dagegen hilft" },
            { id: "d", text: "Ausblick" },
          ],
          answer: "d",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_GLIEDERUNG",
    title: "Gliederung eines Vortrags über Schlafforschung",
    prompt: "Ordnen Sie den Abschnitten des Vortrags die passenden Gliederungspunkte zu.",
    topicTag: "forschung",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Welcher Gliederungspunkt passt zu welchem Abschnitt? Wählen Sie für jeden Abschnitt die passende Überschrift.",
      audioScript:
        "Vortragende: Abschnitt eins. Wir wollten wissen, ob sich die innere Uhr von Jugendlichen tatsächlich nach hinten verschiebt oder ob das eine Frage der Gewohnheit ist. — Abschnitt zwei. Dazu haben wir zweihundert Schülerinnen und Schüler über sechs Wochen begleitet und sowohl Bewegungsdaten als auch Speichelproben erhoben. — Abschnitt drei. Die Verschiebung ließ sich klar nachweisen, und sie verschwand auch dann nicht, wenn die Abendbeleuchtung reduziert wurde. — Abschnitt vier. Daraus folgt für uns, dass ein späterer Unterrichtsbeginn keine Bequemlichkeit wäre, sondern der Biologie entspräche.",
      questions: [
        {
          id: "g1",
          stem: "Abschnitt 1",
          options: [
            { id: "a", text: "Die Fragestellung" },
            { id: "b", text: "Das Vorgehen" },
            { id: "c", text: "Die Ergebnisse" },
            { id: "d", text: "Die Folgerung" },
          ],
          answer: "a",
        },
        {
          id: "g2",
          stem: "Abschnitt 2",
          options: [
            { id: "a", text: "Die Fragestellung" },
            { id: "b", text: "Das Vorgehen" },
            { id: "c", text: "Die Ergebnisse" },
            { id: "d", text: "Die Folgerung" },
          ],
          answer: "b",
        },
        {
          id: "g3",
          stem: "Abschnitt 3",
          options: [
            { id: "a", text: "Die Fragestellung" },
            { id: "b", text: "Das Vorgehen" },
            { id: "c", text: "Die Ergebnisse" },
            { id: "d", text: "Die Folgerung" },
          ],
          answer: "c",
        },
        {
          id: "g4",
          stem: "Abschnitt 4",
          options: [
            { id: "a", text: "Die Fragestellung" },
            { id: "b", text: "Das Vorgehen" },
            { id: "c", text: "Die Ergebnisse" },
            { id: "d", text: "Die Folgerung" },
          ],
          answer: "d",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_GLIEDERUNG",
    title: "Gliederung eines Vortrags über Museumsbesuche",
    prompt: "Ordnen Sie den Abschnitten des Vortrags die passenden Gliederungspunkte zu.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Welcher Gliederungspunkt passt zu welchem Abschnitt? Wählen Sie für jeden Abschnitt die passende Überschrift.",
      audioScript:
        "Vortragender: Abschnitt eins. Bis in die neunziger Jahre galt der Museumsbesuch als Bildungspflicht; Zahlen und Erwartungen richteten sich danach. — Abschnitt zwei. Heute konkurrieren Museen mit einem sehr viel größeren Freizeitangebot, und die Besuchszeiten sind kürzer geworden. — Abschnitt drei. Manche Häuser reagieren mit Mitmachformaten, andere setzen bewusst auf Ruhe und wenige Objekte. — Abschnitt vier. Welche Strategie trägt, lässt sich noch nicht sagen; die Datenlage reicht dafür nicht aus.",
      questions: [
        {
          id: "g1",
          stem: "Abschnitt 1",
          options: [
            { id: "a", text: "Die frühere Sicht" },
            { id: "b", text: "Die heutige Lage" },
            { id: "c", text: "Die Reaktionen der Häuser" },
            { id: "d", text: "Offene Fragen" },
          ],
          answer: "a",
        },
        {
          id: "g2",
          stem: "Abschnitt 2",
          options: [
            { id: "a", text: "Die frühere Sicht" },
            { id: "b", text: "Die heutige Lage" },
            { id: "c", text: "Die Reaktionen der Häuser" },
            { id: "d", text: "Offene Fragen" },
          ],
          answer: "b",
        },
        {
          id: "g3",
          stem: "Abschnitt 3",
          options: [
            { id: "a", text: "Die frühere Sicht" },
            { id: "b", text: "Die heutige Lage" },
            { id: "c", text: "Die Reaktionen der Häuser" },
            { id: "d", text: "Offene Fragen" },
          ],
          answer: "c",
        },
        {
          id: "g4",
          stem: "Abschnitt 4",
          options: [
            { id: "a", text: "Die frühere Sicht" },
            { id: "b", text: "Die heutige Lage" },
            { id: "c", text: "Die Reaktionen der Häuser" },
            { id: "d", text: "Offene Fragen" },
          ],
          answer: "d",
        },
      ],
    },
  },

  // ═══════════════════════════════════ Aufgabe: Mehrfachauswahl (5 items)
  {
    ...base,
    taskType: "TESTDAF_HV_MC",
    title: "Interview mit einer Meeresbiologin",
    prompt: "Hören Sie das Interview und beantworten Sie die fünf Fragen.",
    topicTag: "forschung",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "Moderator: Frau Doktor Reinhardt, Sie untersuchen Seegraswiesen. Warum? — Biologin: Weil sie erstaunlich viel Kohlenstoff im Boden binden — je Fläche mehr als ein Wald, und zwar über Jahrhunderte, solange der Boden ungestört bleibt. — Moderator: Was stört ihn? — Biologin: Vor allem Ankerketten und Baggerarbeiten. Wird der Boden aufgewühlt, entweicht ein Teil des gespeicherten Kohlenstoffs wieder. — Moderator: Lassen sich Seegraswiesen wieder anpflanzen? — Biologin: Ja, aber der Erfolg schwankt stark. Entscheidend ist die Wasserqualität; ist das Wasser trüb, fehlt das Licht, und die Pflanzung scheitert unabhängig davon, wie sorgfältig gearbeitet wurde. — Moderator: Was wünschen Sie sich? — Biologin: Weniger neue Projekte, mehr Schutz der bestehenden Bestände. Erhalten ist billiger als wiederherstellen.",
      questions: [
        {
          id: "m1",
          stem: "Warum untersucht die Biologin Seegraswiesen?",
          options: [
            { id: "a", text: "weil sie viele Fischarten beherbergen" },
            { id: "b", text: "weil sie je Fläche viel Kohlenstoff binden" },
            { id: "c", text: "weil sie besonders selten geworden sind" },
          ],
          answer: "b",
        },
        {
          id: "m2",
          stem: "Wie lange bleibt der Kohlenstoff gebunden?",
          options: [
            { id: "a", text: "einige Monate" },
            { id: "b", text: "wenige Jahre" },
            { id: "c", text: "über Jahrhunderte, solange der Boden ungestört bleibt" },
          ],
          answer: "c",
        },
        {
          id: "m3",
          stem: "Was stört den Boden vor allem?",
          options: [
            { id: "a", text: "Ankerketten und Baggerarbeiten" },
            { id: "b", text: "steigende Wassertemperaturen" },
            { id: "c", text: "der Tourismus an Land" },
          ],
          answer: "a",
        },
        {
          id: "m4",
          stem: "Wovon hängt der Erfolg einer Anpflanzung entscheidend ab?",
          options: [
            { id: "a", text: "von der Jahreszeit" },
            { id: "b", text: "von der Wasserqualität" },
            { id: "c", text: "von der Zahl der Helfenden" },
          ],
          answer: "b",
        },
        {
          id: "m5",
          stem: "Was wünscht sich die Biologin?",
          options: [
            { id: "a", text: "mehr neue Pflanzprojekte" },
            { id: "b", text: "besseren Schutz der bestehenden Bestände" },
            { id: "c", text: "ein Verbot der Forschung in den Wiesen" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_MC",
    title: "Interview mit einem Stadtarchivar",
    prompt: "Hören Sie das Interview und beantworten Sie die fünf Fragen.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "Moderatorin: Herr Baumgartner, was macht ein Stadtarchiv eigentlich? — Archivar: Wir bewahren auf, was die Verwaltung erzeugt, und entscheiden vor allem, was NICHT aufbewahrt wird. Etwa fünf Prozent der Unterlagen bleiben dauerhaft. — Moderatorin: Nach welchem Kriterium? — Archivar: Nach der Frage, ob ein Vorgang später noch etwas erklärt. Eine einzelne Rechnung nicht, ein Bauplan sehr wohl. — Moderatorin: Wer kommt zu Ihnen? — Archivar: Früher überwiegend Forschende, heute mehrheitlich Privatpersonen, die ihre Familiengeschichte verfolgen. — Moderatorin: Und die Digitalisierung? — Archivar: Sie löst weniger, als man denkt. Der Aufwand liegt nicht im Scannen, sondern in der Erschließung: Ein Dokument, das niemand beschreibt, ist digital genauso unauffindbar wie im Regal.",
      questions: [
        {
          id: "m1",
          stem: "Worin besteht laut dem Archivar die zentrale Aufgabe?",
          options: [
            { id: "a", text: "möglichst alles aufzubewahren" },
            { id: "b", text: "zu entscheiden, was nicht aufbewahrt wird" },
            { id: "c", text: "Unterlagen an andere Archive weiterzugeben" },
          ],
          answer: "b",
        },
        {
          id: "m2",
          stem: "Wie viel bleibt ungefähr dauerhaft erhalten?",
          options: [
            { id: "a", text: "etwa fünf Prozent" },
            { id: "b", text: "etwa fünfzig Prozent" },
            { id: "c", text: "nahezu alles" },
          ],
          answer: "a",
        },
        {
          id: "m3",
          stem: "Welches Kriterium nennt er?",
          options: [
            { id: "a", text: "ob der Vorgang später noch etwas erklärt" },
            { id: "b", text: "ob der Vorgang rechtlich noch gültig ist" },
            { id: "c", text: "ob der Vorgang digital vorliegt" },
          ],
          answer: "a",
        },
        {
          id: "m4",
          stem: "Wer nutzt das Archiv heute mehrheitlich?",
          options: [
            { id: "a", text: "Forschende" },
            { id: "b", text: "Privatpersonen mit familiengeschichtlichem Interesse" },
            { id: "c", text: "Mitarbeitende der Verwaltung" },
          ],
          answer: "b",
        },
        {
          id: "m5",
          stem: "Worin liegt bei der Digitalisierung der eigentliche Aufwand?",
          options: [
            { id: "a", text: "im Scannen" },
            { id: "b", text: "in der Erschließung" },
            { id: "c", text: "in der Speicherung" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_MC",
    title: "Interview mit einer Verkehrspsychologin",
    prompt: "Hören Sie das Interview und beantworten Sie die fünf Fragen.",
    topicTag: "verkehr",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "Moderator: Frau Professor Ohlert, warum fahren Menschen zu schnell? — Psychologin: Selten aus Eile. Meist, weil die Straße es erlaubt: Eine breite, gerade Fahrbahn erzeugt das Gefühl von Sicherheit, und man beschleunigt, ohne es zu bemerken. — Moderator: Helfen Schilder? — Psychologin: Kaum. Ein Schild ändert die Wahrnehmung nicht. Wirksamer ist es, die Straße selbst zu verändern — Verengungen, Bäume, wechselnde Beläge. — Moderator: Und Kontrollen? — Psychologin: Kontrollen wirken, aber nur örtlich und kurz. Sobald die Messstelle bekannt ist, bremsen die Leute davor und geben danach wieder Gas. — Moderator: Was empfehlen Sie einer Gemeinde mit kleinem Budget? — Psychologin: Zuerst die gefährlichste Kreuzung umbauen, statt an zehn Stellen Schilder aufzustellen.",
      questions: [
        {
          id: "m1",
          stem: "Was ist laut der Psychologin der häufigste Grund für zu hohes Tempo?",
          options: [
            { id: "a", text: "Zeitdruck" },
            { id: "b", text: "die Gestaltung der Straße" },
            { id: "c", text: "die Leistung des Fahrzeugs" },
          ],
          answer: "b",
        },
        {
          id: "m2",
          stem: "Welche Wirkung hat eine breite, gerade Fahrbahn?",
          options: [
            { id: "a", text: "Sie erzeugt ein Gefühl von Sicherheit." },
            { id: "b", text: "Sie führt zu mehr Vorsicht." },
            { id: "c", text: "Sie hat keinen messbaren Einfluss." },
          ],
          answer: "a",
        },
        {
          id: "m3",
          stem: "Wie bewertet sie Schilder?",
          options: [
            { id: "a", text: "als das wirksamste Mittel" },
            { id: "b", text: "als kaum wirksam" },
            { id: "c", text: "als schädlich" },
          ],
          answer: "b",
        },
        {
          id: "m4",
          stem: "Was sagt sie über Kontrollen?",
          options: [
            { id: "a", text: "Sie wirken dauerhaft auf der ganzen Strecke." },
            { id: "b", text: "Sie wirken nur örtlich und kurz." },
            { id: "c", text: "Sie wirken überhaupt nicht." },
          ],
          answer: "b",
        },
        {
          id: "m5",
          stem: "Was empfiehlt sie einer Gemeinde mit wenig Geld?",
          options: [
            { id: "a", text: "an zehn Stellen Schilder aufzustellen" },
            { id: "b", text: "die gefährlichste Kreuzung umzubauen" },
            { id: "c", text: "häufiger zu kontrollieren" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ══════════════════════════════ Aufgabe: Laut- und Schriftbild (4 items)
  {
    ...base,
    taskType: "TESTDAF_HV_LAUT_SCHRIFT",
    title: "Angaben aus einer Ansage: Termine und Räume",
    prompt: "Hören Sie die Ansage und wählen Sie die richtige Schreibweise.",
    topicTag: "studium",
    timeLimitSeconds: 300,
    payload: {
      instructions:
        "Sie hören Namen, Zahlen und Bezeichnungen. Wählen Sie jeweils die Schreibweise, die dem Gehörten entspricht.",
      audioScript:
        "Ansage: Die Vorlesung von Frau Professor Mayr findet ab kommender Woche im Raum B zwei hundert vierzehn statt. Die Sprechstunde verschiebt sich auf Donnerstag, sechzehn Uhr dreißig. Die Anmeldung läuft über das Portal; das Kennwort lautet Seminar zwei drei. Bei Rückfragen wenden Sie sich bitte an Herrn Kühn im Sekretariat.",
      questions: [
        {
          id: "l1",
          stem: "Name der Dozentin",
          options: [
            { id: "a", text: "Maier" },
            { id: "b", text: "Mayr" },
            { id: "c", text: "Meyer" },
          ],
          answer: "b",
        },
        {
          id: "l2",
          stem: "Raumnummer",
          options: [
            { id: "a", text: "B 214" },
            { id: "b", text: "B 240" },
            { id: "c", text: "B 224" },
          ],
          answer: "a",
        },
        {
          id: "l3",
          stem: "Uhrzeit der Sprechstunde",
          options: [
            { id: "a", text: "16:13" },
            { id: "b", text: "16:30" },
            { id: "c", text: "06:30" },
          ],
          answer: "b",
        },
        {
          id: "l4",
          stem: "Name im Sekretariat",
          options: [
            { id: "a", text: "Kuhn" },
            { id: "b", text: "Kühn" },
            { id: "c", text: "Krühn" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_LAUT_SCHRIFT",
    title: "Angaben aus einem Telefonat: Adresse und Zahlen",
    prompt: "Hören Sie das Telefonat und wählen Sie die richtige Schreibweise.",
    topicTag: "alltag",
    timeLimitSeconds: 300,
    payload: {
      instructions:
        "Sie hören Namen, Zahlen und Bezeichnungen. Wählen Sie jeweils die Schreibweise, die dem Gehörten entspricht.",
      audioScript:
        "Mitarbeiter: Notieren Sie bitte: Die Anmeldung befindet sich in der Weberstraße siebzehn, nicht siebzig. Zuständig ist Frau Schmitt, mit tt am Ende. Ihre Vorgangsnummer lautet neun null vier fünf. Der Termin ist am dreizehnten März, also nicht am dreißigsten.",
      questions: [
        {
          id: "l1",
          stem: "Hausnummer",
          options: [
            { id: "a", text: "17" },
            { id: "b", text: "70" },
            { id: "c", text: "71" },
          ],
          answer: "a",
        },
        {
          id: "l2",
          stem: "Name der Zuständigen",
          options: [
            { id: "a", text: "Schmidt" },
            { id: "b", text: "Schmitt" },
            { id: "c", text: "Schmid" },
          ],
          answer: "b",
        },
        {
          id: "l3",
          stem: "Vorgangsnummer",
          options: [
            { id: "a", text: "9045" },
            { id: "b", text: "9405" },
            { id: "c", text: "9054" },
          ],
          answer: "a",
        },
        {
          id: "l4",
          stem: "Datum des Termins",
          options: [
            { id: "a", text: "30. März" },
            { id: "b", text: "13. März" },
            { id: "c", text: "3. März" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_HV_LAUT_SCHRIFT",
    title: "Angaben aus einer Durchsage: Gleise und Zeiten",
    prompt: "Hören Sie die Durchsage und wählen Sie die richtige Schreibweise.",
    topicTag: "verkehr",
    timeLimitSeconds: 300,
    payload: {
      instructions:
        "Sie hören Namen, Zahlen und Bezeichnungen. Wählen Sie jeweils die Schreibweise, die dem Gehörten entspricht.",
      audioScript:
        "Durchsage: Der Regionalzug nach Grünberg fährt heute ausnahmsweise von Gleis zwölf, nicht von Gleis zwei. Abfahrt ist um vierzehn Uhr fünfundvierzig. Reisende nach Grünthal benutzen bitte weiterhin Gleis sieben. Die Fahrzeit beträgt etwa fünfzig Minuten.",
      questions: [
        {
          id: "l1",
          stem: "Gleis für den Zug nach Grünberg",
          options: [
            { id: "a", text: "Gleis 2" },
            { id: "b", text: "Gleis 12" },
            { id: "c", text: "Gleis 20" },
          ],
          answer: "b",
        },
        {
          id: "l2",
          stem: "Abfahrtszeit",
          options: [
            { id: "a", text: "14:45" },
            { id: "b", text: "14:54" },
            { id: "c", text: "04:45" },
          ],
          answer: "a",
        },
        {
          id: "l3",
          stem: "Zielort auf Gleis 7",
          options: [
            { id: "a", text: "Grünberg" },
            { id: "b", text: "Grünthal" },
            { id: "c", text: "Grünwald" },
          ],
          answer: "b",
        },
        {
          id: "l4",
          stem: "Fahrzeit",
          options: [
            { id: "a", text: "15 Minuten" },
            { id: "b", text: "50 Minuten" },
            { id: "c", text: "55 Minuten" },
          ],
          answer: "b",
        },
      ],
    },
  },
];

// Repair answer-key distribution (see ./_permute.ts and the answer-distribution
// gate). MC Aufgaben get their options permuted deterministically so no option is
// dead or clustered; BEGRIFFSPAAR (binary category-assignment) gets its statements
// reordered so the key no longer runs a-b-a-b. Correctness is untouched.
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["TESTDAF_HV_MC", "TESTDAF_HV_FEHLER_ZUSAMMENFASSUNG", "TESTDAF_HV_LAUT_SCHRIFT"]),
  deRhythm: new Set(["TESTDAF_HV_BEGRIFFSPAAR"]),
});
