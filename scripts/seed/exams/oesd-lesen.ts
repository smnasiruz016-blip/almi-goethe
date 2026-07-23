// ÖSD Zertifikat Deutsch Österreich B1 (ZDÖ B1) — Leseverstehen. Original items.
//
// ORIGINALITY (doctrine #1): every text and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from ÖSD / ÖSD-Prüfungszentren materials,
// Modellsätze or Übungstests.
//
// ── REGISTER + LOCALE: THIS IS AUSTRIAN B1 ──────────────────────────────────
// ÖSD is the Austrian exam. Its everyday world is AUSTRIAN: the currency is the
// Euro, the cities are Wien, Graz, Salzburg, Linz, Innsbruck, and daily life runs
// through Austrian institutions — Gemeindeamt, Meldeamt, AMS, die Bahn, die
// städtischen Verkehrsbetriebe, Magistrat. Authoring ÖSD items with German (DE) institutions (Bürgeramt,
// Deutsche Bahn, Jobcenter) would be teaching the wrong country's exam — the same
// fork-leak failure the network guards against: a fork must be built from its OWN
// region's facts, not translated from the ancestor. Austrian standard German is
// correct here: Jänner (not Januar), heuer (this year), Matura, Jause, Sackerl.
//
// Register is EVERYDAY, not academic. Texts are letters, notices, short press
// pieces, small ads, opinion columns and written instructions about work, housing,
// health, transport and free time.
//
// FIVE Teile, 3 items each (15 total):
//   TEIL1  richtig/falsch on a personal letter/email          3 items × 5 statements
//   TEIL2  3-option MC (a/b/c) on a press text                3 items × 4 questions
//   TEIL3  Situationen ⇄ Anzeigen (more ads than situations)  3 items × 5 situations
//   TEIL4  ja/nein — position vertreten? on an opinion text   3 items × 5 statements
//   TEIL5  3-option MC (a/b/c) on written instructions/notice 3 items × 4 questions

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.OESD_B1; // "B1"
const base = {
  exam: "OESD_B1" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
};

const RF_OPTS = [
  { id: "r", text: "Richtig" },
  { id: "f", text: "Falsch" },
];
const JN_OPTS = [
  { id: "j", text: "Ja" },
  { id: "n", text: "Nein" },
];

// ── TEIL 1 — richtig/falsch auf einem persönlichen Brief/einer E-Mail ────────
// Each item: one personal text + 5 statements, answer ∈ r/f. Answers mixed.
type T1 = { title: string; topicTag: string; passage: string; qs: { stem: string; answer: "r" | "f" }[] };

