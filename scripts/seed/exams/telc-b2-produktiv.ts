// telc Deutsch B2 — Schriftlicher Ausdruck (Brief) and Sprechen (Teile 1–3).
//
// ── WHY BOTH SECTIONS WERE RE-AUTHORED, NOT RE-TAGGED ──────────────────────
// The previous B2 productive bank was the WRONG EXAM'S SHAPES wearing telc keys:
//   · TELC_B2_SA_OPINION  — 16 Forumsbeiträge (opinion + two arguments + counter-
//     argument). That is the Goethe B2 writing task. telc B2's Schriftlicher
//     Ausdruck is a BRIEF with Leitpunkte, offered as one of two Themen.
//   · TELC_B2_SP_PRESENT  — 16 "Präsentieren Sie das Thema strukturiert, nennen Sie
//     Vor- und Nachteile". That is the Goethe B2 Präsentation. telc's oral is three
//     Teile: über Erfahrungen sprechen · Diskussion · gemeinsam etwas planen.
// Relabelling either would be the almi-swiss defect exactly — a surface that is a
// different exam, passing every gate because the key it carries is valid. Both are
// deactivated (never deleted) and replaced here.
//
// CORROBORATION, and its limit: I do not have the telc B2 oral handbook. What
// supports the three-Teil shape is (a) the founder's sourced cell list, and (b) this
// repo's INDEPENDENTLY sourced telc B1 structure, whose oral is
// Kontaktaufnahme / Über ein Thema sprechen / Gemeinsam etwas planen — the same telc
// family one level down. The old items match neither. Where a figure is not sourced
// it is marked as convention below rather than asserted.
//
// ── THE 1-OF-2 CHOICE IS THE TASK, NOT A GARNISH ───────────────────────────
// telc offers two Themen and the candidate picks one. Serving a single prompt
// silently removes half the task, so each item carries BOTH, in payload.themen —
// a field that had to be declared in productivePayloadSchema, because
// registry.ts:228 parses productive payloads and Zod drops undeclared keys. That is
// the third time this trap has appeared (segments, bank, themen).
//
// ⚠️ CONVENTION, NOT SOURCED: the ~150-word envelope (130–180 here) and the oral
// prep/speak seconds. The telc B2 Handbuch figures we DO have are the weights and
// the pass rule, both recorded in docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md
// and untouched by this file.
//
// NO FABRICATION: every scenario uses generic entities — die Firma, das Amt, die
// Nachbarin, der Verein, die Hausverwaltung, der Sprachkurs. No real company,
// authority, publication or person is named anywhere, and no prices, addresses or
// phone numbers are invented.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B2;

const WORD_MIN = 130;
const WORD_MAX = 180;

type Thema = { label: string; situation: string; leitpunkte: string[] };

function brief(title: string, rahmen: string, a: Thema, b: Thema): ExamItemInput {
  for (const t of [a, b]) {
    if (t.leitpunkte.length < 3 || t.leitpunkte.length > 4) {
      throw new Error(`${title} / ${t.label}: telc gives 3–4 Leitpunkte, got ${t.leitpunkte.length}`);
    }
  }
  return {
    exam: "TELC_B2" as const,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    difficulty: "CORE" as const,
    taskType: "TELC_B2_SA_BRIEF",
    title,
    prompt: "Wählen Sie eines der beiden Themen und schreiben Sie einen Brief.",
    topicTag: "schreiben",
    timeLimitSeconds: 1800,
    payload: {
      situation: rahmen,
      instruction:
        `Wählen Sie EIN Thema. Schreiben Sie einen zusammenhängenden, höflich-formellen Brief von etwa ${WORD_MIN}–${WORD_MAX} Wörtern. ` +
        "Gehen Sie auf ALLE Leitpunkte des gewählten Themas ein, achten Sie auf Anrede und Gruß und auf eine klare Gliederung.",
      themen: [a, b],
      wordMin: WORD_MIN,
      wordMax: WORD_MAX,
    },
  };
}

