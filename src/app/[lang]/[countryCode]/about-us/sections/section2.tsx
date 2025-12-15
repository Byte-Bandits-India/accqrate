"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section2Content } from "../data/section2Content";

export default function Section2() {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toLowerCase() || 'be';
  const lang = (params?.lang as string) || "en";
  const content = section2Content[countryCode as keyof typeof section2Content] || section2Content.default;
  return (
    <section className="w-full overflow-x-hidden bg-[#f0f4ff] py-20 px-4 md:px-6">
      <div className="max-w-[1177px] mx-auto w-full">

        {/* ---------------------- SECTION 1: Accqrate in Belgium ---------------------- */}
        <h2 className="text-[28px] md:text-[38px] font-semibold mb-10 break-words">
          <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1Title}</T>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28 items-center">

          {/* Left Image */}
          <div className="w-full">
            <Image
              src={AssetPath.aboutus.stone}
              alt="Belgium"
              width={500}
              height={420}
              className="rounded-2xl object-cover w-full max-w-full md:max-w-[580px] h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col text-[14px] md:text-[18px] leading-relaxed w-full overflow-hidden">

            <div className="break-words">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1.title1}</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1.desc1}</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1.title2}</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1.desc2}</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1.title3}</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section1.desc3}</T>
              </p>
            </div>
          </div>

        </div>

        {/* ---------------------- SECTION 2: Our Mission ---------------------- */}

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <div className="text-[14px] md:text-[15px] leading-relaxed w-full overflow-hidden">
            <h2 className="text-[28px] md:text-[38px] font-semibold mb-10 break-words">
              <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section2Title}</T>
            </h2>

            <div className="break-words">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section2.title1}</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section2.desc1}</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section2.title2}</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.section2.desc2}</T>
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="w-full">
            <Image
              src={AssetPath.aboutus.hands}
              alt="Teamwork"
              width={500}
              height={420}
              className="rounded-2xl object-cover w-full max-w-full md:max-w-[412px] h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}