---
title: Cours 4 - VS Code et fonctions
description: Projets Web avec Visual Studio Code, fonctions, alert(), console.log() et commentaires.
---

# Cours 4 - VS Code et fonctions

## 📝 Visual Studio Code

C'est un **éditeur de code** utilisable pour plein de langages, dont **HTML, CSS et JavaScript**. Nous l'utiliserons pour nos projets Web.

* 💰 Logiciel gratuit. [N'hésitez pas à l'installer à la maison](https://code.visualstudio.com/download).
* ✅ Déjà installé au Cégep. Prêt à être utilisé !
* 🔵 L'icône est bleue, et le bleu, c'est une couleur relaxante.

### 🌳 Structure d'un projet Web

Pour tous nos projets durant la session, nous utiliserons cette structure dans nos projets Web :

<center>![Structure d'un projet Web](../../static/img/cours4/projectFolder.png)</center>

### 📂 Ouvrir un projet avec VS Code

1. Fichier -> Ouvrir le dossier...

<center>![Ouvrir un projet dans VS Code](../../static/img/cours4/open1.png)</center>

2. Cliquer sur le dossier principal du projet, puis appuyer sur **Sélectionner un dossier**.

<center>![Ouvrir un projet dans VS Code](../../static/img/cours4/open2.png)</center>

Et voilà, le projet est **ouvert dans VS Code** et on a accès à tous ses **sous-dossiers** et **fichiers** dans l'interface :

<center>![Ouvrir un projet dans VS Code](../../static/img/cours4/open3.png)</center>

### 🔄 Alternative

On peut aussi simplement trouver le dossier principal du projet Web puis faire `clic-droit -> Ouvrir avec Code` !

<center>![Ouvrir un projet dans VS Code](../../static/img/cours4/open4.png)</center>

## 🔩 Fonctions

### 🤔 Qu'est-ce qu'une fonction ?

Commençons par un exemple mystérieux : lorsqu'on écrit `changerTexte()` dans la console... le contenu textuel du titre de cette page change 😱

<center>![Appel d'une fonction](../../static/img/cours4/magic.png)</center>

> Wohlala, comment c'est possible ? On n'a même pas utilisé `document.querySelector(...).textContent = ...` !

#### 💡 Explication

En réalité, `changerTexte()` est ce qu'on appelle une **fonction**. Une **fonction**, ça contient un **morceau de code** de notre choix.

Voici la **déclaration** de la **fonction** `changerTexte()`, que nous avions rédigée avant de l'utiliser dans la console :

```js
function changerTexte(){
    
    document.querySelector(".titre").textContent = "Meme cat";

}
```

Décortiquons un peu tout ce code :

* `function` est un **mot-clé obligatoire** qui indique qu'on souhaite « déclarer une fonction ».
* `changerTexte` est le **nom de la fonction**. On le choisit nous-mêmes !
* `()` Les **parenthèses vides** après le nom de la fonction sont **obligatoires**. Elles semblent inutiles pour le moment, c'est normal.
* `{ ... }` Les **accolades** sont **obligatoires** et permettent d'indiquer **où le code de la fonction commence** et **où le code de la fonction se termine**.

Le fait d'avoir **déclaré la fonction** nous permet de **l'appeler** à volonté. (Entre autre dans la console !) En gros, une fonction, c'est **un morceau de code réutilisable** créé par nous.

<center>![Appel d'une fonction](../../static/img/cours4/call.png)</center>

### 🔍 Où déclarer une fonction ?

À quel endroit doit-on rédiger la **déclaration de la fonction** ? (Le machin ci-dessous)

```js
function changerTexte(){
    
    document.querySelector(".titre").textContent = "Meme cat";

}
```

:::danger

Pas dans la console en tout cas ! 

Si nous déclarons la fonction dans la console, **elle n'existera plus lorsqu'on réactualisera la page** !

<center>![Déclaration de fonction dans la console](../../static/img/cours4/wrongPlace.png)</center>

:::

La fonction doit être **déclarée** dans un **fichier avec l'extension `.js`**, dans le dossier `js` de notre **projet Web**.


<center>![Déclaration de fonction dans un fichier js](../../static/img/cours4/functionDeclaration.png)</center>

:::note

Notez que pour pouvoir **appeler la fonction** dans la console d'une page Web spécifique, il faut avoir ajouté cette ligne dans le `<head>` de la page Web :

<center>![Importer script js](../../static/img/cours4/importScript.png)</center>

« `script.js` » correspond au fichier qui **contient la ou les déclarations de fonction**.

**Bonne nouvelle** : dans ce cours, cette opération sera toujours réalisée pour vous au préalable, donc vous n'aurez pas à le faire.

:::

### 🐥 Fonctions préexistantes

Certaines fonctions **existent déjà** en JavaScript sans qu'on ait besoin de les déclarer nous-mêmes.

Quelques exemples :

* `document.querySelector()` (que nous connaissons déjà)
* `alert()`
* `console.log()`

#### Afficher du texte dans une alerte avec `alert()`

La fonction `alert()` permet de créer un « pop-up » (une *alerte*) dans la page avec le **message de notre choix**.

Il suffit d'inclure une **chaîne de caractères** à l'intérieur des parenthèses. (N'oubliez pas les guillemets ! `" ... "`)

<center>![Alerte](../../static/img/cours4/alert.png)</center>

#### Afficher du texte dans la console avec `console.log()`

La fonction `console.log()` permet simplement d’afficher du texte dans la console du navigateur. Attention, en programmation, on dit parfois « **imprimer** du texte dans la console » plutôt que « afficher » !

Il suffit d'inclure une **chaîne de caractères** à l'intérieur des parenthèses. (N'oubliez pas les guillemets ! `" ... "`)

<center>![Message dans la console](../../static/img/cours4/consoleLog.png)</center>

### 💬 Commentaires

Les commentaires permettent de **rédiger des annotations dans le code.** Ils sont **ignorés** lorsque l'application est exécutée : c'est comme s'ils n'existaient pas ! Ça sert à laisser des **notes / descriptions** dans le code pour se retrouver. 🔍

Pour rédiger un **commentaire mono-ligne**, on utilise `//` au début du commentaire :

<center>![Commentaire](../../static/img/cours4/singleLine.png)</center>

Pour rédiger un **commentaire multi-ligne**, on utilise `/*` au **début** du commentaire et `*/` à la **fin** du commentaire :

<center>![Commentaire](../../static/img/cours4/multiLine.png)</center>

:::note

Dans les exemples ci-dessus, il faut comprendre que c'est comme si les variables `c` et `d` n'existaient pas ! Il sera impossible de les utiliser.

:::

### 🥚 Créer une fonction

#### 🔍 Étape 1

Premièrement, il faut trouver (ou créer) le fichier `script.js` dans notre projet Web, puisque c'est à l'intérieur qu'on devra **déclarer notre fonction**.

<center>![Fichier script.js](../../static/img/cours4/whereFile.png)</center>

#### 🦴 Étape 2

Deuxièmement, il faut **préparer la structure de la fonction** et la **nommer**.

Dans ce cas-ci, on a nommé la fonction `texteSalade` :

<center>![Déclaration de la fonction](../../static/img/cours4/saladFunction.png)</center>

:::danger

Une **erreur fréquente** lorsqu'on déclare une fonction est d'**oublier** une accolade ou **mal placer** les accolades :

<center>![Mal déclarer la fonction](../../static/img/cours4/messedUpBrackets.png)</center>

:::

#### 📝 Étape 3

Troisièmement, on doit **rédiger le code de la fonction**

Bien entendu, c'est nous qui décide ce que la fonction va faire. Par exemple, disons qu'on veut faire trois choses :

* Remplacer le texte `"est le meilleur chat"` par `"veut manger sa salade en paix."` dans la page.
* Afficher une **alerte** avec le message `"Texte changé !"`.
* Afficher le message `"Fonction terminée."` dans la **console**.

On va commencer par jeter un coup d'oeil au code HTML pour trouver la **classe** de l'élément dont on souhaite **changer le texte** :

```html
<p class="description">est le meilleur chat.</p>
```

Puis on va pouvoir écrire le code dans la fonction :

```js showLineNumbers
function texteSalade(){

    // Changer le texte dans la page
    document.querySelector(".description").textContent = "veut manger sa salade en paix.";

    // Afficher une alerte
    alert("Texte changé !");

    // Afficher un message dans la console
    console.log("Fonction terminée.");

}
```

#### 🔩 Étape 4

Quatrièmement : **tester** la fonction ! Il est possible qu'on ait fait des **erreurs** 🐞 ! Il faut s'assurer que ça fonctionne comme prévu.

Généralement, pour **tester une fonction**, on va **l'appeler dans la console** :

<center>![Tester la fonction](../../static/img/cours4/testingSalad.png)</center>

:::warning

N'oubliez jamais les **parenthèses vides** lorsque vous appelez une fonction ! Si vous oubliez les parenthèses, plutôt que **d'appeler** la fonction pour la tester, cela va seulement **afficher la fonction sans l'appeler** !

<center>![Mal tester la fonction](../../static/img/cours4/forgotParenthesis.png)</center>

:::