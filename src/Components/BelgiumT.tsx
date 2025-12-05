'use client';

import { useCountry } from "@/contexts/CountryContext";
import { t, setLanguage, LanguageCode } from "@/lib/language/belgium";
import { useState, useEffect, ReactNode } from 'react';

interface BelgiumTProps {
    children: ReactNode;
}

export default function BelgiumT({ children }: BelgiumTProps) {
    const { selectedLanguage } = useCountry();
    const [, setForceUpdate] = useState(0);

    // Sync with selected language
    useEffect(() => {
        if (selectedLanguage.code === 'en' || selectedLanguage.code === 'fr' || selectedLanguage.code === 'nl') {
            setLanguage(selectedLanguage.code as LanguageCode);
            setForceUpdate(prev => prev + 1);
        }
    }, [selectedLanguage.code]);

    // If children is a string, translate it
    if (typeof children === 'string') {
        return <>{t(children)}</>;
    }

    return <>{children}</>;
}
