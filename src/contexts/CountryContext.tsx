'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { setLanguage, currentLang } from "@/lib/translations";
import AssetPath from "@/AssetPath/AssetPath";
import { StaticImageData } from "next/image";
import { countryLanguageOptions } from "@/Layout/data/countryMenus";

interface Country {
    name: string;
    code: string;
    flag: string | StaticImageData;
    language: string;
    currency: string;
}

interface Language {
    code: string;
    name: string;
    display: string;
}

interface CountryContextType {
    selectedCountry: Country;
    setSelectedCountry: (country: Country) => void;
    selectedLanguage: Language;
    setSelectedLanguage: (language: Language) => void;
    countries: Country[];
    languages: Language[];
    isInitialized: boolean;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

const allLanguages: Language[] = [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "ml", name: "Malay", display: "Malay" },
    { code: "en", name: "English", display: "Eng" },
    { code: "fr", name: "French", display: "Français" },
    { code: "nl", name: "Dutch", display: "Dutch" },
    { code: "de", name: "German", display: "Deutsch" },
    { code: "pl", name: "Polish", display: "Polski" },
];

const getLanguagesForCountry = (countryCode: string): Language[] => {
    const byCountry = countryLanguageOptions[countryCode.toUpperCase()];
    return byCountry && byCountry.length ? byCountry : allLanguages;
};

// ===================== Data =====================
export const countries: Country[] = [
 /*   {
        name: "Saudi Arabia",
        code: "SA",
        flag: AssetPath.header.language.saudiArabia,
        language: "Arabic",
        currency: "SAR",
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
     {
        name: "Poland",
        code: "PL",
        flag: AssetPath.header.language.poland,
        language: "English",
        currency: "PLN",
    },
      {
        name: "UAE",
        code: "AE",
        flag: AssetPath.header.language.uae,
        language: "Arabic",
        currency: "AED",
    },*/
    {
        name: "Belgium",
        code: "BE",
        flag: AssetPath.header.language.belgium,
        language: "English",
        currency: "MUR",
    },
  

   
  
];

export const languages: Language[] = allLanguages;

// ===================== Context Type =====================
export function CountryProvider({ children }: { children: ReactNode }) {
    const defaultCountry = countries[0];
    const defaultLanguageList = getLanguagesForCountry(defaultCountry.code);
    const defaultLanguage = defaultLanguageList[0] || allLanguages[0];

    const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
    const [availableLanguages, setAvailableLanguages] = useState<Language[]>(defaultLanguageList);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize from URL - this runs only on client side
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        const initializeFromURL = () => {
            const pathSegments = window.location.pathname.split('/').filter(segment => segment);

            const urlLang = pathSegments[0];
            const urlCountry = pathSegments[1]?.toUpperCase();

            const countryFromUrl = urlCountry
                ? countries.find(c => c.code === urlCountry)
                : undefined;
            const resolvedCountry = countryFromUrl || defaultCountry;

            const langsForCountry = getLanguagesForCountry(resolvedCountry.code);

            const langFromUrl = urlLang
                ? langsForCountry.find(l => l.code === urlLang)
                : undefined;
            const resolvedLanguage = langFromUrl
                || langsForCountry.find(l => l.code === 'en')
                || langsForCountry[0]
                || allLanguages[0];

            setSelectedCountry(resolvedCountry);
            setAvailableLanguages(langsForCountry);
            setSelectedLanguage(resolvedLanguage);

            // Update translation system immediately for the resolved language
            // (propagates into per-country modules via src/lib/translations)
            setLanguage(resolvedLanguage.code as any);

            console.log('🌍 CountryContext: Initialized country to', resolvedCountry.code, 'with language', resolvedLanguage.code);
        };

        initializeFromURL();
        setIsInitialized(true);
    }, []);

    // Update available languages when country changes
    useEffect(() => {
        const langsForCountry = getLanguagesForCountry(selectedCountry.code);
        setAvailableLanguages(langsForCountry);

        const languageStillAllowed = langsForCountry.some(l => l.code === selectedLanguage.code);
        if (!languageStillAllowed) {
            const fallback = langsForCountry.find(l => l.code === 'en') || langsForCountry[0] || allLanguages[0];
            setSelectedLanguage(fallback);
        }
    }, [selectedCountry.code]);

    // Update translation system whenever selectedLanguage changes
    useEffect(() => {
        if (isInitialized) {
            console.log('🔄 CountryContext: Updating language to', selectedLanguage.code);
            setLanguage(selectedLanguage.code as any);

            // Force a re-render of translation components
            // This ensures T components update with new translations
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: selectedLanguage.code }
            }));
        }
    }, [selectedLanguage.code, isInitialized]);

    return (
        <CountryContext.Provider
            value={{
                selectedCountry,
                setSelectedCountry,
                selectedLanguage,
                setSelectedLanguage,
                countries,
                languages: availableLanguages,
                isInitialized,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
}
export function useCountry() {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error('useCountry must be used within a CountryProvider');
    }
    return context;
}
