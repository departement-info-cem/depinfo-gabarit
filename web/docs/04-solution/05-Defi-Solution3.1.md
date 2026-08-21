---
title: 🏆 Solutions - Défi 3.1
---

# 🏆 Solutions - Défi 3.1

```csharp
using System;

class Program
{
    static int CalculerTotal(int presentes, int absentes)
    {
        return presentes + absentes;
    }

    static double CalculerPourcentagePresence(int presentes, int total)
    {
        return (double)presentes / total * 100;
    }

    static string ObtenirCommentaire(double pourcentage)
    {
        if (pourcentage >= 90)
        {
            return "Excellente participation";
        }
        else if (pourcentage >= 75)
        {
            return "Bonne participation";
        }

        return "Participation limitée";
    }

    static void Main()
    {
        Console.Write("Atelier : ");
        string atelier = Console.ReadLine();
        Console.Write("Personnes présentes : ");
        int presentes = int.Parse(Console.ReadLine());
        Console.Write("Personnes absentes : ");
        int absentes = int.Parse(Console.ReadLine());

        int total = CalculerTotal(presentes, absentes);
        double pourcentage = CalculerPourcentagePresence(presentes, total);

        Console.WriteLine();
        Console.WriteLine("Atelier : " + atelier);
        Console.WriteLine("Personnes présentes : " + presentes);
        Console.WriteLine("Personnes absentes : " + absentes);
        Console.WriteLine("Personnes inscrites : " + total);
        Console.WriteLine("Présence : " + pourcentage.ToString("F0") + " %");
        Console.WriteLine("Commentaire : " + ObtenirCommentaire(pourcentage));
    }
}
```
