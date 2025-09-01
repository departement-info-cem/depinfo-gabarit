# ✅ Solutions – Laboratoire 2.1B

---

## 🟡 Exercice 1

```csharp
Console.Write("Quel est le mot magique ? ");
string mot = Console.ReadLine();

if (mot == "abracadabra")
{
    Console.WriteLine("Tu connais la magie toi !");
}
else
{
    Console.WriteLine("Mot incorrect... essaie encore.");
}
```

---

## 🟡 Exercice 2

```csharp
Console.Write("Prénom : ");
string prenom = Console.ReadLine();

Console.Write("Code : ");
int code = int.Parse(Console.ReadLine());

if (prenom == "Alice" && code == 1234)
{
    Console.WriteLine("Accès accordé");
}
else
{
    Console.WriteLine("Accès refusé");
}
```

---

## 🟡 Exercice 3

```csharp
int nombreMystere = 7;

Console.Write("Choisis un chiffre : ");
int chiffre = int.Parse(Console.ReadLine());

if (chiffre == nombreMystere)
{
    Console.WriteLine("Félicitations, tu as gagné !");
}
else
{
    Console.WriteLine("Désolé, ce n’est pas le bon numéro");
}
```

---

## 🟡 Exercice 4

```csharp
Console.Write("Température : ");
int temperature = int.Parse(Console.ReadLine());

if (temperature < 0)
{
    Console.WriteLine("Il gèle dehors !");
}
else if (temperature <= 25)
{
    Console.WriteLine("Température agréable");
}
else
{
    Console.WriteLine("Il fait chaud !");
}
```

---

## 🟡 Exercice 5

```csharp
Console.Write("Quel est ton âge ? ");
int age = int.Parse(Console.ReadLine());

if (age < 13)
{
    Console.WriteLine("Tu peux regarder : Coco");
}
else if (age >= 13 && age <= 17)
{
    Console.WriteLine("Tu peux regarder : Spider-Man");
}
else
{
    Console.WriteLine("Tu peux regarder : Inception");
}
```

---

## 🟡 Exercice 6

```csharp
Console.Write("Nombre A : ");
int a = int.Parse(Console.ReadLine());

Console.Write("Nombre B : ");
int b = int.Parse(Console.ReadLine());

Console.Write("Nombre C : ");
int c = int.Parse(Console.ReadLine());

int plusGrand = a;

if (b > plusGrand)
{
    plusGrand = b;
}
if (c > plusGrand)
{
    plusGrand = c;
}

Console.WriteLine($"Le plus grand est : {plusGrand}");
```

---

## 🟡 Exercice 7

```csharp
int score = 0;

Console.Write("As-tu dormi 8h ? (true/false) ");
bool sommeil = bool.Parse(Console.ReadLine());
if (sommeil) score++;

Console.Write("As-tu mangé ce matin ? (true/false) ");
bool mange = bool.Parse(Console.ReadLine());
if (mange) score++;

Console.Write("As-tu fait tes devoirs ? (true/false) ");
bool devoirs = bool.Parse(Console.ReadLine());
if (devoirs) score++;

Console.WriteLine($"Score : {score}");

if (score == 3)
{
    Console.WriteLine("Tu es prêt pour la journée !");
}
else if (score >= 1)
{
    Console.WriteLine("Pas mal, mais tu peux faire mieux !");
}
else
{
    Console.WriteLine("Aïe... une journée difficile t'attend");
}
```

---

## 🟡 Exercice 8

```csharp
int score = 10;

score += 5;
score *= 2;
score++;
score--;
score--;

Console.WriteLine($"Score final : {score}");
```

---
