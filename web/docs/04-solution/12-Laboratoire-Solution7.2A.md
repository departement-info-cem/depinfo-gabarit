# ✅ Solution – Labo 7.2A

## 🔢Switch... case  
### 🟢 Exercice S1.1 - Les jours de la semaine
```csharp
static void Main()
{
    string saisie, jourTexte;
    int jour;

    Console.Write("Donne moi un numéro de jour de la semaine : ");
    saisie = Console.ReadLine();

    if (int.TryParse(saisie, out jour))
    {
        switch (jour)
        {
            case 1: jourTexte = "Dimanche"; break;
            case 2: jourTexte = "Lundi"; break;
            case 3: jourTexte = "Mardi"; break;
            case 4: jourTexte = "Mercredi"; break;
            case 5: jourTexte = "Jeudi"; break;
            case 6: jourTexte = "Vendredi"; break;
            case 7: jourTexte = "Samedi"; break;
            default: jourTexte = "ERREUR"; break;
        }

        Console.WriteLine($"Le jour {jour} est le : {jourTexte}");
    }
    else
    {
        Console.WriteLine("ERREUR");
    }
}
```

---

### 🟢 Exercice S1.2 – Les mois de l’année  
```csharp
static void Main()
{
    string saisie, moisTexte;
    int mois;

    Console.Write("Donne moi un numéro de mois : ");
    saisie = Console.ReadLine();

    if (int.TryParse(saisie, out mois))
    {
        switch (mois)
        {
            case 1: moisTexte = "Janvier"; break;
            case 2: moisTexte = "Février"; break;
            case 3: moisTexte = "Mars"; break;
            case 4: moisTexte = "Avril"; break;
            case 5: moisTexte = "Mai"; break;
            case 6: moisTexte = "Juin"; break;
            case 7: moisTexte = "Juillet"; break;
            case 8: moisTexte = "Août"; break;
            case 9: moisTexte = "Septembre"; break;
            case 10: moisTexte = "Octobre"; break;
            case 11: moisTexte = "Novembre"; break;
            case 12: moisTexte = "Décembre"; break;
            default: moisTexte = "ERREUR"; break;
        }
        Console.WriteLine($"Le mois {mois} est : {moisTexte}");
    }
    else
    {
        Console.WriteLine("ERREUR");
    }
}
```
---

### 🟢 Exercice  S1.3 – Calculer l’aire 1.0 
```csharp
  static void Main()
 {
     string saisie, forme = "", formule = "";
     int choix;

     Console.WriteLine("=== Bienvenue dans votre assistant de calcul d’aire v1.0! ===");
     Console.WriteLine("Quelle formule désirez-vous consulter :");
     Console.WriteLine("1. Carré");
     Console.WriteLine("2. Rectangle");
     Console.WriteLine("3. Cercle");
     Console.WriteLine("4. Triangle");
     Console.Write("Votre choix : ");
     saisie = Console.ReadLine();

     if (int.TryParse(saisie, out choix) && choix >= 1 && choix <= 4)
     {
         switch (choix)
         {
             case 1: forme = "carré"; formule = "côté * côté"; break;
             case 2: forme = "rectangle"; formule = "longueur * largeur"; break;
             case 3: forme = "cercle"; formule = "3.14 * (rayon * rayon)"; break;
             case 4: forme = "triangle"; formule = "(base × hauteur) / 2"; break;
         }
         Console.WriteLine($"\nPour calculer l'aire d'un {forme}, faites : {formule}");
     }
     else
         Console.WriteLine("ERREUR");
 }
```
---

### 🟢 Exercice S1.4 – Classes de permis 1.0  
```csharp
static void Main()
{
    string saisie, description = "";
    int choix;

    string[,] permis = {
        { "C", "Véhicule" },
        { "1", "Tous" },
        { "2", "Autobus 24p+" },
        { "3", "Camion" },
        { "4", "Véhicules d'urgence" },
        { "5", "Automobiles" },
        { "6", "Motocyclettes" },
        { "7", "Apprenti" },
        { "8", "Tracteur" }
    };

    Console.Write("Quelle classe de permis voulez-vous vérifier (1-8) ? ");
    saisie = Console.ReadLine();

    if (int.TryParse(saisie, out choix) && choix >= 1 && choix <= 8)
    {
        switch (choix)
        {
            case 1: description = permis[1, 1]; break;
            case 2: description = permis[2, 1]; break;
            case 3: description = permis[3, 1]; break;
            case 4: description = permis[4, 1]; break;
            case 5: description = permis[5, 1]; break;
            case 6: description = permis[6, 1]; break;
            case 7: description = permis[7, 1]; break;
            case 8: description = permis[8, 1]; break;
        }

        Console.WriteLine($"\nLa classe {choix} autorise la conduite pour : {description}");
    }
    else
        Console.WriteLine("ERREUR : Veuillez entrer un chiffre entre 1 et 8.");
}
```
---

