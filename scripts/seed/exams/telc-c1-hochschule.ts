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
