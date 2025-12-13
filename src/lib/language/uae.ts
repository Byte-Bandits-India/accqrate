'use client';

import { useCountry } from "@/contexts/CountryContext";
import { ReactNode } from 'react';

interface TProps {
    children: ReactNode;
}

// Define translation structure
interface TranslationEntry {
    ar: string;
}

// Type for the translations object
interface TranslationsMap {
    [key: string]: TranslationEntry;
}

export const blogTranslations: TranslationsMap = {
  
  /* ===================== Hero ===================== */

"E-invoicing Solution for UAE": { ar: "" },

"Meet an Expert": { ar: "" },

"Products to power every team": { ar: "" },

"Explore All Products...": { ar: "" },

/* ===================== Why Accqrate ===================== */

"Why Accqrate?": { ar: "" },

"We specialize in providing reliable and efficient Solutions": { ar: "" },

"From compliance to automation, Accqrate ensures a seamless PEPPOL e-invoicing experience.": { ar: "" },

"See It in Action": { ar: "" },

/* ===================== Feature Cards ===================== */

"One platform.": { ar: "" },
"Zero silos.": { ar: "" },
"All modules run on a single, integrated data model.": { ar: "" },

"Enterprise-grade.": { ar: "" },
"Security, scalability and performance proven across 30+ industries.": { ar: "" },

"AI, everywhere.": { ar: "" },
"Accelera, our AI copilot, accelerates routine work, insights and decisions.": { ar: "" },

"Fast time-to-value.": { ar: "" },
"Lightning-fast UI, one-click installs, and low-disruption migrations from SAP/Microsoft/Oracle or disjointed tools.": { ar: "" },

"Built-in Global compliance:": { ar: "" },
"Connect ERP/POS to tax authorities; from ZATCA Phase II to PEPPOL standards.": { ar: "" },

"Deploy your way.": { ar: "" },
"Cloud (managed, subscription) or On-Prem (full control over infra & data).": { ar: "" },

/* ===================== Trust / Scale ===================== */

"Trusted by": { ar: "" },

"5,000+ Global companies": { ar: "" },

"Based on reviews": { ar: "" },

/* ===================== Product Highlight ===================== */

"Accqrate E-invoicing": { ar: "" },

"Peppol Member and certified Access Point Provider and Service Metadata Publisher.": { ar: "" },

/* ===================== Compliance (UAE) ===================== */

"Full Compliance with UAE’s E-Invoicing Mandate": { ar: "" },

"Accqrate ensures end-to-end compliance with UAE’s B2B and B2G e-invoicing mandate and the FTA’s requirement. Our platform supports:": { ar: "" },

"Structured formats fully aligned with UAE and PEPPOL specifications.": { ar: "" },

"Secure, standardized exchange over PEPPOL": { ar: "" },

"Automated updates for evolving tax and technical regulations": { ar: "" },

"Seamless integration with FTA.": { ar: "" },

"Hassle-Free E-Invoicing Automation": { ar: "" },

"Shift from manual intervention to intelligent automation:": { ar: "" },

"AI-powered validation to reduce rejections": { ar: "" },

"Real-time error detection and correction suggestions": { ar: "" },

"Zero-cost regulatory upgrades": { ar: "" },

"Automated generation → validation → PEPPOL submission → archiving": { ar: "" },

"Book an Appointment": { ar: "" },

/* ===================== AI Copilot ===================== */

"Your AI Copilot": { ar: "" },

"Work faster and decide smarter with AI embedded across the suite.": { ar: "" },

"Natural-language actions:": { ar: "" },
"Ask, “Show last month’s receivables by region” and get the answer, fast.": { ar: "" },

"Automations:": { ar: "" },
"Generate e-invoices, match POs, trigger approvals and alerts.": { ar: "" },

"Insight to action:": { ar: "" },
"Spot anomalies, forecast demand, and recommend next steps.": { ar: "" },

"Assistive UX:": { ar: "" },
"Contextual help, data enrichment and guided workflows.": { ar: "" },

"See Accelera in a 5-Minute Demo": { ar: "" },

/* ===================== UAE Future Section ===================== */

"Future-Ready for": { ar: "" },

"DCTCE / 5 Corner:": { ar: "" },

"Accqrate equips enterprises to be compliant across the upcoming UAE E-invoicing model DCTCE / 5 corner :": { ar: "" },

"Talk to our Consultant": { ar: "" },

/* ===================== Testimonials ===================== */

"Testimonials": { ar: "" },

"Ali - Construction Company": { ar: "" },

"Al Laith, UAE Global Health & Beauty Co.": { ar: "" },

"Wail - Jonex": { ar: "" },

"Speak to a Reference Customer": { ar: "" },

/* ===================== Values ===================== */

"Our Values": { ar: "" },

"Drive Everything We Do": { ar: "" },

"Built on trust, innovation and excellence, we deliver measurable results that transform business and create lasting impact.": { ar: "" },

"Book a Personalized Walkthrough": { ar: "" },

/* ===================== FAQs ===================== */

"Frequently Answered Questions": { ar: "" },

"How long is the free trial?": { ar: "" },
"30 days. Plus an optional 14-day practice account for a total of 44 days.": { ar: "" },

"Can I terminate during the trial?": { ar: "" },
"Yes, no commitment during the trial.": { ar: "" },

"Do I need a credit card to start?": { ar: "" },
"No card required to begin the trial.": { ar: "" },

"Where is Accqrate Cloud hosted?": { ar: "" },
"Regional hosting options with data-residency choices; on-prem available for full control.": { ar: "" },

"How do I pay the subscription?": { ar: "" },
"Monthly or annual plans; invoicing and payment options vary by region.": { ar: "" },

"What plans are available?": { ar: "" },
"Tiered by module mix and users; bundle pricing for suites.": { ar: "" },

/* ===================== Final CTA ===================== */

"Final Conversion Band": { ar: "" },

"Run compliant, AI-powered operations with Accqrate.": { ar: "" },

"Get a Free Proof of Concept": { ar: "" },

"Subscribe for Updates": { ar: "" },

"Talk to Sales": { ar: "" },

"PEPPOL-Ready. VAT-Compliant. Built For Enterprise.": {
  ar: ""
},


"Enable end-to-end electronic invoicing across your ERP, accounting, and billing systems with a fully compliant, PEPPOL-certified platform tailored for United Arab Emirates businesses. Automate creation, validation, transmission, and archiving of e-invoices with complete confidence.": {
  ar: ""
},

"Complaint . Seamless . Secure": {
  ar: ""
},


"One Platform.": {
  ar: ""
},

"Connect Multiple ERP or POS into one unified platform for FTA-invoicing.": {
  ar: ""
},

"Harmonised Data.": {
  ar: ""
},

"Built-in FTA": {
  ar: ""
},

"Connect ERP/POS to FTA from Direct to PEPPOL based Integration..": {
  ar: ""
},

"e-invoicing compliance:": {
  ar: ""
},

"Deploy your": {
  ar: ""
},

"way.": {
  ar: ""
},

"AI,": {
  ar: ""
},

"Accelera, our AI copilot , accelerates routine work, insights and decisions.": {
  ar: ""
},

"everywhere.": {
  ar: ""
},

"Fast": {
  ar: ""
},



"time-to-value.": {
  ar: ""
},



/* ===================== Cards ===================== */

"PEPPOL Member": {
  ar: ""
},

"Certified AP Provider & SMP": {
  ar: ""
},

"GDPR Complaint": {
  ar: ""
},

"Secure, Transparent, Responsible": {
  ar: ""
},

"ISO 27001 Certified": {
  ar: ""
},

"Robust Security. Reliable Governance": {
  ar: ""
},

"FTA e-invoicing": {
  ar: ""
},

"Accreditation in Progress": {
  ar: ""
},

/* ===================== Testimonials ===================== */


"Accqrate’s e-invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.": {
  ar: ""
},

/* ===================== Contact ===================== */

"Contact Sales Jordan": {
  ar: ""
},

  // Blog title and metadata
  "The Peppol CTC Model in the UAE: A Strategic Overview of the Country's New E-Invoicing Architecture": {
    ar: "",
  },

  // First paragraph
  "The UAE's transition toward mandatory e-invoicing marks one of its most significant digital taxation reforms to date. By selecting the Peppol Continuous Transaction Controls model as its national framework, the country is aligning with global best practices for real-time tax data exchange, secure interoperability, and cross-border invoice standardization.": {
    ar: "",
  },

  // Second paragraph
  "This overview explains the Peppol CTC model adopted by the UAE, why the government selected this architecture, how the five-corner structure works, and what businesses must prepare for as the mandate comes into force.": {
    ar: "",
  },

  // Headings
  "What the UAE Means by Peppol CTC": {
    ar: "",
  },
  "How E-Invoicing Works in a Structured Framework": {
    ar: "",
  },
  "Two Global Architectural Families in E-Invoicing Systems": {
    ar: "",
  },
  "Decentralised Models": {
    ar: "",
  },
  "Centralised Clearance Models": {
    ar: "",
  },
  "The Peppol Five-Corner Model Used by the UAE": {
    ar: "",
  },
  "Corner One": {
    ar: "",
  },
  "Corner Two": {
    ar: "",
  },
  "Corner Three": {
    ar: "",
  },
  "Corner Four": {
    ar: "",
  },
  "Corner Five": {
    ar: "",
  },
  "Core Features of the Peppol CTC Structure in the UAE": {
    ar: "",
  },
  "Decentralised Exchange Layer": {
    ar: "",
  },
  "Unified International Standards": {
    ar: "",
  },
  "Accredited Peppol Access Points": {
    ar: "",
  },
  "Secure Transmission": {
    ar: "",
  },
  "Real-Time Visibility for the Tax Authority": {
    ar: "",
  },
  "Repository Function, Not Clearance": {
    ar: "",
  },
  "Why the UAE Selected the Peppol CTC Model": {
    ar: "",
  },
  "Benefits to Businesses": {
    ar: "",
  },
  "Conclusion": {
    ar: "",
  },

  // Paragraph content
  "Peppol Continuous Transaction Controls is a regulatory infrastructure that enables governments to receive transactional data almost immediately after an invoice is issued. The system does not operate as a centralized clearance model. Instead, it relies on a network of accredited service providers who exchange structured documents using globally recognized Peppol standards.": {
    ar: "",
  },

  "The UAE's version of this model incorporates the Peppol five-corner architecture. It is a decentralised approach, designed to ensure interoperability across systems while maintaining near real-time visibility for tax authorities.": {
    ar: "",
  },

  "Electronic invoices in this ecosystem are not static documents. They are machine-readable files, usually in XML or JSON, formatted according to the Universal Business Language. This allows automated validation, error detection, and seamless transmission between business systems.": {
    ar: "",
  },

  "Behind the scenes, the e-invoicing framework defines the rules, protocols, formats, and compliance requirements governing every invoice transmitted within the UAE or across borders.": {
    ar: "",
  },

  "Decentralised frameworks rely on certified intermediaries rather than a single national platform. Peppol is the most widely adopted example. The UAE, Singapore, Belgium, and several EU markets use decentralised models to support both local and international trade.": {
    ar: "",
  },

  "This model includes the traditional Peppol four-corner structure and the extended five-corner CTC model used for regulatory reporting.": {
    ar: "",
  },

  "In a centralised system, every invoice is routed to a government platform for validation before reaching the buyer. Nations such as Italy and Poland operate this structure. Although it offers complete administrative control, it often limits flexibility and requires high national infrastructure capacity.": {
    ar: "",
  },

  "The UAE deliberately chose decentralisation to support scalability, interoperability, and cross-border alignment.": {
    ar: "",
  },

  "The UAE's CTC model extends the Peppol four-corner structure by inserting the tax authority as an independent node. Each invoice therefore passes through five distinct entities.": {
    ar: "",
  },

  "The supplier creates the invoice in a Peppol-compliant format via its ERP or invoicing system.": {
    ar: "",
  },

  "The supplier's Peppol Access Point converts, packages, and transmits the invoice within the Peppol network.": {
    ar: "",
  },

  "The UAE tax authority receives a copy of the invoice simultaneously. In the UAE implementation, the authority does not validate or approve the document. It acts as a repository to support compliance checks, analytics, and future audit processes.": {
    ar: "",
  },

  "The buyer's Peppol Access Point receives the invoice, performs standard integrity checks, and converts it into the buyer's preferred system format.": {
    ar: "",
  },

  "The buyer receives the invoice, processes it in their accounting system, and completes the transaction.": {
    ar: "",
  },

  "This framework ensures interoperability between all participating systems, irrespective of their technology stack or region.": {
    ar: "",
  },

  "The UAE model includes several defining characteristics that shape its operational and compliance architecture.": {
    ar: "",
  },

  "Invoices move between accredited service providers rather than a single government gateway, preventing bottlenecks and improving scalability.": {
    ar: "",
  },

  "Peppol BIS and the Peppol International Invoice specifications ensure that every invoice follows the same semantics and structure, supporting seamless multi-regional integration.": {
    ar: "",
  },

  "Only government-certified Access Points may send and receive e-invoices in the UAE, safeguarding data quality and ensuring adherence to national protocols.": {
    ar: "",
  },

  "The AS4 protocol encrypts and authenticates each message, protecting invoice data end-to-end.": {
    ar: "",
  },

  "The CTC architecture automatically routes invoices to the authority without delaying the transaction, supporting proactive compliance monitoring.": {
    ar: "",
  },

  "Unlike many tax clearance models, the UAE system does not perform pre-approval or rejection. This maintains business continuity while still giving regulators access to data in near real time.": {
    ar: "",
  },

  "Several strategic considerations drove the UAE's decision.": {
    ar: "",
  },

  "Interoperability with international markets:": {
    ar: "",
  },
  
  "Peppol is widely used across Europe and Asia, making the UAE's trade environment more globally compatible.": {
    ar: "",
  },

  "Support for future digital tax reforms:": {
    ar: "",
  },
  
  "Real-time data access enables analytics-driven oversight, risk scoring, and intelligent audit mechanisms.": {
    ar: "",
  },

  "Reduced operational friction for businesses:": {
    ar: "",
  },
  
  "Decentralised systems allow companies to work through their existing service providers without adapting to rigid government platforms.": {
    ar: "",
  },

  "Security and message integrity:": {
    ar: "",
  },
  
  "The AS4 protocol and Access Point accreditation introduce strict security and consistency controls.": {
    ar: "",
  },

  "Scalable national infrastructure:": {
    ar: "",
  },
  
  "A decentralised model does not require a high-capacity single national server, reducing systemic risk.": {
    ar: "",
  },

  "The UAE Peppol CTC system offers significant operational and compliance advantages.": {
    ar: "",
  },

  "Automation of invoice handling:": {
    ar: "",
  },
  
  "Structured formats reduce manual work and accelerate accounts payable and receivable cycles.": {
    ar: "",
  },

  "Lower risk of human error:": {
    ar: "",
  },
  
  "Machine-readable validation catches structural inconsistencies before invoices move through the network.": {
    ar: "",
  },

  "Efficient compliance:": {
    ar: "",
  },
  
  "Real-time visibility and standardized data simplify VAT reporting and audit readiness.": {
    ar: "",
  },

  "Cross-border readiness:": {
    ar: "",
  },
  
  "Companies trading across GCC, Europe, and Asia can use the same infrastructure without building separate integrations.": {
    ar: "",
  },

  "Predictability in tax governance:": {
    ar: "",
  },
  
  "Continuous transaction reporting reduces the likelihood of disputes, retrospective audits, or mismatched filings.": {
    ar: "",
  },

  "The UAE's adoption of the Peppol Continuous Transaction Controls model represents a decisive move toward a modern, data-driven tax ecosystem. By implementing a decentralised five-corner architecture and aligning with global Peppol standards, the UAE is building a foundation for secure, interoperable and future-ready e-invoicing practices.": {
    ar: "",
  },

  "Businesses operating in the country should begin preparing by upgrading their ERP infrastructure, evaluating Peppol-compatible service providers and restructuring internal processes to handle structured invoice data. A coordinated transition will be essential as the mandate moves closer to enforcement.": {
    ar: "",
  },

  "As the e-invoicing landscape becomes more complex, platforms such as Accqrate can help organizations centralize compliance, connect seamlessly with accredited Peppol Access Points, and maintain readiness for the UAE's broader digital tax transformation.": {
    ar: "",
  },
  // Excise Registration Blog Content
  "Excise tax in the United Arab Emirates is a regulatory tool designed to curb the consumption of goods that have negative health or environmental impacts. As the UAE expands its tax ecosystem, businesses dealing with excise goods must register with the Federal Tax Authority within thirty days of beginning taxable activities. Proper registration ensures compliance, prevents penalties, and establishes a clear foundation for ongoing filing and payment duties.": {
    ar: "",
  },

  "This guide provides a comprehensive explanation of excise tax, who must register, required documents, timelines, registration steps, exemptions, and the consequences of non-compliance.": {
    ar: "",
  },

  "Understanding Excise Tax and Excise Goods": {
    ar: "",
  },

  "Excise tax is an indirect tax applied once on specific categories of goods that the government considers harmful. These goods are referred to as excise goods and currently include the following categories:": {
    ar: "",
  },

  "Tobacco and tobacco derivatives": {
    ar: "",
  },

  "Carbonated beverages containing added sugar or flavoring": {
    ar: "",
  },

  "Energy drinks formulated to stimulate physical or mental performance": {
    ar: "",
  },

  "Electronic smoking devices and tools": {
    ar: "",
  },

  "Liquids used within electronic smoking devices": {
    ar: "",
  },

  "Sweetened beverages with added sugar or artificial sweeteners": {
    ar: "",
  },

  "These items attract excise tax irrespective of whether they are manufactured inside the UAE or imported for local consumption.": {
    ar: "",
  },

  "Entities Required to Register for Excise Tax": {
    ar: "",
  },

  "Registration is mandatory for individuals or businesses engaged in any activity that results in excise liability. Registration is required when a business:": {
    ar: "",
  },

  "Produces excise goods inside the UAE": {
    ar: "",
  },

  "Imports excise goods from overseas into the UAE": {
    ar: "",
  },

  "Releases excise goods from approved designated zones": {
    ar: "",
  },

  "Holds excise goods for stockpiling or resale": {
    ar: "",
  },

  "Operates as a warehouse keeper for excise goods": {
    ar: "",
  },

  "Engaging in any of these activities without prior registration constitutes non-compliance.": {
    ar: "",
  },

  "Situations Where Registration Is Not Required": {
    ar: "",
  },

  "A business that rarely imports excise goods may qualify for exemption. To qualify, the entity must demonstrate that its imports occur fewer than once every six months or not more than three times within a twenty-four-month period.": {
    ar: "",
  },

  "Even when exempt from registration, excise tax may still apply if imported goods exceed duty-free thresholds.": {
    ar: "",
  },

  "Timeline for Excise Registration": {
    ar: "",
  },

  "Although there is no single universal deadline, the rule is straightforward. A business must register within thirty days of commencing any excise-related activity. For companies planning to produce, import, or stockpile excise goods, registration must be completed before any activity begins. Failure to do so exposes the business to significant penalties.": {
    ar: "",
  },

  "Step-By-Step Excise Registration Process in the UAE": {
    ar: "",
  },

  "The Federal Tax Authority manages excise registration through the EmaraTax platform. The application typically requires about forty-five minutes to complete, and the FTA may take up to twenty business days to review and approve the submission.": {
    ar: "",
  },

  "Step One: Create or Access an EmaraTax Account": {
    ar: "",
  },

  "Visit the FTA portal and enter the EmaraTax system using UAE Pass or previously created login details. If you are registering for the first time, create a new account.": {
    ar: "",
  },

  "Step Two: Open the Taxable Person Dashboard": {
    ar: "",
  },

  "After logging in, navigate to the section where taxable persons are listed. If none are present, create a profile by entering the entity details.": {
    ar: "",
  },

  "Step Three: Begin the Registration Application": {
    ar: "",
  },

  "Select the profile of the entity you intend to register. Choose the Excise option and initiate the registration request.": {
    ar: "",
  },

  "Step Four: Confirm Guidelines and Start": {
    ar: "",
  },

  "Review the instructions provided by the FTA, confirm your understanding, and continue to the main form.": {
    ar: "",
  },

  "Step Five: Complete Required Information": {
    ar: "",
  },

  "Provide the following information systematically:": {
    ar: "",
  },

  "Entity information including type and legal structure": {
    ar: "",
  },

  "Trade license and identification details": {
    ar: "",
  },

  "Business activities related to excise goods": {
    ar: "",
  },

  "Ownership details": {
    ar: "",
  },

  "Branch information if applicable": {
    ar: "",
  },

  "Registered business address and contact details": {
    ar: "",
  },

  "Optional business relationship information": {
    ar: "",
  },

  "Bank information": {
    ar: "",
  },

  "Details on excise activities including production, import, or stockpiling": {
    ar: "",
  },

  "Customs registration details": {
    ar: "",
  },

  "Authorized signatory information": {
    ar: "",
  },

  "Step Six: Review and Finalize": {
    ar: "",
  },

  "Review each section carefully. Submit your declaration and complete the application. Once submitted, record the reference number for future tracking.": {
    ar: "",
  },

  "Step Seven: FTA Review and Approval": {
    ar: "",
  },

  "The FTA may approve, reject, or request clarification. Track the status through the EmaraTax dashboard.": {
    ar: "",
  },

  "Documentation Required for Excise Registration": {
    ar: "",
  },

  "Applicants must prepare the following documents:": {
    ar: "",
  },

  "Valid business or trade license": {
    ar: "",
  },

  "Passport or Emirates ID of the authorized signatory": {
    ar: "",
  },

  "Proof of authorization for the signatory": {
    ar: "",
  },

  "Official declaration on company letterhead describing the excise activity and intended start date": {
    ar: "",
  },

  "Bank letter confirming banking information": {
    ar: "",
  },

  "Additional documents may include:": {
    ar: "",
  },

  "Articles of Association or Power of Attorney for non-individual applicants": {
    ar: "",
  },

  "Certificate of incorporation for incorporated entities": {
    ar: "",
  },

  "Partnership agreements": {
    ar: "",
  },

  "Documents explaining business size and operations": {
    ar: "",
  },

  "Government entities, clubs, charities, and associations may be required to provide additional supporting documents based on their structure.": {
    ar: "",
  },

  "Penalties for Non-Compliance": {
    ar: "",
  },

  "Failure to register, file returns, or pay excise tax on time can result in significant penalties. Key penalty categories include:": {
    ar: "",
  },

  "Failure to register within the required timeframe results in a penalty of twenty thousand dirhams": {
    ar: "",
  },

  "Failure to submit excise returns on time results in a penalty of one thousand dirhams for the first offence and two thousand dirhams for repeated delays": {
    ar: "",
  },

  "Late payment penalties accumulate progressively until the outstanding amount is settled": {
    ar: "",
  },

  "These penalties reinforce the importance of timely and accurate compliance.": {
    ar: "",
  },

  "Excise registration in the UAE forms a critical component of regulatory compliance for businesses dealing in goods that fall under the excise regime. Understanding the rules, completing the registration process correctly, and meeting all filing obligations ensures that operations remain uninterrupted and compliant with federal tax laws.": {
    ar: "",
  },

  "As UAE tax compliance becomes increasingly digital, having robust systems for managing excise tax, VAT, and e-invoicing is becoming more essential. Many businesses are now adopting unified platforms to streamline tax and financial compliance. Solutions such as Accqrate help organizations prepare for these evolving requirements by offering structured automation and accuracy that support long-term compliance and efficiency.": {
    ar: "",
  },
  // TRN Verification Blog Content
  "A Tax Registration Number, commonly known as a TRN, is one of the most essential identifiers for any VAT-registered business in the United Arab Emirates. Issued by the Federal Tax Authority, the TRN acts as the official gateway to conducting VAT-related activities, from issuing tax invoices to claiming input tax credits. Because of its significance, verifying the authenticity of a TRN before entering into any taxable transaction has become an expected business practice in the UAE.": {
    ar: "",
  },

  "This guide explains what a TRN is, how the numbering format works, how to verify it online, and what to do if a verification attempt fails. It also outlines the financial and compliance risks of using invalid TRNs.": {
    ar: "",
  },

  "Understanding the TRN in the UAE": {
    ar: "",
  },

  "A TRN is a fifteen digit identification code linked to a business or individual that is registered for Value Added Tax. Since VAT was introduced in 2018, every taxable entity must obtain a TRN before issuing VAT invoices or charging VAT on any supply.": {
    ar: "",
  },

  "The TRN appears on tax invoices, receipts, credit notes, VAT returns, and all documents submitted to the Federal Tax Authority. In addition to enabling VAT compliance, it acts as a public reference for verifying the legitimacy of the supplier.": {
    ar: "",
  },

  "Structure of the TRN": {
    ar: "",
  },

  "The TRN follows a fixed format of fifteen digits. Each segment has a specific purpose.": {
    ar: "",
  },

  "The first three digits identify the Federal Tax Authority.": {
    ar: "",
  },

  "The next nine digits represent the unique identifier allocated to the business.": {
    ar: "",
  },

  "The last three digits act as check numbers to maintain uniqueness and prevent errors or duplication.": {
    ar: "",
  },

  "This standardized structure enables quick verification and supports automated validation across ERP systems and e-invoicing platforms.": {
    ar: "",
  },

  "Why TRN Verification Matters": {
    ar: "",
  },

  "Verifying a TRN is more than a routine check. It protects cash flow, prevents fraud, and ensures that the business remains compliant with UAE VAT legislation.": {
    ar: "",
  },

  "Verification ensures that the supplier is legally registered to charge VAT.": {
    ar: "",
  },

  "It confirms that VAT you pay can be legally recovered as input tax.": {
    ar: "",
  },

  "It protects against fraudulent operators who use fake TRNs to issue invoices.": {
    ar: "",
  },

  "It helps avoid disputes during audits and prevents the risk of penalties.": {
    ar: "",
  },

  "A single transaction with an invalid TRN can lead to a permanent loss of input tax and, in some cases, legal investigation. This makes TRN verification a mandatory due-diligence step for finance and compliance teams.": {
    ar: "",
  },

  "How to Verify a TRN in the UAE": {
    ar: "",
  },

  "The Federal Tax Authority provides an online tool for TRN verification. The process is straightforward and takes only a few seconds.": {
    ar: "",
  },

  "Step One": {
    ar: "",
  },

  "Visit the official FTA website and select the TRN verification section.": {
    ar: "",
  },

  "Step Two": {
    ar: "",
  },

  "Enter the fifteen digit TRN into the search field and complete the captcha for security.": {
    ar: "",
  },

  "Step Three": {
    ar: "",
  },

  "Review the result displayed on the screen. The portal will show the legal name of the business associated with the TRN. Match this information with the details provided on the supplier's invoice.": {
    ar: "",
  },

  "If the names match, the TRN is valid. If no record appears, the TRN is incorrect or misused.": {
    ar: "",
  },

  "What To Do When a TRN Fails Verification": {
    ar: "",
  },

  "If the system does not recognize the TRN, stop all VAT-related activity with the supplier until the matter is resolved. Follow this escalation path.": {
    ar: "",
  },

  "Request the supplier's VAT registration certificate and recheck the number.": {
    ar: "",
  },

  "Verify that the TRN on the certificate matches the TRN printed on invoices.": {
    ar: "",
  },

  "Repeat the verification on the FTA portal after correcting any typographical errors.": {
    ar: "",
  },

  "If the supplier cannot provide legitimate documentation, treat the case as a red flag.": {
    ar: "",
  },

  "Report suspected fraudulent TRNs to the Federal Tax Authority with supporting evidence.": {
    ar: "",
  },

  "Consult legal counsel if significant financial exposure is involved.": {
    ar: "",
  },

  "A failed TRN verification must never be ignored, especially when the supplier charges VAT. Doing so can directly impact your ability to recover input tax.": {
    ar: "",
  },

  "Importance of TRN for Businesses": {
    ar: "",
  },

  "The TRN has several implications beyond compliance.": {
    ar: "",
  },

  "It legitimizes VAT charges on invoices and enables input tax claims.": {
    ar: "",
  },

  "It establishes trust during business transactions and procurement reviews.": {
    ar: "",
  },

  "It helps ensure audit readiness, since verified TRNs support accurate filings.": {
    ar: "",
  },

  "It protects the business from penalties related to incorrect VAT records.": {
    ar: "",
  },

  "Regular TRN verification is now a standard part of onboarding new vendors and reviewing existing supplier contracts.": {
    ar: "",
  },

  "Penalties and Risks of Using Invalid TRNs": {
    ar: "",
  },

  "The use of invalid TRNs exposes a business to financial and regulatory penalties. The most common risks include the following.": {
    ar: "",
  },

  "A fine for late VAT registration, which can amount to ten thousand dirhams.": {
    ar: "",
  },

  "Penalties for late or incorrect VAT filings, ranging from one thousand to two thousand dirhams.": {
    ar: "",
  },

  "Permanent loss of input tax when the supplier's TRN is invalid.": {
    ar: "",
  },

  "Penalties related to improper accounting records, which may reach fifty thousand dirhams.": {
    ar: "",
  },

  "Additional scrutiny during tax audits, which can impact business continuity.": {
    ar: "",
  },

  "Late payment penalties that increase monthly and can reach three hundred percent of the unpaid VAT.": {
    ar: "",
  },

  "Penalties for issuing or receiving non-compliant e-invoices, which can apply per document.": {
    ar: "",
  },

  "Ensuring TRN accuracy protects both revenue and reputation.": {
    ar: "",
  },

  "TRN verification has become a fundamental requirement for businesses operating under UAE VAT. It safeguards input tax claims, strengthens financial accuracy, and prevents fraudulent transactions. With e-invoicing and digital compliance frameworks expanding across the region, the importance of validating tax identities is rising rapidly.": {
    ar: "",
  },

  "Businesses that automate TRN checks and integrate them into their accounting systems will be better positioned for audit readiness and regulatory compliance. Platforms like Accqrate, which offer built-in tax validation and e-invoicing capabilities, can simplify compliance and provide an added layer of security for financial operations.": {
    ar: "",
  },
  // Corporate Tax Blog Content
  "The UAE introduced a federal corporate tax regime in June 2023, marking a significant shift in how businesses operating in the country are taxed. The framework is designed to support economic growth, align with international tax standards, and maintain the UAE's position as an attractive global hub for business and investment.": {
    ar: "",
  },

  "This guide walks through everything companies and business owners need to know, from who is covered to how taxable income is calculated and how the upcoming Domestic Minimum Top-up Tax will impact large multinational groups.": {
    ar: "",
  },

  "Understanding Corporate Tax in the UAE": {
    ar: "",
  },

  "Corporate tax is a levy applied on the profits or net income that arise from business activities. The rules apply to both UAE-based companies and foreign persons conducting business inside the country. Income that comes from personal investments or employment is not considered business income and is therefore outside the scope.": {
    ar: "",
  },

  "The system follows a dual-tier structure. Profits up to a certain threshold are taxed at zero percent, and profits beyond that are taxed at a standard rate. The framework is supported by requirements for clear record keeping, annual tax return filing, and adherence to transfer pricing rules that regulate transactions between related parties.": {
    ar: "",
  },

  "Who Is Taxable under the UAE Corporate Tax Law": {
    ar: "",
  },

  "The corporate tax regime does not treat all businesses the same way. Liability depends on the type of person or entity and the nature of their connection to the UAE economy.": {
    ar: "",
  },

  "Resident Juridical Persons": {
    ar: "",
  },

  "Companies that are incorporated under UAE laws are considered resident taxpayers. This includes mainland companies and businesses established in free zones. Foreign incorporated companies can also be treated as residents if they are effectively managed and controlled from the UAE. Effective management is determined by where strategic and operational decisions are made.": {
    ar: "",
  },

  "Resident Natural Persons": {
    ar: "",
  },

  "Individuals are treated as resident taxable persons when they conduct business and their annual turnover from these activities exceeds one million dirhams. Freelancers, sole proprietors, and any individual carrying out ongoing commercial activity fall into this category. Income from employment, passive investments, and UAE property rentals for personal use does not trigger corporate tax.": {
    ar: "",
  },

  "Non Residents": {
    ar: "",
  },

  "A foreign business is taxed in the UAE under three circumstances. First, if it operates through a permanent establishment inside the UAE. Second, if it earns income that is sourced from within the country, even without a permanent establishment. Third, if it creates a nexus in the UAE based on economic presence, as defined by Cabinet decisions. These rules ensure that business profits connected to the UAE are brought into the tax net even when the legal entity is not incorporated locally.": {
    ar: "",
  },

  "Corporate Tax Rates in the UAE": {
    ar: "",
  },

  "The UAE uses a progressive structure based on profit levels and business category rather than activity type.": {
    ar: "",
  },

  "Standard Rates for Resident Businesses": {
    ar: "",
  },

  "Taxable income up to three hundred seventy-five thousand dirhams is taxed at zero percent. Any taxable income above this threshold is taxed at nine percent. These rates apply to both companies and natural persons engaged in business activities.": {
    ar: "",
  },

  "Qualifying Free Zone Persons": {
    ar: "",
  },

  "Free zone entities that meet prescribed substance requirements and earn income that qualifies under the law may enjoy a zero percent rate on their qualifying income. Any income that falls outside the qualifying criteria is taxed at nine percent.": {
    ar: "",
  },

  "Domestic Minimum Top-up Tax for Multinational Groups": {
    ar: "",
  },

  "From the beginning of 2025, the UAE will apply a Domestic Minimum Top-up Tax to large multinational groups whose consolidated global revenues reach or exceed seven hundred fifty million euros in at least two out of the four preceding financial years. The top-up ensures these groups pay a minimum effective tax rate of fifteen percent in line with the global minimum tax initiative under the OECD Pillar Two rules.": {
    ar: "",
  },

  "Categories Exempt from Corporate Tax": {
    ar: "",
  },

  "Certain entities are not required to pay corporate tax because of their importance to public services, national economic interests, or their role as investment vehicles.": {
    ar: "",
  },

  "These include government bodies, government-controlled entities, extractive industry operators, non-extractive natural resource businesses, and qualifying public benefit organisations. Public and private pension funds, social security funds, and qualifying investment funds can also obtain exempt status when they meet the conditions defined by the Ministry of Finance and the Federal Tax Authority.": {
    ar: "",
  },

  "Small businesses may also elect for temporary relief provided their revenue remains below three million dirhams each year until the end of 2026.": {
    ar: "",
  },

  "How Taxable Income Is Determined": {
    ar: "",
  },

  "Taxable income is based on the accounting profit reported in financial statements prepared according to IFRS or IFRS for SMEs. Adjustments are then made to reflect the tax rules.": {
    ar: "",
  },

  "Examples include removing income that is exempt, such as qualifying dividends, and adding back expenses that are not deductible. After completing these adjustments, the result becomes the taxable income for the period.": {
    ar: "",
  },

  "Resident entities are taxed on worldwide income while resident natural persons are taxed only on income arising from business activities conducted in the UAE. Non-residents are taxed solely on UAE-related income.": {
    ar: "",
  },

  "Permanent Establishment and State-Sourced Income": {
    ar: "",
  },

  "A permanent establishment is created when a foreign business has a fixed place of business in the UAE or operates through a dependent agent who regularly concludes contracts on its behalf. The law also recognises that an economic presence in the UAE that meets specific criteria may constitute a taxable nexus.": {
    ar: "",
  },

  "State-sourced income includes revenue from services performed in the UAE, sales of goods within the UAE, income from UAE property, and income connected with contracts performed in the country. Interest on loans connected to UAE assets or borrowers also falls under this category.": {
    ar: "",
  },

  "Group Relief and Loss Utilisation": {
    ar: "",
  },

  "The corporate tax regime allows companies that meet ownership and residency conditions to form a tax group. The group is treated as a single taxable person represented by the parent company. Losses can be transferred between group members, and tax losses can be carried forward and set off against future taxable income up to seventy-five percent of income in a given period.": {
    ar: "",
  },

  "There is no expiry period for carrying forward losses. However, losses cannot be carried back to earlier years.": {
    ar: "",
  },

  "Transfer Pricing Requirements": {
    ar: "",
  },

  "Businesses engaged in related party transactions must follow the arm's length principle, ensuring that prices charged between connected parties reflect market conditions. Companies above specific turnover thresholds must prepare transfer pricing documentation, including a local file and master file. Large multinational groups must comply with detailed reporting requirements that align with international standards.": {
    ar: "",
  },

  "The Federal Tax Authority has also introduced an Advance Pricing Agreement program, allowing businesses to agree on transfer pricing methods in advance to obtain greater certainty.": {
    ar: "",
  },

  "Corporate Tax Compliance Obligations": {
    ar: "",
  },

  "Every taxable person must register with the Federal Tax Authority and obtain a tax registration number. The timing for registration depends on the date of incorporation or the date when a taxable presence is created.": {
    ar: "",
  },

  "Tax returns must be filed once every financial year. The deadline for filing and payment is nine months from the end of the tax period. Businesses must also maintain proper financial records, including invoices, contracts, and supporting documentation, for audit and verification purposes.": {
    ar: "",
  },

  "Penalties apply for late registration, late filing, inaccurate reporting, and late payment. Reduced penalties are available for timely voluntary disclosures.": {
    ar: "",
  },

  "Calculating Corporate Tax: A Practical Walkthrough": {
    ar: "",
  },

  "To calculate corporate tax in the UAE, begin with the accounting profit from financial statements. Make the required tax adjustments, then apply the zero percent and nine percent bands.": {
    ar: "",
  },

  "For example, consider a business with a net profit of seven hundred fifty thousand dirhams. If fifty thousand dirhams represent expenses that are not deductible, the adjusted taxable income will be seven hundred thousand dirhams. The first three hundred seventy-five thousand dirhams are taxed at zero percent. The remaining three hundred twenty-five thousand dirhams are taxed at nine percent, which results in a corporate tax payable of twenty-nine thousand two hundred fifty dirhams.": {
    ar: "",
  },

  "The UAE's corporate tax framework introduces a modern, competitive, and internationally aligned system that supports long-term economic development. Businesses operating in the UAE must understand their obligations, calculate taxable income accurately, comply with filing deadlines, and prepare for the introduction of the Domestic Minimum Top-up Tax.": {
    ar: "",
  },

  "As organisations strengthen their financial and compliance processes, many are adopting digital systems that provide accuracy and audit readiness. Platforms such as Accqrate can support these efforts by helping businesses maintain structured financial records and improve the reliability of tax-related data without complicating their existing workflows.": {
    ar: "",
  },

  // Corporate Tax FAQ Blog Content
  "This guide answers common questions about the UAE corporate tax regime, explains who is covered, clarifies rates and exemptions, and outlines filing and documentation requirements. It focuses on what businesses actually need to know to become and remain compliant.": {
    ar: "",
  },

  "1. What is corporate tax in the UAE?": {
    ar: "",
  },

  "Corporate tax is a tax on business profits. It applies to entities and to individuals who carry on business activities. The law establishes how taxable profit is measured, what adjustments apply to accounting profit, the filing cycle, and the enforcement rules that the Federal Tax Authority administers.": {
    ar: "",
  },

  "2. When did corporate tax start in the UAE?": {
    ar: "",
  },

  "The federal corporate tax regime was introduced by the Ministry of Finance and came into effect for relevant financial periods in 2023. Businesses calculate and report tax for each defined tax period, which is generally a twelve-month accounting period chosen by the entity.": {
    ar: "",
  },

  "3. What counts as a tax period?": {
    ar: "",
  },

  "A tax period is the twelve-month financial reporting interval used to prepare statutory accounts. Many companies use the calendar year, but companies that follow a different fiscal year use that period for corporate tax purposes. For example, a company with a financial year starting on May 1st will have a tax period from May 1st to April 30th.": {
    ar: "",
  },

  "4. What are the policy goals behind the UAE corporate tax?": {
    ar: "",
  },

  "The main objectives are to create a sustainable revenue base to support public services and investment, to align UAE rules with international tax transparency standards, and to preserve the UAE as a competitive and stable destination for business and investment.": {
    ar: "",
  },

  "5. What are the headline corporate tax rates?": {
    ar: "",
  },

  "The system uses thresholds rather than multiple progressive slabs. For most taxable persons the first portion of taxable profit up to three hundred seventy-five thousand dirhams is taxed at zero percent. Taxable profit above three hundred seventy-five thousand dirhams is taxed at nine percent. In addition, large multinational groups that meet global revenue thresholds face a domestic top-up measure to achieve a minimum effective rate consistent with international agreements.": {
    ar: "",
  },

  "6. Which businesses must register for corporate tax?": {
    ar: "",
  },

  "Registration is required for:": {
    ar: "",
  },

  "Companies incorporated in the UAE": {
    ar: "",
  },

  "Branches of foreign companies that qualify as resident establishments": {
    ar: "",
  },

  "Foreign entities that create a taxable nexus through a permanent establishment or by earning UAE-sourced income": {
    ar: "",
  },

  "Individuals conducting business activities with annual turnover exceeding one million dirhams": {
    ar: "",
  },

  "Entities that are exempt still generally need to register and submit returns unless the law or an administrative ruling explicitly waives that obligation.": {
    ar: "",
  },

  "7. How is taxable income determined?": {
    ar: "",
  },

  "Start with accounting profit reported under IFRS or IFRS for small entities. Then apply tax adjustments specified in the law. Typical adjustments add back non-deductible items and exclude exempt income. The resulting figure after all permitted deductions and adjustments is the taxable income for the period.": {
    ar: "",
  },

  "8. Do free zone businesses pay corporate tax?": {
    ar: "",
  },

  "Free zone companies that meet the qualifying conditions and substance requirements can obtain a zero percent effective rate on qualifying income. Income that does not meet the qualifying criteria is taxed at the standard rate. Qualifying status depends on the entity's activity, substance, contractual arrangements, and compliance with transfer pricing rules.": {
    ar: "",
  },

  "9. Who is exempt from corporate tax?": {
    ar: "",
  },

  "Certain categories of persons are exempt or treated differently. These include government entities performing sovereign functions, qualifying public benefit organisations, certain pension and social security funds, qualifying investment funds, and businesses in extractive industries which remain subject to emirate-level arrangements. Exemptions are subject to conditions and often require registration or approval.": {
    ar: "",
  },

  "10. Will foreign investors or non-resident companies be taxed?": {
    ar: "",
  },

  "Non-residents are taxed on income that is sourced to the UAE and on income attributable to a permanent establishment in the UAE. Passive returns such as dividends, interest, and capital gains from foreign investments are generally outside the scope unless they are UAE sourced or attributed to a UAE permanent establishment.": {
    ar: "",
  },

  "11. How does the domestic minimum top-up tax work?": {
    ar: "",
  },

  "From the beginning of 2025, the UAE applies a domestic top-up mechanism that requires large multinational groups with consolidated global revenue above specified thresholds to pay an effective minimum tax. The mechanism is intended to align the UAE with the global minimum tax standards agreed at the international level. Affected groups will calculate their effective tax and if it falls below the agreed minimum they will pay a top-up tax under the domestic provisions.": {
    ar: "",
  },

  "12. What are the key compliance steps companies must take?": {
    ar: "",
  },

  "Register with the Federal Tax Authority and obtain a tax identification number": {
    ar: "",
  },

  "Maintain complete accounting records and retain supporting documentation for transactions": {
    ar: "",
  },

  "Prepare and file the corporate tax return through the EmaraTax portal within the statutory deadline": {
    ar: "",
  },

  "Pay any tax due by the filing deadline": {
    ar: "",
  },

  "Implement transfer pricing documentation where related party transactions exceed thresholds": {
    ar: "",
  },

  "Consider group registration and small business relief options where applicable": {
    ar: "",
  },

  "13. What documents are needed to file a corporate tax return?": {
    ar: "",
  },

  "The usual submission pack includes company financial statements prepared under IFRS, a tax registration certificate, records of revenue and expenses, depreciation schedules, supporting invoices, intercompany agreements, and any transfer pricing documentation required. Free zone entities and qualifying funds may need to provide additional evidence of qualifying activities and substance.": {
    ar: "",
  },

  "14. What are the filing deadlines and payment timings?": {
    ar: "",
  },

  "Tax returns must be filed and tax paid within nine months after the end of the relevant tax period. For example, a company with a calendar year-end of December 31st files by September 30th of the following year. Payment of tax is due at the same time as the return unless installment arrangements have been agreed.": {
    ar: "",
  },

  "15. What penalties apply for non-compliance?": {
    ar: "",
  },

  "Penalties vary by breach and include fixed and percentage-based sanctions. Examples include administrative penalties for late registration, monthly penalties for late filing, interest and fines for late payment, and larger penalties for incorrect or false returns. Repeat breaches and deliberate concealment attract higher fines and potential criminal exposure.": {
    ar: "",
  },

  "16. What reliefs and special rules exist?": {
    ar: "",
  },

  "Small business relief is available for qualifying small enterprises which meet the turnover and other eligibility tests for a limited period": {
    ar: "",
  },

  "Losses may be carried forward without time limit but may only offset up to seventy-five percent of taxable income in any year": {
    ar: "",
  },

  "Group relief can allow the transfer of tax losses between members of a tax group where ownership and residency conditions are met": {
    ar: "",
  },

  "17. What is the transfer pricing regime?": {
    ar: "",
  },

  "Related party transactions must reflect arm's length pricing. Companies above the relevant revenue thresholds must prepare contemporaneous transfer pricing documentation, including local and master files where required. Advance Pricing Agreements will be available to provide certainty on pricing methodologies for certain taxpayers.": {
    ar: "",
  },

  "18. Do companies need audited financial statements?": {
    ar: "",
  },

  "Companies generally file tax returns using accounting records prepared under IFRS. Audit requirements depend on local legislation and size. Where financial statements are audited, those audited accounts are used as the starting point for tax calculations. Some small businesses with revenue below thresholds may use unaudited accounts but must still prepare reliable financial statements.": {
    ar: "",
  },

  "19. What happens when a company changes its financial year?": {
    ar: "",
  },

  "If a company changes its accounting period, the tax period changes accordingly. Reporting and filing deadlines will align to the new tax period. Companies should notify the Federal Tax Authority and plan filings to avoid penalties.": {
    ar: "",
  },

  "20. Are VAT and corporate tax linked?": {
    ar: "",
  },

  "VAT is a separate indirect tax. Businesses may be liable for both VAT and corporate tax. Input VAT is treated differently for tax base computation. Only irrecoverable VAT may be considered in computing taxable income where the law permits. VAT registration and corporate tax registration are independent obligations.": {
    ar: "",
  },

  "21. How should companies prepare operationally?": {
    ar: "",
  },

  "Companies should conduct a business impact assessment to determine registration obligations, to identify accounting and systems changes, and to document the evidence required for tax positions. They should update contracts, train finance teams, and consider technology or advisory support to manage compliance.": {
    ar: "",
  },

  "22. Which activities qualify for free zone benefits?": {
    ar: "",
  },

  "Qualifying activities commonly include manufacturing, certain trading and logistics activities, fund management, treasury, and holding activities that meet the specific rules. Entities must demonstrate adequate substance and that they meet the criteria set out in free zone rules and guidance to retain the qualifying tax treatment.": {
    ar: "",
  },

  "23. How are penalties for record-keeping enforced?": {
    ar: "",
  },

  "The authority may impose fines for failure to keep accurate books, for not producing records on request, and for submitting incomplete or false information. Businesses should keep supporting evidence for all tax-related positions and ensure secure retention for the statutory period.": {
    ar: "",
  },

  "24. What support does the Federal Tax Authority provide?": {
    ar: "",
  },

  "The Federal Tax Authority publishes guidance, FAQs, and forms on the EmaraTax portal. The authority also issues interpretive guidance on technical issues such as transfer pricing, permanent establishment, qualifying free zone persons, and implementation of the top-up mechanism.": {
    ar: "",
  },

  "25. Where can I find official information and updates?": {
    ar: "",
  },

  "Consult the Ministry of Finance and the Federal Tax Authority websites for the latest legislative texts, ministerial decisions, and official guidance. These sources provide the authoritative rules and any subsequent clarifications.": {
    ar: "",
  },

  "Practical Checklist for First-Time Registrants": {
    ar: "",
  },

  "Confirm whether the entity is a resident taxable person or a non-resident with UAE-sourced income": {
    ar: "",
  },

  "Gather your financial statements, registration documents, and basic corporate records": {
    ar: "",
  },

  "Register on the EmaraTax portal and obtain a tax registration number": {
    ar: "",
  },

  "Map accounting profit to the tax base and identify likely adjustments": {
    ar: "",
  },

  "Review related party agreements and prepare transfer pricing documentation when thresholds are met": {
    ar: "",
  },

  "Evaluate free zone status and whether qualifying income tests are met": {
    ar: "",
  },

  "Train finance staff on filing and retention obligations and on the nine-month deadline for filing and payment": {
    ar: "",
  },

  "Concluding Note": {
    ar: "",
  },

  "The UAE corporate tax regime balances international obligations with incentives that retain the country as a business-friendly jurisdiction. Proper preparation, robust record keeping, and early assessment of transfer pricing and free zone status are the foundations of good compliance. For many businesses, improving financial controls and consolidating tax data into a single platform reduces risk and simplifies filings.": {
    ar: "",
  },

  "Systems such as Accqrate can help keep financial records organised and make tax reporting more straightforward while preserving existing operational workflows.": {
    ar: "",
  },
  // Digital Signature Certificate Blog Content
  "Digital transformation in the UAE has accelerated rapidly, and the shift toward mandatory e-invoicing by 2026 makes Digital Signature Certificates one of the core identity and security tools for businesses. They now play a central role in tax compliance, corporate authentication, contract execution, and numerous government processes.": {
    ar: "",
  },

  "Understanding how digital signatures work and how to obtain, use, and manage Digital Signature Certificates is essential for every organisation preparing for the new regulatory environment.": {
    ar: "",
  },

  "This guide breaks down the concept of digital signatures, how digital certificates operate in the UAE, and where they fit into business and government workflows.": {
    ar: "",
  },

  "Meaning of a Digital Signature": {
    ar: "",
  },

  "A digital signature is the electronic equivalent of signing a document by hand, except it is far more secure. It uses cryptographic techniques to establish the identity of the signer and to confirm that the document has remained unchanged from the moment it was signed.": {
    ar: "",
  },

  "Digital signatures are used across legal, financial, governmental, and corporate sectors because they provide a verifiable and tamper-proof method of approving documents and transactions.": {
    ar: "",
  },

  "Meaning of a Digital Signature Certificate": {
    ar: "",
  },

  "A digital signature by itself is only a cryptographic code. A Digital Signature Certificate, however, is an electronic credential issued by an authorised certification authority that verifies the identity of the signer.": {
    ar: "",
  },

  "In other words, the certificate acts as your official digital identity.": {
    ar: "",
  },

  "It is issued after a thorough verification process and contains key information such as your name, organisation, public key, issuing authority, and validity period.": {
    ar: "",
  },

  "You cannot generate a digital signature without having a valid digital certificate.": {
    ar: "",
  },

  "Difference Between Digital Signatures and Digital Signature Certificates": {
    ar: "",
  },

  "Although the two concepts are closely linked, they serve different purposes.": {
    ar: "",
  },

  "Digital Signature": {
    ar: "",
  },

  "Represents the act of electronically signing a document and proving that it has not been altered.": {
    ar: "",
  },

  "Digital Signature Certificate": {
    ar: "",
  },

  "Represents the digital identification issued to the signer that allows the signature to be created and verified.": {
    ar: "",
  },

  "Without the certificate, a signature carries no legal weight. Without the signature, the certificate has no functional purpose.": {
    ar: "",
  },

  "How Digital Signatures Work": {
    ar: "",
  },

  "Every digital signature relies on two mathematically linked codes: a private signing key and a public verification key.": {
    ar: "",
  },

  "Here is how the process works in simple terms:": {
    ar: "",
  },

  "A unique digital fingerprint of the document is created through encryption.": {
    ar: "",
  },

  "This fingerprint is encrypted using the signer's private key. The encrypted fingerprint becomes the digital signature.": {
    ar: "",
  },

  "Anyone receiving the document can verify the signature using the signer's public key.": {
    ar: "",
  },

  "If the fingerprint matches, it proves two things:": {
    ar: "",
  },

  "The document genuinely came from the signer.": {
    ar: "",
  },

  "The document has not been altered since it was signed.": {
    ar: "",
  },

  "The system is secure because the private key never leaves the signer's control and cannot be reverse-engineered from the public key.": {
    ar: "",
  },

  "How to Obtain a Digital Signature Certificate in the UAE": {
    ar: "",
  },

  "Businesses and individuals in the UAE can obtain a DSC through recognised Digital Certificate Service Providers. The UAE also uses the ICP (Identity, Citizenship, Customs and Port Security) system, which allows Emirates ID cards to function as a built-in digital certificate for online authentication.": {
    ar: "",
  },

  "The process to obtain a DSC generally includes:": {
    ar: "",
  },

  "Selecting a recognised UAE Digital Certificate Service Provider.": {
    ar: "",
  },

  "Completing the registration on the MOHRE portal or the provider's portal.": {
    ar: "",
  },

  "Submitting identity and residency documentation such as passport or Emirates ID.": {
    ar: "",
  },

  "Completing the identity verification process online or in person.": {
    ar: "",
  },

  "Receiving the DSC and installing it on your device or storing it on a secure hardware token.": {
    ar: "",
  },

  "Ensuring the private key is stored safely because it cannot be recovered once lost.": {
    ar: "",
  },

  "The government registration fee currently starts at one hundred and twenty dirhams. Additional service fees may apply through private providers.": {
    ar: "",
  },

  "Where Digital Signature Certificates Are Used in the UAE": {
    ar: "",
  },

  "Digital certificates are already part of several core workflows across government and private sectors. Key use cases include:": {
    ar: "",
  },

  "Corporate and Government Authentication": {
    ar: "",
  },

  "Login to government portals, tax systems, immigration platforms, company registries, and compliance systems.": {
    ar: "",
  },

  "Legal and Contractual Approvals": {
    ar: "",
  },

  "Contracts, agreements, tenancy documents, declarations, and legal submissions that require verified signatures.": {
    ar: "",
  },

  "E-Invoicing and Regulatory Compliance": {
    ar: "",
  },

  "Generation and authentication of structured e-invoices. This will become essential as the UAE moves toward full e-invoicing compliance.": {
    ar: "",
  },

  "Trade and Import-Export Documentation": {
    ar: "",
  },

  "Digital signing is mandatory for many international trade submissions and DGFT-linked workflows.": {
    ar: "",
  },

  "Banking and Financial Transactions": {
    ar: "",
  },

  "Access to corporate banking portals, fund transfer approvals, and trade finance documentation.": {
    ar: "",
  },

  "Court Submissions and Evidence": {
    ar: "",
  },

  "Digitally signed documents retain their integrity and remain admissible as legal proof.": {
    ar: "",
  },

  "Benefits of Digital Signature Certificates": {
    ar: "",
  },

  "Digital certificates bring several operational, legal, and security advantages:": {
    ar: "",
  },

  "Verified Identity": {
    ar: "",
  },

  "A certificate binds your identity to a secure cryptographic key, ensuring that every signed document can be traced to the correct individual or entity.": {
    ar: "",
  },

  "Tamper-Proof Documentation": {
    ar: "",
  },

  "Any alteration to a signed document instantly invalidates the signature, protecting the integrity of your records.": {
    ar: "",
  },

  "Stronger Compliance": {
    ar: "",
  },

  "DSCs support compliance with upcoming e-invoicing mandates, online government processes, tax filings, and regulated industry requirements.": {
    ar: "",
  },

  "Faster Approvals": {
    ar: "",
  },

  "Contracts, financial submissions, and tax documents can be approved instantly without physical presence.": {
    ar: "",
  },

  "Legally Binding": {
    ar: "",
  },

  "A DSC carries the same legal standing as a handwritten signature under UAE law.": {
    ar: "",
  },

  "Timestamp Verification": {
    ar: "",
  },

  "Every digital signature includes the exact date and time of signing, which is valuable for audits, procurement, and regulatory submissions.": {
    ar: "",
  },

  "Seamless Integration with Emirates ID": {
    ar: "",
  },

  "The ICP Validation Gateway enables Emirates ID cards to function as digital signing tools for online services.": {
    ar: "",
  },

  "Why DSCs Will Become Essential for UAE Businesses": {
    ar: "",
  },

  "The UAE's upcoming Peppol-based e-invoicing system requires every e-invoice to be authenticated and transmitted securely. A digital signature certificate provides the identity and verification layer needed for this process.": {
    ar: "",
  },

  "Businesses that adopt DSCs early will be able to integrate seamlessly with the new e-billing ecosystem and avoid last-minute compliance challenges.": {
    ar: "",
  },

  "Digital Signature Certificates are becoming one of the core identity and security tools that support the UAE's transition to a fully digital business environment. From e-invoicing and taxation to banking, trade, and legal approvals, DSCs ensure authenticity, protect data integrity, and accelerate decision-making.": {
    ar: "",
  },

  "As the UAE moves toward mandatory e-invoicing and wider digital governance, DSCs will become indispensable for every business that wants to remain compliant, efficient, and competitive.": {
    ar: "",
  },

  // E-Invoicing Requirements Blog Content
  "The UAE is preparing for one of the most significant tax technology reforms in the region with the rollout of mandatory electronic invoicing under its new Electronic Invoicing System. The transition will begin with a controlled pilot in July 2026, followed by phased enforcement for VAT-registered businesses from 2027 onwards. The reform aligns the UAE with international best practices, strengthens VAT oversight, and creates a transparent, fully digital invoicing environment for B2B and B2G transactions.": {
    ar: "",
  },

  "This article provides a clear and detailed overview of the UAE's e-invoicing framework, including timelines, mandatory requirements, the role of Accredited Service Providers, and the expected compliance obligations for businesses operating in the country.": {
    ar: "",
  },

  "What E-Invoicing Means in the UAE": {
    ar: "",
  },

  "E-invoicing in the UAE refers to issuing, transmitting, receiving, and storing invoices in structured digital formats. These formats must be machine-readable and must follow the standards defined by the Ministry of Finance. Unlike PDFs or paper documents, a valid e-invoice must be entirely digital from creation to submission.": {
    ar: "",
  },

  "A compliant UAE e-invoice requires the following elements:": {
    ar: "",
  },

  "It must be generated in XML or JSON formats using UBL or PINT standards": {
    ar: "",
  },

  "It must be transmitted through an Accredited Service Provider": {
    ar: "",
  },

  "It must be reported to the Federal Tax Authority's e-Billing system for monitoring": {
    ar: "",
  },

  "It must be stored in the UAE as per the Tax Procedures Law": {
    ar: "",
  },

  "Unstructured formats such as PDF, JPG, or paper cannot be treated as e-invoices.": {
    ar: "",
  },

  "Implementation Timeline for UAE E-Invoicing": {
    ar: "",
  },

  "On 28 September 2025, Ministerial Decisions 243 and 244 formally defined the implementation stages.": {
    ar: "",
  },

  "Pilot Programme": {
    ar: "",
  },

  "A selected group of businesses will begin issuing structured invoices from 1 July 2026.": {
    ar: "",
  },

  "Voluntary Adoption": {
    ar: "",
  },

  "Any business may join the system voluntarily starting from July 2026.": {
    ar: "",
  },

  "Phase 1: Large businesses with annual revenue of fifty million dirhams or more": {
    ar: "",
  },

  "Deadline to appoint an Accredited Service Provider: 31 July 2026": {
    ar: "",
  },

  "Mandatory e-invoicing start date: 1 January 2027": {
    ar: "",
  },

  "Phase 2: Businesses with annual revenue below fifty million dirhams": {
    ar: "",
  },

  "Deadline to appoint an ASP: 31 March 2027": {
    ar: "",
  },

  "Mandatory e-invoicing start date: 1 July 2027": {
    ar: "",
  },

  "Phase 3: All UAE government entities": {
    ar: "",
  },

  "Mandatory e-invoicing start date: 1 October 2027": {
    ar: "",
  },

  "Core Requirements for E-Invoicing in the UAE": {
    ar: "",
  },

  "Businesses must meet all technical and operational requirements defined under the Electronic Invoicing System.": {
    ar: "",
  },

  "Structured digital formats only. Invoices must be issued in XML or JSON": {
    ar: "",
  },

  "Use of UBL or Peppol PINT. These standards define the structure and data elements of the invoice": {
    ar: "",
  },

  "Transmission through an Accredited Service Provider. ASPs play a central role in validation and submission": {
    ar: "",
  },

  "Timely submission. Invoices and credit notes must be transmitted within fourteen days from the date of the taxable transaction": {
    ar: "",
  },

  "Mandatory data dictionary. Invoices must include all required fields such as supplier and buyer information, TRN, invoice metadata, tax summary, and payment details": {
    ar: "",
  },

  "Digital credit notes. All corrections must follow the same structured format as invoices": {
    ar: "",
  },

  "Local data storage. All invoice data must be stored within the UAE": {
    ar: "",
  },

  "Reporting system failures. Any system disruption must be reported to the FTA within two business days": {
    ar: "",
  },

  "How the UAE E-Invoicing Process Works": {
    ar: "",
  },

  "The UAE uses a structured, technology-driven workflow supported by ERP systems and Accredited Service Providers.": {
    ar: "",
  },

  "Step 1: Appoint an Accredited Service Provider": {
    ar: "",
  },

  "The ASP collaborates with the business and its ERP team to map internal data to the Ministry of Finance data dictionary.": {
    ar: "",
  },

  "Step 2: Map and standardize invoice data": {
    ar: "",
  },

  "The ERP must capture all mandatory fields including item details, VAT amounts, tax rate, and supplier identification information.": {
    ar: "",
  },

  "Step 3: Convert invoice data into approved formats": {
    ar: "",
  },

  "The ASP converts the invoice into XML or JSON using UBL or Peppol PINT.": {
    ar: "",
  },

  "Step 4: Validate invoice content": {
    ar: "",
  },

  "The ASP validates the invoice structure, corrects errors, and enriches missing information such as standardized codes.": {
    ar: "",
  },

  "Step 5: Transmit the invoice": {
    ar: "",
  },

  "The ASP transmits the invoice simultaneously to the Federal Tax Authority e-Billing system and the buyer's ASP.": {
    ar: "",
  },

  "Step 6: Store the invoice": {
    ar: "",
  },

  "Businesses must store invoices securely within the UAE, ensuring availability for audits and VAT reconciliation.": {
    ar: "",
  },

  "The UAE E-Invoicing Framework (DCTCE Model)": {
    ar: "",
  },

  "The UAE has adopted a Peppol-based continuous transaction control model known as the DCTCE model. The model functions like a five-corner framework with the following components:": {
    ar: "",
  },

  "Issuer": {
    ar: "",
  },

  "Receiver": {
    ar: "",
  },

  "Federal Tax Authority e-Billing System": {
    ar: "",
  },

  "Sender Accredited Service Provider": {
    ar: "",
  },

  "Receiver Accredited Service Provider": {
    ar: "",
  },

  "The FTA e-Billing System holds invoice data for compliance but does not undertake validation. Validation is the responsibility of the ASPs managing transmission.": {
    ar: "",
  },

  "Scope of E-Invoicing in the UAE": {
    ar: "",
  },

  "The Electronic Invoicing System covers most taxable business activities in the country.": {
    ar: "",
  },

  "It applies to all VAT-registered persons engaged in taxable supplies": {
    ar: "",
  },

  "It covers B2B transactions and B2G transactions": {
    ar: "",
  },

  "It excludes B2C transactions": {
    ar: "",
  },

  "It excludes certain categories, including:": {
    ar: "",
  },

  "Government entities acting in a sovereign capacity": {
    ar: "",
  },

  "International passenger air transport": {
    ar: "",
  },

  "Certain airline ancillary services": {
    ar: "",
  },

  "International air freight for a limited period": {
    ar: "",
  },

  "Financial services that are zero-rated or exempt": {
    ar: "",
  },

  "The Role of Accredited Service Providers": {
    ar: "",
  },

  "Under the UAE e-invoicing model, ASPs are mandatory for all businesses subject to e-invoicing.": {
    ar: "",
  },

  "Key responsibilities of ASPs include:": {
    ar: "",
  },

  "Mapping ERP data to the UAE data dictionary": {
    ar: "",
  },

  "Validating invoice structure and VAT compliance": {
    ar: "",
  },

  "Enriching invoices with digital signatures and identifiers": {
    ar: "",
  },

  "Converting internal formats into XML or JSON": {
    ar: "",
  },

  "Transmitting invoices to the FTA and recipient ASP": {
    ar: "",
  },

  "Applying security controls such as encryption": {
    ar: "",
  },

  "Archiving and storing invoices in the UAE": {
    ar: "",
  },

  "Providing monitoring tools for tracking invoice status": {
    ar: "",
  },

  "Supporting integration with business systems through APIs": {
    ar: "",
  },

  "Offering fallback procedures in case of downtime": {
    ar: "",
  },

  "Mandatory Fields in a UAE E-Invoice": {
    ar: "",
  },

  "Structured invoices must follow the UAE's official data dictionary. Required fields include:": {
    ar: "",
  },

  "Supplier details": {
    ar: "",
  },

  "Supplier TRN": {
    ar: "",
  },

  "Buyer details and TRN": {
    ar: "",
  },

  "Unique invoice number": {
    ar: "",
  },

  "Invoice date and time": {
    ar: "",
  },

  "Invoice type code": {
    ar: "",
  },

  "Currency code": {
    ar: "",
  },

  "Item description and quantities": {
    ar: "",
  },

  "Unit price and taxable amount": {
    ar: "",
  },

  "VAT rate and VAT amount": {
    ar: "",
  },

  "Total tax amount and gross total": {
    ar: "",
  },

  "Digital signature": {
    ar: "",
  },

  "Reference to original invoice in case of credit notes": {
    ar: "",
  },

  "Transmission timestamp and acknowledgment ID": {
    ar: "",
  },

  "Additional fields such as purchase order number, payment terms, and bank details may also be included.": {
    ar: "",
  },

  "A dedicated penalty schedule for e-invoicing is expected but not yet published. Based on existing Tax Procedures Law enforcement, businesses may face penalties for:": {
    ar: "",
  },

  "Failure to issue an e-invoice for B2B transactions": {
    ar: "",
  },

  "Repeated failure to issue e-invoices": {
    ar: "",
  },

  "Failure to maintain invoice records": {
    ar: "",
  },

  "Delayed transmission resulting in VAT misreporting": {
    ar: "",
  },

  "Fraudulent behavior or deliberate non-compliance": {
    ar: "",
  },

  "Penalties may range from two thousand five hundred dirhams per instance to significantly higher amounts for repeated violations. Late payment penalties continue to apply for VAT understatements or missed payments.": {
    ar: "",
  },

  "How Businesses Should Prepare for E-Invoicing": {
    ar: "",
  },

  "Companies should start preparing well before the pilot begins in 2026.": {
    ar: "",
  },

  "Understand the full scope of the mandate and timeline": {
    ar: "",
  },

  "Appoint an Accredited Service Provider before mandated deadlines": {
    ar: "",
  },

  "Upgrade ERP systems to support structured invoice creation": {
    ar: "",
  },

  "Participate in the pilot phase to test integrations": {
    ar: "",
  },

  "Train finance and IT teams on e-invoicing workflows": {
    ar: "",
  },

  "Implement local data storage policies that meet UAE requirements": {
    ar: "",
  },

  "Establish clear escalation procedures for reporting system failures": {
    ar: "",
  },

  "Early preparation will reduce integration challenges and ensure smooth compliance once the system becomes mandatory.": {
    ar: "",
  },

  "The UAE's Electronic Invoicing System is a transformative step that modernizes tax administration and aligns the country with global standards in digital fiscal reporting. The phased rollout starting in mid-2026 gives businesses time to prepare, but the technical requirements are detailed and demand early system upgrades, the appointment of an accredited service provider, and strong internal controls.": {
    ar: "",
  },

  "As companies rework their invoicing infrastructure, many are turning to modern platforms that simplify these compliance requirements. Solutions such as Accqrate can play a supportive role by enabling structured e-invoicing, automating data validation, and offering seamless integration capabilities that help businesses transition smoothly into the new regulatory environment.": {
    ar: "",
  },

  // Excise Tax Rates Blog Content
  "Excise tax has become an important element of the UAE's modern tax system. Introduced to discourage the consumption of products that negatively affect public health or the environment, it also contributes to long-term fiscal diversification. Governed by Federal Decree Law Number 7 of 2017, the tax applies to a defined set of goods such as tobacco products, energy drinks, carbonated beverages, electronic smoking devices, and sweetened drinks.": {
    ar: "",
  },

  "Businesses that import, manufacture, or stock these products must register with the Federal Tax Authority, calculate their excise liabilities correctly, and file the required returns on time. This guide explains how excise tax works in the UAE, including current rates, exemption rules, calculation methods, and compliance requirements.": {
    ar: "",
  },

  "Understanding the Concept of Excise Tax in the UAE": {
    ar: "",
  },

  "Excise tax is a consumption tax that applies only once, usually at the point of import or the moment goods are produced for sale in the local market. Unlike VAT, which is charged at every stage of the supply chain, excise tax is imposed a single time but at significantly higher rates that range between fifty percent and one hundred percent.": {
    ar: "",
  },

  "The purpose is straightforward. The government aims to reduce the consumption of goods linked to lifestyle diseases and environmental harm, while also encouraging healthier consumer behaviour. Any business involved with excise goods must register with the FTA, maintain accurate records, and settle excise liabilities for each tax period.": {
    ar: "",
  },

  "Goods That Fall Under Excise Tax in the UAE": {
    ar: "",
  },

  "The UAE has clearly defined categories of excise goods. These include:": {
    ar: "",
  },

  "Tobacco and Tobacco-Based Products": {
    ar: "",
  },

  "This covers a wide range of items such as cigarettes, cigars, cigarillos, chewing tobacco, herbal smoking blends, snuff, reconstituted tobacco sheets, and anything classified under Schedule 24 of the GCC Common Customs Tariff.": {
    ar: "",
  },

  "Carbonated Drinks": {
    ar: "",
  },

  "Any aerated beverage, as well as concentrates, extracts, powders, gels, or syrups that are used to make such drinks. Unflavoured aerated water is the main exception.": {
    ar: "",
  },

  "Energy Drinks": {
    ar: "",
  },

  "Products marketed as energy drinks or containing ingredients known for their stimulant properties. These include caffeine, taurine, guarana, ginseng, or similar active substances. Powders and extracts also fall within this category.": {
    ar: "",
  },

  "Electronic Smoking Devices and Associated Liquids": {
    ar: "",
  },

  "All electronic smoking tools, whether or not they contain nicotine, and all liquids intended for use in such devices.": {
    ar: "",
  },

  "Sweetened Drinks": {
    ar: "",
  },

  "Any beverage with added sugar or any artificial or natural sweetener. This includes ready-to-drink beverages, powdered mixes, concentrates, gels, syrups, sweetener-based ingredients, and sugar components such as glucose syrup.": {
    ar: "",
  },

  "Sweetened Drink Exemptions": {
    ar: "",
  },

  "Some items are excluded from excise tax even if sweetened. These include products that contain at least seventy-five percent milk or milk substitutes, baby food and formula, medical nutrition products, and alcoholic beverages which fall under a separate regulatory regime.": {
    ar: "",
  },

  "Key Compliance Requirements for Excise Tax": {
    ar: "",
  },

  "Businesses that deal with excise goods must meet several regulatory obligations.": {
    ar: "",
  },

  "Registration with the FTA": {
    ar: "",
  },

  "Any business that imports, manufactures, stockpiles, or handles excise goods within a warehouse or designated zone must register for excise tax before engaging in activities. Registration is mandatory even if excise goods are handled occasionally.": {
    ar: "",
  },

  "Accurate Calculation and Payment": {
    ar: "",
  },

  "Once registered, a business must determine the value of excise goods and calculate the tax based on the applicable rates. Payment must be made in accordance with the FTA timeline for each period.": {
    ar: "",
  },

  "Filing Excise Tax Returns": {
    ar: "",
  },

  "Excise returns must be filed monthly. The deadline to submit the return is the fifteenth day following the end of each tax period. The return must report the value of goods subject to excise tax and the corresponding tax due.": {
    ar: "",
  },

  "Current Excise Tax Rates in the UAE": {
    ar: "",
  },

  "Product Category": {
    ar: "",
  },

  "Excise Tax Rate": {
    ar: "",
  },

  "Carbonated drinks": {
    ar: "",
  },

  "50%": {
    ar: "",
  },

  "Tobacco products": {
    ar: "",
  },

  "100%": {
    ar: "",
  },

  "Energy drinks": {
    ar: "",
  },

  "Electronic smoking devices": {
    ar: "",
  },

  "Liquids used in electronic smoking devices": {
    ar: "",
  },

  "Products containing added sugars or sweeteners": {
    ar: "",
  },

  "These rates are intended to influence consumption patterns and reflect public health priorities.": {
    ar: "",
  },

  "How Excise Tax Is Calculated": {
    ar: "",
  },

  "The UAE uses two primary methods to determine excise tax liabilities. The method depends on the type of product being taxed.": {
    ar: "",
  },

  "The Specific Rate Method": {
    ar: "",
  },

  "A predetermined amount of tax applies to each unit of the product. This creates a fixed and predictable liability.": {
    ar: "",
  },

  "Example using cigarettes:": {
    ar: "",
  },

  "If a product is taxed at forty fils per cigarette and a pack contains twenty cigarettes, the tax is calculated by multiplying the rate per unit by the number of units. The total excise amount is then added to the retail value.": {
    ar: "",
  },

  "The Ad Valorem Method": {
    ar: "",
  },

  "The tax is calculated as a percentage of the retail selling price. Since it is value-based, the tax rises with the retail price.": {
    ar: "",
  },

  "Example using energy drinks:": {
    ar: "",
  },

  "If an energy drink is sold for ten dirhams and the excise rate is one hundred percent, the excise amount is another ten dirhams. The same method applies to carbonated drinks at fifty percent.": {
    ar: "",
  },

  "Situations Where Excise Tax Does Not Apply": {
    ar: "",
  },

  "Several scenarios qualify for exemptions or relief under UAE excise tax regulations.": {
    ar: "",
  },

  "Goods exported outside the UAE, provided the business presents valid customs documentation": {
    ar: "",
  },

  "Medical nutrition products, baby food, and foods designed for specific medical needs": {
    ar: "",
  },

  "Goods purchased for official use by diplomatic missions and certain international organisations": {
    ar: "",
  },

  "Goods imported within duty-free allowances by travellers entering the country": {
    ar: "",
  },

  "Goods imported occasionally by non-regular importers, subject to limits": {
    ar: "",
  },

  "Stockpiled goods that do not exceed two months of average sales volumes": {
    ar: "",
  },

  "Goods stored in designated zones until they enter the domestic market": {
    ar: "",
  },

  "Why the UAE Introduced Excise Tax": {
    ar: "",
  },

  "The UAE's excise tax framework is driven by five strategic objectives:": {
    ar: "",
  },

  "Improving public health by discouraging the consumption of harmful products": {
    ar: "",
  },

  "Protecting the environment by reducing the use of polluting or harmful goods": {
    ar: "",
  },

  "Diversifying government revenue beyond the traditional hydrocarbons sector": {
    ar: "",
  },

  "Strengthening regulatory oversight and compliance across supply chains": {
    ar: "",
  },

  "Raising awareness among consumers regarding the true cost of unhealthy choices": {
    ar: "",
  },

  "Excise tax is therefore both a fiscal and a societal instrument.": {
    ar: "",
  },

  "The Role and Authority of the Federal Tax Authority": {
    ar: "",
  },

  "The FTA oversees the entire excise tax system. Its responsibilities include:": {
    ar: "",
  },

  "Registering businesses involved with excise goods": {
    ar: "",
  },

  "Processing returns and payments": {
    ar: "",
  },

  "Verifying the classification of goods when the product category is unclear": {
    ar: "",
  },

  "Conducting inspections and full audits": {
    ar: "",
  },

  "Evaluating stockpiles and reviewing customs documentation": {
    ar: "",
  },

  "Determining whether a product should be added to the official price list": {
    ar: "",
  },

  "Imposing penalties when businesses fail to comply": {
    ar: "",
  },

  "Penalties for Non-Compliance with Excise Tax": {
    ar: "",
  },

  "Non-compliance can lead to serious financial consequences. Key penalties include:": {
    ar: "",
  },

  "Failure to register on time may result in a penalty of ten thousand dirhams": {
    ar: "",
  },

  "Failure to deregister may result in one thousand dirhams per month, capped at ten thousand": {
    ar: "",
  },

  "Late filing of an excise return may lead to a penalty of one thousand dirhams on the first violation and two thousand dirhams for subsequent violations within twenty-four months": {
    ar: "",
  },

  "Late payment of excise tax results in an immediate two percent penalty, followed by four percent per month, up to a maximum of three hundred percent of the unpaid tax": {
    ar: "",
  },

  "Timely registration, accurate filing, and prompt payment are essential to avoid these financial risks.": {
    ar: "",
  },

  "Excise Tax vs VAT: How the Two Systems Differ": {
    ar: "",
  },

  "Aspect": {
    ar: "",
  },

  "Purpose": {
    ar: "",
  },

  "Targets specific harmful goods": {
    ar: "",
  },

  "Applies broadly across goods and services": {
    ar: "",
  },

  "Tax Rates": {
    ar: "",
  },

  "50% to 100%": {
    ar: "",
  },

  "Standard 5%": {
    ar: "",
  },

  "Application Point": {
    ar: "",
  },

  "Imposed once at import or production": {
    ar: "",
  },

  "Charged throughout the supply chain": {
    ar: "",
  },

  "Primary Objective": {
    ar: "",
  },

  "Influence behaviour and reduce harmful consumption": {
    ar: "",
  },

  "Supports general government revenue": {
    ar: "",
  },

  "Understanding these differences helps businesses ensure proper classification and compliance.": {
    ar: "",
  },

  "Excise tax plays a vital role in shaping consumer behaviour, supporting public health, and broadening the UAE's non-oil revenue base. The system is intentionally designed to focus on goods with high social or environmental costs, ensuring that businesses dealing in these products follow strict registration and reporting requirements. A clear understanding of tax rates, calculation methods, exemption rules, and penalties helps businesses remain compliant and avoid substantial fines.": {
    ar: "",
  },

  "Many companies are now turning to advanced financial platforms to manage these obligations more efficiently. Solutions such as Accqrate help automate tax calculations, maintain accurate stock and transaction records, and streamline return preparation, enabling businesses to manage excise responsibilities with greater accuracy and confidence.": {
    ar: "",
  },

  // MoFA Attestation Blog Content
  "Document attestation by the Ministry of Foreign Affairs is a mandatory requirement across many legal, immigration, and commercial processes in the United Arab Emirates. Whether you are applying for a residency permit, completing an employment onboarding, establishing a company, executing commercial agreements, or validating academic qualifications, MoFA attestation is the mechanism through which the UAE formally recognizes the legitimacy of documents issued either locally or abroad.": {
    ar: "",
  },

  "This guide explains the purpose of MoFA attestation, the categories of documents that require it, the eligibility rules, the documentation standards, and the step-by-step process for completing attestation through the MoFAIC platform.": {
    ar: "",
  },

  "What MoFA Attestation Means": {
    ar: "",
  },

  "MoFA attestation is the official confirmation issued by the Ministry of Foreign Affairs that a document's signatures, stamps, and certifying authority are genuine. MoFA does not validate the content of the document. Instead, the attestation confirms that the document originates from an authorized entity and that all prior authentication steps were completed correctly.": {
    ar: "",
  },

  "Attestation applies to personal, academic, legal, and commercial documents. Once attested, the document becomes legally acceptable within UAE government departments, private sector institutions, courts, immigration authorities, and financial institutions.": {
    ar: "",
  },

  "Types of Documents That Require MoFA Attestation": {
    ar: "",
  },

  "MoFA attestation covers two broad categories of documents, each containing multiple use cases.": {
    ar: "",
  },

  "Personal and Educational Documents": {
    ar: "",
  },

  "Educational degrees and transcripts": {
    ar: "",
  },

  "Birth certificates": {
    ar: "",
  },

  "Marriage certificates": {
    ar: "",
  },

  "Death certificates": {
    ar: "",
  },

  "Medical reports": {
    ar: "",
  },

  "Good conduct certificates": {
    ar: "",
  },

  "Court-issued declarations": {
    ar: "",
  },

  "Powers of attorney of a personal nature": {
    ar: "",
  },

  "Employment contracts and job offers": {
    ar: "",
  },

  "Bank statements for official use": {
    ar: "",
  },

  "Personal tax certificates": {
    ar: "",
  },

  "Any letter issued to governmental or semi-governmental bodies": {
    ar: "",
  },

  "Commercial and Corporate Documents": {
    ar: "",
  },

  "Contracts and commercial agreements": {
    ar: "",
  },

  "Company formation and registration documents": {
    ar: "",
  },

  "Minutes of board or partners' meetings": {
    ar: "",
  },

  "Shareholder certificates": {
    ar: "",
  },

  "Trade licenses": {
    ar: "",
  },

  "Brand registrations and product registrations": {
    ar: "",
  },

  "Patent and trademark documentation": {
    ar: "",
  },

  "Financial statements and audit reports": {
    ar: "",
  },

  "Corporate tax certificates": {
    ar: "",
  },

  "Powers of attorney for corporate activities": {
    ar: "",
  },

  "End-user certificates": {
    ar: "",
  },

  "Certificates required for banking, customs, or regulatory submissions": {
    ar: "",
  },

  "Any appendices or attachments that form part of a commercial filing": {
    ar: "",
  },

  "Documents issued outside the UAE must complete foreign country formalities before MoFA attestation can be provided within the UAE.": {
    ar: "",
  },

  "Why MoFA Attestation Is Required": {
    ar: "",
  },

  "MoFA attestation is an essential compliance step for several reasons:": {
    ar: "",
  },

  "Confirmation of authenticity: It protects employers, institutions, and government bodies from fraudulent credentials or misrepresented qualifications": {
    ar: "",
  },

  "Compliance with immigration and labour requirements: Residency applications, work permits, and dependent sponsorships require attested educational and civil documents to confirm identity, eligibility, and legal status": {
    ar: "",
  },

  "Validation for commercial activities: Banks, free zone authorities, courts, and licensing bodies usually require attested commercial documents to process corporate approvals, transactions, or renewals": {
    ar: "",
  },

  "Protection of contractual and legal rights: Attestation ensures that agreements and authorizations used in UAE jurisdictions originate from legitimate authorities": {
    ar: "",
  },

  "Alignment with international legal practice: Most countries follow a similar multi-stage attestation process. The UAE's attestation system ensures global compatibility and cross-border document recognition": {
    ar: "",
  },

  "MoFA Attestation Requirements": {
    ar: "",
  },

  "The Ministry of Foreign Affairs applies specific rules to ensure that only valid and properly authenticated documents are attested.": {
    ar: "",
  },

  "Requirement One: Prior Attestation": {
    ar: "",
  },

  "Documents issued within the UAE must first be certified by the issuing authority or the relevant government body": {
    ar: "",
  },

  "Documents issued outside the UAE must be attested by the foreign ministry of the issuing country and then by the UAE embassy or consulate in that country": {
    ar: "",
  },

  "If no UAE mission is available, the issuing country's embassy in the UAE or another accredited body may complete the attestation": {
    ar: "",
  },

  "Requirement Two: Document Condition": {
    ar: "",
  },

  "Documents cannot be laminated": {
    ar: "",
  },

  "All stamps and signatures must be visible and valid": {
    ar: "",
  },

  "Digital documents issued through QR codes or official portals may be accepted without physical attestation if electronically verifiable": {
    ar: "",
  },

  "Requirement Three: Translation": {
    ar: "",
  },

  "Documents issued in languages other than Arabic or English must be translated by a translator approved by the UAE Ministry of Justice. Both the original and the translated versions must be submitted when required.": {
    ar: "",
  },

  "Documents Required for MoFA Attestation": {
    ar: "",
  },

  "The exact combination of documents depends on the type of certificate, but the typical requirements include:": {
    ar: "",
  },

  "Original document": {
    ar: "",
  },

  "Official translation, if the document is not in Arabic or English": {
    ar: "",
  },

  "Supporting documents such as:": {
    ar: "",
  },

  "Spouse and parents' passport copies for family certificates": {
    ar: "",
  },

  "Company formation records for commercial documents": {
    ar: "",
  },

  "Passport copy of the applicant for personal documents": {
    ar: "",
  },

  "How to Complete MoFA Attestation in the UAE: A Step-by-Step Process": {
    ar: "",
  },

  "The MoFA attestation procedure is delivered through the MoFAIC digital platform. The process is simple but requires correct sequencing of prior certifications.": {
    ar: "",
  },

  "Step One: Registration on the MoFAIC Portal": {
    ar: "",
  },

  "Individuals register using UAE Pass": {
    ar: "",
  },

  "Companies register through the MoFA website using their corporate credentials": {
    ar: "",
  },

  "Once registered, applicants can track the status of all attestation requests online": {
    ar: "",
  },

  "Step Two: Submission of Documents": {
    ar: "",
  },

  "Upload the scanned or notarized version of the document": {
    ar: "",
  },

  "Ensure that all prior attestations from the issuing country or relevant authorities are already completed": {
    ar: "",
  },

  "Attach QR codes or official verification links whenever available": {
    ar: "",
  },

  "Step Three: Payment of Attestation Fees": {
    ar: "",
  },

  "Fees depend on document type": {
    ar: "",
  },

  "Individual documents cost one hundred fifty dirhams": {
    ar: "",
  },

  "Commercial documents cost two thousand dirhams": {
    ar: "",
  },

  "Courier fees may apply depending on location and delivery preference": {
    ar: "",
  },

  "Step Four: Application Review and Confirmation": {
    ar: "",
  },

  "Applicants receive an SMS confirming successful submission": {
    ar: "",
  },

  "If MoFA rejects the document, the fee is automatically refunded within fourteen working days": {
    ar: "",
  },

  "Step Five: Delivery of Attested Documents": {
    ar: "",
  },

  "For attestation completed within the UAE, courier delivery is used": {
    ar: "",
  },

  "For attestation outside the UAE, applicants must visit the UAE embassy or consulate in the issuing country": {
    ar: "",
  },

  "Once completed, attested documents do not expire and remain valid indefinitely unless the underlying document itself has a validity period": {
    ar: "",
  },

  "Additional Considerations for Applicants": {
    ar: "",
  },

  "Start early: Attestation can involve several authorities. Beginning the process early avoids delays in visa or corporate filings": {
    ar: "",
  },

  "Always follow the original order: Foreign ministry attestation, then UAE embassy attestation, then MoFAIC attestation. Changing the order can lead to rejection": {
    ar: "",
  },

  "Maintain clear scans: Most submissions require high quality digital versions with visible seals and signatures": {
    ar: "",
  },

  "Keep duplicates: It is advisable to maintain both physical and digital copies of all attested documents for future use": {
    ar: "",
  },

  "Use approved translators: Translation quality and legal acceptance depend on using translators approved by the Ministry of Justice": {
    ar: "",
  },

  "MoFA attestation is a mandatory step for formal recognition of both personal and commercial documents in the United Arab Emirates. Whether the purpose is immigration, employment, education, business licensing, or legal compliance, the process ensures that authorities can verify the authenticity of documents issued within or outside the UAE.": {
    ar: "",
  },

  "The attestation workflow has become more structured through MoFAIC's digital services, allowing individuals and companies to submit, track, and receive documents with greater predictability. As administrative requirements continue to expand across visas, corporate filings, and regulatory approvals, maintaining a clear attestation strategy has become essential for smooth operations.": {
    ar: "",
  },

  "Companies handling multiple document flows often benefit from using organized digital systems that track documentation, store verification evidence, and maintain compliance records. Platforms like Accqrate help centralize such processes by unifying documentation management across departments, reducing administrative errors, and supporting audit readiness without adding operational burden.": {
    ar: "",
  },

  // ============ Tax Credit Notes Blog ============
  "Tax credit notes play a central role in the UAE VAT ecosystem. They ensure that errors, returns and adjustments are documented correctly without compromising compliance, revenue reporting or the audit trail. When a previously issued tax invoice requires a reduction in value whether due to a return, an overcharge, a discount negotiated after issuance or a discrepancy in supply the credit note becomes the legally accepted mechanism to correct records.": {
    ar: "",
  },

  "This guide provides a comprehensive understanding of credit notes in the UAE, including their purpose, when they must be issued, what they must contain, how they affect VAT liability and why they matter for accounting accuracy.": {
    ar: "",
  },

  "Understanding the Purpose of a Tax Credit Note": {
    ar: "",
  },

  "A tax credit note is an official document issued by the supplier to reduce the taxable value or VAT amount of a previously issued tax invoice. It effectively reverses part of a transaction while maintaining a clear record for financial and tax purposes.": {
    ar: "",
  },

  "Unlike a refund document which triggers an actual repayment, a credit note adjusts the supplier's VAT liability and the recipient's input tax eligibility through proper documentation.": {
    ar: "",
  },

  "A credit note becomes mandatory when the facts of a taxable supply change after the issuance of a tax invoice. It ensures transparency, supports VAT reconciliation and helps prevent discrepancies during audits conducted by the Federal Tax Authority.": {
    ar: "",
  },

  "Typical Situations That Require a Credit Note": {
    ar: "",
  },

  "Several commercial scenarios require a supplier to issue a credit note. The most common include:": {
    ar: "",
  },

  "Return of Goods": {
    ar: "",
  },

  "If products are defective, damaged, or returned due to quality issues, the supplier reduces the original taxable amount through a credit note.": {
    ar: "",
  },

  "Incomplete or Unfulfilled Deliveries": {
    ar: "",
  },

  "When the supplier cannot deliver the full quantity originally billed, the invoice value must be reduced accordingly.": {
    ar: "",
  },

  "Correction of Invoice Errors": {
    ar: "",
  },

  "If the supplier mistakenly overcharged, applied incorrect VAT, or invoiced the wrong product or quantity, the credit note corrects the mistake.": {
    ar: "",
  },

  "Post-Invoice Discounts": {
    ar: "",
  },

  "Negotiated reductions agreed upon after the original invoice require an adjustment through a credit note.": {
    ar: "",
  },

  "Customer Overpayments": {
    ar: "",
  },

  "If a customer pays more than the invoiced amount, the supplier can account for the excess through a credit adjustment.": {
    ar: "",
  },

  "Customer Dissatisfaction": {
    ar: "",
  },

  "Where partial refunds are granted due to service issues or product performance concerns, a credit note documents the revised value.": {
    ar: "",
  },

  "Example of a UAE Tax Credit Note in Practice": {
    ar: "",
  },

  "A VAT-registered electronics supplier issues an invoice to a corporate buyer for twenty laptops priced at three thousand dirhams each, with VAT applied accordingly. If the buyer returns three units because of manufacturing defects, the supplier must issue a credit note documenting the returned quantity, the revised taxable value, and the corresponding VAT adjustment.": {
    ar: "",
  },

  "This ensures that the supplier reduces output VAT and the buyer reverses input VAT in an orderly and compliant manner.": {
    ar: "",
  },

  "Mandatory Components of a UAE Tax Credit Note": {
    ar: "",
  },

  "Cabinet Resolution Number Fifty Two of 2017 outlines the essential information a credit note must contain. These elements preserve clarity, compliance and traceability.": {
    ar: "",
  },

  "The credit note must include:": {
    ar: "",
  },

  "A clear title identifying the document as a Tax Credit Note": {
    ar: "",
  },

  "The supplier's name, address and Tax Registration Number": {
    ar: "",
  },

  "The recipient's name, address and Tax Registration Number when applicable": {
    ar: "",
  },

  "The date of issuance": {
    ar: "",
  },

  "The taxable value in the original invoice, the revised taxable value and the difference between them": {
    ar: "",
  },

  "The VAT amount corresponding to the difference": {
    ar: "",
  },

  "A reference to the original tax invoice being corrected": {
    ar: "",
  },

  "The reason for issuing the credit note": {
    ar: "",
  },

  "Any omission can result in the credit note being rejected during audits or VAT return validations.": {
    ar: "",
  },

  "Written and Electronic Credit Notes": {
    ar: "",
  },

  "The UAE permits both physical and electronic credit notes.": {
    ar: "",
  },

  "Written Credit Notes": {
    ar: "",
  },

  "Printed on the supplier's letterhead, they must include all information required under UAE VAT rules. Copies should be kept by both the supplier and the buyer for record-keeping.": {
    ar: "",
  },

  "Electronic Credit Notes": {
    ar: "",
  },

  "Digital credit notes are permitted when the system ensures authenticity, prevents data tampering and provides reliable long-term storage. Electronic versions are increasingly preferred due to accounting system integration and audit readiness.": {
    ar: "",
  },

  "Benefits of Credit Notes for Businesses": {
    ar: "",
  },

  "Proper use of credit notes offers several operational and compliance benefits.": {
    ar: "",
  },

  "Accurate VAT Reconciliation": {
    ar: "",
  },

  "A credit note allows the supplier to reduce output VAT and enables the recipient to correct previously claimed input VAT.": {
    ar: "",
  },

  "Improved Financial Accuracy": {
    ar: "",
  },

  "Adjustments documented through credit notes keep accounts clean, traceable and audit-friendly.": {
    ar: "",
  },

  "Enhanced Transparency": {
    ar: "",
  },

  "Clear documentation of post-invoice changes helps maintain trust between trading partners.": {
    ar: "",
  },

  "Regulatory Compliance": {
    ar: "",
  },

  "Correct issuance reduces the risk of penalties or disputes involving the Federal Tax Authority.": {
    ar: "",
  },

  "Better Cash Flow Visibility": {
    ar: "",
  },

  "Businesses gain clarity on true receivables and payables, supporting informed treasury and operational decisions.": {
    ar: "",
  },

  "Credit Note Regulations and Compliance Requirements": {
    ar: "",
  },

  "The UAE VAT system sets clear expectations for suppliers issuing credit notes.": {
    ar: "",
  },

  "Credit notes must be issued only by the supplier, never by the customer.": {
    ar: "",
  },

  "The adjustment must correspond to an existing tax invoice.": {
    ar: "",
  },

  "The reduction must reflect an actual change in the supply.": {
    ar: "",
  },

  "Both parties must retain credit notes as part of VAT record-keeping for at least five years.": {
    ar: "",
  },

  "Any VAT adjustments must be reflected in the VAT return for the relevant period.": {
    ar: "",
  },

  "Non-compliance can affect VAT returns, input VAT claims and overall tax integrity.": {
    ar: "",
  },

  "Best Practices for Businesses Issuing Credit Notes": {
    ar: "",
  },

  "To ensure strong compliance and operational consistency, businesses should:": {
    ar: "",
  },

  "Maintain documented internal procedures for issuing and approving credit notes": {
    ar: "",
  },

  "Link every credit note to its original invoice in the accounting system": {
    ar: "",
  },

  "Verify reasons for issuing credit notes to prevent misuse": {
    ar: "",
  },

  "Ensure real-time updates of VAT ledgers": {
    ar: "",
  },

  "Store digital and physical records securely for audit requirements": {
    ar: "",
  },

  "These practices build resilience and prevent errors during tax reviews.": {
    ar: "",
  },

  "Tax credit notes play an essential role in ensuring accurate VAT reporting and clean financial records in the UAE. They correct billing discrepancies, document returns, support transparent dealings and align suppliers with VAT regulations. When issued correctly, credit notes help maintain trust with customers, reduce VAT exposure and strengthen internal control frameworks.": {
    ar: "",
  },

  "As businesses prepare for increasingly digital VAT environments including the upcoming Peppol based e-invoicing mandate, having structured processes for issuing and managing credit notes becomes even more important. Modern finance teams often rely on integrated systems to automate invoice adjustments and preserve compliance.": {
    ar: "",
  },

  "Platforms such as Accqrate support this transition by centralizing invoicing, credit note processing and VAT reporting, giving businesses a more controlled and audit-ready environment without adding complexity.": {
    ar: "",
  },

  // ============ UAE VAT Regulations Blog ============
  "Value Added Tax has been a core element of the UAE's tax framework since its introduction on 1 January 2018. It applies to most goods and services supplied within the country at a standard rate of five percent. The system is designed so that VAT is collected at each stage of the supply chain, while the final burden rests with the end consumer. Registered businesses collect VAT on their sales, deduct the VAT they pay on business purchases, and remit the balance to the Federal Tax Authority.": {
    ar: "",
  },

  "This guide provides a complete explanation of how VAT works in the UAE, the registration criteria, compliance obligations, invoicing rules, industry-specific treatments, e-invoicing requirements, and the penalty regime.": {
    ar: "",
  },

  "Understanding VAT in the UAE": {
    ar: "",
  },

  "VAT in the UAE is an indirect tax applied to the consumption of goods and services. When a business makes a taxable supply, it charges five percent VAT. When it purchases goods or services for business use, it pays VAT. The difference between VAT collected on sales and VAT paid on purchases represents its net VAT liability.": {
    ar: "",
  },

  "The system ensures tax neutrality across the supply chain. Each registered entity remits only the value added at its level. The final VAT burden is carried by the consumer.": {
    ar: "",
  },

  "UAE VAT Timeline": {
    ar: "",
  },

  "2017: Introduction of Federal VAT Law": {
    ar: "",
  },

  "2018: VAT implementation at five percent": {
    ar: "",
  },

  "2023: Substantial VAT Law amendments brought into effect": {
    ar: "",
  },

  "2024: Major revisions to the Executive Regulations and formal mandate for e-invoicing announced": {
    ar: "",
  },

  "2026: Start of phased mandatory e-invoicing rollout": {
    ar: "",
  },

  "VAT Rates and Their Treatment": {
    ar: "",
  },

  "Standard rate of five percent": {
    ar: "",
  },

  "This applies to most goods and services, including retail, hospitality, utilities, professional services, commercial property rentals, food and beverages, e-commerce activities, and imported goods.": {
    ar: "",
  },

  "Zero-rated supplies": {
    ar: "",
  },

  "Zero rating means the supply is taxable at zero percent, and the business can still claim the input VAT it paid. Common examples include:": {
    ar: "",
  },

  "Exports of goods and services outside the GCC VAT implementation zone": {
    ar: "",
  },

  "International transport": {
    ar: "",
  },

  "First supply of residential real estate within three years of completion": {
    ar: "",
  },

  "Supply of crude oil and natural gas": {
    ar: "",
  },

  "Certain qualified education and healthcare services": {
    ar: "",
  },

  "Investment-grade precious metals": {
    ar: "",
  },

  "Exempt supplies": {
    ar: "",
  },

  "Exempt supplies do not attract VAT and businesses cannot recover any input VAT spent on related costs. These include:": {
    ar: "",
  },

  "Certain domestic financial services": {
    ar: "",
  },

  "Residential property (except the first supply)": {
    ar: "",
  },

  "Bare land": {
    ar: "",
  },

  "Local passenger transport": {
    ar: "",
  },

  "How VAT Is Calculated in Practice": {
    ar: "",
  },

  "VAT is charged at five percent of the taxable amount.": {
    ar: "",
  },

  "Example: If a retailer sells a television for AED 2,000, VAT is calculated as AED 2,000 multiplied by 5 percent, which is AED 100. The customer pays AED 2,100.": {
    ar: "",
  },

  "If the retailer originally purchased the television for AED 1,500 plus AED 75 VAT, the net VAT payable to the FTA is AED 100 minus AED 75, which results in AED 25 due.": {
    ar: "",
  },

  "VAT Registration Requirements": {
    ar: "",
  },

  "Businesses must register for VAT when their taxable supplies and imports exceed AED 375,000 in the previous twelve months or are expected to exceed the threshold in the next thirty days. Registration must occur within thirty days of meeting the threshold. Late registration attracts an administrative penalty of AED 10,000.": {
    ar: "",
  },

  "Voluntary registration is available when taxable supplies exceed AED 187,500 but are below the mandatory threshold. Voluntary registration enables input VAT recovery and is beneficial for growing businesses.": {
    ar: "",
  },

  "Registration is completed on the EmaraTax portal provided by the Federal Tax Authority.": {
    ar: "",
  },

  "VAT Invoicing Requirements": {
    ar: "",
  },

  "Businesses must issue VAT-compliant invoices for every taxable supply. The UAE recognises two types of VAT invoices:": {
    ar: "",
  },

  "Full tax invoice": {
    ar: "",
  },

  "Used for B2B supplies or transactions above AED 10,000. It must contain:": {
    ar: "",
  },

  "A clear label identifying the document as a tax invoice": {
    ar: "",
  },

  "Supplier and recipient details including names and TRNs": {
    ar: "",
  },

  "A unique invoice number and invoice date": {
    ar: "",
  },

  "Date of supply when different from the invoice date": {
    ar: "",
  },

  "Description of goods or services supplied": {
    ar: "",
  },

  "Unit price, quantity, taxable values, and VAT amount": {
    ar: "",
  },

  "Total amount payable including VAT": {
    ar: "",
  },

  "Reverse charge indication where applicable": {
    ar: "",
  },

  "Simplified tax invoice": {
    ar: "",
  },

  "Used for B2C supplies or transactions under AED 10,000. It requires fewer details but must still include key tax information such as supplier details, TRN, invoice date, description, and VAT amount.": {
    ar: "",
  },

  "Invoices must be issued within fourteen days of the supply date.": {
    ar: "",
  },

  "Filing VAT Returns": {
    ar: "",
  },

  "VAT registered entities must file VAT returns through the EmaraTax system. Filing frequency depends on turnover:": {
    ar: "",
  },

  "Monthly for businesses with turnover exceeding AED 150 million": {
    ar: "",
  },

  "Quarterly for all others": {
    ar: "",
  },

  "VAT returns are due within twenty-eight days after the end of the tax period. The return must include standard-rated supplies, zero-rated supplies, exempt supplies, reverse charge transactions, adjustments, and the resulting VAT due or refundable.": {
    ar: "",
  },

  "Payment of VAT is made through EmaraTax using approved payment channels. Late payment results in escalating penalties and interest.": {
    ar: "",
  },

  "VAT Record Keeping": {
    ar: "",
  },

  "Every VAT registered business must maintain detailed records including:": {
    ar: "",
  },

  "All invoices and credit notes issued and received": {
    ar: "",
  },

  "Records of imports and exports": {
    ar: "",
  },

  "Accounting records, ledgers, and journals": {
    ar: "",
  },

  "VAT apportionment workings": {
    ar: "",
  },

  "Zero-rating evidence": {
    ar: "",
  },

  "Capital asset records": {
    ar: "",
  },

  "Records must be stored for the statutory period and be available for FTA inspection.": {
    ar: "",
  },

  "Input VAT Recovery": {
    ar: "",
  },

  "Businesses can claim input VAT on goods and services used to make taxable or zero-rated supplies. Input VAT on costs related to exempt activities cannot be recovered.": {
    ar: "",
  },

  "Common non-recoverable VAT includes:": {
    ar: "",
  },

  "Entertainment expenses": {
    ar: "",
  },

  "Motor vehicles not used exclusively for business": {
    ar: "",
  },

  "Employee benefits not mandated by UAE law": {
    ar: "",
  },

  "Expenses linked to exempt supplies": {
    ar: "",
  },

  "Where a business undertakes both taxable and exempt activities, input VAT must be apportioned using an acceptable method based on taxable versus total turnover.": {
    ar: "",
  },

  "Imported goods for business use can be accounted for using the reverse charge mechanism, avoiding cash payments at customs for registered businesses.": {
    ar: "",
  },

  "VAT Treatment of Cross-Border Transactions": {
    ar: "",
  },

  "Supplies leaving the GCC VAT zone are zero rated, provided export documentation is maintained.": {
    ar: "",
  },

  "Imports of goods attract VAT at customs or via reverse charge for registered importers. Import of services attracts VAT via reverse charge unless the supplier is registered in the UAE.": {
    ar: "",
  },

  "Digital services supplied by foreign providers to UAE consumers may require VAT registration for the foreign business under the consumer location rules.": {
    ar: "",
  },

  "Sector-Specific VAT Rules": {
    ar: "",
  },

  "Education": {
    ar: "",
  },

  "Recognised educational institutions can supply core education services at zero percent. Ancillary items such as school uniforms, food, stationery, and electronic devices are taxed at five percent.": {
    ar: "",
  },

  "Healthcare": {
    ar: "",
  },

  "Qualified medical services and essential medicines are zero rated. Cosmetic or elective medical services are usually standard rated.": {
    ar: "",
  },

  "Oil and gas": {
    ar: "",
  },

  "Crude oil and natural gas are zero rated. Refined petroleum products and fuel sales are generally standard rated.": {
    ar: "",
  },

  "Real estate": {
    ar: "",
  },

  "Commercial property sales and leases are standard rated. The first supply of a new residential building is zero rated, while all subsequent supplies are exempt. Bare land remains exempt.": {
    ar: "",
  },

  "Financial services": {
    ar: "",
  },

  "Margin-based financial services are exempt. Explicit fee-based services attract VAT. Some investment products were granted VAT exemptions following recent regulatory changes.": {
    ar: "",
  },

  "Transport": {
    ar: "",
  },

  "International transport is zero rated. Domestic passenger transport remains exempt.": {
    ar: "",
  },

  "E-Invoicing in the UAE": {
    ar: "",
  },

  "The UAE is transitioning to a fully digitised invoicing framework through the national Electronic Invoicing System, which will operate using a Peppol-based five-corner model. E-invoices must be issued, transmitted, and stored in structured formats such as XML or JSON.": {
    ar: "",
  },

  "The phased rollout begins with a pilot in July 2026 followed by mandatory adoption for large businesses in January 2027, smaller businesses in July 2027, and government entities in October 2027.": {
    ar: "",
  },

  "E-invoices are generated in the ERP system, validated and enriched by Accredited Service Providers, transmitted simultaneously to the Federal Tax Authority and the buyer's ASP, and stored securely within the UAE.": {
    ar: "",
  },

  "The shift to structured invoicing enhances accuracy, minimises fraud, and creates consistency across VAT reporting. It also introduces mandatory digital credit notes and real-time reporting obligations.": {
    ar: "",
  },

  "Penalties for VAT Non-Compliance": {
    ar: "",
  },

  "Penalties apply for a wide range of violations including:": {
    ar: "",
  },

  "Late registration: AED 10,000": {
    ar: "",
  },

  "Late VAT return filing: AED 1,000 for the first occurrence and AED 2,000 for repetition within two years": {
    ar: "",
  },

  "Late VAT payment: immediate charges plus escalating monthly interest up to a maximum of 300 percent": {
    ar: "",
  },

  "Failure to maintain records: AED 10,000 for the first occurrence and AED 50,000 for repetition": {
    ar: "",
  },

  "Incorrect filings or falsified documentation: penalties in accordance with the Tax Procedures Law": {
    ar: "",
  },

  "Serious breaches such as deliberate tax evasion can lead to criminal liability.": {
    ar: "",
  },

  "How Businesses Should Prepare": {
    ar: "",
  },

  "Businesses should begin preparation well before the introduction of mandatory e-invoicing. Key steps include:": {
    ar: "",
  },

  "Reviewing VAT registration status and turnover thresholds": {
    ar: "",
  },

  "Updating invoicing templates and ensuring all mandatory data fields are reflected": {
    ar: "",
  },

  "Strengthening record-keeping and reconciliation processes": {
    ar: "",
  },

  "Upgrading ERP and accounting systems for structured invoice data": {
    ar: "",
  },

  "Selecting a reliable Accredited Service Provider for e-invoicing": {
    ar: "",
  },

  "Conducting internal testing and staff training": {
    ar: "",
  },

  "Implementing controls to ensure accurate VAT reporting and timely submission": {
    ar: "",
  },

  "VAT has become an integral component of the UAE's fiscal landscape and its influence is only increasing with ongoing regulatory enhancements and the migration to mandatory e-invoicing. For businesses operating in the UAE, the priority is to maintain precise records, issue compliant invoices, file returns correctly, and prepare their systems for structured invoicing. These steps not only ensure adherence to the law but also strengthen operational transparency and financial efficiency.": {
    ar: "",
  },

  "Platforms such as Accqrate can further support this transition by consolidating invoicing, VAT reporting, and compliance workflows in a single environment, helping businesses navigate the regulatory landscape with greater clarity and control.": {
    ar: "",
  },

  // ============ UAE VAT Calculation Guide Blog ============
  "Calculating VAT in the United Arab Emirates is straightforward once you understand how the five percent rate applies to different types of transactions. Whether you are working with a VAT inclusive amount, a VAT exclusive amount, imported goods under the reverse charge mechanism, or mixed supplies, the process follows a consistent logic. This guide explains the complete methodology, outlines special scenarios, and provides practical examples that match real business situations in the UAE.": {
    ar: "",
  },

  "Understanding VAT and Its Role in the UAE": {
    ar: "",
  },

  "Value Added Tax is a consumption tax applied to most goods and services supplied or imported within the UAE. Since its introduction in January 2018, VAT has become an important component of financial operations for both large and small businesses.": {
    ar: "",
  },

  "Every VAT registered business is required to:": {
    ar: "",
  },

  "Collect VAT on taxable sales, known as output VAT": {
    ar: "",
  },

  "Pay VAT on eligible business purchases, known as input VAT": {
    ar: "",
  },

  "Submit periodic VAT returns to the Federal Tax Authority and settle any net liability": {
    ar: "",
  },

  "Registration is mandatory when taxable supplies exceed three hundred seventy-five thousand dirhams in any twelve-month period. Voluntary registration is permitted from one hundred eighty-seven thousand five hundred dirhams.": {
    ar: "",
  },

  "How the VAT System Functions": {
    ar: "",
  },

  "The VAT framework operates through three primary categories of supplies:": {
    ar: "",
  },

  "Standard rated supplies which are taxed at five percent": {
    ar: "",
  },

  "Zero rated supplies which are taxable but at a zero percent rate": {
    ar: "",
  },

  "Exempt supplies which do not charge VAT and do not allow input VAT recovery": {
    ar: "",
  },

  "A business's VAT payable or refundable amount depends on the difference between output VAT and input VAT for each filing period.": {
    ar: "",
  },

  "Calculating VAT in the UAE": {
    ar: "",
  },

  "VAT Exclusive Price": {
    ar: "",
  },

  "A VAT exclusive price means the tax is not included in the amount and must be added. This is the most common approach for businesses selling goods or providing services.": {
    ar: "",
  },

  "Formula:": {
    ar: "",
  },

  "VAT amount equals net price multiplied by five percent": {
    ar: "",
  },

  "Total payable equals net price plus VAT amount": {
    ar: "",
  },

  "Example: Net value of one thousand dirhams gives a VAT amount of fifty dirhams and a gross value of one thousand fifty dirhams.": {
    ar: "",
  },

  "VAT Inclusive Price": {
    ar: "",
  },

  "A VAT inclusive price already contains the five percent tax. To isolate the VAT portion, you must reverse calculate it.": {
    ar: "",
  },

  "VAT amount equals gross price multiplied by five divided by one hundred five": {
    ar: "",
  },

  "Net value equals gross price minus VAT amount": {
    ar: "",
  },

  "Example: A gross price of one thousand fifty dirhams includes fifty dirhams VAT and a net value of one thousand dirhams.": {
    ar: "",
  },

  "VAT Calculation in Special Business Scenarios": {
    ar: "",
  },

  "Bulk VAT Calculations": {
    ar: "",
  },

  "Businesses handling a high volume of invoices often calculate VAT in bulk. The typical process involves preparing a spreadsheet listing all transactions, marking whether the amount includes VAT, and applying the appropriate formula. This is widely used in retail, wholesale, and service-oriented operations.": {
    ar: "",
  },

  "For inclusive values, the ratio method is used. For exclusive values, the standard five percent calculation applies. This method ensures consistent and accurate VAT reporting.": {
    ar: "",
  },

  "Reverse Charge Mechanism for Imports": {
    ar: "",
  },

  "The reverse charge mechanism applies when goods or specific services are imported into the UAE. Instead of the supplier charging VAT, the buyer must self-account for five percent VAT.": {
    ar: "",
  },

  "Steps:": {
    ar: "",
  },

  "Identify the value of the imported goods or services": {
    ar: "",
  },

  "Calculate five percent VAT": {
    ar: "",
  },

  "Record it as output VAT": {
    ar: "",
  },

  "Record the same value as input VAT": {
    ar: "",
  },

  "Example: A company imports equipment worth twenty thousand dirhams. VAT is one thousand dirhams which is declared as both output VAT and input VAT in the VAT return.": {
    ar: "",
  },

  "VAT Payable to the FTA": {
    ar: "",
  },

  "VAT payable is determined by subtracting input VAT from output VAT.": {
    ar: "",
  },

  "VAT payable equals output VAT minus input VAT": {
    ar: "",
  },

  "If the result is negative, the business may request a refund or carry the balance forward.": {
    ar: "",
  },

  "Input VAT Credit": {
    ar: "",
  },

  "Input VAT credit refers to the amount a business can reclaim for VAT paid on eligible business expenses. Claiming input tax requires holding proper tax invoices and ensuring the expense relates to taxable supplies.": {
    ar: "",
  },

  "Example: A business pays one thousand dirhams VAT for rent and two thousand dirhams VAT for purchases. Five hundred dirhams of additional VAT relates to personal expenses and is not recoverable. Recoverable VAT is therefore two thousand five hundred dirhams.": {
    ar: "",
  },

  "VAT Refund Calculations": {
    ar: "",
  },

  "If input VAT exceeds output VAT in a filing period, the business qualifies for a refund. This often applies to exporters or companies with high input-related costs.": {
    ar: "",
  },

  "Example: Input VAT is five thousand dirhams and output VAT is four thousand dirhams. The refundable amount is one thousand dirhams.": {
    ar: "",
  },

  "VAT on Discounted Transactions": {
    ar: "",
  },

  "VAT must be calculated on the value after applying the discount.": {
    ar: "",
  },

  "Example: The original price of one thousand dirhams with a discount of one hundred gives a net price of nine hundred. VAT equals forty-five dirhams, and the customer pays nine hundred forty-five dirhams.": {
    ar: "",
  },

  "VAT on Mixed Supplies": {
    ar: "",
  },

  "When a business makes taxable and exempt supplies, input VAT must be apportioned. Only the portion of expenses related to taxable activities can be recovered.": {
    ar: "",
  },

  "Example: If total input VAT is one thousand dirhams, and seventy percent of supplies are taxable, recoverable VAT is seven hundred dirhams.": {
    ar: "",
  },

  "VAT on Imported Goods at Customs": {
    ar: "",
  },

  "The VAT amount for imports is based on the customs value which includes cost, insurance, freight and any applicable customs duties.": {
    ar: "",
  },

  "Example: CIF value is nine thousand dirhams and customs duty is one thousand dirhams. The total taxable value is ten thousand dirhams. VAT equals five hundred dirhams.": {
    ar: "",
  },

  "VAT Group Calculations": {
    ar: "",
  },

  "Businesses under common control may register as a VAT group. The group files a single VAT return and internal transactions are ignored for VAT purposes. Only external supplies and external purchases count toward VAT calculations.": {
    ar: "",
  },

  "Frequent Errors in VAT Calculations": {
    ar: "",
  },

  "Businesses often make mistakes when charging, calculating, or claiming VAT. The most common errors include:": {
    ar: "",
  },

  "Confusing zero-rated and exempt supplies": {
    ar: "",
  },

  "Recovering VAT without proper tax invoices": {
    ar: "",
  },

  "Applying VAT incorrectly to discounts": {
    ar: "",
  },

  "Claiming VAT on personal or non-business expenses": {
    ar: "",
  },

  "Missing VAT filing deadlines": {
    ar: "",
  },

  "Not identifying reverse charge transactions": {
    ar: "",
  },

  "Incorrectly handling VAT inclusive prices": {
    ar: "",
  },

  "Avoiding these errors ensures compliance and helps prevent penalties.": {
    ar: "",
  },

  "Why Businesses Use VAT Calculators and Digital Tools": {
    ar: "",
  },

  "Modern VAT calculators support businesses by providing immediate results for inclusive and exclusive values, reverse charge scenarios, mixed supply apportionment, and bulk uploads. They reduce errors and improve compliance accuracy. Digital tools are especially valuable for companies processing large invoice volumes or operating across multiple emirates.": {
    ar: "",
  },

  "Accurate VAT calculation is essential for compliance in the UAE. Whether your business deals with standard supplies, imports, discounted items, or mixed supply structures, every amount must be calculated precisely and supported by valid documentation. A clear understanding of inclusive and exclusive pricing, the reverse charge mechanism, and refund eligibility helps maintain compliance and ensures seamless reporting to the Federal Tax Authority.": {
    ar: "",
  },

  "Many businesses strengthen their processes by adopting structured financial systems that ensure reliability and accuracy. Platforms like Accqrate play a role in supporting these efforts by simplifying financial data management and offering tools that help businesses maintain consistent tax compliance without adding unnecessary complexity.": {
    ar: "",
  },

  // ============ VAT Complete 2025 Guide Blog ============
  "Value Added Tax has become a central part of the UAE's fiscal system since its introduction in 2018. The framework is designed to create a transparent consumption-based tax model that supports government revenue without disrupting economic competitiveness. With a standard tax rate of 5 percent, VAT applies to most goods and services supplied within the UAE, although several categories fall under zero rating or exemption depending on their nature and purpose.": {
    ar: "",
  },

  "This comprehensive guide breaks down the VAT structure in the UAE, including how VAT operates, the obligations placed on businesses, compliance requirements, and the growing importance of e-invoicing as the UAE moves toward advanced digital tax governance.": {
    ar: "",
  },

  "Evolution of VAT in the UAE": {
    ar: "",
  },

  "The UAE has gradually strengthened its VAT framework over the past years. Key milestones include:": {
    ar: "",
  },

  "2017: The government issues the foundational legislation that outlines the implementation of VAT": {
    ar: "",
  },

  "January 2018: VAT becomes applicable at a standard rate of 5 percent": {
    ar: "",
  },

  "2023: Significant updates are introduced to the VAT Law, enhancing clarity around several taxable activities and documentation rules": {
    ar: "",
  },

  "Late 2024: The Cabinet approves new Executive Regulations that reshape procedural and compliance requirements": {
    ar: "",
  },

  "2026 (Planned): Mandatory e-invoicing is scheduled to go live in phases for B2B and B2G transactions": {
    ar: "",
  },

  "What VAT Means in the UAE": {
    ar: "",
  },

  "VAT in the UAE is an indirect consumption tax imposed on most domestic and imported goods and services. The tax burden ultimately rests with the end consumer, while businesses act as intermediaries who collect VAT on behalf of the Federal Tax Authority.": {
    ar: "",
  },

  "Every registered business performs two core functions:": {
    ar: "",
  },

  "Collect VAT on its taxable sales: This is known as output tax": {
    ar: "",
  },

  "Recover VAT paid on its eligible business expenses: This is input tax": {
    ar: "",
  },

  "The difference between these amounts determines the amount payable or refundable in each tax period.": {
    ar: "",
  },

  "How VAT Is Applied Across the Supply Chain": {
    ar: "",
  },

  "The VAT system ensures tax is collected at every stage, yet avoids double taxation through an input tax credit mechanism. As goods or services move through production, distribution, and retail, each business charges VAT on its sale and deducts VAT paid on its purchases.": {
    ar: "",
  },

  "This creates a neutral tax environment in which the final consumer absorbs the full VAT cost while businesses only remit the net amount after input recovery.": {
    ar: "",
  },

  "VAT Rate Categories in the UAE": {
    ar: "",
  },

  "The UAE uses a three-tier rate structure:": {
    ar: "",
  },

  "Standard Rated Supplies: 5 Percent": {
    ar: "",
  },

  "The majority of goods and services fall under this category, including:": {
    ar: "",
  },

  "Retail products": {
    ar: "",
  },

  "Professional and consultancy services": {
    ar: "",
  },

  "Commercial real estate leases": {
    ar: "",
  },

  "Food and beverages": {
    ar: "",
  },

  "Utilities": {
    ar: "",
  },

  "Digital services": {
    ar: "",
  },

  "Imported goods": {
    ar: "",
  },

  "Zero Rated Supplies: 0 Percent": {
    ar: "",
  },

  "These supplies are still taxable, although at zero percent, meaning input tax can be reclaimed. They include:": {
    ar: "",
  },

  "Exports to non-GCC implementing states": {
    ar: "",
  },

  "International transport of passengers and goods": {
    ar: "",
  },

  "Supply of investment-grade gold": {
    ar: "",
  },

  "Education services provided by accredited institutions": {
    ar: "",
  },

  "Healthcare supplied by licensed medical providers": {
    ar: "",
  },

  "First supply of residential property within three years of completion": {
    ar: "",
  },

  "Exempt Supplies": {
    ar: "",
  },

  "These supplies do not attract VAT, and businesses cannot recover VAT incurred on associated expenses. Common exempt categories include:": {
    ar: "",
  },

  "Residential buildings other than first supply": {
    ar: "",
  },

  "Local passenger transportation": {
    ar: "",
  },

  "Certain margin-based financial services": {
    ar: "",
  },

  "Bare land transactions": {
    ar: "",
  },

  "How VAT Is Calculated in the UAE": {
    ar: "",
  },

  "VAT is calculated by applying the standard rate to the taxable value of goods or services.": {
    ar: "",
  },

  "Example: A product priced at AED 2,000 would attract AED 100 VAT at 5 percent, resulting in a total selling price of AED 2,100.": {
    ar: "",
  },

  "Businesses then subtract input VAT paid on their own purchases from the VAT collected on sales. The resulting amount is the figure payable to the Federal Tax Authority.": {
    ar: "",
  },


  "Businesses must register for VAT if their taxable turnover exceeds AED 375,000 within a 12-month period. Once this threshold is reached, registration must be completed within thirty days.": {
    ar: "",
  },

  "A voluntary registration option is available at AED 187,500, which is often used by growing businesses seeking input tax recovery and formal recognition.": {
    ar: "",
  },

  "Issuing VAT Invoices": {
    ar: "",
  },

  "Every taxable supply must be supported with a compliant VAT invoice. The requirements include:": {
    ar: "",
  },

  "A clear \"Tax Invoice\" title": {
    ar: "",
  },

  "Accurate supplier and recipient information": {
    ar: "",
  },

  "Tax Registration Numbers for both parties where applicable": {
    ar: "",
  },

  "A unique invoice number": {
    ar: "",
  },

  "Description of goods or services": {
    ar: "",
  },

  "Quantity, price, and total value before VAT": {
    ar: "",
  },


  "Invoice date and supply date": {
    ar: "",
  },

  "Reverse charge indication where relevant": {
    ar: "",
  },

  "Simplified invoices are permitted for B2C supplies below AED 10,000.": {
    ar: "",
  },


  "VAT returns are submitted online through the EMARATAX portal. Filing frequency depends on annual turnover:": {
    ar: "",
  },

  "Monthly filing for businesses with turnover above AED 150 million": {
    ar: "",
  },

  "Quarterly filing for all other registrants": {
    ar: "",
  },

  "Returns must be submitted within twenty-eight days after the end of each tax period. Businesses must report:": {
    ar: "",
  },

  "Standard rated supplies": {
    ar: "",
  },

  "Zero rated supplies": {
    ar: "",
  },

  "Imports under reverse charge": {
    ar: "",
  },

  "Adjustments to previous declarations": {
    ar: "",
  },

  "Payment and Remittance of VAT": {
    ar: "",
  },

  "The net VAT payable must be remitted by the filing deadline. Payments can be made through bank transfer, eDebit, eDirham, credit card, or GIBAN. Failure to pay on time results in financial penalties that compound over time.": {
    ar: "",
  },

  "Record-Keeping Requirements": {
    ar: "",
  },

  "VAT registered businesses must maintain comprehensive records, including:": {
    ar: "",
  },

  "Tax invoices and credit notes": {
    ar: "",
  },

  "Statements of supplies and purchases": {
    ar: "",
  },

  "Export documentation": {
    ar: "",
  },

  "Records of reverse charge supplies": {
    ar: "",
  },

  "Details of goods imported or used for non-business activities": {
    ar: "",
  },

  "Any documentation supporting apportionment or exemptions": {
    ar: "",
  },

  "These records must generally be retained for at least five years.": {
    ar: "",
  },

  "VAT Recovery and Input Tax Credits": {
    ar: "",
  },

  "Businesses can reclaim input VAT on expenses used to make taxable supplies. Key considerations include:": {
    ar: "",
  },

  "Full recovery on expenses related to taxable and zero rated activities": {
    ar: "",
  },

  "No recovery on expenses connected solely to exempt supplies": {
    ar: "",
  },

  "No recovery on specific categories such as entertainment, personal vehicles, and certain employee benefits": {
    ar: "",
  },

  "Apportionment required for mixed supplies": {
    ar: "",
  },

  "Recoverability for capital assets may change over time if usage shifts": {
    ar: "",
  },

  "VAT on Cross-Border Transactions": {
    ar: "",
  },

  "Cross-border supplies follow internationally aligned rules:": {
    ar: "",
  },

  "Exports are zero rated": {
    ar: "",
  },

  "Imports attract 5 percent VAT": {
    ar: "",
  },

  "Import VAT for registered businesses is typically accounted for through the reverse charge mechanism": {
    ar: "",
  },

  "Digital service providers outside the UAE may be required to register and charge VAT on B2C supplies": {
    ar: "",
  },

  "Services connected to UAE real estate or events are always taxed in the UAE": {
    ar: "",
  },

  "Sector Specific Considerations": {
    ar: "",
  },

  "VAT applies differently across industries. For example:": {
    ar: "",
  },

  "Education: Core services are zero rated, while uniforms and materials are standard rated": {
    ar: "",
  },

  "Real Estate: Commercial buildings are fully taxable, while most residential supplies are exempt after the first supply": {
    ar: "",
  },

  "Healthcare: Essential services are zero rated, but non-essential procedures may attract the standard rate": {
    ar: "",
  },

  "Oil and Gas: Crude oil is zero rated, while downstream products carry the standard rate": {
    ar: "",
  },

  "Financial Services: Margin-based financial activities are exempt": {
    ar: "",
  },

  "E-Invoicing and Digital Compliance": {
    ar: "",
  },

  "The UAE is preparing for a nationwide e-invoicing system that will transform the compliance landscape. Under the upcoming framework:": {
    ar: "",
  },

  "Invoices will be created and transmitted in structured digital formats": {
    ar: "",
  },

  "Approved service providers will validate and route invoices": {
    ar: "",
  },

  "Data will reach the Federal Tax Authority in near real time": {
    ar: "",
  },

  "The system is expected to reduce fraud, improve audit accuracy, and streamline VAT filings": {
    ar: "",
  },

  "Businesses using ERP systems must ensure compatibility with the new standards": {
    ar: "",
  },

  "VAT Penalties in the UAE": {
    ar: "",
  },

  "Penalties apply for a wide range of non-compliance activities, including late filing, late payment, incorrect invoicing, record keeping failures, and inaccurate declarations. Some violations carry fixed monetary penalties, while others involve a percentage of unpaid tax, with maximum ceilings reaching up to three hundred percent.": {
    ar: "",
  },

  "VAT has become an essential component of the UAE's financial structure, shaping how businesses manage billing, pricing, record keeping, and reporting. With ongoing regulatory enhancements, including the shift toward mandatory e-invoicing, compliance is becoming more structured and data driven. Businesses that invest early in robust systems and processes will find it easier to stay compliant and avoid penalties.": {
    ar: "",
  },

  "Modern ERP and tax automation solutions can simplify this transition. Platforms such as Accqrate are helping businesses streamline VAT calculations, e-invoicing workflows, and regulatory reporting, making compliance more manageable as the UAE's tax landscape continues to evolve.": {
    ar: "",
  },

  // ============ VAT Invoice Guide Blog ============
  "Value Added Tax has become an integral part of commercial operations in the United Arab Emirates. Every registered business must document its taxable supplies through VAT compliant invoices that meet the Federal Tax Authority's standards. These invoices serve as formal evidence of the supply, support the calculation of VAT payable, and ensure the buyer can legitimately recover input VAT.": {
    ar: "",
  },

  "Although VAT invoicing may appear straightforward, the rules governing formats, fields, wording, and when each format must be used are detailed and strictly enforced. Understanding the difference between a tax invoice and a simplified tax invoice is essential for day-to-day compliance.": {
    ar: "",
  },

  "Understanding VAT Invoices in the UAE": {
    ar: "",
  },

  "A VAT invoice confirms that a taxable supply has taken place. It describes the nature of the transaction, the value of the supply, the VAT charged, and identifies both parties involved. This information enables the Federal Tax Authority to verify compliance and assists the buyer in claiming input VAT.": {
    ar: "",
  },

  "There are two recognised invoice types in the UAE. The full tax invoice is used for detailed business-to-business transactions, while the simplified tax invoice is reserved mainly for business-to-consumer transactions or smaller business-to-business transactions. Every VAT registered supplier must be able to issue both formats when required.": {
    ar: "",
  },

  "The Full Tax Invoice": {
    ar: "",
  },

  "When It Must Be Issued and Why It Matters": {
    ar: "",
  },

  "A full tax invoice is mandatory for any business-to-business transaction where the consideration exceeds ten thousand dirhams. It is also the default format many companies use because it provides complete information required for VAT documentation and internal bookkeeping.": {
    ar: "",
  },

  "This invoice must also be issued in situations where the supply falls under the reverse charge mechanism. Under this mechanism, the supplier must state clearly on the invoice that the recipient is responsible for accounting for VAT. This ensures that the buyer correctly reports the VAT in their return even though the supplier does not collect tax on the transaction.": {
    ar: "",
  },

  "A full tax invoice is also critical for the buyer because input VAT recovery depends on the presence of a valid invoice that includes all mandatory fields. If any required information is missing, the Federal Tax Authority can deny the input tax claim, which can result in financial loss or penalties.": {
    ar: "",
  },

  "Mandatory Information Required on a Full Tax Invoice": {
    ar: "",
  },

  "The Federal Tax Authority requires the following details to appear clearly and in a structured format:": {
    ar: "",
  },

  "Identification Details": {
    ar: "",
  },

  "The words \"tax invoice\" must appear prominently at the top of the document": {
    ar: "",
  },

  "The supplier's legal name, complete address, and Tax Registration Number": {
    ar: "",
  },

  "The recipient's legal name, complete address, and Tax Registration Number": {
    ar: "",
  },

  "Invoice Reference Details": {
    ar: "",
  },

  "A unique and sequential invoice number that allows tracking and audit retrieval": {
    ar: "",
  },

  "The date the invoice is issued": {
    ar: "",
  },

  "The date of supply, if the supply occurred earlier than the invoice date": {
    ar: "",
  },

  "Supply Details": {
    ar: "",
  },

  "A clear description of each good or service provided": {
    ar: "",
  },

  "The quantity delivered or the nature of the service performed": {
    ar: "",
  },

  "The unit price before VAT": {
    ar: "",
  },

  "Any discount given prior to VAT calculation": {
    ar: "",
  },

  "The taxable value before VAT": {
    ar: "",
  },

  "The VAT rate applied": {
    ar: "",
  },

  "The VAT amount charged on each line or on the total": {
    ar: "",
  },

  "The total payable amount including VAT": {
    ar: "",
  },

  "Reverse Charge Declaration": {
    ar: "",
  },

  "If applicable, a statement confirming that the buyer must account for VAT under the reverse charge mechanism": {
    ar: "",
  },

  "Each element serves a compliance purpose. The Federal Tax Authority cross-checks these details with VAT returns, customs records, and supplier filings to validate accuracy.": {
    ar: "",
  },

  "The Simplified Tax Invoice": {
    ar: "",
  },

  "When Businesses Can Issue It and Its Required Fields": {
    ar: "",
  },

  "A simplified tax invoice was introduced to reduce administrative complexity for lower value transactions, particularly in retail, hospitality, and consumer-facing services. It can be issued under two conditions:": {
    ar: "",
  },

  "First, when the buyer is not registered for VAT": {
    ar: "",
  },

  "Second, when the buyer is VAT registered but the value of the supply does not exceed ten thousand dirhams": {
    ar: "",
  },

  "This format does not contain the detailed breakdown required in a full tax invoice, but it still provides enough information for VAT calculation and reporting.": {
    ar: "",
  },

  "Mandatory Information Required on a Simplified Tax Invoice": {
    ar: "",
  },

  "The simplified invoice must show the following:": {
    ar: "",
  },

  "The words \"tax invoice\" in a clearly visible location": {
    ar: "",
  },

  "The legal name, address, and Tax Registration Number of the supplier": {
    ar: "",
  },

  "The date of issue": {
    ar: "",
  },

  "A simple description of the goods or services supplied": {
    ar: "",
  },

  "The total consideration payable by the customer": {
    ar: "",
  },

  "The VAT amount included within the total": {
    ar: "",
  },

  "Although the simplified format contains fewer details, the accuracy of each field remains essential. Retailers and service providers should ensure their point-of-sale systems automatically meet these requirements.": {
    ar: "",
  },

  "Why Correct VAT Invoicing Is Essential for Compliance": {
    ar: "",
  },

  "VAT invoices are more than commercial documents. They form the foundation of the VAT reporting system. The Federal Tax Authority relies on correct invoicing to validate taxable supplies, match seller and buyer records, and identify discrepancies.": {
    ar: "",
  },

  "Incorrect or incomplete invoices can trigger several issues, including the inability of the buyer to recover input VAT, penalties for non-compliance, additional audit scrutiny, and amended VAT returns. For this reason, businesses should regularly review invoice templates, train staff, and implement automated invoicing processes to reduce errors.": {
    ar: "",
  },

  "Practical Considerations for UAE Businesses": {
    ar: "",
  },

  "Automation and ERP Integration": {
    ar: "",
  },

  "Automated accounting and invoicing systems reduce human error, ensure mandatory fields are always included, and support efficient reconciliation during VAT return preparation.": {
    ar: "",
  },

  "Storage and Record Keeping": {
    ar: "",
  },

  "VAT invoices must be stored for the duration required under UAE tax law. Good record keeping supports VAT audits and protects the business in case of disputes.": {
    ar: "",
  },

  "Reverse Charge Awareness": {
    ar: "",
  },

  "Businesses dealing with international supplies, imported services, or certain local transactions must understand when reverse charge applies and include the correct statements on the invoice.": {
    ar: "",
  },

  "Adaptation for E-Invoicing": {
    ar: "",
  },

  "The UAE will gradually align with global digital invoicing practices. Businesses that invest early in structured, compliant invoicing systems will be better prepared for future regulatory changes.": {
    ar: "",
  },

  "VAT invoicing in the UAE follows a structured and rule-based framework designed to ensure transparency, accuracy, and auditability. Whether using a full tax invoice for high-value or business-to-business transactions or a simplified tax invoice for consumer-facing sales, businesses must understand the mandatory fields and the conditions under which each format applies.": {
    ar: "",
  },

  "Establishing reliable invoicing processes and using modern digital tools significantly reduces compliance risk. Many organisations choose platforms such as Accqrate to streamline invoice generation and maintain precision across their financial operations while keeping pace with regulatory expectations.": {
    ar: "",
  },

  // ============ UAE VAT Penalties Blog ============
  "The introduction of Value Added Tax in the United Arab Emirates marked a major shift in how businesses record, report, and account for transactions. Since the first of January 2018, the Federal Tax Authority has enforced strict rules designed to uphold transparency, prevent revenue leakage, and ensure that companies operate within a well-regulated tax environment.": {
    ar: "",
  },

  "Non-compliance with VAT obligations is taken seriously in the UAE. Penalties apply for delays, errors, incomplete information, failure to register, improper invoicing, and other breaches of the VAT legislation. Understanding these penalties is essential not only to avoid financial consequences but also to maintain a strong compliance posture and reduce the risk of tax audits.": {
    ar: "",
  },

  "This comprehensive guide explains every category of VAT penalty, why it exists, and the types of actions that trigger administrative fines.": {
    ar: "",
  },

  "Why VAT Penalties Exist in the UAE": {
    ar: "",
  },

  "VAT penalties are not simply fines. They serve three significant purposes:": {
    ar: "",
  },

  "Strengthening tax compliance: The system ensures that all registered businesses follow consistent rules when issuing invoices, maintaining records, and reporting VAT.": {
    ar: "",
  },

  "Promoting fair competition: Companies that meet their tax obligations should not be placed at a disadvantage when competing with businesses that underreport or delay payment.": {
    ar: "",
  },

  "Preserving the integrity of the tax ecosystem: Accurate VAT reporting allows the government to monitor supply chains, prevent fraudulent practices, and maintain stable revenue streams.": {
    ar: "",
  },

  "With these goals in mind, the UAE Cabinet approved a structured list of penalties that apply whenever a business fails to comply with the VAT law or the broader Tax Procedures Law.": {
    ar: "",
  },

  "Penalties Related to VAT Invoicing, Pricing, and Documentation": {
    ar: "",
  },

  "Prices Not Shown Inclusive of VAT": {
    ar: "",
  },

  "Every item sold in the UAE must be displayed with a VAT-inclusive price. When a business fails to do this, the penalty is five thousand dirhams. This rule prevents misleading pricing and ensures transparency for customers.": {
    ar: "",
  },

  "Not Informing the Authority When Applying the Profit Margin Scheme": {
    ar: "",
  },

  "Businesses using the profit margin scheme must declare this to the Federal Tax Authority. Failure to make this notification leads to a penalty of two thousand five hundred dirhams.": {
    ar: "",
  },

  "Non-Compliance with Rules Relating to Designated Zones": {
    ar: "",
  },

  "Goods moving into or out of designated zones must follow strict transfer procedures. If a business violates these procedures, the penalty will be whichever is higher:": {
    ar: "",
  },

  "Fifty thousand dirhams, or": {
    ar: "",
  },

  "Fifty percent of the unpaid VAT related to the violation": {
    ar: "",
  },

  "Failure to Issue a Tax Invoice or Approved Alternative": {
    ar: "",
  },

  "Whenever a taxable supply is made, a tax invoice must be issued. If a business fails to do so, a penalty of two thousand five hundred dirhams applies for every instance.": {
    ar: "",
  },

  "Failure to Issue a Tax Credit Note": {
    ar: "",
  },

  "When adjustments are required such as return of goods, cancellation of service, or correction of an invoice, a tax credit note must be issued. Each missed or incorrect credit note attracts a penalty of two thousand five hundred dirhams.": {
    ar: "",
  },

  "Errors in Issuing Electronic Invoices and Credit Notes": {
    ar: "",
  },

  "If a business does not follow the technical or procedural requirements for issuing electronic invoices or electronic credit notes, a penalty of two thousand five hundred dirhams applies for each violation.": {
    ar: "",
  },

  "Penalties Arising from Violations of General Tax Procedures": {
    ar: "",
  },

  "These penalties fall under the broader Tax Procedures Law that applies across VAT, corporate tax, and excise tax.": {
    ar: "",
  },

  "Failure to Maintain Proper Records": {
    ar: "",
  },

  "Businesses must keep accounting records, VAT-related documentation, import and export records, and other materials required by law.": {
    ar: "",
  },

  "First offense: ten thousand dirhams": {
    ar: "",
  },

  "Repeat offense: twenty thousand dirhams": {
    ar: "",
  },

  "Failure to Provide Records in Arabic": {
    ar: "",
  },

  "If the authority requests Arabic copies of records and the business fails to provide them, the penalty is twenty thousand dirhams.": {
    ar: "",
  },

  "Late Tax Registration": {
    ar: "",
  },

  "Businesses that cross the mandatory registration threshold must register within the stipulated timeline. Failing to register results in a penalty of ten thousand dirhams.": {
    ar: "",
  },

  "Late Deregistration": {
    ar: "",
  },

  "Businesses no longer required to be under VAT must apply for deregistration. If they do not, a monthly penalty of one thousand dirhams applies, up to a maximum of ten thousand dirhams.": {
    ar: "",
  },

  "Failure to Update Registration Information": {
    ar: "",
  },

  "Changes in ownership, address, business activity, or other registration details must be reported to the authority.": {
    ar: "",
  },

  "First offense: five thousand dirhams": {
    ar: "",
  },

  "Repeat offense: ten thousand dirhams": {
    ar: "",
  },

  "Delay in Notifying the Appointment of a Legal Representative": {
    ar: "",
  },

  "If a legal representative is appointed for tax matters, the authority must be notified. If the notification is delayed, a penalty of ten thousand dirhams applies, payable by the representative.": {
    ar: "",
  },

  "Legal Representative Failing to File a Return": {
    ar: "",
  },

  "If the representative does not file the required return within the specified timeframe, the penalty is one thousand dirhams for the first violation and two thousand dirhams for any repeat within twenty-four months.": {
    ar: "",
  },

  "Penalties for Late Filing, Late Payment, and Incorrect Submissions": {
    ar: "",
  },

  "Late VAT Return Filing": {
    ar: "",
  },

  "If a business submits its VAT return after the deadline, the fine is:": {
    ar: "",
  },

  "One thousand dirhams for the first violation": {
    ar: "",
  },

  "Two thousand dirhams for subsequent violations within twenty-four months": {
    ar: "",
  },

  "Late VAT Payment": {
    ar: "",
  },

  "This is one of the most severe categories of penalties, as it accumulates over time. The structure is as follows:": {
    ar: "",
  },

  "Two percent of the unpaid tax applies immediately on the day after the due date": {
    ar: "",
  },

  "Four percent is charged for every additional month the amount remains outstanding": {
    ar: "",
  },

  "The total penalties can reach up to three hundred percent of the unpaid tax": {
    ar: "",
  },

  "Filing Incorrect VAT Returns": {
    ar: "",
  },

  "When incorrect information is included in a return, the penalty is:": {
    ar: "",
  },

  "One thousand dirhams for the first incorrect return": {
    ar: "",
  },

  "Two thousand dirhams for repeat occurrences": {
    ar: "",
  },

  "However, if the difference in tax resulting from the error is less than the penalty above, the fine will be limited to the tax difference or five hundred dirhams. If the business corrects the mistake before the payment deadline, no penalty is applied.": {
    ar: "",
  },

  "Penalties for Voluntary Disclosure of Errors": {
    ar: "",
  },

  "Taxpayers can voluntarily report mistakes using the voluntary disclosure mechanism. The penalty depends on how long after the original deadline the disclosure is made.": {
    ar: "",
  },

  "Disclosure within one year: five percent of the tax difference": {
    ar: "",
  },

  "Disclosure within two years: ten percent": {
    ar: "",
  },

  "Disclosure within three years: twenty percent": {
    ar: "",
  },

  "Disclosure within four years: thirty percent": {
    ar: "",
  },

  "If the disclosure is made after four years but before an audit begins, the penalty increases to fifty percent of the tax difference. Additional monthly penalties of four percent apply to unpaid tax and ineligible refunds.": {
    ar: "",
  },

  "Penalties Related to Tax Audits and Import-Related Obligations": {
    ar: "",
  },

  "Obstructing or Not Assisting a Tax Auditor": {
    ar: "",
  },

  "If a business fails to cooperate with an auditor, a fixed penalty of twenty thousand dirhams applies.": {
    ar: "",
  },

  "Failure to Account for Tax on Behalf of Another Party": {
    ar: "",
  },

  "When a person or business is required to calculate tax for someone else and does not, the penalty follows the same structure as late VAT payment:": {
    ar: "",
  },

  "Two percent immediately": {
    ar: "",
  },

  "Four percent monthly": {
    ar: "",
  },

  "Capped at three hundred percent": {
    ar: "",
  },

  "Not Accounting for VAT on Imported Goods": {
    ar: "",
  },

  "When VAT on imports is not declared or under-declared, a penalty equal to fifty percent of the unpaid or undeclared tax applies.": {
    ar: "",
  },

  "Why Understanding Penalties Is Crucial for Businesses": {
    ar: "",
  },

  "VAT penalties are preventable. Most arise from avoidable oversights such as issuing incorrect documents, missing filing deadlines, or failing to keep accurate records.": {
    ar: "",
  },

  "Businesses reduce their risk significantly when they:": {
    ar: "",
  },

  "Maintain a clear audit trail": {
    ar: "",
  },

  "Issue accurate VAT invoices": {
    ar: "",
  },

  "Use properly configured accounting systems": {
    ar: "",
  },

  "Update the Federal Tax Authority on any registration changes": {
    ar: "",
  },

  "Train staff on VAT requirements": {
    ar: "",
  },

  "Review filings before submission": {
    ar: "",
  },

  "Monitor deadlines using automated reminders": {
    ar: "",
  },

  "Non-compliance does not only result in penalties. It can also affect a company's credit standing, regulatory relationships, and reputation in the market.": {
    ar: "",
  },

  "The UAE VAT penalty framework is structured to encourage responsible behaviour, accuracy, and timely compliance. Businesses that understand these rules can operate confidently and avoid the financial impact associated with mistakes, delays, or incomplete documentation.": {
    ar: "",
  },

  "Reliable tax and accounting systems play a major role in maintaining compliance. Platforms such as Accqrate support businesses by helping them manage invoicing, VAT calculations, and detailed record keeping, reducing the chances of errors and ensuring a smoother interaction with the Federal Tax Authority.": {
    ar: "",
  },

  // ============ UAE VAT Rate Structure Blog ============
  "The Value Added Tax framework in the United Arab Emirates began on the first of January 2018 through Federal Decree Law No. 8 of 2017. Since its introduction, VAT has become a central part of every business transaction in the country. The Federal Tax Authority assigns specific VAT rates depending on the nature of the supply, and every registered business must charge the correct rate, issue a compliant invoice, and remit the collected tax through periodic VAT returns.": {
    ar: "",
  },

  "Although the general VAT rate in the UAE is five percent, not all supplies attract this rate. The law classifies transactions into three broad categories: standard rated supplies, zero rated supplies, and exempt supplies. Understanding the difference between these categories is essential for accurate invoicing, proper input tax recovery, and overall VAT compliance.": {
    ar: "",
  },

  "Understanding the VAT Rates in the UAE": {
    ar: "",
  },

  "A business registered for VAT must generally add five percent VAT to the taxable value of its goods or services. However, the VAT regime has carved out specific groups of supplies that fall under special treatment. Some are taxed at zero percent even though the transaction forms part of the VAT system, while others are completely exempt and fall outside the scope of taxation for input VAT recovery purposes.": {
    ar: "",
  },

  "The three VAT categories can be viewed as follows:": {
    ar: "",
  },

  "Standard rated supplies: These attract a VAT rate of five percent": {
    ar: "",
  },

  "Zero rated supplies: These attract a VAT rate of zero percent, but the supplier is still within the VAT system and may recover input VAT": {
    ar: "",
  },

  "Exempt supplies: These do not attract VAT, and the supplier cannot recover input VAT on related expenses": {
    ar: "",
  },

  "Each category has its own conditions, qualifying rules, and documentary requirements. Businesses must classify supplies correctly to avoid penalties and to maintain accurate VAT returns.": {
    ar: "",
  },

  "Standard Rated Supplies: VAT Applied at Five Percent": {
    ar: "",
  },

  "The standard rate applies to the majority of goods and services supplied within the UAE. These transactions form the core of the VAT system. Any supply that does not fall within the statutory list of zero rated or exempt supplies is considered standard rated.": {
    ar: "",
  },

  "Common examples include the following:": {
    ar: "",
  },

  "Retail sales across all sectors": {
    ar: "",
  },

  "Hotel accommodation and restaurant services": {
    ar: "",
  },

  "Construction and contracting services": {
    ar: "",
  },

  "Maintenance and repair services": {
    ar: "",
  },

  "Events, entertainment, and leisure activities": {
    ar: "",
  },

  "General consulting, technical, and professional services": {
    ar: "",
  },

  "Imported goods of any kind unless specifically zero rated": {
    ar: "",
  },

  "Under this category, the supplier must collect five percent VAT, issue a full or simplified tax invoice depending on the situation, and report the transaction in the periodic VAT return. Input VAT incurred on business-related purchases is normally recoverable.": {
    ar: "",
  },

  "Zero Rated Supplies: VAT Applied at Zero Percent with Full Input Tax Recovery": {
    ar: "",
  },

  "Zero rated supplies are taxable supplies where VAT is charged at zero percent. Even though no VAT is collected from the customer, the supplier remains eligible to reclaim input VAT paid on expenses connected with making these supplies. This is a key distinction between zero rated and exempt transactions.": {
    ar: "",
  },

  "The UAE VAT law provides a defined list of transactions that qualify for zero rating. These include the following:": {
    ar: "",
  },

  "Exports of goods to destinations outside the UAE": {
    ar: "",
  },

  "Exports of services provided that the benefit is consumed outside the UAE and conditions in the law are satisfied": {
    ar: "",
  },

  "International transportation of passengers and goods": {
    ar: "",
  },

  "Supply or import of precious metals that meet the required purity standards": {
    ar: "",
  },

  "First supply of residential buildings within three years of completion": {
    ar: "",
  },

  "Certain buildings supplied to charitable organisations": {
    ar: "",
  },

  "Educational services provided by approved institutions": {
    ar: "",
  },

  "Healthcare services provided by qualified medical professionals": {
    ar: "",
  },

  "Each activity must satisfy specific conditions outlined in the Executive Regulations. Businesses must maintain strong documentation to justify their application of the zero percent rate during audits.": {
    ar: "",
  },

  "Exempt Supplies: Outside the VAT System with No Input VAT Recovery": {
    ar: "",
  },

  "Exempt supplies occupy a different status within the VAT framework. Although these supplies are recognised under the law, they do not attract VAT and the supplier cannot claim input VAT on expenses related to making these supplies. This often creates an irrecoverable VAT cost for businesses operating in exempt sectors.": {
    ar: "",
  },

  "The UAE VAT law identifies the following categories as exempt:": {
    ar: "",
  },

  "Specified financial services that do not charge explicit fees": {
    ar: "",
  },

  "Residential buildings that are not new and therefore do not fall under the zero rated category": {
    ar: "",
  },

  "Bare land with no developed structures": {
    ar: "",
  },

  "Local passenger transportation by land, air, or sea within the UAE": {
    ar: "",
  },

  "Businesses dealing in both taxable and exempt supplies may need to use an apportionment method to determine how much of their input VAT can be recovered. Proper record keeping and category identification become essential for accurate VAT recovery.": {
    ar: "",
  },

  "Why VAT Rate Classification Is Important": {
    ar: "",
  },

  "Incorrect classification of VAT rates can result in underpaid tax, denied input tax credits, or penalties. A supplier charging zero percent VAT incorrectly may lose the right to recover input VAT. Conversely, applying five percent VAT on a zero rated sale can create undue cost for the customer and increase compliance risk.": {
    ar: "",
  },

  "Businesses should therefore carry out a detailed review of their products, services, and supply chains to ensure correct VAT treatment. Clear documentation, accurate invoicing, and reliable VAT reporting systems are crucial for maintaining compliance in the UAE.": {
    ar: "",
  },

  "The UAE VAT system is built around three primary rate categories that determine how tax is charged and how input VAT is recovered. Most transactions are subject to the standard five percent rate, while a specific list of supplies qualifies for zero percent VAT with the benefit of input tax recovery. A limited set of supplies remains exempt and sits outside the VAT credit chain.": {
    ar: "",
  },

  "Accurate classification ensures proper invoicing, compliant VAT filings, and smooth audits. Many organisations rely on digital platforms such as Accqrate to ensure consistent VAT categorisation and seamless reporting across their financial operations.": {
    ar: "",
  },

  // ============ UAE VAT Refund Guide Blog ============
  "Since the introduction of Value Added Tax in the United Arab Emirates in January 2018, several refund mechanisms have been put in place to ensure eligible groups can reclaim VAT paid on specific expenses. These refund pathways are designed to keep the UAE competitive, reduce unnecessary costs for residents and international visitors, and support economic growth across multiple sectors.": {
    ar: "",
  },

  "This guide explains what a VAT refund is, who can claim it, the conditions for eligibility, and the step-by-step processes for each category.": {
    ar: "",
  },

  "What is a VAT Refund in the UAE": {
    ar: "",
  },

  "A VAT refund enables an individual or business to recover VAT that was paid on eligible goods or services. A refund is typically available when the VAT incurred on purchases is greater than the VAT collected on sales within the same tax period. In this case, the excess VAT becomes refundable.": {
    ar: "",
  },

  "A refund is different from a simple offset in the periodic VAT return. In an offset, the difference between input VAT and output VAT is adjusted against the payable amount. In a refund, the excess amount is returned to the applicant by the Federal Tax Authority.": {
    ar: "",
  },

  "Three main groups may qualify for refunds in the UAE:": {
    ar: "",
  },

  "Foreign businesses that incur VAT on local expenses": {
    ar: "",
  },

  "UAE nationals who build new residential properties": {
    ar: "",
  },

  "Tourists who purchase goods for personal use during their stay": {
    ar: "",
  },

  "Each group has its own process, documentation requirements, and timelines.": {
    ar: "",
  },

  "VAT Refund for Foreign Businesses": {
    ar: "",
  },

  "How Non-Resident Entities Can Reclaim VAT": {
    ar: "",
  },

  "Foreign companies that do not have a fixed establishment in the UAE but incur VAT on business-related expenses may be able to recover VAT under the foreign business refund scheme. This model prevents double taxation and supports cross-border trade.": {
    ar: "",
  },

  "Eligibility Requirements for Foreign Businesses": {
    ar: "",
  },

  "The applicant must not maintain a fixed establishment in the UAE": {
    ar: "",
  },

  "The applicant must not be carrying out business activities in the UAE on a regular basis": {
    ar: "",
  },

  "The applicant must be registered for tax in its home country": {
    ar: "",
  },

  "The minimum claim amount is AED 2,000": {
    ar: "",
  },

  "Only one refund claim can be submitted for each twelve-month period": {
    ar: "",
  },

  "Steps to Submit a Foreign Business VAT Refund": {
    ar: "",
  },

  "Sign in to the Federal Tax Authority electronic services portal": {
    ar: "",
  },

  "Open the VAT section, select refunds, and access the refund request form": {
    ar: "",
  },

  "Enter all required details, including bank information and expense data": {
    ar: "",
  },

  "Upload supporting documents and review the information for accuracy": {
    ar: "",
  },

  "Submit the request and wait for confirmation": {
    ar: "",
  },

  "The FTA generally processes a claim within twenty business days. Once approved, the refund is usually transferred within five business days.": {
    ar: "",
  },

  "VAT Refund for UAE Nationals Constructing New Residences": {
    ar: "",
  },

  "A Dedicated Scheme to Support Home Building": {
    ar: "",
  },

  "UAE nationals who build a new home for personal use may reclaim VAT paid on specific construction-related services and materials. The refund is available once per residential project and applies only to essential items required to complete the structure.": {
    ar: "",
  },

  "Eligibility Criteria": {
    ar: "",
  },

  "The applicant must be a UAE national": {
    ar: "",
  },

  "The property must be intended for personal residential use": {
    ar: "",
  },

  "The claim must be submitted within twelve months from the earlier of the completion certificate date or the date the property is first occupied": {
    ar: "",
  },

  "Examples of Eligible Goods and Services": {
    ar: "",
  },

  "Air conditioning systems": {
    ar: "",
  },

  "Doors, frames, and windows": {
    ar: "",
  },

  "Non-carpet flooring": {
    ar: "",
  },

  "Basic sanitary fixtures": {
    ar: "",
  },

  "Fitted cupboards and worktops": {
    ar: "",
  },

  "Electrical wiring and essential mechanical installations": {
    ar: "",
  },

  "Steps to Claim the Refund for New Residences": {
    ar: "",
  },

  "Collect all tax invoices and supporting evidence of expenditure": {
    ar: "",
  },

  "Download the dedicated refund form for UAE nationals from the FTA website": {
    ar: "",
  },

  "Complete the form with accurate expense details and attach all documents": {
    ar: "",
  },

  "Submit the package for review without the need for an FTA account": {
    ar: "",
  },

  "Wait for approval and receive the refund, which is usually processed within five business days after confirmation": {
    ar: "",
  },

  "VAT Refund for Tourists": {
    ar: "",
  },

  "How Visitors Can Recover VAT Before Leaving the UAE": {
    ar: "",
  },

  "Tourists benefit from the electronic tax refund system, which allows them to recover a portion of the VAT paid on eligible purchases made during their visit. The refund applies to personal goods that are taken out of the country within ninety days of purchase.": {
    ar: "",
  },


  "Goods must be purchased from retailers participating in the tourist refund system": {
    ar: "",
  },

  "The minimum purchase amount eligible for a refund is AED 250": {
    ar: "",
  },

  "All purchases must be validated before departure": {
    ar: "",
  },

  "Steps for Tourists to Receive VAT Refunds": {
    ar: "",
  },

  "Make purchases at VAT-registered retailers that participate in the tourist refund program": {
    ar: "",
  },

  "Provide a passport to the retailer so that the purchase can be registered electronically": {
    ar: "",
  },

  "At the airport, visit the validation counter or use a self-service kiosk before checking in": {
    ar: "",
  },

  "Select the preferred refund method, which may include cash, credit card, or digital wallet": {
    ar: "",
  },

  "Complete validation and depart the UAE within six hours": {
    ar: "",
  },

  "Refunds issued to cards or digital wallets typically appear within nine days.": {
    ar: "",
  },

  "Overview of UAE VAT Refund Schemes": {
    ar: "",
  },

  "Scheme": {
    ar: "",
  },

  "Eligible Group": {
    ar: "",
  },

  "Refund for foreign businesses": {
    ar: "",
  },

  "Foreign companies with no UAE establishment": {
    ar: "",
  },

  "To recover VAT on business expenses incurred in the UAE": {
    ar: "",
  },

  "Refund for UAE nationals building new homes": {
    ar: "",
  },

  "UAE nationals constructing private residences": {
    ar: "",
  },

  "To reduce construction costs and support home ownership": {
    ar: "",
  },

  "Tourist refund scheme": {
    ar: "",
  },

  "Tourists departing the UAE": {
    ar: "",
  },

  "To encourage tourism and retail spending": {
    ar: "",
  },

  "The UAE's VAT refund system is structured to support economic activity, reduce unnecessary financial burdens, and enhance the country's attractiveness to investors, residents, and visitors. Whether the applicant is a foreign business recovering operational costs, a national building a new home, or a tourist claiming tax back on eligible purchases, the process is designed to be straightforward with clear documentation requirements and predictable timelines.": {
    ar: "",
  },

  "Businesses that process significant VAT volumes or operate in multiple jurisdictions often rely on structured platforms to keep refund records accurate and compliant. Solutions like Accqrate can help streamline the preparation, validation, and record keeping needed when applying for VAT refunds, adding efficiency to an otherwise detailed process.": {
    ar: "",
  },

  // ============ UAE VAT Return Filing Guide Blog ============
  "Businesses that are registered for Value Added Tax in the UAE are required to submit VAT returns for every tax period assigned to them by the Federal Tax Authority. These returns must be filed through the EMARATAX online system and must accurately reflect all sales, purchases, imports, exports, and the VAT collected or paid during the period.": {
    ar: "",
  },

  "Filing VAT returns correctly is essential for maintaining compliance, avoiding penalties, and ensuring smooth tax administration. This guide walks through what a VAT return is, who must file, the statutory timelines, the information required, and the steps to submit VAT 201 through EMARATAX.": {
    ar: "",
  },

  "Understanding VAT Returns in the UAE": {
    ar: "",
  },

  "A VAT return is an official report submitted to the Federal Tax Authority that outlines a business's taxable activities for a specific period. It aggregates information on the VAT collected from customers on sales, the VAT paid to suppliers on purchases, and all other adjustments that impact the overall tax position.": {
    ar: "",
  },

  "The return reconciles the difference between output VAT and input VAT to determine whether the business must pay tax to the FTA or is entitled to a refund or carry forward.": {
    ar: "",
  },

  "The VAT return used in the UAE is called VAT 201. It consists of several sections that track all VAT-related data, including output tax, input tax, adjustments, imports, exempt supplies, and zero-rated transactions.": {
    ar: "",
  },

  "Who Has to File VAT Returns in the UAE": {
    ar: "",
  },

  "Any business that is registered for VAT in the UAE must file VAT returns for the tax periods assigned by the FTA. Mandatory registration is required when taxable supplies exceed three hundred seventy-five thousand dirhams annually. Businesses that make supplies between one hundred eighty-seven thousand five hundred dirhams and the mandatory registration threshold may choose to register voluntarily.": {
    ar: "",
  },

  "Only businesses that are registered for VAT are required to file returns. Businesses engaged solely in exempt activities or those not registered do not submit VAT returns.": {
    ar: "",
  },

  "VAT Filing Deadlines in the UAE": {
    ar: "",
  },

  "Businesses must file their VAT return within twenty-eight days from the end of their tax period. The FTA assigns either a quarterly or monthly period depending on the size of the business and the nature of its activities.": {
    ar: "",
  },

  "Quarterly Filing": {
    ar: "",
  },

  "This schedule is normally assigned to businesses with annual turnover below one hundred fifty million dirhams.": {
    ar: "",
  },

  "For illustration purposes:": {
    ar: "",
  },

  "First quarter covering January to March is due by 28th of April": {
    ar: "",
  },

  "Second quarter covering April to June is due by 28th of July": {
    ar: "",
  },

  "Third quarter covering July to September is due by 28th of October": {
    ar: "",
  },

  "Fourth quarter covering October to December is due by 28th of January": {
    ar: "",
  },

  "Monthly Filing": {
    ar: "",
  },

  "Businesses with an annual turnover above one hundred fifty million dirhams must file each month. The filing is due within twenty-eight days after the end of the month.": {
    ar: "",
  },

  "The Federal Tax Authority may change the assigned tax period when necessary.": {
    ar: "",
  },

  "Information Needed to File VAT 201": {
    ar: "",
  },

  "Before starting the filing process, businesses must have accurate and complete information about their transactions for the period. This includes:": {
    ar: "",
  },

  "Taxable sales broken down by emirate": {
    ar: "",
  },

  "Zero-rated and exempt supplies": {
    ar: "",
  },

  "Imports recorded through customs": {
    ar: "",
  },

  "Purchases and expenses eligible for input VAT": {
    ar: "",
  },

  "Reverse charge transactions": {
    ar: "",
  },

  "Credit notes and debit notes": {
    ar: "",
  },

  "Any adjustments required by law": {
    ar: "",
  },

  "The VAT 201 form is divided into several sections, covering taxpayer information, tax period details, output tax, input tax, adjustments, and the final declaration.": {
    ar: "",
  },

  "Step-by-Step Guide to Filing a VAT Return in the UAE": {
    ar: "",
  },

  "The filing process follows a clear sequence inside the EMARATAX platform. The steps below describe the full journey from logging in to submitting the return.": {
    ar: "",
  },

  "Step 1": {
    ar: "",
  },

  "Access EMARATAX and log in using your registered credentials.": {
    ar: "",
  },

  "Step 2": {
    ar: "",
  },

  "Navigate to the VAT section, open the filings area, and select the tax period you wish to file.": {
    ar: "",
  },

  "Step 3": {
    ar: "",
  },

  "Review the instructions shown on screen and confirm that you understand the filing requirements.": {
    ar: "",
  },

  "Step 4": {
    ar: "",
  },

  "The system displays the tax period details. Verify that the information matches the period you intend to file.": {
    ar: "",
  },

  "Step 5": {
    ar: "",
  },

  "You may download the offline Excel template to prepare data outside the portal. Once completed, upload the file to populate the return or enter the data manually.": {
    ar: "",
  },

  "Step 6": {
    ar: "",
  },

  "Enter sales and output VAT amounts in the relevant sections. Ensure figures match your accounting records.": {
    ar: "",
  },

  "Step 7": {
    ar: "",
  },

  "Report standard-rated sales emirate-wise. These values must reflect the place of supply rules.": {
    ar: "",
  },

  "Step 8": {
    ar: "",
  },

  "Any refunds issued under the tourist refund scheme will appear automatically. Review the pre-filled values.": {
    ar: "",
  },

  "Step 9": {
    ar: "",
  },

  "Include all reverse charge supplies and purchases where applicable.": {
    ar: "",
  },

  "Step 10": {
    ar: "",
  },

  "Record zero-rated and exempt supplies in their respective sections.": {
    ar: "",
  },

  "Step 11": {
    ar: "",
  },

  "Imports reported through customs will appear automatically. Make necessary adjustments if data requires correction.": {
    ar: "",
  },

  "Step 12": {
    ar: "",
  },

  "The system totals all sales and output VAT.": {
    ar: "",
  },

  "Step 13": {
    ar: "",
  },

  "Enter eligible standard-rated expenses and associated input VAT.": {
    ar: "",
  },

  "Step 14": {
    ar: "",
  },

  "Include reverse charge purchases.": {
    ar: "",
  },

  "Step 15": {
    ar: "",
  },

  "The total input VAT is calculated automatically.": {
    ar: "",
  },

  "Step 16": {
    ar: "",
  },

  "The system displays the final net VAT position which shows whether you owe tax or have excess input VAT to carry forward or reclaim.": {
    ar: "",
  },

  "Step 17": {
    ar: "",
  },

  "Confirm whether you have used the profit margin scheme if applicable.": {
    ar: "",
  },

  "Step 18": {
    ar: "",
  },

  "Review the entire return to ensure accuracy.": {
    ar: "",
  },

  "Step 19": {
    ar: "",
  },

  "Complete the declaration and confirm that the information provided is true and correct.": {
    ar: "",
  },

  "Step 20": {
    ar: "",
  },

  "Submit the return and note the reference number for future correspondence.": {
    ar: "",
  },

  "Step 21": {
    ar: "",
  },

  "Make the VAT payment through one of the payment methods provided in EMARATAX. Payment must be completed by the deadline to avoid penalties.": {
    ar: "",
  },

  "Documents Needed for VAT Return Filing": {
    ar: "",
  },

  "To prepare and support the VAT return, businesses should maintain and refer to the following documents:": {
    ar: "",
  },

  "VAT registration certificate": {
    ar: "",
  },

  "Business license": {
    ar: "",
  },

  "Tax invoices issued and received": {
    ar: "",
  },

  "Bank statements and financial records": {
    ar: "",
  },

  "Import and export documents": {
    ar: "",
  },

  "Customs declarations": {
    ar: "",
  },

  "Contracts or supporting documentation for exempt or zero-rated supplies": {
    ar: "",
  },

  "Accurate documentation ensures compliance and makes the business audit-ready at all times.": {
    ar: "",
  },

  "Penalties for VAT Return Non-Compliance in the UAE": {
    ar: "",
  },

  "Non-compliance with VAT filing and payment obligations carries monetary penalties. Common violations include late filing, incorrect returns, late payment, and failure to maintain records.": {
    ar: "",
  },

  "For example:": {
    ar: "",
  },

  "Late filing attracts a penalty of one thousand dirhams for the first occurrence and two thousand dirhams for repeated violations": {
    ar: "",
  },

  "Late payment charges begin at two percent immediately after the deadline and continue increasing if unpaid": {
    ar: "",
  },

  "Incorrect returns may lead to additional fines, especially when a voluntary disclosure is required": {
    ar: "",
  },

  "Failure to maintain proper documentation may result in penalties starting from ten thousand dirhams": {
    ar: "",
  },

  "Timely and accurate filing helps avoid unnecessary financial consequences.": {
    ar: "",
  },


  "Filing VAT returns in the UAE is a structured process that requires accurate data, timely submission, and complete supporting records. Businesses must prepare their VAT 201 form carefully, understand their tax period, enter detailed information on sales and purchases, and submit the return through EMARATAX before the deadline.": {
    ar: "",
  },

  "As companies work to maintain consistent VAT compliance, many rely on streamlined digital systems to reduce errors and improve reporting quality. Solutions like Accqrate can support businesses by helping them maintain reliable financial data and simplifying compliance workflows while keeping processes efficient and transparent.": {
    ar: "",
  },

  // ============ UAE VAT Zero Rated vs Exempt Supplies Blog ============
  "Understanding whether a supply is zero rated or exempt is one of the most important VAT decisions a business has to make. The difference matters because it determines whether input tax can be recovered, how pricing should be set, and what reporting is required. This guide explains the concepts, lists common categories, shows how to treat mixed activities, highlights common mistakes, and offers practical actions to stay compliant.": {
    ar: "",
  },

  "What Zero Rated Means": {
    ar: "",
  },

  "A zero rated supply is a taxable supply with a VAT rate of zero percent. The supply itself carries a zero VAT rate but remains within the VAT system. Businesses making zero rated supplies must register for VAT if they meet the registration threshold and must report those supplies on their VAT returns. Crucially, input VAT incurred on purchases used to make zero rated supplies can be recovered in the normal way, subject to the usual documentation and eligibility rules.": {
    ar: "",
  },

  "Common examples of zero rated supplies in the UAE include:": {
    ar: "",
  },

  "Exports outside the GCC": {
    ar: "",
  },

  "International transport of goods and passengers": {
    ar: "",
  },

  "Certain means of transport such as ships, aircraft, and trains when conditions are met": {
    ar: "",
  },

  "Investment grade precious metals with specified purity": {
    ar: "",
  },

  "Qualifying education services delivered by recognised institutions": {
    ar: "",
  },

  "Qualifying healthcare services": {
    ar: "",
  },

  "First supply of new residential buildings within three years of completion when the legal conditions are satisfied": {
    ar: "",
  },

  "What Exempt Means": {
    ar: "",
  },

  "An exempt supply is outside the VAT net in the sense that no VAT is charged on the sale and the supplier cannot recover input VAT on purchases connected to those exempt activities. There is no output VAT to collect or remit, but input VAT related to exempt supplies becomes a cost for the business. Exempt supplies are treated differently for recovery and pricing, and businesses that supply only exempt goods or services may not need to register for VAT.": {
    ar: "",
  },

  "Typical exempt supplies in the UAE include:": {
    ar: "",
  },

  "Certain financial services where fees are not explicit": {
    ar: "",
  },

  "The sale or lease of residential property that does not qualify for zero rating": {
    ar: "",
  },

  "The sale of bare land": {
    ar: "",
  },

  "The Practical Difference in One Sentence": {
    ar: "",
  },

  "Zero rated supplies allow recovery of input tax and require reporting on VAT returns. Exempt supplies prevent recovery of input tax and remove the related sales from output VAT, but may also remove the supplier from compulsory registration if those supplies are the sole business activity.": {
    ar: "",
  },

  "How the Difference Affects Your Business": {
    ar: "",
  },

  "Cash Flow": {
    ar: "",
  },

  "Input VAT recovery on zero rated supplies improves operating cash flow because VAT paid on purchases can be reclaimed. Exempt supplies force the business to absorb VAT on inputs, increasing effective cost.": {
    ar: "",
  },

  "Pricing": {
    ar: "",
  },

  "A business that cannot reclaim input VAT may need to increase prices or accept compressed margins. A business that can reclaim input VAT can keep prices more competitive.": {
    ar: "",
  },

  "Registration and Reporting": {
    ar: "",
  },

  "Zero rated suppliers are usually required to register and to file standard VAT returns reporting their zero rated activity. Businesses that deal only in exempt supplies may be outside registration thresholds and administrative obligations, but careful verification is required.": {
    ar: "",
  },

  "Documentation and Proof": {
    ar: "",
  },

  "Zero rated treatments often require documentary proof such as export declarations, transport documents, or certificates from recognised institutions. Failure to hold the required proof risks reclassification and tax assessments.": {
    ar: "",
  },

  "Common Zero Rated Categories and Required Evidence": {
    ar: "",
  },

  "Category": {
    ar: "",
  },

  "Evidence Required": {
    ar: "",
  },

  "Exports of goods outside the GCC": {
    ar: "",
  },

  "Customs export declarations, shipping documentation, commercial invoices showing buyer and destination": {
    ar: "",
  },

  "Export of services where benefit is outside the UAE": {
    ar: "",
  },

  "Contracts, evidence that recipient is outside UAE, place of supply documentation": {
    ar: "",
  },

  "International transport of passengers or goods": {
    ar: "",
  },

  "Transport manifests, tickets, waybills, international documentation": {
    ar: "",
  },

  "First supply of new residential buildings within three years": {
    ar: "",
  },

  "Construction completion certificates, contracts, evidence of date of first supply": {
    ar: "",
  },

  "Investment grade precious metals": {
    ar: "",
  },

  "Supplier and assay documentation proving purity and qualifying nature": {
    ar: "",
  },

  "Recognised education and qualifying healthcare": {
    ar: "",
  },

  "Accreditation, registration, documentary proof of institution status and service nature": {
    ar: "",
  },

  "Always retain original documents. The FTA expects suppliers to hold clear, auditable evidence before allowing zero rating.": {
    ar: "",
  },

  "How Exemptions Typically Arise": {
    ar: "",
  },

  "Financial services where consideration is implicit: This includes margin-based lending or similar products where fees are embedded in spreads": {
    ar: "",
  },

  "Residential rental and sale outside the zero rating conditions: Subsequent sales or leases of a building beyond the first time supply often fall under exemption rules": {
    ar: "",
  },

  "Local passenger transport: Tickets and receipts showing domestic transport services": {
    ar: "",
  },

  "Bare land: Sale of undeveloped land without buildings or infrastructure": {
    ar: "",
  },

  "Exempt supplies reduce administrative complexity in one area but create a hidden cost because related input VAT cannot be reclaimed.": {
    ar: "",
  },

  "Mixed Activities and Apportionment": {
    ar: "",
  },

  "When a business makes both taxable supplies (including zero rated) and exempt supplies, input VAT recovery must be apportioned. The correct approach requires:": {
    ar: "",
  },

  "Identifying which expenses relate directly to taxable or exempt activities and recovering input VAT in full for expenses directly attributable to taxable or zero rated outputs": {
    ar: "",
  },

  "Apportioning input VAT for overhead and shared costs using a reasonable and consistent allocation method. The common methods are sales value based apportionment or a usage based allocation. The method chosen must be documented and defensible to the tax authority": {
    ar: "",
  },

  "Applying adjustments where the business changes the use of an asset or activity that affects the recovery ratio. The law requires adjustments if, for example, a capital item initially used for taxable supplies later supports exempt supplies": {
    ar: "",
  },

  "Maintain contemporaneous calculations and keep them for audit.": {
    ar: "",
  },

  "Practical Steps to Classify Supplies Correctly": {
    ar: "",
  },

  "Start with the contract and the invoice: Place of supply and the contractual terms often determine whether a supply qualifies for zero rating or is exempt": {
    ar: "",
  },

  "Confirm the recipient and destination: For exports and international supplies, the customer location and movement documents determine the VAT treatment": {
    ar: "",
  },

  "Check statutory conditions: Zero rating and exemptions have conditions in legislation or guidance. Do not rely on commercial practice alone": {
    ar: "",
  },

  "Document everything: Hold contracts, transport documents, customs paperwork, accreditation certificates and any third party confirmations needed for the VAT treatment": {
    ar: "",
  },

  "Use written policies: Adopt and publish internal VAT classification policies to ensure consistency across teams. That reduces human error and improves audit readiness": {
    ar: "",
  },

  "Review annually: Legislation, FTA guidance and judicial decisions change. Review classifications at least once a year or whenever you enter a new line of business": {
    ar: "",
  },

  "Common Mistakes and How to Avoid Them": {
    ar: "",
  },

  "Mistake": {
    ar: "",
  },

  "Remedy": {
    ar: "",
  },

  "Confusing zero rated with exempt": {
    ar: "",
  },

  "Make a simple test: If input VAT can be reclaimed, it's zero rated. If it cannot, it's exempt": {
    ar: "",
  },

  "Missing documentary proof for exports and international supplies": {
    ar: "",
  },

  "Implement a mandatory export checklist and keep physical/digital copies of all documentation": {
    ar: "",
  },

  "Failing to apportion input VAT correctly for mixed supplies": {
    ar: "",
  },

  "Adopt a consistent apportionment method supported by periodic reconciliation and management review": {
    ar: "",
  },

  "Assuming treatments used in other jurisdictions automatically apply to the UAE": {
    ar: "",
  },

  "Verify UAE specific rules and evidence requirements. The UAE has precise documentary standards for zero rating": {
    ar: "",
  },

  "Not registering when required": {
    ar: "",
  },

  "Monitor turnover and potential thresholds. Registration is obligatory when taxable turnover exceeds statutory thresholds": {
    ar: "",
  },

  "Reporting and Return Implications": {
    ar: "",
  },

  "Zero rated supplies must appear on the VAT return and on any specified listings such as sales by jurisdiction if required by the FTA. Exempt supplies are reported differently and typically cannot be used to determine input tax recovery. Businesses that only make exempt supplies may not need to register but should confirm eligibility before assuming exemption.": {
    ar: "",
  },

  "Financial and Pricing Consequences": {
    ar: "",
  },

  "Margin impact: Exempt supplies create a higher effective cost base because input VAT cannot be offset. This often requires a pricing review to maintain margin": {
    ar: "",
  },

  "Competitive implications: Suppliers of zero rated goods can remain price competitive because they can recover input VAT. Suppliers of exempt goods may need to redesign procurement or pass costs to customers": {
    ar: "",
  },

  "Working capital: Zero rated suppliers recover VAT which improves working capital. Exempt suppliers should model VAT on inputs as a permanent cost": {
    ar: "",
  },

  "Decision Checklist for Each Supply": {
    ar: "",
  },

  "Use this quick checklist for every new product or service line:": {
    ar: "",
  },

  "Who is the buyer and where are they located?": {
    ar: "",
  },

  "What is the place of supply under UAE rules?": {
    ar: "",
  },

  "Does the supply have a statutory zero rated category?": {
    ar: "",
  },

  "Is any documentary proof required and can we obtain it?": {
    ar: "",
  },

  "Is the supply exempt and will that prevent input VAT recovery?": {
    ar: "",
  },

  "How should input VAT be allocated if activities are mixed?": {
    ar: "",
  },

  "How will this impact pricing and cash flow?": {
    ar: "",
  },

  "Which box or field in the VAT return must reflect the supply?": {
    ar: "",
  },

  "Short Scenario Examples": {
    ar: "",
  },

  "Example 1: Export Business": {
    ar: "",
  },

  "An exporter in Dubai sells manufacturing equipment to a buyer in Germany. The supplier secures customs export declarations and shipping documents. The supply is zero rated. The supplier recovers input VAT on the purchase of components used to produce the equipment.": {
    ar: "",
  },

  "Example 2: Local Transport Company": {
    ar: "",
  },

  "A local bus company provides domestic passenger journeys within the UAE. Those services are exempt. The operator cannot reclaim input VAT on fuel or maintenance costs in respect of exempt operations.": {
    ar: "",
  },

  "Example 3: Property Developer": {
    ar: "",
  },

  "A property developer sells a residential apartment within one year of construction completion. If the sale qualifies as a first supply and meets documentary requirements, the developer may apply zero rating. Later resale of the same apartment will generally be exempt.": {
    ar: "",
  },

  "Practical Governance Recommendations": {
    ar: "",
  },

  "Map your processes: Map procurement, sales, and logistics processes against VAT treatments to identify where supporting documents are created and stored": {
    ar: "",
  },

  "Centralise evidence: Keep proof of exports, transport, certification, and institutional recognition in a central repository with version control": {
    ar: "",
  },

  "Automate where possible: Use accounting or ERP systems that tag transactions according to VAT treatment and support reporting. Automation cuts errors in mixed activity apportionment": {
    ar: "",
  },

  "Train relevant teams: Finance, sales, logistics, and the commercial team should understand the VAT implications of zero rated and exempt supplies": {
    ar: "",
  },

  "Schedule tax health checks: Run a VAT health check at least annually or whenever you add a new product line or expand into new territories": {
    ar: "",
  },

  "Final Note and Next Step": {
    ar: "",
  },

  "Classifying supplies correctly is not a theoretical exercise. It affects cash flow, pricing, compliance cost, and ultimately profitability. If you operate across multiple product lines or have cross-border activity, treat classification as a governance priority and document every decision with supporting evidence.": {
    ar: "",
  },

  "For businesses that want to simplify compliance and centralise tax controls, enterprise-grade tools can make the difference. Accqrate provides ERP features that help record the evidence trail, tag transactions by VAT treatment, and produce reports ready for FTA review while keeping bookkeeping consistent across complex supply chains.": {
    ar: "",
  },

  //---------------FAQS----------------
    "Frequently Asked Questions": { ar: "" },

  "Ask Everything You Need To Know About Our Solutions And Services": { ar: "" },

  "No FAQs available for this country yet.": { ar: "" },

  "Please check back later or contact us directly.": { ar: "" },


  "UAE-based businesses receive a 90-day free trial.": { ar: "" },

  "Can I cancel my trial at any time?": { ar: "" },

  "Absolutely. You may cancel whenever you wish. Your account remains active for the full 90-day period and is automatically removed afterward.": { ar: "" },

  "Is Accqrate cloud-based in the UAE?": { ar: "" },

  "Yes. Accqrate Cloud is hosted within the UAE, with a disaster recovery server located in the GCC.": { ar: "" },

  "Should I provide my Credit card or debit card or bank account details during the trial period?": { ar: "" },

  "No. We do not take any credit card or debit card or bank details. It is absolutely free and has no link with any payments.": { ar: "" },

  "How do I pay my subscription?": { ar: "" },

  "You pay through invoices. Based on your subscription plan, we send you a tax invoice. You can pay it to our bank account within 10 days from the receipt of the invoice.": { ar: "" },

  "What subscription plans are available?": { ar: "" },

  "We offer flexible half-yearly or annual subscription plans. Feel free to choose the option that best suits your business needs.": { ar: "" },

  "Is there any discount for annual subscription?": { ar: "" },

  "Annual subscription has 8% discount on the total subscription value.": { ar: "" },

  "What is PEPPOL e-invoicing, and how does it work in the UAE?": { ar: "" },

  "PEPPOL e-invoicing standardizes the electronic exchange of invoices across borders using a decentralized model. Accqrate’s solution integrates with the PEPPOL network, ensuring your invoices meet UAE standards for secure and efficient transmission.": { ar: "" },

  "When will mandatory e-invoicing be implemented in the UAE?": { ar: "" },

  "Mandatory e-invoicing for B2B and B2G transactions in the UAE is expected to begin in July 2026. Accqrate is preparing its platform to support this transition with full compliance and smooth integration.": { ar: "" },

  "How does Accqrate ensure compliance with UAE tax and data regulations?": { ar: "" },

  "We adhere to UAE regulations by using robust digital signatures, encryption protocols, and secure data hosting practices. Our platform works with Accredited Service Providers to guarantee that all invoice exchanges meet regulatory standards.": { ar: "" },

  "Can I integrate my current accounting software with Accqrate’s PEPPOL e-invoicing solution?": { ar: "" },

  "Yes, Accqrate is designed for easy integration with your existing accounting or ERP systems, allowing you to leverage the benefits of the PEPPOL network without overhauling your current infrastructure.": { ar: "" },

  "How does Accqrate facilitate secure and timely invoice exchanges in the UAE?": { ar: "" },

  "Our system ensures near real-time data integration and validation through certified channels, so your invoices are securely exchanged and reported to the Federal Tax Authority in compliance with local regulations.": { ar: "" },

  //---------Zatca section-----
   "If you have any other questions not addressed here": { ar: "" },

  "Please feel free to contact us at": { ar: "" },

  "Contact Your Consultant": { ar: "" },

  "ZATCA Lock Illustration": { ar: "" },

   /* ===== UAE-SPECIFIC ===== */
  "Get 100% Peppol compliant with Accqrate": { ar: "" },
  "Ready for UAE's 2026 mandate": { ar: "" },

  /* ===== COMMON / SHARED ===== */
  "EN 16931 compliant structured invoices": { ar: "" },
  "Seamless Peppol network integration": { ar: "" },
  "UBL format invoice generation": { ar: "" },

  "Seamless integration with any ERP/POS": { ar: "" },
  "Direct Integration & People integration": { ar: "" },
  "E-invoice generation in a fraction of a second": { ar: "" },

  /* ===== CTA ===== */
  "Book a Demo": { ar: "" },

  /* ===== Accessibility / UI ===== */
  "Tick": { ar: "" },
  "Invoice": { ar: "" },
  "Peppol Certified": { ar: "" },
  "Compliance Box": { ar: "" },
  "Security Lock Illustration": { ar: "" },

   "Save time, save money": {
    ar: "",
  },

  "Want the latest on ZATCA updates, fresh product insights, and exclusive company editorials?": {
    
    ar: "",
  },

  "Get fresh product insights and exclusive company editorials delivered straight to your inbox. Subscribe now to never miss a beat!": {
   
    ar: "",
  },

  

  "Want the latest on UAE e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?": {
    
    ar: "",
  },

  "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.": {
   
    ar: "",
  },

  "Get Peppol Compliance Demo": {
   
    ar: "",
  },

  //-----------------E-Invoicing---------------------
  
   "Flexibility Meets Efficiency": { ar: "" },
  "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.": { ar: "" },

  "Transparent and Competitive Pricing": { ar: "" },
  "Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.": { ar: "" },

  "Swift Peppol Onboarding": { ar: "" },
  "Get started with UAE e-invoicing in minutes. Share your company details, and Accqrate activates your UAE PINT compliant, Peppol-ready setup instantly fully aligned with the FTA’s DCTCE 5-corner model for seamless B2B invoice exchange.": { ar: "" },

  "Automatic UAE PINT & EN 16931 Field Mapping": { ar: "" },
  "Eliminate formatting and VAT compliance errors with Accqrate’s automated mapping engine. All required UAE PINT and EN 16931 fields are validated and structured correctly, ensuring every invoice meets FTA, Peppol, and UBL 2.1 standards no manual intervention needed.": { ar: "" },

  "Custom PDF Template Replication": { ar: "" },
  "Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.": { ar: "" },

  "Long-Term Invoice Archiving": { ar: "" },
  "Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.": { ar: "" },

  "Automated Email Notifications": { ar: "" },
  "Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.": { ar: "" },

  "Comprehensive Peppol Exchange & Reconciliation Dashboard": { ar: "" },
  "Accqrate offers a unified dashboard to monitor and reconcile all invoices exchanged through the UAE’s Peppol network. Track submissions, confirmations, rejections, and statuses with real-time visibility, detailed FTA compliance reports, and exportable summaries for audit and VAT workflows.": { ar: "" },

  "AI-Driven Error Analytics": { ar: "" },
  "Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.": { ar: "" },

  "Future-Proof with ERP Scalability": { ar: "" },
  "When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.": { ar: "" },

  "Full Support for FTA E-Invoicing Compliance Reviews": { ar: "" },
  "Accqrate provides complete assistance during FTA compliance checks, ensuring your UAE PINT configurations, DCTCE exchange flows, digital signatures, and Peppol processes meet all regulatory expectations. Your business remains continuously compliant before, during, and after FTA audits.": { ar: "" },

  "High-Performance Application": { ar: "" },
  "Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.": { ar: "" },

   "A": { ar: "" },
  "complete software": { ar: "" },
  "to run your business better": { ar: "" },

  "Whether you've just started or are already established, you'll find all the features you need at each stage of your business.": {
    ar: "",
  },

  /* =====================
     COMMON – SHARED SECTIONS
     ===================== */

  "VAT Return": { ar: "" },
  "No need for an accountant – let Accqrate automatically generate your VAT return for you": {
    ar: "",
  },

  "Customers & Suppliers": { ar: "" },
  "Always know who you owe money to and who owes you money": {
    ar: "",
  },

  "Reports & Insights": { ar: "" },
  "Generate single or consolidated reports for a holistic view of your finances.": {
    ar: "",
  },

  "Purchases & Claims": { ar: "" },
  "Manage bills, purchase orders and expenses from one place": {
    ar: "",
  },

  "Payroll & Employees": { ar: "" },
  "Run payroll and invite employees to submit their expense claims.": {
    ar: "",
  },

  "Inventory tracking": { ar: "" },
  "Easily keep track of stock levels and let Accqrate automatically book your Cost of Goods": {
    ar: "",
  },

   "Enable Your Business With E-invoicing.": { ar: "" },

  "Get 30 days free trial": { ar: "" },

  "Simplified": { ar: "" },
  "Smart": { ar: "" },
  "Complaint": { ar: "" },

  "4.8 average rating from our customers": { ar: "" },

  "Free Proof of Concept": { ar: "" },
  "Flexible Solution: Cloud or On-Premises": { ar: "" },

  "PEPPOL Certified E-invoicing Software for UAE": { ar: "" },

  "Integrate With PEPPOL Network.": { ar: "" },

  "European Based <span class='text-[#508847]'>E-invoicing</span> Solution For UAE Companies.": {
    ar: "",
  },

  "FTA VAT Compliance": { ar: "" },
  "Data Hosted in UAE Cloud": { ar: "" },
  "Ready for Emirates Phase 2": { ar: "" },

  "GDPR Compliant": { ar: "" },
  "Data Hosted in UAE": { ar: "" },
  
  "5,000+ Across 30+ Industries": { ar: "" },

  /* =====================
     COMMON – INDUSTRIES
     ===================== */

  "Construction & Engineering": { ar: "" },
  "Logistics": { ar: "" },
  "Insurance": { ar: "" },
  "Conglomerate": { ar: "" },
  "Pharmacy": { ar: "" },
  "Energy": { ar: "" },
  "Packaging solutions": { ar: "" },
  "Food & Beverage": { ar: "" },
  "Trading": { ar: "" },
  "Chemicals": { ar: "" },
  "Hospitality and Tourism": { ar: "" },
  "FMCD": { ar: "" },
  "Oil & Gas": { ar: "" },
  "Home Appliances": { ar: "" },
  "Manufacturing": { ar: "" },
  "Electrical Industries Co.": { ar: "" },
  "Aerospace & Defense": { ar: "" },
  "Retail": { ar: "" },
  "Ecommerce": { ar: "" },
  "Fashion": { ar: "" },

  /* =====================
     COMMON – INVOICE UI
     ===================== */

  "Customize and send invoices easily": { ar: "" },
  "Sending an invoice should be easy - and we`ve made it so": { ar: "" },
  "Perfectly aligned with your needs and brand": { ar: "" },
  "Invoices Custom-Made for Your Business": { ar: "" },
  

  /* =====================
     COMMON – FEATURES
     ===================== */

  "Change column labels": { ar: "" },
  "Modify the text in any column to meet your specific requirements": { ar: "" },

  "Adapt the color palette to align with your brand's identity.": { ar: "" },

  "Save invoice emplates": { ar: "" },
  "Leverage your favorite template for efficiency and time savings.": { ar: "" },

  "Add your company Logo": { ar: "" },
  "Incorporate your company's seal on invoices, quotes, receipts, and other paperwork.": {
    ar: "",
  },

  /* =====================
     COMMON – DEFAULT CARDS
     ===================== */

  "Full Compliance with E-Invoicing Regulations": { ar: "" },
  "Accqrate delivers compliant structured e-invoices with seamless integration, ensuring secure exchange, standardized processing, and continuous alignment with evolving regulatory frameworks.": {
    ar: "",
  },

  "Future-Ready E-Invoicing Solution": { ar: "" },
  "Built for interoperability, Accqrate supports cross-border e-invoicing, digital reporting, and automated workflows, positioning enterprises for upcoming compliance requirements.": {
    ar: "",
  },

  "Effortless E-Invoicing Automation": { ar: "" },
  "Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete compliance without manual intervention.": {
    ar: "",
  },

  "Specialized Support and Implementation Expertise": { ar: "" },
  "Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your e-invoicing journey.": {
    ar: "",
  },

  "Unified Global E-Invoicing Platform": { ar: "" },
  "Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across multiple jurisdictions, all from a single, integrated platform.": {
    ar: "",
  },

  /* =====================
     UAE – COMPLIANCE SECTION
     ===================== */

  "Compliant with UAE’s Mandatory B2B E-Invoicing Regulation": { ar: "" },

  "Generate invoices fully compliant with UAE’s FTA 5 Corner Model (DCTCE)": {
    ar: "",
  },

  "FTA and Peppol Requirements:": { ar: "" },

  "Accqrate generates fully FTA-compliant structured eInvoices aligned to the UAE PINT framework and supports exchange through the DCTCE / 5-corner (PEPPOL) model.": {
    ar: "",
  },

  "Accqrate is a Peppol Certified AP Provider and SMP": { ar: "" },

  /* =====================
     UAE – CARDS
     ===================== */

  "Full Compliance with UAE": { ar: "" },
  "E-Invoicing (FTA DCTCE)": { ar: "" },

  "Accqrate ensures complete compliance with the UAE’s Decentralized Continuous Transaction Control and Exchange (DCTCE) framework. We generate UAE PINT–compliant e-invoices, aligned with EN 16931 and fully integrated with the national Peppol network for secure, standardized exchange. Every invoice is validated, signed, transmitted, and archived according to the latest FTA e-invoicing regulations.": {
    ar: "",
  },

  "Effortless E-Invoicing": { ar: "" },
  "Automation": { ar: "" },

  "Accqrate automates the complete UAE e-invoicing cycle with:": { ar: "" },

  "AI-driven invoice validation": { ar: "" },
  "Automated FTA compliance checks": { ar: "" },
  "Real-time error and anomaly detection": { ar: "" },
  "End-to-end creation, exchange, and archiving": { ar: "" },

  "Designed to reduce manual work and eliminate compliance risks.": { ar: "" },

  "Expert UAE E-Invoicing Implementation Support": { ar: "" },
  "Our team provides smooth onboarding with:": { ar: "" },

  "Fast ERP/POS integrations": { ar: "" },
  "UAE PINT templates and APIs": { ar: "" },
  "Setup with certified Peppol Access Points": { ar: "" },
  "Dedicated UAE compliance guidance": { ar: "" },

  "Accqrate ensures a reliable and low-disruption rollout for businesses of all sizes.": {
    ar: "",
  },

  "Future-Ready for UAE Digital Tax & VAT Compliance": { ar: "" },
  "Accqrate is engineered for the UAE’s evolving digital taxation landscape. We support automated VAT validation, structured invoice exchange, and upcoming FTA digital reporting requirements, helping businesses stay compliant as the UAE expands its Peppol-based framework.": {
    ar: "",
  },

  "Built for the UAE 5-Corner Peppol Model": { ar: "" },

  "Accqrate supports the full UAE 5-corner e-invoicing model, enabling seamless interaction across suppliers, buyers, Peppol Access Points, and the FTA.": {
    ar: "",
  },

  "Our UAE PINT engine ensures consistent interoperability, real-time exchange, and full traceability across the digital tax ecosystem.": {
    ar: "",
  },

  "One Platform for Global E-Invoicing": { ar: "" },

  "Accqrate enables businesses to manage e-invoicing across UAE, GCC, EU, and other regulated markets from one platform.": {
    ar: "",
  },

  "Generate, validate, transmit, and archive compliant e-invoices globally with a unified, scalable solution.": {
    ar: "",
  },
   "Flexible Deployment": { ar: "" },

 

  /* =====================
     CLOUD SOLUTIONS
     ===================== */

  "Cloud Based Solutions": { ar: "" },

  "Subscribe, Use On-Demand: Fast, Secure, and Flexible Cloud Solutions": {
    ar: "",
  },

  "Subscribe and pay per use": { ar: "" },
  "Onboarding in 5 min": { ar: "" },
  "High Performance": { ar: "" },
  "Encrypted and Secured": { ar: "" },
  "Disaster recovery": { ar: "" },
  "Download backup anytime": { ar: "" },

  /* =====================
     ON-PREMISES SOLUTIONS
     ===================== */

  "On Premises Solutions": { ar: "" },

  "Customized, Secure On-Premises Solutions with Quick Implementation Support": {
    ar: "",
  },

  "Customer infrastructure": { ar: "" },
  "Get customized app": { ar: "" },
  "4 hours of implementation": { ar: "" },
  "Secured and high performance": { ar: "" },
  "End to end support": { ar: "" },


  "Automatic UAE PINT & EN 16931 Field Mapping ": { ar: "" },

  "Eliminate formatting and VAT compliance errors with Accqrate’s automated mapping engine. All required UAE PINT and EN 16931 fields are validated and structured correctly, ensuring every invoice meets FTA, Peppol, and UBL 2.1 standards—no manual intervention needed.": {
    ar: "",
  },

"Simplify VAT Calculations with Our KSA VAT Calculator": { ar: "" },

  "Navigating VAT calculations has never been easier. Our KSA VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.": {
    ar: "",
  },

  "Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in KSA in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.": {
    ar: "",
  },

  "How to Calculate VAT in KSA": { ar: "" },

  "Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:": {
    ar: "",
  },

  "VAT Calculation Made Simple": { ar: "" },

  "Excluding VAT: Ideal for sales prices that already include VAT.": {
    ar: "",
  },

  "Instant Calculations: Quick and straightforward VAT computations.": {
    ar: "",
  },

  "Accuracy: Precise invoicing every time.": {
    ar: "",
  },

  "Error Reduction: Minimize manual calculation mistakes.": {
    ar: "",
  },

  "Time Savings: Spend less time on math and more on your business.": {
    ar: "",
  },

  "Simplify VAT Calculations with Our UAE VAT Calculator": { ar: "" },

  "Navigating VAT calculations has never been easier. Our UAE VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.": {
    ar: "",
  },

  "Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in UAE in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.": {
    ar: "",
  },

  "How to Calculate VAT in UAE": { ar: "" },

  "Implemented in UAE in 2018 at a standard rate of 5% on most goods and services.": {
    ar: "",
  },
  
  "VAT Calculator": { ar: "" },
  "Sale Value": { ar: "" },
  "VAT Rate (%)": { ar: "" },
  "Is Sale Inclusive of VAT?": { ar: "" },
  "Yes": { ar: "" },
  "No": { ar: "" },
  "Inclusive of VAT": { ar: "" },
  "Exclusive of VAT": { ar: "" },
  "VAT Amount": { ar: "" },
  "Total Value": { ar: "" },

  "Total VAT this month": { ar: "" },
  "Showing VAT breakdown for the current month": { ar: "" },

  "What Is VAT?": { ar: "" },

  "Adding VAT: Perfect for when sales are exclusive of VAT.": { ar: "" },

  "With our": { ar: "" },
  "VAT Calculator, enjoy:": { ar: "" },

 
  "Unlocking Insights Of Webinar": {
    ar: ""
  },

  "This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations": {
    ar: ""
  },

    "We Will Keep You Updated At All Times": {
    ar: ""
  },

  "Stay Updated With The Latest News And Updates From FTA and Accurate E-Invoicing Enhancements For Seamless Business Operations.": {
    ar: ""
  },

  "Subscribe Now": {
    ar: ""
  },

"Coming Soon ...": {
  ar: ""
},

"Get The Trial Version By Subscribing Here And Get A Feel Of Our Application": {
  ar: ""
},

"Register your company for a trial application. Your data will be available in 30 days.": {
  ar: ""
},

//----------------Navbar Items-----------------

"E-invoicing": {
  ar: ""
},

"Accqrate E-Invoicing": {
  ar: ""
},

"Simplify transactions, manage invoices effortlessly with our PEPPOL & FTA Compliant e-invoicing software.": {
  ar: ""
},

"E-Invoicing Integration": {
  ar: ""
},

"Integrate your ERP and POS with PEPPOL Network with our seamless, adaptable e-invoicing API or Offline integrators": {
  ar: ""
},

"Resources": {
  ar: ""
},

"Support": {
  ar: ""
},

"Get help when you need it": {
  ar: ""
},

"Blogs": {
  ar: ""
},

"Insights, tips and industry news": {
  ar: ""
},

"Announcements": {
  ar: ""
},

"Find answers to common questions": {
  ar: ""
},

"FAQs": {
  ar: ""
},

"Connect with other users": {
  ar: ""
},

"Tax Calculator": {
  ar: ""
},

"Calculate your VAT obligations": {
  ar: ""
},

"Events": {
  ar: ""
},

"Upcoming events and webinars": {
  ar: ""
},

"About us": {
  ar: ""
},


"Contact Sales": {
  ar: ""
},

"Contact sales": {
  ar: ""
},

"Select Language": {
  ar: ""
},

"Select Country": {
  ar: ""
},

"Loading...": {
  ar: ""
},


"E-Invoicing": {
  ar: ""
},
"Home": {
  ar: ""
},

/* ===================== Footer ===================== */

"One unified platform with zero silos integrated modules on a single data model, global compliance built-in, AI-powered automation, flexible cloud or on-prem deployment, fast implementation, and enterprise-grade security and scalability.": {
  ar: ""
},

"E-invoicing Solution": {
  ar: ""
},



"Integration Solution": {
  ar: ""
},

/* ===================== Footer Navigation ===================== */


"Join our Team": {
  ar: ""
},

"Company": {
  ar: ""
},


"Accelera": {
  ar: ""
},

"Press": {
  ar: ""
},

"Newsletter": {
  ar: ""
},

"Branding Assets": {
  ar: ""
},

/* ===================== Footer Sections ===================== */


"FAQ": {
  ar: ""
},

"Call: +41 76 475 36 65": {
  ar: ""
},

"Email: contact@accqrate-erp.com": {
  ar: ""
},

"WhatsApp: +41 76 475 36 65": {
  ar: ""
},

"Connect with Accqrate Concierge": {
  ar: ""
},

/* ===================== Footer Bottom ===================== */

"© Copyright 2021 - 2025": {
  ar: ""
},

"All rights reserved.": {
  ar: ""
},

//------------------Integration Page--------------------

/* ===================== Section ===================== */

"Why Choose ": {
  ar: ""
},

"Seamlessly integrate your ERP/POS with the UAE’s Peppol-based DCTCE framework and achieve full UAE PINT compliance for FTA e-invoicing. ": {
  ar: ""
},

/* ===================== Top Left Items ===================== */

"Effortless Invoice Generation": {
  ar: ""
},

"Create fully compliant UAE PINT–structured e-invoices, including credit notes and debit notes, ready for Peppol exchange within the UAE’s 5-corner model. ": {
  ar: ""
},

"Secure Storage": {
  ar: ""
},

"Store all UAE-compliant invoices in a high-availability, tamper-proof archiving environment, fully aligned with FTA retention and audit requirements. ": {
  ar: ""
},

"Compliant Templates": {
  ar: ""
},

"Access standardized UAE PINT-aligned invoice templates while preserving your brand formatting and business rules.": {
  ar: ""
},

"Peppol Connectivity": {
  ar: ""
},

"Exchange invoices securely through the UAE Peppol network, ensuring guaranteed interoperability and regulatory compliance across all Accredited Service Providers.": {
  ar: ""
},

"Validation & Error Handling": {
  ar: ""
},

"Automated UAE PINT, VAT, and schema validations ensure your invoices pass all FTA and Peppol checks before transmission—reducing rejections and MLS failures.": {
  ar: ""
},

"Automated Communication": {
  ar: ""
},

"Deliver invoices directly to buyers via Peppol, email, or file-based workflows fully integrated with your ERP/POS and UAE ASP. ": {
  ar: ""
},

"Financial Control": {
  ar: ""
},

"Track payments, monitor outstanding balances, and maintain full visibility across your UAE e-invoice lifecycle, including MLS acknowledgments and DCTCE reporting status. ": {
  ar: ""
},

/* ===================== Bottom Right List ===================== */

"Peppol-ready onboarding": {
  ar: ""
},

"Generate UAE PINT–Compliant XML Invoices ": {
  ar: ""
},

"PDF/A-3 with embedded XML": {
  ar: ""
},

"Optional digital signature": {
  ar: ""
},

"Track submissions, acceptance & rejections": {
  ar: ""
},

"Simple corrective actions": {
  ar: ""
},

"Send Invoices via Email, Peppol, or File-Based Workflows ": {
  ar: ""
},
/* ===================== Common ===================== */

"Integrate Your Existing ": {
  ar: ""
},

"ERPs, POS": {
  ar: ""
},

"& Applications With FTA (UAE PINT)": {
  ar: ""
},


"FTA E-INVOICING INTEGRATION": {
  ar: ""
},

/* ===================== UAE Specific ===================== */

"A Peppol Certified - UAE PINT, 5 Corner Model Ready Solution": {
  ar: ""
},

"100% Compliance for UAE's E-Invoicing.": {
  ar: ""
},

/* ===================== Common ===================== */

"Flexible methods for": {
  ar: ""
},

"Enhanced": {
  ar: ""
},

"Electronic Invoicing": {
  ar: ""
},

"API-Based Integrations": {
  ar: ""
},

"FTP/S-FTP Integrations": {
  ar: ""
},

"Manual or Excel Uploads": {
  ar: ""
},

"Fully Compliant": {
  ar: ""
},

"Audited & Verified": {
  ar: ""
},

"Flexibility in Deployment": {
  ar: ""
},

"Rapid Implementation": {
  ar: ""
},


"End-to-End Support": {
  ar: ""
},

/* ===================== UAE Specific ===================== */

"UAE E-Invoicing": {
  ar: ""
},

"Adaptive, scalable approaches for seamless UAE PINT–compliant, Peppol-based e-invoicing under the FTA’s DCTCE framework": {
  ar: ""
},

"UAE e-Invoicing Integration": {
  ar: ""
},

"Streamline your invoicing with Accqrate’s automated, Peppol-ready, UAE PINT–compliant platform built for secure, scalable, FTA-aligned e-invoicing across the UAE.": {
  ar: ""
},

"We provide complete assistance for Belgian e-invoicing integration from onboarding to continuous compliance.": {
  ar: ""
},

"Accqrate’s REST APIs enable real-time creation, validation, and exchange of UAE PINT-structured invoices through the UAE’s Peppol network. Achieve instant FTA alignment, automated status updates, and end-to-end connectivity across the UAE’s 5-corner model.": {
  ar: ""
},

"Accqrate supports secure file-based integrations with automated processing and a complete feedback loop. Your ERP or POS systems remain fully synchronized with all Peppol transactions, FTA responses, and DCTCE validations even in high-volume environments.": {
  ar: ""
},

"No integration? No problem. Upload invoices via our Excel template, and Accqrate automatically converts them into UAE PINT-compliant, EN 16931–aligned structured invoices ready for Peppol exchange. Perfect for SMEs and multi-entity setups transitioning into UAE e-invoicing.": {
  ar: ""
},

"Accqrate is UAE PINT–compliant and aligned with the FTA’s DCTCE 5-corner model, ensuring 100% audit-ready e-invoicing for the UAE mandate.": {
  ar: ""
},

"Customer deployments are validated against UAE PINT specifications, Peppol exchange rules, and FTA compliance requirements to guarantee seamless interoperability.": {
  ar: ""
},

"Choose Accqrate Cloud or deploy on your own infrastructure both fully compliant with UAE e-invoicing, DCTCE workflow rules, and Peppol interoperability standards.": {
  ar: ""
},

"Go live in days with guaranteed UAE PINT onboarding, Peppol Access Point connectivity, and FTA-aligned structured invoice generation.": {
  ar: ""
},

"Packaged Solution": {
  ar: ""
},

"Accqrate delivers pre-built integrations for SAP, Oracle, Microsoft Dynamics, Sage, Infor, Odoo, custom ERPs/POS, and more accelerating UAE e-invoicing readiness.": {
  ar: ""
},

"Process high-volume structured invoices with enterprise-grade performance across UAE’s Peppol network and DCTCE validation flows.": {
  ar: ""
},

"From onboarding to continuous compliance, Accqrate provides full UAE e-invoicing implementation support, including Access Point setup, VAT mapping, and DCTCE workflow alignment.": {
  ar: ""
},

/* ===================== Common ===================== */

"E-Invoicing Integration Flow": {
  ar: ""
},

"Generate invoices and complete in your ERP/POS": {
  ar: ""
},

"Efficiently generate and finalize invoices directly within your ERP/POS system for streamlined financial management.": {
  ar: ""
},

"Our Connectors in your ERP will take care of the rest": {
  ar: ""
},

"Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes effortlessly.": {
  ar: ""
},

"Our E-invoicing solution transforms and transmits the data": {
  ar: ""
},

"Our connector interfaces with our API, converting and adapting data for seamless integration.": {
  ar: ""
},

"Approved invoices are given back to your ERP/POS": {
  ar: ""
},

"Clearances are processed instantly, ensuring swift compliance and operational efficiency.": {
  ar: ""
},

"ERP/POS receives back QR code, XML and PDF/A3. Data archived for 10 years.": {
  ar: ""
},

"Unlimited archiving of responses, PDFs, and QR Codes ensures permanent storage and retrieval for compliance and reference purposes.": {
  ar: ""
},

"Print the PDF with QR code. Send PDF A3": {
  ar: ""
},

"Generate and print the PDF with the QR code, then dispatch the document in A3 size for comprehensive and accessible presentation.": {
  ar: ""
},

/* ===================== UAE Specific ===================== */

"Integrating your existing application through various formats. Schedule your integration with ISTD.": {
  ar: ""
},
/* ===================== Common ===================== */

"Integrating your existing application through various formats. Schedule your integration with ZATCA.": {
  ar: ""
},

"Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes efficiently.": {
  ar: ""
},


"ERP/POS receives back QR code, XML, and PDF/A3. Data archived for 10 years.": {
  ar: ""
},

"Unlimited storage of invoices, PDFs, XMLs, and QR codes ensures permanent storage and retrieval for compliance and reference purposes.": {
  ar: ""
},



"Generate and print the invoice PDF with the QR code. Send or dispatch the document as A3 for accurate archiving and accessible presentation.": {
  ar: ""
},

/* ===================== UAE Specific ===================== */

"The following steps provide an overview of UAE’s e-Invoicing model (Decentralized Continuous Transaction Control and Exchange - DCTCE):": {
  ar: ""
},

"Invoice Submission (Corner 1 → Corner 2)": {
  ar: ""
},

"The supplier generates an invoice in their ERP/POS and submits it to their UAE Accredited Service Provider (Corner 2) in an agreed format.": {
  ar: ""
},

"Validation & UAE PINT Conversion (Corner 2)": {
  ar: ""
},

"The ASP validates the invoice and converts it into the UAE standard XML (UAE PINT) if a different format was submitted.": {
  ar: ""
},

"Transmission to Buyer ASP (Corner 2 → Corner 3)": {
  ar: ""
},

"The validated invoice is transmitted to the buyer’s Accredited Service Provider (Corner 3) through the Peppol network.": {
  ar: ""
},

"Parallel Tax Reporting to FTA (Corner 2 → Corner 5)": {
  ar: ""
},

"At the same time, Corner 2 sends the Tax Data Document (TDD) to the FTA’s Central Data Platform (Corner 5).": {
  ar: ""
},

"Validation Acknowledgment (Corner 3 → Corner 2)": {
  ar: ""
},

"The buyer’s ASP validates the invoice and sends a Message Level Status (MLS) back to Corner 2 confirming validation success or failure.": {
  ar: ""
},

"Delivery to Buyer (Corner 3 → Corner 4)": {
  ar: ""
},

"Upon successful validation, Corner 3 delivers the invoice to the buyer’s business system in the format agreed with their ASP.": {
  ar: ""
},

"Buyer ASP Reporting to FTA (Corner 3 → Corner 5)": {
  ar: ""
},

"Corner 3 also reports the TDD to Corner 5. If validation fails, Corner 3 sends a negative MLS to both Corner 2 and Corner 5, and no TDD is submitted.": {
  ar: ""
},

"FTA Status to Supplier ASP (Corner 5 → Corner 2)": {
  ar: ""
},

"The FTA (Corner 5) sends an MLS to Corner 2 after processing the TDD successfully.": {
  ar: ""
},

"FTA Status to Buyer ASP (Corner 5 → Corner 3)": {
  ar: ""
},

"Corner 5 sends another MLS to Corner 3 confirming successful TDD processing.": {
  ar: ""
},

"Supplier ASP Updates Supplier (Corner 2 → Corner 1)": {
  ar: ""
},

"Corner 2 forwards the MLS updates from Corner 3 and Corner 5 to the supplier.": {
  ar: ""
},

"Buyer ASP Updates Buyer (Corner 3 → Corner 4)": {
  ar: ""
},

"Corner 3 forwards Corner 5’s reporting MLS to the buyer for full transparency and audit tracking.": {
  ar: ""
},
/* ===================== Common ===================== */

"Free Proof of Concept for Peppol / UAE PINT Integration": {
  ar: ""
},

"Explore Accqrate’s UAE E-Invoicing Integration with a Free, Zero-Risk Proof of Concept.": {
  ar: ""
},

"Zero–Risk Trial": {
  ar: ""
},

"Ease of Integration": {
  ar: ""
},

"Expert Guidance & Training": {
  ar: ""
},

"Onboarding Assistance": {
  ar: ""
},

"Full Ownership & Responsibility": {
  ar: ""
},

"No Upfront Contracts": {
  ar: ""
},

"ERP Expertise": {
  ar: ""
},

"Compliance Assurance": {
  ar: ""
},

"Fast Integration": {
  ar: ""
},

/* ===================== UAE Specific ===================== */

"Test seamless integration between your ERP/POS and the UAE Peppol test environment with no commitment. Validate UAE PINT outputs and DCTCE workflows before you decide.": {
  ar: ""
},

"See how quickly your systems connect to Peppol and generate UAE PINT-compliant, EN 16931-aligned invoices ready for 5-corner exchange.": {
  ar: ""
},

"Your internal teams or implementation partners receive full technical guidance, UAE PINT training, and hands-on support throughout the POC.": {
  ar: ""
},

"We assist with company onboarding, Peppol participant setup, UAE PINT validation, and readiness for DCTCE reporting.": {
  ar: ""
},

"Accqrate takes end-to-end responsibility for compliance, validation, MLS handling, audit readiness, and technical accuracy.": {
  ar: ""
},

"Start with trust—no contracts, no advance payments. NDA included for complete confidentiality.": {
  ar: ""
},

"Our specialists bring deep integration experience across SAP, Oracle, Microsoft Dynamics, Infor, Odoo, Baan, Sage, and custom ERP/POS environments.": {
  ar: ""
},

"We ensure your organization meets full FTA e-invoicing requirements, including UAE PINT, Peppol interoperability, VAT rules, and DCTCE transaction reporting.": {
  ar: ""
},

"Go live in 5 working days, accelerating your readiness for upcoming mandatory UAE B2B e-invoicing.": {
  ar: ""
},

"Integrate Your Existing": {
  ar: ""
},

"Seamless": {
  ar: ""
},

"Compliant": {
  ar: ""
},

"Secure": {
  ar: ""
},

"Integrate Your Existing ERPs, POS & Applications With FTA (UAE PINT)": {
  ar: ""
},
"Our solutions seamlessly integrate with any": {
  ar: ""
},

"ERP/POS system": {
  ar: ""
},

"you use.": {
  ar: ""
},

"Our integrators are equipped to collaborate with a wide range of solutions, including Global ERP systems, Local and Custom ERP, In-House ERP, both Online and Offline POS systems, Custom Applications, Accounting Software, and even Excel & SQL-Based Solutions, ensuring versatile and comprehensive compatibility": {
  ar: ""
},
"Integration": {
  ar: ""
},

"Solutions": {
  ar: ""
},

"Process": {
  ar: ""
},

"For B2B transactions, the process is straightforward": {
  ar: ""
},
"Accqrate?": {
  ar: ""
},

"Dashboard": {
  ar: ""
},

"Invoice Example": {
  ar: ""
},
"Peppol / UAE PINT Integration": {
  ar: ""
},
"Free proof of concept for": {
  ar: ""
},


"Tailored, innovative solutions enhancing efficiency and accuracy for your business.": {
  ar: ""
},

"Talk to our expert": {
  ar: ""
},

"Do You Want To Know More?": {
  ar: ""
},

"Kick start your free proof of concept": {
  ar: ""
},



"Get Started": {
  ar: ""
}








};

export default function T({ children }: TProps): ReactNode {
    const { selectedLanguage } = useCountry();
    const translateText = (text: string): string => {
        // Early return for English
        if (selectedLanguage.code === 'en') {
            return text;
        }
        
        // For Arabic, try to find translation
        if (selectedLanguage.code === 'ar') {
            const translation = blogTranslations[text];
            // Check if translation exists and is not empty
            if (translation && translation.ar && translation.ar.trim() !== "") {
                return translation.ar;
            }
        }
        
        // Fallback to original text for other languages or missing translations
        return text;
    };

    // If children is a string, translate it
    if (typeof children === 'string') {
        return translateText(children);
    }

    return children;
}
