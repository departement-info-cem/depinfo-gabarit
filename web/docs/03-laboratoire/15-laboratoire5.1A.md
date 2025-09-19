---
title: 🔄 A - Mini-projet - Vérificateur de palindromes
---

# 🧪 Labo 5.1A 📝 Mini-projet - Vérificateur de palindromes

## 🎯 Objectif
Créer un programme qui est capable de prendre un tableau de `string` et qui vérifie si chaque `string` est un palindrome ou non.

⚠️ Un palindrome est un mot qui se lit de la même façon à l'endroit et à l'envers. Par exemple : **kayak** est un palindrome tandis que **tomate** ne l'est pas. Tomate à l'envers se lit **etamot**.

Tableau de mots à vérifier :
```Csharp
 string[] motsAVerifier = { "Tomate", "Radar", "Tôt", "Kayak", "Pomme", "Pop", "Jazz", "Anna", "Montréal", "Laval", "Toronto" };
```

---

## 📋 Instructions
1. Copier dans votre `Main()` la liste de mots à vérifier
2. Créez deux fonctions afin de faire la vérification. 
    * La fonction `InverserMot()` doit prendre un paramètre `string pMotAInverser` et retourner un `string`
    * La fonction `EstUnPalindrome()` doit prendre un paramètre `string pMot` et retourner un `bool`
3. Dans le `Main()`, faites une boucle `for` sur le tableau de mots à vérifié.
4. Pour chaque mot, appelez la méthode `EstUnPalindrome()` et affichez un message indiquant s'il s'agit d'un palindrome.



---


## 🛠️ Fonctions à faire
### 1.`InverserMot()`
* Prends `string pMotAInverser` en paramètre
* Retourne un `string`
1. Créez une variable **nouveauMot** de type `string`
2. Faites une boucle `for` décrémentée sur le string passé en paramètre.
    * L'index commence à la plus haute valeur d'index de **pMotAInverser**
    * La valeur de l'index diminue à chaque itération de la boucle.
3. Dans votre boucle `for`, ajoutez le caractère à l'index courant à votre variable **nouveauMot**
4. Retournez **nouveauMot**

---

### 2.`EstUnPalindrome()`
* Prends `string pMot` en paramètre
* Retourne un `bool`
1. Créez une variable avec le texte de pMot en minuscule en utilisant la méthode ``.ToLower()``
2. Appelez la méthode `InverserMot()` en lui passant en paramètre le mot en minuscule et capture le retour de la fonction.
3. Comparez le mot en minuscule et le retour de la fonction. `InversrMot()`
4. Retournez`true` si les deux strings sont pareils.

---

## 💡 Résultat attendu lors de l'exécution :
```
Tomate n'est PAS un palindrome
Radar est un palindrome
Tôt est un palindrome
Kayak est un palindrome
Pomme n'est PAS un palindrome
Pop est un palindrome
Jazz n'est PAS un palindrome
Anna est un palindrome
Montréal n'est PAS un palindrome
Laval est un palindrome
Toronto n'est PAS un palindrome
```