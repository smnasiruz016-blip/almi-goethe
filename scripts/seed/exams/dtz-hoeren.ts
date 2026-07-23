// DTZ (Deutsch-Test für Zuwanderer, A2–B1) — Hörverstehen. Original practice items.
//
// ORIGINALITY (doctrine #1): every audio script and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from real DTZ / telc / Goethe materials,
// Modellsätze, Übungstests or past papers. Same IP rule as DET vs. Duolingo.
//
// ── REGISTER: EVERYDAY / INTEGRATION LANGUAGE ───────────────────────────────
// The DTZ is an INTEGRATION exam. Its listening texts are the language of daily
// life in Germany: phone messages, radio notices, and short conversations about
// work, housing, authorities (Behörden), health, family and appointments — at an
// A2–B1 level. Authoring these in an academic register (as TestDaF) would be
// teaching the wrong exam.
//
// FOUR Teile, each with 4 items — 16 items total. The DTZ Hörverstehen has four
// distinct task shapes, and the conformance gate enforces questions.length per
// taskType EXACTLY (4 / 5 / 8 / 3):
//   Teil 1  Telefonansagen (Anrufbeantworter)   4 items × 4 questions
//   Teil 2  Radioinformationen (Durchsagen)     4 items × 5 questions
//   Teil 3  Gespräche (Alltag, 2 Sprecher)      4 items × 8 questions
//   Teil 4  Meinungsäußerungen im Radio         4 items × 3 questions
//
// No real company/brand/organisation names — generic inventions only (Stadtwerke,
// die Praxis, das Bürgeramt). Answer distribution is left natural here and permuted
// later by the caller.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.DTZ;
const base = {
  exam: "DTZ" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
};

type Opt3 = [string, string, string];
type Q = { stem: string; opts: Opt3; answer: "a" | "b" | "c" };
type HVItem = { title: string; topicTag: string; audioScript: string; qs: Q[] };

const mkQuestions = (qs: Q[]) =>
  qs.map((q, i) => ({
    id: `q${i + 1}`,
    stem: q.stem,
    options: [
      { id: "a", text: q.opts[0] },
      { id: "b", text: q.opts[1] },
      { id: "c", text: q.opts[2] },
    ],
    answer: q.answer,
  }));

