// Central translation entrypoint that delegates to country-specific language modules.
// This file exposes `t`, `setLanguage`, and `currentLang` used across the app.

import * as belgium from "./language/belgium";
import * as poland from "./language/poland";
import * as saudi from "./language/saudi";

// Keep a minimal runtime language state for consumers that import from here
export const currentLang: { lang: string } = { lang: "en" };

export const setLanguage = (l: string) => {
  currentLang.lang = l;
  // Propagate to country-specific modules where a setter exists
  try {
    (belgium as any).setLanguage?.(l);
  } catch (e) {}
  try {
    (poland as any).setLanguage?.(l);
  } catch (e) {}
  try {
    (saudi as any).setLanguage?.(l);
  } catch (e) {}
};

// t(text, countryCode?) will delegate to the best fit translator based on country code.
export const t = (text: string, countryCode?: string): string => {
  // Normalize country code
  const cc = (countryCode || "").toString().toUpperCase();

  if (cc === "BE") {
    return (belgium as any).t ? (belgium as any).t(text) : text;
  }

  if (cc === "PL") {
    return (poland as any).t ? (poland as any).t(text) : text;
  }

  // Arabic / GCC countries: delegate to the saudi module which provides Arabic translations
  if (["SA", "AE", "OM", "BH", "JD"].includes(cc)) {
    return (saudi as any).t ? (saudi as any).t(text) : text;
  }

  // Default: try saudi (works as a general fallback that returns original English when no translation exists)
  return (saudi as any).t ? (saudi as any).t(text) : text;
};

export default { t, setLanguage, currentLang };
