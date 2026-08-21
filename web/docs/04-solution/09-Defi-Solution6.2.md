---
title: 🏆 Solutions - Défi 6.2
---

# 🏆 Solutions - Défi 6.2

```csharp
using System;

class Program
{
    static void Main()
    {
        char[,] salle =
        {
            { 'L', 'O', 'L', 'L', 'O', 'L' },
            { 'O', 'O', 'L', 'L', 'L', 'O' },
            { 'L', 'L', 'L', 'O', 'L', 'L' },
            { 'O', 'L', 'O', 'O', 'L', 'L' }
        };

        int[] occupesParRangee = new int[salle.GetLength(0)];
        int totalLibres = 0;
        int maximumLibres = -1;
        int rangeePlusLibre = 0;

        for (int rangee = 0; rangee < salle.GetLength(0); rangee++)
        {
            int occupesDansRangee = 0;
            int libresDansRangee = 0;

            Console.Write("Rangée " + (rangee + 1) + " : ");

            for (int siege = 0; siege < salle.GetLength(1); siege++)
            {
                Console.Write(salle[rangee, siege] + " ");

                if (salle[rangee, siege] == 'L')
                {
                    totalLibres++;
                    libresDansRangee++;
                }
                else
                {
                    occupesDansRangee++;
                }
            }

            Console.WriteLine();
            occupesParRangee[rangee] = occupesDansRangee;

            if (libresDansRangee > maximumLibres)
            {
                maximumLibres = libresDansRangee;
                rangeePlusLibre = rangee;
            }
        }

        Console.WriteLine();
        Console.WriteLine("Sièges libres : " + totalLibres);

        for (int rangee = 0; rangee < occupesParRangee.Length; rangee++)
        {
            Console.WriteLine("Sièges occupés à la rangée " + (rangee + 1) + " : " + occupesParRangee[rangee]);
        }

        Console.WriteLine("Rangée avec le plus de sièges libres : rangée " + (rangeePlusLibre + 1));

        if (totalLibres == 0)
        {
            Console.WriteLine("La salle est complète.");
        }
    }
}
```
