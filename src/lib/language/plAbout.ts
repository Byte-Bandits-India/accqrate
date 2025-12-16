'use client';

import { useCountry } from "@/contexts/CountryContext";
import { ReactNode } from 'react';

interface TProps {
    children: ReactNode;
}

// Define translation structure
interface TranslationEntry {
    pl: string;
}

// Type for the translations object
interface TranslationsMap {
    [key: string]: TranslationEntry;
}

const aboutTranslations: TranslationsMap = {
    // ============ SECTION 1 ============
    
    // About page badge
    "About Accqrate:": { 
        "pl": "" 
    },

    // About page heading for Poland
    "Advancing Digital Compliance & E-Invoicing for Poland and the EU": { 
        "pl": "" 
    },

    // About page description part 1
    "Accqrate is a global E-Invoicing platform built to meet the digital tax and reporting modernization sweeping across the EU.": { 
        "pl": "" 
    },

    // About page description part 2
    "From Poland's PEPPOL-based B2B mandate to ViDA-driven cross-border reporting, Accqrate delivers a scalable, compliant, and future-ready foundation for enterprises operating across Poland and broader EU markets.\n\nBacked by Iteron AG, Switzerland, Accqrate brings European engineering standards, secure architectures, and a decade-long expertise in digital tax transformations across regulated geographies.": { 
        "pl": "" 
    },

    // ============ SECTION 2 ============
    
    // Section 1 Title
    "Accqrate In Poland": { 
        "pl": "" 
    },

    // Section 1 - Title 1
    "Built for Poland's PEPPOL & FPS Finance Mandate": { 
        "pl": "" 
    },

    // Section 1 - Description 1
    "Accqrate brings a Poland-ready E-Invoicing engine that follows PEPPOL BIS standards, supports workflows aligned with Mercurius, and remains continuously updated with evolving FPS Finance requirements.": { 
        "pl": "" 
    },

    // Section 1 - Title 2
    "European Precision, Global Scalability": { 
        "pl": "" 
    },

    // Section 1 - Description 2
    "With Swiss-led engineering and global deployment experience across 30+ sectors, Accqrate delivers an enterprise-grade platform capable of handling Poland's upcoming B2B rollout and multi-country operations inside and outside the EU.": { 
        "pl": "" 
    },

    // Section 1 - Title 3
    "Compliance Made Simple": { 
        "pl": "" 
    },

    // Section 1 - Description 3
    "Accqrate combines automation, AI-driven validations, and standardized interoperability to make compliance intuitive, predictable, and scalable for companies of all sizes.": { 
        "pl": "" 
    },

    // Section 2 Title
    "Our Mission": { 
        "pl": "" 
    },

    // Section 2 - Title 1
    "Modernizing Europe's E-Invoicing & Digital Tax Landscape": { 
        "pl": "" 
    },

    // Section 2 - Description 1
    "We empower businesses with technology that simplifies PEPPOL connectivity, digital reporting, VAT oversight, and multi-entity governance.": { 
        "pl": "" 
    },

    // Section 2 - Title 2
    "Accelerating Digital Adoption": { 
        "pl": "" 
    },

    // Section 2 - Description 2
    "Accqrate eliminates the traditional complexities of ERP and e-invoicing rollouts with quick integrations, easy scalability, and enterprise-grade reliability.": { 
        "pl": "" 
    },

    // ============ SECTION 3 ============
    
    // Header
    "Our Journey": { 
        "pl": "" 
    },

    // Subtitle
    "Accqrate's evolution is defined by a relentless focus on compliance excellence, deep integration capabilities, and forward-looking technology leadership.": { 
        "pl": "" 
    },

    // Timeline Items
    
    // 2016
    "Iteron AG: High-End Technology Consultancy": { 
        "pl": "" 
    },
    "Iteron AG begins operations in Switzerland, delivering advanced technology consulting across Europe. From enterprise SaaS to blockchain-based solutions, the company lays the groundwork for the modern digital compliance and e-invoicing platforms that would follow.": { 
        "pl": "" 
    },

    // 2020
    "Accqrate Global Platform Initiated": { 
        "pl": "" 
    },
    "Accqrate emerges as a unified ERP and E-Invoicing platform engineered for high-compliance jurisdictions, multi-country operations, and enterprise-level digital transformation.": { 
        "pl": "" 
    },

    // 2021
    "E-Invoicing Launch Across Regulated Markets": { 
        "pl": "" 
    },
    "Accqrate's engine is launched in the Kingdom of Belgium, establishing direct integration with PEPPOL and marking the platform's entry into regulated tax ecosystems.": { 
        "pl": "" 
    },

    // 2022
    "Expansion of API-First Integrations": { 
        "pl": "" 
    },
    "Accqrate strengthens its integration layer with certified connectors and toolkits for SAP, Oracle, Microsoft Dynamics and major ERP/POS platforms.": { 
        "pl": "" 
    },

    // 2023
    "MNC Deployments Across MENA, ASEAN & EU": { 
        "pl": "" 
    },
    "Accqrate supports multi-entity deployments, processing millions of monthly transactions across global enterprises with assured compliance.": { 
        "pl": "" 
    },

    // 2024
    "Poland & EU Compliance Acceleration": { 
        "pl": "" 
    },
    "Accqrate launches its Poland PEPPOL engine with Mercurius interoperability and achieves full readiness for ViDA-aligned digital reporting.": { 
        "pl": "" 
    },

    // 2025
    "Enterprise-Grade Automation & AI Validation Engine": { 
        "pl": "" 
    },
    "Accqrate introduces AccelerAI, a sophisticated automation layer for real-time compliance checks, anomaly detection, VAT reconciliation, and cross-border reporting.": { 
        "pl": "" 
    },

    // ============ SECTION 4 ============
    
    // Header
    "Expansion and Growth in EU": { 
        "pl": "" 
    },

    // Subtitle
    "Accqrate has experienced remarkable growth and innovation, marked by significant achievements:": { 
        "pl": "" 
    },

    // Features
    // Feature 1
    "Expansion and Growth Across the EU": { 
        "pl": "" 
    },
    "Accqrate's entry into Belgium marks a pivotal expansion in our European compliance strategy:": { 
        "pl": "" 
    },

    // Feature 2
    "PEPPOL-First Architecture": { 
        "pl": "" 
    },
    "Accqrate is engineered to operate natively on PEPPOL standards, guaranteeing secure, structured, and interoperable invoice exchange.": { 
        "pl": "" 
    },

    // Feature 3
    "Rapid Market Adoption": { 
        "pl": "" 
    },
    "From single-entity SMEs to multi-country enterprises, Belgian organizations increasingly rely on Accqrate for smooth integration with their ERP, POS, or invoicing systems.": { 
        "pl": "" 
    },

    // Feature 4
    "Flexible Integration Capabilities": { 
        "pl": "" 
    },
    "• API push & pull\n• PEPPOL connectivity\n• ERP adapters\n• Flat-file / Excel upload\n• Custom integration executables\n• Designed to support everything from legacy on-prem systems to complex multi-ERP landscapes": { 
        "pl": "" 
    },

    // Feature 5
    "Purpose-Built for All Business Sizes": { 
        "pl": "" 
    },
    "Accqrate supports both:\n• SMEs needing a lightweight, standalone e-invoicing solution\n• Large enterprises requiring multi-entity orchestration, VAT reconciliation, and cross-border compliance": { 
        "pl": "" 
    },

    // ============ SECTION 5 ============
    
    // Header
    "Our Team": { 
        "pl": "" 
    },

    // Description
    "A global team of engineers, tax experts, and solution architects operates across Switzerland, India, MENA, and Europe. Our Poland and EU compliance specialists bring deep knowledge of PEPPOL frameworks, VAT ecosystems, and ERP integrations, ensuring every deployment is accurate, predictable, and aligned with FPS Finance and EU standards.": { 
        "pl": "" 
    },

    // ============ CTA SECTION ============
    
    // Title
    "Save time, save money": { 
        "pl": "" 
    },

    // Description 1
    "Want the latest on Poland's e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?": { 
        "pl": "" 
    },

    // Description 2
    "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.": { 
        "pl": "" 
    },

    // Button 1
    "Get KSeF Compliance Demo": { 
        "pl": "" 
    },

    // Button 2
    "Subscribe for Updates": { 
        "pl": "" 
    },

    // Button 3
    "Talk to Sales": { 
        "pl": "" 
    }
};

// Minimal runtime language state and API
export const currentLang = { lang: 'en' as 'en' | 'pl' };

export const setLanguage = (l: 'en' | 'pl' | string) => {
    currentLang.lang = (l as any) || 'en';
};

export const t = (text: string): string => {
    if (currentLang.lang === 'en') return text;
    const translation = (aboutTranslations as any)[text];
    return translation && translation.pl && translation.pl.trim() !== '' ? translation.pl : text;
};

export default function T({ children }: TProps): ReactNode {
    const { selectedLanguage } = useCountry();
    const translateText = (text: string): string => {
        // Early return for English
        if (selectedLanguage.code === 'en') {
            return text;
        }
        
        // For Polish, try to find translation
        if (selectedLanguage.code === 'pl') {
            const translation = aboutTranslations[text];
            // Check if translation exists and is not empty
            if (translation && translation.pl && translation.pl.trim() !== "") {
                return translation.pl;
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