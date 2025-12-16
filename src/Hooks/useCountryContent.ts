// hooks/useCountryContent.ts
import { useCountry } from "@/contexts/CountryContext";
import { getCountryContent } from "@/lib/countryContent";

interface UseCountryContentProps {
  countryCode?: string;
}

export const useCountryContent = (props?: UseCountryContentProps) => {
  try {
    const { selectedCountry } = useCountry();
    
    // Priority: prop > context > default
    const countryCode = props?.countryCode || selectedCountry?.code || 'BE';
    
    // Validate country code
    if (!countryCode || typeof countryCode !== 'string') {
      console.warn('Invalid countryCode, defaulting to BE');
      const defaultContent = getCountryContent('BE');
      return {
        countryContent: defaultContent,
        selectedCountry: 'BE'
      };
    }
    
    const countryContent = getCountryContent(countryCode.toUpperCase());
    
    return {
      countryContent,
      selectedCountry: countryCode.toUpperCase()
    };
  } catch (error) {
    console.error('Error in useCountryContent:', error);
    // Return default content if hook fails
    const defaultContent = getCountryContent('BE');
    return {
      countryContent: defaultContent,
      selectedCountry: 'BE'
    };
  }
};