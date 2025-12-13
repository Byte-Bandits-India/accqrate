"use client";

import React, { useRef, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { COUNTRY_FEATURES } from "../data/CountryFeatures";
import T from "@/Components/T";
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

const Section2 = () => {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = (params?.countryCode as string) || "sa";
  const content = COUNTRY_FEATURES[countryCode] || COUNTRY_FEATURES["sa"];
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
    <section className="bg-gradient-to-b from-[#EFF3FF] to-transparent pt-16 pb-20 relative">
      {/* Decorative Stars */}
      <div className="absolute top-16 right-8 md:right-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#448E32" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-20 right-4 md:right-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L13 11L24 12L13 13L12 24L11 13L0 12L11 11L12 0Z" fill="#448E32" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
        {/* ---------- MAIN HEADING ---------- */}
        <h2 className="text-fluid-h2 md:text-[38px] font-medium text-black text-left">
          <T lang={lang} countryCode={countryCode}>{content.integrationHeading}</T>{" "}
          <span className="text-[#448E32]"><T lang={lang} countryCode={countryCode}>{content.integrationHighlight}</T></span>{" "}
          <T lang={lang} countryCode={countryCode}>Integration</T>
        </h2>

        <p className="text-[#5A6183] text-fluid-body md:text-[18px] mt-4 text-left max-w-3xl">
          <T lang={lang} countryCode={countryCode}>{content.integrationDescription}</T>
        </p>

        {/* ---------- TOP 3 CARDS ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {content.sections.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] shadow-sm border border-[#E9ECF6] p-8 hover:shadow-md transition"
            >
              <div className="w-[70px] h-[60px] mb-5 flex items-center justify-center">
                <Image src={item.img} alt={item.title} width={100} height={60} className="w-[70px] h-auto" />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 text-[#1C2041]"><T lang={lang} countryCode={countryCode}>{item.title}</T></h3>
              <p className="text-[#7C8DB0] text-[14px] md:text-[16px] leading-relaxed">
                <T lang={lang} countryCode={countryCode}>{item.desc}</T>
              </p>
            </div>
          ))}
        </div>

        {/* ---------- SUB HEADING ---------- */}
        <h2 className="text-fluid-h2 md:text-[38px] font-medium text-black text-left mt-20">
          <T lang={lang} countryCode={countryCode}>{content.featureHeading}</T>{" "}
          <span className="text-[#448E32]"><T lang={lang} countryCode={countryCode}>{content.featureHighlight}</T></span>{" "}
          <T lang={lang} countryCode={countryCode}>Solutions</T>
        </h2>

        <p className="text-[#5A6183] text-fluid-body md:text-[18px] mt-4 text-left max-w-3xl">
          <T lang={lang} countryCode={countryCode}>{content.featureDescription}</T>
        </p>

        {/* ---------- SCROLL BUTTONS ---------- */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end mt-12 mb-6 gap-3">
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

        {/* ---------- BOTTOM FEATURE CARDS ---------- */}
        <div ref={scrollRef} className="overflow-x-auto -mx-6 md:-mx-8 xl:mx-0 px-6 md:px-8 xl:px-0 scrollbar-hide">
          <div className="flex gap-6 min-w-max pb-4">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] shadow-sm border border-[#E9ECF6] p-6 text-left hover:shadow-md transition w-[350px] flex-shrink-0"
              >
                <div className="h-[50px] mb-5 flex items-center">
                  <Image src={feature.img} alt={feature.title} width={50} height={50} className="h-[45px] w-auto" />
                </div>

                <h3 className="text-[16px] md:text-[20px] font-semibold mb-3 text-[#1C2041]">
                  <T lang={lang} countryCode={countryCode}>{feature.title}</T>
                </h3>

                <p className="text-[#7C8DB0] text-[13px] md:text-[16px] leading-relaxed">
                  <T lang={lang} countryCode={countryCode}>{feature.description}</T>
                </p>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
};

export default Section2;
