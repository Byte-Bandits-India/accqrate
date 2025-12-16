"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section1Content } from "../data/section1Content";

export default function Section1() {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toLowerCase() || 'be';
  const lang = (params?.lang as string) || "en";
  const content = section1Content[countryCode as keyof typeof section1Content] || section1Content.default;
  return (
    <section className="overflow-x-hidden w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-[1170px] w-full">

        {/* Top: Badge */}
        <button className="px-4 py-1 rounded-full border-2  border-gray-400 text-sm mb-6">
          <T>{content.badge}</T>
        </button>

        {/* Heading + Star Row */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between relative">

          {/* Main Heading */}
          <h1 className="text-[32px] md:text-[42px] lg:text-[54px] font-medium leading-tight max-w-[100%]">
            <T>{content.heading}</T>
          </h1>

          {/* Right-Aligned Stars */}

        </div>
        <div className={`mt-0 lg:-mt-8 ${lang === 'ar' ? 'lg:mr-[60%]' : 'lg:ml-[60%]'} flex justify-center`}>
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
          <div className="flex items-center justify-center md:w-1/2">
            <div className="relative w-full h-full">
              <Image
                src={AssetPath.aboutus.hero}
                alt="about hero"
                width={500}
                height={363}
                className="object-contain w-full max-h-[363px]"
                style={{ maxHeight: '363px' }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN → Description */}
          <div className="md:max-w-[639px] flex items-center">
            <p className="text-[16px] md:text-[18px] leading-tight">
              <T>{content.description.split('\n\n')[0]}</T>
              <br /><br />
              <T>{content.description.split('\n\n')[1]}</T>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}