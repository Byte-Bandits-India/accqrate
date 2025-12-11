"use client";

import { useState, useEffect } from "react";
import { DonutChart, DonutChartData } from "@/Components/DonutChart";
import { TrendingUp } from "lucide-react";
import { Card } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Input } from "@/Components/ui/input";
import { Slider } from "@/Components/ui/slider";
import AOS from "aos";
import "aos/dist/aos.css";
import ZatcaSection from "@/Components/ZatcaSection";
import { Field } from "@/Components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { useParams } from "next/navigation";
import T from "@/Components/T";
import { t } from "@/lib/translations";
import { getVATCalculatorContent, getCountrySpecificVATDetails } from "./data/vat-calculator-content";

export default function VATCalculator() {
  const [hydrated, setHydrated] = useState(false);
  const [saleValue, setSaleValue] = useState("816618");
  const [vatRate, setVatRate] = useState("15"); // Default to Saudi rate
  const [isVATInclusive, setIsVATInclusive] = useState<"yes" | "no">("no");
  const [currency, setCurrency] = useState("SAR");

  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const countryCode = (params?.countryCode as string || "SA").toUpperCase();

  // Get country-specific content
  const content = getVATCalculatorContent(countryCode);
  const countrySpecificDetails = getCountrySpecificVATDetails(countryCode);

  useEffect(() => {
    setHydrated(true);
    AOS.init({ once: true, duration: 800 });

    // Set country-specific defaults when component mounts or country changes
    const countryDefaults = getCountryDefaults(countryCode);
    setVatRate(countryDefaults.vatRate.toString());
    setCurrency(countryDefaults.currency);
  }, [countryCode]);

  // Country-specific configuration
  const getCountryDefaults = (code: string) => {
    const countryConfig: Record<string, { vatRate: number; currency: string; vatName: string }> = {
      // Saudi Arabia
      SA: { vatRate: 15, currency: "SAR", vatName: "KSA VAT" },
      // United Arab Emirates
      AE: { vatRate: 5, currency: "AED", vatName: "UAE VAT" },
      // Bahrain
      BH: { vatRate: 10, currency: "BHD", vatName: "Bahrain VAT" },
      // Malaysia
      MA: { vatRate: 6, currency: "MYR", vatName: "Malaysian SST" },
      // Mauritius
      MU: { vatRate: 15, currency: "MUR", vatName: "Mauritius VAT" },
      // Jordan
      JD: { vatRate: 16, currency: "JOD", vatName: "Jordan VAT" },
      // Poland
      PL: { vatRate: 23, currency: "PLN", vatName: "Polish VAT" },
      // Belgium
      BE: { vatRate: 21, currency: "EUR", vatName: "Belgian VAT" },
    };

    return countryConfig[code] || { vatRate: 15, currency: "SAR", vatName: "VAT" };
  };

  // Get country-specific VAT calculator title
  const getVatCalculatorTitle = () => {
    const countryName = getCountryName(countryCode);
    return `${countryName} VAT Calculator`;
  };

  // Get country name
  const getCountryName = (code: string) => {
    const countryNames: Record<string, string> = {
      SA: "Saudi Arabia",
      AE: "UAE",
      BH: "Bahrain",
      MA: "Malaysia",
      MU: "Mauritius",
      JD: "Jordan",
      PL: "Poland",
      BE: "Belgium",
    };
    return countryNames[code] || "KSA";
  };

  // Get only the specific currencies from your list
  const getCurrencyOptions = (countryCode: string) => {
    // Only these specific currencies as per your list
    const allCurrencies = [
      { value: "SAR", label: "SAR", country: "SA" },
      { value: "JOD", label: "JOD", country: "JD" },
      { value: "AED", label: "AED", country: "AE" },
      { value: "MYR", label: "MYR", country: "MA" },
      { value: "MUR", label: "MUR", country: "MU" },
      { value: "PLN", label: "PLN", country: "PL" },
      { value: "EUR", label: "EUR", country: "BE" },
      { value: "BHD", label: "BHD", country: "BH" },
    ];

    // Get current country's currency code
    const currentCountryCurrency = getCountryDefaults(countryCode).currency;

    // Separate current country's currency and others
    const currentCountryCurrencyItem = allCurrencies.find(c => c.value === currentCountryCurrency);
    const otherCurrencies = allCurrencies.filter(c => c.value !== currentCountryCurrency);

    // Return with current country's currency at the top
    return currentCountryCurrencyItem
      ? [currentCountryCurrencyItem, ...otherCurrencies]
      : allCurrencies;
  };

  const countryDefaults = getCountryDefaults(countryCode);
  const currencyOptions = getCurrencyOptions(countryCode);

  // Parsed numeric values
  const saleValueNum = parseFloat(saleValue) || 0;
  const vatRateNum = parseFloat(vatRate) || 0;
  const vatDecimal = vatRateNum / 100;

  // Calculations
  let vatAmount = 0;
  let totalAmount = 0;

  if (isVATInclusive === "yes") {
    vatAmount = saleValueNum * (vatDecimal / (1 + vatDecimal));
    totalAmount = saleValueNum;
  } else {
    vatAmount = saleValueNum * vatDecimal;
    totalAmount = saleValueNum + vatAmount;
  }

  // Donut chart data
  const vatData: DonutChartData[] = [
    { label: "VAT Amount", value: vatAmount },
    { label: "Sale Value", value: saleValueNum },
  ];

  return (
    <div>
      <div className="bg-[#F8F6FF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 pt-[80px] pb-[40px]">
          <h1
            className="text-[26px] md:text-[32px] lg:text-[38px] font-medium pb-[30px] md:pb-[37px] text-[#000000] tracking-heading leading-tight"
            data-aos="fade-up"
          >
            {getVatCalculatorTitle()}
          </h1>

          <div className="lg:flex items-stretch justify-evenly font-inter space-y-6 lg:space-y-0 lg:gap-[35px]">
            {/* Donut Chart Card */}
            <div
              className="lg:max-w-[310px] xl:max-w-[450px] w-full"
              data-aos="fade-up"
            >
              <DonutChart
                data={vatData}
                footerText={t("Total VAT this month", countryCode)}
                footerIcon={TrendingUp}
                footerDescription={t("Showing VAT breakdown for the current month", countryCode)}
              />
            </div>

            {/* VAT Calculator Form */}
            <div className="max-w-[1000px] w-full" data-aos="fade-up">
              <Card className="p-4 lg:p-6 h-full">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {/* Sale Value */}
                  <div className="flex flex-col">
                    <h3 className="text-[#333333] text-fluid-body mb-2"><T lang={lang} countryCode={countryCode}>Sale Value</T></h3>
                    <div className="relative w-full">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#194BED] text-white text-[12px] font-semibold rounded-full h-[25px] w-[25px] flex items-center justify-center">
                        $
                      </span>
                      <Input
                        type="text"
                        value={saleValue}
                        onChange={(e) =>
                          setSaleValue(e.target.value.replace(/[^0-9.]/g, ""))
                        }
                        className="pl-12 text-lg text-[#333333] font-medium h-12 bg-[#F5F5FF] w-full border-[#29266E] rounded"
                      />
                    </div>
                    <Slider
                      value={[saleValueNum]}
                      min={0}
                      max={1000000}
                      step={1}
                      onValueChange={(val) => setSaleValue(val.toString())}
                      className="pt-4 lg:pt-[35px]"
                    />
                  </div>

                  {/* VAT Rate */}
                  <div className="flex flex-col">
                    <h3 className="text-[#333333] text-fluid-body mb-2"><T lang={lang} countryCode={countryCode}>VAT Rate (%)</T></h3>
                    <div className="relative w-full">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#194BED] text-white text-[12px] font-semibold rounded-full h-[25px] w-[25px] flex items-center justify-center">
                        %
                      </span>
                      <Input
                        type="text"
                        value={vatRate}
                        onChange={(e) =>
                          setVatRate(e.target.value.replace(/[^0-9.]/g, ""))
                        }
                        className="pl-12 text-lg text-[#333333] font-medium h-12 bg-[#F5F5FF] w-full border-[#29266E] rounded"
                      />
                    </div>
                    <Slider
                      value={[vatRateNum]}
                      min={0}
                      max={100}
                      step={0.1}
                      onValueChange={(val) => setVatRate(val.toString())}
                      className="pt-4 lg:pt-[35px]"
                    />
                  </div>

                  {/* VAT Inclusive Question */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-row lg:items-center lg:justify-between gap-4 mt-6">
                      <div className="flex-1">
                        <p className="text-fluid-small lg:text-[16px] text-[#333333] font-medium mb-3">
                          <T lang={lang} countryCode={countryCode}>Is Sale Inclusive of VAT?</T>
                        </p>
                        <RadioGroup
                          value={isVATInclusive}
                          onValueChange={(val) =>
                            setIsVATInclusive(val as "yes" | "no")
                          }
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className="text-[#333333] cursor-pointer"><T lang={lang} countryCode={countryCode}>Yes</T></Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className="text-[#333333] cursor-pointer"><T lang={lang} countryCode={countryCode}>No</T></Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Currency Selector */}
                      <div className="lg:w-auto">
                        <Field className="w-[120px]">
                          <Select value={currency} onValueChange={setCurrency}>
                            <SelectTrigger className="h-12 bg-[#F5F5FF] border-[#29266E]">
                              <SelectValue className="text-fluid-body" placeholder={currency} />
                            </SelectTrigger>
                            <SelectContent className="text-fluid-body bg-[#F5F5FF]">
                              {currencyOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-8 lg:col-span-2 max-w-[400px]">
                    <div className="space-y-4">
                      {/* Sale Value Row */}
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="text-fluid-body text-[#333333] font-medium">
                            Sale Value:
                          </p>
                          <p className="text-fluid-small text-[#717171] mt-2">
                            {isVATInclusive === "yes" ? "Inclusive of VAT" : "Exclusive of VAT"}
                          </p>
                        </div>
                        <p className="text-fluid-body text-[#333333] font-bold mt-10">
                          {currency} {hydrated ? saleValueNum.toLocaleString() : saleValueNum}
                        </p>
                      </div>

                      <div className="border-t border-[#DFDFDF] w-full"></div>

                      {/* VAT Amount Row */}
                      <div className="flex items-center justify-between py-2">
                        <p className="text-fluid-body text-[#333333] font-medium">
                          VAT Amount:
                        </p>
                        <p className="text-fluid-body text-[#333333] font-bold">
                          {currency} {hydrated ? vatAmount.toFixed(2) : vatAmount.toFixed(2)}
                        </p>
                      </div>

                      <div className="border-t border-[#DFDFDF] w-full"></div>

                      {/* Total Value Row */}
                      <div className="flex items-center justify-between py-2">
                        <p className="text-fluid-body text-[#333333] font-semibold">
                          Total Value:
                        </p>
                        <p className="text-fluid-body text-[#333333] font-bold">
                          {currency} {hydrated ? totalAmount.toFixed(2) : totalAmount.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Text Sections with AOS - Now using centralized content */}
      <div>
        <div className="max-w-[1280px] mx-auto mt-[40px] px-6 md:px-8 xl:px-0 pb-8 md:pb-10 lg:pb-12" data-aos="fade-up">
          <div>
                    <h2 className="text-fluid-body font-semibold"><T lang={lang} countryCode={countryCode}>{content.title}</T></h2>
            <p className="text-fluid-small leading-[26px] lg:leading-[40px] mt-[25px]">
              <T lang={lang} countryCode={countryCode}>{content.subtitle}</T>
            </p>
          </div>

          <div className="mt-[30px]" data-aos="fade-up">
            <h2 className="text-fluid-body font-semibold"><T lang={lang} countryCode={countryCode}>What Is VAT?</T></h2>
            <p className="text-fluid-small mt-[25px] leading-[26px] lg:leading-[40px]">
              <T lang={lang} countryCode={countryCode}>{content.whatIsVAT}</T> {countrySpecificDetails}
            </p>
          </div>

          <div className="mt-[30px]" data-aos="fade-up">
            <h2 className="text-fluid-body font-semibold"><T lang={lang} countryCode={countryCode}>{content.howToCalculateTitle}</T></h2>
            <p className="text-fluid-small mt-[25px] leading-[26px] lg:leading-[40px]">
              <T lang={lang} countryCode={countryCode}>{content.howToCalculateDesc}</T>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-fluid-small text-[#555555] leading-[26px] lg:leading-[40px] mt-2">
              <li><T lang={lang} countryCode={countryCode}>Adding VAT: Perfect for when sales are exclusive of VAT.</T></li>
              <li><T lang={lang} countryCode={countryCode}>Excluding VAT: Ideal for sales prices that already include VAT.</T></li>
            </ul>
          </div>

          <div className="mt-[30px] lg:mb-[60px]" data-aos="fade-up">
            <h2 className="text-fluid-body font-semibold"><T lang={lang} countryCode={countryCode}>{content.calculationBenefitsTitle}</T></h2>
            <p className="text-fluid-small mt-[25px] leading-[26px] lg:leading-[40px]"><T lang={lang} countryCode={countryCode}>With our</T> {getCountryName(countryCode)} <T lang={lang} countryCode={countryCode}>VAT Calculator, enjoy:</T></p>
            <ul className="list-disc pl-6 space-y-1 text-fluid-small leading-[26px] lg:leading-[40px] text-[#555555] mt-2">
              {content.benefits.map((benefit, index) => (
                <li key={index}><T lang={lang} countryCode={countryCode}>{benefit}</T></li>
              ))}
            </ul>
            <p className="text-fluid-small mt-[25px] leading-[26px] lg:leading-[40px]">
              <T lang={lang} countryCode={countryCode}>{content.calculationBenefitsDesc}</T>
            </p>
          </div>
        </div>
      </div>
      <ZatcaSection />
    </div>
  );
}