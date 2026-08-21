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

**Entrées saisies :** choix de menu `1`, puis température `25` degrés Celsius.

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

| Choix du menu | Valeur saisie | Résultat attendu |
| ---: | --- | --- |
| 1 | `0` | 32 °F |
| 1 | `100` | 212 °F |
| 2 | `10` | Environ 6,21 miles |
| 3 | `100` | 72,00 $ US |
| 1 | `bonjour` | Message de saisie invalide, puis nouvelle demande ou retour au menu. |
| 9, puis 0 | Aucune valeur de conversion | Message indiquant que le choix 9 est invalide; le menu est réaffiché; le programme se ferme seulement après le choix 0. |
