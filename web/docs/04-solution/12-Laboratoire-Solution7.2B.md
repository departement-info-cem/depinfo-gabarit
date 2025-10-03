# ✅ Solution – Labo 7.2B

## 🔢Switch... case 
### 🟡 Exercice S2.1 – Calculer l’aire 2.0
```csharp
```
---

### 🟡 Exercice S2.2 – Classes de permis 2.0  
```csharp
```
---

### 🟡 Exercice S2.3 – Cinéma 2.0  
```csharp
```
---

## 🌀WHILE
### 🟡 Exercice W2.1 – Le sortilège de la journée 
```csharp
```
---

### 🟡 Exercice W2.2 – Devine le film de Ghibli  
```csharp
```
---

## ➡️🌀DO WHILE
### 🟡 Exercice DW2.1 – Les sortilèges colorés 
```csharp
```
---
### 🟡 Exercice DW2.2 – Où est le magicien ? 
```csharp
static void Main(string[] args)
{
    // Permet d'afficher correctement les icônes, symboles et émojis
    Console.OutputEncoding = System.Text.Encoding.UTF8;

    string magicien = "🧙‍♂️"; // ou "🧙‍♀️" pour une magicienne !
    string croix = "❌";

    // Grille de jeu de 5x5
    string[,] plateau = {
        {"🧝‍♂️","🧛‍♂️","🧞‍♂️","🧚‍♂️","🧑‍🚀"},
        {"🧑‍⚕️","🧑‍🍳","🧑‍🏫","🧑‍🔧","🧑‍💻"},
        {"🧑‍🎨","🧑‍🚒","🧑‍✈️","🧘‍♂️","🧑‍🌾"},
        {"🧑‍🎤","🧑‍🏭","🧜‍♂️","🧛‍♀️","🧞‍♀️"},
        {"🧚‍♀️","🧜‍♀️","🧝‍♀️","🧑‍🦽","🧑‍🦯"}
    };

    Random generateurDeRangee = new Random();
    int rangeeAleatoire = generateurDeRangee.Next(0, plateau.GetLength(0));

    Random generateurDeColonne = new Random();
    int colonneAleatoire = generateurDeColonne.Next(0, plateau.GetLength(1));

    plateau[rangeeAleatoire, colonneAleatoire] = magicien;

    int rangee, colonne;

    do
    {
        Console.Clear();

        for (int i = 0; i < plateau.GetLength(0); i++)
        {
            for (int j = 0; j < plateau.GetLength(1); j++)
            {
                Console.Write(plateau[i, j] + " ");
            }
            Console.WriteLine();
        }

        Console.Write($"Choix de la rangée (1 à {plateau.GetLength(0)}): ");
        rangee = int.Parse(Console.ReadLine());

        Console.Write($"Choix de la colonne (1 à {plateau.GetLength(1)}): ");
        colonne = int.Parse(Console.ReadLine());

        plateau[rangee-1,colonne-1] = croix;
    }
    while (!(rangee-1 == rangeeAleatoire && colonne-1 == colonneAleatoire));

    Console.WriteLine($"Bravo, le magicien a été trouvé à la position [{rangee},{colonne}] !");
}
```
---

## 🔢Switch... case
### 🔴 Exercice S3.1 – Les films de Denis
```csharp
```