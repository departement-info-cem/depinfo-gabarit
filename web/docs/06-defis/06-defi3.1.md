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

Le pourcentage de présence est calculé ainsi : nombre de personnes présentes divisé par le nombre total de personnes inscrites, multiplié par 100. Utilise les commentaires suivants : `Excellente participation` pour `90 %` ou plus; `Bonne participation` pour `75 %` ou plus lorsque le premier cas ne s'applique pas; `Participation limitée` dans les autres cas.

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
Personnes présentes : 4
Personnes absentes : 1
Personnes inscrites : 5
Présence : 80 %
Commentaire : Bonne participation
```

## Critères de réussite

- Le bilan est calculé correctement à partir des deux nombres saisis.
- Les fonctions ont des responsabilités claires.
- Le programme est compréhensible sans que son code soit expliqué ligne par ligne.

## Tests manuels et résultats attendus

| Nom de l'atelier | Présentes | Absentes | Résultat attendu |
| --- | ---: | ---: | --- |
| `Révision de C#` | 4 | 1 | Les valeurs 4 présentes et 1 absente sont affichées, puis 5 personnes inscrites, 80 % et `Bonne participation`. |
| `Aide aux devoirs` | 0 | 3 | Les valeurs 0 présente et 3 absentes sont affichées, puis 3 personnes inscrites, 0 % et `Participation limitée`. |
| `Préparation à l'examen` | 3 | 0 | Les valeurs 3 présentes et 0 absente sont affichées, puis 3 personnes inscrites, 100 % et `Excellente participation`. |
