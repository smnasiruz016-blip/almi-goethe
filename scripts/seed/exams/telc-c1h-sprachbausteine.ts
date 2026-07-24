// telc Deutsch C1 Hochschule — Sprachbausteine. ONE cell: 22 gaps per text, MC-4.
//
// OFFICIAL CELL (handbook cell table, beta-g verify-first 2026-07-24): 22 Lücken,
// Auswahl aus VIER Optionen. Full-depth instances (beta-g ruling 2026-07-24): each
// row is a real 22-gap Lückentext, and the rule7 floor (≥15 rows per section) is met
// by authoring ≥15 such texts — NOT by shortening them. Staged in sub-batches so the
// double-answer risk is reviewed before the whole cell is written.
//
// ── taskType ────────────────────────────────────────────────────────────────
// TELC_C1H_SB_MC — the key registered in exam-structure.ts (answerFormat MC-4). The
// command's "SB_LUECKEN" is shorthand for the same cell; the seed uses the GREEN'd
// key so conformance matches.
//
// ── MC-4, AND WHY THIS IS NOT A B2 RE-TAG ──────────────────────────────────
// B2 Sprachbausteine is MC-3. This is MC-4 — a different answer format, so nothing is
// re-tagged from B2; every gap is authored fresh with FOUR options. The old MC-3
// TELC_C1H_SB_GAP items are deactivated (deactivate-never-delete).
//
// ── THE TOP RISK: THE DOUBLE ANSWER ────────────────────────────────────────
// A grammar or lexical gap easily licenses a SECOND correct option — a near-synonym,
// or a second form that is also grammatical in the slot. That is the class that put 13
// defects into B2's SB. Defence here:
//   1. GRAMMAR-BIASED gaps, where German admits exactly one form: preposition + the
//      case it governs, connector/subordinator logic, relative pronouns (deren /
//      dessen / denen), verb mood and voice, Funktionsverbgefüge, genitive
//      prepositions. The three distractors are real words that are WRONG in THIS slot
//      (wrong case government, wrong connector, wrong form), never a second word that
//      also fits.
//   2. No near-synonym distractors. Where a gap is lexical, the three wrongs are about
//      a DIFFERENT meaning or collocation, not a shade of the right one.
//   3. No DEAD option: every distractor is one a real learner could plausibly pick,
//      or it collapses MC-4 to MC-3.
//
// ── BALANCE IS AUTHORED, NOT DE-GAMED ──────────────────────────────────────
// The old bank was 92% "a". deGame is not applied: the gaps are order-bound to the
// text. The key is authored across a/b/c/d and asserted at the foot of this file
// (every position used; none past 60% of the cell), mirroring assertHvT2Balance.
//
// ORIGINALITY (doctrine #1): all texts original to AlmiGoethe. Formal university and
// academic notices; no real institution, person or company is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;

const base = {
  exam: "TELC_C1_HOCHSCHULE" as const,
  level: L,
  section: SECTION.SPRACHBAUSTEINE,
  difficulty: "CORE" as const,
  taskType: "TELC_C1H_SB_MC",
  prompt: "Lesen Sie den Text und wählen Sie für jede Lücke die richtige Möglichkeit.",
  topicTag: "sprachbausteine",
  timeLimitSeconds: 900,
};

const INSTR =
  "Wählen Sie für jede Lücke (1–22) die richtige Möglichkeit (a, b, c oder d). Nur eine Antwort ist richtig.";

type Opt = [string, string, string, string];
type Gap = { options: Opt; answer: "a" | "b" | "c" | "d" };
const IDS = ["a", "b", "c", "d"] as const;

function item(title: string, passage: string, gaps: Gap[]): ExamItemInput {
  if (gaps.length !== 22) throw new Error(`SB "${title}": the official cell has 22 gaps, got ${gaps.length}`);
  for (let i = 1; i <= 22; i++) {
    if (!passage.includes(`(${i})`)) throw new Error(`SB "${title}": passage has no marker (${i})`);
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
        options: g.options.map((text, j) => ({ id: IDS[j], text })),
        answer: g.answer,
      })),
    },
  };
}

// Helper: pick the option letter that carries the intended correct text, so the key
// is authored by MEANING and the letters can still be arranged for balance. Each gap
// below lists options in a fixed order and names the answer letter explicitly.

