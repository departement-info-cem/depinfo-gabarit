---
title: Gestion des comptes
sidebar_label: Gestion des comptes
toc_max_heading_level: 2
---

:::info Préparation
Cet exercice doit se faire dans votre environnement Active Directory que vous avez monté [en début de session](/exercices/montage-lab). 
:::

Dans votre environnement Active Directory, authentifiez-vous sur votre **VM de développement** (PC-DEV) avec le compte administrateur du domaine (**NOMDEVOTREDOMAINE\Administrateur**).

Effectuez les opérations suivantes à l'aide de **commandes PowerShell seulement**.


**a)** Obtenez le **chemin DN** (*Distinguished Name*) correspondant à la **racine de votre domaine**, à l'aide de `Get-ADRootDSE`. Le chemin se trouve dans la propriété `DefaultNamingContext`. Mettez ce chemin **dans une variable** pour l'utiliser ultérieurement.

**b)** Obtenez le **suffixe DNS** du domaine à l'aide de la commande `Get-ADDomain`. Le suffixe principal se trouve dans la propriété `DNSRoot`. Affectez ce suffixe **dans une variable**.

**c)** Créez les **unités d'organisation** (OU) "Profs" et "Groupes" à la racine de votre domaine. Vous pouvez utiliser la variable affectée à l'étape précédente.

**d)** Créez les **comptes utilisateurs** pour les professeurs **Vincent Carrier**, **Éric B. Gendron**, **Bernard Tremblay** et **Gabriel Gaudreault** dans l'OU **Profs**.

- Lors de la création des comptes, définissez les attributs suivants:
  - Prénom, nom de famille et initiale si applicable (par exemple, le "B" dans "Éric B. Gendron")
  - Le nom d'affichage (Display Name) avec le nom complet avec prénom, initiale et nom
  - Dans le champ Description, le nom du ou des cours que ce prof vous donne
  - Noms d'utilisateur
    - SamAccountName: `prénom.nom`
    - UserPrincipalName: `prénom.nom@votre.domaine.com`
  - Adresse courriel: `prénom.nom@cegepmontpetit.ca`
  - Mot de passe: `Passw0rd123`
    
Assurez-vous que le compte **soit actif** dès sa création et que le mot de passe doive obligatoirement être **changé au premier démarrage** de session.
   
:::tip Conseil
Utilisez VS Code et la technique du *splatting*, c'est plus facile de travailler avec un grand nombre d'arguments.
:::

**e)** Créez le **groupe global** **Profs** de réseau dans l'**OU Groupes**.

**f)** Ajoutez comme membres du groupe Profs de réseau les trois comptes de profs que vous avez créés auparavant.

**g)** Ajoutez le **groupe global Profs** de réseau au **groupe local Administrateurs** sur votre VM de développement.

:::caution Attention
Il ne faut pas confondre groupe local et groupe domaine local. C'est d'un **groupe local** dont il est question ici. 

Un groupe local existe localement sur toutes les machines Windows **à l'exception des contrôleurs de domaine**. Vous ne 
pouvez donc pas répondre à cette question sur votre contrôleur de domaine.

Son SID est toujours `S-1-5-32-544`. Les commandes comme `Get-LocalGroup` et `Add-LocalGroupMember` disposent d'un paramètre
`-SID` qui peut être utilisé au lieu du paramètre `-Name`, et permet de spécifier le SID plutôt que le nom. Par exemple:

```powershell
Get-LocalGroupMember -SID 'S-1-5-32-544'
```

C'est très utile pour que la commande fonctionne peu importe la langue du système.
:::


Pour vérifier si tout est beau, démarrez une session avec un compte de prof sur votre machine de développement et vérifiez:
- Que le prof est admin local (il peut démarrer une session PowerShell en tant qu'admin)
- Que le prof n'est pas admin du domaine (confirmez avec la commande whoami /groups)
