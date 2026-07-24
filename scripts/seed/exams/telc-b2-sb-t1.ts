// telc Deutsch B2 — Sprachbausteine, Teil 1 (Grammatik-Lückentext).
//
// OFFICIAL CELL: 10 gaps, MC-3, in one continuous text. Eight instances here — SB
// has two Teile and the rule7 floor is ≥15 per section, so ~8 per Teil. A floor,
// not a quota.
//
// ── RE-TAG, BUT AT THE OFFICIAL DEPTH ──────────────────────────────────────
// The old TELC_B2_SB_GAP items were genuinely Grammatik-Lückentexte — the gaps were
// connectors, prepositions, relative pronouns and verb forms, which is exactly what
// Teil 1 tests, and that is what made this cell a re-tag rather than a relabel. But
// they carried THREE gaps against the official TEN, so each text is authored to full
// depth here. Four of the eight reuse the original scenarios; four are new.
//
// ── WHAT A TEIL-1 GAP MAY TEST ─────────────────────────────────────────────
// Grammar only: connectors and subordinators, prepositions and the case they govern,
// relative pronouns, verb forms (tense, mood, passive), and fixed prepositional
// phrases. NOT content-word vocabulary — that is Teil 2 (Wortschatz), a different
// cell with a different answer format. Keeping the two apart is the whole point of
// the split; a lexical gap filed here would be the wrong Teil wearing the right key.
//
// Every distractor is a real German word that is wrong in THIS slot — wrong case
// government, wrong subordinator, wrong voice or wrong tense — never a nonsense form.
//
// ORIGINALITY (doctrine #1): all texts original to AlmiGoethe. These are ordinary
// workplace and tenancy notices; no real company, authority or person is named, and
// no factual claim about the world is made that a reader could be misled by.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.TELC_B2;
const base = {
  exam: "TELC_B2" as const,
  level: L,
  section: SECTION.SPRACHBAUSTEINE,
  difficulty: "CORE" as const,
  taskType: "TELC_B2_SB_T1_GRAMMATIK",
  prompt: "Lesen Sie den Text und wählen Sie für jede Lücke die richtige Möglichkeit.",
  topicTag: "grammatik",
  timeLimitSeconds: 600,
};

const INSTR = "Wählen Sie für jede Lücke (1–10) die richtige Möglichkeit (a, b oder c). Nur eine Antwort ist richtig.";

type Gap = { options: [string, string, string]; answer: "a" | "b" | "c" };

function item(title: string, passage: string, gaps: Gap[]): ExamItemInput {
  if (gaps.length !== 10) throw new Error(`SB T1 "${title}": the official Teil has 10 gaps, got ${gaps.length}`);
  for (let i = 1; i <= 10; i++) {
    if (!passage.includes(`(${i})`)) throw new Error(`SB T1 "${title}": passage has no marker (${i})`);
  }
  return {
    ...base,
    title,
    payload: {
      instructions: INSTR,
      passage,
      questions: gaps.map((g, i) => ({
        id: `l${i + 1}`,
        stem: `Lücke ${i + 1}`,
        options: g.options.map((text, j) => ({ id: "abc"[j], text })),
        answer: g.answer,
      })),
    },
  };
}

