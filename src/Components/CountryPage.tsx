// components/CountryPage.tsx
"use client";
import InfoCard from "@/Components/ui/Infocard";
import FadeUp from "@/Components/ui/FadeUp";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import React, { useEffect, useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { useCountryContent } from "@/Hooks/useCountryContent";
import T from "@/Components/T"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/Home-accordion";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Add this dynamic import for ContactModal
const ContactModal = dynamic(
    () => import("@/Components/ContactModal").then((mod) => mod.ContactModal),
    {
        ssr: false,
        loading: () => null,
    }
);


// ---------------- CarouselCard ----------------
interface CarouselCardProps {
    quote: string;
    name: string;
    avatar: string;
    bg: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

interface CountryPageProps {
    countryCode: string;
    lang?: string;
}

interface ServiceCard {
    title: string;
    desc: string;
    bg: string;
}

const CarouselCardComponent: React.FC<CarouselCardProps> = ({
    quote,
    name,
    bg,
    avatar,
    style,
    onClick
}) => {
    return (
        <div
            className="absolute rounded-2xl shadow-xl flex
             w-[320px] sm:w-[320px] md:w-[423px] h-[180px] md:h-[200px]
             transition-all duration-500 ease-in-out overflow-hidden bg-[#E6F2FF] cursor-pointer"
            style={style}
            onClick={onClick}
        >
            {/* Background Image - Fixed left section */}
            <div className="relative h-full w-[100px] md:w-[100px] flex-shrink-0">
                <Image
                    src={bg}
                    alt="background"
                    fill
                    className="absolute left-0 top-0 h-full w-full object-cover z-0"
                />

                {/* Avatar slightly offset using left-20 */}
                <div className="relative h-full w-full">
                    <Image
                        src={avatar}
                        alt={name}
                        width={60}
                        height={60}
                        className="absolute top-1/2 left-[75px] md:left-[70px] transform -translate-y-1/2 w-12 h-12 md:h-[60px] md:w-[60px] rounded-full object-cover border-2 border-white z-20"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-start p-6 md:pl-8 lg:px-[32px] relative z-20">
                {/* Quote text */}
                <p className="text-[#000000] text-fluid-small md:text-[18px] leading-tight tracking-heading drop-shadow-md font-bold mb-0">
                    &quot;<T>{quote}</T>&quot;
                </p>

                {/* Name - directly below quote, no gap */}
                <h4 className="text-[#000000] mt-[20px] md:mt-[30px] font-medium text-[10px] md:text-[14px] lg:text-[16px] drop-shadow-md leading-tight tracking-para">
                    <T>{name}</T>
                </h4>
            </div>

            {/* Soft overlay for readability */}
            <div className="absolute inset-0 z-10" />
        </div>
    );
};

// Arrow
const Arrow45: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 transform -rotate-45"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

// Local Chevron icons (inline SVG) — used when lucide icons don't render
const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
);

// Renders a primary icon (e.g. lucide) and falls back to an inline SVG if the primary
// icon does not render properly (helps when global CSS or build issues hide SVGs).
const IconWithFallback: React.FC<{
    render: () => React.ReactElement;
    fallback: React.ReactElement;
}> = ({ render, fallback }) => {
    const containerRef = useRef<HTMLSpanElement | null>(null);
    const [useFallback, setUseFallback] = React.useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const svg = el.querySelector('svg');
        if (!svg) {
            setUseFallback(true);
            return;
        }

        const rect = svg.getBoundingClientRect();
        const style = getComputedStyle(svg);
        if (
            rect.width === 0 ||
            rect.height === 0 ||
            style.display === 'none' ||
            style.visibility === 'hidden'
        ) {
            setUseFallback(true);
        }
    }, []);

    return (
        <span ref={containerRef} aria-hidden>
            {useFallback ? fallback : render()}
        </span>
    );
};


// ---------------- CarouselDots ----------------
interface CarouselDotsProps {
    total: number;
    currentIndex: number;
    onDotClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ total, currentIndex, onDotClick }) => {
    return (
        <div className="flex justify-center mt-2 relative z-10 cursor-pointer mb-2">
            {Array.from({ length: total }).map((_, index) => (
                <motion.div
                    key={index}
                    className={`h-2 w-2 rounded-full mx-2 ${index === currentIndex ? "bg-white sm:bg-black" : "bg-gray-400 sm:bg-gray-400"}`}
                    animate={{ scale: index === currentIndex ? 1.5 : 1 }}
                    onClick={() => onDotClick(index)}
                    transition={{ duration: 0.3 }}
                />
            ))}
        </div>
    );
};

// ---------------- Carousel ----------------
interface CarouselProps {
    items?: CarouselCardProps[];
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
    items = [],
    autoplay = true,
    autoplayDelay = 3000,
    pauseOnHover = true,
    loop = true,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex(prev => {
            if (prev === items.length - 1) {
                return loop ? 0 : prev;
            }
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex(prev => {
            if (prev === 0) {
                return loop ? items.length - 1 : prev;
            }
            return prev - 1;
        });
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -50 || velocity < -500) {
            nextSlide();
        } else if (offset > 50 || velocity > 500) {
            prevSlide();
        }
    };

