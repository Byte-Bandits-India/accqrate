'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { getSolutionsContent, ContentItem } from './data/solutions-content'
import T from '@/Components/T';

interface SolutionsProps {
    countryCode?: string // Add countryCode prop
}

export default function Solutions({ countryCode }: SolutionsProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Get content based on country code
    const contents = getSolutionsContent(countryCode)
    const selectedContent = contents[selectedIndex] || contents[0]

    // Fixed scroll behavior for selected item
    const scrollToSelected = useCallback((index: number) => {
        const container = containerRef.current
        if (!container) return

        const item = container.children[index] as HTMLElement
        if (item) {
            const containerTop = container.scrollTop
            const containerBottom = containerTop + container.clientHeight
            const itemTop = item.offsetTop
            const itemBottom = itemTop + item.offsetHeight

            // Only scroll if item is out of view
            if (itemTop < containerTop) {
                container.scrollTo({ top: itemTop - 10, behavior: 'smooth' })
            } else if (itemBottom > containerBottom) {
                container.scrollTo({ top: itemBottom - container.clientHeight + 10, behavior: 'smooth' })
            }
        }
    }, [])

    const handleNext = useCallback(() => {
        setSelectedIndex(prev => {
            const newIndex = Math.min(prev + 1, contents.length - 1)
            return newIndex
        })
    }, [contents.length])

    const handlePrevious = useCallback(() => {
        setSelectedIndex(prev => {
            const newIndex = Math.max(prev - 1, 0)
            return newIndex
        })
    }, [])

    const handleItemClick = useCallback((index: number) => {
        setSelectedIndex(index)
    }, [])

    // Scroll to selected item whenever it changes
    useEffect(() => {
        scrollToSelected(selectedIndex)
    }, [selectedIndex, scrollToSelected])

    // Function to get country-specific title
    const getCountryTitle = () => {
        switch (countryCode?.toUpperCase()) {
            case 'AE':
                return 'UAE E-Invoicing Solutions'
            case 'SA':
                return 'Saudi Arabia (ZATCA) E-Invoicing Solutions'
            case 'MY':
                return 'Malaysia (LHDN) E-Invoicing Solutions'
            case 'MU':
                return 'Mauritius (MRA) E-Invoicing Solutions'
            case 'JO':
                return 'Jordan (ISTD) E-Invoicing Solutions'
            case 'OM':
                return 'Oman E-Invoicing Solutions'
            case 'BH':
                return 'Bahrain E-Invoicing Solutions'
            case 'QA':
                return 'Qatar E-Invoicing Solutions'
            case 'KW':
                return 'Kuwait E-Invoicing Solutions'
            case 'EG':
                return 'Egypt E-Invoicing Solutions'
            default:
                return 'Accqrate E-Invoicing Solutions'
        }
    }

    // Function to get country-specific subtitle
    const getCountrySubtitle = () => {
        switch (countryCode?.toUpperCase()) {
            case 'AE':
                return 'FTA-Compliant Solutions for UAE Businesses'
            case 'SA':
                return 'ZATCA Phase 2 Compliant Solutions for Saudi Businesses'
            case 'MY':
                return 'LHDN-Compliant Solutions for Malaysian Businesses'
            case 'MU':
                return 'MRA-Compliant Solutions for Mauritian Businesses'
            case 'JO':
                return 'ISTD-Compliant Solutions for Jordanian Businesses'
            default:
                return 'Streamline Operations and Accelerate Business Growth'
        }
    }

    return (
        <section className="bg-[#F8F7FF] py-20">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-0">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] leading-tight">
                        <T>Accqrate E-Invoicing Solutions</T>
                    </h3>
                    <p className="text-[#5A6183] text-fluid-body mt-3">
                        <T>Streamline Operations and Accelerate Business Growth</T>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
                    {/* Left Stepper */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="relative">
                            {/* Previous Button */}
                            <button
                                className="absolute left-1/2 -translate-x-1/2 -top-10 flex items-center gap-1 text-[#FF8D67] text-sm font-medium bg-[#F8F7FF] px-4 py-2 rounded-lg z-10 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                                onClick={handlePrevious}
                                disabled={selectedIndex === 0}
                            >
                                <ChevronUp size={16} />
                                <T>Previous</T>
                            </button>

                            <div
                                ref={containerRef}
                                className="h-[550px] overflow-hidden rounded-xl"
                            >
                                <div className="flex flex-col gap-3 overflow-y-auto h-full pr-2 scrollbar-hide">
                                    {contents.map((item) => {
                                        const isActive = item.index === selectedIndex
                                        return (
                                            <div
                                                key={item.index}
                                                onClick={() => handleItemClick(item.index)}
                                                className={`flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer transition-all duration-300
                          ${isActive
                                                        ? 'bg-white border border-[#FFE1D8] shadow-sm'
                                                        : 'hover:bg-white/40'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center border text-sm font-medium
                              ${isActive
                                                                ? 'bg-[#ffffff] text-[#FF8A65] border-[#FFD2C2]'
                                                                : 'border-[#91ABFF] text-[#91ABFF]'
                                                            }`}
                                                    >
                                                        <T>{item.sno}</T>
                                                    </div>
                                                    <span
                                                        className={`text-sm md:text-fluid-body uppercase ${isActive ? 'text-[#1C2041] font-normal' : 'text-[#6C70A1]'
                                                            }`}
                                                    >
                                                        <T>{item.content}</T>
                                                    </span>
                                                </div>
                                                <ChevronRight
                                                    size={18}
                                                    className={`${isActive ? 'text-[#FF8A65]' : 'text-[#C5CBF9]'}`}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex items-center gap-1 text-[#FF8D67] text-sm font-medium bg-[#F8F7FF] px-4 py-2 rounded-lg z-10 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                                onClick={handleNext}
                                disabled={selectedIndex === contents.length - 1}
                            >
                                <T>Next</T>
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-[50%]">
                        <h4 className="text-fluid-h2 lg:text-[38px] font-normal text-[#1C2041] leading-[40px]">
                            <T>{selectedContent.content}</T>
                        </h4>
                        <p className="text-[#5A6183] text-fluid-small leading-[37px] mt-4 md:mt-6 mb-8 max-w-[580px]">
                            <T>{selectedContent.desc}</T>
                        </p>

                        <div className="relative flex flex-col md:flex-row gap-6">
                            <div className="relative">
                                <Image
                                    src={selectedContent.image}
                                    alt={`${getCountryTitle()} - Accqrate Accounting software`}
                                    width={600}
                                    height={400}
                                    className="md:w-full md:h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}