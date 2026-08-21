---
sidebar_position: 9
slug: /defis/defi-5-1
---

# Défi d'intégration 5.1 — Palmarès du club de jeux

## Contexte

Le club de jeux du Cégep veut afficher le palmarès de ses membres après une série de parties. Chaque membre possède un nom et un nombre de points.

## Données de départ

Utilise deux tableaux de même taille : un pour les noms et un pour les points. Tu peux choisir les données initiales.

## Besoins

Crée une application console qui permet de :

- afficher le palmarès complet ;
- trouver la personne qui a obtenu le plus de points ;
- calculer la moyenne des points ;
- compter le nombre de personnes qui atteignent un seuil choisi ;
- afficher un message personnalisé pour la personne en première position.

## Contraintes

- Organise le programme en fonctions.
- Utilise des boucles et des tableaux plutôt que de répéter le même code.
- Les deux tableaux doivent toujours être consultés au même indice.
- Prévois un comportement cohérent si plusieurs personnes ont le même meilleur résultat.

## Bonifications facultatives

- Permettre d'ajouter un résultat.
- Afficher les membres dans l'ordre inverse.
- Ajouter une distinction pour les personnes au-dessus de la moyenne.

## Critères de réussite

- Les résultats affichés sont calculés à partir des tableaux.
- Le programme est découpé en fonctions utiles.
- Le palmarès demeure lisible avec plus de trois membres.

## Tests manuels à effectuer

Utilise temporairement les tableaux suivants :

```text
Noms   : Amélie, Bilal, Chloé
Points : 12, 19, 19
```

Vérifie que :

- la moyenne est d'environ `16,67` points ;
- deux personnes atteignent un seuil de `15` points ;
- le programme traite l'égalité entre Bilal et Chloé de la façon que tu as choisie ;
- chaque nom est associé au bon nombre de points.

Teste ensuite un tableau qui contient une seule personne.
