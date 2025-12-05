"use client";

import { useParams } from "next/navigation";
import { Col, Row } from "antd";
import { integrationFlowData } from "../data/IntegrationFlow";

export default function IntegrationFlow() {
    const params = useParams();
    const countryCode = (params?.countryCode as string) || "sa";
    const data = integrationFlowData[countryCode] || integrationFlowData["sa"];

    // --------------------------------------------------------------------
    // BELGIUM LAYOUT — EXACTLY LIKE THE IMAGE YOU SENT
    // --------------------------------------------------------------------
    if (countryCode === "belgium") {
        return (
            <section className="py-12">
                <div className="max-w-[1100px] mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-[32px] font-semibold mb-3">
                        {data.title}
                    </h2>

                    <p className="text-[#5A6183] max-w-[850px] mx-auto mb-10 leading-relaxed">
                        {data.subtitle}
                    </p>

                    {/* Diagram Image */}
                    <img
                        src={data.heroImage}
                        alt="Belgium e-Invoicing Diagram"
                        className="mx-auto mb-14 w-full max-w-[850px]"
                    />

                    {/* Subtitle under image */}
                    <p className="text-[#5A6183] text-sm mb-10">
                        For B2B transactions, the process is straightforward:
                    </p>

                    {/* Four Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {data.steps.map((step: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white shadow rounded-xl p-6 border"
                            >
                                <div className="text-[#62B34F] text-[28px] font-bold mb-3">
                                    {step.number}
                                </div>

                                <h3 className="font-semibold text-[#1C2041] text-[18px] mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-[#5A6183] text-[14px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // --------------------------------------------------------------------
    // OTHER COUNTRIES → USE YOUR ORIGINAL SA LAYOUT
    // --------------------------------------------------------------------
    return (
        <section className="my-8 md:my-10 lg:my-12">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] mb-4">
                        {data.title}
                    </h3>

                    <p className="text-[#5A6183] text-fluid-body">
                        {data.subtitle}
                    </p>
                </div>

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
                                <img
                                    src={step.image}
                                    alt=""
                                    className="w-full max-w-[400px] mx-auto"
                                />
                            </Col>

                            <Col
                                xs={0}
                                md={2}
                                className="flex justify-center relative z-10"
                            >
                                <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
                                    <img
                                        src={step.icon}
                                        className="w-10 h-10"
                                        alt=""
                                    />
                                </div>
                            </Col>

                            <Col
                                xs={24}
                                md={11}
                                className={
                                    index % 2 === 0
                                        ? "pl-8 text-left"
                                        : "pr-8 text-right"
                                }
                            >
                                <div className="text-[#FF8D67] text-[40px] font-medium mb-2">
                                    {step.number}
                                </div>

                                <h3 className="text-[20px] font-medium text-[#1C2041] mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-[#5A6183] leading-relaxed">
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
                                    <img src={step.icon} className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="text-[#FF8D67] text-[28px] font-medium mb-1">
                                    {step.number}
                                </div>

                                <img
                                    src={step.image}
                                    className="w-full mb-4 rounded-lg"
                                    alt=""
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
            </div>
        </section>
    );
}
