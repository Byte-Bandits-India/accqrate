// -------------------- SECTION 4 --------------------
"use client";

import Image from "next/image";
import T from "@/Components/T";
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle } from "lucide-react";
import { useRef } from "react";
import { useParams } from "next/navigation";
import { section4Content } from "../data/section4Content";

const Section4: React.FC = () => {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toLowerCase() || 'be';
  const lang = (params?.lang as string) || "en";
  const content = section4Content[countryCode as keyof typeof section4Content] || section4Content.default;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 380;
    const gap = 24;

    container.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f0f4ff] w-full mt-[80px] px-6 md:px-8 xl:px-0 py-20">

      {/* Heading */}
      <div className="text-left max-w-[1200px] mx-auto">
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium tracking-tight">
          <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.header}</T>
        </h2>

        <p className="text-[14px] md:text-[18px] text-gray-600 mt-3 leading-relaxed">
          <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.subtitle}</T>
        </p>
      </div>

      {/* Scroll Controls */}
      <div className="max-w-[1000px] mx-auto flex justify-end mt-8 gap-4 px-4 lg:px-0">
        <button
          onClick={() => scroll("left")}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white 
             border border-gray-300 shadow-md hover:bg-gray-100 transition"
        >
          <ArrowLeft size={44} className="text-gray-700" />
        </button>


        <button
          onClick={() => scroll("right")}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white 
                     border border-gray-300 shadow-md hover:bg-gray-100 transition"
        >
          <ArrowRight size={44} className="text-gray-700" />
        </button>
      </div>

      {/* Scrollable Cards */}
      <div className="relative mt-10 xl:ml-40">
        <div className="max-w-[1400px] mx-auto overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 bg-white 
                  rounded-[16px] scroll-snap-align-start 
                  shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_8px_24px_rgba(4,4,0,0.0)] transition-all
                  w-[300px] sm:w-[330px] md:w-[360px] lg:w-[380px]
                  min-h-[400px] p-8 flex flex-col"
              >
                {/* Image + Number */}
                <div className="relative flex justify-between items-start mb-6">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={180}
                    height={180}
                    className="w-[140px] sm:w-[160px] md:w-[180px] object-contain"
                  />

                  <span className={`absolute ${lang === 'ar' ? 'left-1' : 'right-1'} bottom-0 
                    text-[70px] md:text-[90px] lg:text-[90px]
                    font-bold text-[#E6E6E6] select-none leading-none font-anonymous`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[18px] md:text-[30px] font-medium mb-4 leading-tight text-black ">
                  <T>{feature.title}</T>
                </h3>

                {/* Description */}
                <p className="text-[14px] md:text-[18px] text-gray-700 leading-relaxed whitespace-pre-line">
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

export default Section4;