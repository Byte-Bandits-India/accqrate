"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const JordanEInvoicingGuide: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={<T>e-Invoicing in Jordan: A Complete Guide to the Timeline, Framework, Processes, and Compliance Requirements</T>}
            updatedOn="Nov 20th, 2024"
            minRead="18"
        >
            <Image
                src={AssetPath.blogs.creditNotesPng}
                className="w-full mb-3 rounded-lg"
                alt="e-Invoicing in Jordan: Complete Guide"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan's move toward electronic invoicing has become one of the most important milestones in its digital tax reform journey. The national system, known as JoFotara, marks a structural shift in how invoices are generated, validated, transmitted, and stored. Since its official launch in December 2022, the rollout has moved from voluntary onboarding to mandatory compliance, with the Income and Sales Tax Department formally notifying taxpayers in October 2024 to complete their registration.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The goal is clear. By shifting entirely to structured electronic invoices that pass through JoFotara for validation, the country is building a transparent and automated tax ecosystem that reduces errors, curbs fraud, and increases trust between taxpayers and authorities.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    This guide offers an end-to-end explanation of how Jordan's e-invoicing system works, the implementation schedule, compliance rules, and what businesses must do to integrate seamlessly.
                </T>
            </p>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Understanding e-Invoicing in Jordan</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    E-invoicing in Jordan refers to issuing invoices digitally through a structured XML or JSON format that is authenticated by JoFotara. The system validates the data, assigns a QR code, and stores the fiscal document electronically.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The model applies to business-to-business, business-to-consumer, and business-to-government transactions, creating a unified nationwide standard for tax documentation.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>National Rollout Timeline</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan's approach to implementation is phased to ensure that businesses of different sizes and systems transition progressively.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>
                        <b>December 2022:</b> Launch of the JoFotara e-invoicing platform.
                    </T>
                </li>
                <li>
                    <T>
                        <b>January 2023:</b> Taxpayers encouraged to conduct internal readiness assessments and close compliance gaps.
                    </T>
                </li>
                <li>
                    <T>
                        <b>February 2023:</b> Mandatory system registration begins and integration instructions are formalized.
                    </T>
                </li>
                <li>
                    <T>
                        <b>October 2024:</b> The ISTD issues compulsory onboarding notices, marking the shift from voluntary adoption to enforceable compliance.
                    </T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>How the e-Invoicing Process Works</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The life cycle of an e-invoice under JoFotara involves several coordinated steps.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>Invoice creation</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    The business first generates a structured invoice in XML. This file is then encrypted into JSON through its ERP, POS, or billing system.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>Submission to JoFotara</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    The encrypted invoice is transmitted to Jordan's national system for verification.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>Validation and authentication</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    If the invoice meets all structural and fiscal requirements, JoFotara approves it and embeds a QR code representing the fiscal signature and validation data.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>Delivery to the customer</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    The supplier may then share the validated invoice electronically with the buyer. This version becomes the official legal document.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Compliance Rules Set by ISTD</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    To ensure consistency and traceability, the Income and Sales Tax Department enforces the following standards.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>
                        <b>Format requirements:</b> Invoices must adhere to the UPL 2.1 data standard, generated in XML and transmitted in encrypted JSON.
                    </T>
                </li>
                <li>
                    <T>
                        <b>QR code inclusion:</b> Every invoice must contain a QR code assigned during validation, enabling instant authentication.
                    </T>
                </li>
                <li>
                    <T>
                        <b>System integration:</b> All accounting, billing, ERP, and point-of-sale systems must be linked to JoFotara through approved interfaces.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Electronic archiving:</b> Businesses must retain electronic fiscal invoices for audit and regulatory inspections.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Threshold guidance:</b> Invoices below ten thousand Jordanian dinars do not require detailed purchaser information.
                    </T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Types of Electronic Invoices in Jordan</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan recognizes two primary invoice categories within the JoFotara framework.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>
                        <b>Cash invoices:</b> Used when payment is collected immediately at the time of sale.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Receivable invoices:</b> Used when payment is deferred, typically in credit-based or contractual transactions.
                    </T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>The e-Invoicing Framework</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan uses a directly integrated framework, meaning business systems are expected to connect to JoFotara rather than relying on standalone portals. This approach enables:
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>automated generation and transmission of digital invoices</T>
                </li>
                <li>
                    <T>continuous validation and real-time tax reporting</T>
                </li>
                <li>
                    <T>QR-based verification for both buyers and tax authorities</T>
                </li>
                <li>
                    <T>seamless interoperability with existing accounting and ERP platforms</T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Who Must Comply</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Mandatory compliance applies to a broad and expanding set of economic operators.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>VAT-registered businesses</T>
                </li>
                <li>
                    <T>Companies using manual or hybrid invoicing processes</T>
                </li>
                <li>
                    <T>Suppliers issuing invoices to government bodies</T>
                </li>
                <li>
                    <T>Retailers, wholesalers, and service providers conducting regular taxable transactions</T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Benefits of e-Invoicing for Jordanian Businesses</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan's system provides operational and regulatory advantages, including:
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>faster invoicing cycles and fewer manual errors</T>
                </li>
                <li>
                    <T>material savings from reduced paper and administrative workload</T>
                </li>
                <li>
                    <T>improved cash-flow visibility</T>
                </li>
                <li>
                    <T>tax accuracy through standardized data capture</T>
                </li>
                <li>
                    <T>audit readiness through fully traceable electronic records</T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Government Resources</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The ISTD has published several detailed manuals to support onboarding, including:
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>the Procedures Manual for Invoice Organization</T>
                </li>
                <li>
                    <T>the Procedures Manual for System Integration</T>
                </li>
                <li>
                    <T>the Procedures Manual for Joining the National e-Invoicing System</T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Conclusion</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan's national e-invoicing program represents a decisive step toward building a transparent digital economy. Every taxpayer is expected to register, integrate, and validate their invoicing systems within the JoFotara framework, ensuring full compliance with data-driven tax reporting. Businesses that prepare early will gain operational efficiency, reduce error risk, and navigate audits with confidence. In this evolving environment, modern platforms such as Accqrate continue to help organizations streamline their compliance readiness while strengthening their digital invoicing capabilities.
                </T>
            </p>
        </BlogLayout>
    );
};

export default JordanEInvoicingGuide;