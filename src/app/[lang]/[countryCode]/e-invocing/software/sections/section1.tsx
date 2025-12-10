"use client";
import React from 'react'
import FadeUp from '@/Components/ui/FadeUp'
import T from '@/Components/T'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { ContactModal } from "@/Components/ContactModal";
import { useCountryContent } from "@/Hooks/useCountryContent";
import { useParams } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";


interface Feature {
    img: string;
    title: string;
    sub?: string;
    description: string;
}

const features = [
    {
        img: AssetPath.accqrateFeatures.feature1.src,
        title: "Change column labels",
        description: "Modify the text in any column to meet your specific requirements",
        sub: ""
    },
    {
        img: AssetPath.accqrateFeatures.feature2.src,
        title: "Enterprise‑grade.",
        description: "Adapt the color palette to align with your brand's identity.",
        sub: ""
    },
    {
        img: AssetPath.accqrateFeatures.feature3.src,
        title: "Save invoice emplates",
        description: "Leverage your favorite template for efficiency and time savings.",
        sub: ""
    },
    {
        img: AssetPath.accqrateFeatures.feature4.src,
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

const cards = [
    {
        title: "Full Compliance with Belgium’s",
        subTitle: "E-Invoicing Mandate",
        description:
            "Accqrate delivers EN 16931-compliant structured e-invoices with seamless Peppol integration, ensuring secure exchange, standardized processing, and continuous alignment with Belgium’s evolving regulatory framework.",
    },
    {
        title: "Future-Ready for ViDA",
        subTitle: "(VAT in the Digital Age)",
        description:
            "Built for EU-wide interoperability, Accqrate supports cross-border e-invoicing, ViDA-aligned digital reporting, and automated VAT workflows, positioning enterprises for upcoming European compliance requirements.",
    },
    {
        title: "Effortless E-Invoicing Automation",
        description:
            "Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete Belgian compliance without manual intervention.",
    },
    {
        title: "Specialized Support and Implementation Expertise",
        description:
            "Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your Belgium e-invoicing journey.",
    },
    {
        title: "Unified Global E-Invoicing Platform",
        description:
            "Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across Belgium, the EU, and global jurisdictions, all from a single, integrated platform.",
    },
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
        ae: { flag: AssetPath.header.language.uae, code: "UAE", name: "United Arab Emirates", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        om: { flag: AssetPath.header.language.oman, code: "OM", name: "Oman", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        bh: { flag: AssetPath.header.language.bahrain, code: "BH", name: "Bahrain", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        ma: { flag: AssetPath.header.language.malaysia, code: "MY", name: "Malaysia", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        mu: { flag: AssetPath.header.language.mauritius, code: "MU", name: "Mauritius", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        jd: { flag: AssetPath.header.language.jordan, code: "JD", name: "Jordan", logo: AssetPath.resources.Zact, trustedBySubtitle: '5,000+ Global companies' },
        be: { flag: AssetPath.header.language.belgium, code: "BE", name: "Belgium", logo: AssetPath.integration.peppol, trustedBySubtitle: 'Trusted by leading Belgian organisations' },
        pl: { flag: AssetPath.header.language.poland, code: "PO", name: "Poland", logo: AssetPath.integration.peppol, trustedBySubtitle: 'Trusted by Poland\'s businesses' },
    };

    const currentCountry = countryMap[countryCode] || countryMap.sa;

    const scrollRef = useRef<HTMLDivElement | null>(null);

    // Per-page overrides
    const pageOverrides: Record<string, Partial<{
        whyAccqrateTitle: string;
        whyAccqrateSubtitle: string;
        headingDescription: string;
        heroDescription: string;
        heroTitle: string;
        peppolCardText: string;
        zatcaCardText: string;
    }>> = {
        be: {
            whyAccqrateTitle: "Compliant with Belgium\'s Mandatory B2B E-Invoicing Regulation",
            whyAccqrateSubtitle: "Generate invoices fully compliant with Belgium\'s FPS Finance 2026 mandate",
            headingDescription: "EN 16931 and Peppol Requirements:",
            heroDescription: "Accqrate generates EN 16931-compliant structured invoices and exchanges them through the Peppol network. Every invoice to Belgian VAT-registered customers is delivered in the required UBL format for guaranteed compliance.",
            heroTitle: "5,000+ Across 30+ Industries",
            peppolCardText: "Accqrate is a Peppol Certified AP Provider and SMP"
        },
        pl: {
            whyAccqrateTitle: "Compliant with Poland\'s Mandatory B2B E-Invoicing Regulation",
            whyAccqrateSubtitle: "Generate invoices fully compliant with Poland\'s KSeF system",
            headingDescription: "Phase 1 & 2 Requirements",
            heroDescription: "Accqrate produces Poland-compliant FA(3) XML invoices and submits them via the KSeF platform, meeting the mandatory B2B requirements effective 2026. All invoices to Polish VAT-registered customers are cleared through KSeF, ensuring complete legal and technical compliance.",
            heroTitle: "5,000+ Across 30+ Industries",
            peppolCardText: "Accqrate is Peppol Certified Solution Provider"
        }
    };

    const defaultPageContent = {
        whyAccqrateTitle: countryContent?.whyAccqrateTitle || 'Compliant e-Invoicing',
        whyAccqrateSubtitle: countryContent?.whyAccqrateSubtitle || 'Compliance and automation tailored to your market.',
        headingDescription: countryContent?.heroDescription || 'Accqrate delivers compliant e-invoicing, automated mapping and secure transmission to authority networks.',
        heroDescription: countryContent?.heroDescription || 'Compliant e-invoicing for your market.',
        peppolCardText: 'Accqrate supports Peppol e-Invoicing standards',
        heroTitle: '5,000+ Across 30+ Industries'
    };

    const pageContent = (countryCode === 'be' || countryCode === 'pl') ? { ...defaultPageContent, ...pageOverrides[countryCode] } : defaultPageContent;

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
                <div className='bg-gradient-to-t from-[#EFF3FF] to-transparent'>
                    <FadeUp className="mb-8 md:mb-[40px] pt-12 md:pt-[80px] lg:pt-[100px]">
                        <h1 className="text-[24px] md:text-[28px] lg:text-[38px] tracking-heading leading-tight font-medium text-[#333333] text-center mx-auto mt-6">
                            <T>Trusted by</T>
                            <br className="md:hidden" />
                            <span className="text-[#194BED]"></span>
                            <br className="md:hidden" />
                            <span className="text-[#194BED]">
                                <T> {pageContent.heroTitle}</T>
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
                                            <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
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
                                            <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 md:px-8 xl:px-0 max-w-[1280px] mx-auto xl:flex items-end justify-between gap-20">
                        {/* Left Text */}
                        <div className="flex-1">
                            <h1 className="text-fluid-h2 lg:text-[38px] font-medium pt-[30px] md:pt-[37px] tracking-heading leading-tight">
                                Customize and send invoices easily
                            </h1>
                            <div className='space-y-3 md:space-y-4 mt-4'>
                                <p className="text-fluid-body lg:text-[16px] max-w-[662px] tracking-para leading-tight">
                                    Sending an invoice should be easy - and we`ve made it so
                                </p>
                                <p className="text-fluid-body lg:text-[16px] max-w-[662px] tracking-para leading-tight">
                                    Perfectly aligned with your needs and brand
                                </p>
                                <p className="text-fluid-body lg:text-[16px] text-[#194BED] max-w-[662px] tracking-para leading-tight">
                                    Invoices Custom-Made for Your Business
                                </p>
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="h-[40px] md:h-[46px] w-[170px] xl:w-auto max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px]"
                                    style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                                >
                                    See It in Action
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-6 md:mt-8">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                                {/* LEFT COLUMN */}
                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="relative bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                w-full max-h-[372px] h-full
                p-6 md:p-8 
                flex flex-col gap-2
                transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:scale-[1.02] duration-300"
                                            >
                                                {/* Image Left + Number Right */}
                                                <div className="flex justify-between items-center mb-4">
                                                    <div className="w-[70%]">
                                                        <img
                                                            src={feature.img}
                                                            alt={feature.title}
                                                            className="w-full max-h-[120px] h-auto object-contain"
                                                        />
                                                    </div>

                                                    <span className="font-anonymous text-[38px] font-bold text-[#E6E6E6] leading-none select-none">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                {/* Title + Description */}
                                                <div className="mb-3 space-y-4 flex-grow">
                                                    <div>
                                                        <h2 className="text-fluid-body font-medium text-black leading-tight mb-1">
                                                            <T>{feature.title}</T>
                                                        </h2>
                                                        {feature.sub && (
                                                            <h2 className="text-fluid-body font-medium text-black leading-tight">
                                                                <T>{feature.sub}</T>
                                                            </h2>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p className="text-black text-fluid-small leading-relaxed">
                                                            <T>{feature.description}</T>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN - IMAGE */}
                                <div className="lg:col-span-2 flex justify-center">
                                    <div className="sticky top-6 w-full flex justify-center">
                                        <img
                                            src={AssetPath.invoicing.taxInvoiceMultiple.src}
                                            alt="Feature Demo"
                                            className="w-full h-auto object-contain mx-auto rounded-[12px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="relative mt-6 md:mt-8 lg:mt-[100px] pb-10 md:pb-12">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

                                {/*LEFT COLUMN - IMAGE */}
                                <div className="lg:col-span-2 flex justify-center">
                                    <div className="sticky top-6 w-full flex justify-center">
                                        <img
                                            src={AssetPath.invoicing.taxIncoiceSingle.src}
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
                                                <h3 className='text-fluid-small font-medium text-[#508847] text-left leading-tight'>
                                                    <T>{pageContent.whyAccqrateTitle}</T>
                                                </h3>

                                                <h3 className='text-fluid-body font-medium text-[#000000] mt-4 text-left leading-relaxed'>
                                                    <T>{pageContent.whyAccqrateSubtitle}</T>
                                                </h3>


                                                <p className='text-[16px] font-medium mt-10 text-[#000000] text-left leading-tight'>
                                                    <T>{pageContent.headingDescription}</T>
                                                </p>
                                                <p className='text-fluid-small font-normal mt-2 text-[#000000] text-left leading-tight'>
                                                    <T>{pageContent.heroDescription}</T>
                                                </p>
                                            </>

                                            {/* Conditional compliance card: Peppol for BE/PL, ZATCA for others */}
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
                                                        <p className="text-sm leading-relaxed">
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
                                                            <p>{currentCountry.code}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-white max-h-[194px] w-[410px] rounded-2xl shadow p-4 flex flex-col gap-3 mt-6 md:mt-8">
                                                    {/* ZATCA / Default Logo */}
                                                    <Image
                                                        src={AssetPath.resources.Zact}
                                                        alt="zatcalogo"
                                                        width={310}
                                                        height={73}
                                                        className="max-w-[310px] h-auto rounded-md"
                                                        unoptimized
                                                    />

                                                    <div className="w-full h-px bg-gray-300"></div>

                                                    <div className="flex items-center justify-between gap-4">

                                                        <div className="flex items-center justify-center gap-2">
                                                            <Image
                                                                src={currentCountry.flag}
                                                                alt={`${currentCountry.name}-flag`}
                                                                width={40}
                                                                height={30}
                                                                className="max-w-[30px] h-auto rounded"
                                                                unoptimized
                                                            />
                                                            <p>{currentCountry.code}</p>
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

                <div className='max-w-[1280px] mx-auto py-8 md:py-10 lg:py-[80px]'>
                    <div className="max-w-[1280px] mx-auto px-6 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="
          w-full max-w-[392px]
          border border-[#508847] bg-[#F4FFF2]
          p-6 rounded-xl
          flex flex-col
          lg:h-[310px]
        "
                                >
                                    <h3 className="text-[#303030] font-semibold text-lg">
                                        {card.title}
                                    </h3>
                                    <h3 className="text-[#303030] font-semibold text-lg mb-3">
                                        {card.subTitle}
                                    </h3>

                                    <p className="text-[#5A6183] text-sm leading-[30px] flex-grow">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <ContactModal open={isModalOpen} onClose={handleCloseModal} />
        </>

    );
}

export default Section1
