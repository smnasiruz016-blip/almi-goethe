// DTZ — Deutsch-Test für Zuwanderer (A2–B1), Sprechen (mündliche Prüfung).
// Original practice items.
//
// ORIGINALITY (doctrine #1): every theme, Stichpunkt, Leitpunkt and prompt below
// is ORIGINAL to AlmiGoethe — never copied or derived from DTZ, telc/g.a.s.t. or
// BAMF materials, Modelltests or Übungstests. Same IP rule as the sibling files.
//
// THREE Teile, as in the real oral exam:
//   Teil 1  Über sich / andere sprechen   — a short self-introduction
//   Teil 2  Über ein Thema sprechen       — describe a picture/situation + own take
//   Teil 3  Gemeinsam etwas planen        — agree a plan with a partner
//
// ── REGISTER ────────────────────────────────────────────────────────────────
// DTZ is the integration exam, sat at A2–B1 by adults living in Germany. The
// themes here are everyday/integration ones (the language course, work, the
// neighbourhood, the doctor, festivals). Teil 1 and Teil 2 address the examiner
// and use "Sie"; Teil 3 is a partner task and uses the informal "du/wir", which
// is how learners rehearse planning with a classmate or neighbour.
//
// ── HOW THE PAIR EXAM IS PRACTISED SOLO ─────────────────────────────────────
// The DTZ oral is sat by two candidates. This product practises it solo, so each
// Teil-3 item frames BOTH sides: the learner speaks their own turns AND is told
// what the partner would bring, so they rehearse asking as well as answering.
// The productive grader reads { situation, instruction, prepSeconds, speakSeconds }
// and scores "communication: task fulfilled, required points covered, register
// appropriate" — so the points to cover are written INTO the instruction prose,
// never into a structured field the schema would silently strip.
//
// ── NO ANSWER KEYS HERE ─────────────────────────────────────────────────────
// Speaking items are productive: there is nothing to permute and no answer-key
// distribution to measure. The type-aware distribution gate does not apply here.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.DTZ;
const base = { exam: "DTZ" as const, level: L, section: SECTION.SPRECHEN, difficulty: "CORE" as const };

