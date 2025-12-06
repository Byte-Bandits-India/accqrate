"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Row, Col } from "antd";
import { integrationFlowData } from "../data/IntegrationFlow";

export default function IntegrationFlow() {
    const params = useParams();
    const countryCode = (params?.countryCode as string) || "sa";
    const data = integrationFlowData[countryCode] || integrationFlowData["sa"];

    const isEUFlow = countryCode === "be" || countryCode === "pl"; 

    return (
        <section className="my-8 md:my-10 lg:my-12">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">

                {/* ------- HEADING ------- */}
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] mb-4">
                        {data.title.split("E-invoicing")[0]}
                        <span className="text-[#448E32]">E-invoicing</span> Process
                        {data.title.split("E-invoicing")[1]}
                    </h3>

                    <p className="text-[#5A6183] text-fluid-body lg:text-[20px]">{data.subtitle}</p>
                </div>

                {/* ========================================================= */}
                {/*   UI 1 — EUROPEAN FLOW (BELGIUM + POLAND)                 */}
                {/* ========================================================= */}

                {isEUFlow && (
                    <div>
                        {/* EU Top Image */}
                        {data.heroImage && (
                            <div className="flex justify-center mb-12">
                                <Image
                                    src={data.heroImage}
                                    width={600}
                                    height={400}
                                    alt="Flow"
                                    className="rounded-md"
                                />
                            </div>
                        )}

                        {/* EU Steps (1 row = 4 cards) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {data.steps.map((step: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow border border-gray-100"
                                >
                                    <div className="text-[#448E32] text-[28px] font-semibold mb-2">
                                        {step.number}
                                    </div>

                                    <h4 className="font-medium md:text-[20px] text-[#1C2041] mb-2">
                                        {step.title}
                                    </h4>

                                    <p className="text-[#5A6183] md:text-[16px] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ========================================================= */}
                {/*   UI 2 — DEFAULT FLOW (ALL OTHER COUNTRIES)               */}
                {/* ========================================================= */}

                {!isEUFlow && (
                    <>
                        {/* Desktop Layout */}
                        <div className="hidden lg:block relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent -translate-x-1/2"></div>

                            {data.steps.map((step: any, index: number) => (
                                <Row
                                    key={index}
                                    className={`items-center mb-16 ${
                                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                                >
                                    <Col
                                        xs={24}
                                        md={11}
                                        className={index % 2 === 0 ? "pr-8" : "pl-8"}
                                    >
                                        <Image
                                            src={step.image}
                                            alt=""
                                            width={400}
                                            height={300}
                                            className="w-full mx-auto"
                                        />
                                    </Col>

                                    <Col xs={0} md={2} className="flex justify-center relative z-10">
                                        <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
                                            <Image
                                                src={step.icon}
                                                width={60}
                                                height={50}
                                                alt=""
                                            />
                                        </div>
                                    </Col>

                                    <Col
                                        xs={24}
                                        md={11}
                                        className={index % 2 === 0 ? "pl-8" : "pr-8 text-right"}
                                    >
                                        <div className="text-[#FF8D67] text-[40px] font-medium mb-2">
                                            {step.number}
                                        </div>

                                        <h3 className="text-[20px] font-medium text-[#1C2041] mb-4">
                                            {step.title}
                                        </h3>

                                        <p className="text-[#5A6183] md:text-[16px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>

                        {/* Mobile Layout */}
                        <div className="block lg:hidden relative">
                            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent"></div>

                            {data.steps.map((step: any, index: number) => (
                                <div key={index} className="flex mb-12 relative">
                                    <div className="flex-shrink-0 w-12 mr-4 relative z-10">
                                        <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center">
                                            <Image src={step.icon} width={24} height={24} alt="" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-[#FF8D67] text-[28px] font-medium mb-1">
                                            {step.number}
                                        </div>

                                        <Image
                                            src={step.image}
                                            width={500}
                                            height={300}
                                            alt=""
                                            className="w-full mb-4 rounded-lg"
                                        />

                                        <h4 className="text-[18px] font-medium text-[#1C2041] mb-3">
                                            {step.title}
                                        </h4>

                                        <p className="text-[#5A6183] text-[14px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
