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
