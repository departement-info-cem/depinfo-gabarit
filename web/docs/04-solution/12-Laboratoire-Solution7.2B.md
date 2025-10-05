# ✅ Solution – Labo 7.2B

## 🔢Switch... case 
### 🟡 Exercice S2.1 – Calculer l’aire 2.0
```csharp
static void Main()
{
    Console.WriteLine("=== Bienvenue dans votre assistant de calcul d’aire v2.0! ===");
    Console.WriteLine("Pour quelle forme désirez-vous calculer l'aire :");
    Console.WriteLine("1. Carré");
    Console.WriteLine("2. Rectangle");
    Console.WriteLine("3. Cercle");
    Console.WriteLine("4. Triangle");
    Console.Write("Votre choix : ");
    string saisie = Console.ReadLine();

    if (int.TryParse(saisie, out int choix))
    {
        switch (choix)
        {
            case 1: CalculerAireCarre(); break;
            case 2: CalculerAireRectangle(); break;
            case 3: CalculerAireCercle(); break;
            case 4: CalculerAireTriangle(); break;
            default: Console.WriteLine("Choix invalide."); break;
        }
    }
    else
        Console.WriteLine("Entrée non valide.");
}

static void CalculerAireCarre()
{
    Console.WriteLine("\n--- Calculer l'aire d'un carré ---");
    Console.Write("Quelle est la longueur du côté : ");
    double cote = double.Parse(Console.ReadLine());
    double aire = cote * cote;
    Console.WriteLine($"L'aire d'un carré de {cote} par côté  est de : {aire}");
}

static void CalculerAireRectangle()
{
    Console.WriteLine("\n--- Calculer l'aire d'un rectangle ---");
    Console.Write("Quelle est la longueur : ");
    double longueur = double.Parse(Console.ReadLine());
    Console.Write("Quelle est la largeur : ");
    double largeur = double.Parse(Console.ReadLine());
    double aire = longueur * largeur;
    Console.WriteLine($"L'aire d'un rectangle {longueur} X {largeur} est de : {aire}");
}

static void CalculerAireCercle()
{
    Console.WriteLine("\n--- Calculer l'aire d'un cercle ---");
    Console.Write("Quel est le rayon : ");
    double rayon = double.Parse(Console.ReadLine());
    double aire = 3.1416 * (rayon * rayon);
    Console.WriteLine($"L'aire d'un cercle de rayon {rayon} est de : {aire.ToString("F2")}");
}

static void CalculerAireTriangle()
{
    Console.WriteLine("\n--- Calculer l'aire d'un triangle ---");
    Console.Write("Quelle est la base : ");
    double baseT = double.Parse(Console.ReadLine());
    Console.Write("Quelle est la hauteur : ");
    double hauteur = double.Parse(Console.ReadLine());
    double aire = (baseT * hauteur) / 2;
    Console.WriteLine($"L'aire d'un triangle de base {baseT} et hauteur {hauteur} est de : {aire}");
}
```
---