    // Improved autoplay with proper cleanup
    useEffect(() => {
        if (!autoplay || items.length === 0) return;

        const interval = setInterval(() => {
            nextSlide(); // always move to next slide regardless of hover
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [autoplay, autoplayDelay, items.length, loop]);

    // Handle dot clicks
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="relative w-full flex flex-col items-center justify-center overflow-hidden select-none px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                ref={containerRef}
                className="relative w-full max-w-[423px] h-[220px] sm:h-[300px] flex items-center justify-center cursor-grab"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
            >
                {items.map((item, index) => {
                    // Calculate position with proper looping logic
                    let position = index - currentIndex;

                    // Handle loop wrapping
                    if (position > items.length / 2) position -= items.length;
                    if (position < -items.length / 2) position += items.length;

                    let transform = "";
                    let opacity = 0;
                    let blur = "blur(4px)";
                    let zIndex = 1;
                    let scale = 0.9;

                    if (position === 0) {
                        // Center card
                        transform = "translateX(0%)";
                        opacity = 1;
                        blur = "blur(0px)";
                        zIndex = 3;
                        scale = 1.05;
                    } else if (position === 1 || position === -items.length + 1) {
                        // Right card
                        transform = "translateX(70%)";
                        opacity = 0.6;
                        zIndex = 2;
                    } else if (position === -1 || position === items.length - 1) {
                        // Left card
                        transform = "translateX(-70%)";
                        opacity = 0.6;
                        zIndex = 2;
                    } else {
                        // Hidden cards
                        opacity = 0;
                        zIndex = 0;
                    }

                    return (
                        <CarouselCardComponent
                            key={index}
                            {...item}
                            style={{
                                transform: `${transform} scale(${scale})`,
                                opacity,
                                filter: blur,
                                zIndex
                            }}
                            onClick={() => setCurrentIndex(index)}
                        />
                    );
                })}
            </motion.div>

            <CarouselDots
                total={items.length}
                currentIndex={currentIndex}
                onDotClick={handleDotClick}
            />
        </div>
    );
};


interface CountryPageProps {
    countryCode: string;
}

interface CountryPageProps {
    countryCode: string;
}

interface Feature {
    img: string;
    title: string;
    sub?: string;
    description: string;
}

interface FeatureCarouselProps {
    features: Feature[];
}

const useDynamicRouting = () => {
    const pathname = usePathname();

    const createHref = (path: string): string => {
        const segments = pathname.split('/').filter(segment => segment);
        const lang = segments[0] || 'en';
        const countryCode = segments[1] || 'sa';
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `/${lang}/${countryCode}${cleanPath}`;
    };

    return { createHref };
};

const CountryPage: React.FC<CountryPageProps> = ({ countryCode }) => {
    const { countryContent } = useCountryContent();
    const { createHref } = useDynamicRouting();
    const params = useParams();
    const lang = (params?.lang as string) || "en";
    const [enabled, setEnabled] = React.useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const handleCloseModal = React.useCallback(() => setModalOpen(false), []);
    // Resolve flag image from AssetPath.header.language using country code
    const getFlagForCountry = (code: string) => {
        switch (code.toUpperCase()) {
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
    const bgImage = typeof countryContent.backgroundImage === 'string'
        ? countryContent.backgroundImage
        : countryContent.backgroundImage.src;
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8; // scroll ~80% width per click
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const cards = countryContent.cards;

    const features = [
        {
            img: AssetPath.home.feature1,
            title: "One platform.",
            description: "All modules run on a single, integrated data model.",
            sub: " Zero silos."
        },
        {
            img: AssetPath.home.feature2,
            title: "Enterprise‑grade.",
            description: "Security, scalability and performance proven across 30+ industries.",
            sub: ""
        },
        {
            img: AssetPath.home.feature3,
            title: "AI, everywhere.",
            description: "Accelera, our AI copilot, accelerates routine work, insights and decisions.",
            sub: ""
        },
        {
            img: AssetPath.home.feature4,
            title: "Fast time‑to‑value.",
            description: "Lightning-fast UI, one-click installs, and low-disruption migrations from SAP/Microsoft/Oracle or disjointed tools.",
            sub: ""
        },
        {
            img: AssetPath.home.feature5,
            title: "Built‑in Global compliance:",
            description: "Connect ERP/POS to tax authorities; from ZATCA Phase II to PEPPOL standards.",
            sub: ""
        },
        {
            img: AssetPath.home.feature6,
            title: "Deploy your way.",
            description: "Cloud (managed, subscription) or On-Prem (full control over infra & data).",
            sub: ""
        }
    ];

    const icon = [
        {
            img: AssetPath.landingpage.icon1,
            title: "5,000+",
            description: "Companies rely on Accqrate."
        },
        {
            img: AssetPath.landingpage.icon2,
            title: "30M+",
            description: "invoices processed every month."
        },
        {
            img: AssetPath.landingpage.icon3,
            title: "25+ ",
            description: "business sectors served."
        },
    ];

    const topRow = [
        { src: AssetPath.business.books.book1, name: "Education" },
        { src: AssetPath.business.books.book2, name: "Construction & Engineering" },
        { src: AssetPath.business.books.book3, name: "Logistics" },
        { src: AssetPath.business.books.book4, name: "Insurance" },
        { src: AssetPath.business.books.book5, name: "Conglomerate" },
        { src: AssetPath.business.books.book6, name: "Pharmacy" },
        { src: AssetPath.business.books.book7, name: "Energy" },
        { src: AssetPath.business.books.book8, name: "Conglomerate" },
        { src: AssetPath.business.books.book9, name: "Insurance" },
        { src: AssetPath.business.books.book10, name: "Packaging solutions" },
        { src: AssetPath.business.books.book11, name: "Food & Beverage" },
        { src: AssetPath.business.books.book12, name: "Trading" },
        { src: AssetPath.business.books.book13, name: "Chemicals" },
    ];

    const bottomRow = [
        { src: AssetPath.business.books.book14, name: "Hospitality and Tourism" },
        { src: AssetPath.business.books.book15, name: "FMCD" },
        { src: AssetPath.business.books.book16, name: "Oil & Gas" },
        { src: AssetPath.business.books.book17, name: "Home Appliances" },
        { src: AssetPath.business.books.book18, name: "Manufacturing" },
        { src: AssetPath.business.books.book19, name: "Construction & Engineering" },
        { src: AssetPath.business.books.book20, name: "Education" },
        { src: AssetPath.business.books.book21, name: "Conglomerate" },
        { src: AssetPath.business.books.book22, name: "Electrical Industries Co." },
        { src: AssetPath.business.books.book23, name: "Aerospace & Defense" },
        { src: AssetPath.business.books.book24, name: "Retail" },
        { src: AssetPath.business.books.book25, name: "Ecommerce" },
        { src: AssetPath.business.books.book26, name: "Fashion" },
    ];

    const testimonialCards: CarouselCardProps[] = countryContent.testimonials && countryContent.testimonials.length > 0
        ? countryContent.testimonials.map(testimonial => ({
            quote: testimonial.quote,
            name: testimonial.name,
            avatar: typeof testimonial.avatar === 'string' ? testimonial.avatar : testimonial.avatar.src,
            bg: typeof testimonial.bg === 'string' ? testimonial.bg : testimonial.bg.src
        }))
        : [
            {
                quote: "Ali - Construction Company",
                name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
                avatar: AssetPath.landingpage.ali.src,
                bg: AssetPath.landingpage.blue.src
            },
            {
                quote: "Al Laith, UAE Global Health & Beauty Co.",
                name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
                avatar: AssetPath.landingpage.uae.src,
                bg: AssetPath.landingpage.blue.src
            },
            {
                quote: "Wail - Jonex",
                name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
                avatar: AssetPath.landingpage.wail.src,
                bg: AssetPath.landingpage.blue.src
            },
        ];

    const CarouselCardItems: ServiceCard[] = [
        {
            title: "Compliance without compromise",
            desc: "Regulations met by design.",
            bg: "#C2CDEC"
        },
        {
            title: "Security first.",
            desc: "Data protection and governance across cloud and on-prem.",
            bg: "#BDECC8"
        },
        {
            title: "Customer obsessed delivery",
            desc: "On time. In scope. With measurable outcomes.",
            bg: "#FFE9D1"
        },
        {
            title: "Performance at scale",
            desc: "Built for enterprise workloads and real-time operations.",
            bg: "#F5D5FF"
        },
        {
            title: "Usability that drives adoption",
            desc: "Clean, fast, role-based UX.",
            bg: "#C4E0FF"
        },
    ];

    const faqs = [
        {
            question: "How long is the free trial?",
            answer: "30 days. Plus an optional 14-day practice account for a total of 44 days.",
        },
        {
            question: "Can I terminate during the trial?",
            answer: "Yes, no commitment during the trial.",
        },
        {
            question: "Do I need a credit card to start?",
            answer: "No card required to begin the trial.",
        },
        {
            question: "Where is Accqrate Cloud hosted?",
            answer: "Regional hosting options with data-residency choices; on-prem available for full control.",
        },
        {
            question: "How do I pay the subscription?",
            answer: "Monthly or annual plans; invoicing and payment options vary by region.",
        },
        {
            question: "What plans are available?",
            answer: "Tiered by module mix and users; bundle pricing for suites.",
        },
    ];

    const duplicatedCards = [...CarouselCardItems, ...CarouselCardItems];

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const totalWidth = carousel.scrollWidth;
                const singleSetWidth = totalWidth / 2;

                // When scrolled past end of first set → jump back seamlessly
                if (carousel.scrollLeft >= singleSetWidth) {
                    carousel.scrollLeft -= singleSetWidth;
                }
                // When scrolled backward before start → jump forward seamlessly
                else if (carousel.scrollLeft <= 0) {
                    carousel.scrollLeft += singleSetWidth;
                }

                ticking = false;
            });
        };

        carousel.addEventListener("scroll", onScroll, { passive: true });

        // tiny offset helps with reverse scroll detection
        if (carousel.scrollLeft === 0) {
            carousel.scrollLeft = 1;
        }

        return () => {
            carousel.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <main className="overflow-x-hidden font-inter">
            <div className="bg-[#F8F6FF]">
                <div
                    className="h-fit max-h-[1440px] bg-cover bg-no-repeat bg-center lg:bg-local"
                    style={{
                        backgroundImage: `url('${bgImage}')`,
                    }}
                //hero section
                >
                    <div className="max-w-[1177px] lg:h-[100dvh] mx-auto px-6 overflow-hidden">
                        <div className="max-w-[1177px] mx-auto flex items-center gap-2 font-medium text-fluid-body lg:text-[24px] text-[#FFFFFF] pt-[3rem] lg:pt-[3rem] 2xl:pt-[4rem] tracking-para">
                            <T>{countryContent.heroSubtitle}</T>
                            <Image
                                src={flagImage}
                                alt={`${countryCode}-flag`}
                                width={30}
                                height={20}
                                className="w-[30px] h-auto"
                                unoptimized
                            />
                        </div>
                        <h1 className="text-[1.5rem] md:text-[1.75rem] lg:text-[54px]  mt-4 md:mt-5 lg:mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[2rem]  text-[#FFFFFF] max-w-full lg:max-w-[900px] font-normal leading-tight">
                            <T>{countryContent.heroTitle}</T>
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_520px] gap-6 lg:gap-8">
                            {/* LEFT COLUMN */}
                            <div className="flex flex-col justify-start">
                                <p className="border-t-2 border-[#FFFFFF] w-full max-w-[110px] mt-4 md:mt-5 lg:mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[2rem]"></p>

                                <p className="text-[#FFFFFF] max-w-[586px] text-fluid-body mt-4 md:mt-5 lg:mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[2rem] tracking-para leading-[1.875rem] text-left font-normal">
                                    <T>{countryContent.heroDescription}</T>
                                </p>

                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 text-white h-[2.625rem] lg:h-[3.563rem] w-[11.875rem] my-4 md:my-6 lg:my-[2.25rem] xl:mt-[2rem] 2xl:my-[3rem] font-normal lg:w-[14.813rem] leading-tight rounded-[5rem] text-fluid-body bg-gradient-to-r from-[#B4441E] via-[#F05A28] to-[#F48B69]"
                                >
                                    <T>Meet an Expert</T>
                                    <Arrow45 />
                                </button>

                                <h2 className="mt-4 md:mt-5 text-fluid-body font-medium text-[#ffffff] hidden tracking-heading lg:flex lg:items-center lg:flex-wrap gap-4">
                                    {countryContent.heroTagline.split(".").filter(Boolean).map((part, index, arr) => (
                                        <React.Fragment key={index}>
                                            <T>{part.trim()}</T>
                                            {index < arr.length - 1 && (
                                                <Image
                                                    src={AssetPath.home.starWhite}
                                                    alt="star"
                                                    width={16}
                                                    height={16}
                                                    className="inline-block w-4 h-4 mx-1"
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </h2>
                                <div className="p-4 md:p-5 text-left max-w-full md:max-w-[700px] mx-auto md:mx-0">
                                    {/* Additional content can go here */}
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="hidden lg:flex flex-col justify-start mb-5 lg:mt-10 gap-3">
                                {cards.map((card) => (
                                    <InfoCard key={card.title} {...card} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Featured Solutions */}
                <div className="lg:hidden px-6 md:px-8">
                    <div className="max-w-[1177px] mx-auto py-6">
                        <h1 className="text-fluid-body font-medium mb-3"><T>Products to power every team</T></h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {cards.map((card) => (
                                <InfoCard key={card.title} {...card} />
                            ))}

                            {/* "Explore All Products" card */}
                            <div
                                className="cursor-pointer flex items-center justify-between w-full h-[3.125rem] mx-auto overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-all hover:shadow-md p-3 sm:p-4 bg-[#D6E0FF]"
                            >
                                <h3 className="text-[0.875rem] font-medium"><T>Explore All Products...</T></h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* /Why Accqrate? */}
                <div>
                    <div className="px-6 md:px-8 xl:px-8 mt-[48px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-6 max-w-[1177px] mx-auto w-full">

                            {/* Left Column */}
                            <div className="max-w-[500px]">
                                <h2 className="font-medium text-fluid-small tracking-heading uppercase">
                                    <T>{countryContent.whyAccqrateTitle || "Why Accqrate?"}</T>
                                </h2>

                                <Image
                                    src={AssetPath.home.blueStar}
                                    alt="groupstar"
                                    width={28}
                                    height={28}
                                    className="w-auto h-[28px] lg:hidden"
                                />

                                <h3 className="text-[24px] md:text-[28px] lg:text-[36px] font-medium mt-6 md:mt-8 lg:mt-[40px] leading-tight">
                                    <T>
                                        {countryContent.whyAccqrateSubtitle ||
                                            "From compliance to automation, Accqrate ensures a seamless PEPPOL e-invoicing experience."}
                                    </T>
                                </h3>
                            </div>

                            {/* Right Column */}
                            <div className="max-w-[500px] flex flex-col justify-around">
                                <p className="text-fluid-small font-normal leading-[24px]">
                                    <T>
                                        From compliance to automation, Accqrate ensures a seamless PEPPOL
                                        e-invoicing experience.
                                    </T>
                                </p>

                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="self-start h-[40px] w-auto text-white text-fluid-small tracking-para leading-tight md:text-[18px] mt-6 lg:mt-0"
                                    style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                                >
                                    <T>See It in Action</T>
                                </button>
                            </div>
                        </div>


                        <div className="relative">
                            {/* 🔹 Top Section (Buttons) */}
                            <div className="max-w-[1177px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end mb-6 gap-3">
                                <button
                                    onClick={() => scroll("left")}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                                    aria-label="Scroll left"
                                >
                                    <IconWithFallback
                                        render={() => <ArrowLeft className="w-5 h-5 text-gray-700" />}
                                        fallback={<ChevronLeftIcon className="w-5 h-5 text-gray-700" />}
                                    />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                                    aria-label="Scroll right"
                                >
                                    <IconWithFallback
                                        render={() => <ArrowRight className="w-5 h-5 text-gray-700" />}
                                        fallback={<ChevronRightIcon className="w-5 h-5 text-gray-700" />}
                                    />
                                </button>
                            </div>

                            {/* 🔹 Scrollable Row */}
                            <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
                                <div className="max-w-[1177px] mx-auto px-6 md:px-8 xl:px-0">
                                    <div
                                        className="flex gap-4 sm:gap-6 md:gap-8 pr-[calc(50vw-640px)]"
                                        style={{ scrollSnapType: "x mandatory" }}
                                    >
                                        {(countryContent.whyAccqrateFeatures || features).map((feature, index) => (
                                            <div
                                                key={index}
                                                className="relative flex-shrink-0 bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] scroll-snap-align-start 
              w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] 
              min-h-[360px] sm:min-h-[400px] lg:h-[500px] 
              p-8 flex flex-col justify-between overflow-hidden 
              transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                                            >
                                                {/* Image + Number */}
                                                <div className="relative flex justify-between items-end">
                                                    <Image
                                                        src={feature.img}
                                                        alt={feature.title}
                                                        width={180}
                                                        height={180}
                                                        className="w-[140px] sm:w-[160px] md:w-[180px] h-auto object-contain z-10"
                                                    />
                                                    <span
                                                        className="font-anonymous text-[60px] sm:text-[70px] md:text-[90px] lg:text-[100px] pb-2 font-bold text-[#E6E6E6] leading-none select-none"
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <div className="mt-4 z-10">
                                                    <h2 className="text-fluid-h3 font-medium text-[#000000] leading-tight mb-1">
                                                        <T>{feature.title}</T>
                                                    </h2>
                                                    {feature.sub && (
                                                        <h2 className="text-fluid-h3 font-medium text-[#000000] leading-tight">
                                                            <T>{feature.sub}</T>
                                                        </h2>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p className="mt-3 sm:mt-4 text-[#000000] text-fluid-body leading-snug tracking-para line-clamp-5">
                                                    <T>{feature.description}</T>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="lg:px-6 max-w-[1177px] mx-auto w-full">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="h-[40px] w-auto text-white text-fluid-small tracking-para leading-tight md:text-[18px] mt-[20px] md:mt-[30px]"
                                style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                            >
                                <T>See It in Action</T>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Trusted text */}
                <div className="mt-[80px] rounded-[30px] bg-[linear-gradient(180deg,#FFFFFF_0%,#E9E8FF_50%,#4F52FF_100%)] py-6 md:py-8  max-w-[1177px] mx-auto">

                    <FadeUp className="mb-8 md:mb-[40px]">
                        <h3 className="text-[24px] md:text-[28px] lg:text-[38px] tracking-heading leading-tight font-medium text-[#333333] text-center mx-auto">
                            <T>Trusted by</T> <br className="md:hidden" /><span className="text-[#194BED]"> <T>5,000+ Global companies</T></span>
                        </h3>
                    </FadeUp>

                    {/* Logo Marquee */}
                    <div className="relative">
                        <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20" />
                            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20" />

                            <div className="flex flex-col gap-6">
                                <div className="flex animate-scrollLeft w-max flex-shrink-0">
                                    {[...topRow, ...topRow].map((logo, i) => (
                                        <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={135}
                                                height={48}
                                                className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                            />
                                            <p className=" text-xs md:text-sm text-[#737373] font-medium"> <T>{logo.name}</T> </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex animate-scrollRight w-max flex-shrink-0">
                                    {[...bottomRow, ...bottomRow].map((logo, i) => (
                                        <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={135}
                                                height={48}
                                                className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                            />
                                            <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 border-b border-gray-100 flex flex-col mt-[34px] items-center">
                        <div className="flex items-center space-x-2 text-[#194BED]">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span className="text-[#333333] text-fluid-small lg:text-[16px] tracking-para ml-2"><T>Based on reviews</T></span>
                        </div>
                    </div>

                    <div className="flex items-center justify-end md:pr-20">
                        <Image src={AssetPath.home.orangeStar} className="h-[64px]" width={64} height={64} alt="orstar" />
                    </div>

                    <div className="max-w-[1440px] mx-auto px-6 md:px-8 mt-[32px] grid xl:grid-cols-2 gap-6">
                        {/* Left Side: Full-Suite ERP */}
                        <FadeUp className="bg-[#FFFFFF] font-inter rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col xl:h-full">
                            <div className="flex flex-col flex-1">
                                <div>
                                    <div className="flex items-center space-x-4">
                                        <Image src={AssetPath.home.greenAccq} alt="one" width={50} height={50} className="h-[40px] md:h-[50px] w-auto" />
                                        <span className="text-[#000000] tracking-heading leading-tight text-fluid-body whitespace-nowrap">
                                           <T>Accqrate E-invoicing</T>
                                            <span className="text-sm"> <br /><T>{countryContent.heroSubtitle}</T></span>
                                        </span>
                                    </div> 
                                    <p className="pb-6 md:pb-[32px] tracking-para leading-[24px] text-[#333333] text-fluid-body mt-[30px]">
                                        <T>Peppol Member and certified Access Point Provider and Service Metadata Publisher.</T>
                                    </p>
                                </div>

                                <div className="w-full mt-auto">
                                    <div className="border-[#FF9BC1] border h-[480px] md:h-[420px] rounded-[20px] flex items-center justify-center overflow-hidden bg-white">
                                        <Image
                                            src={AssetPath.invoicing.invoiceHome}
                                            alt="Invoice preview"
                                            width={620}
                                            height={420}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Right Side: Modules + What you'll achieve */}
                        <div className="flex flex-col gap-6 xl:h-full">
                            {countryContent.complianceSection && (
                                <>
                                    <FadeUp className="bg-[#FFFFFF] font-inter rounded-xl md:rounded-2xl p-6 flex-1">
                                <h2 className="text-fluid-body font-medium tracking-heading"><T>Full Compliance with Belgium’s E-Invoicing Mandate</T></h2>
                                <h2 className="text-fluid-small lg:text-[16px] mt-4 font-normal tracking-heading"><T>Accqrate ensures end-to-end compliance with Belgium’s B2B e-invoicing mandate and the FPS Finance requirements. Our platform supports:</T></h2>
                                <ul className="gap-y-2 mt-8 text-fluid-small lg:text-[16px] tracking-para leading-[26px] list-disc pl-5">
                                            {countryContent.complianceSection?.complianceItems.map((item, index) => (
                                                <li key={index}><T>{item}</T></li>
                                            ))}
                                </ul> 
                            </FadeUp>

                                    <FadeUp className="bg-[#FFFFFF] font-inter rounded-xl md:rounded-2xl p-6 flex-1">
                                        <h2 className="text-fluid-body font-medium tracking-heading"><T>{countryContent.complianceSection?.automationTitle}</T></h2>
                                        <h2 className="text-fluid-small lg:text-[16px] mt-4 font-normal tracking-heading"><T>{countryContent.complianceSection?.automationDescription}</T></h2>
                                        <ul className="text-left list-disc pl-5 space-y-1 mt-[15px] text-fluid-small lg:text-[16px] leading-tight tracking-para">
                                            {countryContent.complianceSection?.automationItems.map((item, index) => (
                                                <li key={index}><T>{item}</T></li>
                                            ))}
                                        </ul> 

                                        <button
                                            onClick={() => setModalOpen(true)}
                                            className="h-[46px] md:h-[55px] max-w-[250px] w-full text-center flex items-center gap-4 justify-center px-4 rounded-[100px] text-white text-[14px] md:text-[18px] mt-[32px] bg-gradient-to-r from-[#B4441E] via-[#F05A28] to-[#F48B69]"
                                        >
                                            <T>{countryContent.complianceSection?.buttonText}</T>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M9 6l6 6-6 6"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </FadeUp>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Your AI Copilot */}
                <div className="block pb-10">

                    {/* HERO SECTION */}
                    <div className="relative min-h-[400px] md:min-h-[450px] mt-10 md:mt-20">
                        {/* Background Image - Positioned at bottom */}
                        <Image
                            src={AssetPath.home.waveVector}
                            alt="Wave Vector"
                            width={1440}
                            height={350}
                            className="absolute bottom-0 left-0 w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-xl z-0"
                        />


                        {/* Content */}
                        <div className="relative z-10 flex items-center min-h-[400px] md:min-h-[450px] max-w-[1200px] mx-auto rounded-[20px] px-4 md:px-6 lg:px-8 bg-white">
                            <div className="max-w-[1177px] mx-auto w-full grid lg:grid-cols-2 gap-4 md:gap-6">

                                {/* Left Part */}
                                <FadeUp className="font-inter rounded-2xl flex flex-col justify-between p-4 md:p-6 lg:p-8 bg-transparent flex-shrink-0 order-2 lg:order-1">
                                    <div>
                                        <h2 className="text-black text-[20px] md:text-[24px] lg:text-[38px] font-medium leading-tight">
                                            <span className="text-[#194BED]">Accelera</span> <T>Your AI Copilot</T>
                                        </h2>

                                        <p className="text-[#333333] text-[13px] md:text-[14px] lg:text-[16px] mt-6 md:mt-[40px] mb-4 md:mb-6">
                                           <T>Work faster and decide smarter with AI embedded across the suite.</T>
                                        </p>

                                        <ul className="list-disc pl-4 md:pl-5 space-y-3 md:space-y-4 text-[13px] md:text-[14px] lg:text-[16px]">
                                            <li><b><T>Natural-language actions:</T></b> <T>Ask, &quot;Show last month&apos;s receivables by region&quot;</T></li>
                                            <li><b><T>Automations:</T></b> <T>Generate e-invoices, trigger approvals</T></li>
                                            <li><b><T>Insight to action:</T></b> <T>Spot anomalies, forecast demand</T></li>
                                            <li><b><T>Assistive UX:</T></b> <T>Contextual help & guided workflows</T></li>
                                        </ul>
                                    </div>

                                    <button
                                        className="h-[40px] w-full md:max-w-[399px] mt-6 md:mt-10 flex items-center justify-between px-4 text-white text-[14px] md:text-[16px] rounded-lg"
                                        style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                                        onClick={() => setModalOpen(true)}
                                    >
                                        <span className="truncate mr-2"><T>See Accelera in a 5-Minute Demo</T></span>
                                        <svg width="20" height="20" fill="none" stroke="currentColor" className="flex-shrink-0">
                                            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </FadeUp>

                                {/* Right Part */}
                                <FadeUp className="flex items-center justify-center p-4 md:p-6 lg:p-8 order-1 lg:order-2">
                                    <div className="relative w-full max-w-[520px]">
                                        <Image
                                            src={AssetPath.home.ai}
                                            alt="AI Copilot"
                                            width={520}
                                            height={420}
                                            className="w-full h-auto object-contain rounded-lg"
                                            priority
                                        />
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    </div>


                    <div>
                        {/* COMPLIANCE SECTION - ViDA (Hidden for UAE) */}
                        {countryCode !== 'AE' && (
                        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 mt-8 md:mt-[48px] lg:mt-[72px] grid lg:grid-cols-2 gap-4 md:gap-6 pb-6 md:pb-[36px] rounded-xl md:rounded-2xl bg-white">
                        {/* Left Side: Image (Desktop) */}
                        <div className="hidden lg:flex flex-col items-start justify-between p-6 md:p-8">
                            <h2 className="text-black tracking-para text-[24px] md:text-[28px] lg:text-[38px] font-medium leading-tight whitespace-nowrap mb-6">
                                <T>Future-Ready for</T> <span className="text-[#194BED]">ViDA</span>
                            </h2>
                            <Image
                                src={AssetPath.home.vida}
                                alt="VIDA Compliance"
                                width={520}
                                height={420}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Right Side: Text + List + Button */}
                        <FadeUp className="font-inter rounded-xl md:rounded-2xl flex flex-col justify-center p-4 md:p-6 lg:p-8 order-2 lg:order-1">
                            {/* Heading (mobile only) */}
                            <h2 className="text-[14px] md:text-[16px] lg:text-fluid-small text-left pl-4 md:pl-5 leading-[22px] md:leading-[24px] tracking-para mb-4">
                               <T>Accqrate equips enterprises to be compliant across the upcoming ViDA landscape:</T>
                            </h2>

                            <div>
                                <ul className="list-disc space-y-3 md:space-y-4 mt-3 md:mt-[15px] text-[13px] md:text-[14px] lg:text-fluid-small text-left pl-4 md:pl-5 leading-[20px] md:leading-[24px] tracking-para">
                                    <li>
                                        <T>Cross-border interoperability within the EU</T>
                                    </li>
                                    <li><T>Configurable digital reporting aligned with ViDA</T></li>
                                    <li>
                                        <T>Multi-entity, multi-VAT number management for MNCs</T>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => setModalOpen(true)}
                                className="h-[44px] md:h-[50px] w-full md:max-w-[350px] flex items-center justify-between px-4 text-white text-[14px] md:text-[16px] lg:text-[18px] lg:mt-16 mt-6 md:mt-[32px] rounded-lg"
                                style={{ background: "linear-gradient(90deg, #194BED 0%, #29266E 100%)" }}
                            >
                                <span className="truncate mr-2"><T>Talk to our Consultant</T></span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    className="text-white inline-block fill-current flex-shrink-0"
                                    style={{ color: 'var(--icon-color, #ffffff)' }}
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </button> 
                        </FadeUp>

                        {/* Image (Mobile) */}
                        <div className="lg:hidden flex items-center justify-center p-4 md:p-6 order-1 lg:order-2">
                            <Image
                                src={AssetPath.home.vida}
                                alt="VIDA Compliance"
                                width={520}
                                height={420}
                                className="w-full h-auto object-contain max-w-full"
                            />
                        </div>
                    </div>
                        )}

                    {/* DCTCE SECTION ONLY FOR UAE */}
                    {countryCode === 'AE' && (
                    <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 mt-8 md:mt-[48px] lg:mt-[72px] pb-6 md:pb-[36px] rounded-xl md:rounded-2xl bg-white">
                        <div className="p-6 md:p-8">
                            <h2 className="text-black tracking-para text-[24px] md:text-[28px] lg:text-[38px] font-medium leading-tight whitespace-nowrap mb-6">
                                <T>Future-Ready for </T> <span className="text-[#194BED]">DCTCE / 5 Corner:</span>
                            </h2>
                            <h2 className="text-[14px] md:text-[16px] lg:text-fluid-body text-left leading-[22px] md:leading-[24px] tracking-para mb-4">
                               <T>Accqrate equips enterprises to be compliant across the upcoming UAE E-invoicing model DCTCE / 5 corner :</T>
                            </h2>
                            <Image
                                src={AssetPath.home.dctce}
                                alt="VIDA Compliance"
                                width={520}
                                height={420}
                                className="w-full h-auto object-contain"
                            />
                            <button
                                        className="h-[40px] w-full md:max-w-[288px] mt-6 md:mt-10 flex items-center justify-between px-4 text-white text-[14px] md:text-[16px] rounded-lg"
                                        style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                                        onClick={() => setModalOpen(true)}
                                    >
                                        <span className="truncate mr-2"><T>Talk to our Consultant</T></span>
                                        <svg width="20" height="20" fill="none" stroke="currentColor" className="flex-shrink-0">
                                            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                        </div>
                    </div>
                    )}
                    </div>
                </div>
            </div>

            {/* Outcomes and The Impact */}
            <div className="md:mx-8 hidden"  >
                <div className="relative md:-top-[150px] lg:-top-[200px] max-w-[1151px] pb-8 mx-auto md:border md:rounded-[40px] bg-white min-h-[400px]">
                    <div>
                        <h2 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium text-center mt-8 tracking-heading leading-tight"><T lang={lang} countryCode={countryCode}>Outcomes and The Impact</T></h2>
                    </div>
                    <div className="mt-[73px] grid grid-cols-1 md:grid-cols-3 gap-10">
                        {icon.map((icon, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center max-w-[174px] mx-auto md:max-w-[207px]"
                            >
                                <Image className="mb-4" src={icon.img} alt={icon.title} />
                                <h2 className="text-fluid-h2 xl:text-[23px] text-[#194BED] font-medium mb-2 tracking-heading leading-tight"><T>{icon.title}</T></h2>
                                <p className="text-fluid-body tracking-para leading-tight"><T>{icon.description}</T></p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t-2 text-[#D9D9D9] mt-[40px] max-w-[354px] mx-auto md:max-w-[676px] lg:max-w-[1051px] "> 
                        <h2 className="text-[#000000] text-fluid-body text-center max-w-[273px] md:max-w-[677px] mx-auto mt-[28px] leading-tight tracking-heading">
                            <T>Operating across MENA & ASEAN, backed by Iteron AG (Switzerland).</T>
                        </h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="h-[40px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
                            style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                        >
                            <T>Read Customer Stories</T>
                            <svg width="20" height="20" viewBox="0 0 24 24" className="text-white inline-block leading-tight fill-current" style={{ color: 'var(--icon-color, #ffffff)' }} role="img" aria-hidden="true" focusable="false">
                                <path d="M9 6l6 6-6 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >

            {/* Testimonials Section */}
            <div className="max-w-[1177px] mx-auto px-0 md:px-8 mt-8 md:mt-10" >
                <h2 className="text-[24px] md:text-[28px] lg:text-[38px] text-left mb-8 px-6"><T lang={lang} countryCode={countryCode}>Testimonials</T></h2>
                <Carousel items={testimonialCards} autoplay autoplayDelay={4000} />
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
                        style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                    >
                        <T>Speak to a Reference Customer</T>
                        <svg width="20" height="20" viewBox="0 0 24 24" className="text-white inline-block fill-current" style={{ color: 'var(--icon-color, #ffffff)' }} role="img" aria-hidden="true" focusable="false">
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div >

            {/* Our ValuesDrive Everything We Do */}
            <div className="bg-[#F8F6FF] py-[50px] mt-8 md:mt-10 " >
                <div className="px-6 md:px-8 xl:px-0 max-w-[1177px] mx-auto xl:flex items-end justify-between gap-20">
                    {/* Left Text */}
                    <div className="flex-1">
                        <h1 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium py-[30px] md:py-[37px] tracking-heading leading-tight">
                            <T>Our Values</T> <br /><T>Drive Everything We Do</T>
                        </h1>
                        <p className="text-fluid-body lg:text-[16px] max-w-[662px] tracking-para leading-tight">
                            <T>Built on trust, innovation and excellence, we deliver measurable results that transform business and create lasting impact.</T>
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="mt-[32px] xl:mt-0 flex justify-start xl:justify-end">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="h-[40px] md:h-[46px] w-full xl:w-auto max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px]"
                            style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                        >
                            <T>Book a Personalized Walkthrough</T>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="text-white"
                            >
                                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>


                {/* CarouselCard */}
                <div className="solutions-carousel relative max-w-[1177px] mx-auto pl-6 md:pl-8 xl:pl-0 mt-[40px] md:mt-[38px] lg:mt-[70px]">
                    <div ref={carouselRef} className="carousel-wrapper overflow-x-auto scrollbar-hide">
                        <div
                            className="carousel-track flex transition-transform duration-500 ease-in-out gap-8"
                            style={{ scrollSnapType: "x mandatory" }}
                        >
                            {duplicatedCards.map((item, i) => (
                                <div
                                    key={i}
                                    className="solution-card box px-6 py-5 rounded-lg w-[250px] h-[156px] md:h-[200px] flex-shrink-0 flex flex-col justify-between shadow-xl"
                                    style={{ scrollSnapAlign: "start", background: item.bg }}
                                >
                                    <div className="flex flex-col justify-start items-start gap-6">
                                        <h3 className="font-medium leading-tight tracking-heading text-fluid-body md:text-[20px] text-black">
                                         <T>{item.title}</T>
                                        </h3>
                                        <p className="text-fluid-small lg:text-[16px] mt-2 md:mt-3 tracking-para leading-tight text-black">
                                            <T>{item.desc}</T>
                                        </p>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Frequently Answered Questions */}
                <div>
                    <div className="px-0 md:px-8 max-w-[1177px] mx-auto py-6 xl:px-0 mt-8 md:mt-12 lg:mt-[100px]">
                        <div className="bg-white rounded-[20px] p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 relative">

                            {/* Left Section */}
                            <div className="flex flex-col w-full lg:max-w-[505px]">
                                {/* Heading */}
                                <h2 className="text-[24px] md:text-[28px] lg:text-[38px] text-left mb-6 tracking-heading leading-tight">
                                    <T>Frequently Answered Questions</T>
                                </h2>
                            </div>

                            {/* Accordion Section */}
                            <div className="mt-[20px] lg:mt-0 flex flex-col gap-8 w-full max-w-[800px]">
                                <FadeUp>
                                    <Accordion type="single" collapsible className="w-full text-left">
                                        {faqs.map((item, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`faq-${index}`}
                                                className="border-b border-[#BDBDBD] py-4"
                                            >
                                                <AccordionTrigger className="text-[16px] md:text-[18px] font-medium text-gray-800 hover:no-underline tracking-heading leading-tight text-left">
                                                    <T>{item.question}</T>
                                                </AccordionTrigger>

                                                <AccordionContent className="text-[14px] md:text-[16px] font-light text-gray-600 tracking-para leading-relaxed mt-2 text-left">
                                                    <T>{item.answer}</T>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </FadeUp>
                            </div>

                            {/* Image fixed at the bottom inside the white card */}
                            <div className="absolute bottom-0 hidden lg:-left-[200px] xl:-left-[400px] w-full lg:flex justify-center">
                                <Image
                                    src={AssetPath.home.clip}
                                    alt="faq"
                                    width={181}
                                    height={181}
                                    className="h-full lg:max-h-[181px] object-contain"
                                />
                            </div>

                        </div>
                    </div>





                </div>

                {/* Final Conversion Band */}
                <div className="max-w-[1440px] mx-auto pb-6 md:pb-8 px-6 font-inter">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[24px] md:text-[28px] lg:text-[38px] text-left py-[20px] md:py-[37px] tracking-heading leading-tight"><T lang={lang} countryCode={countryCode}>Final Conversion Band</T></h2>
                        <p className="text-fluid-body max-w-[315px] md:max-w-[1440px] tracking-para text-center leading-tight"> <T>Run compliant, AI-powered operations with Accqrate.</T></p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 lg:gap-8 py-6 md:py-8 lg:py-10">
                        {[
                            "Get a Free Proof of Concept",
                            "Subscribe for Updates",
                            "Talk to Sales",
                        ].map((text, i) => (
                            <button
                                key={i}
                                onClick={() => setModalOpen(true)}
                                className="
        relative
        lg:w-auto w-[270px]
        h-[46px]
        flex items-center justify-center
        rounded-[5px]
        px-6
        text-white
        text-fluid-small md:text-[14px] lg:text-[16px] whitespace-nowrap
        mt-[32px]
      "
                                style={{
                                    background: "linear-gradient(90deg, #194BED 0%, #29266E 100%)",
                                }}
                            >
                                {/* Centered text */}
                                <span className="mx-auto "><T>{text}</T></span>

                              
                            </button>
                        ))}
                    </div>
                </div>
            </div >
            {isModalOpen && (
                <ContactModal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </main >
    );
};

export default CountryPage;
