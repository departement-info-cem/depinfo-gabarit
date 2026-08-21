---
sidebar_position: 4
slug: /defis/defi-2-1
---

# Défi 2.1 — Tarif d'entrée au centre des sciences

## Contexte

Le centre des sciences offre des tarifs différents selon l'âge et le statut de la personne qui le visite. Une personne ne peut bénéficier que d'un seul tarif réduit.

## Règles de tarification

| Profil | Tarif |
| --- | ---: |
| Moins de 6 ans | Gratuit |
| De 6 à 17 ans | 8 $ |
| Étudiant ou étudiante de 18 ans et plus | 10 $ |
| 65 ans et plus | 9 $ |
| Autre adulte | 14 $ |

## Besoins

Crée un programme qui demande l'âge de la personne et, lorsque nécessaire, si elle possède une carte étudiante. Le programme doit afficher le tarif applicable et une courte explication.

## Contraintes

- Utilise des conditions pour appliquer les règles.
- Une personne de 65 ans ou plus reçoit le tarif aîné, même si elle est étudiante.
- Prévois un message clair si un âge impossible est fourni.

## Exemples à tester

- Une personne de 5 ans.
- Une personne de 16 ans.
- Une personne de 20 ans avec une carte étudiante.
- Une personne de 20 ans sans carte étudiante.
- Une personne de 72 ans.

## Critères de réussite

- Le bon tarif est affiché pour chaque profil.
- Les cas impossibles sont traités avec un message compréhensible.
- Le programme ne présente qu'un seul tarif par personne.

## Tests manuels à effectuer

| Âge | Carte étudiante | Résultat attendu |
| ---: | --- | --- |
| 5 | Non | Gratuit |
| 16 | Non | 8 $ |
| 20 | Oui | 10 $ |
| 20 | Non | 14 $ |
| 72 | Oui | 9 $ |

Teste aussi les âges `-1` et `150`. Ils doivent produire un message d'erreur plutôt qu'un tarif.
