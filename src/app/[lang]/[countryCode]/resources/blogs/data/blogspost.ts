import AssetPath from "@/AssetPath/AssetPath";

interface BlogPost {
  id: number;
  url: string;
  title: string;
  image: string;
  desc: string;
  country: string;
  alt?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    url: "credit-note",
    title: "Integrating Credit Notes with ZATCA: A Comprehensive Guide",
    image: "/images/blogs/credit-notes.webp",
    desc: "The credit note, also known as a credit memo, plays a pivotal role in business financial transactions...",
    country: "KSA"
  },
  {
    id: 2,
    url: "debit-note",
    title: "Integration of Debit Memos with ZATCA: An In-Depth Overview",
    image: "/images/blogs/debit-notes.webp",
    desc: "Navigating the financial landscape of today, especially with ZATCA Phase 2 integration, can be intricate...",
    country: "KSA"
  },
  {
    id: 3,
    url: "zatca-invoicing",
    title: "Understanding ZATCA E-Invoicing Phase 2 Waves in Saudi Arabia",
    image: "/images/blogs/zatca-einvocing-phase2.webp",
    desc: "Each wave targets businesses based on specific annual revenue thresholds and includes a grace period...",
    country: "KSA"
  },
  {
    id: 4,
    url: "oracle-invoicing",
    title: "Oracle E-invoicing Integration with ZATCA Phase 2: A Seamless Fusion",
    image: "/images/blogs/zatcaintegration-with-oracle.webp",
    desc: "Oracle Fusion, a predominant ERP solution in Saudi Arabia, requires the Oracle Integration Cloud (OIC)...",
    country: "KSA"
  },
  {
    id: 5,
    url: "microsoft365",
    title: "Microsoft Dynamics 365 E-invoicing and Integration with ZATCA Phase 2",
    image: "/images/blogs/zatcaintegration-with-microsoft365.webp",
    desc: "As one of the top-tier ERP providers in Saudi Arabia, Microsoft Dynamics 365 caters to medium and large enterprises...",
    country: "KSA"
  },
  {
    id: 6,
    url: "zatca-comprehensive-guide",
    title: "Advance Invoice and Prepayment Invoices in ZATCA: A Comprehensive Guide",
    image: "/images/blogs/zatca-prepayment.webp",
    desc: "A comprehensive guide to declare VAT on advance invoices and prepayment invoices to ZATCA without double VAT payments...",
    country: "KSA"
  },
  {
    id: 7,
    url: "sap-integration-with-zatca",
    title: "SAP E-Invoicing and Its Integration with ZATCA: Paving the Way for Digital Excellence",
    image: "/images/blogs/sap-e-invocing-integration-with-zatca.webp",
    desc: "Saudi Arabia's ZATCA pioneered electronic invoicing, launching its first phase on 4th December 2021 and progressing to Phase 2...",
    country: "KSA"
  },
  {
    id: 8,
    url: "e-invoicing-bahrain",
    title: "The Complete Guide to E-Invoicing in Bahrain",
    image: "/images/blogs/the-complete-guide-to-e-invoicing-in-bahrain.webp",
    desc: "The National Bureau for Revenue (NBR) in Bahrain is progressively heading towards the implementation of e-invoicing...",
    country: "BH"
  },
  {
    id: 9,
    url: "e-invoicing-oman",
    title: "E-Invoicing in Oman: A Comprehensive Guide to Preparation and Compliance",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.webp",
    desc: "The Sultanate of Oman Tax Authority is poised to usher in electronic invoicing (e-invoicing) in 2023...",
    country: "OM"
  },
  {
    id: 11,
    url: "good-receipts",
    title: "Goods Receipts Accounting",
    image: "/images/blogs/goods-receipts-accounting.webp",
    desc: "The more inventory a company has, the less likely they will have what they need Taiichi Ohno, Toyota...",
    country: "KSA"
  },
  {
    id: 12,
    url: "adapting-business",
    title: "Adapting Business Processes for ZATCA e-Invoicing Phase 2 Compliance",
    image: "/images/blogs/adapting-business-processes-for-ZATCA.webp",
    desc: "In December 2021, the Zakat, Tax, and Customs Authority launched the ZATCA e-Invoicing Phase 2 Compliance initiative...",
    country: "KSA"
  },
  {
    id: 13,
    url: "breaking-barriers",
    title: "Breaking Barriers: Attaining ZATCA E-Invoicing Compliance with Limited ERP Integration",
    image: "/images/blogs/attainin-ZATCA-e-Invoicing-compliance-in-saudi-arabia.webp",
    desc: "The Zakat, Tax, and Customs Authority (ZATCA) launched its e-invoicing initiative mandating e-invoicing for resident taxpayers...",
    country: "KSA"
  },
  {
    id: 14,
    url: "zatca-invoice",
    title: "5 Key Steps to Choose the Right ZATCA Approved E-Invoicing Software in Saudi Arabia",
    image: "/images/blogs/key-steps-to-choose-right-zatca-approved-e-invoicing-software.webp",
    desc: "Five essential steps to choosing the right ZATCA-approved e-invoicing software for businesses in Saudi Arabia...",
    country: "KSA"
  },
  {
    id: 15,
    url: "financial-penalities",
    title: "Fines and Financial Penalties Exemption for Taxpayers by ZATCA, Saudi Arabia",
    image: "/images/blogs/fines-and-financial-penalties-exemption-for-its-taxpayers.webp",
    desc: "ZATCA has re-launched the cancellation of fines and exemption of financial penalties to support taxpayers...",
    country: "KSA"
  },
  {
    id: 16,
    url: "complaint-invoice",
    title: "A ZATCA Compliant E-Invoicing Software in KSA",
    image: "/images/blogs/a-compliant-e-invoicing-fatoorah-software.webp",
    desc: "E-invoicing is a critical requirement for businesses in Saudi Arabia under ZATCA regulations...",
    country: "KSA"
  },
  {
    id: 17,
    url: "riyadh-expo",
    title: "Riyadh World Expo 2030 and the Future of Business Innovation",
    image: "/images/blogs/riyadh-world-expo-2030-the-future-of-business-innovation.webp",
    desc: "Navigating new horizons: Riyadh World Expo 2030 and its role in shaping business innovation and transformation...",
    country: "KSA"
  },
  {
    id: 18,
    url: "zatca-fatoora-device-onboarding-requirements",
    title: "Ensuring Compliance and Efficiency: A Guide to ZATCA's FATOORA Device Onboarding Requirements",
    image: "/images/blogs/zatca-fatoora-device-onboarding-requirements.webp",
    desc: "In the rapidly evolving e-invoicing landscape, staying abreast of regulatory requirements is crucial for businesses...",
    country: "KSA"
  },
  {
    id: 19,
    url: "pos-billing-software-intergration-with-zatca",
    title: "POS Billing Software Integration with ZATCA: Accqrate",
    image: "/images/blogs/a-compliant-e-invoicing-fatoorah-software.webp",
    desc: "Point of Sale systems face new challenges integrating with ZATCA's e-invoicing compliance requirements...",
    country: "KSA"
  },
  {
    id: 20,
    url: "enabling-marketplaces-with-e-invoicing",
    title: "Transform Your Marketplace with ZATCA-Compliant E-Invoicing",
    image: "/images/blogs/a-compliant-e-invoicing-fatoorah-software.webp",
    desc: "Marketplaces involve bi-directional transactions, making e-invoicing compliance crucial for operational efficiency...",
    country: "KSA"
  },
  {
    id: 21,
    url: "automotive-industry",
    title: "Accelerating Digital Transformation: Tackling ZATCA E-invoicing in the Automotive Industry",
    image: "/images/blogs/AutomotiveIndustry.png",
    desc: "Saudi Arabia's automotive sector is rapidly evolving, embracing e-invoicing and digital transformation for efficiency...",
    country: "KSA"
  },
  {
    id: 22,
    url: "sap-ecc-challenge",
    title: "SAP ECC End of Life: The Best Alternative for E-invoicing Compliance and ERP Modernization",
    image: "/images/blogs/SAPBlog.png",
    desc: "With SAP ECC reaching end of life, businesses must explore modern alternatives for compliance and modernization...",
    country: "KSA"
  },
  {
    id: 23,
    url: "accqrate-books-msme-accounting",
    title: "Why Accqrate Books Is the Top Choice for MSME Accounting in 2025",
    image: "/images/blogs/msme.png",
    desc: "Accounting software built for the modern MSME Accqrate Books brings simplicity, accuracy, and compliance...",
    country: "KSA"
  },
  //belgium
  {
    id: 24,
    url: "belgium-credit-notes",
    title: "Credit Notes in Belgium: Meaning, Purpose, Rules and How to Issue Them Correctly",
    image: "/images/blogs/CreditNotes.png",
    desc: "A credit note is a commercial document issued by a seller to a buyer, reducing the amount owed on a previously issued invoice...",
    country: "BE"
  },
  {
    id: 25,
    url: "belgium-vat-number",
    title: "Belgium VAT Registration Number: What It Is, Why You Need It, and How to Obtain One",
    image: "/images/blogs/VatRegistration.png",
    desc: "A Belgian VAT registration number is a unique identifier assigned to businesses registered for VAT in Belgium...",
    country: "BE"
  },
  {
    id: 26,
    url: "belgium-income-tax",
    title: "Belgian Income Tax System: Rates, Deductions, Exemptions and How Filing Works",
    image: "/images/blogs/IncomeTax.png",
    desc: "Belgium's personal income tax system is progressive, meaning higher earners pay a higher percentage...",
    country: "BE"
  },
  {
    id: 27,
    url: "belgium-tax-system-2025",
    title: "Belgium Tax System 2025: A Comprehensive Guide to Tax Types, Rates, Filing Responsibilities and Key Compliance Requirements",
    image: "/images/blogs/TaxSystems.png",
    desc: "Belgium operates a complex tax system administered primarily by the Federal Public Service Finance...",
    country: "BE"
  },
  {
    id: 28,
    url: "belgium-corporate-tax",
    title: "Corporate Tax in Belgium: Complete Guide to Rates, Filing, Deductions, Incentives, Assessments, and Compliance Obligations",
    image: "/images/blogs/CorporateTax.png",
    desc: "Corporate income tax in Belgium applies to the worldwide income of Belgian resident companies...",
    country: "BE"
  },
  {
    id: 29,
    url: "belgium-vat",
    title: "VAT in Belgium: Rates, Registration, Liability, Returns, Payments and Compliance Essentials",
    image: "/images/blogs/VAT.png",
    desc: "Value Added Tax (VAT) in Belgium, known locally as BTW/TVA, is a consumption tax applied to most goods and services...",
    country: "BE"
  },
  {
    id: 30,
    url: "peppol-mercurius-belgium",
    title: "PEPPOL and the Mercurius Platform in Belgium: A Complete Guide for the 2026 E Invoicing Landscape",
    image: "/images/blogs/Mercurius.png",
    desc: "PEPPOL is a standardized framework that enables businesses to exchange electronic documents securely...",
    country: "BE"
  },
  {
    id: 31,
    url: "belgium-e-invoicing-faqs",
    title: "Belgium E-Invoicing FAQs: Rules, Scope and What Businesses Must Prepare for in 2026",
    image: "/images/blogs/FAQs.png",
    desc: "Belgium is preparing for one of the most important financial digitization shifts in its history...",
    country: "BE"
  },
  {
    id: 32,
    url: "belgium-technical-rules",
    title: "Technical Rules for E Invoicing in Belgium: Standards, Formats, and Compliance Requirements",
    image: "/images/blogs/TechnicalRules.png",
    desc: "Belgium's e-invoicing framework is built on technical precision. Learn about the EN16931 standard...",
    country: "BE"
  },
  {
    id: 33,
    url: "belgium-e-invoicing-mandate",
    title: "Belgium's e Invoicing Mandate: Complete Guide to Requirements, Timelines, Scope and Readiness",
    image: "/images/blogs/Mandate.png",
    desc: "Belgium is implementing a comprehensive e-invoicing mandate that will transform how businesses handle invoicing...",
    country: "BE"
  },
  {
    id: 34,
    url: "erp-adoption-2025",
    title: "Why ERP Adoption Will Surge in 2025 and Beyond",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "ERP solutions continue evolving with cloud tech and AI-powered tools driving smarter automation...",
    country: "OM"
  },
