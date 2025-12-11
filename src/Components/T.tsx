"use client";

import { useCountry } from "@/contexts/CountryContext";
import { t } from "@/lib/translations";
import { ReactNode } from "react";

export default function T({ children }: { children: ReactNode }) {
    const { selectedCountry } = useCountry();

    if (typeof children === "string") {
        return <>{t(children, selectedCountry.code)}</>;
    }

    return <>{children}</>;
}
