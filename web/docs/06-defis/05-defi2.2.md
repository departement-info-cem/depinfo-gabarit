---
sidebar_position: 5
slug: /defis/defi-2-2
---

# Défi 2.2 — Commande de pizzas

## Contexte

Une petite pizzeria prend les commandes par téléphone. Le personnel veut un programme qui calcule rapidement le montant à payer.

Pour que les calculs soient comparables, utilise ces règles : petite pizza à `12,00 $`, grande pizza à `18,00 $`, chaque garniture coûte `1,50 $`, la livraison coûte `5,00 $` et la taxe est de `14,975 %`. Le sous-total comprend la pizza, les garnitures et la livraison; la taxe est calculée sur ce sous-total.

## Besoins

Crée une application console qui permet de calculer le coût d'une commande selon :

- la taille de la pizza ;
- le nombre de garnitures ;
- la présence ou non d'une livraison.

Le programme doit présenter le sous-total, les taxes, les frais de livraison s'il y en a, puis le total final.

## Valeurs à utiliser

- Taille : demande `P` pour une petite pizza à `12,00 $` ou `G` pour une grande pizza à `18,00 $`.
- Garnitures : demande un entier de `0` ou plus; chaque garniture ajoute `1,50 $`.
- Livraison : demande exactement `oui` ou `non`; une livraison ajoute `5,00 $`.
- Taxe : ne demande pas cette valeur. Utilise une constante de `14,975 %` sur le sous-total.

## Notions à utiliser

- fonctions avec paramètres;
- au moins une fonction qui retourne une valeur;
- conditions et opérations arithmétiques déjà vues.

## Contraintes

- Découpe ton programme en plusieurs fonctions pertinentes.
- Au moins une fonction doit recevoir des paramètres et retourner une valeur.
- Affiche clairement les prix et les règles utilisées dans le programme.
- Les fonctions doivent éviter de dépendre inutilement de variables globales.

## Exemple de résultat

Pour une grande pizza avec trois garnitures et une livraison :

```text
Pizza et garnitures       : 22,50 $
Frais de livraison        : 5,00 $
Sous-total avec livraison : 27,50 $
Taxes                     : 4,12 $
Total à payer             : 31,62 $
```

## Bonification facultative

Ajoute une promotion : la livraison devient gratuite à partir d'un montant minimal que tu détermines.

## Critères de réussite

- Le total est exact pour différentes combinaisons de commandes.
- Le programme est organisé en fonctions cohérentes.
- Les montants sont affichés avec deux décimales.

## Tests manuels et résultats attendus

Utilise les prix fixés dans la section « Contexte », puis vérifie au minimum les situations suivantes :

- une petite pizza sans garniture, sans livraison ;
- une grande pizza avec trois garnitures et une livraison ;
- une commande dont le sous-total atteint le seuil de livraison gratuite, si tu as réalisé la bonification.

Pour chaque cas, calcule d'abord le sous-total, les taxes et les frais à la main. **Résultat attendu :** le reçu affiche ces quatre montants séparément et le total affiché correspond exactement à ton calcul.
