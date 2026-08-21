---
title: 🏆 Solutions - Défi 2.2
---

# 🏆 Solutions - Défi 2.2

```csharp
using System;

class Program
{
    static double ObtenirPrixPizza(string taille)
    {
        if (taille == "P")
        {
            return 12.00;
        }

        return 18.00;
    }

    static double CalculerPizzaEtGarnitures(string taille, int nombreGarnitures)
    {
        return ObtenirPrixPizza(taille) + nombreGarnitures * 1.50;
    }

    static double ObtenirFraisLivraison(string livraison)
    {
        if (livraison == "oui")
        {
            return 5.00;
        }

        return 0.00;
    }

    static void Main()
    {
        const double TAUX_TAXE = 0.14975;

        Console.Write("Taille (P ou G) : ");
        string taille = Console.ReadLine();
        Console.Write("Nombre de garnitures : ");
        int nombreGarnitures = int.Parse(Console.ReadLine());
        Console.Write("Livraison (oui/non) : ");
        string livraison = Console.ReadLine();

        double pizzaEtGarnitures = CalculerPizzaEtGarnitures(taille, nombreGarnitures);
        double fraisLivraison = ObtenirFraisLivraison(livraison);
        double montantTaxable = pizzaEtGarnitures + fraisLivraison;
        double taxes = montantTaxable * TAUX_TAXE;
        double total = montantTaxable + taxes;

        Console.WriteLine();
        Console.WriteLine("Pizza et garnitures : " + pizzaEtGarnitures.ToString("F2") + " $");
        Console.WriteLine("Frais de livraison : " + fraisLivraison.ToString("F2") + " $");
        Console.WriteLine("Montant taxable : " + montantTaxable.ToString("F2") + " $");
        Console.WriteLine("Taxes : " + taxes.ToString("F2") + " $");
        Console.WriteLine("Total à payer : " + total.ToString("F2") + " $");
    }
}
```
