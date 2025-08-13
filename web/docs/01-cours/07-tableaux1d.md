---
description: Remise du TP1, tableaux 1D, chaînes de caractères 2e partie
---

# Tableaux 1D


## Tableau 1D préinitialisé, indexation et `Length`

   * Un tableau à une dimension est un regroupement d'éléments de même type.
   * Dans cette section, nous utiliserons des tableaux **préinitialisés**.
     De manière générale, la déclaration d'un tableau préinitialisé se fait comme suit :
     `type[] nomTableau = { elt1, elt2, ..., eltN };`
     Exemple :

     ```csharp
     int[] tabNbres = { 12, 0, 5, 76, 12, 5, 4 };
     ```
   * L'accès à un élément du tableau se fait par **indexation** :
     L’index est un nombre entier placé entre `[ ]`.

     * `tabNbres[0]` → premier élément (12)
     * `tabNbres[1]` → deuxième élément (0)
     * `tabNbres[2]` → troisième élément (5)
   * En C#, le nombre d’éléments d’un tableau est donné par la propriété `Length` :

     * `tabNbres.Length` retourne le nombre d’éléments (ici **7**).
   * Comme l’indexation commence à `0`, le dernier élément est à l’index `tabNbres.Length - 1` :

     * `tabNbres[tabNbres.Length - 1]` → dernier élément (4).
   * Modification d’un élément :

     ```csharp
     tabNbres[6] = 4; // change le 7e élément
     element = tabNbres[6]; // assigne la valeur du 7e élément à la variable "element"
     ```

     > On ne peut pas assigner une valeur à un tableau complet en une seule instruction, seulement élément par élément.
