---
description: Boucles while / do while et conditions avec switch
---

# Switch, while, do while


## Instruction de répétition [`while`](https://info.cegepmontpetit.ca/notions-csharp/documentation/structures-de-controle/while)

## Sélection multiple avec `switch`

   * Instruction `switch`
     L'instruction `switch` est utilisée lorsque le traitement nécessite plusieurs conditions.
     Dans ce cas, l'utilisation d'un `if` imbriqué n'est pas conseillée, car le code devient moins lisible et plus difficile à déboguer.
     Le `switch` s'écrit généralement comme suit :

     ```csharp
     switch (expression)
     {
         case val1 :
             //bloc instructions;
             break;
         case val2 :
             //bloc instructions;
             break;
         case val3 :
             //bloc instructions;
             break;
         ...
         default:
             //bloc instructions;
             break;
     }
     ```

     Le `switch` peut ne pas inclure la clause `default`.

     L'exécution d'une instruction `switch` nécessite :

     * l'évaluation de l'expression
     * la comparaison de la valeur de l'expression avec les différentes étiquettes `val1`, `val2`, `val3`
     * on exécute le bloc d'instructions associé à l'étiquette qui correspond à la valeur de l'expression
       l'exécution de l'instruction `break` empêche l'exécution des autres blocs
     * si aucune étiquette ne correspond, c'est le bloc associé au `default` qui est exécuté

     Notes :

     * Il peut y avoir un nombre quelconque d’étiquettes `case`
     * Les étiquettes `case` ne peuvent pas avoir la même valeur
     * L’instruction `break` est nécessaire après chaque bloc
     * Les étiquettes `case` sont exécutées dans l’ordre

   * Cascade de `if .. else if ..` équivalente à `switch` :

     ```csharp
     if (expression == val1)
     {
         // bloc instructions
     }
     else if (expression == val2)
     {
         // bloc instructions
     }
     else if (expression == val3)
     {
         // bloc instructions
     }
     else
     {
         // bloc instructions
     }
     ```

   * Exemple :

     ```csharp
     int nbre1 = 4, nbre2 = 2;
     int resultat = 0;
     char op = '*';

     switch (op)
     {
         case '+':
             resultat = nbre1 + nbre2;
             break;
         case '-':
             resultat = nbre1 - nbre2;
             break;
         case '*':
             resultat = nbre1 * nbre2;
             break;
         case '/':
             resultat = nbre1 / nbre2;
             break;
     }
     ```

   * Bloc commun à plusieurs étiquettes :

     ```csharp
     int nombre = 2;
     string session;

     switch (nombre)
     {
         case 1:
         case 2:
             session = "Tronc commun";
             break;
         case 3:
         case 4:
         case 5:
         case 6:
             session = "Formation spécifique";
             break;
         default:
             session = "Erreur";
             break;
     }
     ```