---
sidebar_position: 6
slug: /defis/defi-3-1
---

# Défi d'intégration 3.1 — Résultat d'un tournoi

## Contexte

Après un tournoi de jeux de société, les organisateurs veulent remettre à chaque équipe un résumé personnalisé de sa performance.

## Besoins

Crée une application console qui demande le nom d'une équipe, le nombre de victoires, de défaites et de matchs nuls. Elle doit produire un bilan contenant :

- le nombre total de matchs joués ;
- le total de points de l'équipe ;
- son pourcentage de victoire ;
- un commentaire adapté à sa performance.

Choisis et affiche clairement la règle d'attribution des points. Par exemple, une victoire peut valoir plus qu'un match nul.

## Contraintes

- Organise le programme en plusieurs fonctions.
- Utilise les conditions pour choisir le commentaire final.
- Utilise des types de données appropriés pour les calculs de pourcentage.
- Refuse ou signale les nombres négatifs.

## Bonifications facultatives

- Afficher une appréciation spéciale pour une équipe invaincue.
- Comparer les résultats de deux équipes.
- Recommencer le programme pour une autre équipe.

## Critères de réussite

- Le bilan est calculé correctement.
- Les fonctions ont des responsabilités claires.
- Le programme est compréhensible sans que son code soit expliqué ligne par ligne.

## Tests manuels et résultats attendus

- Entre `4` victoires, `1` match nul et `1` défaite. **Résultat attendu :** le bilan affiche `6` matchs joués, le pourcentage correspondant et les points selon ta règle.
- Entre `0` victoire, `0` match nul et `3` défaites. **Résultat attendu :** le bilan affiche `3` matchs et un pourcentage de victoire de `0 %`.
- Entre `3` victoires, `0` match nul et `0` défaite. **Résultat attendu :** le bilan affiche `3` matchs; le commentaire pour une équipe invaincue apparaît si tu as réalisé cette bonification.
- Entre une valeur négative pour une victoire, un match nul ou une défaite. **Résultat attendu :** le programme signale le problème et n'affiche aucun bilan.

Vérifie les points selon la règle que tu as affichée dans ton programme.
