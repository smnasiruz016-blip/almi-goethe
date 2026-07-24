// telc Deutsch B2 — Hörverstehen, Teile 1–3. ALL richtig/falsch.
//
// OFFICIAL CELLS (handbook tables, corroborated against the item-numbered Übungstest):
//   Teil 1 — globales Hören    ·  5 statements  ·  ONE text
//   Teil 2 — detailliertes Hören · 10 statements ·  ONE longer text (Rundfunk-Interview)
//   Teil 3 — selektives Hören  ·  5 statements  ·  FIVE short Ansagen, 1 statement each
// Five instances per Teil = 15 in the section (rule7 floor ≥15; a floor, not a quota).
//
// ── THE BIGGEST CORRECTION IN THE B2 RESTRUCTURE ───────────────────────────
// The whole previous Hörverstehen bank was MC-3. The real exam is richtig/falsch in
// all three Teile. Every existing gate was green on it, because conformance never
// looks at the answer format and answer-distribution inferred the format from the
// payload — i.e. from the defect itself. See scripts/gates/format-conformance.mts.
//
// ── BALANCE IS AUTHORED, NOT DE-GAMED ──────────────────────────────────────
// deGame's binary mode (deRhythm) only REORDERS questions to break an a-b-a-b
// rhythm; its first line returns untouched on a uniform sequence. So it cannot
// create balance out of an all-richtig set — it would silently do nothing and leave
// the distribution gate to fail. Balance is therefore authored: 3/2 or 2/3 on the
// five-statement Teile, 5/5 on Teil 2.
//
// ── EVERY STATEMENT DECIDABLE, NONE "MAYBE TRUE" ───────────────────────────
// Each statement is keyed against a SPECIFIC clause of its script — a falsch item
// contradicts something the script actually says, never something it merely fails to
// mention. An unmentioned detail is not false, it is undecidable, and an undecidable
// statement is the listening equivalent of a double answer.
//
// ── PROVENANCE OF THE SCRIPTS ──────────────────────────────────────────────
//   Teil 1: all five scripts REUSED UNCHANGED from the previous bank (four Berichte
//           plus the Stadtgärten interview). Only the questions change format.
//   Teil 2: NEWLY WRITTEN at ~150–200 words. The old 69–94-word scripts carry 7–8
//           distinct propositions, which cannot honestly support 10 decidable
//           statements; padding them would manufacture exactly the "maybe true"
//           defect this format is supposed to avoid. Themes continue the existing
//           interview style.
//   Teil 3: NEWLY WRITTEN — short Ansagen/Durchsagen, a genre the old bank had none
//           of.
//
// ORIGINALITY (doctrine #1): all scripts original to AlmiGoethe. No real company,
// station, authority or person is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B2;
const RF = [
  { id: "r", text: "richtig" },
  { id: "f", text: "falsch" },
];

type St = { s: string; a: "r" | "f" };

const base = {
  exam: "TELC_B2" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
  topicTag: "hoerverstehen",
};

function assertBalance(title: string, sts: St[]) {
  const r = sts.filter((x) => x.a === "r").length;
  const share = r / sts.length;
  if (share < 0.35 || share > 0.65) {
    throw new Error(`${title}: ${r}/${sts.length} richtig (${Math.round(share * 100)}%) — author balance to ~40–60%, deRhythm cannot fix it`);
  }
}

/** Teil 1 and Teil 2: one script, N statements. */
function single(taskType: string, title: string, script: string, sts: St[], want: number, seconds: number): ExamItemInput {
  if (sts.length !== want) throw new Error(`${title}: expected ${want} statements, got ${sts.length}`);
  assertBalance(title, sts);
  return {
    ...base,
    taskType,
    title,
    prompt: `Sie hören einen Text. Entscheiden Sie, ob die Aussagen 1–${want} richtig oder falsch sind.`,
    timeLimitSeconds: seconds,
    payload: {
      instructions: "Sie hören den Text. Kreuzen Sie an: richtig oder falsch.",
      audioScript: script,
      questions: sts.map((x, i) => ({
        id: `a${i + 1}`,
        stem: x.s,
        options: RF,
        answer: x.a,
      })),
    },
  };
}

