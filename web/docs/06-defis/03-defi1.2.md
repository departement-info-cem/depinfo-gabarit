---
sidebar_position: 3
slug: /defis/defi-1-2
---

# Défi 1.2 — Calculer le coût d'une impression

## Contexte

Le comité étudiant prépare une activité et doit faire imprimer des affiches. L'imprimerie facture chaque page imprimée. Tu dois créer un petit programme qui calcule le coût de la commande.

Pour simplifier l'exercice, toutes les affiches ont le même nombre de pages et le prix par page est le même pour toute la commande. Les valeurs saisies seront valides : il n'est pas nécessaire de traiter les erreurs ou les cas particuliers.

## Besoins

Ton application console doit demander :

- le nombre d'affiches à imprimer ;
- le nombre de pages par affiche ;
- le prix d'une page.

Elle doit ensuite afficher :

- le nombre total de pages imprimées ;
- le coût total de la commande.

Utilise les calculs suivants :

1. `pages imprimées = nombre d'affiches × pages par affiche`;
2. `coût total = pages imprimées × prix d'une page`.

## Valeurs à utiliser

Le nombre d'affiches et le nombre de pages par affiche sont des entiers supérieurs à `0`. Le prix par page est un nombre décimal supérieur à `0`, par exemple `0,15`.

## Notions à utiliser

- variables `int` et `double`;
- lecture d'une valeur avec `Console.ReadLine()` et conversion avec `int.Parse()` ou `double.Parse()`;
- multiplication et affectation du résultat dans une variable.

## Contraintes

- Utilise des variables de types appropriés, notamment `int` pour les quantités et `double` pour le prix.
- Utilise `Console.ReadLine()` et la conversion nécessaire pour lire les valeurs.
- Affiche le prix avec deux chiffres après la virgule.
- N'utilise pas encore de conditions, de boucles ou de fonctions : le défi porte sur les variables et les opérations.

## Exemple de résultat

Avec `4` affiches, `2` pages par affiche et un prix de `0,15 $` par page :

```text
Nombre d'affiches : 4
Pages par affiche : 2
Prix par page : 0,15 $

Pages imprimées : 8
Coût total : 1,20 $
```

## Critères de réussite

- Les trois valeurs sont demandées et conservées dans des variables.
- Le nombre total de pages est exact.
- Le coût total est exact.
- Les unités et les montants sont clairement affichés.

## Tests manuels et résultats attendus

| Affiches | Pages par affiche | Prix par page | Résultat attendu |
| ---: | ---: | ---: | --- |
| 4 | 2 | 0,15 $ | 8 pages et 1,20 $ |
| 10 | 1 | 0,20 $ | 10 pages et 2,00 $ |

Refais ensuite le premier test avec `2` affiches au lieu de `4`. **Résultat attendu :** le programme affiche `4` pages imprimées et un coût total de `0,60 $`.
