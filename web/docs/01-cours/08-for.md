---
Description: Répétitions de code
---




# Boucles for


Certains problèmes nécessitent un traitement répétitif. 
Si on veut imprimer la même ligne 100 fois, on ne va pas écrire `Console.WriteLine()` 100 fois.
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

     * **initialisation** : Déclaration et affectation du compteur.
     * **condition** : Test logique évalué à chaque itération de la boucle. Tant qu’il est vrai, le bloc s’exécute.
     * **incrémentation/décrémentation** : Modifie le compteur après chaque itération de la boucle, afin que le test devienne faux éventuellement.

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
    

### 1. Trace d'exécution :
  
  Si on insère un point d'arrêt à la première ligne de l'exemple précédent, et qu'on exécute le code en mode débogueur, on verra 

  | Étape | Ligne | Description |
  |-------|-------|-------------|
  | 1 | 1 | Créez la variable `resultat` et lui assigne la valeur 0 |
  | 2 | 2 | Créez la variable `index` et lui assigne la valeur 1 |
  | 3 | 2 | Évalue le test `index <= 3` qui est `true`| 
  | 4 | 4 | Change la valeur de `resultat` pour lui ajouter la valeur de `index` ( 1 ) pour un nouveau total de ( 1 ) |
  | 5 | 2 | Incrémente la valeur de `index` qui vaut maintenant 2 |
  | 6 | 2 | Évalue le test `index <= 3` qui est `true`| 
  | 7 | 4 | Change la valeur de `resultat` pour lui ajouter la valeur de `index` ( 2 ) pour un nouveau total de ( 3 ) |
  | 8 | 2 | Incrémente la valeur de `index` qui vaut maintenant 3 |
  | 9 | 2 | Évalue le test `index <= 3` qui est `true`| 
  | 10 | 4 | Change la valeur de `resultat` pour lui ajouter la valeur de `index` ( 3 ) pour un nouveau total de ( 6 ) |
  | 11 | 2 | Incrémente la valeur de `index` qui vaut maintenant 4 |
  | 12 | 2 | Évalue le test `index <= 3` qui est **`false`**| 
  | 13 | 6 | Écris le résultat dans la console. **Notez** : nous sommes sortis de la boucle |




### 2. Incrémentation de multiples

  L'index d'une boucle `for` n'est pas obligatoirement incrémenté par 1 à chaque itération de la boucle. On peut utiliser l'incrémentation de notre choix selon la situation.

  Donc si on veut connaitre tous les multiples de 3, on peut simplement faire une boucle avec des incréments de trois. 

  ```csharp
Console.Write("Multiples de trois : ");
for (int i = 0; i < 50 ; i += 3)
{
    Console.Write(i + " ");
}
```

**Résultat :** 
  ```csharp
Multiples de trois : 0 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48
```


### 3. Décrémentation

  Il est aussi possible de modifier l'index d'une boucle `for` afin de diminuer sa valeur. Cela nous permettra de parcourir des tableaux en sens inverse au prochain cours.

  La structure de la boucle reste la même, mais les valeurs passées vont être différentes :
  * **initialisation** : Initie le compteur avec la valeur maximum.
  * **condition** : Test que le compteur est supérieur à une valeur.
  * **décrémentation** : Diminue la valeur du compteur.

  ```csharp
Console.WriteLine("Compte à rebours : ");
for (int i = 5; i >= 0 ; i--)
{
    Console.WriteLine(i + "...");
}
Console.WriteLine("Boom !");
```

**Résultat :** 
  ```
Compte à rebours : 
5...
4...
3...
2...
1...
0...
Boom !
```


## 4. Portée des variables et accumulation d'information
La portée des variables fonctionne de la même façon pour les boucles `for` que pour les blocs `if-else`. Une variable créée à l'intérieur d'une boucle `for` cesse d'exister lorsqu'on quitte la boucle. Toutefois les variables crées hors de la boucle restent accessibles et on peut modifier leurs valeurs.

Par exemple :
  ```csharp
  int somme = 0;
for (int i = 1; i <= 100 ; i++)
{
    somme += i;
}
Console.WriteLine("Total : " + somme);
```
**Résultat :** 
  ```
Total : 5050
  ```

Le total des valeurs de 1 à 100 est de 5050, la variable **somme** est déclarée avant le début de la boucle et peut donc être utilisée pour stocker de l'information provenant de la boucle.

Par contraste :
  ```csharp

  for (int i = 1; i <= 100 ; i++)
  {
      int total += i
  }
  Console.WriteLine("Total : " + total);
```

Ce code ne compilera pas. La variable **total** n'existe pas hors de la boucle `for`.

