"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import { COUNTRY_CONTENT } from "../data/CountryContent";
import T from "@/Components/T";
import CTAButton from "@/Components/CTAButton";
import Reveal from "@/Components/Reveal";

// Import ContactModal with dynamic loading
const ContactModal = dynamic(
  () => import("@/Components/ContactModal").then((mod) => mod.ContactModal),
  {
    ssr: false,
    loading: () => null,
  }
);

const Software = () => {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = (params?.countryCode as string) || "sa";
  const [isModalOpen, setModalOpen] = useState(false);

  const content = COUNTRY_CONTENT[countryCode] || COUNTRY_CONTENT["sa"];

  return (
    <section>
      <div className="bg-[#eff3ff] pt-16 px-6 md:px-8 xl:px-0 pb-12 overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT CONTENT */}
          <Reveal direction="left" className="flex flex-col justify-center max-w-[645px] w-full">
            <p className="text-white border text-[10px] mb-6 bg-[#91abff] px-4 py-2 rounded-[5px] w-fit">
              <T lang={lang} countryCode={countryCode}>{content.subtitle}</T>
            </p>

            <h1 className="text-[25px] lg:text-[31px] leading-[37.5px] font-bold text-[#1c2041]">
              <T lang={lang} countryCode={countryCode}>{content.title}</T> {" "}
              <span style={{ color: content.highlightColor }}>
                <T lang={lang} countryCode={countryCode}>{content.highlight}</T>
              </span>
              <span>{content.titlend}</span>
            </h1>

            <div
              className="h-[2px] w-[156px] my-4"

            />

            {/* White Box */}
            <div className="flex items-center md:w-[600px] gap-6 p-4 md:p-6 border rounded-2xl bg-white">
              <Image
                src={content.boxImage}
                alt=""
                width={70}
                height={80}
                className="h-[60px] md:h-[80px] w-auto"
              />
              <div>
                <h3 className="text-[#1C2041] leading-[28px] text-[16px] lg:text-[18px] font-bold">
                  <T lang={lang} countryCode={countryCode}>{content.boxTitle}</T>
                </h3>
                <p className="text-[#5A6183] leading-[28px] text-[16px] mt-2">
                  <T lang={lang} countryCode={countryCode}>{content.boxSubtitle}</T>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="py-10">
              <CTAButton
                text={<T lang={lang} countryCode={countryCode}>Get a Free Proof of Concept</T>}
                onClick={() => setModalOpen(true)}
              />
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal direction="right" className="flex-1 min-w-0 flex flex-col items-center">
            <Image
              src={content.rightImage || AssetPath.integration.invoice.src}
              alt="software ui"
              width={591}
              height={400}
              className="w-full max-w-[591px] h-auto rounded"
              unoptimized
            />

            <div className="flex gap-4 mt-8 text-center md:text-[20px]">
              <p className="md:text-[16px] text-gray-600">
                <T lang={lang} countryCode={countryCode}>Seamless</T>
              </p>
              <Image src={AssetPath.home.starOr} alt="star" width={20} height={20} className="w-5 h-5 mt-1" />
              <p className="md:text-[16px] text-gray-600">
                <T lang={lang} countryCode={countryCode}>Compliant</T>
              </p>
              <Image src={AssetPath.home.starOr} alt="star" width={20} height={20} className="w-5 h-5 mt-1" />
              <p className="md:text-[16px] text-gray-600">
                <T lang={lang} countryCode={countryCode}>Secure</T>
              </p>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <ContactModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
        // Pass additional props if needed
        />
      )}
    </section>
  );
};

export default Software;
