---
sidebar_position: 14
slug: /defis/defi-9-2
---

# Défi 9.2 — Analyseur de journal

## Contexte

Tu reçois un fichier texte nommé `taches.txt` contenant une courte liste de tâches terminées. Chaque ligne respecte le format `nom de la tâche;durée en minutes`.

## Fichier d'exemple

```text
Réviser les variables;25
Faire le laboratoire;55
Lire les notes de cours;20
Tester mon programme;35
```

## Besoins

Crée une application console qui lit ce fichier et affiche :

- le nombre de tâches lues ;
- le total des minutes ;
- la durée moyenne d'une tâche ;
- le nom de la tâche la plus longue ;
- le nombre de tâches qui durent au moins 30 minutes.

## Notions à mobiliser

- lecture d'un fichier texte ligne par ligne;
- séparation d'une ligne avec `Split(';')`;
- `TryParse`, boucles et variables d'accumulation.

## Contraintes

- Lis les données à partir du fichier, et non à partir de valeurs écrites directement dans le programme.
- Traite correctement les lignes incomplètes ou mal formées.
- Utilise des boucles, des conditions et des variables d'accumulation.
- Utilise le caractère `;` pour séparer le nom de la tâche et sa durée, comme dans le fichier d'exemple.

## Critères de réussite

- Les statistiques correspondent au fichier lu.
- Le programme ne s'arrête pas brutalement à cause d'une ligne incorrecte.
- Les résultats sont faciles à comprendre.

## Tests manuels et résultats attendus

Avec le fichier d'exemple, vérifie les résultats suivants :

| Élément | Résultat attendu |
| --- | --- |
| Nombre de tâches | 4 |
| Total des minutes | 135 |
| Durée moyenne | 33,75 minutes |
| Tâche la plus longue | Faire le laboratoire |
| Tâches de 30 minutes ou plus | 2 |

Ajoute ensuite une ligne incomplète, par exemple `Préparer mon sac;`. **Résultat attendu :** le programme reste fonctionnel, n'ajoute pas cette ligne aux statistiques et indique clairement que la ligne est mal formée.
