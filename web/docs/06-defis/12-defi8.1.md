---
sidebar_position: 12
slug: /defis/defi-8-1
---

# Défi d'intégration 8.1 — Tournoi de robots

## Contexte

Quatre robots participent à trois épreuves : vitesse, précision et endurance. Les organisateurs veulent analyser les résultats avant de remettre les prix.

## Données de départ

Utilise un tableau 2D de notes pour représenter les résultats et un tableau de noms pour les robots. Choisis des données variées qui permettent de tester ton programme.

## Besoins

Crée une application console qui permet, à partir d'un menu, de :

- afficher toutes les notes dans un tableau lisible ;
- calculer le total de points de chaque robot ;
- trouver le robot gagnant ;
- trouver la meilleure note de chaque épreuve ;
- afficher les robots qui ont obtenu une note inférieure à un seuil donné.

## Contraintes

- Utilise des fonctions pour séparer les responsabilités du programme.
- Utilise les tableaux et les boucles plutôt que des calculs répétés à la main.
- Utilise des conditions pour traiter les égalités et les résultats faibles.
- Le menu doit rester accessible jusqu'au choix de quitter.

## Bonifications facultatives

- Ajouter une épreuve ou un robot.
- Donner un prix spécial à un robot régulier dans les trois épreuves.
- Permettre de modifier une note.

## Critères de réussite

- Tous les résultats sont obtenus à partir des tableaux.
- Le programme combine correctement les notions vues avant le TP2.
- L'affichage reste clair pour une personne qui ne connaît pas les données de départ.

## Tests manuels à effectuer

Utilise temporairement les données suivantes :

| Robot | Vitesse | Précision | Endurance |
| --- | ---: | ---: | ---: |
| Alpha | 12 | 10 | 14 |
| Bêta | 15 | 9 | 11 |
| Gamma | 8 | 16 | 12 |
| Delta | 13 | 11 | 13 |

Vérifie que :

- Delta gagne avec `37` points ;
- les meilleures notes des épreuves sont `15`, `16` et `14` ;
- avec un seuil de `12`, Alpha, Bêta et Gamma sont signalés au moins une fois ;
- le menu revient après chaque option.

Teste aussi deux robots avec le même total afin de vérifier ton traitement des égalités.
