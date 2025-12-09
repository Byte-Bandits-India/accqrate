/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/UaeT";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAECorporateTaxFAQ() {
    return (
        <BlogLayout
            pageTitle="UAE Corporate Tax 2025: Frequently Asked Questions, Practical Guidance, and Compliance Essentials"
            updatedOn="Nov 25th, 2024"
            minRead="35"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.automotiveIndustry}
                    alt="UAE Corporate Tax FAQ 2025"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    This guide answers common questions about the UAE corporate tax regime, explains who is
                    covered, clarifies rates and exemptions, and outlines filing and documentation requirements.
                    It focuses on what businesses actually need to know to become and remain compliant.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>1. What is corporate tax in the UAE?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Corporate tax is a tax on business profits. It applies to entities and to individuals who
                    carry on business activities. The law establishes how taxable profit is measured, what
                    adjustments apply to accounting profit, the filing cycle, and the enforcement rules that
                    the Federal Tax Authority administers.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>2. When did corporate tax start in the UAE?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The federal corporate tax regime was introduced by the Ministry of Finance and came into
                    effect for relevant financial periods in 2023. Businesses calculate and report tax for each
                    defined tax period, which is generally a twelve-month accounting period chosen by the entity.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>3. What counts as a tax period?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    A tax period is the twelve-month financial reporting interval used to prepare statutory
                    accounts. Many companies use the calendar year, but companies that follow a different fiscal
                    year use that period for corporate tax purposes. For example, a company with a financial
                    year starting on May 1st will have a tax period from May 1st to April 30th.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>4. What are the policy goals behind the UAE corporate tax?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The main objectives are to create a sustainable revenue base to support public services and
                    investment, to align UAE rules with international tax transparency standards, and to
                    preserve the UAE as a competitive and stable destination for business and investment.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>5. What are the headline corporate tax rates?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The system uses thresholds rather than multiple progressive slabs. For most taxable persons
                    the first portion of taxable profit up to three hundred seventy-five thousand dirhams is
                    taxed at zero percent. Taxable profit above three hundred seventy-five thousand dirhams is
                    taxed at nine percent. In addition, large multinational groups that meet global revenue
                    thresholds face a domestic top-up measure to achieve a minimum effective rate consistent
                    with international agreements.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>6. Which businesses must register for corporate tax?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Registration is required for:
                </T>
            </p>
            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Companies incorporated in the UAE</T>
                </li>
                <li>
                    <T>Branches of foreign companies that qualify as resident establishments</T>
                </li>
                <li>
                    <T>Foreign entities that create a taxable nexus through a permanent establishment or by earning UAE-sourced income</T>
                </li>
                <li>
                    <T>Individuals conducting business activities with annual turnover exceeding one million dirhams</T>
                </li>
            </ul>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Entities that are exempt still generally need to register and submit returns unless the
                    law or an administrative ruling explicitly waives that obligation.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>7. How is taxable income determined?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Start with accounting profit reported under IFRS or IFRS for small entities. Then apply
                    tax adjustments specified in the law. Typical adjustments add back non-deductible items and
                    exclude exempt income. The resulting figure after all permitted deductions and adjustments
                    is the taxable income for the period.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>8. Do free zone businesses pay corporate tax?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Free zone companies that meet the qualifying conditions and substance requirements can
                    obtain a zero percent effective rate on qualifying income. Income that does not meet the
                    qualifying criteria is taxed at the standard rate. Qualifying status depends on the
                    entity&apos;s activity, substance, contractual arrangements, and compliance with transfer
                    pricing rules.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>9. Who is exempt from corporate tax?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Certain categories of persons are exempt or treated differently. These include government
                    entities performing sovereign functions, qualifying public benefit organisations, certain
                    pension and social security funds, qualifying investment funds, and businesses in
                    extractive industries which remain subject to emirate-level arrangements. Exemptions are
                    subject to conditions and often require registration or approval.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>10. Will foreign investors or non-resident companies be taxed?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Non-residents are taxed on income that is sourced to the UAE and on income attributable to
                    a permanent establishment in the UAE. Passive returns such as dividends, interest, and
                    capital gains from foreign investments are generally outside the scope unless they are UAE
                    sourced or attributed to a UAE permanent establishment.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>11. How does the domestic minimum top-up tax work?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    From the beginning of 2025, the UAE applies a domestic top-up mechanism that requires large
                    multinational groups with consolidated global revenue above specified thresholds to pay an
                    effective minimum tax. The mechanism is intended to align the UAE with the global minimum
                    tax standards agreed at the international level. Affected groups will calculate their
                    effective tax and if it falls below the agreed minimum they will pay a top-up tax under
                    the domestic provisions.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>12. What are the key compliance steps companies must take?</T>
            </h3>
            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Register with the Federal Tax Authority and obtain a tax identification number</T>
                </li>
                <li>
                    <T>Maintain complete accounting records and retain supporting documentation for transactions</T>
                </li>
                <li>
                    <T>Prepare and file the corporate tax return through the EmaraTax portal within the statutory deadline</T>
                </li>
                <li>
                    <T>Pay any tax due by the filing deadline</T>
                </li>
                <li>
                    <T>Implement transfer pricing documentation where related party transactions exceed thresholds</T>
                </li>
                <li>
                    <T>Consider group registration and small business relief options where applicable</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>13. What documents are needed to file a corporate tax return?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The usual submission pack includes company financial statements prepared under IFRS, a tax
                    registration certificate, records of revenue and expenses, depreciation schedules,
                    supporting invoices, intercompany agreements, and any transfer pricing documentation
                    required. Free zone entities and qualifying funds may need to provide additional evidence
                    of qualifying activities and substance.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>14. What are the filing deadlines and payment timings?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Tax returns must be filed and tax paid within nine months after the end of the relevant tax
                    period. For example, a company with a calendar year-end of December 31st files by
                    September 30th of the following year. Payment of tax is due at the same time as the return
                    unless installment arrangements have been agreed.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>15. What penalties apply for non-compliance?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Penalties vary by breach and include fixed and percentage-based sanctions. Examples include
                    administrative penalties for late registration, monthly penalties for late filing, interest
                    and fines for late payment, and larger penalties for incorrect or false returns. Repeat
                    breaches and deliberate concealment attract higher fines and potential criminal exposure.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>16. What reliefs and special rules exist?</T>
            </h3>
            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        Small business relief is available for qualifying small enterprises which meet the
                        turnover and other eligibility tests for a limited period
                    </T>
                </li>
                <li>
                    <T>
                        Losses may be carried forward without time limit but may only offset up to
                        seventy-five percent of taxable income in any year
                    </T>
                </li>
                <li>
                    <T>
                        Group relief can allow the transfer of tax losses between members of a tax group where
                        ownership and residency conditions are met
                    </T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>17. What is the transfer pricing regime?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Related party transactions must reflect arm&apos;s length pricing. Companies above the
                    relevant revenue thresholds must prepare contemporaneous transfer pricing documentation,
                    including local and master files where required. Advance Pricing Agreements will be
                    available to provide certainty on pricing methodologies for certain taxpayers.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>18. Do companies need audited financial statements?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Companies generally file tax returns using accounting records prepared under IFRS. Audit
                    requirements depend on local legislation and size. Where financial statements are audited,
                    those audited accounts are used as the starting point for tax calculations. Some small
                    businesses with revenue below thresholds may use unaudited accounts but must still prepare
                    reliable financial statements.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>19. What happens when a company changes its financial year?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    If a company changes its accounting period, the tax period changes accordingly. Reporting
                    and filing deadlines will align to the new tax period. Companies should notify the Federal
                    Tax Authority and plan filings to avoid penalties.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>20. Are VAT and corporate tax linked?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    VAT is a separate indirect tax. Businesses may be liable for both VAT and corporate tax.
                    Input VAT is treated differently for tax base computation. Only irrecoverable VAT may be
                    considered in computing taxable income where the law permits. VAT registration and
                    corporate tax registration are independent obligations.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>21. How should companies prepare operationally?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Companies should conduct a business impact assessment to determine registration
                    obligations, to identify accounting and systems changes, and to document the evidence
                    required for tax positions. They should update contracts, train finance teams, and
                    consider technology or advisory support to manage compliance.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>22. Which activities qualify for free zone benefits?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Qualifying activities commonly include manufacturing, certain trading and logistics
                    activities, fund management, treasury, and holding activities that meet the specific
                    rules. Entities must demonstrate adequate substance and that they meet the criteria set
                    out in free zone rules and guidance to retain the qualifying tax treatment.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>23. How are penalties for record-keeping enforced?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The authority may impose fines for failure to keep accurate books, for not producing
                    records on request, and for submitting incomplete or false information. Businesses should
                    keep supporting evidence for all tax-related positions and ensure secure retention for the
                    statutory period.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>24. What support does the Federal Tax Authority provide?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The Federal Tax Authority publishes guidance, FAQs, and forms on the EmaraTax portal. The
                    authority also issues interpretive guidance on technical issues such as transfer pricing,
                    permanent establishment, qualifying free zone persons, and implementation of the top-up
                    mechanism.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>25. Where can I find official information and updates?</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Consult the Ministry of Finance and the Federal Tax Authority websites for the latest
                    legislative texts, ministerial decisions, and official guidance. These sources provide the
                    authoritative rules and any subsequent clarifications.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Practical Checklist for First-Time Registrants</T>
            </h3>
            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Confirm whether the entity is a resident taxable person or a non-resident with UAE-sourced income</T>
                </li>
                <li>
                    <T>Gather your financial statements, registration documents, and basic corporate records</T>
                </li>
                <li>
                    <T>Register on the EmaraTax portal and obtain a tax registration number</T>
                </li>
                <li>
                    <T>Map accounting profit to the tax base and identify likely adjustments</T>
                </li>
                <li>
                    <T>Review related party agreements and prepare transfer pricing documentation when thresholds are met</T>
                </li>
                <li>
                    <T>Evaluate free zone status and whether qualifying income tests are met</T>
                </li>
                <li>
                    <T>Train finance staff on filing and retention obligations and on the nine-month deadline for filing and payment</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Concluding Note</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE corporate tax regime balances international obligations with incentives that
                    retain the country as a business-friendly jurisdiction. Proper preparation, robust record
                    keeping, and early assessment of transfer pricing and free zone status are the foundations
                    of good compliance. For many businesses, improving financial controls and consolidating
                    tax data into a single platform reduces risk and simplifies filings.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    Systems such as Accqrate can help keep financial records organised and make tax reporting
                    more straightforward while preserving existing operational workflows.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAECorporateTaxFAQ;