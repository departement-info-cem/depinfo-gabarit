# ✅ Solutions – Laboratoire 4.1 – Méthodes avec paramètres

---

## 🔹 Exercice 1 – Message personnalisé

```csharp
static void MessagePersonnalise(string nom, int age, string ville)
{
    Console.WriteLine($"Bonjour {nom}, vous avez {age} ans et vous venez de {ville}.");
}

// Exemple d'appel :
MessagePersonnalise("Benoit Caldairou", 20, "Montréal");
```

---

## 🔹 Exercice 2 – Périmètre d’un rectangle

```csharp
static void PerimetreRectangle(double largeur, double hauteur)
{
    double perimetre = 2 * (largeur + hauteur);
    Console.WriteLine("Périmètre : " + perimetre);
}

// Exemple d'appel :
PerimetreRectangle(5, 3);
```

---

## 🔹 Exercice 3 – Table de multiplication (Sans boucle)

```csharp
static void TableMultiplication(int nombre)
{
    Console.WriteLine($"{nombre} x 1 = {nombre * 1}");
    Console.WriteLine($"{nombre} x 2 = {nombre * 2}");
    Console.WriteLine($"{nombre} x 3 = {nombre * 3}");
    Console.WriteLine($"{nombre} x 4 = {nombre * 4}");
    Console.WriteLine($"{nombre} x 5 = {nombre * 5}");
    Console.WriteLine($"{nombre} x 6 = {nombre * 6}");
    Console.WriteLine($"{nombre} x 7 = {nombre * 7}");
    Console.WriteLine($"{nombre} x 8 = {nombre * 8}");
    Console.WriteLine($"{nombre} x 9 = {nombre * 9}");
    Console.WriteLine($"{nombre} x 10 = {nombre * 10}");
}

// Exemple d'appel :
TableMultiplication(3);
```

---

## 🔹 Exercice 4 – Pyramide d’étoiles (Sans boucle)

```csharp
static void PyramideEtoiles(int lignes)
{
    if (lignes >= 1) Console.WriteLine("*");
    if (lignes >= 2) Console.WriteLine("**");
    if (lignes >= 3) Console.WriteLine("***");
    if (lignes >= 4) Console.WriteLine("****");
    if (lignes >= 5) Console.WriteLine("*****");
}

// Exemple d'appel :
PyramideEtoiles(5);
```

---

## 🔹 Exercice 5 – Année bissextile

```csharp
static void EstBissextile(int annee)
{
    if (annee % 400 == 0 || (annee % 4 == 0 && annee % 100 != 0))
    {
        Console.WriteLine($"{annee} est bissextile");
    }
    else
    {
        Console.WriteLine($"{annee} n'est pas bissextile");
    }
}

// Exemple d'appel :
EstBissextile(2024);
EstBissextile(1900);
```

---
