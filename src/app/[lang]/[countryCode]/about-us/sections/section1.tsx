"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section1Content } from "../data/section1Content";
import React from "react";

/* ---------- Highlight helper (unchanged logic) ---------- */
function highlightMatches(text: string | undefined) {
  if (!text) return null;

  const regex = /(E[-\s]?invoicing)|\bBelgium\b|\bEU\b/gi;
  const parts: Array<string | JSX.Element> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const idx = match.index;
    if (idx > lastIndex) {
      parts.push(text.slice(lastIndex, idx));
    }
    const matchedText = text.slice(idx, regex.lastIndex);
    parts.push(
      <span key={idx} className="text-[#194BED]">
        {matchedText}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? <span key={i}>{p}</span> : p
      )}
    </>
  );
}

/* ---------- Country Image Resolver ---------- */
const getHeroImage = (countryCode: string) => {
  switch (countryCode) {
    case "be":
      return AssetPath.aboutus.hero; 
    case "pl":
      return AssetPath.aboutus.stone;
    case "ae":
      return AssetPath.aboutus.hero;
    case "sa":
      return AssetPath.aboutus.hero;
    default:
      return AssetPath.aboutus.hero;
  }
};

export default function Section1() {
  const params = useParams();
  const countryCode =
    (params?.countryCode as string)?.toLowerCase() || "be";
  const lang = (params?.lang as string) || "en";

  const content =
    section1Content[countryCode as keyof typeof section1Content] ||
    section1Content.default;

  return (
    <section className="w-full bg-[#F6F7FF] py-16 px-6 md:px-0">
      <div className="max-w-[1110px] mx-auto">

        {/* ================= TWO COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ---------- LEFT: TEXT ---------- */}
          <div>
            <h1 className="text-[24px] md:text-[30px] font-bold leading-tight text-[#0B0F2F] tracking-wide max-w-[532px]">
              <T>{highlightMatches(content.heading)}</T>
            </h1>

            <div className="mt-6 max-w-[600px] space-y-3 text-[14px]  text-[#1C2041]">
              <p>
                <T>{content.description.split("\n\n")[0]}</T>
              </p>
              <p>
                <T>{content.description.split("\n\n")[1]}</T>
              </p>
            </div>
          </div>

          {/* ---------- RIGHT: IMAGE ---------- */}
          <div className="relative w-full md:w-[460px] h-[270px]  rounded-2xl overflow-hidden">
            <Image
              src={getHeroImage(countryCode)}
              alt="Country hero"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