// ── Teil 1 — Über sich sprechen / sich vorstellen (5 items) ─────────────────
// A short self-introduction. Each item gives four to six Stichpunkte the
// candidate covers about themselves, framed around a slightly different angle so
// the five are not interchangeable. Little preparation, then speak freely.
const teil1Items: ExamItemInput[] = [
  {
    ...base,
    taskType: "DTZ_SP_VORSTELLEN",
    title: "Über sich sprechen: sich vorstellen",
    prompt: "Stellen Sie sich vor. Erzählen Sie den anderen etwas über sich.",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Zu Beginn der mündlichen Prüfung sollen Sie sich kurz vorstellen. Die Prüferin oder der Prüfer und die andere Teilnehmerin oder der andere Teilnehmer hören Ihnen zu.",
      instruction:
        "Sprechen Sie über sich. Gehen Sie dabei auf diese Punkte ein:\n" +
        "1. Wie heißen Sie und woher kommen Sie?\n" +
        "2. Seit wann leben Sie in Deutschland?\n" +
        "3. Mit wem wohnen Sie zusammen?\n" +
        "4. Was machen Sie beruflich oder was lernen Sie zurzeit?\n" +
        "5. Was machen Sie in Ihrer Freizeit gern?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei und in ganzen Sätzen.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote: "Nennen Sie Zeitangaben („seit zwei Jahren“) und ein persönliches Beispiel. Kurze, klare Sätze reichen.",
  },
  {
    ...base,
    taskType: "DTZ_SP_VORSTELLEN",
    title: "Über sich sprechen: meine Familie und mein Zuhause",
    prompt: "Stellen Sie sich vor und erzählen Sie von Ihrer Familie und Ihrem Zuhause.",
    topicTag: "wohnen",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie stellen sich zu Beginn der mündlichen Prüfung vor. Diesmal geht es besonders um Ihre Familie und Ihr Wohnen.",
      instruction:
        "Erzählen Sie etwas über sich. Gehen Sie auf diese Punkte ein:\n" +
        "1. Wie ist Ihr Name und woher kommen Sie?\n" +
        "2. Wie groß ist Ihre Familie?\n" +
        "3. Wo und wie wohnen Sie in Deutschland?\n" +
        "4. Was gefällt Ihnen an Ihrer Wohnung oder Ihrer Gegend?\n" +
        "5. Was möchten Sie später gern ändern?\n\nSprechen Sie mit „Sie“. Sprechen Sie ruhig und deutlich.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote: "Beschreiben Sie Ihr Zuhause mit einfachen Wörtern („hell“, „ruhig“, „im dritten Stock“). Ein Grund macht die Antwort stärker.",
  },
  {
    ...base,
    taskType: "DTZ_SP_VORSTELLEN",
    title: "Über sich sprechen: Arbeit und Ausbildung",
    prompt: "Stellen Sie sich vor. Erzählen Sie besonders von Ihrer Arbeit oder Ausbildung.",
    topicTag: "arbeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie stellen sich in der Prüfung vor. Der Schwerpunkt liegt heute auf Ihrer Arbeit oder Ausbildung.",
      instruction:
        "Sprechen Sie über sich und Ihren Beruf. Gehen Sie auf diese Punkte ein:\n" +
        "1. Wie heißen Sie und woher kommen Sie?\n" +
        "2. Was haben Sie in Ihrem Heimatland gearbeitet oder gelernt?\n" +
        "3. Was machen Sie jetzt in Deutschland — arbeiten Sie oder lernen Sie?\n" +
        "4. Wie sieht ein normaler Tag bei Ihnen aus?\n" +
        "5. Welchen Beruf möchten Sie in Zukunft haben?\n\nSprechen Sie mit „Sie“. Nennen Sie konkrete Beispiele.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote: "Für die Vergangenheit brauchen Sie das Perfekt („Ich habe … gearbeitet“). Verbinden Sie die Sätze mit „zuerst“, „dann“, „heute“.",
  },
  {
    ...base,
    taskType: "DTZ_SP_VORSTELLEN",
    title: "Über sich sprechen: Deutsch lernen",
    prompt: "Stellen Sie sich vor und erzählen Sie, warum und wie Sie Deutsch lernen.",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie stellen sich zu Beginn der Prüfung vor. Erzählen Sie dabei besonders von Ihrem Weg mit der deutschen Sprache.",
      instruction:
        "Sprechen Sie über sich und das Deutschlernen. Gehen Sie auf diese Punkte ein:\n" +
        "1. Wie ist Ihr Name und woher kommen Sie?\n" +
        "2. Seit wann lernen Sie Deutsch?\n" +
        "3. Wo lernen Sie — im Kurs, allein oder bei der Arbeit?\n" +
        "4. Was fällt Ihnen leicht und was ist schwer?\n" +
        "5. Warum ist Deutsch für Sie wichtig?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote: "Ehrlich sein wirkt gut: „Sprechen fällt mir leicht, aber die Grammatik ist schwer.“ Begründen Sie den letzten Punkt.",
  },
  {
    ...base,
    taskType: "DTZ_SP_VORSTELLEN",
    title: "Über sich sprechen: mein Alltag und meine Hobbys",
    prompt: "Stellen Sie sich vor und erzählen Sie von Ihrem Alltag und Ihren Hobbys.",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie stellen sich in der Prüfung vor. Der Schwerpunkt liegt heute auf Ihrem Alltag und Ihrer Freizeit.",
      instruction:
        "Erzählen Sie etwas über sich und Ihren Alltag. Gehen Sie auf diese Punkte ein:\n" +
        "1. Wie heißen Sie und woher kommen Sie?\n" +
        "2. Wie sieht ein typischer Tag bei Ihnen aus?\n" +
        "3. Was machen Sie am liebsten in Ihrer Freizeit?\n" +
        "4. Machen Sie das allein oder mit anderen?\n" +
        "5. Was möchten Sie gern einmal ausprobieren?\n\nSprechen Sie mit „Sie“. Sprechen Sie in ganzen Sätzen.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote: "Erzählen Sie Ihren Tag der Reihe nach: „Am Morgen …, am Nachmittag …, am Abend …“. Ein Beispiel macht es lebendig.",
  },
];

