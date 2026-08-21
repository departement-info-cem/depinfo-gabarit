---
sidebar_position: 7
slug: /defis/defi-4-1
---

# Défi 4.1 — Préparation de trousses d'accueil

## Contexte

Le comité d'accueil prépare des trousses pour les nouvelles personnes inscrites. Chaque trousse contient le même nombre d'articles. Le comité veut afficher le nombre d'articles préparés après chaque trousse afin de suivre sa progression.

Chaque trousse contient le même nombre d'articles. Par exemple, avec `4` articles par trousse, la deuxième trousse correspond à `8` articles préparés au total, et non à `4` articles affichés une deuxième fois.

## Besoins

Crée une application console qui demande :

- le nombre d'articles dans une trousse ;
- le nombre de trousses à préparer.

Le programme doit afficher un tableau indiquant le numéro de chaque trousse et le nombre d'articles cumulés. Il doit ensuite afficher le nombre total d'articles préparés.

## Valeurs à utiliser

Le nombre d'articles par trousse et le nombre de trousses sont des entiers supérieurs à `0`.

## Notions à utiliser

- boucle `for`;
- variable d'accumulation ou calcul à partir de l'index de la boucle;
- conditions déjà vues pour vérifier les valeurs positives.

## Contraintes

- Utilise une boucle `for` pour produire le tableau.
- Les valeurs saisies doivent être positives.
- La mise en forme doit permettre de lire facilement les colonnes.

## Exemple de résultat

**Entrées saisies :** `4` articles par trousse et `4` trousses à préparer.

```text
Trousse    Articles cumulés
1          4
2          8
3          12
4          16
```

## Critères de réussite

- Une ligne est affichée pour chaque trousse.
- Le nombre d'articles cumulés et le total sont exacts.
- Les données invalides sont signalées clairement.

## Tests manuels et résultats attendus

| Articles par trousse | Nombre de trousses | Résultat attendu |
| ---: | ---: | --- |
| 4 | 4 | Quatre lignes : 4, 8, 12 et 16 articles cumulés |
| 6 | 1 | Une seule ligne à 6 articles cumulés |
| 0 | 4 | Le programme refuse la donnée et n'affiche aucun tableau. |
| 4 | -1 | Le programme refuse la donnée et n'affiche aucun tableau. |
