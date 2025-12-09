'use client';

import { useCountry } from "@/contexts/CountryContext";
import { t, setLanguage, LanguageCode } from "@/lib/language/belgium";
import { useEffect, ReactNode } from 'react';

interface BelgiumTProps {
    children: ReactNode;
}

export default function BelgiumT({ children }: BelgiumTProps) {
    const { selectedLanguage } = useCountry();

    // Sync with selected language
    useEffect(() => {
        if (selectedLanguage.code === 'en' || selectedLanguage.code === 'fr' || selectedLanguage.code === 'nl' || selectedLanguage.code === 'de') {
            setLanguage(selectedLanguage.code as LanguageCode);
        }
    }, [selectedLanguage.code]);


    if (typeof children === 'string') {
        return <>{t(children)}</>;
    }

    return <>{children}</>;
}
