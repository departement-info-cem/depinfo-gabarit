---
sidebar_position: 10
slug: /defis/defi-6-2
---

# Défi 6.2 — Plan de salle

## Contexte

Une salle de spectacle possède quatre rangées de six sièges. Les rangées sont numérotées de 1 à 4 et les sièges de chaque rangée de 1 à 6. Un siège libre est représenté par le caractère `L` et un siège occupé par le caractère `O`.

## Données de départ

Crée un tableau 2D qui représente la salle illustrée dans l'exemple ci-dessous. Utilise seulement `L` pour un siège libre et `O` pour un siège occupé.

## Besoins

Ton programme doit :

- afficher le plan de salle sous forme de grille ;
- indiquer le nombre total de sièges libres ;
- indiquer le nombre de sièges occupés dans chaque rangée ;
- identifier la rangée qui possède le plus de sièges libres ;
- afficher un message si la salle est complète.

Si plusieurs rangées possèdent le même nombre maximal de sièges libres, affiche la première rangée rencontrée.

## Valeurs à utiliser

La salle comporte toujours `4` rangées de `6` sièges. Les rangées sont affichées de 1 à 4 et chaque case du tableau contient uniquement `L` ou `O`.

## Notions à utiliser

- tableau 2D;
- boucles `for` imbriquées pour parcourir les rangées et les sièges;
- variables de comptage et recherche d'un maximum.

## Contraintes

- Utilise un tableau 2D et des boucles imbriquées.
- Le plan doit être affiché à partir du tableau, et non écrit directement dans des `WriteLine`.
- Les calculs doivent fonctionner si le contenu de la salle change.

## Exemple de résultat

**Données de départ :** le plan de salle `L O L L O L / O O L L L O / L L L O L L / O L O O L L` présenté ci-dessus.

```text
Rangée 1 : L O L L O L
Rangée 2 : O O L L L O
Rangée 3 : L L L O L L
Rangée 4 : O L O O L L

Sièges libres : 15
Sièges occupés à la rangée 1 : 2
Sièges occupés à la rangée 2 : 3
Sièges occupés à la rangée 3 : 1
Sièges occupés à la rangée 4 : 3
Rangée avec le plus de sièges libres : rangée 3
```

## Critères de réussite

- La grille et les statistiques correspondent au tableau.
- Les boucles parcourent toutes les lignes et toutes les colonnes.
- Les messages sont clairs pour une personne qui ne voit pas le code.

## Tests manuels et résultats attendus

| Plan de salle à utiliser | Résultat attendu |
| --- | --- |
| `L O L L O L / O O L L L O / L L L O L L / O L O O L L` | 15 sièges libres; nombres occupés par rangée : 2, 3, 1 et 3; rangée 3 possède le plus de sièges libres. |
| `O O O O O O / O O O O O O / O O O O O O / O O O O O O` | 0 siège libre; 6 sièges occupés dans chacune des quatre rangées; la première rangée est identifiée comme celle qui possède le plus de sièges libres; message `La salle est complète.` |
| `L L L O O O / L L L O O O / L O O O O O / O O O O O O` | Les rangées 1 et 2 possèdent chacune 3 sièges libres; `Rangée avec le plus de sièges libres : rangée 1` est affiché. |
