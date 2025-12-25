"use client";

import { ProofData } from "../data/Proofdata";
import { useParams } from "next/navigation";
import T from "@/Components/T";
import FadeUp from '@/Components/ui/FadeUp'

export default function ProofSection() {
  const params = useParams();
  const countryCode = (params?.countryCode as string) || "be";
  const lang = (params?.lang as string) || "en";

  const data = ProofData[countryCode as keyof typeof ProofData] || ProofData["be"];

  const integrationLabel =
    countryCode === "be"
      ? "Peppol / EN 16931 Integration"
      : countryCode === "pl"
        ? "KSeF Integration"
        : countryCode === "ae"
          ? "Peppol / UAE PINT Integration"
          : "ZATCA Integration";

  return (
    <section className="px-6 md:px-8 lg:px-0 py-12">
      <div className="max-w-[1100px] mx-auto text-center mb-12">
        <FadeUp>
        <h2 className="text-[18px] md:text-[24px] font-bold text-[#1C2041] mb-3">
          <T lang={lang} countryCode={countryCode}>{data.title}</T>{" "}
          <span className="text-[#194BED]"><T lang={lang} countryCode={countryCode}>{integrationLabel}</T></span>
        </h2>

        <p className="text-[#5A6183] text-[14px] md:text-[16px]">
          <T lang={lang} countryCode={countryCode}>{data.subtitle}</T>
        </p>
        </FadeUp>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-10 max-w-[1100px] mx-auto">

        {/* LEFT COLUMN */}
        <div className="space-y-10">
          {data.leftItems.map((item, i) => (
            <div key={i}>
              <h3 className="text-[#1C2041] font-semibold text-[16px] md:text-[18px] mb-1">
                <T lang={lang} countryCode={countryCode}>{item.title}</T>
              </h3>
              <p className="text-[#5A6183] leading-relaxed max-w-[430px] text-[14px] md:text-[16px]">
                <T lang={lang} countryCode={countryCode}>{item.desc}</T>
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          {data.rightItems.map((item, i) => (
            <div key={i}>
              <h3 className="text-[#1C2041] font-semibold text-[16px] md:text-[18px] mb-1">
                <T lang={lang} countryCode={countryCode}>{item.title}</T>
              </h3>
              <p className="text-[#5A6183] leading-relaxed max-w-[430px] text-[14px] md:text-[16px]">
                <T lang={lang} countryCode={countryCode}>{item.desc}</T>
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