// ── Teil 1 — Telefonansagen (4 items × 4 questions) ─────────────────────────
// Answering-machine messages. The listener hears one message and answers four
// short comprehension questions.
const TEIL1: HVItem[] = [
  {
    title: "Nachricht von der Zahnarztpraxis",
    topicTag: "gesundheit",
    audioScript:
      "Guten Tag, Frau Demir, hier ist die Praxis Dr. Berger. Ich rufe wegen Ihres Termins an. Sie sind für morgen, Donnerstag, um zehn Uhr eingetragen. Leider ist der Arzt morgen krank. Deshalb müssen wir den Termin verschieben. Können Sie am Montag um vierzehn Uhr kommen? Bitte bringen Sie Ihre Versichertenkarte mit und denken Sie daran, vorher nichts Süßes zu essen. Rufen Sie uns bitte kurz zurück, damit wir wissen, ob der neue Termin für Sie passt. Vielen Dank und bis bald.",
    qs: [
      {
        stem: "Warum ruft die Praxis an?",
        opts: ["Der Termin muss verschoben werden.", "Frau Demir hat einen Termin vergessen.", "Die Praxis zieht um."],
        answer: "a",
      },
      {
        stem: "Wann soll Frau Demir jetzt kommen?",
        opts: ["am Donnerstag um zehn Uhr", "am Montag um vierzehn Uhr", "am Freitag um zwölf Uhr"],
        answer: "b",
      },
      {
        stem: "Was soll Frau Demir mitbringen?",
        opts: ["ein Rezept", "ihre Versichertenkarte", "eine Überweisung"],
        answer: "b",
      },
      {
        stem: "Was soll Frau Demir tun?",
        opts: ["online einen Termin buchen", "in der Praxis vorbeikommen", "in der Praxis zurückrufen"],
        answer: "c",
      },
    ],
  },
  {
    title: "Anruf vom Vermieter",
    topicTag: "wohnen",
    audioScript:
      "Guten Morgen, Herr Osei, hier spricht Herr Lindner, Ihr Vermieter. Es geht um die Heizung im Haus. Am Mittwoch kommt zwischen acht und zwölf Uhr ein Handwerker und prüft alle Heizungen. Bitte sorgen Sie dafür, dass jemand in der Wohnung ist und ihn hereinlässt. Wenn Sie an dem Vormittag arbeiten müssen, geben Sie bitte einen Schlüssel bei der Nachbarin im Erdgeschoss ab. Der Termin dauert pro Wohnung etwa zwanzig Minuten. Bei Fragen erreichen Sie mich am besten abends. Danke und einen schönen Tag.",
    qs: [
      {
        stem: "Warum ruft Herr Lindner an?",
        opts: ["Die Miete ist noch nicht bezahlt.", "Ein Handwerker prüft die Heizungen.", "Es gibt eine neue Hausordnung."],
        answer: "b",
      },
      {
        stem: "Wann kommt der Handwerker?",
        opts: ["am Mittwochvormittag", "am Mittwochnachmittag", "am Donnerstagmorgen"],
        answer: "a",
      },
      {
        stem: "Was soll Herr Osei tun, wenn er arbeiten muss?",
        opts: ["den Termin absagen", "einen Schlüssel bei der Nachbarin abgeben", "selbst die Heizung prüfen"],
        answer: "b",
      },
      {
        stem: "Wann kann man Herrn Lindner am besten erreichen?",
        opts: ["morgens", "mittags", "abends"],
        answer: "c",
      },
    ],
  },
  {
    title: "Nachricht aus dem Kindergarten",
    topicTag: "familie",
    audioScript:
      "Hallo, Frau Kovac, hier ist Frau Weber vom Kindergarten Sonnenschein. Ich muss Ihnen etwas mitteilen: Ihrem Sohn Luka geht es nicht gut. Er hat seit dem Mittagessen Bauchschmerzen und ein bisschen Fieber. Es ist nichts Schlimmes, aber wir denken, er sollte heute nach Hause. Können Sie ihn bitte in der nächsten Stunde abholen? Wenn Sie selbst nicht kommen können, darf ihn auch eine andere Person abholen, aber sagen Sie uns bitte vorher Bescheid, wer kommt. Rufen Sie mich einfach kurz an. Danke.",
    qs: [
      {
        stem: "Warum ruft der Kindergarten an?",
        opts: ["Luka ist krank.", "Luka hat etwas vergessen.", "Der Kindergarten ist geschlossen."],
        answer: "a",
      },
      {
        stem: "Was hat Luka?",
        opts: ["Kopfschmerzen und Husten", "Bauchschmerzen und Fieber", "eine Verletzung am Knie"],
        answer: "b",
      },
      {
        stem: "Was soll Frau Kovac tun?",
        opts: ["ihren Sohn bald abholen", "einen Arzt anrufen", "am Nachmittag vorbeikommen"],
        answer: "a",
      },
      {
        stem: "Was gilt, wenn eine andere Person Luka abholt?",
        opts: ["Das ist nicht erlaubt.", "Der Kindergarten muss es vorher wissen.", "Die Person braucht einen Ausweis der Eltern."],
        answer: "b",
      },
    ],
  },
  {
    title: "Anruf von der Autowerkstatt",
    topicTag: "alltag",
    audioScript:
      "Guten Tag, Herr Bauer, hier ist die Werkstatt am Ring. Wir haben Ihr Auto heute geprüft. Die gute Nachricht ist: Der Motor ist in Ordnung. Aber die Bremsen sind nicht mehr sicher, die müssen wir wechseln. Das kostet ungefähr dreihundert Euro. Wir machen das aber erst, wenn Sie einverstanden sind. Wenn Sie zustimmen, ist das Auto morgen Nachmittag fertig. Bitte rufen Sie uns bis heute siebzehn Uhr zurück, sonst schaffen wir es nicht bis morgen. Vielen Dank.",
    qs: [
      {
        stem: "Was ist mit dem Motor?",
        opts: ["Er ist in Ordnung.", "Er muss repariert werden.", "Er muss gewechselt werden."],
        answer: "a",
      },
      {
        stem: "Welches Problem gibt es?",
        opts: ["Die Reifen sind alt.", "Die Bremsen sind nicht mehr sicher.", "Die Lichter funktionieren nicht."],
        answer: "b",
      },
      {
        stem: "Was kostet die Reparatur ungefähr?",
        opts: ["hundert Euro", "zweihundert Euro", "dreihundert Euro"],
        answer: "c",
      },
      {
        stem: "Bis wann soll Herr Bauer zurückrufen?",
        opts: ["bis heute siebzehn Uhr", "bis morgen früh", "bis übermorgen"],
        answer: "a",
      },
    ],
  },
];

