// German shortage occupations (Engpassberufe) — Layer 2. The Bundesagentur für
// Arbeit Fachkräfteengpassanalyse evaluates ~1,200 occupations and identifies 163
// as shortage occupations (Engpassberufe), concentrated in health & care, medicine,
// construction & trades, IT, engineering, education, logistics and hospitality.
//
// HONESTY — two things matter and we keep them separate:
//  1. The occupation is real and genuinely on the shortage list (every entry below
//     is a real, well-documented Engpass occupation; we link the official BA source).
//  2. The German LEVEL. This is only LEGALLY FIXED for *regulated professions*
//     (reglementierte Berufe) — e.g. nursing and health professions require ~B2 for
//     recognition (B1 in some federal states), and doctors/dentists/pharmacists need
//     C1 plus a medical-language exam (Fachsprachprüfung) for the Approbation. For
//     UNREGULATED occupations (most trades, IT, engineering, logistics, hospitality)
//     there is NO statutory German level — the employer and the visa/Chancenkarte set
//     the expectation, typically B1–B2. We encode this with `levelBasis` and never
//     present a "typical" expectation as if it were the law.
//
// We do NOT claim this is the exact 163-item list verbatim — the official list lives
// in the BA interactive web-app keyed by KldB occupation codes; extracting it 1:1 is
// a later data step (like the Hochschulkompass licence). This is a verified, honestly
// levelled superset of the most-cited shortage occupations across every shortage field.

export type ShortageField =
  | "Health & care"
  | "Medicine"
  | "Engineering"
  | "IT & data"
  | "Construction & trades"
  | "Education"
  | "Science"
  | "Logistics & transport"
  | "Business"
  | "Hospitality";

// "statutory" = the CEFR level is legally required for recognition / the licence to
// practise. "typical" = no statutory language level exists; this is the usual
// employer / visa expectation.
export type LevelBasis = "statutory" | "typical";

export type Occupation = {
  slug: string;
  name: string; // English
  nameDe: string; // German
  field: ShortageField;
  germanLevel: string; // the real requirement (statutory) or the honest typical expectation
  levelDetail: string; // one honest sentence on how the level applies
  levelBasis: LevelBasis;
  regulated: boolean; // reglementierter Beruf — recognition required before practising
};

