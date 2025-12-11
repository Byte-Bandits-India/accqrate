'use client';

import CounterFacts from '@/Components/CounterFacts'
import AssetPath from "@/AssetPath/AssetPath"
import Image from "next/image"
import T from '@/Components/T';
interface IntegrationItem {
    src: string
    alt: string
}

interface IntegratorProps {
    className?: string
    title?: boolean
}

export default function Integrator({ className, title }: IntegratorProps) {
    const integration = [
        {
            src: AssetPath.invoicing.integrators.infor.src,
            alt: 'infor'
        },
        {
            src: AssetPath.invoicing.integrators.msDynamics.src,
            alt: 'MSDynamics'
        },
        {
            src: AssetPath.invoicing.integrators.anyErp.src,
            alt: 'Any ERP'
        },
        {
            src: AssetPath.invoicing.integrators.oracle.src,
            alt: 'Oracle'
        },
        {
            src: AssetPath.invoicing.integrators.sage.src,
            alt: 'sage'
        },
        {
            src: AssetPath.invoicing.integrators.sap.src,
            alt: 'SAP'
        },
        {
            src: AssetPath.invoicing.integrators.baan.src,
            alt: 'Baan'
        }
    ]

    return (
        <section className={className}>
            <div className="overflow-x-hidden my-8 md:my-10 lg:my-12">
                <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 relative">
                    {/* Decorative Pattern - Left */}
                    <div className="absolute left-32 xl:left-0 top-20 -translate-y-1/2 -translate-x-full">
                        <Image src={AssetPath.invoicing.integrators.vector7.src} alt="Vector7" width={400} height={200} />
                    </div>

                    {/* Decorative Pattern - Right */}
                    <div className="absolute right-0 top-20 -translate-y-1/2 translate-x-full hidden xl:block">
                        <Image src={AssetPath.invoicing.integrators.vector7.src} alt="Vector7" width={100} height={200}  className="w-full h-aut0 rotate-180 object-cover" />
                    </div>

                    <h3
                        className="text-fluid-h2 lg:text-[38px] max-w-[871px] mx-auto text-center font-medium text-[#000000] leading-tight relative"
                        data-aos="fade-up"
                    >
                        <T>Our solutions seamlessly integrate with any <span className='text-[#508847]'><T>ERP/POS system</T></span>  you use.</T>
                    </h3>

                    {/* MARQUEE WRAPPER */}
                    <div className="relative overflow-hidden py-4 my-6 md:my-8 lg:my-10">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {integration.concat(integration).map((data, i) => (
                                <div
                                    key={i}
                                    className="inline-flex items-center justify-center mx-6 md:mx-8 lg:mx-10"
                                >
                                    <Image
                                        src={data.src}
                                        alt={data.alt}
                                        width={250}
                                        height={60}
                                        className="h-[40px] md:h-[50px] lg:h-[70px] w-auto object-contain filter grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-[#000000] text-fluid-small md:text-[18px] font-normal max-w-[1100px] mx-auto "><T>Our integrators are equipped to collaborate with a wide range of solutions, including Global ERP systems, Local and Custom ERP, In-House ERP, both Online and Offline POS systems, Custom Applications, Accounting Software, and even Excel & SQL-Based Solutions, ensuring versatile and comprehensive compatibility</T></p>
                    </div>

                    <CounterFacts />

                    {/* CSS ANIMATION */}
                    <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 12s linear infinite;
          }
        `}</style>
                </div>
            </div>
        </section>
    )
}