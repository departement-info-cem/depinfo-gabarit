---
description: Travailler avec des tableaux en 2 dimensions
---

# Tableaux 2D

## 1️⃣ Rappel : Tableaux 1D

Un tableau **1D** permet de stocker une liste d’éléments.

Reprenons notre exemple du cours sur les tableaux 1D et imaginons que nous devions stocker les notes de 5 étudiants. Sans tableau, nous aurions :

```csharp
int note1 = 85;
int note2 = 90;
int note3 = 78;
int note4 = 92;
int note5 = 88;
```

La **Solution** était alors d'utiliser un un tableau **1D** permettant de stocker toutes les valeurs :

```csharp
int[] notes = { 85, 90, 78, 92, 88 };
```

---

## 2️⃣ Limites d’un tableau 1D

Parfois, les données que nous manipulons sont naturellement organisées en lignes et colonnes.

Poussons notre exemple plus loin et essayons maintenant de stocker tous les notes de chaque élève d'une classe. Avec un simple tableau **1D** nous aurions :

```csharp
int[] notesEleve1 = { 85, 90, 78, 92, 88, 99 };
int[] notesEleve2 = { 72, 81, 95, 68, 74, 44 };
int[] notesEleve3 = { 88, 79, 84, 91, 77, 37 };
int[] notesEleve4 = { 93, 87, 90, 85, 89, 78 };
int[] notesEleve5 = { 65, 70, 72, 60, 68, 21 };
```

❌ **Inconvénients** :
- Trop de variables à déclarer (encore).
- Difficile à traiter automatiquement (par exemple pour calculer la moyenne de la classe).
- Impossible de retourner tous les notes des élèves depuis une fonction.

✅ **Solution** : utiliser un seul conteneur capable de stocker toutes les valeurs : **un tableau 2D**.

---

## 3️⃣ Introduction sur les tableaux 2D

### 🧠 Définition 

Pour definir un tableau à plusieurs dimensions, il suffit d'initialiser un tableau a une dimension, puis d'y ajouter une virgule pour chaque dimension additionnel. Voici un exemple :

```csharp
type[] variable; // Tableau à 1 dimension
type[,] variable; // Tableau à 2 dimension
type[,,] variable; // Tableau à 3 dimension
...
type[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,] variable; // Tableau à 32 dimension

```
:::warning 
en C#, les tableaux sont limités à 32 dimensions. Il est tout fois important de noter qu'il est très rare d'utiliser des tableaux avec plus de 2D. 
:::

### ✅ Solution

Pour regrouper tous les notes des élèves en une seule variable, il faut donc créer un tableau a deux dimensions. La première dimension servira pour les notes, et la seconde dimension servira pour chaque élève. Voyons comment definir un tableau de notes d'élèves :

```csharp
int[,] notesEleves = {
    { 85, 90, 78, 92, 88, 99 }, // Élève 1
    { 72, 81, 95, 68, 74, 44 }, // Élève 2
    { 88, 79, 84, 91, 77, 37 }, // Élève 3
    { 93, 87, 90, 85, 89, 78 }, // Élève 4
    { 65, 70, 72, 60, 68, 21 }  // Élève 5
  };
```
👉 Avec un tableau **2D**, tout est regroupé sous une seule variable nommée (`notesEleves`). On peut ainsi accéder facilement à chaque élément. Dans le cas suivant, nous avons maintenant un tableau à multiple dimensions, possedant 5 rangées et 6 colonnes.

---

## 4️⃣ Visualisation d’un tableau 2D

Lorsqu'il est mention d'un tableau a deux dimensions, les dimensions sont généralement nommé rangées et colonnes, puisqu'il est facile de s'imaginer un tableau, selon la représentation visuelle suivante :

```
                            Notes
                 1    2    3    4    5    6
              ┌────┬────┬────┬────┬────┬────┐
          1   │ 85 │ 90 │ 78 │ 92 │ 88 │ 99 │
              ├────┼────┼────┼────┼────┼────┤
          2   │ 72 │ 81 │ 95 │ 68 │ 74 │ 44 │
              ├────┼────┼────┼────┼────┼────┤
Élèves    3   │ 88 │ 79 │ 84 │ 91 │ 77 │ 37 │
              ├────┼────┼────┼────┼────┼────┤
          4   │ 93 │ 87 │ 90 │ 85 │ 89 │ 78 │
              ├────┼────┼────┼────┼────┼────┤
          5   │ 65 │ 70 │ 72 │ 60 │ 68 │ 21 │
              └────┴────┴────┴────┴────┴────┘
```

---

## 5️⃣ Déclaration d’un tableau 2D

Il existe deux façons de déclarer un tableau a plusieurs dimensions, avec et sans initialisation. 

### 📑Déclaration AVEC initialisation
Il peut arriver que le contenu d'un tableau soit déjà connu d'avance. Dans ce cas la, il suffit de déclarer un tableau et de directement donner les valeurs aux tableaux, suivant le code suivant :

```csharp
int[,] notesEleves = {
    { 85, 88, 99 }, // Élève 1
    { 68, 74, 44 }, // Élève 2
  };
```

---

 ## 📎 Référence

👉 Documentation officielle : 
* [Tableaux en C#](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-1d)
* [Tableaux 2D en c#](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-2d)
  * [Déclaration AVEC initialisation ](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-2d#d%C3%A9claration-avec-initialisation)
  * [Déclaration SANS initialisation](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-2d#d%C3%A9claration-sans-initialisation)


Vous devez réaliser les labos suivants :
 [🧪 Labo 4.2A](/laboratoire/laboratoire4.2A)
 [🧪 Labo 4.2B](/laboratoire/laboratoire4.2B)





* **Exemple** : Déclaration d'un tableau 2D de nombres entiers ayant 3 rangées et 2 colonnes :
  ```csharp
  int[,] tabNotes = { { 79, 90 },
                      { 80, 50 },
                      { 67, 95 } };
  ```
* L'élément d'un tableau 2D est désigné avec **deux index** `[ , ]` :

  * Le **premier index** → numéro de rangée (ligne)
  * Le **deuxième index** → numéro de colonne
  * Les deux index commencent à `0`.
    Exemples :

    * `tabNotes[0, 0]` → premier élément (79)
    * `tabNotes[1, 1]` → intersection rangée 1 / colonne 1 (50)
    * `tabNotes[2, 1]` → intersection rangée 2 / colonne 1 (95)
* Le nombre total d’éléments est donné par la propriété `Length` :

  ```csharp
  int nombreEltTabNotes = tabNotes.Length;
  ```

  Ici, `nombreEltTabNotes` vaut **6**.
* Le parcours d’un tableau 2D se fait souvent **rangée par rangée** ou **colonne par colonne**, via une **boucle imbriquée**.

  > ⚠️ Ne pas confondre ces deux types de parcours.
* Méthode `GetLength()` :

  * `GetLength(0)` → nombre de rangées
  * `GetLength(1)` → nombre de colonnes