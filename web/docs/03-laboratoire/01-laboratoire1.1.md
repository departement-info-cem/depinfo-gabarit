---
title: A - Premiers pas en C#
---

# 🧪 Labo 1.1A – Premiers pas en C#


🎥 Visionne cette capsule pour bien démarrer :  
<a href="https://youtu.be/PAdnzYcKcRQ?si=iacc8sIyPRtffAcT" target="_blank" rel="noopener noreferrer">Première application console en C#</a>

## 🎯 Objectif
Apprendre à :
- Créer un projet **Console** dans Visual Studio.
- Comprendre la structure de base d’un programme C#.
- Écrire, exécuter et tester un programme simple qui affiche du texte.

---

## 🚀 Étape 1 – Créer le projet

1. **Ouvrir Visual Studio**.
2. Cliquez sur **Créer un nouveau projet**.
3. Choisissez **Application console (.NET 8)** ou **Application console (.NET 9)**.
4. Cliquez sur **Suivant**.
5. Donnez un **nom** à votre projet (ex. `Laboratoire1_Ex1`).
6. Cliquez sur **Suivant**.
7. À l’étape **Informations supplémentaires** :

   > ⚠️ **Important** :  
   > Cochez **« N’utilisez pas d’instructions de niveau supérieur. »**  
   > Cela générera un fichier `Program.cs` avec une **méthode `Main()` dans une classe `Program`**.  
   > Toutes vos méthodes seront définies **dans cette classe**, avec le mot-clé `static`.

8. Cliquez sur **Créer**.

---

## 📂 Étape 2 – Comprendre la structure

Après la création, Visual Studio génère automatiquement un fichier **`Program.cs`** :

```csharp
using System;

namespace Laboratoire1_Ex1
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

**Explications** :
- `using System;` → donne accès aux fonctionnalités de base (comme `Console.WriteLine`).
- `namespace Laboratoire1_Ex1` → regroupe le code du projet.
- `class Program` → classe principale où se trouve le programme.
- `static void Main` → point d’entrée du programme. C’est la première méthode exécutée.

---

## ✏️ Étape 3 – Écrire le programme

Nous allons écrire un programme qui affiche deux lignes de texte.

### Code à saisir :
```csharp
using System;

namespace Laboratoire1_Ex1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bonjour");
            Console.WriteLine("Bienvenue au cours de programmation!");
        }
    }
}
```

---

## ▶️ Étape 4 – Exécuter le programme

1. Cliquez sur **Démarrer** (triangle vert en haut) ou appuyez sur **F5**.
2. Une fenêtre noire (console) s’ouvrira avec :
```
Bonjour
Bienvenue au cours de programmation!
```

---

## 🧪 Étape 5 – Expérimenter

- Modifiez le texte affiché.
- Ajoutez une troisième ligne avec `Console.WriteLine("Bonne journée!");`.
- Relancez le programme pour voir le changement.

---

## 📎 Résumé des notions vues
- Structure d’un programme C# avec `Main()`.
- Affichage dans la console avec `Console.WriteLine`.
- Importance de désactiver les instructions de niveau supérieur pour avoir un `Main()` classique.
