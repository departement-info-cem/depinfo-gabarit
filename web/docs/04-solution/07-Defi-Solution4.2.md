---
title: 🏆 Solutions - Défi 4.2
---

# 🏆 Solutions - Défi 4.2

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] temperatures = { 18, 21, 17, 23, 25, 20, 16 };
        int minimum = temperatures[0];
        int maximum = temperatures[0];
        int jourPlusChaud = 0;
        int somme = 0;
        int jours20OuPlus = 0;

        for (int i = 0; i < temperatures.Length; i++)
        {
            Console.WriteLine("Jour " + (i + 1) + " : " + temperatures[i] + " °C");

            somme = somme + temperatures[i];

            if (temperatures[i] < minimum)
            {
                minimum = temperatures[i];
            }

            if (temperatures[i] > maximum)
            {
                maximum = temperatures[i];
                jourPlusChaud = i;
            }

            if (temperatures[i] >= 20)
            {
                jours20OuPlus++;
            }
        }

        double moyenne = (double)somme / temperatures.Length;

        Console.WriteLine();
        Console.WriteLine("Température minimale : " + minimum + " °C");
        Console.WriteLine("Température maximale : " + maximum + " °C");
        Console.WriteLine("Moyenne de la semaine : " + moyenne.ToString("F2") + " °C");
        Console.WriteLine("Journées de 20 °C ou plus : " + jours20OuPlus);
        Console.WriteLine("Première journée la plus chaude : jour " + (jourPlusChaud + 1));
    }
}
```
