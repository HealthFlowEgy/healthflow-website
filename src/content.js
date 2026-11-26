// Site content. Sourced from the HealthFlow Solution Components overview,
// the 2026 Open Insurance brief and the RegTech one-pager.

export const contact = {
  email: 'info@healthflow.tech',
  phone: '+20 111 004 7666',
  phoneHref: '+201110047666',
  location: 'Cairo, Egypt',
}

export const heroStats = [
  { value: 'EGP 110B', label: 'Egyptian insurance GWP, 2025 — the market our rail serves' },
  { value: '3–10%', label: 'of health spend lost to fraud, waste and abuse globally' },
  { value: 'Live', label: 'HFCX claims exchange, provider registry and AI engine in production' },
]

export const leakage = [
  {
    title: 'Phantom prescriptions',
    text: 'Scripts written, dispensed and billed without the patient ever receiving the medication.',
  },
  {
    title: 'Duplicate claims',
    text: 'The same episode adjudicated across several payers, none of which can see the others.',
  },
  {
    title: 'Upcoded adjudication',
    text: "Services billed above what was delivered. A single payer's review can't detect it.",
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

export const solutions = [
  {
    key: 'hfcx',
    group: 'Exchange',
    code: 'HFCX',
    title: 'Healthcare Financial Claims Exchange',
    ar: 'منصة تبادل مطالبات التأمين الصحي',
    text: 'A neutral, real-time rail for cashless claims between providers, insurers and TPAs. Decentralised routing with JWE-encrypted payloads and FHIR-aligned interfaces.',
    points: ['Real-time eligibility & benefit-limit checks', 'Up to 50% faster claims processing', 'Cross-payer duplicate detection'],
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
    key: 'eclaims',
    group: 'Exchange',
    code: 'E-CLAIMS',
    title: 'National Claim Ledger & Beneficiary Registry',
    ar: 'المنظومة المصرية لإدارة ومراجعة سجل المطالبات',
    text: 'One beneficiary registry and digital insurance wallet across UHIA and private insurance. It records who is covered, under which contract, and how much of every limit is used.',
    points: ['Digital insurance card & wallet', 'Beneficiary claim notifications & disputes', 'Regulator "Sky-Eye" oversight'],
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
    key: 'ndpr',
    group: 'Registry',
    code: 'NDPR',
    title: 'National Digital Patient Registry',
    ar: 'السجل القومي الرقمي للمرضى',
    text: 'Patient identity at population scale: one golden record per person, anchored to the 14-digit National ID, with Arabic-aware matching and a longitudinal FHIR record.',
    points: ['Designed for 120M golden records', 'IHE PMIR, PIXm & PDQm', 'Public-health surveillance engine'],
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

export const flow = [
  { step: 'Script issued', detail: 'Prescriber signs on NDP' },
  { step: 'Identity verified', detail: 'HPR · NDPR' },
  { step: 'Validated', detail: 'AI + EDA formulary' },
  { step: 'Claim exchanged', detail: 'HFCX' },
  { step: 'Settled', detail: 'HealthPay' },
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
  { title: 'Humans authorise', text: 'Payer reviewers approve uncertain or high-value decisions. Every step is written to a hash-chained ledger.' },
]

export const stakeholders = [
  {
    title: 'Insurance companies & TPAs',
    ar: 'شركات التأمين',
    points: ['Lower operational cost per claim', 'Cross-payer fraud visibility', 'Faster, explainable adjudication', 'Keep existing TPA software'],
  },
  {
    title: 'Regulators',
    ar: 'الجهات الرقابية',
    points: ['Real-time "Sky-Eye" market oversight', 'Standardised, auditable claims data', 'TPA performance evidence', 'Stronger consumer protection'],
  },
  {
    title: 'Healthcare providers',
    ar: 'مقدمو الخدمة',
    points: ['Eligibility & limits at point of service', 'Fewer rejected claims', 'Faster cashless settlement', 'One integration, every payer'],
  },
  {
    title: 'Patients',
    ar: 'المرضى',
    points: ['One view of all coverage', 'Notified of every claim', 'Dispute services not received', 'Safer, verified prescriptions'],
  },
]

export const regulators = [
  { code: 'UHIA', name: 'Universal Health Insurance Authority', text: 'Phased universal-coverage rollout driving digital claims adoption at national scale.' },
  { code: 'EDA', name: 'Egyptian Drug Authority', text: 'National formulary and e-prescription direction already in motion.' },
  { code: 'FRA', name: 'Financial Regulatory Authority', text: 'Insurance oversight requiring standardised, auditable claims data. HealthFlow is admitted to its regulatory sandbox.' },
  { code: 'EHC', name: 'Egyptian Health Council', text: 'Central healthcare-professional credentialing and single sign-on.' },
]

export const milestones = [
  { title: 'HFCX live in production', text: 'Claims exchange running on Kubernetes, with the multi-agent AI adjudication layer in production on top.' },
  { title: 'Provider registry operational', text: 'HPR identity layer live on Sunbird RC with W3C DIDs, built with the Egyptian Medical Syndicate.' },
  { title: 'FRA regulatory sandbox', text: 'Admitted to the FRA sandbox, the regulated route to market for insurance infrastructure.' },
  { title: 'BimaLab Africa selection', text: 'Selected for the FSD Africa / Swiss Re Foundation insurtech accelerator programme.' },
  { title: 'FEDIS strategic partnership', text: 'Executed strategic partnership with FEDIS as the entry point for the first insurer cohort.' },
  { title: 'Digital prescription deployed', text: 'NDP / Rousheta Raqamya platform deployed, with the AI validation engine checking every script.' },
]

export const standards = [
  'HL7 FHIR R4',
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
  { year: '2026', phase: 'Foundation', text: 'Insurer pilot cohort on HFCX with AI adjudication live, and production rollout of digital prescriptions.' },
  { year: '2027', phase: 'Scale', text: 'National insurer onboarding, UHIA integration and recurring transaction volume.' },
  { year: '2028', phase: 'Standard', text: 'The default rail for Egyptian health claims, with data and analytics products live.' },
  { year: '2029', phase: 'Regional', text: 'Priority African and MENA markets licensed and live, with the rail extending beyond Egypt.' },
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
