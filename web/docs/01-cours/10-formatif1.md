---
description: Formatif 1
---

# Examen formatif 1
**Voici 10 exercices qui vous aideront à pratiquer les notions vues en classe.**  
Le jour de l'examen, on vous donnera des fichiers de départ et/ou une description du résultat attendu.  
L'examen sera plus court que cette pratique ⚠️  
  
🦾🧠 Bonne pratique!  

## 1. Types de variables et expressions arithmétiques

### 💵 1.1. Programme console qui calcule le salaire d’un employé et affiche ses informations.

#### Instructions :

- Dans la fonction `Main` :
  - Demander le nom de l’employé, le nombre d’heures travaillées par semaine et le taux horaire.
    - Utilisez des variables pour stocker chaque donnée en considérant le type.
  - Calculer, dans une nouvelle variable, le salaire hebdomadaire : Heures par semaine * Taux horaire.
  - Afficher, dans une seule ligne, les informations de l’employé.
- Tester votre programme avec le cas suivant :

#### Sortie attendue :

```
==================LA PAIE=================  
Nom de l’employé : Mario  
Nombre d’heures : 32,5  
Taux horaire : 19,75  

Mario a travaillé 32,5 h par semaine avec un taux horaire de 19,75$. Son salaire est de 641,88$.  
```

---

## 2. Structures conditionnelles simples

### ☀️2.1. Programme console qui valide la température

#### Instructions :

- Dans la fonction `Main` :
  - Demander une température en Celsius. Considérer des valeurs entières.
  - Afficher un message selon la température :
    - Température supérieure à 16, afficher « Il fait chaud! »
    - Température entre 12 et 16 inclusivement, afficher « C’est agréable! »
    - Température entre 5 et 11 inclusivement, afficher « C’est frais! »
    - Température égale à 4 ou moins, afficher : « Il fait froid »
- Tester votre programme avec les cas suivants :
 
| Température | Message |
|---------|---------|
| 17 | Il fait chaud! |
| 16 | C’est agréable! |
| 15 | C’est agréable! |
| 12 | C’est agréable! |
| 11 | C’est frais! |
| 10 | C’est frais! |
| 5 | C’est frais! |
| 4 | Il fait froid |
| 3 | Il fait froid |


#### Entrée / Sortie attendue :
```
Quelle est la température : 15
C'est agréable!
```

---

### 🎲 2.2. Calcul du score d'une équipe de deux joueurs avec des dés  
Chaque joueur d’une équipe doit lancer un dé à 6 faces. Le programme doit calculer et afficher le score de l’équipe selon les règles suivantes :  
- Si les deux dés valent 6, le score est 100.
- Si les deux dés valent 5 ou 4, le score est 75.
- Si les deux dés sont identiques (même valeur), le score est 50.
- Dans tous les autres cas, le score correspond à la somme des deux dés.


#### Instructions :

- Dans la fonction `Main` :
  - Générer aléatoirement deux nombres entre 1 et 6.
  - Calculer le score de l’équipe en fonction des règles du jeu.
  - Afficher le score.
- Tester votre programme avec des valeurs aléatoires.
- Tester votre programme avec des valeurs non aléatoires données dans les exemples d’exécution.
 

#### Exemples d’exécution :
```
Dé 1 = 6, Dé 2 = 6 → Score = 100
Dé 1 = 5, Dé 2 = 5 → Score = 75
Dé 1 = 4, Dé 2 = 4 → Score = 75
Dé 1 = 3, Dé 2 = 3 → Score = 50
Dé 1 = 2, Dé 2 = 2 → Score = 50
Dé 1 = 2, Dé 2 = 6 → Score = 8
```

---

## 3. Fonctions et structures conditionnelles

### 🪙 3.1. Programme console qui calcule et affiche un prix après taxes selon la province choisie

#### Instructions :

- Dans la fonction `Main` :
  - Demander le prix d’un article et de choisir une province.
  - Utiliser une fonction `CalculerPrixApresTaxes` pour calculer le prix après taxe, puis afficher le résultat.
- La fonction `CalculerPrixApresTaxes` :  
  - Accepte en paramètre le prix de l’article et le choix de la province.  
  - Elle calcule et retourne le prix après taxe selon la province choisie.  
  - Considérer le taux de taxation selon la province comme suit :  
    - Québec : 15%  
    - Ontario : 13%  
    - Autres : 12%
- Tester votre programme pour les 3 provinces.

#### Entrée / Sortie attendue :
```
Prix de l’article : 100
Choisir la province? 1)QC, 2) ON, 3) Autre.
Votre choix : 1
Prix après taxes : 115,00$

Prix de l’article : 100
Choisir la province? 1)QC, 2) ON, 3) Autre.
Votre choix : 2
Prix après taxes : 113,00$

Prix de l’article : 100
Choisir la province? 1)QC, 2) ON, 3) Autre.
Votre choix : 3
Prix après taxes : 112,00$
```

---

### 🔢 3.2. Programme console qui compte le nombre de mots dans une phrase

#### Instructions :

- Dans la fonction `Main` :
  - Demander de rentrer une phrase.
  - Utiliser une fonction `CalculerNbMots` pour calculer le nombre de mots dans la phrase, puis afficher le résultat.