const TEIL1: T1[] = [
  {
    title: "E-Mail von Jana aus Graz",
    topicTag: "umzug",
    passage:
      "Liebe Petra,\n\n" +
      "endlich melde ich mich wieder. Wie du weißt, bin ich Anfang Jänner von Wien nach Graz gezogen. Die Wohnung ist kleiner als meine alte, aber sie hat einen Balkon, und die Miete ist deutlich günstiger — ich zahle jetzt 620 Euro statt 780. Am ersten Tag war das Chaos groß, weil der Aufzug kaputt war und wir alles über die Treppe in den vierten Stock tragen mussten.\n\n" +
      "Beim Meldeamt war ich schon in der ersten Woche, das ging schneller als gedacht, ich hatte nach zwanzig Minuten alles erledigt. Meine neue Arbeit beginnt allerdings erst im Februar, bis dahin richte ich in Ruhe die Wohnung ein. Zum Glück ist die Straßenbahn direkt vor der Tür, ins Zentrum brauche ich damit nur zehn Minuten.\n\n" +
      "Kommst du mich bald besuchen? Am besten an einem Wochenende, dann zeige ich dir die Stadt. Ruf mich einfach an, meine Nummer ist gleich geblieben.\n\n" +
      "Liebe Grüße\nJana",
    qs: [
      { stem: "Jana ist im Jänner nach Graz gezogen.", answer: "r" },
      { stem: "Am Umzugstag funktionierte der Aufzug nicht.", answer: "r" },
      { stem: "Ihre neue Wohnung ist teurer als die alte.", answer: "f" },
      { stem: "Petra soll Jana anrufen, um einen Besuch auszumachen.", answer: "r" },
      { stem: "Jana hat ihre neue Arbeit schon begonnen.", answer: "f" },
    ],
  },
  {
    title: "Brief von Onkel Franz",
    topicTag: "familie",
    passage:
      "Lieber Tobias,\n\n" +
      "danke für die Karte zu meinem Geburtstag, sie hat mich sehr gefreut. Heuer war der Sommer bei uns in Salzburg wirklich schön, ich war fast jeden Tag im Garten. Die Erdäpfel sind gut gewachsen, die Tomaten leider weniger, weil es im August zu viel geregnet hat.\n\n" +
      "Deine Tante und ich planen im September eine Reise mit der Bahn nach Innsbruck. Wir fahren mit dem Zug, weil das Autofahren in den Bergen für mich anstrengend geworden ist. In Innsbruck besuchen wir eine alte Freundin, die dort seit vierzig Jahren wohnt.\n\n" +
      "Wie läuft es bei dir mit dem Studium? Deine Tante meint, du solltest dich mehr ausruhen und nicht nur lernen. Wenn du magst, komm uns doch in den Weihnachtsferien besuchen, das Gästezimmer steht bereit.\n\n" +
      "Herzliche Grüße\nDein Onkel Franz",
    qs: [
      { stem: "Franz bedankt sich für ein Geschenk zu Weihnachten.", answer: "f" },
      { stem: "Die Tomaten sind heuer schlechter gewachsen als die Erdäpfel.", answer: "r" },
      { stem: "Franz und seine Frau fahren mit dem Auto nach Innsbruck.", answer: "f" },
      { stem: "In Innsbruck wohnt eine Freundin des Paares.", answer: "r" },
      { stem: "Tobias wird eingeladen, in den Weihnachtsferien zu kommen.", answer: "r" },
    ],
  },
  {
    title: "Nachricht von Kollegin Selma",
    topicTag: "arbeit",
    passage:
      "Hallo Markus,\n\n" +
      "ich schreibe dir, weil ich nächste Woche im Urlaub bin und wir vorher noch etwas klären sollten. Der Kunde aus Linz hat gestern angerufen und möchte den Termin vom Dienstag auf Donnerstag verschieben. Für mich wäre das kein Problem, aber du müsstest dann ohne mich hingehen, weil ich ab Mittwoch weg bin.\n\n" +
      "Die Unterlagen für die Präsentation habe ich fertig, sie liegen in unserem gemeinsamen Ordner. Bitte schau sie dir vorher an, falls dir etwas fehlt. Ich glaube, alles ist vollständig, aber zwei Augen sehen mehr als vier.\n\n" +
      "Ach ja: Die Chefin hat gesagt, dass die Firma im Herbst in ein neues Büro in der Nähe vom Hauptbahnhof umzieht. Genaueres wissen wir noch nicht. Ich melde mich, sobald ich zurück bin.\n\n" +
      "Liebe Grüße\nSelma",
    qs: [
      { stem: "Der Kunde aus Linz möchte den Termin auf Dienstag verschieben.", answer: "f" },
      { stem: "Selma ist nächste Woche im Urlaub.", answer: "r" },
      { stem: "Markus soll den Termin allein wahrnehmen.", answer: "r" },
      { stem: "Die Unterlagen für die Präsentation sind noch nicht fertig.", answer: "f" },
      { stem: "Die Firma zieht im Herbst in ein neues Büro um.", answer: "r" },
    ],
  },
];

// ── TEIL 2 — 3-option MC auf einem Pressetext (4 Fragen) ─────────────────────
type MC = { title: string; topicTag: string; passage: string; qs: { stem: string; opts: [string, string, string]; answer: "a" | "b" | "c" }[] };