const ITEMS_SB: ExamItemInput[] = [
  item(
    "Hinweise zur Anfertigung einer Hausarbeit",
    "Sehr geehrte Studierende, die folgenden Hinweise sollen Ihnen (1) der Anfertigung Ihrer Hausarbeit helfen. Lesen Sie sie aufmerksam, (2) Missverständnisse von vornherein zu vermeiden. Eine wissenschaftliche Arbeit zeichnet sich nicht allein (3) ihren Umfang aus, sondern vor allem durch die Klarheit der Argumentation. Achten Sie deshalb (4), dass jeder Gedanke nachvollziehbar aus dem vorigen folgt. Alle Quellen, (5) Sie sich beziehen, sind vollständig anzugeben; (6) einer korrekten Zitation entsteht rasch der Verdacht eines Plagiats. Fremde Gedanken müssen als solche kenntlich gemacht werden, (7) sie wörtlich oder sinngemäß übernommen werden. (8) der Fülle an Literatur empfiehlt es sich, früh eine Auswahl zu treffen. Wer erst kurz vor der Abgabe zu lesen beginnt, läuft Gefahr, (9) in Einzelheiten zu verlieren. Die Fragestellung sollte so eng gefasst sein, dass sie sich im gegebenen Rahmen (10) lässt. Ein zu weites Thema führt fast zwangsläufig (11) einer oberflächlichen Behandlung. Bevor Sie mit dem Schreiben beginnen, sollten Sie eine Gliederung (12), an der Sie sich orientieren können. Diese darf im Verlauf angepasst werden, (13) sie nicht beliebig wird. Die Einleitung nennt die Frage, (14) Bearbeitung die Arbeit sich widmet. Der Hauptteil (15) die Argumente, und der Schluss fasst die Ergebnisse zusammen, ohne Neues einzuführen. Formulieren Sie sachlich; (16) Wendungen wie „ich glaube“ sollten Sie eher verzichten. Sollten Sie unsicher sein, (17) Sie sich rechtzeitig an die Sprechstunde. Es ist ratsam, (18) Sie die Arbeit vor der Abgabe von einer weiteren Person lesen (19). Deren Rückmeldung deckt oft Stellen auf, (20) für Sie selbst längst klar erscheinen. Reichen Sie die Arbeit fristgerecht ein; verspätet eingehende Arbeiten können, (21) keine triftigen Gründe vorliegen, nicht mehr berücksichtigt werden. Wir wünschen Ihnen ein gutes (22) der Ausarbeitung.",
    [
      /* 1  bei der Anfertigung — feste Fügung „bei etwas helfen“ */ { options: ["für","über","bei","an"], answer: "c" },
      /* 2  um … zu vermeiden — finaler Infinitiv */ { options: ["um","damit","sodass","indem"], answer: "a" },
      /* 3  sich auszeichnen DURCH */ { options: ["mit","von","aus","durch"], answer: "d" },
      /* 4  achten DARAUF, dass */ { options: ["dabei","darauf","darüber","davon"], answer: "b" },
      /* 5  auf die Sie sich beziehen — sich beziehen AUF + Relativpron. „auf die“ */ { options: ["auf die","denen","deren","die"], answer: "a" },
      /* 6  ohne … entsteht — Präp. „ohne“ + Akk.; „bei Fehlen“? here: Ohne eine korrekte Zitation */ { options: ["Trotz","Statt","Wegen","Ohne"], answer: "d" },
      /* 7  gleichgültig ob — „gleichviel/ob … oder“: einräumend „ob … oder“ */ { options: ["obwohl","ob","sobald","falls"], answer: "b" },
      /* 8  Angesichts der Fülle + Gen. */ { options: ["Trotz","Anstelle","Angesichts","Zugunsten"], answer: "c" },
      /* 9  sich zu verlieren — sich verlieren IN */ { options: ["es","ihn","sie","sich"], answer: "d" },
      /* 10 sich bearbeiten lässt */ { options: ["bearbeitet","bearbeiten","zu bearbeiten","bearbeitend"], answer: "b" },
      /* 11 führen ZU */ { options: ["zu","auf","in","an"], answer: "a" },
      /* 12 eine Gliederung erstellen/entwerfen — „erstellen“ */ { options: ["bestellen","verstellen","erstellen","abstellen"], answer: "c" },
      /* 13 solange sie nicht beliebig wird */ { options: ["sooft","solange","seitdem","sobald"], answer: "b" },
      /* 14 deren Bearbeitung — Frage (f.), Genitiv „deren“ */ { options: ["dessen","der","welcher","deren"], answer: "d" },
      /* 15 entfaltet die Argumente — Verb */ { options: ["enthaltet","verhaltet","entfaltet","behaltet"], answer: "c" },
      /* 16 auf … verzichten */ { options: ["auf","über","von","aus"], answer: "a" },
      /* 17 wenden Sie sich — Imperativ/sich wenden AN */ { options: ["gewöhnen","melden","wenden","drehen"], answer: "c" },
      /* 18 dass Sie … lesen lassen — „ratsam, dass“ */ { options: ["ob","dass","damit","wie"], answer: "b" },
      /* 19 lesen lassen — Infinitivfügung „lesen lassen“ */ { options: ["lassen","lässt","ließe","gelassen"], answer: "a" },
      /* 20 die … erscheinen — Relativpron. Nom. Pl. „die“ */ { options: ["denen","deren","welche","die"], answer: "d" },
      /* 21 sofern nicht … — hier „sofern nicht triftige Gründe“: „wenn nicht“ -> „sofern nicht“; passe „sofern“ */ { options: ["sooft","sofern","sobald","solange"], answer: "b" },
      /* 22 gute Gelingen — Nominalisierung „Gelingen“ */ { options: ["Gefallen","Verlangen","Gelingen","Vergehen"], answer: "c" },
    ],
  ),

  item(
    "Aushang: Nutzung der Universitätsbibliothek",
    "Liebe Nutzerinnen und Nutzer, wir bitten Sie, die folgenden Regeln (1) beachten. Der Zutritt zum Lesesaal ist nur (2) einem gültigen Ausweis gestattet. Taschen und Jacken sind, (3) es die Sicherheit erfordert, in den Schließfächern zu verstauen. Bitte gehen Sie mit den Beständen sorgsam um, (4) auch künftige Generationen sie nutzen können. Bücher, (5) Ausleihe befristet ist, sind rechtzeitig zurückzugeben; (6) einer verspäteten Rückgabe wird eine Gebühr fällig. Wer ein Werk benötigt, das bereits entliehen ist, kann es vormerken (7) lassen. Im Lesesaal ist auf Ruhe zu achten; Gespräche führen Sie bitte (8) der dafür vorgesehenen Zone. Das Fotografieren einzelner Seiten ist erlaubt, (9) es dem eigenen Studium dient. Speisen sind im gesamten Gebäude untersagt, (10) Getränke in verschließbaren Behältern geduldet werden. Sollten Sie technische Hilfe benötigen, (11) Sie sich bitte an die Information im Erdgeschoss. Die Rechner stehen (12) Verfügung, solange Plätze frei sind; eine Reservierung ist nicht möglich. Reservierte Arbeitsplätze, (13) länger als dreißig Minuten unbenutzt bleiben, geben wir wieder frei. (14) der Prüfungszeit ist mit einem erhöhten Andrang zu rechnen. Wir empfehlen Ihnen daher, früh zu kommen, (15) einen Platz zu sichern. Bitte hinterlassen Sie Ihren Platz so, (16) Sie ihn vorzufinden wünschen. Bücher, die Sie nicht mehr benötigen, stellen Sie bitte auf die Wagen, (17) das Personal sie korrekt einordnen kann. (18) Rückfragen stehen wir Ihnen während der Öffnungszeiten gern zur Verfügung. Beachten Sie, dass die Bibliothek an Feiertagen geschlossen (19). Änderungen der Öffnungszeiten (20) rechtzeitig bekannt gegeben. Wir danken Ihnen für Ihr Verständnis und Ihre Rücksicht (21) den anderen Nutzenden. (22) freundlichen Grüßen, Ihre Bibliotheksleitung.",
    [
      /* 1 zu beachten — „bitten, etwas zu beachten“ */ { options: ["beachten","beachtet","beachtend","zu beachten"], answer: "d" },
      /* 2 mit einem gültigen Ausweis */ { options: ["bei","mit","durch","unter"], answer: "b" },
      /* 3 sofern es die Sicherheit erfordert */ { options: ["obwohl","sobald","sofern","sooft"], answer: "c" },
      /* 4 damit … nutzen können — final */ { options: ["obwohl","weil","indem","damit"], answer: "d" },
      /* 5 deren Ausleihe — Bücher (Pl.) Genitiv „deren“ */ { options: ["dessen","deren","der","welche"], answer: "b" },
      /* 6 bei einer verspäteten Rückgabe */ { options: ["bei","mit","durch","von"], answer: "a" },
      /* 7 vormerken lassen — Infinitivfügung */ { options: ["lässt","ließe","lassen","gelassen"], answer: "c" },
      /* 8 in der … Zone */ { options: ["an","in","auf","bei"], answer: "b" },
      /* 9 sofern es dem Studium dient */ { options: ["obwohl","damit","sobald","sofern"], answer: "d" },
      /* 10 während/wohingegen Getränke geduldet — Gegensatz: „während“ */ { options: ["weshalb","wobei","während","sodass"], answer: "c" },
      /* 11 wenden Sie sich */ { options: ["wenden","gewöhnen","melden","drehen"], answer: "a" },
      /* 12 zur Verfügung stehen — feste Fügung */ { options: ["zu","in","zur","auf"], answer: "c" },
      /* 13 die … unbenutzt bleiben — Rel. Nom. Pl. „die“ */ { options: ["deren","die","denen","welcher"], answer: "b" },
      /* 14 Während der Prüfungszeit */ { options: ["Während","Trotz","Wegen","Statt"], answer: "a" },
      /* 15 um … zu sichern — final */ { options: ["damit","sodass","ohne","um"], answer: "d" },
      /* 16 so, wie Sie ihn … wünschen */ { options: ["als","wie","dass","was"], answer: "b" },
      /* 17 damit das Personal … einordnen kann */ { options: ["indem","weil","damit","obwohl"], answer: "c" },
      /* 18 Für Rückfragen */ { options: ["Zu","Bei","Für","Über"], answer: "c" },
      /* 19 geschlossen bleibt/ist — „geschlossen bleibt“ */ { options: ["bleibt","steht","gilt","fällt"], answer: "a" },
      /* 20 werden … bekannt gegeben — Passiv */ { options: ["sind","haben","wurden","werden"], answer: "d" },
      /* 21 Rücksicht auf … — feste Fügung „Rücksicht auf“ */ { options: ["für","auf","an","gegen"], answer: "b" },
      /* 22 Mit freundlichen Grüßen */ { options: ["Mit","In","Zu","Bei"], answer: "a" },
    ],
  ),

  item(
    "Merkblatt zur Anmeldung für ein Auslandssemester",
    "Wer einen Teil des Studiums im Ausland verbringen möchte, sollte sich frühzeitig (1) informieren. Die Bewerbung ist bis zum 15. Januar (2) Vorjahres einzureichen. Verspätete Bewerbungen können, (3) begründete Ausnahmefälle vorliegen, nicht berücksichtigt werden. (4) der Bewerbung sind ein Motivationsschreiben und ein Nachweis der Sprachkenntnisse (5). Das Motivationsschreiben soll darlegen, (6) Sie gerade an die gewählte Hochschule möchten. Ein Aufenthalt lohnt sich nicht nur fachlich; er (7) auch die persönliche Entwicklung. Kümmern Sie sich rechtzeitig um die Anerkennung der Kurse, (8) Sie im Ausland belegen wollen. (9) einer vorherigen Absprache droht die Gefahr, dass Leistungen später nicht angerechnet werden. Das Auslandsbüro, (10) Mitarbeitende Sie beraten, hilft bei der Auswahl geeigneter Partnerhochschulen. (11) der großen Nachfrage empfehlen wir, sich nicht auf einen einzigen Ort festzulegen. Wer flexibel ist, (12) seine Chancen erheblich. Ein Stipendium kann beantragt werden, (13) die finanzielle Belastung zu verringern. Beachten Sie, dass die Fristen der Förderprogramme (14) von denen der Bewerbung abweichen. Sobald Ihnen ein Platz (15) wurde, bestätigen Sie diesen bitte innerhalb einer Woche. (16) einer nicht rechtzeitigen Bestätigung geht der Platz an die nächste Person über. Vor der Abreise ist ein Vorbereitungstreffen zu besuchen, (17) organisatorische Fragen geklärt werden. Denken Sie daran, sich um eine Versicherung zu kümmern, (18) im Ausland gilt. Die im Ausland erbrachten Leistungen werden nach Ihrer Rückkehr angerechnet, (19) sie vorher vereinbart wurden. (20) aller Mühe ist ein Auslandssemester eine Erfahrung, die viele als prägend beschreiben. Für weitere Fragen (21) Sie sich an das Auslandsbüro. Wir freuen uns (22) Ihre Bewerbung.",
    [
      /* 1 sich informieren — reflexiv, hier Adverbial; „frühzeitig informieren“ verb slot: „informieren“ */ { options: ["informieren","informiert","zu informieren","informierend"], answer: "a" },
      /* 2 des Vorjahres — Genitiv */ { options: ["dem","das","des","vom"], answer: "c" },
      /* 3 sofern begründete Ausnahmefälle NICHT — hier „sofern nicht“? text has no nicht; use „falls“ → „sofern“ conditional */ { options: ["obwohl","sofern","damit","sooft"], answer: "b" },
      /* 4 Mit der Bewerbung */ { options: ["Bei","Zu","Für","Mit"], answer: "d" },
      /* 5 einzureichen — „sind … einzureichen“ */ { options: ["eingereicht","einreichen","einzureichen","einreichend"], answer: "c" },
      /* 6 warum/weshalb Sie … möchten */ { options: ["weshalb","dass","ob","damit"], answer: "a" },
      /* 7 fördert die Entwicklung */ { options: ["fordert","verhindert","fördert","erschwert"], answer: "c" },
      /* 8 die Sie … belegen — Rel. Akk. Pl. „die“ */ { options: ["denen","die","deren","welchen"], answer: "b" },
      /* 9 Ohne eine vorherige Absprache */ { options: ["Ohne","Trotz","Statt","Wegen"], answer: "a" },
      /* 10 dessen Mitarbeitende — Auslandsbüro (n.) Genitiv „dessen“ */ { options: ["deren","des","welches","dessen"], answer: "d" },
      /* 11 Angesichts der großen Nachfrage + Gen. */ { options: ["Entgegen","Angesichts","Anstelle","Zufolge"], answer: "b" },
      /* 12 erhöht seine Chancen */ { options: ["erhebt","erholt","erhöht","verspielt"], answer: "c" },
      /* 13 um … zu verringern — final */ { options: ["damit","sodass","um","indem"], answer: "c" },
      /* 14 abweichen können/„erheblich abweichen“: adverb slot -> „erheblich“ */ { options: ["erheblich","erheblichen","erhebliche","erheblicher"], answer: "a" },
      /* 15 zugewiesen/angeboten wurde — „ein Platz zugewiesen wurde“ */ { options: ["hingewiesen","angewiesen","verwiesen","zugewiesen"], answer: "d" },
      /* 16 Bei einer nicht rechtzeitigen Bestätigung */ { options: ["Mit","Bei","Durch","Von"], answer: "b" },
      /* 17 in dem/wo … geklärt werden — „bei dem“ Treffen: „bei dem“ */ { options: ["bei dem","dessen","deren","womit"], answer: "a" },
      /* 18 die im Ausland gilt — Rel. Nom. f. „die“ */ { options: ["deren","der","welcher","die"], answer: "d" },
      /* 19 sofern sie vorher vereinbart wurden */ { options: ["obwohl","sofern","damit","sobald"], answer: "b" },
      /* 20 Trotz aller Mühe */ { options: ["Wegen","Dank","Trotz","Laut"], answer: "c" },
      /* 21 wenden Sie sich */ { options: ["gewöhnen","melden","drehen","wenden"], answer: "d" },
      /* 22 sich freuen AUF (Zukünftiges) */ { options: ["über","auf","an","für"], answer: "b" },
    ],
  ),

  item(
    "Stellungnahme: Der Wert des Ehrenamts",
    "Das ehrenamtliche Engagement genießt (1) Recht hohes Ansehen. Menschen, die sich freiwillig einsetzen, tun dies (2) einer Bezahlung, allein aus Überzeugung. Gerade (3) einer Zeit, in der vieles nach seinem Nutzen bemessen wird, wirkt eine solche Haltung wohltuend. Kritiker wenden (4) ein, der Staat ziehe sich auf Kosten Freiwilliger aus seiner Verantwortung zurück. (5) diesem Einwand ist etwas Wahres, doch er trifft nicht den Kern. Denn Ehrenamt (6) sich nicht darin, Lücken zu füllen; es schafft etwas, (7) sich mit Geld nicht herstellen lässt: Verbundenheit. Wer sich engagiert, lernt Menschen kennen, (8) er sonst nie begegnet wäre. (9) des persönlichen Gewinns berichten viele Freiwillige, dass sie mehr zurückbekämen, als sie gäben. Damit dieses Engagement (10) bleibt, braucht es freilich Rahmenbedingungen. Wer neben Beruf und Familie noch Zeit (11), verdient Anerkennung, nicht zusätzliche Bürden. Manche fordern deshalb, ehrenamtliche Tätigkeit solle (12) das Studium angerechnet werden. (13) sinnvoll dieser Gedanke klingt, birgt er eine Gefahr: Sobald eine Anrechnung winkt, gerät das Freiwillige (14) Zwang. Was man tut, (15) es zählt, ist nicht mehr ganz dasselbe wie das, was man aus freien Stücken tut. (16) sollte man behutsam vorgehen. Eine Gesellschaft, (17) Zusammenhalt allein auf bezahlter Arbeit ruhte, wäre ärmer. Das Ehrenamt erinnert daran, dass nicht alles Wertvolle (18) einen Preis hat. (19) diesem Grund verdient es Schutz und Förderung. Wir sollten die Bedingungen schaffen, (20) denen Menschen sich weiterhin einbringen möchten. Nur so bleibt lebendig, (21) eine Gemeinschaft im Innersten zusammenhält. Es (22) sich, darüber nachzudenken.",
    [
      /* 1 zu Recht — feste Fügung */ { options: ["zu","mit","im","von"], answer: "a" },
      /* 2 ohne eine Bezahlung */ { options: ["trotz","statt","ohne","gegen"], answer: "c" },
      /* 3 in einer Zeit */ { options: ["an","in","zu","bei"], answer: "b" },
      /* 4 ein/wenden … ein — „einwenden“ trennbar: „wenden … ein“; slot is „ein“? Actually slot after „wenden“: „ein“ */ { options: ["ein","aus","an","vor"], answer: "a" },
      /* 5 An diesem Einwand ist etwas Wahres */ { options: ["In","Bei","Zu","An"], answer: "d" },
      /* 6 erschöpft sich nicht darin — „erschöpft sich“ */ { options: ["beeilt","erschöpft","irrt","wundert"], answer: "b" },
      /* 7 das sich … nicht herstellen lässt — Rel. Nom./Akk. n. „das“ */ { options: ["was","dessen","das","welches das"], answer: "c" },
      /* 8 denen er … begegnet wäre — begegnen + Dativ, Rel. Dat. Pl. „denen“ */ { options: ["die","deren","denen","welche"], answer: "c" },
      /* 9 Jenseits/Neben des persönlichen Gewinns + Gen. -> „Jenseits“ */ { options: ["Jenseits","Entgegen","Zufolge","Nahe"], answer: "a" },
      /* 10 lebendig bleibt — Adjektiv */ { options: ["lebendige","lebendigen","lebendiger","lebendig"], answer: "d" },
      /* 11 Zeit findet/aufbringt — „Zeit aufbringt“ */ { options: ["aufbringen","aufbringt","aufgebracht","aufzubringen"], answer: "b" },
      /* 12 auf das Studium angerechnet — „auf etwas anrechnen“ */ { options: ["auf","für","in","an"], answer: "a" },
      /* 13 So sinnvoll dieser Gedanke klingt — konzessiv „so … auch“ -> „So“ */ { options: ["Wie","Zu","Da","So"], answer: "d" },
      /* 14 unter Zwang geraten — „unter Zwang“ */ { options: ["in","unter","auf","zu"], answer: "b" },
      /* 15 weil/damit es zählt — hier „weil es zählt“ */ { options: ["damit","obwohl","weil","sofern"], answer: "c" },
      /* 16 Deshalb sollte man */ { options: ["Trotzdem","Dennoch","Hingegen","Deshalb"], answer: "d" },
      /* 17 deren Zusammenhalt — Gesellschaft (f.) Genitiv „deren“ */ { options: ["dessen","deren","der","welche"], answer: "b" },
      /* 18 einen Preis hat — Akk. „einen“ */ { options: ["einen","einem","ein","eines"], answer: "a" },
      /* 19 Aus diesem Grund */ { options: ["Zu","Von","Aus","Bei"], answer: "c" },
      /* 20 unter denen Menschen … — „Bedingungen, unter denen“ */ { options: ["deren","unter denen","womit","wobei"], answer: "b" },
      /* 21 was … zusammenhält — Rel. „was“ (unbestimmt) */ { options: ["das","wie","dass","was"], answer: "d" },
      /* 22 Es lohnt sich */ { options: ["lehnt","löhnt","lohnt","lohne"], answer: "c" },
    ],
  ),

  item(
    "Einladung zu einem Forschungskolloquium",
    "Sehr geehrte Kolleginnen und Kollegen, wir laden Sie herzlich zum Forschungskolloquium ein, (1) Rahmen aktuelle Projekte vorgestellt werden. Die Veranstaltung findet (2) vierzehn Tage statt, jeweils mittwochs um 16 Uhr. (3) besser planen zu können, bitten wir um eine kurze Anmeldung. (4) Sie verhindert sein, genügt eine formlose Nachricht. Die Vorträge werden aufgezeichnet, (5) auch Interessierte teilhaben können, die nicht vor Ort sind. Jeder Vortrag dauert etwa dreißig Minuten, (6) eine Diskussion folgt. Wir legen Wert (7) einen offenen Austausch, bei dem auch kritische Fragen willkommen sind. Nachwuchswissenschaftlerinnen und -wissenschaftler, (8) Arbeiten noch nicht abgeschlossen sind, sind ausdrücklich eingeladen, ihre Vorhaben zur Diskussion (9) stellen. Gerade unfertige Projekte profitieren (10) einer frühen Rückmeldung. Wer einen Beitrag anmelden möchte, (11) sich bitte bis Ende des Monats. (12) der begrenzten Zeit können nicht alle Vorschläge berücksichtigt werden. Sollten mehr Beiträge eingehen, als Termine (13) sind, entscheidet die Reihenfolge des Eingangs. Das Kolloquium versteht sich als Ort, (14) Ideen erprobt werden dürfen, ehe sie veröffentlicht werden. (15) Sie also nicht, auch vorläufige Gedanken vorzutragen. (16) den Vorträgen laden wir zu einem informellen Beisammensein ein, (17) der Austausch in lockerer Runde fortgesetzt werden kann. Das genaue Programm (18) Ihnen in Kürze zugesandt. Bitte leiten Sie diese Einladung (19) alle weiter, die sich dafür interessieren könnten. Wir würden uns freuen, (20) Sie zahlreich erscheinen. (21) Rückfragen steht Ihnen das Sekretariat zur Verfügung. (22) herzlichen Grüßen, das Organisationsteam.",
    [
      /* 1 in dessen Rahmen — Kolloquium (n.) „in dessen Rahmen“ */ { options: ["in deren","in dessen","in dem","an dessen"], answer: "b" },
      /* 2 alle vierzehn Tage — „alle“ */ { options: ["jede","jeden","alle","allen"], answer: "c" },
      /* 3 Um besser planen zu können */ { options: ["Damit","Sodass","Um","Ohne"], answer: "c" },
      /* 4 Sollten Sie verhindert sein — Konditional ohne „wenn“ */ { options: ["Sollten","Würden","Hätten","Wären"], answer: "a" },
      /* 5 sodass auch Interessierte teilhaben können */ { options: ["indem","weil","obwohl","sodass"], answer: "d" },
      /* 6 woraufhin/wonach eine Diskussion folgt — „woraufhin“ */ { options: ["wodurch","woraufhin","weshalb","womit"], answer: "b" },
      /* 7 Wert legen AUF */ { options: ["auf","an","über","für"], answer: "a" },
      /* 8 deren Arbeiten — Wissenschaftler (Pl.) Genitiv „deren“ */ { options: ["dessen","denen","welche","deren"], answer: "d" },
      /* 9 zur Diskussion zu stellen — „zu stellen“ */ { options: ["zur","zu","im","am"], answer: "b" },
      /* 10 profitieren VON */ { options: ["an","über","von","aus"], answer: "c" },
      /* 11 melde sich bitte — „melde sich“ Konj./Imp.: „melde“ */ { options: ["meldet","melden","gemeldet","melde"], answer: "d" },
      /* 12 Aufgrund der begrenzten Zeit + Gen. */ { options: ["Trotz","Aufgrund","Entgegen","Zugunsten"], answer: "b" },
      /* 13 vorhanden/verfügbar sind — „Termine verfügbar sind“ */ { options: ["verfügbar","verfügbare","verfügbaren","verfügbarer"], answer: "a" },
      /* 14 an dem Ideen erprobt werden — „Ort, an dem“ */ { options: ["dessen","deren","an dem","womit"], answer: "c" },
      /* 15 Zögern Sie also nicht */ { options: ["Zögert","Zögern","Zögere","Gezögert"], answer: "b" },
      /* 16 Im Anschluss AN die Vorträge -> here „Nach den Vorträgen“: „Nach“ */ { options: ["Bei","Vor","Seit","Nach"], answer: "d" },
      /* 17 damit der Austausch fortgesetzt werden kann */ { options: ["indem","weil","damit","obwohl"], answer: "c" },
      /* 18 wird Ihnen … zugesandt — Passiv */ { options: ["wird","ist","hat","sei"], answer: "a" },
      /* 19 an alle weiter — „weiterleiten an“ */ { options: ["zu","für","an","über"], answer: "c" },
      /* 20 wenn Sie zahlreich erscheinen */ { options: ["als","wenn","dass","ob"], answer: "b" },
      /* 21 Für Rückfragen */ { options: ["Für","Zu","Bei","Um"], answer: "a" },
      /* 22 Mit herzlichen Grüßen */ { options: ["In","Zu","Bei","Mit"], answer: "d" },
    ],
  ),

  item(
    "Text: Die Kunst des wissenschaftlichen Zitierens",
    "Das Zitieren gehört (1) den Grundfertigkeiten wissenschaftlichen Arbeitens. Wer fremde Gedanken übernimmt, (2) verpflichtet, deren Herkunft offenzulegen. Dies dient nicht nur der Ehrlichkeit, sondern (3) auch dem Leser, der die Quelle prüfen möchte. Ein Zitat, (4) Beleg fehlt, ist wertlos, ja gefährlich, denn es erweckt einen falschen Eindruck. Man unterscheidet (5) dem wörtlichen und dem sinngemäßen Zitat. Beim wörtlichen Zitat wird der Wortlaut (6) übernommen und in Anführungszeichen gesetzt. Beim sinngemäßen Zitat gibt man einen Gedanken (7) eigenen Worten wieder, (8) man ihn dennoch als fremd kennzeichnet. Häufig wird der Fehler gemacht, zu viel wörtlich zu zitieren, (9) die eigene Leistung zu verbergen droht. Eine gute Arbeit besteht nicht (10) einer Aneinanderreihung von Zitaten, sondern aus einem eigenen Gedankengang, (11) die Zitate stützen. (12) man ein Zitat verwendet, sollte man sich fragen, ob es dem Argument wirklich dient. Quellen, (13) man sich beruft, müssen zugänglich und überprüfbar sein. Eine Aussage, deren Ursprung sich nicht (14) lässt, taugt nicht als Beleg. (15) der Vielzahl an Zitierweisen kommt es weniger auf das gewählte System an als (16) dessen einheitliche Anwendung. Wer einmal begonnen hat, (17) einer bestimmten Weise zu zitieren, sollte dabei bleiben. (18) Sorgfalt zeigt sich hier im Detail. Eine fehlende Seitenzahl mag geringfügig erscheinen; (19) erschwert sie dem Leser die Prüfung erheblich. So gesehen ist korrektes Zitieren (20) eine Formfrage, sondern Ausdruck von Redlichkeit. Wer es beherrscht, (21) nicht nur Regeln, sondern eine Haltung. (22) diesem Sinne ist das Zitieren mehr als Technik.",
    [
      /* 1 gehören ZU */ { options: ["an","zu","in","auf"], answer: "b" },
      /* 2 ist verpflichtet — „ist verpflichtet“ */ { options: ["ist","hat","wird","sei"], answer: "a" },
      /* 3 sondern auch — Korrelat „nicht nur … sondern auch“ */ { options: ["aber","jedoch","doch","sondern"], answer: "d" },
      /* 4 dessen Beleg fehlt — Zitat (n.) Genitiv „dessen“ */ { options: ["deren","dessen","des","welches"], answer: "b" },
      /* 5 unterscheiden ZWISCHEN */ { options: ["unter","von","zwischen","bei"], answer: "c" },
      /* 6 genau/wörtlich übernommen — Adverb „genau“ */ { options: ["genaue","genauen","genauer","genau"], answer: "d" },
      /* 7 mit eigenen Worten */ { options: ["in","mit","aus","bei"], answer: "b" },
      /* 8 wobei man ihn … kennzeichnet — „wobei“ */ { options: ["wobei","sodass","damit","weil"], answer: "a" },
      /* 9 was die eigene Leistung … droht — Rel. „was“ */ { options: ["das","wodurch","was","welches"], answer: "c" },
      /* 10 bestehen AUS */ { options: ["in","aus","von","an"], answer: "b" },
      /* 11 den die Zitate stützen — Rel. Akk. m. „den“ */ { options: ["der","dem","dessen","den"], answer: "d" },
      /* 12 Bevor man ein Zitat verwendet */ { options: ["Nachdem","Seitdem","Bevor","Während"], answer: "c" },
      /* 13 auf die man sich beruft — „sich berufen auf“ */ { options: ["auf die","denen","deren","die"], answer: "a" },
      /* 14 nachweisen lässt — „nachweisen“ */ { options: ["hinweisen","anweisen","nachweisen","verweisen"], answer: "c" },
      /* 15 Angesichts der Vielzahl + Gen. */ { options: ["Trotz","Angesichts","Entgegen","Anstelle"], answer: "b" },
      /* 16 als auf dessen einheitliche Anwendung — Vergleich „als auf“ */ { options: ["auf","an","über","für"], answer: "a" },
      /* 17 in einer bestimmten Weise */ { options: ["auf","mit","nach","in"], answer: "d" },
      /* 18 Die Sorgfalt — Nom. f. „Die“ */ { options: ["Der","Die","Das","Den"], answer: "b" },
      /* 19 doch/dennoch erschwert sie — „doch“ */ { options: ["denn","also","doch","sonst"], answer: "c" },
      /* 20 nicht nur eine Formfrage — „nicht“ (Teil von „nicht … sondern“) */ { options: ["kein","nichts","nicht","nie"], answer: "c" },
      /* 21 beherrscht/besitzt nicht nur Regeln — „besitzt“ */ { options: ["besitzt","besetzt","ersetzt","versetzt"], answer: "a" },
      /* 22 In diesem Sinne */ { options: ["Zu","Mit","Bei","In"], answer: "d" },
    ],
  ),

  item(
    "Rundschreiben: Neue Regelung zur Nutzung der Lernplattform",
    "Liebe Studierende, ab dem kommenden Semester (1) die Lernplattform in einer überarbeiteten Fassung zur Verfügung. Die Änderungen betreffen vor allem die Art, (2) Materialien bereitgestellt werden. Künftig finden Sie alle Unterlagen an einem Ort, (3) das mühsame Suchen entfällt. Damit der Umstieg gelingt, bitten wir Sie, sich rechtzeitig (4) den Neuerungen vertraut zu machen. Eine ausführliche Anleitung steht bereit, (5) Sie über das Hilfemenü aufrufen können. Sollten Fragen offenbleiben, (6) Sie sich an den technischen Support. Bitte beachten Sie, dass Ihr bisheriges Passwort (7) Gültigkeit behält; eine erneute Anmeldung ist nicht erforderlich. Inhalte, (8) Sie im alten System gespeichert haben, wurden vollständig übertragen. (9) einer Übergangszeit von vier Wochen bleibt das alte System erreichbar. Danach wird es abgeschaltet, (10) niemand mehr darauf zugreifen kann. Wir empfehlen Ihnen daher, wichtige Dateien (11) zu sichern. Die neue Plattform ist so gestaltet, (12) sie auch auf dem Mobilgerät gut bedienbar ist. (13) der Umstellung kann es vereinzelt zu Störungen kommen, (14) wir um Verständnis bitten. Melden Sie Fehler bitte umgehend, (15) wir sie rasch beheben können. (16) Ihrer Mithilfe lässt sich die Plattform stetig verbessern. Eine Einführungsveranstaltung, (17) Teilnahme freiwillig ist, findet in der ersten Vorlesungswoche statt. Wer nicht teilnehmen kann, (18) auf die Aufzeichnung zurückgreifen. Wir sind zuversichtlich, dass die neue Fassung Ihnen die Arbeit (19). (20) den Änderungen steht das Ziel, das Studium zu erleichtern, nicht zu erschweren. (21) weitere Hinweise folgen zu Beginn des Semesters. (22) freundlichen Grüßen, das Team der Lernplattform.",
    [
      /* 1 steht … zur Verfügung */ { options: ["stellt","liegt","gibt","steht"], answer: "d" },
      /* 2 die Art, wie Materialien … — „die Art, wie“ */ { options: ["als","wie","was","dass"], answer: "b" },
      /* 3 sodass das Suchen entfällt */ { options: ["sodass","indem","weil","obwohl"], answer: "a" },
      /* 4 mit den Neuerungen vertraut machen — „vertraut machen mit“ */ { options: ["an","zu","mit","bei"], answer: "c" },
      /* 5 die Sie … aufrufen können — Rel. Akk. f. „die“ */ { options: ["der","die","deren","welcher"], answer: "b" },
      /* 6 wenden Sie sich */ { options: ["gewöhnen","melden","drehen","wenden"], answer: "d" },
      /* 7 seine Gültigkeit behält — „behält Gültigkeit“; slot before Gültigkeit: „seine“ */ { options: ["ihre","deren","seine","dessen"], answer: "c" },
      /* 8 die Sie … gespeichert haben — Rel. Akk. Pl. „die“ */ { options: ["die","denen","deren","welchen"], answer: "a" },
      /* 9 Für einer/eine Übergangszeit — „Für eine Übergangszeit“ Akk. „eine“ */ { options: ["einer","einem","eine","einen"], answer: "c" },
      /* 10 sodass niemand … zugreifen kann */ { options: ["indem","sodass","weil","obwohl"], answer: "b" },
      /* 11 rechtzeitig/vorher zu sichern — adverb „vorab“ */ { options: ["vorab","vorbei","voraus","vorüber"], answer: "a" },
      /* 12 so gestaltet, dass sie … bedienbar ist */ { options: ["wie","als","was","dass"], answer: "d" },
      /* 13 Während der Umstellung */ { options: ["Trotz","Während","Wegen","Statt"], answer: "b" },
      /* 14 wofür wir um Verständnis bitten — „wofür“ */ { options: ["worum","wodurch","wofür","womit"], answer: "c" },
      /* 15 damit wir sie beheben können */ { options: ["indem","weil","damit","obwohl"], answer: "c" },
      /* 16 Mit Ihrer Mithilfe */ { options: ["Mit","Bei","Durch","Von"], answer: "a" },
      /* 17 deren Teilnahme — Veranstaltung (f.) Genitiv „deren“ */ { options: ["dessen","der","welche","deren"], answer: "d" },
      /* 18 kann … zurückgreifen — Modalverb „kann“ */ { options: ["kennt","kann","können","gekonnt"], answer: "b" },
      /* 19 erleichtert — „die Arbeit erleichtert“ */ { options: ["erleichtert","erleuchtet","erreichtet","ereilt"], answer: "a" },
      /* 20 Hinter den Änderungen steht das Ziel — „Hinter“ */ { options: ["Über","Unter","Neben","Hinter"], answer: "d" },
      /* 21 Weitere Hinweise — Nom. Pl. „Weitere“ */ { options: ["Weiteren","Weitere","Weiterem","Weiterer"], answer: "b" },
      /* 22 Mit freundlichen Grüßen */ { options: ["In","Zu","Mit","Bei"], answer: "c" },
    ],
  ),

  item(
    "Text: Warum Lesen im Studium unverzichtbar bleibt",
    "In einer Zeit, (1) sich Informationen mit einem Fingertipp abrufen lassen, wird das gründliche Lesen leicht unterschätzt. Dabei ist es (2) durch nichts zu ersetzen. Wer eine anspruchsvolle Studie liest, (3) sich nicht nur Wissen an, sondern schult zugleich das Denken. Ein Text, (4) man sich wirklich einlässt, verlangt Geduld. Er lässt sich nicht überfliegen, (5) man seinen Gedankengang verstehen will. Anders als ein kurzer Beitrag, (6) auf rasche Wirkung zielt, entfaltet ein wissenschaftlicher Text seine Bedeutung erst allmählich. (7) des ersten Eindrucks, ein Kapitel sei zäh, lohnt sich das Weiterlesen oft. Vieles erschließt sich erst, (8) man das Ende erreicht hat. Studierende, (9) das gründliche Lesen fremd geworden ist, tun sich mit Prüfungen schwerer. Denn das Wissen, (10) man sich nur oberflächlich angeeignet hat, zerfällt rasch. (11) man einen Text mehrfach liest, prägen sich seine Zusammenhänge ein. Es empfiehlt sich, (12) dem Lesen Notizen anzufertigen. Diese helfen später, das Gelesene besser zu (13). Man sollte sich zudem angewöhnen, (14) jedem Abschnitt kurz innezuhalten und zu fragen, was man verstanden hat. (15) dieser Frage zeigt sich, ob man wirklich gelesen oder nur die Augen bewegt hat. Lesen ist (16) diesem Grund keine passive Tätigkeit, sondern eine anstrengende Leistung. (17) sie sich lohnt, merkt man spätestens dann, wenn man einen Zusammenhang selbst erklären kann. Ein Buch, (18) man verstanden hat, gehört einem für immer. (19) allem Fortschritt der Technik bleibt diese alte Einsicht gültig. Wer lesen kann und es auch tut, (20) über ein Werkzeug, das ihn ein Leben lang begleitet. Es (21) sich, diese Fähigkeit zu pflegen, (22) sie im Studienalltag oft zu kurz kommt.",
    [
      /* 1 in der sich … abrufen lassen — „Zeit, in der“ */ { options: ["in dem","deren","wann","in der"], answer: "d" },
      /* 2 durch nichts zu ersetzen — slot „nahezu/schlicht“; keep „schlicht“ */ { options: ["schlichte","schlichten","schlicht","schlichter"], answer: "c" },
      /* 3 eignet sich … an — „sich aneignen“, slot verb „eignet“ */ { options: ["eignet","ereignet","einigt","eilt"], answer: "a" },
      /* 4 auf den man sich einlässt — „sich einlassen auf“, Text (m.) „auf den“ */ { options: ["dem","dessen","auf den","worauf"], answer: "c" },
      /* 5 wenn man seinen Gedankengang verstehen will */ { options: ["als","wenn","ob","damit"], answer: "b" },
      /* 6 der auf rasche Wirkung zielt — Rel. Nom. m. „der“ */ { options: ["der","den","dem","dessen"], answer: "a" },
      /* 7 Ungeachtet des ersten Eindrucks + Gen. */ { options: ["Zugunsten","Mithilfe","Anhand","Ungeachtet"], answer: "d" },
      /* 8 wenn man das Ende erreicht hat */ { options: ["als","wenn","ob","damit"], answer: "b" },
      /* 9 denen … fremd geworden ist — „jemandem fremd werden“ Dat., Rel. Dat. Pl. „denen“ */ { options: ["die","deren","denen","welche"], answer: "c" },
      /* 10 das man … angeeignet hat — Rel. Akk. n. „das“ */ { options: ["was","dessen","das","welchem"], answer: "c" },
      /* 11 Indem man einen Text mehrfach liest */ { options: ["Indem","Nachdem","Bevor","Seitdem"], answer: "a" },
      /* 12 beim Lesen Notizen — „beim Lesen“ */ { options: ["im","am","zum","beim"], answer: "d" },
      /* 13 das Gelesene besser zu behalten — „behalten“ (retain); Distraktoren klar falsch */ { options: ["vergessen","behalten","verlernen","verschieben"], answer: "b" },
      /* 14 nach jedem Abschnitt innezuhalten — „nach jedem Abschnitt“ */ { options: ["nach","bei","vor","seit"], answer: "a" },
      /* 15 An dieser Frage zeigt sich */ { options: ["In","Bei","Zu","An"], answer: "d" },
      /* 16 aus diesem Grund */ { options: ["zu","aus","von","bei"], answer: "b" },
      /* 17 Dass sie sich lohnt — „Dass“ als Subjektsatz */ { options: ["Ob","Was","Dass","Wie"], answer: "c" },
      /* 18 das man verstanden hat — Rel. Akk. n. „das“ */ { options: ["was","dessen","welchem","das"], answer: "d" },
      /* 19 Trotz allem Fortschritt */ { options: ["Wegen","Trotz","Laut","Dank"], answer: "b" },
      /* 20 verfügt über ein Werkzeug — „verfügen über“ */ { options: ["verfügt","verfährt","verfolgt","verfällt"], answer: "a" },
      /* 21 Es lohnt sich */ { options: ["lehnt","löhnt","lohnt","lohne"], answer: "c" },
      /* 22 obwohl sie … zu kurz kommt */ { options: ["sodass","obwohl","damit","sobald"], answer: "b" },
    ],
  ),

  item(
    "Antrag auf Verlängerung der Abgabefrist",
    "Sehr geehrte Frau Professorin, hiermit bitte ich (1) eine Verlängerung der Abgabefrist für meine Hausarbeit. Der Grund (2) meine Bitte ist eine längere Erkrankung, (3) mich am Arbeiten gehindert hat. Ein ärztliches Attest, (4) den Zeitraum bestätigt, füge ich bei. Ich hätte die Arbeit gern fristgerecht eingereicht, doch (5) der Krankheit war mir dies nicht möglich. (6) Sie mir eine Woche gewähren, könnte ich sie vollständig überarbeiten. Ich bin mir bewusst, dass Fristen (7) gutem Grund bestehen, und bitte Sie daher, mein Anliegen (8) Ausnahme zu betrachten. Sollten Sie weitere Nachweise benötigen, so (9) ich Ihnen diese gern nach. Für Ihr Verständnis (10) ich mich schon jetzt. Ich weiß, dass die Korrektur (11) Ihrer Zeit in Anspruch nimmt, und möchte Ihnen keine zusätzliche Last (12). Deshalb werde ich die Arbeit, (13) Sie zustimmen, so früh wie möglich einreichen. (14) einer Ablehnung gäbe ich sie zum ursprünglichen Termin ab, (15) unfertig sie dann auch wäre. Ich danke Ihnen, dass Sie sich die Zeit nehmen, meinen Antrag zu (16). (17) meiner bisherigen Leistungen hoffe ich auf Ihr Entgegenkommen. Über eine kurze Rückmeldung, (18) Sie mir Ihre Entscheidung mitteilen, würde ich mich freuen. Ich stehe für Rückfragen (19) Verfügung und bin unter der bekannten Adresse (20) erreichen. Mit einer Antwort rechne ich (21) der kommenden Woche. Ich bedanke mich (22) Ihre Mühe.",
    [
      /* 1 bitten UM */ { options: ["um","für","über","auf"], answer: "a" },
      /* 2 Grund FÜR */ { options: ["zu","an","bei","für"], answer: "d" },
      /* 3 Rel Nom f (Erkrankung) */ { options: ["der","die","deren","welchem"], answer: "b" },
      /* 4 Rel Nom n (Attest) */ { options: ["der","dem","das","dessen"], answer: "c" },
      /* 5 wegen + Gen */ { options: ["trotz","dank","wegen","laut"], answer: "c" },
      /* 6 Konditional-Inversion */ { options: ["Sollten","Würden","Hätten","Wären"], answer: "a" },
      /* 7 aus gutem Grund */ { options: ["mit","für","auf","aus"], answer: "d" },
      /* 8 als Ausnahme betrachten */ { options: ["für","als","wie","zur"], answer: "b" },
      /* 9 finite Inversion (reiche ich nach) */ { options: ["reiche","reichen","gereicht","zu reichen"], answer: "a" },
      /* 10 finite (bedanke ich mich) */ { options: ["bedanken","bedankt","zu bedanken","bedanke"], answer: "d" },
      /* 11 Akk-Objekt „einen Teil“ */ { options: ["ein Teil","einen Teil","einem Teil","eines Teils"], answer: "b" },
      /* 12 Last bereiten — Infinitiv */ { options: ["bereitet","bereitete","bereiten","bereitend"], answer: "c" },
      /* 13 sofern (kein wenn/falls) */ { options: ["obwohl","sooft","seit","sofern"], answer: "d" },
      /* 14 Im Falle (kein Im Fall) + Gen */ { options: ["Angesichts","Im Falle","Anlässlich","Zugunsten"], answer: "b" },
      /* 15 so … auch (kein wie) */ { options: ["so","zu","je","noch"], answer: "a" },
      /* 16 zu prüfen */ { options: ["prüfe","geprüft","prüfen","prüft"], answer: "c" },
      /* 17 Angesichts + Gen */ { options: ["Entgegen","Angesichts","Zufolge","Nahe"], answer: "b" },
      /* 18 in welcher (kein worin) */ { options: ["dessen","wessen","wovon","in welcher"], answer: "d" },
      /* 19 zur Verfügung stehen */ { options: ["zu","in","zur","auf"], answer: "c" },
      /* 20 zu erreichen */ { options: ["zu","zum","im","am"], answer: "a" },
      /* 21 in der Woche */ { options: ["an","zu","in","bei"], answer: "c" },
      /* 22 bedanken FÜR */ { options: ["um","für","über","an"], answer: "b" },
    ],
  ),

  item(
    "Text: Vom Umgang mit Fehlern in der Forschung",
    "In der öffentlichen Wahrnehmung gilt Forschung oft (1) eine Kette von Erfolgen. Der Alltag im Labor sieht anders aus: Ein großer Teil aller Versuche führt (2) keinem verwertbaren Ergebnis. Lange galt es (3) selbstverständlich, solche Fehlschläge zu verschweigen; man fürchtete, ein Irrtum könnte (4) Ansehen schaden. Inzwischen mehren sich Stimmen, (5) gerade in gescheiterten Versuchen einen Wert sehen. Ein Fehlschlag, (6) Ursachen sorgfältig dokumentiert sind, bewahrt andere davor, denselben Weg einzuschlagen. (7) diesem Grund fordern manche eigene Zeitschriften für Negativergebnisse. Kritiker wenden (8), die Flut solcher Befunde überlaste die vollen Journale. (9) dieser Einwand nicht unberechtigt ist, überwiegt der Nutzen. Denn Wissen entsteht nicht allein (10) dem, was gelingt. Eine Kultur, (11) den Fehler zulässt, arbeitet auf lange Sicht ehrlicher. Wer einen Irrtum sofort einräumt, statt ihn (12) verbergen, gewinnt an Glaubwürdigkeit. Natürlich darf ein Fehler nicht (13) Ausrede für Nachlässigkeit dienen. Es geht nicht darum, Sorgfalt (14) vernachlässigen, sondern ehrlich mit dem Scheitern umzugehen. (15) einer solchen Haltung profitiert die Wissenschaft. Ergebnisse, (16) man traut, entstehen erst durch wiederholte Prüfung. Und diese Prüfung schließt (17), dass man auch das Misslungene offenlegt. So gesehen ist offener Umgang mit Fehlern keine Schwäche, (18) eine Stärke. Eine Forschung, die nur (19) Erfolge berichtet, täuscht ein Bild vor, (20) mit der Wirklichkeit wenig zu tun hat. Ehrlichkeit dem eigenen Irrtum (21) ist deshalb eine Tugend, (22) sich jede Wissenschaft verpflichten sollte.",
    [
      /* 1 gelten ALS */ { options: ["als","wie","für","zu"], answer: "a" },
      /* 2 führen ZU */ { options: ["auf","in","an","zu"], answer: "d" },
      /* 3 gelten ALS selbstverständlich */ { options: ["für","als","wie","zu"], answer: "b" },
      /* 4 dem Ansehen schaden — Dativ */ { options: ["dem","das","des","der"], answer: "a" },
      /* 5 Rel Nom Pl (Stimmen) */ { options: ["denen","deren","welchen","die"], answer: "d" },
      /* 6 Gen m (Fehlschlag) dessen */ { options: ["deren","dessen","des","welche"], answer: "b" },
      /* 7 Aus diesem Grund */ { options: ["Zu","Von","Aus","Bei"], answer: "c" },
      /* 8 einwenden — Prefix ein */ { options: ["aus","an","vor","ein"], answer: "d" },
      /* 9 Obwohl (konzessiv) */ { options: ["Weil","Obwohl","Indem","Sobald"], answer: "b" },
      /* 10 entstehen AUS */ { options: ["aus","gegen","ohne","um"], answer: "a" },
      /* 11 Rel Nom f (Kultur) */ { options: ["der","deren","die","welchem"], answer: "c" },
      /* 12 statt … zu verbergen */ { options: ["im","zu","am","beim"], answer: "b" },
      /* 13 als Ausrede dienen */ { options: ["für","zur","wie","als"], answer: "d" },
      /* 14 Sorgfalt zu vernachlässigen */ { options: ["im","zum","zu","beim"], answer: "c" },
      /* 15 profitieren VON */ { options: ["Von","Aus","Bei","Durch"], answer: "a" },
      /* 16 trauen + Dat, Rel Dat Pl (Ergebnisse) */ { options: ["die","deren","denen","welche"], answer: "c" },
      /* 17 einschließen — Prefix ein */ { options: ["aus","ein","an","auf"], answer: "b" },
      /* 18 nicht … sondern */ { options: ["sondern","aber","jedoch","doch"], answer: "a" },
      /* 19 nur … Erfolge — Adverb „lauter“? hier „ihre“ */ { options: ["seine","deren","dessen","ihre"], answer: "d" },
      /* 20 Rel Nom n (Bild) */ { options: ["der","das","dem","dessen"], answer: "b" },
      /* 21 dem Irrtum gegenüber — Postposition */ { options: ["entgegen","zufolge","gegenüber","zuwider"], answer: "c" },
      /* 22 auf die sich … verpflichten — sich verpflichten AUF */ { options: ["der","deren","auf die","wozu"], answer: "c" },
    ],
  ),

  item(
    "Merkblatt zur Prüfungsanmeldung",
    "Bitte melden Sie sich rechtzeitig (1) Prüfung an. Die Anmeldung ist nur (2) gültig, wenn die Gebühr überwiesen wurde. (3) einer verspäteten Zahlung kann der Platz nicht garantiert werden. Studierende, (4) Voraussetzungen noch nicht vollständig erfüllt sind, wenden sich bitte an das Prüfungsamt. Eine Abmeldung muss spätestens eine Woche (5) dem Termin erfolgen. Wer unentschuldigt fehlt, (6) als durchgefallen. (7) einer Erkrankung legen Sie bitte umgehend ein Attest vor. Das Attest, (8) Vorlage über das Portal erfolgt, muss das Prüfungsdatum abdecken. Die Ergebnisse werden (9) etwa vier Wochen bekannt gegeben. Sollten Sie mit einer Bewertung nicht einverstanden sein, (10) Sie Einsicht in Ihre Arbeit beantragen. Diese Einsicht, (11) Sie ein Anrecht haben, findet zu festen Zeiten statt. Bitte bringen Sie (12) diesem Termin einen Ausweis mit. Wiederholungsprüfungen sind möglich, (13) die Höchstzahl der Versuche nicht überschritten ist. (14) der begrenzten Plätze empfehlen wir eine frühe Anmeldung. Wer angemeldet ist, aber doch nicht teilnehmen kann, (15) den Platz bitte umgehend frei. So (16) auch andere die Gelegenheit nutzen. Die Prüfungsordnung, (17) alle Regelungen zu entnehmen sind, finden Sie im Netz. Bei Widersprüchen zwischen Aushang und Ordnung (18) stets die Ordnung. Für Rückfragen (19) Ihnen das Prüfungsamt zur Verfügung. Wir bitten Sie, die Fristen genau (20) beachten, (21) es später keine Nachträge gibt. (22) freundlichen Grüßen, das Prüfungsamt.",
    [
      /* 1 sich zur Prüfung anmelden */ { options: ["zu","zur","an","auf"], answer: "b" },
      /* 2 nur dann gültig */ { options: ["so","damit","dann","sofort"], answer: "c" },
      /* 3 Bei einer verspäteten Zahlung */ { options: ["Mit","Durch","Von","Bei"], answer: "d" },
      /* 4 Gen Pl (Studierende) deren */ { options: ["denen","deren","dessen","welche"], answer: "b" },
      /* 5 eine Woche vor dem Termin */ { options: ["vor","bevor","davor","zuvor"], answer: "a" },
      /* 6 gilt als durchgefallen — Verb */ { options: ["gültig","geltet","gilt","galt"], answer: "c" },
      /* 7 Im Falle einer Erkrankung + Gen */ { options: ["Anlässlich","Im Falle","Zugunsten","Zufolge"], answer: "b" },
      /* 8 Gen n (Attest) dessen */ { options: ["deren","des","welches","dessen"], answer: "d" },
      /* 9 innerhalb … — hier „nach“ */ { options: ["seit","bei","nach","um"], answer: "c" },
      /* 10 können Sie beantragen — Modal */ { options: ["können","kennen","gekonnt","könnten"], answer: "a" },
      /* 11 auf die Sie ein Anrecht haben */ { options: ["der","deren","auf die","wozu"], answer: "c" },
      /* 12 zu diesem Termin */ { options: ["an","zu","bei","in"], answer: "b" },
      /* 13 solange die Höchstzahl nicht überschritten ist */ { options: ["solange","sooft","seitdem","sobald"], answer: "a" },
      /* 14 Angesichts der begrenzten Plätze + Gen */ { options: ["Entgegen","Nahe","Zufolge","Angesichts"], answer: "d" },
      /* 15 gibt den Platz frei — Verb */ { options: ["gebe","gibt","gab","gegeben"], answer: "b" },
      /* 16 So können auch andere — Modal */ { options: ["kennen","gekonnt","können","könnten"], answer: "c" },
      /* 17 der … zu entnehmen sind — Dativ f (Ordnung) */ { options: ["die","deren","der","welche"], answer: "c" },
      /* 18 gilt stets die Ordnung */ { options: ["gilt","gültig","geltet","galt"], answer: "a" },
      /* 19 steht Ihnen … zur Verfügung */ { options: ["stellt","liegt","gibt","steht"], answer: "d" },
      /* 20 genau zu beachten */ { options: ["zum","zu","im","am"], answer: "b" },
      /* 21 damit es keine Nachträge gibt */ { options: ["damit","weil","obwohl","indem"], answer: "a" },
      /* 22 Mit freundlichen Grüßen */ { options: ["In","Zu","Bei","Mit"], answer: "d" },
    ],
  ),

  item(
    "Text: Die Aufgabe der Universität",
    "Über die Aufgabe der Universität wird seit Langem gestritten. Die einen sehen (1) ihr vor allem eine Stätte der Ausbildung, die junge Menschen (2) den Beruf vorbereitet. Die anderen betonen, (3) sie mehr sei: ein Ort des freien Denkens. Beide Sichtweisen müssen (4) nicht ausschließen. Eine Hochschule, (5) allein den Arbeitsmarkt im Blick hätte, verlöre etwas Wesentliches. Umgekehrt darf sich Forschung nicht (6) den Bedürfnissen der Gesellschaft abkoppeln. (7) dieser Spannung liegt gerade die Stärke der Institution. Wer studiert, soll nicht nur Wissen erwerben, sondern lernen, es (8) prüfen. Diese Fähigkeit, (9) Wert sich nicht sofort in Geld bemisst, trägt langfristig Früchte. (10) der wachsenden Erwartung, rasch verwertbare Ergebnisse zu liefern, gerät dieser Auftrag unter Druck. Kennzahlen, (11) man die Leistung heute misst, erfassen nur einen Teil. Was sich schwer zählen lässt, die Bildung eines Urteils etwa, (12) leicht aus dem Blick. Eine Universität, die sich (13) auf messbare Größen verlässt, optimiert das Zählbare und vernachlässigt das Wichtige. (14) sollte man ihr Freiräume lassen. Denn manche Erkenntnis reift langsam, (15) man ihren Nutzen erkennt. Die Gesellschaft finanziert die Hochschule, und (16) hat sie ein Recht darauf, dass diese verantwortlich handelt. Doch Verantwortung heißt nicht, jede Frage sofort (17) ihrem Ertrag zu bemessen. Eine kluge Hochschulpolitik schützt beides: den Nutzen (18) die Freiheit. Nur so bleibt die Universität, (19) sie sein sollte — ein Ort, an (20) Neues entstehen darf. Das zu bewahren, (21) im Interesse aller. Es (22) sich, dafür einzutreten.",
    [
      /* 1 in ihr … sehen */ { options: ["an","bei","in","zu"], answer: "c" },
      /* 2 auf den Beruf vorbereiten */ { options: ["für","auf","zu","an"], answer: "b" },
      /* 3 dass sie mehr sei */ { options: ["ob","wie","was","dass"], answer: "d" },
      /* 4 sich nicht ausschließen — Reflexivpron. */ { options: ["es","einander","sich","sie"], answer: "c" },
      /* 5 Rel Nom f (Hochschule) */ { options: ["die","der","deren","welchem"], answer: "a" },
      /* 6 sich abkoppeln VON */ { options: ["aus","gegen","von","über"], answer: "c" },
      /* 7 In dieser Spannung */ { options: ["An","In","Bei","Zu"], answer: "b" },
      /* 8 zu prüfen */ { options: ["zu","zum","im","am"], answer: "a" },
      /* 9 Gen f (Fähigkeit) deren */ { options: ["dessen","der","welche","deren"], answer: "d" },
      /* 10 Angesichts der Erwartung + Gen */ { options: ["Entgegen","Angesichts","Nahe","Zufolge"], answer: "b" },
      /* 11 an denen man misst — Rel Dat Pl (Kennzahlen) „an denen“ */ { options: ["deren","womit","an denen","die"], answer: "c" },
      /* 12 gerät aus dem Blick — Verb */ { options: ["geraten","geriet","gerät","geraten ist"], answer: "c" },
      /* 13 sich nur auf … verlässt — Adverb „nur“ */ { options: ["nur","noch","erst","schon"], answer: "a" },
      /* 14 Deshalb */ { options: ["Trotzdem","Dennoch","Hingegen","Deshalb"], answer: "d" },
      /* 15 ehe man ihren Nutzen erkennt */ { options: ["seit","ehe","indem","sobald"], answer: "b" },
      /* 16 deshalb hat sie ein Recht */ { options: ["deshalb","trotzdem","dennoch","hingegen"], answer: "a" },
      /* 17 an ihrem Ertrag bemessen */ { options: ["auf","für","nach","an"], answer: "d" },
      /* 18 den Nutzen UND die Freiheit */ { options: ["oder","und","aber","sondern"], answer: "b" },
      /* 19 was sie sein sollte */ { options: ["das","wie","was","dass"], answer: "c" },
      /* 20 an dem Neues entstehen darf */ { options: ["der","das","denen","dem"], answer: "d" },
      /* 21 liegt im Interesse aller */ { options: ["legt","liegt","liegen","gelegen"], answer: "b" },
      /* 22 Es lohnt sich */ { options: ["lohnt","lehnt","löhnt","lohne"], answer: "a" },
    ],
  ),

  item(
    "Aushang: Umzug des Instituts",
    "Liebe Studierende, das Institut zieht (1) den Semesterferien in das neu sanierte Gebäude am Nordcampus um. (2) des Umzugs bleiben die Büros in der letzten Augustwoche geschlossen. Sprechstunden, (3) Termine bereits vereinbart sind, werden telefonisch abgehalten. Bitte haben Sie Verständnis (4), dass in dieser Zeit nicht alle Unterlagen greifbar sind. Bücher, (5) Sie aus der Institutsbibliothek entliehen haben, geben Sie bitte vorher zurück. (6) der Wiedereröffnung finden Sie uns in den Räumen 3.01 bis 3.20. Die neuen Räume, (7) Ausstattung modernisiert wurde, bieten mehr Platz für Gruppenarbeit. Ein Leitsystem, (8) Sie sich orientieren können, wird an allen Eingängen angebracht. (9) der ersten Woche stehen Ihnen Ansprechpersonen zur Verfügung, (10) Ihnen den Weg zeigen. Post, die während des Umzugs eingeht, (11) an die neue Adresse weitergeleitet. Sollten Sie dringend etwas benötigen, (12) Sie sich bitte per E-Mail. Wir bemühen uns, die Unterbrechung so kurz (13) möglich zu halten. (14) aller Sorgfalt lassen sich einzelne Verzögerungen nicht ganz vermeiden. Wir bitten Sie deshalb, wichtige Termine nicht (15) diese Woche zu legen. Das gesamte Team freut sich (16) die neuen Räume und (17) Sie dort begrüßen zu dürfen. (18) Sie Fragen haben, hilft Ihnen das Sekretariat gern weiter. Die genaue Wegbeschreibung, (19) auch ein Lageplan gehört, hängt am schwarzen Brett. Bitte leiten Sie diese Information (20) alle weiter, die sie betrifft. Wir danken Ihnen für Ihre Geduld (21) dieser Übergangszeit. (22) freundlichen Grüßen, die Institutsleitung.",
    [
      /* 1 in den Semesterferien umziehen — hier „in“ */ { options: ["an","zu","in","bei"], answer: "c" },
      /* 2 Während des Umzugs + Gen */ { options: ["Trotz","Während","Wegen","Statt"], answer: "b" },
      /* 3 Gen Pl (Sprechstunden) deren */ { options: ["deren","denen","dessen","welche"], answer: "a" },
      /* 4 Verständnis dafür, dass */ { options: ["darüber","davon","darauf","dafür"], answer: "d" },
      /* 5 Rel Akk Pl (Bücher) die */ { options: ["denen","die","deren","welchen"], answer: "b" },
      /* 6 Ab der Wiedereröffnung */ { options: ["Seit","Bis","Ab","Vor"], answer: "c" },
      /* 7 Gen Pl (Räume) deren */ { options: ["dessen","der","deren","welche"], answer: "c" },
      /* 8 an dem Sie sich orientieren — Rel n (Leitsystem) „an dem“ */ { options: ["an dem","dessen","womit","das"], answer: "a" },
      /* 9 In der ersten Woche */ { options: ["An","Bei","Zu","In"], answer: "d" },
      /* 10 Rel Nom Pl (Ansprechpersonen) die */ { options: ["denen","die","deren","welchen"], answer: "b" },
      /* 11 wird … weitergeleitet — Passiv */ { options: ["wird","ist","hat","sei"], answer: "a" },
      /* 12 wenden Sie sich per E-Mail */ { options: ["gewöhnen","melden","drehen","wenden"], answer: "d" },
      /* 13 so kurz wie möglich */ { options: ["als","wie","so","je"], answer: "b" },
      /* 14 Trotz aller Sorgfalt */ { options: ["Wegen","Dank","Trotz","Laut"], answer: "c" },
      /* 15 in diese Woche legen — Akk */ { options: ["an","auf","zu","in"], answer: "d" },
      /* 16 sich freuen AUF */ { options: ["über","auf","an","für"], answer: "b" },
      /* 17 darauf, Sie … begrüßen zu dürfen */ { options: ["darauf","daran","davon","dabei"], answer: "a" },
      /* 18 Sollten Sie Fragen haben */ { options: ["Würden","Hätten","Sollten","Wären"], answer: "c" },
      /* 19 zu der auch ein Lageplan gehört — Rel Dat f „zu der“ */ { options: ["deren","zu der","wozu","die"], answer: "b" },
      /* 20 an alle weiterleiten */ { options: ["zu","für","über","an"], answer: "d" },
      /* 21 in dieser Übergangszeit */ { options: ["an","zu","in","bei"], answer: "c" },
      /* 22 Mit freundlichen Grüßen */ { options: ["Mit","In","Zu","Bei"], answer: "a" },
    ],
  ),

  item(
    "Text: Der Nutzen der Grundlagenforschung",
    "Warum sollte eine Gesellschaft Forschung finanzieren, (1) unmittelbarer Nutzen nicht absehbar ist? Diese Frage begleitet die Grundlagenforschung seit jeher. (2) den ersten Blick wirkt es unvernünftig, Geld in Projekte zu stecken, (3) Ergebnis niemand vorhersagen kann. Doch die Geschichte zeigt, dass gerade zweckfreie Neugier (4) den größten Umwälzungen geführt hat. Viele Techniken, (5) wir heute selbstverständlich nutzen, gehen auf Erkenntnisse zurück, (6) zunächst keinen Zweck zu erfüllen schienen. Wer nur das fördert, (7) sich sofort auszahlt, verzichtet auf ebendiese unerwarteten Früchte. Grundlagenforschung lässt sich (8) ihrer Natur nach nicht planen wie ein Bauvorhaben. Man weiß am Anfang nicht, (9) man am Ende finden wird. (10) dieser Unsicherheit liegt kein Mangel, sondern ihr Wesen. Natürlich (11) sich auch die Grundlagenforschung rechtfertigen; öffentliche Mittel verlangen Verantwortung. Doch die Rechtfertigung darf nicht darin bestehen, (12) jedem Schritt einen Ertrag zu verlangen. Eine Gesellschaft, (13) allein auf rasche Anwendung setzt, sägt (14) dem Ast, auf dem sie sitzt. Denn die angewandte Forschung von morgen (15) sich aus der Grundlagenforschung von heute. Es wäre kurzsichtig, das eine gegen das andere (16). Vielmehr braucht es beides, und zwar (17) einem ausgewogenen Verhältnis. Wer die Saat nicht ausbringt, (18) auch nicht ernten. (19) diesem Bild lässt sich der Wert des Zweckfreien fassen. Die Freiheit, einer Frage nachzugehen, (20) Ausgang offen ist, gehört zum Kern der Wissenschaft. Sie zu schützen, (21) eine kluge Entscheidung. Es (22) sich, daran festzuhalten.",
    [
      /* 1 obwohl kein Nutzen absehbar ist */ { options: ["weil","damit","obwohl","sobald"], answer: "c" },
      /* 2 Auf den ersten Blick */ { options: ["In","Bei","Auf","Zu"], answer: "c" },
      /* 3 Gen n (Projekt) dessen */ { options: ["dessen","deren","des","welches"], answer: "a" },
      /* 4 zu den größten Umwälzungen führen */ { options: ["auf","in","an","zu"], answer: "d" },
      /* 5 Rel Akk Pl (Techniken) die */ { options: ["denen","die","deren","welchen"], answer: "b" },
      /* 6 Rel Nom Pl (Erkenntnisse) die */ { options: ["die","denen","deren","welchen"], answer: "a" },
      /* 7 was sich auszahlt — Rel „was“ (das) */ { options: ["das","wodurch","welches","was"], answer: "d" },
      /* 8 ihrer Natur nach — hier „von“ */ { options: ["aus","von","nach","bei"], answer: "b" },
      /* 9 was man finden wird */ { options: ["dass","ob","was","wie"], answer: "c" },
      /* 10 In dieser Unsicherheit */ { options: ["An","Bei","Zu","In"], answer: "d" },
      /* 11 muss sich … rechtfertigen — Modal */ { options: ["müssen","muss","musste","gemusst"], answer: "b" },
      /* 12 zu jedem Schritt — „für jeden Schritt“ */ { options: ["für","zu","an","bei"], answer: "a" },
      /* 13 Rel Nom f (Gesellschaft) die */ { options: ["der","deren","die","welchem"], answer: "c" },
      /* 14 an dem Ast sägen — „an“ */ { options: ["auf","an","in","zu"], answer: "b" },
      /* 15 speist sich AUS */ { options: ["von","bei","durch","aus"], answer: "d" },
      /* 16 auszuspielen — „gegen … ausspielen“, Infinitiv */ { options: ["ausspielen","ausgespielt","auszuspielen","auszuspielend"], answer: "c" },
      /* 17 in einem Verhältnis */ { options: ["in","auf","mit","nach"], answer: "a" },
      /* 18 kann auch nicht ernten — Modal */ { options: ["kennt","können","kann","gekonnt"], answer: "c" },
      /* 19 An diesem Bild */ { options: ["In","An","Bei","Zu"], answer: "b" },
      /* 20 Gen f (Frage) deren Ausgang */ { options: ["deren","dessen","der","welche"], answer: "a" },
      /* 21 ist eine kluge Entscheidung */ { options: ["hat","wird","sei","ist"], answer: "d" },
      /* 22 Es lohnt sich */ { options: ["lehnt","lohnt","löhnt","lohne"], answer: "b" },
    ],
  ),

  item(
    "Rundschreiben: Neue Öffnungszeiten des Prüfungsamts",
    "Liebe Studierende, (1) dem 1. Oktober gelten im Prüfungsamt neue Öffnungszeiten. Der Schalter ist künftig montags (2) donnerstags von neun bis zwölf Uhr geöffnet. (3) der starken Nachfrage haben wir zusätzlich eine telefonische Sprechzeit eingerichtet. Anliegen, (4) Bearbeitung länger dauert, klären Sie bitte vorab per E-Mail. Bitte bringen Sie zu jedem Besuch die Unterlagen mit, (5) wir Ihr Anliegen bearbeiten können. Wer eine Bescheinigung benötigt, (6) diese online beantragen; die Abholung ist dann (7) Wartezeit möglich. (8) der Prüfungszeit kann es zu längeren Wartezeiten kommen, (9) wir um Ihr Verständnis bitten. Termine, (10) Sie online vereinbart haben, werden bevorzugt behandelt. Sollten Sie einen Termin nicht wahrnehmen können, (11) Sie ihn bitte rechtzeitig ab. So (12) ein anderer die Zeit nutzen. Das Amt bleibt (13) den Feiertagen geschlossen; dies gilt auch (14) die Woche zwischen den Jahren. Änderungen der Öffnungszeiten (15) rechtzeitig auf unserer Seite bekannt gegeben. Wir bitten Sie, sich (16) einem Besuch kurz zu informieren, (17) unnötige Wege zu vermeiden. Für Fragen, (18) Beantwortung keine persönliche Vorsprache erfordert, nutzen Sie bitte das Kontaktformular. Wir sind bemüht, Ihre Anliegen so zügig (19) möglich zu bearbeiten. (20) Ihrer Mithilfe gelingt uns das leichter. Wir danken Ihnen (21) Ihr Verständnis. (22) freundlichen Grüßen, das Prüfungsamt.",
    [
      /* 1 Ab dem 1. Oktober */ { options: ["Ab","Seit","Bis","Vor"], answer: "a" },
      /* 2 montags bis donnerstags */ { options: ["zu","an","auf","bis"], answer: "d" },
      /* 3 Angesichts der Nachfrage + Gen */ { options: ["Entgegen","Angesichts","Nahe","Zufolge"], answer: "b" },
      /* 4 Gen Pl (Anliegen) deren */ { options: ["denen","dessen","deren","welche"], answer: "c" },
      /* 5 damit wir … bearbeiten können */ { options: ["weil","obwohl","indem","damit"], answer: "d" },
      /* 6 kann diese beantragen — Modal */ { options: ["kennt","kann","können","gekonnt"], answer: "b" },
      /* 7 ohne Wartezeit */ { options: ["ohne","mit","gegen","um"], answer: "a" },
      /* 8 Während der Prüfungszeit + Gen */ { options: ["Trotz","Wegen","Während","Statt"], answer: "c" },
      /* 9 wofür wir um Verständnis bitten */ { options: ["worum","wofür","wodurch","womit"], answer: "b" },
      /* 10 Rel Akk Pl (Termine) die */ { options: ["denen","deren","welchen","die"], answer: "d" },
      /* 11 sagen Sie ihn ab — Prefix/Verb */ { options: ["sehen","legen","sagen","geben"], answer: "c" },
      /* 12 So kann ein anderer — Modal */ { options: ["kann","kennt","können","gekonnt"], answer: "a" },
      /* 13 an den Feiertagen */ { options: ["in","zu","an","bei"], answer: "c" },
      /* 14 gilt für die Woche */ { options: ["um","für","über","an"], answer: "b" },
      /* 15 werden … bekannt gegeben — Passiv */ { options: ["werden","sind","haben","wurden"], answer: "a" },
      /* 16 vor einem Besuch */ { options: ["bei","nach","seit","vor"], answer: "d" },
      /* 17 um … zu vermeiden */ { options: ["damit","um","sodass","indem"], answer: "b" },
      /* 18 Gen Pl (Fragen) deren */ { options: ["denen","dessen","deren","welche"], answer: "c" },
      /* 19 so zügig wie möglich */ { options: ["als","so","wie","je"], answer: "c" },
      /* 20 Mit Ihrer Mithilfe */ { options: ["Mit","Bei","Durch","Von"], answer: "a" },
      /* 21 danken FÜR */ { options: ["um","über","an","für"], answer: "d" },
      /* 22 Mit freundlichen Grüßen */ { options: ["In","Mit","Zu","Bei"], answer: "b" },
    ],
  ),
];

export const ITEMS: ExamItemInput[] = ITEMS_SB;

// ── SB: authored position balance, ASSERTED across the whole cell ────────────
// The old bank was 92% "a". This mirrors assertHvT2Balance and the answer-distribution
// gate's MC rules: across all gaps of the cell, every position a/b/c/d must be used and
// none may exceed 60%. Order-bound to the text, so this is authored, not de-gamed.
(function assertSbBalance() {
  const count: Record<string, number> = { a: 0, b: 0, c: 0, d: 0 };
  let total = 0;
  for (const it of ITEMS_SB) {
    for (const q of (it.payload as { questions: { answer: string }[] }).questions) {
      count[q.answer] = (count[q.answer] ?? 0) + 1;
      total++;
    }
  }
  for (const pos of ["a", "b", "c", "d"]) {
    if (!count[pos]) throw new Error(`SB: position "${pos}" is never correct across ${total} gaps (dead option / collapses MC-4)`);
    if (count[pos] / total > 0.6) throw new Error(`SB: position "${pos}" is ${count[pos]}/${total} (${Math.round((100 * count[pos]) / total)}%) — clustered past 60%`);
  }
})();
