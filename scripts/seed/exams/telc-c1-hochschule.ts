// telc Deutsch C1 Hochschule — original practice items (CEFR C1). Five sections:
// Leseverstehen, Sprachbausteine, Hörverstehen (written part) + Schriftlicher and
// Mündlicher Ausdruck. Pass = 60% overall AND 60% each part; modular. Scored per
// skill (percentage-first) — the engine never depends on a fabricated grand total.
//
// ORIGINALITY (doctrine #1): every text, gap and task is ORIGINAL to AlmiGoethe —
// never copied or derived from telc / g.a.s.t. materials, Handbücher or Übungstests.
//
// Density target: 16 items/section (full build). Filled section-by-section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;
const EXAM = "TELC_C1_HOCHSCHULE" as const;

export const ITEMS: ExamItemInput[] = [
  // ----------------------------------------------------------------- HOERVERSTEHEN
  // telc C1 Hochschule Hörverstehen Teil 2 — detailliertes Hören: ONE longer text
  // (Vortrag oder Interview), 10 Mehrfachauswahl-Fragen (a/b/c), zweimal gehört.
  //
  // CONSOLIDATION: the previous bank held 16 short standalone audios with 3 MC each —
  // the WRONG architecture for Teil 2, which is one longer text carrying 10 questions.
  // Those 16 are removed here (deactivate-never-delete at reconcile); these five carry
  // the real shape.
  //
  // BALANCE IS AUTHORED, NOT DE-GAMED (ruling 4). The questions are order-bound to the
  // recording — a learner tracks answer 1..10 against audio that plays 1..10 — so
  // deRhythm's reorder would be a worse defect than any rhythm it repairs. The key
  // spread (aggregate a/b/c ≈ 16/17/17, top 34%, every option live, no uniform item)
  // is authored and ASSERTED at the foot of this file, never permuted.
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_T2_MC",
    title: "Vortrag: Mehrsprachigkeit an der Hochschule",
    prompt: "Hören Sie den Vortrag und beantworten Sie die zehn Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Sie hören einen längeren Vortrag, zweimal. Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "Meine Damen und Herren, ich möchte heute über Mehrsprachigkeit an Hochschulen sprechen. In der öffentlichen Debatte wird das Aufwachsen mit mehreren Sprachen gelegentlich noch als Belastung dargestellt. Die neuere Forschung widerspricht dieser Sicht deutlich. Zwar vermischen mehrsprachige Kinder in den ersten Jahren die Sprachen zuweilen, doch dieser Effekt verschwindet mit der Zeit von selbst. Langfristig zeigen viele mehrsprachige Sprecher sogar Vorteile, etwa eine größere geistige Flexibilität und ein feineres Gespür dafür, was ein Gegenüber tatsächlich versteht. Entscheidend ist jedoch, dass beide Sprachen im Alltag verlässlich gebraucht werden; eine Sprache, die kaum vorkommt, entwickelt sich zwangsläufig schwächer. An den Universitäten stellt sich die Frage neu, seit viele Studiengänge auf Englisch unterrichtet werden. Befürworter verweisen auf die internationale Anschlussfähigkeit der Absolventen. Kritiker warnen dagegen, dass die deutsche Fachsprache verkümmere, wenn sie in der Lehre nicht mehr geübt werde. Meine eigene Position ist, dass sich beides nicht ausschließt: Wer die Fachbegriffe in zwei Sprachen beherrscht, ist im Vorteil. Voraussetzung dafür ist allerdings, dass die Hochschulen beide Sprachen bewusst pflegen, statt die eine der anderen zu opfern. Studien schließlich, die einen unmittelbaren Zusammenhang zwischen Mehrsprachigkeit und besseren Prüfungsnoten behaupten, sehe ich mit Vorsicht; die Datenlage dazu ist bislang uneindeutig.",
      questions: [
        {
          id: "q1",
          stem: "Wie wird Mehrsprachigkeit in der öffentlichen Debatte laut Vortrag teils noch gesehen?",
          options: [
            { id: "a", text: "als eindeutiger Vorteil" },
            { id: "b", text: "als Belastung" },
            { id: "c", text: "als bedeutungslos" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was sagt die neuere Forschung zum Mischen der Sprachen bei Kindern?",
          options: [
            { id: "a", text: "Es verschwindet mit der Zeit von selbst." },
            { id: "b", text: "Es bleibt dauerhaft bestehen." },
            { id: "c", text: "Es tritt gar nicht auf." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welchen langfristigen Vorteil nennt der Vortragende?",
          options: [
            { id: "a", text: "ein besseres Zahlengedächtnis" },
            { id: "b", text: "eine höhere Lesegeschwindigkeit" },
            { id: "c", text: "eine größere geistige Flexibilität" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Welche Bedingung nennt er für eine gute Sprachentwicklung?",
          options: [
            { id: "a", text: "Beide Sprachen müssen im Alltag verlässlich gebraucht werden." },
            { id: "b", text: "Eine Sprache sollte klar bevorzugt werden." },
            { id: "c", text: "Die Sprachen sollten strikt getrennt bleiben." },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Warum stellt sich die Frage an Universitäten neu?",
          options: [
            { id: "a", text: "weil weniger Menschen studieren" },
            { id: "b", text: "weil viele Studiengänge auf Englisch unterrichtet werden" },
            { id: "c", text: "weil Fremdsprachen abgeschafft wurden" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Womit begründen die Befürworter des englischsprachigen Unterrichts ihre Position?",
          options: [
            { id: "a", text: "mit geringeren Kosten" },
            { id: "b", text: "mit besseren Bibliotheken" },
            { id: "c", text: "mit der internationalen Anschlussfähigkeit der Absolventen" },
          ],
          answer: "c",
        },
        {
          id: "q7",
          stem: "Was befürchten die Kritiker?",
          options: [
            { id: "a", text: "dass zu wenige Studierende Englisch lernen" },
            { id: "b", text: "dass die deutsche Fachsprache verkümmert" },
            { id: "c", text: "dass die Prüfungen zu leicht werden" },
          ],
          answer: "b",
        },
        {
          id: "q8",
          stem: "Wie lautet die eigene Position des Vortragenden?",
          options: [
            { id: "a", text: "Deutsch und Englisch in der Lehre schließen sich nicht aus." },
            { id: "b", text: "Nur Englisch sollte unterrichtet werden." },
            { id: "c", text: "Nur Deutsch sollte unterrichtet werden." },
          ],
          answer: "a",
        },
        {
          id: "q9",
          stem: "Welche Voraussetzung nennt er dafür?",
          options: [
            { id: "a", text: "dass die Studierenden im Ausland studieren" },
            { id: "b", text: "dass eine Sprache aufgegeben wird" },
            { id: "c", text: "dass die Hochschulen beide Sprachen bewusst pflegen" },
          ],
          answer: "c",
        },
        {
          id: "q10",
          stem: "Wie bewertet er Studien, die Mehrsprachigkeit direkt mit besseren Noten verbinden?",
          options: [
            { id: "a", text: "Er hält sie für eindeutig bewiesen." },
            { id: "b", text: "Er sieht sie mit Vorsicht, da die Datenlage uneindeutig ist." },
            { id: "c", text: "Er lehnt jede Forschung dazu grundsätzlich ab." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Einschränkende Signale („Entscheidend ist jedoch …“, „allerdings“, „mit Vorsicht“) tragen bei C1 oft die Antwort.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_T2_MC",
    title: "Interview: Arbeit in der Feldforschung",
    prompt: "Hören Sie das Interview und beantworten Sie die zehn Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Sie hören ein längeres Interview, zweimal. Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "MODERATOR: Frau Dr. Renner, Sie erforschen Gemeinschaften vor Ort, oft über viele Monate. Was ist dabei die größte Herausforderung? RENNER: Eindeutig, die nötige Distanz zu wahren. Man lebt lange mit den Menschen und muss dennoch den Blick von außen behalten. MODERATOR: Verändert Ihre bloße Anwesenheit nicht schon das, was Sie beobachten? RENNER: Doch, das lässt sich nie ganz vermeiden. Wichtig ist, diesen Einfluss offen zu benennen, statt so zu tun, als sei man unsichtbar. MODERATOR: Wie halten Sie Ihre Beobachtungen fest? RENNER: Ich schreibe jeden Abend ein ausführliches Feldtagebuch. Alles erst am Monatsende aus dem Gedächtnis zu rekonstruieren, wäre unzuverlässig. MODERATOR: Arbeiten Sie mit Aufnahmegeräten? RENNER: Nur mit Einverständnis, und längst nicht immer. Ein Mikrofon verändert die Gespräche mehr, als viele glauben. MODERATOR: Wie gehen Sie mit persönlichen Beziehungen um? RENNER: Behutsam. Vertrauen ist die Grundlage der Arbeit, aber ich muss aufpassen, dass Nähe mein Urteil nicht trübt. MODERATOR: Wem legen Sie Ihre Ergebnisse vor, bevor Sie veröffentlichen? RENNER: Zuerst den Beteiligten selbst. Sie sollen widersprechen können, wenn sie sich falsch dargestellt sehen. MODERATOR: Hat sich Ihre Methode über die Jahre geändert? RENNER: Ja. Früher hielt ich strikte Distanz für das Ideal, heute halte ich die ehrliche Reflexion der eigenen Rolle für wichtiger. MODERATOR: Und was raten Sie jungen Forschenden? RENNER: Geduld. Die aufschlussreichsten Beobachtungen kommen selten schon in den ersten Wochen.",
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Renner die größte Herausforderung?",
          options: [
            { id: "a", text: "genügend Fördermittel zu finden" },
            { id: "b", text: "die richtige Ausrüstung zu wählen" },
            { id: "c", text: "die nötige Distanz zu wahren" },
          ],
          answer: "c",
        },
        {
          id: "q2",
          stem: "Wie geht sie mit dem Einfluss ihrer Anwesenheit um?",
          options: [
            { id: "a", text: "Sie versucht, unsichtbar zu bleiben." },
            { id: "b", text: "Sie benennt ihn offen." },
            { id: "c", text: "Sie bricht die Forschung ab." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wie hält sie ihre Beobachtungen fest?",
          options: [
            { id: "a", text: "in einem täglichen Feldtagebuch" },
            { id: "b", text: "aus dem Gedächtnis erst am Monatsende" },
            { id: "c", text: "ausschließlich per Video" },
          ],
          answer: "a",
        },
        {
          id: "q4",
          stem: "Wie steht sie zu Aufnahmegeräten?",
          options: [
            { id: "a", text: "Sie setzt sie immer ein." },
            { id: "b", text: "Nur mit Einverständnis und nicht immer." },
            { id: "c", text: "Sie lehnt sie grundsätzlich ab." },
          ],
          answer: "b",
        },
        {
          id: "q5",
          stem: "Worauf achtet sie bei persönlichen Beziehungen?",
          options: [
            { id: "a", text: "dass sie gar keinen Kontakt hat" },
            { id: "b", text: "dass sie möglichst schnell fertig wird" },
            { id: "c", text: "dass Nähe ihr Urteil nicht trübt" },
          ],
          answer: "c",
        },
        {
          id: "q6",
          stem: "Wem legt sie ihre Ergebnisse zuerst vor?",
          options: [
            { id: "a", text: "den Beteiligten selbst" },
            { id: "b", text: "der Presse" },
            { id: "c", text: "einem Geldgeber" },
          ],
          answer: "a",
        },
        {
          id: "q7",
          stem: "Warum legt sie die Ergebnisse zuerst diesen Personen vor?",
          options: [
            { id: "a", text: "um Werbung für ihre Arbeit zu machen" },
            { id: "b", text: "um Kosten zu sparen" },
            { id: "c", text: "damit sie widersprechen können, wenn sie sich falsch dargestellt sehen" },
          ],
          answer: "c",
        },
        {
          id: "q8",
          stem: "Wie hat sich ihre Methode über die Jahre geändert?",
          options: [
            { id: "a", text: "Ehrliche Reflexion der eigenen Rolle ist ihr heute wichtiger als strikte Distanz." },
            { id: "b", text: "Sie hält heute strikte Distanz für das alleinige Ideal." },
            { id: "c", text: "Sie verzichtet heute ganz auf Beobachtung." },
          ],
          answer: "a",
        },
        {
          id: "q9",
          stem: "Was war früher ihr Ideal?",
          options: [
            { id: "a", text: "möglichst große Nähe" },
            { id: "b", text: "strikte Distanz" },
            { id: "c", text: "der Verzicht auf ein Tagebuch" },
          ],
          answer: "b",
        },
        {
          id: "q10",
          stem: "Was rät sie jungen Forschenden?",
          options: [
            { id: "a", text: "möglichst schnell zu publizieren" },
            { id: "b", text: "Aufnahmegeräte immer einzusetzen" },
            { id: "c", text: "Geduld, da aufschlussreiche Beobachtungen selten früh kommen" },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "Bei Interviews sitzt die Antwort in der Aussage der befragten Person, nicht in der Frage des Moderators.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_T2_MC",
    title: "Vortrag: Wie das Gedächtnis rekonstruiert",
    prompt: "Hören Sie den Vortrag und beantworten Sie die zehn Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Sie hören einen längeren Vortrag, zweimal. Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "Meine Damen und Herren, wir stellen uns die Erinnerung gern wie ein Archiv vor, aus dem wir gespeicherte Aufnahmen unverändert abrufen. Die Gedächtnisforschung zeichnet ein anderes Bild. Jede Erinnerung wird im Augenblick des Abrufs neu zusammengesetzt, und dabei fließen unser heutiges Wissen und unsere Erwartungen mit ein. Das erklärt, warum zwei Zeugen dasselbe Ereignis unterschiedlich schildern. Es erklärt auch, warum Erinnerungen sich mit der Zeit verändern können, ohne dass wir es bemerken. Besonders eindrücklich zeigen das Experimente, in denen sich Versuchspersonen an Ereignisse erinnerten, die nie stattgefunden hatten, nachdem man sie ihnen nur eindringlich geschildert hatte. Daraus folgt aber nicht, dass unser Gedächtnis wertlos wäre. Für den Alltag ist es erstaunlich zuverlässig. Problematisch wird die Sache erst dort, wo großes Gewicht auf einer einzelnen Erinnerung ruht, etwa vor Gericht. Fachleute empfehlen deshalb, Zeugenaussagen möglichst früh und ohne suggestive Fragen aufzunehmen. Auch die Sicherheit, mit der jemand etwas berichtet, ist übrigens kein verlässliches Maß für die Richtigkeit: Menschen können sich sehr sicher sein und sich dennoch irren. Erinnern, so mein Fazit, ist weniger ein Wiedergeben als ein Neuerschaffen.",
      questions: [
        {
          id: "q1",
          stem: "Wie stellen wir uns Erinnerung laut Vortrag oft vor?",
          options: [
            { id: "a", text: "wie ein Archiv mit unveränderten Aufnahmen" },
            { id: "b", text: "wie eine unbeschriebene Tafel" },
            { id: "c", text: "wie eine fehlerfreie Kamera" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was geschieht laut Forschung beim Abruf einer Erinnerung?",
          options: [
            { id: "a", text: "Sie bleibt exakt erhalten." },
            { id: "b", text: "Sie wird vollständig gelöscht." },
            { id: "c", text: "Sie wird neu zusammengesetzt." },
          ],
          answer: "c",
        },
        {
          id: "q3",
          stem: "Was fließt beim Abruf mit ein?",
          options: [
            { id: "a", text: "nur die ursprünglichen Sinneseindrücke" },
            { id: "b", text: "unser heutiges Wissen und unsere Erwartungen" },
            { id: "c", text: "ausschließlich Gefühle" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Womit erklärt der Vortrag unterschiedliche Zeugenaussagen?",
          options: [
            { id: "a", text: "mit absichtlicher Täuschung" },
            { id: "b", text: "mit schlechtem Hörvermögen" },
            { id: "c", text: "mit der rekonstruktiven Natur des Erinnerns" },
          ],
          answer: "c",
        },
        {
          id: "q5",
          stem: "Was zeigten die erwähnten Experimente?",
          options: [
            { id: "a", text: "Menschen erinnerten sich an Ereignisse, die nie stattgefunden hatten." },
            { id: "b", text: "Menschen vergaßen alle geschilderten Ereignisse." },
            { id: "c", text: "Menschen erinnerten sich stets völlig korrekt." },
          ],
          answer: "a",
        },
        {
          id: "q6",
          stem: "Wie bewertet der Vortrag das Gedächtnis für den Alltag?",
          options: [
            { id: "a", text: "als völlig unbrauchbar" },
            { id: "b", text: "als erstaunlich zuverlässig" },
            { id: "c", text: "als durchweg gefährlich" },
          ],
          answer: "b",
        },
        {
          id: "q7",
          stem: "Wann wird die Sache laut Vortrag problematisch?",
          options: [
            { id: "a", text: "wenn großes Gewicht auf einer einzelnen Erinnerung ruht" },
            { id: "b", text: "wenn viele Zeugen übereinstimmen" },
            { id: "c", text: "wenn Erinnerungen schriftlich vorliegen" },
          ],
          answer: "a",
        },
        {
          id: "q8",
          stem: "Was empfehlen Fachleute für Zeugenaussagen?",
          options: [
            { id: "a", text: "sie möglichst spät aufzunehmen" },
            { id: "b", text: "sie durch gezielte Vorschläge zu stützen" },
            { id: "c", text: "sie früh und ohne suggestive Fragen aufzunehmen" },
          ],
          answer: "c",
        },
        {
          id: "q9",
          stem: "Was sagt der Vortrag über die Sicherheit einer Aussage?",
          options: [
            { id: "a", text: "Sie beweist die Richtigkeit." },
            { id: "b", text: "Sie ist kein verlässliches Maß für die Richtigkeit." },
            { id: "c", text: "Sie ist immer nur gespielt." },
          ],
          answer: "b",
        },
        {
          id: "q10",
          stem: "Wie fasst der Vortragende das Erinnern zusammen?",
          options: [
            { id: "a", text: "als Neuerschaffen statt bloßes Wiedergeben" },
            { id: "b", text: "als exaktes Wiedergeben" },
            { id: "c", text: "als reines Vergessen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„weniger ein … als ein …“ am Schluss formuliert die Kernthese — ein häufiger Prüfungsfokus.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_T2_MC",
    title: "Interview: Open Access in der Wissenschaft",
    prompt: "Hören Sie das Interview und beantworten Sie die zehn Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Sie hören ein längeres Interview, zweimal. Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "MODERATORIN: Herr Dr. Vogt, Sie setzen sich für den freien Zugang zu Forschungsergebnissen ein, für Open Access. Worum geht es dabei im Kern? VOGT: Darum, dass Forschung, die mit öffentlichen Mitteln bezahlt wurde, auch für alle frei zugänglich sein sollte, statt hinter teuren Bezahlschranken zu liegen. MODERATORIN: Die Verlage verweisen auf ihre Kosten. VOGT: Zu Recht, Begutachtung und Herausgabe kosten Geld. Nur verschwinden diese Kosten beim Open Access nicht, sie verlagern sich lediglich von den Lesenden zu den Autoren, die für die Veröffentlichung zahlen. MODERATORIN: Ist das nicht auch ein Problem? VOGT: Ein erhebliches sogar. Forschende aus ärmeren Einrichtungen können sich hohe Publikationsgebühren oft nicht leisten. Die Zugangshürde wandert also nur von der einen auf die andere Seite. MODERATORIN: Wie ließe sich das lösen? VOGT: Am ehesten durch Modelle, die von Bibliotheken oder Konsortien getragen werden, sodass weder Leser noch Autor einzeln zahlen. MODERATORIN: Sie fordern auch, dass Wissenschaftler ihre Arbeit allgemein verständlich erklären. Warum? VOGT: Weil eine informierte Öffentlichkeit bessere Entscheidungen trifft und weil sie die Forschung ja mitfinanziert. MODERATORIN: Kritiker sagen, Vereinfachung führe zu Fehlern. VOGT: Diese Gefahr besteht, ich bestreite sie nicht. Aber die Antwort darauf ist gute Vermittlung, nicht Schweigen. MODERATORIN: Sollte öffentliche Kommunikation die Karriere fördern? VOGT: Unbedingt. Solange sie nicht zählt, werden viele sie als verlorene Zeit ansehen. MODERATORIN: Ihr wichtigster Punkt zum Schluss? VOGT: Wissen, das die Allgemeinheit bezahlt hat, sollte der Allgemeinheit auch gehören.",
      questions: [
        {
          id: "q1",
          stem: "Was fordert Open Access im Kern?",
          options: [
            { id: "a", text: "höhere Preise für Fachzeitschriften" },
            { id: "b", text: "freien Zugang zu öffentlich finanzierter Forschung" },
            { id: "c", text: "ein Ende aller Veröffentlichungen" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wie steht Vogt zu den Kosten der Verlage?",
          options: [
            { id: "a", text: "Er bestreitet, dass überhaupt Kosten entstehen." },
            { id: "b", text: "Er hält die Verlage für vollkommen überflüssig." },
            { id: "c", text: "Er erkennt an, dass Begutachtung und Herausgabe Geld kosten." },
          ],
          answer: "c",
        },
        {
          id: "q3",
          stem: "Was passiert laut Vogt mit den Kosten beim Open Access?",
          options: [
            { id: "a", text: "Sie verlagern sich von den Lesern zu den Autoren." },
            { id: "b", text: "Sie verschwinden vollständig." },
            { id: "c", text: "Sie steigen allein für die Leser." },
          ],
          answer: "a",
        },
        {
          id: "q4",
          stem: "Welches Problem sieht er dabei?",
          options: [
            { id: "a", text: "dass niemand mehr publiziert" },
            { id: "b", text: "dass die Verlage bankrottgehen" },
            { id: "c", text: "dass ärmere Einrichtungen die Publikationsgebühren kaum zahlen können" },
          ],
          answer: "c",
        },
        {
          id: "q5",
          stem: "Wie ließe sich das seiner Meinung nach lösen?",
          options: [
            { id: "a", text: "durch höhere Gebühren für Leser" },
            { id: "b", text: "durch Modelle, die von Bibliotheken oder Konsortien getragen werden" },
            { id: "c", text: "durch Abschaffung der Begutachtung" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Warum sollen Wissenschaftler ihre Arbeit verständlich erklären?",
          options: [
            { id: "a", text: "weil eine informierte Öffentlichkeit bessere Entscheidungen trifft" },
            { id: "b", text: "weil es die Druckkosten senkt" },
            { id: "c", text: "weil Fachzeitschriften es vorschreiben" },
          ],
          answer: "a",
        },
        {
          id: "q7",
          stem: "Wie reagiert Vogt auf den Einwand, Vereinfachung führe zu Fehlern?",
          options: [
            { id: "a", text: "Er hält den Einwand für völlig unsinnig." },
            { id: "b", text: "Er räumt die Gefahr ein, fordert aber gute Vermittlung statt Schweigen." },
            { id: "c", text: "Er rät Wissenschaftlern, nicht mehr öffentlich zu sprechen." },
          ],
          answer: "b",
        },
        {
          id: "q8",
          stem: "Was meint er zur Rolle öffentlicher Kommunikation in der Karriere?",
          options: [
            { id: "a", text: "Sie sollte keinerlei Rolle spielen." },
            { id: "b", text: "Sie sollte eher bestraft werden." },
            { id: "c", text: "Sie sollte zählen, sonst gilt sie vielen als verlorene Zeit." },
          ],
          answer: "c",
        },
        {
          id: "q9",
          stem: "Wie lautet sein wichtigster Punkt zum Schluss?",
          options: [
            { id: "a", text: "Wissen, das die Allgemeinheit bezahlt hat, sollte ihr auch gehören." },
            { id: "b", text: "Forschung sollte grundsätzlich geheim bleiben." },
            { id: "c", text: "Allein die Verlage sollten entscheiden." },
          ],
          answer: "a",
        },
        {
          id: "q10",
          stem: "Wie ist Vogts Haltung zu den Verlagen insgesamt?",
          options: [
            { id: "a", text: "grundsätzlich ablehnend" },
            { id: "b", text: "differenziert — er erkennt ihre Leistung an, kritisiert aber die Zugangshürden" },
            { id: "c", text: "völlig gleichgültig" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achten Sie auf Zugeständnisse („Zu Recht …“, „ich bestreite sie nicht“) — sie trennen die differenzierte von der pauschalen Antwort.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_T2_MC",
    title: "Vortrag: Warum Prognosen an Grenzen stoßen",
    prompt: "Hören Sie den Vortrag und beantworten Sie die zehn Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Sie hören einen längeren Vortrag, zweimal. Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      audioScript:
        "Guten Tag. Ich möchte erklären, warum Vorhersagen über die Zukunft aus einem grundsätzlichen Grund schwierig sind. Viele Systeme, ob das Wetter oder eine Volkswirtschaft, reagieren empfindlich auf kleinste Unterschiede in den Ausgangsbedingungen. Ein winziger Fehler in den Anfangsdaten kann sich aufschaukeln und die Prognose nach kurzer Zeit unbrauchbar machen. Man nennt das die Empfindlichkeit gegenüber den Anfangsbedingungen. Daraus folgt aber nicht, dass Vorhersagen sinnlos wären. Für kurze Zeiträume sind sie oft erstaunlich verlässlich; die Wettervorhersage für morgen trifft meist zu. Je weiter wir jedoch in die Zukunft blicken, desto größer wird die Unsicherheit. Wichtig ist: Das ist keine Frage besserer Rechner, sondern liegt in der Natur solcher Systeme selbst. Ein schnellerer Computer verschiebt die Grenze nur ein wenig, er hebt sie nicht auf. Sinnvoll ist deshalb, nicht eine einzige Zahl zu nennen, sondern mit Wahrscheinlichkeiten und Bandbreiten zu arbeiten. Und man sollte Prognosen regelmäßig überprüfen und anpassen, sobald neue Daten vorliegen. Wer dagegen eine punktgenaue Vorhersage für zehn Jahre verspricht, verkennt entweder die Sache oder verspricht zu viel. Mein Fazit: Prognosen sind nützlich, solange man ihre Grenzen kennt und offen ausspricht.",
      questions: [
        {
          id: "q1",
          stem: "Warum sind Vorhersagen laut Vortrag grundsätzlich schwierig?",
          options: [
            { id: "a", text: "weil es nie genügend Daten gibt" },
            { id: "b", text: "weil sich niemand dafür interessiert" },
            { id: "c", text: "weil viele Systeme empfindlich auf kleinste Ausgangsunterschiede reagieren" },
          ],
          answer: "c",
        },
        {
          id: "q2",
          stem: "Was kann ein winziger Fehler in den Anfangsdaten bewirken?",
          options: [
            { id: "a", text: "Er kann sich aufschaukeln und die Prognose unbrauchbar machen." },
            { id: "b", text: "Er bleibt stets folgenlos." },
            { id: "c", text: "Er verbessert die Vorhersage." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie nennt man diese Eigenschaft?",
          options: [
            { id: "a", text: "Trägheit der Systeme" },
            { id: "b", text: "Empfindlichkeit gegenüber den Anfangsbedingungen" },
            { id: "c", text: "Gleichgewicht der Kräfte" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Was sagt der Vortrag über kurze Zeiträume?",
          options: [
            { id: "a", text: "Vorhersagen sind dort oft erstaunlich verlässlich." },
            { id: "b", text: "Vorhersagen sind dort am schwierigsten." },
            { id: "c", text: "Vorhersagen sind dort völlig unmöglich." },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Woran liegt die wachsende Unsicherheit bei langen Zeiträumen?",
          options: [
            { id: "a", text: "an zu langsamen Rechnern" },
            { id: "b", text: "allein an ungenauen Messgeräten" },
            { id: "c", text: "an der Natur solcher Systeme selbst" },
          ],
          answer: "c",
        },
        {
          id: "q6",
          stem: "Was bewirkt ein schnellerer Computer laut Vortrag?",
          options: [
            { id: "a", text: "Er hebt die Grenze der Vorhersagbarkeit auf." },
            { id: "b", text: "Er verschiebt die Grenze nur ein wenig." },
            { id: "c", text: "Er macht Prognosen völlig unmöglich." },
          ],
          answer: "b",
        },
        {
          id: "q7",
          stem: "Was empfiehlt der Vortragende statt einer einzigen Zahl?",
          options: [
            { id: "a", text: "gänzlich auf eine Vorhersage zu verzichten" },
            { id: "b", text: "eine punktgenaue Jahreszahl zu nennen" },
            { id: "c", text: "mit Wahrscheinlichkeiten und Bandbreiten zu arbeiten" },
          ],
          answer: "c",
        },
        {
          id: "q8",
          stem: "Was soll man mit Prognosen tun, sobald neue Daten vorliegen?",
          options: [
            { id: "a", text: "sie regelmäßig überprüfen und anpassen" },
            { id: "b", text: "sie unverändert lassen" },
            { id: "c", text: "sie sofort verwerfen" },
          ],
          answer: "a",
        },
        {
          id: "q9",
          stem: "Wie beurteilt er jemanden, der eine punktgenaue Zehnjahresprognose verspricht?",
          options: [
            { id: "a", text: "als besonders zuverlässig" },
            { id: "b", text: "als jemanden, der die Sache verkennt oder zu viel verspricht" },
            { id: "c", text: "als vorbildlich vorsichtig" },
          ],
          answer: "b",
        },
        {
          id: "q10",
          stem: "Wie lautet sein Fazit?",
          options: [
            { id: "a", text: "Prognosen sind grundsätzlich sinnlos." },
            { id: "b", text: "Prognosen gelingen mit besseren Rechnern immer." },
            { id: "c", text: "Prognosen sind nützlich, solange man ihre Grenzen kennt und ausspricht." },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "Der Vortrag betont, das Problem liege nicht an den Rechnern, sondern in der Natur der Systeme — ein beliebter Distraktor.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Leserbrief: Anwesenheitspflicht an der Universität",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "In der Universitätszeitung ist ein Beitrag erschienen, der eine strikte Anwesenheitspflicht in Seminaren fordert. Sie möchten darauf mit einem Leserbrief reagieren.",
      instruction:
        "Verfassen Sie einen Leserbrief. Nehmen Sie Bezug auf die Forderung, führen Sie Argumente für Ihre Sichtweise an, gehen Sie auf mindestens einen Gegeneinwand ein und schließen Sie mit einer klaren Position. Achten Sie auf einen angemessenen, sachlichen Stil.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote:
      "Ein Leserbrief braucht Anrede, Bezug zum Artikel und Gruß. Auf C1-Niveau werden Abwägung und präzise Konnektoren erwartet.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: KI-Werkzeuge in Hausarbeiten",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "An Ihrer Hochschule wird diskutiert, ob und wie Studierende Programme mit künstlicher Intelligenz beim Schreiben von Hausarbeiten nutzen dürfen.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erläutern Sie Chancen und Risiken solcher Werkzeuge für das wissenschaftliche Arbeiten, gehen Sie auf einen möglichen Einwand ein und begründen Sie am Ende eine eigene, abgewogene Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Unterscheiden Sie zwischen Hilfsmittel und Ersatz eigener Leistung — das ist der Kern der Debatte.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Präsenz- oder Online-Lehre",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Nach den Erfahrungen mit digitaler Lehre wird an vielen Hochschulen erwogen, einen festen Anteil der Veranstaltungen dauerhaft online anzubieten.",
      instruction:
        "Verfassen Sie eine Stellungnahme. Wägen Sie Vor- und Nachteile von Präsenz- und Online-Lehre ab, berücksichtigen Sie unterschiedliche Fächer oder Situationen und formulieren Sie eine begründete Empfehlung.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Differenzieren Sie nach Veranstaltungsart: Vorlesung, Seminar, Labor verlangen Unterschiedliches.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Englisch als Wissenschaftssprache",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "In der Forschung wird zunehmend auf Englisch publiziert. Manche begrüßen dies als gemeinsame Sprache, andere fürchten um die Rolle des Deutschen in der Wissenschaft.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie Vor- und Nachteile einer dominanten Wissenschaftssprache, gehen Sie auf einen Gegeneinwand ein und begründen Sie Ihre eigene Haltung.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Denken Sie an Reichweite gegen Zugänglichkeit sowie an Fachbegriffe, die sich schwer übersetzen lassen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Anwesenheit als Studienleistung",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "An einer Fakultät wird vorgeschlagen, gesellschaftliches Engagement der Studierenden künftig als Studienleistung anzurechnen.",
      instruction:
        "Verfassen Sie eine Stellungnahme. Erörtern Sie, ob freiwilliges Engagement angerechnet werden sollte, wägen Sie mögliche Folgen ab und begründen Sie Ihre Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Prüfen Sie, ob eine Anrechnung die Freiwilligkeit des Engagements untergräbt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Leserbrief: Studiengebühren für internationale Studierende",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "In einer Zeitung wurde vorgeschlagen, von internationalen Studierenden höhere Gebühren zu verlangen. Sie möchten mit einem Leserbrief reagieren.",
      instruction:
        "Verfassen Sie einen Leserbrief. Nehmen Sie Bezug auf den Vorschlag, führen Sie Argumente an, gehen Sie auf einen Gegeneinwand ein und schließen Sie mit einer klaren Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Ein Leserbrief braucht Bezug zum Artikel, sachlichen Ton und einen deutlichen Standpunkt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Recht auf Homeoffice",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Es wird diskutiert, ob Beschäftigte ein gesetzliches Recht auf Arbeit von zu Hause erhalten sollten, sofern die Tätigkeit es zulässt.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie Vor- und Nachteile eines solchen Rechts für Beschäftigte und Unternehmen und begründen Sie Ihre eigene Einschätzung.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Beziehen Sie beide Seiten ein: Flexibilität für Beschäftigte, Organisation für Betriebe.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Ein Tempolimit auf Autobahnen",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "verkehr",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Über ein allgemeines Tempolimit auf Autobahnen wird seit Langem gestritten. Befürworter nennen Sicherheit und Umwelt, Gegner die persönliche Freiheit.",
      instruction:
        "Verfassen Sie eine Stellungnahme. Erörtern Sie die wichtigsten Argumente für und gegen ein Tempolimit, gehen Sie auf einen Einwand ein und begründen Sie Ihre Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Trennen Sie belegbare Wirkungen (Sicherheit, Emissionen) von Wertfragen (Freiheit).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Kulturförderung mit Steuergeld",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "kultur",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Theater, Museen und Orchester werden vielerorts mit öffentlichen Mitteln unterstützt. Manche fragen, ob sich der Staat das leisten sollte.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie, ob Kultur mit Steuergeld gefördert werden sollte, wägen Sie Gegenargumente ab und begründen Sie Ihre Sichtweise.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Denken Sie an den Wert kultureller Teilhabe gegenüber der Frage nach Prioritäten öffentlicher Mittel.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Weniger Einwegverpackungen",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Um Abfall zu verringern, wird vorgeschlagen, Einwegverpackungen stärker zu besteuern und Mehrwegsysteme verpflichtend zu machen.",
      instruction:
        "Verfassen Sie eine Stellungnahme. Erörtern Sie Vor- und Nachteile solcher Maßnahmen für Verbraucher und Handel und begründen Sie, ob Sie sie befürworten.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Wägen Sie Umweltnutzen gegen praktische Umsetzbarkeit und Kosten ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Grünflächen in der Stadt",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Eine Stadt möchte mehr Parks und begrünte Flächen schaffen. Dafür müssten jedoch teils Parkplätze oder Bauflächen weichen.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie Nutzen und mögliche Nachteile von mehr Grünflächen und begründen Sie, welchen Weg Sie für sinnvoll halten.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Konkrete Abwägungen (Klima, Erholung vs. Wohnraum, Verkehr) wirken überzeugender als Allgemeinplätze.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Soziale Netzwerke stärker regulieren",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Angesichts von Falschmeldungen wird gefordert, soziale Netzwerke gesetzlich stärker zu regulieren. Kritiker warnen vor Eingriffen in die Meinungsfreiheit.",
      instruction:
        "Verfassen Sie eine Stellungnahme. Erörtern Sie, wie sich der Schutz vor Falschinformation und die Meinungsfreiheit gegenüberstehen, und begründen Sie eine abgewogene Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Das Spannungsfeld Schutz ↔ Freiheit ist der Kern — vermeiden Sie einseitige Lösungen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Die Vier-Tage-Woche",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Einige Unternehmen erproben eine Arbeitswoche von vier Tagen bei gleichem Lohn. Die Ergebnisse werden unterschiedlich bewertet.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie Chancen und Grenzen der Vier-Tage-Woche für verschiedene Branchen und begründen Sie Ihre eigene Einschätzung.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Unterscheiden Sie Branchen mit festen Schichten von solchen mit flexibler Projektarbeit.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Ehrenamt und Gesellschaft",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Viele wichtige Aufgaben, von der Feuerwehr bis zur Nachhilfe, werden ehrenamtlich erfüllt. Es wird diskutiert, wie sich freiwilliges Engagement fördern lässt.",
      instruction:
        "Verfassen Sie eine Stellungnahme. Erörtern Sie, welche Bedeutung ehrenamtliches Engagement hat und wie man es unterstützen könnte, und begründen Sie Ihre Vorschläge.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Konkrete Fördervorschläge (Zeit, Anerkennung, Ausbildung) sind überzeugender als reine Appelle.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Lebenslanges Lernen",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Weil sich Berufe rasch verändern, wird gefordert, dass Menschen sich ihr Leben lang weiterbilden. Wer dafür Zeit und Kosten tragen soll, ist umstritten.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie die Bedeutung lebenslangen Lernens und die Frage der Verantwortung, gehen Sie auf einen Einwand ein und begründen Sie Ihre Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Verteilen Sie die Verantwortung differenziert: Einzelne, Arbeitgeber, Staat — mit Begründung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_STELLUNGNAHME",
    title: "Stellungnahme: Wissenschaft und Öffentlichkeit",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "Von Forschenden wird zunehmend erwartet, ihre Ergebnisse einer breiten Öffentlichkeit verständlich zu erklären. Manche sehen darin eine Pflicht, andere eine Ablenkung von der eigentlichen Arbeit.",
      instruction:
        "Verfassen Sie eine argumentative Stellungnahme. Erörtern Sie, ob und in welchem Maße Forschende zur Vermittlung ihrer Arbeit verpflichtet sind, gehen Sie auf einen Gegeneinwand ein und begründen Sie Ihre Position.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote: "Wägen Sie den gesellschaftlichen Nutzen der Vermittlung gegen die begrenzte Zeit für Forschung ab.",
  },

  // ------------------------------------------------------------- MUENDLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Vor- und Nachteile von Online-Prüfungen",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Im mündlichen Teil sollen Sie ein Thema strukturiert präsentieren. Ihr Thema lautet: Sollten Hochschulen Prüfungen vermehrt online abnehmen?",
      instruction:
        "Halten Sie einen kurzen, gegliederten Vortrag. Führen Sie in das Thema ein, nennen Sie Vor- und Nachteile von Online-Prüfungen und schließen Sie mit einer begründeten Empfehlung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote:
      "Gliedern Sie klar: Einleitung – Vorteile – Nachteile – Fazit. Redemittel: „Zunächst …“, „Ein weiterer Aspekt …“, „Abschließend …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Anwesenheitspflicht an der Universität",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sollte an Universitäten eine allgemeine Anwesenheitspflicht in Seminaren gelten?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Führen Sie in das Thema ein, nennen Sie Argumente für und gegen eine Anwesenheitspflicht und schließen Sie mit einer begründeten Empfehlung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Gliedern Sie: Einleitung – Pro – Kontra – Fazit. Konnektoren zeigen Ihr Niveau.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Ein Studium im Ausland",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Welche Vor- und Nachteile hat ein Studienaufenthalt im Ausland?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Stellen Sie das Thema vor, erörtern Sie Chancen und mögliche Schwierigkeiten und schließen Sie mit Ihrer eigenen Einschätzung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Nennen Sie konkrete Aspekte: Sprache, Kosten, Anerkennung, persönliche Entwicklung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Verständliche Wissenschaft",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sollten Forschende verpflichtet sein, ihre Arbeit allgemein verständlich zu erklären?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Führen Sie in die Frage ein, nennen Sie Argumente dafür und dagegen und schließen Sie mit einer begründeten Position.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Wägen Sie gesellschaftlichen Nutzen gegen den Zeitaufwand für die Forschung ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Fremdsprachen im Studium",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Wie wichtig ist das Beherrschen mehrerer Fremdsprachen im Studium und Beruf?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Stellen Sie das Thema vor, nennen Sie Argumente und Beispiele und schließen Sie mit Ihrer eigenen Einschätzung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Ein konkretes Beispiel aus Studium oder Beruf macht den Vortrag anschaulicher.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Gedruckte oder digitale Fachliteratur",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "medien",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sollte man im Studium eher gedruckte oder digitale Fachliteratur nutzen?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erörtern Sie Vor- und Nachteile beider Formen und schließen Sie mit einer begründeten Empfehlung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Vergleichen Sie klar: Verfügbarkeit, Konzentration, Kosten, Umwelt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Der Nutzen von Gruppenarbeit",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Ist Gruppenarbeit im Studium sinnvoll oder eher hinderlich?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Nennen Sie Vor- und Nachteile der Gruppenarbeit und schließen Sie mit Ihrer eigenen Einschätzung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Denken Sie an unterschiedliche Beiträge, Lerneffekte und mögliche Konflikte.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Noten oder nur bestanden?",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sollten Prüfungen benotet werden oder genügt die Unterscheidung bestanden/nicht bestanden?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erörtern Sie Argumente für Noten und für ein reines Bestehen und schließen Sie mit einer begründeten Position.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Denken Sie an Vergleichbarkeit, Leistungsdruck und Motivation.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Praktika im Studium",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Welche Rolle sollten Praktika während des Studiums spielen?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Nennen Sie Nutzen und mögliche Nachteile von Praktika und schließen Sie mit Ihrer eigenen Einschätzung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Berücksichtigen Sie Praxisbezug, Zeitaufwand und die Frage der Bezahlung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Ranglisten für Universitäten",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sind Ranglisten, die Universitäten vergleichen, hilfreich oder irreführend?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erörtern Sie Vor- und Nachteile solcher Ranglisten und schließen Sie mit einer begründeten Position.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Hinterfragen Sie, was gemessen wird und was dabei unberücksichtigt bleibt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Der Wert der Grundlagenforschung",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sollte Forschung, deren Nutzen nicht sofort erkennbar ist, öffentlich gefördert werden?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Nennen Sie Argumente für und gegen die Förderung solcher Grundlagenforschung und schließen Sie mit Ihrer begründeten Meinung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Ein Beispiel für später nützliche Grundlagenforschung stärkt Ihre Argumentation.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Studienwahl nach Neigung oder Aussicht",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Sollte man ein Studienfach eher nach persönlicher Neigung oder nach den Berufsaussichten wählen?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erörtern Sie beide Sichtweisen und schließen Sie mit einer begründeten Empfehlung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Ein Mittelweg (Neigung mit Blick auf Realität) ist oft die tragfähigste Position.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Kritisches Denken im Studium",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Warum ist kritisches Denken im Studium wichtig, und wie lässt es sich fördern?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erläutern Sie die Bedeutung kritischen Denkens, nennen Sie Wege, es zu fördern, und schließen Sie mit einem Fazit.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Konkrete Beispiele (Quellen prüfen, Argumente hinterfragen) machen den Vortrag greifbar.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Auslandserfahrung und Beruf",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Wie wertvoll ist Auslandserfahrung für die spätere berufliche Laufbahn?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Nennen Sie Vorteile und mögliche Nachteile von Auslandserfahrung und schließen Sie mit Ihrer eigenen Einschätzung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Denken Sie an Sprachkenntnisse, Selbstständigkeit und interkulturelle Kompetenz.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Lebenslanges Lernen",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Warum wird lebenslanges Lernen immer wichtiger, und wer sollte dafür Verantwortung tragen?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erläutern Sie die Bedeutung ständiger Weiterbildung, erörtern Sie die Frage der Verantwortung und schließen Sie mit einer begründeten Position.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Verteilen Sie Verantwortung differenziert: Einzelne, Arbeitgeber, Staat.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_T1A_PRAESENTATION",
    title: "Kurzvortrag: Digitale Werkzeuge beim Lernen",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Ihr Thema lautet: Helfen digitale Werkzeuge beim Lernen oder lenken sie eher ab?",
      instruction:
        "Halten Sie einen gegliederten Vortrag. Erörtern Sie Chancen und Risiken digitaler Werkzeuge für das Lernen und schließen Sie mit einer begründeten Empfehlung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Es kommt auf den bewussten Einsatz an — dieser Gedanke trägt ein differenziertes Fazit.",
  },
];

// ── HV TEIL 2: authored balance, ASSERTED — never de-gamed (ruling 4) ────────
// The ten questions are order-bound to the recording, so deRhythm's reorder is the
// wrong tool here: a learner would track answer 1..10 against audio that plays 1..10.
// Balance is authored above and verified at seed time instead, mirroring the
// answer-distribution gate's own MC rules — no item may be uniform, every option must
// stay live across the Aufgabe, and none may cluster past 60%. A future edit that
// unbalances the set throws here, at seed time, rather than shipping and waiting for
// the gate to notice.
(function assertHvT2Balance() {
  const t2 = ITEMS.filter((it) => it.taskType === "TELC_C1H_HV_T2_MC");
  const agg: Record<string, number> = {};
  let total = 0;
  for (const it of t2) {
    const seq = ((it.payload as { questions: { answer: string }[] }).questions).map((q) => q.answer);
    if (new Set(seq).size < 2) throw new Error(`HV T2 "${it.title}": answer sequence is uniform (${seq.join("")})`);
    for (const a of seq) {
      agg[a] = (agg[a] ?? 0) + 1;
      total++;
    }
  }
  for (const opt of ["a", "b", "c"]) {
    if (!agg[opt]) throw new Error(`HV T2: option "${opt}" is never correct across ${total} questions (dead option)`);
    if (agg[opt] / total > 0.6) throw new Error(`HV T2: option "${opt}" is ${agg[opt]}/${total} (${Math.round((100 * agg[opt]) / total)}%) — clustered past 60%`);
  }
})();