/** Teil 3: five short Ansagen, one statement each. */
function segmented(title: string, parts: { label: string; script: string; st: St }[]): ExamItemInput {
  if (parts.length !== 5) throw new Error(`${title}: Teil 3 has 5 Ansagen, got ${parts.length}`);
  assertBalance(title, parts.map((p) => p.st));
  return {
    ...base,
    taskType: "TELC_B2_HV_T3",
    title,
    prompt: "Sie hören fünf kurze Ansagen. Entscheiden Sie zu jeder Ansage, ob die Aussage richtig oder falsch ist.",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören fünf kurze Ansagen, jede einmal. Kreuzen Sie an: richtig oder falsch.",
      segments: parts.map((p, i) => ({ id: `s${i + 1}`, label: p.label, script: p.script })),
      questions: parts.map((p, i) => ({
        id: `a${i + 1}`,
        stem: `${p.label}: ${p.st.s}`,
        options: RF,
        answer: p.st.a,
      })),
    },
  };
}

// ── TEIL 1 — globales Hören · 5 statements · scripts REUSED UNCHANGED ───────
const T1: ExamItemInput[] = [
  single("TELC_B2_HV_T1", "Radiointerview: Stadtgärten",
    "MODERATORIN: Frau Ott, Sie betreuen einen Gemeinschaftsgarten mitten in der Stadt. Was reizt die Menschen daran? FRAU OTT: Viele suchen einen Ausgleich zum Alltag und möchten wieder selbst etwas anbauen. Interessant ist, dass es weniger um den Ertrag geht als um das gemeinsame Tun. MODERATORIN: Gibt es auch Schwierigkeiten? FRAU OTT: Ja, die größte Herausforderung ist tatsächlich die Organisation. Wer gießt in den Ferien? Wer kümmert sich im Winter? Ohne verbindliche Absprachen funktioniert es nicht. MODERATORIN: Und die Stadt unterstützt Sie? FRAU OTT: Sie stellt die Fläche, aber Werkzeug und Pflanzen finanzieren wir selbst.",
    [
      { s: "Frau Ott betreut einen Gemeinschaftsgarten außerhalb der Stadt.", a: "f" },
      { s: "Den Beteiligten ist das gemeinsame Tun wichtiger als der Ertrag.", a: "r" },
      { s: "Die größte Schwierigkeit ist laut Frau Ott die Finanzierung.", a: "f" },
      { s: "Ohne verbindliche Absprachen funktioniert der Garten nicht.", a: "r" },
      { s: "Werkzeug und Pflanzen bezahlt die Gruppe selbst.", a: "r" },
    ], 5, 300),

  single("TELC_B2_HV_T1", "Bericht: Weniger Lärm in der Innenstadt",
    "Eine Stadt im Süden hat ein Modellprojekt gestartet, um den Lärm in der Innenstadt zu verringern. Auf mehreren Straßen wurde die Geschwindigkeit gesenkt, und der Belag wurde erneuert. Erste Messungen zeigen, dass es tatsächlich leiser geworden ist. Anwohner berichten, dass sie nachts besser schlafen. Kritiker bemängeln jedoch die hohen Kosten und fragen, ob sich das Projekt auf größere Städte übertragen lässt. Die Stadt will die Ergebnisse ein Jahr lang beobachten, bevor sie über eine Ausweitung entscheidet.",
    [
      { s: "In dem Modellprojekt wurde die Geschwindigkeit auf mehreren Straßen gesenkt.", a: "r" },
      { s: "Die ersten Messungen zeigen bisher keine Wirkung.", a: "f" },
      { s: "Anwohner berichten, dass sie nachts besser schlafen.", a: "r" },
      { s: "Kritiker halten das Projekt für zu teuer.", a: "r" },
      { s: "Die Stadt hat die Ausweitung bereits beschlossen.", a: "f" },
    ], 5, 300),

  single("TELC_B2_HV_T1", "Bericht: Elektroautos im Alltag",
    "Immer mehr Menschen fahren elektrisch. Wer täglich kurze Strecken zurücklegt, ist mit einem Elektroauto oft gut bedient, denn das Aufladen zu Hause ist bequem und günstig. Auf langen Reisen zeigt sich jedoch, dass das Netz der Ladestationen noch Lücken hat, besonders auf dem Land. Fachleute rechnen damit, dass sich das in den nächsten Jahren bessern wird. Für viele bleibt der höhere Anschaffungspreis vorerst ein Hindernis, auch wenn die laufenden Kosten niedriger sind.",
    [
      { s: "Für kurze Alltagsstrecken eignet sich ein Elektroauto laut Bericht gut.", a: "r" },
      { s: "Das Netz der Ladestationen ist besonders auf dem Land noch lückenhaft.", a: "r" },
      { s: "Fachleute erwarten, dass sich daran nichts ändern wird.", a: "f" },
      { s: "Die laufenden Kosten eines Elektroautos sind niedriger.", a: "r" },
      { s: "Der Anschaffungspreis ist inzwischen kein Hindernis mehr.", a: "f" },
    ], 5, 300),

  single("TELC_B2_HV_T1", "Bericht: Arbeiten im Homeoffice",
    "Seit sich das Arbeiten von zu Hause verbreitet hat, verändert sich der Alltag vieler Beschäftigter. Sie sparen den Weg zur Arbeit und können flexibler planen. Umfragen zeigen jedoch, dass nicht alle davon profitieren. Wer zu Hause keinen ruhigen Platz hat, tut sich schwer. Auch die Grenze zwischen Arbeit und Freizeit verschwimmt leicht. Viele Unternehmen setzen deshalb auf Mischformen, bei denen die Beschäftigten teils im Büro, teils zu Hause arbeiten.",
    [
      { s: "Wer zu Hause arbeitet, spart den Weg zur Arbeit.", a: "r" },
      { s: "Laut Umfragen profitieren alle Beschäftigten vom Homeoffice.", a: "f" },
      { s: "Wer zu Hause keinen ruhigen Platz hat, kommt genauso gut zurecht.", a: "f" },
      { s: "Die Grenze zwischen Arbeit und Freizeit bleibt klar erkennbar.", a: "f" },
      { s: "Viele Unternehmen setzen auf eine Mischung aus Büro und Homeoffice.", a: "r" },
    ], 5, 300),

  single("TELC_B2_HV_T1", "Bericht: Tauschen statt kaufen",
    "In vielen Vierteln entstehen sogenannte Tauschregale, in denen man Dinge, die man nicht mehr braucht, hineinstellen und andere mitnehmen kann. Die Idee ist einfach und kostet nichts. Sie schont Ressourcen und bringt Nachbarn miteinander ins Gespräch. Damit das funktioniert, braucht es allerdings Rücksicht: Wer nur nimmt und nie etwas hineinstellt, gefährdet das System. Auch kaputte Dinge gehören nicht ins Regal. Wo die Regeln beachtet werden, halten sich die Regale erstaunlich gut.",
    [
      { s: "Die Nutzung eines Tauschregals kostet nichts.", a: "r" },
      { s: "Man darf auch kaputte Dinge ins Regal stellen.", a: "f" },
      { s: "Wer nur nimmt und nichts hineinstellt, gefährdet das System.", a: "r" },
      { s: "Die Tauschregale bringen Nachbarn ins Gespräch.", a: "r" },
      { s: "Wo die Regeln beachtet werden, funktionieren die Regale schlecht.", a: "f" },
    ], 5, 300),
];