const TEIL2: MC[] = [
  {
    title: "Neue Nachtzüge ab Wien",
    topicTag: "verkehr",
    passage:
      "Wer heuer im Sommer in den Süden reisen will, hat ab Wien mehr Möglichkeiten als bisher. Die Bahngesellschaft bietet zusätzliche Nachtzüge an, die abends in Wien starten und am nächsten Morgen am Ziel ankommen. Ein Sprecher erklärte, dass die Nachfrage nach dieser Art zu reisen in den letzten Jahren stark gestiegen sei — vor allem jüngere Reisende bevorzugten den Zug gegenüber dem Flugzeug, weil er umweltfreundlicher sei und man die Nacht zum Schlafen nutzen könne.\n\n" +
      "Kritik gibt es dennoch. Manche Fahrgäste beklagen, dass die Preise für ein eigenes Abteil hoch seien; ein einfacher Sitzplatz sei zwar günstig, aber für eine ganze Nacht wenig bequem. Die Bahngesellschaft verweist darauf, dass gerade die günstigen Plätze schnell ausverkauft seien. Wer sicher einen Liegeplatz möchte, sollte deshalb früh buchen, am besten mehrere Wochen im Voraus.",
    qs: [
      {
        stem: "Was ist neu an dem Angebot?",
        opts: ["Es gibt zusätzliche Nachtzüge ab Wien.", "Die Züge fahren nur noch tagsüber.", "Die Flüge in den Süden werden billiger."],
        answer: "a",
      },
      {
        stem: "Warum bevorzugen laut Text vor allem jüngere Reisende den Zug?",
        opts: ["Er ist immer billiger als das Flugzeug.", "Er ist umweltfreundlicher und man kann nachts schlafen.", "Er ist schneller als das Flugzeug."],
        answer: "b",
      },
      {
        stem: "Was kritisieren manche Fahrgäste?",
        opts: ["Die Züge sind oft verspätet.", "Es gibt zu wenige Verbindungen.", "Ein eigenes Abteil ist teuer."],
        answer: "c",
      },
      {
        stem: "Was empfiehlt die Bahngesellschaft?",
        opts: ["früh zu buchen", "auf einen Sitzplatz zu verzichten", "lieber zu fliegen"],
        answer: "a",
      },
    ],
  },
  {
    title: "Weniger Autos in der Grazer Innenstadt",
    topicTag: "stadt",
    passage:
      "Die Stadt Graz hat einen Versuch gestartet: In einem Teil der Innenstadt dürfen an Samstagen keine Autos mehr fahren. Stattdessen sollen die Straßen den Fußgängern, Radfahrern und den Geschäften gehören. Die Idee stammt von einer Bürgerinitiative, die seit Jahren für weniger Verkehr in der Altstadt wirbt.\n\n" +
      "Die ersten Reaktionen fallen unterschiedlich aus. Viele Passanten finden es angenehm, ohne Lärm und Abgase durch die Gassen zu gehen. Einige Geschäftsleute fürchten dagegen, dass Kundschaft ausbleibt, weil man nicht mehr direkt vor der Tür parken kann. Die Stadt hält dagegen, dass an belebten Samstagen ohnehin kaum ein Parkplatz frei sei und die meisten Menschen mit den öffentlichen Verkehrsmitteln oder zu Fuß kämen. Nach sechs Monaten will der Magistrat entscheiden, ob die Regelung dauerhaft gilt.",
    qs: [
      {
        stem: "Was ändert sich an Samstagen in einem Teil der Grazer Innenstadt?",
        opts: ["Die Geschäfte bleiben geschlossen.", "Es dürfen keine Autos fahren.", "Das Parken wird teurer."],
        answer: "b",
      },
      {
        stem: "Von wem stammt die Idee?",
        opts: ["von einer Bürgerinitiative", "von den Geschäftsleuten", "von der Polizei"],
        answer: "a",
      },
      {
        stem: "Was befürchten einige Geschäftsleute?",
        opts: ["mehr Lärm vor ihren Läden", "höhere Mieten", "dass Kundschaft ausbleibt"],
        answer: "c",
      },
      {
        stem: "Wann wird über eine dauerhafte Regelung entschieden?",
        opts: ["nach sechs Monaten", "sofort", "erst in mehreren Jahren"],
        answer: "a",
      },
    ],
  },
  {
    title: "Mehr Lehrstellen in Oberösterreich",
    topicTag: "arbeit",
    passage:
      "Nach Angaben des AMS suchen die Betriebe in Oberösterreich heuer wieder mehr Lehrlinge als im Vorjahr. Besonders in den technischen Berufen und in der Gastronomie sind viele Stellen offen. Gleichzeitig entscheiden sich nach der Pflichtschule mehr Jugendliche für eine weiterführende Schule und die Matura, sodass für manche Betriebe die Suche schwieriger geworden ist.\n\n" +
      "Eine Beraterin des AMS rät jungen Menschen, sich nicht nur nach dem ersten Eindruck eines Berufs zu richten. Viele Tätigkeiten hätten sich verändert und böten heute bessere Bedingungen als früher. Sie empfiehlt, vor der Entscheidung ein Praktikum zu machen, um einen Beruf wirklich kennenzulernen. Die Betriebe wiederum locken zunehmend mit höheren Löhnen und der Möglichkeit, die Lehre mit der Matura zu verbinden.",
    qs: [
      {
        stem: "Wie hat sich die Zahl der offenen Lehrstellen entwickelt?",
        opts: ["Sie ist gestiegen.", "Sie ist gleich geblieben.", "Sie ist gesunken."],
        answer: "a",
      },
      {
        stem: "Warum ist die Suche für manche Betriebe schwieriger geworden?",
        opts: ["Es gibt zu wenige Betriebe.", "Mehr Jugendliche wählen eine weiterführende Schule.", "Die Löhne sind zu niedrig."],
        answer: "b",
      },
      {
        stem: "Was rät die Beraterin den jungen Menschen?",
        opts: ["möglichst schnell zu entscheiden", "nur den Lohn zu beachten", "sich nicht nur nach dem ersten Eindruck zu richten"],
        answer: "c",
      },
      {
        stem: "Womit locken die Betriebe zunehmend?",
        opts: ["mit höheren Löhnen und Lehre mit Matura", "mit kürzeren Arbeitszeiten", "mit einem Firmenauto"],
        answer: "a",
      },
    ],
  },
];

