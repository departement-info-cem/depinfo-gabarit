import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import {
  ProchainCoursNavbarItem,
  TpCourantNavbarItem,
} from "@site/src/components/NavigationRapide";

// Types d'éléments de navbar utilisables dans docusaurus.config.js
export default {
  ...ComponentTypes,
  "custom-prochainCours": ProchainCoursNavbarItem,
  "custom-tpCourant": TpCourantNavbarItem,
};
