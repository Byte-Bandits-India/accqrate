"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const OmanEInvoicing: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={
                <T>
                    Oman: Infrastructure Reboot and the Five Corner Vision
                </T>
            }
            updatedOn="Feb 20th, 2025"
            minRead="9"
        >
            <Image
                src={AssetPath.blogs.einvoicingOman}
                className="w-full mb-3 rounded-lg"
                alt="Oman E-Invoicing: Infrastructure Reboot and Five-Corner Model for Digital Tax Compliance"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Oman has renewed its electronic invoicing agenda by entering a strategic development partnership that will rebuild the national infrastructure required for compliance. The future system is expected to follow a decentralised five-corner model based on international standards. Large organisations are anticipated to enter a pilot environment in 2026, with broader adoption expected by 2027.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The initiative will serve as a catalyst for broader digital tax management, delivering scalable architectures for both multinational firms and domestic enterprises. With the planned structure, organisations will issue invoices in standardised formats, connect seamlessly to the national platform, and benefit from real-time visibility into their tax positions.
                </T>
            </p>
        </BlogLayout>
    );
};

export default OmanEInvoicing;