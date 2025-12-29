import AssetPath from "@/AssetPath/AssetPath";
import { meanBy } from "lodash";
import { StaticImageData } from "next/image";

export interface CountryContent {
  title: string;
  titlend : string;
  highlight: string;
  subtitle: string;
  boxTitle: string;
  boxSubtitle: string;
  boxImage: string;
  highlightColor: string;
  rightImage?: string | StaticImageData;
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
    highlightColor: "#1c2041",
    rightImage: AssetPath.invoicing.saHero.src
  },

  be: {
    title: "Integrate Your Existing ERPs, POS & Business Applications With Belgium's",
    titlend: "",
    highlight: "Peppol Network",
    subtitle: "PEPPOL E-INVOICING INTEGRATION",
    boxTitle: "A Peppol-Ready EN 16931-Compliant Solution",
    boxSubtitle: "100% Compliance For Belgium's 2026  B2B E-Invoicing Mandate",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#1c2041",
    rightImage: AssetPath.integration.invoice.src
  },

  ae: {
    title: "Integrate Your Existing",
    titlend: "",
    highlight: "ERPs, POS & Applications With FTA (UAE PINT)",
    subtitle: "FTA E-INVOICING INTEGRATION",
    boxTitle: "A Peppol Certified - UAE PINT, 5 Corner Model Ready Solution",
    boxSubtitle: "100% Compliance for UAE's E-Invoicing.",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#1c2041",
    rightImage: AssetPath.integration.uaeHero.src
  },

  pl: {
    title: "Connect Your ERPs, POS & Applications Seamlessly With ",
    titlend: "",
    highlight: "KSeF",
    subtitle: "Peppol E-Invoicing Integration",
    boxTitle: "A Fully KSeF-Compatible, FA(3) XML-Ready Platform",
    boxSubtitle: "100% Compliance For Poland's Mandatory E-Invoicing Framework",
    boxImage: AssetPath.integration.peppol.src,
    highlightColor: "#1c2041",
    rightImage: AssetPath.integration.invoice.src
  },
    ma: {
    title: "Integrate Your Existing ERPs, POS & Applications With",
    titlend: "",
    highlight: "LHDN",
    subtitle: "E-Invoicing Integration",
    boxTitle: "A LHDN-Approved Solution Provider",
    boxSubtitle: "100% LHDN Compliance: Malaysia Based Solution For Malaysian Businesses",
    boxImage: AssetPath.integration.maLHDN.src,
    highlightColor: "#1c2041",
    rightImage: AssetPath.integration.maint.src
  },
  jd: {
    title: "Integrate Your Existing ERPs, POS & Applications With",
    titlend: "",
    highlight: "ISTD",
    subtitle: "E-Invoicing Integration",
    boxTitle: "A ISTD-Approved Solution Provider",
    boxSubtitle: "100% ISTD Compliance: Jordan Based Solution For Jordan Businesses",
    boxImage: AssetPath.integration.joISTD.src,
    highlightColor: "#1c2041",
     rightImage: AssetPath.invoicing.saHero.src
  },
    mu: {
    title: "Integrate Your Existing ERPs, POS & Applications With",
    titlend: "",
    highlight: "MRA",
    subtitle: "E-Invoicing Integration",
    boxTitle: "A MRA-Approved Solution Provider",
    boxSubtitle: "100% MRA Compliance: Mauritius Based Solution For Mauritius Businesses",
    boxImage: AssetPath.integration.muMRA.src,
    highlightColor: "#1c2041",
     rightImage: AssetPath.invoicing.saHero.src
  },
};
