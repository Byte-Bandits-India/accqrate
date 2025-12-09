'use client';

import { useCountry } from "@/contexts/CountryContext";
import T from "@/lib/language/uae";
import { ReactNode } from 'react';

interface TProps {
    children: ReactNode;
}

export default function UaeT({ children }: TProps) {
    return <T>{children}</T>;
}