---
title: 🏆 Solutions - Défi 13.1
---

# 🏆 Solutions - Défi 13.1

La classe `CompteFidelite` fournie dans le projet de départ reste inchangée. Dans `FrmCompteFidelite.cs`, conserve un seul objet dans une variable membre du formulaire. Le formulaire du projet contient déjà les contrôles nécessaires.

```csharp
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

            compte = new CompteFidelite("Maya");
            ActualiserAffichage();
        }

        private void btnAjouter_Click(object sender, EventArgs e)
        {
            int nombrePoints;

            if (!int.TryParse(txtNombrePoints.Text, out nombrePoints))
            {
                lblMessage.Text = "Entrez un nombre entier de points.";
                return;
            }

            if (compte.AjouterPoints(nombrePoints))
            {
                lblMessage.Text = "Ajout effectué.";
            }
            else
            {
                lblMessage.Text = "Ajout refusé.";
            }

            ActualiserAffichage();
        }

        private void btnEchanger_Click(object sender, EventArgs e)
        {
            int nombrePoints;

            if (!int.TryParse(txtNombrePoints.Text, out nombrePoints))
            {
                lblMessage.Text = "Entrez un nombre entier de points.";
                return;
            }

            if (compte.EchangerPoints(nombrePoints))
            {
                lblMessage.Text = "Échange effectué.";
            }
            else
            {
                lblMessage.Text = "Échange refusé.";
            }

            ActualiserAffichage();
        }

        private void ActualiserAffichage()
        {
            lblCompte.Text = compte.Nom;
            lblPoints.Text = compte.Points.ToString();
        }
    }
}
```
