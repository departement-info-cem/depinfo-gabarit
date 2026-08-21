---
sidebar_position: 9
slug: /defis/defi-5-1
---

# Défi d'intégration 5.1 — Palmarès du club de jeux

## Contexte

Le club de jeux du Cégep organise un tournoi de **Uno** de trois parties. Après le tournoi, il veut afficher le palmarès des membres. Chaque membre possède un nom et un nombre total de points accumulés pendant les trois parties; ces points sont déjà calculés et fournis dans le tableau.

## Données de départ

Utilise deux tableaux de même taille : un pour les noms et un pour le total de points au tournoi. Par exemple, `Amélie` avec `12` points signifie qu'elle a accumulé 12 points dans ses trois parties.

## Besoins

Crée une application console qui permet de :

- afficher le palmarès complet ;
- trouver la personne qui a obtenu le plus de points ;
- calculer la moyenne des points ;
- compter le nombre de personnes qui atteignent un seuil de `15` points ;
- afficher un message personnalisé pour la personne en première position.

## Notions à utiliser

- deux tableaux 1D de même longueur;
- boucle `for` pour utiliser le même indice dans les deux tableaux;
- fonctions, conditions et variables d'accumulation.

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

## Tests manuels et résultats attendus

Utilise temporairement les tableaux suivants :

```text
Noms   : Amélie, Bilal, Chloé
Points : 12, 19, 19
```

**Résultats attendus :**

- la moyenne est d'environ `16,67` points ;
- deux personnes atteignent un seuil de `15` points ;
- le programme traite l'égalité entre Bilal et Chloé de la façon que tu as choisie ;
- chaque nom est associé au bon nombre de points.

Teste ensuite un tableau qui contient une seule personne. **Résultat attendu :** cette personne est affichée comme première, sa moyenne est égale à son pointage et aucun autre nom n'apparaît.
