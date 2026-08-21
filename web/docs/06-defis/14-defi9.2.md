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

## Valeurs à utiliser

Chaque ligne du fichier contient un nom de tâche non vide, suivi d'un `;`, puis d'une durée entière supérieure à `0`. Par exemple : `Faire le laboratoire;55`.

## Notions à utiliser

- lecture d'un fichier texte ligne par ligne;
- séparation d'une ligne avec `Split(';')`;
- `TryParse`, boucles et variables d'accumulation.

## Contraintes

- Lis les données à partir du fichier, et non à partir de valeurs écrites directement dans le programme.
- Traite correctement les lignes incomplètes ou mal formées.
- Utilise des boucles, des conditions et des variables d'accumulation.
- Utilise le caractère `;` pour séparer le nom de la tâche et sa durée, comme dans le fichier d'exemple.

## Exemple de résultat

**Données lues dans `taches.txt` :** `Réviser les variables;25`, `Faire le laboratoire;55`, `Lire les notes de cours;20` et `Tester mon programme;35`.

```text
Nombre de tâches : 4
Total des minutes : 135
Durée moyenne : 33,75 minutes
Tâche la plus longue : Faire le laboratoire
```

## Critères de réussite

- Les statistiques correspondent au fichier lu.
- Le programme ne s'arrête pas brutalement à cause d'une ligne incorrecte.
- Les résultats sont faciles à comprendre.

## Tests manuels et résultats attendus

| Lignes du fichier `taches.txt` | Résultat attendu |
| --- | --- |
| `Réviser les variables;25`<br />`Faire le laboratoire;55`<br />`Lire les notes de cours;20`<br />`Tester mon programme;35` | 4 tâches; total de 135 minutes; moyenne de 33,75 minutes; tâche la plus longue : `Faire le laboratoire`; 2 tâches de 30 minutes ou plus. |
| Les quatre lignes ci-dessus, puis `Préparer mon sac;` | Le programme indique que la dernière ligne est mal formée, ne l'ajoute pas aux statistiques et conserve les mêmes résultats : 4 tâches et 135 minutes. |
