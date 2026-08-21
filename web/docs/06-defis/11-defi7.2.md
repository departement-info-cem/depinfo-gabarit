---
sidebar_position: 11
slug: /defis/defi-7-2
---

# Défi 7.2 — Borne de conversion interactive

## Contexte

Une borne libre-service aide les visiteurs à convertir rapidement des unités. Elle doit rester ouverte jusqu'à ce que la personne choisisse de quitter.

Pour cet exercice, utilise ces taux fixes affichés dans le menu : `1 °C = 33,8 °F` selon la formule `F = C × 9 / 5 + 32`, `1 km = 0,621371 mile` et `1 $ CA = 0,72 $ US`. Le taux de change est volontairement fixé pour l'exercice et n'a pas besoin d'être mis à jour.

## Besoins

Crée une application console avec un menu qui offre au moins les choix suivants :

1. convertir des degrés Celsius en degrés Fahrenheit ;
2. convertir des kilomètres en miles ;
3. convertir des dollars canadiens en dollars américains ;
0. quitter le programme.

Après chaque conversion, le menu doit être affiché de nouveau.

## Valeurs à utiliser

Le choix du menu est un entier de `0` à `3`. Pour Celsius, accepte un nombre décimal, y compris une valeur négative. Pour les kilomètres et les dollars canadiens, accepte seulement un nombre décimal de `0` ou plus.

## Notions à utiliser

- `switch` pour le menu;
- boucle `while` ou `do while`;
- `TryParse` pour valider les nombres saisis.

## Contraintes

- Utilise `switch` pour traiter le choix du menu.
- Utilise une boucle `while` ou `do while` pour répéter le programme.
- Utilise `TryParse` afin de traiter les saisies non numériques sans faire planter le programme.
- Affiche un message utile lorsqu'un choix n'existe pas.

## Exemple de résultat

```text
1. Celsius vers Fahrenheit
2. Kilomètres vers miles
3. Dollars canadiens vers dollars américains
0. Quitter

Votre choix : 1
Température en Celsius : 25
Résultat : 77 °F
```

## Bonification facultative

Ajoute une option permettant de convertir une durée en minutes vers des heures et des minutes.

## Critères de réussite

- Le programme se répète jusqu'au choix de sortie.
- Les valeurs invalides sont gérées correctement.
- Chaque conversion donne un résultat clairement identifié.

## Tests manuels et résultats attendus

- Choisis Celsius vers Fahrenheit et entre `0` : le résultat doit être `32 °F`.
- Choisis Celsius vers Fahrenheit et entre `100` : le résultat doit être `212 °F`.
- Choisis kilomètres vers miles et entre `10` : le résultat doit être environ `6,21 miles`.
- Entre `bonjour` lorsqu'une valeur numérique est demandée. **Résultat attendu :** le programme affiche un message de saisie invalide puis redemande une valeur ou revient au menu.
- Entre un choix de menu inexistant, par exemple `9`, puis quitte avec `0`. **Résultat attendu :** le programme affiche un message indiquant que le choix est invalide, réaffiche le menu, puis se ferme seulement après `0`.

Pour la conversion de devises, vérifie le résultat avec le taux fixe de `0,72` affiché dans ton programme.
