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
          Accqrate's evolution is defined by a relentless focus on compliance excellence,
          deep integration capabilities, and forward-looking technology leadership.
        </p>

        {/* TIMELINE */}
        <div className="relative mt-16 md:mt-20">

          {/* Vertical Line - Left on mobile, center on md+ */}
          <div
            aria-hidden="true"
            className="absolute left-2 md:left-1/2 top-1 bottom-0 w-[3px] bg-black md:-translate-x-1/2"
          />

          <div className="flex flex-col space-y-24 md:space-y-32 mt-8">

            {/* ----------------- 2016 (CONTENT LEFT — YEAR RIGHT) ----------------- */}
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* CONTENT LEFT - Right side on mobile, left on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pr-6 md:order-1">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2016</span>
                </div>
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

              {/* YEAR RIGHT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-start pl-6 md:order-3">
                <span className="text-[32px] md:text-[54px] font-bold">2016</span>
              </div>
            </div>

            {/* ----------------- 2020 (CONTENT RIGHT — YEAR LEFT) ----------------- */}
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* YEAR LEFT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-end pr-6 md:order-1">
                <span className="text-[32px] md:text-[54px] font-bold">2020</span>
              </div>

              {/* CONTENT RIGHT - Right side on mobile, right on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pl-6 md:order-3">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2020</span>
                </div>
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
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* CONTENT LEFT - Right side on mobile, left on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pr-6 md:order-1">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2021</span>
                </div>
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  E-Invoicing Launch Across Regulated Markets
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate's engine is launched in the Kingdom of Saudi Arabia, establishing
                  direct integration with ZATCA and marking the platform's entry into regulated
                  tax ecosystems.
                </p>
              </div>

              {/* YEAR RIGHT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-start pl-6 md:order-3">
                <span className="text-[32px] md:text-[54px] font-bold">2021</span>
              </div>

            </div>

            {/* ----------------- 2022 (CONTENT RIGHT — YEAR LEFT) ----------------- */}
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* YEAR LEFT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-end pr-6 md:order-1">
                <span className="text-[32px] md:text-[54px] font-bold">2022</span>
              </div>

              {/* CONTENT RIGHT - Right side on mobile, right on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pl-6 md:order-3">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2022</span>
                </div>
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
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* CONTENT LEFT - Right side on mobile, left on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pr-6 md:order-1">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2023</span>
                </div>
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  MNC Deployments Across MENA, ASEAN & EU
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate supports multi-entity deployments, processing millions of monthly
                  transactions across global enterprises with assured compliance.
                </p>
              </div>

              {/* YEAR RIGHT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-start pl-6 md:order-3">
                <span className="text-[32px] md:text-[54px] font-bold">2023</span>
              </div>

            </div>

            {/* ----------------- 2024 (CONTENT RIGHT — YEAR LEFT) ----------------- */}
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* YEAR LEFT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-end pr-6 md:order-1">
                <span className="text-[32px] md:text-[54px] font-bold">2024</span>
              </div>

              {/* CONTENT RIGHT - Right side on mobile, right on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pl-6 md:order-3">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2024</span>
                </div>
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
            <div className="flex md:grid md:grid-cols-3 gap-4 items-start pl-8 md:pl-0 relative">

              {/* DOT - Left on mobile, center on md+ */}
              <div className="absolute left-0.5 md:relative md:left-auto flex justify-center md:order-2">
                <div className="w-4 h-4 bg-black rounded-full mt-1 z-10" />
              </div>

              {/* CONTENT LEFT - Right side on mobile, left on md+ */}
              <div className="flex-1 ml-6 md:ml-0 md:max-w-[400px] md:pr-6 md:order-1">
                <div className="md:hidden mb-2">
                  <span className="text-[32px] font-bold">2025</span>
                </div>
                <h3 className="font-semibold text-[14px] md:text-[18px]">
                  Enterprise-Grade Automation & AI Validation Engine
                </h3>
                <p className="text-gray-700 text-[12px] md:text-[16px] mt-2 leading-relaxed">
                  Accqrate introduces AccelerAI, a sophisticated automation layer for real-time
                  compliance checks, anomaly detection, VAT reconciliation, and cross-border reporting.
                </p>
              </div>

              {/* YEAR RIGHT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex justify-start pl-6 md:order-3">
                <span className="text-[32px] md:text-[54px] font-bold">2025</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
