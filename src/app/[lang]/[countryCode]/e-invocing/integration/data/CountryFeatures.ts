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

  sections: IntegrationSectionItem[];
  features: FeatureItem[];
}

export const COUNTRY_FEATURES: Record<string, CountryFeatures> = {
  sa: {
    integrationHeading: "Flexible methods for",
    integrationHighlight: "ZATCA",
    integrationDescription:
      "Adaptive approaches for seamless ZATCA compliance and integration solutions.",

    sections: [
      {
        img: AssetPath.invoicing.integrationAssets.integration1.src,
        title: "API based integrations",
        desc: "Accqrate APIs give you the flexibility to connect your tax or simplified invoice with ZATCA seamlessly",
      },
      {
        img: AssetPath.invoicing.integrationAssets.integration2.src,
        title: "FTP/SFTP integrations",
        desc: "Accqrate supports file based invoicing integration with closed feedback loop to your source system",
      },
      {
        img: AssetPath.invoicing.integrationAssets.integration3.src,
        title: "Manual or excel uploads",
        desc: "If your application is disintegrated, simply download and upload excel. Format mappings done",
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
    integrationHighlight: "Peppol",
    integrationDescription:
      "Adaptive integration options to meet Belgium's Peppol & EN 16931 e-invoicing standards.",

    sections: [
      {
        img: AssetPath.invoicing.integrationAssets.integration1.src,
        title: "API based integrations",
        desc: "Connect your ERP/POS with Peppol-compliant e-invoicing seamlessly.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.integration2.src,
        title: "SFTP/Automated exchange",
        desc: "Fully automated file-based Peppol integration.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.integration3.src,
        title: "Manual or excel uploads",
        desc: "Upload EN16931-compliant invoices effortlessly.",
      },
    ],

    features: [
      {
        img: AssetPath.invoicing.integrationAssets.cal.src,
        title: "EN 16931 compliant",
        description: "Fully aligned with Belgium 2026 e-invoicing mandate.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.set.src,
        title: "Peppol BIS 3.0",
        description: "Supports standard Peppol invoice models.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.ring.src,
        title: "Certified Network Access",
        description: "Send invoices through the Peppol Network.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.cloud.src,
        title: "Cloud-based",
        description: "Secure, scalable and fast integrations.",
      },
    ],
  },

   pl: {
    integrationHeading: "Flexible methods for",
    integrationHighlight: "Peppol",
    integrationDescription:
      "Adaptive integration options to meet Belgium's Peppol & EN 16931 e-invoicing standards.",

    sections: [
      {
        img: AssetPath.invoicing.integrationAssets.integration1.src,
        title: "API based integrations",
        desc: "Connect your ERP/POS with Peppol-compliant e-invoicing seamlessly.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.integration2.src,
        title: "SFTP/Automated exchange",
        desc: "Fully automated file-based Peppol integration.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.integration3.src,
        title: "Manual or excel uploads",
        desc: "Upload EN16931-compliant invoices effortlessly.",
      },
    ],

    features: [
      {
        img: AssetPath.invoicing.integrationAssets.cal.src,
        title: "EN 16931 compliant",
        description: "Fully aligned with Belgium 2026 e-invoicing mandate.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.set.src,
        title: "Peppol BIS 3.0",
        description: "Supports standard Peppol invoice models.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.ring.src,
        title: "Certified Network Access",
        description: "Send invoices through the Peppol Network.",
      },
      {
        img: AssetPath.invoicing.integrationAssets.cloud.src,
        title: "Cloud-based",
        description: "Secure, scalable and fast integrations.",
      },
    ],
  },
};
