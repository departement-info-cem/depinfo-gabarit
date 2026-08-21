---
sidebar_position: 2
slug: /defis/defi-1-1
---

# Défi 1.1 — Billet de bienvenue

## Contexte

Une journée d'accueil est organisée pour les nouvelles personnes qui arrivent dans la technique. Tu dois créer un programme qui affiche un billet de bienvenue clair et agréable à lire dans la console.

Le billet est destiné à une personne précise : les valeurs du nom, du groupe, du local et de l'heure doivent être conservées dans des variables afin de pouvoir être facilement modifiées.

## Besoins

Ton programme doit afficher :

- un titre pour la journée d'accueil ;
- le nom de l'étudiant ou de l'étudiante ;
- son groupe ;
- le local du premier cours ;
- l'heure de début ;
- un court message d'encouragement.

Le résultat doit être encadré ou organisé de manière à ressembler à un vrai billet.

## Valeurs à utiliser

Pour la version de base, place dans des variables les valeurs de l'exemple : `Alex Tremblay`, groupe `1090`, local `B-321` et début `8 h 00`. Tu n'as pas à demander ces valeurs à la personne qui lance le programme.

## Notions à utiliser

- `Console.ReadLine()` et `Console.WriteLine()`;
- variables de type `string`;
- concaténation de texte avec l'opérateur `+`.

## Contraintes

- Utilise uniquement ce qui a été vu dans les premiers pas en C#.
- Le programme doit être lisible et chacune des informations doit apparaître sur une ligne appropriée.
- Choisis toi-même la mise en forme du billet.

## Exemple de résultat

**Valeurs placées dans les variables :** nom `Alex Tremblay`, groupe `1090`, local `B-321` et début `8 h 00`.

```text
====================================
     BIENVENUE EN TECHNIQUE INFO
====================================
Nom     : Alex Tremblay
Groupe  : 1090
Local   : B-321
Début   : 8 h 00

Bonne première journée !
```

## Critères de réussite

- Toutes les informations demandées sont présentes.
- L'affichage est bien organisé et facile à lire.
- Le programme démarre et se termine sans erreur.

## Tests manuels et résultats attendus

| Valeurs à utiliser | Résultat attendu |
| --- | --- |
| Nom `Alex Tremblay`, groupe `1090`, local `B-321`, début `8 h 00` | Les six informations demandées, le titre et le message d'encouragement apparaissent dans un seul billet lisible. |
| Nom `Mia`, groupe `1080`, même local et même heure | Seuls le nom et le groupe changent; le billet demeure bien aligné. |
