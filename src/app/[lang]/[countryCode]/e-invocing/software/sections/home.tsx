"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import AssetPath from "@/AssetPath/AssetPath";

// Country configuration with all content inside
const countryConfig = {
    "SA": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Saudi Arabia",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        countryName: "Saudi",
        marqueeItems: [
            "Free Proof of Concept",
            "PDF/A3 with XML invoices",
            "Data Hosted in Saudi Cloud",
            "Ready for all Waves of ZATCA Phase 2",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    "AE": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in UAE",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        countryName: "UAE",
        marqueeItems: [
            "Free Proof of Concept",
            "FTA VAT Compliance",
            "Data Hosted in UAE Cloud",
            "Ready for Emirates Phase 2",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    "OM": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Oman",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        countryName: "Omani",
        marqueeItems: [
            "Free Proof of Concept",
            "OTA VAT Compliance",
            "Data Hosted Locally",
            "Ready for Omani Regulations",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    "BH": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Bahrain",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        marqueeItems: [
            "Free Proof of Concept",
            "NBR VAT Compliance",
            "Data Hosted Locally",
            "Ready for Bahraini Regulations",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    "MA": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Malaysia",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        countryName: "Malaysian",
        marqueeItems: [
            "Free Proof of Concept",
            "LHDN MyInvois Ready",
            "Data Hosted Locally",
            "Malaysian SST Compliance",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    "MU": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Mauritius",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        countryName: "Mauritian",
        marqueeItems: [
            "Free Proof of Concept",
            "MRA VAT Compliance",
            "Data Hosted Locally",
            "Ready for Mauritian Regulations",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    "JD": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Jordan",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "Enable Your Business With <span class='text-[#508847]'>E-invoicing.</span>",
        description2: "Saudi Based E-invoicing Solution For Saudi Companies.",
        ctaText: "Get 30 days free trial",
        marqueeItems: [
            "Free Proof of Concept",
            "ISTD Compliance",
            "Data Hosted Locally",
            "Ready for Jordanian E-invoicing",
            "Flexible Solution: Cloud or On-Premises"
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    // POLAND - Unique content
    "PL": {
        name: "Poland",
        authority: "KSeF",
        badgeText: "ZATCA Approved E-invoicing Software in Poland",
        title: "Integrate With PEPPOL Network In Less Than 1 Hour.",
        description1: "European Based <span class='text-[#508847]'>E-invoicing.</span> Solution For European Companies.",
        description2: "",
        ctaText: "Get 30 days free trial",
        countryName: "Polish",
        marqueeItems: [
            "Peppol Certified",
            "GDPR Complaint",
            "PDF/A3 with XML invoices",
            "Data Hosted in Europe",
            "ISO 27001 Certified",
            "ISO 22301 Certified",
        ],
        imageAlt: "Accqrate newsletter illustration"
    },
    // BELGIUM - Unique content
    "BE": {
        name: "Belgium",
        authority: "KSeF",
        badgeText: "ZATCA Approved E-invoicing Software in Belgium",
        title: "Integrate With PEPPOL Network In Less Than 1 Hour.",
        description1: "European Based <span class='text-[#508847]'>E-invoicing.</span> Solution For European Companies.",
        description2: "",
        ctaText: "Get 30 days free trial",
        countryName: "Belgian",
        marqueeItems: [
            "Peppol Certified",
            "GDPR Complaint",
            "PDF/A3 with XML invoices",
            "Data Hosted in Europe",
            "ISO 27001 Certified",
            "ISO 22301 Certified",
        ],
        imageAlt: "Accqrate newsletter illustration"
    }
};

const Software = () => {
    const params = useParams();
    const lang = params?.lang as string || "en";
    const countryCode = (params?.countryCode as string || "sa").toUpperCase();

    // Get country configuration or default to Saudi Arabia
    const country = countryConfig[countryCode as keyof typeof countryConfig] || countryConfig["SA"];

    // Use content directly from country config
    const content = country;

    return (
        <section>
            <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent pt-16 px-6 md:px-8 pb-12 md:pb-[80px] lg:pb-[100px]">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center max-w-[560px] w-full">
                        <p className="text-[#F05A28] text-fluid-small max-w-[560px] leading-[30px] mb-6 md:mb-8 lg:mb-10">
                            {content.badgeText}
                        </p>
                        <h1 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] leading-tight">
                            {content.title}
                        </h1>

                        <div className="h-[2px] w-[80px] bg-blue-600 my-6 md:my-8 lg:my-10"></div>

                        {/* Description 1 with green E-invoicing */}
                        <p
                            className="text-[#000000] text-fluid-body max-w-[560px] leading-[30px]"
                            dangerouslySetInnerHTML={{ __html: content.description1 }}
                        />

                        {/* Description 2 */}
                        {content.description2 && (
                            <p className="text-[#000000] text-fluid-body max-w-[560px] leading-[30px]">
                                {content.description2}
                            </p>
                        )}

                        <div className="flex justify-start py-6 md:py-8 lg:py-10">
                            <Link
                                href={`/${lang}/${countryCode.toLowerCase()}/contact-us`}
                                className="
                  relative
                  flex items-center justify-center
                  w-[270px] md:w-[240px] lg:w-[300px]
                  h-[46px] md:h-[52px]
                  bg-[#F05A28]
                  rounded-[50px]
                  px-2
                  text-white
                  text-fluid-small md:text-[14px] lg:text-[16px]
                  whitespace-nowrap
                  transition-all duration-300 hover:bg-[#d94f22]
                "
                            >
                                <span className="mx-auto">{content.ctaText}</span>

                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="absolute right-4 text-white"
                                >
                                    <path
                                        d="M9 6l6 6-6 6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>

                        <div className="flex flex-col items-start justify-start gap-2 text-center md:flex-row md:gap-8">
                            <p className="text-sm md:text-fluid-body text-[#1C2041] font-light">
                                No credit card needed
                            </p>
                            <img
                                src={AssetPath.home.starOr.src}
                                alt="orange_star"
                                className="w-5 h-5 md:w-auto md:h-auto"
                            />
                            <p className="text-sm md:text-fluid-body text-[#1C2041] font-light">
                                Unlimited time on Free plan
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-[#333333] mt-6">
                            <div className="flex items-center gap-1 text-[#FEB04C]">
                                <Star className="w-3 h-3 fill-[#FEB04C]" />
                                <Star className="w-3 h-3 fill-[#FEB04C]" />
                                <Star className="w-3 h-3 fill-[#FEB04C]" />
                                <Star className="w-3 h-3 fill-[#FEB04C]" />
                                <StarHalf className="w-3 h-3 fill-[#FEB04C]" />
                            </div>
                            <p className="text-sm font-medium">4.8 average rating from our customers</p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 flex justify-center w-full">
                        <img
                            src={AssetPath.invoicing.invoiceWithCreateScreen.src}
                            alt={content.imageAlt}
                            className="w-full max-w-[591px] rounded-2xl object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* MARQUEE SECTION */}
            <div className="marquee-wrapper relative overflow-hidden h-[74px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2041] to-[#194BED] shadow-[0_8px_30px_rgba(0,0,0,0.18)]" />

                <div className="relative z-10 flex items-center h-full">
                    <div className="w-full max-w-[1280px] mx-auto relative overflow-hidden">
                        <div
                            className="marquee-track flex items-center"
                            style={{ ['--marquee-duration' as any]: '22s' }}
                            aria-hidden="false"
                        >
                            {/* First copy */}
                            <div className="marquee-copy flex-none">
                                <ul className="inline-flex items-center whitespace-nowrap gap-12 min-w-max px-6 text-fluid-small font-medium text-white pointer-events-none">
                                    {content.marqueeItems.map((item, index) => (
                                        <li key={`first-${index}`}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Second copy for seamless animation */}
                            <div className="marquee-copy flex-none" aria-hidden="true">
                                <ul className="inline-flex items-center whitespace-nowrap gap-12 min-w-max px-6 text-fluid-small font-medium text-white pointer-events-none">
                                    {content.marqueeItems.map((item, index) => (
                                        <li key={`second-${index}`}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          .marquee-track {
            animation: marquee var(--marquee-duration) linear infinite;
            will-change: transform;
            user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
          }

          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }

          .marquee-wrapper:hover .marquee-track,
          .marquee-wrapper:active .marquee-track {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-track { 
              animation: none !important; 
              transform: none !important; 
            }
          }

          .marquee-copy { 
            flex: 0 0 auto; 
            display: flex; 
            align-items: center; 
          }
        `}</style>
            </div>
        </section>
    );
};

export default Software;
