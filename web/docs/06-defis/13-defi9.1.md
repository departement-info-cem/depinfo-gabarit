---
sidebar_position: 13
slug: /defis/defi-9-1
---

# Défi 9.1 — Journal d'entraînement

## Contexte

Une personne souhaite conserver la trace de ses séances d'entraînement dans un fichier texte. Chaque séance doit être ajoutée au journal sans effacer les séances précédentes.

## Besoins

Crée une application console qui demande les informations d'une séance, puis les ajoute dans un fichier texte. Une séance doit contenir au minimum :

- la date ;
- le type d'activité ;
- la durée en minutes ;
- une note personnelle.

Le programme doit confirmer clairement que l'écriture a réussi et indiquer le nom ou l'emplacement du fichier utilisé.

## Contraintes

- Utilise l'écriture dans un fichier texte.
- Chaque séance doit occuper une ligne ou un bloc facile à relire.
- Ne remplace pas le contenu existant lorsque tu ajoutes une nouvelle séance.
- Valide les données numériques nécessaires avant de les écrire.

## Bonification facultative

Ajoute la possibilité de créer un nouveau journal ou de choisir le journal existant à compléter.

## Critères de réussite

- Une nouvelle séance est ajoutée sans effacer les autres.
- Le fichier est lisible avec un éditeur de texte.
- Les informations demandées sont complètes et bien présentées.

## Tests manuels à effectuer

1. Ajoute une séance de course de `45` minutes, puis ouvre le fichier avec un éditeur de texte pour confirmer que la séance est présente.
2. Ajoute une seconde séance de vélo de `30` minutes, puis vérifie que la première séance est toujours présente.
3. Entre une durée de `-10` ou un texte à la place de la durée. Le programme doit signaler une donnée invalide.
4. Vérifie que les informations de chaque séance sont séparées de façon lisible dans le fichier.
