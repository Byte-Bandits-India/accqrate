"use client";

import React from "react";
import FadeUp from '@/Components/ui/FadeUp'
import { useParams } from "next/navigation";
import Image from "next/image";
import { COUNTRY_FEATURES } from "../data/CountryFeatures";
import T from "@/Components/T";
import Reveal from "@/Components/Reveal";

const Section2 = () => {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = (params?.countryCode as string) || "sa";
  const content = COUNTRY_FEATURES[countryCode] || COUNTRY_FEATURES["sa"];

  return (
    <>
      {/* ======================= TOP SECTION ======================= */}
      <section className="bg-[#eff3ff] py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-0">
          <FadeUp>

            {/* ---------- Heading ---------- */}
            <h2 className="text-[23px] md:text-[24px]  font-bold text-center text-[#1C2041] leading-[36px]">
              <T lang={lang} countryCode={countryCode}>
                {content.integrationHeading}
              </T>{" "}
              <span className="text-[#1a4ced] leading-[36px]">
                <T lang={lang} countryCode={countryCode}>
                  {content.integrationHighlight}
                </T>
              </span>
            </h2>

            <p className="mt-2 text-center text-[16px] leading-[28px] text-[#5A6183]  mx-auto">
              <T lang={lang} countryCode={countryCode}>
                {content.integrationDescription}
              </T>
            </p>

            {/* ---------- TOP 3 CARDS (CENTER CARD BIGGER) ---------- */}
            <div className="grid grid-cols-1 md:flex gap-8 md:justify-center mt-14 items-center">
              {content.sections.map((item, i) => {
                const isCenter = i === 1;

                return (
                  <Reveal direction="left"
                    key={i}
                    className={`bg-white rounded-[16px] border border-[#E6E9F5] px-8 md:w-[300px] mx-auto md:mx-0
                    ${isCenter ? "py-10 lg:scale-105 h-auto lg:h-[500px] lg:w-[340px]" : "py-12 h-auto lg:h-[480px] lg:w-[360px]"}
                  `}
                  >
                    <div className="w-12 h-12 rounded-[10px] bg-[#EEF2FF] flex items-center justify-center mb-6">
                      <Image src={item.img} alt={item.title} width={40} height={28} />
                    </div>

                    <h3 className="text-[16px] lg:text-[18px]  leading-[28px] font-bold text-[#1C2041] mb-4">
                      <T lang={lang} countryCode={countryCode}>
                        {item.title}
                      </T>
                    </h3>

                    <p className="text-[#7C8DB0] text-[16px] leading-[35px] ">
                      <T lang={lang} countryCode={countryCode}>
                        {item.desc}
                      </T>
                    </p>
                  </Reveal>
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
            <h2 className="text-[23px] md:text-[30px] text-center leading-[32px] font-bold text-[#1C2041]">
              <T lang={lang} countryCode={countryCode}>
                {content.featureHeading}
              </T>{" "}
              <span className="text-[#1a4ced] ">
                <T lang={lang} countryCode={countryCode}>
                  {content.featureHighlight}
                </T>
              </span>{" "}
              <T>Solutions</T>
            </h2>

            <p className="mt-4 text-[#5A6183] max-w-2xl text-[16px] text-center mx-auto leading-[28px]">
              <T lang={lang} countryCode={countryCode}>
                {content.featureDescription}
              </T>
            </p>


            <div className="mt-14 bg-[#eff3ff] max-w-4xl mx-auto rounded-[32px] px-10 py-14 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {content.features.map((feature, index) => (
                  <Reveal direction="right" key={index} className="flex gap-5 items-start">
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
                      <h3 className="text-[16px] md:text-[18px] font-bold text-[#1C2041] mb-2">
                        <T lang={lang} countryCode={countryCode}>
                          {feature.title}
                        </T>
                      </h3>

                      <p className="text-[#7C8DB0] text-[16px] leading-[28px]">
                        <T lang={lang} countryCode={countryCode}>
                          {feature.description}
                        </T>
                      </p>
                    </div>
                  </Reveal>
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
