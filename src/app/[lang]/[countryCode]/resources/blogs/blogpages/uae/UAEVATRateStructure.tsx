/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/UaeT";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAEVATRateStructure() {
    return (
        <BlogLayout
            pageTitle="UAE VAT Rate Structure: Complete Guide to Standard, Zero Rated and Exempt Supplies"
            updatedOn="Nov 25th, 2024"
            minRead="20"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.automotiveIndustry}
                    alt="UAE VAT Rate Structure Complete Guide"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The Value Added Tax framework in the United Arab Emirates began on the first of January
                    2018 through Federal Decree Law No. 8 of 2017. Since its introduction, VAT has become a
                    central part of every business transaction in the country. The Federal Tax Authority
                    assigns specific VAT rates depending on the nature of the supply, and every registered
                    business must charge the correct rate, issue a compliant invoice, and remit the collected
                    tax through periodic VAT returns.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Although the general VAT rate in the UAE is five percent, not all supplies attract this
                    rate. The law classifies transactions into three broad categories: standard rated supplies,
                    zero rated supplies, and exempt supplies. Understanding the difference between these
                    categories is essential for accurate invoicing, proper input tax recovery, and overall
                    VAT compliance.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Understanding the VAT Rates in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A business registered for VAT must generally add five percent VAT to the taxable value of
                    its goods or services. However, the VAT regime has carved out specific groups of supplies
                    that fall under special treatment. Some are taxed at zero percent even though the
                    transaction forms part of the VAT system, while others are completely exempt and fall
                    outside the scope of taxation for input VAT recovery purposes.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>The three VAT categories can be viewed as follows:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        <span className="font-semibold">Standard rated supplies:</span> These attract a VAT rate of five percent
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Zero rated supplies:</span> These attract a VAT rate of zero percent, but the
                        supplier is still within the VAT system and may recover input VAT
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Exempt supplies:</span> These do not attract VAT, and the supplier cannot
                        recover input VAT on related expenses
                    </T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Each category has its own conditions, qualifying rules, and documentary requirements.
                    Businesses must classify supplies correctly to avoid penalties and to maintain accurate
                    VAT returns.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Standard Rated Supplies: VAT Applied at Five Percent</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The standard rate applies to the majority of goods and services supplied within the UAE.
                    These transactions form the core of the VAT system. Any supply that does not fall within
                    the statutory list of zero rated or exempt supplies is considered standard rated.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Common examples include the following:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Retail sales across all sectors</T>
                </li>
                <li>
                    <T>Hotel accommodation and restaurant services</T>
                </li>
                <li>
                    <T>Construction and contracting services</T>
                </li>
                <li>
                    <T>Maintenance and repair services</T>
                </li>
                <li>
                    <T>Events, entertainment, and leisure activities</T>
                </li>
                <li>
                    <T>General consulting, technical, and professional services</T>
                </li>
                <li>
                    <T>Imported goods of any kind unless specifically zero rated</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Under this category, the supplier must collect five percent VAT, issue a full or simplified
                    tax invoice depending on the situation, and report the transaction in the periodic VAT
                    return. Input VAT incurred on business-related purchases is normally recoverable.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Zero Rated Supplies: VAT Applied at Zero Percent with Full Input Tax Recovery</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Zero rated supplies are taxable supplies where VAT is charged at zero percent. Even though
                    no VAT is collected from the customer, the supplier remains eligible to reclaim input VAT
                    paid on expenses connected with making these supplies. This is a key distinction between
                    zero rated and exempt transactions.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE VAT law provides a defined list of transactions that qualify for zero rating.
                    These include the following:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Exports of goods to destinations outside the UAE</T>
                </li>
                <li>
                    <T>
                        Exports of services provided that the benefit is consumed outside the UAE and
                        conditions in the law are satisfied
                    </T>
                </li>
                <li>
                    <T>International transportation of passengers and goods</T>
                </li>
                <li>
                    <T>Supply or import of precious metals that meet the required purity standards</T>
                </li>
                <li>
                    <T>First supply of residential buildings within three years of completion</T>
                </li>
                <li>
                    <T>Certain buildings supplied to charitable organisations</T>
                </li>
                <li>
                    <T>Educational services provided by approved institutions</T>
                </li>
                <li>
                    <T>Healthcare services provided by qualified medical professionals</T>
                </li>
                <li>
                    <T>Supply of crude oil and natural gas</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Each activity must satisfy specific conditions outlined in the Executive Regulations.
                    Businesses must maintain strong documentation to justify their application of the zero
                    percent rate during audits.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Exempt Supplies: Outside the VAT System with No Input VAT Recovery</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Exempt supplies occupy a different status within the VAT framework. Although these
                    supplies are recognised under the law, they do not attract VAT and the supplier cannot
                    claim input VAT on expenses related to making these supplies. This often creates an
                    irrecoverable VAT cost for businesses operating in exempt sectors.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE VAT law identifies the following categories as exempt:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        Specified financial services that do not charge explicit fees
                    </T>
                </li>
                <li>
                    <T>
                        Residential buildings that are not new and therefore do not fall under the zero rated
                        category
                    </T>
                </li>
                <li>
                    <T>
                        Bare land with no developed structures
                    </T>
                </li>
                <li>
                    <T>
                        Local passenger transportation by land, air, or sea within the UAE
                    </T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Businesses dealing in both taxable and exempt supplies may need to use an apportionment
                    method to determine how much of their input VAT can be recovered. Proper record keeping
                    and category identification become essential for accurate VAT recovery.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Why VAT Rate Classification Is Important</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Incorrect classification of VAT rates can result in underpaid tax, denied input tax
                    credits, or penalties. A supplier charging zero percent VAT incorrectly may lose the right
                    to recover input VAT. Conversely, applying five percent VAT on a zero rated sale can create
                    undue cost for the customer and increase compliance risk.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Businesses should therefore carry out a detailed review of their products, services, and
                    supply chains to ensure correct VAT treatment. Clear documentation, accurate invoicing,
                    and reliable VAT reporting systems are crucial for maintaining compliance in the UAE.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE VAT system is built around three primary rate categories that determine how tax is
                    charged and how input VAT is recovered. Most transactions are subject to the standard five
                    percent rate, while a specific list of supplies qualifies for zero percent VAT with the
                    benefit of input tax recovery. A limited set of supplies remains exempt and sits outside
                    the VAT credit chain.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    Accurate classification ensures proper invoicing, compliant VAT filings, and smooth audits.
                    Many organisations rely on digital platforms such as Accqrate to ensure consistent VAT
                    categorisation and seamless reporting across their financial operations.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAEVATRateStructure;