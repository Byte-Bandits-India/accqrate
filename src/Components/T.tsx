"use client";

import { useCountry } from "@/contexts/CountryContext";
import { t, setLanguage } from "@/lib/translations";
import React, { ReactNode, useEffect, isValidElement, Children, cloneElement, ReactElement } from "react";
import { usePathname } from "next/navigation";

interface TProps {
    children: ReactNode;
    countryCode?: string; // optional override
    lang?: string; // optional language override (e.g., 'en', 'fr', 'ar')
}

// Helper function to collect all text from children, stripping HTML tags for lookup
function collectPlainText(children: ReactNode): string {
    let text = '';

    const processNode = (node: ReactNode): void => {
        if (typeof node === 'string' || typeof node === 'number') {
            // Clean up text - remove extra whitespace but preserve single spaces
            text += node.toString().replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        } else if (isValidElement(node)) {
            // Extract text from element children
            const element = node as ReactElement<{ children?: ReactNode }>;
            if (element.props.children) {
                if (Array.isArray(element.props.children)) {
                    element.props.children.forEach(processNode);
                } else {
                    processNode(element.props.children);
                }
            }
        } else if (Array.isArray(node)) {
            node.forEach(processNode);
        }
    };

    processNode(children);
    // Clean up: normalize whitespace, remove extra spaces
    return text.replace(/\s+/g, ' ').trim();
}

// Helper function to translate children while preserving structure
function translateChildren(children: ReactNode, targetCountry: string): ReactNode {
    return Children.map(children, (child) => {
        if (typeof child === "string" || typeof child === "number") {
            const text = child.toString();
            return t(text, targetCountry);
        } else if (isValidElement(child)) {
            const element = child as ReactElement<{ children?: ReactNode }>;

            // First, get the plain text content for translation lookup
            const plainText = collectPlainText(element.props.children);

            if (plainText) {
                // Try to get translation for the entire text block
                const translatedText = t(plainText, targetCountry);

                // If we got a translation different from original
                if (translatedText !== plainText) {
                    // Return the translated text as a string (simple case)
                    return translatedText;
                }
            }

            // If no translation found for the block, translate children recursively
            const newChildren = element.props.children
                ? translateChildren(element.props.children, targetCountry)
                : element.props.children;

            return cloneElement(element, {
                ...element.props,
                children: newChildren,
            });
        } else if (Array.isArray(child)) {
            return translateChildren(child, targetCountry);
        }
        return child;
    });
}

export default function T({ children, countryCode, lang }: TProps) {
    const { selectedCountry, selectedLanguage } = useCountry();
    const pathname = usePathname();

    // Set language synchronously
    if (lang) {
        setLanguage(lang as any);
    } else {
        const pathSegments = pathname.split('/').filter(Boolean);
        const pathLang = pathSegments[0] || '';

        // Only use path language if it's a valid language code
        if (pathLang && (pathLang === 'en' || pathLang === 'ar' || pathLang === 'fr')) {
            setLanguage(pathLang as any);
        } else if (selectedLanguage?.code) {
            setLanguage(selectedLanguage.code as any);
        }
    }

    const targetCountry = countryCode || selectedCountry?.code || "SA"; // Default to SA if none

    // If no children, return null
    if (!children) return null;

    try {
        // Case 1: Simple string or number
        if (typeof children === "string" || typeof children === "number") {
            const text = children.toString();
            const translated = t(text, targetCountry);
            return <>{translated}</>;
        }

        // Case 2: Get plain text for translation lookup
        const plainText = collectPlainText(children);

        if (plainText) {
            const translatedText = t(plainText, targetCountry);

            // If we found a translation
            if (translatedText !== plainText) {
                return <>{translatedText}</>;
            }
        }

        // Case 3: Recursively translate nested children
        return <>{translateChildren(children, targetCountry)}</>;

    } catch (error) {
        console.error("Translation error:", error);
        // Fallback: return original children
        return <>{children}</>;
    }
}