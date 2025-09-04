---
description: Répétitions de code
---

# Boucles for

## Instruction de répétition `for`

   * Certains problèmes nécessitent un traitement répétitif.
     On utilise souvent le terme **boucle** pour parler de ces instructions.
   * **Structure d'une boucle `for`** :

     ```csharp
     for (initialisation; condition; incrémentation/décrémentation)
     {
         // bloc d'instructions à exécuter
     }
     ```

     * **initialisation** : déclaration et affectation du compteur
     * **condition** : booléenne, tant qu’elle est vraie, le bloc s’exécute
     * **incrémentation/décrémentation** : modifie le compteur pour finir la boucle
   * Exemple :

     ```csharp
     int resultat = 0;
     for (int index = 1; index <= 5; index++)
     {
         resultat += index;
     }
     ```

     Ce code répète `resultat += index;` cinq fois.
     À la fin, `resultat` vaut **15** (somme de 1 à 5).
   * **Boucle `for` avec tableau** :

     ```csharp
     int[] tab = { 12, 0, 5, 76, 12, 5, 4 };
     for (int index = 0; index < tab.Length; index++)
     {
         tab[index] = tab[index] + 1;
     }
     ```
