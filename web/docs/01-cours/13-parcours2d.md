---
description: Boucles imbriquées et parcours des tableaux 2D
---

# Parcours de tableaux 2D


## Boucles [`for`](https://info.cegepmontpetit.ca/notions-csharp/documentation/structures-de-controle/for-imbrique) imbriquées

On peut imbriquer les boucles `for` pour parcourir des structures comme les tableaux à plusieurs dimensions.

---

### Exemple : parcours par **rangée**

On affiche tous les éléments d’un tableau 2D (3 rangées × 2 colonnes) :

```csharp
int[,] tabNotes = { { 79, 90 },
                    { 80, 50 },
                    { 67, 95 } };

for (int rangee = 0; rangee < tabNotes.GetLength(0); rangee++)
{
    for (int colonne = 0; colonne < tabNotes.GetLength(1); colonne++)
    {
        Console.Write(tabNotes[rangee, colonne] + " ");
    }
    Console.WriteLine();
}
```

**Résultat :**

```output
79 90
80 50
67 95
```

---

### Exemple : parcours par **colonne**

On affiche tous les éléments d’un tableau 2D (3 rangées × 2 colonnes) colonne par colonne :

```csharp
int[,] tabNotes = { { 79, 90 },
                    { 80, 50 },
                    { 67, 95 } };

for (int colonne = 0; colonne < tabNotes.GetLength(1); colonne++)
{
    for (int rangee = 0; rangee < tabNotes.GetLength(0); rangee++)
    {
        Console.Write(tabNotes[rangee, colonne] + " ");
    }
    Console.WriteLine();
}
```

**Résultat :**

```output
79 80 67
90 50 95
```

---

### Exemple : somme des éléments **par rangée**

```csharp
int[,] tabNotes = { { 9, 5 },
                    { 8, 7 },
                    { 7, 5 } };

int[] tabSommeRangee = { 0, 0, 0 }; // Somme des éléments de chaque rangée
int somme;

for (int rangee = 0; rangee < tabNotes.GetLength(0); rangee++)
{
    somme = 0;
    for (int colonne = 0; colonne < tabNotes.GetLength(1); colonne++)
    {
        somme += tabNotes[rangee, colonne];
    }
    tabSommeRangee[rangee] = somme;
}
```

**Résultat :**

```output
{ 14, 15, 12 }
```

---

### Exemple : somme des éléments **par colonne**

```csharp
int[,] tabNotes = { { 9, 5 },
                    { 8, 7 },
                    { 7, 5 } };

int[] tabSommeColonne = { 0, 0 }; // Somme des éléments de chaque colonne
int somme;

for (int colonne = 0; colonne < tabNotes.GetLength(1); colonne++)
{
    somme = 0;
    for (int rangee = 0; rangee < tabNotes.GetLength(0); rangee++)
    {
        somme += tabNotes[rangee, colonne];
    }
    tabSommeColonne[colonne] = somme;
}
```

**Résultat :**

```output
{ 24, 17 }
```