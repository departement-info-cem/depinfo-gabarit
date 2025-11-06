namespace tableau
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
                Exercice - Chasse au trésor dans un tableau 2D

                Vous souhaitez créer un mini-jeu de chasse au trésor sur une grille 3x3.

                Écrivez un programme qui :
                - Crée un tableau 2D de 3x3 cases (tableau de chaînes de caractères).
                - Génère aléatoirement la position d'un trésor dans la grille.
                - Ajoute le trésor (l'émoji "💎") à la position générée dans le tableau.
                - Demande à l'utilisateur de deviner la position du trésor en entrant un numéro de ligne (1 à 3) et un numéro de colonne (1 à 3).
                - Affiche la grille après la tentative de l'utilisateur, en montrant le trésor si la position est correcte, sinon affiche un message d'échec.
                - Affiche un message d'erreur si la saisie n'est pas valide (hors bornes).

                Exemple d'itérations :
                -------------------------------------------------------------
                | Grille initiale (cachée à l'utilisateur)                  |
                | [ ] [ ] [ ]                                              |
                | [ ] [💎] [ ]   (le trésor est en ligne 2, colonne 2)     |
                | [ ] [ ] [ ]                                              |
                -------------------------------------------------------------

                --- Affichage attendu ---
                Devinez la position du trésor !
                Entrez le numéro de ligne (1-3) : 2
                Entrez le numéro de colonne (1-3) : 2
                Bravo ! Vous avez trouvé le trésor !
                [ ] [ ] [ ]
                [ ] [💎] [ ]
                [ ] [ ] [ ]
                --------------------------
                (ou)
                Entrez le numéro de ligne (1-3) : 1
                Entrez le numéro de colonne (1-3) : 3
                Désolé, ce n'est pas la bonne case.
                [ ] [ ] [ ]
                [ ] [💎] [ ]
                [ ] [ ] [ ]
                --------------------------
            */

            // Permet d'afficher correctement les icônes, symboles et émojis
            Console.OutputEncoding = System.Text.Encoding.UTF8;


            Console.WriteLine("Devinez la position du trésor !");
            Console.Write("Entrez le numéro de ligne (1-3) : ");
            int ligne = int.Parse(Console.ReadLine());
            Console.Write("Entrez le numéro de colonne (1-3) : ");
            int colonne = int.Parse(Console.ReadLine());

        }
    }
}
