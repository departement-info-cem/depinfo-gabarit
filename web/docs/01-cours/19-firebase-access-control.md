---
title: Contrôle d'accès Firebase
description: Firestore - contrôle d'accès et typage des données
hide_table_of_contents: true
---

# Firestore : Contrôle d'accès et typage des documents

<Row>

<Column>

:::tip Avant la séance :

Videos à regarder:

<Video url="https://youtu.be/bXVjxu5IRZY" />

<Video url="https://youtu.be/wySmSnwjpXo" />

:::

</Column>

<Column>

:::info Séance :

Nous allons discuter de comment rattacher les données à l'utilisateur même si le compte de connexion n'est pas dans les données de l'application

quel identifiant pour l'utilisateur, courriel, ID fourni par FireBase ?
Créer un compte dans le datastore qui utilise un identifiant de l'utilisateur
uniquement inclure l'identifiant dans les objets stockés dans le datastore

Nous discuterons des avantages de typer nos documents lors des différentes opérations avec la BD.

Pour voir comment récupérer le temps du serveur en Timestamp: [https://stackoverflow.com/questions/50632217/converting-timestamp](https://stackoverflow.com/questions/50632217/converting-timestamp) ServerValue.timestamp ou faire confiance au temps du client firebase.database.ServerValue.TIMESTAMP

:::

</Column>

</Row>

:::note Exercices

### Exercice save_user

À partir votre projet de test

Faire une application qui vous permet de se connecter à Firebase

Une fois connecté, sauvegarder l'utilisateur et ses informations dans le Firestore (nom et courriel)

### Exercice type_jeux

À partir votre projet de test

Créer une application qui vous permettra de créer des jeux (nom, type, plateforme, évaluation, date de sortie)

Les jeux devront être ratachés à un utilisateur.

Vous devrez créer une classe Jeu et faire le nécessaire pour utiliser la méthode withConverter.

:::
