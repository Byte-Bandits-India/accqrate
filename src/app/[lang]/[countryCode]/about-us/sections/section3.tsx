"use client";

import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section3Content } from "../data/section3Contet";
import FadeUp from "@/Components/ui/FadeUp";
import Reveal from "@/Components/Reveal";

function highlightTitle(text: string) {
  const HIGHLIGHT_PHRASES =
    /(Iteron AG|Accqrate Global Platform|Regulated Markets|API-First Integrations|MNC Deployments|Belgium\s*&\s*EU|Enterprise-Grade)/gi;

  const parts = text.split(HIGHLIGHT_PHRASES);

  return parts.map((part, i) =>
    HIGHLIGHT_PHRASES.test(part) ? (
      <span key={i} className="text-[#1A4CED] font-bold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Section3() {
  const params = useParams();
  const countryCode =
    (params?.countryCode as string)?.toLowerCase() || "be";
  const lang = (params?.lang as string) || "en";

  const content =
    section3Content[countryCode as keyof typeof section3Content] ||
    section3Content.default;

  return (
    <section className="overflow-x-hidden w-full bg-white py-10 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          {/* HEADER */}
          <Reveal direction="bottom">
            <h2 className="text-center text-[18px] text-[#1c2041] md:text-[24px] leading-[38px] font-bold">
              <span className="text-[#1A4CED]">Our</span> Journey
            </h2>

            <p className="text-center text-sm md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-[28px]">
              <T lang={lang} countryCode={countryCode?.toUpperCase()}>
                {content.subtitle}
              </T>
            </p>
          </Reveal>

          {/* TIMELINE */}
          <div className="relative mt-16 md:mt-20">
            {/* Vertical Line */}
            <div
              aria-hidden="true"
              className="absolute left-2 md:left-1/2 top-[54px] bottom-0 w-[4px] bg-[#1c2041] lg:mt-[86px] xl:mt-[68px] md:-translate-x-1/2"
            />

            <div className="flex flex-col space-y-24 md:space-y-12 mt-8">
              {content.timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className="flex md:grid md:grid-cols-[1fr_auto_1fr] gap-20 items-center pl-8 md:pl-0 relative"
                  >
                    {/* DOT */}
                    <div className="absolute left-0.5 top-1/2 -translate-y-1/2 md:relative md:left-auto md:top-auto md:translate-y-0 flex justify-center md:order-2">
                      <div className="w-5 h-5 bg-[#1c2041] rounded-full z-10" />
                    </div>

                    {/* YEAR */}
                    <div
                      className={`hidden md:flex items-center ${isLeft
                        ? "justify-start md:order-3"
                        : "justify-end md:order-1"
                        }`}
                    >
                      <Reveal direction={isLeft ? "left" : "right"}>
                        <span className="text-[42px] text-[#1c2041] font-bold">
                          {item.year}
                        </span>
                      </Reveal>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`flex-1 ml-6 md:ml-0 md:max-w-[460px] ${isLeft
                        ? "md:order-1 md:text-right"
                        : "md:order-3 text-left"
                        }`}
                    >
                      <Reveal direction={isLeft ? "left" : "right"}>
                        {/* Mobile Year */}
                        <div className="md:hidden mb-2">
                          <span className="text-[35px] text-[#1c2041] leading-[35px] font-bold">
                            {item.year}
                          </span>
                        </div>

                        <h3 className="font-bold text-[16px] md:text-[24px] leading-[39px]">
                          <T lang={lang} countryCode={countryCode?.toUpperCase()}>
                            {highlightTitle(item.title)}
                          </T>
                        </h3>

                        <p className="text-[#1c2041] text-[16px] mt-2 leading-[35px]">
                          <T lang={lang} countryCode={countryCode?.toUpperCase()}>
                            {item.description}
                          </T>
                        </p>
                      </Reveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
