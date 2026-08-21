---
title: 🏆 Solutions - Défi 4.1
---

# 🏆 Solutions - Défi 4.1

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Articles par trousse : ");
        int articlesParTrousse = int.Parse(Console.ReadLine());
        Console.Write("Nombre de trousses : ");
        int nombreTrousses = int.Parse(Console.ReadLine());

        if (articlesParTrousse <= 0 || nombreTrousses <= 0)
        {
            Console.WriteLine("Les valeurs doivent être supérieures à 0.");
        }
        else
        {
            int articlesCumules = 0;

            Console.WriteLine();
            Console.WriteLine("Trousse    Articles cumulés");

            for (int numeroTrousse = 1; numeroTrousse <= nombreTrousses; numeroTrousse++)
            {
                articlesCumules = articlesCumules + articlesParTrousse;
                Console.WriteLine(numeroTrousse + "          " + articlesCumules);
            }

            Console.WriteLine();
            Console.WriteLine("Total d'articles préparés : " + articlesCumules);
        }
    }
}
```
