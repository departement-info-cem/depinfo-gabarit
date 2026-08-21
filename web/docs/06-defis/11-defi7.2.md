---
sidebar_position: 11
slug: /defis/defi-7-2
---

# Défi 7.2 — Borne de conversion interactive

## Contexte

Une borne libre-service aide les visiteurs à convertir rapidement des unités. Elle doit rester ouverte jusqu'à ce que la personne choisisse de quitter.

## Besoins

Crée une application console avec un menu qui offre au moins les choix suivants :

1. convertir des degrés Celsius en degrés Fahrenheit ;
2. convertir des kilomètres en miles ;
3. convertir des dollars canadiens en dollars américains ;
0. quitter le programme.

Après chaque conversion, le menu doit être affiché de nouveau.

## Contraintes

- Utilise `switch` pour traiter le choix du menu.
- Utilise une boucle `while` ou `do while` pour répéter le programme.
- Utilise `TryParse` afin de traiter les saisies non numériques sans faire planter le programme.
- Affiche un message utile lorsqu'un choix n'existe pas.

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

Pour la conversion de devises, vérifie les résultats avec le taux que tu as choisi et affiché.
