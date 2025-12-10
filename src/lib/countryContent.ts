// utils/countryContent.ts
import AssetPath from "@/AssetPath/AssetPath";
import { StaticImageData } from "next/image";

export interface Card {
    icon: string | StaticImageData;
    title: string;
    description: string;
    color: string;
    link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  avatar: string | StaticImageData;
  bg: string | StaticImageData;
}

export interface CountryContent {
  backgroundImage: string | StaticImageData;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroTagline: string;
  contactInfo: {
    phone: string;
    salesText: string;
  };
  cards: Card[];
  testimonials?: Testimonial[];
  whyAccqrateTitle?: string;
  whyAccqrateSubtitle?: string;
  whyAccqrateFeatures?: Array<{
    img: string | StaticImageData;
    title: string;
    sub?: string;
    description: string;
  }>;
  aiCopilotTitle?: string;
  aiCopilotSubtitle?: string;
  aiCopilotDescription?: string;
  aiCopilotFeatures?: Array<{
    title: string;
    description: string;
  }>;
}

// Default content template for most countries
const defaultContent: CountryContent = {
  backgroundImage: AssetPath.homeBackgrounds.saudi,
  heroTitle: "Accqrate E-Invoicing: ZAPTCHA-Ready. VAT-Compliant. Built for Enterprises.",
  heroSubtitle: "E-invoicing Solution for Saudi",
  heroDescription: "Enable end-to-end electronic invoicing across your ERP, accounting, and billing systems with a fully compliant, zaptcha-certified platform tailored for Belgian businesses. Automate creation, validation, transmission, and archiving of e-invoices with complete confidence.",
  heroTagline: "ZAPTCHA Member . GDPR . ISO 27001",
  whyAccqrateTitle: "Why Accqrate?",
  whyAccqrateSubtitle: "From compliance to automation, Accqrate ensures a seamless ZAPTCHA e-invoicing experience.",
  whyAccqrateFeatures: [
    {
      img: AssetPath.home.feature1,
      title: "One platform.",
      description: "All modules run on a single, integrated data model.",
      sub: " Zero silos."
    },
    {
      img: AssetPath.home.feature2,
      title: "Enterprise‑grade.",
      description: "Security, scalability and performance proven across 30+ industries.",
      sub: ""
    },
    {
      img: AssetPath.home.feature3,
      title: "AI, everywhere.",
      description: "Accelera, our AI copilot ,accelerates routine work, insights and decisions.",
      sub: ""
    },
    {
      img: AssetPath.home.feature4,
      title: "Fast time‑to‑value.",
      description: "Lightning‑fast UI, one‑click installs, and low‑disruption migrations from SAP/Microsoft/Oracle or disjointed tools.",
      sub: ""
    },
    {
      img: AssetPath.home.feature5,
      title: "Built‑in Global compliance:",
      description: "Connect ERP/POS to tax authorities; from ZATCA Phase II to PEPPOL standards.",
      sub: ""
    },
    {
      img: AssetPath.home.feature6,
      title: "Deploy your way.",
      description: "Cloud (managed, subscription) or On‑Prem (full control over infra & data).",
      sub: ""
    }
  ],
  contactInfo: { phone: "+966 123 456 789", salesText: "Contact Sales KSA" },
  aiCopilotTitle: "Accelerate Your AI Copilot",
  aiCopilotSubtitle: "Work faster and decide smarter with AI embedded across the suite.",
  aiCopilotDescription: "Accelera, our AI copilot, transforms routine work into strategic insights.",
  aiCopilotFeatures: [
    {
      title: "Natural-language actions",
      description: "Ask, \"Show last month's receivables by region\""
    },
    {
      title: "Automations",
      description: "Generate e-invoices, trigger approvals"
    },
    {
      title: "Insight to action",
      description: "Spot anomalies, forecast demand"
    },
    {
      title: "Assistive UX",
      description: "Contextual help & guided workflows"
    }
  ],
  cards: [
    {
      icon: AssetPath.cards.crm,
      title: "CRM",
      description: "Automate leads. Boost conversions.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/crm",
    },
    {
      icon: AssetPath.cards.books,
      title: "Books",
      description: "Smart accounting made simple.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/books",
    },
    {
      icon: AssetPath.cards.people,
      title: "People",
      description: "Complete HR & payroll solution",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "SA/business/people",
    },
    {
      icon: AssetPath.cards.retail,
      title: "Retail",
      description: "All-in-one smart retail POS.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/retail",
    },
    {
      icon: AssetPath.cards.factory,
      title: "Factory",
      description: "Optimize full manufacturing process.",
      color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
      link: "SA/business/factory",
    },
    {
      icon: AssetPath.cards.einvoicing,
      title: "E‑Invoicing",
      description: "Seamless, compliant tax integration.",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "SA/business/e-invoicing-standalone",
    }
  ],
  testimonials: [
    {
      quote: "Ali - Construction Company",
      name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.ali.src,
      bg: AssetPath.landingpage.blue.src
    },
    {
      quote: "Al Laith, UAE Global Health & Beauty Co.",
      name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.uae.src,
      bg: AssetPath.landingpage.blue.src
    },
    {
      quote: "Wail - Jonex",
      name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.wail.src,
      bg: AssetPath.landingpage.blue.src
    }
  ]
};

