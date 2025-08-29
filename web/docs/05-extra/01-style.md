---
title: Style de la console
---

# 🎉 S'amuser avec la console en C#

⚠️ **Important** : Les notions de ce document ne seront **pas à l'examen**.  
Elles servent uniquement à explorer et à **s'amuser avec la console**.

---

## 🎨 Changer les couleurs du texte et du fond

```csharp
Console.ForegroundColor = ConsoleColor.Red;
Console.BackgroundColor = ConsoleColor.Yellow;
Console.WriteLine("Texte rouge sur fond jaune!");

// Remettre les couleurs par défaut
Console.ResetColor();
```

💡 Essayez plusieurs couleurs avec `ConsoleColor` : `Blue`, `Green`, `Cyan`, `Magenta`, `White`, etc.

---

## ↔️ Déplacer le curseur

```csharp
Console.SetCursorPosition(10, 5);
Console.WriteLine("Ceci est écrit à la colonne 10 et ligne 5.");
```

💡 Utile pour créer des petites interfaces visuelles ou des jeux.

---

## 📏 Effacer l'écran

```csharp
Console.Clear();
```

Cela nettoie toute la console et remet le curseur en haut à gauche.

---

## 🎵 Jouer un son (bip)

```csharp
Console.Beep(); // Bip standard
Console.Beep(1000, 500); // Fréquence de 1000 Hz, durée de 500 ms
```

💡 Vous pouvez varier la fréquence et la durée pour créer des petites mélodies.

---

## ⌨️ Lire une touche sans valider avec Enter

```csharp
ConsoleKeyInfo touche = Console.ReadKey(true);
Console.WriteLine($"Vous avez appuyé sur : {touche.Key}");
```

💡 Cela permet de réagir immédiatement aux touches, pratique pour des mini-jeux.

---

## 🌈 Texte qui change de couleur (lettre par lettre)

```csharp
string texte = "Hello, console colorée !";
ConsoleColor[] palette = {
    ConsoleColor.Red, ConsoleColor.Yellow, ConsoleColor.Green,
    ConsoleColor.Cyan, ConsoleColor.Blue, ConsoleColor.Magenta
};

for (int i = 0; i < texte.Length; i++)
{
    Console.ForegroundColor = palette[i % palette.Length];
    Console.Write(texte[i]);
    System.Threading.Thread.Sleep(100); // petite pause
}

Console.ResetColor();
Console.WriteLine();
```

💡 Chaque lettre est affichée avec une couleur différente.  

---

## ⏱️ Compteur qui se met à jour

```csharp
for (int i = 0; i <= 10; i++)
{
    Console.SetCursorPosition(0, 10); // toujours la même ligne
    Console.Write($"Compteur : {i}   "); // espaces pour effacer l’ancien
    System.Threading.Thread.Sleep(500); // 0,5 seconde
}
```

💡 Le compteur s’écrit toujours au même endroit à l’écran grâce à `Console.SetCursorPosition()`.  

---

