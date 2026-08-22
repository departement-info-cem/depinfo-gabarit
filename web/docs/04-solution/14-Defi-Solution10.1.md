---
title: 🏆 Solutions - Défi 10.1
---

# 🏆 Solutions - Défi 10.1

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string cheminVentes = @"C:\EspaceLabo\ventes.csv";
        string cheminRapport = @"C:\EspaceLabo\rapport-ventes.txt";

        if (!File.Exists(cheminVentes))
        {
            Console.WriteLine("Fichier ventes.csv introuvable.");
            return;
        }

        int ventesValides = 0;
        int lignesRejetees = 0;
        int revenuTotal = 0;
        int articlesVetements = 0;
        int articlesSouvenirs = 0;
        int articlesDecoration = 0;
        int revenuMaximum = 0;
        string produitPlusRentable = "";

        using (StreamReader lecteur = new StreamReader(cheminVentes))
        {
            lecteur.ReadLine(); // Ignorer l'en-tête.

            while (!lecteur.EndOfStream)
            {
                string ligne = lecteur.ReadLine();
                string[] parties = ligne.Split(',');
                int quantite;
                int prix;

                bool categorieValide = parties.Length == 4 &&
                    (parties[1] == "Vêtements" || parties[1] == "Souvenirs" || parties[1] == "Décoration");

                if (parties.Length != 4 || parties[0] == "" || !categorieValide ||
                    !int.TryParse(parties[2], out quantite) || quantite <= 0 ||
                    !int.TryParse(parties[3], out prix) || prix <= 0)
                {
                    lignesRejetees++;
                }
                else
                {
                    int revenu = quantite * prix;
                    ventesValides++;
                    revenuTotal = revenuTotal + revenu;

                    if (parties[1] == "Vêtements")
                    {
                        articlesVetements = articlesVetements + quantite;
                    }
                    else if (parties[1] == "Souvenirs")
                    {
                        articlesSouvenirs = articlesSouvenirs + quantite;
                    }
                    else
                    {
                        articlesDecoration = articlesDecoration + quantite;
                    }

                    if (revenu > revenuMaximum)
                    {
                        revenuMaximum = revenu;
                        produitPlusRentable = parties[0];
                    }
                }
            }
        }

        using (StreamWriter rapport = new StreamWriter(cheminRapport))
        {
            rapport.WriteLine("Ventes valides : " + ventesValides);
            rapport.WriteLine("Lignes rejetées : " + lignesRejetees);
            rapport.WriteLine("Revenu total : " + revenuTotal.ToString("F2") + " $");

            if (ventesValides > 0)
            {
                rapport.WriteLine("Produit le plus rentable : " + produitPlusRentable + " (" + revenuMaximum.ToString("F2") + " $)");
            }
            else
            {
                rapport.WriteLine("Aucune vente valide.");
            }

            rapport.WriteLine("Vêtements : " + articlesVetements + " articles");
            rapport.WriteLine("Souvenirs : " + articlesSouvenirs + " articles");
            rapport.WriteLine("Décoration : " + articlesDecoration + " articles");
        }

        Console.WriteLine("Ventes valides : " + ventesValides);
        Console.WriteLine("Lignes rejetées : " + lignesRejetees);
        Console.WriteLine("Revenu total : " + revenuTotal.ToString("F2") + " $");

        if (ventesValides == 0)
        {
            Console.WriteLine("Aucune vente valide.");
        }
        else
        {
            Console.WriteLine("Produit le plus rentable : " + produitPlusRentable + " (" + revenuMaximum.ToString("F2") + " $)");
        }

        Console.WriteLine("Vêtements : " + articlesVetements + " articles");
        Console.WriteLine("Souvenirs : " + articlesSouvenirs + " articles");
        Console.WriteLine("Décoration : " + articlesDecoration + " articles");
        Console.WriteLine("Rapport : " + cheminRapport);
    }
}
```

> Le rapport contient les mêmes lignes de résultats que la console, sauf la ligne `Rapport`. Lorsqu'aucune vente valide n'est trouvée, la ligne `Aucune vente valide.` remplace la ligne `Produit le plus rentable`.
