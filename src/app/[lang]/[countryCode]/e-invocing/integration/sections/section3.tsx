"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Row, Col } from "antd";
import { integrationFlowData } from "../data/IntegrationFlow";
import T from "@/Components/T";
import FadeUp from '@/Components/ui/FadeUp'
import AssetPath from "@/AssetPath/AssetPath";

export default function IntegrationFlow() {
  const params = useParams();
  const countryCode = (params?.countryCode as string) || "sa";
  const lang = (params?.lang as string) || "en";
  const data = integrationFlowData[countryCode] || integrationFlowData["sa"];

  const isEUFlow = countryCode === "be" || countryCode === "pl" || countryCode === "ae";

  return (
    <section className="my-8 md:my-10 lg:my-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeUp>

        {/* ------- HEADING ------- */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-fluid-body lg:text-[24px] font-bold text-[#1C2041] mb-4">
            <T lang={lang} countryCode={countryCode}>
              {data.title.split("E-invoicing")[0]}
            </T>
            <span className="text-[#1a4ced]">
              <T lang={lang} countryCode={countryCode}>E-invoicing</T>
            </span>{" "}
            <T lang={lang} countryCode={countryCode}>Process</T>
            <T lang={lang} countryCode={countryCode}>
              {data.title.split("E-invoicing")[1]}
            </T>
            {countryCode === "ae" && <span> (DCTCE Model)</span>}
          </h3>

          <p className="text-[#5A6183] text-fluid-small lg:text-[16px]">
            <T lang={lang} countryCode={countryCode}>{data.subtitle}</T>
          </p>
        </div>

        {/* ================= EU / AE FLOW ================= */}
        {isEUFlow && (
          <>
            {/* TOP IMAGE */}
            {countryCode === "ae" ? (
              <div className="w-full mb-12">
                <Image
                  src={AssetPath.home.dctce}
                  alt="UAE E-invoicing Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            ) : (
              data.heroImage && (
                <div className="flex flex-col items-center justify-center mb-12">
                  <Image
                    src={data.heroImage}
                    width={600}
                    height={400}
                    alt="Flow"
                    className="rounded-md"
                  />
                  <p className="md:text-[16px] text-[#5A6183] mt-10">
                    <T lang={lang} countryCode={countryCode}>
                      For B2B transactions, the process is straightforward:
                    </T>
                  </p>
                </div>
              )
            )}

         {/* ================= EU STATIC STEP BOXES (EXACT IMAGE MATCH) ================= */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  {data.steps.map((step: any, index: number) => {
    const isBlue = index % 2 === 1;

    return (
      <div
        key={index}
        className="rounded-xl overflow-hidden min-h-[300px] flex flex-col"
      >
        {/* ---------- TOP AREA ---------- */}
        <div
          className={`flex-1 px-6 pt-6 pb-4 ${
            isBlue ? "bg-[#e8eeff]" : "bg-[#f7f7f7]"
          }`}
        >
          {/* ICON (CENTERED) */}
          <div className="min-h-[40px] flex justify-center mb-5">
            <Image
              src={step.icon}
              alt="icon"
              width={42}
              height={40}
              unoptimized
            />
          </div>

          {/* TEXT (LEFT ALIGNED) */}
          <h4 className="font-medium text-[18px] text-[#1C2041] mb-2">
            <T lang={lang} countryCode={countryCode}>
              {step.title}
            </T>
          </h4>

          <p className="text-[#5A6183] text-[16px] leading-relaxed">
            <T lang={lang} countryCode={countryCode}>
              {step.description}
            </T>
          </p>
        </div>

        {/* ---------- BOTTOM STEP BAR ---------- */}
        <div
          className={`px-6 py-3 text-[14px] font-medium text-[#FF6B3D] ${
            isBlue ? "bg-[#f0f3fb]" : "bg-[#efefef]"
          }`}
        >
          <T lang={lang} countryCode={countryCode}>
            {step.number}
          </T>{"  "}
          <span className="ml-2 text-[20px]">→</span>
        </div>
      </div>
    );
  })}
</div>


          </>
        )}

        {/* ================= NON-EU FLOW (UNCHANGED) ================= */}
        {!isEUFlow && (
          <>
            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent -translate-x-1/2"></div>

              {data.steps.map((step: any, index: number) => (
                <Row
                  key={index}
                  className={`items-center mb-16 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <Col xs={24} md={11}>
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
                      <Image src={step.icon} width={60} height={50} alt="" />
                    </div>
                  </Col>

                  <Col xs={24} md={11}>
                    <div className="text-[#FF8D67] text-[24px] font-bold mb-2">
  <T>
    {step.number.toString().toLowerCase().includes("step")
      ? step.number
      : `Step ${parseInt(step.number, 10)}`}
  </T>
</div>

                    <h3 className="text-[18px] font-bold text-[#1C2041] mb-4">
                      <T>{step.title}</T>
                    </h3>
                    <p className="text-[#5A6183] md:text-[16px] leading-relaxed">
                      <T>{step.description}</T>
                    </p>
                  </Col>
                </Row>
              ))}
            </div>
          </>
        )}
        </FadeUp>
      </div>
    </section>
  );
}
