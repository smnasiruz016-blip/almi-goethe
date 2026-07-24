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
      /* 17 wenden Sie sich — Imperativ/sich wenden AN */ { options: ["richten","melden","wenden","drehen"], answer: "c" },
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
      /* 11 wenden Sie sich */ { options: ["wenden","richten","melden","drehen"], answer: "a" },
      /* 12 zur Verfügung stehen — feste Fügung */ { options: ["zu","in","zur","auf"], answer: "c" },
      /* 13 die … unbenutzt bleiben — Rel. Nom. Pl. „die“ */ { options: ["deren","die","denen","welcher"], answer: "b" },
      /* 14 Während der Prüfungszeit */ { options: ["Während","Trotz","Wegen","Statt"], answer: "a" },
      /* 15 um … zu sichern — final */ { options: ["damit","sodass","ohne","um"], answer: "d" },
      /* 16 so, wie Sie ihn … wünschen */ { options: ["als","wie","dass","was"], answer: "b" },
      /* 17 damit das Personal … einordnen kann */ { options: ["indem","weil","damit","obwohl"], answer: "c" },
      /* 18 Für Rückfragen */ { options: ["Zu","Bei","Für","Über"], answer: "c" },
      /* 19 geschlossen bleibt/ist — „geschlossen bleibt“ */ { options: ["bleibt","wird","hat","sei"], answer: "a" },
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
      /* 7 fördert die Entwicklung */ { options: ["fordert","verfördert","fördert","befördert"], answer: "c" },
      /* 8 die Sie … belegen — Rel. Akk. Pl. „die“ */ { options: ["denen","die","deren","welchen"], answer: "b" },
      /* 9 Ohne eine vorherige Absprache */ { options: ["Ohne","Trotz","Statt","Wegen"], answer: "a" },
      /* 10 dessen Mitarbeitende — Auslandsbüro (n.) Genitiv „dessen“ */ { options: ["deren","des","welches","dessen"], answer: "d" },
      /* 11 Angesichts der großen Nachfrage + Gen. */ { options: ["Entgegen","Angesichts","Anstelle","Zufolge"], answer: "b" },
      /* 12 erhöht seine Chancen */ { options: ["erhebt","erholt","erhöht","erhält"], answer: "c" },
      /* 13 um … zu verringern — final */ { options: ["damit","sodass","um","indem"], answer: "c" },
      /* 14 abweichen können/„erheblich abweichen“: adverb slot -> „erheblich“ */ { options: ["erheblich","erheblichen","erhebliche","erheblicher"], answer: "a" },
      /* 15 zugewiesen/angeboten wurde — „ein Platz zugewiesen wurde“ */ { options: ["hingewiesen","angewiesen","verwiesen","zugewiesen"], answer: "d" },
      /* 16 Bei einer nicht rechtzeitigen Bestätigung */ { options: ["Mit","Bei","Durch","Von"], answer: "b" },
      /* 17 in dem/wo … geklärt werden — „bei dem“ Treffen: „bei dem“ */ { options: ["bei dem","dessen","deren","womit"], answer: "a" },
      /* 18 die im Ausland gilt — Rel. Nom. f. „die“ */ { options: ["deren","der","welcher","die"], answer: "d" },
      /* 19 sofern sie vorher vereinbart wurden */ { options: ["obwohl","sofern","damit","sobald"], answer: "b" },
      /* 20 Trotz aller Mühe */ { options: ["Wegen","Dank","Trotz","Laut"], answer: "c" },
      /* 21 wenden Sie sich */ { options: ["richten","melden","drehen","wenden"], answer: "d" },
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
      /* 6 erschöpft sich nicht darin — „erschöpft sich“ */ { options: ["verschöpft","erschöpft","beschöpft","entschöpft"], answer: "b" },
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
      /* 6 wenden Sie sich */ { options: ["richten","melden","drehen","wenden"], answer: "d" },
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
    "In einer Zeit, (1) sich Informationen mit einem Fingertipp abrufen lassen, wird das gründliche Lesen leicht unterschätzt. Dabei ist es (2) durch nichts zu ersetzen. Wer eine anspruchsvolle Studie liest, (3) sich nicht nur Wissen an, sondern schult zugleich das Denken. Ein Text, (4) man sich wirklich einlässt, verlangt Geduld. Er lässt sich nicht überfliegen, (5) man seinen Gedankengang verstehen will. Anders als ein kurzer Beitrag, (6) auf rasche Wirkung zielt, entfaltet ein wissenschaftlicher Text seine Bedeutung erst allmählich. (7) des ersten Eindrucks, ein Kapitel sei zäh, lohnt sich das Weiterlesen oft. Vieles erschließt sich erst, (8) man das Ende erreicht hat. Studierende, (9) das gründliche Lesen fremd geworden ist, tun sich mit Prüfungen schwerer. Denn das Wissen, (10) man sich nur oberflächlich angeeignet hat, zerfällt rasch. (11) man einen Text mehrfach liest, prägen sich seine Zusammenhänge ein. Es empfiehlt sich, (12) dem Lesen Notizen anzufertigen. Diese helfen später, (13) das Gelesene zu erinnern. Man sollte sich zudem angewöhnen, (14) jedem Abschnitt kurz innezuhalten und zu fragen, was man verstanden hat. (15) dieser Frage zeigt sich, ob man wirklich gelesen oder nur die Augen bewegt hat. Lesen ist (16) diesem Grund keine passive Tätigkeit, sondern eine anstrengende Leistung. (17) sie sich lohnt, merkt man spätestens dann, wenn man einen Zusammenhang selbst erklären kann. Ein Buch, (18) man verstanden hat, gehört einem für immer. (19) allem Fortschritt der Technik bleibt diese alte Einsicht gültig. Wer lesen kann und es auch tut, (20) über ein Werkzeug, das ihn ein Leben lang begleitet. Es (21) sich, diese Fähigkeit zu pflegen, (22) sie im Studienalltag oft zu kurz kommt.",
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
      /* 13 sich … zu erinnern — „sich an etwas erinnern“; hier „das Gelesene zu erinnern“ verb slot „erinnern“ */ { options: ["erittern","erinnern","ermahnen","ermitteln"], answer: "b" },
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
