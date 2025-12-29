"use client";

import Image from "next/image";
import Link from "next/link";
import ZatcaSection from "@/Components/ZatcaSection";
import AssetPath from "@/AssetPath/AssetPath";
import Commingsoon from "@/Components/CommingSoon";
import T from "@/Components/T";
export default function WebinarSection() {
  const webinars = [
    {
      id: 1,
      image: AssetPath.webinars.integrationMultipleErps,
      alt: "Integrating Multiple ERP/POS Systems with ZATCA",
      title: "Integrating Multiple ERP/POS Systems with ZATCA",
      description:
        "A comprehensive discussion on how Accqrate, a leader in e-invoicing Solution in KSA, manages the integration of multiple ERP and POS systems within a single organization.",
      link: "/en/sa/resources/webinars/integratingMultipleERPPOS",
    },
    {
      id: 2,
      image: AssetPath.webinars.understandingZatcaRejection,
      alt: "Understanding ZATCA Rejections and Accqrate's Error Management",
      title: "Understanding ZATCA Rejections and Accqrate's Error Management",
      description:
        "A detailed understanding of the common errors that lead to invoice rejections by ZATCA (Zakat, Tax and Customs Authority) and how Accqrate resolves them efficiently.",
      link: "/en/sa/resources/webinars/understandingZATCARejections",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent overflow-hidden">
      <section className="bg-gradient-to-t from-[#EFF3FF] to-transparent pt-16 md:pt-24">
        <div className="mx-auto px-6 md:px-8 xl:px-0 max-w-[1180px]">
          {/* Heading */}
          <div>
            <h2 className="text-[24px] font-bold leading-tight text-[#1c2041] text-left">
              <T>Unlocking Insights Of Webinar</T>
            </h2>

            <div className="w-20 h-[2px] bg-[#194BED] my-6 " />

            <p className="text-[16px] text-left max-w-[900px]">
              <T>This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations</T>
            </p>
          </div>

          <div className="hidden">
            {/* Webinar Cards */}
            <div className="flex flex-col items-start lg:flex-row md:justify-start md:gap-[80px] lg:gap-[100px] py-8 md:py-10 lg:py-[64px]">
              {webinars.map((webinar) => (
                <Link
                  key={webinar.id}
                  href={webinar.link}
                  className="max-w-md md:max-w-[600px] lg:max-w-md text-left group"
                >
                  <div className="rounded-lg overflow-hidden cursor-pointer">
                    <Image
                      src={webinar.image}
                      alt={webinar.alt}
                      width={480}
                      height={340}
                      className="rounded-[20px]"
                      priority
                    />
                    <div className="py-4 md:py-6">
                      <h3 className="mt-2 text-fluid-body md:text-[24px] text-black font-semibold leading-tight">
                        {webinar.title}
                      </h3>
                      <p className="mt-3 text-[18px] text-gray-500 mb-2">
                        {webinar.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>


        <div className="mt-20">
          <Commingsoon />
        </div>
      </section>
    </div>
  );
}
