"use client";

import { useCountry } from "@/contexts/CountryContext";
import { t, setLanguage } from "@/lib/translations";
import { ReactNode, useEffect } from "react";

interface TProps {
    children: ReactNode;
    countryCode?: string; // optional override
    lang?: string; // optional language override (e.g., 'en', 'fr', 'ar')
}

export default function T({ children, countryCode, lang }: TProps) {
    const { selectedCountry, selectedLanguage } = useCountry();

    // If a lang override is provided, propagate it to the translation system.
    useEffect(() => {
        if (lang && lang !== selectedLanguage.code) {
            try {
                setLanguage(lang as any);
                window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
            } catch (e) {}
        }
    }, [lang, selectedLanguage.code]);

    const targetCountry = countryCode || selectedCountry?.code || "";

    if (typeof children === "string") {
        return <>{t(children as string, targetCountry)}</>;
    }

    return <>{children}</>;
}
