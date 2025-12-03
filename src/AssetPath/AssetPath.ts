// HEADER (MEGA MENU)
import headerProLine from "@/assets/images/header/line/pro2.svg";
import einvoicingHeroImage from "@/assets/images/header/navbar/image/E-invoicing Solutions.webp";
import einvoicingIcon from "@/assets/images/header/navbar/fill/einvoicing.webp";
import einvoiceIntegrationIcon from "@/assets/images/header/navbar/fill/einvoice-integration.webp";
import sapIcon from "@/assets/images/header/navbar/fill/sap.webp";
import oracleIcon from "@/assets/images/header/navbar/fill/oracle.webp";
import microsoftIcon from "@/assets/images/header/navbar/fill/microsoft.webp";
import legacyIcon from "@/assets/images/header/navbar/fill/legacy.webp";
import homegrownIcon from "@/assets/images/header/navbar/fill/homegrown.webp";
import frameworkIcon from "@/assets/images/header/navbar/fill/framework.webp";
import Logo from "@/assets/images/header/fill/logo.svg";

// HEADER (RESOURCES)
import blogIcon from "@/assets/images/header/navbar/outline/blog.png";
import announceIcon from "@/assets/images/header/navbar/outline/announce.png";
import faqIcon from "@/assets/images/header/navbar/outline/faq.png";
import taxIcon from "@/assets/images/header/navbar/outline/tax.png";
import eventIcon from "@/assets/images/header/navbar/outline/event.png";

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