// ── Teil 2 — Radioinformationen (4 items × 5 questions) ─────────────────────
// Public radio announcements: traffic, weather, utility notices, event tips.
const TEIL2: HVItem[] = [
  {
    title: "Verkehrsmeldung am Morgen",
    topicTag: "verkehr",
    audioScript:
      "Und jetzt die Verkehrsnachrichten. Auf der Autobahn Richtung Norden gibt es einen Stau von etwa fünf Kilometern, weil ein Lastwagen liegen geblieben ist. Bitte rechnen Sie mit einer halben Stunde mehr Fahrzeit. In der Innenstadt ist die Marktstraße wegen Bauarbeiten gesperrt, und zwar noch bis Ende der Woche. Fahren Sie am besten über die Bahnhofstraße. Die Buslinie sieben fällt heute leider aus; nehmen Sie stattdessen die Straßenbahn. Und ein Tipp für Radfahrer: Der Weg am Fluss ist heute wegen des Regens sehr rutschig. Fahren Sie vorsichtig.",
    qs: [
      {
        stem: "Warum gibt es einen Stau auf der Autobahn?",
        opts: ["wegen eines Unfalls", "wegen eines liegen gebliebenen Lastwagens", "wegen Bauarbeiten"],
        answer: "b",
      },
      {
        stem: "Wie viel mehr Zeit soll man einplanen?",
        opts: ["eine halbe Stunde", "eine Stunde", "zehn Minuten"],
        answer: "a",
      },
      {
        stem: "Was ist mit der Marktstraße?",
        opts: ["Sie ist sehr voll.", "Sie ist wegen Bauarbeiten gesperrt.", "Dort gibt es einen Markt."],
        answer: "b",
      },
      {
        stem: "Was sollen Fahrgäste der Buslinie sieben tun?",
        opts: ["länger warten", "die Straßenbahn nehmen", "zu Fuß gehen"],
        answer: "b",
      },
      {
        stem: "Warum sollen Radfahrer vorsichtig sein?",
        opts: ["Der Weg am Fluss ist rutschig.", "Es ist sehr dunkel.", "Es gibt viele Fußgänger."],
        answer: "a",
      },
    ],
  },
  {
    title: "Wetter und Veranstaltungstipp",
    topicTag: "freizeit",
    audioScript:
      "Zum Wetter am Wochenende: Am Samstag bleibt es meistens trocken, und die Sonne zeigt sich am Nachmittag. Am Sonntag wird es kühler, und am Abend kann es regnen. Nehmen Sie also für Sonntagabend einen Schirm mit. Und noch ein Tipp: Am Samstag findet im Stadtpark ein Familienfest statt, von zehn bis achtzehn Uhr. Der Eintritt ist frei. Für Kinder gibt es Spiele, und es werden Kuchen und Getränke verkauft. Wer möchte, kann selbst gebackenen Kuchen mitbringen. Parkplätze gibt es am Fest nur wenige, kommen Sie also am besten mit dem Fahrrad.",
    qs: [
      {
        stem: "Wie wird das Wetter am Samstag?",
        opts: ["meistens trocken", "den ganzen Tag Regen", "sehr kalt und windig"],
        answer: "a",
      },
      {
        stem: "Wann kann es regnen?",
        opts: ["am Samstagmorgen", "am Sonntagabend", "am Samstagnachmittag"],
        answer: "b",
      },
      {
        stem: "Was kostet der Eintritt zum Familienfest?",
        opts: ["fünf Euro", "nichts", "zehn Euro pro Familie"],
        answer: "b",
      },
      {
        stem: "Was kann man zum Fest mitbringen?",
        opts: ["selbst gebackenen Kuchen", "eigene Getränke", "einen Grill"],
        answer: "a",
      },
      {
        stem: "Wie soll man am besten zum Fest kommen?",
        opts: ["mit dem Auto", "mit dem Bus", "mit dem Fahrrad"],
        answer: "c",
      },
    ],
  },
  {
    title: "Durchsage der Stadtwerke",
    topicTag: "wohnen",
    audioScript:
      "Eine wichtige Information für die Bewohner der Gartenstraße von den Stadtwerken. Am kommenden Dienstag müssen wir eine Wasserleitung reparieren. Deshalb gibt es an diesem Tag von neun bis vierzehn Uhr kein Wasser in Ihren Wohnungen. Bitte füllen Sie am Montagabend Wasser in Flaschen oder Eimer, damit Sie am Dienstag genug haben. Wenn nach der Reparatur das Wasser zuerst braun ist, ist das normal. Lassen Sie es einfach ein paar Minuten laufen, bis es wieder klar ist. Trinken Sie es erst, wenn es klar ist. Wir danken Ihnen für Ihr Verständnis.",
    qs: [
      {
        stem: "Was machen die Stadtwerke am Dienstag?",
        opts: ["Sie reparieren eine Wasserleitung.", "Sie lesen die Zähler ab.", "Sie bauen eine neue Straße."],
        answer: "a",
      },
      {
        stem: "Wann gibt es kein Wasser?",
        opts: ["von neun bis vierzehn Uhr", "den ganzen Dienstag", "am Montagabend"],
        answer: "a",
      },
      {
        stem: "Was sollen die Bewohner vorher tun?",
        opts: ["das Wasser abstellen", "Wasser in Flaschen füllen", "einen Handwerker rufen"],
        answer: "b",
      },
      {
        stem: "Was ist, wenn das Wasser danach braun ist?",
        opts: ["Das ist gefährlich, man muss anrufen.", "Das ist normal, man lässt es laufen.", "Man darf das Wasser nie mehr trinken."],
        answer: "b",
      },
      {
        stem: "Wann darf man das Wasser wieder trinken?",
        opts: ["sofort nach der Reparatur", "am nächsten Tag", "wenn es klar ist"],
        answer: "c",
      },
    ],
  },
  {
    title: "Ankündigung im Lokalradio",
    topicTag: "gesellschaft",
    audioScript:
      "Liebe Hörerinnen und Hörer, das Bürgeramt informiert: Ab nächstem Monat ändern sich die Öffnungszeiten. Das Amt hat dann montags bis freitags von acht bis sechzehn Uhr geöffnet, am Samstag ist geschlossen. Neu ist auch: Sie können jetzt viele Termine online buchen. Ohne Termin müssen Sie oft lange warten. Bitte bringen Sie immer alle Dokumente mit, sonst müssen Sie noch einmal kommen. Für ältere Menschen, die keinen Computer haben, gibt es weiterhin eine Telefonnummer für die Anmeldung. Und denken Sie daran: Am kommenden Feiertag bleibt das Amt geschlossen.",
    qs: [
      {
        stem: "Was ändert sich ab nächstem Monat?",
        opts: ["die Öffnungszeiten", "die Adresse des Amtes", "die Preise für Dokumente"],
        answer: "a",
      },
      {
        stem: "Wann ist das Bürgeramt jetzt geschlossen?",
        opts: ["am Freitag", "am Samstag", "am Montag"],
        answer: "b",
      },
      {
        stem: "Was ist neu?",
        opts: ["Man kann viele Termine online buchen.", "Das Amt ist am Sonntag offen.", "Man braucht keine Dokumente mehr."],
        answer: "a",
      },
      {
        stem: "Was passiert, wenn man ohne Termin kommt?",
        opts: ["Man wird weggeschickt.", "Man muss oft lange warten.", "Man zahlt mehr Geld."],
        answer: "b",
      },
      {
        stem: "Wie können sich ältere Menschen ohne Computer anmelden?",
        opts: ["gar nicht", "nur persönlich", "per Telefon"],
        answer: "c",
      },
    ],
  },
];

