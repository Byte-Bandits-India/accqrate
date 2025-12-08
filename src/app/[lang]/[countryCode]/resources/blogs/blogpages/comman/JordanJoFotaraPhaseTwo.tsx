"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const JordanJoFotaraPhaseTwo: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={
                <T>
                    Jordan: Expansion of JoFotara and Mandatory Phase Two
                </T>
            }
            updatedOn="Mar 5th, 2025"
            minRead="8"
        >
            <Image
                src={AssetPath.blogs.automotiveIndustry}
                className="w-full mb-3 rounded-lg"
                alt="Jordan JoFotara Phase Two: Mandatory E-Invoicing Expansion and Compliance Requirements"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Jordan's national invoicing system, JoFotara, has transitioned from initial rollout to compulsory use under Phase Two, effective April 2025. All resident taxpayers exceeding seventy five thousand dinars in turnover must issue their invoices electronically for business to business, business to consumer, and business to government transactions.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Invoices require QR code validation through JoFotara before they are eligible for VAT deduction. This structured approach strengthens transparency, reduces the administrative burden on tax authorities, and enhances the quality of financial records. Failure to comply results in penalties and exclusion from government procurement.
                </T>
            </p>
        </BlogLayout>
    );
};

export default JordanJoFotaraPhaseTwo;