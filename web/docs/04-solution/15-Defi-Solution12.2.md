---
title: 🏆 Solutions - Défi 12.2
---

# 🏆 Solutions - Défi 12.2

Place deux `TextBox` nommés `txtChapitres` et `txtMinutesParChapitre`, un bouton `btnCalculer` et quatre `Label` de résultat nommés `lblMinutesTotales`, `lblHeuresCompletes`, `lblMinutesRestantes` et `lblResume` sur le formulaire. Associe l'événement `Click` du bouton à la méthode suivante.

```csharp
using System;
using System.Windows.Forms;

namespace PlanificateurRevision
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalculer_Click(object sender, EventArgs e)
        {
            int chapitres;
            int minutesParChapitre;

            bool chapitresValides = int.TryParse(txtChapitres.Text, out chapitres);
            bool minutesValides = int.TryParse(txtMinutesParChapitre.Text, out minutesParChapitre);

            if (!chapitresValides || !minutesValides || chapitres <= 0 || minutesParChapitre <= 0)
            {
                lblMinutesTotales.Text = "";
                lblHeuresCompletes.Text = "";
                lblMinutesRestantes.Text = "";
                lblResume.Text = "";
                MessageBox.Show("Entrez des nombres entiers supérieurs à 0.");
                return;
            }

            int minutesTotales = chapitres * minutesParChapitre;
            int heuresCompletes = minutesTotales / 60;
            int minutesRestantes = minutesTotales % 60;

            lblMinutesTotales.Text = "Minutes totales : " + minutesTotales;
            lblHeuresCompletes.Text = "Heures complètes : " + heuresCompletes;
            lblMinutesRestantes.Text = "Minutes restantes : " + minutesRestantes;
            lblResume.Text = "Temps de révision : " + heuresCompletes + " h " + minutesRestantes.ToString("00");
        }
    }
}
```
