'use client';

import { useCountry } from "@/contexts/CountryContext";
import T from "./T";
import { ReactNode } from 'react';

interface TProps {
    children: ReactNode;
}

export default function UaeT({ children }: TProps) {
    return <T>{children}</T>;
}
