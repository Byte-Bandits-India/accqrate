// HEADER (MEGA MENU)
import headerProLine from "@/Assets/images/header/line/pro2.svg";
import einvoicingHeroImage from "@/Assets/images/header/navbar/image/E-invoicing Solutions.webp";
import einvoicingIcon from "@/Assets/images/header/navbar/fill/einvoicing.webp";
import einvoiceIntegrationIcon from "@/Assets/images/header/navbar/fill/einvoice-integration.webp";
import sapIcon from "@/Assets/images/header/navbar/fill/sap.webp";
import oracleIcon from "@/Assets/images/header/navbar/fill/oracle.webp";
import microsoftIcon from "@/Assets/images/header/navbar/fill/microsoft.webp";
import legacyIcon from "@/Assets/images/header/navbar/fill/legacy.webp";
import homegrownIcon from "@/Assets/images/header/navbar/fill/homegrown.webp";
import frameworkIcon from "@/Assets/images/header/navbar/fill/framework.webp";
import Logo from "@/Assets/images/header/fill/logo.svg";

// HEADER (RESOURCES)
import blogIcon from "@/Assets/images/header/navbar/outline/blog.png";
import announceIcon from "@/Assets/images/header/navbar/outline/announce.png";
import faqIcon from "@/Assets/images/header/navbar/outline/faq.png";
import taxIcon from "@/Assets/images/header/navbar/outline/tax.png";
import eventIcon from "@/Assets/images/header/navbar/outline/event.png";

const AssetPath = {

  header: {
    line: headerProLine,
    logo: Logo,

    einvoicing: {
      hero: einvoicingHeroImage,
      icons: {
        einvoicingIcon,
        einvoiceIntegrationIcon,
        sapIcon,
        oracleIcon,
        microsoftIcon,
        legacyIcon,
        homegrownIcon,
        frameworkIcon,
      },
    },

    resources: {
      blogIcon,
      announceIcon,
      faqIcon,
      taxIcon,
      eventIcon,
    },
  },
};

export default AssetPath;
