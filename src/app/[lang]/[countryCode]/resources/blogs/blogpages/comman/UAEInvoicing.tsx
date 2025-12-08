"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const UAEInvoicing: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={
                <T>
                    United Arab Emirates: Preparing for a PEPPOL Driven E-Billing System
                </T>
            }
            updatedOn="Mar 8th, 2025"
            minRead="9"
        >
            <Image
                src={AssetPath.blogs.adaptingBusinessZATCA}
                className="w-full mb-3 rounded-lg"
                alt="UAE E-Invoicing: PEPPOL-Driven E-Billing System for B2B and B2G Transactions"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    The United Arab Emirates is preparing a nationwide electronic invoicing framework built on a decentralised model inspired by PEPPOL's Continuous Transaction Control and Exchange architecture. The upcoming system will require structured invoice formats, connectivity to accredited service providers, and real-time routing of business to business and business to government transactions.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    As the transition approaches its expected launch window in 2026, businesses are encouraged to modernise their invoicing infrastructure early. The future system will provide the government with near real-time visibility into economic activity and help both regulators and policymakers identify areas requiring targeted support.
                </T>
            </p>
        </BlogLayout>
    );
};

export default UAEInvoicing;