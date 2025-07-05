# 🧪 Labo 1 – Application console en C sharp

Dans ce premier laboratoire, tu découvriras comment créer une **application console C#**. Ce type d’application s’exécute dans une fenêtre texte (console) et est idéal pour apprendre les bases du langage sans interface graphique.

Tu apprendras à :
- Créer un nouveau projet dans Visual Studio
- Écrire un code simple pour interagir avec l’utilisateur
- Lancer et tester ton application

🎥 Visionne cette capsule pour bien démarrer :  
<a href="https://youtu.be/PAdnzYcKcRQ?si=iacc8sIyPRtffAcT" target="_blank" rel="noopener noreferrer">Première application console en C#</a>

### Exemple de code

```csharp
using System; // Importation du namespace 'System' qui contient la classe Console

class Program // Déclaration de la classe principale du programme
{
    static void Main() // Point d'entrée de l'application, méthode appelée au démarrage
    {
        Console.WriteLine("Bienvenue dans votre première application C#!");
        // Affiche un message de bienvenue avec un retour à la ligne

        Console.WriteLine("Quel est votre prénom ? ");
        // Invite l'utilisateur à entrer son prénom 

        string prenom = Console.ReadLine();
        // Lit la ligne saisie au clavier et la stocke dans une variable 'prenom' (assignation)

        Console.WriteLine("Enchanté " + prenom);
        // Affiche un message personnalisé avec la variable 'prenom'

        Console.WriteLine("À bientôt !");
        // Affiche un message de clôture

        Console.WriteLine("Appuie sur une touche pour quitter...");
        // Indique à l'utilisateur d'appuyer sur une touche pour terminer

        Console.ReadKey();
        // Attend que l'utilisateur appuie sur une touche pour fermer la console
    }
}

