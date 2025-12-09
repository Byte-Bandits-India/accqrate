"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { COUNTRY_FEATURES } from "../data/CountryFeatures";
import T from "@/Components/T";

const Section2 = () => {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = (params?.countryCode as string) || "sa";
  const content = COUNTRY_FEATURES[countryCode] || COUNTRY_FEATURES["sa"];

  return (
    <section className="bg-gradient-to-b from-[#EFF3FF] to-transparent pt-16 pb-20 relative">
      {/* Decorative Stars */}
      <div className="absolute top-16 right-8 md:right-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#448E32" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute top-20 right-4 md:right-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L13 11L24 12L13 13L12 24L11 13L0 12L11 11L12 0Z" fill="#448E32" opacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
        {/* ---------- MAIN HEADING ---------- */}
        <h2 className="text-fluid-h2 md:text-[38px] font-medium text-black text-left">
          {content.integrationHeading}{" "}
          <span className="text-[#448E32]">{content.integrationHighlight}</span>{" "}
          Integration
        </h2>

        <p className="text-[#5A6183] text-fluid-body md:text-[18px] mt-4 text-left max-w-3xl">
          {content.integrationDescription}
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
              <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 text-[#1C2041]">{item.title}</h3>
              <p className="text-[#7C8DB0] text-[14px] md:text-[16px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- SUB HEADING ---------- */}
        <h2 className="text-fluid-h2 md:text-[38px] font-medium text-black text-left mt-20">
          {content.featureHeading}{" "}
          <span className="text-[#448E32]">{content.featureHighlight}</span>{" "}
          Solutions
        </h2>

        <p className="text-[#5A6183] text-fluid-body md:text-[18px] mt-4 text-left max-w-3xl">
          {content.featureDescription}
        </p>

        {/* ---------- BOTTOM FEATURE CARDS ---------- */}
        <div className="overflow-x-auto mt-12 -mx-6 md:-mx-8 xl:mx-0 px-6 md:px-8 xl:px-0 scrollbar-hide">
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
                  <T>{feature.title}</T>
                </h3>

                <p className="text-[#7C8DB0] text-[13px] md:text-[16px] leading-relaxed">
                  <T>{feature.description}</T>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- CTA BUTTON ---------- */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-[#5A6183] text-[15px] md:text-[18px] mb-6 text-center ">
            {content.ctaDescription}
          </p>
          <Link
            href={`/${lang}/${countryCode}/contact-us`}
            className="px-8 py-3 bg-[#F05A28] text-white rounded-full font-medium text-[16px] shadow hover:bg-[#ff5722] transition inline-flex items-center gap-2"
          >
            Talk to an Expert
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Section2;
