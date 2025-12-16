// utils/vat-calculator-content.ts

export interface VATCalculatorContent {
  title: string;
  subtitle: string;
  whatIsVAT: string;
  howToCalculateTitle: string;
  howToCalculateDesc: string;
  calculationBenefitsTitle: string;
  calculationBenefitsDesc: string;
  benefits: string[];
}

// Default content for most countries (KSA, UAE, Bahrain, Malaysia, Mauritius, Jordan)
export const defaultVATContent: VATCalculatorContent = {
  title: "Simplify VAT Calculations with Our KSA VAT Calculator",
  subtitle: "Navigating VAT calculations has never been easier. Our KSA VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.",
  whatIsVAT: "Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in KSA in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.",
  howToCalculateTitle: "How to Calculate VAT in KSA",
  howToCalculateDesc: "Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:",
  calculationBenefitsTitle: "VAT Calculation Made Simple",
  calculationBenefitsDesc: "Excluding VAT: Ideal for sales prices that already include VAT.",
  benefits: [
    "Instant Calculations: Quick and straightforward VAT computations.",
    "Accuracy: Precise invoicing every time.",
    "Error Reduction: Minimize manual calculation mistakes.",
    "Time Savings: Spend less time on math and more on your business."
  ]
};

// Belgium-specific content
export const belgiumVATContent: VATCalculatorContent = {
  title: "Simplify VAT Calculations with Our Belgium VAT Calculator",
  subtitle: "Navigating VAT calculations has never been easier. Our Belgium VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.",
  whatIsVAT: "Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in Belgium in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.",
  howToCalculateTitle: "How to Calculate VAT in Belgium",
  howToCalculateDesc: "Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:",
  calculationBenefitsTitle: "VAT Calculation Made Simple",
  calculationBenefitsDesc: "Excluding VAT: Ideal for sales prices that already include VAT.",
  benefits: [
    "Instant Calculations: Quick and straightforward VAT computations.",
    "Accuracy: Precise invoicing every time.",
    "Error Reduction: Minimize manual calculation mistakes.",
    "Time Savings: Spend less time on math and more on your business."
  ]
};

// Poland-specific content
export const polandVATContent: VATCalculatorContent = {
  title: "Simplify VAT Calculations with Our Poland VAT Calculator",
  subtitle: "Navigating VAT calculations has never been easier. Our Poland VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.",
  whatIsVAT: "Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in Poland in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.",
  howToCalculateTitle: "How to Calculate VAT in Poland",
  howToCalculateDesc: "Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:",
  calculationBenefitsTitle: "VAT Calculation Made Simple",
  calculationBenefitsDesc: "Excluding VAT: Ideal for sales prices that already include VAT.",
  benefits: [
    "Instant Calculations: Quick and straightforward VAT computations.",
    "Accuracy: Precise invoicing every time.",
    "Error Reduction: Minimize manual calculation mistakes.",
    "Time Savings: Spend less time on math and more on your business."
  ]
};

// Belgium-specific content
export const uaeVATContent: VATCalculatorContent = {
  title: "Simplify VAT Calculations with Our UAE VAT Calculator",
  subtitle: "Navigating VAT calculations has never been easier. Our UAE VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.",
  whatIsVAT: "Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in UAE in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts. Implemented in UAE in 2018 at a standard rate of 5% on most goods and services.",
  howToCalculateTitle: "How to Calculate VAT in UAE",
  howToCalculateDesc: "Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:",
  calculationBenefitsTitle: "VAT Calculation Made Simple",
  calculationBenefitsDesc: "Excluding VAT: Ideal for sales prices that already include VAT.",
  benefits: [
    "Instant Calculations: Quick and straightforward VAT computations.",
    "Accuracy: Precise invoicing every time.",
    "Error Reduction: Minimize manual calculation mistakes.",
    "Time Savings: Spend less time on math and more on your business."
  ]
};

// Helper function to get country-specific content
export const getVATCalculatorContent = (countryCode?: string): VATCalculatorContent => {
  const code = countryCode?.toUpperCase() || 'SA';
  
  switch(code) {
    case 'BE':
      return belgiumVATContent;
    case 'PL':
      return polandVATContent;
    case 'AE':
      return uaeVATContent;
    default:
      return defaultVATContent;
  }
};

// Function to get country-specific implementation details
export const getCountrySpecificVATDetails = (countryCode: string): string => {
  const countryDetails: Record<string, string> = {
    'SA': 'Implemented in KSA in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.',
    'BH': 'Implemented in Bahrain in 2019 at a standard rate of 10% on most goods and services.',
    'MA': 'Malaysia has a Sales and Service Tax (SST) rate of 6% on most goods and services.',
    'MU': 'Mauritius has a standard VAT rate of 15% on most goods and services.',
    'JD': 'Jordan has a standard VAT rate of 16% on most goods and services.',
    'PL': 'Poland has a standard VAT rate of 23% with reduced rates of 8% and 5% for specific goods and services, and requires KSeF electronic invoicing.',
    'BE': 'Belgium has a standard VAT rate of 21% with reduced rates of 12%, 6% and 0% for specific goods and services.',
  };
  
  return countryDetails[countryCode] || '';
};