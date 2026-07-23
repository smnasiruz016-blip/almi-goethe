// ÖSD Zertifikat Deutsch Österreich (ZDÖ) B1 — Sprechen (mündliche Prüfung).
// Original practice items.
//
// ORIGINALITY (doctrine #1): every situation, Leitpunkt, Folie and prompt below
// is ORIGINAL to AlmiGoethe — never copied or derived from ÖSD / ÖSD-Institut
// materials, Modellprüfungen or Übungssätze.
//
// AUSTRIAN CONTENT: the ÖSD ZDÖ is the Austrian standard-German exam. Scenarios
// use Austrian everyday life — Euro, Austrian places, institutions and habits
// (die städtischen Verkehrsbetriebe, die Bahn, Heuriger, Christkindlmarkt, Volkshochschule, Gemeinde,
// Freiwillige Feuerwehr, Jausenstation, Würstelstand, Trafik, and so on). The
// register is standard German as written and spoken in Austria; "Sie" is used
// with strangers in the exam and "du" where the item frames peers planning
// together, matching each task.
//
// THREE Aufgaben, 5 items each (15 total):
//   Aufgabe 1  OESD_SP_PLANEN        — mit einem Partner etwas planen (4 Leitpunkte)
//   Aufgabe 2  OESD_SP_PRAESENTATION — ein Thema "auf 5 Folien" präsentieren
//   Aufgabe 3  OESD_SP_FEEDBACK      — auf die Präsentation reagieren, Fragen stellen
//
// ── SOLO PRACTICE OF A PAIR EXAM ────────────────────────────────────────────
// The ÖSD Sprechen is sat with a partner. This product practises it solo, so
// each PLANEN item frames BOTH sides: the learner speaks their own turns AND is
// told what the partner would bring, so they rehearse proposing AND reacting.
// The FEEDBACK items summarise the partner's presentation inside `situation`, so
// the learner can respond and ask questions without a live partner present.
//
// ── POINTS LIVE IN THE PROSE ────────────────────────────────────────────────
// The productive grader reads { situation, instruction, prepSeconds, speakSeconds }
// and scores "communication: task fulfilled, required points covered, register
// appropriate". The Leitpunkte and Folien are written INTO the instruction prose,
// never into a structured field the schema would silently strip.
//
// ── NO ANSWER KEYS HERE ─────────────────────────────────────────────────────
// Speaking items are productive: there is nothing to permute and no answer-key
// distribution to measure.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.OESD_B1;
const base = {
  exam: "OESD_B1" as const,
  level: L,
  section: SECTION.SPRECHEN,
  difficulty: "CORE" as const,
};

