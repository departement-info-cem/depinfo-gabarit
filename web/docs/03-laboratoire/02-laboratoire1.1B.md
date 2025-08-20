---
title: B - Carte de visite
---

# 🧪 Labo 1.1B – Carte de visite



## 🎯 Objectif
Créer un programme qui demande des informations simples à l’utilisateur et les affiche dans une phrase complète.

---

## 🚀 Étape 1 – Créer le projet

1. **Ouvrir Visual Studio**.
2. Cliquez sur **Créer un nouveau projet**.
3. Choisissez **Application console (.NET 6)** ou **Application console (.NET 7)**.
4. Cliquez sur **Suivant**.
5. Donnez un **nom** à votre projet (ex. `Laboratoire1_Ex2`).
6. Cliquez sur **Suivant**.
7. À l’étape **Informations supplémentaires** :

   > ⚠️ **Important** :  
   > Cochez **« N’utilisez pas d’instructions de niveau supérieur. »**  
   > Cela générera un fichier `Program.cs` avec une **méthode `Main()` dans une classe `Program`**.  
   > Toutes vos méthodes seront définies **dans cette classe**, avec le mot-clé `static`.

8. Cliquez sur **Créer**.

---

## 📂 Étape 2 – Comprendre la structure

Le fichier **`Program.cs`** ressemblera à ceci :

```csharp
using System;

namespace Laboratoire1_Ex2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Votre code ira ici
        }
    }
}
```

---

## ✏️ Étape 3 – Écrire le programme

Nous allons :
1. Demander le prénom
2. Demander la passion
3. Demander la couleur préférée
4. Afficher un message personnalisé

### Code à saisir :
```csharp
using System;

namespace Laboratoire1_Ex2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Demande le prénom
            Console.Write("Quel est ton prénom ? ");
            string prenom = Console.ReadLine(); // Lecture au clavier, stockée dans la variable prenom

            // Demande la passion
            Console.Write("Quelle est ta passion ? ");
            string passion = Console.ReadLine(); // Lecture au clavier, stockée dans la variable passion

            // Demande la couleur préférée
            Console.Write("Quelle est ta couleur préférée ? ");
            string couleur = Console.ReadLine(); // Lecture au clavier, stockée dans la variable couleur

            // Affichage du message final
            Console.WriteLine("Bonjour " + prenom + ", ta passion est " + passion + " et ta couleur préférée est le " + couleur + ".");
        }
    }
}
```

---

## ▶️ Étape 4 – Exécuter le programme

1. Cliquez sur **Démarrer** (triangle vert en haut) ou appuyez sur **F5**.
2. Une fenêtre console s’ouvrira.
3. Répondez aux questions et observez le message affiché.

**Exemple attendu :**
```
Quel est ton prénom ? Alex
Quelle est ta passion ? Musique
Quelle est ta couleur préférée ? Bleu
Bonjour Alex, ta passion est Musique et ta couleur préférée est le Bleu.
```

---

## 🧪 Étape 5 – Expérimenter

- Changez l’ordre des questions.
- Ajoutez une quatrième question, par exemple « Ton animal préféré ».
- Testez différentes valeurs pour voir comment le message change.

---

## 📎 Résumé des notions vues
- Lecture d’une entrée utilisateur avec `Console.ReadLine()`
- Stockage des valeurs dans des variables `string`
- Affichage personnalisé avec `Console.WriteLine()` et concaténation
