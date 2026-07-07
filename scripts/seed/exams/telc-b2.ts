// telc Deutsch B2 — original practice items (CEFR B2). Section weights are verified
// (LV 25, SB 10, HV 25, SA 15, Sprechen 25). The exact PASS THRESHOLD is not yet
// verbatim-confirmed, so the engine reports B2 with `thresholdVerified: false` and
// the UI states the threshold is pending official confirmation — it never silently
// implies 60%. The practice CONTENT below is unaffected by that flag.
//
// ORIGINALITY (doctrine #1): every text, gap and task is ORIGINAL to AlmiGoethe —
// never copied or derived from telc materials, Handbücher or Übungstests.
//
// Density target: 16 items/section (full build). Filled section-by-section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B2;
const EXAM = "TELC_B2" as const;

export const ITEMS: ExamItemInput[] = [
  // ---------------------------------------------------------------- LESEVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Reparieren statt wegwerfen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "In vielen Städten haben sich sogenannte Reparaturcafés etabliert. Dort helfen ehrenamtliche Fachleute dabei, defekte Geräte wieder instand zu setzen, statt sie zu entsorgen. Die Idee verbindet zwei Anliegen: Sie schont Ressourcen und bringt zugleich Menschen unterschiedlichen Alters ins Gespräch. Wer ein kaputtes Radio oder eine wackelige Lampe mitbringt, lernt oft nebenbei, wie das Gerät funktioniert. Kritiker geben allerdings zu bedenken, dass sich viele moderne Produkte kaum noch reparieren lassen, weil Hersteller sie fest verkleben oder Ersatzteile nicht anbieten. Genau hier setzen Forderungen nach einem „Recht auf Reparatur“ an, das Verbraucher europaweit stärken soll.",
      questions: [
        {
          id: "q1",
          stem: "Welche zwei Anliegen verbindet die Idee der Reparaturcafés?",
          options: [
            { id: "a", text: "Ressourcen schonen und Menschen ins Gespräch bringen" },
            { id: "b", text: "Geld verdienen und Werbung machen" },
            { id: "c", text: "neue Geräte verkaufen und Personal ausbilden" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welchen Einwand nennen Kritiker?",
          options: [
            { id: "a", text: "Reparaturen seien immer zu teuer." },
            { id: "b", text: "Viele moderne Produkte lassen sich kaum reparieren." },
            { id: "c", text: "Es fehle an ehrenamtlichen Helfern." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Worauf zielt das „Recht auf Reparatur“?",
          options: [
            { id: "a", text: "die Hersteller von Vorschriften zu befreien" },
            { id: "b", text: "die Verbraucher europaweit zu stärken" },
            { id: "c", text: "Reparaturcafés zu verbieten" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„Genau hier setzen … an“ verweist auf den zuvor genannten Punkt — lesen Sie den Satz davor mit.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Die Vier-Tage-Woche auf dem Prüfstand",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Mehrere Unternehmen haben in Pilotprojekten getestet, ob sich die Arbeitszeit auf vier Tage verkürzen lässt, ohne dass der Lohn sinkt. Die Zwischenbilanz fällt gemischt aus. Viele Beschäftigte berichten von weniger Stress und besserer Erholung, und in einigen Betrieben blieb die Leistung stabil, weil Besprechungen gestrafft und Abläufe verbessert wurden. In anderen Branchen jedoch, in denen die Arbeit unmittelbar an Kundenkontakt oder Schichten gebunden ist, ließ sich das Modell nur schwer umsetzen. Fachleute warnen deshalb davor, aus einzelnen Erfolgen eine allgemeine Regel abzuleiten.",
      questions: [
        {
          id: "q1",
          stem: "Was wurde in den Pilotprojekten getestet?",
          options: [
            { id: "a", text: "eine kürzere Arbeitswoche bei gleichem Lohn" },
            { id: "b", text: "eine längere Arbeitswoche mit mehr Lohn" },
            { id: "c", text: "die Abschaffung von Besprechungen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum blieb die Leistung in einigen Betrieben stabil?",
          options: [
            { id: "a", text: "weil mehr Personal eingestellt wurde" },
            { id: "b", text: "weil Abläufe verbessert und Besprechungen gestrafft wurden" },
            { id: "c", text: "weil die Löhne gesenkt wurden" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wovor warnen Fachleute?",
          options: [
            { id: "a", text: "aus einzelnen Erfolgen eine allgemeine Regel abzuleiten" },
            { id: "b", text: "das Modell überhaupt zu testen" },
            { id: "c", text: "Kundenkontakt zu vermeiden" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf die Gegenüberstellung „Viele … In anderen Branchen jedoch …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Das Comeback des Handwerks",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Lange galt ein Handwerksberuf als weniger angesehen als ein Studium. Das ändert sich allmählich. Angesichts voller Hörsäle und unsicherer Berufsaussichten für manche Akademiker entdecken junge Menschen die Vorteile einer Ausbildung neu: früher eigenes Geld, gute Übernahmechancen und die Aussicht, sich später selbstständig zu machen. Hinzu kommt die Befriedigung, am Ende des Tages ein greifbares Ergebnis zu sehen. Dennoch fehlt es weiter an Nachwuchs, was auch daran liegt, dass das Image sich langsamer wandelt als die Wirklichkeit.",
      questions: [
        {
          id: "q1",
          stem: "Warum entdecken junge Menschen das Handwerk neu?",
          options: [
            { id: "a", text: "wegen guter Aussichten wie früher Geld und Übernahmechancen" },
            { id: "b", text: "weil ein Studium verboten wurde" },
            { id: "c", text: "weil es keine Universitäten mehr gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche zusätzliche Befriedigung wird genannt?",
          options: [
            { id: "a", text: "am Ende ein greifbares Ergebnis zu sehen" },
            { id: "b", text: "nie arbeiten zu müssen" },
            { id: "c", text: "immer im Büro zu sitzen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Woran fehlt es laut Text weiterhin?",
          options: [
            { id: "a", text: "an Nachwuchs, weil sich das Image langsam wandelt" },
            { id: "b", text: "an Aufträgen" },
            { id: "c", text: "an Werkzeug" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Dennoch fehlt es weiter an …“ nennt trotz der Vorteile das bleibende Problem.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Weniger besitzen, mehr leben?",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Der Minimalismus, also der bewusste Verzicht auf überflüssigen Besitz, hat viele Anhänger gefunden. Wer weniger hat, so das Versprechen, gewinnt Zeit, Geld und innere Ruhe. Tatsächlich berichten manche, dass sie sich freier fühlen, seit sie ausgemistet haben. Kritiker merken jedoch an, dass Minimalismus oft ein Lebensstil für jene ist, die es sich leisten können, Dinge wegzugeben und bei Bedarf neu zu kaufen. Für Menschen mit wenig Geld ist Sparsamkeit dagegen keine Wahl, sondern Notwendigkeit.",
      questions: [
        {
          id: "q1",
          stem: "Was verspricht der Minimalismus?",
          options: [
            { id: "a", text: "Zeit, Geld und innere Ruhe" },
            { id: "b", text: "mehr Besitz" },
            { id: "c", text: "höheres Ansehen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was kritisieren die Gegner?",
          options: [
            { id: "a", text: "Minimalismus sei oft ein Stil für Wohlhabende." },
            { id: "b", text: "Minimalismus mache arm." },
            { id: "c", text: "Minimalismus sei verboten." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was gilt für Menschen mit wenig Geld?",
          options: [
            { id: "a", text: "Sparsamkeit ist keine Wahl, sondern Notwendigkeit." },
            { id: "b", text: "Sie leben immer minimalistisch aus Überzeugung." },
            { id: "c", text: "Sie besitzen am meisten." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„oft ein Lebensstil für jene, die …“ enthält die eigentliche Kritik.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Achtsamkeit zwischen Nutzen und Mode",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Achtsamkeit, also das bewusste Wahrnehmen des Augenblicks, ist zu einem beliebten Thema geworden. Studien deuten darauf hin, dass entsprechende Übungen bei Stress und Schlafproblemen helfen können. Zugleich ist ein ganzer Markt entstanden: Apps, Kurse und Bücher versprechen rasche Entspannung. Genau hier sehen manche eine Gefahr. Wird Achtsamkeit zur schnellen Technik gegen Stress verkauft, gerät leicht aus dem Blick, dass sie eigentlich eine Haltung ist, die Übung und Zeit verlangt. Nicht jedes Angebot hält also, was es verspricht.",
      questions: [
        {
          id: "q1",
          stem: "Wobei kann Achtsamkeit laut Studien helfen?",
          options: [
            { id: "a", text: "bei Stress und Schlafproblemen" },
            { id: "b", text: "bei körperlichen Verletzungen" },
            { id: "c", text: "beim Sprachenlernen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin sehen manche eine Gefahr?",
          options: [
            { id: "a", text: "Achtsamkeit werde als schnelle Technik verkauft" },
            { id: "b", text: "Achtsamkeit sei zu teuer für alle" },
            { id: "c", text: "Achtsamkeit sei verboten" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist Achtsamkeit laut Text eigentlich?",
          options: [
            { id: "a", text: "eine Haltung, die Übung und Zeit verlangt" },
            { id: "b", text: "ein einmaliger Trick" },
            { id: "c", text: "ein technisches Gerät" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Genau hier sehen manche eine Gefahr“ leitet den kritischen Kern ein.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Kleidung aus zweiter Hand",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Gebrauchte Kleidung zu kaufen war lange mit einem gewissen Vorurteil behaftet. Heute gilt Second-Hand-Mode vielen als klug und umweltbewusst. Wer bereits getragene Stücke kauft, spart Ressourcen und Geld und findet nicht selten Besonderes, das es neu gar nicht mehr gibt. Onlineplattformen haben den Handel zusätzlich erleichtert. Kritisch bleibt allerdings, dass die wachsende Nachfrage nach günstiger Gebrauchtware in manchen Ländern auch zu Problemen führt, wenn große Mengen aussortierter Kleidung dort auf Märkten und schließlich auf Deponien landen.",
      questions: [
        {
          id: "q1",
          stem: "Wie gilt Second-Hand-Mode heute?",
          options: [
            { id: "a", text: "als klug und umweltbewusst" },
            { id: "b", text: "als peinlich" },
            { id: "c", text: "als verboten" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was hat den Handel erleichtert?",
          options: [
            { id: "a", text: "Onlineplattformen" },
            { id: "b", text: "höhere Preise" },
            { id: "c", text: "weniger Auswahl" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welches Problem nennt der Text?",
          options: [
            { id: "a", text: "große Mengen aussortierter Kleidung landen anderswo auf Deponien" },
            { id: "b", text: "Es gibt keine gebrauchte Kleidung mehr." },
            { id: "c", text: "Gebrauchtware ist zu teuer." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Kritisch bleibt allerdings, dass …“ nennt die Kehrseite des Trends.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Eine Auszeit vom Smartphone",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "medien",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Immer mehr Menschen nehmen sich bewusst eine Auszeit vom Smartphone. Sie schalten das Gerät am Abend aus oder verzichten am Wochenende ganz darauf. Der Gedanke dahinter ist, wieder mehr Ruhe zu finden und Zeit für anderes zu haben. Fachleute halten das für sinnvoll, warnen aber vor übertriebenen Erwartungen. Eine einzelne Auszeit ändert wenig, wenn man danach in alte Gewohnheiten zurückfällt. Wirksamer sei es, den Umgang mit dem Gerät dauerhaft zu überdenken, statt nur gelegentlich zu verzichten.",
      questions: [
        {
          id: "q1",
          stem: "Was ist der Gedanke hinter der Auszeit?",
          options: [
            { id: "a", text: "wieder mehr Ruhe und Zeit für anderes zu finden" },
            { id: "b", text: "das Smartphone abzuschaffen" },
            { id: "c", text: "mehr Apps zu nutzen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wovor warnen Fachleute?",
          options: [
            { id: "a", text: "vor übertriebenen Erwartungen an eine einzelne Auszeit" },
            { id: "b", text: "vor jedem Verzicht" },
            { id: "c", text: "vor dem Kauf neuer Geräte" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist laut Fachleuten wirksamer?",
          options: [
            { id: "a", text: "den Umgang mit dem Gerät dauerhaft zu überdenken" },
            { id: "b", text: "nur einmal im Jahr zu verzichten" },
            { id: "c", text: "gar nichts zu ändern" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„warnen aber vor …“ und „Wirksamer sei es …“ tragen die eigentliche Botschaft.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Warum Städte Bäume brauchen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Bäume in der Stadt sind mehr als schmückendes Beiwerk. An heißen Tagen spenden sie Schatten und kühlen ihre Umgebung spürbar. Sie filtern Staub aus der Luft und bieten Vögeln und Insekten einen Lebensraum. Dennoch haben es Stadtbäume schwer: Wenig Platz für die Wurzeln, Hitze und Streusalz setzen ihnen zu. Fachleute fordern deshalb, bei Neupflanzungen widerstandsfähige Arten zu wählen und den Bäumen von Anfang an genügend Raum zu geben, damit sie alt werden können.",
      questions: [
        {
          id: "q1",
          stem: "Welchen Nutzen haben Stadtbäume an heißen Tagen?",
          options: [
            { id: "a", text: "Sie spenden Schatten und kühlen die Umgebung." },
            { id: "b", text: "Sie erhöhen die Temperatur." },
            { id: "c", text: "Sie machen Lärm." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was setzt den Stadtbäumen zu?",
          options: [
            { id: "a", text: "wenig Platz, Hitze und Streusalz" },
            { id: "b", text: "zu viel Regen" },
            { id: "c", text: "zu viele Vögel" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was fordern Fachleute?",
          options: [
            { id: "a", text: "widerstandsfähige Arten und genügend Raum" },
            { id: "b", text: "keine Bäume mehr zu pflanzen" },
            { id: "c", text: "mehr Streusalz" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Dennoch haben es Stadtbäume schwer“ markiert den Übergang zum Problem.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Der Trend zum Selbermachen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Ob Brot backen, Möbel bauen oder Kleidung nähen: Immer mehr Menschen stellen Dinge lieber selbst her, statt sie zu kaufen. Für viele ist das ein Ausgleich zum Berufsalltag, in dem das Ergebnis der eigenen Arbeit oft unsichtbar bleibt. Etwas mit den eigenen Händen zu schaffen, vermittelt ein Gefühl von Können und Unabhängigkeit. Dass Selbstgemachtes am Ende nicht immer billiger ist als Gekauftes, stört dabei die wenigsten. Es geht eben nicht nur um den Preis, sondern um die Erfahrung.",
      questions: [
        {
          id: "q1",
          stem: "Warum stellen viele Dinge selbst her?",
          options: [
            { id: "a", text: "als Ausgleich zum Berufsalltag" },
            { id: "b", text: "weil Kaufen verboten ist" },
            { id: "c", text: "weil es immer billiger ist" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welches Gefühl vermittelt das Selbermachen?",
          options: [
            { id: "a", text: "ein Gefühl von Können und Unabhängigkeit" },
            { id: "b", text: "ein Gefühl von Langeweile" },
            { id: "c", text: "gar kein besonderes Gefühl" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Worum geht es laut Schluss vor allem?",
          options: [
            { id: "a", text: "um die Erfahrung, nicht nur um den Preis" },
            { id: "b", text: "allein um das Sparen" },
            { id: "c", text: "um möglichst schnelles Arbeiten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht nur um den Preis, sondern um die Erfahrung“ fasst die Botschaft zusammen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Bewertungsportale im Netz",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Vor einer Reise oder einem Einkauf lesen viele zuerst die Bewertungen anderer Nutzer. Solche Portale können hilfreich sein, weil sie Erfahrungen bündeln, die man selbst nicht machen kann. Zugleich sind sie anfällig für Missbrauch: Manche Anbieter kaufen sich gute Bewertungen, andere versuchen, die Konkurrenz schlechtzureden. Für den einzelnen Leser ist oft schwer zu erkennen, welche Meinung echt ist. Fachleute raten deshalb, nicht auf eine einzelne Bewertung zu vertrauen, sondern auf das Gesamtbild vieler Stimmen zu achten.",
      questions: [
        {
          id: "q1",
          stem: "Warum können Bewertungsportale hilfreich sein?",
          options: [
            { id: "a", text: "Sie bündeln Erfahrungen, die man selbst nicht machen kann." },
            { id: "b", text: "Sie sind immer völlig objektiv." },
            { id: "c", text: "Sie ersetzen jede eigene Meinung." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wofür sind die Portale anfällig?",
          options: [
            { id: "a", text: "für Missbrauch, etwa gekaufte Bewertungen" },
            { id: "b", text: "für zu wenige Nutzer" },
            { id: "c", text: "für zu ehrliche Meinungen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wozu raten Fachleute?",
          options: [
            { id: "a", text: "auf das Gesamtbild vieler Stimmen zu achten" },
            { id: "b", text: "nur einer einzigen Bewertung zu vertrauen" },
            { id: "c", text: "Portale ganz zu meiden" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht auf eine einzelne …, sondern auf das Gesamtbild“ ist der Ratschlag.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Der Wert der Pause",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Wer viel zu tun hat, neigt dazu, Pausen zu streichen, um schneller fertig zu werden. Untersuchungen zeigen jedoch, dass das oft ein Trugschluss ist. Nach längerer Konzentration lässt die Leistung nach, und Fehler häufen sich. Kurze, regelmäßige Pausen wirken dem entgegen: Sie helfen, die Aufmerksamkeit wiederherzustellen. Entscheidend ist allerdings, wie man die Pause verbringt. Wer in der Pause nur auf den Bildschirm des Handys schaut, erholt sich weniger als jemand, der aufsteht und sich kurz bewegt.",
      questions: [
        {
          id: "q1",
          stem: "Warum ist das Streichen von Pausen oft ein Trugschluss?",
          options: [
            { id: "a", text: "Nach langer Konzentration sinkt die Leistung und Fehler häufen sich." },
            { id: "b", text: "Pausen sind gesetzlich verboten." },
            { id: "c", text: "Ohne Pausen arbeitet man am besten." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie wirken kurze, regelmäßige Pausen?",
          options: [
            { id: "a", text: "Sie helfen, die Aufmerksamkeit wiederherzustellen." },
            { id: "b", text: "Sie machen müder." },
            { id: "c", text: "Sie haben keine Wirkung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist laut Text entscheidend?",
          options: [
            { id: "a", text: "wie man die Pause verbringt" },
            { id: "b", text: "dass die Pause möglichst lang ist" },
            { id: "c", text: "dass man das Handy nutzt" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Entscheidend ist allerdings, wie …“ verschiebt den Fokus auf die Art der Pause.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Reisen abseits der Touristenströme",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Während einige berühmte Orte unter zu vielen Besuchern leiden, bleiben andere Regionen fast unbeachtet. Manche Reisende suchen deshalb bewusst das Weniger-Bekannte. Sie erhoffen sich ruhigere Erlebnisse und den Kontakt zu Einheimischen, der an überlaufenen Zielen oft verloren geht. Fachleute sehen darin eine Chance, den Tourismus gerechter zu verteilen. Sie warnen jedoch davor, den Trend zu romantisieren: Auch abgelegene Orte können durch plötzlichen Andrang überfordert werden, wenn sie nicht darauf vorbereitet sind.",
      questions: [
        {
          id: "q1",
          stem: "Warum suchen manche Reisende weniger bekannte Orte?",
          options: [
            { id: "a", text: "wegen ruhigerer Erlebnisse und Kontakt zu Einheimischen" },
            { id: "b", text: "weil es dort billiger ist" },
            { id: "c", text: "weil berühmte Orte gesperrt sind" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Chance sehen Fachleute?",
          options: [
            { id: "a", text: "den Tourismus gerechter zu verteilen" },
            { id: "b", text: "den Tourismus abzuschaffen" },
            { id: "c", text: "mehr Hotels an berühmten Orten zu bauen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wovor warnen Fachleute?",
          options: [
            { id: "a", text: "den Trend zu romantisieren, da auch abgelegene Orte überfordert sein können" },
            { id: "b", text: "vor jedem Reisen" },
            { id: "c", text: "vor zu wenigen Besuchern" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„warnen jedoch davor, den Trend zu romantisieren“ ist die kritische Einschränkung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Wenn Familien sich wandeln",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Das Bild der Familie hat sich in den letzten Jahrzehnten stark verändert. Neben der klassischen Familie mit verheirateten Eltern und Kindern gibt es heute viele andere Formen: Alleinerziehende, Patchworkfamilien oder Paare ohne Trauschein. Diese Vielfalt wird von den meisten inzwischen als normal empfunden. Was Familie ausmacht, so betonen Fachleute, sei ohnehin weniger die äußere Form als das, was im Inneren zählt: verlässliche Beziehungen, in denen man füreinander da ist.",
      questions: [
        {
          id: "q1",
          stem: "Was hat sich laut Text verändert?",
          options: [
            { id: "a", text: "das Bild der Familie" },
            { id: "b", text: "die Zahl der Kinder pro Familie ist null" },
            { id: "c", text: "die Sprache der Familien" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie werden die neuen Familienformen empfunden?",
          options: [
            { id: "a", text: "von den meisten als normal" },
            { id: "b", text: "als verboten" },
            { id: "c", text: "als unmöglich" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was macht laut Fachleuten Familie vor allem aus?",
          options: [
            { id: "a", text: "verlässliche Beziehungen, nicht die äußere Form" },
            { id: "b", text: "allein der Trauschein" },
            { id: "c", text: "die Zahl der Personen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„weniger die äußere Form als das, was im Inneren zählt“ trägt die Aussage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Ehrenamt neu gedacht",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Das ehrenamtliche Engagement verändert seine Gestalt. Weniger Menschen binden sich über Jahre an einen Verein; stattdessen helfen viele lieber für ein bestimmtes Projekt und für begrenzte Zeit. Für Organisationen ist das eine Herausforderung, denn kurzfristige Helfer müssen häufiger eingearbeitet werden. Zugleich erreichen projektbezogene Angebote Menschen, die sich früher gar nicht engagiert hätten. Wer flexibel bleiben will, findet so leichter einen Zugang. Die Hilfsbereitschaft ist also nicht gesunken, sie zeigt sich nur in neuer Form.",
      questions: [
        {
          id: "q1",
          stem: "Wie engagieren sich viele Menschen heute lieber?",
          options: [
            { id: "a", text: "für ein bestimmtes Projekt und begrenzte Zeit" },
            { id: "b", text: "über Jahrzehnte in einem Verein" },
            { id: "c", text: "gar nicht mehr" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum ist das für Organisationen schwierig?",
          options: [
            { id: "a", text: "Kurzfristige Helfer müssen öfter eingearbeitet werden." },
            { id: "b", text: "Es gibt zu viele feste Mitglieder." },
            { id: "c", text: "Niemand will helfen." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet die Schlussfolgerung?",
          options: [
            { id: "a", text: "Die Hilfsbereitschaft zeigt sich in neuer Form." },
            { id: "b", text: "Die Hilfsbereitschaft ist verschwunden." },
            { id: "c", text: "Ehrenamt gibt es nicht mehr." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht gesunken, sie zeigt sich nur in neuer Form“ ist die zentrale These.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Die Wiederentdeckung der Stille",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "In einer Welt voller Geräusche wird Stille zu einer Seltenheit. Verkehr, Musik und ständige Benachrichtigungen begleiten den Alltag. Kein Wunder, dass immer mehr Menschen die Ruhe bewusst suchen, sei es beim Wandern oder in eigens angebotenen Stille-Seminaren. Fachleute weisen darauf hin, dass Stille nicht bloß angenehm ist, sondern auch der Erholung dient: Das Gehirn kann in ruhigen Momenten verarbeiten, was es zuvor aufgenommen hat. Wer nie zur Ruhe kommt, nimmt sich womöglich genau diese Gelegenheit.",
      questions: [
        {
          id: "q1",
          stem: "Warum wird Stille zur Seltenheit?",
          options: [
            { id: "a", text: "weil Verkehr, Musik und Benachrichtigungen den Alltag begleiten" },
            { id: "b", text: "weil niemand mehr spricht" },
            { id: "c", text: "weil es zu wenige Menschen gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welchen Nutzen hat Stille laut Fachleuten?",
          options: [
            { id: "a", text: "Das Gehirn kann Aufgenommenes verarbeiten." },
            { id: "b", text: "Sie macht müde und krank." },
            { id: "c", text: "Sie hat keinen Nutzen." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was riskiert, wer nie zur Ruhe kommt?",
          options: [
            { id: "a", text: "sich die Gelegenheit zur Erholung zu nehmen" },
            { id: "b", text: "zu viel zu schlafen" },
            { id: "c", text: "nichts" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht bloß angenehm …, sondern auch der Erholung“ nennt den eigentlichen Nutzen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Wenn Roboter im Haushalt helfen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Geräte, die selbstständig saugen oder den Rasen mähen, sind längst im Handel. Sie versprechen, uns lästige Arbeit abzunehmen und Zeit zu schenken. Tatsächlich schätzen viele Nutzer die Entlastung. Kritiker geben jedoch zu bedenken, dass solche Geräte teuer sind und keineswegs jede Aufgabe zuverlässig erledigen. Zudem stellt sich die Frage, was mit der gewonnenen Zeit geschieht. Wird sie wirklich für Erholung genutzt oder nur mit anderen Pflichten gefüllt? Technik allein, so das Fazit, schafft noch keine freie Zeit.",
      questions: [
        {
          id: "q1",
          stem: "Was versprechen solche Geräte?",
          options: [
            { id: "a", text: "lästige Arbeit abzunehmen und Zeit zu schenken" },
            { id: "b", text: "mehr Arbeit zu schaffen" },
            { id: "c", text: "Geld zu verdienen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was geben Kritiker zu bedenken?",
          options: [
            { id: "a", text: "Die Geräte sind teuer und nicht immer zuverlässig." },
            { id: "b", text: "Die Geräte sind kostenlos." },
            { id: "c", text: "Die Geräte erledigen jede Aufgabe perfekt." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet das Fazit des Textes?",
          options: [
            { id: "a", text: "Technik allein schafft noch keine freie Zeit." },
            { id: "b", text: "Technik macht immer glücklich." },
            { id: "c", text: "Freie Zeit ist unwichtig." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die rhetorische Frage „Wird sie wirklich …?“ leitet zum Fazit über.",
  },

  // ----------------------------------------------------------------- SPRACHBAUSTEINE
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Rundmail an das Team",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Kolleginnen und Kollegen, (1) der anstehenden Umstellung auf das neue System bitte ich Sie, an der Schulung am Freitag teilzunehmen. Wer an dem Termin verhindert ist, (2) sich bitte rechtzeitig bei mir. Die Unterlagen stelle ich Ihnen vorab zur Verfügung, (3) Sie sich vorbereiten können.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Angesichts" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Statt" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "meldet" },
            { id: "b", text: "melde" },
            { id: "c", text: "gemeldet" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„damit“ nennt eine Absicht (Sie können sich vorbereiten). „sodass“ nennt eine Folge — hier passt die Absicht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Antwort auf eine Beschwerde",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Frau Adler, wir bedauern, dass Sie mit unserem Service nicht zufrieden waren. (1) Ihrer berechtigten Kritik haben wir unsere Abläufe überprüft. (2) sich der Fehler nicht wiederholt, schulen wir unsere Mitarbeiter erneut. Als Zeichen unseres Bedauerns (3) wir Ihnen einen Gutschein zu.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Aufgrund" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Entgegen" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Damit" },
            { id: "b", text: "Weil" },
            { id: "c", text: "Obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "senden" },
            { id: "b", text: "sendet" },
            { id: "c", text: "gesendet" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„aufgrund“ + Genitiv = Grund; „damit … nicht wiederholt“ nennt die Absicht; „wir senden“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Mitteilung zur Betriebsversammlung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Kolleginnen und Kollegen, die Betriebsversammlung, (1) Termin verschoben werden musste, findet nun am Freitag statt. Bitte planen Sie ausreichend Zeit ein, (2) alle wichtigen Punkte besprochen werden können. Wer nicht teilnehmen kann, (3) sich bitte im Voraus entschuldigen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "deren" },
            { id: "b", text: "dessen" },
            { id: "c", text: "die" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "sollte" },
            { id: "b", text: "soll" },
            { id: "c", text: "würde" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„deren Termin“ (fem. Versammlung, Genitiv); „damit … besprochen werden können“ (Absicht).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Hinweis zum Datenschutz",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und (1) nicht an Dritte weitergegeben. (2) Sie damit nicht einverstanden sind, können Sie der Verarbeitung jederzeit widersprechen. Ihre Angaben werden gelöscht, (3) der genannte Zweck erfüllt ist.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "werden" },
            { id: "b", text: "wird" },
            { id: "c", text: "haben" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Falls" },
            { id: "b", text: "Damit" },
            { id: "c", text: "Indem" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "sobald" },
            { id: "b", text: "seit" },
            { id: "c", text: "bevor" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Passiv Plural „Daten werden … weitergegeben“; „sobald der Zweck erfüllt ist“ (zeitlich).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Einladung zu einer Fortbildung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Wir laden Sie zu einer Fortbildung ein, (1) der Sie neue Methoden kennenlernen. Die Teilnahme lohnt sich, (2) Sie Ihre Kenntnisse auffrischen möchten. Bitte melden Sie sich bis Freitag an, (3) wir die Materialien vorbereiten können.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "bei" },
            { id: "b", text: "in" },
            { id: "c", text: "an" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "falls" },
            { id: "b", text: "damit" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "weil" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„bei der Sie … kennenlernen“ (Ort/Gelegenheit); „damit wir … vorbereiten können“ (Absicht).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Absage einer Bestellung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Damen und Herren, leider muss ich meine Bestellung stornieren, (1) sich meine Pläne geändert haben. Ich hoffe, dass Ihnen (2) keine Umstände entstehen. Sollten bereits Kosten angefallen sein, (3) ich diese selbstverständlich.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "da" },
            { id: "b", text: "denn" },
            { id: "c", text: "trotzdem" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "dadurch" },
            { id: "b", text: "deshalb" },
            { id: "c", text: "trotzdem" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "übernehme" },
            { id: "b", text: "übernimmt" },
            { id: "c", text: "übernommen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„da“ leitet den Grund ein (Verb ans Ende); „dadurch“ = durch die Stornierung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Ankündigung einer Baumaßnahme",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "wohnen",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Mieterinnen und Mieter, ab Montag wird die Fassade unseres Hauses renoviert. (1) der Arbeiten kann es zeitweise zu Lärm kommen. Wir bemühen uns, die Beeinträchtigungen so gering wie möglich zu halten. (2) die Balkone gestrichen werden, bitten wir Sie, diese vorübergehend leerzuräumen. Für Ihr Verständnis danken wir Ihnen, (3) die Arbeiten Ihrer aller Sicherheit dienen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Während" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Statt" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Solange" },
            { id: "b", text: "Sobald" },
            { id: "c", text: "Seitdem" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "da" },
            { id: "b", text: "damit" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„während der Arbeiten“ (Genitiv); „solange … gestrichen werden“ (Zeitdauer); „da“ = Grund.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Empfehlungsschreiben",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Frau Kaya war in unserem Team tätig und hat sich (1) durch ihre Zuverlässigkeit ausgezeichnet. Sie arbeitete stets sorgfältig, (2) sie auch unter Zeitdruck ruhig blieb. Ich kann sie (3) besten Gewissen weiterempfehlen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "vor allem" },
            { id: "b", text: "trotzdem" },
            { id: "c", text: "dennoch" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "wobei" },
            { id: "b", text: "weil" },
            { id: "c", text: "damit" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "mit" },
            { id: "b", text: "bei" },
            { id: "c", text: "in" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„wobei“ ergänzt eine begleitende Info; „mit bestem Gewissen“ ist eine feste Wendung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Info zur Rückgabe",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Gekaufte Waren können Sie innerhalb von vierzehn Tagen zurückgeben, (1) sie unbenutzt sind. Bitte bringen Sie den Kassenbon mit, (2) wir den Kauf nachvollziehen können. Der Betrag wird Ihnen dann (3) Ihr Konto zurückerstattet.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "sofern" },
            { id: "b", text: "damit" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "weil" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "auf" },
            { id: "b", text: "an" },
            { id: "c", text: "in" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sofern“ = unter der Bedingung; „auf Ihr Konto erstatten“ ist fest.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Rundschreiben des Vermieters",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Mieter, (1) der steigenden Energiekosten bitten wir Sie, sparsam zu heizen. Bitte lüften Sie kurz und kräftig, (2) die Wärme nicht unnötig verloren geht. (3) Fragen zur Nebenkostenabrechnung wenden Sie sich gern an die Hausverwaltung.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Angesichts" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Ungeachtet" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "Bei" },
            { id: "b", text: "In" },
            { id: "c", text: "Auf" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„angesichts“ + Genitiv (Grund); „bei Fragen“ nennt den Anlass.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Bestätigung einer Reservierung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrter Herr Prinz, wir bestätigen Ihre Reservierung für zwei Personen. Ihr Tisch ist bis 20:30 Uhr für Sie reserviert. (1) Sie später kommen, geben Sie uns bitte kurz Bescheid. Bei einer Gruppe ab sechs Personen bitten wir (2) eine Anzahlung. Wir freuen uns (3) Ihren Besuch.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Sollten" },
            { id: "b", text: "Würden" },
            { id: "c", text: "Hätten" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "um" },
            { id: "b", text: "für" },
            { id: "c", text: "über" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "auf" },
            { id: "b", text: "über" },
            { id: "c", text: "für" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Sollten Sie später kommen“ = höfliche Bedingung; „bitten um“; „sich freuen auf“ (Zukunft).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Mitteilung an das Team",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Kolleginnen und Kollegen, das neue Projekt ist erfolgreich gestartet. Ich möchte mich bei allen bedanken, (1) Einsatz das möglich gemacht hat. (2) es in der Anfangsphase einige Schwierigkeiten gab, haben wir den Zeitplan eingehalten. In der nächsten Woche besprechen wir, (3) wir aus den Erfahrungen lernen können.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "deren" },
            { id: "b", text: "dessen" },
            { id: "c", text: "die" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Obwohl" },
            { id: "b", text: "Weil" },
            { id: "c", text: "Damit" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "wie" },
            { id: "b", text: "dass" },
            { id: "c", text: "ob" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„deren Einsatz“ (bezieht sich auf „allen“, Plural); „obwohl“ nennt den Gegensatz.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Hinweis der Kursleitung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Teilnehmende, in der nächsten Stunde schreiben wir einen kurzen Test. Bereiten Sie sich gut vor, (1) Sie ein gutes Ergebnis erzielen. Der Test dauert dreißig Minuten. (2) Sie fertig sind, dürfen Sie den Raum leise verlassen. Die Ergebnisse besprechen wir, (3) alle den Test geschrieben haben.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "weil" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Sobald" },
            { id: "b", text: "Solange" },
            { id: "c", text: "Seitdem" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "sobald" },
            { id: "b", text: "während" },
            { id: "c", text: "bevor" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„damit Sie … erzielen“ (Absicht); „sobald Sie fertig sind“ (unmittelbar danach).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Antwort an eine Bewerberin",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Frau Weiß, vielen Dank für Ihre Bewerbung, (1) wir mit Interesse gelesen haben. Ihre Erfahrung hat uns überzeugt. Wir (2) Sie gern zu einem Gespräch einladen. Bitte teilen Sie uns mit, (3) Termin Ihnen passt.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "die" },
            { id: "b", text: "der" },
            { id: "c", text: "deren" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "würden" },
            { id: "b", text: "werden" },
            { id: "c", text: "haben" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "welcher" },
            { id: "b", text: "welchen" },
            { id: "c", text: "welchem" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Relativpronomen für „Bewerbung“ (Akk. fem.) = „die“; „welcher Termin“ (Nom., Subjekt).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Erinnerung an eine Frist",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Studierende, wir erinnern Sie daran, sich rechtzeitig für die Prüfung anzumelden. Die Frist endet am 15. des Monats. Anmeldungen, (1) danach eingehen, können nicht berücksichtigt werden. (2) technischer Probleme wenden Sie sich bitte umgehend an das Prüfungsamt. Wir empfehlen, sich nicht erst am letzten Tag anzumelden, (3) Sie auf der sicheren Seite sind.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "die" },
            { id: "b", text: "denen" },
            { id: "c", text: "deren" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Im Falle" },
            { id: "b", text: "Im Fall" },
            { id: "c", text: "Anlässlich" },
          ],
          answer: "b",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "weil" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Relativpronomen Nom. Pl. „die“; „im Fall technischer Probleme“ (Genitiv, ohne Artikel).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Dank an die Freiwilligen",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Helferinnen und Helfer, das Fest war ein großer Erfolg, (1) wir Ihrem Einsatz verdanken. Ohne Sie (2) wir das nicht geschafft. (3) es in Zukunft noch besser läuft, freuen wir uns über Ihre Rückmeldungen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "den" },
            { id: "b", text: "der" },
            { id: "c", text: "dem" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "hätten" },
            { id: "b", text: "haben" },
            { id: "c", text: "hatten" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "Damit" },
            { id: "b", text: "Weil" },
            { id: "c", text: "Obwohl" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Relativpronomen für „Erfolg“ (Akk. mask.) = „den“; „hätten … geschafft“ (Konjunktiv II).",
  },

  // ----------------------------------------------------------------- HOERVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Radiointerview: Stadtgärten",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 660,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Frau Ott, Sie betreuen einen Gemeinschaftsgarten mitten in der Stadt. Was reizt die Menschen daran? FRAU OTT: Viele suchen einen Ausgleich zum Alltag und möchten wieder selbst etwas anbauen. Interessant ist, dass es weniger um den Ertrag geht als um das gemeinsame Tun. MODERATORIN: Gibt es auch Schwierigkeiten? FRAU OTT: Ja, die größte Herausforderung ist tatsächlich die Organisation. Wer gießt in den Ferien? Wer kümmert sich im Winter? Ohne verbindliche Absprachen funktioniert es nicht. MODERATORIN: Und die Stadt unterstützt Sie? FRAU OTT: Sie stellt die Fläche, aber Werkzeug und Pflanzen finanzieren wir selbst.",
      questions: [
        {
          id: "q1",
          stem: "Worum geht es den Menschen laut Frau Ott vor allem?",
          options: [
            { id: "a", text: "um einen möglichst großen Ertrag" },
            { id: "b", text: "um das gemeinsame Tun" },
            { id: "c", text: "um finanziellen Gewinn" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was ist die größte Schwierigkeit?",
          options: [
            { id: "a", text: "die Organisation" },
            { id: "b", text: "das schlechte Wetter" },
            { id: "c", text: "der Mangel an Interesse" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie unterstützt die Stadt den Garten?",
          options: [
            { id: "a", text: "Sie bezahlt Werkzeug und Pflanzen." },
            { id: "b", text: "Sie stellt die Fläche zur Verfügung." },
            { id: "c", text: "Sie übernimmt die gesamte Pflege." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„weniger um … als um …“ verschiebt die Gewichtung — hören Sie genau, was wichtiger ist.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Als Fahrradkurier unterwegs",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Herr Peters, Sie arbeiten als Fahrradkurier. Was gefällt Ihnen daran? PETERS: Vor allem die Bewegung an der frischen Luft und dass ich mir die Zeit zum Teil selbst einteilen kann. MODERATORIN: Klingt anstrengend. PETERS: Das ist es auch, besonders im Winter. Aber ich bin lieber draußen als den ganzen Tag im Büro. MODERATORIN: Verdient man denn gut? PETERS: Ehrlich gesagt nicht besonders. Für viele ist es eher ein Nebenjob. Ich mache es trotzdem gern, aber auf Dauer bräuchte ich etwas Sichereres.",
      questions: [
        {
          id: "q1",
          stem: "Was gefällt Herrn Peters an seiner Arbeit?",
          options: [
            { id: "a", text: "die Bewegung und die freie Zeiteinteilung" },
            { id: "b", text: "die Ruhe im Büro" },
            { id: "c", text: "das hohe Gehalt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sagt er über den Verdienst?",
          options: [
            { id: "a", text: "Er ist nicht besonders gut." },
            { id: "b", text: "Er ist sehr hoch." },
            { id: "c", text: "Er reicht für ein sicheres Leben." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie sieht er die Zukunft?",
          options: [
            { id: "a", text: "Auf Dauer bräuchte er etwas Sichereres." },
            { id: "b", text: "Er will es für immer machen." },
            { id: "c", text: "Er hört sofort auf." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Ehrlich gesagt …“ und „auf Dauer bräuchte ich …“ zeigen seine ehrliche Einschätzung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_REPORT",
    title: "Bericht: Weniger Lärm in der Innenstadt",
    prompt: "Hören Sie den Bericht und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören einen kurzen Bericht. Wählen Sie die richtige Antwort.",
      audioScript:
        "Eine Stadt im Süden hat ein Modellprojekt gestartet, um den Lärm in der Innenstadt zu verringern. Auf mehreren Straßen wurde die Geschwindigkeit gesenkt, und der Belag wurde erneuert. Erste Messungen zeigen, dass es tatsächlich leiser geworden ist. Anwohner berichten, dass sie nachts besser schlafen. Kritiker bemängeln jedoch die hohen Kosten und fragen, ob sich das Projekt auf größere Städte übertragen lässt. Die Stadt will die Ergebnisse ein Jahr lang beobachten, bevor sie über eine Ausweitung entscheidet.",
      questions: [
        {
          id: "q1",
          stem: "Was wurde in dem Projekt gemacht?",
          options: [
            { id: "a", text: "Tempo gesenkt und der Straßenbelag erneuert" },
            { id: "b", text: "neue Häuser gebaut" },
            { id: "c", text: "der Verkehr ganz verboten" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was berichten die Anwohner?",
          options: [
            { id: "a", text: "Sie schlafen nachts besser." },
            { id: "b", text: "Es ist lauter geworden." },
            { id: "c", text: "Es hat sich nichts geändert." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was bemängeln die Kritiker?",
          options: [
            { id: "a", text: "die hohen Kosten und die Übertragbarkeit" },
            { id: "b", text: "dass es zu leise sei" },
            { id: "c", text: "dass niemand teilnimmt" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Kritiker bemängeln jedoch …“ leitet die Gegenposition ein.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Eine kleine Buchhandlung führen",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "kultur",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Lorenz, viele kleine Buchhandlungen mussten schließen. Wie halten Sie sich? LORENZ: Wir setzen auf Beratung und Veranstaltungen. Wer zu uns kommt, sucht oft nicht nur ein Buch, sondern einen Tipp oder ein Gespräch. MODERATOR: Konkurrieren Sie mit dem Onlinehandel? LORENZ: Beim Preis können wir nicht mithalten, das wäre aussichtslos. Aber wir bieten etwas, das der Versand nicht kann: einen Ort zum Stöbern und Menschen, die sich auskennen. MODERATOR: Und die Zukunft? LORENZ: Ich bin vorsichtig optimistisch. Solange Leute den persönlichen Kontakt schätzen, haben wir eine Chance.",
      questions: [
        {
          id: "q1",
          stem: "Worauf setzt Frau Lorenz?",
          options: [
            { id: "a", text: "auf Beratung und Veranstaltungen" },
            { id: "b", text: "auf die niedrigsten Preise" },
            { id: "c", text: "auf reinen Onlinehandel" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sagt sie zum Preiswettbewerb?",
          options: [
            { id: "a", text: "Beim Preis kann sie nicht mithalten." },
            { id: "b", text: "Sie ist billiger als der Versand." },
            { id: "c", text: "Der Preis spielt keine Rolle." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie sieht sie die Zukunft?",
          options: [
            { id: "a", text: "vorsichtig optimistisch, solange Kontakt geschätzt wird" },
            { id: "b", text: "völlig hoffnungslos" },
            { id: "c", text: "ohne jede Sorge" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„das wäre aussichtslos“ und „vorsichtig optimistisch“ sind nuancierte Aussagen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Umzug in eine neue Stadt",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Gespräch. Wählen Sie die richtige Antwort.",
      audioScript:
        "ANJA: Und, wie ist es, seit du umgezogen bist? DAVID: Am Anfang war es hart. Ich kannte niemanden und die Stadt war fremd. ANJA: Und jetzt? DAVID: Viel besser. Über die Arbeit habe ich schnell Leute kennengelernt, und inzwischen fühle ich mich fast heimisch. ANJA: Vermisst du deine alte Stadt nicht? DAVID: Manchmal schon, vor allem die Freunde. Aber ich fahre ja regelmäßig zurück. Und die neue Stadt hat auch viel zu bieten, das hatte ich vorher unterschätzt.",
      questions: [
        {
          id: "q1",
          stem: "Wie war es für David am Anfang?",
          options: [
            { id: "a", text: "hart, weil er niemanden kannte" },
            { id: "b", text: "sofort einfach" },
            { id: "c", text: "langweilig, aber vertraut" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie hat er Leute kennengelernt?",
          options: [
            { id: "a", text: "über die Arbeit" },
            { id: "b", text: "über alte Freunde" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was sagt er über die neue Stadt?",
          options: [
            { id: "a", text: "Sie hat mehr zu bieten, als er dachte." },
            { id: "b", text: "Sie ist langweilig." },
            { id: "c", text: "Sie gefällt ihm gar nicht." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„das hatte ich vorher unterschätzt“ zeigt, dass sich seine Meinung geändert hat.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Gesund essen im Alltag",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Frau Doktor Krüger, was ist Ihr wichtigster Rat für gesunde Ernährung? KRÜGER: Ganz einfach: möglichst frisch und abwechslungsreich essen. Man muss nicht auf alles verzichten. MODERATORIN: Viele haben aber wenig Zeit zum Kochen. KRÜGER: Das höre ich oft. Dabei muss gesundes Essen nicht aufwendig sein. Mit etwas Planung, etwa am Wochenende vorzukochen, spart man unter der Woche viel Zeit. MODERATORIN: Und Nahrungsergänzungsmittel? KRÜGER: Für die meisten Gesunden sind sie überflüssig. Eine ausgewogene Ernährung liefert in der Regel alles, was man braucht.",
      questions: [
        {
          id: "q1",
          stem: "Was ist Frau Krügers wichtigster Rat?",
          options: [
            { id: "a", text: "möglichst frisch und abwechslungsreich essen" },
            { id: "b", text: "auf alles verzichten" },
            { id: "c", text: "nur teure Produkte kaufen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was empfiehlt sie bei wenig Zeit?",
          options: [
            { id: "a", text: "mit etwas Planung vorzukochen" },
            { id: "b", text: "gar nicht mehr zu kochen" },
            { id: "c", text: "nur Fertiggerichte zu essen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was sagt sie zu Nahrungsergänzungsmitteln?",
          options: [
            { id: "a", text: "Für die meisten Gesunden sind sie überflüssig." },
            { id: "b", text: "Jeder sollte sie täglich nehmen." },
            { id: "c", text: "Sie ersetzen das Essen." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Für die meisten Gesunden … überflüssig“ ist eine klare, aber eingeschränkte Aussage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_REPORT",
    title: "Bericht: Elektroautos im Alltag",
    prompt: "Hören Sie den Bericht und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "verkehr",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören einen kurzen Bericht. Wählen Sie die richtige Antwort.",
      audioScript:
        "Immer mehr Menschen fahren elektrisch. Wer täglich kurze Strecken zurücklegt, ist mit einem Elektroauto oft gut bedient, denn das Aufladen zu Hause ist bequem und günstig. Auf langen Reisen zeigt sich jedoch, dass das Netz der Ladestationen noch Lücken hat, besonders auf dem Land. Fachleute rechnen damit, dass sich das in den nächsten Jahren bessern wird. Für viele bleibt der höhere Anschaffungspreis vorerst ein Hindernis, auch wenn die laufenden Kosten niedriger sind.",
      questions: [
        {
          id: "q1",
          stem: "Für wen ist ein Elektroauto oft gut geeignet?",
          options: [
            { id: "a", text: "für kurze tägliche Strecken" },
            { id: "b", text: "nur für lange Reisen" },
            { id: "c", text: "für niemanden" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wo zeigt sich noch ein Problem?",
          options: [
            { id: "a", text: "bei den Ladestationen auf dem Land" },
            { id: "b", text: "beim Aufladen zu Hause" },
            { id: "c", text: "bei den niedrigen Kosten" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist für viele vorerst ein Hindernis?",
          options: [
            { id: "a", text: "der höhere Anschaffungspreis" },
            { id: "b", text: "die hohen laufenden Kosten" },
            { id: "c", text: "das langsame Fahren" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„zeigt sich jedoch, dass …“ leitet die Einschränkung ein; laufende vs. Anschaffungskosten trennen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Ein Museum für alle",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "kultur",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Herr Braun, Sie leiten ein Museum. Wie holt man heute Besucher ins Haus? BRAUN: Indem man mehr bietet als nur Ausstellungen. Wir veranstalten Führungen für Kinder, Konzerte und offene Werkstätten. MODERATOR: Geht dabei nicht der ernste Charakter verloren? BRAUN: Das ist eine berechtigte Sorge. Wir achten darauf, dass die Angebote zur Sammlung passen. Es geht nicht um bloße Unterhaltung, sondern darum, Schwellen abzubauen. MODERATOR: Und der Erfolg? BRAUN: Die Besucherzahlen sind gestiegen, vor allem bei jungen Familien, die früher selten kamen.",
      questions: [
        {
          id: "q1",
          stem: "Wie holt Herr Braun Besucher ins Museum?",
          options: [
            { id: "a", text: "indem er mehr als nur Ausstellungen bietet" },
            { id: "b", text: "indem er den Eintritt erhöht" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie reagiert er auf die Sorge um den ernsten Charakter?",
          options: [
            { id: "a", text: "Die Angebote passen zur Sammlung, es geht ums Schwellen-Abbauen." },
            { id: "b", text: "Ihm ist der Charakter egal." },
            { id: "c", text: "Er bietet nur noch Unterhaltung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wer kommt jetzt häufiger?",
          options: [
            { id: "a", text: "junge Familien" },
            { id: "b", text: "niemand mehr" },
            { id: "c", text: "nur Fachleute" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht um bloße Unterhaltung, sondern darum, …“ präzisiert das Ziel.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Den Beruf wechseln",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Gespräch. Wählen Sie die richtige Antwort.",
      audioScript:
        "SARA: Du hast dich ja ganz umorientiert. War das nicht riskant? MARKUS: Doch, schon. Ich hatte einen sicheren Job, aber ich war einfach nicht zufrieden. SARA: Und wie hast du den Schritt gewagt? MARKUS: Ich habe erst abends eine Weiterbildung gemacht, während ich noch gearbeitet habe. So konnte ich ausprobieren, ob mir das Neue liegt, ohne alles aufzugeben. SARA: Klug. Und bereust du es? MARKUS: Keine Sekunde. Ich verdiene zwar am Anfang etwas weniger, aber ich stehe morgens viel lieber auf.",
      questions: [
        {
          id: "q1",
          stem: "Warum hat Markus den Beruf gewechselt?",
          options: [
            { id: "a", text: "Er war mit seinem sicheren Job nicht zufrieden." },
            { id: "b", text: "Er wurde entlassen." },
            { id: "c", text: "Er wollte mehr verdienen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie hat er den Schritt vorbereitet?",
          options: [
            { id: "a", text: "mit einer Weiterbildung neben dem Job" },
            { id: "b", text: "indem er sofort gekündigt hat" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie bewertet er die Entscheidung heute?",
          options: [
            { id: "a", text: "Er bereut sie nicht, obwohl er weniger verdient." },
            { id: "b", text: "Er bereut sie sehr." },
            { id: "c", text: "Er ist unsicher." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„zwar … weniger, aber …“ wägt Nachteil gegen Zufriedenheit ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_REPORT",
    title: "Bericht: Arbeiten im Homeoffice",
    prompt: "Hören Sie den Bericht und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören einen kurzen Bericht. Wählen Sie die richtige Antwort.",
      audioScript:
        "Seit sich das Arbeiten von zu Hause verbreitet hat, verändert sich der Alltag vieler Beschäftigter. Sie sparen den Weg zur Arbeit und können flexibler planen. Umfragen zeigen jedoch, dass nicht alle davon profitieren. Wer zu Hause keinen ruhigen Platz hat, tut sich schwer. Auch die Grenze zwischen Arbeit und Freizeit verschwimmt leicht. Viele Unternehmen setzen deshalb auf Mischformen, bei denen die Beschäftigten teils im Büro, teils zu Hause arbeiten.",
      questions: [
        {
          id: "q1",
          stem: "Welchen Vorteil nennt der Bericht?",
          options: [
            { id: "a", text: "Man spart den Arbeitsweg und plant flexibler." },
            { id: "b", text: "Man verdient mehr." },
            { id: "c", text: "Man arbeitet nie." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wer tut sich laut Umfragen schwer?",
          options: [
            { id: "a", text: "wer zu Hause keinen ruhigen Platz hat" },
            { id: "b", text: "wer gern reist" },
            { id: "c", text: "niemand" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Worauf setzen viele Unternehmen?",
          options: [
            { id: "a", text: "auf Mischformen aus Büro und Homeoffice" },
            { id: "b", text: "nur auf Büroarbeit" },
            { id: "c", text: "auf gar keine Arbeit" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„zeigen jedoch, dass nicht alle profitieren“ leitet die Einschränkung ein.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Trainerin im Verein",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "freizeit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Aydin, Sie trainieren eine Jugendmannschaft. Was ist Ihnen dabei am wichtigsten? AYDIN: Nicht in erster Linie der Sieg, sondern dass die Kinder Freude haben und lernen, im Team zu arbeiten. MODERATOR: Ist der Ehrgeiz nicht wichtig? AYDIN: Doch, ein gesunder Ehrgeiz gehört dazu. Aber wenn nur das Gewinnen zählt, verlieren wir die schwächeren Kinder. Und gerade die sollen dranbleiben. MODERATOR: Wie motivieren Sie? AYDIN: Ich lobe Fortschritte, nicht nur Ergebnisse. Wer besser wird, hat etwas erreicht, auch wenn das Spiel verloren geht.",
      questions: [
        {
          id: "q1",
          stem: "Was ist Frau Aydin am wichtigsten?",
          options: [
            { id: "a", text: "Freude und Teamarbeit, nicht in erster Linie der Sieg" },
            { id: "b", text: "nur das Gewinnen" },
            { id: "c", text: "möglichst viele Tore" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was passiert, wenn nur das Gewinnen zählt?",
          options: [
            { id: "a", text: "Man verliert die schwächeren Kinder." },
            { id: "b", text: "Alle werden besser." },
            { id: "c", text: "Nichts." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie motiviert sie die Kinder?",
          options: [
            { id: "a", text: "Sie lobt Fortschritte, nicht nur Ergebnisse." },
            { id: "b", text: "Sie lobt nur die Sieger." },
            { id: "c", text: "Sie kritisiert alle." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht in erster Linie …, sondern …“ und „nicht nur Ergebnisse“ zeigen ihre Haltung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Ein Bauernhof stellt um",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Herr Meier, Sie haben Ihren Hof auf ökologische Landwirtschaft umgestellt. War das schwierig? MEIER: Die ersten Jahre waren hart. Die Erträge waren geringer, und man muss viel dazulernen. MODERATORIN: Warum haben Sie es trotzdem gemacht? MEIER: Aus Überzeugung, aber auch, weil die Nachfrage nach solchen Produkten steigt. Heute verkaufe ich vieles direkt ab Hof. MODERATORIN: Lohnt es sich inzwischen? MEIER: Ja, aber nicht über Nacht. Wer umstellt, braucht Geduld und sollte nicht mit schnellem Gewinn rechnen.",
      questions: [
        {
          id: "q1",
          stem: "Wie waren die ersten Jahre nach der Umstellung?",
          options: [
            { id: "a", text: "hart, mit geringeren Erträgen" },
            { id: "b", text: "sofort sehr einträglich" },
            { id: "c", text: "ohne jede Veränderung" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum hat Herr Meier umgestellt?",
          options: [
            { id: "a", text: "aus Überzeugung und wegen steigender Nachfrage" },
            { id: "b", text: "weil es vorgeschrieben war" },
            { id: "c", text: "aus Langeweile" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was rät er anderen?",
          options: [
            { id: "a", text: "Geduld zu haben und nicht mit schnellem Gewinn zu rechnen" },
            { id: "b", text: "sofort viel Geld zu erwarten" },
            { id: "c", text: "gar nicht umzustellen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Ja, aber nicht über Nacht“ dämpft die Erwartung an schnellen Erfolg.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Arbeit in der Kita",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Schulz, Sie sind Erzieherin. Was schätzen Sie an Ihrem Beruf? SCHULZ: Die Arbeit mit den Kindern ist jeden Tag anders, das macht sie so lebendig. Man sieht direkt, wie sie sich entwickeln. MODERATOR: Und die Belastung? SCHULZ: Die ist nicht zu unterschätzen. Große Gruppen und wenig Personal machen die Arbeit anstrengend. MODERATOR: Was würde helfen? SCHULZ: Vor allem kleinere Gruppen und mehr Anerkennung. Der Beruf ist verantwortungsvoll, das wird oft übersehen.",
      questions: [
        {
          id: "q1",
          stem: "Was schätzt Frau Schulz an ihrem Beruf?",
          options: [
            { id: "a", text: "dass die Arbeit lebendig und abwechslungsreich ist" },
            { id: "b", text: "dass sie wenig zu tun hat" },
            { id: "c", text: "das hohe Gehalt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was macht die Arbeit anstrengend?",
          options: [
            { id: "a", text: "große Gruppen und wenig Personal" },
            { id: "b", text: "zu viel Personal" },
            { id: "c", text: "zu wenige Kinder" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was würde laut Frau Schulz helfen?",
          options: [
            { id: "a", text: "kleinere Gruppen und mehr Anerkennung" },
            { id: "b", text: "größere Gruppen" },
            { id: "c", text: "weniger Anerkennung" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„das wird oft übersehen“ betont, was ihrer Meinung nach fehlt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_REPORT",
    title: "Bericht: Tauschen statt kaufen",
    prompt: "Hören Sie den Bericht und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören einen kurzen Bericht. Wählen Sie die richtige Antwort.",
      audioScript:
        "In vielen Vierteln entstehen sogenannte Tauschregale, in denen man Dinge, die man nicht mehr braucht, hineinstellen und andere mitnehmen kann. Die Idee ist einfach und kostet nichts. Sie schont Ressourcen und bringt Nachbarn miteinander ins Gespräch. Damit das funktioniert, braucht es allerdings Rücksicht: Wer nur nimmt und nie etwas hineinstellt, gefährdet das System. Auch kaputte Dinge gehören nicht ins Regal. Wo die Regeln beachtet werden, halten sich die Regale erstaunlich gut.",
      questions: [
        {
          id: "q1",
          stem: "Wie funktioniert ein Tauschregal?",
          options: [
            { id: "a", text: "Man stellt Dinge hinein und nimmt andere mit." },
            { id: "b", text: "Man kauft dort günstig ein." },
            { id: "c", text: "Man mietet Dinge." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was braucht es, damit es funktioniert?",
          options: [
            { id: "a", text: "Rücksicht — nicht nur nehmen, auch geben" },
            { id: "b", text: "eine Gebühr" },
            { id: "c", text: "eine Aufsicht rund um die Uhr" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was gehört nicht ins Regal?",
          options: [
            { id: "a", text: "kaputte Dinge" },
            { id: "b", text: "Bücher" },
            { id: "c", text: "Spielzeug" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„braucht es allerdings Rücksicht“ nennt die Bedingung für das Gelingen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Wohnungen umweltfreundlich bauen",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Frau Richter, Sie planen umweltfreundliche Wohnhäuser. Was heißt das konkret? RICHTER: Zum Beispiel gute Dämmung, damit weniger geheizt werden muss, und Materialien, die man wiederverwenden kann. MODERATORIN: Ist das nicht teurer? RICHTER: In der Anschaffung oft ja. Aber über die Jahre spart man bei Energie und Reparaturen. Man muss also langfristig rechnen. MODERATORIN: Was wünschen sich die Bewohner? RICHTER: Interessanterweise nicht nur niedrige Kosten, sondern auch viel Tageslicht und ein gesundes Raumklima. Das wird oft unterschätzt.",
      questions: [
        {
          id: "q1",
          stem: "Was gehört zu umweltfreundlichem Bauen?",
          options: [
            { id: "a", text: "gute Dämmung und wiederverwendbare Materialien" },
            { id: "b", text: "möglichst dünne Wände" },
            { id: "c", text: "keine Fenster" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sagt Frau Richter zu den Kosten?",
          options: [
            { id: "a", text: "In der Anschaffung teurer, langfristig spart man." },
            { id: "b", text: "Immer billiger als üblich." },
            { id: "c", text: "Die Kosten spielen keine Rolle." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was wünschen sich die Bewohner außerdem?",
          options: [
            { id: "a", text: "viel Tageslicht und ein gesundes Raumklima" },
            { id: "b", text: "möglichst kleine Räume" },
            { id: "c", text: "keine Heizung" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht nur …, sondern auch …“ und „langfristig rechnen“ sind die Kernaussagen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Interview: Ein Café gründen",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören ein Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Vogel, Sie haben ein eigenes Café eröffnet. War das ein Sprung ins kalte Wasser? VOGEL: In gewisser Weise ja, aber ich habe mich lange vorbereitet und einen genauen Plan gemacht. MODERATOR: Was war die größte Überraschung? VOGEL: Wie viel Arbeit hinter den Kulissen steckt: Einkauf, Buchhaltung, Personal. Das Kaffeekochen ist nur ein kleiner Teil. MODERATOR: Würden Sie es wieder tun? VOGEL: Ja, sofort. Es ist anstrengend, aber es ist mein eigenes Projekt, und die Stammgäste geben mir viel zurück.",
      questions: [
        {
          id: "q1",
          stem: "Wie hat sich Frau Vogel vorbereitet?",
          options: [
            { id: "a", text: "Sie hat lange geplant und sich vorbereitet." },
            { id: "b", text: "Sie hat gar nicht geplant." },
            { id: "c", text: "Sie hat das Café geerbt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was war die größte Überraschung?",
          options: [
            { id: "a", text: "wie viel Arbeit hinter den Kulissen steckt" },
            { id: "b", text: "dass niemand kommt" },
            { id: "c", text: "dass Kaffeekochen alles ist" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Würde sie es wieder tun?",
          options: [
            { id: "a", text: "Ja, trotz der Anstrengung." },
            { id: "b", text: "Nein, auf keinen Fall." },
            { id: "c", text: "Sie weiß es nicht." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Das Kaffeekochen ist nur ein kleiner Teil“ überrascht — genau das wird gefragt.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Handyverbot an Schulen",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Online-Forum wird diskutiert, ob Smartphones auf dem Schulgelände generell verboten werden sollten. Sie möchten sich an der Diskussion beteiligen.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie kurz auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote:
      "Auf B2 wird eine klare Position mit Begründung erwartet. Verbinden Sie Ihre Argumente mit „außerdem“, „allerdings“, „daher“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Autofreie Innenstädte",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "verkehr",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Online-Forum wird diskutiert, ob Innenstädte für Autos gesperrt werden sollten.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie kurz auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Denken Sie an Anwohner, Geschäfte und Umwelt. Eine klare Position gehört ans Ende.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Verkaufsoffene Sonntage",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "Es wird diskutiert, ob Geschäfte auch sonntags öffnen dürfen sollten.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und formulieren Sie ein Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Wägen Sie Kundenwunsch und Umsatz gegen Ruhe und Arbeitsbedingungen ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Brauchen wir noch Bargeld?",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird gefragt, ob Bargeld angesichts des bargeldlosen Bezahlens noch nötig ist.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, nennen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Denken Sie an Bequemlichkeit gegen Datenschutz und an Menschen ohne Konto.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Homeoffice für alle?",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob Beschäftigte, wo möglich, überwiegend von zu Hause arbeiten sollten.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Berücksichtigen Sie Flexibilität, Wohnsituation und den Kontakt im Team.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Kochen als Schulfach",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird vorgeschlagen, dass Schulen ein Fach anbieten, in dem Kinder gesundes Kochen und Ernährung lernen.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und formulieren Sie ein Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Denken Sie an praktischen Nutzen gegen einen ohnehin vollen Stundenplan.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Fliegen und Klima",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob man angesichts des Klimawandels weniger fliegen sollte.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Wägen Sie Umweltschutz gegen persönliche Freiheit und fehlende Alternativen ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Smartphones für Kinder",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird gefragt, ab welchem Alter Kinder ein eigenes Smartphone haben sollten.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Denken Sie an Erreichbarkeit und Selbstständigkeit gegen Ablenkung und Risiken.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Haustiere in Mietwohnungen",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob Vermieter Haustiere in ihren Wohnungen grundsätzlich erlauben sollten.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Berücksichtigen Sie das Wohl der Tiere gegen mögliche Schäden und Rücksicht auf Nachbarn.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Ehrenamt belohnen?",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird vorgeschlagen, freiwilliges Engagement mit kleinen Vorteilen wie Vergünstigungen zu belohnen.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und formulieren Sie ein Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Fragen Sie, ob Belohnungen motivieren oder die Freiwilligkeit untergraben.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Weniger Fleisch essen?",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob man aus Umwelt- und Gesundheitsgründen weniger Fleisch essen sollte.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Es geht um Maß und persönliche Entscheidung — pauschale Verbote wirken schwächer.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Sport im Betrieb fördern",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "gesundheit",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird vorgeschlagen, dass Firmen ihren Beschäftigten Sportangebote während der Arbeitszeit ermöglichen.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und formulieren Sie ein Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Wägen Sie Gesundheit und Motivation gegen Kosten und Arbeitszeit ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Werbung an Kinder richten",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob Werbung, die sich gezielt an Kinder richtet, stärker eingeschränkt werden sollte.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Denken Sie an den Schutz von Kindern gegen die Freiheit der Wirtschaft.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Ein kostenloses Kulturangebot",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "kultur",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird vorgeschlagen, dass Museen an einem Tag im Monat kostenlosen Eintritt anbieten.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und formulieren Sie ein Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Wägen Sie kulturelle Teilhabe gegen die Finanzierung der Häuser ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Ein Jahr Auszeit vor dem Studium",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob es sinnvoll ist, nach der Schule ein Jahr Pause zu machen, bevor man studiert.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Denken Sie an Orientierung und Erfahrung gegen möglichen Zeitverlust.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Weiterbildung im Beruf",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Forum wird diskutiert, ob Arbeitgeber verpflichtet sein sollten, ihren Beschäftigten regelmäßige Weiterbildung zu ermöglichen.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Äußern Sie Ihre Meinung, bringen Sie zwei Argumente, gehen Sie auf eine Gegenmeinung ein und formulieren Sie ein Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote: "Wägen Sie den Nutzen für Beschäftigte und Betrieb gegen Kosten und Zeit ab.",
  },

  // ---------------------------------------------------------------------- SPRECHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B2_SP_PRESENT",
    title: "Ein Thema präsentieren: Freiwilliges soziales Jahr",
    prompt: "Bereiten Sie eine kurze Präsentation vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 210,
    payload: {
      situation:
        "Im Prüfungsteil sollen Sie ein Thema präsentieren. Ihr Thema: Sollten junge Menschen nach der Schule ein freiwilliges soziales Jahr machen?",
      instruction:
        "Präsentieren Sie das Thema strukturiert. Nennen Sie Vor- und Nachteile eines freiwilligen sozialen Jahres, bringen Sie ein Beispiel und beenden Sie mit Ihrer begründeten Meinung.",
      prepSeconds: 90,
      speakSeconds: 120,
    },
    guidanceNote: "Struktur zeigt Niveau: „Ich möchte drei Punkte ansprechen …“, „Zusammenfassend …“.",
  },
];
