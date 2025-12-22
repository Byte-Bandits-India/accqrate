"use client";

import React, { useRef, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Row, Col } from "antd";
import { integrationFlowData } from "../data/IntegrationFlow";
import T from "@/Components/T";
import AssetPath from "@/AssetPath/AssetPath";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Local Chevron icons (inline SVG) — used when lucide icons don't render
const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
);

// Renders a primary icon (e.g. lucide) and falls back to an inline SVG if the primary
// icon does not render properly (helps when global CSS or build issues hide SVGs).
const IconWithFallback: React.FC<{
    render: () => React.ReactElement;
    fallback: React.ReactElement;
}> = ({ render, fallback }) => {
    const containerRef = useRef<HTMLSpanElement | null>(null);
    const [useFallback, setUseFallback] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const svg = el.querySelector('svg');
        if (!svg) {
            setUseFallback(true);
            return;
        }

        // Check if SVG is actually visible
        const checkVisibility = () => {
            const rect = svg.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                setUseFallback(true);
            }
        };

        checkVisibility();
        const observer = new MutationObserver(checkVisibility);
        observer.observe(el, { attributes: true, childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <span ref={containerRef}>
            {useFallback ? fallback : render()}
        </span>
    );
};

export default function IntegrationFlow() {
    const params = useParams();
    const countryCode = (params?.countryCode as string) || "sa";
    const lang = (params?.lang as string) || "en";
    const data = integrationFlowData[countryCode] || integrationFlowData["sa"];
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const isEUFlow = countryCode === "be" || countryCode === "pl" || countryCode === 'ae';

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
        <section className="my-8 md:my-10 lg:my-12">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">

                {/* ------- HEADING ------- */}
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-fluid-body lg:text-[24px] font-bold text-[#1C2041] mb-4">
                        <T lang={lang} countryCode={countryCode}>{data.title.split("E-invoicing")[0]}</T>
                        <span className="text-[#1a4ced]"><T lang={lang} countryCode={countryCode}>{"E-invoicing"}</T></span> <T lang={lang} countryCode={countryCode}>Process</T>
                        <T lang={lang} countryCode={countryCode}>{data.title.split("E-invoicing")[1]}</T>
                        {countryCode === 'ae' && <span> (DCTCE Model)</span>}
                    </h3>

                    <p className="text-[#5A6183] text-fluid-small lg:text-[16px]"><T lang={lang} countryCode={countryCode}>{data.subtitle}</T></p>
                </div>

                {isEUFlow && (
                    <div>
                        {/* EU/AE Top Image */}
                        {countryCode === "ae" ? (
                            <div className="w-full mb-12">
                                <Image
                                    src={AssetPath.home.dctce}
                                    alt="UAE E-invoicing Flow"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto rounded-lg"
                                    unoptimized
                                />
                            </div>
                        ) : (
                            data.heroImage && (
                                <div className="flex flex-col items-center justify-center mb-12">
                                    <Image
                                        src={data.heroImage}
                                        width={600}
                                        height={400}
                                        alt="Flow"
                                        className="rounded-md"
                                    />
                                    <p className="md:text-[16px] text-[#5A6183] mt-10 mb-10"><T lang={lang} countryCode={countryCode}>For B2B transactions, the process is straightforward</T></p>
                                </div>
                            )
                        )}

                        {/* ---------- SCROLL BUTTONS ---------- */}
                        <div className="max-w-[1200px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end mt-12 mb-6 gap-3">
                            <button
                                onClick={() => scroll("left")}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                                aria-label="Scroll left"
                            >
                                <IconWithFallback
                                    render={() => <ArrowLeft className="w-5 h-5 text-gray-700" />}
                                    fallback={<ChevronLeftIcon className="w-5 h-5 text-gray-700" />}
                                />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                                aria-label="Scroll right"
                            >
                                <IconWithFallback
                                    render={() => <ArrowRight className="w-5 h-5 text-gray-700" />}
                                    fallback={<ChevronRightIcon className="w-5 h-5 text-gray-700" />}
                                />
                            </button>
                        </div>

                        {/* EU Steps (Horizontal Scrollable Cards) */}
                        <div ref={scrollRef} className="overflow-x-auto -mx-6 md:-mx-8 xl:mx-0 px-6 md:px-8 xl:px-0 scrollbar-hide">
                            <div className="flex gap-4 min-w-max pb-4">
                                {data.steps.map((step: any, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow border border-gray-100 w-[300px] sm:w-[320px] md:w-[350px] flex-shrink-0"
                                    >
                                        <div className="text-[#1a4ced] text-[28px] font-semibold mb-2">
                                            {step.number}
                                        </div>

                                        <h4 className="font-semibold md:text-[18px] text-[#1C2041] mb-2">
                                            <T lang={lang} countryCode={countryCode}>{step.title}</T>
                                        </h4>

                                        <p className="text-[#5A6183] text-[14px] md:text-[16px] leading-relaxed">
                                            <T lang={lang} countryCode={countryCode}>{step.description}</T>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}


                {!isEUFlow && (
                    <>
                        {/* Desktop Layout */}
                        <div className="hidden lg:block relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent -translate-x-1/2"></div>

                            {data.steps.map((step: any, index: number) => (
                                <Row
                                    key={index}
                                    className={`items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                        }`}
                                >
                                    <Col
                                        xs={24}
                                        md={11}
                                        className={index % 2 === 0 ? "pr-8" : "pl-8"}
                                    >
                                        <Image
                                            src={step.image}
                                            alt=""
                                            width={400}
                                            height={300}
                                            className="w-full mx-auto"
                                        />
                                    </Col>

                                    <Col xs={0} md={2} className="flex justify-center relative z-10">
                                        <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
                                            <Image
                                                src={step.icon}
                                                width={60}
                                                height={50}
                                                alt=""
                                            />
                                        </div>
                                    </Col>

                                    <Col
                                        xs={24}
                                        md={11}
                                        className={index % 2 === 0 ? "pl-8" : "pr-8 text-right"}
                                    >
                                        <div className="text-[#FF8D67] text-[28px] font-medium mb-2">
                                            <T>{step.number}</T>
                                        </div>

                                        <h3 className="text-[18px] font-medium text-[#1C2041] mb-4">
                                            <T>{step.title}</T>
                                        </h3>

                                        <p className="text-[#5A6183] md:text-[16px]  leading-relaxed">
                                            <T>{step.description}</T>
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>

                        {/* Mobile Layout */}
                        <div className="block lg:hidden relative">
                            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent"></div>

                            {data.steps.map((step: any, index: number) => (
                                <div key={index} className="flex mb-12 relative">
                                    <div className="flex-shrink-0 w-12 mr-4 relative z-10">
                                        <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center">
                                            <Image src={step.icon} width={24} height={24} alt="" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-[#FF8D67] text-[28px] font-medium mb-1">
                                            {step.number}
                                        </div>

                                        <Image
                                            src={step.image}
                                            width={500}
                                            height={300}
                                            alt=""
                                            className="w-full mb-4 rounded-lg"
                                        />

                                        <h4 className="text-[18px] font-medium text-[#1C2041] mb-3">
                                            <T>{step.title}</T>
                                        </h4>

                                        <p className="text-[#5A6183] text-[16px] leading-relaxed">
                                            <T>{step.description}</T>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
