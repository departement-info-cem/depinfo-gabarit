---
sidebar_position: 3
slug: /defis/defi-1-2
---

# Défi 1.2 — Prévoir le coût d'un trajet

## Contexte

Tu pars en voiture pour une activité à l'extérieur de Montréal. Avant de partir, tu veux prévoir combien le trajet coûtera en essence.

## Besoins

Crée une application console qui demande les informations nécessaires pour calculer le coût total d'un aller-retour. Elle doit ensuite afficher un résumé contenant au minimum :

- la distance totale parcourue ;
- la quantité d'essence nécessaire ;
- le coût total de l'essence ;
- le coût par personne, si les frais sont partagés.

## Contraintes

- Utilise des variables de types appropriés.
- Effectue les calculs avec des valeurs réelles lorsque nécessaire.
- Affiche les montants avec deux chiffres après la virgule.
- Le programme doit fonctionner avec au moins deux nombres différents de passagers.

## Exemple de résultat

```text
Distance aller-retour : 186 km
Essence nécessaire    : 14,88 L
Coût total            : 25,30 $
Coût par personne     : 6,32 $
```

## Critères de réussite

- Les calculs sont cohérents avec les valeurs saisies.
- Le résumé est clair et les unités sont indiquées.
- Les variables ont des noms représentatifs.

## Tests manuels à effectuer

| Distance aller-retour | Consommation | Prix par litre | Passagers | Résultat attendu |
| ---: | ---: | ---: | ---: | --- |
| 186 km | 8 L / 100 km | 1,70 $ | 4 | 14,88 L, environ 25,30 $ au total et 6,32 $ par personne |
| 100 km | 6 L / 100 km | 1,50 $ | 2 | 6 L, 9,00 $ au total et 4,50 $ par personne |

Vérifie aussi ce qui se passe si le nombre de passagers est `0`. Le programme ne doit pas effectuer une division par zéro.
