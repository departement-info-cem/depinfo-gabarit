---
title: 🏆 Solutions - Défi 2.1
---

# 🏆 Solutions - Défi 2.1

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Âge : ");
        int age = int.Parse(Console.ReadLine());

        if (age < 0 || age > 120)
        {
            Console.WriteLine("Âge invalide.");
        }
        else if (age < 6)
        {
            Console.WriteLine("Tarif applicable : Gratuit");
            Console.WriteLine("Raison : enfant de moins de 6 ans");
        }
        else if (age <= 17)
        {
            Console.WriteLine("Tarif applicable : 8 $");
            Console.WriteLine("Raison : tarif jeunesse");
        }
        else if (age >= 65)
        {
            Console.WriteLine("Tarif applicable : 9 $");
            Console.WriteLine("Raison : tarif aîné");
        }
        else
        {
            Console.Write("Carte étudiante (oui/non) : ");
            string carteEtudiante = Console.ReadLine();

            if (age >= 18 && age <= 64 && carteEtudiante == "oui")
            {
                Console.WriteLine("Tarif applicable : 10 $");
                Console.WriteLine("Raison : tarif étudiant");
            }
            else
            {
                Console.WriteLine("Tarif applicable : 14 $");
                Console.WriteLine("Raison : tarif adulte");
            }
        }
    }
}
```
