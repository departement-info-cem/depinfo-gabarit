---
title: 🏆 Solutions - Défi 7.2
---

# 🏆 Solutions - Défi 7.2

```csharp
using System;

class Program
{
    static void Main()
    {
        int choix;

        do
        {
            Console.WriteLine();
            Console.WriteLine("1. Celsius vers Fahrenheit");
            Console.WriteLine("2. Kilomètres vers miles");
            Console.WriteLine("3. Dollars canadiens vers dollars américains");
            Console.WriteLine("0. Quitter");
            Console.Write("Votre choix : ");

            if (!int.TryParse(Console.ReadLine(), out choix))
            {
                Console.WriteLine("Choix invalide.");
                choix = -1;
                continue;
            }

            switch (choix)
            {
                case 1:
                    Console.Write("Température en Celsius : ");
                    double celsius;

                    if (double.TryParse(Console.ReadLine(), out celsius))
                    {
                        double fahrenheit = celsius * 9.0 / 5.0 + 32;
                        Console.WriteLine("Résultat : " + fahrenheit.ToString("F2") + " °F");
                    }
                    else
                    {
                        Console.WriteLine("Valeur numérique invalide.");
                    }
                    break;

                case 2:
                    Console.Write("Distance en kilomètres : ");
                    double kilometres;

                    if (double.TryParse(Console.ReadLine(), out kilometres) && kilometres >= 0)
                    {
                        double miles = kilometres * 0.621371;
                        Console.WriteLine("Résultat : " + miles.ToString("F2") + " miles");
                    }
                    else
                    {
                        Console.WriteLine("La distance doit être positive ou nulle.");
                    }
                    break;

                case 3:
                    Console.Write("Montant en dollars canadiens : ");
                    double dollarsCanadiens;

                    if (double.TryParse(Console.ReadLine(), out dollarsCanadiens) && dollarsCanadiens >= 0)
                    {
                        double dollarsAmericains = dollarsCanadiens * 0.72;
                        Console.WriteLine("Résultat : " + dollarsAmericains.ToString("F2") + " $ US");
                    }
                    else
                    {
                        Console.WriteLine("Le montant doit être positif ou nul.");
                    }
                    break;

                case 0:
                    Console.WriteLine("Au revoir !");
                    break;

                default:
                    Console.WriteLine("Ce choix est invalide.");
                    break;
            }
        }
        while (choix != 0);
    }
}
```
