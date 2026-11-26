// Site content. Sourced from the HealthFlow Solution Components overview,
// the 2026 Open Insurance brief and the RegTech one-pager.

export const contact = {
  email: 'info@healthflow.tech',
  phone: '+20 111 004 7666',
  phoneHref: '+201110047666',
  location: 'Cairo, Egypt',
}

export const heroStats = [
  { value: '120M', label: 'citizens the national patient registry is designed to serve, one golden record each' },
  { value: '750K+', label: 'healthcare professionals given one verifiable digital identity' },
  { value: 'Live', label: 'Registries, prescription and claims exchanges running in production' },
]

export const silos = [
  {
    title: 'Fragmented identity',
    text: 'The same patient is registered differently at every hospital, payer and pharmacy, so no one holds a complete record.',
  },
  {
    title: 'Unverifiable credentials',
    text: 'Professional and facility licences live on paper and are checked by hand, which is slow, error-prone and open to fraud.',
  },
  {
    title: 'Disconnected systems',
    text: 'Every HIS, payer and pharmacy keeps its own codes. Legacy HL7 v2, batch files and paper never reach a shared record.',
  },
  {
    title: 'No system-wide view',
    text: 'Ministries, regulators and payers each see only their own slice, so outbreaks are spotted late and duplicate or phantom services go unnoticed.',
  },
]

export const layers = [
  {
    name: 'Point of service',
    items: ['Hospitals & HIS', 'Clinics', 'Pharmacies', 'Laboratories', 'Payers & TPAs', 'Citizen apps', 'Regulators'],
  },
  {
    name: 'Agentic interoperability layer',
    items: ['Identity resolution', 'Terminology mapping', 'Legacy integration', 'Consent & policy', 'Routing & orchestration', 'Data quality'],
  },
  {
    name: 'Information exchanges',
    items: ['HFCX claims exchange', 'Digital Prescription (NDP)', 'E-CLAIMS ledger', 'AI claims automation', 'FHIR R4 shared health record'],
  },
  {
    name: 'National registries',
    items: ['Patients (NDPR)', 'Healthcare professionals (HPR)', 'Healthcare facilities (NHFR)', 'Beneficiaries', 'Medicine directory & terminology'],
  },
]

export const trustServices = [
  'Keycloak SSO & OAuth 2.0',
  'W3C DIDs & Verifiable Credentials',
  'Consent service',
  'Hash-chained audit ledger',
  'Sovereign hosting in Egypt',
  'PDPL No. 151/2020',
]

export const hip = {
  key: 'hip',
  group: 'Exchange',
  code: 'HIP',
  title: 'HealthFlow Interoperability Platform — the HIE core',
  ar: 'منصة التشغيل البيني — قلب منظومة تبادل المعلومات الصحية',
  text: 'An OpenHIE-aligned exchange that connects every point-of-service system to the national registries and exchanges. Governed AI agents replace hand-coded mediators for identity resolution, terminology mapping, legacy integration, consent and routing. Hospitals connect as they are, from FHIR-native APIs down to scanned Arabic paper.',
  points: [
    'Four-tier HIS facade: FHIR, HL7 v2, batch and paper',
    'IHE PMIR, PIXm, PDQm, MHD and IPS',
    'Event-driven backbone: every change emitted once',
    'Consent and purpose-of-use enforced at the gateway',
  ],
}

