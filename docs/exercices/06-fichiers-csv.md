---
title: Fichiers CSV
sidebar_label: Fichiers CSV
toc_max_heading_level: 3
---

## Préparation

Dans le logiciel Excel, produisez un fichier CSV avec ces valeurs.

| Nom        | Prenom | Profession         |
| ---------- | ------ | ------------------ |
| Skywalker  | Luke   | Jedi               |
| Solo       | Han    | Contrebandier      |
| Calrissian | Lando  | Contrebandier      |
| Vader      | Darth  | Sith               |
| Sidious    | Darth  | Sith               |
| Organa     | Leia   | Princesse          |
| Fett       | Boba   | Chasseur de primes |
| Hutt       | Jabba  | Gangster           |


Voici ce que ça donne dans Excel.

![Image 6.1.0a](image-6.1.0a.png)


Exportez ensuite le fichier en format CSV.

![Image 6.1.0b](image-6.1.0b.png)

## Questions

### Ex. 5.1

Dans PowerShell, utilisez la commande Get-Content pour voir le contenu de ce fichier texte. Vous devriez voir ceci:

![Image 6.1.1](image-6.1.1.png)

### Ex. 5.2

Utilisez maintenant la commande Import-Csv pour importer le fichier sous forme d'un tableau d'objets. Vous devriez avoir une structure semblable à celle-ci:

![Image 6.1.2](image-6.1.2.png)

** Attention au délimiteur! **

### Ex. 5.3

Donnez le prénom et le nom des contrebandiers, en ordre alphabétique de nom.

![Image 6.1.3](image-6.1.3.png)

### Ex. 5.4. 

Sauvegardez ces nouvelles données dans le fichier contrebandiers.csv afin qu'il puisse être ouvert dans Excel (donc encore attention au délimiteur. Attention aussi à la première ligne qui contient l'information de type. Le fichier devrait ressembler à ceci:

![Image 6.1.4](image-6.1.4.png)


Le fichier devrait pouvoir être ouvert dans Excel sans erreur.

![Image 6.1.5](image-6.1.5.png)





