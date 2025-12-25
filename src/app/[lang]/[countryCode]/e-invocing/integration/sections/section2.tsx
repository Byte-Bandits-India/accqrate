"use client";

import React from "react";
import FadeUp from '@/Components/ui/FadeUp'
import { useParams } from "next/navigation";
import Image from "next/image";
import { COUNTRY_FEATURES } from "../data/CountryFeatures";
import T from "@/Components/T";

const Section2 = () => {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = (params?.countryCode as string) || "sa";
  const content = COUNTRY_FEATURES[countryCode] || COUNTRY_FEATURES["sa"];

  return (
    <>
      {/* ======================= TOP SECTION ======================= */}
      <section className="bg-[#eff3ff] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
          <FadeUp>

          {/* ---------- Heading ---------- */}
          <h2 className="text-[18px] md:text-[24px] font-bold text-center text-[#1C2041]">
            <T lang={lang} countryCode={countryCode}>
              {content.integrationHeading}
            </T>{" "}
            <span className="text-[#1a4ced] ">
              <T lang={lang} countryCode={countryCode}>
                {content.integrationHighlight}
              </T>
            </span>
          </h2>

          <p className="mt-2 text-center text-[#5A6183]  mx-auto">
            <T lang={lang} countryCode={countryCode}>
              {content.integrationDescription}
            </T>
          </p>

          {/* ---------- TOP 3 CARDS (CENTER CARD BIGGER) ---------- */}
          <div className="grid grid-cols-1 md:flex gap-8 md:justify-center mt-14 items-center">
            {content.sections.map((item, i) => {
              const isCenter = i === 1;

              return (
                <div
                  key={i}
                  className={`bg-white rounded-[16px] border border-[#E6E9F5] px-8 w-[300px] mx-auto md:mx-0
                    ${isCenter ? "py-10 lg:scale-105 h-auto md:h-[440px] md:w-[340px]" : "py-12 h-auto md:h-[420px] md:w-[340px]"}
                  `}
                >
                  <div className="w-12 h-12 rounded-[10px] bg-[#EEF2FF] flex items-center justify-center mb-6">
                    <Image src={item.img} alt={item.title} width={35} height={28} />
                  </div>

                  <h3 className="text-[16px] lg:text-[18px] font-bold text-[#1C2041] mb-2">
                    <T lang={lang} countryCode={countryCode}>
                      {item.title}
                    </T>
                  </h3>

                  <p className="text-[#7C8DB0] lg:text-[16px] leading-relaxed tracking-wide">
                    <T lang={lang} countryCode={countryCode}>
                      {item.desc}
                    </T>
                  </p>
                </div>
              );
            })}
          </div>
          </FadeUp>
          </div>
        </section>

      {/* ======================= SECOND SECTION ======================= */}
      <section className="bg-[#F5F7FF] py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
          <FadeUp>

          {/* ---------- Sub Heading ---------- */}
          <h2 className="text-[24px] md:text-[30px] text-center font-bold text-[#1C2041]">
            <T lang={lang} countryCode={countryCode}>
              {content.featureHeading}
            </T>{" "}
            <span className="text-[#1a4ced] ">
              <T lang={lang} countryCode={countryCode}>
                {content.featureHighlight}
              </T>
            </span>{" "}
            Solutions
          </h2>

          <p className="mt-4 text-[#5A6183] max-w-2xl text-[14px] md:text-[16px] text-center mx-auto">
            <T lang={lang} countryCode={countryCode}>
              {content.featureDescription}
            </T>
          </p>


          <div className="mt-14 bg-[#eff3ff] max-w-4xl mx-auto rounded-[32px] px-10 py-14 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {content.features.map((feature, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={40}
                      height={30}
                      className="w-10 h-10"
                    />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#1C2041] mb-2">
                      <T lang={lang} countryCode={countryCode}>
                        {feature.title}
                      </T>
                    </h3>

                    <p className="text-[#7C8DB0] text-[16px] leading-relaxed">
                      <T lang={lang} countryCode={countryCode}>
                        {feature.description}
                      </T>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          </FadeUp>
          </div>
        </section>
    </>
  );
};

export default Section2;
