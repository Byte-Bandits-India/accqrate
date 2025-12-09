"use client";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import { Choose} from "../data/Choose";
import { useParams } from "next/navigation";

export default function Section4() {
  const params = useParams();
  const countryCode = (params?.countryCode as string) || "sa";
  
  const data = Choose[countryCode as keyof typeof Choose] || Choose["sa"];

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 lg:px-0 bg-[#F7F9FF]">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1C2041]">
            {data.title} <span className="text-[#62B34F]">Accqrate?</span>
          </h2>
          <p className="text-[#5A6183] text-[16px] md:text-[18px] max-w-[720px] mx-auto mt-4 leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* LEFT LIST */}
          <div className="space-y-4">
            {data.topLeftItems.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <Image
                  src={AssetPath.integration.tick}
                  width={24}
                  height={24}
                  alt="check"
                  className="mt-1"
                />
                <div>
                  <h3 className="text-[#1C2041] font-semibold text-[18px] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#5A6183] text-[15px] leading-relaxed max-w-[450px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex ">
            {data.topRightImage && (
              <Image
                src={data.topRightImage}
                width={500}
                height={100}
                alt="Dashboard"
                className="min-w-full md:h-[520px] object-obtain "
              />
            )}
          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

          {/* LEFT INVOICE IMAGE */}
          <div className="flex justify-center">
            {data.bottomLeftImage && (
              <Image
                src={data.bottomLeftImage}
                width={520}
                height={420}
                alt="Invoice Example"
                className="rounded-xl "
              />
            )}
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-4 mt-4">
            {data.bottomRightItems.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <Image
                  src={AssetPath.integration.tick}
                  width={24}
                  height={24}
                  alt="check"
                  className="mt-1"
                />
                <p className="text-[#1C2041] text-[16px] md:text-[17px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
