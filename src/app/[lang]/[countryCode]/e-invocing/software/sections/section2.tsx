'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import AssetPath from "@/AssetPath/AssetPath";
import Solutions from './Solutions';
import CompleteSoftware from './CompleteSoftware';
import T from '@/Components/T';
import { Row, Col } from "antd";
import BelgiumT from "@/Components/T";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import blogPosts from '@/app/[lang]/[countryCode]/resources/blogs/data/blogspost'; // Make sure this path is correct

const Section2 = () => {
    const params = useParams()
    const countryCode = params?.countryCode as string
    const lang = params?.lang as string
    const router = useRouter()

    // State for random blogs
    const [randomBlogs, setRandomBlogs] = useState<
        { url: string; image: any; heading: string; value: string }[]
    >([])

    // Map image paths to AssetPath - same function from BlogLayout
    const getImageFromAssetPath = (img: string) => {
        if (!img || typeof img !== 'string') return AssetPath.blogs.accqrateAd;

        const filename = img.split('/').pop()?.replace(/\.(png|jpg|jpeg|webp|svg)$/i, '') || '';

        const imageMap: Record<string, any> = {
            'credit-notes': AssetPath.blogs.creditNotes,
            'debit-notes': AssetPath.blogs.debitNotes,
            'zatca-einvocing-phase2': AssetPath.blogs.zatcaEinvoicingPhase2,
            'zatcaintegration-with-oracle': AssetPath.blogs.zatcaIntegrationOracle,
            'zatcaintegration-with-microsoft365': AssetPath.blogs.zatcaIntegrationMicrosoft,
            'zatca-prepayment': AssetPath.blogs.zatcaPrepayment,
            'sap-e-invocing-integration-with-zatca': AssetPath.blogs.sapIntegration,
            'the-complete-guide-to-e-invoicing-in-bahrain': AssetPath.blogs.bahrainEInvoicing,
            'einvoicing-in-the-sultanate-of-oman': AssetPath.blogs.einvoicingOman,
            'streamlining-business-transactions': AssetPath.blogs.streamliningBusiness,
            'goods-receipts-accounting': AssetPath.blogs.goodsReceipts,
            'adapting-business-processes-for-ZATCA': AssetPath.blogs.adaptingBusinessZATCA,
            'attainin-ZATCA-e-Invoicing-compliance-in-saudi-arabia': AssetPath.blogs.attaininZATCA,
            'key-steps-to-choose-right-zatca-approved-e-invoicing-software': AssetPath.blogs.keyStepsInvoicing,
            'fines-and-financial-penalties-exemption-for-its-taxpayers': AssetPath.blogs.financialPenalties,
            'a-compliant-e-invoicing-fatoorah-software': AssetPath.blogs.compliantInvoicingSoftware,
            'riyadh-world-expo-2030-the-future-of-business-innovation': AssetPath.blogs.riyadhExpo,
            'zatca-fatoora-device-onboarding-requirements': AssetPath.blogs.zatcaFatooraDevice,
            'AutomotiveIndustry': AssetPath.blogs.automotiveIndustry,
            'SAPBlog': AssetPath.blogs.sapBlog,
            'msme': AssetPath.blogs.msme,
            'CreditNotes': AssetPath.blogs.creditNotesPng,
            'VatRegistration': AssetPath.blogs.vatRegistration,
            'IncomeTax': AssetPath.blogs.incomeTax,
            'TaxSystems': AssetPath.blogs.taxSystems,
            'CorporateTax': AssetPath.blogs.corporateTax,
            'VAT': AssetPath.blogs.vat,
            'Mercurius': AssetPath.blogs.mercurius,
            'FAQs': AssetPath.blogs.faqs,
            'TechnicalRules': AssetPath.blogs.technicalRules,
            'Mandate': AssetPath.blogs.mandate,
        };

        return imageMap[filename] || img;
    }

    // Country to blogCode mapping
    const countryConfig = [
        { code: "sa", blogCode: "KSA" },
        { code: "ae", blogCode: "AE" },
        { code: "bh", blogCode: "BH" },
        { code: "om", blogCode: "OM" },
        { code: "be", blogCode: "BE" },
        { code: "pl", blogCode: "PL" },
        { code: "mu", blogCode: "MU" },
        { code: "ma", blogCode: "MA" },
        { code: "jd", blogCode: "JD" },
    ]

    // Populate random blog posts from the same country only
    useEffect(() => {
        const cc = (countryCode || "be").toLowerCase();
        const current = countryConfig.find((c) => c.code === cc);
        const blogCode = current?.blogCode || "KSA";

        const mappedBlogs = blogPosts
            .filter((post) => {
                const countries = (post.country || "").split(",").map((c) => c.trim());
                return countries.includes(blogCode);
            })
            .map((post) => ({
                url: `/${lang}/${countryCode}/resources/blogs/${post.url}`,
                image: getImageFromAssetPath(post.image),
                heading: post.title,
                value: post.desc,
            }))

        const shuffled = [...mappedBlogs].sort(() => 0.5 - Math.random());
        setRandomBlogs(shuffled.slice(0, 4));
    }, [countryCode, lang])

    return (
        <section>
            <Solutions countryCode={countryCode} />

            <CompleteSoftware />

            {countryCode?.toUpperCase() === 'SA' && (
                <div className="bg-[#29266E] text-white text-center py-8 md:py-10 lg:py-[80px] px-6 md:px-8 xl:px-0">
                    <h3 className="text-[24px] font-normal leading-tight">
                        <T>Easy Onboarding Process</T>
                    </h3>
                    <p className="text-fluid-body mt-4 md:mt-6">
                        <T>Get Digital In Just 30 Minutes With Our Quick On Boarding Process</T>
                    </p>

                    <div className="mt-8 flex justify-center">
                        <img
                            src={AssetPath.invoicing.onboard.src}
                            alt="onboard"
                            className="h-full w-full max-w-[1260px] max-h-[491px]"
                        />
                    </div>

                    <p className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 text-[14px] md:text-fluid-body text-white md:text-center">
                        <span><T>No credit card needed</T></span>
                        <img
                            src={AssetPath.invoicing.starGold.src}
                            alt="separator"
                            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                        />
                        <span><T>Unlimited time on Free plan</T></span>
                        <img
                            src={AssetPath.invoicing.starGold.src}
                            alt="separator"
                            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                        />
                        <span><T>100% Money-Back Guarantee</T></span>
                        <img
                            src={AssetPath.invoicing.starGold.src}
                            alt="separator"
                            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                        />
                        <span><T>Unsubscribe Anytime</T></span>
                    </p>

                    <button
                        className="inline-flex text-[14px] md:text-[18px] items-center justify-center gap-2 bg-[#F05A28] mt-6 md:mt-8 lg:mt-10 text-[#FFFFFF] font-medium px-6 py-4 rounded-full"
                    >
                        <T>Book a Demo</T> <ArrowRight className="w-4 h-4 -rotate-45" />
                    </button>
                </div>
            )}

            {/* Accqrate Offerings */}
            <div className='bg-[#F1F2FF]'>
                <div className='max-w-[1280px] mx-auto py-8 md:py-10 lg:py-20'>
                    <div className='px-6 md:px-8 xl:px-0'>
                        <h3 className="text-[24px] font-normal text-[#000000] leading-tight">
                            <T>Flexible Deployment</T>
                        </h3>
                        <p className='text-[#333333] text-[16px] mt-4 '><T>Cloud (managed, subscription) or On‑Prem (full control over infra & data).</T></p>

                        <div className="py-6 md:py-8 lg:py-10">
                            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 md:gap-10 lg:gap-[60px] md:pl-10">
                                {/* Cloud Based Solutions */}
                                <div className="rounded-[27px] bg-white border max-w-[400px] w-full p-6 shadow-md md:px-10 space-y-4 flex flex-col">
                                    <img
                                        src={AssetPath.icons.cloud.src}
                                        alt="cloud"
                                        className="w-[40px] h-auto"
                                    />
                                    <h3 className="text-[18px] text-[#1C2041]">
                                        <T>Cloud Based Solutions</T>
                                    </h3>
                                    <p className="text-[16px] text-[#5A6183] leading-[30px] max-w-[350px]">
                                        <T>Subscribe, Use On-Demand: Fast, Secure, and Flexible Cloud Solutions</T>
                                    </p>

                                    <ul className="text-[#5A6183] text-[16px] leading-[32px] space-y-1 mt-2 list-none">
                                        {[
                                            "Subscribe and pay per use",
                                            "Onboarding in 5 min",
                                            "High Performance",
                                            "Encrypted and Secured",
                                            "Disaster recovery",
                                            "Download backup anytime",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-[10px] block w-[6px] h-[6px] rounded-full bg-[#91ABFF]" />
                                                <span className="flex-1"><T>{item}</T></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* On Premises Solutions */}
                                <div className="rounded-[27px] bg-white border max-w-[400px] w-full p-6 shadow-md md:px-10 space-y-4 flex flex-col">
                                    <img
                                        src={AssetPath.icons.onPremises.src}
                                        alt="server"
                                        className="w-[40px] h-auto"
                                    />
                                    <h3 className="text-[18px] text-[#1C2041]">
                                        <T>On Premises Solutions</T>
                                    </h3>
                                    <p className="text-[16px] text-[#5A6183] leading-[30px] max-w-[350px]">
                                        <T>Customized, Secure On-Premises Solutions with Quick Implementation Support</T>
                                    </p>

                                    <ul className="text-[#5A6183] text-[16px] leading-[32px] space-y-1 mt-2 list-none">
                                        {[
                                            "Customer infrastructure",
                                            "Get customized app",
                                            "High Performance",
                                            "4 hours of implementation",
                                            "Secured and high performance",
                                            "End to end support",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-[10px] block w-[6px] h-[6px] rounded-full bg-[#91ABFF]" />
                                                <span className="flex-1"><T>{item}</T></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Recent Blogs */}
            <section className="bg-[#eff3ff] py-10">
                <div className="container mx-auto px-4 max-w-[1250px]">
                    <h3 className="text-[24px] text-[#1c2041] font-semibold text-center">
                        <BelgiumT><span className='text-[#194BED]'>E-invoicing</span> Insights</BelgiumT>
                    </h3>
                    <p className='mb-6 md:mb-10 mt-2 text-center text-[#5A6183]'>
                        <T>In-depth analysis of electronic invoicing trends, benefits, and adoption.</T>
                    </p>
                    <Row
                        justify="center"
                        gutter={[
                            { xs: 0, sm: 15, md: 20, lg: 20 },
                            { xs: 10, sm: 15, md: 20, lg: 20 },
                        ]}
                    >
                        {randomBlogs.map((data, i) => (
                            <Col xs={24} sm={12} md={6} lg={6} key={i}>
                                <div
                                    className="bg-white rounded-xl cursor-pointer hover:shadow-lg transition flex flex-col h-full border border-gray-100"
                                    onClick={() => router.push(data.url)}
                                >
                                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                                        <Image
                                            src={data.image}
                                            alt={data.heading}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow p-4">
                                        <h3 className="text-base leading-snug font-semibold text-gray-900 line-clamp-2 mb-2">
                                            <T lang={lang} countryCode={countryCode?.toUpperCase()}>{data.heading}</T>
                                        </h3>
                                        <p className="text-gray-500 text-sm line-clamp-2 leading-tight mb-4">
                                            <T lang={lang} countryCode={countryCode?.toUpperCase()}>{data.value}</T>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <div className='flex items-center justify-center mt-8 md:mt-12'>
                        <button
                            className="inline-flex text-[14px] items-center justify-center gap-2 bg-[#F05A28] text-[#FFFFFF] font-medium px-6 py-4 rounded-full hover:bg-[#e04918] transition-colors duration-300"
                            onClick={() => router.push(`/${lang}/${countryCode}/resources/blogs`)}
                        >
                            <T>Explore All Blogs</T> <ArrowRight className="w-4 h-4 -rotate-45" />
                        </button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Section2