// ── TEIL 3 — Situationen ⇄ Anzeigen (mehr Anzeigen als Situationen) ──────────
type T3 = { title: string; topicTag: string; ads: string[]; situations: string[]; answers: string[] };

const TEIL3: T3[] = [
  {
    title: "Kleinanzeigen: Kurse und Freizeit in Wien",
    topicTag: "freizeit",
    ads: [
      "a) Volkshochschule Wien: Deutsch-Konversation für den Alltag, dienstags abends.",
      "b) Schwimmkurs für Erwachsene im Hallenbad Floridsdorf, kleine Gruppen.",
      "c) Wandergruppe erkundet jeden Sonntag den Wienerwald, alle Tempi willkommen.",
      "d) Kochkurs: Wiener Küche für wenig Geld, mittwochs im Grätzelzentrum.",
      "e) Gitarrenunterricht für Anfänger, auch am Abend, erste Stunde gratis.",
      "f) Laufgruppe im Prater, Treffpunkt Praterstern, jeden Samstag früh.",
      "g) Fotokurs am Wochenende, eigene Kamera nötig.",
      "h) Yoga für den Rücken, dienstags und freitags, 18 Uhr, Bezirk Wieden.",
    ],
    situations: [
      "Sie möchten Ihr Deutsch im Gespräch üben und haben nur abends Zeit.",
      "Sie sind erwachsen und wollen endlich schwimmen lernen.",
      "Sie wandern gern in der Gruppe und sind sonntags frei.",
      "Sie wollen lernen, günstig österreichische Gerichte zu kochen.",
      "Sie haben Rückenschmerzen und suchen ein sanftes Training.",
    ],
    answers: ["a", "b", "c", "d", "h"],
  },
  {
    title: "Kleinanzeigen: Wohnen und Haushalt in Linz",
    topicTag: "wohnen",
    ads: [
      "a) WG-Zimmer frei, ab sofort, Nähe Hauptbahnhof Linz, ruhige Lage.",
      "b) Umzugshelfer für Samstagvormittag gesucht, Bezahlung nach Stunden.",
      "c) Wir reparieren Waschmaschinen aller Marken, auch am Wochenende.",
      "d) Schreibtisch und Sessel gratis abzugeben, nur Selbstabholung.",
      "e) Suche Garage oder Stellplatz zur Miete im Bezirk Urfahr.",
      "f) Handwerker montiert Regale und Lampen, kurzfristige Termine.",
      "g) Kleiner Schrebergarten zu verpachten, Wasseranschluss vorhanden.",
      "h) Nachhilfe in Mathematik für die Unterstufe.",
    ],
    situations: [
      "Sie ziehen nach Linz und suchen ein günstiges Zimmer mit anderen zusammen.",
      "Sie brauchen am Samstag Hilfe beim Tragen von Möbeln.",
      "Ihre Waschmaschine ist kaputt und Sie haben nur am Wochenende Zeit.",
      "Sie richten ein Arbeitszimmer ein und haben wenig Geld.",
      "Sie können keine Löcher bohren und brauchen jemanden für ein Regal.",
    ],
    answers: ["a", "b", "c", "d", "f"],
  },
  {
    title: "Kleinanzeigen: Unterwegs in Salzburg",
    topicTag: "verkehr",
    ads: [
      "a) Fahrradwerkstatt in der Altstadt: Reparatur meist am selben Tag fertig.",
      "b) Mitfahrgelegenheit freitags nach Innsbruck, Kosten werden geteilt.",
      "c) Fahrschule: Intensivkurs in den Ferien, Theorie und Praxis.",
      "d) Stadtführung zu Fuß, jeden ersten Sonntag, Treffpunkt Mozartplatz.",
      "e) Fahrradkurs für Erwachsene, die nie Rad fahren gelernt haben.",
      "f) Parkplatz im Innenhof zu vermieten, Nähe Zentrum.",
      "g) Gepäckaufbewahrung am Hauptbahnhof, täglich geöffnet.",
      "h) Monatskarte für die Buslinie abzugeben, gültig bis Monatsende.",
    ],
    situations: [
      "Ihr Fahrrad hat einen Platten und Sie brauchen es morgen wieder.",
      "Sie wollen am Freitag nach Innsbruck und haben kein Auto.",
      "Sie kennen die Stadt noch nicht und möchten sie zu Fuß entdecken.",
      "Sie sind erwachsen und haben nie Rad fahren gelernt.",
      "Sie suchen einen festen Stellplatz für Ihr Auto in der Nähe des Zentrums.",
    ],
    answers: ["a", "b", "d", "e", "f"],
  },
];

