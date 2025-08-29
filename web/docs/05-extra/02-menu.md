---
title: Faire des menus en console
---

# 🖥️ Créer un menu coloré dans la console

⚠️ **Important** : Ceci est un mini-projet ludique pour explorer la console.  
Il ne fait pas partie de la matière à l’examen.

---

## 🎯 Objectif
Créer un petit **menu interactif** dans la console où les options s’affichent avec des couleurs.

---

## 📋 Étapes

1. Effacer l’écran avec `Console.Clear()`.
2. Afficher un titre en **couleur vive** (par exemple `Cyan`).
3. Afficher plusieurs options de menu avec des couleurs différentes.
4. Lire le choix de l’utilisateur avec `Console.ReadKey()`.
5. Réagir au choix en affichant un message correspondant.

---

## 📝 Exemple de code

```csharp
static void Main(string[] args)
{
    Console.Clear();

    Console.ForegroundColor = ConsoleColor.Cyan;
    Console.WriteLine("========================");
    Console.WriteLine("   MENU PRINCIPAL");
    Console.WriteLine("========================");
    Console.ResetColor();

    Console.ForegroundColor = ConsoleColor.Green;
    Console.WriteLine("1 - Démarrer le jeu");

    Console.ForegroundColor = ConsoleColor.Yellow;
    Console.WriteLine("2 - Options");

    Console.ForegroundColor = ConsoleColor.Red;
    Console.WriteLine("3 - Quitter");
    Console.ResetColor();

    Console.WriteLine("\nVotre choix : ");
    ConsoleKeyInfo choix = Console.ReadKey(true);

    Console.Clear();
    switch (choix.Key)
    {
        case ConsoleKey.D1:
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Vous avez choisi : Démarrer le jeu !");
            break;
        case ConsoleKey.D2:
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("Vous avez choisi : Options");
            break;
        case ConsoleKey.D3:
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Vous avez choisi : Quitter");
            break;
        default:
            Console.WriteLine("Choix invalide.");
            break;
    }

    Console.ResetColor();
}
```

---

## 💡 Améliorations possibles
- Changer la couleur du **fond** (`Console.BackgroundColor`).
- Ajouter une **boucle** pour que le menu revienne après un choix.
- Créer un petit **sous-menu** (ex. dans « Options »).

---