"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const TurkeyEInvoicing: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={
                <T>
                    Turkey: A Long Standing Digital Pioneer
                </T>
            }
            updatedOn="Jan 30th, 2025"
            minRead="7"
        >
            <Image
                src={AssetPath.blogs.mandate}
                className="w-full mb-3 rounded-lg"
                alt="Turkey E-Invoicing: Digital Pioneer with Mature B2B, B2G, and B2C Transaction Ecosystem"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Turkey remains one of the earliest adopters of electronic invoicing worldwide. Its mature ecosystem spans business to business, business to government, and business to consumer transactions, supported by digital signatures, real time reporting, and standardised invoice structures.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Continuous evolution of the system has demonstrated that early adoption results in stronger economic transparency, efficient auditing, and reduced administrative overhead.
                </T>
            </p>
        </BlogLayout>
    );
};

export default TurkeyEInvoicing;