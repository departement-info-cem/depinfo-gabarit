---
title: Navigation
description: Flutter - Navigation
hide_table_of_contents: true
---

# Flutter et la navigation

<Row>

<Column>

:::tip Avant la séance : doc officielle et exemple

Vous pouvez lire la doc officielle [sur navigation et routing](https://flutter.dev/docs/development/ui/navigation). Flutter a récemment introduit une version 2.0 de la navigation **mais nous vous conseillons d'utiliser la version 1** pour l'instant car vous trouverez moins de soutien (prof, Google et stackoverflow) pour la nouvelle approche.

Vous devez également regarder le code de démo dans le repo ici: [démo de navigation](https://github.com/departement-info-cem/5N6-mobile-2-Nouveau/tree/main/code/navigation). Vous devez chercher les TODOs pour chercher les explications dans le code.

:::

</Column>

<Column>

:::info Séance

On discutera du concept de pile de navigation et des opérations de push et pop.

On regardera les avantages et inconvénients des route nommées ou pas dans un context mobile ou web.

On discutera des avantages et des inconvénients de passer des objets complexes ou uniquement des identifiants entre les écrans de notre application.

On regardera le comportement du Scaffold quand on ajouter un drawer.

:::

</Column>

</Row>

:::note Exercices

### Exercice simple_nav

Faites un premier écran qui contient un champ texte et un bouton. Quand on appuie sur le bouton, un deuxième écran part et on lui passe la valeur du champ texte.

Le deuxième écran affiche le contenu de la valeur qu'on vient de lui passer.

### Exercice liste_nav

Faites un premier écran qui contient 5 objets de type Truc contenant un **name** et un **id**.

Faites que l'appui sur un des éléments déclenche la navigation vers un deuxième écran qui affiche le truc.

:::