### 🟡 Exercice S2.2 – Classes de permis 2.0  
```csharp
 static void Main(string[] args)
{
    Console.OutputEncoding = System.Text.Encoding.UTF8;

    string[,] permis = {
        { "C", "Véhicule" },
        { "1", "Tous" },
        { "2", "Autobus 24p+" },
        { "3", "Camion" },
        { "4", "Véhicules d'urgence" },
        { "5", "Automobiles" },
        { "6", "Motocyclettes" },
        { "7", "Apprenti" },
        { "8", "Tracteur" },
    };

    int choix=0;

    do
    {
        AfficherTableau(permis);

        Console.Write("\nÀ quelle classe voulez-vous ajouter une icône ? (1 à 8, 9 pour quitter) : ");
        if (int.TryParse(Console.ReadLine(), out choix))
        {
            switch (choix)
            {
                case 1: AjouterIcone(permis, choix, "🏎️"); break;
                case 2: AjouterIcone(permis, choix, "🚌"); break;
                case 3: AjouterIcone(permis, choix, "🚛"); break;
                case 4: AjouterIcone(permis, choix, "🚑"); break;
                case 5: AjouterIcone(permis, choix, "🚗"); break;
                case 6: AjouterIcone(permis, choix, "🏍️"); break;
                case 7: AjouterIcone(permis, choix, "👶"); break;
                case 8: AjouterIcone(permis, choix, "🚜"); break;
                case 9:
                    Console.WriteLine("\nMerci d'avoir utilisé l'assistant des classes de permis !");
                    break;
                default:
                    Console.WriteLine("Choix invalide.");
                    break;
            }

            if (choix >= 1 && choix <= 8)
            {
                Console.WriteLine("\nTableau mis à jour :");
                AfficherTableau(permis);
            }
        }
        else
        {
            Console.WriteLine("Entrée non valide.");
            //choix = 0;
        }

    } while (choix != 9);
}

static void AfficherTableau(string[,] tableau)
{
    Console.Clear();
    Console.WriteLine("=== S2.2 – Classes de permis 2.0 ===");
    Console.WriteLine("*************************************");

    for (int i = 0; i < tableau.GetLength(0); i++)
    {
        Console.WriteLine($"{tableau[i, 0]} - {tableau[i, 1]}");
    }
}

static void AjouterIcone(string[,] tableau, int index, string icone)
{
    tableau[index, 0] += " " + icone;
    Console.WriteLine($"\nClasse {index} : {tableau[index, 0]} - {tableau[index, 1]}");
}
```
---

### 🟡 Exercice S2.3 – Cinéma 2.0  
```csharp
static void Main()
{
    Console.OutputEncoding = System.Text.Encoding.UTF8;

    string[] filmsHarry = {
        "À l'école des sorciers (1997)",
        "La Chambre des secrets (1998)",
        "Le Prisonnier d'Azkaban (1999)",
        "La Coupe de feu (2000)",
        "L'Ordre du Phénix (2003)",
        "Le Prince de sang-mêlé (2005)",
        "Les Reliques de la Mort (2007)"
    };

    Console.WriteLine("=== Cinéma 2.0 ===");
    Console.WriteLine("**************************");
    Console.WriteLine("Choisissez un film de Harry Potter (1 à 7) :");

    for (int i = 0; i < filmsHarry.Length; i++)
    {
        Console.WriteLine($"{i + 1}. {filmsHarry[i]}");
    }

    Console.Write("\nVotre choix : ");
    string saisie = Console.ReadLine();

    if (int.TryParse(saisie, out int choix) && choix >= 1 && choix <= 7)
    {
        string film = "";

        switch (choix)
        {
            case 1: film = filmsHarry[0]; break;
            case 2: film = filmsHarry[1]; break;
            case 3: film = filmsHarry[2]; break;
            case 4: film = filmsHarry[3]; break;
            case 5: film = filmsHarry[4]; break;
            case 6: film = filmsHarry[5]; break;
            case 7: film = filmsHarry[6]; break;
        }

        Console.ForegroundColor = (ConsoleColor)choix;
        Console.WriteLine($"\n🎬 Film sélectionné : {film}");
        Console.ResetColor();
    }
    else
        Console.WriteLine("Entrée invalide. Veuillez entrer un chiffre entre 1 et 7.");
}
```
---

## 🌀WHILE
### 🟡 Exercice W2.1 – Le sortilège de la journée 
```csharp
 static void Main()
 {

     string[] sortileges = { "Accio", "Wingardium Leviosa", "Stupéfix", "Protego", "Endoloris" };
     string reponseUtilisateur = "";
     string sortilegeRandom;
     bool trouve = false;
     int nombre;
     
     Random generateur = new Random();
     nombre = generateur.Next(1, sortileges.Length);
     
     sortilegeRandom= sortileges[nombre];


     Console.Write("Devine le sortilège de la journée : ");

     while (!trouve)
     {
         reponseUtilisateur = Console.ReadLine();
         reponseUtilisateur = reponseUtilisateur.ToLower();

         if (reponseUtilisateur == sortilegeRandom.ToLower())
                 trouve = true;
         else
             Console.Write("\n \n Mauvaise réponse. Essaie encore ! ");                
     }
     Console.WriteLine("Bonne réponse !");
 }
```
---

