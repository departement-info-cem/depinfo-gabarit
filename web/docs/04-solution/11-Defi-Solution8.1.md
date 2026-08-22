---
title: 🏆 Solutions - Défi 8.1
---

# 🏆 Solutions - Défi 8.1

```csharp
using System;

class Program
{
    static void AfficherNotes(string[] robots, int[,] notes)
    {
        Console.WriteLine("Robot    Vitesse  Précision  Endurance");

        for (int robot = 0; robot < robots.Length; robot++)
        {
            Console.Write(robots[robot] + "    ");

            for (int epreuve = 0; epreuve < notes.GetLength(1); epreuve++)
            {
                Console.Write(notes[robot, epreuve] + "         ");
            }

            Console.WriteLine();
        }
    }

    static void AfficherTotauxEtMeilleur(string[] robots, int[,] notes)
    {
        int meilleurIndice = 0;
        int meilleurTotal = -1;

        for (int robot = 0; robot < robots.Length; robot++)
        {
            int total = 0;

            for (int epreuve = 0; epreuve < notes.GetLength(1); epreuve++)
            {
                total = total + notes[robot, epreuve];
            }

            string prefixe = "de ";

            if (robot == 0)
            {
                prefixe = "d'";
            }

            Console.WriteLine("Total " + prefixe + robots[robot] + " : " + total + " points");

            if (total > meilleurTotal)
            {
                meilleurTotal = total;
                meilleurIndice = robot;
            }
        }

        Console.WriteLine("Prototype le plus performant : " + robots[meilleurIndice]);
    }

    static void AfficherMeilleuresNotes(int[,] notes)
    {
        string[] nomsEpreuves = { "vitesse", "précision", "endurance" };

        for (int epreuve = 0; epreuve < notes.GetLength(1); epreuve++)
        {
            int meilleureNote = notes[0, epreuve];

            for (int robot = 1; robot < notes.GetLength(0); robot++)
            {
                if (notes[robot, epreuve] > meilleureNote)
                {
                    meilleureNote = notes[robot, epreuve];
                }
            }

            Console.WriteLine("Meilleure note en " + nomsEpreuves[epreuve] + " : " + meilleureNote);
        }
    }

    static void AfficherRobotsSousSeuil(string[] robots, int[,] notes, int seuil)
    {
        for (int robot = 0; robot < robots.Length; robot++)
        {
            bool sousLeSeuil = false;

            for (int epreuve = 0; epreuve < notes.GetLength(1); epreuve++)
            {
                if (notes[robot, epreuve] < seuil)
                {
                    sousLeSeuil = true;
                }
            }

            if (sousLeSeuil)
            {
                Console.WriteLine(robots[robot]);
            }
        }
    }

    static void Main()
    {
        string[] robots = { "Alpha", "Bêta", "Gamma", "Delta" };
        int[,] notes =
        {
            { 12, 10, 14 },
            { 15, 9, 11 },
            { 8, 16, 12 },
            { 13, 11, 13 }
        };

        int choix;

        do
        {
            Console.WriteLine();
            Console.WriteLine("1. Afficher toutes les notes");
            Console.WriteLine("2. Calculer les totaux et trouver le meilleur prototype");
            Console.WriteLine("3. Afficher les meilleures notes par épreuve");
            Console.WriteLine("4. Afficher les robots sous un seuil");
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
                    AfficherNotes(robots, notes);
                    break;

                case 2:
                    AfficherTotauxEtMeilleur(robots, notes);
                    break;

                case 3:
                    AfficherMeilleuresNotes(notes);
                    break;

                case 4:
                    Console.Write("Seuil (0 à 20) : ");
                    int seuil;

                    if (int.TryParse(Console.ReadLine(), out seuil) && seuil >= 0 && seuil <= 20)
                    {
                        AfficherRobotsSousSeuil(robots, notes, seuil);
                    }
                    else
                    {
                        Console.WriteLine("Le seuil doit être un entier entre 0 et 20.");
                    }
                    break;

                case 0:
                    break;

                default:
                    Console.WriteLine("Choix invalide.");
                    break;
            }
        }
        while (choix != 0);
    }
}
```
