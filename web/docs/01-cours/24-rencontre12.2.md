---
title: Cours 24 - Texte et maths
description: Fonctions pour les chaînes de caractères, fonctions mathématiques et commenter ses fonctions
---

# Cours 24 - Texte et maths

Depuis le début de la session, nous avons vu quelques fonctions préexistantes en JavaScript : `Math.random()`, `alert(...)`, `console.log(...)`, etc

Aujourd'hui nous allons aborder plusieurs fonctions préexistantes qui permettent de **manipuler des chaînes de caractères** et de **faire des opérations mathématiques simples**.

Les fonctions abordées sont très **standardisées** à travers les différents langages de programmation. (En gros, des fonctions identiques ou similaires existent dans la plupart des langages de programmation !) Ainsi, les apprendre avec **JavaScript** vous sera utile pour d'autres langages aussi.

## 📝 Fonctions textuelles

### 📏 Longueur d'une chaîne

`.length` fonctionne aussi avec les **chaînes de caractères**, pas seulement avec les **tableaux** !

<center>![Fonctions textuelles](../../static/img/cours24/length.png)</center>

### 🤏 Sous-chaîne

`.substring()` retourne une « sous-chaîne » de caractères. On doit fournir **deux paramètres** à cette fonction 

* Le premier paramètre est l'**index** du premier caractère à **conserver**.
* Le deuxième paramètre est l'**index** du caractère où la sous-chaîne s'arrête. (Exclus !)

<center>![Fonctions textuelles](../../static/img/cours24/substring1.png)</center>

<hr/>

<center>![Fonctions textuelles](../../static/img/cours24/substring2.png)</center>

### ☝ Remplacer un segment

`.replace()` permet de remplacer **un** groupe de caractères. Cette fonction **retourne** la chaîne de caractère modifiée.

Il faut fournir **deux paramètres** :

* Le premier paramètre est le groupe de **1+ caractère(s) à remplacer**.
* Le deuxième paramètre est le groupe de remplacement.

<center>![Fonctions textuelles](../../static/img/cours24/replace.png)</center>

### ✋ Remplacer plusieurs segments

`.replaceAll()` est similaire à `.replace()`, mais elle remplace **toutes les occurences** du texte à remplacer. Cette fonction retourne la chaîne de caractères modifiée également.

Il faut fournir **deux paramètres** :

* Le premier paramètre est le groupe de **1+ caractère(s) à remplacer**.
* Le deuxième paramètre est le groupe de remplacement.

<center>![Fonctions textuelles](../../static/img/cours24/replaceAll.png)</center>

### 📢 Majuscules / 🤫 Minuscules

`.toLowerCase()` et `.toUpperCase()` retournent la chaîne de caractères, mais complètement en **minuscules / majuscules**. (Aucun impact sur les caractères qui ne sont pas des lettres)

<center>![Fonctions textuelles](../../static/img/cours24/majMin.png)</center>

### 🔍 Obtenir un caractère

`.charAt()` retourne le caractère situé à l’**index** de notre choix dans une chaîne de caractères.

Il faut fournir **un paramètre** : l'**index** du caractère souhaité.

<center>![Fonctions textuelles](../../static/img/cours24/charAt.png)</center>

## 🧮 Fonctions mathématiques

### ⚪ Arrondir

`Math.round()` retourne un nombre arrondi au **nombre entier le plus près**. 

<center>![Fonctions mathématiques](../../static/img/cours24/round.png)</center>

### 🔽🔼 Arrondir vers le bas / le haut

`Math.floor()` retourne un nombre toujours arrondi **vers le bas**.
`Math.ceil()` retourne un nombre toujours arrondi **vers le haut**.

<center>![Fonctions mathématiques](../../static/img/cours24/ceilFloor.png)</center>

### ⏬⏫ Minimum et maximum

`Math.max()` retourne la valeur **maximale** entre plusieurs nombres.
`Math.min()` retourne la valeur **minimale** entre plusieurs nombres.

<center>![Fonctions mathématiques](../../static/img/cours24/minMax1.png)</center>

<hr/>

<center>![Fonctions mathématiques](../../static/img/cours24/minMax2.png)</center>

### 🎲 Nombre aléatoire

Nous avons déjà abordé `Math.random()`, mais abordons des exemples un peu plus sophistiqués.

<center>![Fonctions mathématiques](../../static/img/cours24/random1.png)</center>

<hr/>

<center>![Fonctions mathématiques](../../static/img/cours24/random2.png)</center>

<hr/>

<center>![Fonctions mathématiques](../../static/img/cours24/random3.png)</center>

<hr/>

<center>![Fonctions mathématiques](../../static/img/cours24/random4.png)</center>

<hr/>

<center>![Fonctions mathématiques](../../static/img/cours24/random5.png)</center>

## 📜 Commenter ses fonctions

Nous connaissons les **commentaires** (`// ... `) depuis la séance 4, mais nous ne les avons jamais rédigés nous-mêmes.

Pendant le TP3, vous devrez créer vos propres fonctions et vous devrez les ... **commenter** !

:::warning

Lorsqu’on crée du code, c’est important de le commenter (le décrire) pour que nos collègues puissent comprendre et naviguer facilement notre travail.

:::

**Lignes directrices :**

* Décrire brièvement l’**utilité** de la fonction. (⛔ Sans entrer dans des détails trop techniques)
* Si la fonction reçoit des **paramètres**, que représentent-ils ?
* Si la fonction **retourne** une **valeur**, que représente-t-elle ?

### ✅ Bons exemples

<center>![Commentaire de fonction](../../static/img/cours24/comment1.png)</center>

<center>![Commentaire de fonction](../../static/img/cours24/comment2.png)</center>

<center>![Commentaire de fonction](../../static/img/cours24/comment3.png)</center>

### ❌ Mauvais exemples

Ci-dessous, les commentaires **décrivent TROP en détails les lignes de code** plutôt que de **résumer rapidement et clairement en français** les fonctions :

<center>![Commentaire de fonction](../../static/img/cours24/comment4.png)</center>

<center>![Commentaire de fonction](../../static/img/cours24/comment5.png)</center>

<hr/>

Ci-dessous, on oublie de parler des **paramètres** :

<center>![Commentaire de fonction](../../static/img/cours24/comment6.png)</center>

<hr/>

Ci-dessous, on oublie de parler de la **valeur retournée** :

<center>![Commentaire de fonction](../../static/img/cours24/comment7.png)</center>