export const ITEMS: ExamItemInput[] = [
  // ── Aufgabe 1 — Gemeinsam etwas planen (5 items) ──────────────────────────
  {
    ...base,
    taskType: "OESD_SP_PLANEN",
    title: "Gemeinsam planen: Ausflug mit dem Deutschkurs",
    prompt: "Bereiten Sie sich vor und planen Sie das Vorhaben gemeinsam mit Ihrer Partnerin oder Ihrem Partner.",
    topicTag: "freizeit",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Ihr Deutschkurs an der Volkshochschule in Wien möchte am Ende des Semesters einen gemeinsamen Ausflug machen. Sie planen ihn zusammen mit einer anderen Kursteilnehmerin oder einem anderen Kursteilnehmer. Als Ziele stehen zur Auswahl: ein Tag am Neusiedler See, eine Wanderung am Schneeberg oder ein Besuch im Schloss Schönbrunn mit Tiergarten.",
      instruction:
        "Planen Sie den Ausflug gemeinsam und sprechen Sie über diese vier Leitpunkte:\n" +
        "1. Wohin fahren Sie? (Ziel auswählen und begründen)\n" +
        "2. Wie kommen Sie hin? (mit der Bahn, mit dem Reisebus oder mit privaten Autos)\n" +
        "3. Was kostet das ungefähr und wie teilen Sie die Kosten?\n" +
        "4. Was nehmen Sie mit und wer organisiert die Jause?\n\n" +
        "Machen Sie zu jedem Punkt einen Vorschlag, reagieren Sie auf die Ideen Ihres Partners und einigen Sie sich am Ende auf einen Plan. Sprechen Sie sich mit „du“ an.",
      prepSeconds: 900,
      speakSeconds: 120,
    },
    guidanceNote:
      "Redemittel: „Ich würde vorschlagen, dass …“, „Wie wäre es, wenn wir …?“, „Da bin ich einverstanden“ / „Vielleicht lieber …“. Zu jedem der vier Punkte muss eine Entscheidung fallen.",
  },
  {
    ...base,
    taskType: "OESD_SP_PLANEN",
    title: "Gemeinsam planen: Geburtstagsfeier für eine Freundin",
    prompt: "Bereiten Sie sich vor und planen Sie das Vorhaben gemeinsam mit Ihrer Partnerin oder Ihrem Partner.",
    topicTag: "alltag",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Eine gemeinsame Freundin wird 30 und Sie möchten sie mit einer kleinen Feier überraschen. Sie planen alles zusammen mit einer anderen Person. Als Ort kommen eine Wohnung in Graz, ein Gastgarten in einem Beisl oder ein Heuriger am Stadtrand in Frage.",
      instruction:
        "Planen Sie die Feier gemeinsam und sprechen Sie über diese vier Leitpunkte:\n" +
        "1. Wo und wann soll gefeiert werden?\n" +
        "2. Wen laden Sie ein und wie (Einladung persönlich, per Telefon oder Nachricht)?\n" +
        "3. Was gibt es zu essen und zu trinken? Wer bringt was mit?\n" +
        "4. Welches gemeinsame Geschenk kaufen Sie und wie viel Euro gibt jeder dazu?\n\n" +
        "Machen Sie zu jedem Punkt einen Vorschlag, gehen Sie auf Ihren Partner ein und einigen Sie sich. Sprechen Sie sich mit „du“ an.",
      prepSeconds: 900,
      speakSeconds: 120,
    },
    guidanceNote:
      "Verteilen Sie Aufgaben: „Kümmerst du dich um die Torte? Dann rufe ich die Gäste an.“ Am Ende sollte klar sein, wer was übernimmt.",
  },
  {
    ...base,
    taskType: "OESD_SP_PLANEN",
    title: "Gemeinsam planen: einer Nachbarin helfen",
    prompt: "Bereiten Sie sich vor und planen Sie das Vorhaben gemeinsam mit Ihrer Partnerin oder Ihrem Partner.",
    topicTag: "wohnen",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Eine ältere Nachbarin in Ihrem Wohnhaus in Linz hat sich das Bein gebrochen und kann einige Wochen nicht selbst einkaufen oder aus dem Haus gehen. Sie möchten ihr gemeinsam mit einer anderen Nachbarin oder einem anderen Nachbarn helfen.",
      instruction:
        "Planen Sie die Hilfe gemeinsam und sprechen Sie über diese vier Leitpunkte:\n" +
        "1. Bei welchen Aufgaben braucht sie Hilfe (Einkaufen im Supermarkt, Post von der Trafik holen, Müll, Gesellschaft)?\n" +
        "2. Wer übernimmt was und an welchen Tagen?\n" +
        "3. Wie sprechen Sie sich untereinander ab (Telefon, Zettel im Stiegenhaus)?\n" +
        "4. Was tun Sie, wenn einmal keiner von Ihnen Zeit hat?\n\n" +
        "Machen Sie zu jedem Punkt einen Vorschlag, reagieren Sie auf Ihren Partner und treffen Sie klare Entscheidungen. Sprechen Sie sich mit „du“ an.",
      prepSeconds: 900,
      speakSeconds: 120,
    },
    guidanceNote:
      "Redemittel: „Ich kann montags einkaufen gehen“, „Kannst du …?“, „Sollen wir uns gegenseitig anrufen, wenn …?“. Denken Sie an eine Lösung für den Notfall.",
  },
  {
    ...base,
    taskType: "OESD_SP_PLANEN",
    title: "Gemeinsam planen: einen Küchentisch gebraucht kaufen",
    prompt: "Bereiten Sie sich vor und planen Sie das Vorhaben gemeinsam mit Ihrer Partnerin oder Ihrem Partner.",
    topicTag: "wohnen",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Sie und Ihre Mitbewohnerin oder Ihr Mitbewohner in einer WG in Salzburg brauchen einen größeren Küchentisch. Sie möchten gemeinsam einen gebrauchten Tisch kaufen, zum Beispiel über eine Kleinanzeigen-Website oder auf einem Flohmarkt.",
      instruction:
        "Planen Sie den Kauf gemeinsam und sprechen Sie über diese vier Leitpunkte:\n" +
        "1. Was für einen Tisch suchen Sie (Größe, Material, Form)?\n" +
        "2. Wie viel Euro wollen Sie zusammen ausgeben und wie teilen Sie die Kosten?\n" +
        "3. Wo suchen Sie (eine Kleinanzeigen-Website, Flohmarkt am Grünmarkt, Second-Hand-Möbelhaus)?\n" +
        "4. Wie holen Sie den Tisch ab, wenn Sie kein Auto haben?\n\n" +
        "Machen Sie zu jedem Punkt einen Vorschlag, gehen Sie auf die Wünsche Ihres Partners ein und einigen Sie sich. Sprechen Sie sich mit „du“ an.",
      prepSeconds: 900,
      speakSeconds: 120,
    },
    guidanceNote:
      "Wägen Sie ab: „Das ist mir zu teuer“, „Ein runder Tisch braucht weniger Platz“. Klären Sie den Transport konkret (Leihwagen, Freund mit Kombi).",
  },
  {
    ...base,
    taskType: "OESD_SP_PLANEN",
    title: "Gemeinsam planen: ein Wochenende in den Bergen",
    prompt: "Bereiten Sie sich vor und planen Sie das Vorhaben gemeinsam mit Ihrer Partnerin oder Ihrem Partner.",
    topicTag: "freizeit",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Sie möchten gemeinsam mit einer Freundin oder einem Freund ein verlängertes Wochenende in Tirol verbringen — wandern im Sommer oder eine Auszeit in einer einfachen Pension. Sie planen die Reise zusammen.",
      instruction:
        "Planen Sie das Wochenende gemeinsam und sprechen Sie über diese vier Leitpunkte:\n" +
        "1. Wohin fahren Sie und was möchten Sie dort machen?\n" +
        "2. Wo übernachten Sie (Pension, Berghütte, Jugendherberge) und was darf es pro Nacht kosten?\n" +
        "3. Wie reisen Sie an (Zug, Fernbus, Mitfahrgelegenheit)?\n" +
        "4. Was packen Sie ein und wie planen Sie das Essen?\n\n" +
        "Machen Sie zu jedem Punkt einen Vorschlag, reagieren Sie auf Ihren Partner und einigen Sie sich am Ende auf einen gemeinsamen Plan. Sprechen Sie sich mit „du“ an.",
      prepSeconds: 900,
      speakSeconds: 120,
    },
    guidanceNote:
      "Begründen Sie Ihre Vorschläge kurz: „Mit dem Zug ist es entspannter, weil …“. Achten Sie darauf, dass am Ende alle vier Punkte geklärt sind.",
  },

  // ── Aufgabe 2 — Ein Thema präsentieren (auf 5 Folien) (5 items) ───────────
  {
    ...base,
    taskType: "OESD_SP_PRAESENTATION",
    title: "Präsentation: Freizeit in Österreich",
    prompt: "Bereiten Sie sich vor und halten Sie eine kurze Präsentation zu dem Thema.",
    topicTag: "freizeit",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "In Ihrem Kurs an der Volkshochschule sollen Sie eine kurze Präsentation halten. Ihr Thema ist „Freizeit in Österreich“. Stellen Sie sich fünf Folien vor und sprechen Sie zu jeder Folie.",
      instruction:
        "Halten Sie eine kleine Präsentation auf 5 Folien und gehen Sie auf jede Folie ein:\n" +
        "Folie 1: Wie verbringen Menschen in Österreich ihre Freizeit? (Überblick)\n" +
        "Folie 2: Beliebte Aktivitäten im Sommer (z. B. Baden am See, Wandern, Radfahren)\n" +
        "Folie 3: Beliebte Aktivitäten im Winter (z. B. Schifahren, Rodeln, Christkindlmarkt)\n" +
        "Folie 4: Was machen Sie selbst gern in Ihrer Freizeit hier?\n" +
        "Folie 5: Ihr Fazit — was gefällt Ihnen an der Freizeit in Österreich, was fehlt Ihnen?\n\n" +
        "Sprechen Sie zusammenhängend und in einer sinnvollen Reihenfolge. Beginnen Sie mit einer kurzen Einleitung und schließen Sie mit einem persönlichen Fazit.",
      prepSeconds: 900,
      speakSeconds: 180,
    },
    guidanceNote:
      "Gliederung nennen hilft: „Zuerst … , dann … , zum Schluss …“. Ein eigenes Beispiel bei Folie 4 macht die Präsentation lebendig.",
  },
  {
    ...base,
    taskType: "OESD_SP_PRAESENTATION",
    title: "Präsentation: Öffentliche Verkehrsmittel",
    prompt: "Bereiten Sie sich vor und halten Sie eine kurze Präsentation zu dem Thema.",
    topicTag: "verkehr",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Sie sollen im Kurs eine kurze Präsentation halten. Ihr Thema ist „Öffentliche Verkehrsmittel in Österreich“. Stellen Sie sich fünf Folien vor und sprechen Sie zu jeder Folie.",
      instruction:
        "Halten Sie eine kleine Präsentation auf 5 Folien und gehen Sie auf jede Folie ein:\n" +
        "Folie 1: Welche öffentlichen Verkehrsmittel gibt es (U-Bahn und Bim in Wien, die Bahn, Postbus, Regionalbahnen)?\n" +
        "Folie 2: Wie kauft man Tickets (Automat, App, Trafik, Jahreskarte)?\n" +
        "Folie 3: Vorteile — warum viele Menschen öffentlich fahren\n" +
        "Folie 4: Nachteile oder Probleme (Verspätungen, volle Züge, ländliche Gebiete)\n" +
        "Folie 5: Wie fahren Sie selbst, und Ihr Fazit\n\n" +
        "Sprechen Sie zusammenhängend. Nennen Sie zu den Vor- und Nachteilen jeweils ein konkretes Beispiel aus Ihrem Alltag.",
      prepSeconds: 900,
      speakSeconds: 180,
    },
    guidanceNote:
      "Vergleichen Sie ruhig: „In der Stadt ist es praktisch, aber am Land …“. Halten Sie die Reihenfolge der fünf Folien ein.",
  },
  {
    ...base,
    taskType: "OESD_SP_PRAESENTATION",
    title: "Präsentation: Gesund leben",
    prompt: "Bereiten Sie sich vor und halten Sie eine kurze Präsentation zu dem Thema.",
    topicTag: "gesundheit",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Sie halten im Kurs eine kurze Präsentation. Ihr Thema ist „Gesund leben“. Stellen Sie sich fünf Folien vor und sprechen Sie zu jeder Folie.",
      instruction:
        "Halten Sie eine kleine Präsentation auf 5 Folien und gehen Sie auf jede Folie ein:\n" +
        "Folie 1: Was bedeutet für Sie „gesund leben“?\n" +
        "Folie 2: Ernährung — was gehört für Sie zu einem gesunden Essen (z. B. am Wiener Naschmarkt oder Bauernmarkt einkaufen)?\n" +
        "Folie 3: Bewegung — wie kann man im Alltag aktiv bleiben (zu Fuß gehen, Radfahren, Schwimmen im Freibad)?\n" +
        "Folie 4: Entspannung und Schlaf — warum das auch wichtig ist\n" +
        "Folie 5: Wie gesund leben Sie selbst? Ihr Fazit\n\n" +
        "Sprechen Sie zusammenhängend. Seien Sie bei Folie 5 ehrlich — „Ich versuche …, aber …“ wirkt authentischer als perfekt.",
      prepSeconds: 900,
      speakSeconds: 180,
    },
    guidanceNote:
      "Beim Fazit Position beziehen: „Am wichtigsten finde ich …, weil …“. Alle fünf Folien müssen vorkommen.",
  },
  {
    ...base,
    taskType: "OESD_SP_PRAESENTATION",
    title: "Präsentation: Feste feiern",
    prompt: "Bereiten Sie sich vor und halten Sie eine kurze Präsentation zu dem Thema.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Sie halten im Kurs eine kurze Präsentation. Ihr Thema ist „Feste feiern“. Stellen Sie sich fünf Folien vor und sprechen Sie zu jeder Folie.",
      instruction:
        "Halten Sie eine kleine Präsentation auf 5 Folien und gehen Sie auf jede Folie ein:\n" +
        "Folie 1: Welche Feste feiert man in Österreich im Jahr (z. B. Weihnachten, Silvester, Ostern, Fasching)?\n" +
        "Folie 2: Wie feiert man ein bestimmtes Fest (wählen Sie eines, z. B. den Advent mit Christkindlmarkt)?\n" +
        "Folie 3: Was isst und trinkt man dabei (z. B. Punsch, Kekse, Martinigansl)?\n" +
        "Folie 4: Ein Fest aus Ihrer Heimat — wie feiern Sie es?\n" +
        "Folie 5: Ihr Fazit — was verbindet Feste in verschiedenen Ländern?\n\n" +
        "Sprechen Sie zusammenhängend und vergleichen Sie bei Folie 4 mit dem, was Sie hier erleben.",
      prepSeconds: 900,
      speakSeconds: 180,
    },
    guidanceNote:
      "Für Folie 4 die Vergangenheit nutzen (Perfekt): „Bei uns haben wir immer …“. Schließen Sie mit einem klaren Gedanken.",
  },
  {
    ...base,
    taskType: "OESD_SP_PRAESENTATION",
    title: "Präsentation: Ehrenamt",
    prompt: "Bereiten Sie sich vor und halten Sie eine kurze Präsentation zu dem Thema.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Sie halten im Kurs eine kurze Präsentation. Ihr Thema ist „Ehrenamt“ — also freiwillige Arbeit ohne Bezahlung. Stellen Sie sich fünf Folien vor und sprechen Sie zu jeder Folie.",
      instruction:
        "Halten Sie eine kleine Präsentation auf 5 Folien und gehen Sie auf jede Folie ein:\n" +
        "Folie 1: Was ist ein Ehrenamt und warum machen Menschen so etwas?\n" +
        "Folie 2: Beispiele in Österreich (z. B. Freiwillige Feuerwehr, Rotes Kreuz, Nachbarschaftshilfe, Sportverein)\n" +
        "Folie 3: Was bringt es der Gesellschaft?\n" +
        "Folie 4: Was bringt es der einzelnen Person, die mitmacht?\n" +
        "Folie 5: Würden Sie selbst ein Ehrenamt übernehmen? Ihr Fazit\n\n" +
        "Sprechen Sie zusammenhängend. Nennen Sie bei Folie 2 mindestens ein konkretes Beispiel und begründen Sie Ihr Fazit.",
      prepSeconds: 900,
      speakSeconds: 180,
    },
    guidanceNote:
      "Meinung klar formulieren: „Ich könnte mir vorstellen, …“, „Für mich käme eher … in Frage, weil …“. Alle fünf Folien behandeln.",
  },

  // ── Aufgabe 3 — Auf eine Präsentation reagieren (Feedback + Fragen) (5) ───
  {
    ...base,
    taskType: "OESD_SP_FEEDBACK",
    title: "Feedback geben: Präsentation über das Wohnen in Wien",
    prompt: "Bereiten Sie sich vor, geben Sie Rückmeldung und stellen Sie zwei Fragen.",
    topicTag: "wohnen",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Ihre Partnerin hat gerade eine Präsentation zum Thema „Wohnen in Wien“ gehalten. Sie hat erzählt, dass viele Menschen in Gemeindewohnungen leben und dass die Mieten in den letzten Jahren stark gestiegen sind. Am Ende hat sie gesagt, dass sie selbst gern in einem Altbau im Grünen wohnen würde, sich das aber kaum leisten kann.",
      instruction:
        "Reagieren Sie nun auf ihre Präsentation:\n" +
        "1. Fassen Sie in 2–3 Sätzen zusammen, worüber sie gesprochen hat.\n" +
        "2. Geben Sie ihr eine ehrliche, freundliche Rückmeldung (Was war gut? Was war interessant oder neu für Sie?).\n" +
        "3. Stellen Sie ihr mindestens zwei Fragen zum Thema.\n\n" +
        "Sprechen Sie höflich und gehen Sie auf das ein, was sie gesagt hat. Sie sprechen mit Ihrer Partnerin per „du“.",
      prepSeconds: 300,
      speakSeconds: 120,
    },
    guidanceNote:
      "Redemittel fürs Feedback: „Mir hat gut gefallen, dass …“, „Besonders interessant fand ich …“. Fragen: „Wie hast du …?“, „Was meinst du, ob …?“.",
  },
  {
    ...base,
    taskType: "OESD_SP_FEEDBACK",
    title: "Feedback geben: Präsentation über einen Deutschkurs",
    prompt: "Bereiten Sie sich vor, geben Sie Rückmeldung und stellen Sie zwei Fragen.",
    topicTag: "bildung",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Ihr Partner hat eine Präsentation zum Thema „Deutsch lernen als Erwachsener“ gehalten. Er hat beschrieben, wie er neben der Arbeit einen Abendkurs an der Volkshochschule besucht, dass ihm das Sprechen am schwersten fällt und dass ihm Serien im ORF beim Hörverstehen helfen. Zum Schluss hat er gesagt, dass er in einem Jahr die B2-Prüfung machen möchte.",
      instruction:
        "Reagieren Sie nun auf seine Präsentation:\n" +
        "1. Fassen Sie in 2–3 Sätzen zusammen, worüber er gesprochen hat.\n" +
        "2. Geben Sie ihm eine freundliche Rückmeldung (Was fanden Sie hilfreich oder gut erklärt?).\n" +
        "3. Stellen Sie ihm mindestens zwei Fragen zum Thema.\n\n" +
        "Gehen Sie konkret auf seine Punkte ein. Sie sprechen mit Ihrem Partner per „du“.",
      prepSeconds: 300,
      speakSeconds: 120,
    },
    guidanceNote:
      "Zeigen Sie, dass Sie zugehört haben: „Du hast gesagt, dass dir das Sprechen schwerfällt — mir geht es genauso.“ Zwei echte Fragen stellen.",
  },
  {
    ...base,
    taskType: "OESD_SP_FEEDBACK",
    title: "Feedback geben: Präsentation über Mülltrennung",
    prompt: "Bereiten Sie sich vor, geben Sie Rückmeldung und stellen Sie zwei Fragen.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Ihre Partnerin hat eine Präsentation zum Thema „Mülltrennung im Alltag“ gehalten. Sie hat erklärt, dass man in Österreich Altpapier, Glas, Plastik, Bioabfall und Restmüll getrennt sammelt, dass es dafür verschiedene Tonnen und den Mistplatz der Gemeinde gibt und dass Pfandflaschen zurückgebracht werden. Am Ende hat sie gesagt, dass ihr die Trennung am Anfang schwergefallen ist.",
      instruction:
        "Reagieren Sie nun auf ihre Präsentation:\n" +
        "1. Fassen Sie in 2–3 Sätzen zusammen, worüber sie gesprochen hat.\n" +
        "2. Geben Sie ihr eine freundliche Rückmeldung (Was war klar erklärt? Was war neu für Sie?).\n" +
        "3. Stellen Sie ihr mindestens zwei Fragen zum Thema.\n\n" +
        "Sprechen Sie höflich und knüpfen Sie an ihre Beispiele an. Sie sprechen mit Ihrer Partnerin per „du“.",
      prepSeconds: 300,
      speakSeconds: 120,
    },
    guidanceNote:
      "Eine Frage darf auch von Ihrer eigenen Erfahrung ausgehen: „Bei uns im Haus gibt es keine Biotonne — wie machst du das?“.",
  },
  {
    ...base,
    taskType: "OESD_SP_FEEDBACK",
    title: "Feedback geben: Präsentation über einen Nebenjob",
    prompt: "Bereiten Sie sich vor, geben Sie Rückmeldung und stellen Sie zwei Fragen.",
    topicTag: "arbeit",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Ihr Partner hat eine Präsentation zum Thema „Arbeiten neben dem Studium“ gehalten. Er hat erzählt, dass er an der Uni in Innsbruck studiert und nebenbei in einem Café als Kellner arbeitet, dass er dort meist am Wochenende eingeteilt ist und dass ihm das Geld und der Kontakt zu Menschen gefallen, ihm aber wenig Zeit zum Lernen bleibt.",
      instruction:
        "Reagieren Sie nun auf seine Präsentation:\n" +
        "1. Fassen Sie in 2–3 Sätzen zusammen, worüber er gesprochen hat.\n" +
        "2. Geben Sie ihm eine freundliche Rückmeldung (Was fanden Sie interessant oder gut dargestellt?).\n" +
        "3. Stellen Sie ihm mindestens zwei Fragen zum Thema.\n\n" +
        "Gehen Sie auf seine Vor- und Nachteile ein. Sie sprechen mit Ihrem Partner per „du“.",
      prepSeconds: 300,
      speakSeconds: 120,
    },
    guidanceNote:
      "Feedback kann auch nachfragen, was fehlt: „Ich hätte gern noch gehört, wie viele Stunden du arbeitest.“ Am Ende zwei klare Fragen.",
  },
  {
    ...base,
    taskType: "OESD_SP_FEEDBACK",
    title: "Feedback geben: Präsentation über den Urlaub am Bauernhof",
    prompt: "Bereiten Sie sich vor, geben Sie Rückmeldung und stellen Sie zwei Fragen.",
    topicTag: "freizeit",
    timeLimitSeconds: 300,
    payload: {
      situation:
        "Ihre Partnerin hat eine Präsentation zum Thema „Urlaub am Bauernhof“ gehalten. Sie hat berichtet, dass viele Familien in Österreich ihren Urlaub auf einem Bauernhof in der Steiermark oder in Kärnten verbringen, dass die Kinder dort Tiere sehen und mithelfen dürfen und dass so ein Urlaub oft günstiger ist als ein Hotel. Am Ende hat sie gesagt, dass sie das selbst als Kind erlebt hat und es ihr in guter Erinnerung geblieben ist.",
      instruction:
        "Reagieren Sie nun auf ihre Präsentation:\n" +
        "1. Fassen Sie in 2–3 Sätzen zusammen, worüber sie gesprochen hat.\n" +
        "2. Geben Sie ihr eine freundliche Rückmeldung (Was hat Ihnen gefallen? Was war neu?).\n" +
        "3. Stellen Sie ihr mindestens zwei Fragen zum Thema.\n\n" +
        "Knüpfen Sie an ihre persönliche Erinnerung an. Sie sprechen mit Ihrer Partnerin per „du“.",
      prepSeconds: 300,
      speakSeconds: 120,
    },
    guidanceNote:
      "Eine Frage kann persönlich sein: „Würdest du das heute wieder machen?“ Die andere zum Thema: „Was kostet so ein Urlaub ungefähr?“.",
  },
];
