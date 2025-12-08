"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const JordanPhaseTwoEInvoicing: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={<T>Jordan's Second Phase of E-Invoicing: What JoFotara Means for Businesses in 2025</T>}
            updatedOn="Mar 15th, 2025"
            minRead="16"
        >
            <Image
                src={AssetPath.blogs.debitNotes}
                className="w-full mb-3 rounded-lg"
                alt="Jordan's Second Phase of E-Invoicing - JoFotara 2025"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan has entered an accelerated phase of tax digitalisation, placing electronic invoicing at the centre of its national compliance framework. The rollout, driven jointly by the Income and Sales Tax Department and the Ministry of Digital Economy and Entrepreneurship, has reached a point where electronic invoices are no longer a future requirement but a present obligation for nearly all economic actors in the country.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The introduction of Phase Two on 1 April 2025 marks the transition from gradual onboarding to full operational enforcement. At this stage, every invoice that is intended to qualify as a deductible tax expense must be issued electronically through the national JoFotara platform or one of the officially integrated systems.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    This development positions Jordan alongside other countries adopting real time controls to strengthen oversight, reduce fraud, and streamline the relationship between businesses and the tax authority.
                </T>
            </p>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>How JoFotara Operates in Practice</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    JoFotara functions as a unified platform that manages the creation, validation, and archival of all electronic invoices. When a supplier generates an invoice through the system or via an integrated solution, JoFotara evaluates the data and assigns a unique QR code. This code confirms the invoice has been properly registered and can therefore be considered for payment and tax deductions.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Every invoice processed through JoFotara becomes part of a secure record, allowing the tax authority to access real time data for verification and audit purposes. The system enhances visibility while reducing the operational risks associated with manual or paper based invoicing.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Who Must Participate in Jordan's E-Invoicing System</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The mandate applies to a broad scope of economic actors. All VAT registered companies, including retailers, wholesalers, and service providers, are required to issue electronic invoices. Professionals offering individual services are also included. Additionally, any supplier engaging with government entities for business to government transactions must complete integration with JoFotara.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Participation is not optional. Failure to comply may trigger penalties of up to five hundred Jordanian dinars for each violation. More importantly, invoices issued outside the JoFotara framework lose their eligibility as deductible expenses, creating direct financial consequences for businesses and their customers.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Jordan's E-Invoicing Timeline</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The transition has been structured across several stages.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>
                        <b>December 2022</b> marked the launch of the national system.
                    </T>
                </li>
                <li>
                    <T>
                        <b>January 2023</b> opened with the first mandatory registration obligations.
                    </T>
                </li>
                <li>
                    <T>
                        <b>February 2023</b> required companies to begin integrating their ERP or invoicing systems.
                    </T>
                </li>
                <li>
                    <T>
                        By <b>October 2024</b>, the tax authority began issuing formal reminders instructing taxpayers to complete their onboarding.
                    </T>
                </li>
                <li>
                    <T>
                        From <b>1 April 2025</b>, electronic issuance through JoFotara or approved solutions became compulsory for every B2B, B2C, and B2G invoice.
                    </T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Strategic Purpose Behind Jordan's E-Invoicing Reform</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The shift to JoFotara advances multiple national priorities. It enhances transparency in commercial activities, strengthens the fight against tax evasion, and reduces the administrative overhead associated with paper based documentation. The system supports faster auditing, simplifies reconciliation, and provides businesses with consistent access across computers and mobile devices. By collecting accurate transactional data, the country improves its ability to oversee economic activity and sustain long term fiscal reforms.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Supporting the Transition to JoFotara</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Businesses preparing for this transformation must ensure that their invoicing or ERP systems can generate structured electronic invoices, connect to JoFotara, retrieve the validated QR code, and archive documents according to legal requirements. Professional guidance and reliable technology are central to achieving a smooth and compliant transition.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Conclusion</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan's second phase of e invoicing marks a defining moment in the country's digital tax transformation. With JoFotara now mandatory for all types of transactions, businesses must complete integration and issue every invoice electronically to preserve compliance, maintain deductibility, and avoid penalties. Organisations that adopt modern invoicing systems and embed structured processes will not only meet regulatory expectations but also enhance internal efficiency and transparency.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Accqrate continues to support enterprises across the region as they adapt to these evolving compliance ecosystems and modernise their invoicing operations.
                </T>
            </p>
        </BlogLayout>
    );
};

export default JordanPhaseTwoEInvoicing;