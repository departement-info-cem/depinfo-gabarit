namespace DefiCompteFidelite
{
    partial class FrmCompteFidelite
    {
        private System.ComponentModel.IContainer components = null;
        private System.Windows.Forms.Label lblTitre;
        private System.Windows.Forms.Label lblCompteTitre;
        private System.Windows.Forms.Label lblCompte;
        private System.Windows.Forms.Label lblPointsTitre;
        private System.Windows.Forms.Label lblPoints;
        private System.Windows.Forms.Label lblNombrePoints;
        private System.Windows.Forms.TextBox txtNombrePoints;
        private System.Windows.Forms.Button btnAjouter;
        private System.Windows.Forms.Button btnEchanger;
        private System.Windows.Forms.Label lblMessage;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.lblTitre = new System.Windows.Forms.Label();
            this.lblCompteTitre = new System.Windows.Forms.Label();
            this.lblCompte = new System.Windows.Forms.Label();
            this.lblPointsTitre = new System.Windows.Forms.Label();
            this.lblPoints = new System.Windows.Forms.Label();
            this.lblNombrePoints = new System.Windows.Forms.Label();
            this.txtNombrePoints = new System.Windows.Forms.TextBox();
            this.btnAjouter = new System.Windows.Forms.Button();
            this.btnEchanger = new System.Windows.Forms.Button();
            this.lblMessage = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // lblTitre
            this.lblTitre.AutoSize = true;
            this.lblTitre.Font = new System.Drawing.Font("Segoe UI", 16F, System.Drawing.FontStyle.Bold);
            this.lblTitre.Location = new System.Drawing.Point(24, 20);
            this.lblTitre.Name = "lblTitre";
            this.lblTitre.Size = new System.Drawing.Size(207, 30);
            this.lblTitre.TabIndex = 0;
            this.lblTitre.Text = "Compte de fidélité";
            // lblCompteTitre
            this.lblCompteTitre.AutoSize = true;
            this.lblCompteTitre.Location = new System.Drawing.Point(26, 75);
            this.lblCompteTitre.Name = "lblCompteTitre";
            this.lblCompteTitre.Size = new System.Drawing.Size(52, 15);
            this.lblCompteTitre.TabIndex = 1;
            this.lblCompteTitre.Text = "Compte :";
            // lblCompte
            this.lblCompte.AutoSize = true;
            this.lblCompte.Location = new System.Drawing.Point(150, 75);
            this.lblCompte.Name = "lblCompte";
            this.lblCompte.Size = new System.Drawing.Size(12, 15);
            this.lblCompte.TabIndex = 2;
            this.lblCompte.Text = "-";
            // lblPointsTitre
            this.lblPointsTitre.AutoSize = true;
            this.lblPointsTitre.Location = new System.Drawing.Point(26, 105);
            this.lblPointsTitre.Name = "lblPointsTitre";
            this.lblPointsTitre.Size = new System.Drawing.Size(108, 15);
            this.lblPointsTitre.TabIndex = 3;
            this.lblPointsTitre.Text = "Points disponibles :";
            // lblPoints
            this.lblPoints.AutoSize = true;
            this.lblPoints.Location = new System.Drawing.Point(150, 105);
            this.lblPoints.Name = "lblPoints";
            this.lblPoints.Size = new System.Drawing.Size(12, 15);
            this.lblPoints.TabIndex = 4;
            this.lblPoints.Text = "-";
            // lblNombrePoints
            this.lblNombrePoints.AutoSize = true;
            this.lblNombrePoints.Location = new System.Drawing.Point(26, 155);
            this.lblNombrePoints.Name = "lblNombrePoints";
            this.lblNombrePoints.Size = new System.Drawing.Size(105, 15);
            this.lblNombrePoints.TabIndex = 5;
            this.lblNombrePoints.Text = "Nombre de points";
            // txtNombrePoints
            this.txtNombrePoints.Location = new System.Drawing.Point(153, 152);
            this.txtNombrePoints.Name = "txtNombrePoints";
            this.txtNombrePoints.Size = new System.Drawing.Size(120, 23);
            this.txtNombrePoints.TabIndex = 6;
            // btnAjouter
            this.btnAjouter.Location = new System.Drawing.Point(29, 195);
            this.btnAjouter.Name = "btnAjouter";
            this.btnAjouter.Size = new System.Drawing.Size(110, 32);
            this.btnAjouter.TabIndex = 7;
            this.btnAjouter.Text = "Ajouter";
            this.btnAjouter.UseVisualStyleBackColor = true;
            this.btnAjouter.Click += new System.EventHandler(this.btnAjouter_Click);
            // btnEchanger
            this.btnEchanger.Location = new System.Drawing.Point(153, 195);
            this.btnEchanger.Name = "btnEchanger";
            this.btnEchanger.Size = new System.Drawing.Size(120, 32);
            this.btnEchanger.TabIndex = 8;
            this.btnEchanger.Text = "Échanger";
            this.btnEchanger.UseVisualStyleBackColor = true;
            this.btnEchanger.Click += new System.EventHandler(this.btnEchanger_Click);
            // lblMessage
            this.lblMessage.AutoSize = true;
            this.lblMessage.Location = new System.Drawing.Point(26, 250);
            this.lblMessage.Name = "lblMessage";
            this.lblMessage.Size = new System.Drawing.Size(0, 15);
            this.lblMessage.TabIndex = 9;
            // FrmCompteFidelite
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(360, 300);
            this.Controls.Add(this.lblMessage);
            this.Controls.Add(this.btnEchanger);
            this.Controls.Add(this.btnAjouter);
            this.Controls.Add(this.txtNombrePoints);
            this.Controls.Add(this.lblNombrePoints);
            this.Controls.Add(this.lblPoints);
            this.Controls.Add(this.lblPointsTitre);
            this.Controls.Add(this.lblCompte);
            this.Controls.Add(this.lblCompteTitre);
            this.Controls.Add(this.lblTitre);
            this.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "FrmCompteFidelite";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Défi 13.1 - Compte de fidélité";
            this.ResumeLayout(false);
            this.PerformLayout();
        }
    }
}
