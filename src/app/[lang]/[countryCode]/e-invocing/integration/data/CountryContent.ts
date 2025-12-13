import AssetPath from "@/AssetPath/AssetPath";

export interface CountryContent {
  title: string;
  titlend : string;
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
    titlend: "",
    highlight: "ZATCA",
    subtitle: "E-Invoicing Integration",
    boxTitle: "A ZATCA-Approved Solution Provider",
    boxSubtitle: "100% ZATCA Compliance: Saudi Based Solution For Saudi Businesses",
    boxImage: AssetPath.invoicing.integrationAssets.zatca.src,
    highlightColor: "#448E32"
  },

  be: {
    title: "Integrate Your Existing ERPs, POS & Business Applications With Belgium's",
    titlend: "",
    highlight: "Peppol Network",
    subtitle: "PEPPOL E-INVOICING INTEGRATION",
    boxTitle: "A Peppol-Ready EN 16931-Compliant Solution",
    boxSubtitle: "100% Compliance For Belgium's 2026  B2B E-Invoicing Mandate",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#448E32"
  },

  ae: {
    title: "Integrate Your Existing ",
    titlend: "ERPs, POS",
    highlight: "& Applications With FTA (UAE PINT)",
    subtitle: "FTA E-INVOICING INTEGRATION",
    boxTitle: "A Peppol Certified - UAE PINT, 5 Corner Model Ready Solution",
    boxSubtitle: "100% Compliance for UAE's E-Invoicing.",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#448E32"
  },

  pl: {
    title: "Integrate Your Existing ERPs, POS & Business Applications With Belgium's",
    titlend: "",
    highlight: "KSeF",
    subtitle: "Peppol E-Invoicing Integration",
    boxTitle: "A Fully KSeF-Compatible, FA(3) XML-Ready Platform",
    boxSubtitle: "100% Compliance For Poland's Mandatory E-Invoicing Framework",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#448E32"
  },


};
