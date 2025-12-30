'use client'

import AssetPath from '@/AssetPath/AssetPath'
import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useParams } from "next/navigation";
import Image, { StaticImageData } from 'next/image'
import T from "@/Components/T";
import FadeUp from '@/Components/ui/FadeUp'
import belgiumInvoiceHero from "@/Assets/images/invoicing/belgium_invoice_hero.webp";
import uaeImg from "@/Assets/images/invoicing/uae.webp";
import { section6Content } from "../data/section6Content";
import CTAButton from '@/Components/CTAButton';
import Reveal from '@/Components/Reveal'

const ContactModal = dynamic(
  () => import('@/Components/ContactModal').then((mod) => mod.ContactModal),
  { ssr: false, loading: () => null }
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
  const isSaudi = countryCode === "sa" || countryCode === "jd" || countryCode === "mu";

  const content =
    section6Content[countryCode as keyof typeof section6Content] ||
    section6Content.default;

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getInvoiceMultipleImage = () => {
    switch (countryCode) {
      case 'be':
        return AssetPath.invoicing.manageTeam;
      case 'pl':
        return AssetPath.invoicing.manageTeam;
      default:
        return AssetPath.invoicing.manageteam;
    }
  };

  const demoVideos: VideoItem[] = [
    {
      title: 'Integrating Oracle Fusion with ZATCA Phase 2 E-Invoicing using Accqrate: Step-by-Step Demo',
      thumbnail: AssetPath.invoicing.integrationAssets.thumbnail.src,
      videoUrl: 'https://www.youtube.com/embed/1qu1_lYGN5k',
      desc: ''
    },
    {
      title: 'Microsoft Dynamics 365 & ZATCA Phase 2 E-Invoicing Integration: Step-by-Step Demo with Accqrate',
      thumbnail: AssetPath.invoicing.integrationAssets.thumbnail2.src,
      videoUrl: 'https://www.youtube.com/embed/CEtP0G-6tOI',
      desc: ''
    },
    {
      title: 'SAP ECC or HANA E-Invoicing: Seamless Integration with ZATCA via Accqrate | Step-by-Step Guide',
      thumbnail: AssetPath.invoicing.integrationAssets.thumbnail1.src,
      videoUrl: 'https://www.youtube.com/embed/RfvzuUOBx-Y',
      desc: ''
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth

      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <section className="mt-8 md:mt-10 lg:mt-12 relative">

        {/* ================= VIDEO THUMBNAILS (SAUDI ONLY) ================= */}
        {isSaudi && (
          <div className=" relative max-w-[1200px] mx-auto px-6 md:px-8 xl:px-0 overflow-x-hidden">
            <FadeUp>
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

              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scroll-smooth px-2 scrollbar-hide"
              >
                {demoVideos.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedVideo(video)
                      setIsVideoModalOpen(true)
                    }}
                    className="bg-white min-w-[320px] sm:min-w-[360px] md:min-w-[380px] cursor-pointer overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E8FF] hover:-translate-y-1 rounded-lg"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={380}
                      height={215}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        )}


        <div className="relative px-6 md:px-0 mt-8 md:mt-10 lg:mt-12 h-auto  overflow-hidden">
          <FadeUp>
            <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[#1A0C48] to-[#242087]" />
            <div className={`hidden md:block absolute top-0 h-full w-[50%] bg-[#F3F3FF] ${lang === 'ar' ? 'left-0 rounded-r-[30px]' : 'right-0 rounded-l-[30px]'}`} />

            <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto w-full h-full md:px-8 px-0">
              <div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left w-full bg-gradient-to-br from-[#1A0C48] to-[#242087] md:bg-none md:w-1/2 z-20 rounded-t-[30px] md:rounded-none px-6 py-20">
                <div className="max-w-[520px] md:pl-4 lg:pl-8 w-full">
                  <Reveal direction='left'>
                    <p className="text-[#d63f10] uppercase text-[16px] leading-[30px] mb-4">
                      <T lang={lang} countryCode={countryCode}>{content.expertText}</T>
                    </p>

                    <h1 className="text-white text-[23px] md:text-[24px] font-bold leading-[36px] mb-3">
                      <T lang={lang} countryCode={countryCode}>{content.title}</T>
                    </h1>

                    <p className="text-white text-[16px] leading-[30px] font-light mb-6">
                      <T lang={lang} countryCode={countryCode}>{content.subtitle}</T>
                    </p>
                  </Reveal>

                  <Reveal direction='left' className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 mb-8">
                    {content.features.map((feature, index) => (
                      <React.Fragment key={index}>
                        <p className="text-[14px] text-white font-light">
                          <T lang={lang} countryCode={countryCode}>{feature}</T>
                        </p>
                        {index < content.features.length - 1 && (
                          <Image
                            src={AssetPath.home.starOr}
                            alt="star"
                            width={20}
                            height={20}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </Reveal>

                  <CTAButton
                    onClick={() => setIsContactModalOpen(true)}
                    text={<T lang={lang} countryCode={countryCode}>{content.buttonText}</T>}
                  />
                </div>
              </div>

              <Reveal direction='right' className="relative flex justify-center items-center w-full md:w-1/2 z-10 bg-[#F3F3FF] md:bg-transparent py-10 md:py-0">
                <Image
                  src={getInvoiceMultipleImage().src}
                  alt="Accqrate software illustration"
                  width={591}
                  height={400}
                  className="rounded-2xl object-contain"
                />
              </Reveal>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-[18px] leading-[28px] font-semibold ">
                <T>{selectedVideo.title}</T>
              </h3>
              <button onClick={() => setIsVideoModalOpen(false)}>×</button>
            </div>
            <div className="relative pb-[56.25%]">
              <iframe
                src={selectedVideo.videoUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {isContactModalOpen && (
        <ContactModal
          open={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </>
  )
}

export default DemoVideoSection
