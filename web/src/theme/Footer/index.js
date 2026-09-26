import React, { useEffect } from "react";
import Footer from "@theme-original/Footer";

// Part du pied de page qui doit être visible pour que ses formes graphiques y
// entrent (voir custom.css).
const SEUIL = 0.75;

export default function FooterWrapper(props) {
  // Les formes entrent quand l'utilisateur arrive au pied de page et en
  // ressortent, hors de l'écran, dès qu'il le quitte, pour entrer de nouveau à
  // sa prochaine visite. Le pied de page est considéré quitté quand plus rien
  // n'en est visible : isIntersecting resterait vrai s'il touchait le bas de
  // l'écran, comme sous le contenu d'une page courte.
  useEffect(() => {
    const footer = document.querySelector("footer.footer");
    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (entree.intersectionRatio >= SEUIL) {
            footer.toggleAttribute("data-formes-visibles", true);
          } else if (entree.intersectionRatio === 0) {
            footer.toggleAttribute("data-formes-visibles", false);
          }
        }
      },
      { threshold: [0, SEUIL] },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return <Footer {...props} />;
}