// ── TEIL 2 — detailliertes Hören · 10 statements · scripts NEWLY WRITTEN ────
const T2: ExamItemInput[] = [
  single("TELC_B2_HV_T2", "Rundfunk-Interview: Eine kleine Buchhandlung führen",
    "MODERATOR: Herr Brandt, Sie führen seit zwölf Jahren eine kleine Buchhandlung. Viele hätten erwartet, dass es solche Läden längst nicht mehr gibt. HERR BRANDT: Das höre ich oft. Tatsächlich war die Lage vor einigen Jahren schwierig, aber inzwischen hat sich das gedreht. Wir verkaufen heute mehr Bücher als vor fünf Jahren. MODERATOR: Woran liegt das? HERR BRANDT: Vor allem an der Beratung. Wer bei uns hereinkommt, sucht selten einen bestimmten Titel. Die Leute wollen wissen, was sich lohnt. Das kann ein Bildschirm nicht ersetzen. Hinzu kommt, dass wir Lesungen veranstalten, etwa einmal im Monat. MODERATOR: Und das rechnet sich? HERR BRANDT: Direkt verdienen wir daran nichts, die Eintrittsgelder decken gerade die Kosten. Aber die Leute kommen wieder. MODERATOR: Was ist die größte Schwierigkeit? HERR BRANDT: Ganz klar die Miete. Personal zu finden ist dagegen leichter geworden. MODERATOR: Würden Sie heute noch einmal eröffnen? HERR BRANDT: Ja, aber nicht in einer Einkaufsstraße. Ich würde eine Nebenstraße suchen.",
    [
      { s: "Herr Brandt führt die Buchhandlung seit zwölf Jahren.", a: "r" },
      { s: "Er verkauft heute weniger Bücher als vor fünf Jahren.", a: "f" },
      { s: "Die meisten Kundinnen und Kunden suchen einen bestimmten Titel.", a: "f" },
      { s: "Herr Brandt hält die Beratung für den wichtigsten Grund des Erfolgs.", a: "r" },
      { s: "Lesungen finden etwa einmal im Monat statt.", a: "r" },
      { s: "Mit den Lesungen verdient die Buchhandlung unmittelbar Geld.", a: "f" },
      { s: "Die Eintrittsgelder decken ungefähr die Kosten der Lesungen.", a: "r" },
      { s: "Die größte Schwierigkeit ist für ihn die Miete.", a: "r" },
      { s: "Personal zu finden ist nach seiner Erfahrung schwieriger geworden.", a: "f" },
      { s: "Er würde einen neuen Laden wieder in einer Einkaufsstraße eröffnen.", a: "f" },
    ], 10, 600),

  single("TELC_B2_HV_T2", "Rundfunk-Interview: Als Fahrradkurier unterwegs",
    "MODERATORIN: Frau Kilic, Sie arbeiten seit drei Jahren als Fahrradkurierin. Wie sieht ein typischer Tag aus? FRAU KILIC: Ich beginne meist gegen zehn und fahre bis in den frühen Abend. An einem normalen Tag komme ich auf rund sechzig Kilometer. MODERATORIN: Das klingt anstrengend. FRAU KILIC: Körperlich gewöhnt man sich daran, schneller als die meisten denken. Anstrengender ist der Verkehr. MODERATORIN: Sie meinen die Autos? FRAU KILIC: Auch, aber vor allem fehlende Radwege. Wo es gute Wege gibt, ist die Arbeit angenehm. MODERATORIN: Wie ist die Bezahlung? FRAU KILIC: Ich werde pro Auftrag bezahlt, nicht nach Stunden. An guten Tagen lohnt sich das, an Regentagen weniger, weil dann zwar mehr bestellt wird, man aber langsamer fährt. MODERATORIN: Was würden Sie sich wünschen? FRAU KILIC: Feste Umkleiden und Duschen bei den Firmen. Das gibt es bisher fast nirgends. Über die Ausrüstung kann ich mich dagegen nicht beklagen, die wird gestellt.",
    [
      { s: "Frau Kilic arbeitet seit drei Jahren als Fahrradkurierin.", a: "r" },
      { s: "Sie fährt an einem normalen Tag etwa sechzig Kilometer.", a: "r" },
      { s: "An die körperliche Belastung gewöhnt man sich ihrer Erfahrung nach schnell.", a: "r" },
      { s: "Am anstrengendsten ist für sie die körperliche Arbeit.", a: "f" },
      { s: "Sie nennt fehlende Radwege als Hauptproblem im Verkehr.", a: "r" },
      { s: "Sie wird nach Stunden bezahlt.", a: "f" },
      { s: "An Regentagen wird nach ihrer Aussage weniger bestellt.", a: "f" },
      { s: "An Regentagen kommt sie langsamer voran.", a: "r" },
      { s: "Sie wünscht sich Umkleiden und Duschen bei den Firmen.", a: "r" },
      { s: "Die Ausrüstung muss sie selbst bezahlen.", a: "f" },
    ], 10, 600),

  single("TELC_B2_HV_T2", "Rundfunk-Interview: Ein Bauernhof stellt um",
    "MODERATOR: Frau Neumann, Sie haben Ihren Hof vor vier Jahren umgestellt. Was hat den Ausschlag gegeben? FRAU NEUMANN: Die Böden. Sie wurden von Jahr zu Jahr schlechter, und irgendwann war klar, dass es so nicht weitergeht. MODERATOR: War die Umstellung teuer? FRAU NEUMANN: Die Umstellung selbst weniger, als viele glauben. Schwierig waren die ersten beiden Jahre, weil die Erträge zurückgingen, die höheren Preise aber noch nicht galten. MODERATOR: Wie haben Sie diese Zeit überstanden? FRAU NEUMANN: Mit Ersparnissen und einem Kredit. Fördermittel gab es auch, aber sie kamen spät. MODERATOR: Und heute? FRAU NEUMANN: Heute sind die Erträge wieder fast auf dem alten Stand, und wir verkaufen einen großen Teil direkt ab Hof. Das ist der eigentliche Unterschied. MODERATOR: Würden Sie anderen dazu raten? FRAU NEUMANN: Nur, wenn sie zwei schwierige Jahre einplanen können. Ohne Rücklagen würde ich davon abraten.",
    [
      { s: "Frau Neumann hat ihren Hof vor vier Jahren umgestellt.", a: "r" },
      { s: "Ausschlaggebend war für sie der Zustand der Böden.", a: "r" },
      { s: "Die Umstellung selbst war teurer, als viele glauben.", a: "f" },
      { s: "In den ersten beiden Jahren gingen die Erträge zurück.", a: "r" },
      { s: "Die höheren Preise galten von Anfang an.", a: "f" },
      { s: "Sie hat die schwierige Zeit mit Ersparnissen und einem Kredit überbrückt.", a: "r" },
      { s: "Fördermittel hat sie keine erhalten.", a: "f" },
      { s: "Die Erträge liegen heute wieder fast auf dem früheren Stand.", a: "r" },
      { s: "Ein großer Teil wird direkt ab Hof verkauft.", a: "r" },
      { s: "Sie rät allen Betrieben ohne Einschränkung zur Umstellung.", a: "f" },
    ], 10, 600),

  single("TELC_B2_HV_T2", "Rundfunk-Interview: Arbeit in der Kita",
    "MODERATORIN: Herr Peters, Sie arbeiten seit acht Jahren als Erzieher. Was hat sich in dieser Zeit verändert? HERR PETERS: Die Gruppen sind größer geworden, und der Aufwand für Dokumentation hat deutlich zugenommen. MODERATORIN: Bleibt dann noch Zeit für die Kinder? HERR PETERS: Weniger, als ich möchte. An manchen Tagen sitze ich eine Stunde am Schreibtisch. MODERATORIN: Wie viele Kinder betreuen Sie? HERR PETERS: In meiner Gruppe sind zweiundzwanzig, früher waren es achtzehn. MODERATORIN: Warum bleiben Sie trotzdem? HERR PETERS: Weil die Arbeit selbst gut ist. Man sieht, wie Kinder sich entwickeln, und das ist jeden Tag anders. MODERATORIN: Was müsste sich ändern? HERR PETERS: Vor allem der Personalschlüssel. Über die Bezahlung wird viel gesprochen, aber sie ist nicht mein Hauptproblem. MODERATORIN: Und die Ausbildung? HERR PETERS: Die halte ich für solide. Was fehlt, ist Zeit für Weiterbildung im Alltag.",
    [
      { s: "Herr Peters arbeitet seit acht Jahren als Erzieher.", a: "r" },
      { s: "Der Aufwand für Dokumentation hat nach seiner Erfahrung abgenommen.", a: "f" },
      { s: "Er verbringt an manchen Tagen eine Stunde am Schreibtisch.", a: "r" },
      { s: "In seiner Gruppe sind heute zweiundzwanzig Kinder.", a: "r" },
      { s: "Früher waren es zwanzig Kinder.", a: "f" },
      { s: "Er bleibt im Beruf, weil ihm die Arbeit selbst gefällt.", a: "r" },
      { s: "Als wichtigste Änderung nennt er den Personalschlüssel.", a: "r" },
      { s: "Die Bezahlung ist für ihn das Hauptproblem.", a: "f" },
      { s: "Die Ausbildung hält er für solide.", a: "r" },
      { s: "Für Weiterbildung bleibt im Alltag genügend Zeit.", a: "f" },
    ], 10, 600),

  single("TELC_B2_HV_T2", "Rundfunk-Interview: Ein Museum für alle",
    "MODERATOR: Frau Adam, Ihr Museum hat vor zwei Jahren ein neues Konzept eingeführt. Worum geht es? FRAU ADAM: Kurz gesagt: Wir wollten weg von langen Texten an der Wand. Stattdessen gibt es kurze Erklärungen, Hörstationen und Objekte zum Anfassen. MODERATOR: Hat das die Besucherzahlen verändert? FRAU ADAM: Ja, deutlich. Wir haben inzwischen etwa ein Drittel mehr Besucher als vorher. MODERATOR: Wer kommt neu dazu? FRAU ADAM: Vor allem Familien. Ältere Besucher hatten wir schon immer viele. MODERATOR: Gab es auch Kritik? FRAU ADAM: Durchaus. Einigen Fachleuten gehen die kurzen Texte zu weit. Sie befürchten, dass Zusammenhänge verloren gehen. Wir haben deshalb einen ausführlichen Katalog aufgelegt. MODERATOR: Ist der Eintritt weiterhin kostenlos? FRAU ADAM: Nein, das war er nie. Aber sonntags zahlen Familien nur die Hälfte.",
    [
      { s: "Das neue Konzept wurde vor zwei Jahren eingeführt.", a: "r" },
      { s: "Das Museum setzt jetzt auf lange Texte an der Wand.", a: "f" },
      { s: "Es gibt Hörstationen und Objekte zum Anfassen.", a: "r" },
      { s: "Die Besucherzahl ist um etwa ein Drittel gestiegen.", a: "r" },
      { s: "Vor allem ältere Besucher sind neu hinzugekommen.", a: "f" },
      { s: "Familien kommen seit dem neuen Konzept häufiger.", a: "r" },
      { s: "Einige Fachleute kritisieren die kurzen Texte.", a: "r" },
      { s: "Als Reaktion auf die Kritik wurde ein ausführlicher Katalog aufgelegt.", a: "r" },
      { s: "Der Eintritt war früher kostenlos.", a: "f" },
      { s: "Sonntags zahlen Familien den vollen Preis.", a: "f" },
    ], 10, 600),
];

