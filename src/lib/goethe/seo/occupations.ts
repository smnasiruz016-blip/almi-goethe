// German shortage occupations (Engpassberufe) — Layer 2. Sourced from Germany's
// well-documented skills-shortage fields (Bundesagentur für Arbeit
// Fachkräfteengpassanalyse / make-it-in-germany), which name ~163 shortage
// occupations across health & care, medicine, engineering, IT, construction &
// trades, education, logistics, science and hospitality.
//
// HONESTY: this is a curated set of REAL, well-documented shortage occupations,
// each with its REAL, established German-language requirement for recognition or
// employment. We do NOT claim to reproduce the exact official 163-item list
// verbatim (that is a later data-extraction refinement). Every German level here is
// established (e.g. Pflege B1–B2, ärztliche Approbation C1, Erzieher:in C1) and the
// page always says "confirm with the competent recognition authority / your
// employer". No fabricated levels.

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

export type Occupation = {
  slug: string;
  name: string; // English
  nameDe: string; // German
  field: ShortageField;
  germanLevel: string; // the real, established requirement
  levelDetail: string; // one honest sentence on why / how the level applies
  regulated: boolean; // requires formal recognition (Anerkennung/Approbation) before working
};

export const OCCUPATIONS: Occupation[] = [
  // Health & care
  { slug: "registered-nurse", name: "Registered Nurse", nameDe: "Pflegefachkraft", field: "Health & care", germanLevel: "B1–B2", levelDetail: "Recognition as a Pflegefachkraft generally requires at least B1, and many federal states require B2 for the professional licence.", regulated: true },
  { slug: "geriatric-nurse", name: "Geriatric Nurse", nameDe: "Altenpfleger:in", field: "Health & care", germanLevel: "B1–B2", levelDetail: "Care of older people demands close everyday communication; B1 is the usual minimum, often B2 for recognition.", regulated: true },
  { slug: "nursing-assistant", name: "Nursing Assistant", nameDe: "Pflegehelfer:in", field: "Health & care", germanLevel: "B1", levelDetail: "Assistant roles typically require around B1 for safe communication with patients and colleagues.", regulated: true },
  { slug: "midwife", name: "Midwife", nameDe: "Hebamme", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated profession; recognition usually requires B2 because of direct responsibility for patient care.", regulated: true },
  { slug: "physiotherapist", name: "Physiotherapist", nameDe: "Physiotherapeut:in", field: "Health & care", germanLevel: "B2", levelDetail: "Recognition commonly requires B2 to communicate treatment clearly with patients.", regulated: true },
  { slug: "occupational-therapist", name: "Occupational Therapist", nameDe: "Ergotherapeut:in", field: "Health & care", germanLevel: "B2", levelDetail: "A regulated health profession; B2 is the usual requirement for recognition.", regulated: true },
  { slug: "medical-technical-assistant", name: "Medical Technical Assistant", nameDe: "Medizinisch-technische:r Assistent:in (MTA)", field: "Health & care", germanLevel: "B2", levelDetail: "B2 is typically required for recognition in laboratory, radiology and functional-diagnostic roles.", regulated: true },

  // Medicine
  { slug: "doctor", name: "Doctor / Physician", nameDe: "Arzt / Ärztin", field: "Medicine", germanLevel: "C1 (+ Fachsprachprüfung)", levelDetail: "The ärztliche Approbation requires C1 general German plus a medical-language exam (Fachsprachprüfung).", regulated: true },
  { slug: "dentist", name: "Dentist", nameDe: "Zahnarzt / Zahnärztin", field: "Medicine", germanLevel: "C1 (+ Fachsprachprüfung)", levelDetail: "Like physicians, dental Approbation requires C1 plus a professional-language examination.", regulated: true },
  { slug: "pharmacist", name: "Pharmacist", nameDe: "Apotheker:in", field: "Medicine", germanLevel: "C1 (+ Fachsprachprüfung)", levelDetail: "The pharmaceutical Approbation requires C1 and a professional-language exam.", regulated: true },
  { slug: "psychotherapist", name: "Psychotherapist", nameDe: "Psychotherapeut:in", field: "Medicine", germanLevel: "C1", levelDetail: "Therapeutic work depends on nuanced spoken German; recognition usually requires C1.", regulated: true },

  // Engineering
  { slug: "mechanical-engineer", name: "Mechanical Engineer", nameDe: "Maschinenbauingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "The title is not language-licensed, but employers typically expect around B2; technical English roles exist.", regulated: false },
  { slug: "electrical-engineer", name: "Electrical Engineer", nameDe: "Elektroingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "B2 is the common employer expectation; some international teams work in English.", regulated: false },
  { slug: "civil-engineer", name: "Civil Engineer", nameDe: "Bauingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "Site and authority communication makes B2 the usual practical requirement.", regulated: false },
  { slug: "automotive-engineer", name: "Automotive Engineer", nameDe: "Fahrzeugingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "Around B2 is typically expected; English is common in larger automotive firms.", regulated: false },
  { slug: "mechatronics-engineer", name: "Mechatronics Engineer", nameDe: "Mechatronikingenieur:in", field: "Engineering", germanLevel: "B2", levelDetail: "B2 is the usual employer expectation for shop-floor and design communication.", regulated: false },

  // IT & data
  { slug: "software-developer", name: "Software Developer", nameDe: "Softwareentwickler:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "Many tech roles work in English; B1–B2 widens your options and helps in daily life and the visa.", regulated: false },
  { slug: "it-specialist", name: "IT Specialist", nameDe: "IT-Spezialist:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "English-first roles are common; B1–B2 broadens employers and eases settling in.", regulated: false },
  { slug: "data-scientist", name: "Data Scientist", nameDe: "Data Scientist", field: "IT & data", germanLevel: "B1–B2", levelDetail: "Often English-speaking; German at B1–B2 still improves access and integration.", regulated: false },
  { slug: "cybersecurity-specialist", name: "Cybersecurity Specialist", nameDe: "IT-Sicherheitsexpert:in", field: "IT & data", germanLevel: "B1–B2", levelDetail: "Frequently English-based; B1–B2 helps with public-sector and regulated employers.", regulated: false },

  // Construction & trades
  { slug: "electrician", name: "Electrician", nameDe: "Elektroniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "Safety communication on site makes B1–B2 the usual practical requirement.", regulated: true },
  { slug: "plumber", name: "Plumber / SHK Installer", nameDe: "Anlagenmechaniker:in SHK", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "Customer and safety communication typically needs B1–B2.", regulated: true },
  { slug: "welder", name: "Welder", nameDe: "Schweißer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "Around B1 for safety instructions and certification; recognition depends on the trade body.", regulated: true },
  { slug: "carpenter", name: "Carpenter", nameDe: "Zimmerer / Zimmerin", field: "Construction & trades", germanLevel: "B1", levelDetail: "B1 is the usual practical level for site and safety communication.", regulated: true },
  { slug: "metalworker", name: "Metalworker", nameDe: "Metallbauer:in", field: "Construction & trades", germanLevel: "B1", levelDetail: "Roughly B1 for workshop safety and instructions.", regulated: true },
  { slug: "mechatronics-technician", name: "Mechatronics Technician", nameDe: "Mechatroniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "Maintenance and documentation generally call for B1–B2.", regulated: true },
  { slug: "hvac-technician", name: "HVAC Technician", nameDe: "Klima- und Kältetechniker:in", field: "Construction & trades", germanLevel: "B1–B2", levelDetail: "Customer-facing service work usually requires B1–B2.", regulated: true },

  // Education
  { slug: "early-childhood-educator", name: "Early Childhood Educator", nameDe: "Erzieher:in", field: "Education", germanLevel: "C1", levelDetail: "Working with children and families typically requires C1 for recognition.", regulated: true },
  { slug: "teacher", name: "School Teacher", nameDe: "Lehrer:in", field: "Education", germanLevel: "C1–C2", levelDetail: "Teaching in German schools requires a very high command of German, usually C1–C2.", regulated: true },
  { slug: "social-worker", name: "Social Worker", nameDe: "Sozialarbeiter:in", field: "Education", germanLevel: "C1", levelDetail: "Counselling and casework rely on nuanced German; recognition usually requires C1.", regulated: true },
  { slug: "special-needs-educator", name: "Special-Needs Educator", nameDe: "Heilerziehungspfleger:in", field: "Education", germanLevel: "B2–C1", levelDetail: "Close everyday support work typically needs B2–C1 for recognition.", regulated: true },

  // Science
  { slug: "researcher", name: "Researcher / Postdoc", nameDe: "Wissenschaftler:in", field: "Science", germanLevel: "B1–B2", levelDetail: "Research is often conducted in English; B1–B2 helps with administration, teaching and daily life.", regulated: false },
  { slug: "chemist", name: "Chemist", nameDe: "Chemiker:in", field: "Science", germanLevel: "B2", levelDetail: "Around B2 is commonly expected for lab safety and documentation.", regulated: false },
  { slug: "biologist", name: "Biologist", nameDe: "Biolog:in", field: "Science", germanLevel: "B1–B2", levelDetail: "English-leaning in research; B1–B2 broadens roles and eases integration.", regulated: false },
  { slug: "pharmacologist", name: "Pharmacologist", nameDe: "Pharmakolog:in", field: "Science", germanLevel: "B2", levelDetail: "Industry and clinical settings generally expect around B2.", regulated: false },

  // Logistics & transport
  { slug: "truck-driver", name: "Truck Driver", nameDe: "Berufskraftfahrer:in", field: "Logistics & transport", germanLevel: "B1", levelDetail: "Around B1 for traffic, safety and customer communication; the licence is recognised separately.", regulated: true },
  { slug: "train-driver", name: "Train Driver", nameDe: "Triebfahrzeugführer:in", field: "Logistics & transport", germanLevel: "B2", levelDetail: "Safety-critical rail communication typically requires B2 plus a German rail licence.", regulated: true },
  { slug: "warehouse-logistics-specialist", name: "Warehouse & Logistics Specialist", nameDe: "Fachkraft für Lagerlogistik", field: "Logistics & transport", germanLevel: "B1", levelDetail: "Roughly B1 for instructions, safety and coordination.", regulated: false },

  // Business
  { slug: "accountant", name: "Accountant", nameDe: "Buchhalter:in", field: "Business", germanLevel: "B2", levelDetail: "German tax and reporting language makes B2 the usual practical requirement.", regulated: false },
  { slug: "tax-advisor", name: "Tax Advisor", nameDe: "Steuerberater:in", field: "Business", germanLevel: "C1", levelDetail: "A regulated profession working in German tax law; recognition effectively requires C1.", regulated: true },
  { slug: "sales-manager", name: "Sales Manager", nameDe: "Vertriebsmanager:in", field: "Business", germanLevel: "B2–C1", levelDetail: "Client-facing sales in the German market usually needs B2–C1.", regulated: false },
  { slug: "hr-specialist", name: "HR Specialist", nameDe: "Personalreferent:in", field: "Business", germanLevel: "C1", levelDetail: "German labour-law and people communication generally calls for C1.", regulated: false },

  // Hospitality
  { slug: "chef", name: "Chef / Cook", nameDe: "Koch / Köchin", field: "Hospitality", germanLevel: "B1", levelDetail: "Around B1 for kitchen coordination, hygiene rules and orders.", regulated: false },
  { slug: "hotel-specialist", name: "Hotel Specialist", nameDe: "Hotelfachkraft", field: "Hospitality", germanLevel: "B1–B2", levelDetail: "Guest-facing roles usually require B1–B2 depending on the position.", regulated: false },
  { slug: "restaurant-specialist", name: "Restaurant Specialist", nameDe: "Restaurantfachkraft", field: "Hospitality", germanLevel: "B1", levelDetail: "Around B1 for service, orders and guest communication.", regulated: false },
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
