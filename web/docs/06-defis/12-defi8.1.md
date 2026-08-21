---
sidebar_position: 12
slug: /defis/defi-8-1
---

# Défi d'intégration 8.1 — Évaluation de prototypes robots

## Contexte

Un laboratoire teste quatre prototypes de robots selon trois critères : vitesse, précision et endurance. Chaque note est un nombre de points obtenu lors d'un test. L'équipe veut analyser les résultats afin de choisir le prototype le plus performant.

## Données de départ

Utilise un tableau 2D de notes et un tableau de noms pour les robots. Commence avec les données suivantes :

| Robot | Vitesse | Précision | Endurance |
| --- | ---: | ---: | ---: |
| Alpha | 12 | 10 | 14 |
| Bêta | 15 | 9 | 11 |
| Gamma | 8 | 16 | 12 |
| Delta | 13 | 11 | 13 |

## Besoins

Crée une application console qui permet, à partir d'un menu, de :

1. afficher toutes les notes dans un tableau lisible ;
2. calculer le total de points de chaque robot et trouver le prototype le plus performant ;
3. trouver la meilleure note de chaque épreuve ;
4. afficher les robots qui ont obtenu une note inférieure au seuil saisi, de `0` à `20` ;
0. quitter le programme.

## Valeurs à utiliser

Chaque note est un entier de `0` à `20`. Le seuil demandé à la personne qui utilise le programme est aussi un entier de `0` à `20`; utilise `12` dans les tests. Les trois critères sont toujours vitesse, précision et endurance, dans cet ordre.

## Notions à utiliser

- tableau 2D et boucles `for` imbriquées;
- fonctions pour chaque action du menu;
- `switch`, boucle `do while` ou `while`, et conditions.

## Contraintes

- Utilise des fonctions pour séparer les responsabilités du programme.
- Utilise les tableaux et les boucles plutôt que des calculs répétés à la main.
- Utilise des conditions pour traiter les égalités et les résultats faibles. En cas d'égalité pour le meilleur total, affiche le premier prototype rencontré dans le tableau.
- Le menu doit rester accessible jusqu'au choix de quitter.

## Exemple de résultat

**Données de départ :** utilise les quatre prototypes et leurs neuf notes présentés dans le tableau du défi. **Seuil saisi :** `12`.

```text
Prototype le plus performant : Delta
Total de Delta : 37 points
Meilleure note en vitesse : 15
Meilleure note en précision : 16
Meilleure note en endurance : 14
```

## Critères de réussite

- Tous les résultats sont obtenus à partir des tableaux.
- Le programme combine correctement les notions vues avant le TP2.
- L'affichage reste clair pour une personne qui ne connaît pas les données de départ.

## Tests manuels et résultats attendus

| Choix du menu et données à utiliser | Résultat attendu |
| --- | --- |
| Choix `1`, avec le tableau de départ Alpha/Bêta/Gamma/Delta | Les quatre robots et leurs trois notes sont affichés dans un tableau lisible. |
| Choix `2`, avec le tableau de départ | Totaux : Alpha 36, Bêta 35, Gamma 36, Delta 37; Delta est le prototype le plus performant avec 37 points. |
| Choix `3`, avec le tableau de départ | Meilleure note en vitesse : 15; précision : 16; endurance : 14. |
| Choix `4`, seuil `12`, avec le tableau de départ | Alpha, Bêta, Gamma et Delta sont signalés, car chacun possède au moins une note inférieure à 12. |
| Choix `2`, avec Alpha `12, 10, 14`; Bêta `15, 9, 11`; Gamma `8, 16, 12`; Delta `13, 11, 11` | Alpha et Gamma totalisent 36 points; Alpha est affiché comme prototype le plus performant, car il est le premier à avoir le meilleur total dans le tableau. |
| Choix `0` | Le programme se ferme. |
