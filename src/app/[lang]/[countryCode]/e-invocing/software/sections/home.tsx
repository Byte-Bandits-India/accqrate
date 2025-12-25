"use client";
import React from "react";
import FadeUp from '@/Components/ui/FadeUp'
import { useParams } from "next/navigation";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import AssetPath from "@/AssetPath/AssetPath";
import Image from "next/image";
import peppolImg from "@/Assets/images/invoicing/peppol.svg";
import gdprImg from "@/Assets/images/invoicing/GDPR.svg";
import serverImg from "@/Assets/images/invoicing/server.png";
import isoImg from "@/Assets/images/invoicing/ISO.svg";
import eInvoiceHeroImg from "@/Assets/images/invoicing/BE_e-invoicing_standalone_hero.webp";
import uaeImg from "@/Assets/images/invoicing/uae.webp";
import saHeroImg from "@/Assets/images/invoicing/invoice-with-create-screen copy.webp";
import { ContactModal } from "@/Components/ContactModal";
import T from "@/Components/T";
import { t, currentLang } from "@/lib/translations";

// Feature item type with icon
type FeatureItem = {
    text: string;
    iconSrc: string;
    iconAlt: string;
};

// Country configuration item type
type CountryConfigItem = {
    name: string;
    authority: string;
    badgeText?: string;
    topTitle?: string;
    title: string;
    description1?: string;
    description2?: string;
    ctaText?: string;
    countryName?: string;
    marqueeItems?: string[];
    imageAlt?: string;
};

