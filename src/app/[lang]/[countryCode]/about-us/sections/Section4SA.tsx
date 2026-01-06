"use client";

import Image, { StaticImageData } from "next/image";
import T from "@/Components/T";
import FadeUp from "@/Components/ui/FadeUp";
import { section4Content } from "../data/section4SAContent";

interface FeatureItem {
    title: string;
    description: string;
    image: string | StaticImageData;
}

const Section4SA: React.FC = () => {
    return (
        <section className="bg-[#f0f4ff] w-full mt-[80px] px-6 md:px-8 xl:px-0 py-20">
            {/* HEADER */}
            <div className="max-w-[1100px] mx-auto mb-20">
                <FadeUp>
                    <h2 className="text-[18px] md:text-[24px] text-center font-bold text-[#1c2041]">
                        <T>Expansion and Growth in Saudi Arabia</T>
                    </h2>

                    <p className="text-[14px] md:text-[16px] text-gray-600 text-center mt-3 leading-[30px] max-w-[800px] mx-auto">
                        <T>
                            Accqrate has experienced remarkable growth and innovation, marked
                            by significant achievements:
                        </T>
                    </p>
                </FadeUp>
            </div>

            {/* CONTENT */}
            <div className="max-w-[1000px] mx-auto space-y-24">
                {section4Content.map((item: FeatureItem, index: number) => {
                    const reverse = index % 2 !== 0;

                    return (
                        <FadeUp key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                {/* TEXT */}
                                <div
                                    className={`${reverse ? "md:order-1" : "md:order-2"
                                        }`}
                                >
                                    <h3 className="text-[18px] leading-[28px] font-bold text-[#1c2041] mb-4">
                                        <T>{item.title}</T>
                                    </h3>

                                    <p className="text-[#5a5f7d] text-[16px] leading-[28px] max-w-[520px]">
                                        <T>{item.description}</T>
                                    </p>
                                </div>

                                {/* IMAGE */}
                                <div
                                    className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"
                                        }`}
                                >
                                    <div className="relative w-full max-w-[520px]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={520}
                                            height={360}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    );
                })}
            </div>
        </section>
    );
};

export default Section4SA;
