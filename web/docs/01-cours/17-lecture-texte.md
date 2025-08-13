---
description: Remise TP2 et lecture de fichiers texte avec boucle while
---

# Lecture de fichiers texte

## Fichier texte en lecture [StreamReader](https://info.cegepmontpetit.ca/notions-csharp/documentation/fichier-texte#la-classe-streamreader--lecture-dans-un-fichier-texte)

   * **Instanciation d'un fichier texte en lecture**

     ```csharp
     // Instancier un fichier texte en lecture
     StreamReader objFichier = new StreamReader("informations.txt");
     ```
   * **La propriété `EndOfStream`** : permet de vérifier si la fin du fichier est atteinte. Sa valeur est `true` lorsque la fin de fichier est atteinte.

     ```csharp
     StreamReader objFichier = new StreamReader("informations.txt");
     while (!objFichier.EndOfStream)
     {
         // instructions
     }
     ```
   * **La méthode `ReadLine()`** : permet de lire une ligne de caractères du fichier et passe à la ligne suivante. Cette méthode retourne une `string`.

     ```csharp
     string chaine = "";
     StreamReader objFichier = new StreamReader("informations.txt");
     while (!objFichier.EndOfStream)
     {
         chaine += objFichier.ReadLine() + " ";
     }
     ```
   * **La méthode `Close()`** : permet de fermer le fichier.

     ```csharp
     // Fermer le fichier
     objFichier.Close();
     ```