export const OCCUPATIONS: Occupation[] = [
  // ── Health & care (largely regulated; CEFR level statutory for recognition) ──
  { slug: "registered-nurse", name: "Registered Nurse", nameDe: "Pflegefachkraft", field: "Health & care", germanLevel: "B1–B2", levelDetail: "Recognition as a Pflegefachkraft requires a German certificate — B2 in most federal states, B1 in some; the level is part of the licence.", levelBasis: "statutory", regulated: true },
  { slug: "geriatric-nurse", name: "Geriatric Nurse", nameDe: "Altenpfleger:in", field: "Health & care", germanLevel: "B1–B2", levelDetail: "Recognition generally requires B2 (B1 in some federal states) because of direct, daily responsibility for patient care.", levelBasis: "statutory", regulated: true },
  { slug: "pediatric-nurse", name: "Pediatric Nurse", nameDe: "Gesundheits- und Kinderkrankenpfleger:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated nursing profession; recognition requires B2 in most federal states.", levelBasis: "statutory", regulated: true },
  { slug: "nursing-assistant", name: "Nursing Assistant", nameDe: "Pflegehelfer:in", field: "Health & care", germanLevel: "B1", levelDetail: "Assistant roles are regulated at state level and typically require around B1 for safe communication.", levelBasis: "statutory", regulated: true },
  { slug: "midwife", name: "Midwife", nameDe: "Hebamme", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated profession; recognition usually requires B2 because of direct responsibility for mother and baby.", levelBasis: "statutory", regulated: true },
  { slug: "physiotherapist", name: "Physiotherapist", nameDe: "Physiotherapeut:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated health profession; recognition commonly requires B2 to explain treatment to patients.", levelBasis: "statutory", regulated: true },
  { slug: "occupational-therapist", name: "Occupational Therapist", nameDe: "Ergotherapeut:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated health profession; B2 is the usual statutory requirement for recognition.", levelBasis: "statutory", regulated: true },
  { slug: "speech-therapist", name: "Speech Therapist", nameDe: "Logopäd:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated profession built on spoken German; recognition typically requires B2.", levelBasis: "statutory", regulated: true },
  { slug: "dietitian", name: "Dietitian", nameDe: "Diätassistent:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated health profession; B2 is the usual requirement for recognition.", levelBasis: "statutory", regulated: true },
  { slug: "podiatrist", name: "Podiatrist", nameDe: "Podolog:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated medical-foot-care profession; recognition usually requires B2.", levelBasis: "statutory", regulated: true },
  { slug: "orthoptist", name: "Orthoptist", nameDe: "Orthoptist:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated health profession; B2 is the usual requirement for recognition.", levelBasis: "statutory", regulated: true },
  { slug: "radiology-assistant", name: "Radiology Assistant (MTRA)", nameDe: "Medizinisch-technische:r Radiologieassistent:in (MTRA)", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated MT profession; B2 is typically required for recognition.", levelBasis: "statutory", regulated: true },
  { slug: "lab-assistant", name: "Medical Laboratory Assistant (MTLA)", nameDe: "Medizinisch-technische:r Laboratoriumsassistent:in (MTLA)", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated MT profession; recognition usually requires B2.", levelBasis: "statutory", regulated: true },
  { slug: "pharmaceutical-technical-assistant", name: "Pharmaceutical Technical Assistant (PTA)", nameDe: "Pharmazeutisch-technische:r Assistent:in (PTA)", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated profession; B2 is the usual statutory requirement for recognition.", levelBasis: "statutory", regulated: true },
  { slug: "emergency-paramedic", name: "Emergency Paramedic", nameDe: "Notfallsanitäter:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated emergency profession; recognition typically requires B2 for safety-critical communication.", levelBasis: "statutory", regulated: true },
  { slug: "paramedic", name: "Paramedic", nameDe: "Rettungssanitäter:in", field: "Health & care", germanLevel: "B1–B2", levelDetail: "No single statutory CEFR level nationwide; B1–B2 is the typical expectation for this safety-critical role.", levelBasis: "typical", regulated: false },
  { slug: "medical-assistant", name: "Medical Assistant (MFA)", nameDe: "Medizinische:r Fachangestellte:r (MFA)", field: "Health & care", germanLevel: "B2", levelDetail: "Not a regulated profession with a fixed CEFR level; practices and the visa typically expect about B2 for patient contact.", levelBasis: "typical", regulated: false },
  { slug: "dental-assistant", name: "Dental Assistant (ZFA)", nameDe: "Zahnmedizinische:r Fachangestellte:r (ZFA)", field: "Health & care", germanLevel: "B2", levelDetail: "No statutory CEFR level; practices typically expect about B2 for patient communication.", levelBasis: "typical", regulated: false },
  { slug: "surgical-technical-assistant", name: "Surgical Technical Assistant (OTA)", nameDe: "Operationstechnische:r Assistent:in (OTA)", field: "Health & care", germanLevel: "B2", levelDetail: "No nationwide statutory CEFR level; B2 is the typical expectation for the operating theatre.", levelBasis: "typical", regulated: false },
  { slug: "anesthesia-technical-assistant", name: "Anaesthesia Technical Assistant (ATA)", nameDe: "Anästhesietechnische:r Assistent:in (ATA)", field: "Health & care", germanLevel: "B2", levelDetail: "No nationwide statutory CEFR level; B2 is the typical clinical expectation.", levelBasis: "typical", regulated: false },
  { slug: "hearing-aid-acoustician", name: "Hearing-Aid Acoustician", nameDe: "Hörakustiker:in", field: "Health & care", germanLevel: "B2", levelDetail: "A skilled trade (Handwerk) with close customer care; B2 is the typical expectation, set by the employer.", levelBasis: "typical", regulated: false },
  { slug: "optician", name: "Optician", nameDe: "Augenoptiker:in", field: "Health & care", germanLevel: "B1–B2", levelDetail: "A skilled trade; B1–B2 is the typical customer-facing expectation, with no statutory CEFR minimum.", levelBasis: "typical", regulated: false },

  // ── Medicine (regulated; C1 + Fachsprachprüfung statutory) ──
  { slug: "doctor", name: "Doctor / Physician", nameDe: "Arzt / Ärztin", field: "Medicine", germanLevel: "C1 (+ Fachsprachprüfung)", levelDetail: "The ärztliche Approbation legally requires C1 general German plus a medical-language exam (Fachsprachprüfung).", levelBasis: "statutory", regulated: true },
  { slug: "dentist", name: "Dentist", nameDe: "Zahnarzt / Zahnärztin", field: "Medicine", germanLevel: "C1 (+ Fachsprachprüfung)", levelDetail: "Dental Approbation legally requires C1 plus a professional-language examination.", levelBasis: "statutory", regulated: true },
  { slug: "pharmacist", name: "Pharmacist", nameDe: "Apotheker:in", field: "Medicine", germanLevel: "C1 (+ Fachsprachprüfung)", levelDetail: "The pharmaceutical Approbation legally requires C1 and a professional-language exam.", levelBasis: "statutory", regulated: true },
  { slug: "psychotherapist", name: "Psychotherapist", nameDe: "Psychotherapeut:in", field: "Medicine", germanLevel: "C1", levelDetail: "A regulated profession dependent on nuanced spoken German; the licence (Approbation) effectively requires C1.", levelBasis: "statutory", regulated: true },

  // ── Engineering (unregulated; level employer-set) ──
  { slug: "mechanical-engineer", name: "Mechanical Engineer", nameDe: "Maschinenbauingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; employers typically expect around B2, and some international teams work in English.", levelBasis: "typical", regulated: false },
  { slug: "electrical-engineer", name: "Electrical Engineer", nameDe: "Elektroingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory level; B2 is the common employer expectation, with English-speaking roles available.", levelBasis: "typical", regulated: false },
  { slug: "civil-engineer", name: "Civil Engineer", nameDe: "Bauingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "No statutory level; site and authority communication makes B2 the usual employer expectation.", levelBasis: "typical", regulated: false },
  { slug: "automotive-engineer", name: "Automotive Engineer", nameDe: "Fahrzeugingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory level; around B2 is typical, though English is common in larger automotive firms.", levelBasis: "typical", regulated: false },
  { slug: "mechatronics-engineer", name: "Mechatronics Engineer", nameDe: "Mechatronikingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory level; B2 is the usual employer expectation for design and shop-floor communication.", levelBasis: "typical", regulated: false },
  { slug: "process-engineer", name: "Process Engineer", nameDe: "Verfahrensingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "No statutory level; B2 is the common employer expectation in plant and production settings.", levelBasis: "typical", regulated: false },
  { slug: "building-services-engineer", name: "Building-Services Engineer", nameDe: "Versorgungsingenieur:in (TGA)", field: "Engineering", germanLevel: "B2", levelDetail: "No statutory level; B2 is typical for coordination with trades and authorities.", levelBasis: "typical", regulated: false },
  { slug: "industrial-engineer", name: "Industrial Engineer", nameDe: "Wirtschaftsingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "No statutory level; B2 is the usual expectation across operations and management.", levelBasis: "typical", regulated: false },
  { slug: "technical-product-designer", name: "Technical Product Designer", nameDe: "Technische:r Produktdesigner:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical employer expectation.", levelBasis: "typical", regulated: false },

  // ── IT & data (unregulated; often English-first) ──
  { slug: "software-developer", name: "Software Developer", nameDe: "Softwareentwickler:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; many roles work in English, and B1–B2 widens options and helps with daily life and the visa.", levelBasis: "typical", regulated: false },
  { slug: "application-developer", name: "Application Developer", nameDe: "Fachinformatiker:in Anwendungsentwicklung", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical expectation, with English-first roles common.", levelBasis: "typical", regulated: false },
  { slug: "system-integration-specialist", name: "System-Integration Specialist", nameDe: "Fachinformatiker:in Systemintegration", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is typical for cross-team and support work.", levelBasis: "typical", regulated: false },
  { slug: "it-administrator", name: "IT System Administrator", nameDe: "IT-Systemadministrator:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical expectation, depending on the employer.", levelBasis: "typical", regulated: false },
  { slug: "it-specialist", name: "IT Specialist", nameDe: "IT-Spezialist:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; English-first roles are common and B1–B2 broadens employers and eases settling in.", levelBasis: "typical", regulated: false },
  { slug: "data-scientist", name: "Data Scientist", nameDe: "Data Scientist", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; often English-speaking, with German at B1–B2 improving access and integration.", levelBasis: "typical", regulated: false },
  { slug: "cybersecurity-specialist", name: "Cybersecurity Specialist", nameDe: "IT-Sicherheitsexpert:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; frequently English-based, with B1–B2 helping for public-sector and regulated employers.", levelBasis: "typical", regulated: false },
  { slug: "devops-engineer", name: "DevOps Engineer", nameDe: "DevOps-Engineer", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; commonly English-first, with B1–B2 broadening your options.", levelBasis: "typical", regulated: false },
  { slug: "network-technician", name: "Network Technician", nameDe: "Netzwerktechniker:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical expectation for on-site and support work.", levelBasis: "typical", regulated: false },

  // ── Construction & trades (Handwerk; unregulated for employment, level employer-set) ──
  { slug: "electrician", name: "Electrician", nameDe: "Elektroniker:in für Energie- und Gebäudetechnik", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory CEFR level; B1–B2 is typical for site safety and customer contact. Qualification recognition may be needed.", levelBasis: "typical", regulated: false },
  { slug: "automation-electronics-technician", name: "Automation Electronics Technician", nameDe: "Elektroniker:in für Automatisierungstechnik", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is typical for documentation and team communication.", levelBasis: "typical", regulated: false },
  { slug: "plumber", name: "Plumber / SHK Installer", nameDe: "Anlagenmechaniker:in SHK", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory CEFR level; B1–B2 is typical for customer and safety communication.", levelBasis: "typical", regulated: false },
  { slug: "welder", name: "Welder", nameDe: "Schweißer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory CEFR level; around B1 is typical for safety instructions and certification.", levelBasis: "typical", regulated: false },
  { slug: "carpenter", name: "Carpenter", nameDe: "Zimmerer / Zimmerin", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory CEFR level; B1 is the usual practical level for site and safety communication.", levelBasis: "typical", regulated: false },
  { slug: "joiner", name: "Joiner / Cabinetmaker", nameDe: "Tischler:in / Schreiner:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for workshop and customer communication.", levelBasis: "typical", regulated: false },
  { slug: "bricklayer", name: "Bricklayer", nameDe: "Maurer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for site safety and instructions.", levelBasis: "typical", regulated: false },
  { slug: "concrete-builder", name: "Concrete & Reinforced-Concrete Builder", nameDe: "Beton- und Stahlbetonbauer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for on-site safety communication.", levelBasis: "typical", regulated: false },
  { slug: "roofer", name: "Roofer", nameDe: "Dachdecker:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for safety and team communication on site.", levelBasis: "typical", regulated: false },
  { slug: "plasterer", name: "Plasterer / Stuccoer", nameDe: "Stuckateur:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical on site.", levelBasis: "typical", regulated: false },
  { slug: "painter", name: "Painter & Varnisher", nameDe: "Maler:in und Lackierer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for customer and site communication.", levelBasis: "typical", regulated: false },
  { slug: "tiler", name: "Tiler", nameDe: "Fliesenleger:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for site and customer communication.", levelBasis: "typical", regulated: false },
  { slug: "scaffolder", name: "Scaffolder", nameDe: "Gerüstbauer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for safety-critical site communication.", levelBasis: "typical", regulated: false },
  { slug: "road-builder", name: "Road Builder", nameDe: "Straßenbauer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for site safety.", levelBasis: "typical", regulated: false },
  { slug: "civil-construction-worker", name: "Civil-Engineering Construction Worker", nameDe: "Tiefbaufacharbeiter:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for site safety and instructions.", levelBasis: "typical", regulated: false },
  { slug: "glazier", name: "Glazier", nameDe: "Glaser:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for customer and site work.", levelBasis: "typical", regulated: false },
  { slug: "metalworker", name: "Metalworker", nameDe: "Metallbauer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory level; roughly B1 for workshop safety and instructions.", levelBasis: "typical", regulated: false },
  { slug: "industrial-mechanic", name: "Industrial Mechanic", nameDe: "Industriemechaniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is typical for maintenance and documentation.", levelBasis: "typical", regulated: false },
  { slug: "construction-mechanic", name: "Construction Mechanic", nameDe: "Konstruktionsmechaniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical workshop expectation.", levelBasis: "typical", regulated: false },
  { slug: "cnc-machinist", name: "CNC Machinist", nameDe: "Zerspanungsmechaniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is typical for reading specs and team communication.", levelBasis: "typical", regulated: false },
  { slug: "tool-mechanic", name: "Tool Mechanic", nameDe: "Werkzeugmechaniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical workshop expectation.", levelBasis: "typical", regulated: false },
  { slug: "precision-mechanic", name: "Precision Mechanic", nameDe: "Feinwerkmechaniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is typical for precision work and documentation.", levelBasis: "typical", regulated: false },
  { slug: "mechatronics-technician", name: "Mechatronics Technician", nameDe: "Mechatroniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; maintenance and documentation generally call for B1–B2.", levelBasis: "typical", regulated: false },
  { slug: "hvac-technician", name: "HVAC / Refrigeration Technician", nameDe: "Mechatroniker:in für Kältetechnik", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; customer-facing service work usually needs B1–B2.", levelBasis: "typical", regulated: false },
  { slug: "automotive-mechatronics-technician", name: "Automotive Mechatronics Technician", nameDe: "Kfz-Mechatroniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is typical for diagnostics and customer communication.", levelBasis: "typical", regulated: false },
  { slug: "agricultural-machinery-mechatronics", name: "Agricultural & Construction-Machinery Mechatronics Technician", nameDe: "Land- und Baumaschinenmechatroniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory level; B1–B2 is the typical service-and-repair expectation.", levelBasis: "typical", regulated: false },
  { slug: "aircraft-mechanic", name: "Aircraft Mechanic", nameDe: "Fluggerätmechaniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "No statutory German CEFR level; B1–B2 typical (aviation English is also required separately).", levelBasis: "typical", regulated: false },
  { slug: "landscape-gardener", name: "Landscape Gardener", nameDe: "Landschaftsgärtner:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory level; A2–B1 is the typical expectation for instructions and safety on site.", levelBasis: "typical", regulated: false },

  // ── Education (regulated; CEFR level set by the federal states for recognition) ──
  { slug: "early-childhood-educator", name: "Early Childhood Educator", nameDe: "Erzieher:in", field: "Education", germanLevel: "B2–C1", levelDetail: "A state-recognised profession; recognition requires a high level of German (B2–C1, set by the federal state) for work with children and families.", levelBasis: "statutory", regulated: true },
  { slug: "childcare-assistant", name: "Childcare Assistant", nameDe: "Kinderpfleger:in / Sozialassistent:in", field: "Education", germanLevel: "B1–B2", levelDetail: "Recognition is set at state level; B1–B2 is the usual requirement for daily work with children.", levelBasis: "statutory", regulated: true },
  { slug: "special-needs-educator", name: "Special-Needs Educator", nameDe: "Heilerziehungspfleger:in", field: "Education", germanLevel: "B2–C1", levelDetail: "A state-recognised profession; close everyday support work typically requires B2–C1 for recognition.", levelBasis: "statutory", regulated: true },
  { slug: "teacher", name: "School Teacher", nameDe: "Lehrer:in", field: "Education", germanLevel: "C1–C2", levelDetail: "Teaching at German state schools is a regulated profession requiring a very high command of German, usually C1–C2.", levelBasis: "statutory", regulated: true },
  { slug: "vocational-teacher", name: "Vocational-School Teacher", nameDe: "Berufsschullehrer:in", field: "Education", germanLevel: "C1", levelDetail: "A regulated teaching profession; recognition effectively requires C1.", levelBasis: "statutory", regulated: true },
  { slug: "social-worker", name: "Social Worker", nameDe: "Sozialarbeiter:in", field: "Education", germanLevel: "C1", levelDetail: "Counselling and casework rely on nuanced German; state recognition usually requires C1.", levelBasis: "statutory", regulated: true },

  // ── Science (unregulated; often English-leaning) ──
  { slug: "researcher", name: "Researcher / Postdoc", nameDe: "Wissenschaftler:in", field: "Science", germanLevel: "B1–B2", levelDetail: "No statutory level; research is often in English, with B1–B2 helping for administration, teaching and daily life.", levelBasis: "typical", regulated: false },
  { slug: "chemist", name: "Chemist", nameDe: "Chemiker:in", field: "Science", germanLevel: "B2", levelDetail: "No statutory level; around B2 is the common expectation for lab safety and documentation.", levelBasis: "typical", regulated: false },
  { slug: "biologist", name: "Biologist", nameDe: "Biolog:in", field: "Science", germanLevel: "B1–B2", levelDetail: "No statutory level; English-leaning in research, with B1–B2 broadening roles and easing integration.", levelBasis: "typical", regulated: false },
  { slug: "pharmacologist", name: "Pharmacologist", nameDe: "Pharmakolog:in", field: "Science", germanLevel: "B2", levelDetail: "No statutory level; industry and clinical settings generally expect around B2.", levelBasis: "typical", regulated: false },

  // ── Logistics & transport ──
  { slug: "truck-driver", name: "Truck Driver", nameDe: "Berufskraftfahrer:in (Güterverkehr)", field: "Logistics & transport", germanLevel: "B1", levelDetail: "No statutory CEFR level; around B1 is typical for traffic, safety and customer communication (the driving licence is recognised separately).", levelBasis: "typical", regulated: false },
  { slug: "bus-driver", name: "Bus Driver", nameDe: "Omnibusfahrer:in (Personenverkehr)", field: "Logistics & transport", germanLevel: "B1–B2", levelDetail: "No statutory CEFR level; B1–B2 is typical for passenger contact (a German licence and passenger-transport permit are required).", levelBasis: "typical", regulated: false },
  { slug: "train-driver", name: "Train Driver", nameDe: "Triebfahrzeugführer:in", field: "Logistics & transport", germanLevel: "B2", levelDetail: "No general statutory CEFR rule, but safety-critical rail operation effectively requires about B2 plus a German rail licence.", levelBasis: "typical", regulated: false },
  { slug: "warehouse-logistics-specialist", name: "Warehouse & Logistics Specialist", nameDe: "Fachkraft für Lagerlogistik", field: "Logistics & transport", germanLevel: "B1", levelDetail: "No statutory level; roughly B1 for instructions, safety and coordination.", levelBasis: "typical", regulated: false },
  { slug: "warehouse-operative", name: "Warehouse Operative", nameDe: "Fachlagerist:in", field: "Logistics & transport", germanLevel: "A2–B1", levelDetail: "No statutory level; A2–B1 is the typical expectation for instructions and safety.", levelBasis: "typical", regulated: false },

  // ── Business (mostly unregulated; tax advisor regulated) ──
  { slug: "accountant", name: "Accountant", nameDe: "Buchhalter:in", field: "Business", germanLevel: "B2", levelDetail: "No statutory language level; German tax and reporting terminology makes B2 the usual employer expectation.", levelBasis: "typical", regulated: false },
  { slug: "tax-advisor", name: "Tax Advisor", nameDe: "Steuerberater:in", field: "Business", germanLevel: "C1", levelDetail: "A regulated profession working entirely in German tax law; admission effectively requires C1.", levelBasis: "statutory", regulated: true },
  { slug: "sales-manager", name: "Sales Manager", nameDe: "Vertriebsmanager:in", field: "Business", germanLevel: "B2–C1", levelDetail: "No statutory level; client-facing sales in the German market usually needs B2–C1.", levelBasis: "typical", regulated: false },
  { slug: "hr-specialist", name: "HR Specialist", nameDe: "Personalreferent:in", field: "Business", germanLevel: "C1", levelDetail: "No statutory level; German labour law and people communication generally call for C1.", levelBasis: "typical", regulated: false },

  // ── Hospitality & food ──
  { slug: "chef", name: "Chef / Cook", nameDe: "Koch / Köchin", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for kitchen coordination, hygiene rules and orders.", levelBasis: "typical", regulated: false },
  { slug: "hotel-specialist", name: "Hotel Specialist", nameDe: "Hotelfachkraft", field: "Hospitality", germanLevel: "B1–B2", levelDetail: "No statutory level; guest-facing roles usually require B1–B2 depending on the position.", levelBasis: "typical", regulated: false },
  { slug: "restaurant-specialist", name: "Restaurant Specialist", nameDe: "Restaurantfachkraft", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; around B1 for service, orders and guest communication.", levelBasis: "typical", regulated: false },
  { slug: "hospitality-specialist", name: "Hospitality Specialist", nameDe: "Fachkraft im Gastgewerbe", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for guest service and team communication.", levelBasis: "typical", regulated: false },
  { slug: "baker", name: "Baker", nameDe: "Bäcker:in", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for production, hygiene and team communication.", levelBasis: "typical", regulated: false },
  { slug: "butcher", name: "Butcher", nameDe: "Fleischer:in / Metzger:in", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; B1 is typical for hygiene rules and customer service.", levelBasis: "typical", regulated: false },
  { slug: "confectioner", name: "Confectioner", nameDe: "Konditor:in", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for production and customer communication.", levelBasis: "typical", regulated: false },
];

export const OCCUPATION_SLUGS: readonly string[] = OCCUPATIONS.map((o) => o.slug);
const BY_SLUG = new Map(OCCUPATIONS.map((o) => [o.slug, o]));
export function findOccupationBySlug(slug: string): Occupation | null {
  return BY_SLUG.get(slug) ?? null;
}

export const ENGPASS_SOURCE_URL =
  "https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Interaktive-Statistiken/Fachkraeftebedarf/Engpassanalyse-Nav.html";
export const MAKE_IT_IN_GERMANY_URL = "https://www.make-it-in-germany.com/en/";
export const RECOGNITION_PORTAL_URL = "https://www.anerkennung-in-deutschland.de/en/";
