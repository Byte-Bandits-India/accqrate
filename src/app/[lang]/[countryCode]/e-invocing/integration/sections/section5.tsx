'use client'

export default function BelgiumProofSection() {
    const leftItems = [
        {
            title: "Zero–Risk Trial",
            desc: "Experience seamless integration between your ERP/POS and the Belgian Peppol test environment with no commitment. Validate results before you decide."
        },
        {
            title: "Ease of Integration",
            desc: "Experience seamless integration between your ERP/POS and the Belgian Peppol test environment with no commitment. Validate results before you decide."
        },
        {
            title: "Expert Guidance & Training",
            desc: "Experience seamless integration between your ERP/POS and the Belgian Peppol test environment with no commitment. Validate results before you decide."
        },
        {
            title: "Onboarding Assistance",
            desc: "Experience seamless integration between your ERP/POS and the Belgian Peppol test environment with no commitment. Validate results before you decide."
        },
        {
            title: "Full Ownership & Responsibility",
            desc: "Accqrate takes end-to-end responsibility for compliance, validation, audit readiness, and technical accuracy."
        }
    ];

    const rightItems = [
        {
            title: "No Upfront Contracts",
            desc: "Start with trust, no contracts, no advance payments. NDA included for full confidentiality."
        },
        {
            title: "ERP Expertise",
            desc: "Start with trust, no contracts, no advance payments. NDA included for full confidentiality."
        },
        {
            title: "Compliance Assurance",
            desc: "Start with trust, no contracts, no advance payments. NDA included for full confidentiality."
        },
        {
            title: "Fast Integration",
            desc: "Start with trust, no contracts, no advance payments. NDA included for full confidentiality."
        }
    ];

    return (
        <section className="px-6 md:px-8 lg:px-0 py-12">
            <div className="max-w-[1100px] mx-auto text-center mb-12">
                <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1C2041] mb-3">
                    Free Proof of Concept for <span className="text-[#448E32]">Peppol / EN 16931 Integration</span>
                </h2>

                <p className="text-[#5A6183] text-[16px] md:text-[18px]">
                    Explore Accqrate's Belgium E-Invoicing Integration with a Free Proof of Concept
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-10 max-w-[1150px] mx-auto">

                {/* LEFT COLUMN */}
                <div className="space-y-10">
                    {leftItems.map((item, i) => (
                        <div key={i}>
                            <h3 className="text-[#1C2041] font-semibold text-[18px] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-[#5A6183] leading-relaxed max-w-[430px] text-[15px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-10">
                    {rightItems.map((item, i) => (
                        <div key={i}>
                            <h3 className="text-[#1C2041] font-semibold text-[18px] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-[#5A6183] leading-relaxed max-w-[430px] text-[15px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