function oral(teil: 1 | 2 | 3, title: string, situation: string, instruction: string, prep: number, speak: number): ExamItemInput {
  return {
    exam: "TELC_B2" as const,
    level: L,
    section: SECTION.SPRECHEN,
    difficulty: "CORE" as const,
    taskType: `TELC_B2_SP_T${teil}`,
    title,
    prompt:
      teil === 1
        ? "Teil 1 — Sprechen Sie über Ihre eigenen Erfahrungen."
        : teil === 2
          ? "Teil 2 — Diskutieren Sie das Thema."
          : "Teil 3 — Planen Sie gemeinsam.",
    topicTag: "sprechen",
    timeLimitSeconds: prep + speak + 60,
    payload: { situation, instruction, prepSeconds: prep, speakSeconds: speak },
  };
}

// ── SCHRIFTLICHER AUSDRUCK — 16 Briefe, je 2 Themen ────────────────────────
const SA: ExamItemInput[] = [
  brief("Brief: Kurs und Lieferung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Beschwerde über einen Sprachkurs",
      situation: "Sie haben einen Abendkurs bei einer Sprachschule gebucht. Der Unterricht beginnt regelmäßig zu spät, die Gruppe ist größer als angekündigt, und der versprochene Zugang zum Online-Material funktioniert nicht.",
      leitpunkte: ["Grund Ihres Schreibens und wann Sie den Kurs gebucht haben", "was konkret nicht so ist wie angekündigt", "welche Folgen das für Sie hat", "was Sie von der Schule erwarten"] },
    { label: "Thema 2 — Nachfrage zu einer verspäteten Lieferung",
      situation: "Sie haben in einem Online-Shop einen Schreibtisch bestellt. Der zugesagte Liefertermin ist seit zwei Wochen verstrichen, auf Ihre E-Mail kam keine Antwort.",
      leitpunkte: ["worauf Sie sich beziehen und wann Sie bestellt haben", "wie oft und wie Sie bereits Kontakt aufgenommen haben", "warum die Verzögerung für Sie ein Problem ist", "welche Lösung Sie vorschlagen"] }),

  brief("Brief: Nachbarschaft und Verein",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Bitte an die Hausverwaltung",
      situation: "In Ihrem Haus ist der Fahrradkeller seit Monaten überfüllt, und die Beleuchtung im Treppenhaus fällt abends häufig aus.",
      leitpunkte: ["wer Sie sind und seit wann Sie im Haus wohnen", "welche zwei Probleme Sie beschreiben möchten", "warum eine schnelle Lösung wichtig ist", "welchen Vorschlag Sie machen"] },
    { label: "Thema 2 — Anfrage an einen Verein",
      situation: "Sie möchten in einem Sportverein mit dem Training beginnen, finden auf der Aushangtafel aber nur wenige Informationen.",
      leitpunkte: ["wie Sie auf den Verein aufmerksam geworden sind", "welche Erfahrung Sie mitbringen", "welche drei Fragen Sie haben", "wann Sie erreichbar sind"] }),

  brief("Brief: Arbeitsplatz und Weiterbildung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Antrag auf Bildungsurlaub",
      situation: "Sie arbeiten in einer Firma und möchten an einer einwöchigen Weiterbildung teilnehmen. Ihre Führungskraft hat um einen schriftlichen Antrag gebeten.",
      leitpunkte: ["worum Sie bitten und für welchen Zeitraum", "welchen Kurs Sie besuchen möchten", "welchen Nutzen der Kurs für Ihre Arbeit hat", "wie Ihre Vertretung geregelt werden kann"] },
    { label: "Thema 2 — Bitte um ein Zwischenzeugnis",
      situation: "Sie arbeiten seit vier Jahren in einer Firma und benötigen für eine Bewerbung ein Zwischenzeugnis.",
      leitpunkte: ["warum Sie schreiben und seit wann Sie in der Firma sind", "wofür Sie das Zeugnis brauchen", "welche Aufgaben besonders erwähnt werden sollten", "bis wann Sie es benötigen"] }),

  brief("Brief: Amt und Versicherung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Widerspruch gegen einen Bescheid",
      situation: "Sie haben vom Amt einen Bescheid erhalten, in dem eine von Ihnen eingereichte Unterlage nicht berücksichtigt wurde.",
      leitpunkte: ["auf welchen Bescheid Sie sich beziehen", "welche Unterlage fehlt und wann Sie sie eingereicht haben", "warum das Ergebnis dadurch falsch ist", "worum Sie bitten"] },
    { label: "Thema 2 — Kündigung eines Vertrags",
      situation: "Sie möchten einen Vertrag zum nächstmöglichen Termin kündigen und eine schriftliche Bestätigung erhalten.",
      leitpunkte: ["welchen Vertrag Sie kündigen und seit wann er läuft", "zu welchem Termin die Kündigung gelten soll", "warum Sie kündigen", "was Sie als Bestätigung erwarten"] }),

  brief("Brief: Reise und Unterkunft",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Beschwerde nach einem Aufenthalt",
      situation: "Sie haben eine Woche in einer Ferienwohnung verbracht. Die Wohnung war bei der Ankunft nicht gereinigt, und die Heizung funktionierte nur teilweise.",
      leitpunkte: ["wann und wie lange Sie dort waren", "was nicht in Ordnung war", "wie vor Ort reagiert wurde", "was Sie jetzt erwarten"] },
    { label: "Thema 2 — Anfrage vor einer Buchung",
      situation: "Sie planen mit einer kleinen Gruppe eine Woche Urlaub und haben eine Unterkunft gefunden, zu der die Angaben unvollständig sind.",
      leitpunkte: ["wann Sie kommen möchten und mit wie vielen Personen", "welche drei Dinge Sie klären möchten", "welche besondere Anforderung Sie haben", "bis wann Sie eine Antwort benötigen"] }),

  brief("Brief: Schule und Betreuung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Bitte um ein Gespräch",
      situation: "Ihr Kind hat in der Schule seit einiger Zeit Schwierigkeiten, und Sie möchten mit der Klassenleitung sprechen.",
      leitpunkte: ["warum Sie schreiben", "was Ihnen aufgefallen ist", "was Sie selbst schon versucht haben", "welche Termine Ihnen möglich sind"] },
    { label: "Thema 2 — Anmeldung zu einem Ferienprogramm",
      situation: "Die Stadt bietet ein Ferienprogramm an. Sie möchten Ihr Kind anmelden und haben Rückfragen.",
      leitpunkte: ["wen Sie anmelden möchten und für welchen Zeitraum", "welche Angaben Sie zu Ihrem Kind machen möchten", "welche zwei Fragen Sie zum Ablauf haben", "wie Sie erreichbar sind"] }),

  brief("Brief: Handwerk und Reparatur",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Mangel nach einer Reparatur",
      situation: "Eine Werkstatt hat Ihr Gerät repariert. Nach zwei Wochen tritt derselbe Fehler wieder auf.",
      leitpunkte: ["worum es geht und wann repariert wurde", "welcher Fehler erneut auftritt", "was Ihnen damals zugesagt wurde", "was Sie jetzt verlangen"] },
    { label: "Thema 2 — Anfrage für einen Kostenvoranschlag",
      situation: "In Ihrer Wohnung sollen die Fenster abgedichtet werden. Sie möchten vorher wissen, was das kostet.",
      leitpunkte: ["was gemacht werden soll", "wie viele Fenster betroffen sind", "welche zwei Fragen Sie zur Ausführung haben", "wann ein Termin möglich wäre"] }),

  brief("Brief: Bank und Abrechnung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Rückfrage zu einer Abrechnung",
      situation: "Sie haben eine Jahresabrechnung erhalten, in der ein Posten deutlich höher ist als im Vorjahr.",
      leitpunkte: ["auf welche Abrechnung Sie sich beziehen", "welcher Posten Ihnen auffällt", "welche Erklärung Sie erwarten", "bis wann Sie eine Antwort benötigen"] },
    { label: "Thema 2 — Mitteilung einer Adressänderung",
      situation: "Sie sind umgezogen und möchten sicherstellen, dass Ihre Unterlagen künftig richtig zugestellt werden.",
      leitpunkte: ["was sich geändert hat und ab wann", "welche Unterlagen betroffen sind", "worum Sie bitten", "wie Sie erreichbar sind"] }),

  brief("Brief: Ehrenamt und Nachbarschaftshilfe",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Angebot zur Mitarbeit",
      situation: "Eine Nachbarschaftsinitiative sucht Menschen, die regelmäßig ein paar Stunden helfen.",
      leitpunkte: ["wie Sie von der Initiative erfahren haben", "wie viel Zeit Sie anbieten können", "welche Erfahrung Sie mitbringen", "was Sie noch wissen möchten"] },
    { label: "Thema 2 — Absage einer Zusage",
      situation: "Sie hatten zugesagt, bei einem Fest zu helfen, können den Termin aber aus beruflichen Gründen nicht halten.",
      leitpunkte: ["worauf Sie sich beziehen", "warum Sie absagen müssen", "wie Sie den Ausfall ausgleichen möchten", "wie es weitergehen kann"] }),

  brief("Brief: Umzug und Wohnung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Bitte um eine Mietbescheinigung",
      situation: "Sie brauchen für eine Behörde eine Bescheinigung Ihrer Vermieterin über Ihr Mietverhältnis.",
      leitpunkte: ["wofür Sie die Bescheinigung brauchen", "welche Angaben darauf stehen müssen", "bis wann Sie sie benötigen", "wie Sie sie erhalten möchten"] },
    { label: "Thema 2 — Anzeige eines Schadens",
      situation: "In Ihrer Wohnung hat sich nach starkem Regen an der Decke ein feuchter Fleck gebildet.",
      leitpunkte: ["was passiert ist und wann Sie es bemerkt haben", "wie groß der Schaden ist", "was Sie bereits unternommen haben", "worum Sie bitten"] }),

  brief("Brief: Gesundheit und Termine",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Bitte um einen früheren Termin",
      situation: "Sie haben einen Termin in einer Praxis erhalten, der erst in vier Monaten liegt.",
      leitpunkte: ["welchen Termin Sie haben", "warum Sie einen früheren Termin brauchen", "wann Sie kurzfristig könnten", "worum Sie bitten"] },
    { label: "Thema 2 — Rückfrage zu einem Kursangebot",
      situation: "Eine Einrichtung bietet einen Gesundheitskurs an; die Angaben zu Ablauf und Kosten sind unklar.",
      leitpunkte: ["woher Sie das Angebot kennen", "welche drei Punkte unklar sind", "welche Zeiten Ihnen passen", "wie Sie erreichbar sind"] }),

  brief("Brief: Technik und Verträge",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Störung melden",
      situation: "Ihr Internetanschluss fällt seit zwei Wochen täglich mehrmals aus. Sie arbeiten teilweise von zu Hause.",
      leitpunkte: ["seit wann die Störung besteht", "wie sie sich äußert", "warum sie Sie besonders trifft", "was Sie erwarten"] },
    { label: "Thema 2 — Widerruf einer Bestellung",
      situation: "Sie haben ein Gerät bestellt und möchten die Bestellung fristgerecht widerrufen.",
      leitpunkte: ["worauf Sie sich beziehen", "dass und warum Sie widerrufen", "wie Sie die Rücksendung planen", "was Sie zur Erstattung erwarten"] }),

  brief("Brief: Bewerbung und Praktikum",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Anfrage zu einem Praktikumsplatz",
      situation: "Sie möchten in einem Betrieb ein mehrwöchiges Praktikum machen; ausgeschrieben ist nichts.",
      leitpunkte: ["wer Sie sind und was Sie derzeit machen", "warum Sie sich für diesen Betrieb interessieren", "welchen Zeitraum Sie vorschlagen", "was Sie beilegen"] },
    { label: "Thema 2 — Nachfrage zu einer Bewerbung",
      situation: "Sie haben sich vor sechs Wochen beworben und bisher keine Antwort erhalten.",
      leitpunkte: ["worauf Sie sich beziehen", "warum Sie nachfragen", "dass Sie weiterhin interessiert sind", "worum Sie bitten"] }),

  brief("Brief: Kultur und Veranstaltung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Vorschlag an eine Einrichtung",
      situation: "In Ihrem Stadtteil gibt es kaum Angebote für Jugendliche am Wochenende. Sie möchten der Einrichtung einen Vorschlag machen.",
      leitpunkte: ["was Sie beobachtet haben", "welchen Vorschlag Sie machen", "wer davon profitieren würde", "wie Sie selbst mitwirken könnten"] },
    { label: "Thema 2 — Reklamation nach einer Veranstaltung",
      situation: "Sie haben Karten für eine Veranstaltung gekauft, die kurzfristig in einen viel kleineren Raum verlegt wurde.",
      leitpunkte: ["welche Veranstaltung Sie besucht haben", "was anders war als angekündigt", "wie sich das auf Ihren Abend ausgewirkt hat", "was Sie erwarten"] }),

  brief("Brief: Verkehr und Mobilität",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Beschwerde über eine Buslinie",
      situation: "Die Buslinie zu Ihrem Arbeitsplatz fällt seit Wochen mehrmals pro Woche aus.",
      leitpunkte: ["welche Linie und welche Zeiten betroffen sind", "wie oft es vorkommt", "welche Folgen das für Sie hat", "welchen Vorschlag Sie machen"] },
    { label: "Thema 2 — Antrag auf einen Stellplatz",
      situation: "Sie möchten in Ihrer Straße einen Stellplatz für Ihr Fahrrad beantragen.",
      leitpunkte: ["worum Sie bitten", "warum der Bedarf besteht", "welchen Ort Sie vorschlagen", "was Sie zur Umsetzung beitragen können"] }),

  brief("Brief: Sprachkurs und Prüfung",
    "Sie schreiben einen halbformellen Brief. Wählen Sie eines der beiden Themen.",
    { label: "Thema 1 — Bitte um Verschiebung eines Prüfungstermins",
      situation: "Sie sind zu einer Prüfung angemeldet, können den Termin aber aus einem wichtigen Grund nicht wahrnehmen.",
      leitpunkte: ["zu welcher Prüfung Sie angemeldet sind", "warum Sie den Termin nicht wahrnehmen können", "welchen Ersatztermin Sie vorschlagen", "welche Nachweise Sie einreichen können"] },
    { label: "Thema 2 — Rückmeldung zu einem Kurs",
      situation: "Sie haben einen Kurs beendet und wurden um eine schriftliche Rückmeldung gebeten.",
      leitpunkte: ["welchen Kurs Sie besucht haben", "was Ihnen gut gefallen hat", "was Sie verbessern würden", "ob Sie den Kurs weiterempfehlen"] }),
];