const RAW_ITEMS: ExamItemInput[] = [
  item(
    "Rundmail: Umstellung auf ein neues System",
    "Liebe Kolleginnen und Kollegen,\n\n(1) der anstehenden Umstellung auf das neue Buchungssystem bitte ich Sie, an einer der Schulungen teilzunehmen. Wer am Freitag verhindert ist, (2) sich bitte bis Mittwoch bei mir. Die Unterlagen, (3) Inhalt wir in der Schulung besprechen, finden Sie im Intranet. Bitte lesen Sie diese, (4) Sie zur Schulung kommen. (5) alle Fragen vorab geklärt sind, verläuft der Termin deutlich zügiger. Die Teilnahme (6) selbstverständlich als Arbeitszeit angerechnet. (7) Sie technische Probleme haben, wenden Sie sich bitte an die IT-Abteilung. Wir haben die Termine so gelegt, (8) möglichst wenige Besprechungen ausfallen. (9) der kurzen Vorbereitungszeit rechnen wir mit einem reibungslosen Ablauf. Für Rückfragen stehe ich Ihnen gern (10) Verfügung.",
    [
      { options: ["Angesichts", "Trotz", "Statt"], answer: "a" },
      { options: ["meldet", "melden", "gemeldet"], answer: "a" },
      { options: ["deren", "dessen", "die"], answer: "a" },
      { options: ["bevor", "nachdem", "seitdem"], answer: "a" },
      { options: ["Wenn", "Obwohl", "Damit"], answer: "a" },
      { options: ["wird", "werden", "worden"], answer: "a" },
      { options: ["Falls", "Damit", "Indem"], answer: "a" },
      { options: ["dass", "ob", "als"], answer: "a" },
      { options: ["Trotz", "Wegen", "Während"], answer: "a" },
      { options: ["zur", "zum", "bei"], answer: "a" },
    ],
  ),
  item(
    "Antwort auf eine Beschwerde",
    "Sehr geehrte Frau Adler,\n\nwir bedauern, dass Sie mit unserem Service nicht zufrieden waren. (1) Ihrer berechtigten Kritik haben wir unsere Abläufe überprüft. (2) sich der Fehler nicht wiederholt, schulen wir unsere Mitarbeiterinnen und Mitarbeiter erneut. Die Lieferung, (3) Verspätung Sie zu Recht bemängelt haben, wurde von einem externen Dienstleister ausgeführt. Wir haben den Vertrag inzwischen gekündigt, (4) die Zusammenarbeit über Jahre gut funktioniert hatte. Als Entschuldigung (5) wir Ihnen einen Gutschein über 30 Euro. Diesen können Sie einlösen, (6) Sie das nächste Mal bei uns bestellen. Bitte geben Sie die Gutscheinnummer im Bestellfeld an, (7) wir sie eindeutig zuordnen können. (8) Sie weitere Fragen haben, rufen Sie uns gern an. Wir hoffen sehr, Sie auch künftig (9) Kundin begrüßen zu dürfen.\n\n(10) freundlichen Grüßen\nKundenservice",
    [
      { options: ["Aufgrund", "Trotz", "Entgegen"], answer: "a" },
      { options: ["Damit", "Weil", "Obwohl"], answer: "a" },
      { options: ["deren", "dessen", "die"], answer: "a" },
      { options: ["obwohl", "weil", "damit"], answer: "a" },
      { options: ["senden", "sendet", "gesendet"], answer: "a" },
      { options: ["wenn", "als", "seit"], answer: "a" },
      { options: ["damit", "obwohl", "bevor"], answer: "a" },
      { options: ["Sollten", "Werden", "Wurden"], answer: "a" },
      { options: ["als", "für", "wie"], answer: "a" },
      { options: ["Mit", "Bei", "Von"], answer: "a" },
    ],
  ),
  item(
    "Mitteilung zur Betriebsversammlung",
    "Sehr geehrte Mitarbeiterinnen und Mitarbeiter,\n\nam kommenden Dienstag findet die jährliche Betriebsversammlung statt. Der Raum, (1) wir uns treffen, ist die große Kantine im Erdgeschoss. Bitte planen Sie etwa zwei Stunden ein, (2) auch Ihre Fragen ausreichend Zeit finden. Wer verhindert ist, (3) sich vorab entschuldigen. Das Protokoll (4) im Anschluss allen Beschäftigten zugeschickt. (5) der Versammlung bitten wir darum, Telefone stummzuschalten. Themen, (6) Sie besprechen möchten, können Sie bis Montag einreichen. (7) wir die Tagesordnung rechtzeitig verschicken können, ist eine frühe Rückmeldung wichtig. Die Versammlung wird (8) der Geschäftsführung eröffnet. (9) es zeitlich eng wird, verschieben wir einzelne Punkte auf den Herbst. Wir freuen uns (10) Ihre Teilnahme.",
    [
      { options: ["in dem", "in den", "in denen"], answer: "a" },
      { options: ["damit", "obwohl", "bevor"], answer: "a" },
      { options: ["sollte", "sollten", "gesollt"], answer: "a" },
      { options: ["wird", "werden", "worden"], answer: "a" },
      { options: ["Während", "Trotz", "Statt"], answer: "a" },
      { options: ["die", "der", "denen"], answer: "a" },
      { options: ["Damit", "Weil", "Indem"], answer: "a" },
      { options: ["von", "mit", "bei"], answer: "a" },
      { options: ["Falls", "Damit", "Bevor"], answer: "a" },
      { options: ["auf", "an", "in"], answer: "a" },
    ],
  ),
  item(
    "Hinweis zum Datenschutz",
    "Liebe Nutzerinnen und Nutzer,\n\nIhre Daten (1) bei uns ausschließlich für die Bearbeitung Ihrer Bestellung verarbeitet. (2) Sie der Verwendung widersprechen möchten, genügt eine kurze Nachricht. Die Angaben, (3) Sie im Formular machen, werden verschlüsselt übertragen. (4) einer gesetzlichen Aufbewahrungsfrist können wir Rechnungsdaten nicht sofort löschen. (5) diese Frist abgelaufen ist, werden die Daten automatisch entfernt. Wir geben Informationen nur weiter, (6) es für den Versand notwendig ist. Ein Dienstleister, (7) Zugriff auf Adressdaten hat, ist vertraglich zur Vertraulichkeit verpflichtet. (8) Sie eine Auskunft über Ihre gespeicherten Daten wünschen, schreiben Sie uns. Wir antworten in der Regel, (9) eine Woche vergangen ist. Vielen Dank (10) Ihr Vertrauen.",
    [
      { options: ["werden", "wird", "haben"], answer: "a" },
      { options: ["Falls", "Damit", "Indem"], answer: "a" },
      { options: ["die", "der", "denen"], answer: "a" },
      { options: ["Wegen", "Trotz", "Entgegen"], answer: "a" },
      { options: ["Sobald", "Seit", "Bevor"], answer: "a" },
      { options: ["soweit", "damit", "obwohl"], answer: "a" },
      { options: ["der", "dessen", "den"], answer: "a" },
      { options: ["Wenn", "Damit", "Als"], answer: "a" },
      { options: ["bevor", "nachdem", "seit"], answer: "a" },
      { options: ["für", "über", "an"], answer: "a" },
    ],
  ),
  item(
    "Einladung zu einer Fortbildung",
    "Sehr geehrte Kolleginnen und Kollegen,\n\nwir laden Sie herzlich zu einer zweitägigen Fortbildung ein. Die Veranstaltung richtet sich an alle, (1) regelmäßig mit Kundenanfragen zu tun haben. (2) der begrenzten Plätze bitten wir um eine verbindliche Anmeldung. Wer sich anmeldet, (3) eine Bestätigung per E-Mail. Die Kosten (4) vollständig vom Betrieb übernommen. (5) Sie an beiden Tagen teilnehmen, erhalten Sie ein Zertifikat. Das Hotel, (6) wir für auswärtige Gäste reserviert haben, liegt fünf Minuten vom Tagungsort entfernt. Bitte teilen Sie uns mit, (7) Sie eine Übernachtung benötigen. (8) die Anreise reibungslos verläuft, senden wir vorab eine Wegbeschreibung. Die Fortbildung findet auch dann statt, (9) einzelne Anmeldungen zurückgezogen werden. Wir freuen uns (10) ein volles Haus.",
    [
      { options: ["die", "der", "denen"], answer: "a" },
      { options: ["Aufgrund", "Trotz", "Statt"], answer: "a" },
      { options: ["erhält", "erhalten", "erhielte"], answer: "a" },
      { options: ["werden", "wird", "worden"], answer: "a" },
      { options: ["Sofern", "Damit", "Bevor"], answer: "a" },
      { options: ["das", "dem", "dessen"], answer: "a" },
      { options: ["ob", "damit", "als"], answer: "a" },
      { options: ["Damit", "Weil", "Obwohl"], answer: "a" },
      { options: ["wenn", "damit", "bevor"], answer: "a" },
      { options: ["auf", "an", "für"], answer: "a" },
    ],
  ),
  item(
    "Aushang: Umbau der Kantine",
    "Liebe Beschäftigte,\n\nab Montag wird die Kantine umgebaut. (1) der Bauarbeiten bleibt der große Speisesaal geschlossen. Ein Ersatzraum, (2) Ausstattung einfacher ist, steht im zweiten Stock bereit. Das Mittagessen (3) dort von 11.30 bis 14.00 Uhr ausgegeben. Bitte bringen Sie Ihren Ausweis mit, (4) die Abrechnung wie gewohnt funktioniert. (5) der Umbau früher fertig wird, informieren wir Sie sofort. Wer eine Unverträglichkeit hat, (6) sich bitte vorab beim Küchenteam melden. Die Preise bleiben unverändert, (7) das Angebot in dieser Zeit kleiner ist. (8) Sie Verbesserungsvorschläge haben, nutzen Sie gern den Briefkasten am Eingang. Wir bitten (9) Ihr Verständnis für den Lärm. Nach dem Umbau werden Sie einen helleren Raum vorfinden, (10) auch Pausen angenehmer werden.",
    [
      { options: ["Während", "Trotz", "Statt"], answer: "a" },
      { options: ["dessen", "deren", "der"], answer: "a" },
      { options: ["wird", "werden", "worden"], answer: "a" },
      { options: ["damit", "obwohl", "bevor"], answer: "a" },
      { options: ["Falls", "Damit", "Bevor"], answer: "a" },
      { options: ["sollte", "sollten", "gesollt"], answer: "a" },
      { options: ["obwohl", "weil", "damit"], answer: "a" },
      { options: ["Falls", "Damit", "Indem"], answer: "a" },
      { options: ["um", "für", "über"], answer: "a" },
      { options: ["sodass", "obwohl", "bevor"], answer: "a" },
    ],
  ),
  item(
    "Information an die Mieterinnen und Mieter: Heizungswartung",
    "Sehr geehrte Mieterinnen und Mieter,\n\nin der kommenden Woche wird die Heizungsanlage gewartet. Die Handwerker benötigen Zutritt zu allen Wohnungen, (1) die Ventile geprüft werden können. (2) Sie am Dienstag nicht zu Hause sind, hinterlegen Sie bitte einen Schlüssel bei der Hausverwaltung. Die Arbeiten, (3) Dauer etwa eine Stunde pro Wohnung beträgt, beginnen um acht Uhr. Das Wasser (4) währenddessen kurzzeitig abgestellt. (5) der Wartung kann es in einzelnen Räumen kühler werden. Wir empfehlen deshalb, warme Kleidung bereitzulegen, (6) Sie den Tag zu Hause verbringen. Der Termin lässt sich leider nicht verschieben, (7) die Anlage sonst im Winter ausfallen könnte. (8) es zu Schäden kommt, melden Sie diese bitte umgehend. Ein Formular dafür finden Sie (9) der Website der Verwaltung. Wir danken Ihnen (10) Ihre Mithilfe.",
    [
      { options: ["damit", "obwohl", "bevor"], answer: "a" },
      { options: ["Falls", "Damit", "Seit"], answer: "a" },
      { options: ["deren", "dessen", "die"], answer: "a" },
      { options: ["wird", "werden", "worden"], answer: "a" },
      { options: ["Während", "Trotz", "Statt"], answer: "a" },
      { options: ["falls", "damit", "bevor"], answer: "a" },
      { options: ["weil", "damit", "obwohl"], answer: "a" },
      { options: ["Wenn", "Damit", "Seitdem"], answer: "a" },
      { options: ["auf", "in", "an"], answer: "a" },
      { options: ["für", "über", "um"], answer: "a" },
    ],
  ),
  item(
    "Mitteilung: Neue Regelung für das Homeoffice",
    "Liebe Kolleginnen und Kollegen,\n\nab dem ersten des Monats gilt eine neue Regelung, (1) das mobile Arbeiten betrifft. Wer im Homeoffice arbeiten möchte, (2) dies mit der Führungskraft abstimmen. (3) der Absprache sollte auch die Erreichbarkeit geklärt werden. Kolleginnen und Kollegen, (4) Aufgaben an feste Termine gebunden sind, bleiben davon ausgenommen. Die Regelung (5) zunächst für sechs Monate erprobt. (6) sich das Modell bewährt, wird es dauerhaft übernommen. Bitte tragen Sie Ihre Tage im Kalender ein, (7) alle den Überblick behalten. (8) technischer Probleme wenden Sie sich an die IT. Ein Laptop wird gestellt, (9) Sie regelmäßig von zu Hause arbeiten. Wir bitten Sie, die Regelung so umzusetzen, (10) der Betrieb nicht beeinträchtigt wird.",
    [
      { options: ["die", "der", "denen"], answer: "a" },
      { options: ["muss", "müssen", "gemusst"], answer: "a" },
      { options: ["Bei", "Trotz", "Statt"], answer: "a" },
      { options: ["deren", "dessen", "die"], answer: "a" },
      { options: ["wird", "werden", "worden"], answer: "a" },
      { options: ["Sofern", "Damit", "Bevor"], answer: "a" },
      { options: ["damit", "obwohl", "seit"], answer: "a" },
      { options: ["Wegen", "Trotz", "Entgegen"], answer: "a" },
      { options: ["sofern", "obwohl", "bevor"], answer: "a" },
      { options: ["dass", "ob", "als"], answer: "a" },
    ],
  ),
];

// Format is correct for this cell, so the MC position-spread axis is meaningful —
// de-gamed here rather than left at the old 98%-"a".
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["TELC_B2_SB_T1_GRAMMATIK"]),
});
