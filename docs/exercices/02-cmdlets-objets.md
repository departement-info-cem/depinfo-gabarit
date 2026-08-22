---
title: Commandes, alias et objets
sidebar_label: Commandes, alias et objets
draft: true
---

Les exercices suivants visent à vous familiariser avec les commandes PowerShell, les alias et les objets retournés par les commandes.

Vous pouvez télécharger ces exercices sous forme de fichier PowerShell. Ouvrez le fichier dans Visual Studio Code (avec l'extension PowerShell installée). Vous pouvez sélectionner une ligne de commande et appuyer sur la touche F8 pour exécuter cette commande dans le terminal intégré.

📝 [Exercice R02](https://github.com/vcarrier/3t5-exercices/tree/main/R02%20-%20Cmdlets%20et%20objets)


## Exercice 1: Commandes et alias


Dans cet exercice, vous devez identifier si la commande donnée est un **alias**, un **cmdlet** ou une **commande externe**. 

- Si c'est un **cmdlet**, identifiez **son ou ses alias**;
- Si c'est un **alias**, indiquez la **commande** correspondante ainsi que ses **autres alias**;
- Si c'est une **commande externe**, tentez d'identifier son **fichier de programme**.

1. `ps`
2. `shcm`
3. `Get-ChildItem`
4. `pwd`
5. `Set-Location`
6. `copy`
7. `ping`
8. `Get-PSDrive`
9. `ni`
10. `Write-Output`
11. `gsv`
12. `Remove-Item`
13. `ren`
14. `ipconfig`
15. `wget`
16. `Move-Item`
17. `cat`
18. `Start-Process`
19. `kill`
20. `taskkill`
21. `Invoke-History`



:::tip Conseils
Pour trouver une commande à partir d'un alias, vous pouvez utiliser la commande `Get-Alias -Name`.

```
PS C:\> Get-Alias -Name cls

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           cls -> Clear-Host
```

Pour trouver les alias d'une commande, vous pouvez utiliser la commande `Get-Alias -Definition`.

```
PS C:\> Get-Alias -Definition Clear-Host

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           clear -> Clear-Host
Alias           cls -> Clear-Host
```

Vous pouvez aussi utiliser la commande `Get-Help`.
:::


## Exercice 2: Commandes PowerShell

Trouvez la commande PowerShell et leurs arguments permettant de faire ce qui est demandé.

Utilisez la vraie commande PowerShell, pas un alias ni une commande externe.

1. Obtenir la liste des **fichiers et répertoires** contenus dans le répertoir courant (équivalent à `dir`).
2. Obtenir la liste des **fichiers seulement** contenus directement sous `C:\Windows`.
3. Obtenir la liste des **répertoires seulement** contenus directement sous `C:\Program Files`.
4. Obtenir la liste des **processus** actifs dont le nom commence par "V" (vous pouvez utiliser les *wildcards*).
5. Obtenir de l'information sur le **volume C:** (comme sa taille, l'espace restant, le format du système de fichiers, etc.)
6. Créer un **nouveau répertoire** nommé `Minou` à la racine du volume `C:\`.
7. Définir ce répertoire comme **répertoire de travail** (répertoire de travail, équivalent à `cd C:\Minou`).
8. Obtenir la liste des **adapteurs réseau** installés sur l'ordinateur.
9. Obtenir la liste des **utilisateurs locaux** configurés sur l'ordinateur.
10. Obtenir **l'adresse IP** numérique du serveur `www.cegepmontpetit.ca`.
11. Vérifier si le serveur `www.cegepmontpetit.ca` répond **sur le port 443** à l'aide de `Test-NetConnection`.
12. Obtenez la date (et l'heure) de maintenant.
13. 🏆 Obtenez la date et l'heure dans le format suivant: `2025-08-26 14:55`. Consultez l'aide en ligne (`Get-Help -Online`) pour plus de détails sur l'utilisation de cette commande.

::::tip Conseils
Pour connaître le nom de la commande, vous pouvez utiliser son alias comme point de départ.

```
PS C:\Windows> Get-Location

Path
----
C:\Windows
```

Si vous connaissez le nom de cette commande, vous pouvez voir quelles commandes existent pour ce nom à l'aide de `Get-Command -Noun`.

```
PS C:\Windows> Get-Command -Noun Location

CommandType     Name          
-----------     ----          
Cmdlet          Get-Location  
Cmdlet          Pop-Location  
Cmdlet          Push-Location 
Cmdlet          Set-Location  
```

Aussi, pour connaître la syntaxe de cette commande, comme ses paramètres, vous pouvez utiliser la commande `Get-Help`. L'aide est assez difficile à consulter dans la console, mais vous pouvez spécifier les arguments `-ShowWindow` ou `-Online` pour consulter la rubrique d'aide dans une fenêtre ou un navigateur.

```
PS C:\Windows> Get-Help Get-Location -Online
```

:::caution
Notez qu'il se peut que les rubriques d'aide ne soient pas à jour sur votre ordinateur. Il vous suffit de déclencher une mise à jour de l'aide avec la commande `Update-Help -Scope CurrentUser -UICulture en-US`.
:::

::::


## Exercice 3: Objets

Dans cet exercice, trouvez la ligne de commande PowerShell à utiliser pour obtenir l'information demandée. Les questions suivantes doivent être répondue en utilisant les objets.

### Partie 1: Système de fichiers

1. Stockez dans la variable `$ipconfig` un objet représentant le fichier **C:\Windows\System32\ipconfig.exe** (avec `Get-Item`).
2. Obtenez la liste de **toutes les propriétés et méthodes** offertes par cet objet (avec `Get-Member`).
3. À l'aide de la commande `Select-Object`, obtenez le **maximum d'informations** contenu dans cet objet.
4. Affichez à l'écran **le nom complet** de ce fichier (*C:\Windows\System32\ipconfig.exe*), en utilisant les propriétés de cet objet.
5. Affichez seulement le nom de l'exécutable (*ipconfig.exe*).
6. Affichez seulement le nom du répertoire dans lequel il se trouve (*C:\Windows\System32*).
7. Affichez **la taille** de ce fichier, en octets.
8. Affichez la **date de création** de ce fichier.
9. 🏆 Affichez la date de création de ce fichier **en format** `yyyy-MM-dd`. (Vous aurez besoin de `Get-Date`).
10. 🏆 Affichez **le nombre de jours** qui se sont écoulés depuis la création de ce fichier. (Vous aurez besoin de `New-TimeSpan`).



### Partie 2: Objets PSCulture

Souvent, lorsqu'on développe un script ou un automatisme, on ne connaît pas à l'avance la langue du système ou celle choisie dans les paramètre de l'utilisateur. Lorsqu'on gère un environnement TI multilingue, on doit souvent faire en sorte que nos commandes fonctionnent peu importe la langue. La commande `Get-Culture` permet d'obtenir de l'information sur la configuration linguistique du système et de son profil utilisateur.

```
PS C:\> Get-Culture

LCID             Name             DisplayName
----             ----             -----------
3084             fr-CA            français (Canada)
```

Cette commande semble donner très peu d'information, mais elle retourne en réalité un objet qui contient beaucoup plus d'informations que ce qui est affiché par défaut. 

1. Stockez l'objet produit par `Get-Culture` dans une variable nommée `$Culture`.
2. Obtenez la liste de **toutes les propriétés et méthodes** offertes par cet objet
3. À l'aide de la commande `Select-Object`, obtenez le **maximum d'informations** contenu dans cet objet.
4. Affichez dans la console seulement la propriété `DisplayName`.
5. Dans cet objet se trouve un sous-objet représentant le **format des nombres** dans cette langue, dans lequel se trouve le symbole de la device monétaire (*currency*, soit `$`). Affichez ce symbole dans la console.
6. 🏆 Obtenez la date du jour **dans le format de date courte** de la langue courante.

:::tip Conseils
Dans la console PowerShell, vous pouvez explorer les objets de différentes manières.

Vous pouvez utiliser la commande `Get-Member` pour voir tous les membres de l'objet (ses propriétés et ses méthodes). Pour l'utiliser, il faut *piper* un objet à l'intérieur.
- `Get-ChildItem | Get-Member`
- `$mavariable | Get-Member`


Vous pouvez utiliser la commande `Select-Object *` pour afficher la liste de toutes les propriétés disponibles dans l'objet ainsi que leur valeur.

```
PS C:\> Get-Process explorer | Select-Object *

Name                       : explorer
Id                         : 4820
PriorityClass              : Normal
...
```

Vous pouvez aussi voir une liste des propriétés d'un objet en utilisant le raccourci clavier CTRL+ESPACE.

```
PS C:\> $WinUpdateService = Get-Service -Name wuauserv
PS C:\> $WinUpdateService.[CTRL+ESPACE]
Name                       DisplayName                UserName                   Pause
RequiredServices           MachineName                Close                      Refresh
BinaryPathName             ServiceHandle              Continue                   Start
CanPauseAndContinue        ServiceName                Dispose                    Stop
CanShutdown                ServicesDependedOn         Equals                     WaitForStatus
CanStop                    ServiceType                ExecuteCommand             ToString
Container                  Site                       GetHashCode                Disposed
DelayedAutoStart           StartType                  GetLifetimeService
DependentServices          StartupType                GetType
Description                Status                     InitializeLifetimeService
```
:::
