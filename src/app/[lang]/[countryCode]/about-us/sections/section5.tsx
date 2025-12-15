"use client";

import Image from "next/image";
import T from "@/Components/T";
import AssetPath from "@/AssetPath/AssetPath";
import { useParams } from "next/navigation";
import { section5Content } from "../data/section5Content";

const Section5 = () => {
    const params = useParams();
    const countryCode = (params?.countryCode as string)?.toLowerCase() || 'be';
    const lang = (params?.lang as string) || "en";
    const content = section5Content[countryCode as keyof typeof section5Content] || section5Content.default;
    return (
        <section className="overflow-x-hidden w-full px-6 md:px-8 xl:px-0 py-20">
            <div className="max-w-[1177px] mx-auto">

                {/* ---------------------- ROW 1: Heading Alone ---------------------- */}
                <div className="mb-10">
                    <h2 className="text-[28px] md:text-[32px] lg:text-[38px] font-semibold tracking-tight">
                        <T lang={lang} countryCode={countryCode?.toUpperCase()}>{content.header}</T>
                    </h2>
                </div>

                {/* ---------------------- ROW 2: Image + Description ---------------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">

                    {/* Left: Illustration */}
                    <div className="flex justify-center ">
                        <Image
                            src={AssetPath.aboutus.ourteam}
                            alt="team"
                            width={400}
                            height={400}
                            className="w-[260px] md:w-[320px] lg:w-[360px] h-auto object-contain"
                        />
                    </div>

                    {/* Right: Description */}
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-fluid-small  leading-relaxed max-w-[750px]">
                            <T lang={lang} countryCode={countryCode?.toUpperCase()}>
                                {content.description}
                            </T>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Section5;