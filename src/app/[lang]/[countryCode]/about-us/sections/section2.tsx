"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

export default function Section2() {
  return (
    <section className="w-full overflow-x-hidden bg-[#f0f4ff] py-20 px-6">
      <div className="max-w-[1177px] mx-auto w-full">

        {/* ---------------------- SECTION 1: Accqrate in Belgium ---------------------- */}
        <h2 className="text-[28px] md:text-[38px] font-semibold mb-10">
          Accqrate In Belgium
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-28 items-center">

          {/* Left Image */}
          <div>
            <Image
              src={AssetPath.aboutus.stone}
              alt="Belgium"
              width={500}
              height={420}
              className="rounded-2xl object-cover max-w-[580px] h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col text-[14px] md:text-[18px] leading-relaxed">
            
            <div>
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1">
                Built for Belgium’s PEPPOL & FPS Finance Mandate
              </h3>
              <p className="md:text-[16px]">
                Accqrate brings a Belgium-ready E-Invoicing engine that follows
                PEPPOL BIS standards, supports workflows aligned with Mercurius,
                and remains continuously updated with evolving FPS Finance
                requirements.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1">
                European Precision, Global Scalability
              </h3>
              <p className="md:text-[16px]">
                With Swiss-led engineering and global deployment experience across
                30+ sectors, Accqrate delivers an enterprise-grade platform capable
                of handling Belgium’s upcoming B2B rollout and multi-country
                operations inside and outside the EU.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1">
                Compliance Made Simple
              </h3>
              <p className="md:text-[16px]">
                Accqrate combines automation, AI-driven validations, and
                standardized interoperability to make compliance intuitive,
                predictable, and scalable for companies of all sizes.
              </p>
            </div>
          </div>

        </div>

        {/* ---------------------- SECTION 2: Our Mission ---------------------- */}
        
        <div className="grid md:grid-cols-2 gap-12  items-center">

          {/* Left Content */}
          <div className="text-[14px] md:text-[15px]  leading-relaxed">
            <h2 className="text-[28px] md:text-[38px] font-semibold mb-10">
          Our Mission
          </h2>

            <div>
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1">
                Modernizing Europe’s E-Invoicing & Digital Tax Landscape
              </h3>
              <p className="md:text-[16px]">
                We empower businesses with technology that simplifies PEPPOL
                connectivity, digital reporting, VAT oversight, and multi-entity
                governance.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[20px] mb-1">
                Accelerating Digital Adoption
              </h3>
              <p className="md:text-[16px]">
                Accqrate eliminates the traditional complexities of ERP and
                e-invoicing rollouts with quick integrations, easy scalability,
                and enterprise-grade reliability.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div>
            <Image
              src={AssetPath.aboutus.hands}
              alt="Teamwork"
              width={500}
              height={420}
              className="rounded-2xl object-cover max-w-[412px] h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
