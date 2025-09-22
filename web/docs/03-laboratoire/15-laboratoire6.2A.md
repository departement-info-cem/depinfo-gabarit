---
title: Tableaux 2D
---

# 🧪 Labo 6.2A – Tableaux 2D

📎 **Référence** : [Tableaux 2D en C# – Documentation](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-2d)

Nous allons réaliser une série d’exercices permettant de pratiquer les **Tableaux 2D** en C#.

Pour **chaque Labo**, créez un **nouveau projet** dans Visual Studio.

---

## 🟢 Exercice 1 – Déclaration de Tableau 2D **avec** initialisation

🎯 **Objectif** : Comprendre la création des **tableaux 2D** avec des valeurs déjà présentes.

🛠️ **Instructions** :
1. Crée un tableau 2D de type `string` de 4x3.
2. Initialise le tableau avec des valeurs prédéfinies.
    * Choisir 4 artistes de musique et ajouté vos 3 chansons préférés pour chacun d'entre eux.
3. Affiche les 4 artistes.
4. Choisi un des 4 artistes, et affiché les trois chansons associées.

**Exemple de résultat attendu**:
```
1. The Killers
2. Queen
3. Bon Iver
4. Les Cowboys Fringants
choix: 4
L'amérique pleure, Les étoiles filantes, Sur mon épaule
```

## 🟢 Exercice 2 – Déclaration de Tableaux 2D **sans** initialisation

🎯 **Objectif** :Comprendre la création des **tableaux 2D** sans valeurs présentes.

🛠️ **Instructions** :
1. Crée un tableau 2D vide de type `int` de 3x5 nommé `notesEleves`.
2. Crée un tableau 2D vide de type `string` de 3x2 nommé `PrenomEtNomEleves`.
3. Crée un tableau 2D vide de type `bool` de 3x5 nommé `reussiteEleves`.
4. Affiche le nombre de colonne pour le tableau `notesEleves`.
5. Affiche le nombre total d'élément pour le tableau `PrenomEtNomEleves`.
6. Affiche la valeur présente dans la deuxième rangée et la première colonne du tableau `reussiteEleves`.

**Résultat attendu**:
```
5
False
6
```

---

## 🟢 Exercice 3 – Modification d'un élément dans un Tableau 2D

🎯 **Objectif** : Réussir la modification d'un élément dans un tableau 2D.

🛠️ **Instructions** :
1. Déclare un tableau 2D d'entier avec 3 étudiants et 2 notes.
    * Étudiant 1: Ses notes sont de 99 et 92.
    * Étudiant 2: Ses notes sont de 76 et 68.
    * Étudiant 3: Ses notes sont de 55 et 65.
2. Affiche les notes du dernier étudiant.
3. Modifie la première note du dernier étudiant pour qu'il réussit son cours.
4. Affiche a nouveau les notes du dernier étudiant.

**Résultat attendu**:
```
Notes: 55 et 65
Notes: 60 et 65
```

---

## 🟢 Exercice 4 – Affichage complet avec boucle

🎯 **Objectif** : Parcourir un tableau 2D avec deux boucles `for` imbriquées.

🛠️ **Instructions** :
1. Déclare un tableau 2D de chaîne de caractères avec 4 personnalités connues et 2 citations pour chacun d'entre eux.
    * Utilise les citations suivantes pour te simplifier le travail :
    ```
    // Albert Einstein
    1. "L’imagination est plus importante que le savoir."
    2. "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre."

    // Mahatma Gandhi
    1. "Sois le changement que tu veux voir dans le monde."
    2. "La force ne vient pas des capacités physiques, mais d’une volonté indomptable."

    // Steve Jobs
    1. "Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu’un d’autre."
    "La créativité, c’est simplement relier les choses entre elles."

    // Marie Curie
    1. "Dans la vie, rien n’est à craindre, tout est à comprendre."
    2. "Soyez moins curieux des gens et plus curieux des idées."
    ```
2. Parcours l'ensemble du tableau 2D a l'aide de boucles `for` imbriquées.
3. Pour chaque citation, affiche l'indice de la citation ainsi que la citation en elle-meme.

**Résultat attendu**:
```
Citation #0 : L'imagination est plus importante que le savoir.
Citation #1 : La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.

Citation #0 : Sois le changement que tu veux voir dans le monde.
Citation #1 : La force ne vient pas des capacités physiques, mais d'une volonté indomptable.

Citation #0 : Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu'un d'autre.
Citation #1 : La créativité, c'est simplement relier les choses entre elles.

Citation #0 : Dans la vie, rien n'est à craindre, tout est à comprendre.
Citation #1 : Soyez moins curieux des gens et plus curieux des idées.
```

---

## 🟢 Exercice 5 – Comprendre les indices doubles des boucles

🎯 **Objectif** : Parcourir un tableau 2D avec deux boucles `for` imbriquées et comprendre les deux indices.

🛠️ **Instructions** :
1. Reprendre le code de l'exercice 4.
2. Ajoute un nouveau tableau **1D** contenant le nom de chaque personnalité connu relié aux citations utilisé.
    * Si les citations reste identique, vous pouvez utiliser les personnalités suivantes :
    ```
    1. Albert Einstein
    2. Mahatma Gandhi
    3. Steve Jobs
    4. Marie Curie
    ```
3. Affiche le nom de chaque personnalité, puis les citations associés.

**Résultat attendu**:
```
Albert Einstein
Citation #0 : L'imagination est plus importante que le savoir.
Citation #1 : La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.

Mahatma Gandhi
Citation #0 : Sois le changement que tu veux voir dans le monde.
Citation #1 : La force ne vient pas des capacités physiques, mais d'une volonté indomptable.

Steve Jobs
Citation #0 : Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu'un d'autre.
Citation #1 : La créativité, c'est simplement relier les choses entre elles.

Marie Curie
Citation #0 : Dans la vie, rien n'est à craindre, tout est à comprendre.
Citation #1 : Soyez moins curieux des gens et plus curieux des idées.
```

## 🟢 Exercice 6

Voici le pointage d'une partie de Bowling fait entre ami(e)s.
```csharp
int[] joueur1 = { 120, 145, 132, 160, 178 };
int[] joueur2 = { 200, 185, 210, 195, 220 };
int[] joueur3 = { 98, 105, 115, 130, 125 };
int[] joueur4 = { 250, 260, 240, 270, 280 };
int[] joueur5 = { 150, 165, 172, 158, 180 };
int[] joueur6 = { 75, 90, 85, 100, 95 };
```

🎯 **Objectif** : Affiche le joueur ayant le pointage le plus élevé.

🛠️ **Instructions** :
1. Transforme le pointage suivant en tableau 2D.
2. Écrit la fonction `MeilleurJoueur(int[,] tableau)` qui recoit en paramètre le tableau 2D d'entier et qui retourne le numéro du joueur gagant.
    * Indice: Parcours uniquement la dernière colonne de chaque joueur.
3. Affiche le numéro du joueur gangant (de 1 à 6).

**Résultat attendu**:
```
4
```

---

## 🟢 Exercice 7

Voici le revenu mensuel de plusieurs employé(e)s au sein de la compagnie XYZ.
```csharp
int[] employe1 = { 1200, 3600, 600, 1000, 500, 6000, 1200, 500, 10000, 900, 8500, 100 };
int[] employe2 = { 2500, 2600, 2550, 2700, 2650, 2800, 2750, 2900, 3000, 3100, 3050, 3200 };
int[] employe3 = { 1500, 1800, 2000, 1700, 1600, 1900, 2100, 2500, 2300, 2200, 2000, 2400 };
int[] employe4 = { 800, 1200, 950, 1100, 1000, 900, 1050, 980, 1020, 1150, 1080, 1110 };
```

🎯 **Objectif** : Calculer la moyenne de point par coup de chaque joueur.

🛠️ **Instructions** :
1. Transforme le salaire mensuel de chaque employé(e)s afin de le rendre assessible dans un unique tableau 2D.
2. Écrit la fonction `CalculerMoyenne(int[,] employes)` qui recoit en paramètre un tableau 2D et qui retourne la moyenne salarial de chaque employé(e) dans un tableau 1D.
3. Parcours le tableau de moyenne et affiche les salaires moyen de chaque employé(e).

**Résultat attendu**:
```
2841
2816
2000
1028
```