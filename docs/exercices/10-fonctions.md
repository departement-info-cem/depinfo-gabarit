---
title: Fonctions, pile d'appel, portée
sidebar_label: Fonctions, pile d'appel, portée
toc_max_heading_level: 2
---


## 1. Fonctions

**A)** Dans le fichier `Invoke-Addition.PS1`, définissez **une fonction** `Invoke-Addition` qui prend en paramètre un nombre illimité de termes.

```powershell showLineNumbers
function Invoke-Addition {
    param(
        [double[]] $termes
    )

    $total = 0

    foreach ($terme in $termes) {
        $total += $terme
    }

    $total
}
```

Testez ce script avec `F5`. Celui-ci ne donne aucun résultat. **Pourquoi selon vous?**


Pour tester votre fonction, appelez-la dans le code principal de votre script, comme ceci:

```powershell showLineNumbers
function Invoke-Addition {
    # le code de la fonction...
}

Invoke-Addition 2, 3, 5
```

Cependant, même si la fonction prend des paramètres, le script n'en prend pas. Ce n'est pas pratique!




**B)** Tentez de lancer votre script à l'aide de la méthode du **dot-sourcing**. Puis, dans le même terminal, tentez de lancer la fonction.

```
PS C:\EspaceLabo> . .\Invoke-Addition.ps1

PS C:\EspaceLabo> Invoke-Addition 2, 4, 6
```


## 2. Paramètres de fonctions

Pour les questions suivantes, écrivez une fonction qui fait l'action demandée. Définissez les paramètres dans un bloc Param().

:::tip
Pour tester une fonction, vous devez la déclarer en premier. Pour tester la fonction dans VS Code, sélectionnez la fonction au complet (toutes les lignes en commençant par "function … {" jusqu'à celle du dernier "}" puis faites F8. Cela aura pour effet de recopier tout ce code dans le terminal intégré. Puis, testez la fonction directement dans le terminal. Vous devrez refaire cela chaque fois que vous apportez une modification dans le code de votre fonction.
:::

    
**A)** Écrivez une fonction `Start-Notepad` qui démarre Notepad.exe à l'aide de `Start-Process` et **retourne un objet** décrivant le processus dans le pipeline (en utilisant le paramètre `-PassThru`).

```
PS C:\> Start-Notepad

 NPM(K)    PM(M)      WS(M)     CPU(s)      Id  SI ProcessName
 ------    -----      -----     ------      --  -- -----------
     13     2,93      15,01       0,08   42308   1 Notepad
```


**B)** Réécrivez la fonction précédente et faites en sorte qu'il soit possible de **spécifier un fichier texte**. 

:::info
Pour ouvrir Notepad avec un fichier existant, il suffit de fournir le chemin complet du fichier texte à en argument (par exemple, `notepad.exe "C:\dossier\fichier.txt"`). Vous pouvez passer l'argument à la commande `Start-Process` à l'aide du paramètre `-ArgumentList`
:::


**C)** Réécrivez la fonction précédente et faites en sorte qu'elle **plante si le fichier n'existe pas**. Utilisez les **validations de paramètres**.



## 3. Pile d'appel (trace)

