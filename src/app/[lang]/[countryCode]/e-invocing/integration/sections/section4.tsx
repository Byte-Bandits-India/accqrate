"use client";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import { Choose } from "../data/Choose";
import { useParams } from "next/navigation";
import T from "@/Components/T";
import belgiumInvoiceHero from "@/Assets/images/invoicing/belgium_invoice_hero.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

export default function Section4() {
  const params = useParams();
  const countryCode = (params?.countryCode as string) || "sa";
  const lang = (params?.lang as string) || "en";

  const data = Choose[countryCode as keyof typeof Choose] || Choose["sa"];

  const getInvoiceMultipleImage = () => {
    switch (countryCode) {
      case 'be':
        return belgiumInvoiceHero;
      case 'pl':
        return AssetPath.invoicing.invoiceMultiplePng;
      case 'ae':
        return AssetPath.invoicing.UAE_invoice_1;
      default:
        return AssetPath.invoicing.invoiceMultiplePng;
    }
  };
  const getDashboardMultipleImage = () => {
    switch (countryCode) {
      case 'be':
        return AssetPath.integration.uaedash;
      case 'pl':
        return AssetPath.integration.dashboard;
      case 'ae':
        return AssetPath.integration.uaedash;
      default:
        return AssetPath.integration.dashboard;
    }
  };


  return (
    <section className="py-16 md:py-20 px-6 md:px-8 lg:px-0 bg-[#F7F9FF]">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1C2041]">
            <T lang={lang} countryCode={countryCode}>{data.title}</T> <span className="text-[#62B34F]"><T lang={lang} countryCode={countryCode}>Accqrate?</T></span>
          </h2>
          <p className="text-[#5A6183] text-[16px] md:text-[18px] max-w-[720px] mx-auto mt-4 leading-relaxed">
            <T lang={lang} countryCode={countryCode}>{data.subtitle}</T>
          </p>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT – ACCORDION LIST */}
          <div className="order-2 lg:order-1">
            <Accordion type="single" collapsible className="space-y-4">
              {data.topLeftItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className=""
                >
                  <AccordionTrigger
                    className="
          flex
          items-start
          justify-start
          gap-4
          py-4
          text-left
          hover:no-underline
        "
                  >
                    {/* ICON */}
                    <Image
                      src={AssetPath.integration.tick}
                      width={22}
                      height={22}
                      alt="check"
                      className="mt-1 shrink-0"
                    />

                    {/* TEXT */}
                    <h3 className="text-[#1C2041] font-semibold text-[18px]">
                      <T lang={lang} countryCode={countryCode}>
                        {item.title}
                      </T>
                    </h3>

                    {/* PUSH ARROW RIGHT */}
                    <span className="ml-auto" />
                  </AccordionTrigger>

                  <AccordionContent className="pl-10 pb-4">
                    <p className="text-[#5A6183] text-fluid-small leading-relaxed max-w-[450px]">
                      <T lang={lang} countryCode={countryCode}>
                        {item.desc}
                      </T>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            {data.topRightImage && (
              <Image
                src={getDashboardMultipleImage().src}
                width={800}
                height={600}
                alt="Dashboard"
                className="rounded-2xl shadow-sm"
              />
            )}
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 bg-[#ECEDFF] p-4 rounded-[30px]">

          {/* LEFT INVOICE IMAGE */}
          <div className="flex justify-center">
            {data.bottomLeftImage && (
              <Image
                src={getInvoiceMultipleImage().src}
                width={520}
                height={420}
                alt="Invoice Example"
                className="rounded-xl "
              />
            )}
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-4 flex flex-col justify-center mt-4">
            {data.bottomRightItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Image
                  src={AssetPath.integration.tick}
                  width={24}
                  height={24}
                  alt="check"
                  className="mt-1"
                />
                <p className="text-[#1C2041] text-fluid-small leading-relaxed">
                  <T lang={lang} countryCode={countryCode}>{item}</T>
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