// ── TEIL 4 — ja/nein: Ist diese Position im Text vertreten? ──────────────────
type T4 = { title: string; topicTag: string; passage: string; qs: { stem: string; answer: "j" | "n" }[] };

const TEIL4: T4[] = [
  {
    title: "Soll man das Handy aus der Schule verbannen?",
    topicTag: "gesellschaft",
    passage:
      "In vielen österreichischen Schulen wird darüber gestritten, ob Handys während des Unterrichts erlaubt sein sollen. Als Mutter zweier Kinder in Wien habe ich dazu eine klare Meinung. Ich bin überzeugt, dass ein Verbot während der Stunden sinnvoll ist: Wer ständig auf den Bildschirm schaut, kann sich nicht auf den Stoff konzentrieren.\n\n" +
      "Allerdings halte ich ein vollständiges Verbot für falsch. In den Pausen sollten die Jugendlichen ihr Handy nutzen dürfen, etwa um die Eltern zu erreichen oder die Fahrpläne der städtischen Verkehrsbetriebe zu prüfen. Auch im Unterricht selbst kann das Gerät hilfreich sein, wenn die Lehrkraft es gezielt einsetzt, zum Beispiel für eine Recherche.\n\n" +
      "Wichtiger als strenge Regeln finde ich, dass Kinder lernen, das Handy vernünftig zu benutzen. Ein Verbot allein bringt ihnen das nicht bei. Diese Aufgabe können die Schulen nicht allein lösen — auch wir Eltern müssen zu Hause ein gutes Vorbild sein.",
    qs: [
      { stem: "Während des Unterrichts sollten Handys nicht erlaubt sein.", answer: "j" },
      { stem: "In den Pausen sollen die Jugendlichen ihr Handy benutzen dürfen.", answer: "j" },
      { stem: "Ein vollständiges Handyverbot in der Schule ist richtig.", answer: "n" },
      { stem: "Auch die Eltern tragen Verantwortung für einen vernünftigen Umgang.", answer: "j" },
      { stem: "Handys haben im Unterricht überhaupt keinen Nutzen.", answer: "n" },
    ],
  },
  {
    title: "Brauchen wir noch das Bargeld?",
    topicTag: "wirtschaft",
    passage:
      "Immer öfter höre ich, dass Bargeld bald verschwinden wird und wir nur noch mit Karte oder Handy zahlen. Als Betreiber eines kleinen Greißlers in Salzburg sehe ich das kritisch. Natürlich ist die Kartenzahlung bequem, und viele meiner Kundinnen und Kunden nutzen sie gern. Ich biete sie deshalb selbstverständlich an.\n\n" +
      "Trotzdem halte ich es für einen Fehler, das Bargeld ganz abzuschaffen. Nicht alle Menschen kommen mit der Technik gut zurecht, gerade ältere Kundschaft zahlt lieber mit Münzen und Scheinen. Außerdem gibt es Tage, an denen die Verbindung zum Zahlungssystem ausfällt — dann bin ich froh, wenn wenigstens die Bargeldkasse funktioniert.\n\n" +
      "Ich finde, jeder soll selbst entscheiden dürfen, wie er bezahlt. Ein Zwang zur Karte würde Menschen ausschließen, die kein Konto haben oder der Technik misstrauen. Beides nebeneinander — das ist für mich die beste Lösung.",
    qs: [
      { stem: "Der Autor bietet in seinem Geschäft keine Kartenzahlung an.", answer: "n" },
      { stem: "Das Bargeld sollte vollständig abgeschafft werden.", answer: "n" },
      { stem: "Ältere Kundschaft zahlt oft lieber mit Bargeld.", answer: "j" },
      { stem: "Wenn das Zahlungssystem ausfällt, hilft die Bargeldkasse.", answer: "j" },
      { stem: "Jeder soll selbst über die Zahlungsart entscheiden können.", answer: "j" },
    ],
  },
  {
    title: "Freiwillig für die Gemeinde arbeiten",
    topicTag: "gesellschaft",
    passage:
      "In meinem Dorf in der Steiermark engagieren sich viele Menschen freiwillig, etwa bei der Feuerwehr oder im Verein. Als jemand, der selbst seit Jahren dabei ist, möchte ich ein paar Gedanken teilen. Ich bin überzeugt, dass ehrenamtliche Arbeit den Zusammenhalt in einer Gemeinde stärkt. Ohne die Freiwilligen wären viele Feste und Angebote gar nicht möglich.\n\n" +
      "Dabei geht es nicht nur um die anderen. Ich habe durch mein Engagement selbst viel gelernt und neue Leute kennengelernt. Wer glaubt, freiwillige Arbeit koste nur Zeit und bringe nichts zurück, der irrt sich meiner Ansicht nach.\n\n" +
      "Trotzdem darf man niemanden dazu drängen. Ein Ehrenamt muss freiwillig bleiben, sonst verliert es seinen Sinn. Ich wünsche mir aber, dass die Gemeinden die Freiwilligen mehr unterstützen, zum Beispiel mit Räumen oder einem kleinen Beitrag für die Ausrüstung.",
    qs: [
      { stem: "Ehrenamtliche Arbeit stärkt den Zusammenhalt in der Gemeinde.", answer: "j" },
      { stem: "Der Autor hat durch sein Engagement neue Leute kennengelernt.", answer: "j" },
      { stem: "Freiwillige Arbeit bringt dem Autor selbst nichts.", answer: "n" },
      { stem: "Man sollte Menschen zu einem Ehrenamt zwingen dürfen.", answer: "n" },
      { stem: "Die Gemeinden sollten die Freiwilligen stärker unterstützen.", answer: "j" },
    ],
  },
];

