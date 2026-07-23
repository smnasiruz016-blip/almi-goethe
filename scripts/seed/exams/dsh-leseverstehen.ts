// DSH (Deutsche Sprachprüfung für den Hochschulzugang, B2–C2) — Leseverstehen.
// Original practice items.
//
// ORIGINALITY (doctrine #1): every text and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from real DSH Modellsätze, university
// prüfungsordnung materials or published Übungssätze. Same IP rule as the rest
// of the exam engine.
//
// ── REGISTER: ACADEMIC, B2–C2 ───────────────────────────────────────────────
// The DSH is a university-entrance exam. Its Leseverstehen texts are the German
// of the seminar and the Fachliteratur: continuous academic prose on science,
// society, environment, technology and culture, argued at a level of abstraction
// no everyday-integration exam (DTZ) ever reaches. Authoring these in a daily-
// life register would be teaching the wrong exam.
//
// THREE Aufgabentypen, all three-option multiple choice (a / b / c):
//   DSH_LV_FRAGEN           Textverständnisfragen      6 items × 4 questions
//   DSH_LV_WORTERKLAERUNG   Wortbedeutung im Kontext   5 items × 3 questions
//   DSH_LV_REFORMULIERUNG   Aussage umformulieren      4 items × 3 questions
//
// Answer keys are authored naturally and vary across a/b/c; the caller permutes
// option positions deterministically at load time.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.DSH;
const base = {
  exam: "DSH" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
};

