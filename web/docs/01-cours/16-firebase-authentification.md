---
title: Authentification Firebase
description: Firebase - authentification
hide_table_of_contents: true
---

# Firebase : comptes et authentification

<Row>

<Column>

:::tip Avant la séance :

Regardez la doc de [firebase authentication](https://firebase.google.com/docs/auth/flutter/start). Nous vous recommandons d'y passer un maximum de 20 minutes. Il vaut lire un peu, coder puis relire en profondeur que de lire de la doc 4 heures sans coder.

Dans le projet, nous allons utiliser la connexion avec des comptes Google. On va suivre les indications **[ici](notice-firebase-auth)**

ATTENTION, les étapes **[spécifiques à Android](notice-firebase-auth#configuration-google_sign_in-pour-android)** sont à répéter pour chaque nouveau poste de travail.

:::

</Column>

<Column>

:::info Séance

Authentifier un utilisateur ne nécessite pas forcément de lui demander de créer un compte. On peut utiliser des comptes existants sur Google, Facebook etc.

Firebase Auth cherche à rendre facile ces différentes options en unifiant l'authentification le plus possible. En combinant avec Flutter qui unifie le dev ios et android, on peut obtenir une appli multi-plateforme qui gère une multitude de comptes possibles

Nous allons passer à travers l'ensemble des types d'auth possibles avec firebase

- anonyme
- courriel + code
- compte gérés : avec inscription et tout
- facebook, google etc

:::

</Column>

</Row>
