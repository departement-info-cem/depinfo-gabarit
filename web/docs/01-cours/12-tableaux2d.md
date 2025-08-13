---
description: Travailler avec des tableaux en 2 dimensions
---

# Tableaux 2D

## Tableau à 2D préinitialisé

   * [Déclaration d'un tableau à 2D préinitialisé](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-2d)
   * Adressage d'un tableau à 2D
   * **Exemple** : Déclaration d'un tableau 2D de nombres entiers ayant 3 rangées et 2 colonnes :

     ```csharp
     int[,] tabNotes = { { 79, 90 },
                         { 80, 50 },
                         { 67, 95 } };
     ```
   * L'élément d'un tableau 2D est désigné avec **deux index** `[ , ]` :

     * Le **premier index** → numéro de rangée (ligne)
     * Le **deuxième index** → numéro de colonne
     * Les deux index commencent à `0`.
       Exemples :

       * `tabNotes[0, 0]` → premier élément (79)
       * `tabNotes[1, 1]` → intersection rangée 1 / colonne 1 (50)
       * `tabNotes[2, 1]` → intersection rangée 2 / colonne 1 (95)
   * Le nombre total d’éléments est donné par la propriété `Length` :

     ```csharp
     int nombreEltTabNotes = tabNotes.Length;
     ```

     Ici, `nombreEltTabNotes` vaut **6**.
   * Le parcours d’un tableau 2D se fait souvent **rangée par rangée** ou **colonne par colonne**, via une **boucle imbriquée**.

     > ⚠️ Ne pas confondre ces deux types de parcours.
   * Méthode `GetLength()` :

     * `GetLength(0)` → nombre de rangées
     * `GetLength(1)` → nombre de colonnes