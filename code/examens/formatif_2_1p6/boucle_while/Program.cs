namespace boucle_while
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Exercice - Position dans la suite de Fibonacci
             
                Écrivez un programme qui demande à l'utilisateur un nombre entier positif et détermine la position de ce nombre dans la suite de Fibonacci.
                On définit la suite de Fibonacci par :
                - F0 = 0
                - F1 = 1
                - Fn = Fn-1 + Fn-2 pour n ≥ 2
                - Exemples: 
                    - F2 = F0 + F1 = 0 + 1 = 1
                    - F3 = F1 + F2 = 1 + 1 = 2
                    - F4 = F2 + F3 = 1 + 2 = 3

                Le programme doit :
                - demander un entier n (n > 0),
                - parcourir la suite de Fibonacci avec une boucle while jusqu'à atteindre une valeur ≥ n,
                - si une valeur de la suite est égale à n, afficher la plus petite position (indice) i telle que Fi = n,
                - si aucune valeur de la suite ne vaut n, afficher un message indiquant que le nombre n'appartient pas à la suite de Fibonacci.

                Remarques :
                - Indices : on utilise la convention F0 = 0, F1 = 1. Ainsi la position de 13 est 7 (F7 = 13).
                - Si l'utilisateur entre plus petit ou égal à 0, afficher un message d'erreur.

                Exemple d'itérations (pour n = 13) :

                --------------------------------------------------------------------------------------------------
                | Itération | a (Fi-2) | b (Fi-1) | valeurCourante (Fi) | Opérations effectuées                |
                --------------------------------------------------------------------------------------------------
                |     1     | 0        | 1        | 1                   | b initialisé à 1                     |
                |     2     | 1        | 1        | 1                   | Fi = b (1)                           |
                |     3     | 1        | 2        | 2                   | Fi = a + b                           |
                |     4     | 2        | 3        | 3                   | ...                                  |
                |     5     | 3        | 5        | 5                   | ...                                  |
                |     6     | 5        | 8        | 8                   | ...                                  |
                |     7     | 8        | 13       | 13                  | On a Fi = n, position = 7            |
                --------------------------------------------------------------------------------------------------

                Résultat final : la position de 13 dans la suite de Fibonacci est 7.


                ---Affichage attendu---
                Entrez un nombre entier : 13
                La position de 13 dans la suite de Fibonacci est : 7
                -----------------------
                Entrez un nombre entier : 10
                10 n'appartient pas à la suite de Fibonacci
                -----------------------
                Entrez un nombre entier : -5
                Entrée invalide.
                -----------------------

            */

            Console.Write("Entrez un nombre entier : ");
            int nombre = int.Parse(Console.ReadLine());

        }
    }
}
