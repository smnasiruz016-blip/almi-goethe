# AlmiGoethe — TestDaF + telc Verified Scoring Specs (LAW)

**Status: DRAFT for review — verify-first per command. Every number below is quoted from an official source (testdaf.de / g.a.s.t. / telc.net) with the URL. Two items are flagged OPEN and must be resolved before any engine ships. Nothing ships on a guessed number.**

Scope (from recovered spec): **TestDaF** + **telc Deutsch B1** + **telc Deutsch B2** + **telc Deutsch C1 Hochschule**. Phases 1–2 = engines + content items only. Existing Goethe engine/pages UNTOUCHED; same repo, same Stripe.
Mentioned-not-built: **DSH** (per-university, no central spec), **DTZ** (explainer/citizenship-sibling), **ÖSD** (future engine). Batch-2 candidates: **telc Beruf / Pflege**.

---

## 1. TestDaF — VERIFIED ✅ (the network's *fifth* scoring philosophy: independent per-section levels, NO total, NO pass/fail)
**Source:** [testdaf.de – TDN levels](https://www.testdaf.de/de/teilnehmende/warum-testdaf/testdaf-niveaus-tdn/) · [testdaf.de – digital TestDaF evaluation](https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf/auswertung-des-digitalen-testdaf/)

- **4 sections, graded independently:** Leseverstehen (Reading), Hörverstehen (Listening), Schriftlicher Ausdruck (Writing), Mündlicher Ausdruck (Speaking).
- **Each section → a uniform 0–20 point scale** (raw performance transformed to a common scale for comparability across sections/test sets), reported as a **TestDaF-Niveaustufe (TDN)**:
  | Points (per section) | Result |
  |---|---|
  | 16–20 | **TDN 5** |
  | 10–15 | **TDN 4** |
  | 5–9 | **TDN 3** |
  | 0–4 | **under TDN 3** (unter TDN 3) |
- **NO aggregate score. NO overall pass/fail.** Each section stands alone.
- **CEFR:** TDN 3–5 span **B2–C1** (exact sub-level mapping is on testdaf.de as an image; state only "B2–C1" until the precise mapping is confirmed).
- **University requirement ≠ exam pass mark:** universities commonly require **TDN 4 in all four sections ("4×4")**, but that is an admissions rule, not a TestDaF pass mark — the exam itself never says pass/fail. (Engine copy must keep this distinction.)

**Engine rule:** score each section 0–20 → map to TDN via the table. Never sum. Never render "passed/failed." Report four independent TDNs.

---

## 2. telc Deutsch C1 Hochschule — VERIFIED ✅ (the number abba flagged)
**Source:** [telc.net – telc Deutsch C1 Hochschule Handbuch (PDF)](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c1_hochschule_Handbuch.pdf) · [exam page](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-c1-university/)

**Subtest max points (each quoted from the Handbuch "Gewichtung"):**
| Part | Subtest | Items → points | Max |
|---|---|---|---|
| Written | Leseverstehen (3 Teile) | 6×2 + 6×2 + 12×2 | **48** |
| Written | Sprachbausteine | 22×1 | **22** |
| Written | Hörverstehen (3 Teile) | 8×1 + 10×2 + 20 | **48** |
| Written | Schriftlicher Ausdruck | 1 of 2 tasks, criteria-scored | **48** |
| Oral | Mündlicher Ausdruck (Teil 1A 6 + 1B 4 + Diskussion + Angemessenheit) | | **48** |

- **Written part = LV + SB + HV + SA = 166.** **Oral part = 48.** **Handbuch states no explicit grand total; the total is the arithmetic sum = 214** (each subtest max is quoted verbatim — the total is addition, not a guess). *Design note: engine can operate purely in per-skill percentages to avoid depending on a canonical total.*
- **Pass rule (verbatim, Handbuch):** *"Bestanden hat, wer insgesamt mindestens 60 Prozent der Punkte erreicht hat. Zudem muss die 60-Prozent-Marke sowohl im schriftlichen Prüfungsteil (LV, HV, SA) wie auch im mündlichen überschritten sein."* → **pass = ≥60% overall AND ≥60% in the written part AND ≥60% in the oral part.**
- **Modular:** if only one of the two parts (written / oral) misses its threshold, that part alone may be retaken within the following calendar year.
- **Reporting:** per-skill points **and** the per-skill percentage.
- **No lettered grade bands** — bestanden / nicht bestanden with per-skill percentages.

---

## 3. telc Deutsch B1 — LOCKED ✅ (Zertifikat Deutsch = telc Deutsch B1, ONE product / two names — the citizenship flagship)
**Source:** [telc.net – Zertifikat Deutsch / telc Deutsch B1 exam page](https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-b1/) · telc "Zertifikat Deutsch B1" Übungstest 1 booklet (shop.telc.net, ISBN 978-3-86375-446-4).

**Points — verified verbatim from the ZD B1 booklet ("Punkte und Gewichtung"):**
- **Total = 300 points.** **Written (Teilergebnis I) = 225 (75%)**, **Oral/Sprechen (Teilergebnis II) = 75 (25%)**.
- Written subtests: Leseverstehen, Sprachbausteine, Hörverstehen, **Schriftlicher Ausdruck = 45 pts (15%)**. Oral: Teil 1 (15) + Teil 2 (30) + Teil 3 (30) = 75.
- Booklet grade scale (Endnote, from the **summed** parts): sehr gut / gut / befriedigend / ausreichend / nicht bestanden, with the ausreichend boundary at **180**.

**Pass rule — PER-PART (confirmed by founder as the product rule; consistent with telc's modular design):**
- Pass requires **≥60% of the written part (135/225) AND ≥60% of the oral part (45/75)**, scored **independently**. The "180" in the booklet grade scale is simply **135 + 45** (the two minima summed) — it is **not** the gate: a candidate can exceed 180 total yet still fail if one part is under its 60%.
- **Modular retake:** a failed part may be repeated within the exam's calendar year or the following one; the passed part is credited.
- *Verification note:* the point structure (225/75/300, SA 45=15%) and the modular retake are quoted from telc materials. The explicit "60% each part" sentence was not verbatim-quotable from the booklet I accessed (it shows the Endnote grade scale); the telc B1 Handbuch/Prüfungsordnung states it — treat the per-part gate as authoritative-but-flag until that one sentence is quoted. All the **numbers** are verified.

---

## 4. telc Deutsch B2 — weights LOCKED ✅ · pass threshold ⚠️ (one number to quote)
**Source:** [telc.net – telc Deutsch B2 Handbuch (PDF)](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B2_Handbuch.pdf) · [exam page](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b2/)

- **Percentage-weighted to 100%** (verified from the Handbuch weightings, Hörverstehen completing the sum to 100):
  | Subtest | Weight |
  |---|---|
  | Leseverstehen | 25% |
  | Sprachbausteine | 10% |
  | Hörverstehen | 25% |
  | Schriftlicher Ausdruck | 15% |
  | Sprechen | 25% |
  (LV 25 + SB 10 + SA 15 + Sprechen 25 quoted verbatim = 75%; HV = 25% by completion to 100%.) Written + oral; available as a **partial/modular** exam.
- **⚠️ Pass threshold — NOT yet quoted.** telc's standard is 60%; I could not extract the verbatim pass sentence from the B2 Handbuch. **Engine ships this `verified:false`** (mirrors existing `goethe-scale.ts`) until the exact threshold + per-part-vs-overall model is quoted from the B2 Handbuch Bewertungsteil / Prüfungsordnung.

---

## Build readiness
- **START NOW (fully locked):** TestDaF engine (0–20 → TDN, no total, no pass/fail) · telc C1 Hochschule engine (subtest maxes; 60% overall + 60% each part; modular) · telc B1 engine (300/225/75; per-part 60% gate; modular).
- **B2:** build with locked weights; pass threshold flagged `verified:false` until quoted (does not block the other three).

**Every number above is sourced. The only residual flags: B1's "60% each" sentence (numbers verified) and B2's exact pass threshold.**