// ── Teil 3 — Gespräche (4 items × 8 questions) ──────────────────────────────
// Everyday two-speaker conversations. The listener answers eight questions about
// the content of a single dialogue.
const TEIL3: HVItem[] = [
  {
    title: "Anmeldung im Bürgeramt",
    topicTag: "behoerde",
    audioScript:
      "Sachbearbeiter: Guten Tag, wie kann ich Ihnen helfen?\n" +
      "Frau Silva: Guten Tag. Ich bin vor zwei Wochen nach Deutschland gezogen und möchte mich anmelden.\n" +
      "Sachbearbeiter: Sehr gern. Dafür brauche ich Ihren Pass und die Bestätigung von Ihrem Vermieter, die Wohnungsgeberbestätigung.\n" +
      "Frau Silva: Den Pass habe ich hier. Die Bestätigung vom Vermieter habe ich leider vergessen.\n" +
      "Sachbearbeiter: Ohne diese Bestätigung kann ich die Anmeldung leider nicht machen. Sie müssen sie unbedingt mitbringen.\n" +
      "Frau Silva: Das tut mir leid. Muss ich dann einen neuen Termin machen?\n" +
      "Sachbearbeiter: Das ist nicht nötig. Sie können morgen zwischen acht und zehn Uhr ohne Termin kommen, das geht schneller.\n" +
      "Frau Silva: Gut. Kostet die Anmeldung etwas?\n" +
      "Sachbearbeiter: Nein, die Anmeldung selbst ist kostenlos. Nur wenn Sie zusätzlich eine Meldebescheinigung möchten, kostet die fünf Euro.\n" +
      "Frau Silva: Eine Meldebescheinigung brauche ich für meinen Arbeitgeber. Die nehme ich gleich mit.\n" +
      "Sachbearbeiter: In Ordnung. Bringen Sie das Geld am besten passend mit. Und noch etwas: Sie sollten sich innerhalb von zwei Wochen nach dem Umzug anmelden. Bei Ihnen ist das gerade noch rechtzeitig.\n" +
      "Frau Silva: Zum Glück. Dann komme ich morgen früh wieder. Vielen Dank.",
    qs: [
      {
        stem: "Warum kommt Frau Silva zum Bürgeramt?",
        opts: ["Sie möchte sich anmelden.", "Sie möchte einen Pass beantragen.", "Sie sucht eine Wohnung."],
        answer: "a",
      },
      {
        stem: "Welches Dokument hat Frau Silva vergessen?",
        opts: ["ihren Pass", "die Bestätigung vom Vermieter", "ihren Arbeitsvertrag"],
        answer: "b",
      },
      {
        stem: "Was sagt der Sachbearbeiter zu dem fehlenden Dokument?",
        opts: ["Es ist nicht so wichtig.", "Sie kann es später per Post schicken.", "Ohne das Dokument geht die Anmeldung nicht."],
        answer: "c",
      },
      {
        stem: "Muss Frau Silva einen neuen Termin machen?",
        opts: ["Nein, sie kann morgen ohne Termin kommen.", "Ja, in zwei Wochen.", "Ja, sie muss online buchen."],
        answer: "a",
      },
      {
        stem: "Was kostet die Anmeldung selbst?",
        opts: ["fünf Euro", "nichts", "zehn Euro"],
        answer: "b",
      },
      {
        stem: "Wofür muss Frau Silva fünf Euro bezahlen?",
        opts: ["für den Termin", "für den Pass", "für die Meldebescheinigung"],
        answer: "c",
      },
      {
        stem: "Warum braucht Frau Silva die Meldebescheinigung?",
        opts: ["für ihren Arbeitgeber", "für die Bank", "für die Schule"],
        answer: "a",
      },
      {
        stem: "Wann muss man sich nach einem Umzug anmelden?",
        opts: ["innerhalb von zwei Wochen", "innerhalb von zwei Monaten", "es gibt keine Frist"],
        answer: "a",
      },
    ],
  },
  {
    title: "Beim Hausarzt",
    topicTag: "gesundheit",
    audioScript:
      "Ärztin: Guten Tag, Herr Yilmaz. Was führt Sie zu mir?\n" +
      "Herr Yilmaz: Guten Tag. Ich habe seit drei Tagen starke Kopfschmerzen, und ich schlafe sehr schlecht.\n" +
      "Ärztin: Haben Sie auch Fieber?\n" +
      "Herr Yilmaz: Nein, Fieber habe ich nicht. Aber ich sitze bei der Arbeit den ganzen Tag am Computer.\n" +
      "Ärztin: Das könnte ein Grund sein. Wie viele Stunden schlafen Sie ungefähr in der Nacht?\n" +
      "Herr Yilmaz: In letzter Zeit nur vier oder fünf Stunden. Ich habe viel Stress im Moment.\n" +
      "Ärztin: Das ist zu wenig. Ich verschreibe Ihnen kein starkes Medikament. Ich möchte, dass Sie zuerst etwas anderes versuchen: Machen Sie jede Stunde eine kurze Pause und gehen Sie an die frische Luft.\n" +
      "Herr Yilmaz: Und wenn die Schmerzen bleiben?\n" +
      "Ärztin: Wenn es nach einer Woche nicht besser ist, kommen Sie bitte wieder. Dann machen wir eine genauere Untersuchung.\n" +
      "Herr Yilmaz: Gut. Kann ich denn arbeiten gehen?\n" +
      "Ärztin: Arbeiten können Sie. Aber trinken Sie mehr Wasser und trinken Sie weniger Kaffee, besonders am Abend.\n" +
      "Herr Yilmaz: Das mache ich. Vielen Dank, Frau Doktor.",
    qs: [
      {
        stem: "Welches Problem hat Herr Yilmaz?",
        opts: ["Kopfschmerzen und schlechten Schlaf", "Bauchschmerzen", "Husten und Fieber"],
        answer: "a",
      },
      {
        stem: "Hat Herr Yilmaz Fieber?",
        opts: ["Ja, hohes Fieber.", "Nein, kein Fieber.", "Nur am Abend."],
        answer: "b",
      },
      {
        stem: "Was macht Herr Yilmaz bei der Arbeit?",
        opts: ["Er sitzt den ganzen Tag am Computer.", "Er trägt schwere Dinge.", "Er steht die ganze Zeit."],
        answer: "a",
      },
      {
        stem: "Wie lange schläft Herr Yilmaz zurzeit?",
        opts: ["acht Stunden", "vier oder fünf Stunden", "zehn Stunden"],
        answer: "b",
      },
      {
        stem: "Was verschreibt die Ärztin?",
        opts: ["ein starkes Medikament", "gar kein starkes Medikament", "eine Spritze"],
        answer: "b",
      },
      {
        stem: "Was soll Herr Yilmaz jede Stunde tun?",
        opts: ["eine Tablette nehmen", "einen Kaffee trinken", "eine kurze Pause an der frischen Luft machen"],
        answer: "c",
      },
      {
        stem: "Wann soll er wiederkommen?",
        opts: ["wenn es nach einer Woche nicht besser ist", "morgen", "gar nicht mehr"],
        answer: "a",
      },
      {
        stem: "Was rät die Ärztin ihm noch?",
        opts: ["mehr Kaffee zu trinken", "weniger Wasser zu trinken", "weniger Kaffee zu trinken"],
        answer: "c",
      },
    ],
  },
  {
    title: "Ein Gespräch mit der Chefin",
    topicTag: "arbeit",
    audioScript:
      "Frau Klein: Herr Adawe, haben Sie kurz Zeit? Ich möchte mit Ihnen über Ihre Arbeitszeit sprechen.\n" +
      "Herr Adawe: Natürlich, Frau Klein. Gibt es ein Problem?\n" +
      "Frau Klein: Nein, gar nicht. Im Gegenteil, ich bin sehr zufrieden mit Ihrer Arbeit. Aber ab nächstem Monat brauchen wir jemanden, der auch am Samstag arbeitet. Wäre das für Sie möglich?\n" +
      "Herr Adawe: An welchem Samstag denn?\n" +
      "Frau Klein: Nicht jeden Samstag. Nur zweimal im Monat, jeweils von acht bis dreizehn Uhr.\n" +
      "Herr Adawe: Das könnte gehen. Aber am Samstagvormittag bringe ich sonst meine Tochter zum Sport. Kann ich das mit einem Kollegen tauschen?\n" +
      "Frau Klein: Ja, das ist kein Problem. Sie können die Samstage mit Herrn Petrov absprechen. Als Ausgleich bekommen Sie dann einen freien Nachmittag in der Woche.\n" +
      "Herr Adawe: Das klingt fair. Bekomme ich für die Samstagsarbeit auch mehr Geld?\n" +
      "Frau Klein: Ja, für den Samstag gibt es einen Zuschlag von zwanzig Prozent.\n" +
      "Herr Adawe: Gut, dann bin ich einverstanden. Ab wann geht es los?\n" +
      "Frau Klein: Ab dem ersten des nächsten Monats. Ich schreibe Ihnen die genauen Tage noch per E-Mail.\n" +
      "Herr Adawe: Danke, Frau Klein.",
    qs: [
      {
        stem: "Worüber möchte Frau Klein sprechen?",
        opts: ["über die Arbeitszeit von Herrn Adawe", "über einen Fehler bei der Arbeit", "über seinen Urlaub"],
        answer: "a",
      },
      {
        stem: "Ist Frau Klein mit der Arbeit von Herrn Adawe zufrieden?",
        opts: ["Nein, gar nicht.", "Ja, sehr.", "Nur teilweise."],
        answer: "b",
      },
      {
        stem: "Wie oft soll Herr Adawe samstags arbeiten?",
        opts: ["jeden Samstag", "zweimal im Monat", "einmal in der Woche"],
        answer: "b",
      },
      {
        stem: "Warum ist der Samstagvormittag für Herrn Adawe schwierig?",
        opts: ["Er bringt seine Tochter zum Sport.", "Er arbeitet dann woanders.", "Er schläft dann lange."],
        answer: "a",
      },
      {
        stem: "Wie kann Herr Adawe das Problem lösen?",
        opts: ["Er sagt die Arbeit ab.", "Er tauscht mit einem Kollegen.", "Er nimmt seine Tochter mit."],
        answer: "b",
      },
      {
        stem: "Was bekommt Herr Adawe als Ausgleich?",
        opts: ["einen freien Nachmittag in der Woche", "einen ganzen freien Tag", "mehr Urlaub"],
        answer: "a",
      },
      {
        stem: "Wie viel Zuschlag gibt es für die Samstagsarbeit?",
        opts: ["zehn Prozent", "fünfzig Prozent", "zwanzig Prozent"],
        answer: "c",
      },
      {
        stem: "Wie erfährt Herr Adawe die genauen Tage?",
        opts: ["per E-Mail", "am Telefon", "auf einem Zettel"],
        answer: "a",
      },
    ],
  },
  {
    title: "Eine Wohnung besichtigen",
    topicTag: "wohnen",
    audioScript:
      "Vermieterin: Guten Tag, Sie sind sicher Familie Nguyen wegen der Wohnung?\n" +
      "Herr Nguyen: Ja, genau. Vielen Dank, dass wir sie ansehen dürfen.\n" +
      "Vermieterin: Gern. Also, die Wohnung hat drei Zimmer, eine Küche und ein Bad. Sie liegt im zweiten Stock, leider ohne Aufzug.\n" +
      "Herr Nguyen: Das ist kein Problem, wir sind noch jung. Wie hoch ist die Miete?\n" +
      "Vermieterin: Die Kaltmiete beträgt siebenhundert Euro. Dazu kommen hundertfünfzig Euro Nebenkosten, also insgesamt achthundertfünfzig.\n" +
      "Herr Nguyen: Und ist die Küche schon da?\n" +
      "Vermieterin: Ja, die Küche bleibt drin, die müssen Sie nicht kaufen. Nur die Lampen müssen Sie selbst mitbringen.\n" +
      "Herr Nguyen: Gut. Wir haben zwei Kinder. Gibt es hier in der Nähe eine Schule?\n" +
      "Vermieterin: Ja, die Schule ist nur fünf Minuten zu Fuß entfernt, und ein Supermarkt ist auch gleich um die Ecke.\n" +
      "Herr Nguyen: Das ist perfekt. Dürfen wir auch ein Haustier halten? Wir haben eine kleine Katze.\n" +
      "Vermieterin: Eine Katze ist in Ordnung. Nur einen Hund möchte ich nicht.\n" +
      "Herr Nguyen: Kein Problem. Wann könnten wir denn einziehen?\n" +
      "Vermieterin: Ab dem ersten nächsten Monats ist die Wohnung frei. Überlegen Sie in Ruhe und sagen Sie mir bis Freitag Bescheid.",
    qs: [
      {
        stem: "Wie viele Zimmer hat die Wohnung?",
        opts: ["zwei", "drei", "vier"],
        answer: "b",
      },
      {
        stem: "In welchem Stock liegt die Wohnung?",
        opts: ["im Erdgeschoss", "im ersten Stock", "im zweiten Stock"],
        answer: "c",
      },
      {
        stem: "Wie hoch ist die Miete insgesamt?",
        opts: ["siebenhundert Euro", "achthundertfünfzig Euro", "hundertfünfzig Euro"],
        answer: "b",
      },
      {
        stem: "Was ist mit der Küche?",
        opts: ["Sie bleibt in der Wohnung.", "Sie muss gekauft werden.", "Es gibt keine Küche."],
        answer: "a",
      },
      {
        stem: "Was muss die Familie selbst mitbringen?",
        opts: ["einen Herd", "die Lampen", "einen Kühlschrank"],
        answer: "b",
      },
      {
        stem: "Wie weit ist die Schule entfernt?",
        opts: ["fünf Minuten zu Fuß", "zwanzig Minuten mit dem Bus", "eine halbe Stunde"],
        answer: "a",
      },
      {
        stem: "Welches Haustier ist erlaubt?",
        opts: ["ein Hund", "kein Tier", "eine Katze"],
        answer: "c",
      },
      {
        stem: "Bis wann soll die Familie Bescheid geben?",
        opts: ["bis Freitag", "bis nächsten Monat", "sofort"],
        answer: "a",
      },
    ],
  },
];

