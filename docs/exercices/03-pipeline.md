---
title: Pipeline
sidebar_label: Pipeline
---

Les exercices suivants visent à vous familiariser avec les commandes PowerShell, les alias et les objets retournés par les commandes.

Vous pouvez télécharger ces exercices sous forme de fichier PowerShell. Ouvrez le fichier dans Visual Studio Code (avec l'extension PowerShell installée). Vous pouvez sélectionner une ligne de commande et appuyer sur la touche F8 pour exécuter cette commande dans le terminal intégré.

📝 [Exercice R03](https://github.com/vcarrier/3t5-exercices/tree/main/R03%20-%20Pipeline)


## Exercice 1: Analyse du pipeline

Pour chacune des lignes de commandes suivantes, décrivez l'objet produit par chaque commande de la chaîne. Pour ce faire, analysez l'objet résultant de chaque maillon à l'aide des commandes `Get-Member` ou `Select-Object`.

1. `"Spooler" | Get-Service | Select-Object * | Format-List | Out-File Spooler.txt`
    - `"Spooler"` *(exemple)*
        - Type de l'objet en sortie: **String**
        - Description: **Le mot "spooler", qui est le nom du service recherché**
    - `Get-Service`
        - Type de l'objet en sortie: 
        - Description: 
    - `Select-Object`
        - Type de l'objet en sortie: 
        - Description: 
    - `Format-List`
        - Type de l'objet en sortie: 
        - Description: 
    - `Out-File`
        - Type de l'objet en sortie: 
        - Description: 

2. `Get-Item C:\Windows\System32\drivers\etc\hosts | Get-Content | Out-Null`
    - `Get-Item`
        - Type de l'objet en sortie: 
        - Description: 
   - `Get-Content`
        - Type de l'objet en sortie: 
        - Description: 
    - `Out-Null`
        - Type de l'objet en sortie: 
        - Description: 

3. `Get-LocalGroup -Name Administrateurs | Get-LocalGroupMember | Select-Object -Property Name, SID | Out-GridView`
    - `Get-LocalGroup`
        - Type de l'objet en sortie: 
        - Description: 
    - `Get-LocalGroupMember`
        - Type de l'objet en sortie: 
        - Description: 
    - `Select-Object`
        - Type de l'objet en sortie: 
        - Description: 



## Exercice 2: Chaînage de commandes

Dans cet exercice, trouvez la ligne de commande PowerShell à utiliser pour obtenir l'information demandée.

Pour chaque question, inscrivez la ligne de commande et insérez une copie d'écran pour votre référence personnelle. Vous devriez pouvoir répondre à la question en utilisant **une seule ligne de commande**, en chaînant plusieurs commandes à l'aide de l'opérateur **`|`** (*pipe*).


1. À l'aide des commandes `Get-ChildItem` et `Select-Object`, obtenez la liste de **tous les fichiers** se terminant par **l'extension .EXE** du répertoire **`C:\Windows`**, en affichant seulement le **nom complet**, la **date de dernière modification** et la **date de création**.

2. Sauvegardez toute l'information retournée par `Get-ComputerInfo` dans le fichier `info.txt` (à créer dans le répertoire courant).
    
3. À l'aide de la commande `Get-Item`, **affichez le texte** contenu dans ce fichier.
    
4. Dressez la liste des cartes réseau à l'aide de la commande `Get-NetAdapter` sous forme de tableau avec seulement leur **nom**, leur **description** et leur **adresse MAC**.
    
5. Créez un nouveau répertoire nommé *Minou* dans le répertoire courant, puis utilisez le pipeline pour entrer dans ce répertoire immédiatement après en une seule ligne de commande.
    
6. Démarrez Notepad à l'aide de la commande `Start-Process`, mais faites-le en affichant son **numéro de processus (PID)** dans la console. N'affichez que son numéro de processus, rien d'autre, **sans l'en-tête de colonne** "PID". (*Attention, cette commande ne produit pas d'objet de manière automatique, il faut le provoquer*).
    
7. 🏆 Obtenez la liste de **toutes les adresses IPv4** de votre ordinateur. On souhaite avoir les **informations détaillées** enregistrées dans un **fichier texte**, tout en affichant un **tableau sommaire** dans la console avec seulement une colonne *IPaddress* et une colonne *InterfaceAlias*. Tout ceci doit se faire **en une seule ligne de commande** en utilisant le pipeline. Pour répondre à cette question, vous aurez besoin, entre autres, des commandes `Get-NetIPAddress` et `Tee-Object`.




