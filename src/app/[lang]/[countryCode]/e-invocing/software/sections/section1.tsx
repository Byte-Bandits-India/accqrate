"use client";
import React from 'react'
import FadeUp from '@/Components/ui/FadeUp'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { ContactModal } from "@/Components/ContactModal";
import { useCountryContent } from "@/Hooks/useCountryContent";
import { useParams } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import belgiumInvoiceHero from "@/Assets/images/invoicing/BE_invoice_mandate.webp";
import BE_invoice from "@/Assets/images/invoicing/BE_invoice.webp";
import taxInvoiceMultiple from "@/Assets/images/invoicing/tax-invoice-multiple.webp";
import magnifiedInvoice from "@/Assets/images/invoicing/magnified-invoice.webp";


interface Feature {
    img: string;
    title: string;
    sub?: string;
    description: string;
}

interface Card {
    title: string;
    subTitle?: string;
    description?: string;
    listItems?: string[];
    para?: string;
    icon?: string;
}

const features = [
    {
        img: AssetPath.icons.columnLabels.src,
        title: "Change column labels",
        description: "Modify the text in any column to meet your specific requirements",
        sub: ""
    },
    {
        img: AssetPath.icons.textColor.src,
        title: "Enterprise‑grade.",
        description: "Adapt the color palette to align with your brand's identity.",
        sub: ""
    },
    {
        img: AssetPath.icons.invoiceTemplates.src,
        title: "Save invoice emplates",
        description: "Leverage your favorite template for efficiency and time savings.",
        sub: ""
    },
    {
        img: AssetPath.icons.addCompany.src,
        title: "Add your company Logo",
        description: "Incorporate your company's seal on invoices, quotes, receipts, and other paperwork.",
        sub: ""
    }
];


const topRow = [
    { src: AssetPath.business.books.book1, name: "Education" },
    { src: AssetPath.business.books.book2, name: "Construction & Engineering" },
    { src: AssetPath.business.books.book3, name: "Logistics" },
    { src: AssetPath.business.books.book4, name: "Insurance" },
    { src: AssetPath.business.books.book5, name: "Conglomerate" },
    { src: AssetPath.business.books.book6, name: "Pharmacy" },
    { src: AssetPath.business.books.book7, name: "Energy" },
    { src: AssetPath.business.books.book8, name: "Conglomerate" },
    { src: AssetPath.business.books.book9, name: "Insurance" },
    { src: AssetPath.business.books.book10, name: "Packaging solutions" },
    { src: AssetPath.business.books.book11, name: "Food & Beverage" },
    { src: AssetPath.business.books.book12, name: "Trading" },
    { src: AssetPath.business.books.book13, name: "Chemicals" },
];

const bottomRow = [
    { src: AssetPath.business.books.book14, name: "Hospitality and Tourism" },
    { src: AssetPath.business.books.book15, name: "FMCD" },
    { src: AssetPath.business.books.book16, name: "Oil & Gas" },
    { src: AssetPath.business.books.book17, name: "Home Appliances" },
    { src: AssetPath.business.books.book18, name: "Manufacturing" },
    { src: AssetPath.business.books.book19, name: "Construction & Engineering" },
    { src: AssetPath.business.books.book20, name: "Education" },
    { src: AssetPath.business.books.book21, name: "Conglomerate" },
    { src: AssetPath.business.books.book22, name: "Electrical Industries Co." },
    { src: AssetPath.business.books.book23, name: "Aerospace & Defense" },
    { src: AssetPath.business.books.book24, name: "Retail" },
    { src: AssetPath.business.books.book25, name: "Ecommerce" },
    { src: AssetPath.business.books.book26, name: "Fashion" },
];

