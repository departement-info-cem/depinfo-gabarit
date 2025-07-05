# 🧪 Labo 2.1 – Variables, affectation, opérations

---

### 🟢 Exercice 1 – Afficher un message

🎯 **Objectif** : Apprendre à afficher un message simple dans la console avec `Console.WriteLine`.

🧠 Le langage C# permet d'afficher du texte dans la console avec la commande `Console.WriteLine()`.

🛠️ Instructions :
- Ouvre Visual Studio
- Crée un nouveau projet console
- Affiche les deux lignes suivantes :

```
Bonjour
Bienvenue au cours de programmation!
```

✅ Sortie attendue :
```
Bonjour
Bienvenue au cours de programmation!
```

---

### 🟢 Exercice 2 – Variable `int`

🎯 **Objectif** : Comprendre ce qu’est une variable de type entier (`int`).

🧠 Une variable de type `int` sert à stocker un nombre entier (sans décimales).

🛠️ Instructions :
- Déclare une variable `int` appelée `anneeNaissance`
- Assigne-lui la valeur 2006
- Affiche-la dans la console

✅ Sortie attendue :
```
Année de naissance : 2006
```

---

### 🟢 Exercice 3 – Variable `char`

🎯 **Objectif** : Manipuler une variable de type `char`.

🧠 Le type `char` sert à stocker un seul caractère entre apostrophes, comme `'A'`.

🛠️ Instructions :
- Déclare une variable `char` appelée `initiale`
- Donne-lui la valeur `'L'`
- Affiche-la avec un message clair

✅ Sortie attendue :
```
Initiale : L
```

---

### 🟢 Exercice 4 – Variable `double`

🎯 **Objectif** : Comprendre comment stocker des nombres décimaux avec `double`.

🧠 `double` permet de représenter des nombres avec virgule (comme 3.14).

🛠️ Instructions :
- Déclare une variable `double` appelée `note`
- Donne-lui la valeur `87.5`
- Affiche-la dans un message

✅ Sortie attendue :
```
Note : 87.5
```

---

### 🟢 Exercice 5 – Variable `bool`

🎯 **Objectif** : Introduire les variables booléennes (`true` ou `false`).

🧠 Le type `bool` sert à représenter un état : vrai ou faux.

🛠️ Instructions :
- Déclare une variable `bool` appelée `aReussi`
- Donne-lui la valeur `true`
- Affiche un message comme "Réussite : true"

✅ Sortie attendue :
```
Réussite : true
```

---

### 🟢 Exercice 6 – Variable `string`

🎯 **Objectif** : Travailler avec des chaînes de caractères.

🧠 Le type `string` sert à stocker du texte (entre guillemets).

🛠️ Instructions :
- Demande le nom de l’utilisateur avec `Console.ReadLine()`
- Affiche "Bonjour" suivi du nom

✅ Entrée/sortie attendue :
```
Entrez votre nom : Louis
Bonjour Louis
```

---

### 🟢 Exercice 7 – Affectation après déclaration

🎯 **Objectif** : Déclarer une variable sans lui donner immédiatement une valeur.

🛠️ Instructions :
- Déclare une variable `int` nommée `score`
- Affecte-lui ensuite la valeur 100
- Affiche son contenu

✅ Sortie attendue :
```
Score : 100
```

---

### 🟢 Exercice 8 – Concaténation de chaînes

🎯 **Objectif** : Apprendre à concaténer (`+`) des chaînes de caractères.

🛠️ Instructions :
- Demande le prénom d’une personne
- Affiche un message personnalisé avec ce prénom

✅ Entrée/sortie attendue :
```
Quel est ton prénom ? Alice
Bonjour Alice!
```

---

### 🟢 Exercice 9 – Concaténation avec `int`

🎯 **Objectif** : Combiner texte et nombre dans un seul affichage.

🛠️ Instructions :
- Demande l’âge d’un utilisateur (lecture avec `ReadLine` et conversion)
- Affiche : "Tu as 18 ans" (en remplaçant 18 par ce que l’utilisateur a entré)

