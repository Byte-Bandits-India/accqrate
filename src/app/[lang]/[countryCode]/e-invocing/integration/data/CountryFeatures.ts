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
  "Streamline your invoicing with Accqrate's automated, Peppol-ready, EN 16931–compliant platform built for secure, scalable European operations.",
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
        title: "Phase 1 & Phase 2 ready",
        description:
          "Supports all ZATCA phases with auto XML generation and validation.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.ring.src,
        title: "Approved e-invoices",
        description: "Real-time reporting with unified QR code.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.cloud.src,
        title: "Cloud or On-prem",
        description: "Flexible deployment based on business needs.",
      },
    ],
  },

  be: {
    integrationHeading: "Flexible methods for",
    integrationHighlight: "Belgium E-Invoicing",
    integrationDescription:
      "Adaptive approaches for seamless ZATCA compliance and integration solutions.",
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
    img: AssetPath.invoicing.integrationAssets.ring.src,
    title: "Rapid Implementation",
    description:
      "Go live in just 5 days with guaranteed Peppol integration and EN 16931-compliant invoice generation.",
  },
  {
    img: AssetPath.invoicing.integrationAssets.cloud.src,
    title: "High Performance",
    description:
      "Process millions of structured UBL invoices daily with enterprise-grade performance.",
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
         "Go live in 5 days with guaranteed KSeF integration and FA(3) XML readiness.",
    },
    {
      img: AssetPath.invoicing.integrationAssets.cloud.src,
      title: "Rapid Implementation",
      description:
       "Deploy on Accqrate Cloud or your own infrastructure — both optimized for seamless KSeF operations.",
    },

  ],
},

};
