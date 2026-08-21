---
sidebar_position: 9
slug: /defis/defi-5-1
---

# Défi d'intégration 5.1 — Bilan des pointages de Uno

## Contexte

Le club de jeux du Cégep organise un tournoi de **Uno** de trois parties. Après le tournoi, il veut afficher le bilan des pointages. Chaque membre possède un nom et un nombre total de points accumulés pendant les trois parties; ces points sont déjà calculés et fournis dans le tableau.

## Données de départ

Utilise deux tableaux de même taille : un pour les noms et un pour le total de points au tournoi. Place directement les noms et les pointages dans ces tableaux au début de ton programme; ne demande pas à la personne qui utilise le programme d'écrire les noms et les points dans la console.

Dans le premier tableau, place `Amélie`, `Bilal` et `Chloé`. Aux mêmes positions du deuxième tableau, place respectivement `12`, `19` et `19`.

`Amélie` avec `12` points signifie qu'elle a accumulé 12 points dans ses trois parties.

## Besoins

Crée une application console qui permet de :

- afficher le bilan complet dans l'ordre des tableaux ;
- trouver la personne qui a obtenu le plus de points ;
- calculer la moyenne des points ;
- compter le nombre de personnes qui atteignent un seuil de `15` points ;
- afficher un message personnalisé pour la personne en première position.

Tu n'as pas à trier les membres. Le premier membre des tableaux demeure affiché en premier, même si une autre personne possède plus de points.

## Valeurs à utiliser

Les noms sont des textes non vides. Les pointages sont des entiers de `0` ou plus. Le seuil à utiliser est toujours `15` points. En cas d'égalité pour le meilleur résultat, affiche la première personne rencontrée dans les tableaux.

## Notions à utiliser

- deux tableaux 1D de même longueur;
- boucle `for` pour utiliser le même indice dans les deux tableaux;
- fonctions, conditions et variables d'accumulation.

## Contraintes

- Organise le programme en fonctions.
- Utilise des boucles et des tableaux plutôt que de répéter le même code.
- Les deux tableaux doivent toujours être consultés au même indice.

## Exemple de résultat

**Tableaux initialisés dans le code :** noms `Amélie`, `Bilal`, `Chloé` et pointages `12`, `19`, `19`.

```text
Bilan des pointages de Uno
Amélie : 12 points
Bilal  : 19 points
Chloé  : 19 points

Meilleur résultat : Bilal, avec 19 points
Moyenne : 16,67 points
Membres avec 15 points ou plus : 2
Message : Bravo Bilal pour ta première position !
```

## Critères de réussite

- Les résultats affichés sont calculés à partir des tableaux.
- Le programme est découpé en fonctions utiles.
- Le bilan demeure lisible avec un nombre différent de membres.

## Tests manuels et résultats attendus

| Tableaux à initialiser dans le code | Résultat attendu |
| --- | --- |
| Tableau des noms : `Amélie`, `Bilal`, `Chloé`<br />Tableau des points : `12`, `19`, `19` | Moyenne : 16,67 points; 2 personnes atteignent 15 points; Bilal est premier, car il apparaît avant Chloé; chaque nom est associé au bon pointage. |
| Tableau des noms : `Maya`<br />Tableau des points : `8` | Maya est première; moyenne : 8 points; 0 personne atteint 15 points; aucun autre nom n'apparaît. |
| Tableau des noms : `Noah`, `Emma`, `Liam`, `Zoé`<br />Tableau des points : `10`, `17`, `14`, `21` | Les quatre lignes sont affichées dans cet ordre; moyenne : 15,50 points; 2 personnes atteignent 15 points; Zoé est première avec 21 points et reçoit le message personnalisé. |
