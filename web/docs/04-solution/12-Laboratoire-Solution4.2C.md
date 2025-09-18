# ✅ Solution – Labo 4.2C

## 🔴 Exercice 1
```csharp
static void Main(string[] args)
{
    int[] tab = { 10, 20, 30, 40, 50 };

    int somme = 0;
    for (int i = 0; i < tab.Length; i++)
    {
        somme += tab[i];
    }
    double moyenne = (double)somme / tab.Length;

    Console.WriteLine("Somme : " + somme);
    Console.WriteLine("Moyenne : " + moyenne);
}
```

---

## 🔴 Exercice 2
```csharp
static void Main(string[] args)
{
    int[] tab = { 45, 12, 99, 18, 62 };

    int min = tab[0];
    int max = tab[0];

    for (int i = 1; i < tab.Length; i++)
    {
        if (tab[i] < min) min = tab[i];
        if (tab[i] > max) max = tab[i];
    }

    Console.WriteLine("Min : " + min);
    Console.WriteLine("Max : " + max);
}
```

---

## 🔴 Exercice 3
```csharp
static void Main(string[] args)
{
    int[] tab = { 2, 7, 4, 9, 12, 5 };

    int nbPairs = 0;
    int nbImpairs = 0;

    for (int i = 0; i < tab.Length; i++)
    {
        if (tab[i] % 2 == 0)
            nbPairs++;
        else
            nbImpairs++;
    }

    Console.WriteLine("Pairs : " + nbPairs);
    Console.WriteLine("Impairs : " + nbImpairs);
}
```

---

## 🔴 Exercice 4
```csharp
static void Main(string[] args)
{
    int[] tab = { 1, 2, 3, 4 };

    int[] resultat = Doubler(tab);

    Console.WriteLine("Tableau d'origine : " + string.Join(" ", tab));
    Console.WriteLine("Tableau doublé : " + string.Join(" ", resultat));
}

static int[] Doubler(int[] source)
{
    int[] nouveau = new int[source.Length];
    for (int i = 0; i < source.Length; i++)
    {
        nouveau[i] = source[i] * 2;
    }
    return nouveau;
}
```

---

## 🔴 Exercice 5
```csharp
static void Main(string[] args)
{
    int[] tab = { 10, 20, 30, 40, 50 };

    int[] inversé = Inverser(tab);

    Console.WriteLine("Avant : " + string.Join(" ", tab));
    Console.WriteLine("Après : " + string.Join(" ", inversé));
}

static int[] Inverser(int[] source)
{
    int[] resultat = new int[source.Length];
    for (int i = 0; i < source.Length; i++)
    {
        resultat[i] = source[source.Length - 1 - i];
    }
    return resultat;
}
```

---

## 🔴 Exercice 6
```csharp
static void Main(string[] args)
{
    int[] tab = { 10, 20, 30, 40, 50, 0 };

    AnalyserTableau(tab);
}

static void AnalyserTableau(int[] t)
{
    int somme = 0;
    int min = t[0];
    int max = t[0];

    for (int i = 0; i < t.Length; i++)
    {
        somme += t[i];
        if (t[i] < min) min = t[i];
        if (t[i] > max) max = t[i];
    }

    double moyenne = (double)somme / t.Length;

    Console.WriteLine("Somme : " + somme);
    Console.WriteLine("Moyenne : " + moyenne);
    Console.WriteLine("Min : " + min);
    Console.WriteLine("Max : " + max);
}
```
