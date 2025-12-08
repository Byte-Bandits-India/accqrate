"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const MauritiusEInvocingOverview: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={
                <T>
                    E-Invoicing in Mauritius: A Complete Overview of the Timeline, Guidelines, Processes, and Compliance Steps
                </T>
            }
            updatedOn="Jan 22nd, 2025"
            minRead="17"
        >
            <Image
                src={AssetPath.blogs.financialPenalties}
                className="w-full mb-3 rounded-lg"
                alt="Complete Guide to E-Invoicing in Mauritius: Timeline, Processes, Compliance"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Mauritius is entering a new stage of digital tax modernization through the national e-invoicing framework introduced by the Mauritius Revenue Authority. Beginning with select high turnover taxpayers and expanding gradually, the mandate requires businesses to generate structured electronic invoices, submit them in real time, and receive official validation before these documents can be shared with customers. As of 2025, this phased approach is well underway and is shaping how companies manage VAT reporting, invoicing processes, and system integration.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    This guide explains the purpose of e-invoicing in Mauritius, the implementation timeline, the end-to-end process, and the compliance expectations for businesses preparing for the upcoming phases.
                </T>
            </p>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Understanding e-Invoicing in Mauritius</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The Mauritius Revenue Authority now requires certain categories of taxpayers to issue invoices digitally through certified Electronic Billing Systems. These systems generate invoices using the JSON format defined by the MRA and transmit the data instantly to the government platform for approval.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Only after approval does the system return two mandatory elements:
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small pl-4">
                <li>
                    <T>A unique Invoice Reference Number.</T>
                </li>
                <li>
                    <T>A QR code for verification and customer validation.</T>
                </li>
            </ul>

            <p className="mb-4 text-fluid-small">
                <T>
                    This transformation is aimed at creating transparency in VAT reporting, reducing tax related irregularities, and enabling digital standardisation across the economy.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Implementation Timeline</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Mauritius is rolling out e-invoicing in several stages to allow companies and technology providers enough time to adapt their systems.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>
                        <b>June 2023:</b> Technology vendors and internal IT teams were invited to develop and test Electronic Billing Systems on the MRA Developer Portal.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Post June 2023:</b> Economic Operators began registering and onboarding their tested EBS solutions. Each approved system receives a unique EBS MRA ID for identification.
                    </T>
                </li>
                <li>
                    <T>
                        <b>May 15, 2024:</b> The first stage of mandatory e-invoicing began. Companies with annual turnover above 100 million Mauritian rupees must now issue all invoices electronically.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Future phases:</b> Additional turnover brackets will be included over the coming years and the system is expected to become mandatory for most businesses in the country.
                    </T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>The e-Invoicing Process in Mauritius</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    To remain compliant, businesses must follow a structured workflow defined by the Mauritius Revenue Authority. The steps below outline the complete lifecycle of e-invoice creation and transmission.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>1. Customising the Electronic Billing System</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    Every business must configure or upgrade its billing, ERP, or point of sale system to satisfy MRA technical requirements. This includes data fields, validation logic, JSON formatting, and communication protocols.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>2. Registration of the Developer</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    Software developers and internal technology teams register on the MRA Developer Portal to receive sandbox access, documentation, testing APIs, and certification guidelines.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>3. System Testing and Self Certification</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    The EBS goes through a series of tests to confirm that it can generate, structure, and transmit invoices in line with MRA standards. Once verified, the system can be self certified.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>4. Economic Operator Registration and EBS Onboarding</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    Businesses register themselves and their Electronic Billing System on the MRA e-invoicing platform. Once approved, each system is assigned an EBS MRA ID that accompanies every invoice transmission.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>5. Real Time Invoice Transmission</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    Invoices, credit notes, and debit notes are generated in JSON format by the EBS and sent to the MRA's Invoice Fiscalisation Platform. The MRA validates the information and checks for completeness, correctness, and authenticity.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>6. Generation of Fiscal Invoices</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    After validation, the invoice receives a fiscal signature. The system returns an Invoice Reference Number and a machine readable QR code. These two elements must appear on the customer facing invoice.
                </T>
            </p>

            <h3 className="text-fluid-base font-semibold mb-2">
                <T>7. Buyer Validation</T>
            </h3>
            <p className="mb-4 text-fluid-small">
                <T>
                    Recipients can verify the validity of the invoice using the QR code or via the MRA invoice verification service.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>E-Invoicing Compliance Requirements</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Businesses must adhere to a set of technical and procedural rules to remain compliant.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>Real time fiscalisation of every invoice, credit note, and debit note</T>
                </li>
                <li>
                    <T>Invoicing in JSON format based on the MRA specified structure</T>
                </li>
                <li>
                    <T>Inclusion of the Invoice Reference Number and QR code on each approved invoice</T>
                </li>
                <li>
                    <T>Use of an MRA approved Electronic Billing System with anti tampering features</T>
                </li>
                <li>
                    <T>Registration of each EBS instance with a unique EBS MRA ID</T>
                </li>
                <li>
                    <T>Secure retention of fiscal invoices for a minimum of five years</T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Who Must Comply</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    As of 2025, the mandate is compulsory for Economic Operators with annual turnover exceeding 100 million MYR. Subsequent turnover brackets will be incorporated in later phases until the system becomes standard for most VAT registered businesses.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Benefits of e-Invoicing in Mauritius</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The introduction of e-invoicing brings several long term advantages that extend far beyond VAT reporting.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>More consistent data across the economy</T>
                </li>
                <li>
                    <T>Higher accuracy in invoice processing</T>
                </li>
                <li>
                    <T>Greater visibility for regulators and taxpayers</T>
                </li>
                <li>
                    <T>Reduced risk of fraud and undocumented transactions</T>
                </li>
                <li>
                    <T>Improved operational efficiency through digital workflows</T>
                </li>
                <li>
                    <T>A clear shift toward global tax technology standards</T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Conclusion</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Mauritius is placing strong emphasis on digital compliance through a structured and transparent e-invoicing framework. The requirement to register Electronic Billing Systems, generate JSON formatted invoices, and obtain real time fiscal approval is designed to modernise the national VAT ecosystem and support businesses in strengthening their financial processes.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    As these regulations expand to more turnover brackets, companies benefit from preparing early. Modern platforms such as Accqrate already support structured invoice generation, seamless API based integrations, and compliant digital workflows, which can simplify the transition as e-invoicing becomes an essential part of operating in Mauritius.
                </T>
            </p>
        </BlogLayout>
    );
};

export default MauritiusEInvocingOverview;