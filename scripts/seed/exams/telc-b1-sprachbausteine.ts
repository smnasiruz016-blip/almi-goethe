// telc Deutsch B1 — Sprachbausteine. Original practice items.
//
// ORIGINALITY (doctrine #1): every text below is ORIGINAL to AlmiGoethe — never
// copied or derived from telc materials, Übungstests or Modellsätze.
//
// TWO Teile, each with 10 gaps (published), 20 items in the section:
//   Teil 1  10 Lücken, Auswahl aus DREI Optionen   — grammar
//   Teil 2  10 Lücken, Auswahl aus 15 WÖRTERN      — vocabulary
//
// The previous 16 items carried ONE invented taskType (TELC_B1_SB_GAP) with three
// questions each, and did not distinguish the two Teile at all.
//
// ── THE TWO TEILE TEST DIFFERENT THINGS, AND ARE BUILT DIFFERENTLY ──────────
// Teil 1 is GRAMMAR: each gap offers three forms that are all real German words —
// the choice turns on case, tense, connector or preposition, never on knowing a
// word. Distractors are therefore grammatical neighbours (dem/den/der), not random
// vocabulary.
//
// Teil 2 is VOCABULARY: ONE word bank of fifteen serves all ten gaps, so five words
// are left over. A bank with exactly as many words as gaps would let a learner
// solve the last gaps by elimination alone, which tests arithmetic rather than
// German.
//
// Register is everyday B1 throughout — letters, e-mails, notices — not academic
// prose. Writing these in TestDaF's register would be teaching the wrong exam.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B1;
const base = {
  exam: "TELC_B1" as const,
  level: L,
  section: SECTION.SPRACHBAUSTEINE,
  difficulty: "CORE" as const,
};

const LETTERS = "abcdefghijklmno".split("");

