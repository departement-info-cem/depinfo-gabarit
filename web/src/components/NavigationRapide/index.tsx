import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { usePluginData } from "@docusaurus/useGlobalData";
import {
  useActiveDocContext,
  useDocsVersionCandidates,
  useLayoutDocsSidebar,
} from "@docusaurus/plugin-content-docs/client";
import DefaultNavbarItem, {
  type Props as DefaultNavbarItemProps,
} from "@theme/NavbarItem/DefaultNavbarItem";
import sidebarDocs from "../MainDocsGrid/sidebarDocs";
import {
  dateDuJour,
  trouverProchainCours,
  trouverTpCourant,
  type TravailPratique,
} from "./navigationRapide";

interface Props extends DefaultNavbarItemProps {
  readonly sidebarId: string;
  readonly docsPluginId?: string;
}

/**
 * Lien vers le doc docIdCible, ou vers le premier doc de la sidebar s'il est
 * absent ou introuvable. Comme l'élément docSidebar de Docusaurus, il reste
 * actif sur toutes les pages de la sidebar.
 */
function LienSidebarNavbarItem({
  sidebarId,
  docsPluginId,
  docIdCible,
  label,
  ...props
}: Props & { docIdCible?: string }) {
  const { activeDoc } = useActiveDocContext(docsPluginId);
  const sidebarLink = useLayoutDocsSidebar(sidebarId, docsPluginId).link;
  const versions = useDocsVersionCandidates(docsPluginId);
  const docCible = docIdCible
    ? versions.flatMap((version) => version.docs).find((doc) => doc.id === docIdCible)
    : undefined;
  const to = docCible?.path ?? sidebarLink?.path;
  if (!to) {
    throw new Error(`La sidebar "${sidebarId}" ne contient aucun document vers lequel naviguer.`);
  }
  return (
    <DefaultNavbarItem
      exact
      {...props}
      isActive={() => activeDoc?.sidebar === sidebarId}
      label={label ?? sidebarLink?.label}
      to={to}
    />
  );
}

// La date du jour n'est connue que dans le navigateur : le rendu du build pointe
// vers le premier doc de la sidebar, puis le lien est ajusté une fois la page chargée.

/** Onglet menant au prochain cours selon l'horaire du premier prof défini dans sidebars.js */
export function ProchainCoursNavbarItem(props: Props) {
  const isBrowser = useIsBrowser();
  const docIdCible = isBrowser ? trouverProchainCours(sidebarDocs, dateDuJour()) : undefined;
  return <LienSidebarNavbarItem {...props} docIdCible={docIdCible} />;
}

/** Onglet menant au TP dont la remise (className d'un cours dans sidebars.js) est la plus proche */
export function TpCourantNavbarItem(props: Props) {
  const isBrowser = useIsBrowser();
  const { travauxPratiques = [] } = (usePluginData(
    "docusaurus-plugin-docs-metadata"
  ) ?? {}) as { travauxPratiques?: TravailPratique[] };
  const tpsDeLaSidebar = travauxPratiques.filter((tp) => tp.sidebar === props.sidebarId);
  const docIdCible = isBrowser
    ? trouverTpCourant(sidebarDocs, tpsDeLaSidebar, dateDuJour())
    : undefined;
  return <LienSidebarNavbarItem {...props} docIdCible={docIdCible} />;
}