//Poland
  {
    id: 35,
    url: "PolandKSeF",
    title: "KSeF in Poland: How Mandatory E-Invoicing Creates a Strategic Opportunity for Financial Transformation",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Poland’s transition toward mandatory e-invoicing marks one of the most significant tax digitalization efforts in Europe....",
    country: "PL"
  },
{
    id: 36,
    url: "PolandKSeFMandatory",
    title: "Poland’s Mandatory B2B Electronic Invoicing from February 2026",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Poland is entering a decisive stage in its tax digitalisation journey. The Ministry of Finance has confirmed that mandatory business to business electronic invoicing will begin in February 2026...",
    country: "PL"
  },
  {
    id: 37,
    url: "PolandKSeF2",
    title: "Poland’s KSeF 2.0: Understanding the Official E-Invoicing Mandate",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Poland’s transition toward mandatory electronic invoicing has entered a decisive phase, driven by confirmed legislation...",
    country: "PL"
  },
  {
    id: 38,
    url: "PolandKSeFImplementation",
    title: "KSeF and the E Invoicing Mandate From 2026",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Poland is entering the final stage of its national transition to structured electronic invoicing through the Krajowy System e Faktur, known widely as KSeF...",
    country: "PL"
  },

  //UAE
  {
    id: 39,
    url: "UAEeInvoicing",
    title: "E-Invoicing in the UAE",
    image: AssetPath.blogs.uae.eInvoicing.src,
    desc: "Key Requirements, Implementation Timeline and the Latest Regulatory Updates...",
    country: "AE"
  },
  {
    id: 40,
    url: "UAEvat2025",
    title: "VAT in the UAE: Rates, Thresholds, Exemptions and Compliance Rules for 2025",
    image: AssetPath.blogs.uae.calVat.src,
    desc: "Value Added Tax has been a core element of the UAE’s tax framework since its introduction on 1 January 2018...",
    country: "AE"
  },
  {
    id: 41,
    url: "UAECorporateTax",
    title: "Corporate Tax in the UAE",
    image: AssetPath.blogs.uae.corporateTax.src,
    desc: "A Complete Guide to Rates, Scope, Compliance and the Domestic Minimum Top up Tax...",
    country: "AE"
  },
  {
    id: 42,
    url: "UAEVATReturnFiling",
    title: "How to File a VAT Return in the UAE",
    image: AssetPath.blogs.uae.vatReturn.src,
    desc: "Businesses that are registered for Value Added Tax in the UAE are required to submit VAT returns for every tax period assigned to them by the Federal Tax Authority...",
    country: "AE"
  },
  {
    id: 43,
    url: "UAEVATCalculation",
    title: "How to Calculate VAT in the UAE in 2025",
    image: AssetPath.blogs.uae.vat.src,
    desc: "Calculating VAT in the United Arab Emirates is straightforward once you understand how the five percent rate applies to different types of transactions...",
    country: "AE"
  },
  {
    id: 44,
    url: "UAECorporateTaxFAQ",
    title: "UAE Corporate Tax 2025",
    image: AssetPath.blogs.uae.corporateTax.src,
    desc: "This guide answers common questions about the UAE corporate tax regime, explains who is covered...",
    country: "AE"
  },
  {
    id: 45,
    url: "UAEVATInvoice",
    title: "VAT Invoice in the UAE",
    image: AssetPath.blogs.uae.vatInvoice.src,
    desc: "Value Added Tax has become an integral part of commercial operations in the United Arab Emirates...",
    country: "AE"
  },
  {
    id: 46,
    url: "UAEVATRateStructure",
    title: "VAT Rate Structure in the UAE",
    image: AssetPath.blogs.uae.vatRate.src,
    desc: "The Value Added Tax framework in the United Arab Emirates began on the first of January 2018 through Federal Decree Law No. 8 of 2017...",
    country: "AE"
  },
  {
    id: 47,
    url: "UAEVATRefund",
    title: "How to Claim a VAT Refund in the UAE",
    image: AssetPath.blogs.uae.vatRefund.src,
    desc: "Since the introduction of Value Added Tax in the United Arab Emirates in January 2018, several refund mechanisms...",
    country: "AE"
  },
  {
    id: 48,
    url: "UAEVATPenalties",
    title: "Penalties for Non Compliance Under UAE VAT",
    image: AssetPath.blogs.uae.penalites.src,
    desc: "The introduction of Value Added Tax in the United Arab Emirates marked a major shift in how businesses record...",
    country: "AE"
  },
  {
    id: 49,
    url: "UAEVATComplete2025",
    title: "VAT in the UAE: Complete 2025 Guide to Rates, Registration, Exemptions and Compliance",
    image: AssetPath.blogs.uae.vat.src,
    desc: "Value Added Tax has become a central part of the UAE’s fiscal system since its introduction in 2018...",
    country: "AE"
  },
  {
    id: 50,
    url: "UAEExciseTax",
    title: "Excise Tax in the UAE: Rates, Exemptions, Compliance Rules, and How the Tax Is Calculated",
    image: AssetPath.blogs.uae.exciseTax.src,
    desc: "Excise tax has become an important element of the UAE’s modern tax system. Introduced to discourage the consumption of products that negatively affect public health or the environment...",
    country: "AE"
  },
  {
    id: 51,
    url: "UAEVATZeroRatedVsExempt",
    title: "Zero Rated versus Exempt Supplies in the UAE VAT System",
    image: AssetPath.blogs.uae.zero.src,
    desc: "Understanding whether a supply is zero rated or exempt is one of the most important VAT decisions a business has to make...",
    country: "AE"
  },
  {
    id: 52,
    url: "UAEMoFAAttestation",
    title: "MoFA Attestation in the UAE",
    image: AssetPath.blogs.uae.mofa.src,
    desc: "Document attestation by the Ministry of Foreign Affairs is a mandatory requirement across many legal, immigration and commercial processes in the United Arab Emirates...",
    country: "AE"
  },
  {
    id: 53,
    url: "PeppolCTCUAE",
    title: "The Peppol CTC Model in the UAE",
    image: AssetPath.blogs.uae.ctc.src,
    desc: "The UAE’s transition toward mandatory e-invoicing marks one of its most significant digital taxation reforms to date. By selecting the Peppol Continuous Transaction Controls model as its national framework...",
    country: "AE"
  },
  {
    id: 54,
    url: "UAETaxCreditNotes",
    title: "UAE Tax Credit Notes",
    image: AssetPath.blogs.uae.creditNotes.src,
    desc: "Tax credit notes play a central role in the UAE VAT ecosystem. They ensure that errors, returns and adjustments are documented correctly without compromising compliance, revenue reporting...",
    country: "AE"
  },
  {
    id: 55,
    url: "UAEDigitalSignatureCertificate",
    title: "Digital Signature Certificate in the UAE",
    image: AssetPath.blogs.uae.digital.src,
    desc: "Digital transformation in the UAE has accelerated rapidly, and the shift toward mandatory e-invoicing by 2026 makes Digital Signature Certificates one of the core identity...",
    country: "AE"
  },
  {
    id: 56,
    url: "UAE_TRN_Verification",
    title: "TRN Verification in UAE: A Complete and Practical Guide",
    image: AssetPath.blogs.uae.trn.src,
    desc: "A Tax Registration Number, commonly known as a TRN, is one of the most essential identifiers for any VAT-registered business in the United Arab Emirates...",
    country: "AE"
  },
  {
    id: 57,
    url: "UAE_Excise_Registration",
    title: "Excise Registration in the UAE: Complete, Updated Guide for Businesses",
    image: AssetPath.blogs.uae.registration.src,
    desc: "Excise tax in the United Arab Emirates is a regulatory tool designed to curb the consumption of goods that have negative health or environmental impacts...",
    country: "AE"
  },

  //Jordan
  {
    id: 58,
    url: "JordanEInvoicingGuide",
    title: "e-Invoicing in Jordan: A Complete Guide to the Timeline, Framework, Processes, and Compliance Requirements",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "ordan’s move toward electronic invoicing has become one of the most important milestones in its digital tax reform journey...",
    country: "JD"
  },
  {
    id: 59,
    url: "JordanPhaseTwoEInvoicing",
    title: "Jordan’s Second Phase of E-Invoicing: What JoFotara Means for Businesses in 2025",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Jordan has entered an accelerated phase of tax digitalisation, placing electronic invoicing at the centre of its national compliance framework...",
    country: "JD"
  },

  //Mauritius
  {
    id: 60,
    url: "MauritiusEInvoicing",
    title: "Mauritius Moves Toward Nationwide Electronic Invoicing",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Mauritius is entering a new phase of its digital tax modernisation journey as the Mauritius Revenue Authority begins expanding the scope of mandatory electronic invoicing...",
    country: "MU"
  },
  {
    id: 61,
    url: "MauritiusEInvocingOverview",
    title: "E- Invoicing in Mauritius",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Mauritius is entering a new stage of digital tax modernization through the national e invoicing framework introduced by the Mauritius Revenue Authority...",
    country: "MU"
  },


  // Common Blogs
  {
    id: 62,
    url: "MiddleEastEInvoicing",
    title: "E-Invoicing in the Middle East",
    image: "/images/blogs/midddleEast.png",
    desc: "Across the Middle East, governments are moving decisively toward electronic invoicing as a foundation for modern tax administration and transparent commerce...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 63,
    url: "BahrainEInvoicing",
    title: "Bahrain: Accelerating VAT Integrity Through Digital Invoicing",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Bahrain’s exploration of an electronic invoicing regime marks a natural progression after its VAT introduction in 2019 and the rate...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 64,
    url: "EgyptEInvoicing",
    title: "Egypt: A Mature, Phased Digital Tax Transformation",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Egypt continues to lead regional transformation efforts with a comprehensive national mandate that spans business to business...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 65,
    url: "JordanJoFotaraPhaseTwo",
    title: "Jordan: Expansion of JoFotara and Mandatory Phase Two",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Jordan’s national invoicing system, JoFotara, has transitioned from initial rollout to compulsory use under Phase Two...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 66,
    url: "OmanEInvoicing",
    title: "Oman: Infrastructure Reboot and the Five Corner Vision",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Oman has renewed its electronic invoicing agenda by entering a strategic development partnership that will rebuild the national infrastructure required for compliance...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 67,
    url: "SaudiArabiaEInvoicing",
    title: "Saudi Arabia: The Region’s Benchmark for Real Time Digital Tax Controls",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Saudi Arabia’s FATOORA system remains the most advanced mandate in the region. The Zakat, Tax and Customs Authority requires structured XML invoices...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 68,
    url: "UAEInvoicing",
    title: "United Arab Emirates: Preparing for a PEPPOL Driven E-Billing System",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "The United Arab Emirates is preparing a nationwide electronic invoicing framework built on a decentralised model inspired by PEPPOL’s Continuous Transaction Control...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 69,
    url: "TurkeyEInvoicing",
    title: "Turkey: A Long Standing Digital Pioneer",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "Turkey remains one of the earliest adopters of electronic invoicing worldwide. Its mature ecosystem spans business to business, business to government...",
    country: "KSA,JD,BH,OM,AE"
  },
  {
    id: 70,
    url: "MiddleEastBusinessNewEra",
    title: "A New Era for Middle Eastern Businesses",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "The expanding network of national electronic invoicing mandates signals a regional shift toward unified digital tax ecosystems...",
    country: "KSA,JD,BH,OM,AE"
  },
];

export default blogPosts;