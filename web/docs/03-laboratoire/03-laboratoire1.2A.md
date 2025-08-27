---
title: A - Variables, affectation, opérations
---

# 🧪 Labo 1.2A – Variables, affectation, opérations

---

### 🟢 Exercice 1 – Afficher un message  
🎯 **Objectif** : Apprendre à afficher un message simple dans la console avec `Console.WriteLine`.

🧠 C# permet d'afficher du texte avec la commande `Console.WriteLine()`.

🛠️ **Instructions** :
- Ouvre Visual Studio.
- Crée un nouveau projet console.
- Affiche les deux lignes suivantes :
```csharp
Bonjour
Bienvenue au cours de programmation!
```

✅ **Sortie attendue** :
```plaintext
Bonjour
Bienvenue au cours de programmation!
```

---

### 🟢 Exercice 2 – Variable `int`  
🎯 **Objectif** : Comprendre ce qu'est une variable entière.

🧠 `int` permet de stocker un nombre entier.

🛠️ **Instructions** :
- Déclare une variable `int` nommée `anneeNaissance`.
- Donne-lui la valeur `2006`.
- Affiche-la avec un message.

✅ **Sortie attendue** :
```plaintext
Année de naissance : 2006
```

---

### 🟢 Exercice 3 – Variable `char`  
🎯 **Objectif** : Manipuler un caractère.

🧠 `char` stocke un caractère entre apostrophes (`'A'`).

🛠️ **Instructions** :
- Déclare une variable `char` appelée `initiale`.
- Donne-lui la valeur `'L'`.
- Affiche-la avec un message clair.

✅ **Sortie attendue** :
```plaintext
Initiale : L
```

---

### 🟢 Exercice 4 – Variable `double`  
🎯 **Objectif** : Stocker des nombres décimaux.

🧠 `double` permet de représenter des valeurs comme `3.14`.

🛠️ **Instructions** :
- Déclare une variable `double` nommée `note`.
- Donne-lui la valeur `87.5`.
- Affiche-la.

✅ **Sortie attendue** :
```plaintext
Note : 87,5
```

---

### 🟢 Exercice 5 – Variable `bool`  
🎯 **Objectif** : Utiliser des booléens (`true` ou `false`).

🧠 `bool` représente un état vrai ou faux.

🛠️ **Instructions** :
- Déclare une variable `bool` nommée `aReussi`.
- Donne-lui la valeur `true`.
- Affiche-la.

✅ **Sortie attendue** :
```plaintext
Réussite : true
```

---

### 🟢 Exercice 6 – Variable `string`  
🎯 **Objectif** : Travailler avec du texte.

🧠 `string` stocke une chaîne de caractères.

🛠️ **Instructions** :
- Demande le nom de l’utilisateur avec `Console.ReadLine()`.
- Affiche "Bonjour" suivi du nom.

✅ **Entrée/Sortie attendue** :
```plaintext
Entrez votre nom : Louis
Bonjour Louis
```

---

### 🟢 Exercice 7 – Affectation après déclaration  
🎯 **Objectif** : Déclarer une variable sans lui affecter immédiatement une valeur.

🛠️ **Instructions** :
- Déclare une variable `int` nommée `score`.
- Affecte-lui ensuite la valeur `100`.
- Affiche-la.

✅ **Sortie attendue** :
```plaintext
Score : 100
```

---

### 🟢 Exercice 8 – Concaténation de chaînes  
🎯 **Objectif** : Utiliser l’opérateur `+` pour concaténer du texte.

🛠️ **Instructions** :
- Demande le prénom de l'utilisateur.
- Affiche "Bonjour [prénom]!"

✅ **Entrée/Sortie attendue** :
```plaintext
Quel est ton prénom ? Alice
Bonjour Alice!
```

---

### 🟢 Exercice 9 – Conversion `string` en `int`  
🎯 **Objectif** : Lire une saisie et la convertir en entier avec `int.Parse()`.

🛠️ **Instructions** :
- Demande l’âge.
- Convertis-le avec `int.Parse()`.
- Affiche l’âge.

✅ **Entrée/Sortie attendue** :
```plaintext
Quel âge as-tu ? 17
Tu as 17 ans
```

---

