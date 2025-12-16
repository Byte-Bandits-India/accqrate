"use client";

import { useCountry } from "@/contexts/CountryContext";
import { t, setLanguage, LanguageCode } from "@/lib/language/poland";
import { useState, useEffect, ReactNode } from "react";

interface PolandTProps {
    children: ReactNode;
}

export default function PolandT({ children }: PolandTProps) {
    const { selectedLanguage } = useCountry();
    const [, setForceUpdate] = useState(0);

    // Sync translation language with selectedLanguage
    useEffect(() => {
        if (
            selectedLanguage.code === "en" ||
            selectedLanguage.code === "pl" 
           
        ) {
            setLanguage(selectedLanguage.code as LanguageCode);
            setForceUpdate((prev) => prev + 1);
        }
    }, [selectedLanguage.code]);

    // Translate plain string children
    if (typeof children === "string") {
        return <>{t(children)}</>;
    }

    return <>{children}</>;
}
