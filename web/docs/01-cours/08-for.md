---
description: Répétitions de code
---




# Boucles for

##
Certains problèmes nécessitent un traitement répétitif. 
Si on veut imprimer la même ligne 100 fois, on ne va pas écrire `Console.WriteLine()` 20 fois.
On préfère utiliser une **boucle** pour répéter un ensemble d'instructions.

Ces deux blocs de code donnent le même résultat
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
     * **condition** : Test logique évalué à chaque itération de la boucle, tant qu’il est vrai, le bloc s’exécute
     * **incrémentation/décrémentation** : Modifie le compteur après chaque itération de la boucle
   * Exemple :

     ```csharp
     1. int resultat = 0;
     2. for (int index = 1; index <= 3; index++)
     3. {
     4.     resultat += index;
     5. }
     6. Console.Write("Total de : " + resultat)
     ```

     Ce code répète `resultat += index;` trois fois.
     À la fin, `resultat` vaut **6** (somme de 1 à 3).
    
  * Trace d'exécution :
  
  Si on insère un point d'arrêt à la première ligne de l'exemple précédent, et qu'on exécute le code en mode débogueur, on verra 

  | Étape | Ligne | Description |
  |-------|-------|-------------|
  | 1 | 1 | Créer la variable `resultat` et lui assigne la valeur 0 |
  | 2 | 2 | Créer la variable `index` et lui assigne la valeur 1 |
  | 3 | 2 | Évalue le test `index <= 5` qui est `true`| 
  | 4 | 4 | Change la valeur de `resultat` pour lui ajouter la valeur de `index` ( 1 ) pour un nouveau total de ( 1 ) |
  | 5 | 2 | Incrémente la valeur de `index` qui vaut maintenant 2 |
  | 6 | 2 | Évalue le test `index <= 5` qui est `true`| 
  | 7 | 4 | Change la valeur de `resultat` pour lui ajouter la valeur de `index` ( 2 ) pour un nouveau total de ( 3 ) |
  | 8 | 2 | Incrémente la valeur de `index` qui vaut maintenant 3 |
  | 9 | 2 | Évalue le test `index <= 5` qui est `true`| 
  | 10 | 4 | Change la valeur de `resultat` pour lui ajouter la valeur de `index` ( 3 ) pour un nouveau total de ( 6 ) |
  | 11 | 2 | Incrémente la valeur de `index` qui vaut maintenant 4 |
  | 12 | 2 | Évalue le test `index <= 5` qui est `false`| 
  | 13 | 6 | Écris le résultat dans la console **Notez** : nous sommes sortis de la boucle |




## Incrémentation de multiples

  L'index d'une boucle `for` n'est pas obligatoirement incrémenter par 1 à itération de la boucle. On peut utiliser l'incrémentation de notre choix selon la situation.

  Donc si je veut connaitre tous les multiples de 3

  ```csharp

for (int i = 1; i < 100 ; i += 3)
{
    Console.Write(i + "  ")
}
```


## décrémentation

## Instruction `Break`

## boucles imbriquées