import AssetPath from "@/AssetPath/AssetPath";

export interface CountryContent {
  title: string;
  highlight: string;
  subtitle: string;
  boxTitle: string;
  boxSubtitle: string;
  boxImage: string;
  highlightColor: string;
}

export const COUNTRY_CONTENT: Record<string, CountryContent> = {
  sa: {
    title: "Integrate Your Existing ERPs, POS & Applications With",
    highlight: "ZATCA",
    subtitle: "E-Invoicing Integration",
    boxTitle: "A ZATCA-Approved Solution",
    boxSubtitle: "100% ZATCA Compliance For Saudi Businesses",
    boxImage: AssetPath.invoicing.integrationAssets.zatca.src,
    highlightColor: "#448E32"
  },

  be: {
    title: "Integrate Your Existing ERPs, POS & Applications With Belgium's",
    highlight: "Peppol Network",
    subtitle: "Peppol E-Invoicing Integration",
    boxTitle: "A Peppol-Ready EN 16931-Compliant Solution",
    boxSubtitle: "100% Compliance For Belgium's 2026 E-Invoicing Mandate",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#448E32"
  },

  pl: {
    title: "Integrate Your Existing ERPs, POS & Applications With Belgium's",
    highlight: "Peppol Network",
    subtitle: "Peppol E-Invoicing Integration",
    boxTitle: "A Peppol-Ready EN 16931-Compliant Solution",
    boxSubtitle: "100% Compliance For Belgium's 2026 E-Invoicing Mandate",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#448E32"
  },


};