// ── TEIL 5 — 3-option MC auf schriftlichen Anleitungen / Hinweisen ───────────
const TEIL5: MC[] = [
  {
    title: "Hinweise zur Anmeldung beim Meldeamt",
    topicTag: "amt",
    passage:
      "Wenn Sie nach Österreich ziehen oder innerhalb des Landes umziehen, müssen Sie sich beim Meldeamt anmelden. Dafür haben Sie ab dem Einzug drei Tage Zeit. Bringen Sie bitte ein gültiges Ausweisdokument und das ausgefüllte Meldeformular mit. Das Formular erhalten Sie am Amt oder im Internet auf der Seite Ihrer Gemeinde.\n\n" +
      "Wichtig: Auf dem Formular muss auch der Unterkunftgeber unterschreiben, also die Person oder Stelle, bei der Sie wohnen. Ohne diese Unterschrift kann die Anmeldung nicht bearbeitet werden.\n\n" +
      "Die Anmeldung selbst ist kostenlos. Sie erhalten danach eine Meldebestätigung, die Sie gut aufbewahren sollten, weil Sie sie oft für andere Behördenwege brauchen. Am Meldeamt ist von Montag bis Freitag geöffnet; an manchen Tagen gibt es zusätzlich am Nachmittag Sprechzeiten. Bitte informieren Sie sich vorher über die genauen Zeiten Ihrer Gemeinde.",
    qs: [
      {
        stem: "Wie viel Zeit haben Sie nach dem Einzug für die Anmeldung?",
        opts: ["drei Tage", "eine Woche", "einen Monat"],
        answer: "a",
      },
      {
        stem: "Wer muss außer Ihnen das Formular unterschreiben?",
        opts: ["ein Zeuge", "der Unterkunftgeber", "ein Nachbar"],
        answer: "b",
      },
      {
        stem: "Was kostet die Anmeldung?",
        opts: ["nichts", "eine kleine Gebühr", "das hängt von der Gemeinde ab"],
        answer: "a",
      },
      {
        stem: "Warum sollten Sie die Meldebestätigung aufbewahren?",
        opts: ["Sie brauchen sie oft für andere Behördenwege.", "Sie ist nur einen Tag gültig.", "Sie ersetzt den Ausweis."],
        answer: "a",
      },
    ],
  },
  {
    title: "Gebrauchsanweisung: Kaffeemaschine reinigen",
    topicTag: "haushalt",
    passage:
      "Damit Ihre Kaffeemaschine lange hält und der Kaffee gut schmeckt, sollten Sie das Gerät regelmäßig entkalken. Wie oft das nötig ist, hängt vom Wasser ab: In Gegenden mit hartem Wasser etwa alle zwei Monate, sonst seltener.\n\n" +
      "Ziehen Sie vor der Reinigung immer den Stecker und lassen Sie das Gerät abkühlen. Füllen Sie dann das Entkalkungsmittel zusammen mit Wasser in den Tank. Verwenden Sie kein reines Essig, das kann die Dichtungen beschädigen. Lassen Sie die Lösung durchlaufen und danach zweimal klares Wasser, damit kein Geschmack zurückbleibt.\n\n" +
      "Den Wassertank und den Filter sollten Sie zusätzlich einmal pro Woche mit warmem Wasser ausspülen. Bitte reinigen Sie diese Teile nicht in der Geschirrspülmaschine, sie könnten sich sonst verformen. Bei Problemen finden Sie eine Telefonnummer für den Kundendienst auf der letzten Seite dieser Anleitung.",
    qs: [
      {
        stem: "Wie oft sollte man bei hartem Wasser entkalken?",
        opts: ["etwa alle zwei Monate", "jeden Tag", "einmal im Jahr"],
        answer: "a",
      },
      {
        stem: "Was sollte man vor der Reinigung tun?",
        opts: ["den Tank ganz füllen", "den Stecker ziehen und das Gerät abkühlen lassen", "den Filter wegwerfen"],
        answer: "b",
      },
      {
        stem: "Warum soll man kein reines Essig verwenden?",
        opts: ["Es riecht zu stark.", "Es ist zu teuer.", "Es kann die Dichtungen beschädigen."],
        answer: "c",
      },
      {
        stem: "Wie sollen Wassertank und Filter nicht gereinigt werden?",
        opts: ["in der Geschirrspülmaschine", "mit warmem Wasser", "mit einem Tuch"],
        answer: "a",
      },
    ],
  },
  {
    title: "Hinweise für Fahrgäste der städtischen Verkehrsbetriebe",
    topicTag: "verkehr",
    passage:
      "Bitte beachten Sie beim Fahren mit U-Bahn, Bim und Bus einige einfache Regeln. Entwerten oder kaufen Sie Ihr Ticket vor dem Einsteigen. Wer ohne gültigen Fahrschein kontrolliert wird, zahlt einen Aufschlag; das ist deutlich teurer als eine reguläre Fahrkarte.\n\n" +
      "In den Fahrzeugen bitten wir Sie, den Sitzplatz älteren Personen, Schwangeren und Menschen mit Kindern anzubieten. Große Gepäckstücke stellen Sie so ab, dass niemand behindert wird. Das Mitnehmen von Fahrrädern ist nur in der U-Bahn und nur außerhalb der Stoßzeiten erlaubt.\n\n" +
      "Sollten Sie einen Gegenstand vergessen haben, wenden Sie sich an das Fundservice. Verspätet sich Ihre Linie erheblich, informieren Sie sich am besten über die aktuelle Anzeige an der Station oder in der App. Bei Fragen hilft Ihnen das Personal in den Kundenzentren gern weiter.",
    qs: [
      {
        stem: "Wann muss man das Ticket entwerten oder kaufen?",
        opts: ["vor dem Einsteigen", "beim Aussteigen", "erst bei einer Kontrolle"],
        answer: "a",
      },
      {
        stem: "Was passiert, wenn man ohne gültigen Fahrschein kontrolliert wird?",
        opts: ["Man wird sofort ausgeschlossen.", "Man zahlt einen Aufschlag.", "Es passiert nichts."],
        answer: "b",
      },
      {
        stem: "Wann darf man ein Fahrrad mitnehmen?",
        opts: ["immer im Bus", "nur in der U-Bahn außerhalb der Stoßzeiten", "nie"],
        answer: "b",
      },
      {
        stem: "An wen wendet man sich bei einem vergessenen Gegenstand?",
        opts: ["an das Fundservice", "an die Polizei", "an den Fahrer der Bim"],
        answer: "a",
      },
    ],
  },
];

