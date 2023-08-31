---
title: Image Client
description: Image - affichage côté client
hide_table_of_contents: true
---

# Flutter et l'affichage client

<Row>

<Column>

:::tip Avant la séance : doc officielle et exemple

Vous pouvez lire la doc officielle [sur la classe MediaQuery](https://api.flutter.dev/flutter/widgets/MediaQuery-class.html). La petite vidéo est intéressante pour avoir un apperçu des fonctionnalités.

Vous devez également regarder le code de démo dans le repo ici: [démo de l'affichage client](https://github.com/departement-info-cem/5N6-mobile-2-Nouveau/tree/main/code/image_client). Vous devez chercher les TODOs pour chercher les explications dans le code.

:::

</Column>

<Column>

:::info Séance

On regardera les avantages et inconvénients d'utiliser des images avec une taille fixe ou dynamique.

On discutera des avantages de redimensionner des images.

On discutera du "caching" des images.

:::

</Column>

</Row>

:::note Exercices

### Exercice grosse_image

Utiliser l'URL [https://4n6.azurewebsites.net/exos/image](https://4n6.azurewebsites.net/exos/image) pour afficher au moins 20 images dans un ListView

Ajouter un paramètre à l'URL pour s'assurer que chaque image ne provient pas du cache, ça devrait rendre le tout désagréable à l'utilisation puisque l'image fait 10.5 mb

### Exercice redimensionnement

Faire 3 pages où vous n'aurez qu'à afficher l'image [https://4n6.azurewebsites.net/exos/image](https://4n6.azurewebsites.net/exos/image) avec la taille la plus grande possible.

- La première page affichera l'image en basse résolution.
- La deuxième page affichera l'image en moyenne résolution.
- La dernière page affichera l'image en résolution maximale

### Exercice differentes_tailles

Faire 2 pages.

- La première affichera l'image [https://4n6.azurewebsites.net/exos/image](https://4n6.azurewebsites.net/exos/image) le 1/3 de la largeur de l'écran
- La deuxième page affichera une image sur la moitié de la hauteur et la moitié de la largeur.

Pour vous aider, regarder la propriété BoxFit.

:::
