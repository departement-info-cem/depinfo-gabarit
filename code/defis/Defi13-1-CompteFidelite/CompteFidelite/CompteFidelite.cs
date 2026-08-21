namespace DefiCompteFidelite
{
    public class CompteFidelite
    {
        public string Nom { get; private set; }

        public int Points { get; private set; }

        public CompteFidelite(string nom)
        {
            Nom = nom;
            Points = 0;
        }

        public bool AjouterPoints(int nombrePoints)
        {
            if (nombrePoints <= 0)
            {
                return false;
            }

            Points += nombrePoints;
            return true;
        }

        public bool EchangerPoints(int nombrePoints)
        {
            if (nombrePoints <= 0 || nombrePoints > Points)
            {
                return false;
            }

            Points -= nombrePoints;
            return true;
        }
    }
}