### 🟡 Exercice W2.2 – Devine le film de Ghibli  
```csharp
static void Main()
{
    string[] films = { "Kiki", "Porco Rosso", "Totoro", "Ponyo", "Mononoke" };
    string reponseUtilisateur;
    bool trouve = false;

    Random generateur = new Random();
    int nbRandom = generateur.Next(0, films.Length);

    string filmChoisi = films[nbRandom].ToLower();            

    Console.WriteLine("Devinez quel film de Ghibli a été sélectionné :");

    while (!trouve)
    {
        Console.Write("\nVotre réponse : ");
        reponseUtilisateur = Console.ReadLine().ToLower();

        if (reponseUtilisateur == filmChoisi)
        {
            trouve = true;
            Console.WriteLine("Bravo ! Vous avez deviné");
        }
        else
           Console.WriteLine("Ce n’est pas le bon film. Essayez encore !");
    }
}
```
---

## ➡️🌀DO WHILE
### 🟡 Exercice DW2.1 – Les sortilèges colorés 
```csharp
 static void Main()
 {
     Console.OutputEncoding = System.Text.Encoding.UTF8;

     string[] sortileges = {
         "accio",
         "wingardium leviosa",
         "stupéfix",
         "protego",
         "endoloris"
     };

     string saisie;
     bool trouve = false;

     do
     {
         
         Console.Write("Est-ce que ce sortilège est disponible : ");
         saisie = Console.ReadLine();
         saisie=saisie.ToLower();
         trouve = false;

         for (int i = 0; i < sortileges.Length; i++)
         {
             if (saisie == sortileges[i])
             {
                 Console.WriteLine("Et oui!!!");
                 Console.BackgroundColor = (ConsoleColor)(i + 1);
                 Console.WriteLine(sortileges[i]);
                 Console.ResetColor();
                 Console.WriteLine();
                 trouve = true;
                 break;
             }
         }

         if (!trouve)
         {
             Console.WriteLine("Ce sortilège n'est pas dans la liste. Au revoir !");
         }

     } while (trouve);
 }
```
---
### 🟡 Exercice DW2.2 – Où est le magicien ? 
```csharp
static void Main(string[] args)
{
    // Permet d'afficher correctement les icônes, symboles et émojis
    Console.OutputEncoding = System.Text.Encoding.UTF8;

    string magicien = "🧙‍♂️"; // ou "🧙‍♀️" pour une magicienne !
    string croix = "❌";

    // Grille de jeu de 5x5
    string[,] plateau = {
        {"🧝‍♂️","🧛‍♂️","🧞‍♂️","🧚‍♂️","🧑‍🚀"},
        {"🧑‍⚕️","🧑‍🍳","🧑‍🏫","🧑‍🔧","🧑‍💻"},
        {"🧑‍🎨","🧑‍🚒","🧑‍✈️","🧘‍♂️","🧑‍🌾"},
        {"🧑‍🎤","🧑‍🏭","🧜‍♂️","🧛‍♀️","🧞‍♀️"},
        {"🧚‍♀️","🧜‍♀️","🧝‍♀️","🧑‍🦽","🧑‍🦯"}
    };

    Random generateurDeRangee = new Random();
    int rangeeAleatoire = generateurDeRangee.Next(0, plateau.GetLength(0));

    Random generateurDeColonne = new Random();
    int colonneAleatoire = generateurDeColonne.Next(0, plateau.GetLength(1));

    plateau[rangeeAleatoire, colonneAleatoire] = magicien;

    int rangee, colonne;

    do
    {
        Console.Clear();

        for (int i = 0; i < plateau.GetLength(0); i++)
        {
            for (int j = 0; j < plateau.GetLength(1); j++)
            {
                Console.Write(plateau[i, j] + " ");
            }
            Console.WriteLine();
        }

        Console.Write($"Choix de la rangée (1 à {plateau.GetLength(0)}): ");
        rangee = int.Parse(Console.ReadLine());

        Console.Write($"Choix de la colonne (1 à {plateau.GetLength(1)}): ");
        colonne = int.Parse(Console.ReadLine());

        plateau[rangee-1,colonne-1] = croix;
    }
    while (!(rangee-1 == rangeeAleatoire && colonne-1 == colonneAleatoire));

    Console.WriteLine($"Bravo, le magicien a été trouvé à la position [{rangee},{colonne}] !");
}
```
---
