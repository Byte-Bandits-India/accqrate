"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import { Choose } from "../data/Choose";
import { useParams } from "next/navigation";
import T from "@/Components/T";
import FadeUp from '@/Components/ui/FadeUp'
import belgiumInvoiceHero from "@/Assets/images/invoicing/belgium_invoice_hero.webp";
import zatcaIntegratedDashboard from "@/Assets/images/invoicing/zatca-integrated-dashboard.webp";

export default function Section4() {
  const params = useParams();
  const countryCode = (params?.countryCode as string) || "be";
  const lang = (params?.lang as string) || "en";

  const data = Choose[countryCode as keyof typeof Choose] || Choose["be"];

  const getInvoiceMultipleImage = () => {
    switch (countryCode) {
      case "be":
        return belgiumInvoiceHero;
      case "pl":
        return AssetPath.invoicing.invoiceMultiplePng;
      case "ae":
        return AssetPath.invoicing.UAE_invoice_1;
        case "ma":
        return AssetPath.integration.matax;
      default:
        return AssetPath.invoicing.invocingCta;
    }
  };

  const getDashboardMultipleImage = () => {
    switch (countryCode) {
      case "be":
        return AssetPath.integration.uaedash;
      case "pl":
        return AssetPath.integration.dashboard;
      case "ae":
        return AssetPath.integration.uaedash;
      case "sa":
        return zatcaIntegratedDashboard;
        case "ma":
        return AssetPath.integration.dashboard;
      default:
        return zatcaIntegratedDashboard;
    }
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-8  bg-[#f7f7ff]">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <h2 className="text-[23px] md:text-[24px] font-bold text-[#1C2041]">
            <T lang={lang} countryCode={countryCode}>{data.title}</T>{" "}
            <span className="text-[#194BED]">
              <T lang={lang} countryCode={countryCode}>Accqrate?</T>
            </span>
          </h2>

          <p className="text-[#5A6183] text-[16px] max-w-[720px] mx-auto mt-2 md:mt-4 leading-[28px]">
            <T lang={lang} countryCode={countryCode}>{data.subtitle}</T>
          </p>
        </div>

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT – STATIC LIST (NO ACCORDION) */}
          <div className="order-2 lg:order-1 space-y-5">
            {data.topLeftItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* Tick Icon */}
                <Image
                  src={AssetPath.integration.tick}
                  width={22}
                  height={22}
                  alt="check"
                  className="mt-1 shrink-0"
                />

                {/* Text */}
                <p className="text-[#5A6183] text-[16px] leading-[28px]">
                  <span className="font-bold text-[#1C2041]">
                    <T lang={lang} countryCode={countryCode}>
                      {item.title}
                    </T>
                  </span>
                  {": "}
                  <T lang={lang} countryCode={countryCode}>
                    {item.desc}
                  </T>
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-center items-center my-auto order-1 lg:order-2">
            {data.topRightImage && (
              <Image
                src={
                  countryCode === "sa"
                    ? zatcaIntegratedDashboard
                    : getDashboardMultipleImage().src
                }
                width={800}
                height={600}
                alt="Dashboard"
                className="rounded-xl"
                unoptimized
              />
            )}
          </div>
        </div>

        {/* ================= BOTTOM GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 bg-[#eff3ff] p-6 md:p-8 rounded-[20px]">

          {/* LEFT – INVOICE IMAGE */}
          <div className="flex justify-center">
            {data.bottomLeftImage && (
              <Image
                src={getInvoiceMultipleImage().src}
                width={520}
                height={420}
                alt="Invoice Example"
                className="rounded-xl"
                unoptimized
              />
            )}
          </div>

          {/* RIGHT – CHECK LIST */}
          <div className="space-y-4 flex flex-col justify-center">
            {data.bottomRightItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Image
                  src={AssetPath.integration.tick}
                  width={24}
                  height={24}
                  alt="check"
                  className="mt-1"
                />
                <p className="text-[#1C2041] text-[16px] leading-[28px]">
                  <T lang={lang} countryCode={countryCode}>{item}</T>
                </p>
              </div>
            ))}
          </div>

        </div>
        </FadeUp>
      </div>
    </section>
  );
}
