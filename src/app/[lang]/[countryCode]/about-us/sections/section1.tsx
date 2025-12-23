"use client";

import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import { useParams } from "next/navigation";
import { section1Content } from "../data/section1Content";
import React from "react";

// Wrap occurrences of target words with a span that applies the brand color
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

  return <>{parts.map((p, i) => (typeof p === "string" ? <span key={`s-${i}`}>{p}</span> : p))}</>;
}

export default function Section1() {
  const params = useParams();
  const countryCode =
    (params?.countryCode as string)?.toLowerCase() || "be";
  const lang = (params?.lang as string) || "en";

  const content =
    section1Content[countryCode as keyof typeof section1Content] ||
    section1Content.default;

  return (
    <section className="w-full bg-[#f0f4ff] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* ================= TWO COLUMN LAYOUT ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* ---------- LEFT: HEADING ---------- */}
          <div className="max-w-[580px]">
            <h1 className="text-[28px] md:text-[38px]  mt-5 font-bold leading-tight text-[#0B0F2F]">
              <T>{highlightMatches(content.heading)}</T>
            </h1>

            {/* Decorative Star */}
            <div className="mt-6 ">
              <Image
                src={AssetPath.aboutus.bluestar}
                alt="decorative star"
                width={60}
                height={44}
                className="ml-[50%] mt-[8%] hidden lg:block"
              />
            </div>
          </div>

          {/* ---------- RIGHT: DESCRIPTION ---------- */}
          <div className="max-w-[520px]">
            <p className="text-[14px] mb-4">
              <T>{highlightMatches(content.description.split("\n\n")[0])}</T>
            </p>

            <p className="text-[14px]">
              <T>{highlightMatches(content.description.split("\n\n")[1])}</T>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
