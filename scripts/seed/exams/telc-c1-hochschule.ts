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
  // ---------------------------------------------------------------- LESEVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Wissenschaftskommunikation im Wandel",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Lange Zeit beschränkte sich die Kommunikation von Forschungsergebnissen auf Fachzeitschriften, deren Sprache für Laien kaum zugänglich war. Inzwischen jedoch sehen sich Wissenschaftlerinnen und Wissenschaftler zunehmend in der Pflicht, ihre Arbeit auch einer breiten Öffentlichkeit verständlich zu machen. Diese Öffnung ist nicht unumstritten. Befürworter argumentieren, dass eine informierte Gesellschaft rationalere Entscheidungen treffe und dass mit öffentlichen Geldern finanzierte Forschung auch öffentlich erklärt werden müsse. Skeptiker hingegen warnen davor, dass die Vereinfachung komplexer Sachverhalte zu Missverständnissen führe und dass der Zwang zur medialen Aufmerksamkeit seriöse von spektakulärer Forschung nicht mehr unterscheiden lasse. Unstrittig ist allein, dass die Fähigkeit, Erkenntnisse allgemein verständlich zu vermitteln, künftig zum Handwerkszeug jeder Forscherin und jedes Forschers gehören dürfte.",
      questions: [
        {
          id: "q1",
          stem: "Wie hat sich die Wissenschaftskommunikation verändert?",
          options: [
            { id: "a", text: "Sie richtet sich zunehmend an ein breites Publikum." },
            { id: "b", text: "Sie beschränkt sich wieder auf Fachzeitschriften." },
            { id: "c", text: "Sie ist vollständig verschwunden." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welches Argument nennen die Befürworter?",
          options: [
            { id: "a", text: "Öffentlich finanzierte Forschung müsse öffentlich erklärt werden." },
            { id: "b", text: "Vereinfachung führe zwangsläufig zu Fehlern." },
            { id: "c", text: "Mediale Aufmerksamkeit schade der Forschung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was gilt dem Text zufolge als unbestritten?",
          options: [
            { id: "a", text: "dass Forschung nicht erklärt werden sollte" },
            { id: "b", text: "dass verständliches Vermitteln künftig zum Handwerkszeug gehört" },
            { id: "c", text: "dass Fachzeitschriften überflüssig werden" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„Unstrittig ist allein, dass …“ markiert den Punkt, dem alle zustimmen — oft eine Prüfungsfrage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Die Ökonomie der Aufmerksamkeit",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "In einer Welt, in der Informationen nahezu unbegrenzt verfügbar sind, wird nicht das Wissen selbst zur knappen Ressource, sondern die Aufmerksamkeit, die ihm geschenkt werden kann. Medienunternehmen konkurrieren daher weniger um Inhalte als um die begrenzte Zeit ihres Publikums. Diese Verschiebung hat Folgen: Überschriften werden auf maximale Wirkung getrimmt, und Beiträge, die sofort fesseln, verdrängen solche, die Geduld verlangen. Manche Beobachter fürchten, dass darunter die Bereitschaft leidet, sich mit anspruchsvollen Themen auseinanderzusetzen. Andere halten dagegen, dass sich anspruchsvolle Angebote gerade dadurch abheben und ein treues Publikum finden können.",
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Text die eigentlich knappe Ressource?",
          options: [
            { id: "a", text: "das verfügbare Wissen" },
            { id: "b", text: "die Aufmerksamkeit des Publikums" },
            { id: "c", text: "die Zahl der Medienunternehmen" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Welche Folge wird beschrieben?",
          options: [
            { id: "a", text: "Beiträge, die sofort fesseln, verdrängen anspruchsvollere." },
            { id: "b", text: "Überschriften werden bewusst unauffällig gestaltet." },
            { id: "c", text: "Das Publikum hat plötzlich mehr Zeit." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet das Gegenargument der „anderen“?",
          options: [
            { id: "a", text: "Anspruchsvolle Angebote gehen zwangsläufig unter." },
            { id: "b", text: "Anspruchsvolle Angebote können sich abheben und treue Leser finden." },
            { id: "c", text: "Aufmerksamkeit sei gar nicht begrenzt." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achten Sie auf „Manche … Andere halten dagegen …“ — ein klassisches Pro-/Kontra-Signal.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Vom Nutzen des Scheiterns",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "In der öffentlichen Wahrnehmung gilt Forschung häufig als eine Abfolge von Erfolgen. Der wissenschaftliche Alltag sieht anders aus: Ein großer Teil aller Experimente führt zu keinem verwertbaren Ergebnis. Lange wurden solche Fehlschläge verschwiegen, weil sie als Makel galten. Inzwischen mehren sich Stimmen, die gerade in der Veröffentlichung gescheiterter Versuche einen Wert sehen, denn sie bewahren andere davor, denselben Irrweg einzuschlagen. Kritiker wenden ein, dass die Flut solcher Negativbefunde die ohnehin überlasteten Fachzeitschriften weiter füllen würde. Unbestritten bleibt jedoch, dass ein offenerer Umgang mit dem Misserfolg dem Erkenntnisfortschritt eher nützt als schadet.",
      questions: [
        {
          id: "q1",
          stem: "Wie sieht der wissenschaftliche Alltag laut Text tatsächlich aus?",
          options: [
            { id: "a", text: "Ein großer Teil der Experimente bleibt ohne verwertbares Ergebnis." },
            { id: "b", text: "Fast alle Experimente sind erfolgreich." },
            { id: "c", text: "Experimente werden kaum durchgeführt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welchen Wert sehen manche in der Veröffentlichung gescheiterter Versuche?",
          options: [
            { id: "a", text: "Sie bewahren andere vor demselben Irrweg." },
            { id: "b", text: "Sie steigern das Ansehen der Autoren." },
            { id: "c", text: "Sie ersetzen erfolgreiche Studien." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was bleibt dem Text zufolge unbestritten?",
          options: [
            { id: "a", text: "dass ein offener Umgang mit Misserfolg dem Fortschritt eher nützt" },
            { id: "b", text: "dass Fehlschläge verschwiegen werden sollten" },
            { id: "c", text: "dass Negativbefunde wertlos sind" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Unbestritten bleibt jedoch …“ formuliert die Kernthese trotz der Gegenstimmen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Die Grenzen der Messbarkeit",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Was sich zählen lässt, erscheint uns oft als besonders zuverlässig. Diese Vorliebe für das Messbare hat der Wissenschaft enorme Fortschritte ermöglicht, birgt jedoch eine Gefahr: Was sich nicht in Zahlen fassen lässt, gerät leicht aus dem Blick. Die Qualität einer Betreuung, das Vertrauen zwischen Menschen oder der Wert einer freien Stunde entziehen sich der Statistik weitgehend. Wenn Institutionen ausschließlich nach messbaren Kennzahlen gesteuert werden, besteht die Gefahr, dass sie das Zählbare optimieren und das eigentlich Wichtige vernachlässigen. Nicht alles, was zählt, ist zählbar — und nicht alles Zählbare zählt.",
      questions: [
        {
          id: "q1",
          stem: "Welche Gefahr sieht der Text in der Vorliebe für das Messbare?",
          options: [
            { id: "a", text: "Nicht Messbares gerät aus dem Blick." },
            { id: "b", text: "Zahlen werden völlig unwichtig." },
            { id: "c", text: "Die Wissenschaft macht keine Fortschritte mehr." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was geschieht laut Text, wenn nur nach Kennzahlen gesteuert wird?",
          options: [
            { id: "a", text: "Das Zählbare wird optimiert, Wichtiges vernachlässigt." },
            { id: "b", text: "Alles wird automatisch besser." },
            { id: "c", text: "Kennzahlen verlieren jede Bedeutung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lässt sich die Schlussaussage zusammenfassen?",
          options: [
            { id: "a", text: "Nicht alles Wichtige ist messbar." },
            { id: "b", text: "Nur Messbares ist wichtig." },
            { id: "c", text: "Messungen sind grundsätzlich falsch." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die abschließende Antithese („Nicht alles, was zählt …“) trägt die Hauptaussage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Interdisziplinäre Forschung",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Viele der drängendsten Fragen unserer Zeit lassen sich nicht innerhalb eines einzigen Fachs beantworten. Der Klimawandel etwa verlangt naturwissenschaftliche, ökonomische und ethische Perspektiven zugleich. Interdisziplinäre Zusammenarbeit gilt daher als vielversprechend. In der Praxis stößt sie jedoch auf Hürden: Jedes Fach hat seine eigene Sprache, seine Methoden und seine Maßstäbe für gute Arbeit. Wer zwischen den Disziplinen vermittelt, riskiert, in keiner richtig anerkannt zu werden. Damit Interdisziplinarität gelingt, braucht es deshalb nicht nur guten Willen, sondern auch Strukturen, die solche Arbeit belohnen.",
      questions: [
        {
          id: "q1",
          stem: "Warum reicht ein einzelnes Fach oft nicht aus?",
          options: [
            { id: "a", text: "Drängende Fragen verlangen mehrere Perspektiven zugleich." },
            { id: "b", text: "Einzelne Fächer sind verboten." },
            { id: "c", text: "Es gibt keine Fachgrenzen mehr." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Hürde nennt der Text?",
          options: [
            { id: "a", text: "Jedes Fach hat eigene Sprache, Methoden und Maßstäbe." },
            { id: "b", text: "Interdisziplinäre Arbeit ist zu einfach." },
            { id: "c", text: "Es fehlt an Themen." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was braucht es laut Text, damit Interdisziplinarität gelingt?",
          options: [
            { id: "a", text: "Strukturen, die solche Arbeit belohnen" },
            { id: "b", text: "allein guten Willen" },
            { id: "c", text: "die Abschaffung aller Fächer" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht nur …, sondern auch …“ nennt die eigentliche Bedingung — hier die Strukturen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Freier Zugang zu Wissen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Ein erheblicher Teil der Forschung wird mit öffentlichen Mitteln finanziert, ihre Ergebnisse erscheinen jedoch häufig in Zeitschriften, deren Zugang teuer ist. Die Bewegung für freien Zugang, den sogenannten Open Access, fordert, dass solche Ergebnisse für alle kostenlos verfügbar sein sollten. Befürworter argumentieren, dass Wissen, das die Allgemeinheit bezahlt hat, auch der Allgemeinheit gehören müsse. Verlage hingegen verweisen auf die Kosten für Begutachtung und Herausgabe. Ein Teil der Finanzierung verlagert sich beim Open Access allerdings nur, nämlich von den Lesenden zu den Autorinnen und Autoren, die für die Veröffentlichung zahlen.",
      questions: [
        {
          id: "q1",
          stem: "Was fordert die Open-Access-Bewegung?",
          options: [
            { id: "a", text: "kostenlosen Zugang zu öffentlich finanzierter Forschung" },
            { id: "b", text: "höhere Preise für Zeitschriften" },
            { id: "c", text: "ein Ende aller Veröffentlichungen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Womit begründen die Verlage ihre Position?",
          options: [
            { id: "a", text: "mit den Kosten für Begutachtung und Herausgabe" },
            { id: "b", text: "damit, dass Forschung wertlos sei" },
            { id: "c", text: "mit dem Wunsch nach mehr Lesern" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welche Einschränkung nennt der Text zum Open Access?",
          options: [
            { id: "a", text: "Die Kosten verlagern sich zu den Autoren." },
            { id: "b", text: "Es entstehen gar keine Kosten mehr." },
            { id: "c", text: "Der Zugang wird noch teurer." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„verlagert sich allerdings nur“ ist die entscheidende Relativierung am Ende.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Sprache und Weltbild",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Prägt die Sprache, die wir sprechen, unser Denken? Diese Frage beschäftigt die Forschung seit Langem. In ihrer starken Fassung, wonach Sprache das Denken vollständig bestimmt, gilt die These heute als widerlegt: Menschen können auch Begriffe erfassen, für die ihre Sprache kein eigenes Wort hat. In einer schwächeren Form findet sie jedoch weiterhin Unterstützung. Untersuchungen zeigen etwa, dass die Art, wie eine Sprache Farben oder Richtungen benennt, beeinflussen kann, worauf Sprecher schneller achten. Sprache bestimmt das Denken also nicht, aber sie lenkt die Aufmerksamkeit in bestimmte Bahnen.",
      questions: [
        {
          id: "q1",
          stem: "Wie gilt die starke Fassung der These heute?",
          options: [
            { id: "a", text: "als widerlegt" },
            { id: "b", text: "als vollständig bestätigt" },
            { id: "c", text: "als nie untersucht" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was zeigen Untersuchungen zur schwächeren Form?",
          options: [
            { id: "a", text: "Sprache kann beeinflussen, worauf man schneller achtet." },
            { id: "b", text: "Sprache hat gar keine Wirkung." },
            { id: "c", text: "Sprache bestimmt das Denken vollständig." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet die abschließende Formulierung?",
          options: [
            { id: "a", text: "Sprache bestimmt das Denken nicht, lenkt aber die Aufmerksamkeit." },
            { id: "b", text: "Sprache und Denken haben nichts miteinander zu tun." },
            { id: "c", text: "Denken bestimmt die Sprache vollständig." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Unterscheiden Sie „starke“ und „schwache“ Fassung — der Text bewertet beide getrennt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Der Zufall in der Wissenschaft",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Manche bedeutenden Entdeckungen verdanken sich einem glücklichen Zufall. Ein bekanntes Beispiel ist die Entdeckung eines Wirkstoffs, der eigentlich gar nicht gesucht wurde. Daraus zu schließen, Forschung sei reine Glückssache, wäre allerdings falsch. Der Zufall nützt nur dem vorbereiteten Geist: Erst das geschulte Auge erkennt in einer unerwarteten Beobachtung überhaupt etwas Bedeutsames. Wer nichts weiß, übersieht den Hinweis. Insofern ersetzt der Zufall die sorgfältige Arbeit nicht, sondern belohnt sie gelegentlich mit einem unerwarteten Fund.",
      questions: [
        {
          id: "q1",
          stem: "Welchen Fehlschluss weist der Text zurück?",
          options: [
            { id: "a", text: "dass Forschung reine Glückssache sei" },
            { id: "b", text: "dass Zufälle nie vorkommen" },
            { id: "c", text: "dass Wissen unnötig sei" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was bedeutet „der Zufall nützt nur dem vorbereiteten Geist“?",
          options: [
            { id: "a", text: "Nur wer geschult ist, erkennt die Bedeutung einer Beobachtung." },
            { id: "b", text: "Zufall wirkt bei jedem gleich." },
            { id: "c", text: "Vorbereitung schadet der Entdeckung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie verhält sich der Zufall laut Schluss zur sorgfältigen Arbeit?",
          options: [
            { id: "a", text: "Er ersetzt sie nicht, sondern belohnt sie gelegentlich." },
            { id: "b", text: "Er macht sie überflüssig." },
            { id: "c", text: "Er behindert sie." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„ersetzt … nicht, sondern …“ präzisiert das Verhältnis — genau danach wird gefragt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Auslagerung des Gedächtnisses",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Telefonnummern, Termine, Wegbeschreibungen — vieles, was frühere Generationen im Kopf behielten, überlassen wir heute unseren Geräten. Manche befürchten, dass unser Gedächtnis dadurch verkümmere. Untersuchungen zeichnen ein differenzierteres Bild: Wir merken uns tatsächlich seltener die Information selbst, dafür aber besser, wo sie zu finden ist. Das Gedächtnis verschwindet also nicht, es verlagert sich. Ob dieser Wandel ein Verlust ist, hängt vom Maßstab ab. Wer Bildung als das Behalten von Fakten versteht, wird ihn beklagen; wer sie als die Fähigkeit versteht, Wissen zu verknüpfen, weniger.",
      questions: [
        {
          id: "q1",
          stem: "Was zeigen die Untersuchungen?",
          options: [
            { id: "a", text: "Wir merken uns eher, wo Information zu finden ist." },
            { id: "b", text: "Unser Gedächtnis verschwindet völlig." },
            { id: "c", text: "Wir behalten alles wie früher." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie beschreibt der Text den Wandel des Gedächtnisses?",
          options: [
            { id: "a", text: "Es verlagert sich, statt zu verschwinden." },
            { id: "b", text: "Es wird vollständig ersetzt." },
            { id: "c", text: "Es bleibt völlig unverändert." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wovon hängt es ab, ob der Wandel ein Verlust ist?",
          options: [
            { id: "a", text: "vom Maßstab, den man an Bildung anlegt" },
            { id: "b", text: "von der Zahl der Geräte" },
            { id: "c", text: "vom Alter der Person" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Schluss stellt zwei Bildungsbegriffe gegenüber — die Bewertung hängt vom gewählten ab.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Experten und Laien",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Das Verhältnis zwischen Fachleuten und Laien hat sich verändert. Früher galt das Urteil der Expertin oder des Experten als kaum anfechtbar; heute stellen viele Menschen es offener infrage. Diese Entwicklung ist zwiespältig. Einerseits ist eine gesunde Skepsis wünschenswert, denn auch Fachleute irren. Andererseits kann das Misstrauen so weit gehen, dass jede Sachkenntnis pauschal abgewertet wird. Wünschenswert wäre ein mittlerer Weg: Fachwissen ernst zu nehmen, ohne es für unfehlbar zu halten, und Kritik zu üben, ohne sie mit bloßer Ablehnung zu verwechseln.",
      questions: [
        {
          id: "q1",
          stem: "Wie hat sich das Verhältnis verändert?",
          options: [
            { id: "a", text: "Viele stellen das Urteil von Fachleuten offener infrage." },
            { id: "b", text: "Fachleute werden gar nicht mehr gehört." },
            { id: "c", text: "Das Urteil der Experten ist wieder unanfechtbar." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum ist die Entwicklung zwiespältig?",
          options: [
            { id: "a", text: "Skepsis ist gut, übertriebenes Misstrauen wertet Sachkenntnis ab." },
            { id: "b", text: "Weil Fachleute nie irren." },
            { id: "c", text: "Weil Kritik immer schädlich ist." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was wäre laut Text der wünschenswerte Weg?",
          options: [
            { id: "a", text: "Fachwissen ernst nehmen, ohne es für unfehlbar zu halten" },
            { id: "b", text: "jede Sachkenntnis ablehnen" },
            { id: "c", text: "Kritik ganz unterlassen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Einerseits … Andererseits …“ und „Wünschenswert wäre …“ strukturieren die Argumentation.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Nachhaltigkeit als Leitbegriff",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Kaum ein Begriff ist in den letzten Jahren so allgegenwärtig geworden wie „Nachhaltigkeit“. Ursprünglich aus der Forstwirtschaft stammend, bezeichnete er die einfache Regel, nicht mehr Holz zu schlagen, als nachwächst. Heute schmückt das Wort Produkte, Programme und Werbeanzeigen aller Art. Diese Verbreitung hat den Begriff jedoch auch verwässert: Wo alles nachhaltig heißt, sagt das Wort kaum noch etwas aus. Manche fordern deshalb klarere Kriterien, andere warnen, dass zu enge Definitionen der Vielfalt sinnvoller Ansätze nicht gerecht würden.",
      questions: [
        {
          id: "q1",
          stem: "Woher stammt der Begriff ursprünglich?",
          options: [
            { id: "a", text: "aus der Forstwirtschaft" },
            { id: "b", text: "aus der Werbung" },
            { id: "c", text: "aus der Medizin" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Folge hatte die weite Verbreitung des Wortes?",
          options: [
            { id: "a", text: "Der Begriff wurde verwässert." },
            { id: "b", text: "Der Begriff wurde präziser." },
            { id: "c", text: "Der Begriff verschwand." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Worin besteht der Streit über klarere Kriterien?",
          options: [
            { id: "a", text: "Enge Definitionen könnten der Vielfalt der Ansätze schaden." },
            { id: "b", text: "Kriterien seien völlig überflüssig." },
            { id: "c", text: "Niemand will Nachhaltigkeit." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Wo alles nachhaltig heißt, sagt das Wort kaum noch etwas aus“ — die zentrale Kritik.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Bildung zwischen Nutzen und Selbstzweck",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Ob Bildung vor allem nützlich sein soll, ist eine alte Streitfrage. Wer sie am wirtschaftlichen Ertrag misst, fördert bevorzugt Fächer, die rasch verwertbares Wissen versprechen. Andere halten dagegen, dass Bildung mehr sei als berufliche Vorbereitung: Sie befähige zu selbstständigem Urteil und trage zur Persönlichkeit bei. Die beiden Sichtweisen müssen sich nicht ausschließen. Ein Studium kann durchaus beruflich qualifizieren und zugleich das Denken schulen. Problematisch wird es erst, wenn der eine Zweck den anderen vollständig verdrängt und Bildung nur noch als Investition gilt.",
      questions: [
        {
          id: "q1",
          stem: "Was fördert, wer Bildung am wirtschaftlichen Ertrag misst?",
          options: [
            { id: "a", text: "Fächer mit rasch verwertbarem Wissen" },
            { id: "b", text: "ausschließlich geisteswissenschaftliche Fächer" },
            { id: "c", text: "gar keine Fächer" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was halten die anderen dagegen?",
          options: [
            { id: "a", text: "Bildung befähige zu Urteil und forme die Persönlichkeit." },
            { id: "b", text: "Bildung sei nur berufliche Vorbereitung." },
            { id: "c", text: "Bildung sei überflüssig." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wann wird es laut Text problematisch?",
          options: [
            { id: "a", text: "wenn ein Zweck den anderen vollständig verdrängt" },
            { id: "b", text: "wenn beide Zwecke zugleich verfolgt werden" },
            { id: "c", text: "wenn Bildung das Denken schult" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„müssen sich nicht ausschließen … Problematisch wird es erst, wenn …“ — der Kern liegt in der Bedingung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Vertrauen in Institutionen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Moderne Gesellschaften beruhen in hohem Maße auf Vertrauen in Institutionen, die der Einzelne nicht vollständig durchschauen kann. Wir vertrauen darauf, dass Behörden verlässlich arbeiten und dass Regeln für alle gelten. Solches Vertrauen ist kein blinder Glaube, sondern eine notwendige Voraussetzung des Zusammenlebens, denn niemand kann alles selbst prüfen. Es ist jedoch empfindlich: Einmal beschädigt, lässt es sich nur mühsam wiederherstellen. Deshalb wiegt der Schaden, den einzelne Fälle von Missbrauch anrichten, oft schwerer, als ihre Zahl vermuten lässt.",
      questions: [
        {
          id: "q1",
          stem: "Warum ist Vertrauen in Institutionen laut Text notwendig?",
          options: [
            { id: "a", text: "weil niemand alles selbst prüfen kann" },
            { id: "b", text: "weil Institutionen unfehlbar sind" },
            { id: "c", text: "weil Regeln unwichtig sind" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sagt der Text über beschädigtes Vertrauen?",
          options: [
            { id: "a", text: "Es lässt sich nur mühsam wiederherstellen." },
            { id: "b", text: "Es kehrt sofort zurück." },
            { id: "c", text: "Es spielt keine Rolle." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Warum wiegt der Schaden einzelner Missbrauchsfälle oft schwer?",
          options: [
            { id: "a", text: "weil er das empfindliche Vertrauen beschädigt" },
            { id: "b", text: "weil solche Fälle sehr häufig sind" },
            { id: "c", text: "weil Institutionen daran verdienen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„kein blinder Glaube, sondern eine notwendige Voraussetzung“ präzisiert, was Vertrauen hier meint.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Kreativität und Beschränkung",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "kultur",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Man verbindet Kreativität gern mit grenzenloser Freiheit. Doch viele Schaffende berichten das Gegenteil: Gerade Beschränkungen setzen ihre Einfallskraft frei. Wer ein Gedicht in einer festen Form schreiben oder mit knappem Budget einen Film drehen muss, ist gezwungen, ungewöhnliche Lösungen zu finden. Die leere, völlig offene Fläche dagegen kann lähmen. Das heißt nicht, dass jede Einschränkung förderlich wäre; zu enge Vorgaben ersticken die Fantasie ebenso. Produktiv sind vor allem jene Grenzen, die herausfordern, ohne zu erdrücken.",
      questions: [
        {
          id: "q1",
          stem: "Was berichten viele Schaffende über Beschränkungen?",
          options: [
            { id: "a", text: "Sie setzen die Einfallskraft frei." },
            { id: "b", text: "Sie verhindern jede Kreativität." },
            { id: "c", text: "Sie sind völlig bedeutungslos." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was kann die völlig offene Fläche bewirken?",
          options: [
            { id: "a", text: "Sie kann lähmen." },
            { id: "b", text: "Sie garantiert gute Ergebnisse." },
            { id: "c", text: "Sie schließt Kreativität aus." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welche Grenzen sind laut Text besonders produktiv?",
          options: [
            { id: "a", text: "solche, die herausfordern, ohne zu erdrücken" },
            { id: "b", text: "möglichst enge Vorgaben" },
            { id: "c", text: "gar keine Grenzen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Text vertritt einen mittleren Standpunkt — weder grenzenlos noch zu eng.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Das Konzept der Resilienz",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Der Begriff der Resilienz beschreibt die Fähigkeit, nach Belastungen wieder handlungsfähig zu werden. Ursprünglich in der Psychologie verwendet, findet er heute auch Anwendung auf Städte, Ökosysteme oder ganze Volkswirtschaften. So nützlich das Konzept ist, birgt es eine Gefahr: Wird Resilienz allein beim Einzelnen gesucht, gerät leicht aus dem Blick, dass manche Belastungen struktureller Natur sind. Von Menschen zu verlangen, widerstandsfähiger zu werden, kann dann zur Ausrede werden, die Ursachen der Belastung nicht zu ändern. Resilienz zu stärken ist sinnvoll, ersetzt aber nicht die Frage nach ihren Auslösern.",
      questions: [
        {
          id: "q1",
          stem: "Was beschreibt der Begriff Resilienz?",
          options: [
            { id: "a", text: "die Fähigkeit, nach Belastungen wieder handlungsfähig zu werden" },
            { id: "b", text: "die Vermeidung jeder Belastung" },
            { id: "c", text: "den Verzicht auf Veränderung" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Gefahr nennt der Text?",
          options: [
            { id: "a", text: "strukturelle Ursachen aus dem Blick zu verlieren" },
            { id: "b", text: "dass niemand widerstandsfähig sein will" },
            { id: "c", text: "dass der Begriff zu selten benutzt wird" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet die abschließende Einschätzung?",
          options: [
            { id: "a", text: "Resilienz stärken ist sinnvoll, ersetzt aber nicht die Ursachenfrage." },
            { id: "b", text: "Resilienz ist völlig nutzlos." },
            { id: "c", text: "Nur die Ursachen zählen, Resilienz nie." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sinnvoll, ersetzt aber nicht …“ ist die ausgewogene Schlussthese.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Die Kunst des Zuhörens",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "In einer Zeit, in der viele darum ringen, gehört zu werden, gerät eine Fähigkeit leicht in Vergessenheit: das Zuhören. Zuhören meint mehr als zu schweigen, während der andere spricht. Es verlangt, den eigenen Standpunkt für einen Moment zurückzustellen und den Gedanken des Gegenübers wirklich zu folgen. Gerade in Auseinandersetzungen zeigt sich der Wert dieser Haltung: Wer den anderen erst genau verstanden hat, kann treffender antworten und findet eher zu einer Verständigung. Zuhören ist damit keine Schwäche, sondern eine anspruchsvolle und oft unterschätzte Leistung.",
      questions: [
        {
          id: "q1",
          stem: "Was meint Zuhören laut Text mehr als?",
          options: [
            { id: "a", text: "mehr als zu schweigen, während der andere spricht" },
            { id: "b", text: "mehr als laut zu sprechen" },
            { id: "c", text: "mehr als zuzustimmen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was verlangt Zuhören?",
          options: [
            { id: "a", text: "den eigenen Standpunkt kurz zurückzustellen" },
            { id: "b", text: "den anderen zu unterbrechen" },
            { id: "c", text: "sofort zu widersprechen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie bewertet der Text das Zuhören abschließend?",
          options: [
            { id: "a", text: "als anspruchsvolle, oft unterschätzte Leistung" },
            { id: "b", text: "als Zeichen von Schwäche" },
            { id: "c", text: "als überflüssig" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keine Schwäche, sondern eine … Leistung“ — die Umwertung trägt die Aussage.",
  },

  // ----------------------------------------------------------------- SPRACHBAUSTEINE
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Bewerbung um ein Stipendium",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Lesen Sie den Text. Für jede Lücke gibt es drei Möglichkeiten — wählen Sie die grammatisch und inhaltlich richtige.",
      passage:
        "Sehr geehrte Damen und Herren, hiermit bewerbe ich mich (1) das Deutschlandstipendium. Im Anhang finden Sie meine Unterlagen, (2) denen auch ein Empfehlungsschreiben gehört. Ich bin überzeugt, dass ich die Voraussetzungen (3).",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "um" },
            { id: "b", text: "für" },
            { id: "c", text: "über" },
          ],
          answer: "b",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "zu" },
            { id: "b", text: "bei" },
            { id: "c", text: "mit" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "erfülle" },
            { id: "b", text: "erfüllt" },
            { id: "c", text: "erfüllen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sich bewerben um“ ist fest; „gehören zu“ verlangt „zu“. Feste Verbindungen lohnt es sich zu lernen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Hinweis zur Anmeldung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Die Anmeldung zur Prüfung ist nur (1) gültig, wenn die Gebühr rechtzeitig überwiesen wurde. (2) einer verspäteten Zahlung kann der Platz nicht garantiert werden. Bitte beachten Sie außerdem, dass eine Abmeldung spätestens eine Woche (3) dem Termin erfolgen muss.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "dann" },
            { id: "b", text: "sofern" },
            { id: "c", text: "trotzdem" },
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
            { id: "a", text: "vor" },
            { id: "b", text: "bevor" },
            { id: "c", text: "davor" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Präposition + Dativ: „eine Woche vor dem Termin“. „bevor“ leitet einen Nebensatz ein — hier falsch.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Mitteilung zur Bibliotheksnutzung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "(1) der begrenzten Zahl an Arbeitsplätzen bitten wir Sie, reservierte Plätze nach dreißig Minuten Abwesenheit freizugeben. Bücher, die Sie nicht mehr benötigen, stellen Sie bitte auf die Wagen, (2) das Personal sie korrekt einordnen kann. Für Rückfragen stehen wir Ihnen (3) der Öffnungszeiten gern zur Verfügung.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Angesichts" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Während" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "indem" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "während" },
            { id: "b", text: "bei" },
            { id: "c", text: "seit" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„angesichts“ + Genitiv nennt den Grund; „damit“ leitet eine Absicht ein (Personal kann einordnen).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Aushang zur Vorlesung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Die Vorlesung von Professorin Adler muss (1) einer Erkrankung leider entfallen. Ein Ersatztermin wird bekannt gegeben, (2) die Genesung absehbar ist. Die zur Vorbereitung empfohlene Lektüre, (3) Kenntnis in der Klausur vorausgesetzt wird, finden Sie weiterhin im Lernportal.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "aufgrund" },
            { id: "b", text: "trotz" },
            { id: "c", text: "entgegen" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "sobald" },
            { id: "b", text: "seit" },
            { id: "c", text: "bevor" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "deren" },
            { id: "b", text: "dessen" },
            { id: "c", text: "derer" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„aufgrund“ + Genitiv = Grund; Relativpronomen „deren“ bezieht sich auf die feminine „Lektüre“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Hinweis zur Hausarbeit",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Bitte reichen Sie Ihre Hausarbeit fristgerecht ein. Arbeiten, (1) nach dem Abgabetermin eingehen, können nicht mehr berücksichtigt werden. Achten Sie darauf, alle Quellen korrekt anzugeben, (2) der Verdacht eines Plagiats gar nicht erst entsteht. (3) formaler Mängel behalten wir uns Abzüge vor.",
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
            { id: "a", text: "damit" },
            { id: "b", text: "weil" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "Im Falle" },
            { id: "b", text: "Im Fall" },
            { id: "c", text: "Anlässlich" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Relativpronomen im Nominativ Plural = „die“; „im Fall formaler Mängel“ nennt eine Bedingung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Einladung zum Kolloquium",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Wir laden Sie herzlich zum Forschungskolloquium ein, (1) dessen Rahmen aktuelle Projekte vorgestellt werden. Um besser planen zu können, bitten wir Sie, sich vorab anzumelden. (2) Sie verhindert sind, genügt eine kurze Nachricht. Die Vorträge werden aufgezeichnet, (3) auch Interessierte teilhaben können, die nicht vor Ort sind.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "in" },
            { id: "b", text: "an" },
            { id: "c", text: "auf" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Sollten" },
            { id: "b", text: "Würden" },
            { id: "c", text: "Hätten" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "sodass" },
            { id: "b", text: "damit" },
            { id: "c", text: "obwohl" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„in dessen Rahmen“ ist fest; „Sollten Sie verhindert sein“ = höfliche Konditionalform ohne „wenn“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Rückmeldung zum Antrag",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Ihr Antrag auf Verlängerung ist bei uns eingegangen. (1) einer Bearbeitung benötigen wir jedoch noch eine Bescheinigung Ihres Betreuers. Sobald diese vorliegt, werden wir Ihren Antrag prüfen und Sie (2) das Ergebnis informieren. Wir bitten Sie, (3) Rückfragen die angegebene Sprechzeit zu nutzen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Zur" },
            { id: "b", text: "Für" },
            { id: "c", text: "Bei" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "über" },
            { id: "b", text: "von" },
            { id: "c", text: "auf" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "bei" },
            { id: "b", text: "zu" },
            { id: "c", text: "an" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„jemanden über etwas informieren“ ist fest; „bei Rückfragen“ nennt den Anlass.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Mitteilung des Prüfungsamts",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Die Anmeldung zur Prüfung ist verbindlich. Ein Rücktritt ist nur (1) triftigem Grund möglich, der schriftlich nachzuweisen ist. (2) eines ärztlichen Attests wird eine Erkrankung anerkannt. Wer unentschuldigt fehlt, gilt als durchgefallen, (3) er einen wichtigen Grund glaubhaft macht.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "aus" },
            { id: "b", text: "mit" },
            { id: "c", text: "von" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Mittels" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Statt" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "es sei denn" },
            { id: "b", text: "sofern" },
            { id: "c", text: "damit" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„aus triftigem Grund“ ist fest; „mittels“ + Genitiv = Mittel; „es sei denn“ nennt die Ausnahme.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Ankündigung eines Workshops",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Der Workshop richtet sich an alle, die ihr wissenschaftliches Schreiben verbessern möchten. (1) Vorkenntnisse sind nicht erforderlich. Die Teilnahme ist kostenlos, (2) eine verbindliche Anmeldung wird erwartet. Bringen Sie nach Möglichkeit einen eigenen Text mit, (3) wir konkret daran arbeiten können.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Besondere" },
            { id: "b", text: "Besonderen" },
            { id: "c", text: "Besonderes" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "jedoch" },
            { id: "b", text: "deshalb" },
            { id: "c", text: "sofern" },
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
    guidanceNote: "„Besondere Vorkenntnisse“ (Nom. Pl., unbestimmt) = Endung -e; „jedoch“ nennt den Gegensatz.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Hinweis zur Gruppenarbeit",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Die Aufgabe ist in Gruppen zu bearbeiten. Bewertet wird nicht nur das Ergebnis, (1) auch die Art der Zusammenarbeit. Jede Gruppe benennt eine Person, (2) für die Abgabe verantwortlich ist. (3) alle Mitglieder gleichermaßen beitragen, empfehlen wir eine klare Aufgabenverteilung.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "sondern" },
            { id: "b", text: "aber" },
            { id: "c", text: "denn" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "die" },
            { id: "b", text: "der" },
            { id: "c", text: "deren" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "Damit" },
            { id: "b", text: "Sodass" },
            { id: "c", text: "Indem" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht nur …, sondern auch …“ ist fest; Relativpronomen für „eine Person“ (fem.) = „die“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Nachricht zur Exkursion",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Die geplante Exkursion findet (1) des schlechten Wetters wie vorgesehen statt. Bitte kleiden Sie sich (2) entsprechend. Wer aus gesundheitlichen Gründen nicht teilnehmen kann, (3) sich bitte rechtzeitig ab.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "ungeachtet" },
            { id: "b", text: "wegen" },
            { id: "c", text: "dank" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "dementsprechend" },
            { id: "b", text: "trotzdem" },
            { id: "c", text: "hingegen" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "melde" },
            { id: "b", text: "meldet" },
            { id: "c", text: "gemeldet" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„ungeachtet“ + Genitiv = „trotz“; das unbestimmte „wer …“ verlangt hier „melde sich“ (Aufforderung).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Information zum Sprachtandem",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Beim Sprachtandem treffen sich zwei Personen, (1) jeweils die Sprache der anderen lernen möchten. (2) beide profitieren, sollte die gemeinsame Zeit fair aufgeteilt werden. Das Angebot ist kostenlos und steht allen offen, (3) ihrem Studienfach.",
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
            { id: "a", text: "unabhängig von" },
            { id: "b", text: "abgesehen von" },
            { id: "c", text: "anstelle von" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Relativpronomen Nom. Pl. = „die“; „unabhängig von“ = „egal welches“ Studienfach.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Hinweis zur Literaturrecherche",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Eine sorgfältige Recherche ist die Grundlage jeder Arbeit. (1) Sie sich auf eine einzige Datenbank verlassen, sollten Sie mehrere Quellen vergleichen. Ältere Studien sind nicht automatisch überholt; entscheidend ist, (2) sie methodisch überzeugen. Notieren Sie sich frühzeitig alle Angaben, (3) Sie später mühsames Nachschlagen vermeiden.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Anstatt dass" },
            { id: "b", text: "Damit" },
            { id: "c", text: "Sobald" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "ob" },
            { id: "b", text: "dass" },
            { id: "c", text: "wenn" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "indem" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Anstatt dass Sie sich verlassen“ = statt einer Handlung; „ob sie überzeugen“ nennt das Entscheidende.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Ankündigung einer Umfrage",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Im Rahmen einer Studie führen wir eine Umfrage durch, (1) Teilnahme freiwillig und anonym ist. Die Ergebnisse werden ausschließlich (2) wissenschaftlichen Zwecken verwendet. Wir danken Ihnen im Voraus, (3) Sie sich die Zeit nehmen, den Fragebogen auszufüllen.",
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
            { id: "a", text: "zu" },
            { id: "b", text: "für" },
            { id: "c", text: "an" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "dass" },
            { id: "b", text: "damit" },
            { id: "c", text: "ob" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„deren Teilnahme“ bezieht sich auf die feminine „Umfrage“; „zu … Zwecken verwenden“ ist fest.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Hinweis zur Präsentation",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Ihre Präsentation sollte fünfzehn Minuten nicht überschreiten. (1) Sie den Rahmen einhalten, üben Sie den Vortrag vorher mit der Uhr. Vermeiden Sie überfüllte Folien; (2) weniger Text auf einer Folie steht, desto aufmerksamer folgt das Publikum. Rechnen Sie am Ende Zeit für Fragen ein, (3) eine Diskussion entstehen kann.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Damit" },
            { id: "b", text: "Obwohl" },
            { id: "c", text: "Seitdem" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "je" },
            { id: "b", text: "desto" },
            { id: "c", text: "umso" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "wobei" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„je weniger …, desto aufmerksamer“ ist der feste Vergleich; die Lücke braucht „je“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Mitteilung zur Sprechstunde",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Meine Sprechstunde findet ab sofort dienstags statt. Um Wartezeiten zu vermeiden, bitte ich Sie, sich vorab einzutragen. Anliegen, (1) sich in einer kurzen E-Mail klären lassen, müssen Sie nicht persönlich vortragen. (2) dringenden Fällen erreichen Sie mich auch außerhalb der Sprechzeit. Bitte haben Sie Verständnis, (3) ich nicht jede Anfrage sofort beantworten kann.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "die" },
            { id: "b", text: "deren" },
            { id: "c", text: "denen" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "In" },
            { id: "b", text: "Bei" },
            { id: "c", text: "Auf" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "dass" },
            { id: "b", text: "damit" },
            { id: "c", text: "ob" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Relativpronomen Nom. Pl. „die“; „Verständnis haben, dass …“ leitet den Inhalt ein.",
  },

  // ----------------------------------------------------------------- HOERVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Mehrsprachigkeit als Ressource",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Meine Damen und Herren, in der öffentlichen Debatte wird Mehrsprachigkeit gelegentlich als Belastung dargestellt, gerade mit Blick auf Kinder, die mit zwei Sprachen aufwachsen. Die Forschung zeichnet jedoch ein anderes Bild. Zwar mischen mehrsprachige Kinder in frühen Jahren die Sprachen bisweilen, doch dieser Effekt gleicht sich mit der Zeit aus. Langfristig zeigen viele von ihnen sogar Vorteile, etwa eine größere Flexibilität im Denken. Wichtig ist allerdings, dass beide Sprachen im Alltag verlässlich vorkommen; eine Sprache, die nur selten gesprochen wird, entwickelt sich naturgemäß schwächer.",
      questions: [
        {
          id: "q1",
          stem: "Wie wird Mehrsprachigkeit in der öffentlichen Debatte teils dargestellt?",
          options: [
            { id: "a", text: "als eindeutiger Vorteil" },
            { id: "b", text: "als mögliche Belastung" },
            { id: "c", text: "als völlig unbedeutend" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was sagt die Forschung über das Mischen der Sprachen?",
          options: [
            { id: "a", text: "Es bleibt dauerhaft bestehen." },
            { id: "b", text: "Es gleicht sich mit der Zeit aus." },
            { id: "c", text: "Es tritt nie auf." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Welche Bedingung nennt der Vortragende?",
          options: [
            { id: "a", text: "Beide Sprachen müssen im Alltag verlässlich vorkommen." },
            { id: "b", text: "Eine Sprache sollte klar bevorzugt werden." },
            { id: "c", text: "Die Sprachen sollten strikt getrennt bleiben." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Zwar … doch …“ und „allerdings“ kündigen Einschränkungen an — dort verstecken sich oft die Antworten.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Erinnerung als Rekonstruktion",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Meine Damen und Herren, wir stellen uns die Erinnerung gern wie ein Archiv vor, aus dem wir Aufnahmen unverändert abrufen. Die Forschung zeigt jedoch ein anderes Bild: Jede Erinnerung wird im Moment des Abrufs neu zusammengesetzt. Dabei fließen unser heutiges Wissen und unsere Erwartungen mit ein. Das erklärt, warum Zeugen dasselbe Ereignis unterschiedlich schildern und warum Erinnerungen sich mit der Zeit verändern können, ohne dass wir es merken. Erinnern ist also weniger ein Wiedergeben als ein Neuerschaffen.",
      questions: [
        {
          id: "q1",
          stem: "Wie stellen wir uns Erinnerung laut Vortrag oft vor?",
          options: [
            { id: "a", text: "wie ein Archiv mit unveränderten Aufnahmen" },
            { id: "b", text: "wie einen leeren Raum" },
            { id: "c", text: "wie eine exakte Kamera" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was geschieht laut Forschung beim Abruf einer Erinnerung?",
          options: [
            { id: "a", text: "Sie wird neu zusammengesetzt." },
            { id: "b", text: "Sie bleibt völlig unverändert." },
            { id: "c", text: "Sie wird gelöscht." },
          ],
          answer: "a",
        },
        {
          id: "q3",
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
    guidanceNote: "„weniger ein … als ein …“ formuliert die Kernthese des Vortrags.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Feldforschung",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Dr. Renner, Sie erforschen Gemeinschaften vor Ort. Was ist dabei die größte Herausforderung? RENNER: Sicher die Distanz zu wahren. Man lebt oft monatelang mit den Menschen und muss trotzdem den Blick von außen behalten. MODERATOR: Verändert Ihre Anwesenheit nicht das, was Sie beobachten? RENNER: Doch, das lässt sich nie ganz vermeiden. Wichtig ist, diesen Einfluss offen zu benennen, statt so zu tun, als sei man unsichtbar. MODERATOR: Und wie gehen Sie mit persönlichen Beziehungen um? RENNER: Behutsam. Vertrauen ist die Grundlage, aber ich muss aufpassen, dass Nähe mein Urteil nicht trübt.",
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Renner die größte Herausforderung?",
          options: [
            { id: "a", text: "die nötige Distanz zu wahren" },
            { id: "b", text: "die richtige Ausrüstung zu finden" },
            { id: "c", text: "genügend Geld zu bekommen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie geht sie mit dem Einfluss ihrer Anwesenheit um?",
          options: [
            { id: "a", text: "Sie benennt ihn offen." },
            { id: "b", text: "Sie leugnet ihn." },
            { id: "c", text: "Sie ignoriert ihn." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Worauf achtet sie bei persönlichen Beziehungen?",
          options: [
            { id: "a", text: "dass Nähe ihr Urteil nicht trübt" },
            { id: "b", text: "dass sie keinen Kontakt hat" },
            { id: "c", text: "dass sie schnell fertig wird" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf „Doch, das lässt sich nie ganz vermeiden“ — eine ehrliche Einschränkung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Warum Prognosen schwierig sind",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag. Vorhersagen über die Zukunft sind aus einem grundsätzlichen Grund schwierig: Viele Systeme, ob Wetter oder Wirtschaft, reagieren empfindlich auf kleinste Ausgangsunterschiede. Ein winziger Fehler in den Anfangsdaten kann sich aufschaukeln und die Prognose nach kurzer Zeit unbrauchbar machen. Das bedeutet nicht, dass Vorhersagen sinnlos wären. Für kurze Zeiträume sind sie oft erstaunlich verlässlich. Je weiter wir jedoch in die Zukunft blicken, desto größer wird die Unsicherheit — und das ist keine Frage besserer Rechner, sondern der Natur solcher Systeme.",
      questions: [
        {
          id: "q1",
          stem: "Warum sind Vorhersagen grundsätzlich schwierig?",
          options: [
            { id: "a", text: "Kleinste Ausgangsunterschiede schaukeln sich auf." },
            { id: "b", text: "Es fehlt immer an Daten." },
            { id: "c", text: "Niemand interessiert sich dafür." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sagt der Vortrag über kurze Zeiträume?",
          options: [
            { id: "a", text: "Vorhersagen sind oft erstaunlich verlässlich." },
            { id: "b", text: "Vorhersagen sind völlig unmöglich." },
            { id: "c", text: "Vorhersagen sind dort am schwierigsten." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Woran liegt die wachsende Unsicherheit laut Vortrag?",
          options: [
            { id: "a", text: "an der Natur solcher Systeme, nicht an den Rechnern" },
            { id: "b", text: "allein an zu langsamen Computern" },
            { id: "c", text: "an mangelndem Interesse" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keine Frage besserer Rechner, sondern der Natur …“ — die Ursache wird bewusst verschoben.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Fußgängerzonen",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Herr Kessler, viele Städte weiten ihre Fußgängerzonen aus. Lohnt sich das? KESSLER: In der Regel ja, aber nicht automatisch. Eine Zone allein belebt noch keine Innenstadt. Es kommt darauf an, ob sie gut erreichbar ist und ob es dort etwas zu erleben gibt. MODERATORIN: Klagen nicht die Geschäfte über wegfallende Parkplätze? KESSLER: Am Anfang oft, ja. Studien zeigen aber, dass der Umsatz nach der Umstellung meist steigt, weil sich mehr Menschen gern länger aufhalten. MODERATORIN: Also ein Selbstläufer? KESSLER: Nein, das wäre zu einfach. Ohne begleitende Maßnahmen kann eine Zone auch veröden.",
      questions: [
        {
          id: "q1",
          stem: "Belebt eine Fußgängerzone laut Kessler automatisch die Innenstadt?",
          options: [
            { id: "a", text: "Nein, es kommt auf Erreichbarkeit und Angebot an." },
            { id: "b", text: "Ja, immer." },
            { id: "c", text: "Nein, sie schadet immer." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was zeigen Studien zum Umsatz nach der Umstellung?",
          options: [
            { id: "a", text: "Er steigt meist." },
            { id: "b", text: "Er bricht immer ein." },
            { id: "c", text: "Er bleibt gleich." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Ist die Zone ein Selbstläufer?",
          options: [
            { id: "a", text: "Nein, ohne begleitende Maßnahmen kann sie veröden." },
            { id: "b", text: "Ja, sie funktioniert von allein." },
            { id: "c", text: "Nein, sie ist immer erfolglos." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„aber nicht automatisch“ und „das wäre zu einfach“ relativieren die Zustimmung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Der Placebo-Effekt",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag. Unter dem Placebo-Effekt versteht man, dass ein Scheinmedikament ohne Wirkstoff dennoch eine Besserung bewirken kann. Lange galt das als bloße Einbildung. Heute wissen wir, dass dabei messbare Vorgänge im Körper ablaufen, etwa die Ausschüttung körpereigener Stoffe. Der Effekt ist also real, auch wenn kein Wirkstoff im Spiel ist. Für die Forschung bedeutet das eine Herausforderung: Um die Wirkung eines echten Medikaments zu belegen, muss sie deutlich über den Placebo-Effekt hinausgehen.",
      questions: [
        {
          id: "q1",
          stem: "Was versteht man unter dem Placebo-Effekt?",
          options: [
            { id: "a", text: "Ein Scheinmedikament bewirkt eine Besserung." },
            { id: "b", text: "Ein Medikament wirkt gar nicht." },
            { id: "c", text: "Ein Wirkstoff schadet dem Körper." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie wird der Effekt heute bewertet?",
          options: [
            { id: "a", text: "als real, mit messbaren Vorgängen im Körper" },
            { id: "b", text: "als bloße Einbildung" },
            { id: "c", text: "als gefährlich" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was bedeutet der Effekt für die Forschung?",
          options: [
            { id: "a", text: "Ein echtes Medikament muss klar darüber hinauswirken." },
            { id: "b", text: "Medikamente müssen nicht mehr getestet werden." },
            { id: "c", text: "Der Effekt macht Forschung überflüssig." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„auch wenn kein Wirkstoff im Spiel ist“ betont, dass der Effekt trotzdem real ist.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Quellenkritik",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Professorin Sommer, was heißt eigentlich Quellenkritik? SOMMER: Vereinfacht gesagt, jede Quelle danach zu befragen, wer sie warum verfasst hat. Ein Brief eines Beteiligten ist etwas anderes als ein amtlicher Bericht. MODERATOR: Kann man einer Quelle denn je ganz trauen? SOMMER: Nicht blind. Aber das ist kein Grund zur Verzweiflung. Gerade wenn man die Absicht hinter einer Quelle kennt, kann man sie umso besser deuten. MODERATOR: Verändern digitale Archive Ihre Arbeit? SOMMER: Sehr. Wir haben mehr Material als je zuvor, aber die eigentliche Aufgabe, es kritisch zu prüfen, bleibt dieselbe.",
      questions: [
        {
          id: "q1",
          stem: "Was heißt Quellenkritik laut Sommer?",
          options: [
            { id: "a", text: "zu fragen, wer eine Quelle warum verfasst hat" },
            { id: "b", text: "alle Quellen abzulehnen" },
            { id: "c", text: "nur amtliche Berichte zu lesen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Kann man einer Quelle ganz trauen?",
          options: [
            { id: "a", text: "Nicht blind, aber das ist kein Grund zur Verzweiflung." },
            { id: "b", text: "Ja, jeder Quelle vollständig." },
            { id: "c", text: "Nein, keiner Quelle jemals." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was sagt sie über digitale Archive?",
          options: [
            { id: "a", text: "Mehr Material, aber die kritische Prüfung bleibt." },
            { id: "b", text: "Sie machen Quellenkritik überflüssig." },
            { id: "c", text: "Sie liefern weniger Material." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Nicht blind. Aber …“ — die Einschränkung wird sofort relativiert.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Zusammenarbeit im Tierreich",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Meine Damen und Herren, oft wird die Natur allein als Kampf ums Dasein beschrieben. Dabei gerät leicht in Vergessenheit, wie verbreitet Zusammenarbeit im Tierreich ist. Viele Arten teilen Nahrung, warnen einander vor Feinden oder ziehen gemeinsam Nachwuchs auf. Solches Verhalten widerspricht der Evolution keineswegs. Wer anderen hilft, kann selbst profitieren, etwa wenn die Hilfe später erwidert wird oder wenn nahe Verwandte begünstigt werden. Kooperation ist also keine Ausnahme von der Natur, sondern ein fester Bestandteil von ihr.",
      questions: [
        {
          id: "q1",
          stem: "Was gerät laut Vortrag oft in Vergessenheit?",
          options: [
            { id: "a", text: "wie verbreitet Zusammenarbeit im Tierreich ist" },
            { id: "b", text: "dass Tiere nie kooperieren" },
            { id: "c", text: "dass es keinen Wettbewerb gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Widerspricht Kooperation der Evolution?",
          options: [
            { id: "a", text: "Nein, wer hilft, kann selbst profitieren." },
            { id: "b", text: "Ja, sie ist unmöglich." },
            { id: "c", text: "Ja, sie schadet immer." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie fasst der Vortrag Kooperation zusammen?",
          options: [
            { id: "a", text: "als fester Bestandteil der Natur" },
            { id: "b", text: "als seltene Ausnahme" },
            { id: "c", text: "als Widerspruch zur Natur" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keine Ausnahme …, sondern ein fester Bestandteil“ — die Umwertung ist der Kern.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Warum wir aufschieben",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Herr Dr. Falk, warum schieben Menschen unangenehme Aufgaben auf? FALK: Meist nicht aus Faulheit, wie oft angenommen. Häufig steckt die Angst vor dem Scheitern dahinter oder der Wunsch, eine Sache perfekt zu machen. MODERATORIN: Hilft es dann, sich zusammenzureißen? FALK: Nur bedingt. Wirksamer ist es, die Aufgabe in kleine Schritte zu zerlegen, sodass der erste Schritt nicht mehr abschreckt. MODERATORIN: Ist Aufschieben denn immer schlecht? FALK: Nicht unbedingt. Manchmal reift ein Gedanke, während man wartet. Problematisch wird es erst, wenn das Aufschieben zur Gewohnheit wird und Leidensdruck entsteht.",
      questions: [
        {
          id: "q1",
          stem: "Woran liegt Aufschieben laut Falk meist?",
          options: [
            { id: "a", text: "an Angst vor dem Scheitern oder Perfektionswunsch" },
            { id: "b", text: "allein an Faulheit" },
            { id: "c", text: "an fehlender Zeit" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was hält Falk für wirksam?",
          options: [
            { id: "a", text: "die Aufgabe in kleine Schritte zu zerlegen" },
            { id: "b", text: "sich einfach zusammenzureißen" },
            { id: "c", text: "die Aufgabe ganz zu lassen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wann wird Aufschieben laut Falk problematisch?",
          options: [
            { id: "a", text: "wenn es zur Gewohnheit wird und Leidensdruck entsteht" },
            { id: "b", text: "immer, ausnahmslos" },
            { id: "c", text: "nie" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht aus Faulheit, wie oft angenommen“ korrigiert eine verbreitete Annahme.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Der Nutzen der Langeweile",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag. Langeweile hat einen schlechten Ruf, und viele Menschen greifen bei der ersten leeren Minute zum Telefon. Dabei zeigt die Forschung, dass Langeweile durchaus nützlich sein kann. Wenn der Geist nicht ständig beschäftigt ist, beginnt er zu schweifen, und in diesen Momenten entstehen oft neue Ideen. Wer jede Pause sofort füllt, nimmt sich womöglich die Gelegenheit dazu. Das heißt nicht, dass ständige Unterforderung erstrebenswert wäre. Doch gelegentliche Langeweile auszuhalten, statt sie sofort zu vertreiben, kann der Kreativität nützen.",
      questions: [
        {
          id: "q1",
          stem: "Was tun viele bei der ersten leeren Minute?",
          options: [
            { id: "a", text: "Sie greifen zum Telefon." },
            { id: "b", text: "Sie machen ein Nickerchen." },
            { id: "c", text: "Sie schreiben Ideen auf." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was geschieht laut Forschung, wenn der Geist schweift?",
          options: [
            { id: "a", text: "Oft entstehen neue Ideen." },
            { id: "b", text: "Man wird sofort krank." },
            { id: "c", text: "Nichts von Bedeutung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet die abgewogene Schlussaussage?",
          options: [
            { id: "a", text: "Gelegentliche Langeweile auszuhalten kann der Kreativität nützen." },
            { id: "b", text: "Ständige Unterforderung ist erstrebenswert." },
            { id: "c", text: "Langeweile ist immer schädlich." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Das heißt nicht, dass …“ verhindert ein Missverständnis — der Vortrag bleibt differenziert.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Dialekte im Wandel",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Frau Dr. Wieland, sterben die Dialekte aus? WIELAND: So dramatisch würde ich es nicht sagen. Sie verändern sich, das ja. Viele starke Formen weichen ab, aber neue regionale Färbungen entstehen auch. MODERATOR: Ist das ein Verlust? WIELAND: Für manche schon, weil ein Stück Identität verschwindet. Ich sehe es nüchterner: Sprache war immer in Bewegung. MODERATOR: Kann man Dialekte bewusst erhalten? WIELAND: In gewissem Maße, etwa durch Theater oder Schulen. Aber erzwingen lässt sich das nicht. Eine Sprachform lebt nur, solange die Menschen sie im Alltag verwenden.",
      questions: [
        {
          id: "q1",
          stem: "Sterben die Dialekte laut Wieland aus?",
          options: [
            { id: "a", text: "Nein, aber sie verändern sich." },
            { id: "b", text: "Ja, vollständig." },
            { id: "c", text: "Nein, sie bleiben unverändert." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie bewertet sie den Wandel?",
          options: [
            { id: "a", text: "nüchtern — Sprache war immer in Bewegung" },
            { id: "b", text: "als reine Katastrophe" },
            { id: "c", text: "als bedeutungslos" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was sagt sie zum bewussten Erhalt?",
          options: [
            { id: "a", text: "In gewissem Maße möglich, aber nicht erzwingbar." },
            { id: "b", text: "vollständig steuerbar" },
            { id: "c", text: "völlig unmöglich" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„So dramatisch würde ich es nicht sagen“ dämpft die zugespitzte Frage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Schwarmverhalten",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Meine Damen und Herren, ein Vogelschwarm, der wie ein einziger Körper am Himmel schwenkt, wirkt fast rätselhaft. Dabei folgt jedes einzelne Tier nur wenigen einfachen Regeln: Halte Abstand zum Nachbarn, richte dich nach ihm aus, bleibe in der Nähe. Aus diesen schlichten Regeln entsteht das komplexe Muster des ganzen Schwarms, ohne dass ein Anführer nötig wäre. Solche Selbstorganisation beobachten Forscher auch anderswo, etwa bei Fischen oder Insekten. Sie zeigt, dass komplexes Verhalten keine zentrale Steuerung voraussetzt.",
      questions: [
        {
          id: "q1",
          stem: "Wonach richtet sich jedes einzelne Tier im Schwarm?",
          options: [
            { id: "a", text: "nach wenigen einfachen Regeln" },
            { id: "b", text: "nach einem Anführer" },
            { id: "c", text: "nach dem Zufall allein" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was entsteht aus diesen Regeln?",
          options: [
            { id: "a", text: "das komplexe Muster des ganzen Schwarms" },
            { id: "b", text: "völliges Durcheinander" },
            { id: "c", text: "Stillstand" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was zeigt die Selbstorganisation laut Vortrag?",
          options: [
            { id: "a", text: "Komplexes Verhalten braucht keine zentrale Steuerung." },
            { id: "b", text: "Ohne Anführer geht nichts." },
            { id: "c", text: "Regeln sind unnötig." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„ohne dass ein Anführer nötig wäre“ ist der überraschende Kernpunkt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Digitale Archive",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Herr Brandt, digitale Archive gelten als sicher für die Ewigkeit. Stimmt das? BRANDT: Das ist ein weit verbreiteter Irrtum. Papier kann Jahrhunderte überdauern; digitale Formate veralten oft schon nach wenigen Jahrzehnten. MODERATORIN: Was heißt das konkret? BRANDT: Dateien müssen regelmäßig in neue Formate übertragen werden, sonst kann sie irgendwann niemand mehr öffnen. Das kostet Aufwand und Geld. MODERATORIN: Also lieber alles auf Papier? BRANDT: Nein, das wäre der falsche Schluss. Digitale Archive haben große Vorteile. Man darf nur nicht glauben, sie pflegten sich von selbst.",
      questions: [
        {
          id: "q1",
          stem: "Was hält Brandt für einen Irrtum?",
          options: [
            { id: "a", text: "dass digitale Archive für die Ewigkeit sicher seien" },
            { id: "b", text: "dass Papier lange hält" },
            { id: "c", text: "dass Archive wichtig sind" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was muss laut Brandt regelmäßig geschehen?",
          options: [
            { id: "a", text: "Dateien in neue Formate übertragen" },
            { id: "b", text: "alles ausdrucken" },
            { id: "c", text: "die Archive löschen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Sollte man deshalb alles auf Papier speichern?",
          options: [
            { id: "a", text: "Nein, das wäre der falsche Schluss." },
            { id: "b", text: "Ja, unbedingt." },
            { id: "c", text: "Ja, Papier ist immer besser." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„das wäre der falsche Schluss“ warnt vor einer voreiligen Folgerung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Warum Wiederholung hilft",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag. Wer etwas dauerhaft lernen möchte, kommt an der Wiederholung nicht vorbei. Entscheidend ist jedoch nicht, wie oft, sondern wann man wiederholt. Untersuchungen zeigen, dass verteiltes Lernen, bei dem man den Stoff über mehrere Tage immer wieder aufgreift, weit wirksamer ist als das Pauken in einer einzigen langen Sitzung. Der Grund liegt darin, dass das Gedächtnis gerade durch das mühsame Wiederhervorholen gestärkt wird. Kurz vor der Prüfung alles auf einmal zu lernen, mag für den Moment genügen, hinterlässt aber selten dauerhaftes Wissen.",
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Vortrag entscheidend?",
          options: [
            { id: "a", text: "nicht wie oft, sondern wann man wiederholt" },
            { id: "b", text: "möglichst lange am Stück zu lernen" },
            { id: "c", text: "gar nicht zu wiederholen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist wirksamer als Pauken in einer Sitzung?",
          options: [
            { id: "a", text: "verteiltes Lernen über mehrere Tage" },
            { id: "b", text: "eine einzige lange Sitzung" },
            { id: "c", text: "gar kein Lernen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was sagt der Vortrag über Lernen kurz vor der Prüfung?",
          options: [
            { id: "a", text: "Es genügt für den Moment, hinterlässt aber selten dauerhaftes Wissen." },
            { id: "b", text: "Es ist die beste Methode." },
            { id: "c", text: "Es schadet immer." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht wie oft, sondern wann“ verschiebt den Fokus — häufig die erste Frage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_INTERVIEW",
    title: "Interview: Verhaltensökonomie",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATOR: Herr Professor Nolte, die klassische Wirtschaftslehre nimmt an, der Mensch entscheide rational. Trifft das zu? NOLTE: Nur eingeschränkt. Menschen verhalten sich oft anders, als es der reine Nutzen nahelegt. Wir überschätzen kurzfristige Belohnungen und scheuen Verluste stärker, als wir Gewinne schätzen. MODERATOR: Ist der Mensch also unvernünftig? NOLTE: Das würde ich nicht sagen. Unsere Abweichungen folgen erkennbaren Mustern. Man kann sie sogar nutzen, um Menschen sanft zu besseren Entscheidungen zu bewegen. MODERATOR: Ohne Zwang? NOLTE: Genau. Man verändert die Rahmenbedingungen, lässt die Wahl aber frei.",
      questions: [
        {
          id: "q1",
          stem: "Entscheidet der Mensch laut Nolte rein rational?",
          options: [
            { id: "a", text: "Nur eingeschränkt." },
            { id: "b", text: "Ja, immer." },
            { id: "c", text: "Nie, in keiner Weise." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Ist der Mensch deshalb unvernünftig?",
          options: [
            { id: "a", text: "Nein, die Abweichungen folgen erkennbaren Mustern." },
            { id: "b", text: "Ja, völlig unberechenbar." },
            { id: "c", text: "Ja, ohne jedes Muster." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie kann man Menschen zu besseren Entscheidungen bewegen?",
          options: [
            { id: "a", text: "indem man die Rahmenbedingungen ändert, die Wahl aber frei lässt" },
            { id: "b", text: "durch Zwang" },
            { id: "c", text: "durch Verbote" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Das würde ich nicht sagen“ weist die Zuspitzung zurück; achten Sie auf „ohne Zwang“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Die Bedeutung des Vergessens",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag. Vergessen gilt gemeinhin als Schwäche unseres Gedächtnisses. Aus der Sicht der Forschung ist es jedoch eine wichtige Leistung. Würden wir uns an jede Einzelheit erinnern, würde uns die Flut an Nebensächlichem geradezu erdrücken. Vergessen sortiert aus, was nicht mehr gebraucht wird, und lässt Raum für das Wesentliche. Erst dadurch können wir von einzelnen Erfahrungen abstrahieren und allgemeine Regeln bilden. Ein Gedächtnis, das nichts vergisst, wäre also kein Vorteil, sondern eine Last.",
      questions: [
        {
          id: "q1",
          stem: "Wie gilt Vergessen gemeinhin?",
          options: [
            { id: "a", text: "als Schwäche des Gedächtnisses" },
            { id: "b", text: "als besondere Stärke" },
            { id: "c", text: "als völlig bedeutungslos" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Leistung erfüllt Vergessen laut Vortrag?",
          options: [
            { id: "a", text: "Es sortiert Unwichtiges aus und schafft Raum für Wesentliches." },
            { id: "b", text: "Es löscht alle Erinnerungen." },
            { id: "c", text: "Es verhindert das Lernen." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie bewertet der Vortrag ein Gedächtnis, das nichts vergisst?",
          options: [
            { id: "a", text: "als Last statt Vorteil" },
            { id: "b", text: "als idealen Zustand" },
            { id: "c", text: "als unmöglich zu erreichen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„kein Vorteil, sondern eine Last“ kehrt die verbreitete Sicht um — der Kern des Vortrags.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_ESSAY",
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

  // ------------------------------------------------------------- MUENDLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_PRESENT",
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
];
