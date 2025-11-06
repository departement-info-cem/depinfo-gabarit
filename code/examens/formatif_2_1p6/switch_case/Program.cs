namespace switch_case
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
              Exercice - Switch case
              
              Vous êtes enseignant(e) au collégial et la fin de session approche à grand pas !
              Vous aurez énormément de copies à corriger, et malheureusement peu de temps pour le faire.
              Vous décidez de programmer un système de convertisseur de notes capable de convertir une lettre (A, B, etc.)
              en une mention textuelle (Excellent, Très bien, etc).
              
              Écrivez un programme qui demande à l'utilisateur d'entrer un résultat sous forme de lettre.
              Le programme détermine ensuite, à l'aide d'un switch case, la mention associée selon les intervalles suivants :
              
                | Note  | Mention   |
                | ----- | --------- |
                | A     | Excellent |
                | B     | Très bien |
                | C     | Bien      |
                | D     | Passable  |
                | E     | Échec     |
                | F à Z | Invalide  |

                --- Exemple 1 ---
                Entrez un résultat : B
                Mention : Très bien
                --- Exemple 2 ---
                Entrez un résultat : K
                Mention : Invalide


             */

            Console.Write("Entrez un résultat : ");
            char note = char.Parse(Console.ReadLine());

            string mention = "";


        }
    }
}
