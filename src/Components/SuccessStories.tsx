import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AssetPath from '@/AssetPath/AssetPath';
import curveyLine from "@/Assets/images/icons/curvey-line.svg";
import profile1 from "@/Assets/images/home/profile1.png";
import profile2 from "@/Assets/images/home/profile2.png";

// Define the interface for testimonial data
export interface TestimonialData {
    id: number;
    title: string;
    description: string;
    namePosition: string;
    company: string;
    CompanyLogo: string;
    profilePic: string; // This should be a string, not an object
}

// Sample data - replace with your actual data
export const testimonialsData: TestimonialData[] = [
    {
        id: 1,
        title: 'E-Invoice Revolution',
        description: 'Accqrate\'s e-invoice solution has truly revolutionized our business operations. With their expertise and deep understanding of ZATCA requirements, they seamlessly integrated our invoicing system with the tax authority, ensuring compliance and accuracy at every step. This integration has not only saved us valuable time but also significantly reduced the risk of errors and non-compliance.',
        namePosition: 'Al Laith, UAE',
        company: 'Global Health and Beauty Co.',
        CompanyLogo: '/logo1.png',
        profilePic: profile1.src // CORRECTED: Remove curly braces
    },
    {
        id: 2,
        title: 'Client-Centric Innovation',
        description: 'An ERP team must excel in understanding requirements, delivering on time, and most importantly, addressing business needs without compromising functionality.With Accqrate, we\'ve discovered a solution that embodies these qualities seamlessly.Accqrate Solutions stands out as a robust product, offering exceptional flexibility, scalability, and performance.Its intuitive interface significantly reduces the need for extensive training, saving both time and effort. Moreover, the team\'s strong communication skills and unwavering dedication have transformed how we manage our business processes. Their exceptional teamwork and support are truly commendable.',
        namePosition: 'Wail',
        company: 'Jonex',
        CompanyLogo: '/logo2.png',
        profilePic: profile2.src // CORRECTED: Remove curly braces
    },
    {
        id: 3,
        title: 'Outstanding IT Solutions',
        description: 'Your ability to tailor IT solutions that address the unique challenges of our region has greatly improved our operational efficiency. Your proactive approach and commitment to client satisfaction have been truly impressive.',
        namePosition: 'Ali',
        company: 'Construction Company',
        CompanyLogo: '/logo3.png',
        profilePic: profile1.src // CORRECTED: Remove curly braces
    },
];

// Simple arrow icons (since we can't use external icons)
const ArrowRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

const ChevronRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

// Simple image component - you can use Next.js Image for better optimization
import Image from 'next/image';

const LazyImage: React.FC<{
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
}> = ({ src, alt, className = '', style = {}, width, height }) => (
    <Image
        src={src}
        alt={alt}
        className={className}
        style={style}
        width={width || 48}
        height={height || 48}
        loading="lazy"
    />
);

const SuccessStories: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto slide every 3 seconds
    useEffect(() => {
        const startAutoSlide = () => {
            if (!isHovering) {
                intervalRef.current = setInterval(() => {
                    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
                }, 3000);
            }
        };

        startAutoSlide();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovering]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
        resetAutoSlide();
    };

    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
        resetAutoSlide();
    };

    const resetAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (!isHovering) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
            }, 3000);
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <section className="success-stories py-6 md:py-8 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Content Column */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-[24px] font-bold text-[#1c2041] max-w-[295px] mb-4">
                                See how our customers drive impact
                            </h2>
                            <Link
                                href="/success-story"
                                className="inline-flex items-center text-[#F05A28] text-[18px] transition-colors duration-300 hover:text-[#d94a1f]"
                            >
                                Read more success stories
                                <ArrowRightIcon />
                            </Link>
                        </div>
                        <div className='md:flex items-center justify-around h-[300px] -top-10 hidden'>
                            <img src={AssetPath.home.orangeStar.src} alt="orangeStar" className='h-[62px]' />
                        </div>
                    </div>

                    {/* Right Carousel Column */}
                    <div>
                        <div
                            className="relative"
                        >
                            {/* Carousel Container */}
                            <div className="overflow-hidden rounded-2xl bg-[#1A4BED] shadow-xl">
                                <div className="p-6 md:p-8">
                                    {testimonialsData.map((data, index) => (
                                        <div
                                            key={data.id}
                                            className={`transition-all duration-500 ${currentSlide === index
                                                ? 'opacity-100 max-h-[500px]'
                                                : 'opacity-0 max-h-[500px] overflow-hidden absolute'
                                                }`}
                                        >
                                            <div className="text-white pb-4">
                                                {/* Title */}
                                                <h3 className="text-[18px] font-bold mb-3">
                                                    {data.title}
                                                </h3>

                                                {/* Curvy Line */}
                                                <div className="mb-4">
                                                    <img src={curveyLine.src} alt="curveyLine" className='w-[90px]' />
                                                </div>

                                                {/* Description */}
                                                <p className="text-[14px] opacity-90 leading-relaxed mb-4">
                                                    {data.description}
                                                </p>

                                                {/* Company Info */}
                                                <div className="flex items-center justify-between gap-4 pt-4">
                                                    <div>
                                                        <div className="font-semibold text-[16px]">
                                                            {data.namePosition}
                                                        </div>
                                                        <div className="text-blue-200 text-sm">
                                                            {data.company}
                                                        </div>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={data.profilePic}
                                                            alt={data.namePosition}
                                                            width={48}
                                                            height={48}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Shape */}
            {/* <div className="hidden lg:block absolute -right-20 -bottom-20 opacity-10">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 blur-3xl"></div>
            </div> */}
        </section>
    );
};

export default SuccessStories;