// ── Teil 4 — Meinungsäußerungen im Radio (4 items × 3 questions) ────────────
// Three people give their opinion on a topic in a short radio survey. Each of the
// three questions asks what one speaker thinks.
const TEIL4: HVItem[] = [
  {
    title: "Umfrage: Handys am Arbeitsplatz",
    topicTag: "arbeit",
    audioScript:
      "Heute haben wir Menschen auf der Straße gefragt: Was halten Sie von privaten Handys am Arbeitsplatz?\n\n" +
      "Person 1 (Frau Roth): Ich finde das völlig in Ordnung. In der Pause darf jeder machen, was er will. Nur während der Arbeit sollte das Handy in der Tasche bleiben, das ist doch klar.\n\n" +
      "Person 2 (Herr Kaya): Mich stört das sehr. Meine Kollegen schauen alle fünf Minuten auf ihr Handy, auch bei der Arbeit. Dadurch machen sie mehr Fehler, und ich muss oft ihre Arbeit noch einmal machen.\n\n" +
      "Person 3 (Frau Berg): Für mich ist das Handy wichtig, weil mein Sohn klein ist. Der Kindergarten muss mich immer erreichen können. Deshalb habe ich mein Handy immer dabei, aber nur für Notfälle.",
    qs: [
      {
        stem: "Was meint Frau Roth?",
        opts: [
          "In der Pause ist das Handy in Ordnung, bei der Arbeit nicht.",
          "Handys sollten ganz verboten sein.",
          "Man darf immer auf das Handy schauen.",
        ],
        answer: "a",
      },
      {
        stem: "Warum stört das Handy Herrn Kaya?",
        opts: [
          "Es ist zu laut im Büro.",
          "Seine Kollegen machen dadurch mehr Fehler.",
          "Er hat selbst kein Handy.",
        ],
        answer: "b",
      },
      {
        stem: "Warum ist das Handy für Frau Berg wichtig?",
        opts: [
          "Sie telefoniert gern mit Freundinnen.",
          "Sie braucht es für die Arbeit.",
          "Der Kindergarten muss sie erreichen können.",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Umfrage: Einkaufen im Internet",
    topicTag: "alltag",
    audioScript:
      "Unsere Frage heute: Kaufen Sie lieber im Internet oder im Geschäft ein?\n\n" +
      "Person 1 (Herr Lopez): Ich kaufe fast alles im Internet. Ich habe wenig Zeit, und die Sachen kommen einfach nach Hause. Das ist für mich sehr praktisch, besonders bei schweren Dingen wie Getränken.\n\n" +
      "Person 2 (Frau Weiss): Ich gehe lieber ins Geschäft. Ich möchte die Sachen anfassen und sehen, bevor ich sie kaufe. Bei Kleidung passt die Größe im Internet oft nicht, und das Zurückschicken finde ich anstrengend.\n\n" +
      "Person 3 (Herr Ahmadi): Ich mache beides. Lebensmittel kaufe ich im Geschäft um die Ecke, weil ich dabei die Verkäufer kenne und gern ein bisschen rede. Aber Bücher und Technik bestelle ich im Internet, weil es dort billiger ist.",
    qs: [
      {
        stem: "Warum kauft Herr Lopez im Internet ein?",
        opts: [
          "Es ist billiger.",
          "Es ist praktisch und spart Zeit.",
          "Er mag keine Geschäfte.",
        ],
        answer: "b",
      },
      {
        stem: "Warum geht Frau Weiss lieber ins Geschäft?",
        opts: [
          "Sie möchte die Sachen vorher anfassen und sehen.",
          "Sie hat keinen Computer.",
          "Im Geschäft ist alles günstiger.",
        ],
        answer: "a",
      },
      {
        stem: "Was macht Herr Ahmadi?",
        opts: [
          "Er kauft nur im Geschäft ein.",
          "Er kauft nur im Internet ein.",
          "Er kauft mal so und mal so ein.",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Umfrage: Auto oder Fahrrad in der Stadt",
    topicTag: "verkehr",
    audioScript:
      "Wir wollten wissen: Wie kommen Sie am liebsten durch die Stadt?\n\n" +
      "Person 1 (Frau Sahin): Ich fahre am liebsten Fahrrad. Es ist gesund, kostet nichts und ich stehe nie im Stau. Nur wenn es stark regnet, nehme ich den Bus.\n\n" +
      "Person 2 (Herr Möller): Ohne Auto geht es bei mir nicht. Ich arbeite außerhalb der Stadt, und dorthin fährt kein Bus. Mit dem Fahrrad würde ich über eine Stunde brauchen, das ist zu weit.\n\n" +
      "Person 3 (Frau Petrova): Ich nutze meistens Bus und Bahn. Ein Auto ist mir zu teuer, und einen Parkplatz zu finden dauert ewig. Mit dem Ticket kann ich unterwegs lesen, das gefällt mir.",
    qs: [
      {
        stem: "Warum fährt Frau Sahin gern Fahrrad?",
        opts: [
          "Es ist schneller als das Auto.",
          "Es ist gesund und kostet nichts.",
          "Sie hat kein Geld für den Bus.",
        ],
        answer: "b",
      },
      {
        stem: "Warum braucht Herr Möller ein Auto?",
        opts: [
          "Er arbeitet außerhalb der Stadt, wo kein Bus fährt.",
          "Er fährt nicht gern Fahrrad.",
          "Er transportiert schwere Sachen.",
        ],
        answer: "a",
      },
      {
        stem: "Was gefällt Frau Petrova an Bus und Bahn?",
        opts: [
          "Sie ist damit immer pünktlich.",
          "Sie trifft dort ihre Freunde.",
          "Sie kann unterwegs lesen.",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Umfrage: Arbeiten im Homeoffice",
    topicTag: "arbeit",
    audioScript:
      "Immer mehr Menschen arbeiten von zu Hause. Wir haben gefragt: Wie gefällt Ihnen das Homeoffice?\n\n" +
      "Person 1 (Herr Diallo): Mir gefällt es sehr gut. Ich spare jeden Tag zwei Stunden, weil ich nicht mehr zur Arbeit fahren muss. Diese Zeit verbringe ich jetzt mit meinen Kindern.\n\n" +
      "Person 2 (Frau Schulz): Am Anfang fand ich es toll, aber jetzt fehlen mir die Kollegen. Zu Hause bin ich oft allein und rede den ganzen Tag mit niemandem. Das macht mich manchmal traurig.\n\n" +
      "Person 3 (Herr Novak): Für mich ist es schwierig. Meine Wohnung ist klein, und meine Kinder sind laut. Ich kann mich zu Hause einfach nicht gut konzentrieren. Im Büro arbeite ich viel besser.",
    qs: [
      {
        stem: "Was gefällt Herrn Diallo am Homeoffice?",
        opts: [
          "Er verdient mehr Geld.",
          "Er spart Zeit und ist mehr bei seinen Kindern.",
          "Er hat eine große Wohnung.",
        ],
        answer: "b",
      },
      {
        stem: "Was ist für Frau Schulz das Problem?",
        opts: [
          "Ihr fehlen die Kollegen und sie ist oft allein.",
          "Ihre Technik funktioniert nicht.",
          "Sie hat zu viel Arbeit.",
        ],
        answer: "a",
      },
      {
        stem: "Warum ist das Homeoffice für Herrn Novak schwierig?",
        opts: [
          "Er hat kein Internet.",
          "Er mag seine Kollegen nicht.",
          "Seine Wohnung ist klein und die Kinder sind laut.",
        ],
        answer: "c",
      },
    ],
  },
];

const teil1Items: ExamItemInput[] = TEIL1.map((t) => ({
  ...base,
  taskType: "DTZ_HV_TEIL1",
  title: t.title,
  prompt: "Sie hören eine Nachricht auf dem Anrufbeantworter. Beantworten Sie die vier Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

const teil2Items: ExamItemInput[] = TEIL2.map((t) => ({
  ...base,
  taskType: "DTZ_HV_TEIL2",
  title: t.title,
  prompt: "Sie hören eine Information im Radio. Beantworten Sie die fünf Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

const teil3Items: ExamItemInput[] = TEIL3.map((t) => ({
  ...base,
  taskType: "DTZ_HV_TEIL3",
  title: t.title,
  prompt: "Sie hören ein Gespräch zwischen zwei Personen. Beantworten Sie die acht Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

const teil4Items: ExamItemInput[] = TEIL4.map((t) => ({
  ...base,
  taskType: "DTZ_HV_TEIL4",
  title: t.title,
  prompt: "Sie hören im Radio drei Personen zu einem Thema. Beantworten Sie die drei Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

// Distribute the 3-option MC keys deterministically (see ./_permute.ts and the
// answer-distribution gate, which enforces DTZ as a structured exam): no option
// dead or clustered, no within-item uniform run. Correctness is untouched.
export const ITEMS: ExamItemInput[] = deGame(
  [...teil1Items, ...teil2Items, ...teil3Items, ...teil4Items],
  { permuteMC: new Set(["DTZ_HV_TEIL1", "DTZ_HV_TEIL2", "DTZ_HV_TEIL3", "DTZ_HV_TEIL4"]) },
);