export const solutions = [
  {
    key: 'ndpr',
    group: 'Registry',
    code: 'NDPR',
    title: 'National Digital Patient Registry',
    ar: 'السجل القومي الرقمي للمرضى',
    text: 'Patient identity at population scale: one golden record per person, anchored to the 14-digit National ID, with Arabic-aware matching and a longitudinal FHIR record.',
    points: ['Designed for 120M golden records', 'IHE PMIR, PIXm & PDQm', 'Public-health surveillance engine'],
  },
  {
    key: 'hpr',
    group: 'Registry',
    code: 'HPR',
    title: 'Healthcare Professional Registry',
    ar: 'السجل القومي لمقدمي الخدمة الصحية',
    text: 'A unified digital identity for 750K+ healthcare professionals, with W3C DIDs, verifiable credentials, remote document signing and single sign-on across every portal.',
    points: ['Public licence verification', 'Remote e-signature for prescriptions', 'Built with the Egyptian Medical Syndicate'],
  },
  {
    key: 'nhfr',
    group: 'Registry',
    code: 'NHFR',
    title: 'Healthcare Facility Registry',
    ar: 'السجل القومي للمنشآت الصحية',
    text: 'The national master facility list on Sunbird RC. It is OpenHIE-aligned, issues a unique facility ID to every hospital, clinic, lab and pharmacy, and publishes verifiable accreditation status.',
    points: ['GAHAR accreditation listing', 'FHIR R4 / IHE mCSD interface', 'One facility ID for NDP, E-CLAIMS & HPR'],
  },
  {
    key: 'ndp',
    group: 'Exchange',
    code: 'NDP',
    title: 'Digital Prescription — Rousheta Raqamya',
    ar: 'الروشتة الرقمية',
    text: "Egypt's national e-prescription exchange. Each script is checked against the EDA formulary, signed by a verified prescriber and traceable from issue to dispense.",
    points: ['47,292 EDA-registered medicines', 'AI drug-interaction & dosage checks', 'Digital, QR and National ID access paths'],
  },
  {
    key: 'hfcx',
    group: 'Exchange',
    code: 'HFCX',
    title: 'Healthcare Financial Claims Exchange',
    ar: 'منصة تبادل مطالبات التأمين الصحي',
    text: 'The financial lane of the exchange: real-time cashless claims between providers, insurers and TPAs. Decentralised routing with JWE-encrypted payloads and FHIR-aligned interfaces.',
    points: ['Real-time eligibility & benefit-limit checks', 'Up to 50% faster claims processing', 'Cross-payer duplicate detection'],
  },
  {
    key: 'eclaims',
    group: 'Exchange',
    code: 'E-CLAIMS',
    title: 'National Claim Ledger & Beneficiary Registry',
    ar: 'المنظومة المصرية لإدارة ومراجعة سجل المطالبات',
    text: 'One beneficiary registry and digital insurance wallet across UHIA and private insurance. It records who is covered, under which contract, and how much of every limit is used.',
    points: ['Digital insurance card & wallet', 'Beneficiary claim notifications & disputes', 'Regulator "Sky-Eye" oversight'],
  },
  {
    key: 'ai',
    group: 'AI',
    code: 'AIV',
    title: 'AI Claims Automation',
    ar: 'أتمتة المطالبات بالذكاء الاصطناعي',
    text: 'Six specialist agents review every claim in seconds. Each recommendation comes with its reasons, and the payer reviewer keeps the final decision.',
    points: ['Coding, eligibility, necessity & pricing', 'Network-level fraud detection', 'Shadow-mode validated before go-live'],
  },
  {
    key: 'itqan',
    group: 'AI',
    code: 'ITQAN',
    title: 'ITQAN AI — Accreditation Readiness',
    ar: 'إتقان — الجاهزية للاعتماد',
    text: "A bilingual (AR/EN) AI command centre built on a facility's digital twin, for GAHAR and JCI accreditation readiness and quality management.",
    points: ['Real-time gap assessments', 'Automated CAPA / RCA & KPI tracking', 'Standards-cited documentation'],
  },
  {
    key: 'regtech',
    group: 'AI',
    code: 'RegTech',
    title: 'Compliance & Fraud Prevention',
    ar: 'الامتثال ومكافحة الاحتيال',
    text: 'Continuous, AI-powered compliance monitoring: real-time anomaly detection and automated audit trails that keep participants within regulation and reduce revenue leakage.',
    points: ['Real-time anomaly alerts', 'Tamper-evident audit trails', 'Regulator dashboards'],
  },
]

export const costs = [
  { value: 'Repeated', label: 'tests and lost paper files when patients move between facilities' },
  { value: 'Unverified', label: 'prescribers, licences and facilities checked by hand' },
  { value: 'Late', label: 'outbreak detection, with no national, real-time picture' },
  { value: 'EGP 4B+', label: 'estimated annual loss to fraud, waste and abuse in medical insurance alone' },
]

export const scenarios = [
  { title: 'A birth in Sohag', text: 'The newborn gets a golden record linked to the mother, a temporary health ID and a vaccination plan within minutes.' },
  { title: 'Cairo to Alexandria', text: "One National ID lookup brings up the patient's six-year history. No repeated tests and no lost paper file." },
  { title: 'Unconscious in the ED', text: 'Break-glass access releases blood type and anticoagulant status in under two minutes, and the access is reviewed within 24 hours.' },
  { title: 'A dengue cluster in Aswan', text: 'Space-time detection flags a five-neighbourhood cluster on day four and routes tiered alerts with the evidence.' },
  { title: 'TB household contacts', text: 'A knowledge-graph search schedules screening for household and workplace contacts without revealing the diagnosis.' },
  { title: 'Decades of paper files', text: 'Arabic OCR and clinical NLP turn paper records into validated FHIR resources with honest provenance.' },
]

