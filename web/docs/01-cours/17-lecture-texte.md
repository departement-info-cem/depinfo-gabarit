---
description: Lecture d'un fichier texte avec StreamReader
---

# 9.2 – Lecture d'un fichier texte

## 🎯 Objectif

Apprendre à **lire des données dans un fichier texte** à l’aide de la classe `StreamReader`.
Nous verrons comment ouvrir un fichier en mode **Lecture** et y lire des données jusqu’à atteindre la fin du fichier.

---

## 🧠 Rappel : Les 4 étapes pour manipuler un fichier

1. **Ajouter la bonne bibliothèque** → `using System.IO;`
2. **Ouvrir le fichier** → établir la connexion entre ton programme et le fichier.
3. **Lire ou écrire** les données.
4. **Fermer le fichier** → pour éviter toute perte ou blocage 💥

Lors de la séance 9.1, nous avons appris à *écrire* dans un fichier texte.  
Aujourd’hui, place à la lecture ! 

---

## 🧰 Étape 1 — Le package `System.IO`

Cette étape ne change pas :
Assurez-vous d’ajouter **le package System.IO** au début du programme :

```csharp
using System.IO;
```
---

## ⚡ Étape 2 — Créer une instance de StreamReader

La classe `StreamReader` permet d’ouvrir un fichier en mode **Lecture** et de créer un lien entre le programme et ce fichier.

```csharp
StreamReader inputFile = new StreamReader("culture_quebecoise_101.txt");
```

Souvenez-vous, nous pouvons aussi indiquer le chemin complet du fichier :

```csharp
StreamReader inputFile = new StreamReader("C:/EspaceLabo/culture_quebecoise_101.txt");
```

### ⚠️ Attention : Vérifier si le fichier existe

Si le fichier qu'on souhaite lire n’existe pas, une erreur (`FileNotFoundException`) sera levée. 
Avant d’ouvrir un fichier, on peut **vérifier son existence** avec la méthode `File.Exists(...)` :

```csharp
if (!File.Exists("C:/EspaceLabo/culture_quebecoise_101.txt"))
{
    Console.WriteLine("Ce fichier n'existe pas!");
    return; // Sortir : impossible de continuer le traitement.
}
```

| Méthode | Valeur de retour | Description |
|----------|------------------|--------------|
| `File.Exists(string path)` | bool | Détermine si le fichier spécifié existe ou non sur le disque. |

---

## 📖 Étape 3 — Lire des données avec `ReadLine()` et `ReadToEnd()`

### 🧩 Option 1 — Lire une ligne à la fois avec `ReadLine()` 🐌

Vous connaissez déjà `Console.ReadLine()` pour lire les saisies dans la console.  
Avec `StreamReader`, c’est la même idée, mais appliquée à un **fichier texte**.

```csharp
string expressionQuebecoise = inputFile.ReadLine();
```

Chaque appel à `ReadLine()` :
* lit la ligne actuelle du fichier,  
* fait avancer le **pointeur de lecture** à la ligne suivante.
  

🪄 **Exemple visuel :**


Fichier `culture_quebecoise_101.txt` : 
```
Avoir les yeux dans la graisse de bine
Avoir de la broue dans le toupet
Attache ta tuque avec d’la broche
Se faire passer un sapin
Se tirer une bûche
```

1️⃣ Lorsqu'on ouvre le fichier en mode *lecture*, un pointeur de lecture est placé au tout début du fichier.

```csharp
StreamReader inputFile = new StreamReader("C:/EspaceLabo/culture_quebecoise_101.txt");
```

```
→ Avoir les yeux dans la graisse de bine
Avoir de la broue dans le toupet
Attache ta tuque avec d’la broche
Se faire passer un sapin
Se tirer une bûche
```

2️⃣ Après le premier `ReadLine()`, la première ligne est capturée dans une variable et le pointeur de lecture passe à la seconde ligne.

```csharp
string ligne1 = inputFile.ReadLine();
// ligne1 = "Avoir les yeux dans la graisse de bine"
```

```
Avoir les yeux dans la graisse de bine
→ Avoir de la broue dans le toupet
Attache ta tuque avec d’la broche
Se faire passer un sapin
Se tirer une bûche
```

3️⃣ Après un second `ReadLine()`, la seconde ligne est capturée dans une variable et le pointeur de lecture passe à la troisième ligne.

```csharp
string ligne2 = inputFile.ReadLine();
// ligne2 = "Avoir de la broue dans le toupet"
```

```
Avoir les yeux dans la graisse de bine
Avoir de la broue dans le toupet
→ Attache ta tuque avec d’la broche
Se faire passer un sapin
Se tirer une bûche
```

 Ainsi de suite… jusqu’à la fin du fichier 🏁

