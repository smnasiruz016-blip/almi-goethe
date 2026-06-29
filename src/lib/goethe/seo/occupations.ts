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

  // ── Expansion wave 2 — +65 shortage occupations across all fields ──
  // Statutory entries below are limited to regulated health professions whose
  // German level is part of the recognition/licence (vet B2 + Approbation tests
  // in German; Masseur/med. Bademeister state permit B2; nursing recognition B2,
  // both web-verified). Everything else is "typical": no statutory CEFR level.

  // Health & care
  { slug: "intensive-care-nurse", name: "Intensive Care Nurse", nameDe: "Fachkrankenpfleger:in für Intensivpflege", field: "Health & care", germanLevel: "B2", levelDetail: "Recognition is as a Pflegefachkraft and requires a German certificate (usually B2); intensive care is a further specialisation on top.", levelBasis: "statutory", regulated: true },
  { slug: "operating-room-nurse", name: "Operating Room Nurse", nameDe: "OP-Pflegefachkraft", field: "Health & care", germanLevel: "B2", levelDetail: "Recognition is as a Pflegefachkraft and requires a German certificate (usually B2) for safe communication in theatre.", levelBasis: "statutory", regulated: true },
  { slug: "anesthesia-nurse", name: "Anesthesia Nurse", nameDe: "Fachpflegekraft für Anästhesie", field: "Health & care", germanLevel: "B2", levelDetail: "Recognition is as a Pflegefachkraft and requires a German certificate (usually B2); anaesthesia nursing is a further specialisation.", levelBasis: "statutory", regulated: true },
  { slug: "medical-masseur", name: "Medical Masseur", nameDe: "Masseur:in und medizinische:r Bademeister:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated health profession; the state permit to use the title normally requires B2 for patient contact and treatment.", levelBasis: "statutory", regulated: true },
  { slug: "veterinary-assistant", name: "Veterinary Assistant", nameDe: "Tiermedizinische:r Fachangestellte:r", field: "Health & care", germanLevel: "B1–B2", levelDetail: "Not a language-regulated profession; practices typically expect around B1–B2 for owner contact, records and clinic work.", levelBasis: "typical", regulated: false },
  { slug: "dental-hygienist", name: "Dental Hygienist", nameDe: "Dentalhygieniker:in", field: "Health & care", germanLevel: "B2", levelDetail: "No separate statutory language level; practices typically expect around B2 for direct patient care and advice.", levelBasis: "typical", regulated: false },
  { slug: "elderly-care-assistant", name: "Elderly Care Assistant", nameDe: "Betreuungskraft (§ 43b SGB XI)", field: "Health & care", germanLevel: "B1", levelDetail: "No statutory language level; care settings typically expect around B1 for daily contact with residents and staff.", levelBasis: "typical", regulated: false },
  { slug: "pharmacy-assistant", name: "Pharmacy Assistant", nameDe: "Pharmazeutisch-kaufmännische:r Angestellte:r", field: "Health & care", germanLevel: "B1–B2", levelDetail: "No statutory language level; pharmacies typically expect around B1–B2 for stock, orders and counter service.", levelBasis: "typical", regulated: false },
  { slug: "orthopedic-technician", name: "Orthopedic Technician", nameDe: "Orthopädietechnik-Mechaniker:in", field: "Health & care", germanLevel: "B1–B2", levelDetail: "A skilled trade rather than a language-regulated profession; employers typically expect around B1–B2 for patient fitting and documentation.", levelBasis: "typical", regulated: false },
  { slug: "medical-coder", name: "Medical Coder", nameDe: "Medizinische:r Kodierfachkraft", field: "Health & care", germanLevel: "B2", levelDetail: "No statutory language level; clinical documentation in German usually needs around B2.", levelBasis: "typical", regulated: false },
  { slug: "sterilization-technician", name: "Sterilization Technician", nameDe: "Fachkraft für Medizinprodukteaufbereitung", field: "Health & care", germanLevel: "B1", levelDetail: "No statutory language level; around B1 is typical for hygiene procedures, records and team work.", levelBasis: "typical", regulated: false },

  // Medicine
  { slug: "veterinarian", name: "Veterinarian", nameDe: "Tierärzt:in", field: "Medicine", germanLevel: "B2–C1", levelDetail: "Approbation requires German because the knowledge tests are held in German; B2 is the mandatory minimum and some states expect more.", levelBasis: "statutory", regulated: true },

  // Engineering
  { slug: "aerospace-engineer", name: "Aerospace Engineer", nameDe: "Luft- und Raumfahrtingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; technical work can start in English, but B1–B2 is the usual expectation for teams and documentation.", levelBasis: "typical", regulated: false },
  { slug: "chemical-engineer", name: "Chemical Engineer", nameDe: "Chemieingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for plant safety, teams and reporting.", levelBasis: "typical", regulated: false },
  { slug: "environmental-engineer", name: "Environmental Engineer", nameDe: "Umweltingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for German regulations, authorities and reporting.", levelBasis: "typical", regulated: false },
  { slug: "energy-engineer", name: "Energy Engineer", nameDe: "Energietechnik-Ingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for project work, teams and documentation.", levelBasis: "typical", regulated: false },
  { slug: "quality-engineer", name: "Quality Engineer", nameDe: "Qualitätsingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for audits, suppliers and documentation.", levelBasis: "typical", regulated: false },
  { slug: "production-engineer", name: "Production Engineer", nameDe: "Produktionsingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for shop-floor teams and processes.", levelBasis: "typical", regulated: false },
  { slug: "surveying-engineer", name: "Surveying Engineer", nameDe: "Vermessungsingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for site work, authorities and records.", levelBasis: "typical", regulated: false },
  { slug: "biomedical-engineer", name: "Biomedical Engineer", nameDe: "Medizintechnik-Ingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for clinical-facing work and documentation.", levelBasis: "typical", regulated: false },
  { slug: "rail-systems-engineer", name: "Rail Systems Engineer", nameDe: "Eisenbahningenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for safety rules, authorities and teams.", levelBasis: "typical", regulated: false },
  { slug: "telecommunications-engineer", name: "Telecommunications Engineer", nameDe: "Nachrichtentechnik-Ingenieur:in", field: "Engineering", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for projects, teams and documentation.", levelBasis: "typical", regulated: false },

  // IT & data
  { slug: "cloud-engineer", name: "Cloud Engineer", nameDe: "Cloud-Ingenieur:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; many teams work in English, with B1–B2 expected for everyday collaboration.", levelBasis: "typical", regulated: false },
  { slug: "database-administrator", name: "Database Administrator", nameDe: "Datenbankadministrator:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation, though some teams operate in English.", levelBasis: "typical", regulated: false },
  { slug: "data-engineer", name: "Data Engineer", nameDe: "Dateningenieur:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; many roles run in English, with B1–B2 expected for everyday work.", levelBasis: "typical", regulated: false },
  { slug: "machine-learning-engineer", name: "Machine Learning Engineer", nameDe: "Machine-Learning-Ingenieur:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; English is common, with B1–B2 expected for teams and stakeholders.", levelBasis: "typical", regulated: false },
  { slug: "frontend-developer", name: "Frontend Developer", nameDe: "Frontend-Entwickler:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; many teams work in English, with B1–B2 helpful for collaboration.", levelBasis: "typical", regulated: false },
  { slug: "backend-developer", name: "Backend Developer", nameDe: "Backend-Entwickler:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; English is common, with B1–B2 expected for everyday collaboration.", levelBasis: "typical", regulated: false },
  { slug: "mobile-app-developer", name: "Mobile App Developer", nameDe: "App-Entwickler:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; many teams operate in English, with B1–B2 useful for collaboration.", levelBasis: "typical", regulated: false },
  { slug: "it-support-specialist", name: "IT Support Specialist", nameDe: "IT-Supportspezialist:in", field: "IT & data", germanLevel: "B2", levelDetail: "No statutory language level, but user-facing support in the German market usually needs around B2.", levelBasis: "typical", regulated: false },
  { slug: "embedded-systems-developer", name: "Embedded Systems Developer", nameDe: "Embedded-Entwickler:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "No statutory language level; English is common, with B1–B2 expected for teams and documentation.", levelBasis: "typical", regulated: false },
  { slug: "erp-consultant", name: "ERP Consultant", nameDe: "ERP-Berater:in", field: "IT & data", germanLevel: "B2", levelDetail: "No statutory language level, but client work in the German market usually needs around B2.", levelBasis: "typical", regulated: false },

  // Construction & trades
  { slug: "heating-installer", name: "Heating & Sanitation Installer", nameDe: "Anlagenmechaniker:in SHK", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for safety, customers and site coordination.", levelBasis: "typical", regulated: false },
  { slug: "drywall-installer", name: "Drywall Installer", nameDe: "Trockenbaumonteur:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site instructions and safety.", levelBasis: "typical", regulated: false },
  { slug: "floor-layer", name: "Floor Layer", nameDe: "Bodenleger:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site work and customer contact.", levelBasis: "typical", regulated: false },
  { slug: "stonemason", name: "Stonemason", nameDe: "Steinmetz:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory language level; around B1 is typical for customer work, drawings and safety.", levelBasis: "typical", regulated: false },
  { slug: "solar-installer", name: "Solar Panel Installer", nameDe: "Solarteur:in / PV-Monteur:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site work, safety and customers.", levelBasis: "typical", regulated: false },
  { slug: "crane-operator", name: "Crane Operator", nameDe: "Kranführer:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site signals, safety and coordination.", levelBasis: "typical", regulated: false },
  { slug: "insulation-fitter", name: "Insulation Fitter", nameDe: "Isolierfacharbeiter:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site instructions and safety.", levelBasis: "typical", regulated: false },
  { slug: "window-fitter", name: "Window Fitter", nameDe: "Fenstermonteur:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for installation, customers and safety.", levelBasis: "typical", regulated: false },
  { slug: "elevator-technician", name: "Elevator Technician", nameDe: "Aufzugsmonteur:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory language level; around B1 is typical for safety procedures, manuals and customers.", levelBasis: "typical", regulated: false },
  { slug: "facade-fitter", name: "Facade Fitter", nameDe: "Fassadenmonteur:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site coordination and safety.", levelBasis: "typical", regulated: false },
  { slug: "building-cleaner", name: "Building Cleaner", nameDe: "Gebäudereiniger:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for instructions, safety and customer sites.", levelBasis: "typical", regulated: false },
  { slug: "pipe-installer", name: "Pipe Installer", nameDe: "Rohrleitungsbauer:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site instructions and safety.", levelBasis: "typical", regulated: false },
  { slug: "asphalt-paver", name: "Asphalt Paver", nameDe: "Asphaltbauer:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site coordination and safety.", levelBasis: "typical", regulated: false },
  { slug: "steel-construction-fitter", name: "Steel Construction Fitter", nameDe: "Stahlbaumonteur:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site work, drawings and safety.", levelBasis: "typical", regulated: false },
  { slug: "well-driller", name: "Well Driller", nameDe: "Brunnenbauer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory language level; around B1 is typical for site work, permits and safety.", levelBasis: "typical", regulated: false },
  { slug: "foundry-mechanic", name: "Foundry Mechanic", nameDe: "Gießereimechaniker:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for shop-floor safety and instructions.", levelBasis: "typical", regulated: false },
  { slug: "demolition-worker", name: "Demolition Worker", nameDe: "Abbruchfacharbeiter:in", field: "Construction & trades", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for site safety and coordination.", levelBasis: "typical", regulated: false },
  { slug: "industrial-electronics-technician", name: "Industrial Electronics Technician", nameDe: "Elektroniker:in für Betriebstechnik", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory language level; around B1 is typical for safety, manuals and team communication.", levelBasis: "typical", regulated: false },
  { slug: "refrigeration-technician", name: "Refrigeration Technician", nameDe: "Mechatroniker:in für Kältetechnik", field: "Construction & trades", germanLevel: "B1", levelDetail: "No statutory language level; around B1 is typical for safety, customers and documentation.", levelBasis: "typical", regulated: false },

  // Logistics & transport
  { slug: "forklift-operator", name: "Forklift Operator", nameDe: "Staplerfahrer:in", field: "Logistics & transport", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for warehouse safety and coordination.", levelBasis: "typical", regulated: false },
  { slug: "delivery-driver", name: "Delivery Driver", nameDe: "Auslieferungsfahrer:in", field: "Logistics & transport", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for routes, customers and paperwork.", levelBasis: "typical", regulated: false },
  { slug: "courier-driver", name: "Courier Driver", nameDe: "Kurierfahrer:in", field: "Logistics & transport", germanLevel: "A2–B1", levelDetail: "No statutory language level; around A2–B1 is typical for deliveries and customer contact.", levelBasis: "typical", regulated: false },
  { slug: "tram-driver", name: "Tram Driver", nameDe: "Straßenbahnfahrer:in", field: "Logistics & transport", germanLevel: "B1", levelDetail: "No statutory CEFR level, but passenger-safety duties and announcements make around B1 the usual expectation.", levelBasis: "typical", regulated: false },
  { slug: "supply-chain-specialist", name: "Supply Chain Specialist", nameDe: "Fachkraft für Lieferkettenmanagement", field: "Logistics & transport", germanLevel: "B2", levelDetail: "No statutory language level; coordination with German suppliers and teams usually needs around B2.", levelBasis: "typical", regulated: false },

  // Hospitality & food
  { slug: "cook-assistant", name: "Cook Assistant", nameDe: "Beikoch / Beiköchin", field: "Hospitality", germanLevel: "A2–B1", levelDetail: "No statutory level; around A2–B1 is typical for kitchen coordination, hygiene rules and orders.", levelBasis: "typical", regulated: false },
  { slug: "kitchen-helper", name: "Kitchen Helper", nameDe: "Küchenhilfe", field: "Hospitality", germanLevel: "A2", levelDetail: "No statutory level; around A2 is typical for basic kitchen instructions and hygiene.", levelBasis: "typical", regulated: false },
  { slug: "hotel-receptionist", name: "Hotel Receptionist", nameDe: "Empfangskraft / Rezeptionist:in", field: "Hospitality", germanLevel: "B1–B2", levelDetail: "No statutory level; guest-facing reception work usually needs around B1–B2.", levelBasis: "typical", regulated: false },
  { slug: "catering-specialist", name: "Catering Specialist", nameDe: "Fachkraft für Systemgastronomie", field: "Hospitality", germanLevel: "B1", levelDetail: "No statutory level; around B1 is typical for service, orders and team communication.", levelBasis: "typical", regulated: false },

  // Education
  { slug: "social-pedagogue", name: "Social Pedagogue", nameDe: "Sozialpädagog:in", field: "Education", germanLevel: "B2–C1", levelDetail: "No single statutory CEFR level for the role, but work with families, authorities and reports usually needs B2–C1.", levelBasis: "typical", regulated: false },
  { slug: "curative-care-worker", name: "Curative Care Worker", nameDe: "Heilerziehungspfleger:in", field: "Education", germanLevel: "B2", levelDetail: "No statutory CEFR level; daily work supporting people with disabilities usually needs around B2.", levelBasis: "typical", regulated: false },
  { slug: "childminder", name: "Childminder", nameDe: "Kindertagespflegeperson (Tagesmutter/-vater)", field: "Education", germanLevel: "B1–B2", levelDetail: "The local permit is regulated, but no statutory CEFR level is set; around B1–B2 is the usual expectation for working with children and parents.", levelBasis: "typical", regulated: false },

  // Science
  { slug: "medical-physicist", name: "Medical Physicist", nameDe: "Medizinphysiker:in", field: "Science", germanLevel: "B2", levelDetail: "No statutory CEFR level; clinical-facing work in radiotherapy/radiology usually needs around B2.", levelBasis: "typical", regulated: false },
  { slug: "food-technologist", name: "Food Technologist", nameDe: "Lebensmitteltechnolog:in", field: "Science", germanLevel: "B1–B2", levelDetail: "No statutory language level; B1–B2 is the usual expectation for production, safety rules and teams.", levelBasis: "typical", regulated: false },
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
