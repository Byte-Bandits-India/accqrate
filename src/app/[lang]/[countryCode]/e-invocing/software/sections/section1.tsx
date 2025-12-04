"use client";
import React from 'react'
import FadeUp from '@/components/ui/FadeUp'
import T from '@/Components/T'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef, useMemo } from "react";
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


const Section1 = () => {
    const params = useParams();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    const lang = params?.lang as string || "en";
    const countryCode = (params?.countryCode as string || "sa").toLowerCase();


    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8; // scroll ~80% width per click
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className='bg-gradient-to-t from-[#EFF3FF] to-transparent'>
            <FadeUp className="mb-8 md:mb-[40px] pt-12 md:pt-[80px] lg:pt-[100px]">
                <h3 className="text-[24px] md:text-[28px] lg:text-[38px] tracking-heading leading-tight font-medium text-[#333333] text-center mx-auto">
                    <T>Trusted by  </T><br className="md:hidden" /><span className="text-[#194BED]"><T>5,000+ Global companies</T></span>
                </h3>
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


            <div className="relative mt-6 md:mt-8 lg:mt-[100px]">
                <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

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
                        <div className="lg:col-span-2">
                            <div className="">
                                <div>
                                    <h3 className='text-fluid-small font-medium text-[#508847] text-left leading-tight'>Compliant with ZATCA, Tax and Customs Authority</h3>
                                    <h3 className='text-fluid-body font-medium text-[#000000] mt-6 text-left leading-relaxed'>Generate invoices fully compliant with ZATCA</h3>
                                    <h3 className='text-fluid-body font-medium text-[#000000] text-left leading-relaxed'>Phase 2 requirements</h3>
                                    <p className='text-fluid-small font-normal mt-6 text-[#000000] text-left leading-tight'>Accqrate seamlessly generates ZATCA approved e-invoices, complete with QR Codes and XML embedded in PDF/A3 format, guaranteeing compliance with ZATCA Phase 2 for every invoice sent to your customers.</p>

                                    <div>
                                        <img src={AssetPath.invoicing.zatcaLogo.src} alt="zatcalogo" />

                                        <div>
                                            <p>Accurate is 100% ZATCA Approved E-invoicing solution in</p>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='max-w-[1280px] mx-auto py-8 md:py-10 lg:py-[80px]'>
                <div className='px-6 md:px-8 xl:px-0 text-center'>
                    <h1 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] text-center leading-tight">
                        Requirements for ZATCA-Compliant <span className='text-[#194BED]'>E-Invoicing</span> in Phase 1 & 2
                    </h1>
                    <p className='text-fluid-body text-[#5A6183] mt-4 md:mt-6'>Effortless ZATCA Compliance: Your Guide to Phase 1 & 2 with Accqrate</p>
                </div>

                <div className="mt-10 md:mt-12 lg:mt-[80px] px-6 md:px-8 xl:px-0">
                    {/* Generation Phase */}
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <h3 className="text-fluid-h2 lg:text-[38px] font-normal text-[#000000] leading-tight">
                                Generation Phase
                            </h3>

                            <ul className="text-[#333333] text-fluid-small tracking-para leading-[30px] space-y-3 md:space-y-[16px] pl-5 mt-4 md:mt-6 lg:mt-8 list-disc">
                                <li>Generation of Tax Invoices and Simplified e-invoices</li>
                                <li>Storage of e-invoices</li>
                                <li>Approved invoice templates</li>
                                <li>QR Code Integration</li>
                                <li>Confirmation of the QR code with the ZATCA mobile app</li>
                                <li>Send mail to buyer automatically from the application</li>
                                <li>Control your invoice payments and outstanding summary</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 flex justify-center">
                            <img
                                src={AssetPath.invoicing.generation.src}
                                alt="Generation Phase illustration"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Integration Phase */}
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-10 md:mt-12 lg:mt-[80px]">

                        {/* Left Content */}
                        <div className="lg:w-1/2 lg:order-2">
                            <h3 className="text-fluid-h2 lg:text-[38px] font-normal text-[#000000] leading-tight">
                                Integration Phase
                            </h3>

                            <ul className="text-[#333333] text-fluid-small tracking-para leading-[30px] space-y-3 md:space-y-[16px] pl-5 mt-4 md:mt-6 lg:mt-8 list-disc">
                                <li>Integration with Fatoora portal</li>
                                <li>Onboard devices & generate OTP</li>
                                <li>E-invoice generation and hashing XML - Tax & Simplified invoices</li>
                                <li>Generate Digital signature</li>
                                <li>Integrate the Zatca QR code</li>
                                <li>Generate PDF/A3 with integrated XML</li>
                                <li>Dashboards in the application</li>
                                <li>Track acceptance/rejections</li>
                                <li>Take corrective actions with simple clicks</li>
                                <li>Send Mail to Buyer automatically the approved e-invoices</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 flex justify-center lg:order-1">
                            <img
                                src={AssetPath.invoicing.integration.src}
                                alt="Generation Phase illustration"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1
