/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/T";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAECorporateTax() {
    return (
        <BlogLayout
            pageTitle={<T>Corporate Tax in the UAE: A Complete Guide to Rates, Scope, Compliance and the Domestic Minimum Top-up Tax</T>}
            updatedOn="Nov 25th, 2024"
            minRead="30"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.uae.corporateTax}
                    alt="UAE Corporate Tax Guide 2025"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE introduced a federal corporate tax regime in June 2023, marking a significant shift
                    in how businesses operating in the country are taxed. The framework is designed to support
                    economic growth, align with international tax standards, and maintain the UAE&apos;s position
                    as an attractive global hub for business and investment.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    This guide walks through everything companies and business owners need to know, from who is
                    covered to how taxable income is calculated and how the upcoming Domestic Minimum Top-up Tax
                    will impact large multinational groups.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Understanding Corporate Tax in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Corporate tax is a levy applied on the profits or net income that arise from business
                    activities. The rules apply to both UAE-based companies and foreign persons conducting
                    business inside the country. Income that comes from personal investments or employment is
                    not considered business income and is therefore outside the scope.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The system follows a dual-tier structure. Profits up to a certain threshold are taxed at
                    zero percent, and profits beyond that are taxed at a standard rate. The framework is
                    supported by requirements for clear record keeping, annual tax return filing, and adherence
                    to transfer pricing rules that regulate transactions between related parties.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Who Is Taxable under the UAE Corporate Tax Law</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The corporate tax regime does not treat all businesses the same way. Liability depends on
                    the type of person or entity and the nature of their connection to the UAE economy.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Resident Juridical Persons</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Companies that are incorporated under UAE laws are considered resident taxpayers. This
                    includes mainland companies and businesses established in free zones. Foreign incorporated
                    companies can also be treated as residents if they are effectively managed and controlled
                    from the UAE. Effective management is determined by where strategic and operational
                    decisions are made.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Resident Natural Persons</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Individuals are treated as resident taxable persons when they conduct business and their
                    annual turnover from these activities exceeds one million dirhams. Freelancers, sole
                    proprietors, and any individual carrying out ongoing commercial activity fall into this
                    category. Income from employment, passive investments, and UAE property rentals for
                    personal use does not trigger corporate tax.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Non Residents</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    A foreign business is taxed in the UAE under three circumstances. First, if it operates
                    through a permanent establishment inside the UAE. Second, if it earns income that is sourced
                    from within the country, even without a permanent establishment. Third, if it creates a
                    nexus in the UAE based on economic presence, as defined by Cabinet decisions. These rules
                    ensure that business profits connected to the UAE are brought into the tax net even when
                    the legal entity is not incorporated locally.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Corporate Tax Rates in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE uses a progressive structure based on profit levels and business category rather
                    than activity type.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Standard Rates for Resident Businesses</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Taxable income up to three hundred seventy-five thousand dirhams is taxed at zero percent.
                    Any taxable income above this threshold is taxed at nine percent. These rates apply to both
                    companies and natural persons engaged in business activities.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Qualifying Free Zone Persons</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Free zone entities that meet prescribed substance requirements and earn income that
                    qualifies under the law may enjoy a zero percent rate on their qualifying income. Any income
                    that falls outside the qualifying criteria is taxed at nine percent.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Domestic Minimum Top-up Tax for Multinational Groups</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    From the beginning of 2025, the UAE will apply a Domestic Minimum Top-up Tax to large
                    multinational groups whose consolidated global revenues reach or exceed seven hundred fifty
                    million euros in at least two out of the four preceding financial years. The top-up ensures
                    these groups pay a minimum effective tax rate of fifteen percent in line with the global
                    minimum tax initiative under the OECD Pillar Two rules.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Categories Exempt from Corporate Tax</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Certain entities are not required to pay corporate tax because of their importance to
                    public services, national economic interests, or their role as investment vehicles.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    These include government bodies, government-controlled entities, extractive industry
                    operators, non-extractive natural resource businesses, and qualifying public benefit
                    organisations. Public and private pension funds, social security funds, and qualifying
                    investment funds can also obtain exempt status when they meet the conditions defined by the
                    Ministry of Finance and the Federal Tax Authority.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Small businesses may also elect for temporary relief provided their revenue remains below
                    three million dirhams each year until the end of 2026.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How Taxable Income Is Determined</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Taxable income is based on the accounting profit reported in financial statements prepared
                    according to IFRS or IFRS for SMEs. Adjustments are then made to reflect the tax rules.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Examples include removing income that is exempt, such as qualifying dividends, and adding
                    back expenses that are not deductible. After completing these adjustments, the result
                    becomes the taxable income for the period.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Resident entities are taxed on worldwide income while resident natural persons are taxed
                    only on income arising from business activities conducted in the UAE. Non-residents are
                    taxed solely on UAE-related income.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Permanent Establishment and State-Sourced Income</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A permanent establishment is created when a foreign business has a fixed place of business
                    in the UAE or operates through a dependent agent who regularly concludes contracts on its
                    behalf. The law also recognises that an economic presence in the UAE that meets specific
                    criteria may constitute a taxable nexus.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    State-sourced income includes revenue from services performed in the UAE, sales of goods
                    within the UAE, income from UAE property, and income connected with contracts performed in
                    the country. Interest on loans connected to UAE assets or borrowers also falls under this
                    category.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Group Relief and Loss Utilisation</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The corporate tax regime allows companies that meet ownership and residency conditions to
                    form a tax group. The group is treated as a single taxable person represented by the parent
                    company. Losses can be transferred between group members, and tax losses can be carried
                    forward and set off against future taxable income up to seventy-five percent of income in a
                    given period.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    There is no expiry period for carrying forward losses. However, losses cannot be carried
                    back to earlier years.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Transfer Pricing Requirements</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses engaged in related party transactions must follow the arm&apos;s length principle,
                    ensuring that prices charged between connected parties reflect market conditions. Companies
                    above specific turnover thresholds must prepare transfer pricing documentation, including a
                    local file and master file. Large multinational groups must comply with detailed reporting
                    requirements that align with international standards.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The Federal Tax Authority has also introduced an Advance Pricing Agreement program, allowing
                    businesses to agree on transfer pricing methods in advance to obtain greater certainty.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Corporate Tax Compliance Obligations</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Every taxable person must register with the Federal Tax Authority and obtain a tax
                    registration number. The timing for registration depends on the date of incorporation or
                    the date when a taxable presence is created.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Tax returns must be filed once every financial year. The deadline for filing and payment is
                    nine months from the end of the tax period. Businesses must also maintain proper financial
                    records, including invoices, contracts, and supporting documentation, for audit and
                    verification purposes.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Penalties apply for late registration, late filing, inaccurate reporting, and late payment.
                    Reduced penalties are available for timely voluntary disclosures.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Calculating Corporate Tax: A Practical Walkthrough</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    To calculate corporate tax in the UAE, begin with the accounting profit from financial
                    statements. Make the required tax adjustments, then apply the zero percent and nine percent
                    bands.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    For example, consider a business with a net profit of seven hundred fifty thousand
                    dirhams. If fifty thousand dirhams represent expenses that are not deductible, the adjusted
                    taxable income will be seven hundred thousand dirhams. The first three hundred seventy-five
                    thousand dirhams are taxed at zero percent. The remaining three hundred twenty-five
                    thousand dirhams are taxed at nine percent, which results in a corporate tax payable of
                    twenty-nine thousand two hundred fifty dirhams.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE&apos;s corporate tax framework introduces a modern, competitive, and internationally
                    aligned system that supports long-term economic development. Businesses operating in the
                    UAE must understand their obligations, calculate taxable income accurately, comply with
                    filing deadlines, and prepare for the introduction of the Domestic Minimum Top-up Tax.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    As organisations strengthen their financial and compliance processes, many are adopting
                    digital systems that provide accuracy and audit readiness. Platforms such as Accqrate can
                    support these efforts by helping businesses maintain structured financial records and
                    improve the reliability of tax-related data without complicating their existing workflows.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAECorporateTax;