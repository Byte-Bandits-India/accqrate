"use client";

export default function Section5() {
    const topLeftItems = [
        {
            title: "Effortless Invoice Generation",
            desc: "Create fully compliant structured UBL e-invoices, including credit notes, debit notes, and corrected invoices ready for Peppol exchange."
        },
        {
            title: "Secure Storage",
            desc: "Store all your EN 16931 invoices safely within our high-availability archiving environment, aligned with Belgian retention rules."
        },
        {
            title: "Compliant Templates",
            desc: "Access standardized, EN 16931-aligned invoice templates while maintaining your brand identity."
        },
        {
            title: "Peppol Connectivity",
            desc: "Exchange invoices securely through Peppol for guaranteed interoperability and regulatory compliance."
        },
        {
            title: "Validation & Error Handling",
            desc: "Automated validations ensure your structured invoices pass all schema and mandate checks before transmission."
        }
    ];

    const bottomRightItems = [
        "Peppol-ready onboarding",
        "Generate EN 16931-compliant UBL invoices",
        "PDF/A-3 with embedded XML",
        "Optional digital signature",
        "Track submissions, acceptance & rejections",
        "Simple corrective actions",
        "Send invoices via Email, Peppol, or WhatsApp"
    ];

    return (
        <section className="py-16 md:py-20 px-6 md:px-8 lg:px-0 bg-[#F7F9FF]">
            <div className="max-w-[1200px] mx-auto">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1C2041]">
                        Why Choose <span className="text-[#62B34F]">Accqrate?</span>
                    </h2>
                    <p className="text-[#5A6183] text-[16px] md:text-[18px] max-w-[720px] mx-auto mt-4 leading-relaxed">
                        Seamlessly integrate your existing ERP/POS with Peppol and achieve full EN 16931 compliance for Belgium’s 2026 e-invoicing mandate.
                    </p>
                </div>

                {/* TOP GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

                    {/* LEFT LIST */}
                    <div className="space-y-10">
                        {topLeftItems.map((item, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <img
                                    src="/images/icons/check-green.svg"
                                    className="w-6 h-6 mt-1"
                                    alt="check"
                                />
                                <div>
                                    <h3 className="text-[#1C2041] font-semibold text-[18px] mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5A6183] text-[15px] leading-relaxed max-w-[450px]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src="/images/belgium/dashboard.png"
                            alt="ERP Dashboard"
                            className="w-full max-w-[520px] rounded-xl shadow-lg"
                        />
                    </div>

                </div>

                {/* BOTTOM GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

                    {/* LEFT INVOICE IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src="/images/belgium/invoice.png"
                            alt="Invoice Example"
                            className="w-full max-w-[520px] rounded-xl shadow-md"
                        />
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-6 mt-4">
                        {bottomRightItems.map((item, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <img
                                    src="/images/icons/check-green.svg"
                                    alt="check"
                                    className="w-6 h-6 mt-1"
                                />
                                <p className="text-[#1C2041] text-[16px] md:text-[17px] leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
