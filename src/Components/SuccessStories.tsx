'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AssetPath from '@/AssetPath/AssetPath';
import curveyLine from "@/Assets/images/icons/curvey-line.svg";
import profile1 from "@/Assets/images/home/profile1.png";
import profile2 from "@/Assets/images/home/profile2.png";
import T from '@/Components/T';
import Image from 'next/image';
import Reveal from './Reveal';

// ================= TYPES =================
export interface TestimonialData {
  id: number;
  title: string;
  description: string;
  namePosition: string;
  company: string;
  CompanyLogo: string;
  profilePic: string;
}

// ================= COUNTRY DATA =================
export const testimonialsByCountry: Record<string, TestimonialData[]> = {
  be: [
    {
      id: 1,
      title: "Future-Ready Compliance",
      description:
        "With Belgium moving firmly toward structured e-invoicing, we wanted a platform that was not only compliant, but future ready. Accqrate delivers exactly that. It harmonizes data across our business units, supports seamless PEPPOL exchange, and scales effortlessly as volumes grow.",
      namePosition: "Enterprise Controller",
      company: "Belgium",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
    {
      id: 2,
      title: "Strategic E-Invoicing Choice",
      description:
        "Accqrate E-invoicing proved to be the right strategic choice for Belgium. It integrates flawlessly with our existing systems while ensuring PEPPOL-ready compliance across B2G and future B2B requirements.",
      namePosition: "Digital Transformation Lead",
      company: "Belgium",
      CompanyLogo: "",
      profilePic: profile2.src,
    },
    {
      id: 3,
      title: "Precision & Control",
      description:
        "We needed a reliable solution to support Belgium’s mandatory e-invoicing direction, and Accqrate exceeded expectations. Its precision in data handling and strong validation framework made our transition straightforward.",
      namePosition: "Head of Finance",
      company: "Belgium",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
    {
      id: 4,
      title: "PEPPOL-Ready Confidence",
      description:
        "Accqrate E-invoicing stood out for its strong compliance foundation and PEPPOL readiness. It integrates effortlessly with our in-house ERP and ensures every invoice meets international standards.",
      namePosition: "CXO",
      company: "Switzerland",
      CompanyLogo: "",
      profilePic: profile2.src,
    },
  ],

  ae: [
    {
      id: 1,
      title: "Single Source of Truth",
      description:
        "Accqrate E-invoicing has been instrumental in harmonising financial data from multiple systems across our UAE operations. What once existed as fragmented information is now consolidated into a single source of truth.",
      namePosition: "Group CFO",
      company: "UAE",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
    {
      id: 2,
      title: "Phase 0 Readiness",
      description:
        "With the UAE progressing toward structured e-invoicing, our biggest priority was Phase 0 readiness without disrupting business continuity. Accqrate ensured exactly that.",
      namePosition: "VP Finance",
      company: "UAE",
      CompanyLogo: "",
      profilePic: profile2.src,
    },
    {
      id: 3,
      title: "Unified Financial Framework",
      description:
        "Accqrate E-invoicing helped us streamline invoice data from multiple business units into one unified, trusted financial framework.",
      namePosition: "Finance Director",
      company: "UAE",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
    {
      id: 4,
      title: "Strategic ASP Partner",
      description:
        "We officially appointed Iteron, the holding company of Accqrate, as our ASP partner for UAE e-invoicing, driven by their proven capability in data harmonisation and enterprise integration.",
      namePosition: "Digital Transformation Lead",
      company: "UAE",
      CompanyLogo: "",
      profilePic: profile2.src,
    },
  ],

  sa: [
    {
      id: 1,
      title: "ZATCA Phase 2 Success",
      description:
        "Accqrate has been a pioneer in E-invoicing, supporting us since January 2023 and successfully guiding us through ZATCA Phase 2 with zero disruption.",
      namePosition: "Group Finance Head",
      company: "KSA",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
    {
      id: 2,
      title: "Flexible & Responsive",
      description:
        "Accqrate delivered reliable compliance, robust automation, and effortless integration with our finance stack. What truly stands out is the flexibility of the solution and responsiveness of the team.",
      namePosition: "CFO",
      company: "KSA",
      CompanyLogo: "",
      profilePic: profile2.src,
    },
    {
      id: 3,
      title: "Enterprise-Grade Integration",
      description:
        "Integration was our biggest concern before adopting e-invoicing. Accqrate plugged into our ERP and external applications flawlessly while maintaining performance and data integrity.",
      namePosition: "Senior Finance Manager",
      company: "KSA",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
    {
      id: 4,
      title: "Mission-Critical Platform",
      description:
        "Accqrate E-invoicing transformed the way we manage compliance across ERP, POS, and legacy systems. It’s now a mission-critical part of our operations.",
      namePosition: "CIO",
      company: "KSA",
      CompanyLogo: "",
      profilePic: profile2.src,
    },
    {
      id: 5,
      title: "Stress-Free Compliance",
      description:
        "As a small business owner, ZATCA Phase 2 initially felt overwhelming. Accqrate made it simple, compliant, and stress-free.",
      namePosition: "Owner",
      company: "KSA",
      CompanyLogo: "",
      profilePic: profile1.src,
    },
  ],

  default: [],
};

// ================= COMPONENT =================
const SuccessStories: React.FC = () => {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toLowerCase() || 'default';

  const testimonialsData =
    testimonialsByCountry[countryCode] || testimonialsByCountry.default;

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!testimonialsData.length) return;

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonialsData.length]);

  if (!testimonialsData.length) return null;

  return (
    <section className="success-stories py-6 md:mt-10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT */}
          <Reveal direction='left' className="space-y-6">
            <h2 className="text-[24px] leading-tight font-bold text-[#1c2041] max-w-[295px]">
              <T>See how our customers drive impact</T>
            </h2>

            <Link
              href="/success-story"
              className="inline-flex items-center text-[#F05A28] text-[18px]"
            >
              <T>Read more success stories</T>
            </Link>

            <div className="hidden md:flex justify-center h-[300px]">
              <img src={AssetPath.home.orangeStar.src} alt="star" className="h-[62px]" />
            </div>
          </Reveal>

          {/* RIGHT */}
          <div className="relative">
            <Reveal direction='right' className="rounded-2xl bg-[#1A4BED] shadow-xl p-6 md:p-8 h-auto">

              {testimonialsData.map((data, index) => (
                <div
                  key={data.id}
                  className={`transition-opacity duration-500 ${currentSlide === index ? 'block opacity-100' : 'hidden opacity-0'
                    }`}
                >
                  <div className="text-white">

                    <h3 className="text-[18px] font-bold mb-3">
                      <T>{data.title}</T>
                    </h3>

                    <img src={curveyLine.src} alt="" className="w-[90px] mb-4" />

                    <p className="text-[14px] leading-relaxed opacity-90 mb-4">
                      <T>{data.description}</T>
                    </p>

                    <div className="flex justify-between items-center pt-4">
                      <div>
                        <div className="font-semibold text-[16px]">
                          <T>{data.namePosition}</T>
                        </div>
                        <div className="text-blue-200 text-sm">
                          <T>{data.company}</T>
                        </div>
                      </div>

                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={data.profilePic}
                          alt={data.namePosition}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