// Special content for Belgium
const belgiumContent: CountryContent = {
  backgroundImage: AssetPath.homeBackgrounds.jordan,
  heroTitle: "PEPPOL-Ready. VAT-Compliant. Built For Enterprise.",
  heroSubtitle: "E-invoicing Solution for Belgium",
  heroDescription: "Enable end-to-end electronic invoicing across your ERP, accounting, and billing systems with a fully compliant, PEPPOL-certified platform tailored for Belgian businesses. Automate creation, validation, transmission, and archiving of e-invoices with complete confidence.",
  heroTagline: "Complaint . Seamless . Secure",
  whyAccqrateTitle: "Why Accqrate?",
  whyAccqrateSubtitle: "From compliance to automation, Accqrate ensures a seamless PEPPOL e-invoicing experience.",
  whyAccqrateFeatures: [
    {
      img: AssetPath.home.feature1,
      title: "One Platform.",
      description: "Connect Multiple ERP or POS into one unified platform for E-invoicing.",
      sub: " Harmonised Data."
    },
    {
      img: AssetPath.home.feature2,
      title: "Enterprise‑grade.",
      description: "Security, scalability and performance proven across 30+ industries.",
      sub: ""
    },
    {
      img: AssetPath.home.feature3,
      title: "Deploy your way.",
      description: "Cloud (managed, subscription) or On‑Prem (full control over infra & data).",
      sub: ""
    },
    {
      img: AssetPath.home.feature4,
      title: "AI, everywhere.",
      description: "Accelera, our AI copilot , accelerates routine work, insights and decisions.",
      sub: ""
    },
    {
      img: AssetPath.home.feature5,
      title: "Fast time‑to‑value.",
      description: "Lightning‑fast UI, one‑click installs, and low‑disruption migrations from SAP/Microsoft/Oracle or disjointed tools.",
      sub: ""
    },
    {
      img: AssetPath.home.feature6,
      title: "Built‑in Global compliance:",
      description: "Connect ERP/POS to tax authorities; from Direct to PEPPOL based Integration.",
      sub: ""
    }
  ],
  contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
  cards: [
    {
      icon: AssetPath.cards.peppol,
      title: "PEPPOL Member",
      description: "Certified AP Provider & SMP",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/crm",
    },
    {
      icon: AssetPath.cards.gdpr,
      title: "GDPR Complaint",
      description: "Secure, Transparent, Responsible",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/books",
    },
    {
      icon: AssetPath.cards.iso,
      title: "ISO 27001 Certified",
      description: "Robust Security. Reliable Governance",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "SA/business/people",
    },
  ],
  testimonials: [
    {
      quote: "Ali - Construction Company",
      name: "Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.ali.src,
      bg: AssetPath.landingpage.blue.src
    },
    {
      quote: "Al Laith, UAE Global Health & Beauty Co.",
      name: "Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.uae.src,
      bg: AssetPath.landingpage.blue.src
    },
    {
      quote: "Wail - Jonex",
      name: "Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.wail.src,
      bg: AssetPath.landingpage.blue.src
    }
  ]
};

