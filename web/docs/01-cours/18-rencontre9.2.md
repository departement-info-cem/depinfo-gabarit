---
title: Cours 18 - Tableaux d'éléments
description: Tableaux d'éléments HTML
---

# Cours 18 - Tableaux d'éléments HTML

:::info

Rappel : on peut stocker un élément HTML dans une variable pour simplifier sa manipulation par la suite !

```js showLineNumbers
let elementMario = document.querySelector(".mario");

elementMario.style.borderColor = "red";
elementMario.textContent = "Mario brosse 🍷";
elementMario.title = "Plombier italien";
elementMario.style.color = "crimson";
elementMario.classList.add("peach"); // 🍑
```

<center>![Mario consterné](../../static/img/cours18/weary.png)</center>

:::

## 🎰 document.querySelectorAll

Disons qu'on souhaite modifier plusieurs éléments **avec la même classe**;;

```html
<p class="texte">Allo</p>
<p class="texte">Salut</p>
<p class="texte">Bonjour</p>
```

Solution : Ranger tous les éléments **avec la même classe** dans un **tableau** à l'aide de ...

```js
let elements = document.querySelectorAll(".classe");
```

<center>![Sélectionner tous les éléments avec une classe spécifique](../../static/img/cours18/all.png)</center>

<hr/>

Une fois qu'on a notre **tableau d'éléments**, on peut les modifier en utilisant leur **index** :

<center>![Sélectionner tous les éléments avec une classe spécifique](../../static/img/cours18/index.png)</center>

<hr/>

On peut aussi utiliser une **boucle** qui modifie les éléments de l'index `0` jusqu'à `tableau.length` :

<center>![Sélectionner tous les éléments avec une classe spécifique](../../static/img/cours18/loop.png)</center>

:::warning

Il faut bien comprendre la différence entre `querySelector()` et `querySelectorAll()` !

* `querySelector()` permet d'obtenir **un seul élément**. (Le **premier** dans la page Web avec la classe demandée)

<center>![Sélectionner un élément avec une classe spécifique](../../static/img/cours18/single.png)</center>

* `querySelectorAll()` permet d'obtenir un **tableau de plusieurs éléments** qui partagent tous la classe demandée.

<center>![Sélectionner tous les éléments avec une classe spécifique](../../static/img/cours18/many.png)</center>

:::