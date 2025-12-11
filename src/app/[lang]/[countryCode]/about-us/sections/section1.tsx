"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

export default function Section1() {
  return (
    <section className="overflow-x-hidden w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-[1170px] w-full">

        {/* Top: Badge */}
        <button className="px-4 py-1 rounded-full border-2  border-gray-400 text-sm mb-6">
          About Accqrate:
        </button>

        {/* Heading + Star Row */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between relative">
          
          {/* Main Heading */}
          <h1 className="text-[32px] md:text-[42px] lg:text-[54px] font-medium leading-tight max-w-[100%]">
            Advancing Digital Compliance & E-Invoicing for Belgium and the EU
          </h1>

          {/* Right-Aligned Stars */}

          
        </div>
        <div className="mt-0 lg:-mt-8 lg:ml-[60%] flex justify-center">
            <Image
              src={AssetPath.aboutus.bluestar}
              alt="stars"
              width={50}
              height={60}
              className="object-contain"
            />
          </div>

        {/* Two-Column Content Row */}
<div className="w-full mt-16 md:mt-[10%] flex flex-col md:flex-row gap-6">

{/* LEFT COLUMN → Stats */}
<div className="flex items-center justify-center text-center md:w-1/2">
  <Image
    src={AssetPath.aboutus.hero}
    alt="about hero"
    width={350}
    height={319}
    className="object-contain max-w-[500px] max-h-[419px]"
  />
</div>

{/* RIGHT COLUMN → Description */}
<div className="md:max-w-[639px]">
  <p className="text-[16px] md:text-[18px] leading-tight">
    Accqrate is a global E-Invoicing platform built to meet the digital tax
    and reporting modernization sweeping across the EU. From Belgium’s
    PEPPOL-based B2B mandate to ViDA-driven cross-border reporting,
    Accqrate delivers a scalable, compliant, and future-ready foundation
    for enterprises operating across Belgium and broader EU markets.
    <br /><br />
    Backed by Iteron AG, Switzerland, Accqrate brings European engineering
    standards, secure architectures, and a decade-long expertise in digital
    tax transformations across regulated geographies.
  </p>
</div>

</div>

      </div>
    </section>
  );
}