// ── Teil 2 — Über ein Thema sprechen (5 items) ──────────────────────────────
// A ~2-minute monologue describing a picture/situation and giving own experience
// and opinion on an everyday topic. Exactly THREE Leitpunkte each: describe, tell
// from your own life, say what you think.
const teil2Items: ExamItemInput[] = [
  {
    ...base,
    taskType: "DTZ_SP_THEMA",
    title: "Über ein Thema sprechen: Einkaufen im Supermarkt",
    prompt: "Beschreiben Sie die Situation und sprechen Sie über das Thema.",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Auf einem Foto sieht man Menschen, die in einem Supermarkt einkaufen. Eine Frau steht mit einem vollen Einkaufswagen an der Kasse und wartet in der Schlange. Ihr Thema ist „Einkaufen“.",
      instruction:
        "Sprechen Sie zusammenhängend etwa zwei Minuten. Gehen Sie auf diese drei Punkte ein:\n" +
        "1. Beschreiben Sie, was Sie auf dem Foto sehen.\n" +
        "2. Erzählen Sie: Wo und wann kaufen Sie normalerweise ein?\n" +
        "3. Sagen Sie Ihre Meinung: Kaufen Sie lieber im Geschäft oder online — warum?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Beim ersten Punkt reichen einfache Sätze: „Ich sehe …, im Hintergrund …“. Beim dritten Punkt klar Stellung nehmen.",
  },
  {
    ...base,
    taskType: "DTZ_SP_THEMA",
    title: "Über ein Thema sprechen: Mit Bus und Bahn unterwegs",
    prompt: "Beschreiben Sie die Situation und sprechen Sie über das Thema.",
    topicTag: "verkehr",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Auf einem Bild wartet eine Gruppe von Menschen an einer Haltestelle auf den Bus. Es regnet, einige haben einen Schirm. Ihr Thema ist „Unterwegs in der Stadt“.",
      instruction:
        "Sprechen Sie zusammenhängend etwa zwei Minuten. Gehen Sie auf diese drei Punkte ein:\n" +
        "1. Beschreiben Sie, was auf dem Bild passiert.\n" +
        "2. Erzählen Sie: Wie fahren Sie im Alltag — mit Bus, Bahn, Auto oder Fahrrad?\n" +
        "3. Sagen Sie Ihre Meinung: Sind Busse und Bahnen in Ihrer Stadt gut oder schlecht?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Nennen Sie ein Beispiel aus Ihrem Alltag („Ich fahre jeden Morgen …“). Begründen Sie Ihre Meinung mit einem Grund.",
  },
  {
    ...base,
    taskType: "DTZ_SP_THEMA",
    title: "Über ein Thema sprechen: Beim Arzt",
    prompt: "Beschreiben Sie die Situation und sprechen Sie über das Thema.",
    topicTag: "gesundheit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Ein Foto zeigt ein volles Wartezimmer in einer Arztpraxis. Mehrere Personen sitzen auf Stühlen und warten, eine Frau spricht mit der Person an der Anmeldung. Ihr Thema ist „Gesundheit“.",
      instruction:
        "Sprechen Sie zusammenhängend etwa zwei Minuten. Gehen Sie auf diese drei Punkte ein:\n" +
        "1. Beschreiben Sie, was Sie auf dem Foto sehen.\n" +
        "2. Erzählen Sie: Wann waren Sie zuletzt beim Arzt und warum?\n" +
        "3. Sagen Sie Ihre Meinung: Was kann man tun, um gesund zu bleiben?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Der zweite Punkt braucht die Vergangenheit („Ich war … weil ich … hatte“). Beim dritten Punkt einen Rat oder Tipp geben.",
  },
  {
    ...base,
    taskType: "DTZ_SP_THEMA",
    title: "Über ein Thema sprechen: Ein Fest feiern",
    prompt: "Beschreiben Sie die Situation und sprechen Sie über das Thema.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Auf einem Bild feiern viele Menschen zusammen ein Fest. Sie sitzen an einem langen Tisch mit Essen, einige lachen und unterhalten sich. Ihr Thema ist „Feste und Feiern“.",
      instruction:
        "Sprechen Sie zusammenhängend etwa zwei Minuten. Gehen Sie auf diese drei Punkte ein:\n" +
        "1. Beschreiben Sie, was auf dem Bild passiert.\n" +
        "2. Erzählen Sie: Welches Fest feiern Sie gern und wie?\n" +
        "3. Sagen Sie Ihre Meinung: Sind Feste heute noch wichtig — warum?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Erzählen Sie von einem konkreten Fest aus Ihrem Leben. So haben Sie genug zu sagen und decken Punkt 2 gut ab.",
  },
  {
    ...base,
    taskType: "DTZ_SP_THEMA",
    title: "Über ein Thema sprechen: Freizeit und Erholung",
    prompt: "Beschreiben Sie die Situation und sprechen Sie über das Thema.",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Ein Foto zeigt einen Park an einem sonnigen Wochenende. Menschen liegen auf der Wiese, ein paar spielen Ball, andere machen ein Picknick. Ihr Thema ist „Freizeit“.",
      instruction:
        "Sprechen Sie zusammenhängend etwa zwei Minuten. Gehen Sie auf diese drei Punkte ein:\n" +
        "1. Beschreiben Sie, was Sie auf dem Foto sehen.\n" +
        "2. Erzählen Sie: Was machen Sie am Wochenende am liebsten?\n" +
        "3. Sagen Sie Ihre Meinung: Wie wichtig ist Erholung neben der Arbeit?\n\nSprechen Sie mit „Sie“. Sprechen Sie frei.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Nutzen Sie Ortswörter beim Beschreiben: „vorne“, „hinten“, „links“, „im Hintergrund“. Beim dritten Punkt Position beziehen.",
  },
];