export const flow = [
  { step: 'Patient identified', detail: 'NDPR golden record' },
  { step: 'Prescriber verified', detail: 'HPR · facility registry' },
  { step: 'Script validated', detail: 'AI + EDA formulary' },
  { step: 'Dispensed & recorded', detail: 'Pharmacy · shared FHIR record' },
  { step: 'Coverage applied', detail: 'E-CLAIMS · HFCX' },
]

export const hieAgents = [
  { n: '01', title: 'Identity resolution', text: 'National ID validation, Arabic name normalisation and PIXm / PDQm matching. Uncertain matches go to data stewards with the evidence.' },
  { n: '02', title: 'Terminology & mapping', text: 'Maps local codes to ICD-10 / ICD-11, SNOMED CT, LOINC, ATC and national drug codes. Uncoded text is queued, never dropped.' },
  { n: '03', title: 'Legacy integration', text: 'Turns HL7 v2, batch files and scanned Arabic paper into FHIR R4, with confidence scores and provenance.' },
  { n: '04', title: 'Consent & policy', text: 'Enforces purpose-of-use, consent scope and break-glass rules at the gateway. Denials are logged, never hidden.' },
  { n: '05', title: 'Routing & orchestration', text: 'Routes each transaction to the registries, NDP, E-CLAIMS and the claims engine, with retries and store-and-forward.' },
  { n: '06', title: 'Data integrity', text: 'Validates against Egyptian FHIR profiles, scores facility data quality and flags anomalies early.' },
]

export const agents = [
  { n: '01', title: 'Intake & coding', text: 'Checks diagnosis, procedure and drug codes (ICD-10, EDA formulary) and the supporting documents, in Arabic and English.' },
  { n: '02', title: 'Eligibility & limits', text: 'Confirms coverage and remaining ceilings against E-CLAIMS and payer systems before adjudication, not after payment.' },
  { n: '03', title: 'Medical necessity', text: "Reviews services against payer policies, approved clinical guidelines and the patient's claim history." },
  { n: '04', title: 'Financial assessment', text: 'Applies the tariff valid on the date of service and the benefits package, then computes the payable amount.' },
  { n: '05', title: 'Fraud risk', text: 'Scores each claim and provider for cross-payer patterns: collusion rings, near-duplicates, unbundling and upcoding.' },
  { n: '06', title: 'Reviewer copilot', text: 'Shows the reviewer the recommendation, its confidence and the evidence behind it. Approve, adjust or deny in one click.' },
]

export const governance = [
  { title: 'AI proposes', text: 'Each agent returns an action with a confidence score and the evidence behind it.' },
  { title: 'Rules decide', text: 'Versioned, testable rules and Egyptian FHIR profiles accept, hold or reject the action.' },
  { title: 'Humans authorise', text: 'Data stewards, clinicians and payer reviewers approve uncertain or high-impact actions. Every step is written to a hash-chained ledger.' },
]

export const stakeholders = [
  {
    title: 'Government & regulators',
    ar: 'الحكومة والجهات الرقابية',
    points: ['National dashboards for MoHP and regulators', 'Public-health surveillance & outbreak alerts', 'Standardised, auditable data', 'Sovereign control of national health data'],
  },
  {
    title: 'Hospitals, clinics, pharmacies & labs',
    ar: 'مقدمو الخدمة',
    points: ['The patient’s history, wherever they were treated', 'Connect as you are: FHIR, HL7 v2 or batch', 'Eligibility & limits at point of service', 'One integration, the whole system'],
  },
  {
    title: 'Patients',
    ar: 'المرضى',
    points: ['One health record across providers', 'See and control who accessed it', 'Safer, verified prescriptions', 'One view of all insurance coverage'],
  },
  {
    title: 'Insurance companies & TPAs',
    ar: 'شركات التأمين',
    points: ['Lower operational cost per claim', 'Cross-payer fraud visibility', 'Faster, explainable adjudication', 'Keep existing TPA software'],
  },
]

