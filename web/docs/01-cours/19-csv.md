---
description: Format de fichier CSV et séparateurs de texte
---

# Fichiers CSV et séparateurs

## La méthode `Split()`

   * C'est une méthode qui s'applique à une chaîne de caractères. Elle retourne un **tableau** qui contient les sous-chaînes délimitées par le caractère spécifié.

     ```csharp
     string chaine = "fraise,pomme,poire,kiwi";
     string[] tabFruits = chaine.Split(','); 
     // tabFruits contient : ["fraise", "pomme", "poire", "kiwi"]
     ```

     ![Exemple Split](https://edm.moodle.decclic.qc.ca/draftfile.php/16082/user/draft/890208517/blobid0.png)

## Exemples : Lecture d'un fichier texte avec séparateur

   * Lecture d'une ligne dans un fichier

     ```csharp
     StreamReader objFichier = new StreamReader("informations.txt");
     string ligneLue = "";
     string[] tabNoms;
     if (!objFichier.EndOfStream)
     {
         ligneLue = objFichier.ReadLine();
         tabNoms = ligneLue.Split('/'); 
     }
     objFichier.Close();
     ```
   * Lecture d'une ligne d'un fichier. Les données extraites sont de type **double**

     ```csharp
     if (!objFichier.EndOfStream)
     {
         string ligneLue = objFichier.ReadLine();
         string[] tabPrix = ligneLue.Split('/');
         double prix = double.Parse(tabPrix[0]); // prix vaut 105
     }
     ```

     ![Exemple double 1](https://edm.moodle.decclic.qc.ca/draftfile.php/16082/user/draft/890208517/blobid1.png)
     ![Exemple double 2](https://edm.moodle.decclic.qc.ca/draftfile.php/16082/user/draft/890208517/blobid2.png)

## La méthode `Write()` avec un objet `StreamWriter`

   * La méthode `Write()` écrit dans le fichier sans ajouter un saut de ligne.

     ```csharp
     StreamWriter objFichier = new StreamWriter("resultats.txt");
     string[] tabNoms = { "Marie Tremblay", "Julie Labelle", "Jean Lebeau" };
     for (int index = 0; index < tabNoms.Length - 1; index++)
     {
         objFichier.Write(tabNoms[index] + "/");
     }
     objFichier.Write(tabNoms[tabNoms.Length - 1]); // écrire le dernier élément du fichier
     objFichier.Close();
     ```
## Instanciation d'un tableau

   * Exemple d’un **tableau préinitialisé** :

     ```csharp
     int[] tabNombres = { 3, 4, 10, 5, 8 }; // tableau pré initialisé avec 5 éléments entiers
     ```
   * **Instancier un tableau d'entiers** (5 éléments) et le remplir à partir d'un fichier :

     ```csharp
     int[] tabNombres = new int[5]; // réserve 5 entiers
     StreamReader objFichier = new StreamReader("informations2.txt");
     int index = 0;
     while (!objFichier.EndOfStream && index < tabNombres.Length)
     {
         tabNombres[index] = int.Parse(objFichier.ReadLine());
         index++;
     }
     objFichier.Close();
     ```
   * **Instancier un tableau de string** à une dimension (3 éléments) :

     ```csharp
     string[] tabChaines = new string[3];
     ```
   * **Instancier un tableau de double à 2 dimensions** (2 lignes × 3 colonnes) :

     ```csharp
     double[,] tabPrix = new double[2, 3]; // 2 rangées, 3 colonnes
     StreamReader objFichier = new StreamReader("informations.txt");
     int rangée = 0;
     while (!objFichier.EndOfStream && rangée < tabPrix.GetLength(0))
     {
         string[] tabLu = objFichier.ReadLine().Split('/');
         for (int colonne = 0; colonne < tabPrix.GetLength(1); colonne++)
         {
             tabPrix[rangée, colonne] = double.Parse(tabLu[colonne]);
         }
         rangée++;
     }
     objFichier.Close();
     ```