// ── Assemble ─────────────────────────────────────────────────────────────────
const teil1Items: ExamItemInput[] = TEIL1.map((t) => ({
  ...base,
  taskType: "OESD_LV_TEIL1",
  title: t.title,
  prompt: "Lesen Sie den Text und entscheiden Sie: Sind die Aussagen richtig oder falsch?",
  topicTag: t.topicTag,
  timeLimitSeconds: 480,
  payload: {
    instructions: "Kreuzen Sie bei jeder Aussage an, ob sie laut Text richtig oder falsch ist.",
    passage: t.passage,
    questions: t.qs.map((q, i) => ({
      id: `a${i + 1}`,
      stem: `${i + 1}. ${q.stem}`,
      options: RF_OPTS,
      answer: q.answer,
    })),
  },
}));

const teil2Items: ExamItemInput[] = TEIL2.map((t) => ({
  ...base,
  taskType: "OESD_LV_TEIL2",
  title: t.title,
  prompt: "Lesen Sie den Text aus der Zeitung und beantworten Sie die vier Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 420,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
    passage: t.passage,
    questions: t.qs.map((q, i) => ({
      id: `q${i + 1}`,
      stem: q.stem,
      options: [
        { id: "a", text: q.opts[0] },
        { id: "b", text: q.opts[1] },
        { id: "c", text: q.opts[2] },
      ],
      answer: q.answer,
    })),
  },
}));

