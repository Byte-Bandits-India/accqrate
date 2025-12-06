// app/[lang]/[countryCode]/page.tsx
import { notFound } from "next/navigation";
import ComingSoon from "@/Components/CommingSoon";
import AssetPath from "@/AssetPath/AssetPath";

const countries = [
    {
        name: "Saudi Arabia",
        code: "SA",
        flag: AssetPath.header.language.saudiArabia,
        language: "Arabic",
        currency: "SAR",
    },
    {
        name: "UAE",
        code: "AE",
        flag: AssetPath.header.language.uae,
        language: "Arabic",
        currency: "AED",
    },
    {
        name: "Oman",
        code: "OM",
        flag: AssetPath.header.language.oman,
        language: "Arabic",
        currency: "OMR",
    },
    {
        name: "Bahrain",
        code: "BH",
        flag: AssetPath.header.language.bahrain,
        language: "Arabic",
        currency: "BHD",
    },
    {
        name: "Malaysia",
        code: "MA",
        flag: AssetPath.header.language.malaysia,
        language: "Malay",
        currency: "MYR",
    },
    {
        name: "Mauritius",
        code: "MU",
        flag: AssetPath.header.language.mauritius,
        language: "English",
        currency: "MUR",
    },
    {
        name: "Jordan",
        code: "JD",
        flag: AssetPath.header.language.jordan,
        language: "Arabic",
        currency: "JOD",
    },
    // ✅ ADD THESE TWO COUNTRIES
    {
        name: "Belgium",
        code: "BE",
        flag: AssetPath.header.language.belgium,
        language: "English",
        currency: "MUR",
    },
    {
        name: "Poland",
        code: "PL",
        flag: AssetPath.header.language.poland,
        language: "English",
        currency: "MUR",
    },
];

// Define supported languages as a type
type SupportedLanguage = 'en' | 'ar';

interface CountryPageProps {
    params: Promise<{
        lang: string;
        countryCode: string;
    }>;
}

export async function generateStaticParams() {
    const supportedLanguages: SupportedLanguage[] = ['en', 'ar'];
    const params = [];

    for (const lang of supportedLanguages) {
        for (const country of countries) {
            params.push({
                lang,
                countryCode: country.code.toLowerCase(),
            });
        }
    }

    return params;
}

export default async function CountryHomePage({ params }: CountryPageProps) {
    const { lang, countryCode } = await params;

    // Validate language and country code with proper typing
    const isValidLanguage = (lang: string): lang is SupportedLanguage => {
        return ['en', 'ar'].includes(lang);
    };

    const isValidCountry = countries.some(
        country => country.code.toLowerCase() === countryCode.toLowerCase()
    );

    if (!isValidLanguage(lang) || !isValidCountry) {
        notFound();
    }

    // Only pass countryCode to CountryPage since that's what it expects
    return <>
        <ComingSoon />
    </>;
}

export async function generateMetadata({ params }: CountryPageProps) {
    const { lang, countryCode } = await params;
    const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());

    return {
        title: country ? `ACQRATE - ${country.name}` : 'ACQRATE',
        description: `Business and Retail Solutions for ${country?.name || 'your country'}`,
    };
}
