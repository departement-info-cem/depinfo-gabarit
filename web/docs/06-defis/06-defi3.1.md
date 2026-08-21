---
sidebar_position: 6
slug: /defis/defi-3-1
---

# Défi d'intégration 3.1 — Bilan d'un atelier d'aide

## Contexte

Le centre d'aide organise des ateliers de révision. Après chaque atelier, la personne responsable veut produire un court bilan de participation à partir du nom de l'atelier, du nombre de personnes présentes et du nombre de personnes absentes.

## Besoins

Crée une application console qui demande le nom d'un atelier, le nombre de personnes présentes et le nombre de personnes absentes. Elle doit produire un bilan contenant :

- le nombre total de personnes inscrites ;
- le pourcentage de présence ;
- un commentaire adapté à la participation.

Le pourcentage de présence est calculé ainsi : nombre de personnes présentes divisé par le nombre total de personnes inscrites, multiplié par 100. Utilise les commentaires suivants : `Excellente participation` à partir de `90 %`, `Bonne participation` de `75 %` à `89,99 %` et `Participation limitée` sous `75 %`.

## Valeurs à utiliser

Le nom de l'atelier est un texte non vide. Le nombre de personnes présentes et le nombre de personnes absentes sont des entiers de `0` ou plus, et leur somme doit être au moins `1`.

## Notions à utiliser

- fonctions avec paramètres et valeur de retour;
- conditions `if`, `else if` et `else`;
- calculs avec `double` et affichage d'un pourcentage.

## Contraintes

- Organise le programme en plusieurs fonctions, par exemple une fonction pour calculer le total, une autre pour calculer le pourcentage et une autre pour choisir le commentaire.
- Utilise les conditions pour choisir le commentaire final.
- Utilise un `double` pour les calculs de pourcentage.
- Les valeurs saisies sont des nombres entiers positifs ou nuls; suppose qu'au moins une personne est inscrite.

## Exemple de résultat

**Entrées saisies :** atelier `Révision de C#`, `4` personnes présentes et `1` personne absente.

```text
Atelier : Révision de C#
Personnes inscrites : 5
Présence : 80 %
Commentaire : Bonne participation
```

## Bonifications facultatives

- Ajouter la date de l'atelier au bilan.
- Afficher le nombre de personnes absentes en plus du pourcentage.

## Critères de réussite

- Le bilan est calculé correctement à partir des deux nombres saisis.
- Les fonctions ont des responsabilités claires.
- Le programme est compréhensible sans que son code soit expliqué ligne par ligne.

## Tests manuels et résultats attendus

- Entre l'atelier `Révision de C#`, `4` personnes présentes et `1` personne absente. **Résultat attendu :** le bilan affiche `5` personnes inscrites, `80 %` de présence et le commentaire `Bonne participation`.
- Entre l'atelier `Aide aux devoirs`, `0` personne présente et `3` personnes absentes. **Résultat attendu :** le bilan affiche `3` personnes inscrites, `0 %` de présence et le commentaire `Participation limitée`.
- Entre l'atelier `Préparation à l'examen`, `3` personnes présentes et `0` personne absente. **Résultat attendu :** le bilan affiche `3` personnes inscrites, `100 %` de présence et le commentaire `Excellente participation`.
