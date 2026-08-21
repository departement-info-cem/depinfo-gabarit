---
sidebar_position: 13
slug: /defis/defi-9-1
---

# Défi 9.1 — Journal d'entraînement

## Contexte

Une personne souhaite conserver la trace de ses séances d'entraînement dans le fichier `C:\EspaceLabo\entrainement.txt`. Chaque séance doit être ajoutée au journal sans effacer les séances précédentes.

Chaque séance occupe une ligne et les champs sont séparés par le caractère `;`, dans cet ordre : date, activité, durée en minutes et note personnelle.

## Besoins

Crée une application console qui demande les informations d'une séance, puis les ajoute dans un fichier texte. Une séance doit contenir au minimum :

- la date ;
- le type d'activité ;
- la durée en minutes ;
- une note personnelle.

## Valeurs à utiliser

La date est un texte au format `AAAA-MM-JJ`, par exemple `2026-09-08`. L'activité doit être exactement `Course`, `Vélo` ou `Marche`. La durée est un entier supérieur à `0`. La note est un court texte qui ne contient pas le caractère `;`.

Pour ce défi, tu n'as pas à vérifier le format de la date ni le contenu de la note. Tu dois toutefois refuser une activité inconnue, une durée non numérique, nulle ou négative.

## Notions à utiliser

- lecture de texte avec `Console.ReadLine()`;
- validation d'un nombre avec `TryParse`;
- ajout de texte dans un fichier avec les méthodes vues au cours 9.1.

## Contraintes

- Utilise l'écriture dans un fichier texte.
- Chaque séance doit occuper une ligne facile à relire, avec les quatre champs dans le même ordre.
- Ne remplace pas le contenu existant lorsque tu ajoutes une nouvelle séance.
- Valide les données numériques nécessaires avant de les écrire.
- Écris exactement une ligne au format `date;activité;durée;note` lorsque les données sont valides.

## Exemple de résultat

**Entrées saisies :** date `2026-09-08`, activité `Course`, durée `45` minutes et note `Course au parc`.

```text
Date       : 2026-09-08
Activité   : Course
Durée      : 45 minutes
Note       : Course au parc
```

## Critères de réussite

- Une nouvelle séance est ajoutée sans effacer les autres.
- Le fichier est lisible avec un éditeur de texte.
- Les informations demandées sont complètes et bien présentées.

## Tests manuels et résultats attendus

Avant de commencer les tests, crée un fichier `C:\EspaceLabo\entrainement.txt` vide. Exécute ensuite les tests dans l'ordre du tableau.

| Date | Activité | Durée | Note | Résultat attendu |
| --- | --- | ---: | --- | --- |
| `2026-09-08` | `Course` | 45 | `Course au parc` | La console affiche les quatre valeurs avec les libellés de l'exemple; le fichier contient exactement `2026-09-08;Course;45;Course au parc`. |
| `2026-09-09` | `Vélo` | 30 | `Tour du quartier` | Le fichier contient maintenant deux lignes; la première est inchangée et la deuxième est `2026-09-09;Vélo;30;Tour du quartier`. |
| `2026-09-10` | `Natation` | 20 | `Test invalide` | Le programme affiche `Activité invalide.` et n'ajoute aucune ligne. Le fichier contient toujours deux lignes. |
| `2026-09-10` | `Marche` | -10 | `Test invalide` | Le programme affiche `Durée invalide.` et n'ajoute aucune ligne. Le fichier contient toujours deux lignes. |
| `2026-09-10` | `Marche` | `bonjour` | `Test invalide` | Le programme affiche `Durée invalide.` et n'ajoute aucune ligne. Le fichier contient toujours deux lignes. |
