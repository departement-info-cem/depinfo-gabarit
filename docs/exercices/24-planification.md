---
title: Planification de tâches
sidebar_label: Planification de tâches
toc_max_heading_level: 2
draft: true
---

Sur une machine virtuelle (**PAS** le contrôleur de domaine), créez un petit script, `C:\Test\test.ps1` qui écrit une ligne dans un fichier texte avec la date du jour, par exemple:

```powershell
New-Item -Path "C:\Test\" -ItemType Directory -Force | Out-Null
$Message = "$(Get-Date)  -  $env:USERDOMAIN\$env:USERNAME" 
$Message | Add-Content -Path "C:\Test\Test.log"
```

Testez ce script et regardez le fichier contenu du fichier C:\Test\Test.log (avec un éditeur de texte ou, encore mieux, Get-Content).

Avec ce script, tentez plusieurs méthodes pour rendre son exécution automatique au démarrage de session. Planifiez l'exécution du script en utilisant seulement des commandes PowerShell. Testez ensuite le résultat en vous loguant avec un utilisateur et vérifiez dans le fichier C:\Test\Test.log que la méthode a bien fonctionné.


## Partie 1: Démarrage de session utilisateur

### a) La clé Run

Créez une entrée dans la clé `HKLM:\Software\Microsoft\Windows\CurrentVersion\Run` pour lancer le script. Après avoir testé, effacez l'entrée.

Testez un démarrage de session et surveillez l'activité dans le fichier log.

Effacez l'entrée une fois terminé.

---

### b) Un raccourci dans le menu démarrer

Faites un script qui crée **un raccourci** (.LNK) dans `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup`.

Testez un démarrage de session et surveillez l'activité dans le fichier log.

Effacez le raccourci une fois terminé.


### c) Active Setup

Faites un script qui crée **une clé de registre** dans `HKLM:\Software\Microsoft\Active Setup\Installed Components`. Le nom de la clé est à votre discrétion. La clé doit contenir au minimum des entrées `Version` et `StubPath`.

Testez un démarrage de session et surveillez l'activité dans le fichier log.

Testez un deuxième démarrage de session pour confirmer que ça n'a fonctionné **qu'une seule fois**.


### d) Le planificateur de tâches 

Faites un script qui crée une tâche planifiée qui s'exécute au **démarrage de session utilisateur** pour lancer le script `test.ps1`. La tâche doit être exécutée pour chaque utilisateur qui démarre une session et le script doit être lancé à leur nom (le principal doit être le groupe des **Utilisateurs locaux**, ou S-1-5-32-545).

Testez un démarrage de session et surveillez l'activité dans le fichier log.

Effacez la tâche planifiée.


## Partie 2: Tâche de maintenance

Modifiez votre réponse précédente pour lancer le script automatiquement en tant que l'utilisateur **SYSTÈME** (S-1-5-18).


### e) Au démarrage de la machine

Faites en sorte que le script test.ps1 s'exécute automatiquement en tant que **SYSTÈME** au démarrage du poste.

Redémarrez la machine et notez l'heure. Puis regardez le fichier Log pour confirmer que le script a bien été exécuté.

Supprimez la tâche planifiée.


### f) À date et heure fixe

Faites en sorte que le script test.ps1 s'exécute automatiquement **à une heure précise une fois par semaine**, en tant que l'utilisateur **SYSTÈME**. 

Attendez ce moment puis vérifiez dans le fichier log. Vous pouvez aussi ouvrir le planificateur et lancer manuellement la tâche pour tester.

Effacez la tâche planifiée lorsque c'est terminé.



