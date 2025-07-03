# depinfo-gabarit

Modèle de base pour un cours du département d'informatique du CÉGEP Édouard-Montpetit. 

L'objectif est de générer un site web pour un cours le plus simplement possible. Les pages de contenu sont écrites en Markdown.

Ce gabarit est simplement le projet de départ du produit [Docusaurus](https://docusaurus.io/) développé par l'équipe de Facebook, avec quelques configurations prédéfinies pour le département d'informatique du CÉGEP Édouard Montpetit. Nous vous encourageons fortement à aller jeter un coup d'oeil aux références ci-bas pour en apprendre davantage sur les possibilités qu'offre Docusaurus.

Voici une vidéo d'explication / démonstration de la plateforme : [vidéo](https://www.youtube.com/watch?v=fjfxCSLUgXY)

## Pour bien commencer

1. Sur Github, faite un *fork* de ce projet. Le standard de nomenclature au département est `sigle-nom-du-cours` ex : `4N6-Mobile`.
2. Clonez et ouvrez le projet forké dans votre éditeur de code préféré.
3. Dans l'onglet `Settings` de votre repository, dans la section **Pages**, dans la sous section **Build and deployment**, **Source**, sélectinonez `GitHub Actions`.
4. Dans l'onglet `Actions` de votre repository, acceptez le conditions pour le déploiement.
5. Le fichier `config.json` doit être modifié pour contenir les informations liées à votre cours. `nomUrl` doit correspondre au nom du repository Github créé.
6. Voir [Installation](#installation) et [Développement Local](#développement-local) pour voir comment démarrer le serveur (**à partir du répertoire *web***).
7. Modifiez les documents Markdown qui sont dans la répertoire `docs` selon vos besoins.
8. Profit

## Installation

### Prérequis

Vous devez avoir installé les logiciels suivants sur votre poste :

- [NodeJS](https://nodejs.org/en/download/prebuilt-installer)
- NPM (normalement inclus dans l'installation de NodeJS

### Instruction

Dans un terminal, déplacez vous dans le répertoire `web`.

```
$ cd web
```

Si ce n'est pas déjà fait, installez les dépendances avec NPM.

```
$ npm install
```

Démarrez le serveur local.

```
$ npm start
``` 

Cette commande démarre une serveur de développement local sur le port `3000` de votre machine personnelle et ouvre un navigateur avec l'adresse locale du site. Les changements effectués sur la documentation (`/docs`) sont automatiquement appliqués sur le site à la sauvegarde des fichiers. Les changements faits à la configuration (ex: `docusaurus.config.js`) nécessitent un redémarrage du projet.

## Déploiement

Tout le code poussé sur la branche `main` de ce dépôt est automatiquement déployée sur [https://info.cegepmontpetit.ca/nom-du-repo-github/](https://info.cegepmontpetit.ca/nom-du-repo-github/) à l'aide de Github Actions.

## Mise à jour de votre site de cours

Il est recommandé de mettre à jour votre site web de cours au moins une fois par année, c'est à dire d'aller chercher les derniers changements qui ont été ajoutés dans le gabarit. Pour ce faire, il est recommandé d'utiliser l'option de synchronisation entre fork de Github. Si vous êtes enseignant au département d'informatique au CÉGEP Édouard-Montpetit, Pierre-Olivier Brillant s'offre de s'occuper des mises à jour de vos site web, dans un délais de moins de 3 semaines après la demande.

## Avancé

Des composantes supplémentaires ont été développées par Pierre-Olivier Brillant. Vous pouvez vous référer à la section [Wiki](https://github.com/departement-info-cem/depinfo-gabarit/wiki) de ce repository, ou vous adresser directement à lui pour en savoir plus.

## Démonstrations

- [Gabarit](https://info.cegepmontpetit.ca/depinfo-gabarit/)
- [5N6](https://info.cegepmontpetit.ca/5N6-mobile-2/)

## Références

- [Guide Markdown de base](https://www.markdownguide.org/getting-started/)
- [Guide Markdown étendu pour Docusaurus](https://docusaurus.io/fr/docs/markdown-features)
