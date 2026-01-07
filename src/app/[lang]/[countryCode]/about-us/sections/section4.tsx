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

  /* ---------------- CARD RENDER ---------------- */
  const renderCard = (
    feature: any,
    index: number,
    isFourCards = false
  ) => {
    return (
      <div key={index}>
        <div
          className={`relative bg-white rounded-[16px]
          shadow-[0_4px_20px_rgba(0,0,0,0.05)]
          w-full h-auto md:h-[460px]
          p-6 md:p-6 flex flex-col`}
        >
          {/* Image */}
          <div className="relative flex justify-between items-start mb-6">
            <Image
              src={feature.img}
              alt={feature.title}
              width={isFourCards ? 100 : 180}
              height={isFourCards ? 100 : 180}
              className={`object-contain ${isFourCards
                ? "w-[100px] sm:w-[110px] md:w-[90px]"
                : "w-[140px] sm:w-[160px] md:w-[150px]"
                }`}
            />

            {/* Number (hidden for 4 cards) */}
            {!isFourCards && (
              <span
                className={`absolute ${lang === "ar" ? "left-1" : "right-1"
                  } bottom-0 text-[70px]
                font-bold text-[#E6E6E6] select-none leading-none`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-[16px] md:text-[18px] font-bold mb-4 leading-[28px] text-black">
            <T>{feature.title}</T>
          </h3>

          {/* Description */}
          <p
            className={`text-[12px] md:text-[14px] text-gray-700 leading-[26px] ${isFourCards ? "whitespace-pre-line" : "whitespace-pre-line"
              }`}
          >
            <T>{feature.description}</T>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#f0f4ff] w-full mt-[80px] px-6 md:px-8 xl:px-0 py-10">
      {/* Heading */}
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <h2 className="text-[18px] md:text-[24px] font-bold">
            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
              {content.header}
            </T>
          </h2>

          <p className="text-[14px] md:text-[16px] text-gray-600 mt-3 leading-[35px] max-w-[900px]">
            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
              {content.subtitle}
            </T>
          </p>
        </FadeUp>
      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-[1100px] mx-auto mt-14">
        <FadeUp>

          {/* -------- 4 CARDS (SPECIAL) -------- */}
          {featureCount === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) =>
                renderCard(feature, index, true)
              )}
            </div>
          )}

          {/* -------- 5 CARDS -------- */}
          {featureCount === 5 && (
            <>
              <div className="md:block lg:hidden space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.slice(0, 2).map((f, i) => renderCard(f, i))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.slice(2, 4).map((f, i) => renderCard(f, i + 2))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {renderCard(features[4], 4)}
                  <div />
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.slice(0, 3).map((f, i) => renderCard(f, i))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-[800px] mx-auto">
                  {features.slice(3, 5).map((f, i) => renderCard(f, i + 3))}
                </div>
              </div>
            </>
          )}

          {/* -------- 6 CARDS -------- */}
          {featureCount === 6 && (
            <>
              <div className="md:block lg:hidden space-y-10">
                {[0, 2, 4].map((start) => (
                  <div key={start} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.slice(start, start + 2).map((f, i) =>
                      renderCard(f, start + i)
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.slice(0, 3).map((f, i) => renderCard(f, i))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {features.slice(3, 6).map((f, i) => renderCard(f, i + 3))}
                </div>
              </div>
            </>
          )}

          {/* -------- DEFAULT -------- */}
          {![4, 5, 6].includes(featureCount) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {features.map((feature, index) =>
                renderCard(feature, index)
              )}
            </div>
          )}

        </FadeUp>
      </div>
    </section>
  );
};

export default Section4;
