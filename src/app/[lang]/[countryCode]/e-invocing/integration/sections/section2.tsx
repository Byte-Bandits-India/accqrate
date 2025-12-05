"use client";

import { useParams } from "next/navigation";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COUNTRY_FEATURES } from "../data/CountryFeatures";
import T from "@/Components/T";

const Section2 = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const params = useParams();
  const countryCode = (params?.countryCode as string) || "sa";

  const content = COUNTRY_FEATURES[countryCode] || COUNTRY_FEATURES["sa"];

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
    <section className="bg-gradient-to-b from-[#EFF3FF] to-transparent">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Dynamic Heading */}
        <div className="px-6 md:px-8 xl:px-0 mt-10">
          <h2 className="text-fluid-h2 font-medium text-black">
            {content.integrationHeading}{" "}
            <span className="text-[#448E32]">{content.integrationHighlight}</span>{" "}
            integration
          </h2>

          <p className="text-[#5A6183] text-fluid-body mt-4">
            {content.integrationDescription}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 md:px-8 xl:px-0">
          {content.sections.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] shadow p-6 md:p-8"
            >
              <img src={item.img} className="w-[60px] mb-4" />
              <h3 className="text-fluid-body font-medium mb-2">{item.title}</h3>
              <p className="text-fluid-small text-[#5A6183]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Slider */}
      <div className="relative mt-10">
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end gap-3 mb-6">
          <button onClick={() => scroll("left")} className="w-9 h-9 rounded-full bg-white border shadow">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="w-9 h-9 rounded-full bg-white border shadow">
            <ChevronRight />
          </button>
        </div>

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-max px-6 md:px-8 xl:px-0">
            {content.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-[16px] shadow p-6 md:p-8 min-w-[250px]">
                <img src={feature.img} className="h-[50px] mb-4" />
                <h3 className="text-fluid-body font-medium mb-2">
                  <T>{feature.title}</T>
                </h3>
                <p className="text-fluid-small text-[#5A6183]">
                  <T>{feature.description}</T>
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
