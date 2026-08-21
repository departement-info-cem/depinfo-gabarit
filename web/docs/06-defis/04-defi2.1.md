---
sidebar_position: 4
slug: /defis/defi-2-1
---

# Défi 2.1 — Tarif d'entrée au centre des sciences

## Contexte

Le centre des sciences offre des tarifs différents selon l'âge et le statut de la personne qui le visite. Une personne ne peut bénéficier que d'un seul tarif réduit.

Le programme demande l'âge en années complètes et une réponse oui/non pour la carte étudiante. La carte étudiante ne change le tarif que pour une personne de 18 à 64 ans.

## Règles de tarification

| Profil | Tarif |
| --- | ---: |
| Moins de 6 ans | Gratuit |
| De 6 à 17 ans | 8 $ |
| Étudiant ou étudiante de 18 à 64 ans | 10 $ |
| 65 ans et plus | 9 $ |
| Autre adulte | 14 $ |

## Besoins

Crée un programme qui demande l'âge de la personne et, lorsque nécessaire, si elle possède une carte étudiante. Le programme doit afficher le tarif applicable et une courte explication.

## Valeurs à utiliser

L'âge est un entier de `0` à `120`. Pour une personne de 18 à 64 ans, demande exactement `oui` ou `non` pour la carte étudiante. Pour les personnes de moins de 18 ans ou de 65 ans et plus, ne demande pas la carte : le tarif est déjà déterminé par l'âge.

## Notions à utiliser

- comparaisons numériques (`<`, `<=`, `>=`);
- conditions `if`, `else if` et `else`;
- opérateurs logiques pour combiner l'âge et la carte étudiante.

## Contraintes

- Utilise des conditions pour appliquer les règles.
- Une personne de 65 ans ou plus reçoit le tarif aîné, même si elle est étudiante. L'ordre des règles doit donc être respecté.
- Prévois un message clair si un âge impossible est fourni.

## Exemple de résultat

**Entrées saisies :** âge `20` et carte étudiante `oui`.

```text
Âge : 20
Carte étudiante (oui/non) : oui

Tarif applicable : 10 $
Raison : tarif étudiant
```

## Critères de réussite

- Le bon tarif est affiché pour chaque profil.
- Les cas impossibles sont traités avec un message compréhensible.
- Le programme ne présente qu'un seul tarif par personne.

## Tests manuels et résultats attendus

| Âge | Carte étudiante | Résultat attendu |
| ---: | --- | --- |
| 5 | Non demandée | `Tarif applicable : Gratuit` et raison liée à l'âge. |
| 16 | Non demandée | `Tarif applicable : 8 $` et raison `tarif jeunesse`. |
| 20 | `oui` | `Tarif applicable : 10 $` et raison `tarif étudiant`. |
| 20 | `non` | `Tarif applicable : 14 $` et raison `tarif adulte`. |
| 72 | Non demandée | `Tarif applicable : 9 $` et raison `tarif aîné`. |
| -1 | Non demandée | Un message d'erreur est affiché et aucun tarif n'est présenté. |
| 150 | Non demandée | Un message d'erreur est affiché et aucun tarif n'est présenté. |
