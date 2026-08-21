---
sidebar_position: 12
slug: /defis/defi-8-1
---

# Défi d'intégration 8.1 — Évaluation de prototypes robots

## Contexte

Un laboratoire teste quatre prototypes de robots selon trois critères : vitesse, précision et endurance. Chaque note est un nombre de points obtenu lors d'un test. L'équipe veut analyser les résultats afin de choisir le prototype le plus performant.

## Données de départ

Utilise un tableau 2D de notes pour représenter les résultats et un tableau de noms pour les robots. Choisis des données variées qui permettent de tester ton programme.

## Besoins

Crée une application console qui permet, à partir d'un menu, de :

- afficher toutes les notes dans un tableau lisible ;
- calculer le total de points de chaque robot ;
- trouver le prototype le plus performant, c'est-à-dire celui dont le total des trois notes est le plus élevé ;
- trouver la meilleure note de chaque épreuve ;
- afficher les robots qui ont obtenu une note inférieure à un seuil donné.

## Notions à utiliser

- tableau 2D et boucles `for` imbriquées;
- fonctions pour chaque action du menu;
- `switch`, boucle `do while` ou `while`, et conditions.

## Contraintes

- Utilise des fonctions pour séparer les responsabilités du programme.
- Utilise les tableaux et les boucles plutôt que des calculs répétés à la main.
- Utilise des conditions pour traiter les égalités et les résultats faibles. En cas d'égalité pour le meilleur total, affiche le premier prototype rencontré dans le tableau.
- Le menu doit rester accessible jusqu'au choix de quitter.

## Bonifications facultatives

- Ajouter une épreuve ou un robot.
- Donner un prix spécial à un robot régulier dans les trois épreuves.
- Permettre de modifier une note.

## Critères de réussite

- Tous les résultats sont obtenus à partir des tableaux.
- Le programme combine correctement les notions vues avant le TP2.
- L'affichage reste clair pour une personne qui ne connaît pas les données de départ.

## Tests manuels et résultats attendus

Utilise temporairement les données suivantes :

| Robot | Vitesse | Précision | Endurance |
| --- | ---: | ---: | ---: |
| Alpha | 12 | 10 | 14 |
| Bêta | 15 | 9 | 11 |
| Gamma | 8 | 16 | 12 |
| Delta | 13 | 11 | 13 |

**Résultats attendus :**

- Delta est le prototype le plus performant avec `37` points ;
- les meilleures notes des épreuves sont `15`, `16` et `14` ;
- avec un seuil de `12`, Alpha, Bêta et Gamma sont signalés au moins une fois ;
- le menu revient après chaque option.

Teste aussi deux robots avec le même meilleur total. **Résultat attendu :** le programme affiche le premier de ces deux prototypes dans le tableau comme prototype le plus performant.