const Section1 = () => {
    const params = useParams();
    const [isMounted, setIsMounted] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const handleCloseModal = useCallback(() => setModalOpen(false), []);

    useEffect(() => setIsMounted(true), []);

    const lang = params?.lang as string || "en";
    const countryCode = (params?.countryCode as string || "sa").toLowerCase();

    // Get centralized country content
    const { countryContent } = useCountryContent({ countryCode: countryCode.toUpperCase() });

    // Country to flag mapping
    const countryMap: { [key: string]: { flag: any; code: string; name: string; logo: any; trustedBySubtitle?: string } } = {
        sa: { flag: AssetPath.header.language.saudiArabia, code: "KSA", name: "Saudi Arabia", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        ae: { flag: AssetPath.header.language.uae, code: "AE", name: "United Arab Emirates", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        om: { flag: AssetPath.header.language.oman, code: "OM", name: "Oman", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        bh: { flag: AssetPath.header.language.bahrain, code: "BH", name: "Bahrain", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        ma: { flag: AssetPath.header.language.malaysia, code: "MY", name: "Malaysia", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        mu: { flag: AssetPath.header.language.mauritius, code: "MU", name: "Mauritius", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        jd: { flag: AssetPath.header.language.jordan, code: "JD", name: "Jordan", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        be: { flag: AssetPath.header.language.belgium, code: "BE", name: "Belgium", logo: AssetPath.integration.peppol, trustedBySubtitle: 'Trusted by leading Belgian organisations' },
        pl: { flag: AssetPath.header.language.poland, code: "PL", name: "Poland", logo: AssetPath.integration.peppol, trustedBySubtitle: 'Trusted by Poland\'s businesses' },
    };

    const currentCountry = countryMap[countryCode] || countryMap.sa;

    // Helper function to get country-specific invoice images
    const getInvoiceMultipleImage = () => {
        switch (countryCode) {
            case 'sa':
                return taxInvoiceMultiple;
            case 'be':
                return BE_invoice;
            case 'pl':
                return AssetPath.invoicing.invoiceMultiplePng;
            case 'ae':
                return AssetPath.invoicing.UAE_invoice_1;
            default:
                return AssetPath.invoicing.invoiceMultiplePng;
        }
    };

    const getInvoiceStandaloneImage = () => {
        switch (countryCode) {
            case 'sa':
                return magnifiedInvoice;
            case 'be':
                return belgiumInvoiceHero;
            case 'pl':
                return AssetPath.invoicing.invoiceStandalone;
            case 'ae':
                return AssetPath.invoicing.UAE_invoice;
            default:
                return AssetPath.invoicing.invoiceStandalone;
        }
    };

    const scrollRef = useRef<HTMLDivElement | null>(null);

    // Default cards content
    const defaultCards: Card[] = [
        {
            icon: AssetPath.icons.websiteDesign1.src, // Add icon path
            title: "Full Compliance with E-Invoicing Regulations",
            subTitle: "",
            description: "Accqrate delivers compliant structured e-invoices with seamless integration, ensuring secure exchange, standardized processing, and continuous alignment with evolving regulatory frameworks.",
        },
        {
            icon: AssetPath.icons.websiteDesign11.src,
            title: "Future-Ready E-Invoicing Solution",
            subTitle: "",
            description: "Built for interoperability, Accqrate supports cross-border e-invoicing, digital reporting, and automated workflows, positioning enterprises for upcoming compliance requirements.",
        },
        {
            icon: AssetPath.icons.websiteDesign12.src,
            title: "Effortless E-Invoicing Automation",
            description: "Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete compliance without manual intervention.",
        },
        {
            icon: AssetPath.icons.websiteDesign13.src,
            title: "Specialized Support and Implementation Expertise",
            description: "Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your e-invoicing journey.",
        },
        {
            icon: AssetPath.icons.websiteDesign14.src,
            title: "Unified Global E-Invoicing Platform",
            description: "Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across multiple jurisdictions, all from a single, integrated platform.",
        },
    ];

    // Per-page overrides
    const pageOverrides: Record<string, Partial<{
        whyAccqrateTitle: string;
        whyAccqrateSubtitle: string;
        headingDescription: string;
        heroDescription: string;
        heroTitle: string;
        peppolCardText: string;
        zatcaCardText: string;
        cards: Card[];
    }>> = {
        sa: {
            whyAccqrateTitle: "Compliant with ZATCA, Tax and Customs Authority",
            whyAccqrateSubtitle: "Generate invoices fully compliant with ZATCA",
            headingDescription: "Phase 2 requirements",
            heroDescription: "Accqrate seamlessly generates ZATCA approved e-invoices, complete with QR Codes and XML embedded in PDF/A3 format, guaranteeing compliance with ZATCA Phase 2 for every invoice sent to your customers.",
            heroTitle: "5,000+ Saudi companies across all industries",
            zatcaCardText: "Accqrate is 100% ZATCA Approved E-invoicing solution in KSA",
            cards: [
                {
                    icon: AssetPath.icons.websiteDesign1.src,
                    title: "Full Compliance with Belgium's",
                    subTitle: "E-Invoicing Mandate",
                    description: "Accqrate delivers EN 16931-compliant structured e-invoices with seamless Peppol integration, ensuring secure exchange, standardized processing, and continuous alignment with Belgium's evolving regulatory framework.",
                },
                {
                    icon: AssetPath.icons.websiteDesign11.src,
                    title: "Future-Ready for ViDA",
                    subTitle: "(VAT in the Digital Age)",
                    description: "Built for EU-wide interoperability, Accqrate supports cross-border e-invoicing, ViDA-aligned digital reporting, and automated VAT workflows, positioning enterprises for upcoming European compliance requirements.",
                },
                {
                    icon: AssetPath.icons.websiteDesign12.src,
                    title: "Effortless E-Invoicing Automation",
                    description: "Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete Belgian compliance without manual intervention.",
                },
                {
                    icon: AssetPath.icons.websiteDesign13.src,
                    title: "Specialized Support and Implementation Expertise",
                    description: "Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your Belgium e-invoicing journey.",
                },
                {
                    icon: AssetPath.icons.websiteDesign14.src,
                    title: "Unified Global E-Invoicing Platform",
                    description: "Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across Belgium, the EU, and global jurisdictions, all from a single, integrated platform.",
                },
            ]
        },
        be: {
            whyAccqrateTitle: "Compliant with Belgium's Mandatory B2B E-Invoicing Regulation",
            whyAccqrateSubtitle: "Generate invoices fully compliant with Belgium's FPS Finance 2026 mandate",
            headingDescription: "EN 16931 and Peppol Requirements:",
            heroDescription: "Accqrate generates EN 16931-compliant structured invoices and exchanges them through the Peppol network. Every invoice to Belgian VAT-registered customers is delivered in the required UBL format for guaranteed compliance.",
            heroTitle: "5,000+ Across 30+ Industries",
            peppolCardText: "Accqrate is a Peppol Certified AP Provider and SMP",
            cards: [
                {
                    icon: AssetPath.icons.websiteDesign1.src,
                    title: "Full Compliance with Belgium's",
                    subTitle: "E-Invoicing Mandate",
                    description: "Accqrate delivers EN 16931-compliant structured e-invoices with seamless Peppol integration, ensuring secure exchange, standardized processing, and continuous alignment with Belgium's evolving regulatory framework.",
                },
                {
                    icon: AssetPath.icons.websiteDesign11.src,
                    title: "Future-Ready for ViDA",
                    subTitle: "(VAT in the Digital Age)",
                    description: "Built for EU-wide interoperability, Accqrate supports cross-border e-invoicing, ViDA-aligned digital reporting, and automated VAT workflows, positioning enterprises for upcoming European compliance requirements.",
                },
                {
                    icon: AssetPath.icons.websiteDesign12.src,
                    title: "Effortless E-Invoicing Automation",
                    description: "Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete Belgian compliance without manual intervention.",
                },
                {
                    icon: AssetPath.icons.websiteDesign13.src,
                    title: "Specialized Support and Implementation Expertise",
                    description: "Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your Belgium e-invoicing journey.",
                },
                {
                    icon: AssetPath.icons.websiteDesign14.src,
                    title: "Unified Global E-Invoicing Platform",
                    description: "Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across Belgium, the EU, and global jurisdictions, all from a single, integrated platform.",
                },
            ]
        },
        pl: {
            whyAccqrateTitle: "Compliant with Poland's Mandatory B2B E-Invoicing Regulation",
            whyAccqrateSubtitle: "Generate invoices fully compliant with Poland's KSeF system",
            headingDescription: "Phase 1 & 2 Requirements",
            heroDescription: "Accqrate produces Poland-compliant FA(3) XML invoices and submits them via the KSeF platform, meeting the mandatory B2B requirements effective 2026. All invoices to Polish VAT-registered customers are cleared through KSeF, ensuring complete legal and technical compliance.",
            heroTitle: "5,000+ Across 30+ Industries",
            peppolCardText: "Accqrate is Peppol Certified Solution Provider",
            cards: [
                {
                    icon: AssetPath.icons.websiteDesign1.src,
                    title: "Full Compliance with Poland's",
                    subTitle: "E-Invoicing Mandate",
                    description: "Accqrate delivers EN 16931-compliant structured e-invoices with seamless Peppol integration, ensuring secure exchange, standardized processing, and continuous alignment with Poland's evolving regulatory framework.",
                },
                {
                    icon: AssetPath.icons.websiteDesign11.src,
                    title: "Future-Ready for ViDA",
                    subTitle: "(VAT in the Digital Age)",
                    description: "Built for EU-wide interoperability, Accqrate supports cross-border e-invoicing, ViDA-aligned digital reporting, and automated VAT workflows, positioning enterprises for upcoming European compliance requirements.",
                },
                {
                    icon: AssetPath.icons.websiteDesign12.src,
                    title: "Effortless E-Invoicing Automation",
                    description: "Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete Polish compliance without manual intervention.",
                },
                {
                    icon: AssetPath.icons.websiteDesign13.src,
                    title: "Specialized Support and Implementation Expertise",
                    description: "Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your Poland e-invoicing journey.",
                },
                {
                    icon: AssetPath.icons.websiteDesign14.src,
                    title: "Unified Global E-Invoicing Platform",
                    description: "Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across Poland, the EU, and global jurisdictions, all from a single, integrated platform.",
                },
            ]
        },
        ae: {
            whyAccqrateTitle: 'Compliant with UAE\s Mandatory B2B E-Invoicing Regulation',
            whyAccqrateSubtitle: 'Generate invoices fully compliant with UAE\'s FTA 5 Corner Model (DCTCE)',
            headingDescription: 'FTA and Peppol Requirements:',
            heroDescription: 'Accqrate generates fully FTA-compliant structured eInvoices aligned to the UAE PINT framework and supports exchange through the DCTCE / 5-corner (PEPPOL) model.',
            heroTitle: '5,000+ Across 30+ Industries',
            peppolCardText: "Accqrate is a Peppol Certified AP Provider and SMP",
            zatcaCardText: "Accqrate is a ZATCA Approved E-Invoicing Solution Provider",
            cards: [
                {
                    icon: AssetPath.icons.websiteDesign1.src,
                    title: "Full Compliance with UAE",
                    subTitle: "E-Invoicing (FTA DCTCE)",
                    description: "Accqrate ensures complete compliance with the UAE's Decentralized Continuous Transaction Control and Exchange (DCTCE) framework. We generate UAE PINT-compliant e-invoices, aligned with EN 16931 and fully integrated with the national Peppol network for secure, standardized exchange. Every invoice is validated, signed, transmitted, and archived according to the latest FTA e-invoicing regulations.",
                },
                {
                    icon: AssetPath.icons.websiteDesign12.src,
                    title: "Effortless E-Invoicing",
                    subTitle: "Automation",
                    description: "Accqrate automates the complete UAE e-invoicing cycle with:",
                    listItems: ['AI-driven invoice validation', 'Automated FTA compliance checks', 'Real-time error and anomaly detection', 'End-to-end creation, exchange, and archiving'],
                    para: "Designed to reduce manual work and eliminate compliance risks."
                },
                {
                    icon: AssetPath.icons.websiteDesign13.src,
                    title: "Expert UAE E-Invoicing Implementation Support",
                    description: "Our team provides smooth onboarding with:",
                    listItems: ['Fast ERP/POS integrations', 'UAE PINT templates and APIs', 'Setup with certified Peppol Access Points', 'Dedicated UAE compliance guidance'],
                    para: 'Accqrate ensures a reliable and low-disruption rollout for businesses of all sizes.'
                },
                {
                    icon: AssetPath.icons.websiteDesign11.src,
                    title: "Future-Ready for UAE Digital Tax & VAT Compliance",
                    description: "Accqrate is engineered for the UAE's evolving digital taxation landscape. We support automated VAT validation, structured invoice exchange, and upcoming FTA digital reporting requirements, helping businesses stay compliant as the UAE expands its Peppol-based framework.",
                },
                {
                    icon: AssetPath.icons.websiteDesign12.src,
                    title: "Built for the UAE 5-Corner Peppol Model",
                    description: "",
                    listItems: ['Accqrate supports the full UAE 5-corner e-invoicing model, enabling seamless interaction across suppliers, buyers, Peppol Access Points, and the FTA.', 'Our UAE PINT engine ensures consistent interoperability, real-time exchange, and full traceability across the digital tax ecosystem.']
                },
                {
                    icon: AssetPath.icons.websiteDesign14.src,
                    title: "One Platform for Global E-Invoicing",
                    description: "",
                    listItems: ['Accqrate enables businesses to manage e-invoicing across UAE, GCC, EU, and other regulated markets from one platform.', 'Generate, validate, transmit, and archive compliant e-invoices globally with a unified, scalable solution.']
                },
            ]
        }
    };

    const defaultPageContent = {
        whyAccqrateTitle: countryContent?.whyAccqrateTitle || 'Compliant e-Invoicing',
        whyAccqrateSubtitle: countryContent?.whyAccqrateSubtitle || 'Compliance and automation tailored to your market.',
        headingDescription: countryContent?.heroDescription || 'Accqrate delivers compliant e-invoicing, automated mapping and secure transmission to authority networks.',
        heroDescription: countryContent?.heroDescription || 'Compliant e-invoicing for your market.',
        peppolCardText: 'Accqrate supports Peppol e-Invoicing standards',
        zatcaCardText: 'Accqrate is a ZATCA Approved E-Invoicing Solution Provider',
        heroTitle: '5,000+ Across 30+ Industries'
    };

    const pageContent = { ...defaultPageContent, ...(pageOverrides[countryCode] || {}) };
    const cards = pageOverrides[countryCode]?.cards || defaultCards;

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <section className='overflow-x-hidden'>
                <div className='bg-[#eff3ff]'>
                    <FadeUp className="mb-8 md:mb-[40px] pt-12">
                        <h1 className="text-[24px] tracking-heading leading-tight font-bold text-[#1c2041] text-center mx-auto mt-6">
                            <T>Trusted by</T>{" "}
                            <br className="md:hidden" />
                            <span className="text-[#194BED]"></span>
                            <br className="md:hidden" />
                            <span className="text-[#194BED]">
                                <T>{pageContent.heroTitle}</T>
                            </span>
                        </h1>

                    </FadeUp>

                    {/* Logo Marquee */}
                    <div className="relative">
                        <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20" />
                            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20" />

                            <div className="flex flex-col gap-6">
                                <div className="flex animate-scrollLeft w-max flex-shrink-0">
                                    {[...topRow, ...topRow].map((logo, i) => (
                                        <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={135}
                                                height={48}
                                                className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                            />
                                            <p className=" text-xs md:text-sm text-[#737373] font-medium"><T>{logo.name}</T></p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex animate-scrollRight w-max flex-shrink-0">
                                    {[...bottomRow, ...bottomRow].map((logo, i) => (
                                        <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                                            <img
                                                src={logo.src.src}
                                                alt={logo.name}
                                                width={135}
                                                height={48}
                                                className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                            />
                                            <p className=" text-xs md:text-sm text-[#737373] font-medium">
                                                <T>{logo.name}</T></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 md:px-8 xl:px-0 max-w-[1200px] mx-auto xl:flex items-end justify-between gap-20">
                        {/* Left Text */}
                        <div className="flex-1">
                            <h1 className="text-[24px] font-bold pt-[30px] md:pt-[37px] text-[#1c2041] text-center tracking-heading leading-tight">
                                <T>Customize and send invoices easily</T>
                            </h1>
                            <p className="text-[16px] tracking-para text-center mt-4 text-[#5A6183] leading-tight">
                                <T>Sending an invoice should be easy - and we`ve made it so</T>
                            </p>
                            <div className='space-y-3 md:space-y-4 mt-10'>
                                <p className="text-[16px] text-[#194BED] max-w-[662px] tracking-para leading-tight">
                                    <T>Invoices Custom-Made for Your Business</T>
                                </p>
                                <p className="text-[20px] max-w-[662px] text-[#1c2041] tracking-para leading-tight">
                                    <T>Perfectly aligned with your needs and brand</T>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-6 md:mt-8">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-4 items-start">

                                {/* LEFT COLUMN */}
                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="relative
                w-full max-w-[260px] max-h-[350px] h-full
                flex flex-col gap-2"
                                            >
                                                <div className='flex'>
                                                    {/* Image Left + Number Right */}
                                                    <div className="flex justify-start items-center mb-4 gap-4">
                                                        <div className="w-[40px]">
                                                            <img
                                                                src={feature.img}
                                                                alt={feature.title}
                                                                className="w-full max-h-[40px] h-auto object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Title + Description */}
                                                <div className="mb-3 space-y-4 flex-grow">
                                                    <div>
                                                        <h2 className="text-[18px] font-medium text-[#1c2041] leading-tight mb-1">
                                                            <T>{feature.title}</T>
                                                        </h2>
                                                        {feature.sub && (
                                                            <h2 className="text-[18px] font-medium text-[#1c2041] leading-tight">
                                                                <T>{feature.sub}</T>
                                                            </h2>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p className="text-[#5a6183] text-[14px] leading-relaxed">
                                                            <T>{feature.description}</T>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className="h-[40px] md:h-[46px] w-[170px] xl:w-auto max-w-[399px] flex items-center justify-between px-4 rounded-3xl text-white text-[14px]"
                                        style={{ background: '#D63F10' }}
                                    >
                                        <T>See It in Action</T>
                                    </button>
                                </div>

                                {/* RIGHT COLUMN - IMAGE */}
                                <div className="lg:col-span-2 flex justify-start items-start">
                                    <div className="sticky top-6 w-full flex justify-start">
                                        <img
                                            src={getInvoiceMultipleImage().src}
                                            alt="Feature Demo"
                                            className="w-full h-auto max-h-[620px] object-contain mx-auto rounded-[12px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="relative mt-6 md:mt-0 pb-10 md:pb-12">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

                                {/*LEFT COLUMN - IMAGE */}
                                <div className="lg:col-span-2 flex justify-center">
                                    <div className="sticky top-6 w-full flex justify-center">
                                        <img
                                            src={getInvoiceStandaloneImage().src}
                                            alt="Feature Demo"
                                            className="w-full h-auto object-contain mx-auto rounded-[12px]"
                                        />
                                    </div>
                                </div>

                                {/*  RIGHT COLUMN */}
                                <div className="lg:col-span-2  max-w-[560px]">
                                    <div className="">
                                        <div>
                                            {/* Dynamic compliance content from centralized countryContent */}
                                            <>
                                                <h3 className='text-[16px] text-[#194bed] text-left leading-tight'>
                                                    <T>{pageContent.whyAccqrateTitle}</T>
                                                </h3>

                                                <h3 className='text-[20px] font-medium text-[#1c2041] mt-4 text-left leading-relaxed'>
                                                    <T>{pageContent.whyAccqrateSubtitle}</T>
                                                </h3>


                                                <p className='text-[20px] font-medium mt-10 text-[#1c2041] text-left leading-tight'>
                                                    <T>{pageContent.headingDescription}</T>
                                                </p>
                                                <p className="text-[16px] font-normal mt-2 text-[#5a6183] text-left leading-tight">
                                                    <img
                                                        src={AssetPath.resources.greenTick.src}
                                                        alt="icon"
                                                        className="inline-block w-6 h-6 mr-1 align-text-top"
                                                    />
                                                    <T>{pageContent.heroDescription}</T>
                                                </p>

                                            </>

                                            {/* Conditional compliance card: Peppol for BE/PL/AE, ZATCA for others */}
                                            {countryCode === 'be' || countryCode === 'pl' ? (
                                                <div className="bg-white max-h-[194px] w-[410px] rounded-2xl shadow p-4 flex flex-col gap-3 mt-6 md:mt-10">
                                                    {/* Peppol Logo */}
                                                    <Image
                                                        src={AssetPath.integration.peppol}
                                                        alt="peppol-logo"
                                                        width={100}
                                                        height={80}
                                                        className="max-w-[191px] h-auto rounded-md"
                                                        unoptimized
                                                    />

                                                    <div className="w-full h-px bg-gray-300"></div>

                                                    <div className="flex items-center justify-between gap-4">
                                                        <p className="text-sm text-[#5a6183] leading-relaxed">
                                                            <T>{pageContent.peppolCardText}</T>
                                                        </p>

                                                        <div className="flex items-center justify-center gap-2">
                                                            <Image
                                                                src={currentCountry.flag}
                                                                alt={`${currentCountry.name}-flag`}
                                                                width={40}
                                                                height={30}
                                                                className="max-w-[30px] h-auto rounded"
                                                                unoptimized
                                                            />
                                                            <p className='text-[#5a6183]'><T>{currentCountry.code}</T></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : countryCode === 'ae' ? (
                                                <div className="bg-white max-h-[194px] w-[410px] rounded-2xl shadow p-4 flex flex-col gap-3 mt-6 md:mt-10">
                                                    <div className="flex items-center gap-6">
                                                        <Image
                                                            src={AssetPath.cards.fta}
                                                            alt="peppol-logo"
                                                            width={70}
                                                            height={80}
                                                            className="max-w-[191px] h-auto rounded-md"
                                                            unoptimized
                                                        />

                                                        {/* Vertical Divider */}
                                                        <span className="w-px h-12 bg-gray-300" />

                                                        <Image
                                                            src={AssetPath.header.logoPeppol}
                                                            alt="peppol-logo"
                                                            width={140}
                                                            height={100}
                                                            className="max-w-[191px] h-auto rounded-md"
                                                            unoptimized
                                                        />
                                                    </div>

                                                    <div className="w-full h-px bg-gray-300"></div>

                                                    <div className="flex items-center justify-between gap-4">
                                                        <p className="text-fluid-small leading-relaxed">
                                                            <T>{pageContent.peppolCardText}</T>
                                                        </p>

                                                        <div className="flex items-center justify-center gap-2">
                                                            <Image
                                                                src={currentCountry.flag}
                                                                alt={`${currentCountry.name}-flag`}
                                                                width={40}
                                                                height={30}
                                                                className="max-w-[30px] h-auto rounded"
                                                                unoptimized
                                                            />
                                                            <p><T>{currentCountry.code}</T></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-white max-h-[194px] w-[410px] rounded-2xl shadow p-4 flex flex-col gap-3 mt-6 md:mt-10">
                                                    {/* ZATCA Logo */}
                                                    <Image
                                                        src={AssetPath.resources.Zact}
                                                        alt="zatca-logo"
                                                        width={310}
                                                        height={73}
                                                        className="max-w-[310px] h-auto rounded-md"
                                                        unoptimized
                                                    />

                                                    <div className="w-full h-px bg-gray-300"></div>

                                                    <div className="flex items-center justify-between gap-4">
                                                        <p className="text-fluid-small leading-tight">
                                                            <T>{pageContent.zatcaCardText}</T>
                                                        </p>

                                                        <div className="flex items-center justify-center gap-2">
                                                            <Image
                                                                src={currentCountry.flag}
                                                                alt={`${currentCountry.name}-flag`}
                                                                width={40}
                                                                height={30}
                                                                className="max-w-[30px] h-auto rounded"
                                                                unoptimized
                                                            />
                                                            <p><T>{currentCountry.code}</T></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards section - hidden for Saudi Arabia (SA) */}
                {countryCode !== 'sa' && (
                    <div className='max-w-[1200px] mx-auto py-8'>
                        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
                            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`
            relative group overflow-hidden
            p-4 sm:p-5 md:p-6 rounded-xl
            flex flex-col
            min-h-[280px] md:min-h-[300px]
            transition-shadow duration-300 max-w-[360px]
            hover:shadow-lg border border-[#C8C8C8]

            ${index % 2 === 0
                                                ? 'bg-[#E8EEFF]'
                                                : 'bg-[#F7F7F7]'
                                            }

            ${index === 0
                                                ? 'md:w-full md:max-w-[calc(33.333%*3-16px)] lg:w-[calc(33.333%-21.33px)]'
                                                : index < 3
                                                    ? 'w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-21.33px)]'
                                                    : 'w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)]'
                                            }
        `}
                                    >
                                        {/*  Hover gradient overlay (animation only) */}
                                        <div
                                            className={`
        absolute inset-0
        transform scale-y-0
        transition-transform duration-300 ease-out
        group-hover:scale-y-100

        ${index % 2 === 0
                                                    ? 'bg-gradient-to-t from-[#e9efff] to-[#ededed] origin-bottom'
                                                    : 'bg-gradient-to-b from-[#e9efff] to-[#ededed] origin-top'
                                                }
    `}
                                        />

                                        {/* CONTENT (unchanged) */}
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex-shrink-0 mb-2 md:mb-3">
                                                {card.icon && (
                                                    <div className="mb-3">
                                                        <img
                                                            src={card.icon}
                                                            alt=""
                                                            className="h-10 w-10"
                                                        />
                                                    </div>
                                                )}

                                                <h3 className="text-[#303030] font-semibold text-[18px] leading-tight break-words">
                                                    <T>{card.title}</T>
                                                </h3>

                                                {card.subTitle && (
                                                    <h3 className="text-[#303030] font-semibold text-[18px] mb-2 md:mb-3 leading-tight break-words">
                                                        <T>{card.subTitle}</T>
                                                    </h3>
                                                )}
                                            </div>

                                            <div className="flex-grow overflow-hidden">
                                                {card.description && (
                                                    <p className="text-[#5A6183] text-[14px] leading-relaxed md:leading-[28px] break-words mb-3">
                                                        <T>{card.description}</T>
                                                    </p>
                                                )}

                                                {card.para && (
                                                    <p className="text-[#5A6183] text-[14px] leading-relaxed md:leading-[28px] break-words mb-3">
                                                        <T>{card.para}</T>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                )}



            </section>
            <ContactModal open={isModalOpen} onClose={handleCloseModal} />
        </>

    );
}

export default Section1
