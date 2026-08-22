---
title: 🏆 Solutions - Défi 13.2
---

# 🏆 Solutions - Défi 13.2

Cette solution utilise les contrôles du défi : `txtNom`, `txtDateRetour`, `cmbMateriel`, `lstPretsActifs`, `lstPretsRetournes`, `lblNombreActifs`, `lblNombreRetournes`, les boutons `btnAjouterPret` et `btnMarquerRetourne`, puis les éléments de menu `enregistrerToolStripMenuItem` et `quitterToolStripMenuItem`.

Dans le concepteur WinForms, associe les événements suivants aux méthodes correspondantes :

- le clic de `btnAjouterPret` à `btnAjouterPret_Click` ;
- le clic de `btnMarquerRetourne` à `btnMarquerRetourne_Click` ;
- le clic de `enregistrerToolStripMenuItem` à `enregistrerToolStripMenuItem_Click` ;
- le clic de `quitterToolStripMenuItem` à `quitterToolStripMenuItem_Click`.

L'événement de chargement du formulaire est associé directement dans le constructeur avec `Load += Form1_Load`.

```csharp
using System;
using System.IO;
using System.Windows.Forms;

namespace GestionnairePrets
{
    public partial class Form1 : Form
    {
        private string cheminActifs = @"C:\EspaceLabo\prets-actifs.txt";
        private string cheminRetournes = @"C:\EspaceLabo\prets-retournes.txt";

        public Form1()
        {
            InitializeComponent();
            Load += Form1_Load;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            cmbMateriel.Items.Add("CASQUE-01");
            cmbMateriel.Items.Add("SOURIS-01");
            cmbMateriel.Items.Add("ADAPT-01");
            cmbMateriel.Items.Add("CABLE-01");

            ChargerListe(cheminActifs, lstPretsActifs);
            ChargerListe(cheminRetournes, lstPretsRetournes);
            ActualiserCompteurs();
        }

        private void ChargerListe(string chemin, ListBox liste)
        {
            if (!File.Exists(chemin))
            {
                return;
            }

            using (StreamReader lecteur = new StreamReader(chemin))
            {
                while (!lecteur.EndOfStream)
                {
                    liste.Items.Add(lecteur.ReadLine());
                }
            }
        }

        private bool MaterielEstDejaPrete(string materiel)
        {
            for (int i = 0; i < lstPretsActifs.Items.Count; i++)
            {
                string pret = lstPretsActifs.Items[i].ToString();
                string[] parties = pret.Split(';');

                if (parties[1] == materiel)
                {
                    return true;
                }
            }

            return false;
        }

        private void btnAjouterPret_Click(object sender, EventArgs e)
        {
            string nom = txtNom.Text;
            string date = txtDateRetour.Text;

            if (nom == "" || date == "" || cmbMateriel.SelectedIndex == -1)
            {
                MessageBox.Show("Remplissez le nom, le matériel et la date.");
                return;
            }

            string materiel = cmbMateriel.SelectedItem.ToString();

            if (MaterielEstDejaPrete(materiel))
            {
                MessageBox.Show("Ce matériel est déjà prêté.");
                return;
            }

            lstPretsActifs.Items.Add(nom + ";" + materiel + ";" + date);
            ActualiserCompteurs();
        }

        private void btnMarquerRetourne_Click(object sender, EventArgs e)
        {
            if (lstPretsActifs.SelectedIndex == -1)
            {
                MessageBox.Show("Sélectionnez un prêt actif.");
                return;
            }

            string pret = lstPretsActifs.SelectedItem.ToString();
            lstPretsRetournes.Items.Add(pret);
            lstPretsActifs.Items.Remove(pret);
            ActualiserCompteurs();
        }

        private void enregistrerToolStripMenuItem_Click(object sender, EventArgs e)
        {
            EnregistrerListe(cheminActifs, lstPretsActifs);
            EnregistrerListe(cheminRetournes, lstPretsRetournes);
        }

        private void EnregistrerListe(string chemin, ListBox liste)
        {
            using (StreamWriter ecrivain = new StreamWriter(chemin))
            {
                for (int i = 0; i < liste.Items.Count; i++)
                {
                    ecrivain.WriteLine(liste.Items[i].ToString());
                }
            }
        }

        private void quitterToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void ActualiserCompteurs()
        {
            lblNombreActifs.Text = "Nombre de prêts actifs : " + lstPretsActifs.Items.Count;
            lblNombreRetournes.Text = "Nombre de prêts retournés : " + lstPretsRetournes.Items.Count;
        }
    }
}
```