⚠️ Quand le pointeur de lecture atteint la fin du fichier, `ReadLine()` retourne `null`.

---

#### 🔁 Lire un fichier complet avec une boucle `while`

Dans les séances précédentes, nous avons vu que la boucle `while` permet d’exécuter du code en boucle tant qu’une condition est vraie. En combinant la boucle `while` et la méthode `ReadLine()`, il est possible de lire un fichier, une ligne à la fois, jusqu’à atteindre la fin du fichier. 
Pour ce faire, on veut vérifier après chaque lecture si nous avons atteint le `EndOfStream` de notre fichier :

```csharp
string expressionQuebecoise;

while (!inputFile.EndOfStream) // Tant qu'on n'est pas à la fin du fichier
{
    expressionQuebecoise = inputFile.ReadLine();
    Console.WriteLine(expressionQuebecoise);
}
```

🌳 **Arbre logique de la lecture ligne par ligne avec la boucle `while` :**
```
Ouvrir le fichier en mode lecture
↓
Boucle : Avons-nous atteint EndOfStream ?
├── Oui → Fermer le fichier.
└── Non → Lire la ligne et déplacer le pointeur de lecture à la prochaine ligne. Recommencer la boucle.

```

---

### 🧩 Option 2 — Lire tout le fichier d’un coup : `ReadToEnd()` 🏎

La fonction `ReadToEnd()` permet de lire tout le contenu d'un fichier d'un coup et de le capturer dans **une seule variable** :

```csharp
string contenu = inputFile.ReadToEnd();
// contenu = "Avoir les yeux dans la graisse de bine\r\nAvoir de la broue dans le toupet\r\nAttache ta tuque avec d’la broche\r\nSe faire passer un sapin\r\nSe tirer une bûche"

```

Que remarquez-vous ?
>> la variable `contenu` contient explicitement **les caractères de fin de ligne** (\r\n dans cet exemple).
Ces caractères servent à marquer les retours à la ligne dans le texte, et leur représentation peut varier selon le système d’exploitation.

---

## 🔒 Étape 4 — Fermer le fichier

Une fois la lecture terminée, n'oubliez pas de **fermer le fichier** pour libérer les ressources :

```csharp
inputFile.Close();
```

### 💡 Pro-tip : `using`

Avec la syntaxe `using`, le fichier se fermera automatiquement à la fin du bloc :

```csharp
using (StreamReader inputFile = new StreamReader("C:/EspaceLabo/culture_quebecoise_101.txt"))
{
    string ligne;
    while (!inputFile.EndOfStream)
    {
        ligne = inputFile.ReadLine();
        Console.WriteLine(ligne);
    }
}
```

---

## ✅ Exemple complet — Lecture des expressions québécoises 🔵⚪⚜️

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string path = "C:/EspaceLabo/culture_quebecoise_101.txt";

        if (!File.Exists(path))
        {
            Console.WriteLine("Le fichier n'existe pas!");
            return;
        }

        using (StreamReader inputFile = new StreamReader(path))
        {
            string ligne;
            // Lecture une ligne à la fois
            while (!inputFile.EndOfStream)
            {
                ligne = inputFile.ReadLine();
                Console.WriteLine(ligne);
            }

            // Lecture de tout le contenu d'un seul coup
            string contenu = reader.ReadToEnd();
            Console.WriteLine(contenu);

        }
    }
}
```

---

## 🎁 Résumé des étapes

| Étape | Action | Exemple |
|:--:|:--|:--|
| 1️⃣ | Ajouter `using System.IO;` | `using System.IO;` |
| 2️⃣ | Créer un objet `StreamReader` | `StreamReader file = new StreamReader("fichier.txt");` |
| 3️⃣ | Lire les données | `string line = file.ReadLine();` ou `string allLines = file.ReadToEnd();` |
| 4️⃣ | Fermer le fichier | `file.Close();` |

---

## 🧭 À retenir

* Toujours vérifier si le fichier existe avant de le lire.
* `ReadLine()` → lit une seule ligne à la fois.
* `ReadToEnd()` → lit tout le contenu d’un coup.
* `EndOfStream` → permet de vérifier si on a atteint la fin du fichier.
* Toujours fermer le fichier avec `.Close()` (ou utiliser `using`).


## 📚 Ressources supplémentaires

👉 Notions C# : [Fichiers texte — StreamReader](https://info.cegepmontpetit.ca/notions-csharp/documentation/fichier-texte#la-classe-streamreader--lecture-dans-un-fichier-texte)

Vous devez réaliser le labo suivant :
 [🧪 Labo 9.2](/laboratoire/laboratoire9.2)