// ── TEIL 3 — selektives Hören · 5 kurze Ansagen · scripts NEWLY WRITTEN ─────
const T3: ExamItemInput[] = [
  segmented("Ansagen: Bahnhof und Verkehr", [
    { label: "Ansage 1", script: "Achtung auf Gleis 4: Der Regionalexpress nach Norden fährt heute etwa fünfzehn Minuten später ab. Grund ist eine Störung im Betriebsablauf. Reisende nach Westen nutzen bitte den Zug auf Gleis 7.", st: { s: "Der Zug auf Gleis 4 fährt später als geplant.", a: "r" } },
    { label: "Ansage 2", script: "Liebe Fahrgäste, wegen Bauarbeiten verkehrt die Linie 12 an diesem Wochenende nur bis zur Haltestelle Marktplatz. Von dort fahren Busse im Zehnminutentakt weiter. Die Fahrkarten gelten in den Bussen ohne Aufpreis.", st: { s: "Für die Busse muss ein Aufpreis bezahlt werden.", a: "f" } },
    { label: "Ansage 3", script: "Information für Reisende mit Fahrrad: In den Zügen dieser Linie stehen am Wochenende nur vier Stellplätze zur Verfügung. Eine Reservierung ist nicht möglich. Wir bitten um Verständnis.", st: { s: "Fahrradstellplätze können im Voraus reserviert werden.", a: "f" } },
    { label: "Ansage 4", script: "Am Hauptausgang ist der Aufzug bis Ende der Woche außer Betrieb. Reisende mit Gepäck nutzen bitte den Aufzug am Nordausgang. Dieser ist rund um die Uhr in Betrieb.", st: { s: "Der Aufzug am Nordausgang ist ebenfalls außer Betrieb.", a: "f" } },
    { label: "Ansage 5", script: "Der Fundbüroschalter in der Empfangshalle ist ab Montag nur noch vormittags geöffnet. Verlorene Gegenstände können außerhalb dieser Zeiten telefonisch gemeldet werden.", st: { s: "Das Fundbüro ist ab Montag nur vormittags geöffnet.", a: "r" } },
  ]),

  segmented("Ansagen: im Kaufhaus und im Betrieb", [
    { label: "Ansage 1", script: "Liebe Kundinnen und Kunden, unsere Kassen im Untergeschoss schließen heute bereits um achtzehn Uhr. Bitte nutzen Sie danach die Kassen im Erdgeschoss. Diese sind wie gewohnt bis zwanzig Uhr besetzt.", st: { s: "Die Kassen im Untergeschoss schließen heute um achtzehn Uhr.", a: "r" } },
    { label: "Ansage 2", script: "Achtung, eine Durchsage für die Beschäftigten der Abteilung Versand: Die Besprechung am Donnerstag wird auf Freitag zehn Uhr verschoben. Der Raum bleibt unverändert.", st: { s: "Die Besprechung findet an einem anderen Tag statt als geplant.", a: "r" } },
    { label: "Ansage 3", script: "Wir weisen darauf hin, dass die Tiefgarage am Sonntag wegen Reinigungsarbeiten geschlossen bleibt. Fahrzeuge, die dann noch dort stehen, können nicht herausgefahren werden.", st: { s: "Am Sonntag kann man Fahrzeuge aus der Tiefgarage holen.", a: "f" } },
    { label: "Ansage 4", script: "Eine Information aus der Personalabteilung: Die neuen Ausweise liegen ab morgen am Empfang bereit. Bitte bringen Sie den alten Ausweis mit, er wird direkt eingezogen.", st: { s: "Der alte Ausweis muss mitgebracht werden.", a: "r" } },
    { label: "Ansage 5", script: "Liebe Kundinnen und Kunden, der Umtausch reduzierter Ware ist bei uns innerhalb von vierzehn Tagen möglich, sofern Sie den Kassenbon vorlegen. Ohne Bon können wir leider nichts umtauschen.", st: { s: "Reduzierte Ware kann ohne Kassenbon umgetauscht werden.", a: "f" } },
  ]),

  segmented("Ansagen: Kurse und Veranstaltungen", [
    { label: "Ansage 1", script: "Ein Hinweis für die Teilnehmenden des Abendkurses: Der Unterricht beginnt ab nächster Woche eine halbe Stunde früher. Der Raum bleibt derselbe. Bitte denken Sie an Ihre Unterlagen.", st: { s: "Der Kurs beginnt künftig später als bisher.", a: "f" } },
    { label: "Ansage 2", script: "Die Lesung heute Abend findet nicht im großen Saal statt, sondern im Lesecafé im ersten Stock. Der Eintritt ist wie angekündigt frei, um eine Spende wird gebeten.", st: { s: "Die Lesung wurde in einen anderen Raum verlegt.", a: "r" } },
    { label: "Ansage 3", script: "Aufgrund der großen Nachfrage bieten wir den Anfängerkurs ab Herbst zweimal wöchentlich an. Wer bereits angemeldet ist, behält seinen Platz und muss nichts weiter tun.", st: { s: "Bereits angemeldete Personen müssen sich erneut anmelden.", a: "f" } },
    { label: "Ansage 4", script: "Der Ausflug am Samstag findet bei jedem Wetter statt. Bitte tragen Sie feste Schuhe. Treffpunkt ist um acht Uhr am Parkplatz, die Abfahrt erfolgt pünktlich.", st: { s: "Der Ausflug wird bei schlechtem Wetter abgesagt.", a: "f" } },
    { label: "Ansage 5", script: "Für den Kochkurs am Mittwoch sind noch drei Plätze frei. Die Zutaten sind im Preis enthalten. Eine Anmeldung ist bis Dienstagmittag im Büro möglich.", st: { s: "Die Zutaten für den Kochkurs sind im Preis enthalten.", a: "r" } },
  ]),

  segmented("Ansagen: Wohnen und Nachbarschaft", [
    { label: "Ansage 1", script: "Eine Mitteilung der Hausverwaltung: Am Dienstag wird zwischen neun und zwölf Uhr das Wasser abgestellt. Bitte lassen Sie danach die Leitungen kurz laufen, bevor Sie das Wasser wieder nutzen.", st: { s: "Das Wasser wird am Dienstag am Nachmittag abgestellt.", a: "f" } },
    { label: "Ansage 2", script: "Liebe Nachbarinnen und Nachbarn, die Mülltonnen werden ab kommender Woche donnerstags statt montags geleert. Bitte stellen Sie die Tonnen am Vorabend an die Straße.", st: { s: "Die Mülltonnen werden künftig donnerstags geleert.", a: "r" } },
    { label: "Ansage 3", script: "Der Spielplatz im Innenhof bleibt wegen der Erneuerung des Bodens bis Ende des Monats gesperrt. Der Spielplatz an der Schule kann in dieser Zeit genutzt werden.", st: { s: "Der Spielplatz im Innenhof ist zurzeit gesperrt.", a: "r" } },
    { label: "Ansage 4", script: "Wir erinnern daran, dass das Treppenhaus kein Abstellplatz ist. Fahrräder und Kinderwagen gehören in den Keller. Die Feuerwehr hat uns hierauf ausdrücklich hingewiesen.", st: { s: "Fahrräder dürfen im Treppenhaus abgestellt werden.", a: "f" } },
    { label: "Ansage 5", script: "Das Sommerfest im Hof beginnt am Samstag um fünfzehn Uhr. Für Getränke ist gesorgt. Wer etwas zu essen mitbringen möchte, trägt sich bitte in die Liste im Eingang ein.", st: { s: "Getränke werden beim Sommerfest gestellt.", a: "r" } },
  ]),

  segmented("Ansagen: Praxis, Amt und Bibliothek", [
    { label: "Ansage 1", script: "Sie hören den Anrufbeantworter der Praxis. Unsere Sprechzeiten sind montags bis freitags von acht bis zwölf Uhr. In dringenden Fällen wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst.", st: { s: "Die Praxis hat auch am Wochenende Sprechstunde.", a: "f" } },
    { label: "Ansage 2", script: "Ein Hinweis für Besucherinnen und Besucher des Bürgeramts: Ohne Termin ist eine Bearbeitung derzeit nicht möglich. Termine können online oder telefonisch vereinbart werden.", st: { s: "Für einen Besuch im Bürgeramt ist ein Termin nötig.", a: "r" } },
    { label: "Ansage 3", script: "Die Bibliothek schließt heute ausnahmsweise bereits um sechzehn Uhr. Die Rückgabe von Medien ist über den Automaten am Eingang weiterhin rund um die Uhr möglich.", st: { s: "Medien können über den Automaten rund um die Uhr zurückgegeben werden.", a: "r" } },
    { label: "Ansage 4", script: "Bitte beachten Sie: Für die Ausstellung eines neuen Ausweises benötigen wir ein aktuelles Lichtbild. Fotos, die älter als ein Jahr sind, können wir nicht annehmen.", st: { s: "Ein Foto, das zwei Jahre alt ist, wird nicht angenommen.", a: "r" } },
    { label: "Ansage 5", script: "Die Anmeldung für die Deutschkurse im Herbst ist ab sofort möglich. Die Kurse beginnen im September. Eine Einstufung ist verpflichtend und findet in der letzten Augustwoche statt.", st: { s: "Die Einstufung ist freiwillig.", a: "f" } },
  ]),
];

