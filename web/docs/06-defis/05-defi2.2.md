---
sidebar_position: 5
slug: /defis/defi-2-2
---

# Défi 2.2 — Commande de pizzas

## Contexte

Une petite pizzeria prend les commandes par téléphone. Le personnel veut un programme qui calcule rapidement le montant à payer.

## Besoins

Crée une application console qui permet de calculer le coût d'une commande selon :

- la taille de la pizza ;
- le nombre de garnitures ;
- la présence ou non d'une livraison ;
- le taux de taxe.

Le programme doit présenter le sous-total, les taxes, les frais de livraison s'il y en a, puis le total final.

## Contraintes

- Découpe ton programme en plusieurs fonctions pertinentes.
- Au moins une fonction doit recevoir des paramètres et retourner une valeur.
- Les prix et les règles de livraison sont à choisir et à afficher clairement dans le programme.
- Les fonctions doivent éviter de dépendre inutilement de variables globales.

## Bonification facultative

Ajoute une promotion : la livraison devient gratuite à partir d'un montant minimal que tu détermines.

## Critères de réussite

- Le total est exact pour différentes combinaisons de commandes.
- Le programme est organisé en fonctions cohérentes.
- Les montants sont affichés avec deux décimales.

## Tests manuels à effectuer

Utilise les prix que tu as choisis dans ton programme, puis vérifie au minimum les situations suivantes :

- une petite pizza sans garniture, sans livraison ;
- une grande pizza avec trois garnitures et une livraison ;
- une commande dont le sous-total atteint le seuil de livraison gratuite, si tu as réalisé la bonification.

Pour chaque cas, calcule d'abord le sous-total, les taxes et les frais à la main. Le total affiché par le programme doit correspondre à ton calcul.