### 🟢 Exercice 10 – Conversion `string` en `double`  
🎯 **Objectif** : Lire un nombre à virgule et l’afficher.  

🧠 Utiliser `double.Parse()` pour convertir une saisie en un nombre décimal.  

🛠️ **Instructions** :  
- Demande à l’utilisateur un prix (avec décimales).  
- Convertis la saisie en `double` avec `double.Parse()`.  
- Affiche : `"Prix saisi : X"`.  

✅ **Entrée/Sortie attendue** :  
```plaintext
Entrez un prix : 19,95
Prix saisi : 19,95
```

---


### 🟢 Exercice 11 – Addition  
🎯 **Objectif** : Additionner deux entiers.

🛠️ **Instructions** :
- Demande deux nombres.
- Additionne-les.
- Affiche la somme.

✅ **Entrée/Sortie attendue** :
```plaintext
Entrez un nombre : 20
Entrez un autre nombre : 12
Somme : 32
```

---

### 🟢 Exercice 12 – Soustraction  
🎯 **Objectif** : Soustraire deux nombres.

🛠️ **Instructions** :
- Demande deux nombres.
- Soustrais le second du premier.
- Affiche le résultat.

✅ **Entrée/Sortie attendue** :
```plaintext
Entrez un nombre : 50
Entrez un autre nombre : 8
Résultat : 42
```

---

### 🟢 Exercice 13 – Multiplication  
🎯 **Objectif** : Multiplier deux entiers.

🛠️ **Instructions** :
- Demande deux nombres.
- Affiche leur produit.

✅ **Entrée/Sortie attendue** :
```plaintext
Entrez un nombre : 6
Entrez un autre nombre : 7
Produit : 42
```

---

### 🟢 Exercice 14 – Division entière  
🎯 **Objectif** : Comprendre la perte de précision en division entière.

🧠 Division de deux `int` coupe la partie décimale.

🛠️ **Instructions** :
- `int a = 7`, `int b = 2`
- Affiche `a / b`

✅ **Sortie attendue** :
```plaintext
Résultat (int) : 3
```

---

### 🟢 Exercice 15 – Division avec `double`  
🎯 **Objectif** : Obtenir un résultat précis avec `double`.

🛠️ **Instructions** :
- `double a = 7`, `double b = 2`
- Affiche `a / b`

✅ **Sortie attendue** :
```plaintext
Résultat (double) : 3,5
```

---

### 🟢 Exercice 16 – Modulo  
🎯 **Objectif** : Utiliser `%` pour obtenir le reste d’une division.

🛠️ **Instructions** :
- Demande un nombre.
- Affiche le reste de la division par 10.

✅ **Entrée/Sortie attendue** :
```plaintext
Entrez un nombre : 23
Reste de 23 ÷ 10 = 3
```

---

### 🟢 Exercice 17 – Ordre des opérations  
🎯 **Objectif** : Comprendre la priorité des opérateurs.

🛠️ **Instructions** :
- Affiche le résultat de `2 + 3 * 4`
- Puis de `(2 + 3) * 4`

✅ **Sortie attendue** :
```plaintext
Sans parenthèses : 14
Avec parenthèses : 20
```

---

### 🟢 Exercice 18 – Moyenne de deux notes  
🎯 **Objectif** : Calculer la moyenne avec des `double`.

🛠️ **Instructions** :
- Demande deux notes.
- Calcule et affiche leur moyenne.

✅ **Entrée/Sortie attendue** :
```plaintext
Note 1 : 75,5
Note 2 : 82,0
Moyenne : 78,75
```

---

### 🟢 Exercice 19 – Conversion `string` en `double`  
🎯 **Objectif** : Lire un prix et le convertir pour le doubler.

🛠️ **Instructions** :
- Demande un prix.
- Affiche le double.

✅ **Entrée/Sortie attendue** :
```plaintext
Prix : 15,50
Double du prix : 31
```

---

### 🟢 Exercice 20 – Permutation de deux valeurs  
🎯 **Objectif** : Échanger le contenu de deux variables.

🛠️ **Instructions** :
- Demande deux nombres.
- Échange-les.
- Affiche le résultat.

✅ **Entrée/Sortie attendue** :
```plaintext
Nombre A : 4
Nombre B : 7
Après permutation : A = 7, B = 4
```

---
