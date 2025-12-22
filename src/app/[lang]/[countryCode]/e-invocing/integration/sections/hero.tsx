"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import { COUNTRY_CONTENT } from "../data/CountryContent";
import T from "@/Components/T";
import uaeHero from "@/Assets/images/integration/UAE_integration_hero.webp";
import saHero from "@/Assets/images/invoicing/create-invoice.webp";

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
          <div className="flex flex-col justify-center max-w-[645px] w-full">
            <p className="text-white border text-[10px] mb-6 bg-[#91abff] px-4 py-2 rounded-[5px] w-fit">
              <T lang={lang} countryCode={countryCode}>{content.subtitle}</T>
            </p>

            <h1 className="text-[24px] lg:text-[31px] leading-tight font-bold text-[#1c2041]">
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
            <div className="flex items-center md:w-[600px] gap-6 p-6 border rounded-2xl bg-white">
              <Image
                src={content.boxImage}
                alt=""
                width={70}
                height={80}
                className="md:h-[80px] w-auto"
              />
              <div>
                <h3 className="text-[#1C2041] text-[16px] lg:text-[18px] font-bold">
                  <T lang={lang} countryCode={countryCode}>{content.boxTitle}</T>
                </h3>
                <p className="text-[#5A6183] text-[14px] lg:text-[16px] mt-2">
                  <T lang={lang} countryCode={countryCode}>{content.boxSubtitle}</T>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="py-10">
              <button
                onClick={() => setModalOpen(true)}
                className="relative flex  items-center mx-auto md:mx-0 justify-center w-[280px] h-[52px] bg-[#d63f10] rounded-full text-white hover:bg-[#E04A18] transition-colors duration-200"
              >
                <T lang={lang} countryCode={countryCode}>Get a Free Proof of Concept</T>
                <svg
                  width="14"
                  height="24"
                  className="absolute right-4 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 min-w-0 flex flex-col items-center">
            <Image
              src={countryCode === "ae" ? uaeHero : countryCode === "sa" ? saHero : AssetPath.integration.invoice}
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
          </div>

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