// ── SPRECHEN — 16 Aufgaben über die drei Teile ─────────────────────────────
// Convention (NOT sourced): Teil 1 90s speak · Teil 2 120s · Teil 3 150s, prep 60s.
const SP: ExamItemInput[] = [
  // Teil 1 — über eigene Erfahrungen sprechen (6)
  oral(1, "Erfahrungen: Arbeiten oder Lernen an einem neuen Ort", "Sie sprechen über eigene Erfahrungen.", "Berichten Sie: Wie war es für Sie, an einem neuen Ort zu arbeiten oder zu lernen? Was war am Anfang ungewohnt, was hat geholfen, und was würden Sie heute anders machen?", 60, 90),
  oral(1, "Erfahrungen: Umgang mit Behörden", "Sie sprechen über eigene Erfahrungen.", "Berichten Sie von einem Termin bei einem Amt oder einer Behörde: Worum ging es, wie haben Sie sich vorbereitet, und was hat den Ablauf leicht oder schwer gemacht?", 60, 90),
  oral(1, "Erfahrungen: Eine Wohnung suchen", "Sie sprechen über eigene Erfahrungen.", "Berichten Sie: Wie haben Sie zuletzt eine Wohnung oder ein Zimmer gesucht? Was war schwierig, wer hat Ihnen geholfen, und welchen Rat würden Sie anderen geben?", 60, 90),
  oral(1, "Erfahrungen: Eine Fremdsprache lernen", "Sie sprechen über eigene Erfahrungen.", "Berichten Sie: Wie haben Sie eine Fremdsprache gelernt? Was hat bei Ihnen gut funktioniert, was gar nicht, und was tun Sie heute anders als am Anfang?", 60, 90),
  oral(1, "Erfahrungen: Ehrenamt oder Nachbarschaftshilfe", "Sie sprechen über eigene Erfahrungen.", "Berichten Sie: Haben Sie schon einmal freiwillig geholfen oder Hilfe von Nachbarn bekommen? Wie kam es dazu, und was ist Ihnen davon geblieben?", 60, 90),
  oral(1, "Erfahrungen: Ein Umzug", "Sie sprechen über eigene Erfahrungen.", "Berichten Sie von einem Umzug: Wie haben Sie ihn organisiert, was ist schiefgegangen, und was hat sich danach für Sie verändert?", 60, 90),

  // Teil 2 — Diskussion (5)
  oral(2, "Diskussion: Homeoffice oder Büro", "Sie diskutieren mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Diskutieren Sie: Sollten Betriebe ihren Beschäftigten freistellen, wie oft sie von zu Hause arbeiten? Vertreten Sie einen Standpunkt, gehen Sie auf die Gegenargumente ein und suchen Sie am Ende eine gemeinsame Einschätzung.", 60, 120),
  oral(2, "Diskussion: Autofreie Innenstädte", "Sie diskutieren mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Diskutieren Sie: Sollten Innenstädte weitgehend autofrei werden? Nennen Sie Argumente für Ihre Position, reagieren Sie auf Einwände und benennen Sie, worin Sie sich einig sind.", 60, 120),
  oral(2, "Diskussion: Handys in der Schule", "Sie diskutieren mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Diskutieren Sie: Sollten Handys auf dem Schulgelände verboten werden? Begründen Sie Ihre Meinung, gehen Sie auf die Gegenseite ein und formulieren Sie einen Kompromiss.", 60, 120),
  oral(2, "Diskussion: Weiterbildung in der Arbeitszeit", "Sie diskutieren mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Diskutieren Sie: Sollte Weiterbildung grundsätzlich während der Arbeitszeit stattfinden? Vertreten Sie eine Position, wägen Sie Kosten und Nutzen ab und reagieren Sie auf Einwände.", 60, 120),
  oral(2, "Diskussion: Pfand und Mehrweg", "Sie diskutieren mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Diskutieren Sie: Sollte es für deutlich mehr Verpackungen ein Pfand geben? Begründen Sie Ihre Haltung, gehen Sie auf praktische Einwände ein und kommen Sie zu einem Ergebnis.", 60, 120),

  // Teil 3 — gemeinsam etwas planen (5)
  oral(3, "Gemeinsam planen: Ein Fest im Haus", "Sie planen gemeinsam mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Planen Sie zusammen ein Sommerfest für die Hausgemeinschaft: Termin, Ort, Verpflegung, Aufgabenverteilung und wie Sie die Nachbarn informieren. Machen Sie Vorschläge, reagieren Sie auf die Ideen der anderen Person und einigen Sie sich.", 60, 150),
  oral(3, "Gemeinsam planen: Abschied einer Kollegin", "Sie planen gemeinsam mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Eine Kollegin verlässt die Firma. Planen Sie zusammen die Verabschiedung: Zeitpunkt, Rahmen, Geschenk, wer wen einlädt und wer was übernimmt. Einigen Sie sich am Ende auf einen Plan.", 60, 150),
  oral(3, "Gemeinsam planen: Ein Wochenendausflug", "Sie planen gemeinsam mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Planen Sie zusammen einen Ausflug für Ihre Gruppe: Ziel, Anreise, Kosten, Verpflegung und was bei schlechtem Wetter passiert. Begründen Sie Ihre Vorschläge und finden Sie eine gemeinsame Lösung.", 60, 150),
  oral(3, "Gemeinsam planen: Eine Lerngruppe", "Sie planen gemeinsam mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Planen Sie zusammen eine Lerngruppe für die Prüfungsvorbereitung: Rhythmus, Ort, Inhalte, Materialien und wie Sie mit Ausfällen umgehen. Einigen Sie sich auf ein Vorgehen.", 60, 150),
  oral(3, "Gemeinsam planen: Ein Tauschregal im Viertel", "Sie planen gemeinsam mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner.", "Planen Sie zusammen ein Tauschregal für Ihr Viertel: Standort, Regeln, wer es betreut, wie Sie es bekannt machen und was bei Missbrauch geschieht. Kommen Sie zu einer gemeinsamen Entscheidung.", 60, 150),
];

export const ITEMS: ExamItemInput[] = [...SA, ...SP];