- La fonction `CalculerNbMots`:
  - Accepte en paramètre une phrase.
  - Elle découpe la phrase en mots et retourne le nombre de mots.
    - **Indice :** Utiliser la fonction Split()
- Tester votre programme.


#### Entrée / sortie attendue :
```
------------------Je compterai le nombre de mots------------------
Entrez une phrase : Le ciel est bleu
Il y a 4 mots
```

---

## 4. Boucle For et fonctions avec paramètres et retour

### 🔢 4.1. Programme console qui compte le nombre de voyelles dans un mot

#### Instructions

- Dans la fonction `Main` :
  - Demander de rentrer un mot.
  - Utiliser une fonction `CalculerNbVoyelles` pour calculer le nombre de voyelles dans le mot, puis afficher le résultat.  
- La fonction `CalculerNbVoyelles` :
  - Accepte en paramètre un mot.
  - Elle calcule et retourne le nombre de voyelles dans le mot (toutes voyelles confondues). Utiliser une boucle pour parcourir les lettres du mot.
  - La fonction n’est pas sensible à la casse : Ne tient pas compte de majuscule ou minuscule.
- Tester votre programme.


#### Entrée / Sortie attendue :
```
Entrez un mot : Allo
Nombre de voyelles : 2
```

---

### ➕ 4.2. Programme console qui calcule la somme des carrés

#### Instructions

- Dans la fonction `Main` :
  - Demander de rentrer un nombre entier positif N.
  - Utiliser une fonction `SommeDesCarres` pour calculer la somme des carrés des N premiers entiers, puis afficher le résultat.  
- La fonction `SommeDesCarres` :
  - Accepte en paramètre un nombre entier positif N
  - Elle calcule et retourne la somme des carrées des N premiers entiers qu’on peut l’obtenir comme suit :
  - Exemple : SommeDesCarres(5) = 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + 4<sup>2</sup> + 5<sup>2</sup>
- Tester votre programme.
 

#### Entrée / Sortie attendue :
```
---Je peux vous aider à calculer la somme des carrés---
Entrez un nombre : 5
Le résultat est : 55
```

---

## 5. Tableaux et boucles

### 🔢 5.1. Programme console qui modifie les éléments d’un tableau en fonction de leur valeur

#### Instructions

- Dans la fonction `Main` :
  - Déclarer le tableau suivant : `tNombres = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}`.
  - Afficher le contenu du tableau (avant les modifications, dans une seule ligne).
  - Utiliser une fonction `RemplacerNombresPairs` qui remplace les **valeurs** paires du tableau par 0.
  - Afficher la chaîne retournée, contenant les valeurs du tableau modifié.
- La fonction `RemplacerNombresPairs` :
  - Accepte en paramètre un tableau d’entiers.
  - Elle remplace toute valeur paire dans le tableau par 0.
  - Créer une chaine avec les valeurs du tableau. Les valeurs dans la chaine sont séparées par une virgule.
  - Retourner la chaine de valeurs.
- Tester votre programme.


#### Sortie attendue :
```
Tableau avant les modifications :
1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Tableau après les modifications :
1, 0, 3, 0, 5, 0, 7, 0, 9, 0
```

---

### 🔢 5.2. Programme console qui modifie les éléments d’un tableau en fonction de leur position (index)

#### Instructions

- Dans la fonction `Main` :
  - Déclarer le tableau suivant : `tNombres = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}`.
  - Convertir le tableau en une chaîne de caractères et l’afficher (tableau avant les modifications).
  - Utiliser la fonction `RemplacerPositionsPairs` qui remplace les valeurs du tableau à une **position (index)** pair par 0.
  - Convertir le tableau retourné en une chaîne de caractères et l’afficher.
- La fonction `RemplacerPositionsPairs` :  
  - Accepte en paramètre un tableau d’entiers.
  - Définir un tableau de la même taille que le tableau en paramètre.
  - Copier le tableau en paramètre dans ce nouveau tableau.
  - Remplacer toute valeur à une position paire par 0.
  - Retourner le nouveau tableau.
- Tester votre programme.


#### Sortie attendue :
```
Tableau avant les modifications
1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Tableau après les modifications
0, 2, 0, 4, 0, 6, 0, 8, 0, 10
```

---

### 🧾 5.3. Programme console qui compte le nombre d’occurrences dans un tableau

#### Instructions

- Dans la fonction `Main` :
  - Déclarer le tableau suivant : `tNombres = {10, 2, 3, 4, 5, 6, 7, 8, 9, 10}`.
  - Utiliser la fonction `CompterNbOccurences` (une première fois) pour compter le nombre d’occurrences de `10` dans le tableau, puis afficher le résultat.
  - Utiliser la fonction `CompterNbOccurences` (une deuxième fois) pour calculer le nombre d’occurrences de `20` dans le tableau, puis afficher le résultat.
- La fonction `CompterNbOccurences` :
  - Accepte en paramètre un tableau d’entiers et un nombre à rechercher.
  - Compte et retourne le nombre de fois que ce nombre apparaît dans le tableau.
- Tester votre programme.



#### Sortie attendue :
```
Le nombre 10 se trouve 2 fois dans le tableau.
Le nombre 20 se trouve 0 fois dans le tableau.
```