const RAW_ITEMS: ExamItemInput[] = [
  // ── DSH_LV_FRAGEN — Textverständnisfragen (6 items × 4 Fragen) ─────────────
  {
    ...base,
    taskType: "DSH_LV_FRAGEN",
    title: "Die stille Arbeit der Bodenmikroben",
    prompt: "Lesen Sie den Text und beantworten Sie die vier Fragen zum Inhalt.",
    topicTag: "wissenschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Unter der sichtbaren Oberfläche eines Waldbodens verbirgt sich ein biologisch außerordentlich aktiver Raum. In einer einzigen Handvoll Erde leben mehr Mikroorganismen, als es Menschen auf der Erde gibt. Diese Bakterien und Pilze erfüllen eine Aufgabe, die für das gesamte Ökosystem unentbehrlich ist: Sie zersetzen abgestorbenes Pflanzenmaterial und wandeln es in Nährstoffe um, die von lebenden Pflanzen erneut aufgenommen werden können. Ohne diesen Kreislauf würde sich unzersetztes Laub über die Jahrzehnte anhäufen, während den Bäumen zugleich die Grundlage ihres Wachstums entzogen würde.\n\n" +
        "Besonders bemerkenswert ist die enge Verbindung zwischen bestimmten Pilzen und den Wurzeln der Bäume. Die Pilzfäden dringen in das Wurzelgewebe ein und erweitern die Fläche, über die Wasser und Mineralstoffe aufgenommen werden, um ein Vielfaches. Im Gegenzug erhalten die Pilze von den Bäumen Zucker, den diese durch Photosynthese erzeugen. Beide Partner ziehen aus dieser Beziehung einen Vorteil, weshalb Fachleute von einer Symbiose sprechen. Erst in jüngerer Zeit hat die Forschung erkannt, dass über diese unterirdischen Netze sogar Signale zwischen einzelnen Bäumen ausgetauscht werden können.",
      questions: [
        {
          id: "q1",
          stem: "Welche zentrale Funktion erfüllen die Mikroorganismen im Waldboden?",
          options: [
            { id: "a", text: "Sie zersetzen totes Pflanzenmaterial und geben Nährstoffe frei." },
            { id: "b", text: "Sie schützen die Bäume vor Krankheiten." },
            { id: "c", text: "Sie speichern Wasser für Trockenzeiten." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was wäre laut Text die Folge, wenn dieser Kreislauf ausbliebe?",
          options: [
            { id: "a", text: "Die Bäume würden schneller wachsen." },
            { id: "b", text: "Unzersetztes Laub würde sich anhäufen und den Bäumen fehlte die Wachstumsgrundlage." },
            { id: "c", text: "Der Boden würde vollständig austrocknen." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Worin besteht der Vorteil, den die Pilze aus der Verbindung mit den Bäumen ziehen?",
          options: [
            { id: "a", text: "Sie erhalten Schutz vor Sonnenlicht." },
            { id: "b", text: "Sie werden vor Fressfeinden bewahrt." },
            { id: "c", text: "Sie erhalten Zucker, den die Bäume durch Photosynthese erzeugen." },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Welche Erkenntnis wird im Text als vergleichsweise neu dargestellt?",
          options: [
            { id: "a", text: "dass über die unterirdischen Netze Signale zwischen Bäumen ausgetauscht werden können" },
            { id: "b", text: "dass Pilze im Boden leben" },
            { id: "c", text: "dass Bäume Photosynthese betreiben" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_FRAGEN",
    title: "Verdichtung als Leitbild der Stadtentwicklung",
    prompt: "Lesen Sie den Text und beantworten Sie die vier Fragen zum Inhalt.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "In der Debatte über die Zukunft wachsender Städte hat sich in den letzten Jahren ein Leitbild durchgesetzt, das unter dem Stichwort der „kompakten Stadt“ diskutiert wird. Gemeint ist die Absicht, das weitere Wachstum nicht durch Ausdehnung an den Rändern, sondern durch eine dichtere Bebauung im bereits erschlossenen Stadtgebiet aufzunehmen. Befürworter verweisen darauf, dass kurze Wege den Verkehr verringern, dass eine höhere Bevölkerungsdichte den öffentlichen Nahverkehr wirtschaftlich tragfähiger macht und dass zusammenhängende Landschaften am Stadtrand vor der Bebauung geschützt werden.\n\n" +
        "Kritische Stimmen bestreiten diese Vorteile nicht grundsätzlich, warnen jedoch vor einer unkritischen Übertragung des Modells. Eine zu starke Verdichtung könne dazu führen, dass Grünflächen im Inneren der Stadt verschwinden, dass sich die Wohnungen verteuern und dass die Belastung durch Lärm und Hitze in dicht bebauten Vierteln zunimmt. Zwischen beiden Positionen zeichnet sich zunehmend die Einsicht ab, dass Verdichtung nur dann als Fortschritt gelten kann, wenn sie mit einer bewussten Gestaltung öffentlicher Freiräume einhergeht. Die eigentliche Herausforderung liege also weniger in der Frage, ob verdichtet werden solle, als vielmehr darin, wie dies geschehe.",
      questions: [
        {
          id: "q1",
          stem: "Was versteht der Text unter dem Leitbild der „kompakten Stadt“?",
          options: [
            { id: "a", text: "Wachstum durch dichtere Bebauung im bestehenden Stadtgebiet statt durch Ausdehnung am Rand" },
            { id: "b", text: "den vollständigen Verzicht auf neue Wohnungen" },
            { id: "c", text: "die Verlagerung der Bevölkerung aufs Land" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welches Argument führen die Befürworter an?",
          options: [
            { id: "a", text: "dass die Mieten dadurch sinken" },
            { id: "b", text: "dass eine höhere Dichte den öffentlichen Nahverkehr wirtschaftlicher macht" },
            { id: "c", text: "dass mehr Parkplätze entstehen" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wovor warnen die kritischen Stimmen?",
          options: [
            { id: "a", text: "vor sinkenden Grundstückspreisen" },
            { id: "b", text: "vor einem Rückgang der Bevölkerung" },
            { id: "c", text: "vor dem Verschwinden innerstädtischer Grünflächen und steigenden Wohnkosten" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Worin liegt laut Text die eigentliche Herausforderung?",
          options: [
            { id: "a", text: "nicht in der Frage, ob, sondern wie verdichtet wird" },
            { id: "b", text: "in der vollständigen Vermeidung jeder Verdichtung" },
            { id: "c", text: "in der raschen Bebauung des Umlands" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_FRAGEN",
    title: "Mikroplastik im Wasserkreislauf",
    prompt: "Lesen Sie den Text und beantworten Sie die vier Fragen zum Inhalt.",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Als Mikroplastik bezeichnet die Wissenschaft Kunststoffteilchen, deren Durchmesser fünf Millimeter unterschreitet. Ein Teil dieser Partikel wird bewusst hergestellt, etwa als Zusatz in bestimmten Reinigungsmitteln; der weitaus größere Anteil entsteht jedoch erst allmählich, indem größere Kunststoffgegenstände unter dem Einfluss von Sonnenlicht und mechanischer Reibung in immer kleinere Bruchstücke zerfallen. Weil diese Teilchen so klein sind, werden sie von den herkömmlichen Filteranlagen der Klärwerke nur unvollständig zurückgehalten und gelangen mit dem gereinigten Abwasser in Flüsse und schließlich in die Meere.\n\n" +
        "Über die Folgen für die Gesundheit des Menschen herrscht bislang keine Gewissheit. Zwar ist nachgewiesen, dass Mikroplastik von zahlreichen Meerestieren aufgenommen wird und sich in der Nahrungskette anreichert, doch fehlen belastbare Langzeitstudien über die Wirkung solcher Partikel im menschlichen Körper. Fachleute mahnen deshalb zur Vorsicht, ohne bereits von einer erwiesenen Gefahr zu sprechen. Einigkeit besteht allein darin, dass die Vermeidung an der Quelle wirksamer ist als jeder Versuch, die bereits verteilten Teilchen nachträglich aus der Umwelt zu entfernen — ein Unterfangen, das nach heutigem Kenntnisstand als praktisch aussichtslos gilt.",
      questions: [
        {
          id: "q1",
          stem: "Wie entsteht der größte Teil des Mikroplastiks laut Text?",
          options: [
            { id: "a", text: "durch den allmählichen Zerfall größerer Kunststoffgegenstände" },
            { id: "b", text: "ausschließlich durch bewusste Herstellung als Zusatzstoff" },
            { id: "c", text: "durch natürliche Prozesse im Meerwasser" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum gelangt Mikroplastik trotz Klärwerken in die Gewässer?",
          options: [
            { id: "a", text: "weil Klärwerke bewusst darauf verzichten, es zu filtern" },
            { id: "b", text: "weil die Teilchen so klein sind, dass die Filter sie nur unvollständig zurückhalten" },
            { id: "c", text: "weil es sich im Wasser auflöst" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wie beschreibt der Text den Kenntnisstand zur Gesundheit des Menschen?",
          options: [
            { id: "a", text: "Eine Gefahr für den Menschen ist eindeutig bewiesen." },
            { id: "b", text: "Mikroplastik ist für den Menschen nachweislich unschädlich." },
            { id: "c", text: "Es fehlen belastbare Langzeitstudien, weshalb keine Gewissheit besteht." },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Worin sind sich die Fachleute laut Text einig?",
          options: [
            { id: "a", text: "dass Vermeidung an der Quelle wirksamer ist als nachträgliche Entfernung" },
            { id: "b", text: "dass sich die Teilchen leicht aus dem Meer entfernen lassen" },
            { id: "c", text: "dass keine Maßnahmen nötig sind" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_FRAGEN",
    title: "Wie Empfehlungssysteme unsere Wahrnehmung formen",
    prompt: "Lesen Sie den Text und beantworten Sie die vier Fragen zum Inhalt.",
    topicTag: "technik",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Wer heute im Internet Nachrichten liest, Musik hört oder Waren betrachtet, wird dabei fast unausweichlich von Empfehlungssystemen begleitet. Diese Programme werten das bisherige Verhalten der Nutzer aus und schließen daraus, welche weiteren Inhalte deren Aufmerksamkeit am ehesten binden. Der ökonomische Zweck ist offenkundig: Je länger jemand auf einer Seite verweilt, desto mehr Werbung lässt sich einblenden. Was auf den ersten Blick als bloßer Dienst am Nutzer erscheint, greift daher tief in die Auswahl dessen ein, was dieser überhaupt zu sehen bekommt.\n\n" +
        "Kritisch beurteilt wird vor allem der Umstand, dass solche Systeme dazu neigen, bereits vorhandene Vorlieben zu verstärken. Wer sich einmal für ein bestimmtes Thema interessiert hat, erhält fortan bevorzugt ähnliche Inhalte, während abweichende Sichtweisen seltener erscheinen. Auf diese Weise kann der Eindruck entstehen, die eigene Meinung werde von einer breiten Mehrheit geteilt, obwohl es sich lediglich um eine algorithmisch verengte Auswahl handelt. Manche Beobachter sehen darin eine Gefahr für die öffentliche Verständigung, weil eine Gesellschaft eine gemeinsame Grundlage an Informationen benötige, über die sie überhaupt streiten könne.",
      questions: [
        {
          id: "q1",
          stem: "Auf welcher Grundlage wählen Empfehlungssysteme Inhalte aus?",
          options: [
            { id: "a", text: "auf Grundlage des bisherigen Verhaltens der Nutzer" },
            { id: "b", text: "durch zufällige Auswahl" },
            { id: "c", text: "nach dem Urteil unabhängiger Fachleute" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welcher ökonomische Zweck wird im Text genannt?",
          options: [
            { id: "a", text: "die Kosten der Server zu senken" },
            { id: "b", text: "die Verweildauer zu erhöhen, um mehr Werbung einzublenden" },
            { id: "c", text: "die Qualität der Inhalte zu prüfen" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Welche Neigung solcher Systeme wird kritisiert?",
          options: [
            { id: "a", text: "dass sie ausschließlich neue Themen anbieten" },
            { id: "b", text: "dass sie die Nutzer zufällig verwirren" },
            { id: "c", text: "dass sie bereits vorhandene Vorlieben verstärken" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Worin sehen manche Beobachter eine Gefahr für die Gesellschaft?",
          options: [
            { id: "a", text: "im Verlust einer gemeinsamen Informationsgrundlage" },
            { id: "b", text: "in einem Übermaß an abweichenden Meinungen" },
            { id: "c", text: "im zu langsamen Laden der Seiten" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_FRAGEN",
    title: "Das Museum als Ort der Aushandlung",
    prompt: "Lesen Sie den Text und beantworten Sie die vier Fragen zum Inhalt.",
    topicTag: "kultur",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Das öffentliche Museum, wie wir es heute kennen, ist eine vergleichsweise junge Einrichtung. Lange Zeit waren wertvolle Sammlungen dem Blick der Öffentlichkeit entzogen und dienten allein dem Ansehen ihrer fürstlichen Besitzer. Erst mit der Vorstellung, dass Bildung ein Gut aller Bürger sei, öffneten sich die Sammlungen einem breiteren Publikum. Seitdem versteht sich das Museum nicht mehr bloß als Aufbewahrungsort, sondern als eine Institution, die Wissen ordnet, vermittelt und einem allgemeinen Publikum zugänglich macht.\n\n" +
        "In der Gegenwart hat sich das Selbstverständnis der Museen abermals gewandelt. Zunehmend wird gefragt, nach welchen Maßstäben eine Sammlung überhaupt zustande gekommen ist und wessen Sichtweise in der Anordnung der Objekte zum Ausdruck kommt. Ein Ausstellungsstück erzählt schließlich nicht nur von sich selbst, sondern auch von den Umständen, unter denen es einst erworben wurde. Damit gerät das Museum in eine neue Rolle: Es wird zu einem Ort, an dem eine Gesellschaft über ihr eigenes Verhältnis zur Vergangenheit verhandelt. Die Auswahl dessen, was gezeigt und was verschwiegen wird, erscheint nicht länger als neutrale Tatsache, sondern als Ergebnis von Entscheidungen, die begründet werden müssen.",
      questions: [
        {
          id: "q1",
          stem: "Wozu dienten wertvolle Sammlungen laut Text in früheren Zeiten?",
          options: [
            { id: "a", text: "der Bildung aller Bürger" },
            { id: "b", text: "dem Ansehen ihrer fürstlichen Besitzer" },
            { id: "c", text: "der wissenschaftlichen Forschung" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Welche Vorstellung führte zur Öffnung der Sammlungen?",
          options: [
            { id: "a", text: "dass Bildung ein Gut aller Bürger sei" },
            { id: "b", text: "dass Sammlungen verkauft werden müssten" },
            { id: "c", text: "dass Kunst gefährlich sei" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welche Frage stellt sich in der Gegenwart zunehmend?",
          options: [
            { id: "a", text: "wie viele Besucher ein Museum aufnehmen kann" },
            { id: "b", text: "welches Museum das älteste ist" },
            { id: "c", text: "nach welchen Maßstäben eine Sammlung zustande gekommen ist" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "In welche neue Rolle gerät das Museum laut Text?",
          options: [
            { id: "a", text: "zu einem Ort, an dem die Gesellschaft ihr Verhältnis zur Vergangenheit verhandelt" },
            { id: "b", text: "zu einem reinen Aufbewahrungsort ohne Publikum" },
            { id: "c", text: "zu einem Ort des Handels mit Kunstwerken" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_FRAGEN",
    title: "Warum der Schlaf keine verlorene Zeit ist",
    prompt: "Lesen Sie den Text und beantworten Sie die vier Fragen zum Inhalt.",
    topicTag: "wissenschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Lange galt der Schlaf als ein bloßer Ruhezustand, in dem der Körper untätig verharrt und in dem lediglich Kräfte gesammelt werden. Die moderne Schlafforschung hat dieses Bild gründlich berichtigt. Während der Nacht durchläuft das Gehirn mehrere Phasen, die sich in ihrer Aktivität deutlich unterscheiden und die in regelmäßigen Zyklen aufeinanderfolgen. Weit davon entfernt, untätig zu sein, ist das Gehirn in bestimmten Phasen ähnlich aktiv wie im Wachzustand.\n\n" +
        "Von besonderer Bedeutung ist die Rolle des Schlafs für das Gedächtnis. Nach heutigem Verständnis werden im Schlaf jene Eindrücke, die tagsüber aufgenommen wurden, gesichtet, geordnet und teilweise dauerhaft gespeichert, während Unwichtiges verworfen wird. Wer nach dem Lernen ausreichend schläft, behält den Stoff nachweislich besser als jemand, der auf den Schlaf verzichtet. Darüber hinaus mehren sich die Hinweise, dass während des Schlafs Stoffwechselprodukte aus dem Gehirn abtransportiert werden, die sich im Wachzustand ansammeln. Chronischer Schlafmangel erscheint daher nicht als harmlose Gewohnheit, sondern als ein Zustand, der die geistige Leistungsfähigkeit und langfristig auch die Gesundheit beeinträchtigt.",
      questions: [
        {
          id: "q1",
          stem: "Wie wurde der Schlaf früher aufgefasst?",
          options: [
            { id: "a", text: "als Zustand höchster geistiger Anstrengung" },
            { id: "b", text: "als bloßer Ruhezustand, in dem der Körper untätig verharrt" },
            { id: "c", text: "als überflüssig und gesundheitsschädlich" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wie beschreibt die moderne Forschung die Aktivität des Gehirns im Schlaf?",
          options: [
            { id: "a", text: "Das Gehirn ist in bestimmten Phasen ähnlich aktiv wie im Wachzustand." },
            { id: "b", text: "Das Gehirn stellt seine Tätigkeit vollständig ein." },
            { id: "c", text: "Das Gehirn arbeitet die ganze Nacht auf demselben Niveau." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welche Rolle spielt der Schlaf für das Gedächtnis?",
          options: [
            { id: "a", text: "Er löscht alle Eindrücke des Tages." },
            { id: "b", text: "Er hat keinen Einfluss auf das Behalten von Gelerntem." },
            { id: "c", text: "In ihm werden Eindrücke geordnet und teils dauerhaft gespeichert." },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Wie wird chronischer Schlafmangel im Text bewertet?",
          options: [
            { id: "a", text: "als Zustand, der Leistungsfähigkeit und langfristig die Gesundheit beeinträchtigt" },
            { id: "b", text: "als harmlose Gewohnheit ohne Folgen" },
            { id: "c", text: "als Vorteil für das Lernen" },
          ],
          answer: "a",
        },
      ],
    },
  },

  // ── DSH_LV_WORTERKLAERUNG — Wortbedeutung im Kontext (5 items × 3 Fragen) ──
  {
    ...base,
    taskType: "DSH_LV_WORTERKLAERUNG",
    title: "Grundlast und die Grenzen erneuerbarer Energie",
    prompt: "Lesen Sie den Text. Was bedeuten die hervorgehobenen Ausdrücke in diesem Zusammenhang?",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jeden Ausdruck die Bedeutung, die im Text gemeint ist: a, b oder c.",
      passage:
        "Der Ausbau erneuerbarer Energien gilt als unabdingbare Voraussetzung für den Umbau der Stromversorgung. Zugleich stellt er die Netzbetreiber vor eine grundsätzliche Schwierigkeit: Wind und Sonne stehen nicht kontinuierlich zur Verfügung, sondern schwanken im Tages- und Jahresverlauf erheblich. Ein Stromnetz muss aber jederzeit genau so viel Energie bereitstellen, wie in eben diesem Moment verbraucht wird, denn eine nennenswerte Speicherung im Netz selbst ist nicht möglich. Solange leistungsfähige Speichertechnologien noch nicht in ausreichendem Umfang verfügbar sind, bleibt die Versorgung auf eine gesicherte Grundlast angewiesen, die auch bei Windstille und in der Nacht abgerufen werden kann. Fachleute betonen daher, dass der Übergang zu einer klimaneutralen Versorgung nicht allein von der installierten Leistung, sondern ebenso von der Fähigkeit abhängt, Erzeugung und Verbrauch zeitlich in Deckung zu bringen.",
      questions: [
        {
          id: "q1",
          stem: "Was bedeutet «unabdingbar» in diesem Text?",
          options: [
            { id: "a", text: "unbedingt notwendig, nicht verzichtbar" },
            { id: "b", text: "nur schwer zu bezahlen" },
            { id: "c", text: "wissenschaftlich umstritten" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist mit einer «gesicherten Grundlast» gemeint?",
          options: [
            { id: "a", text: "die höchste je gemessene Verbrauchsspitze" },
            { id: "b", text: "eine jederzeit verfügbare Grundversorgung, auch bei Windstille und nachts" },
            { id: "c", text: "der Stromverbrauch großer Industriebetriebe" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was bedeutet die Wendung «in Deckung bringen» an dieser Stelle?",
          options: [
            { id: "a", text: "vor Schäden schützen" },
            { id: "b", text: "geheim halten" },
            { id: "c", text: "zeitlich aufeinander abstimmen, zur Übereinstimmung bringen" },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_WORTERKLAERUNG",
    title: "Der demografische Wandel und die Sozialsysteme",
    prompt: "Lesen Sie den Text. Was bedeuten die hervorgehobenen Ausdrücke in diesem Zusammenhang?",
    topicTag: "gesellschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jeden Ausdruck die Bedeutung, die im Text gemeint ist: a, b oder c.",
      passage:
        "Die Alterung der Bevölkerung stellt die umlagefinanzierten Sozialsysteme vor eine strukturelle Herausforderung. In einem solchen System werden die laufenden Renten nicht aus zuvor angespartem Vermögen, sondern unmittelbar aus den Beiträgen der gegenwärtig Erwerbstätigen bestritten. Solange auf jeden Ruheständler zahlreiche Beitragszahler entfallen, bleibt dieses Verfahren tragfähig. Verschiebt sich das Verhältnis jedoch, weil die Menschen länger leben und zugleich weniger Kinder geboren werden, so gerät das Gleichgewicht ins Wanken. Ein bloßes Anheben der Beiträge stößt rasch an Grenzen, weil es die Erwerbstätigen über Gebühr belasten würde. Die Politik steht damit vor der heiklen Aufgabe, Lasten zwischen den Generationen so zu verteilen, dass weder die Jüngeren überfordert noch den Älteren zugesagte Leistungen entzogen werden. Ein einfaches Patentrezept, da sind sich die meisten Fachleute einig, gibt es hierfür nicht.",
      questions: [
        {
          id: "q1",
          stem: "Was bezeichnet ein «umlagefinanziertes» Sozialsystem?",
          options: [
            { id: "a", text: "ein System, das Renten aus den Beiträgen der aktuell Erwerbstätigen zahlt" },
            { id: "b", text: "ein System, das ausschließlich auf angespartem Vermögen beruht" },
            { id: "c", text: "ein System, das allein vom Staat aus Steuern finanziert wird" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was bedeutet «über Gebühr» in diesem Text?",
          options: [
            { id: "a", text: "gegen Zahlung einer Gebühr" },
            { id: "b", text: "in unangemessenem, zu starkem Maß" },
            { id: "c", text: "nur mit amtlicher Genehmigung" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was ist mit einem «Patentrezept» gemeint?",
          options: [
            { id: "a", text: "eine rechtlich geschützte Erfindung" },
            { id: "b", text: "eine ärztliche Verordnung" },
            { id: "c", text: "eine einfache Lösung, die das Problem mühelos behebt" },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_WORTERKLAERUNG",
    title: "Wie das Immunsystem zwischen Freund und Feind unterscheidet",
    prompt: "Lesen Sie den Text. Was bedeuten die hervorgehobenen Ausdrücke in diesem Zusammenhang?",
    topicTag: "wissenschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jeden Ausdruck die Bedeutung, die im Text gemeint ist: a, b oder c.",
      passage:
        "Das Immunsystem steht vor einer Aufgabe von bemerkenswerter Schwierigkeit: Es muss körperfremde Eindringlinge zuverlässig erkennen und bekämpfen, ohne dabei das eigene Gewebe anzugreifen. Diese Fähigkeit, zwischen dem Eigenen und dem Fremden zu unterscheiden, wird bereits in einem frühen Stadium der Entwicklung angelegt, indem jene Abwehrzellen, die sich gegen den eigenen Körper richten würden, gezielt ausgesondert werden. Versagt dieser Mechanismus, so kann es zu einer Fehlsteuerung kommen, bei der sich die Abwehr irrtümlich gegen gesundes Gewebe wendet — der Ursprung zahlreicher chronischer Erkrankungen. Umgekehrt ist eine überschießende Reaktion auf an sich harmlose Stoffe die Grundlage vieler Allergien. Das Immunsystem gleicht somit einem fein austarierten Apparat, dessen Wirksamkeit ebenso von seiner Schlagkraft wie von seiner Zurückhaltung abhängt. Erst das Zusammenspiel beider Eigenschaften gewährleistet einen dauerhaften Schutz.",
      questions: [
        {
          id: "q1",
          stem: "Was bedeutet «aussondern» in diesem Zusammenhang?",
          options: [
            { id: "a", text: "besonders fördern und vermehren" },
            { id: "b", text: "gezielt entfernen bzw. ausschließen" },
            { id: "c", text: "in andere Organe verschieben" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was ist mit einer «überschießenden» Reaktion gemeint?",
          options: [
            { id: "a", text: "eine zu starke, das angemessene Maß übersteigende Reaktion" },
            { id: "b", text: "eine völlig ausbleibende Reaktion" },
            { id: "c", text: "eine bewusst gesteuerte Reaktion" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was beschreibt der Ausdruck «fein austariert»?",
          options: [
            { id: "a", text: "besonders schnell arbeitend" },
            { id: "b", text: "leicht zu beschädigen" },
            { id: "c", text: "sorgfältig ins Gleichgewicht gebracht" },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_WORTERKLAERUNG",
    title: "Digitalisierung als Umgestaltung der Arbeitswelt",
    prompt: "Lesen Sie den Text. Was bedeuten die hervorgehobenen Ausdrücke in diesem Zusammenhang?",
    topicTag: "technik",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jeden Ausdruck die Bedeutung, die im Text gemeint ist: a, b oder c.",
      passage:
        "Die Digitalisierung wird häufig auf die Einführung neuer Geräte verkürzt, doch ihre eigentliche Tragweite liegt tiefer. Sie verändert, wie Arbeit organisiert, überwacht und bewertet wird. Tätigkeiten, die sich in klare Regeln fassen lassen, werden zunehmend an Maschinen übertragen, während dem Menschen jene Aufgaben verbleiben, die Urteilsvermögen, Einfühlung oder schöpferische Entscheidung verlangen. Diese Verschiebung ist kein Selbstläufer, der zwangsläufig zu allgemeinem Wohlstand führt; ihre Folgen hängen wesentlich davon ab, wie eine Gesellschaft die freiwerdenden Kräfte nutzt. Wird der Gewinn an Produktivität einseitig abgeschöpft, so drohen neue Ungleichheiten. Gelingt es hingegen, die Beschäftigten rechtzeitig zu qualifizieren, kann die Umwälzung in einen Zuwachs an sinnvoller Beschäftigung münden. Der Ausgang, so betonen viele Fachleute, ist daher keine technische, sondern eine gesellschaftliche Frage.",
      questions: [
        {
          id: "q1",
          stem: "Was ist mit der «Tragweite» der Digitalisierung gemeint?",
          options: [
            { id: "a", text: "das Gewicht der neuen Geräte" },
            { id: "b", text: "das Ausmaß und die Bedeutung ihrer Auswirkungen" },
            { id: "c", text: "die Reichweite eines Funknetzes" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was bedeutet «kein Selbstläufer» in diesem Text?",
          options: [
            { id: "a", text: "etwas, das ohne eigenes Zutun nicht von allein gelingt" },
            { id: "b", text: "ein Gerät, das sich selbst bewegt" },
            { id: "c", text: "ein besonders schneller Vorgang" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was bedeutet «einseitig abgeschöpft» an dieser Stelle?",
          options: [
            { id: "a", text: "gleichmäßig unter allen verteilt" },
            { id: "b", text: "vollständig vernichtet" },
            { id: "c", text: "nur von einer Seite als Gewinn eingezogen" },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_WORTERKLAERUNG",
    title: "Dialekte zwischen Rückgang und Wertschätzung",
    prompt: "Lesen Sie den Text. Was bedeuten die hervorgehobenen Ausdrücke in diesem Zusammenhang?",
    topicTag: "kultur",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jeden Ausdruck die Bedeutung, die im Text gemeint ist: a, b oder c.",
      passage:
        "Regionale Dialekte galten lange als Zeichen mangelnder Bildung und wurden in Schule und Beruf zurückgedrängt. Wer sich beruflich behaupten wollte, war gut beraten, die überregionale Standardsprache zu beherrschen. Diese Geringschätzung hat dazu beigetragen, dass viele Mundarten heute nur noch von einer schwindenden Zahl älterer Sprecher gepflegt werden. In jüngerer Zeit jedoch hat sich die Sichtweise gewandelt. Sprachwissenschaftler betonen, dass ein Dialekt keineswegs eine verdorbene Form der Hochsprache darstellt, sondern ein eigenständiges, historisch gewachsenes System mit eigener Ordnung. Zugleich wird der Dialekt zunehmend als Träger regionaler Identität geschätzt, als ein Band, das die Angehörigen einer Landschaft miteinander verbindet. Ob diese neue Wertschätzung genügt, um den Rückgang aufzuhalten, bleibt allerdings ungewiss, denn eine Sprache lebt nur so lange fort, wie sie im Alltag tatsächlich weitergegeben wird.",
      questions: [
        {
          id: "q1",
          stem: "Was bedeutet «Geringschätzung» in diesem Text?",
          options: [
            { id: "a", text: "eine geringe Menge an Sprechern" },
            { id: "b", text: "eine abwertende Haltung, mangelnde Achtung" },
            { id: "c", text: "eine sorgfältige Untersuchung" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was ist mit «eigenständig» in Bezug auf den Dialekt gemeint?",
          options: [
            { id: "a", text: "aus eigener Kraft entstanden und unabhängig für sich bestehend" },
            { id: "b", text: "besonders leicht zu erlernen" },
            { id: "c", text: "nur in der Schule verwendet" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was beschreibt das Wort «Band» an dieser Stelle?",
          options: [
            { id: "a", text: "ein Werkzeug zum Messen" },
            { id: "b", text: "eine Aufzeichnung von Tönen" },
            { id: "c", text: "eine Verbindung, die Menschen zusammenhält" },
          ],
          answer: "c",
        },
      ],
    },
  },

  // ── DSH_LV_REFORMULIERUNG — Aussage umformulieren (4 items × 3 Fragen) ─────
  {
    ...base,
    taskType: "DSH_LV_REFORMULIERUNG",
    title: "Der Rückzug der Gletscher",
    prompt: "Lesen Sie den Text. Welcher Satz gibt die jeweils zitierte Aussage am besten wieder?",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jedes Zitat die Reformulierung, die dessen Aussage am genauesten wiedergibt: a, b oder c.",
      passage:
        "Die Gletscher der Hochgebirge ziehen sich seit Jahrzehnten in einem Tempo zurück, das die Fachwelt beunruhigt. Ihre Bedeutung reicht weit über das ästhetische Bild hinaus, das sie einer Landschaft verleihen. Als gewaltige Wasserspeicher geben sie im Sommer, wenn die Niederschläge gering sind, allmählich Schmelzwasser frei und sichern so die Wasserführung zahlreicher Flüsse. Schwinden die Gletscher, so entfällt dieser Ausgleich, und die Wasserversorgung ganzer Regionen wird unsicherer. Hinzu kommt, dass der Rückgang sich selbst beschleunigt: Wo das helle Eis verschwindet, tritt dunkler Fels zutage, der die Sonnenwärme stärker aufnimmt und die Erwärmung der Umgebung weiter vorantreibt. Was einmal in Gang gekommen ist, lässt sich daher nur schwer wieder aufhalten.",
      questions: [
        {
          id: "q1",
          stem: "«Ihre Bedeutung reicht weit über das ästhetische Bild hinaus, das sie einer Landschaft verleihen.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Gletscher sind vor allem deshalb wichtig, weil sie schön aussehen." },
            { id: "b", text: "Gletscher haben nicht nur einen landschaftlichen Reiz, sondern auch eine darüber hinausgehende Funktion." },
            { id: "c", text: "Gletscher verändern das Aussehen einer Landschaft kaum." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "«Schwinden die Gletscher, so entfällt dieser Ausgleich, und die Wasserversorgung ganzer Regionen wird unsicherer.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Wenn die Gletscher verschwinden, wird die Wasserversorgung mancher Regionen weniger verlässlich." },
            { id: "b", text: "Der Rückgang der Gletscher verbessert die Wasserversorgung." },
            { id: "c", text: "Die Wasserversorgung hängt nicht von den Gletschern ab." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "«Was einmal in Gang gekommen ist, lässt sich daher nur schwer wieder aufhalten.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Der Vorgang beginnt nur unter besonderen Bedingungen." },
            { id: "b", text: "Der Vorgang lässt sich jederzeit mühelos beenden." },
            { id: "c", text: "Ist der Prozess erst einmal angestoßen, ist er kaum noch zu stoppen." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_REFORMULIERUNG",
    title: "Bildung als mehr als Wissensvermittlung",
    prompt: "Lesen Sie den Text. Welcher Satz gibt die jeweils zitierte Aussage am besten wieder?",
    topicTag: "gesellschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jedes Zitat die Reformulierung, die dessen Aussage am genauesten wiedergibt: a, b oder c.",
      passage:
        "In der Diskussion über die Aufgaben der Schule wird der Erwerb messbaren Wissens oft in den Vordergrund gerückt. Doch Bildung erschöpft sich nicht in der Anhäufung von Kenntnissen, die sich in Prüfungen abfragen lassen. Ebenso bedeutsam ist die Fähigkeit, Behauptungen zu prüfen, Zusammenhänge zu durchschauen und sich ein eigenes Urteil zu bilden. Gerade in einer Zeit, in der Informationen im Überfluss verfügbar sind, verliert das bloße Erinnern von Fakten an Gewicht, während die Kunst, das Wichtige vom Nebensächlichen zu trennen, an Bedeutung gewinnt. Eine Schule, die allein auf abfragbares Wissen zielt, bereitet ihre Schüler daher nur unzureichend auf eine Welt vor, deren Anforderungen sich rasch wandeln. Bildung, so ließe sich zuspitzen, ist weniger ein Besitz als eine Haltung.",
      questions: [
        {
          id: "q1",
          stem: "«Bildung erschöpft sich nicht in der Anhäufung von Kenntnissen, die sich in Prüfungen abfragen lassen.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Bildung besteht ausschließlich aus abfragbarem Wissen." },
            { id: "b", text: "Bildung ist mehr als nur das Ansammeln prüfbaren Wissens." },
            { id: "c", text: "Prüfungen sind für die Bildung ohne jeden Wert." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "«In einer Zeit, in der Informationen im Überfluss verfügbar sind, verliert das bloße Erinnern von Fakten an Gewicht.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Weil Informationen leicht zugänglich sind, wird das reine Auswendigwissen weniger wichtig." },
            { id: "b", text: "Je mehr Informationen es gibt, desto wichtiger wird das Auswendiglernen." },
            { id: "c", text: "Fakten sind heute schwerer zu finden als früher." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "«Bildung ist weniger ein Besitz als eine Haltung.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Bildung ist ein Gut, das man wie Eigentum ansammeln kann." },
            { id: "b", text: "Bildung lässt sich kaufen und besitzen." },
            { id: "c", text: "Bildung zeigt sich eher in einer Einstellung als in angehäuftem Wissen." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_REFORMULIERUNG",
    title: "Automatisierung und die Zukunft der Arbeit",
    prompt: "Lesen Sie den Text. Welcher Satz gibt die jeweils zitierte Aussage am besten wieder?",
    topicTag: "technik",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jedes Zitat die Reformulierung, die dessen Aussage am genauesten wiedergibt: a, b oder c.",
      passage:
        "Die Sorge, dass Maschinen den Menschen die Arbeit nehmen, ist so alt wie die Industrialisierung selbst und hat sich bislang in dieser einfachen Form nicht bestätigt. Zwar sind zahllose Tätigkeiten im Lauf der Zeit verschwunden, doch entstanden zugleich neue, die zuvor niemand vorhersehen konnte. Der bloße Verweis auf die Vergangenheit taugt jedoch nicht als Beweis für die Zukunft, denn die gegenwärtige Welle der Automatisierung erfasst auch geistige Tätigkeiten, die lange als sicher galten. Entscheidend ist weniger, ob Arbeitsplätze wegfallen, als vielmehr, in welchem Tempo dies geschieht und ob die Betroffenen genügend Zeit finden, sich auf neue Aufgaben umzustellen. Nicht die Technik selbst, sondern die Geschwindigkeit des Wandels stellt die eigentliche gesellschaftliche Belastungsprobe dar.",
      questions: [
        {
          id: "q1",
          stem: "«Die Sorge, dass Maschinen den Menschen die Arbeit nehmen, hat sich bislang in dieser einfachen Form nicht bestätigt.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Bisher ist die Befürchtung, Maschinen verdrängten die menschliche Arbeit, so nicht eingetreten." },
            { id: "b", text: "Maschinen haben den Menschen bereits alle Arbeit abgenommen." },
            { id: "c", text: "Diese Sorge ist erst in jüngster Zeit entstanden." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "«Der bloße Verweis auf die Vergangenheit taugt jedoch nicht als Beweis für die Zukunft.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Die Zukunft wird sich genauso entwickeln wie die Vergangenheit." },
            { id: "b", text: "Aus dem, was früher geschah, lässt sich nicht sicher schließen, was künftig geschehen wird." },
            { id: "c", text: "Die Vergangenheit ist für das Verständnis der Zukunft völlig bedeutungslos." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "«Nicht die Technik selbst, sondern die Geschwindigkeit des Wandels stellt die eigentliche gesellschaftliche Belastungsprobe dar.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Die Technik allein ist die größte Herausforderung für die Gesellschaft." },
            { id: "b", text: "Der Wandel belastet die Gesellschaft überhaupt nicht." },
            { id: "c", text: "Zur eigentlichen Herausforderung wird nicht die Technik, sondern das Tempo der Veränderung." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_LV_REFORMULIERUNG",
    title: "Der Wert biologischer Vielfalt",
    prompt: "Lesen Sie den Text. Welcher Satz gibt die jeweils zitierte Aussage am besten wieder?",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jedes Zitat die Reformulierung, die dessen Aussage am genauesten wiedergibt: a, b oder c.",
      passage:
        "Der Rückgang der biologischen Vielfalt wird in der Öffentlichkeit oft weniger beachtet als der Wandel des Klimas, obwohl beide Entwicklungen eng miteinander verflochten sind. Ein artenreiches Ökosystem gleicht Störungen besser aus als ein artenarmes, denn fällt eine Art aus, so können andere ihre Rolle teilweise übernehmen. Diese Fähigkeit, Belastungen zu verkraften, geht mit jeder verlorenen Art ein Stück weit verloren. Der Nutzen der Vielfalt lässt sich zudem nicht vollständig in wirtschaftlichen Größen ausdrücken, was ihren Schutz erschwert, weil in politischen Abwägungen häufig nur zählt, was sich beziffern lässt. Dennoch mehren sich die Stimmen, die darauf hinweisen, dass der Mensch von intakten Ökosystemen in einem Maße abhängt, das ihm im Alltag kaum bewusst wird.",
      questions: [
        {
          id: "q1",
          stem: "«Ein artenreiches Ökosystem gleicht Störungen besser aus als ein artenarmes.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Ökosysteme mit vielen Arten sind widerstandsfähiger gegenüber Störungen als solche mit wenigen." },
            { id: "b", text: "Je weniger Arten ein Ökosystem hat, desto stabiler ist es." },
            { id: "c", text: "Die Zahl der Arten hat keinen Einfluss auf die Stabilität." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "«Der Nutzen der Vielfalt lässt sich nicht vollständig in wirtschaftlichen Größen ausdrücken.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Der Wert der Vielfalt lässt sich vollständig in Geld beziffern." },
            { id: "b", text: "Nicht der gesamte Nutzen der Vielfalt lässt sich in wirtschaftlichen Zahlen erfassen." },
            { id: "c", text: "Die Vielfalt hat keinerlei wirtschaftlichen Nutzen." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "«Der Mensch hängt von intakten Ökosystemen in einem Maße ab, das ihm im Alltag kaum bewusst wird.» — Welche Reformulierung trifft am besten zu?",
          options: [
            { id: "a", text: "Der Mensch ist von Ökosystemen völlig unabhängig." },
            { id: "b", text: "Die Abhängigkeit des Menschen von der Natur ist ihm jederzeit klar bewusst." },
            { id: "c", text: "Der Mensch ist stärker von funktionierenden Ökosystemen abhängig, als er es im Alltag wahrnimmt." },
          ],
          answer: "c",
        },
      ],
    },
  },
];

// Distribute the 3-option MC keys deterministically (see ./_permute.ts and the
// answer-distribution gate — DSH is a structured, enforced exam).
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["DSH_LV_FRAGEN", "DSH_LV_WORTERKLAERUNG", "DSH_LV_REFORMULIERUNG"]),
});
