"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import UpdateCard from "./UpdateCard";
import { useParams } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import ComingSoon from "@/Components/CommingSoon";
import T from "@/Components/T";

type HeroContent = {
  title: string;
  description: string;
};

const HERO_CONTENT: Record<string, HeroContent> = {
  BE: {
    title: "We Will Keep You Updated At All Times",
    description:
      "Stay Updated With The Latest News And Updates From PEPPOL And Accurate E-Invoicing Enhancements For Seamless Business Operations.",
  },
  PL: {
    title: "We Will Keep You Updated At All Times",
    description:
      "Stay Updated With The Latest News And Updates From PEPPOL And Accurate E-Invoicing Enhancements For Seamless Business Operations.",
  },
  AE: {
    title: "We Will Keep You Updated At All Times",
    description:
      "Stay Updated With The Latest News And Updates From FTA and Accurate E-Invoicing Enhancements For Seamless Business Operations.",
  },
  default: {
    title: "We Will Keep You Updated At All Times",
    description:
      "Stay Updated With The Latest News And Updates From ZATCA And Accurate E-Invoicing Enhancements For Seamless Business Operations.",
  },
};

const Index = () => {
  // Get dynamic route params like "en" and "ksa"
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  //  Build dynamic base route for announcements
  const announcementBase = `/${lang}/${countryCode}/resources/announcement`;
  const heroContent = HERO_CONTENT[countryCode?.toUpperCase()] || HERO_CONTENT.default;

  return (
    <div className="min-h-screen">
      <main className="pt-12 md:pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent">
          <section className="max-w-[1170px] px-6 md:px-8 xl:px-0 mx-auto mb-6">
            <h1 className="text-[24px] lg:text-[30px] text-black font-bold leading-tight">
              <T lang={lang} countryCode={countryCode}>{heroContent.title}</T>
            </h1>
            <div className="w-[126px] h-[2px] bg-[#194BED] my-6 md:my-8 " />
            <p className="text-fluid-small max-w-[1100px] font-medium  mb-8 md:mb-[43px] leading-tight">
              <T lang={lang} countryCode={countryCode}>{heroContent.description}</T>
            </p>

            {/* ✅ Dynamic route link */}
            <Link
              href={`/${lang}/${countryCode}/contact-us`}
              className="inline-flex text-[14px] items-center text-white border font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-[#29266E] to-[#194BED] mb-6 md:mb-8 lg:mb-[60px]"
            >
              <T lang={lang} countryCode={countryCode}>Subscribe Now</T> <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </section>

          <ComingSoon />
        </div>
        {/* Update Cards Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 mb-16 hidden">
          {/* Wrapper that controls spacing */}
          <div className="flex flex-col md:flex-row md:gap-[34px] max-w-[1034px] gap-8">
            {/* ✅ ZATCA Updates Card */}
            <Link
              href={`${announcementBase}/ZatcaUpdates`}
              className="block w-full md:w-1/2"
            >
              <UpdateCard
                image={AssetPath.resources.zatcaUp}
                title={<T lang={lang} countryCode={countryCode}>ZATCA Updates</T>}
                description={<T lang={lang} countryCode={countryCode}>Stay informed with the latest news, announcements, and software rollouts from ZATCA.</T>}
              />
            </Link>

            {/* ✅ Product Updates Card */}
            <Link
              href={`${announcementBase}/ProductUpdates`}
              className="block w-full md:w-1/2"
            >
              <UpdateCard
                image={AssetPath.resources.zatcaProd}
                title={<T lang={lang} countryCode={countryCode}>Accqrate Product Evolutions</T>}
                description={<T lang={lang} countryCode={countryCode}>Discover the latest upgrades, feature enhancements, and bug resolutions for Accqrate E-Invoicing platform.</T>}
              />
            </Link>
          </div>
        </section>

      </main>

      {/* CTA Section */}
      {/* <section>
        <CTASection />
      </section> */}
    </div>
  );
};

export default Index;
