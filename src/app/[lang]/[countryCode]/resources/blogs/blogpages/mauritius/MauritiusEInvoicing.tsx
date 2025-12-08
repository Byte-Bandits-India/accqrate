"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import AssetPath from "@/AssetPath/AssetPath";

const MauritiusEInvoicing: React.FC = () => {
    return (
        <BlogLayout
            pageTitle={<T>Mauritius Moves Toward Nationwide Electronic Invoicing</T>}
            updatedOn="Feb 18th, 2025"
            minRead="14"
        >
            <Image
                src={AssetPath.blogs.mandate}
                className="w-full mb-3 rounded-lg"
                alt="Mauritius Nationwide Electronic Invoicing Implementation"
            />

            <p className="mb-4 text-fluid-small">
                <T>
                    Mauritius is entering a new phase of its digital tax modernisation journey as the Mauritius Revenue Authority begins expanding the scope of mandatory electronic invoicing. The transition reflects a broader government strategy to strengthen compliance, improve reporting accuracy, and build real time visibility across taxable transactions.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The authority has adopted an incremental rollout, prioritising large suppliers first and progressively including businesses from lower turnover categories. This staged approach gives organisations time to adjust their internal systems, adopt compliant billing technologies, and align with the Electronic Billing System standards defined by the regulator.
                </T>
            </p>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>How the National E-Invoicing Model Works</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The country is implementing an authenticated electronic invoicing framework in which every tax document is transmitted to the MRA e Invoicing Platform. Once an invoice, credit note, or debit note is generated within the supplier's certified system, it is transmitted instantly to the authorities for validation.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The platform verifies the submitted data and returns a unique Invoice Reference Number along with a QR code. Only after this validation step may the invoice be shared with the customer. This model not only strengthens audit trails but also ensures that all businesses follow a unified method of generating and reporting transactional information.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Progress of the First Rollout Group</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Businesses with annual revenues above one hundred million Mauritian rupees were the first required to move to mandatory e invoicing beginning in May 2024. These early adopters have already begun integrating their sales systems with the national platform and are now issuing digital tax documents in real time.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    The regulator also allows voluntary adoption for any supplier that has completed registration on the national portal, giving organisations an opportunity to modernise their financial processes ahead of future phases.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Expansion to the Next Turnover Bracket</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    During the 2025 to 2026 fiscal cycle, the next group of companies will join the mandate. This category includes suppliers that generate more than eighty million rupees in annual revenue. These businesses are expected to prepare for system upgrades, interface certifications, and internal process adjustments before the transition begins.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Expected Future Phases</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Although not officially confirmed, two further phases are planned. The next one is expected to cover entities with revenues between fifty and eighty million rupees. A final stage will later include specialised sectors and other business categories that fall outside the first three rounds.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Implementation Roadmap</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    The rollout timeline currently stands as follows.
                </T>
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-fluid-small">
                <li>
                    <T>
                        <b>Phase One:</b> Mandatory for suppliers with more than 100 million rupees in annual turnover. Effective since 15th May 2024
                    </T>
                </li>
                <li>
                    <T>
                        <b>Phase Two:</b> Scheduled for suppliers with turnover above 80 million rupees. Planned during the FY 2025-26.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Phase Three:</b> To be introduced for businesses with turnover between 50 and 80 million rupees. Timing will be confirmed by the MRA.
                    </T>
                </li>
                <li>
                    <T>
                        <b>Phase Four:</b> Will apply to additional business groups identified by the authority at a later stage.
                    </T>
                </li>
            </ul>

            <h2 className="text-fluid-body font-semibold mb-3">
                <T>Conclusion</T>
            </h2>

            <p className="mb-4 text-fluid-small">
                <T>
                    Mauritius is steadily building a robust national framework for electronic invoicing, creating an environment where financial reporting becomes more accurate, transparent, and aligned with global best practices. As more businesses fall under future phases, the ability to adapt early and integrate compliant technology will become a strong operational advantage.
                </T>
            </p>

            <p className="mb-4 text-fluid-small">
                <T>
                    Solutions such as Accqrate, which already support enterprise grade e-invoicing and regulatory integration, can help organisations prepare for this shift and maintain continuity as the national mandate progresses.
                </T>
            </p>
        </BlogLayout>
    );
};

export default MauritiusEInvoicing;