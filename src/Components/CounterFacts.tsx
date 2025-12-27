'use client'

import React from 'react'
import CountUp from 'react-countup'
import T from './T'

interface CountItem {
    name: string
    value: number
    additionalText?: string
}

interface CounterFactsProps {
    className?: string
    MainTitle?: string
    desc?: string
}

const countSet: CountItem[] = [
    { name: 'Trusted customers', value: 5000 },
    { name: 'Integration engineers and Consultants', value: 80 },
    { name: 'Invoices per month', value: 30, additionalText: 'M' },
    { name: 'Completed integrations', value: 3000 },
]

const CounterFacts: React.FC<CounterFactsProps> = ({
    className = '',
    MainTitle,
    desc,
}) => {
    return (
        <section className={`pt-10 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Heading */}
                {MainTitle && (
                    <div className="text-center mb-8">
                        <h3 className="text-[28px] md:text-[32px] lg:text-[39px] font-semibold text-[#1C2041] mb-3">
                            <T>{MainTitle}</T>
                        </h3>
                        <p className="text-[#5A6183] text-base md:text-lg">
                            <T>{desc || 'A simple and elegant ERP solution'}</T>
                        </p>
                    </div>
                )}

                {/* Counter Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 text-center">
                    {countSet.map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center">
                            {/* count — responsive font size */}
                            <div className="text-[25px] md:text-[36px] font-bold text-[#1C2041] flex items-baseline justify-center">
                                <CountUp start={0} end={item.value} duration={4} />
                                {item.additionalText && (
                                    <span className="ml-1 text-[25px] md:text-[36px] text-[#1C2041]">
                                        {item.additionalText}
                                    </span>
                                )}
                                <span className="ml-1 text-[#194BED] text-fluid-h2 md:text-[39px] font-bold">
                                    +
                                </span>
                            </div>

                            {/* name — responsive font size */}
                            <p className="text-[#5A6183] text-[13px] md:text-[16px] md:mt-2 h-[40px] lg:text-nowrap leading-tight">
                                <T>{item.name}</T>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CounterFacts