const teil3Items: ExamItemInput[] = TEIL3.map((t) => ({
  ...base,
  taskType: "OESD_LV_TEIL3",
  title: t.title,
  prompt: "Ordnen Sie jeder Situation die passende Anzeige zu.",
  topicTag: t.topicTag,
  timeLimitSeconds: 420,
  payload: {
    instructions:
      "Zu jeder Situation passt genau eine Anzeige. Es gibt mehr Anzeigen als Situationen — einige Anzeigen passen zu keiner Situation.",
    passage: "Anzeigen:\n" + t.ads.join("\n"),
    questions: t.situations.map((s, i) => ({
      id: `s${i + 1}`,
      stem: `${i + 1}. ${s}`,
      options: t.ads.map((a) => ({ id: a.slice(0, 1), text: a.slice(3) })),
      answer: t.answers[i],
    })),
  },
}));

const teil4Items: ExamItemInput[] = TEIL4.map((t) => ({
  ...base,
  taskType: "OESD_LV_TEIL4",
  title: t.title,
  prompt: "Lesen Sie den Meinungstext. Entscheiden Sie bei jeder Aussage: Ist diese Position im Text vertreten?",
  topicTag: t.topicTag,
  timeLimitSeconds: 480,
  payload: {
    instructions: "Kreuzen Sie bei jeder Position an, ob sie im Text vertreten wird (Ja) oder nicht (Nein).",
    passage: t.passage,
    questions: t.qs.map((q, i) => ({
      id: `p${i + 1}`,
      stem: `${i + 1}. ${q.stem}`,
      options: JN_OPTS,
      answer: q.answer,
    })),
  },
}));

const teil5Items: ExamItemInput[] = TEIL5.map((t) => ({
  ...base,
  taskType: "OESD_LV_TEIL5",
  title: t.title,
  prompt: "Lesen Sie die Anleitung bzw. die Hinweise und beantworten Sie die vier Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 420,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
    passage: t.passage,
    questions: t.qs.map((q, i) => ({
      id: `q${i + 1}`,
      stem: q.stem,
      options: [
        { id: "a", text: q.opts[0] },
        { id: "b", text: q.opts[1] },
        { id: "c", text: q.opts[2] },
      ],
      answer: q.answer,
    })),
  },
}));

// The two MC Teile (TEIL2, TEIL5) were authored without option "c" always in play;
// permute their options deterministically so all three positions are used across
// the bank. r/f, ja/nein and matching keep their authored answers. See ./_permute.ts.
export const ITEMS: ExamItemInput[] = deGame(
  [...teil1Items, ...teil2Items, ...teil3Items, ...teil4Items, ...teil5Items],
  { permuteMC: new Set(["OESD_LV_TEIL2", "OESD_LV_TEIL5"]) },
);
