"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import { useParams } from "next/navigation";

export default function Section2() {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toUpperCase();
  const lang = (params?.lang as string) || "en";
  return (
    <section className="w-full overflow-x-hidden bg-[#f0f4ff] py-20 px-4 md:px-6">
      <div className="max-w-[1177px] mx-auto w-full">

        {/* ---------------------- SECTION 1: Accqrate in Belgium ---------------------- */}
        <h2 className="text-[28px] md:text-[38px] font-semibold mb-10 break-words">
          <T lang={lang} countryCode={countryCode}>Accqrate In Belgium</T>
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
                <T lang={lang} countryCode={countryCode}>Built for Belgium’s PEPPOL & FPS Finance Mandate</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode}>Accqrate brings a Belgium-ready E-Invoicing engine that follows PEPPOL BIS standards, supports workflows aligned with Mercurius, and remains continuously updated with evolving FPS Finance requirements.</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode}>European Precision, Global Scalability</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode}>With Swiss-led engineering and global deployment experience across 30+ sectors, Accqrate delivers an enterprise-grade platform capable of handling Belgium’s upcoming B2B rollout and multi-country operations inside and outside the EU.</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode}>Compliance Made Simple</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode}>Accqrate combines automation, AI-driven validations, and standardized interoperability to make compliance intuitive, predictable, and scalable for companies of all sizes.</T>
              </p>
            </div>
          </div>

        </div>

        {/* ---------------------- SECTION 2: Our Mission ---------------------- */}

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <div className="text-[14px] md:text-[15px] leading-relaxed w-full overflow-hidden">
            <h2 className="text-[28px] md:text-[38px] font-semibold mb-10 break-words">
              <T lang={lang} countryCode={countryCode}>Our Mission</T>
            </h2>

            <div className="break-words">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode}>Modernizing Europe’s E-Invoicing & Digital Tax Landscape</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode}>We empower businesses with technology that simplifies PEPPOL connectivity, digital reporting, VAT oversight, and multi-entity governance.</T>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1 break-words">
                <T lang={lang} countryCode={countryCode}>Accelerating Digital Adoption</T>
              </h3>
              <p className="text-fluid-small break-words">
                <T lang={lang} countryCode={countryCode}>Accqrate eliminates the traditional complexities of ERP and e-invoicing rollouts with quick integrations, easy scalability, and enterprise-grade reliability.</T>
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