On veut accomplir trois éléments principaux:
1. Indiquer quelles lignes de code s'exécutent dans quel ordre
2. Indiquer les effets de chaque ligne de code (valeur des variables à l'intérieur de la portée)
3. Indiquer la pile d'appel, la courante en haut

### Exemple

Si on a le code suivant :

```powershell  showLineNumbers
function MaFonction ([int]$x, [int]$y) {
    $z = $x + $y
    return $z
}

$a = 3
$b = 5
$c = MaFonction $a $b
Write-Host "La réponse est $c"
```

On aura la trace suivante :

| Ligne exécutée                 | Effet                                                  | Pile d'appel              |
|:-------------------------------|:-------------------------------------------------------|:--------------------------|
| $a = 3                         | $a: 3                                                  | **Script**                |
| $b = 5                         | $a: 3 ; $b: 5                                          | **Script**                |
| $c = MaFonction $a $b          | $a: 3 ; $b: 5<br/>Appelle MaFonction avec $x=3 et $y=5 | **Script**                |
| $z = $x + $y                   | $x: 3 ; $y: 5 ; $z: 8                                  | **MaFonction**<br/>Script |
| return $z                      | $x: 3 ; $y: 5 ; $z: 8<br/>Sortie: 8                    | **MaFonction**<br/>Script |
| $c = MaFonction $a $b          | $a: 3 ; $b: 5 ; $c: 8                                  | **Script**                |
| Write-Host "La réponse est $c" | Écrit "La réponse est 8"                               | **Script**                |


### Deuxième trace

Sur un médium de votre choix, suivez l'exécution de ce script dans votre tête et remplissez un tableau de trace pour chaque ligne, dans l'ordre de leur exécution.

```powershell showLineNumbers
function X ([int]$x) {
    $xx = $x + 80
    return $xx
}
function Y ([int]$y) {
    $yy = X -x ($y * 3)
    return $yy
}

$a = X -x 10
$b = Y -y 17
$c = $b - $a + 1
Write-Host "La réponse est $c"
```

Une fois terminé, copiez ce code dans un fichier PS1, insérez un point d'arrêt **à la première ligne exécutée** et validez votre réponse à l'aide du débogueur.


## 4. Portée

Tentez de deviner le texte qui sera écrit par les scripts suivants, puis comparez votre réponse en testant le script. Utilisez le débogueur au besoin.

#### A)

<Row>
<Column>

```
PS C:\EspaceLabo> $v = 8

PS C:\EspaceLabo> .\script_a.ps1
(???)

PS C:\EspaceLabo> $v
(???)

```

</Column>
<Column>

```powershell showLineNumbers
# Script: script_a.ps1
function F {
    $v = 3
    Write-Host $v
}
$v = 5
F
Write-Host $v
```
</Column>
</Row>

#### B)

<Row><Column>

```
PS C:\EspaceLabo> $v = 8

PS C:\EspaceLabo> .\script_b.ps1
(???)

PS C:\EspaceLabo> $v
(???)

```
</Column><Column>

```powershell showLineNumbers
# Script: script_b.ps1
function F {
    $script:v = 3
    Write-Host $v
}
$v = 5
F
Write-Host $v
```
</Column></Row>

#### C)

<Row><Column>

```
PS C:\EspaceLabo> $v = 8

PS C:\EspaceLabo> .\script_c.ps1
(???)

PS C:\EspaceLabo> $v
(???)

```
</Column><Column>

```powershell showLineNumbers
# Script: script_c.ps1
$v = -4
function F {
    Write-Host $v
    $global:v = 42
}
$v = 5
F
Write-Host $v
```
</Column></Row>



## 5. Configuration du débogueur dans VSCode

Créez un espace de travail (un répertoire qui contiendra vos sources). Vous pouvez utiliser `C:\EspaceLabo`, qui existe déjà.

Pour ouvrir ce répertoire dans votre espace de travail, vous pouvez soit faire `Maj + Clic droit` sur le répertoire dans l'explorateur, ou Fichier / Ouvrir le dossier dans VS Code.

Dans le panneau de gauche, dans la section Explorateur, créez un nouveau fichier `addition.ps1` et mettez-y le code suivant:

```powershell showLineNumbers
    param(
        [double[]] $termes
    )

    $total = 0

    foreach ($terme in $termes) {
        $total += $terme
    }

    $total
```

Insérez un point d'arrêt à la première ligne (`$total = 0`). Appuyez sur F5. Notez que le débogueur ne vous est pas d'une grande utilité, car aucun paramètre n'a pu être passé.

Dans le panneau "Exécuter et déboguer", à gauche, cliquez sur "Créer un fichier launch.json". Sélectionnez "Launch current file". Cela créera un fichier `launch.json` à la racine de votre espace de travail.

Pour ajouter une configuration, vous pouvez cliquer sur le bouton "ajouter une configuration", ou simplement copier la configuration qui est déjà présente. Notez qu'il vous faut respecter la syntaxe json. Donnez-lui un nom et spécifiez vos arguments dans l'attribut `"args"`

```json
{
    "name": "Ma configuration",
    "type": "PowerShell",
    "request": "launch",
    "script": "${file}",
    "args": ["-Termes 2, 3, 5"]
}
```

Enregistrez le fichier, puis retournez dans votre script. Dans le panneau "Exécuter et déboguer", vous devriez voir une liste déroulante tout en haut, écrit "PowerShell: Launch Current File". Sélectionnez votre configuration. Puis appuyez sur F5 pour injecter automatiquement vos arguments dans la session de débogage.

Vous savez maintenant comment déboguer des scripts avec arguments!






