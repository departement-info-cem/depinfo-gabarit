---
sidebar_position: 7
slug: /defis/defi-4-1
---

# Défi 4.1 — Tableau d'entraînement

## Contexte

Un entraîneur prépare une séance de course. Il veut afficher les distances cumulées à chaque tour de piste pour aider les athlètes à visualiser leur progression.

La longueur d'un tour est la même pour toute la séance. Par exemple, avec un tour de `400 m`, le deuxième tour correspond à une distance cumulée de `800 m`, et non à une distance de `400 m` affichée une deuxième fois.

## Besoins

Crée une application console qui demande :

- la longueur d'un tour de piste, en mètres ;
- le nombre de tours à effectuer.

Le programme doit afficher un tableau indiquant le numéro de chaque tour et la distance cumulée. Il doit ensuite afficher la distance totale parcourue.

## Contraintes

- Utilise une boucle `for` pour produire le tableau.
- Les valeurs saisies doivent être positives.
- La mise en forme doit permettre de lire facilement les colonnes.

## Exemple de résultat

```text
Tour    Distance cumulée
1       400 m
2       800 m
3       1200 m
4       1600 m
```

## Critères de réussite

- Une ligne est affichée pour chaque tour.
- La distance cumulée et le total sont exacts.
- Les données invalides sont signalées clairement.

## Tests manuels et résultats attendus

| Longueur d'un tour | Nombre de tours | Résultat attendu |
| ---: | ---: | --- |
| 400 m | 4 | Quatre lignes : 400 m, 800 m, 1200 m et 1600 m |
| 250 m | 1 | Une seule ligne à 250 m |

Teste également une longueur de tour de `0` et un nombre de tours négatif. **Résultat attendu :** le programme refuse la donnée et n'affiche aucun tableau d'entraînement.
