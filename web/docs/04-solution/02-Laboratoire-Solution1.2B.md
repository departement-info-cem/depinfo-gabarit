# ✅ Solutions – Laboratoire 1.2B 

---

## 🔢 Exercice 1 – Moyenne pondérée

```csharp
Console.Write("Note 1 : ");
double note1 = double.Parse(Console.ReadLine());
Console.Write("Note 2 : ");
double note2 = double.Parse(Console.ReadLine());
Console.Write("Note 3 : ");
double note3 = double.Parse(Console.ReadLine());
double moyenne = note1 * 0.3 + note2 * 0.3 + note3 * 0.4;
Console.WriteLine("Moyenne : " + moyenne);
```

---

## 🌡️ Exercice 2 – Conversion de température

```csharp
Console.Write("Température : ");
double t = double.Parse(Console.ReadLine());
Console.WriteLine("En Fahrenheit : " + (t * 9 / 5 + 32));
Console.WriteLine("En Celsius : " + ((t - 32) * 5 / 9));
```

---

## 🍽️ Exercice 3 – Taxes et pourboire

```csharp
Console.Write("Prix du repas : ");
double prix = double.Parse(Console.ReadLine());
double total = prix + (prix * 0.15) + (prix * 0.10);
Console.WriteLine("Total à payer : " + total);
```

---

## ⏱️ Exercice 4 – Conversion de minutes

```csharp
Console.Write("Minutes : ");
int minutes = int.Parse(Console.ReadLine());
int heures = minutes / 60;
int jours = heures / 24;
Console.WriteLine("Heures : " + heures);
Console.WriteLine("Jours : " + jours);
```

---

## 🔁 Exercice 5 – Permutation de trois variables

```csharp
Console.Write("A : ");
int A = int.Parse(Console.ReadLine());
Console.Write("B : ");
int B = int.Parse(Console.ReadLine());
Console.Write("C : ");
int C = int.Parse(Console.ReadLine());

int tempA = A;
A = B;
B = C;
C = tempA;

Console.WriteLine($"Après permutation : A = {A}, B = {B}, C = {C}");
```

---

## 🛒 Exercice 6 – Total de plusieurs articles

```csharp
Console.Write("Article 1 - quantité : ");
int q1 = int.Parse(Console.ReadLine());
Console.Write("Article 1 - prix : ");
double p1 = double.Parse(Console.ReadLine());
Console.Write("Article 2 - quantité : ");
int q2 = int.Parse(Console.ReadLine());
Console.Write("Article 2 - prix : ");
double p2 = double.Parse(Console.ReadLine());

double totalArticles = q1 * p1 + q2 * p2;
Console.WriteLine("Total : " + totalArticles);
```

---

## ➗ Exercice 7 – Division entière vs décimale

```csharp
int x = 5, y = 2;
Console.WriteLine("Division entière : " + (x / y));

double resultatDecimal = (double)x / y;
Console.WriteLine("Division décimale : " + resultatDecimal);
```
