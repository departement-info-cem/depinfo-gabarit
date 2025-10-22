---
description: Solutions — Écriture dans un fichier texte
---

# ✅ Solutions — Écriture dans un fichier texte

---

## 🟢 Exercice 1 — Ciao Bye ✈️

```csharp

StreamWriter outputFile = new StreamWriter("C:\\EspaceLabo\\CiaoBye.txt");
outputFile.WriteLine("Destination de rêve : Chili");
outputFile.WriteLine("Moyen de transport : Voilier");
outputFile.WriteLine("Durée du voyage : 3 mois");
outputFile.WriteLine("Compagnon de voyage : Mr. Léo");
outputFile.WriteLine("Objet fétiche : ma caméra !");
outputFile.Close();
```

---

## 🟢 Exercice 2 — Retranscrire un tableau 1D

```csharp

string[] series = { "Game of Thrones", "Empathie", "Severance", "True Detective", "Avant le crash" };

StreamWriter outputFile = new StreamWriter("C:\\EspaceLabo\\SeriesFavories.txt");

for (int i = 0; i < series.Length; i++)
{
    outputFile.WriteLine(series[i]);
}

outputFile.Close();
```

---

## 🟡 Exercice 3 — MiniMoi 👶

```csharp
string nomEnfant;

Console.Write("Combien d'enfants souhaitez-vous avoir ? ");
int nbEnfants = int.Parse(Console.ReadLine());

Console.Write("Entrez un nom de fichier (avec l'extension .txt) : ");
string nomFichier = Console.ReadLine();

StreamWriter fichierSortie = new StreamWriter("C:\\EspaceLabo\\" + nomFichier);

for (int i = 1; i <= nbEnfants; i++)
{
    Console.Write("Entrez le nom de l'enfant {0} : ", i);
    nomEnfant = Console.ReadLine();
    fichierSortie.WriteLine(nomEnfant);
}

fichierSortie.Close();
Console.WriteLine("Les noms ont été écrits avec succès.");
```

---

## 🟡 Exercice 4 — L’ajout surprise 🎁

```csharp
string nomEnfant;
int nbEnfants = 4;

StreamWriter fichierExistant = new StreamWriter("C:\\EspaceLabo\\MiniMoi.txt", true);

for (int i = nbEnfants + 1; i <=  nbEnfants + 2; i++)
{
    Console.Write("Entrez le nom de l'enfant {0} : ", i);
    nomEnfant = Console.ReadLine();
    fichierExistant.WriteLine(nomEnfant);
}

fichierExistant.Close();
Console.WriteLine("Les noms ont été ajoutés avec succès.");
```

---

## 🔴 Exercice 5 — Les dés sont jetés 🎲

```csharp

StreamWriter outputFile = new StreamWriter("C:\\EspaceLabo\\JeuDeDé.txt");

Console.Write("Combien de lancers souhaitez-vous effectuer ? ");
int nbLancers = int.Parse(Console.ReadLine());

Random rnd = new Random();
int valeur;
int somme = 0;

for (int i = 1; i <= nbLancers; i++)
{
    valeur = rnd.Next(1, 11);
    outputFile.WriteLine($"Valeur du lancer {i} : {valeur}");
    somme += valeur;
}

double moyenne = somme / (double)nbLancers;
outputFile.WriteLine("Moyenne des lancers : " + moyenne.ToString("F2"));

outputFile.Close();
Console.WriteLine("Les lancers ont été effectués avec succès, , il est maintenant temps d'aller voir le fichier texte !");
```

---

## 🔴 Exercice 6 — Journal des ventes

```csharp

Console.Write("Nom du fichier journal (ex: journal_ventes.txt) : ");
string nomFichier = Console.ReadLine();

StreamWriter fichier = new StreamWriter("C:\\EspaceLabo\\" + nomFichier, true);

bool nouvellesVentes;

do
{

    Console.Write("Combien de ventes souhaitez-vous enregistrer ? ");
    int nbVentes = int.Parse(Console.ReadLine());

    for (int i = 1; i <= nbVentes; i++)
    {
        Console.WriteLine($"\n--- Vente {i} ---");
        Console.Write("Nom du produit : ");
        string produit = Console.ReadLine();

        Console.Write("Prix unitaire : ");
        double prix = double.Parse(Console.ReadLine());

        Console.Write("Quantité : ");
        int quantite = int.Parse(Console.ReadLine());

        double total = prix * quantite;

        fichier.WriteLine($"{produit} : {quantite} × {prix:F2}$ = {total:F2}$");
    }

    fichier.WriteLine("-------------------------------------");

    Console.WriteLine($"\nToutes les ventes ont été enregistrées dans le fichier {nomFichier} !");

    

    Console.Write("Souhaitez-vous enregistrer de nouvelles ventes (oui/non) ? ");
    nouvellesVentes = Console.ReadLine() == "oui";


} while (nouvellesVentes);

fichier.Close();


```
