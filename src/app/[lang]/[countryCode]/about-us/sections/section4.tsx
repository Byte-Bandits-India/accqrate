// -------------------- SECTION 4 --------------------
"use client";

import Image from "next/image";
import T from "@/Components/T";
import FadeUp from "@/Components/ui/FadeUp";
import { useParams } from "next/navigation";
import { section4Content } from "../data/section4Content";

const Section4: React.FC = () => {
  const params = useParams();
  const countryCode =
    (params?.countryCode as string)?.toLowerCase() || "be";
  const lang = (params?.lang as string) || "en";

  const content =
    section4Content[countryCode as keyof typeof section4Content] ||
    section4Content.default;

  const features = content.features;
  const featureCount = features.length;

  // Render card component with dynamic height based on layout
  const renderCard = (feature: any, index: number, isBottomRow = false, isTwoByTwo = false) => {
    const cardIndex = isBottomRow ? index + (featureCount > 4 ? 3 : 2) : index;

    return (
      <div key={cardIndex}>
        <div
          className={`relative flex-shrink-0 bg-white 
            rounded-[16px]
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            w-full ${isTwoByTwo ? 'h-[420px]' : 'h-[460px]'} p-8 flex flex-col`}
        >
          {/* Image + Number */}
          <div className="relative flex justify-between items-start mb-6">
            <Image
              src={feature.img}
              alt={feature.title}
              width={180}
              height={180}
              className="w-[140px] sm:w-[160px] md:w-[150px] object-contain"
            />

            <span
              className={`absolute ${lang === "ar" ? "left-1" : "right-1"
                } bottom-0 
                text-[70px] md:text-[70px]
                font-bold text-[#E6E6E6] select-none leading-none`}
            >
              {String(cardIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-[16px] md:text-[18px] font-bold mb-4 leading-[28px] text-black">
            <T>{feature.title}</T>
          </h3>

          <p className="text-[12px] md:text-[14px] text-gray-700 leading-[25px] whitespace-pre-line">
            <T>{feature.description}</T>
          </p>
        </div>
      </div>
    );
  };

  // Get grid class based on feature count and whether it's bottom row
  const getGridClass = (count: number, isBottomRow = false) => {
    if (count === 2) {
      return 'sm:grid-cols-2 w-full'; // Full width for 2x2 layout
    } else if (count === 3) {
      return 'sm:grid-cols-2 lg:grid-cols-3';
    }
    // For 1 or 4+ cards, use responsive grid
    return 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <section className="bg-[#f0f4ff] w-full mt-[80px] px-6 md:px-8 xl:px-0 py-20">
      {/* Heading */}
      <div className="text-left max-w-[1280px] mx-auto">
        <FadeUp>
          <h2 className="text-[24px] text-[#1c2041] leading-[38px] font-bold">
            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
              {content.header}
            </T>
          </h2>

          <p className="text-[14px] md:text-[16px] text-gray-600 mt-[8px] leading-[28px] max-w-[900px]">
            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
              {content.subtitle}
            </T>
          </p>
        </FadeUp>
      </div>

      {/* ================= DYNAMIC CARD LAYOUT ================= */}
      <div className="max-w-[1280px] mx-auto mt-14">
        <FadeUp>
          {/* Handle 4, 5, or 6 cards with specific layouts */}
          {featureCount === 4 && (
            <>
              {/* Top Row - 2x2 layout */}
              <div className={`grid grid-cols-1 ${getGridClass(2)} gap-8`}>
                {features.slice(0, 2).map((feature, index) => renderCard(feature, index, false, true))}
              </div>

              {/* Bottom Row - 2x2 layout */}
              <div className={`grid grid-cols-1 ${getGridClass(2, true)} gap-8 mt-10`}>
                {features.slice(2, 4).map((feature, index) => renderCard(feature, index, true, true))}
              </div>
            </>
          )}

          {featureCount === 5 && (
            <>
              {/* Top Row - 3 cards */}
              <div className={`grid grid-cols-1 ${getGridClass(3)} gap-8`}>
                {features.slice(0, 3).map((feature, index) => renderCard(feature, index))}
              </div>

              {/* Bottom Row - 2 cards (centered) */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-[800px] mx-auto`}>
                {features.slice(3, 5).map((feature, index) => renderCard(feature, index, true))}
              </div>
            </>
          )}

          {featureCount === 6 && (
            <>
              {/* Top Row - 3 cards */}
              <div className={`grid grid-cols-1 ${getGridClass(3)} gap-8`}>
                {features.slice(0, 3).map((feature, index) => renderCard(feature, index))}
              </div>

              {/* Bottom Row - 3 cards */}
              <div className={`grid grid-cols-1 ${getGridClass(3)} gap-8 mt-10`}>
                {features.slice(3, 6).map((feature, index) => renderCard(feature, index, true))}
              </div>
            </>
          )}

          {/* Handle other counts (1-3, 7+) in a single grid */}
          {![4, 5, 6].includes(featureCount) && (
            <div className={`grid grid-cols-1 ${getGridClass(featureCount)} gap-8`}>
              {features.map((feature, index) => renderCard(feature, index))}
            </div>
          )}

        </FadeUp>
      </div>
    </section>
  );
};

export default Section4;