// Special content for Poland (same as Belgium in your example)
const polandContent: CountryContent = {
  backgroundImage: AssetPath.homeBackgrounds.jordan,
  heroTitle: "Accqrate E-Invoicing: PEPPOL-Ready. VAT-Compliant. Built for Enterprises.",
  heroSubtitle: "E-invoicing Solution for Poland",
  heroDescription: "Enable end-to-end electronic invoicing across your ERP, accounting, and billing systems with a fully compliant, PEPPOL-certified platform tailored for Polish businesses. Automate creation, validation, transmission, and archiving of e-invoices with complete confidence.",
  heroTagline: "ZAPTCHA Member . GDPR . ISO 27001",
  whyAccqrateTitle: "Why Accqrate?",
  whyAccqrateSubtitle: "From compliance to automation, Accqrate ensures a seamless PEPPOL e-invoicing experience for Poland.",
  whyAccqrateFeatures: [
    {
      img: AssetPath.home.feature1,
      title: "One platform.",
      description: "All modules run on a single, integrated data model.",
      sub: " Zero silos."
    },
    {
      img: AssetPath.home.feature2,
      title: "Enterprise‑grade.",
      description: "Security, scalability and performance proven across 30+ industries.",
      sub: ""
    },
    {
      img: AssetPath.home.feature3,
      title: "AI, everywhere.",
      description: "Accelera, our AI copilot ,accelerates routine work, insights and decisions.",
      sub: ""
    },
    {
      img: AssetPath.home.feature4,
      title: "Fast time‑to‑value.",
      description: "Lightning‑fast UI, one‑click installs, and low‑disruption migrations from SAP/Microsoft/Oracle or disjointed tools.",
      sub: ""
    },
    {
      img: AssetPath.home.feature5,
      title: "Built‑in Global compliance:",
      description: "Connect ERP/POS to tax authorities; from ZATCA Phase II to PEPPOL standards.",
      sub: ""
    },
    {
      img: AssetPath.home.feature6,
      title: "Deploy your way.",
      description: "Cloud (managed, subscription) or On‑Prem (full control over infra & data).",
      sub: ""
    }
  ],
  contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
  cards: [
    {
      icon: AssetPath.cards.crm,
      title: "CRM",
      description: "Automate leads. Boost conversions.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/crm",
    },
    {
      icon: AssetPath.cards.books,
      title: "Books",
      description: "Smart accounting made simple.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/books",
    },
    {
      icon: AssetPath.cards.people,
      title: "People",
      description: "Complete HR & payroll solution",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "SA/business/people",
    },
    {
      icon: AssetPath.cards.retail,
      title: "Retail",
      description: "All-in-one smart retail POS.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "SA/business/retail",
    },
    {
      icon: AssetPath.cards.factory,
      title: "Factory",
      description: "Optimize full manufacturing process.",
      color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
      link: "SA/business/factory",
    },
    {
      icon: AssetPath.cards.einvoicing,
      title: "E‑Invoicing",
      description: "Seamless, compliant tax integration.",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "SA/business/e-invoicing-standalone",
    }
  ],
  testimonials: [
    {
      quote: "Ali - Construction Company",
      name: "Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.ali.src,
      bg: AssetPath.landingpage.blue.src
    },
    {
      quote: "Al Laith, UAE Global Health & Beauty Co.",
      name: "Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.uae.src,
      bg: AssetPath.landingpage.blue.src
    },
    {
      quote: "Wail - Jonex",
      name: "Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.",
      avatar: AssetPath.landingpage.wail.src,
      bg: AssetPath.landingpage.blue.src
    }
  ]
};

export const countryContentMap: Record<string, CountryContent> = {
  // All these countries use the default Saudi content
  SA: defaultContent,
  AE: defaultContent,
  OM: defaultContent,
  BH: defaultContent,
  MA: defaultContent,
  MU: defaultContent,
  JD: defaultContent,
  
  // Special cases with different content
  BE: belgiumContent,
  PL: polandContent
};

export const getCountryContent = (countryCode: string): CountryContent => {
  return countryContentMap[countryCode] || defaultContent;
};