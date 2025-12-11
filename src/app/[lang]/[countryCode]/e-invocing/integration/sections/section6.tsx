'use client'
import AssetPath from '@/AssetPath/AssetPath'
import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useParams } from "next/navigation";
import Image, { StaticImageData } from 'next/image'
import T from "@/Components/T";

// Import ContactModal with dynamic loading
const ContactModal = dynamic(
    () => import('@/Components/ContactModal').then((mod) => mod.ContactModal),
    {
        ssr: false,
        loading: () => null,
    }
)

interface VideoItem {
    title: string
    thumbnail: string | StaticImageData
    videoUrl: string
    desc: string
}

const DemoVideoSection: React.FC = () => {
    const params = useParams();
    const lang = params?.lang as string || "en";
    const countryCode = params?.countryCode as string;
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const demoVideos: VideoItem[] = [
        {
            title: 'Integrating Oracle Fusion with ZATCA Phase 2 E-Invoicing using Accqrate: Step-by-Step Demo',
            thumbnail: AssetPath.invoicing.integrationAssets.thumbnail.src,
            videoUrl: 'https://www.youtube.com/embed/1qu1_lYGN5k',
            desc: 'As Saudi Arabia ushers in the ZATCA Phase 2 e-invoicing era, the demand for a seamless bridge between SAP and ZATCA has never been more crucial.'
        },
        {
            title: 'Microsoft Dynamics 365 & ZATCA Phase 2 E-Invoicing Integration: Step-by-Step Demo with Accqrate',
            thumbnail: AssetPath.invoicing.integrationAssets.thumbnail2.src,
            videoUrl: 'https://www.youtube.com/embed/CEtP0G-6tOI',
            desc: 'Embark on a comprehensive walkthrough of Microsoft Dynamics 365 as we demonstrate its flawless E-Invoicing integration with ZATCA Phase 2, powered by Accqrate.'
        },
        {
            title: 'SAP ECC or HANA E-Invoicing: Seamless Integration with ZATCA via Accqrate | Step-by-Step Guide',
            thumbnail: AssetPath.invoicing.integrationAssets.thumbnail1.src,
            videoUrl: 'https://www.youtube.com/embed/RfvzuUOBx-Y',
            desc: 'As Saudi Arabia ushers in the ZATCA Phase 2 e-invoicing era, the demand for a seamless bridge between SAP and ZATCA has never been more crucial.'
        }
    ]

    const handleVideoClick = (video: VideoItem) => {
        setSelectedVideo(video)
        setIsVideoModalOpen(true)
    }

    const handleCloseVideoModal = () => {
        setIsVideoModalOpen(false)
        setSelectedVideo(null)
    }

    const handleContactClick = () => {
        setIsContactModalOpen(true)
    }

    const handleCloseContactModal = () => {
        setIsContactModalOpen(false)
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            scrollContainerRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <>
            <section className="mt-8 md:mt-10 lg:mt-12 relative">
                <div className="hidden text-center mb-8 px-6 md:px-8 xl:px-0">
                    <h2 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] mb-3">
                        <T lang={lang} countryCode={countryCode}>Free proof of concept for</T> <span className="text-[#46A833]"><T lang={lang} countryCode={countryCode}>Integration</T></span>
                    </h2>
                    <p className='text-fluid-body text-[#5A6183]'>
                        <T lang={lang} countryCode={countryCode}>Tailored, innovative solutions enhancing efficiency and accuracy for your business.</T>
                    </p>
                </div>

                {/* Scroll container with relative positioning for absolute children */}
                <div className="hidden relative max-w-[1200px] mx-auto px-6 md:px-8 xl:px-0 overflow-x-hidden">
                    {/* Scroll Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full p-2 z-10 -ml-4"
                    >
                        <ChevronLeft className="w-6 h-6 text-[#FF8D67]" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full p-2 z-10 -mr-4"
                    >
                        <ChevronRight className="w-6 h-6 text-[#FF8D67]" />
                    </button>

                    {/* Horizontal Scroll Section */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth px-2 scrollbar-hide"
                    >
                        {demoVideos.map((video, index) => (
                            <div
                                key={index}
                                onClick={() => handleVideoClick(video)}
                                className="bg-white min-w-[320px] sm:min-w-[360px] md:min-w-[380px] cursor-pointer overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E8FF] hover:-translate-y-1 rounded-lg"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="thumbnail overflow-hidden">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            width={380}
                                            height={215}
                                            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mt-8 md:mt-10 lg:mt-12 h-auto md:h-[537px] overflow-hidden">
                    {/* BACKGROUND LAYERS (DESKTOP) */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[#1A0C48] to-[#242087]" />
                    <div className="hidden md:block absolute top-0 right-0 h-full w-[50%] bg-[#F3F3FF] rounded-l-[30px]" />

                    {/* CONTENT */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1280px] mx-auto w-full h-full md:px-8 px-0 md:py-0 gap-0 md:gap-0">
                        {/* LEFT CONTENT */}
                        <div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left w-full bg-gradient-to-br from-[#1A0C48] to-[#242087] md:bg-none md:w-1/2 z-20 order-2 md:order-1 md:bg-transparent rounded-t-[30px] md:rounded-none px-6 md:px-0 py-10 md:py-0">
                            <div className="max-w-[520px] md:pl-4 lg:pl-8 w-full">
                                <p className="text-white uppercase text-fluid-small leading-[30px] mb-4 md:mb-6">
                                    <T lang={lang} countryCode={countryCode}>Talk to our expert</T>
                                </p>

                                <h1 className="text-white text-fluid-h2 lg:text-[34px] font-bold leading-tight mb-3">
                                    <T lang={lang} countryCode={countryCode}>Do You Want To Know More?</T>
                                </h1>

                                <p className="text-white md:text-[24px] leading-[30px] font-light mb-6">
                                    <T lang={lang} countryCode={countryCode}>Kick start your free proof of concept</T>
                                </p>

                                {/* Small Feature Text */}
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 mb-8 lg:text-nowrap">
                                    <p className="text-fluid-small md:text-[18px] text-white font-light">
                                        <T lang={lang} countryCode={countryCode}>Seamless</T>
                                    </p>
                                    <Image
                                        src={AssetPath.home.starOr}
                                        alt="orange_star"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 md:w-auto md:h-auto"
                                    />
                                    <p className="text-fluid-small md:text-[18px] text-white font-light">
                                        <T lang={lang} countryCode={countryCode}>Complaint</T>
                                    </p>
                                    <Image
                                        src={AssetPath.home.starOr}
                                        alt="orange_star"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 md:w-auto md:h-auto"
                                    />
                                    <p className="text-fluid-small md:text-[18px] text-white font-light">
                                        <T lang={lang} countryCode={countryCode}>Secure</T>
                                    </p>
                                </div>

                                {/* Button - Changed from Link to button */}
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        onClick={handleContactClick}
                                        className="relative flex items-center justify-center w-[160px] h-[46px] md:w-[160px] md:h-[52px] bg-[#F05A28] rounded-[50px] px-2 text-white text-[14px] md:text-[16px] whitespace-nowrap transition-all duration-300 hover:bg-[#d94f22]"
                                    >
                                        <span className="mr-4"> <T lang={lang} countryCode={countryCode}>Get Started</T> </span>
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
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE SECTION */}
                        <div className="relative flex justify-center items-center w-full top-8 md:top-0 md:w-1/2 z-10 order-1 md:order-2 bg-[#F3F3FF] md:bg-transparent py-10 md:py-0 overflow-hidden">
                            <Image
                                src={AssetPath.integration.footer}
                                alt="Accqrate software illustration"
                                width={591}
                                height={400}
                                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[591px] rounded-2xl object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoModalOpen && selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-semibold text-[#1C2041]"><T lang={lang} countryCode={countryCode}>{selectedVideo.title}</T></h3>
                            <button
                                onClick={handleCloseVideoModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="relative pb-[56.25%] h-0">
                                <iframe
                                    src={selectedVideo.videoUrl}
                                    title={selectedVideo.title}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Modal */}
            {isContactModalOpen && (
                <ContactModal
                    open={isContactModalOpen}
                    onClose={handleCloseContactModal}
                // Pass additional props if needed
                />
            )}
        </>
    )
}

export default DemoVideoSection
