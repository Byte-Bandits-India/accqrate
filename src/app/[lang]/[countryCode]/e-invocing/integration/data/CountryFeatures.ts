import AssetPath from "@/AssetPath/AssetPath";

export interface FeatureItem {
  img: string;
  title: string;
  description: string;
  sub?: string;
}

export interface IntegrationSectionItem {
  img: string;
  title: string;
  desc: string;
}

export interface CountryFeatures {
  integrationHeading: string;
  integrationHighlight: string;
  integrationDescription: string;
  featureHeading: string;
  featureHighlight: string;
  featureDescription: string;
  ctaDescription: string;

  sections: IntegrationSectionItem[];
  features: FeatureItem[];
}

export const COUNTRY_FEATURES: Record<string, CountryFeatures> = {
  sa: {
    integrationHeading: "Flexible methods for",
    integrationHighlight: "ZATCA",
    integrationDescription:
      "Adaptive approaches for seamless ZATCA compliance and integration solutions.",
       featureHeading: "Enhanced",
featureHighlight: "Electronic Invoicing",
featureDescription:
  "Streamline your invoicing with our automated, globally compatible solution featuring advanced security.",
ctaDescription:
  "We provide complete assistance for ZATCA e-invoicing integration from onboarding to continuous compliance.",

      sections: [
  {
    img: AssetPath.invoicing.integrationAssets.integration1.src,
    title: "API Based Integrations",
    desc: "Accqrate’s APIs offer unparalleled flexibility, enabling seamless integration of your tax or simplified tax invoices with ZATCA, ensuring effortless compliance and connectivity.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.integration2.src,
    title: "FTP/S-FTP Integrations",
    desc: "Accqrate enhances your invoicing processes with file-based integration capabilities, complete with a closed feedback loop for seamless communication back to your source system.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.integration3.src,
    title: "Manual or Excel Uploads",
    desc: "For systems not directly integrated, Accqrate simplifies your process. Just download and upload your Excel files—format mappings are already taken care of.",
  },
],


    features: [
      {
        img: AssetPath.invoicing.integrationAssets.cal.src,
        title: "Fully compliant",
        description:
          "An approved ZATCA solution provider, ensuring 100% audit-proof invoicing.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.set.src,
        title: "Audited & Certified",
        description:
          "Our customers setups right from ZATCA wave 1 are 100% audited and certified.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.ring.src,
        title: "Flexibility in Deployment",
        description: "Choose our SAAS Cloud or your own server for deployment.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.cloud.src,
        title: "Rapid Implementation",
        description: "Go live in just 5 days with guaranteed ZATCA integration",
      },
      {
  img: AssetPath.invoicing.integrationAssets.set.src,
  title: "Packaged Solution",
  description:
    "Comprehensive solutions tailored for SAP, Oracle, MSD, Infor, BAAN, SAGE, Custom & Inhouse ERP/POS",
},
    {
    img: AssetPath.invoicing.integrationAssets.set.src,
    title: "High Performance",
    description:
      "Capable of processing millions of invoices daily.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.cal.src,
    title: "End-to-End Support",
    description:
      "We will provide Full end-to-end support for ZATCA integration, from start to finish.",
  },
    ],
  },

  be: {
    integrationHeading: "Flexible methods for",
    integrationHighlight: "Belgium E-Invoicing",
    integrationDescription:
      "Adaptive approaches for seamless Peppol-based e-invoicing and EN 16931 compliance.",
    featureHeading: "Enhanced",
    featureHighlight: "Electronic Invoicing",
    featureDescription:
      "Streamline your invoicing with Accqrate's automated, Peppol-ready, EN 16931-compliant platform built for secure, scalable European operations.",
    ctaDescription:
      "We provide complete assistance for Belgian e-invoicing integration from onboarding to continuous compliance.",

  sections: [
  {
    img: AssetPath.invoicing.integrationAssets.integration1.src,
    title: "API-Based Integrations",
    desc: "Accqrate's APIs enable smooth generation and exchange of structured EN 16931-compliant UBL invoices through the Peppol network, ensuring effortless Belgian compliance and real-time connectivity.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.integration2.src,
    title: "FTP/S-FTP Integrations",
    desc: "Accqrate supports secure file-based integration flows with a complete feedback loop, ensuring your source systems stay fully synchronized with all Peppol exchanges.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.integration3.src,
    title: "Manual or Excel Uploads",
    desc: "For non-integrated systems, simply download our template and upload your Excel files. Accqrate handles all EN 16931 field mappings automatically for compliant Belgian e-invoicing.",
  },
],



features: [
  {
    img: AssetPath.invoicing.integrationAssets.cal.src,
    title: "Fully Compliant",
    description:
      "Peppol-ready and EN 16931–aligned, ensuring 100% audit-proof e-invoicing for Belgium's 2026 mandate.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.set.src,
    title: "Audited & Verified",
    description:
      "Customer deployments are fully validated against Belgium’s structured e-invoicing standards and Peppol requirements.",
  },
   {
    img: AssetPath.invoicing.integrationAssets.cloud.src,
    title: "Flexibility in Deployment",
    description:
      "Choose Accqrate Cloud or deploy on your own server both fully compliant with Belgian e-invoicing rules.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.ring.src,
    title: "Rapid Implementation",
    description:
      "Go live in just 5 days with guaranteed Peppol integration and EN 16931-compliant invoice generation.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.set.src,
    title: "High Performance",
    description:
      "Process millions of structured UBL invoices daily with enterprise-grade performance.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.cal.src,
    title: "End-to-End Support",
    description:
      "We provide complete assistance for Belgian e-invoicing integration from onboarding to continuous compliance.",
  },
]

  },

   pl: {
  integrationHeading: "Flexible Methods for",
  integrationHighlight: "KSeF Integration",
  integrationDescription:
    "Adaptive integration options for fast, reliable, and compliant connectivity with Poland's KSeF platform.",

  featureHeading: "Enhanced",
  featureHighlight: "Electronic Invoicing",
  featureDescription:
    "Transform your invoicing with Accqrate's automated, KSeF-ready solution engineered for FA(3) XML compliance and secure large-scale processing.",
  ctaDescription:
    "We provide complete assistance for Polish KSeF e-invoicing integration from onboarding to continuous compliance.",

  // -------------------- FIRST ROW: 3 CARDS --------------------
  sections: [
    {
      img: AssetPath.invoicing.integrationAssets.integration1.src,
      title: "API-Based Integrations",
      desc:
        "Accqrate's APIs offer seamless integration of FA(3) XML invoices with KSeF, supporting full validation, submission, and retrieval for smooth end-to-end compliance.",
    },
    {
      img: AssetPath.invoicing.integrationAssets.integration2.src,
      title: "FTP/S-FTP Integrations",
      desc:
        "Accqrate enables secure file-based FA(3) XML workflows with automated responses and a closed feedback loop, keeping all your systems aligned with KSeF processing.",
    },
    {
      img: AssetPath.invoicing.integrationAssets.integration3.src,
      title: "Manual or Excel Uploads",
      desc:
        "For systems without direct integration, just upload your Excel files. Accqrate automatically maps your data into valid FA(3) XML for compliant KSeF submission.",
    },
  ],

  // -------------------- SECOND ROW: 6 FEATURE CARDS --------------------
  features: [
    {
      img: AssetPath.invoicing.integrationAssets.cal.src,
      title: "Fully Compliant",
      description:
        "A fully KSeF-compatible platform ensuring 100% audit-proof e-invoicing for Poland's mandatory framework.",
    },
    {
      img: AssetPath.invoicing.integrationAssets.set.src,
      title: "Audited & Verified",
      description:
        "Customer environments are validated end-to-end for accurate FA(3) XML generation and KSeF connectivity.",
    },
    {
      img: AssetPath.invoicing.integrationAssets.ring.src,
      title: "Flexibility in Deployment",
      description:
         "Deploy on Accqrate Cloud or your own infrastructure—both optimized for seamless KSeF operations.",
    },
    {
      img: AssetPath.invoicing.integrationAssets.cloud.src,
      title: "Rapid Implementation",
      description:
       "Go live in 5 days with guaranteed KSeF integration and FA(3) XML readiness.",
    },
    {
  img: AssetPath.invoicing.integrationAssets.set.src,
  title: "Packaged Solution",
  description:
    "Ready-made integrations for SAP, Oracle, Microsoft Dynamics, Infor, BAAN, SAGE, Custom ERPs/POS, and others.",
},
    {
    img: AssetPath.invoicing.integrationAssets.set.src,
    title: "High Performance",
    description:
      "Capable of handling millions of FA(3) XML invoices daily with robust throughput.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.cal.src,
    title: "End-to-End Support",
    description:
      "We deliver full support for your complete KSeF integration lifecycle from setup to continuous compliance",
  },

  ],
},

ae: {
  integrationHeading: "Flexible methods for",
  integrationHighlight: "UAE E-Invoicing",
  integrationDescription:
    "Adaptive, scalable approaches for seamless UAE PINT–compliant, Peppol-based e-invoicing under the FTA’s DCTCE framework.",
  featureHeading: "Enhanced",
  featureHighlight: "UAE E-Invoicing",
  featureDescription:
    "Streamline your invoicing with Accqrate’s automated, Peppol-ready, UAE PINT–compliant platform built for secure, scalable, FTA-aligned e-invoicing across the UAE.",
  ctaDescription:
    "We provide complete assistance for Belgian e-invoicing integration from onboarding to continuous compliance.",

sections: [
{
  img: AssetPath.invoicing.integrationAssets.integration1.src,
  title: "API-Based Integrations",
  desc: "Accqrate’s REST APIs enable real-time creation, validation, and exchange of UAE PINT-structured invoices through the UAE’s Peppol network. Achieve instant FTA alignment, automated status updates, and end-to-end connectivity across the UAE’s 5-corner model.",
},
{
  img: AssetPath.invoicing.integrationAssets.integration2.src,
  title: "FTP/S-FTP Integrations",
  desc: "Accqrate supports secure file-based integrations with automated processing and a complete feedback loop. Your ERP or POS systems remain fully synchronized with all Peppol transactions, FTA responses, and DCTCE validations—even in high-volume environments.",
},
{
  img: AssetPath.invoicing.integrationAssets.integration3.src,
  title: "Manual or Excel Uploads",
  desc: "No integration? No problem. Upload invoices via our Excel template, and Accqrate automatically converts them into UAE PINT-compliant, EN 16931–aligned structured invoices ready for Peppol exchange. Perfect for SMEs and multi-entity setups transitioning into UAE e-invoicing.",
},

],



features: [
{
  img: AssetPath.invoicing.integrationAssets.cal.src,
  title: "Fully Compliant",
  description:
    "Accqrate is UAE PINT–compliant and aligned with the FTA’s DCTCE 5-corner model, ensuring 100% audit-ready e-invoicing for the UAE mandate.",
},
{
  img: AssetPath.invoicing.integrationAssets.set.src,
  title: "Audited & Verified",
  description:
    "Customer deployments are validated against UAE PINT specifications, Peppol exchange rules, and FTA compliance requirements to guarantee seamless interoperability.",
},
 {
  img: AssetPath.invoicing.integrationAssets.cloud.src,
  title: "Flexibility in Deployment",
  description:
    "Choose Accqrate Cloud or deploy on your own infrastructure—both fully compliant with UAE e-invoicing, DCTCE workflow rules, and Peppol interoperability standards.",
},
{
  img: AssetPath.invoicing.integrationAssets.ring.src,
  title: "Rapid Implementation",
  description:
    "Go live in days with guaranteed UAE PINT onboarding, Peppol Access Point connectivity, and FTA-aligned structured invoice generation.",
},
{
  img: AssetPath.invoicing.integrationAssets.set.src,
  title: "Packaged Solution",
  description:
    "Accqrate delivers pre-built integrations for SAP, Oracle, Microsoft Dynamics, Sage, Infor, Odoo, custom ERPs/POS, and more—accelerating UAE e-invoicing readiness.",
},
{
  img: AssetPath.invoicing.integrationAssets.cal.src,
  title: "High Performance",
  description:
    "Process high-volume structured invoices with enterprise-grade performance across UAE’s Peppol network and DCTCE validation flows.",
},
{
  img: AssetPath.invoicing.integrationAssets.cal.src,
  title: "End-to-End Support",
  description:
    "From onboarding to continuous compliance, Accqrate provides full UAE e-invoicing implementation support, including Access Point setup, VAT mapping, and DCTCE workflow alignment.",
},
]

},

};