// Country configuration with all content inside
const countryConfig: Record<string, CountryConfigItem> = {
    "SA": {
        name: "Saudi Arabia",
        authority: "ZATCA",
        badgeText: "ZATCA Approved E-invoicing Software in Saudi Arabia",
        title: "Integrate With ZATCA In Less Than 1 Hour.",
        description1: "",
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
        name: "UAE",
        authority: "FTA",
        badgeText: "PEPPOL Certified E-invoicing Software for UAE",
        title: "Integrate With PEPPOL Network.",
        description1: "UAE Based <span class='text-[#194bed]'>E-invoicing</span> Solution For UAE Companies.",
        description2: "",
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
        description1: "Enable Your Business With <span class='text-[#194bed]'>E-invoicing</span>",
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
        description1: "Enable Your Business With <span class='text-[#194bed]'>E-invoicing</span>",
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
        description1: "Enable Your Business With <span class='text-[#194bed]'>E-invoicing</span>",
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
        description1: "Enable Your Business With <span class='text-[#194bed]'>E-invoicing</span>",
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
        description1: "Enable Your Business With <span class='text-[#194bed]'>E-invoicing</span>",
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
        badgeText: "PEPPOL Certified  E-invoicing Software for Poland",
        title: "Integrate With PEPPOL Network ",
        description1: "European Based <span class='text-[#194bed]'>E-invoicing</span> Solution For European Companies.",
        description2: "",
        ctaText: "Connect with our Consultant",
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
    // BELGIUM - Fixed to include marqueeItems
    "BE": {
        name: "Belgium",
        authority: "KSeF",
        badgeText: "PEPPOL Certified  E-invoicing Software for Belgium",
        topTitle: "Enable Your Business With E-invoicing.",
        title: "Integrate With PEPPOL Network",
        description1: "European Based <span class='text-[#194bed]'>E-invoicing</span> Solution For European Companies.",
        description2: "",
        ctaText: "Connect with our Consultant",
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

// Badges configuration by country
const badgesConfig: Record<string, Array<{
    img: string;
    alt: string;
    text: string;
    className: string;
}>> = {
    SA: [
        {
            img: peppolImg.src,
            alt: 'Peppol Certified',
            text: 'Peppol Certified',
            className: 'w-16 h-16',
        },
        {
            img: gdprImg.src,
            alt: 'GDPR Compliant',
            text: 'GDPR Compliant',
            className: 'w-16 h-16',
        },
        {
            img: serverImg.src,
            alt: 'Data Hosted in Europe',
            text: 'Data Hosted in Europe',
            className: 'w-16 h-16',
        },
        {
            img: isoImg.src,
            alt: 'ISO 27001 Certified',
            text: 'ISO 27001 Certified',
            className: 'w-16 h-16',
        },
    ],
    AE: [
        {
            img: peppolImg.src,
            alt: 'Peppol Certified',
            text: 'Peppol Certified',
            className: 'w-16 h-16',
        },
        {
            img: gdprImg.src,
            alt: 'GDPR Compliant',
            text: 'GDPR Compliant',
            className: 'w-16 h-16',
        },
        {
            img: serverImg.src,
            alt: 'Data Hosted in UAE',
            text: 'Data Hosted in UAE',
            className: 'w-16 h-16',
        },
        {
            img: isoImg.src,
            alt: 'ISO 27001 Certified',
            text: 'ISO 27001 Certified',
            className: 'w-16 h-16',
        },
        {
            img: AssetPath.cards.fta.src,
            alt: 'Accreditation-in-Progress',
            text: 'Accreditation in Progress',
            className: 'w-16 h-16',
        },
    ],
    BE: [
        {
            img: peppolImg.src,
            alt: 'Peppol Certified',
            text: 'Peppol Certified',
            className: 'w-16 h-16',
        },
        {
            img: gdprImg.src,
            alt: 'GDPR Compliant',
            text: 'GDPR Compliant',
            className: 'w-16 h-16',
        },
        {
            img: AssetPath.icons.dataHostedSaudiCloud,
            alt: 'Data Hosted in Europe',
            text: 'Data Hosted in Europe',
            className: 'w-16 h-16',
        },
        {
            img: isoImg.src,
            alt: 'ISO 27001 Certified',
            text: 'ISO 27001 Certified',
            className: 'w-16 h-16',
        },
    ],
    PL: [
        {
            img: peppolImg.src,
            alt: 'Peppol Certified',
            text: 'Peppol Certified',
            className: 'w-16 h-16',
        },
        {
            img: gdprImg.src,
            alt: 'GDPR Compliant',
            text: 'GDPR Compliant',
            className: 'w-16 h-16',
        },
        {
            img: serverImg.src,
            alt: 'Data Hosted in Europe',
            text: 'Data Hosted in Europe',
            className: 'w-16 h-16',
        },
        {
            img: isoImg.src,
            alt: 'ISO 27001 Certified',
            text: 'ISO 27001 Certified',
            className: 'w-16 h-16',
        },
    ],
};

// Default badges
const defaultBadges = [
    {
        img: peppolImg.src,
        alt: 'Peppol Certified',
        text: 'Peppol Certified',
        className: 'w-16 h-16',
    },
    {
        img: gdprImg.src,
        alt: 'GDPR Compliant',
        text: 'GDPR Compliant',
        className: 'w-16 h-16',
    },
    {
        img: serverImg.src,
        alt: 'Data Hosted Locally',
        text: 'Data Hosted Locally',
        className: 'w-16 h-16',
    },
    {
        img: isoImg.src,
        alt: 'ISO 27001 Certified',
        text: 'ISO 27001 Certified',
        className: 'w-16 h-16',
    },
];

// Import additional images for features (create these images or use existing ones)
// Note: You might need to create these images or use appropriate ones
const ftaBadgeImg = AssetPath.cards.fta || peppolImg; // Fallback to peppolImg if fta image doesn't exist
const xmlBadgeImg = peppolImg; // Use peppol as fallback, create specific XML icon
const zatcaBadgeImg = peppolImg; // Use peppol as fallback, create specific ZATCA icon

const Software: React.FC = () => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const params = useParams();
    const lang = params?.lang as string || "en";
    const countryCode = (params?.countryCode as string || "sa").toUpperCase();

    const handleCloseModal = React.useCallback(() => setModalOpen(false), []);

    // Get country configuration or default to Saudi Arabia
    const country = countryConfig[countryCode as keyof typeof countryConfig] || countryConfig["SA"];

    // Use content directly from country config
    const content = country;

    // Get country-specific badges
    const badges = badgesConfig[countryCode] || defaultBadges;

    // Resolve flag image from AssetPath.header.language using country code
    const getFlagForCountry = (code: string) => {
        switch (code) {
            case 'SA':
                return AssetPath.header.language.saudiArabia;
            case 'AE':
                return AssetPath.header.language.uae;
            case 'OM':
                return AssetPath.header.language.oman;
            case 'BH':
                return AssetPath.header.language.bahrain;
            case 'MA':
                return AssetPath.header.language.malaysia;
            case 'MU':
                return AssetPath.header.language.mauritius;
            case 'JD':
                return AssetPath.header.language.jordan;
            case 'PL':
                return AssetPath.header.language.poland;
            case 'BE':
                return AssetPath.header.language.belgium;
            default:
                return AssetPath.header.language.saudiArabia;
        }
    };

    const flagImage = getFlagForCountry(countryCode);
    const translatedDescription1 = React.useMemo(
        () => t(content.description1 ?? '', countryCode),
        [content.description1, countryCode, currentLang.lang]
    );

    const getHeroImage = () => {
        switch (countryCode) {
            case 'SA':
                return saHeroImg;
            case 'AE':
                return uaeImg;
            case 'BE':
                return eInvoiceHeroImg;
            default:
                return eInvoiceHeroImg;
        }
    };

    return (
        <>
            <section>
                <div className="bg-[#eff3ff] pt-10 px-6">
                    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between">
                        {/* LEFT CONTENT */}
                        <FadeUp className="flex flex-col justify-center max-w-[450px] w-full">
                            {/* content animated, background stays in parent */}
                            <div>
                            <div className="flex items-center gap-2">
                                <p className="text-[#F05A28] text-[16px] uppercase leading-normal m-0 lg:whitespace-nowrap">
                                    <T>{content.badgeText}</T>
                                </p>

                                <Image
                                    src={flagImage}
                                    alt={`${content.name || countryCode}-flag`}
                                    width={30}
                                    height={20}
                                    className="w-[30px] h-auto rounded object-contain"
                                    unoptimized
                                />
                            </div>


                            <p className="text-fluid-h3 lg:text-[24px] font-medium text-[#1c2041] mt-4 leading-[1.5] mb-2">
                                <T>Enable Your Business With E-invoicing.</T>
                            </p>
                            <h1 className="text-fluid-h3 font-semibold text-[#1c2041] leading-tight">
                                <T>{content.title}</T>
                            </h1>

                            <div className="h-[2px] w-[80px] bg-blue-600 my-4"></div>

                            {/* Description 1 with green E-invoicing */}
                            <p
                                className="text-[#000000] text-fluid-small lg:text-[16px] max-w-[560px] leading-normal"
                                dangerouslySetInnerHTML={{ __html: translatedDescription1 }}
                            />

                            {/* Description 2 */}
                            {content.description2 && (
                                <p className="text-[#5a6183] text-[14px] max-w-[560px] leading-normal">
                                    <T>{content.description2}</T>
                                </p>
                            )}

                            <div className="flex justify-start py-6">
                                <Link
                                    href={`/${lang}/${countryCode.toLowerCase()}/contact-us`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setModalOpen(true);
                                    }}
                                    className="
                      relative
                      flex items-center justify-center
                      w-[270px] md:w-[240px] lg:w-[250px]
                      min-h-[46px]
                      bg-[#D63F10]
                      rounded-[50px]
                      px-4 pr-10
                      text-white
                      text-fluid-small md:text-[14px]
                      text-center leading-tight
                      transition-all duration-300 hover:bg-[#d94f22]
                    "
                                >
                                    <span className="mx-auto">
                                        <T>{content.ctaText}</T>
                                    </span>

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

                            {/* FEATURES SECTION - Desktop/Tablet */}
                            {badges.length > 0 && (
                                <div className="hidden lg:block bg-white p-4 rounded-2xl max-w-[450px]">
                                    <ul className="space-y-3">
                                        {badges.slice(0, 5).map((badge, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#ccd8ff] rounded-full">
                                                    <Image
                                                        src={badge.img}
                                                        alt={badge.alt}
                                                        width={28}
                                                        height={28}
                                                        priority
                                                    />
                                                </div>

                                                <span className="text-[#5a6183] text-[16px] mt-2 leading-normal">
                                                    <T>{badge.text}</T>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* FEATURES SECTION - Mobile */}
                            {badges.length > 0 && (
                                <div className="lg:hidden bg-white p-4 rounded-lg max-w-full border border-gray-200 shadow-sm mt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {badges.slice(0, 4).map((badge, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                                    <Image
                                                        src={badge.img}
                                                        alt={badge.alt}
                                                        width={20}
                                                        height={20}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="text-[#1C2041] text-[14px] leading-[20px] font-medium">
                                                    <T>{badge.text}</T>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col items-start justify-start gap-2 text-center md:flex-row md:gap-8 mt-6">
                                <p className="text-sm md:text-[16px] text-[#1C2041] font-light">
                                    <T>Simplified</T>
                                </p>
                                <img
                                    src={AssetPath.home.starOr.src}
                                    alt="orange_star"
                                    className="w-5 h-5 md:w-auto md:h-auto"
                                />
                                <p className="text-sm md:text-[16px] text-[#1C2041] font-light">
                                    <T>Smart</T>
                                </p>
                                <img
                                    src={AssetPath.home.starOr.src}
                                    alt="orange_star"
                                    className="w-5 h-5 md:w-auto md:h-auto"
                                />
                                <p className="text-sm md:text-[16px] text-[#1C2041] font-light">
                                    <T>Complaint</T>
                                </p>
                            </div>
                            </div>
                        </FadeUp>

                        {/* RIGHT IMAGE */}
                        <FadeUp className="flex-1 flex justify-center w-full" delay={80}>
                            <Image
                                src={getHeroImage()}
                                alt={content.imageAlt ?? ''}
                                width={591}
                                height={380}
                                className="w-full max-w-[650px] rounded-2xl object-contain"
                                unoptimized
                            />
                        </FadeUp>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[#333333] mt-6">
                        <div className="flex items-center gap-1 text-[#FEB04C]">
                            <Star className="w-3 h-3 fill-[#FEB04C]" />
                            <Star className="w-3 h-3 fill-[#FEB04C]" />
                            <Star className="w-3 h-3 fill-[#FEB04C]" />
                            <Star className="w-3 h-3 fill-[#FEB04C]" />
                            <StarHalf className="w-3 h-3 fill-[#FEB04C]" />
                        </div>
                        <p className="text-[16px] text-[#1c2041] font-medium">
                            <T>4.8 average rating from our customers</T>
                        </p>
                    </div>
                </div>
            </section>
            {/* Contact Modal */}
            <ContactModal open={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default Software;