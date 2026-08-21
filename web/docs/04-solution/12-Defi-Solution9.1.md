---
title: 🏆 Solutions - Défi 9.1
---

# 🏆 Solutions - Défi 9.1

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string chemin = @"C:\EspaceLabo\entrainement.txt";

        Console.Write("Date : ");
        string date = Console.ReadLine();
        Console.Write("Activité : ");
        string activite = Console.ReadLine();
        Console.Write("Durée : ");
        string dureeSaisie = Console.ReadLine();
        Console.Write("Note : ");
        string note = Console.ReadLine();

        if (activite != "Course" && activite != "Vélo" && activite != "Marche")
        {
            Console.WriteLine("Activité invalide.");
        }
        else
        {
            int duree;

            if (!int.TryParse(dureeSaisie, out duree) || duree <= 0)
            {
                Console.WriteLine("Durée invalide.");
            }
            else
            {
                string ligne = date + ";" + activite + ";" + duree + ";" + note;

                using (StreamWriter ecrivain = new StreamWriter(chemin, true))
                {
                    ecrivain.WriteLine(ligne);
                }

                Console.WriteLine();
                Console.WriteLine("Date       : " + date);
                Console.WriteLine("Activité   : " + activite);
                Console.WriteLine("Durée      : " + duree + " minutes");
                Console.WriteLine("Note       : " + note);
            }
        }
    }
}
```
