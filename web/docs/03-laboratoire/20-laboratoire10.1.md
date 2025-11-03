---
title: Lecture et écriture de fichiers CSV
---

# 🧪 Labo 10.1 – Lecture et écriture de fichiers CSV

📎 **Référence** : [StreamReader](https://info.cegepmontpetit.ca/notions-csharp/documentation/fichier-texte#la-classe-streamreader--lecture-dans-un-fichier-texte), [StreamWriter](https://info.cegepmontpetit.ca/notions-csharp/documentation/fichier-texte#la-classe-streamwriter--%C3%A9criture-dans-un-fichier-texte), [Liste générique](https://info.cegepmontpetit.ca/notions-csharp/documentation/liste-generique-list-t)

---

## 🟢 Exercice 1 : Créer un fichier CSV simple

**Instructions** : Écrivez un programme qui génère un fichier `fruits.csv` contenant 5 fruits avec leur couleur. N'oubliez pas **l'entête** !

✅ **Exemple fruits.csv** :
```
Fruit,Couleur
Pomme,Rouge
Banane,Jaune
Orange,Orange
Raisin,Violet
Citron,Jaune
```

---

## 🟢 Exercice 2 : Lire et afficher le contenu d'un fichier CSV

**Instructions** : Écrivez un programme qui lit le fichier `fruits.csv`, et affiche chaque fruit ainsi que sa couleur. N'oubliez pas de vérifier si le fichier existe 😉

⚠️ Utilisez `Split(',')` pour séparer les colonnes et une boucle `while (!EndOfStream)` pour lire chaque ligne.


✅ **Sortie attendue** :
```
Pomme est de couleur rouge.
Banane est de couleur jaune.
Orange est de couleur orange.
Raisin est de couleur violet.
Citron est de couleur jaune.
```

---

## 🟡 Exercice 3 : Calculer la moyenne d’un groupe d’étudiants

**Votre programme doit** :

1. Créer un fichier `notes.csv` :

```
Nom,Note
Éric,87
Jamil,92
David,76
Tommy,95
Pierre-Paul,84
Jean-Michel,59
Philippe,100
```

2. Lire le fichier ligne par ligne.
3. Calculer la moyenne des notes.
4. Afficher le résultat **avec 2 décimales** 😉


✅ **Sortie attendue** :
```
La moyenne du groupe est de 84,71 %
```

---

## 🟡 Exercice 4 : Inverser les colonnes d'un CSV

**Instructions** : Lisez le fichier `fruits.csv` et écrivez un **nouveau fichier** `fruits_inverse.csv`
où l’ordre des colonnes est inversé (la couleur avant le fruit).

✅ **Exemple fruits_inverse.csv** :
```
Couleur,Fruit
Rouge,Pomme
Jaune,Banane
Orange,Orange
Violet,Raisin
Jaune,Citron
```

---

## 🔴 Exercice 5 : Construire une grille dynamique à partir d’un CSV

**Note** : Bien que cet exercice ait été complété en démonstration, ce serait une bonne pratique de pouvoir le programmer vous-même !

**Votre programme doit** :
1. Créer un fichier `donjon.csv` contenant :

```
🗿,💀,💎
👹,🧙‍,🗝
🚪,🧟,👺
```
(*Sentez vous libre de modifier la taille de la grille 😉*)

2. Lire chaque ligne et la stocker dans une liste.
3. Déterminer le nombre de lignes et de colonnes.
4. Remplir un tableau 2D `string[,]`.
5. Afficher la grille dans la console.

---

## 🔴 Exercice 6 : Sauvegarder et relire une matrice numérique

**Votre programme doit** :
1. Initialiser un tableau 2D de nombres, comme celui-ci :

```csharp
int[,] matrice = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

2. Faites le code afin d'écrire cette matrice dans un fichier `matrice.csv` (une ligne par rangée) sans oublier de séparer chaque élément par **une vigule**.

⚠️ **Votre programme doit pouvoir fonctionner avec des matrices de taille différente !**

3. Lire le fichier pour recréer et afficher la matrice dans la console.
    * `Split(',')` vous sera utile pendant l'étape de lecture et d'affichage dans la console.

---

## 🔥 Jeux intégrateurs - AVEC LISTE

### 💀 Bonhomme pendu (avec fichier .txt)

**Objectif :** Créer un mini-jeu de bonhomme pendu utilisant un fichier texte `mots.txt` pour charger la liste des mots. L’utilisateur doit deviner les lettres du mot choisi avant de perdre toutes ses tentatives.

**Étapes à suivre**

1️⃣ Préparer le fichier `mots.txt`

1. Créez un fichier `mots.txt` dans `C:/EspaceLabo`.
2. Ajoutez-y une dizaine de mots, un mot par ligne.


2️⃣ Lire tous les mots depuis le fichier

1. Vérifiez que le fichier existe avec ``File.Exists()``.
2. Utilisez ``StreamReader`` et une boucle ``while (!sr.EndOfStream)`` pour lire chaque ligne.
3. Convertissez chaque mot en majuscules pour simplifier la comparaison.
4. Stockez les mots dans une liste dynamique (``List<string>``).

3️⃣ Choisir un mot au hasard

1. Utilisez la classe `Random` pour sélectionner un index dans la liste.
2. Récupérez le mot choisi.

4️⃣ Créer le mot masqué

1. Initialisez un tableau char[] de la même longueur que le mot choisi.
2. Remplissez-le avec des `'_'` pour masquer les lettres.

5️⃣ Initialiser les variables de jeu

* tentativesRestantes : 6
* gagne : booléen indiquant si le joueur a trouvé le mot

6️⃣ Boucle principale de jeu

Répétez tant que tentativesRestantes > 0 et gagne == false :
1. Affichez le mot masqué en séparant chaque lettre par un espace.
2. Affichez le nombre de tentatives restantes.
3. Demandez à l’utilisateur une lettre (une seule lettre).
4. Vérifiez si la lettre est présente dans le mot :
    * Si oui, remplacez les `'_'` correspondants dans le mot masqué.
    * Si non, diminuez tentativesRestantes de 1.
5. Vérifiez si le joueur a trouvé toutes les lettres (motCache ne contient plus de `'_'`).

7️⃣ Fin du jeu

Si le joueur a trouvé toutes les lettres, affichez :

```
🎉 Bravo, vous avez trouvé : [MOT]
```

Sinon, affichez :

```
💀 Vous avez perdu ! Le mot était : [MOT]
```

✅ **Exemple** 
```
Mot : _ _ _ _ _ _ _ _ _ _
Tentatives restantes : 6
Lettre : a
✅ Bonne lettre !
Mot : _ _ _ _ _ A _ _ _ _
Tentatives restantes : 6
Lettre : e
✅ Bonne lettre !
Mot : _ _ _ _ _ A _ E _ _
Tentatives restantes : 6
Lettre : g
❌ Mauvaise lettre !
Mot : _ _ _ _ _ A _ E _ _
Tentatives restantes : 5
Lettre : l
❌ Mauvaise lettre !
Mot : _ _ _ _ _ A _ E _ _
Tentatives restantes : 4
Lettre : r
✅ Bonne lettre !
Mot : _ R _ _ _ A _ E _ R
Tentatives restantes : 4
Lettre : o
✅ Bonne lettre !
Mot : O R _ _ _ A _ E _ R
Tentatives restantes : 4
Lettre : d
✅ Bonne lettre !
Mot : O R D _ _ A _ E _ R
Tentatives restantes : 4
Lettre : i
✅ Bonne lettre !
Mot : O R D I _ A _ E _ R
Tentatives restantes : 4
Lettre : n
✅ Bonne lettre !
Mot : O R D I N A _ E _ R
Tentatives restantes : 4
Lettre : t
✅ Bonne lettre !
Mot : O R D I N A T E _ R
Tentatives restantes : 4
Lettre : u
✅ Bonne lettre !
🎉 Bravo, vous avez trouvé : ORDINATEUR

```

---

### Bataille navale (avec fichier CSV) ⚓

**Partie A - Lire et afficher une grille de bataille navale**

**Objectif** : Lire une grille à partir d’un fichier CSV et afficher le plateau dans la console.

**Étapes à suivre**

1. Créez un fichier ``grille.csv`` avec les symboles suivants :

```
🌊,🌊,🚢,🌊,🌊
🚢,🌊,🚢,🌊,🌊
🌊,🌊,🌊,🌊,🚢
🌊,🚢,🌊,🌊,🌊

```

2. Dans votre programme :
    * Lisez le fichier avec ``StreamReader``
    * Stockez chaque ligne dans une ``List<string>``
    * Transformez la liste en un tableau 2D (``string[,]``)
    * Affichez la grille complète dans la console

**✅ Sortie attendue :**

```
🌊 🌊 🚢 🌊 🌊
🚢 🌊 🚢 🌊 🌊
🌊 🌊 🌊 🌊 🚢
🌊 🚢 🌊 🌊 🌊
```

**Partie B - Mini-jeu de bataille navale 🎯**

**Objectif** : Permettre au joueur de tirer sur des positions de la grille et d’afficher les résultats.

**Étapes à suivre**

1. Demandez au joueur de saisir une coordonnée numériques (ligne, colonne).
2. Si la case contient un 🚢, affichez “💥 Touché !” et remplacez-la par 💥.
   Sinon, affichez “💦 Raté !” et remplacez-la par 💦.
3. Après chaque tir, affichez la grille mise à jour.
4. Quand tous les bateaux sont détruits, affichez "🎉 Tous les bateaux sont coulés !".

**✅ Exemple de déroulement :**
```
Entrez la ligne : 1
Entrez la colonne : 3
💥 Touché !
🌊 🌊 💥 🌊 🌊
🚢 🌊 🚢 🌊 🌊
🌊 🌊 🌊 🌊 🚢
🌊 🚢 🌊 🌊 🌊
```
