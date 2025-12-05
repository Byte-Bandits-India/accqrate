"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { COUNTRY_CONTENT } from "../data/CountryContent";

const Software = () => {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = (params?.countryCode as string) || "sa";

  const content = COUNTRY_CONTENT[countryCode] || COUNTRY_CONTENT["sa"];

  return (
    <section>
      <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent pt-16 px-6 md:px-8 xl:px-0 pb-12">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center max-w-[645px] w-full">
            <p className="text-[#F05A28] text-fluid-small mb-6">
              {content.subtitle}
            </p>

            <h1 className="text-fluid-h2 font-medium text-black">
              {content.title}{" "}
              <span style={{ color: content.highlightColor }}>
                {content.highlight}
              </span>
              .
            </h1>

            <div
              className="h-[2px] w-[156px] my-8"
              style={{ backgroundColor: content.highlightColor }}
            />

            {/* White Box */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white">
              <img src={content.boxImage} alt="" className="h-[70px] w-auto" />
              <div>
                <h3 className="text-[#1C2041] text-fluid-body font-semibold">
                  {content.boxTitle}
                </h3>
                <p className="text-[#5A6183] text-fluid-small">
                  {content.boxSubtitle}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="py-10">
              <Link
                href={`/${lang}/${countryCode}/contact-us`}
                className="relative flex items-center justify-center w-[240px] h-[52px] bg-[#F05A28] rounded-full text-white"
              >
                Start Now for free
                <svg width="14" height="14" className="absolute right-4">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/images/invoicing/integration/hero.png"
              alt="software ui"
              className="max-w-[591px] rounded-2xl"
            />

            <div className="flex gap-4 mt-8 text-center">
              <p>No credit card needed</p>
              <img src="/images/home/Star-or.svg" className="w-5 h-5" />
              <p>Unlimited time on Free plan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Software;
