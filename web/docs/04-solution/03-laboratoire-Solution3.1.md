
# ✅ Solutions – Laboratoire 3.1

---

## 🟢 Exercice 1

```csharp
bool jeSuisFatigue = true;

if (jeSuisFatigue)
{
    Console.WriteLine("Voici la solution : café");
}
````

---

## 🟢 Exercice 2

```csharp
Console.Write("Quel est ton âge ? ");
int age = int.Parse(Console.ReadLine());

if (age >= 18)
{
    Console.WriteLine("Tu es majeur.");
}
```

---

## 🟢 Exercice 3

```csharp
Console.Write("Entrez un nombre : ");
int nombre = int.Parse(Console.ReadLine());

if (nombre % 2 == 0)
{
    Console.WriteLine("Nombre pair");
}
else
{
    Console.WriteLine("Nombre impair");
}
```

---

## 🟢 Exercice 4

```csharp
Console.Write("Prix : ");
double prix = double.Parse(Console.ReadLine());

if (prix >= 100)
{
    Console.WriteLine("Je vais chercher un rip-off cheap sur Amazon à la place");
}
else if (prix < 30)
{
    Console.WriteLine("Wow c'est un beau prix. C'est suspect.");
}
else
{
    Console.WriteLine("Prix raisonnable");
}
```

---

## 🟢 Exercice 5

```csharp
Console.Write("Aliment préféré : ");
string aliment = Console.ReadLine();

if (aliment == "brocoli")
{
    Console.WriteLine("Un des aliments avec le plus de nutriments");
}
else
{
    Console.WriteLine("Le brocoli est une meilleure option");
}
```

---

## 🟢 Exercice 6

```csharp
Console.Write("Âge : ");
int age = int.Parse(Console.ReadLine());

Console.Write("Heures de sommeil : ");
int heures = int.Parse(Console.ReadLine());

if (age >= 18 && age <= 30 && heures < 6)
{
    Console.WriteLine("Jeune adulte fatigué");
}
```

---

## 🟢 Exercice 7

```csharp
Console.Write("Quel est ton âge ? ");
int age = int.Parse(Console.ReadLine());

if (age < 4 || age > 99)
{
    Console.WriteLine("Tu ne peux pas jouer avec des LEGO");
}
else
{
    Console.WriteLine("Tu peux jouer avec des LEGO");
}
```

---

## 🟢 Exercice 8

```csharp
Console.Write("Es-tu prêt ? (true/false) ");
bool estPret = bool.Parse(Console.ReadLine());

if (!estPret)
{
    Console.WriteLine("Tu n’es pas prêt.");
}
```

---
