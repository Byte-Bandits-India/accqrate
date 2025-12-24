"use client";

import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section3Content } from "../data/section3Contet";
import React from "react";


function highlightTitle(text: string) {
  const HIGHLIGHT_PHRASES =
    /(Iteron AG|Accqrate Global Platform|Regulated Markets|API-First Integrations|MNC Deployments|Belgium\s*&\s*EU|Enterprise-Grade)/gi;

  const parts = text.split(HIGHLIGHT_PHRASES);

  return parts.map((part, i) =>
    HIGHLIGHT_PHRASES.test(part) ? (
      <span key={i} className="text-[#1A4CED] font-semibold">
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

       
        <h2 className="text-center text-[18px] md:text-[24px] font-bold mb-2">
          <span className="text-[#1A4CED]">Our</span> Journey
        </h2>

        <p className="text-center text-sm md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-tight">
          <T lang={lang} countryCode={countryCode?.toUpperCase()}>
            {content.subtitle}
          </T>
        </p>

       
        <div className="relative mt-16 md:mt-20">

          {/* Vertical Line */}
          <div
            aria-hidden="true"
            className="absolute left-2 md:left-1/2 top-12 bottom-0 w-[4px] bg-black md:-translate-x-1/2"
          />

          <div className="flex flex-col space-y-24 md:space-y-32 mt-8">

            {content.timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative"
                >
                  
                  <div className="absolute left-0.5 top-1/2 -translate-y-1/2 md:relative md:left-auto md:top-[28%] md:translate-y-0 flex justify-center md:order-2">
                    <div className="w-5 h-5 bg-black rounded-full z-10" />
                  </div>

               
                  <div
                    className={`hidden md:flex ${
                      isLeft
                        ? "justify-start pl-6 md:order-3"
                        : "justify-end md:order-1"
                    }`}
                  >
                    <span className="text-[32px] md:text-[54px] font-bold">
                      {item.year}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`flex-1 ml-6 md:ml-0 md:max-w-[480px] ${
                      isLeft
                        ? "md:pr-6 md:order-1"
                        : "md:pl-6 md:order-3"
                    }`}
                  >
                    
                    <div className="md:hidden mb-2">
                      <span className="text-[32px] font-bold">
                        {item.year}
                      </span>
                    </div>

                  
                    <h3 className="font-bold text-[16px] md:text-[18px] xl:w-[300px]">
                      <T lang={lang} countryCode={countryCode?.toUpperCase()}>
                        {highlightTitle(item.title)}
                      </T>
                    </h3>

                   
                    <p className="text-gray-700 text-[14px] mt-2 leading-relaxed xl:w-[380px]">
                      <T lang={lang} countryCode={countryCode?.toUpperCase()}>
                        {item.description}
                      </T>
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
