import React from 'react'
import AssetPath from "@/AssetPath/AssetPath";
import T from '@/Components/T';
import { useParams } from "next/navigation";

interface Section {
    img: string;
    title: string;
    desc: string;
}

const Section3 = () => {
    const params = useParams();
    const countryCode = (params?.countryCode as string || "sa").toLowerCase();

    // Default sections
    const defaultSections: Section[] = [
        {
            img: AssetPath.invoicing.taxReceipt.src,
            title: "VAT Return",
            desc: "No need for an accountant – let Accqrate automatically generate your VAT return for you",
        },
        {
            img: AssetPath.invoicing.profile2user.src,
            title: "Customers & Suppliers",
            desc: "Always know who you owe money to and who owes you money",
        },
        {
            img: AssetPath.invoicing.chart2.src,
            title: "Reports & Insights",
            desc: "Generate single or consolidated reports for a holistic view of your finances.",
        },
        {
            img: AssetPath.invoicing.bagCheck.src,
            title: "Purchases & Claims",
            desc: "Manage bills, purchase orders and expenses from one place",
        },
        {
            img: AssetPath.invoicing.moneyStack.src,
            title: "Payroll & Employees",
            desc: "Run payroll and invite employees to submit their expense claims.",
        },
        {
            img: AssetPath.invoicing.box.src,
            title: "Inventory tracking",
            desc: "Easily keep track of stock levels and let Accqrate automatically book your Cost of Goods",
        },
    ];

    // Country-specific sections overrides
    const sectionOverrides: Record<string, Section[]> = {
        be: [
            {
                img: AssetPath.invoicing.taxReceipt.src,
                title: "VAT Return",
                desc: "No need for an accountant – let Accqrate automatically generate your VAT return for you",
            },
            {
                img: AssetPath.invoicing.profile2user.src,
                title: "Customers & Suppliers",
                desc: "Always know who you owe money to and who owes you money",
            },
            {
                img: AssetPath.invoicing.chart2.src,
                title: "Reports & Insights",
                desc: "Generate single or consolidated reports for a holistic view of your finances.",
            },
        ],
        pl: [
            {
                img: AssetPath.invoicing.taxReceipt.src,
                title: "VAT Return",
                desc: "No need for an accountant – let Accqrate automatically generate your VAT return for you",
            },
            {
                img: AssetPath.invoicing.profile2user.src,
                title: "Customers & Suppliers",
                desc: "Always know who you owe money to and who owes you money",
            },
            {
                img: AssetPath.invoicing.chart2.src,
                title: "Reports & Insights",
                desc: "Generate single or consolidated reports for a holistic view of your finances.",
            },
        ],
        ae: [
            {
                img: AssetPath.invoicing.taxReceipt.src,
                title: "VAT Return",
                desc: "No need for an accountant – let Accqrate automatically generate your VAT return for you",
            },
            {
                img: AssetPath.invoicing.profile2user.src,
                title: "Customers & Suppliers",
                desc: "Always know who you owe money to and who owes you money",
            },
            {
                img: AssetPath.invoicing.chart2.src,
                title: "Reports & Insights",
                desc: "Generate single or consolidated reports for a holistic view of your finances.",
            },
            {
                img: AssetPath.invoicing.bagCheck.src,
                title: "Purchases & Claims",
                desc: "Manage bills, purchase orders and expenses from one place",
            },
            {
                img: AssetPath.invoicing.moneyStack.src,
                title: "Payroll & Employees",
                desc: "Run payroll and invite employees to submit their expense claims.",
            },
            {
                img: AssetPath.invoicing.box.src,
                title: "Inventory tracking",
                desc: "Easily keep track of stock levels and let Accqrate automatically book your Cost of Goods",
            },
        ],
    };

    const sections = sectionOverrides[countryCode] || defaultSections;
    return (
        <>
            <section className="py-8 md:py-10 lg:py-[80px] max-w-[1280px] mx-auto relative">
                <div className="px-6 md:px-8 xl:px-0 text-center relative">
                    <h1 className="text-[24px] font-medium text-[#000000] leading-tight">
                        <T>A</T>{" "}
                        <span className="text-[#194BED]">
                            <T>complete software</T>
                        </span>{" "}
                        <T>to run your business better</T>
                    </h1>

                    <div className="relative mt-6 inline-block">
                        <h3 className="text-[16px] text-[#5A6183] mx-auto max-w-[850px]">
                            <T>Whether you've just started or are already established, you'll find all the features you need at each stage of your business.</T>
                        </h3>

                        {/* Decorative SVG aligned right to the h3 */}
                        <img
                            src={AssetPath.invoicing.green.src}
                            alt="decoration"
                            className="absolute -right-[10px] lg:-right-[80px] -top-[40px] lg:-top-[30px] -translate-y-1/2 w-[40px]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[60px] justify-items-center mt-8 md:mt-10 lg:mt-12">
                        {sections.map((item, i) => (
                            <div
                                key={i}
                                className="
        flex flex-col items-center justify-center text-center
        bg-white rounded-[20px]
        transition-all duration-300
        w-full max-w-[380px]
        p-5 sm:p-6 md:p-8
        h-auto min-h-[200px]
      "
                            >
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-[60px] sm:w-[70px] h-auto mb-4 sm:mb-5"
                                />

                                {/* Title */}
                                <h3 className="text-[18px] text-[#1C2041] font-semibold mb-2 leading-tight">
                                    <T>{item.title}</T>
                                </h3>

                                {/* Description */}
                                <p className="text-[16px] text-[#5A6183] leading-[24px] sm:leading-[28px]">
                                    <T>{item.desc}</T>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}

export default Section3
