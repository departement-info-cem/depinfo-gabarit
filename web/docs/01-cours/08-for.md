---
description: Répétitions de code
---




# Boucles for

##
Certains problèmes nécessitent un traitement répétitif. 
Si on veut imprimer la même ligne 100 fois, on ne va pas écrire `Console.WriteLine()` 20 fois.
On préfère utiliser une **boucle** pour répéter un ensemble d'instructions.

  ```csharp
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     Console.WriteLine("***")
     ```

  ```csharp
     for (initialisation; condition; incrémentation/décrémentation)
     {
         // bloc d'instructions à exécuter
     }
     ```

## Instruction de répétition `for`

   * La boucle `for` est le type de boucle le plus standard.


   * **Structure d'une boucle `for`** :

     ```csharp
     for (initialisation; condition; incrémentation/décrémentation)
     {
         // bloc d'instructions à exécuter
     }
     ```

     * **initialisation** : Déclaration et affectation du compteur
     * **condition** : Test logique évalué à chaque itération de la boucle, tant qu’il est vraie, le bloc s’exécute
     * **incrémentation/décrémentation** : Modifie le compteur après chaque itération de la boucle
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

## Exécution

## incrémentation de multiples

## décrémentation


## boucles imbriqués