---
title: Solutions — Lecture dans un fichier texte
---

# ✅ Solutions — Lecture dans un fichier texte

---

## 🟢 Exercice 1 : Découvrir StreamReader

```csharp
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\sortileges.txt"))
        {
            while (!sr.EndOfStream)
            {
                string ligne = sr.ReadLine();
                Console.WriteLine(ligne);
            }
        }
```

---

## 🟢 Exercice 2 : ReadLine vs ReadToEnd
```csharp
        Console.WriteLine("--- Lecture avec ReadLine() ---");
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\citation.txt"))
        {
            if (!sr.EndOfStream) // Simple mesure de vérification
            {
                string premiereLigne = sr.ReadLine();
                Console.WriteLine(premiereLigne);
            }
        }

        Console.WriteLine("\n--- Lecture avec ReadToEnd() ---");
        using (StreamReader sr2 = new StreamReader("C:\\EspaceLabo\\citation.txt"))
        {
            string toutLeTexte = sr2.ReadToEnd();
            Console.WriteLine(toutLeTexte);
        }
```
---

## 🟢 Exercice 3 : Découper le contenu lu avec ReadToEnd()
```csharp
        string toutLeTexte;

        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\citations.txt"))
        {
            toutLeTexte = sr.ReadToEnd();

        }

        string[] tabCitations = toutLeTexte.Split("\r\n");

        Console.WriteLine(tabCitations[3]);
```
---


## 🟡 Exercice 4 : Créer et relire un fichier ✍️📖
```csharp

        string[] objectifs = new string[3];
        for (int i = 0; i < 3; i++)
        {
            Console.Write($"Entrez votre objectif {i + 1} : ");
            objectifs[i] = Console.ReadLine();
        }

        using (StreamWriter sw = new StreamWriter("C:\\EspaceLabo\\objectifs.txt"))
        {
            foreach (string obj in objectifs) // Ou la syntaxe d'une boucle for présentée dans le cours
                sw.WriteLine(obj);
        }

        Console.WriteLine("Les objectifs ont été enregistrés !\n");

        Console.WriteLine("Mes objectifs sont :");
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\objectifs.txt"))
        {
            while (!sr.EndOfStream)
            {
                string ligne = sr.ReadLine();
                Console.WriteLine(ligne);
            }
        }


```


---

## 🟡 Exercice 5 : Ajouter et relire du contenu existant 🧾
```csharp
        if (File.Exists("C:\\EspaceLabo\\objectifs.txt"))
        {
            using (StreamWriter sw = new StreamWriter("C:\\EspaceLabo\\objectifs.txt", true))
            {
                sw.WriteLine("Lire 5 livres cette année.");
                sw.WriteLine("Économiser pour un voyage.");
            }
        }

        Console.WriteLine("Contenu complet du fichier :");
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\objectifs.txt"))
        {
            while (!sr.EndOfStream)
            {
                string ligne = sr.ReadLine();
                Console.WriteLine(ligne);
            }
        }
```

---

## 🔴 Exercice 6 : Sauvegarder et relire un tableau 1D 🎵
```csharp
        string[] repas = { "Pizza hawaiennne", "Pizza toute garnie", "Pizzaghetti", "Pizza Meat Lover", "Pizza aux artichauts et aux olives noires" };
        using (StreamWriter sw = new StreamWriter("C:\\EspaceLabo\\mes_repas_prefs.txt"))
        {
            foreach (string r in repas) // Ou la syntaxe d'une boucle for présentée dans le cours
                sw.WriteLine(r);
        }

        Console.WriteLine("Voici vos repas préférés :");
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\mes_repas_prefs.txt"))
        {
            while (!sr.EndOfStream)
            {
                string ligne = sr.ReadLine();
                Console.WriteLine(ligne);
            }
        }
```
---