// ── OPTION ORDER IS PERMUTED, DETERMINISTICALLY ─────────────────────────────
// The items above are AUTHORED with the correct choice first, because that is the
// only way to write and check a hundred and sixty gaps without losing track of
// which answer is right. Shipping them that way would have been a real defect: a
// learner who always picked the first option would have scored 100% on Teil 1, and
// Teil 2's answers would have run a, b, c … j straight down the gap order. The task
// would test pattern-spotting, not German.
//
// The permutation is DETERMINISTIC, seeded from the item title and the gap index.
// A random shuffle would produce a different payload on every build, and the
// seeder compares content to decide what to update — so every deploy would rewrite
// every item forever, and the reconciliation diff would never be empty.
function seedFrom(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function permute<T>(arr: T[], seedStr: string): T[] {
  const out = arr.slice();
  let a = seedFrom(seedStr);
  for (let i = out.length - 1; i > 0; i--) {
    a = (Math.imul(a ^ (a >>> 15), 1 | a) + 0x6d2b79f5) >>> 0;
    const j = a % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Permute a question's options and return them relabelled, with the id the
 *  correct answer now carries. */
function shuffled(
  options: { text: string; correct: boolean }[],
  seedStr: string,
): { options: { id: string; text: string }[]; answer: string } {
  const p = permute(options, seedStr);
  const opts = p.map((o, i) => ({ id: LETTERS[i], text: o.text }));
  const answer = LETTERS[p.findIndex((o) => o.correct)];
  return { options: opts, answer };
}

// ── Teil 1 — Grammatik, drei Optionen je Lücke (8 items × 10 Lücken) ────────
type SB1 = { title: string; topicTag: string; text: string; gaps: [string, string, string, "a" | "b" | "c"][] };

const TEIL1: SB1[] = [
  {
    title: "E-Mail: Anmeldung zum Deutschkurs",
    topicTag: "bildung",
    text: "Sehr geehrte Damen und Herren,\n\nich möchte mich ___1___ den Deutschkurs im Herbst anmelden. Ich habe ___2___ Jahr einen Kurs auf Niveau A2 besucht und ___3___ ihn erfolgreich abgeschlossen. Leider konnte ich ___4___ des Umzugs nicht weitermachen.\n\nKönnten Sie mir bitte mitteilen, ___5___ der Kurs beginnt und wie viel er kostet? Ich arbeite bis 17 Uhr, ___6___ kann ich nur abends teilnehmen. Falls es ___7___ freien Platz mehr gibt, würde ich gern auf die Warteliste.\n\nÜber eine Antwort ___8___ ich mich sehr. Wenn Sie noch Unterlagen brauchen, schicke ich sie ___9___ gern zu.\n\nMit freundlichen Grüßen\nAmina Yildiz\n\nP.S.: Meine Telefonnummer finden Sie ___10___ Ende der Nachricht.",
    gaps: [
      ["für", "auf", "an", "a"],
      ["letztes", "letzten", "letzter", "a"],
      ["habe", "bin", "werde", "a"],
      ["wegen", "trotz", "während", "a"],
      ["wann", "wenn", "als", "a"],
      ["deshalb", "obwohl", "damit", "a"],
      ["keinen", "kein", "keine", "a"],
      ["freue", "freut", "gefreut", "a"],
      ["Ihnen", "Sie", "Ihr", "a"],
      ["am", "im", "zum", "a"],
    ],
  },
  {
    title: "Brief: Beschwerde über eine Lieferung",
    topicTag: "alltag",
    text: "Sehr geehrte Damen und Herren,\n\nam 3. Mai habe ich bei Ihnen einen Schrank bestellt, ___1___ bis heute nicht angekommen ist. Laut Bestätigung ___2___ die Lieferung spätestens am 17. Mai erfolgen.\n\nIch habe bereits zweimal angerufen, ___3___ niemand konnte mir eine Auskunft geben. Beim zweiten Anruf wurde mir gesagt, dass die Ware ___4___ Lager sei; eine Woche später hieß es, sie sei nicht mehr lieferbar.\n\nIch bitte Sie ___5___, mir bis zum 30. Mai einen verbindlichen Termin zu nennen. ___6___ ich bis dahin nichts höre, werde ich vom Kauf zurücktreten.\n\nDen Betrag von 249 Euro habe ich bereits ___7___. Ich erwarte, dass er ___8___ diesem Fall vollständig erstattet wird.\n\n___9___ Ihre Antwort warte ich bis Ende des Monats.\n\nMit freundlichen Grüßen\nT. Bergmann\n\nAnlage: Kopie der Bestellung, ___10___ ich Ihnen bereits geschickt habe",
    gaps: [
      ["der", "den", "dem", "a"],
      ["sollte", "durfte", "mochte", "a"],
      ["aber", "sondern", "denn", "a"],
      ["im", "am", "beim", "a"],
      ["daher", "trotzdem", "dennoch", "a"],
      ["Falls", "Damit", "Indem", "a"],
      ["bezahlt", "bezahlen", "gezahlt zu", "a"],
      ["in", "an", "auf", "a"],
      ["Auf", "Für", "Über", "a"],
      ["die", "der", "das", "a"],
    ],
  },
  {
    title: "Aushang: Neue Regeln in der Waschküche",
    topicTag: "wohnen",
    text: "Liebe Hausbewohnerinnen und Hausbewohner,\n\nab dem 1. Juni gelten neue Regeln ___1___ die Waschküche. Wir bitten Sie, sie ___2___ zu beachten.\n\nDie Maschinen dürfen nur ___3___ 7 und 21 Uhr benutzt werden. Wer eine Maschine belegt, trägt sich bitte in die Liste ein, ___4___ alle sehen können, wann sie frei ist.\n\nBitte nehmen Sie Ihre Wäsche heraus, ___5___ das Programm beendet ist. In der Vergangenheit blieb Wäsche oft stundenlang liegen, ___6___ andere warten mussten.\n\nDer Raum wird jeden Freitag gereinigt. ___7___ dieser Zeit ist er nicht zugänglich.\n\nWenn eine Maschine kaputt ist, melden Sie das bitte sofort, ___8___ wir sie schnell reparieren lassen können. Hängen Sie außerdem einen Zettel ___9___ die Tür.\n\nWir danken Ihnen ___10___ Ihr Verständnis.\n\nIhre Hausverwaltung",
    gaps: [
      ["für", "auf", "über", "a"],
      ["unbedingt", "unbedingte", "unbedingten", "a"],
      ["zwischen", "von", "ab", "a"],
      ["damit", "weil", "obwohl", "a"],
      ["sobald", "seitdem", "bevor", "a"],
      ["sodass", "damit", "falls", "a"],
      ["Während", "Wegen", "Trotz", "a"],
      ["damit", "weil", "wenn", "a"],
      ["an", "in", "zu", "a"],
      ["für", "über", "an", "a"],
    ],
  },
  {
    title: "E-Mail: Bitte um einen Termin",
    topicTag: "arbeit",
    text: "Sehr geehrte Frau Doktor Lang,\n\nich arbeite seit zwei Jahren in Ihrer Abteilung und ___1___ gern mit Ihnen über meine weitere Entwicklung sprechen.\n\nIn dieser Zeit habe ich mehrere Projekte ___2___, zuletzt die Umstellung der Ablage. Dabei ___3___ mir aufgefallen, dass mir die Arbeit mit Zahlen besonders liegt.\n\nIch würde deshalb gern eine Weiterbildung machen, ___4___ ich später im Controlling arbeiten kann. Bevor ich mich anmelde, möchte ich ___5___ Ihre Einschätzung hören.\n\nHätten Sie in den nächsten zwei Wochen Zeit ___6___ ein kurzes Gespräch? Mir ___7___ jeder Tag außer Mittwoch.\n\nFalls es Ihnen lieber ist, können wir auch telefonieren, ___8___ ich am Donnerstag im Homeoffice bin.\n\nVielen Dank ___9___ Voraus. Ich freue mich ___10___ Ihre Rückmeldung.\n\nMit freundlichen Grüßen\nJonas Weber",
    gaps: [
      ["würde", "werde", "wollte", "a"],
      ["betreut", "betreuen", "zu betreuen", "a"],
      ["ist", "hat", "wird", "a"],
      ["damit", "weil", "obwohl", "a"],
      ["gern", "gerne zu", "gerner", "a"],
      ["für", "auf", "über", "a"],
      ["passt", "passe", "passen", "a"],
      ["da", "damit", "als", "a"],
      ["im", "in", "zu", "a"],
      ["auf", "über", "für", "a"],
    ],
  },
  {
    title: "Brief: Kündigung eines Vertrags",
    topicTag: "alltag",
    text: "Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meinen Vertrag mit der Kundennummer 884210 ___1___ nächstmöglichen Termin.\n\nIch bin seit fünf Jahren Kunde und war ___2___ zufrieden. In den letzten Monaten ist die Verbindung jedoch mehrmals ausgefallen, ___3___ ich im Homeoffice arbeite und darauf angewiesen bin.\n\nEine Lösung wurde mir zwar versprochen, ___4___ ist bisher nichts geschehen. ___5___ mehrerer Anrufe hat sich die Lage nicht verbessert.\n\nBitte bestätigen Sie mir die Kündigung schriftlich und teilen Sie mir mit, ___6___ der Vertrag endet. Sollte eine längere Frist gelten, bitte ich Sie, mich ___7___ zu informieren.\n\nDas Gerät sende ich zurück, ___8___ ich die Bestätigung erhalten habe. Bitte schicken Sie mir ___9___ einen Rücksendeschein.\n\nFür Rückfragen stehe ich Ihnen gern ___10___ Verfügung.\n\nMit freundlichen Grüßen\nS. Aydin",
    gaps: [
      ["zum", "am", "im", "a"],
      ["lange", "langem", "länger", "a"],
      ["obwohl", "damit", "sodass", "a"],
      ["aber", "sondern", "denn", "a"],
      ["Trotz", "Wegen", "Während", "a"],
      ["wann", "wenn", "als", "a"],
      ["rechtzeitig", "rechtzeitige", "rechtzeitigen", "a"],
      ["sobald", "bevor", "seitdem", "a"],
      ["dafür", "darauf", "damit", "a"],
      ["zur", "zu", "für", "a"],
    ],
  },
  {
    title: "E-Mail: Einladung zu einem Fest",
    topicTag: "freizeit",
    text: "Liebe Nachbarinnen und Nachbarn,\n\nam Samstag, ___1___ 14. September, wollen wir im Hof ein kleines Fest feiern. Wir würden uns freuen, ___2___ viele von Ihnen kommen.\n\nBeginn ist um 15 Uhr. ___3___ Getränke ist gesorgt; wenn Sie möchten, bringen Sie bitte etwas ___4___ Essen mit. Es wäre schön, ___5___ nicht alle einen Kuchen mitbringen — tragen Sie sich deshalb in die Liste im Hausflur ein.\n\nFür die Kinder bauen wir ab 14 Uhr auf. Wer ___6___ helfen möchte, ist herzlich willkommen.\n\n___7___ schlechtem Wetter feiern wir im Gemeinschaftsraum. Wir sagen ___8___ am Freitagabend Bescheid.\n\nBitte denken Sie daran, dass wir ___9___ 22 Uhr leiser werden müssen.\n\nWir freuen uns ___10___ einen schönen Nachmittag mit Ihnen.\n\nDas Vorbereitungsteam",
    gaps: [
      ["dem", "den", "der", "a"],
      ["wenn", "als", "ob", "a"],
      ["Für", "Um", "An", "a"],
      ["zum", "zu", "für", "a"],
      ["wenn", "als", "damit", "a"],
      ["dabei", "davon", "darauf", "a"],
      ["Bei", "In", "Mit", "a"],
      ["Ihnen", "Sie", "Ihr", "a"],
      ["ab", "seit", "von", "a"],
      ["auf", "über", "an", "a"],
    ],
  },
  {
    title: "Notiz: Vertretung im Büro",
    topicTag: "arbeit",
    text: "Liebes Team,\n\nich bin ___1___ 12. bis zum 26. Juli im Urlaub. In dieser Zeit ___2___ mich Frau Kraus.\n\nAlle Anfragen zu laufenden Projekten schickt bitte direkt ___3___ sie. Nur wenn es sich um etwas Dringendes handelt, ___4___ ihr mich auf dem Handy erreichen.\n\nDie Unterlagen für das Projekt Nord liegen im Schrank, ___5___ Schlüssel Frau Kraus hat. Die Datei mit den aktuellen Zahlen habe ich ___6___ Ordner abgelegt, ___7___ alle Zugriff haben.\n\nBitte denkt daran, dass die Abrechnung ___8___ Ende des Monats fertig sein muss, ___9___ ich noch im Urlaub bin.\n\nWenn etwas unklar ist, fragt lieber einmal ___10___ als zu wenig.\n\nViele Grüße\nMartina",
    gaps: [
      ["vom", "ab", "seit", "a"],
      ["vertritt", "vertretet", "vertreten", "a"],
      ["an", "zu", "für", "a"],
      ["könnt", "könnte", "konntet", "a"],
      ["dessen", "deren", "denen", "a"],
      ["im", "in", "am", "a"],
      ["worauf", "auf den", "auf dem", "b"],
      ["bis", "zu", "an", "a"],
      ["auch wenn", "damit", "sobald", "a"],
      ["zu viel", "zuviel", "viel zu", "a"],
    ],
  },
  {
    title: "E-Mail: Anfrage an eine Werkstatt",
    topicTag: "verkehr",
    text: "Sehr geehrte Damen und Herren,\n\nmein Fahrrad macht seit einigen Tagen ein Geräusch, ___1___ ich mir nicht erklären kann. Es tritt nur auf, ___2___ ich bergauf fahre.\n\nIch habe die Kette bereits geölt, ___3___ hat das nichts geändert. Ein Bekannter meinte, es ___4___ am Tretlager liegen.\n\nKönnten Sie sich das Rad ___5___ ansehen? Ich brauche es täglich für den Weg ___6___ Arbeit und wäre froh, wenn die Reparatur nicht zu lange dauert.\n\nHaben Sie diese Woche noch einen Termin frei? Ich kann ___7___ Freitag jederzeit vorbeikommen, ___8___ ich Urlaub habe.\n\nKönnen Sie mir außerdem ungefähr sagen, ___9___ die Reparatur kosten wird?\n\nVielen Dank ___10___ Ihre Mühe.\n\nMit freundlichen Grüßen\nR. Petrov",
    gaps: [
      ["das", "was", "welches", "a"],
      ["wenn", "als", "ob", "a"],
      ["aber", "sondern", "denn", "a"],
      ["könnte", "konnte", "kann", "a"],
      ["einmal", "einmalig", "einzeln", "a"],
      ["zur", "zu", "nach", "a"],
      ["bis", "seit", "ab", "a"],
      ["da", "damit", "obwohl", "a"],
      ["was", "wie viel", "welches", "b"],
      ["für", "über", "an", "a"],
    ],
  },
];

const teil1Items: ExamItemInput[] = TEIL1.map((t) => ({
  ...base,
  taskType: "TELC_B1_SB_GRAMMATIK",
  title: t.title,
  prompt: "Ergänzen Sie die zehn Lücken. Wählen Sie für jede Lücke a, b oder c.",
  topicTag: t.topicTag,
  timeLimitSeconds: 600,
  payload: {
    instructions: "Nur EINE der drei Formen ist grammatisch richtig.",
    passage: t.text,
    questions: t.gaps.map((g, i) => {
      const correctIdx = { a: 0, b: 1, c: 2 }[g[3]];
      const { options, answer } = shuffled(
        [g[0], g[1], g[2]].map((text, j) => ({ text, correct: j === correctIdx })),
        `${t.title}#g${i + 1}`,
      );
      return { id: `g${i + 1}`, stem: `Lücke ${i + 1}`, options, answer };
    }),
  },
}));

// ── Teil 2 — Wortschatz, 15 Wörter für 10 Lücken (8 items) ──────────────────
type SB2 = { title: string; topicTag: string; text: string; bank: string[]; answers: string[] };

const TEIL2: SB2[] = [
  {
    title: "Rundschreiben: Umbau der Bibliothek",
    topicTag: "bildung",
    text: "Liebe Leserinnen und Leser,\n\nvom 1. bis 30. September wird unsere Bibliothek ___1___. In dieser Zeit bleibt der Lesesaal geschlossen; die ___2___ von Büchern ist aber weiterhin möglich.\n\nBitte geben Sie geliehene Bücher ___3___ zurück, spätestens bis zum 29. August. Für Bücher, die Sie länger brauchen, können Sie die Leihfrist online ___4___.\n\nNach dem Umbau gibt es dreißig zusätzliche ___5___ zum Arbeiten und einen Raum, in dem man in kleinen Gruppen sprechen darf, ohne andere zu ___6___.\n\nDie ___7___ für den Umbau trägt die Stadt. Wir bitten um Ihr ___8___, wenn es in den ersten Tagen noch etwas unordentlich aussieht.\n\nÜber den genauen Termin der ___9___ informieren wir Sie rechtzeitig auf unserer Internetseite. Wir ___10___ uns darauf, Sie im Oktober wieder begrüßen zu dürfen.\n\nIhr Bibliotheksteam",
    bank: [
      "umgebaut",
      "Ausleihe",
      "rechtzeitig",
      "verlängern",
      "Plätze",
      "stören",
      "Kosten",
      "Verständnis",
      "Eröffnung",
      "freuen",
      "Antrag",
      "verbieten",
      "Rechnung",
      "beschweren",
      "Stelle",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "Information: Ein neues Bürgerbüro",
    topicTag: "gesellschaft",
    text: "Ab Oktober können Sie viele ___1___ im neuen Bürgerbüro erledigen, ohne einen Termin zu ___2___.\n\nWer einen Ausweis ___3___ möchte, bringt bitte ein Foto und den alten Ausweis mit. Die ___4___ beträgt in der Regel zwei Wochen.\n\nFür eine Anmeldung nach einem Umzug brauchen Sie eine ___5___ des Vermieters. Ohne dieses Papier können wir die Anmeldung leider nicht ___6___.\n\nDas Büro ist barrierefrei ___7___; ein Aufzug führt in den ersten Stock.\n\nWenn Sie Deutsch noch nicht sicher sprechen, dürfen Sie gern jemanden ___8___, der übersetzt.\n\nDie ___9___ sind montags bis freitags von 8 bis 16 Uhr, donnerstags bis 18 Uhr.\n\nWir bitten Sie, sich vorher zu ___10___, welche Unterlagen nötig sind — das spart allen Zeit.",
    bank: [
      "Anliegen",
      "vereinbaren",
      "beantragen",
      "Bearbeitungszeit",
      "Bestätigung",
      "vornehmen",
      "erreichbar",
      "mitbringen",
      "Öffnungszeiten",
      "informieren",
      "Gebühr",
      "verlieren",
      "Antwort",
      "beenden",
      "Ausnahme",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "Ratgeber: Energie sparen im Haushalt",
    topicTag: "umwelt",
    text: "Wer im Haushalt Strom sparen will, sollte zuerst wissen, wo der ___1___ überhaupt entsteht.\n\nDas Heizen macht den größten ___2___ aus. Schon ein Grad weniger ___3___ spürbar die Kosten. Lüften Sie lieber kurz und kräftig, statt das Fenster den ganzen Tag ___4___ zu lassen.\n\nGeräte, die im Bereitschaftsbetrieb bleiben, ___5___ auch dann Strom, wenn niemand sie benutzt. Eine Steckdosenleiste mit Schalter ist hier die einfachste ___6___.\n\nBeim Kauf eines neuen Geräts lohnt sich der Blick auf den ___7___: Ein günstiges Gerät kann über zehn Jahre teurer werden als ein sparsames.\n\nWaschen Sie, wenn möglich, bei niedriger ___8___ und mit voller Maschine.\n\nWer zur Miete wohnt, sollte Schäden am Fenster dem Vermieter ___9___. Größere Maßnahmen sind ohne seine ___10___ nicht erlaubt.",
    bank: [
      "Verbrauch",
      "Anteil",
      "senkt",
      "offen",
      "verbrauchen",
      "Lösung",
      "Verbrauchswert",
      "Temperatur",
      "melden",
      "Zustimmung",
      "Rechnung",
      "Menge",
      "steigt",
      "geschlossen",
      "Auswahl",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "E-Mail: Vorbereitung auf ein Vorstellungsgespräch",
    topicTag: "arbeit",
    text: "Liebe Frau Sahin,\n\nherzlichen Glückwunsch — Sie wurden zu einem Gespräch ___1___.\n\nBitte bereiten Sie sich gut vor. Lesen Sie noch einmal die ___2___ und überlegen Sie, welche Ihrer ___3___ am besten dazu passen.\n\nRechnen Sie damit, dass man Sie nach Ihren ___4___ und Schwächen fragt. Antworten Sie ehrlich, aber nennen Sie zu jeder Schwäche, wie Sie damit ___5___.\n\nBringen Sie Ihre Zeugnisse in einer Mappe mit. Kommen Sie lieber zehn Minuten zu früh als eine Minute zu ___6___.\n\nAm Ende dürfen Sie selbst Fragen ___7___ — das zeigt Interesse. Fragen Sie ruhig nach dem Ablauf der ___8___ oder nach Weiterbildung.\n\nÜber Gehalt sprechen Sie erst, wenn die Firma das Thema ___9___.\n\nIch ___10___ Ihnen viel Erfolg.\n\nIhre Beraterin",
    bank: [
      "eingeladen",
      "Stellenanzeige",
      "Erfahrungen",
      "Stärken",
      "umgehen",
      "spät",
      "stellen",
      "Einarbeitung",
      "anspricht",
      "wünsche",
      "abgelehnt",
      "Bewerbung",
      "früh",
      "beantworten",
      "Kündigung",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "Aushang: Gemeinschaftsgarten",
    topicTag: "freizeit",
    text: "Der Gemeinschaftsgarten hinter dem Haus ___1___ allen Bewohnerinnen und Bewohnern.\n\nJede Familie kann ein kleines Beet ___2___. Melden Sie sich dafür im Büro; die Zahl der Beete ist ___3___.\n\nWasser steht kostenlos zur ___4___. Bitte gießen Sie morgens oder abends, damit weniger Wasser ___5___.\n\nWerkzeug finden Sie im Schuppen. Legen Sie es bitte nach Gebrauch ___6___ zurück, damit es die Nächsten finden.\n\nPflanzenschutzmittel sind im ganzen Garten ___7___. Wer Probleme mit Schnecken hat, fragt bitte im Büro nach einer anderen ___8___.\n\nDie Ernte gehört dem, der das Beet ___9___. Was auf den gemeinsamen Flächen wächst, dürfen alle ___10___.\n\nViel Freude beim Gärtnern!",
    bank: [
      "gehört",
      "übernehmen",
      "begrenzt",
      "Verfügung",
      "verdunstet",
      "sauber",
      "verboten",
      "Möglichkeit",
      "pflegt",
      "ernten",
      "erlaubt",
      "Menge",
      "kauft",
      "schmutzig",
      "Auswahl",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "Information: Gesund durch den Winter",
    topicTag: "gesundheit",
    text: "Im Winter werden viele Menschen krank. Mit einigen einfachen Regeln lässt sich das ___1___ verringern.\n\nWaschen Sie sich regelmäßig die Hände — das ist die wirksamste ___2___ überhaupt.\n\nLüften Sie geschlossene Räume mehrmals täglich, damit die Luft nicht zu trocken ___3___.\n\nBewegung an der frischen Luft stärkt die ___4___, auch bei kaltem Wetter. Ziehen Sie sich dabei in mehreren ___5___ an.\n\nWer sich krank fühlt, sollte zu Hause bleiben und andere nicht ___6___. Bei hohem Fieber oder Atemnot suchen Sie bitte eine Ärztin oder einen Arzt ___7___.\n\nMedikamente ohne ___8___ helfen gegen die Beschwerden, aber nicht gegen die Ursache.\n\nAchten Sie außerdem auf ausreichend Schlaf; wer dauerhaft zu wenig schläft, ist ___9___ anfälliger.\n\nDiese Hinweise ___10___ kein Arztgespräch.",
    bank: [
      "Risiko",
      "Maßnahme",
      "wird",
      "Abwehrkräfte",
      "Schichten",
      "anstecken",
      "auf",
      "Rezept",
      "deutlich",
      "ersetzen",
      "Vorteil",
      "Ursache",
      "bleibt",
      "vermeiden",
      "Termin",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "Brief: Mitteilung der Hausverwaltung",
    topicTag: "wohnen",
    text: "Sehr geehrte Mieterinnen und Mieter,\n\nin den nächsten Wochen werden in allen Wohnungen neue Rauchmelder ___1___.\n\nDie Arbeiten werden von einer Firma ___2___, die sich vorher schriftlich bei Ihnen meldet. Bitte ___3___ Sie den vorgeschlagenen Termin oder schlagen Sie einen anderen vor.\n\nEs ist gesetzlich ___4___, dass in jedem Schlafzimmer ein Melder hängt. Die Kosten ___5___ der Vermieter; für Sie entstehen keine ___6___.\n\nSollten Sie am Termin nicht zu Hause sein können, geben Sie bitte einer Person Ihres ___7___ den Schlüssel.\n\nBitte beachten Sie, dass ein fehlender Melder im Schadensfall Folgen für Ihren ___8___ haben kann.\n\nWir bitten um Ihre ___9___ und danken Ihnen für Ihre Mitarbeit.\n\nBei Fragen ___10___ Sie sich gern an das Büro.\n\nIhre Hausverwaltung",
    bank: [
      "eingebaut",
      "durchgeführt",
      "bestätigen",
      "vorgeschrieben",
      "trägt",
      "Ausgaben",
      "Vertrauens",
      "Versicherungsschutz",
      "Unterstützung",
      "wenden",
      "abgebaut",
      "verboten",
      "Einnahmen",
      "Vertrags",
      "erinnern",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
  {
    title: "Ratgeber: Das erste eigene Konto",
    topicTag: "alltag",
    text: "Wer zum ersten Mal ein Konto ___1___, sollte auf einige Punkte achten.\n\nVergleichen Sie zuerst die ___2___: Manche Banken führen das Konto kostenlos, andere verlangen einen monatlichen Betrag.\n\nAchten Sie darauf, wie viele Automaten Sie kostenlos ___3___ können. Wer oft Bargeld braucht, spart hier ___4___ Geld.\n\nEin Konto im Minus zu führen ist teuer. Die ___5___ dafür liegen deutlich über denen eines normalen Kredits.\n\nRichten Sie für regelmäßige Zahlungen wie die Miete einen ___6___ ein. So vergessen Sie keinen Termin.\n\nBewahren Sie Ihre Geheimzahl niemals zusammen mit der Karte ___7___. Bei Verlust ___8___ Sie die Karte sofort sperren.\n\nPrüfen Sie einmal im Monat Ihre ___9___. Wenn Ihnen eine Buchung fremd vorkommt, ___10___ Sie sich sofort bei der Bank.",
    bank: [
      "eröffnet",
      "Gebühren",
      "nutzen",
      "viel",
      "Zinsen",
      "Dauerauftrag",
      "auf",
      "sollten",
      "Umsätze",
      "melden",
      "schließt",
      "Kosten",
      "wenig",
      "Rechnung",
      "warten",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  },
];

const teil2Items: ExamItemInput[] = TEIL2.map((t) => {
  // The bank is authored in gap order (gap 1 -> word a, gap 2 -> word b …), which
  // is readable but would hand the learner the answers in sequence. Permute the
  // bank ONCE per item, then relabel: the words a learner sees are in an order that
  // carries no information, while the mapping stays derivable from the source.
  const correctWords = t.answers.map((a) => t.bank[LETTERS.indexOf(a)]);
  const bank = permute(t.bank, `${t.title}#bank`);
  const options = bank.map((w, j) => ({ id: LETTERS[j], text: w }));
  return {
    ...base,
    taskType: "TELC_B1_SB_WORTSCHATZ",
    title: t.title,
    prompt: "Ergänzen Sie die zehn Lücken mit den passenden Wörtern aus der Liste.",
    topicTag: t.topicTag,
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Wählen Sie für jede Lücke ein Wort aus der Liste. Es gibt fünfzehn Wörter und zehn Lücken — fünf Wörter bleiben übrig. Jedes Wort passt höchstens einmal.",
      passage: t.text + "\n\nWortliste:\n" + bank.map((w, i) => `${LETTERS[i]}) ${w}`).join("   "),
      questions: correctWords.map((w, i) => ({
        id: `w${i + 1}`,
        stem: `Lücke ${i + 1}`,
        options,
        answer: LETTERS[bank.indexOf(w)],
      })),
    },
  };
});

export const ITEMS: ExamItemInput[] = [...teil1Items, ...teil2Items];
