"use client";

export default function Section3() {
  return (
    <section className="overflow-x-hidden w-full bg-white py-24 px-6">
      <div className="max-w-[1177px] mx-auto">

        {/* Header */}
        <h2 className="text-center text-4xl md:text-[54px] font-medium mb-6">
          Our Journey
        </h2>

        <p className="text-center text-sm md:text-[18px] text-gray-600 max-w-3xl mx-auto leading-normal">
          Accqrate’s evolution is defined by a relentless focus on compliance excellence,
          deep integration capabilities, and forward-looking technology leadership.
        </p>

        {/* TIMELINE */}
        <div className="relative mt-16 md:mt-20">

          {/* Vertical Line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1 bottom-0 w-[3px] bg-black -translate-x-1/2"
          />

          <div className="flex flex-col space-y-24 md:space-y-32 mt-8">

            {/* ----------------- 2016 (CONTENT LEFT — YEAR RIGHT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* CONTENT LEFT */}
              <div className="max-w-[400px] pr-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  Iteron AG: High-End Technology Consultancy
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Iteron AG begins operations in Switzerland, delivering advanced technology
                  consulting across Europe. From enterprise SaaS to blockchain-based solutions,
                  the company lays the groundwork for the modern digital compliance and
                  e-invoicing platforms that would follow.
                </p>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* YEAR RIGHT */}
              <div className="flex justify-start pl-6">
                <span className="text-[32px] md:text-[54px] font-bold">2016</span>
              </div>
            </div>

            {/* ----------------- 2020 (CONTENT RIGHT — YEAR LEFT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* YEAR LEFT */}
              <div className="flex justify-end pr-6">
                <span className="text-[32px] md:text-[54px] font-bold">2020</span>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* CONTENT RIGHT */}
              <div className="max-w-[400px] pl-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  Accqrate Global Platform Initiated
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate emerges as a unified ERP and E-Invoicing platform engineered for
                  high-compliance jurisdictions, multi-country operations, and enterprise-level
                  digital transformation.
                </p>
              </div>

            </div>

            {/* ----------------- 2021 (CONTENT LEFT — YEAR RIGHT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* CONTENT LEFT */}
              <div className="max-w-[400px] pr-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  E-Invoicing Launch Across Regulated Markets
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate’s engine is launched in the Kingdom of Saudi Arabia, establishing
                  direct integration with ZATCA and marking the platform’s entry into regulated
                  tax ecosystems.
                </p>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* YEAR RIGHT */}
              <div className="flex justify-start pl-6">
                <span className="text-[32px] md:text-[54px] font-bold">2021</span>
              </div>

            </div>

            {/* ----------------- 2022 (CONTENT RIGHT — YEAR LEFT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* YEAR LEFT */}
              <div className="flex justify-end pr-6">
                <span className="text-[32px] md:text-[54px] font-bold">2022</span>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* CONTENT RIGHT */}
              <div className="max-w-[400px] pl-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  Expansion of API-First Integrations
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate strengthens its integration layer with certified connectors and
                  toolkits for SAP, Oracle, Microsoft Dynamics and major ERP/POS platforms.
                </p>
              </div>

            </div>

            {/* ----------------- 2023 (CONTENT LEFT — YEAR RIGHT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* CONTENT LEFT */}
              <div className="max-w-[400px] pr-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  MNC Deployments Across MENA, ASEAN & EU
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate supports multi-entity deployments, processing millions of monthly
                  transactions across global enterprises with assured compliance.
                </p>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* YEAR RIGHT */}
              <div className="flex justify-start pl-6">
                <span className="text-[32px] md:text-[54px] font-bold">2023</span>
              </div>

            </div>

            {/* ----------------- 2024 (CONTENT RIGHT — YEAR LEFT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* YEAR LEFT */}
              <div className="flex justify-end pr-6">
                <span className="text-[32px] md:text-[54px] font-bold">2024</span>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* CONTENT RIGHT */}
              <div className="max-w-[400px] pl-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  Belgium & EU Compliance Acceleration
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate launches its Belgium PEPPOL engine with Mercurius interoperability
                  and achieves full readiness for ViDA-aligned digital reporting.
                </p>
              </div>

            </div>

            {/* ----------------- 2025 (CONTENT LEFT — YEAR RIGHT) ----------------- */}
            <div className="grid grid-cols-3 gap-4 items-start">

              {/* CONTENT LEFT */}
              <div className="max-w-[400px] pr-6">
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  Enterprise-Grade Automation & AI Validation Engine
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate introduces AccelerAI, a sophisticated automation layer for real-time
                  compliance checks, anomaly detection, VAT reconciliation, and cross-border reporting.
                </p>
              </div>

              {/* DOT */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-black rounded-full mt-1" />
              </div>

              {/* YEAR RIGHT */}
              <div className="flex justify-start pl-6">
                <span className="text-[32px] md:text-[54px] font-bold">2025</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
