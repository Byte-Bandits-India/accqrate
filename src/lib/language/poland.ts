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

const aboutTranslations: TranslationsMap = {
    // About page badge
    "About Accqrate:": { 
        ar: "" 
    },

    // About page heading for UAE
    "Advancing Digital Compliance & E-Invoicing for the UAE": { 
        ar: "" 
    },

    // About page description
    "Accqrate is a global E-Invoicing and digital compliance platform built to support the UAE's accelerating shift toward structured tax reporting, VAT transparency, and real-time financial governance.": { 
        ar: "" 
    },

    "As the UAE advances its digital tax infrastructure under the MoF and FTA, Accqrate provides a scalable, compliant, and future-ready foundation for businesses operating across the Emirates and the wider GCC. Backed by Iteron AG, Switzerland, Accqrate combines European engineering discipline with deep regional expertise, delivering secure architectures and proven execution across highly regulated markets in MENA, ASEAN, North American and Europe.": { 
        ar: "" 
    },

    "Accqrate In UAE": { 
        ar: "" 
    },

    "Built for UAE VAT & FTA Compliance": { 
        ar: "" 
    },

    "Accqrate delivers a UAE-ready e-invoicing and reporting engine aligned with FTA VAT regulations, audit requirements, and data retention mandates. The platform is designed to support structured invoice data, automated validations, and seamless reporting while remaining future-proof for upcoming real-time or continuous transaction control models.": { 
        ar: "" 
    },

    "Enterprise-Grade Architecture for the GCC": { 
        ar: "" 
    },

    "With Swiss-led engineering and large-scale deployments across 30+ industries, Accqrate supports complex, multi-entity organizations operating across the UAE, KSA, and the wider GCC ensuring consistency, governance, and operational control across borders.": { 
        ar: "" 
    },

    "Compliance Without Complexity": { 
        ar: "" 
    },

    "Accqrate combines automation, AI-driven checks, and standardized integrations to reduce manual effort, minimize compliance risk, and simplify VAT operations for organizations of every size.": { 
        ar: "" 
    },

    // Section 2 Title
    "Our Mission": { 
        ar: "" 
    },

    // Section 2 - Title 1
    "Modernizing the UAE's Digital Tax Ecosystem": { 
        ar: "" 
    },

    // Section 2 - Description 1
    "We empower businesses with technology that simplifies VAT compliance, invoice governance, audit readiness, and cross-entity financial reporting while aligning with the UAE's national digital transformation vision.": { 
        ar: "" 
    },

    // Section 2 - Title 2
    "Accelerating Digital Adoption": { 
        ar: "" 
    },

    // Section 2 - Description 2
    "Accqrate eliminates traditional ERP and compliance bottlenecks through rapid integrations, modular scalability, and enterprise-grade reliability allowing organizations to modernize without operational disruption.": { 
        ar: "" 
    },

    // Header
    "Our Journey": { 
        ar: "" 
    },

    // Subtitle
    "Accqrate's evolution is defined by a relentless focus on compliance excellence, deep integration capabilities, and forward-looking technology leadership.": { 
        ar: "" 
    },

    // Timeline Items
    
    // 2016
    "Iteron AG: High-End Technology Consultancy": { 
        ar: "" 
    },
    "Iteron AG begins operations in Switzerland, delivering advanced technology consulting across Europe and the Middle East, laying the foundation for enterprise-grade compliance platforms.": { 
        ar: "" 
    },

    // 2020
    "Accqrate Global Platform Initiated": { 
        ar: "" 
    },
    "Accqrate is launched as a unified ERP and E-Invoicing platform designed for high-compliance jurisdictions and multi-country enterprises.": { 
        ar: "" 
    },

    // 2021
    "Entry into Regulated Tax Ecosystems": { 
        ar: "" 
    },
    "Accqrate begins supporting VAT-regulated markets, enabling structured invoicing, audit-ready data capture, and enterprise compliance workflows.": { 
        ar: "" 
    },

    // 2022
    "Expansion of API-First Integrations": { 
        ar: "" 
    },
    "Accqrate strengthens its integration layer with certified connectors and toolkits for SAP, Oracle, Microsoft Dynamics and major ERP/POS platforms.": { 
        ar: "" 
    },

    // 2023
    "Enterprise Deployments Across MENA & ASEAN": { 
        ar: "" 
    },
    "Accqrate supports multi-entity enterprises processing millions of transactions monthly with assured regulatory compliance.": { 
        ar: "" 
    },

    // 2024
    "UAE & GCC Compliance Acceleration": { 
        ar: "" 
    },
    "Accqrate strengthens its UAE VAT engine, audit controls, and reporting frameworks supporting complex group structures and cross-border operations.": { 
        ar: "" 
    },

    // 2025
    "Enterprise Automation & AI-Driven Validation": { 
        ar: "" 
    },
    "Accqrate introduces advanced AI-based validation, anomaly detection, VAT reconciliation, and compliance intelligence to support future real-time reporting models.": { 
        ar: "" 
    },

    // Header
    "Expansion and Growth in the UAE": { 
        ar: "" 
    },

    // Subtitle
    "Accqrate’s expansion in the UAE represents a strategic milestone in our Middle East compliance roadmap.": { 
        ar: "" 
    },

    // Features
    // Feature 1
    "Compliance-Ready Architecture": { 
        ar: "" 
    },
    "Accqrate is engineered to align with UAE VAT laws, FTA audit requirements, and enterprise governance standards-ensuring long-term regulatory readiness.": { 
        ar: "" 
    },

    // Feature 2
    "Rapid Market Adoption": { 
        ar: "" 
    },
    "From high-growth SMEs to large conglomerates, UAE organizations rely on Accqrate for seamless integration with ERP, POS, and financial systems.": { 
        ar: "" 
    },

    // Feature 3
    "Flexible Integration Capabilities": { 
        ar: "" 
    },
    "• API push & pull \n• ERP adapters \n• POS integrations\n• Flat-file / Excel upload\n• Custom integration executables\n• Designed for legacy systems, hybrid environments, and complex multi-ERP landscapes": { 
        ar: "" 
    },

    // Feature 4
    "Purpose-Built for All Business Sizes": { 
        ar: "" 
    },
    "Accqrate supports:\n• SMEs seeking a streamlined, compliant invoicing solution\n• Large enterprises requiring multi-entity orchestration, VAT reconciliation, and centralized compliance control": { 
        ar: "" 
    },
    // Header
    "Our Team": { 
        ar: "" 
    },

    // Description
    "A global team of engineers, tax specialists, and solution architects operates across Switzerland, India, MENA, and Europe. Our UAE and GCC compliance experts bring deep knowledge of VAT regulations, enterprise finance operations, and ERP integrations ensuring every deployment is accurate, predictable, and aligned with FTA requirements.": { 
        ar: "" 
    },
    // CTA Section content
    
    // Title
    "Save time. Reduce risk. Stay compliant.": { 
        ar: "" 
    },

    // Description 1
    "Want the latest updates on UAE VAT regulations, upcoming e-invoicing frameworks, and Accqrate product innovations?": { 
        ar: "" 
    },

    // Description 2
    "Subscribe to our newsletter and stay ahead delivered straight to your inbox.": { 
        ar: "" 
    },

    // Button 1
    "Get Peppol Compliance Demo": { 
        ar: "" 
    },

    // Button 2
    "Subscribe for Updates": { 
        ar: "" 
    },

    // Button 3
    "Talk to Sales": { 
        ar: "" 
    },
    "Get in touch with us for more information.": {
    ar: ""
  },

  "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.": {
    ar: ""
  },

  "Our team is here to help": {
    ar: ""
  },

  "Call Us": {
    ar: ""
  },

  "Call our team Monday - Friday from 9:00 AM to 5:00 PM": {
    ar: ""
  },

  "Our": {
    ar: ""
  },

  "Office": {
    ar: ""
  },

  "Locations": {
    ar: ""
  },

  "SOCIAL MEDIA": {
    ar: ""
  },

  "E-INVOICING": {
    ar: ""
  },

  "Buy E-invoicing Software": {
    ar: ""
  },

  "Seeking cutting-edge E-invoicing software ready for UAE? Let us find the perfect pricing fit for you.": {
    ar: ""
  },

  "Chat With Us": {
    ar: ""
  },

  "INTEGRATION": {
    ar: ""
  },

  "Integrate your ERP with compliance systems": {
    ar: ""
  },

  "Peppol Ready e-invoing? Our experts have got your back.": {
    ar: ""
  },

  "Talk to an Expert": {
    ar: ""
  },

  "PARTNERS": {
    ar: ""
  },

  "Become our Trusted Partner": {
    ar: ""
  },

  "Eager to streamline E-invoicing Compliance in UAE for your clientele and expand your horizons? Let us collaborate.": {
    ar: ""
  },

  "Partner with Us": {
    ar: ""
  }
};

// Minimal runtime language state and API
export const currentLang = { lang: 'en' as 'en' | 'ar' };

export const setLanguage = (l: 'en' | 'ar' | string) => {
    currentLang.lang = (l as any) || 'en';
};

export const t = (text: string): string => {
    if (currentLang.lang === 'en') return text;
    const translation = (aboutTranslations as any)[text];
    return translation && translation.ar && translation.ar.trim() !== '' ? translation.ar : text;
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
            const translation = aboutTranslations[text];
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
