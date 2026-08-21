---
sidebar_position: 9
slug: /defis/defi-5-1
---

# Défi d'intégration 5.1 — Palmarès du club de jeux

## Contexte

Le club de jeux du Cégep organise un tournoi de **Uno** de trois parties. Après le tournoi, il veut afficher le palmarès des membres. Chaque membre possède un nom et un nombre total de points accumulés pendant les trois parties; ces points sont déjà calculés et fournis dans le tableau.

## Données de départ

Utilise deux tableaux de même taille : un pour les noms et un pour le total de points au tournoi.

```text
Noms   : Amélie, Bilal, Chloé
Points : 12, 19, 19
```

`Amélie` avec `12` points signifie qu'elle a accumulé 12 points dans ses trois parties.

## Besoins

Crée une application console qui permet de :

- afficher le palmarès complet ;
- trouver la personne qui a obtenu le plus de points ;
- calculer la moyenne des points ;
- compter le nombre de personnes qui atteignent un seuil de `15` points ;
- afficher un message personnalisé pour la personne en première position.

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
- En cas d'égalité pour le meilleur résultat, affiche la première personne rencontrée dans les tableaux.

## Exemple de résultat

**Données de départ :** noms `Amélie`, `Bilal`, `Chloé` et pointages `12`, `19`, `19`.

```text
Palmarès du tournoi de Uno
Amélie : 12 points
Bilal  : 19 points
Chloé  : 19 points

Meilleur résultat : Bilal, avec 19 points
Moyenne : 16,67 points
```

## Bonifications facultatives

- Permettre d'ajouter un résultat.
- Afficher les membres dans l'ordre inverse.
- Ajouter une distinction pour les personnes au-dessus de la moyenne.

## Critères de réussite

- Les résultats affichés sont calculés à partir des tableaux.
- Le programme est découpé en fonctions utiles.
- Le palmarès demeure lisible avec plus de trois membres.

## Tests manuels et résultats attendus

| Noms | Points | Résultat attendu |
| --- | --- | --- |
| `Amélie, Bilal, Chloé` | `12, 19, 19` | Moyenne : 16,67 points; 2 personnes atteignent 15 points; Bilal est premier, car il apparaît avant Chloé; chaque nom est associé au bon pointage. |
| `Maya` | `8` | Maya est première; moyenne : 8 points; 0 personne atteint 15 points; aucun autre nom n'apparaît. |