export const regulators = [
  { code: 'MoHP', name: 'Ministry of Health and Population', text: 'National standards, Digital Egypt 2030 health strategy and governorate-by-governorate rollout.' },
  { code: 'UHIA', name: 'Universal Health Insurance Authority', text: 'Universal health coverage rolling out governorate by governorate, built on digital identity and shared records.' },
  { code: 'EDA', name: 'Egyptian Drug Authority', text: 'National formulary and e-prescription direction already in motion.' },
  { code: 'EHC', name: 'Egyptian Health Council', text: 'Central healthcare-professional credentialing and single sign-on, served by the national professional registry.' },
]

export const milestones = [
  { title: 'Digital prescription deployed', text: 'NDP / Rousheta Raqamya exchange deployed, with the AI validation engine checking every script against the EDA formulary.' },
  { title: 'Professional registry operational', text: 'HPR identity layer live on Sunbird RC with W3C DIDs, built with the Egyptian Medical Syndicate.' },
  { title: 'Claims exchange in production', text: 'HFCX running on Kubernetes, with the multi-agent AI adjudication layer in production on top.' },
  { title: 'Interoperability core built', text: 'OpenHIE-based platform with Egypt-specific mediators for National ID validation, Arabic name matching and eligibility.' },
  { title: 'FEDIS strategic partnership', text: 'Executed strategic partnership with FEDIS.' },
  { title: 'Regulatory sandbox & BimaLab Africa', text: 'Admitted to the FRA regulatory sandbox, and selected for the FSD Africa / Swiss Re Foundation BimaLab programme.' },
]

export const standards = [
  'HL7 FHIR R4',
  'SNOMED CT · LOINC · ICD-10/11',
  'IHE PMIR · PIXm · PDQm · MHD',
  'OpenHIE',
  'W3C DIDs & VCs',
  'OAuth 2.0 / OpenID Connect',
  'JWE payload encryption',
  'PCI DSS SAQ-D v4.0.1',
  'PDPL No. 151/2020',
  'UHI Law No. 2/2018',
]

export const security = [
  { title: 'Identity & access', text: 'Keycloak SSO with OAuth 2.0 / OIDC, mTLS between services, role-based access per participant type.' },
  { title: 'Data protection', text: 'AES-256 at rest, JWE payload encryption, TLS in transit and per-field privacy classification.' },
  { title: 'Audit by design', text: 'Append-only, hash-chained ledgers with correlation IDs. Every AI proposal and human decision is recorded.' },
  { title: 'Sovereign AI', text: 'Arabic language models run inside Egypt and no patient data goes to external APIs. If the AI is unavailable, adjudication falls back to rules.' },
]

export const roadmap = [
  { year: '2026', phase: 'Foundation', text: 'Registries and exchanges in production. Digital prescriptions rolling out, with the first hospital, pharmacy and payer cohorts connected.' },
  { year: '2027', phase: 'Scale', text: 'Patient registry and shared health record live in pilot governorates, UHIA integration and national onboarding of providers.' },
  { year: '2028', phase: 'National', text: "The default exchange for Egypt's health data, with national analytics and public-health intelligence live." },
  { year: '2029', phase: 'Regional', text: 'The same HIE re-licensed for priority African and MENA markets, not rebuilt.' },
]

export const partners = [
  'Microsoft',
  'ITQAN',
  'BimaLab Africa',
  'FEDIS',
  'Egyptian Medical Syndicate',
  'FSD Africa',
]

export const team = [
  { initials: 'HA', name: 'Dr. Hesham Abdelghaffar', role: 'Chairman of the Board & Investment Officer', url: 'https://www.linkedin.com/in/heshamabdelghaffar/' },
  { initials: 'AS', name: 'Dr. Ahmed Safwat', role: 'Vice-Chairman & Executive Co-CEO', url: 'https://www.linkedin.com/in/ahmed-safwat-921248206/' },
  { initials: 'AB', name: 'Dr. Amr Bakr', role: 'Founder & Group CEO', url: 'https://www.linkedin.com/in/amr-bakr-94212b48/' },
  { initials: 'AA', name: 'Ahmed Adel', role: 'Chief Information Officer', url: 'https://www.linkedin.com/in/aabakr/' },
  { initials: 'HE', name: 'Hassan Elsokkary', role: 'Chief Technology Advisor', url: 'https://www.linkedin.com/in/hassan-elsokkary-bb526333/' },
  { initials: 'MS', name: 'Mohammed Saleh', role: 'Chief Commercial Advisor', url: 'https://www.linkedin.com/in/mohammed-saleh-ab89024b/' },
]