## 🔴 Exercice 7 : Manipuler une matrice 2D 🔢 (avant-goût de la séance 10.1 !)
```csharp
        int[,] matrice = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

        using (StreamWriter sw = new StreamWriter("C:\\EspaceLabo\\matrice.txt"))
        {
            for (int i = 0; i < matrice.GetLength(0); i++)
            {
                // Utilisation de Join pour transformer la ligne en chaîne séparée par des espaces
                string ligne = string.Join(" ", matrice[i, 0], matrice[i, 1], matrice[i, 2]);
                sw.WriteLine(ligne);
            }
        }

        Console.WriteLine("Matrice lue depuis le fichier :");
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\matrice.txt"))
        {
            while (!sr.EndOfStream)
            {
                string ligne = sr.ReadLine();
                string[] nombres = ligne.Split(" ");
                for (int i = 0;i < nombres.Length; i++)
                {
                    Console.WriteLine(nombres[i]);
                }
            }
        }
```
---

## 🎮 Jeu intégrateur : Le bonhomme pendu

Création du fichier :

```csharp
        string[] mots = {
            "cerise",
            "banane",
            "pomme",
            "orange",
            "raisin",
            "fraise",
            "kiwi",
            "mangue",
            "ananas",
            "abricot"
        }; // Les mots peuvent être demandés à l'utilisateur

        using (StreamWriter sw = new StreamWriter("C:\\EspaceLabo\\mots.txt"))
        {
            foreach (string mot in mots) // Ou la syntaxe d'une boucle for présentée dans le cours
            {
                sw.WriteLine(mot);
            }
        }

        Console.WriteLine("Le fichier 'mots.txt' a été créé avec succès !");
```

Jeu :
```csharp

        Console.WriteLine("\n=== Jeu Pendu ===");
        if (!File.Exists("C:\\EspaceLabo\\mots.txt"))
        {
            Console.WriteLine("Créez d'abord un fichier 'mots.txt' avec une liste de mots.");
            return;
        }

        // Compter le nombre de lignes...est-ce efficace ?
        int nbLignes = 0;
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\mots.txt"))
        {
            while (!sr.EndOfStream)
            {
                sr.ReadLine();
                nbLignes++;
            }
        }

        // Créer le tableau 1D
        string[] mots = new string[nbLignes];

        // Remplir le tableau
        using (StreamReader sr = new StreamReader("C:\\EspaceLabo\\mots.txt"))
        {
            int index = 0;
            while (!sr.EndOfStream)
            {
                string mot = sr.ReadLine();
                mots[index] = mot;
                index++;
            }
        }

        // Sélection d'un mot aléatoire
        Random rnd = new Random();
        int indexAleatoire = rnd.Next(mots.Length);
        string motChoisi = mots[indexAleatoire].ToUpper(); // ou ToLower

        // Tableau 1D de la taille du mot pigé : utile pour l'affichage
        char[] motCache = new char[motChoisi.Length];
        for (int i = 0; i < motChoisi.Length; i++)
        {
            motCache[i] = '_';
        }

        int tentatives = 6;

        // Boucle du jeu
        while (tentatives > 0 && new string(motCache) != motChoisi)
        {
            Console.WriteLine($"\nMot : {string.Join(" ", motCache)}");
            Console.WriteLine($"Tentatives restantes : {tentatives}");
            Console.Write("Lettre : ");
            string input = Console.ReadLine().ToUpper();

            char lettre = input[0];
            if (motChoisi.Contains(lettre)) // Une alternative au .Contains() est aussi possible
            {
                Console.WriteLine("Bonne lettre !");
                for (int i = 0; i < motChoisi.Length; i++)
                    if (motChoisi[i] == lettre)
                        motCache[i] = lettre;
            }
            else
            {
                Console.WriteLine("Mauvaise lettre !");
                tentatives--;
            }
        }

        if (new string(motCache) == motChoisi)
            Console.WriteLine($"\nBravo, vous avez trouvé : {motChoisi}");
        else
            Console.WriteLine($"\nVous avez perdu ! Le mot était : {motChoisi}");

```

---