### 🟢 Exercice S1.5 – Cinéma 1.0  
```csharp
static void Main()
{
    string saisie, film;
    int choix;

    string[] filmsHarry = {
        "À l'école des sorciers (1997)",
        "la Chambre des secrets (1998)",
        "le Prisonnier d'Azkaban (1999)",
        "la Coupe de feu (2000)",
        "l'Ordre du Phénix (2003)",
        "le Prince de sang-mêlé (2005)",
        "les Reliques de la Mort (2007)"
      };

    Console.Write("Quel film de Harry Potter voulez-vous consulter (1-7)? ");
    saisie = Console.ReadLine();

    if (int.TryParse(saisie, out choix))
    {
        switch (choix)
        {
            case 1: film = filmsHarry[0]; break;
            case 2: film = filmsHarry[1]; break;
            case 3: film = filmsHarry[2]; break;
            case 4: film = filmsHarry[3]; break;
            case 5: film = filmsHarry[4]; break;
            case 6: film = filmsHarry[5]; break;
            case 7: film = filmsHarry[6]; break;
            default: film = "ERREUR : Numéro invalide."; break;
        }
        Console.WriteLine(film);
    }
    else
        Console.WriteLine("Entrée invalide. Veuillez entrer un chiffre entier.");
}
```
---

## 🌀WHILE
### 🟢 Exercice W1.1 – Compter de 1 à 100  
```csharp

 static void Main()
    {
        int compteur = 1;

        while (compteur <= 100)
        {
            Console.WriteLine(compteur);
            compteur++;
        }
    }

```
---

### 🟢 Exercice W1.2 – Demander le code secret   
```csharp
static void Main()
{
    string reponse = "";

    while (reponse != "Moi")
    {
        Console.Write("T’es qui, toi? ");
        reponse = Console.ReadLine();

        if (reponse != "Moi")
            Console.WriteLine("Mauvaise réponse… Essaie toi encore ;)");
    }
    Console.WriteLine("Bonne réponse ! :D");
}
```
---

### 🟢 Exercice W1.3 – Afficher le budget  
```csharp
static void Main()
{
    int budget = 100, depense = 0;
    string saisie;

    Console.WriteLine($"Ton budget : {budget}$");

    while (budget > 0)
    {
        Console.Write("Combien as-tu dépensé? ");
        saisie = Console.ReadLine();

        if (int.TryParse(saisie, out depense))
        {
            budget -= depense;
            Console.WriteLine($"Il te reste: {budget}$");
        }
        else
            Console.WriteLine("Entrée invalide. Veuillez entrer un nombre.");
    }
    Console.WriteLine("Oh no, pas encore!");
}
```
---

### 🟢 Exercice W1.4 – Quelle est la moitié de…  
```csharp
static void Main()
{
    string saisie;
    double valeur;


    Console.Write("Trouvons la moitié de : ");
     saisie = Console.ReadLine();

    if (double.TryParse(saisie, out valeur))
    {
        while (valeur > 0.5)
        {
            valeur /= 2;
            Console.WriteLine(valeur);
        }
    }
    else
        Console.WriteLine("Entrée invalide. Veuillez entrer un nombre.");
}
```
---

### 🟢 Exercice W1.5 – Les amis à Harry  
```csharp
static void Main()
{
    string reponse = "";

    while (reponse != "hermione" && reponse != "ron")
    {
        Console.Write("Nommez un des amis de Harry Potter : ");
        reponse = Console.ReadLine();
        reponse = reponse.ToLower();
    }
    Console.WriteLine("Bonne réponse !");
}
```
--- 

## ➡️🌀DO WHILE
### 🟢 Exercice DW1.1 – Majeurs  
```csharp
static void Main(string[] args)
{
    int age;
    do
    {
        Console.WriteLine("À quelle âge nous sommes majeurs ? ");
        age = int.Parse(Console.ReadLine());
    } while ( age !=18 && age!=21);
    Console.WriteLine("Et oui!");
}
```
---

### 🟢 Exercice DW1.2 – Les épargnes  
```csharp
static void Main(string[] args)
{
    double epargnes=0, total=0;
    do
    {
        Console.WriteLine("Combien voulez-vous épargner ce mois-ci ? ");
        epargnes = double.Parse(Console.ReadLine());
        total += epargnes;
    } while (epargnes!=0);

    Console.WriteLine("---------------------------");
    Console.WriteLine("Vous avez cummulé : " + total.ToString("C"));
}
```
---

### 🟢 Exercice DW1.3 – Station de Harry Potter  
```csharp
static void Main()
{
    double station;
    string saisie;

    do
    {
        Console.Write("Quel est le numéro de station de Harry Potter ? ");
        saisie=Console.ReadLine();
        
        double.TryParse(saisie, out station);

    } while (station != 9.75);

    Console.WriteLine("Bonne réponse !");
}
```
--- 
