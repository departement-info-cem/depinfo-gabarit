---
description: Écrire dans un fichier texte
---

# Écriture dans un fichier

## Fichier texte en écriture [StreamWriter](https://info.cegepmontpetit.ca/notions-csharp/documentation/fichier-texte#la-classe-streamwriter--%C3%A9criture-dans-un-fichier-texte)

   * **Instanciation d'un fichier texte en écriture**

     ```csharp
     // Instancier un fichier texte en écriture
     StreamWriter objFichier = new StreamWriter("resultats.txt");
     ```
   * **La méthode `WriteLine()`** : permet d'écrire une ligne de caractères sur le fichier et passe à la ligne suivante.

     ```csharp
     // Écrit la valeur de la variable chaine dans le fichier
     objFichier.WriteLine(chaine);
     ```
   * **Fermer le fichier en écriture à la fin**

     ```csharp
     // Fermer le fichier
     objFichier.Close();
     ```