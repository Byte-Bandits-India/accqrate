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

      {/* ================= 3 : 2 CARD LAYOUT (NO DESIGN CHANGE) ================= */}
      <div className="max-w-[1100px] mx-auto mt-14">
        <FadeUp>

          {/* TOP ROW — 3 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.slice(0, 3).map((feature, index) => (
              <div key={index}>

                <div
                  className="relative flex-shrink-0 bg-white 
            rounded-[16px]
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            w-full h-[450px] p-8 flex flex-col"
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
            ))}
          </div>

          {/* BOTTOM ROW — 2 CENTERED CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-[800px] mx-auto">
            {content.features.slice(3, 5).map((feature, index) => {
              const actualIndex = index + 3;

              return (
                <div key={actualIndex}>

                  <div
                    className="relative flex-shrink-0 bg-white 
              rounded-[16px]
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
              w-full h-[450px] p-8 flex flex-col"
                  >
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
                text-[70px] 
                font-bold text-[#E6E6E6] select-none leading-none`}
                      >
                        {String(actualIndex + 1).padStart(2, "0")}
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
            })}
          </div>

        </FadeUp>
      </div>

    </section>
  );
};

export default Section4;
