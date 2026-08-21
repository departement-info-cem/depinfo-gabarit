---
sidebar_position: 5
slug: /defis/defi-2-2
---

# Défi 2.2 — Commande de pizzas

## Contexte

Une petite pizzeria prend les commandes par téléphone. Le personnel veut un programme qui calcule rapidement le montant à payer.

Pour que les calculs soient comparables, utilise ces règles : petite pizza à `12,00 $`, grande pizza à `18,00 $`, chaque garniture coûte `1,50 $`, la livraison coûte `5,00 $` et la taxe est de `14,975 %`. Le montant taxable comprend la pizza, les garnitures et la livraison; la taxe est calculée sur ce montant.

## Besoins

Crée une application console qui permet de calculer le coût d'une commande selon :

- la taille de la pizza ;
- le nombre de garnitures ;
- la présence ou non d'une livraison.

Le programme doit présenter le prix de la pizza et des garnitures, les frais de livraison, le montant taxable, les taxes, puis le total final.

Utilise les calculs suivants :

1. `pizza et garnitures = prix de la taille + nombre de garnitures × 1,50 $`;
2. `montant taxable = pizza et garnitures + frais de livraison`;
3. `taxes = montant taxable × 14,975 %`;
4. `total à payer = montant taxable + taxes`.

## Valeurs à utiliser

- Taille : demande `P` pour une petite pizza à `12,00 $` ou `G` pour une grande pizza à `18,00 $`.
- Garnitures : demande un entier de `0` ou plus; chaque garniture ajoute `1,50 $`.
- Livraison : demande exactement `oui` ou `non`; une livraison ajoute `5,00 $`.
- Taxe : ne demande pas cette valeur. Utilise une constante de `14,975 %` sur le montant taxable.

Pour ce défi, suppose que les saisies respectent ces valeurs. Tu n'as pas à traiter une taille inconnue, un nombre négatif ou une réponse différente de `oui` et `non`.

## Notions à utiliser

- fonctions avec paramètres;
- au moins une fonction qui retourne une valeur;
- conditions et opérations arithmétiques déjà vues.

## Contraintes

- Découpe ton programme en plusieurs fonctions pertinentes.
- Au moins une fonction doit recevoir des paramètres et retourner une valeur.
- Utilise les libellés de l'exemple et affiche les montants avec deux décimales.
- Les fonctions doivent éviter de dépendre inutilement de variables globales.

## Exemple de résultat

**Entrées saisies :** taille `G`, `3` garnitures et livraison `oui`.

```text
Pizza et garnitures       : 22,50 $
Frais de livraison        : 5,00 $
Montant taxable           : 27,50 $
Taxes                     : 4,12 $
Total à payer             : 31,62 $
```

## Critères de réussite

- Le total est exact pour différentes combinaisons de commandes.
- Le programme est organisé en fonctions cohérentes.
- Les montants sont affichés avec deux décimales.

## Tests manuels et résultats attendus

| Taille | Garnitures | Livraison | Résultat attendu |
| --- | ---: | --- | --- |
| `P` | 0 | `non` | `Pizza et garnitures : 12,00 $`; `Frais de livraison : 0,00 $`; `Montant taxable : 12,00 $`; `Taxes : 1,80 $`; `Total à payer : 13,80 $`. |
| `G` | 3 | `oui` | `Pizza et garnitures : 22,50 $`; `Frais de livraison : 5,00 $`; `Montant taxable : 27,50 $`; `Taxes : 4,12 $`; `Total à payer : 31,62 $`. |
| `P` | 2 | `oui` | `Pizza et garnitures : 15,00 $`; `Frais de livraison : 5,00 $`; `Montant taxable : 20,00 $`; `Taxes : 3,00 $`; `Total à payer : 23,00 $`. |
