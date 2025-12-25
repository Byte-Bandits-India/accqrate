"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section2Content } from "../data/section2Content";
import FadeUp from "@/Components/ui/FadeUp";

export default function Section2() {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toLowerCase() || "be";
  const lang = (params?.lang as string) || "en";

  const content =
    section2Content[countryCode as keyof typeof section2Content] ||
    section2Content.default;

  const leftImage =
    content.section1?.image || AssetPath.aboutus.beabout;

  const rightImage =
    content.section2?.image || AssetPath.aboutus.bemission;

  return (
    <section className="w-full overflow-x-hidden bg-white py-20 ">
      <div className="max-w-[1177px] mx-auto w-full">
        <FadeUp>

        {/* ================= SECTION 1 ================= */}
        <h2 className="text-[20px] md:text-[24px] text-center font-bold mb-12">
          <span className="text-[#1A4CED]">Accqrate</span>{" "}
          <span className="text-[#1C2041]">
            <T lang={lang} countryCode={countryCode.toUpperCase()}>
              {content.section1Title.replace("Accqrate", "")}
            </T>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-28 items-center">

          {/* Left Image */}
          <div className="w-full flex justify-center">
            <Image
              src={leftImage}
              alt="Country visual"
              width={480}
              height={440}
              unoptimized
              className="rounded-2xl object-cover w-full max-w-[480px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col text-[14px] md:text-[16px] leading-relaxed">

            <div>
              <h3 className="font-bold text-[16px] md:text-[18px] mb-2">
                <T>{content.section1.title1}</T>
              </h3>
              <p className="text-[#5A6183]">
                <T>{content.section1.desc1}</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[16px] md:text-[18px] mb-2">
                <T>{content.section1.title2}</T>
              </h3>
              <p className="text-[#5A6183]">
                <T>{content.section1.desc2}</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[16px] md:text-[18px] mb-2">
                <T>{content.section1.title3}</T>
              </h3>
              <p className="text-[#5A6183]">
                <T>{content.section1.desc3}</T>
              </p>
            </div>

          </div>
        </div>
        </FadeUp>
      </div>

      {/* ================= OUR MISSION ================= */}
      <div className="w-full bg-[#29256F] py-20 ">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2  gap-10 items-center">
          <FadeUp>

          {/* Left Text */}
          <div className="text-white">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-6">
              <T>{content.section2Title}</T>
            </h2>

            <div className="mb-8">
              <h3 className="font-semibold text-[#9894FF] text-[16px] md:text-[18px] mb-4">
                <T>{content.section2.title1}</T>
              </h3>
              <p className=" text-[14px] leading-relaxed">
                <T>{content.section2.desc1}</T>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#9894FF] text-[16px] md:text-[18px] mb-4">
                <T>{content.section2.title2}</T>
              </h3>
              <p className="text-[14px] leading-relaxed">
                <T>{content.section2.desc2}</T>
              </p>
            </div>
          </div>
</FadeUp>
          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={rightImage}
              alt="Mission"
              width={320}
              height={320}
              unoptimized
              className=" object-cover w-full max-w-[320px]"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
