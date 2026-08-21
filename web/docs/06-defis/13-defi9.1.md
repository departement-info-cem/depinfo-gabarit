---
sidebar_position: 13
slug: /defis/defi-9-1
---

# Défi 9.1 — Journal d'entraînement

## Contexte

Une personne souhaite conserver la trace de ses séances d'entraînement dans un fichier texte nommé `entrainement.txt`. Chaque séance doit être ajoutée au journal sans effacer les séances précédentes.

Chaque séance occupe une ligne et les champs sont séparés par le caractère `;`, dans cet ordre : date, activité, durée en minutes et note personnelle.

## Besoins

Crée une application console qui demande les informations d'une séance, puis les ajoute dans un fichier texte. Une séance doit contenir au minimum :

- la date ;
- le type d'activité ;
- la durée en minutes ;
- une note personnelle.

Le programme doit confirmer clairement que l'écriture a réussi et indiquer le nom ou l'emplacement du fichier utilisé.

## Notions à mobiliser

- lecture de texte avec `Console.ReadLine()`;
- validation d'un nombre avec `TryParse`;
- ajout de texte dans un fichier avec les méthodes vues au cours 9.1.

## Contraintes

- Utilise l'écriture dans un fichier texte.
- Chaque séance doit occuper une ligne facile à relire, avec les quatre champs dans le même ordre.
- Ne remplace pas le contenu existant lorsque tu ajoutes une nouvelle séance.
- Valide les données numériques nécessaires avant de les écrire.

## Bonification facultative

Ajoute la possibilité de créer un nouveau journal ou de choisir le journal existant à compléter.

## Critères de réussite

- Une nouvelle séance est ajoutée sans effacer les autres.
- Le fichier est lisible avec un éditeur de texte.
- Les informations demandées sont complètes et bien présentées.

## Tests manuels et résultats attendus

1. Ajoute une séance de course de `45` minutes. **Résultat attendu :** le programme confirme l'écriture et le fichier contient la date, `Course`, `45` et ta note.
2. Ajoute une seconde séance de vélo de `30` minutes. **Résultat attendu :** le fichier contient maintenant deux séances et la première séance est toujours présente.
3. Entre une durée de `-10` ou un texte à la place de la durée. **Résultat attendu :** le programme signale une donnée invalide et n'ajoute pas de séance incorrecte dans le fichier.
4. Ouvre le fichier avec un éditeur de texte. **Résultat attendu :** les informations de chaque séance sont séparées de façon lisible.
