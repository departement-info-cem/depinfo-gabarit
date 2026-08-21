---
title: 🏆 Solutions - Défi 9.2
---

# 🏆 Solutions - Défi 9.2

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string chemin = @"C:\EspaceLabo\taches.txt";

        if (!File.Exists(chemin))
        {
            Console.WriteLine("Fichier taches.txt introuvable.");
            return;
        }

        int nombreTaches = 0;
        int totalMinutes = 0;
        int taches30MinutesOuPlus = 0;
        int lignesRejetees = 0;
        int dureeMaximum = 0;
        string tachePlusLongue = "";

        using (StreamReader lecteur = new StreamReader(chemin))
        {
            while (!lecteur.EndOfStream)
            {
                string ligne = lecteur.ReadLine();
                string[] parties = ligne.Split(';');
                int duree;

                if (parties.Length != 2 || parties[0] == "" ||
                    !int.TryParse(parties[1], out duree) || duree <= 0)
                {
                    lignesRejetees++;
                }
                else
                {
                    nombreTaches++;
                    totalMinutes = totalMinutes + duree;

                    if (duree >= 30)
                    {
                        taches30MinutesOuPlus++;
                    }

                    if (duree > dureeMaximum)
                    {
                        dureeMaximum = duree;
                        tachePlusLongue = parties[0];
                    }
                }
            }
        }

        Console.WriteLine("Nombre de tâches : " + nombreTaches);
        Console.WriteLine("Total des minutes : " + totalMinutes);

        if (nombreTaches == 0)
        {
            Console.WriteLine("Lignes rejetées : " + lignesRejetees);
            Console.WriteLine("Aucune tâche valide.");
        }
        else
        {
            double moyenne = (double)totalMinutes / nombreTaches;
            Console.WriteLine("Durée moyenne : " + moyenne.ToString("F2") + " minutes");
            Console.WriteLine("Tâche la plus longue : " + tachePlusLongue);
            Console.WriteLine("Tâches de 30 minutes ou plus : " + taches30MinutesOuPlus);
            Console.WriteLine("Lignes rejetées : " + lignesRejetees);
        }
    }
}
```
