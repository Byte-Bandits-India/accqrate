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

  // Render card component - SIMPLIFIED to avoid index confusion
  const renderCard = (feature: any, index: number, isReducedHeight = false) => {
    return (
      <div key={index}>
        <div
          className={`relative flex-shrink-0 bg-white 
            rounded-[16px]
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            w-full ${isReducedHeight ? 'h-auto md:h-[458px]' : 'h-auto md:h-[450px]'} p-8 flex flex-col`}
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
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-[16px] md:text-[18px] font-bold mb-4 leading-tight text-black">
            <T>{feature.title}</T>
          </h3>

          <p className="text-[12px] md:text-[14px] text-gray-700 leading-relaxed whitespace-pre-line">
            <T>{feature.description}</T>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#f0f4ff] w-full mt-[80px] px-6 md:px-8 xl:px-0 py-20">
      {/* Heading */}
      <div className="text-left max-w-[1100px] mx-auto">
        <FadeUp>
          <h2 className="text-[18px] md:text-[24px] font-bold">
            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
              {content.header}
            </T>
          </h2>

          <p className="text-[14px] md:text-[16px] text-gray-600 mt-3 leading-relaxed max-w-[900px]">
            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
              {content.subtitle}
            </T>
          </p>
        </FadeUp>
      </div>

      {/* ================= DYNAMIC CARD LAYOUT ================= */}
      <div className="max-w-[1100px] mx-auto mt-14">
        <FadeUp>
          {/* Handle 4 cards - same for all screens */}
          {featureCount === 4 && (
            <>
              {/* For md screens: 2x2 layout */}
              <div className="md:block lg:hidden">
                {/* Top Row - 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.slice(0, 2).map((feature, index) => renderCard(feature, index))}
                </div>

                {/* Bottom Row - 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  {features.slice(2, 4).map((feature, index) => renderCard(feature, index + 2))}
                </div>
              </div>

              {/* For lg+ screens: 2x2 layout (same as original) */}
              <div className="hidden lg:block">
                {/* Top Row - 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {features.slice(0, 2).map((feature, index) => renderCard(feature, index))}
                </div>

                {/* Bottom Row - 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                  {features.slice(2, 4).map((feature, index) => renderCard(feature, index + 2))}
                </div>
              </div>
            </>
          )}

          {/* Handle 5 cards */}
          {featureCount === 5 && (
            <>
              {/* For md screens: 2x2 layout with last card on left */}
              <div className="md:block lg:hidden">
                <div className="space-y-10">
                  {/* First row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.slice(0, 2).map((feature, index) => renderCard(feature, index))}
                  </div>

                  {/* Second row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.slice(2, 4).map((feature, index) => renderCard(feature, index + 2))}
                  </div>

                  {/* Third row - 1 card (on LEFT side) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {renderCard(features[4], 4)}
                    <div></div> {/* Empty div for second column */}
                  </div>
                </div>
              </div>

              {/* For lg+ screens: ORIGINAL 3+2 layout */}
              <div className="hidden lg:block">
                {/* Top Row - 3 cards (reduced height) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.slice(0, 3).map((feature, index) => renderCard(feature, index))}
                </div>

                {/* Bottom Row - 2 cards (centered) - ORIGINAL EXACT LAYOUT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-[800px] mx-auto">
                  {features.slice(3, 5).map((feature, index) => renderCard(feature, index + 3))}
                </div>
              </div>
            </>
          )}

          {/* Handle 6 cards */}
          {featureCount === 6 && (
            <>
              {/* For md screens: 2x2x2 layout */}
              <div className="md:block lg:hidden">
                <div className="space-y-10">
                  {/* First row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.slice(0, 2).map((feature, index) => renderCard(feature, index))}
                  </div>

                  {/* Second row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.slice(2, 4).map((feature, index) => renderCard(feature, index + 2))}
                  </div>

                  {/* Third row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.slice(4, 6).map((feature, index) => renderCard(feature, index + 4))}
                  </div>
                </div>
              </div>

              {/* For lg+ screens: ORIGINAL 3+3 layout */}
              <div className="hidden lg:block">
                {/* Top Row - 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.slice(0, 3).map((feature, index) => renderCard(feature, index))}
                </div>

                {/* Bottom Row - 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {features.slice(3, 6).map((feature, index) => renderCard(feature, index + 3))}
                </div>
              </div>
            </>
          )}

          {/* Handle other counts (1-3, 7+) - ORIGINAL RESPONSIVE GRID */}
          {![4, 5, 6].includes(featureCount) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {features.map((feature, index) => renderCard(feature, index))}
            </div>
          )}

        </FadeUp>
      </div>
    </section>
  );
};

export default Section4;