// ── Teil 3 — Gemeinsam etwas planen (5 items) ───────────────────────────────
// Plan something together with a partner: decide what, when, where and who. Each
// item frames BOTH sides — what the learner proposes AND what the partner brings —
// so the pair task can be practised solo. Informal "du/wir" register.
const teil3Items: ExamItemInput[] = [
  {
    ...base,
    taskType: "DTZ_SP_PLANEN",
    title: "Gemeinsam planen: ein Kursfest",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Ihr Deutschkurs ist bald zu Ende. Sie möchten mit einer anderen Person aus dem Kurs ein kleines Abschiedsfest planen. Zu klären sind der Ort, das Datum und wer was mitbringt.",
      instruction:
        "Planen Sie das Fest gemeinsam. Machen Sie Vorschläge zum Ort, zum Datum und dazu, wer Essen, Getränke oder Musik mitbringt. Reagieren Sie auf die Vorschläge Ihres Partners und einigen Sie sich am Ende. Sprechen Sie mit „du“.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Redemittel: „Wir könnten …“, „Was hältst du von …?“, „Bringst du … mit?“, „Einverstanden“ / „Vielleicht lieber …“.",
  },
  {
    ...base,
    taskType: "DTZ_SP_PLANEN",
    title: "Gemeinsam planen: einer Nachbarin helfen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    topicTag: "wohnen",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Eine ältere Nachbarin hat sich das Bein gebrochen und braucht in den nächsten Tagen Hilfe. Sie möchten mit einer anderen Person planen, wie Sie ihr helfen können. Zu klären sind die Aufgaben, die Tage und wer wann Zeit hat.",
      instruction:
        "Planen Sie die Hilfe gemeinsam. Machen Sie Vorschläge, wer einkauft, wer kocht und wer sie zum Arzt begleitet, an welchen Tagen und zu welchen Zeiten. Gehen Sie auf Ihren Partner ein und einigen Sie sich. Sprechen Sie mit „du“.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Klären Sie, wer was übernimmt: „Ich kann montags einkaufen“, „Kannst du am Dienstag kochen?“.",
  },
  {
    ...base,
    taskType: "DTZ_SP_PLANEN",
    title: "Gemeinsam planen: ein Ausflug am Wochenende",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten am Samstag mit einer anderen Person einen Ausflug machen. Zu klären sind das Ziel, die Anreise und was Sie mitnehmen.",
      instruction:
        "Planen Sie den Ausflug gemeinsam. Machen Sie Vorschläge zum Ziel, zur Anreise (Bus, Bahn oder Auto) und zum Proviant. Reagieren Sie auf die Ideen Ihres Partners und einigen Sie sich am Ende. Sprechen Sie mit „du“.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Redemittel: „Wollen wir …?“, „Ich schlage vor …“, „Gute Idee“ / „Lieber …“, „Um wie viel Uhr treffen wir uns?“.",
  },
  {
    ...base,
    taskType: "DTZ_SP_PLANEN",
    title: "Gemeinsam planen: einen Sprachkurs auswählen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie und eine andere Person möchten nach der Prüfung zusammen einen weiteren Deutschkurs besuchen. Zu klären sind die Uhrzeit (vormittags oder abends), der Wochentag und der Ort.",
      instruction:
        "Planen Sie gemeinsam. Machen Sie Vorschläge zur Uhrzeit, zum Wochentag und zum Ort. Sagen Sie, was für Sie gut passt, gehen Sie auf die Wünsche Ihres Partners ein und einigen Sie sich. Sprechen Sie mit „du“.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Nennen Sie Gründe: „Abends passt mir besser, weil ich tagsüber arbeite.“ Fragen Sie zurück: „Und wann kannst du?“.",
  },
  {
    ...base,
    taskType: "DTZ_SP_PLANEN",
    title: "Gemeinsam planen: eine Geburtstagsfeier",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Eine gemeinsame Freundin hat bald Geburtstag. Sie möchten mit einer anderen Person eine kleine Feier für sie planen. Zu klären sind der Ort, das Geschenk und wer die Gäste einlädt.",
      instruction:
        "Planen Sie die Feier gemeinsam. Machen Sie Vorschläge zum Ort, zum Geschenk und dazu, wer die Gäste einlädt. Reagieren Sie auf die Vorschläge Ihres Partners und einigen Sie sich am Ende. Sprechen Sie mit „du“.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Redemittel: „Wie wäre es, wenn wir …?“, „Ich rufe … an, und du …?“, „Das finde ich gut“ / „Das ist mir zu teuer“.",
  },
];

export const ITEMS: ExamItemInput[] = [...teil1Items, ...teil2Items, ...teil3Items];

// ── SECTION SHAPE, AS AUTHORED ──────────────────────────────────────────────
// 15 items · Teil 1 Vorstellen 5 · Teil 2 Über ein Thema 5 · Teil 3 Planen 5.
// Every Teil clears the ≥3/Aufgabe floor and the section clears the ≥15 floor.
