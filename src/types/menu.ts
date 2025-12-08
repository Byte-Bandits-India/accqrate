import { StaticImageData } from "next/image";

// ===================== Menu Related Types =====================
export interface SubItem {
  title: string;
  description: string;
  href: string;
  img?: string | StaticImageData;
  icon?: string | StaticImageData;
  stats?: string;
}

export interface Section {
  heading: string;
  description?: string;
  images?: string | StaticImageData;
  xl?: string | StaticImageData;
  subItems: SubItem[];
}

export interface Menu {
  id: string;
  title: string;
  type: "mega" | "simple" | "stories";
  sections: Section[];
}

export type MenuType = "mega" | "simple" | "stories";

// ===================== Country & Language Types =====================
export interface Country {
  code: string;
  name: string;
  flag: string;
  currency?: string;
  language?: string;
}

export interface Language {
  code: string;
  name: string;
  display: string;
  direction?: "ltr" | "rtl";
}

export interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  countries: Country[];
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
  languages: Language[];
  isInitialized: boolean;
}

// ===================== Component Props Types =====================
export interface LangCountryDropdownProps {
  show: boolean;
  setShow: (show: boolean) => void;
  align?: "left" | "right";
  className?: string;
  direction?: "up" | "down";
}

export interface MegaMenuProps {
  menu: Menu;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onItemClick: () => void;
  headerHeight: number;
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  img?: string | StaticImageData;
  href: string;
}

export interface ResourcesListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  description?: string;
  icon?: string | StaticImageData;
  img?: string | StaticImageData;
  href: string;
}

export interface SuccessStoriesListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  stats?: string;
  href: string;
}

// ===================== Header State Types =====================
export interface HeaderState {
  activeMenu: string;
  activeSection: string;
  isMobileMenuOpen: boolean;
  showLangCountryDropdown: boolean;
  headerHeight: number;
}

// ===================== Contact Info Types =====================
export interface ContactInfo {
  phone: string;
  salesText: string;
}

// ===================== Asset Path Types =====================
export interface AssetPathConfig {
  header: {
    logo: StaticImageData;
    line: {
      pro2: StaticImageData;
    };
    navbar: {
      image: {
        einvoicing: StaticImageData;
      };
      fill: {
        einvoicing: StaticImageData;
        einvoiceIntegration: StaticImageData;
      };
      outline: {
        blog: StaticImageData;
        announce: StaticImageData;
        faq: StaticImageData;
        tax: StaticImageData;
        event: StaticImageData;
        guidelines?: StaticImageData;
        updates?: StaticImageData;
        guide?: StaticImageData;
      };
    };
  };
}

// ===================== Hook Types =====================
export interface DynamicRoutingHook {
  createHref: (path: string) => string;
}

// ===================== Utility Types =====================
export type ImageSource = string | StaticImageData | undefined;

// Type guard for checking if an image is a StaticImageData
export const isStaticImageData = (image: any): image is StaticImageData => {
  return image && typeof image === 'object' && 'src' in image && 'height' in image && 'width' in image;
};

// Type guard for checking if an image is a string path
export const isImagePath = (image: any): image is string => {
  return typeof image === 'string';
};