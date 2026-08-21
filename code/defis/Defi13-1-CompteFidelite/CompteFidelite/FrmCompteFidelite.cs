using System;
using System.Windows.Forms;

namespace DefiCompteFidelite
{
    public partial class FrmCompteFidelite : Form
    {
        private CompteFidelite compte;

        public FrmCompteFidelite()
        {
            InitializeComponent();

            // TODO 1 : Créer le compte de Maya et le conserver dans la variable compte.
            // TODO 2 : Actualiser l'affichage du nom et des points.
        }

        private void btnAjouter_Click(object sender, EventArgs e)
        {
            // TODO 3 : Valider le nombre de points avec TryParse.
            // TODO 4 : Appeler AjouterPoints et afficher le message approprié.
            // TODO 5 : Actualiser l'affichage des points.
        }

        private void btnEchanger_Click(object sender, EventArgs e)
        {
            // TODO 6 : Valider le nombre de points avec TryParse.
            // TODO 7 : Appeler EchangerPoints et afficher le message approprié.
            // TODO 8 : Actualiser l'affichage des points.
        }

        private void ActualiserAffichage()
        {
            // TODO 9 : Afficher les propriétés Nom et Points de l'objet compte.
        }
    }
}
