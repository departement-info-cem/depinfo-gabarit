---
description: Répétitions de code
---




# Boucles for

##
Certains problèmes nécessitent un traitement répétitif. 
Si on veut imprimer la même ligne 100 fois, on ne va pas écrire `Console.WriteLine()` 20 fois.
On préfère utiliser une **boucle** pour répéter un ensemble d'instructions.

C'est deux blocs de code donnent le même résultat
  ```csharp
  // Bloc 1
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  Console.WriteLine("*****")
  ```

  ```csharp
// Bloc 2
for (int i = 0; i < 10 ; i++)
{
    Console.WriteLine("*****")
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
     1. int resultat = 0;
     2. for (int index = 1; index <= 5; index++)
     3. {
     4.     resultat += index;
     5. }
     ```

     Ce code répète `resultat += index;` cinq fois.
     À la fin, `resultat` vaut **15** (somme de 1 à 5).
    
  * Trace d'exécution :
  
  Si on insert un point d'arrêt à la première ligne de l'exemple précédent, et qu'on exécute le code en mode débogueur, on verra 

  | Étape | Ligne | Description |
  |-------|-------|-------------|
  | 1 | 1 | Créer la variable `resultat` et lui assigne la valeur 0 |
  | 2 | 2 | Créer la variable `index` et lui assigne la valeur 1 |
  | 3 | 2 | Évalue le test `index <= 5` qui est `true`| 

  



## incrémentation de multiples

## décrémentation

## Instruction `Break`

## boucles imbriqués