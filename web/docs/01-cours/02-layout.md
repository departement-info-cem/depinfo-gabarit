---
title: Layout
description: Flutter - Mise en page
hide_table_of_contents: true
---

# Mise en page en Flutter

<Row>

<Column>

:::tip Avant la séance :

Vous pouvez regarder la doc de Flutter en ligne sur la mise en page [ici](https://flutter.dev/docs/development/ui/layout)

Vous devrez étudier l'exemple de code suivant sur la **[mise en page en taille fixe](https://github.com/departement-info-cem/5N6-mobile-2/tree/main/code/mise_en_page)**. Cherchez les TODOs pour les explications. Dans IntelliJ **View** > **Tool Windows** > **TODO**.

Vous regarderez l'exemple suivant de mise en **[page en scroll](https://github.com/departement-info-cem/5N6-mobile-2/tree/main/code/double_scroll)**

:::

</Column>

<Column>

:::info Séance 1 : listes

On regardera comment combiner des Row et Column pour obtenir la mise en page de l'exercice 1.

Nous parlerons du choix à faire entre une mise en page fixe qui utilise la taille de l'écran pour afficher tous les éléments nécessaires et une mise en page qui se base sur un défilement.

Vous compléterez les exercices pour vous pratiquer.

:::

</Column>

</Row>

:::note Exercices

### Exercice drapeau_italien

Drapeau italien. Vous devez faire une mise en page qui correspond au drapeau italien qui prend toute la hauteur de l'écran et où chaque couleur utilise un tiers de la largeur de l'écran.

![drapeau italien](_02-layout/italie.png)

### Exercice plein_de_containers

Faites un écran composé de:

- 10 containers
- prenant toute la largeur de l'écran
- d'une hauteur de 200
- qui se suivent verticalement dans un scroll
- chaque container a sa propre couleur
- vous devez avoir au moins 3 padding différents

### Exercice pas_si_simple

<Row>

<Column size="9">

Vous devez reproduire la mise en page de l'image suivante dans une appli Flutter appelée pas_si_simple.

Le bloc rouge doit faire 200 de haut et prendre les 2/3 de l'écran. Le bouton du bas doit être en bas.

Indice, vous allez surement mettre des Row dans des Column dans des Row dans des Column

</Column>

<Column size="3">

![simple](_02-layout/simple.png)

</Column>

</Row>

:::