✅ Entrée/sortie attendue :
```
Quel âge as-tu ? 18
Tu as 18 ans
```

---

### 🟢 Exercice 10 – Addition

🎯 **Objectif** : Appliquer une addition avec deux nombres entiers.

🛠️ Instructions :
- Demande deux nombres à l’utilisateur
- Additionne-les et affiche le résultat

✅ Entrée/sortie attendue :
```
Entrez un nombre : 20
Entrez un autre nombre : 12
Somme : 32
```

---

### 🟢 Exercice 11 – Soustraction

🎯 **Objectif** : Appliquer une soustraction simple.

🛠️ Instructions :
- Demande deux nombres à l’utilisateur
- Soustrais le deuxième du premier
- Affiche le résultat

✅ Entrée/sortie attendue :
```
Entrez un nombre : 50
Entrez un autre nombre : 8
Résultat : 42
```

---

### 🟢 Exercice 12 – Multiplication

🎯 **Objectif** : Comprendre la multiplication entre variables.

🛠️ Instructions :
- Demande deux nombres
- Affiche leur produit

✅ Entrée/sortie attendue :
```
Entrez un nombre : 6
Entrez un autre nombre : 7
Produit : 42
```

---

### 🟢 Exercice 13 – Division entière

🎯 **Objectif** : Comprendre la division entière et la perte de précision.

🧠 Avec deux `int`, le résultat d'une division perd la partie décimale.

🛠️ Instructions :
- Déclare `int a = 7`, `int b = 2`
- Affiche `a / b`

✅ Sortie attendue :
```
Résultat (int) : 3
```

---

### 🟢 Exercice 14 – Division avec `double`

🎯 **Objectif** : Corriger la perte de précision avec des types `double`.

🛠️ Instructions :
- Déclare `double a = 7`, `double b = 2`
- Affiche `a / b`

✅ Sortie attendue :
```
Résultat (double) : 3.5
```

---

### 🟢 Exercice 15 – Modulo

🎯 **Objectif** : Utiliser l’opérateur `%` pour obtenir un reste.

🛠️ Instructions :
- Demande un nombre
- Affiche s’il est pair (vérifie `nombre % 2`)

✅ Entrée/sortie attendue :
```
Entrez un nombre : 5
Reste : 1 (impair)
```

---

### 🟢 Exercice 16 – Ordre des opérations

🎯 **Objectif** : Observer l’impact de la priorité des opérations.

🛠️ Instructions :
- Calcule `2 + 3 * 4` et affiche le résultat
- Calcule `(2 + 3) * 4` et affiche aussi

✅ Sortie attendue :
```
Sans parenthèses : 14
Avec parenthèses : 20
```

---

### 🟢 Exercice 17 – Moyenne de deux notes

🎯 **Objectif** : Appliquer une moyenne correctement.

🛠️ Instructions :
- Demande deux notes (entiers)
- Affiche leur moyenne (attention à la division entière)

✅ Entrée/sortie attendue :
```
Note 1 : 60
Note 2 : 80
Moyenne : 70
```

---

### 🟢 Exercice 18 – Conversion `string` en `int`

🎯 **Objectif** : Lire une saisie et la convertir en entier.

🛠️ Instructions :
- Demande l’âge avec `ReadLine()`
- Convertis avec `int.Parse()`

✅ Entrée/sortie attendue :
```
Quel âge as-tu ? 17
Tu as 17 ans
```

---

### 🟢 Exercice 19 – Conversion `string` en `double`

🎯 **Objectif** : Lire un prix et le convertir pour le calculer.

🛠️ Instructions :
- Demande un prix d’article
- Affiche le prix avec taxes (15 %)

✅ Entrée/sortie attendue :
```
Prix : 10.00
Total avec taxes : 11.5
```

---

### 🟢 Exercice 20 – Permutation de deux valeurs

🎯 **Objectif** : Échanger le contenu de deux variables.

🛠️ Instructions :
- Demande deux nombres à l’utilisateur
- Échange les valeurs et affiche-les après

✅ Entrée/sortie attendue :
```
Nombre A : 4
Nombre B : 7
Après permutation : A = 7, B = 4
```