const RAW_ITEMS: ExamItemInput[] = [...T1, ...T2, ...T3];

// ── WHY deGame IS NOT APPLIED HERE ─────────────────────────────────────────
// deRhythm repairs a binary rhythm by REORDERING the questions. That is right for a
// category-assignment item, and wrong for listening: in all three Teile the
// statements follow the recording, and in Teil 3 each statement is bound to a
// numbered Ansage. Reordering would leave a learner tracking Ansage 3, then 1, then
// 5 against audio that plays 1..5 — a worse defect than the rhythm it repairs.
//
// So the rhythm is AUTHORED, and asserted here instead of repaired. If a sequence
// ever goes uniform or alternating this throws at seed time rather than shipping and
// waiting for the distribution gate to notice.
function assertRhythm(items: ExamItemInput[]): ExamItemInput[] {
  for (const it of items) {
    const seq = ((it.payload as any).questions as { answer: string }[]).map((q) => q.answer);
    if (new Set(seq).size < 2) throw new Error(`${it.title}: answer sequence is uniform (${seq.join("")})`);
    const alternating = seq.every((v, i) => i === 0 || v !== seq[i - 1]);
    if (alternating) throw new Error(`${it.title}: answer sequence alternates (${seq.join("")})`);
  }
  return items;
}

export const ITEMS: ExamItemInput[] = assertRhythm(RAW_ITEMS);
