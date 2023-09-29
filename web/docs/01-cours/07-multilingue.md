---
title: Déploiement
description: Déploiement
hide_table_of_contents: true
---

# Multilingue, portrait / paysage

<Row>

<Column>

:::tip Avant la séance :

### Multilingue

Vous pouvez regarder la doc de Flutter en ligne sur l'internationalization [ici](https://flutter.dev/docs/development/accessibility-and-localization/internationalization).

Cependant, nous vous recommendons d'utiliser le plugin Jetbrains [Flutter Intl](https://plugins.jetbrains.com/plugin/13666-flutter-intl), qui automatise une partie non négligeable du travail de traduction.

### Portrait / Paysage

Vous devrez étudier l'exemple de code suivant sur le [les changements d'orientations](https://github.com/departement-info-cem/5N6-mobile-2-Nouveau/tree/main/code/portrait_paysage). Cherchez les TODOs pour les explications. Dans IntelliJ **View** > **Tool Windows** > **TODO**.


:::

</Column>

<Column>

:::info Séance  : Multilingue et OrientationBuilder

Nous regarderons comment utiliser le plugin de Jetbrains [Flutter Intl](https://plugins.jetbrains.com/plugin/13666-flutter-intl).

Nous regarderons comment utiliser l'OrientationBuilder pour contrôler les changements d'orientation.

:::


</Column>

</Row>

:::note Exercices

### Exercice multilingue_bizarre

Vous devez reproduire la mise en page de l'image suivante dans une appli Flutter appelée multilingue_bizarre. Rendre l'application disponible dans les langues suivantes:

- Francais
- Norvégien
- Japonais

<Row>

<Column>

![bizzare 1](_07-deploiement/biz1.png)

</Column>

<Column>

![bizzare 2](_07-deploiement/biz2.png)

</Column>

<Column>

![bizzare 3](_07-deploiement/biz3.png)

</Column>

</Row>

### Exercice plein_de_tailles

Reproduire les mises en page suivantes dans une appli Flutter appelée plein_de_tailles. Il sera essentiel que la mise en page soit jolie peu importe la taille de l'écran, l'orientation et la résolution.

Vous aurez probablement besoin d'utiliser le [OrientationBuilder](https://flutter.dev/docs/cookbook/design/orientation).

Tester votre application avec les appreils suivants:

- Nexus One
- Pixel 4 XL
- Pixel C
- Nexus 7 (2012)
- iPhone
- iPad

<Row>

<Column size="3">

![taille 1](_07-deploiement/taille1.png)

</Column>

<Column size="9">

![taille 2](_07-deploiement/taille2.png)

</Column>

</Row>

:::
