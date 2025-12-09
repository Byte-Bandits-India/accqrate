/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/UaeT";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAEExciseTax() {
    return (
        <BlogLayout
            pageTitle="Excise Tax in the UAE: Rates, Exemptions, Compliance Rules, and How the Tax Is Calculated"
            updatedOn="Nov 25th, 2024"
            minRead="28"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.attaininZATCA}
                    alt="UAE Excise Tax Complete Guide"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Excise tax has become an important element of the UAE&apos;s modern tax system.
                    Introduced to discourage the consumption of products that negatively affect public
                    health or the environment, it also contributes to long-term fiscal diversification.
                    Governed by Federal Decree Law Number 7 of 2017, the tax applies to a defined set of
                    goods such as tobacco products, energy drinks, carbonated beverages, electronic smoking
                    devices, and sweetened drinks.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Businesses that import, manufacture, or stock these products must register with the
                    Federal Tax Authority, calculate their excise liabilities correctly, and file the
                    required returns on time. This guide explains how excise tax works in the UAE, including
                    current rates, exemption rules, calculation methods, and compliance requirements.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Understanding the Concept of Excise Tax in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Excise tax is a consumption tax that applies only once, usually at the point of import
                    or the moment goods are produced for sale in the local market. Unlike VAT, which is
                    charged at every stage of the supply chain, excise tax is imposed a single time but at
                    significantly higher rates that range between fifty percent and one hundred percent.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The purpose is straightforward. The government aims to reduce the consumption of goods
                    linked to lifestyle diseases and environmental harm, while also encouraging healthier
                    consumer behaviour. Any business involved with excise goods must register with the FTA,
                    maintain accurate records, and settle excise liabilities for each tax period.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Goods That Fall Under Excise Tax in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE has clearly defined categories of excise goods. These include:
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Tobacco and Tobacco-Based Products</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    This covers a wide range of items such as cigarettes, cigars, cigarillos, chewing
                    tobacco, herbal smoking blends, snuff, reconstituted tobacco sheets, and anything
                    classified under Schedule 24 of the GCC Common Customs Tariff.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Carbonated Drinks</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Any aerated beverage, as well as concentrates, extracts, powders, gels, or syrups that
                    are used to make such drinks. Unflavoured aerated water is the main exception.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Energy Drinks</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Products marketed as energy drinks or containing ingredients known for their stimulant
                    properties. These include caffeine, taurine, guarana, ginseng, or similar active
                    substances. Powders and extracts also fall within this category.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Electronic Smoking Devices and Associated Liquids</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    All electronic smoking tools, whether or not they contain nicotine, and all liquids
                    intended for use in such devices.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Sweetened Drinks</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Any beverage with added sugar or any artificial or natural sweetener. This includes
                    ready-to-drink beverages, powdered mixes, concentrates, gels, syrups, sweetener-based
                    ingredients, and sugar components such as glucose syrup.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Sweetened Drink Exemptions</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Some items are excluded from excise tax even if sweetened. These include products that
                    contain at least seventy-five percent milk or milk substitutes, baby food and formula,
                    medical nutrition products, and alcoholic beverages which fall under a separate
                    regulatory regime.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Key Compliance Requirements for Excise Tax</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses that deal with excise goods must meet several regulatory obligations.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Registration with the FTA</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Any business that imports, manufactures, stockpiles, or handles excise goods within a
                    warehouse or designated zone must register for excise tax before engaging in activities.
                    Registration is mandatory even if excise goods are handled occasionally.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Accurate Calculation and Payment</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Once registered, a business must determine the value of excise goods and calculate the
                    tax based on the applicable rates. Payment must be made in accordance with the FTA
                    timeline for each period.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Filing Excise Tax Returns</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Excise returns must be filed monthly. The deadline to submit the return is the fifteenth
                    day following the end of each tax period. The return must report the value of goods
                    subject to excise tax and the corresponding tax due.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Current Excise Tax Rates in the UAE</T>
            </h3>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Product Category</T>
                            </th>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Excise Tax Rate</T>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Carbonated drinks</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>50%</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Tobacco products</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>100%</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Energy drinks</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>100%</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Electronic smoking devices</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>100%</T>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Liquids used in electronic smoking devices</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>100%</T>
                            </td>
                        </tr>
                        <tr className="border-t hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Products containing added sugars or sweeteners</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>50%</T>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    These rates are intended to influence consumption patterns and reflect public health
                    priorities.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How Excise Tax Is Calculated</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE uses two primary methods to determine excise tax liabilities. The method depends
                    on the type of product being taxed.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>The Specific Rate Method</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A predetermined amount of tax applies to each unit of the product. This creates a fixed
                    and predictable liability.
                </T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Example using cigarettes:</T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    If a product is taxed at forty fils per cigarette and a pack contains twenty cigarettes,
                    the tax is calculated by multiplying the rate per unit by the number of units. The total
                    excise amount is then added to the retail value.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>The Ad Valorem Method</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The tax is calculated as a percentage of the retail selling price. Since it is
                    value-based, the tax rises with the retail price.
                </T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>Example using energy drinks:</T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    If an energy drink is sold for ten dirhams and the excise rate is one hundred percent,
                    the excise amount is another ten dirhams. The same method applies to carbonated drinks
                    at fifty percent.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Situations Where Excise Tax Does Not Apply</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Several scenarios qualify for exemptions or relief under UAE excise tax regulations.
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Goods exported outside the UAE, provided the business presents valid customs documentation</T>
                </li>
                <li>
                    <T>Medical nutrition products, baby food, and foods designed for specific medical needs</T>
                </li>
                <li>
                    <T>Goods purchased for official use by diplomatic missions and certain international organisations</T>
                </li>
                <li>
                    <T>Goods imported within duty-free allowances by travellers entering the country</T>
                </li>
                <li>
                    <T>Goods imported occasionally by non-regular importers, subject to limits</T>
                </li>
                <li>
                    <T>Stockpiled goods that do not exceed two months of average sales volumes</T>
                </li>
                <li>
                    <T>Goods stored in designated zones until they enter the domestic market</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Why the UAE Introduced Excise Tax</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE&apos;s excise tax framework is driven by five strategic objectives:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Improving public health by discouraging the consumption of harmful products</T>
                </li>
                <li>
                    <T>Protecting the environment by reducing the use of polluting or harmful goods</T>
                </li>
                <li>
                    <T>Diversifying government revenue beyond the traditional hydrocarbons sector</T>
                </li>
                <li>
                    <T>Strengthening regulatory oversight and compliance across supply chains</T>
                </li>
                <li>
                    <T>Raising awareness among consumers regarding the true cost of unhealthy choices</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Excise tax is therefore both a fiscal and a societal instrument.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>The Role and Authority of the Federal Tax Authority</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The FTA oversees the entire excise tax system. Its responsibilities include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Registering businesses involved with excise goods</T>
                </li>
                <li>
                    <T>Processing returns and payments</T>
                </li>
                <li>
                    <T>Verifying the classification of goods when the product category is unclear</T>
                </li>
                <li>
                    <T>Conducting inspections and full audits</T>
                </li>
                <li>
                    <T>Evaluating stockpiles and reviewing customs documentation</T>
                </li>
                <li>
                    <T>Determining whether a product should be added to the official price list</T>
                </li>
                <li>
                    <T>Imposing penalties when businesses fail to comply</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Penalties for Non-Compliance with Excise Tax</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Non-compliance can lead to serious financial consequences. Key penalties include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        Failure to register on time may result in a penalty of ten thousand dirhams
                    </T>
                </li>
                <li>
                    <T>
                        Failure to deregister may result in one thousand dirhams per month, capped at ten thousand
                    </T>
                </li>
                <li>
                    <T>
                        Late filing of an excise return may lead to a penalty of one thousand dirhams on the
                        first violation and two thousand dirhams for subsequent violations within twenty-four
                        months
                    </T>
                </li>
                <li>
                    <T>
                        Late payment of excise tax results in an immediate two percent penalty, followed by
                        four percent per month, up to a maximum of three hundred percent of the unpaid tax
                    </T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Timely registration, accurate filing, and prompt payment are essential to avoid these
                    financial risks.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Excise Tax vs VAT: How the Two Systems Differ</T>
            </h3>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Aspect</T>
                            </th>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Excise Tax</T>
                            </th>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>VAT</T>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Purpose</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Targets specific harmful goods</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Applies broadly across goods and services</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Tax Rates</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>50% to 100%</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Standard 5%</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Application Point</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Imposed once at import or production</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Charged throughout the supply chain</T>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Primary Objective</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Influence behaviour and reduce harmful consumption</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Supports general government revenue</T>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Understanding these differences helps businesses ensure proper classification and
                    compliance.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Excise tax plays a vital role in shaping consumer behaviour, supporting public health,
                    and broadening the UAE&apos;s non-oil revenue base. The system is intentionally designed
                    to focus on goods with high social or environmental costs, ensuring that businesses
                    dealing in these products follow strict registration and reporting requirements. A clear
                    understanding of tax rates, calculation methods, exemption rules, and penalties helps
                    businesses remain compliant and avoid substantial fines.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    Many companies are now turning to advanced financial platforms to manage these
                    obligations more efficiently. Solutions such as Accqrate help automate tax calculations,
                    maintain accurate stock and transaction records, and streamline return preparation,
                    enabling businesses to manage excise responsibilities with greater accuracy and
                    confidence.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAEExciseTax;