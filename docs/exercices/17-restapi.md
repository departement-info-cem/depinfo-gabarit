---
title: Requêtes Web et API REST
sidebar_label: Requêtes Web et API REST
toc_max_heading_level: 2
---


## Exercice 1: Téléchargement d'un fichier Zip

**A)** À l'aide de la commande `Invoke-WebRequest`, téléchargez les outils Sysinternals (https://download.sysinternals.com/files/SysinternalsSuite.zip) et sauvegardez-le dans un répertoire temporaire (par exemple, `$env:temp`). 

*Attention à prendre soin de **désactiver la barre de progression**, car ce sera très lent sinon. Aussi, si vous utilisez Windows PowerShell 5.1, activez le switch `-UseBasicParsing`.*


**B)** Extrayez le contenu du Zip dans un répertoire Outils sur votre bureau ($HOME\Desktop\Outils) avec `Expand-Archive`.

:::tip
Vous pouvez gagner considérablement en performance en utilisant plutôt cette méthode:

```powershell
Add-Type –AssemblyName "System.IO.Compression.Filesystem" 
[System.IO.Compression.ZipFile]::ExtractToDirectory("C:\src\fichier.zip", "C:\dest")
```

[Voir la documentation](https://learn.microsoft.com/en-us/dotnet/api/system.io.compression.zipfile.extracttodirectory?view=net-9.0) (c'est en C# mais ça s'applique aussi à PowerShell).
:::



---

## Exercice 2: API public

Votre ordinateur est fort probablement derrière un NAT. Comme vous savez, l'adresse IP qui se trouve dans la configuration IP de votre ordinateur est votre adresse privée (192.168.x.x, 10.x.x.x, etc.). Mais tous les serveurs auxquels vous vous connectez sur Internet vous identifient par votre adresse publique, qui est donnée au NAT par le fournisseur d'accès Internet. Vous pouvez la connaître facilement en naviguant sur https://whatismyipaddress.com/. 

Mais comment connaître votre adresse IP publique de manière programmatique? Par une API, bien sûr! Il y en a une gratuite et facile d'emploi qui ne nécessite pas d'autorisation telle qu'un jeton *Bearer* ou une clé d'API : https://ip-api.com/

Tout d'abord, dans votre navigateur, testez les adresses suivantes:

```
http://ip-api.com/json
http://ip-api.com/csv
http://ip-api.com/xml
```

Démarrez l'application Postman (installée sur les postes de laboratoire ou téléchargeable sur https://www.postman.com/downloads/) et testez ces adresses IP.

Vous constaterez que le format json est le plus approprié.

**Attention, certains navigateurs forcent l'emploi de HTTPS. Dans ce cas-ci il faut utiliser HTTP non sécurisé, car l'interface HTTPS n'est pas gratuite.**

Utilisez la commande `Invoke-WebRequest` (ou son alias `iwr`) pour obtenir les données en JSON et en extraire l'adresse IP.

```powershell
$response = Invoke-WebRequest -Uri "http://ip-api.com/json"
$content = $response.Content | ConvertFrom-Json
Write-Host "Mon adresse IP est: $($content.query)"
Write-Host "Mon fournisseur d'accès internet est: $($content.isp)"
```

C'est bien, mais il y a une alternative plus commode pour interroger une API produisant du JSON: la commande `Invoke-RestMethod` (ou son alias `irm`). Elle prend automatiquement en charge l'extraction du contenu et la conversion de JSON en objet natif PowerShell.

```powershell
$response = Invoke-RestMethod -Uri "http://ip-api.com/json"
Write-Host "Mon adresse IP est: $($response.query)"
Write-Host "Mon fournisseur d'accès internet est: $($response.isp)"
```

Voici maintenant quelques défis:

**A)** De quelle ville provient votre adresse IP publique?


**B)** De quelle ville américaine provient l'adresse IP 8.8.8.8? 


**C)** Faites un script (ou tapez les commandes dans la console PowerShell) pour ouvrir Google Maps à l'emplacement géographique correspondant à l'adresse IP 8.8.8.8.

:::tip

**Conseil 1:** Vous pouvez consulter [la doc de l'API](https://developers.google.com/maps/documentation/urls/get-started?hl=fr) de Google Maps pour savoir comment construire une URL. Par exemple pour générer un lien qui pointe vers une latitude et longitude précis, voici un exemple:

```
https://www.google.com/maps/search/?api=1&query=45.5360826,-73.4963441
```

**Conseil 2:** Sur un poste en français, les Double sont convertis en string avec une virgule décimale, alors que Google a besoin des points. Utilisez cette technique pour formater les nombres.

```
PS> $latitude
39,03

PS> $latitude.ToString('0.0000000', [CultureInfo]::InvariantCulture)
39.0300000
```

**Conseil 3:** Pour démarrer le navigateur par défaut, c'est contre-intuitif mais utilisez simplement `Start-Process` avec l'URL souhaité. Par exemple:

```powershell
Start-Process -FilePath "https://www.google.com/maps/search/?api=1&query=45.5360826,-73.4963441"
```

:::


**D)** Dans la documentation de l'API, dans la section Returned data, vous pouvez spécifier quels champs vous souhaitez obtenir. Vous pouvez le spécifier dans l'URL avec le paramètre `fields=`. Obtenez seulement l'adresse IP (query) ainsi que le DNS inverse (reverse).


### Méthode POST

Cette API offre aussi une fonctionnalité de vérification de plusieurs adresse en lot. Voir la documentation sur https://ip-api.com/docs/api:batch. Vous avez besoin de fournir la liste des adresse à l'aide d'une requête POST. Contrairement à la méthode Get, la méthode Post exige de fournir dans la requête des données en format JSON. Cet objet doit obligatoirement être formaté tel que décrit dans la documentation. Dans le cas de notre API, on peut le formater de la manière suivante:

```json
[
  {
    "query": "8.8.8.8",
    "fields": "status,country,regionName,city,isp",
    "lang": "fr"
  },
  {
    ...
  }
]
```

Certains de ces attributs sont optionnels mais pour l'exercice, on construira un objet complet. On va donc construire un dictionnaire (soit un hashtable ou un pscustomobject, peu importe) qu'on convertira en json pour le passer dans la requête REST.

```powershell
$ips = "8.8.8.8", "8.8.4.4", "1.1.1.1"                # Un tableau d'adresses IP
$fields = "status,country,regionName,city,isp"        # Les champs à demander
$lang = "fr"                                          # On veut le nom des villes en français

# On construit la structure de données à envoyer et on la convertit en JSON
$body = $ips | ForEach-Object { @{ query = $_ ; fields = $fields ; lang = $lang } } | ConvertTo-Json

# Puis on passe la requête
Invoke-RestMethod -Uri "http://ip-api.com/batch" -Method Post -Body $body
```


---
## Exercice 3: API de pfSense

Le professeur a produit un modèle de passerelle pfSense qui utilise une version plus récente et il a installé le package [pfrest](https://pfrest.org/). Vous pouvez maintenant utiliser une API REST pour accéder à la configuration de la passerelle plutôt que de dépendre de son interface graphique Web.


### Préparation

Premièrement, dans votre environnement virtuel, supprimez votre passerelle pfSense et clonez-en une nouvelle à partir de ce modèle:

```
DEPINFO\Modèles\MODELE pfSense-CE 2.8.1 (sans DHCP)
```

N'oubliez pas de **modifier l'interface réseau #2** pour qu'elle corresponde au commutateur virtuel de votre environnement.


### Consulter la doc

Ensuite, démarrez une session sur n'importe quelle VM Windows de votre réseau privé et tentez de vous connecter à l'interface Web Configurator `http://192.168.21.1/` avec l'identifiant `admin` et le mot de passe `pfsense`. Puis naviguez sur la page de documentation: `http://192.168.21.1/api/v2/documentation/`.

Vous pouvez tester des requêtes directement à partir de la documentation. Pour essayer, naviguez dans la section **STATUS** et déroulez le bloc `GET /api/v2/status/interfaces`. Cliquez sur le bouton **Try it out**, puis en bas des champs de paramètres (n'y touchez pas pour l'instant), cliquez sur **Execute**. Une section Responses apparaîtra juste en bas montrant l'URL de la requête ainsi que la commande curl. Pourtant, la requête retourne un code d'erreur `401 UNAUTHORIZED`.

Pour que cette requête fonctionne, on doit être authentifié. L'API supporte plusieurs modes d'autorisation (apikey, bearer, oauth 2.0...) mais on va utiliser une authentification de base avec un nom d'utilisateur et un mot de passe. Pour tester, cliquez sur le petit cadenas en haut du panneau. Choisissez le mode Basic et entrez le nom d'utilisateur et le mot de passe de votre compte utilisateur de pfSense. Puis recliquez sur **Execute**. Il devrait maintenant y avoir une réponse `200 OK` accompagnée du résultat formaté en JSON.


### Avec PowerShell

À l'aide de la commande `Invoke-RestMethod`, tentez d'obtenir l'adresse IP, le masque de sous-réseau et la passerelle par défaut de l'interface WAN. Pour celà il vous faut connaître certaines informations:
- URI: `http://192.168.21.1/api/v2/status/interfaces`
- Méthode: `Get` (par défaut)
- Autorisation: `Basic`

Il faut aussi obtenir l'identifiant de l'utilisateur et son mot de passe avec `Get-Credential`.

```powershell
$uri = "http://192.168.21.1/api/v2/status/interfaces"
$cred = Get-Credential
$response = Invoke-RestMethod -Uri $uri -Authentication Basic -Credential $cred -AllowUnencryptedAuthentication
$response.data
```

Vous pouvez ensuite extraire les informations que vous souhaitez.

```powershell
$response.data | Select-Object hwif, descr, ipaddr, subnet, gateway, macaddr
```

:::caution
Ici, parce que c'est un environnement de laboratoire et que l'interface Web est sur HTTP non sécurisé, le nom d'utilisateur et le mot de passe ne sont pas chiffrés. Cela pose un risque important pour la sécurité. C'est pourquoi il faut spécifier `-AllowUnencryptedAuthentication`. 

Mais dans une infrastructure de production, il est important d'utiliser HTTPS avec un certificat valide (vous verrez ça dans le cours de Cybersécurité 2: Architecture) pour chiffrer les échanges entre le client et le serveur. Il est aussi souhaitable d'utiliser des méthodes d'autorisation plus robustes comme un OAuth2 ou Bearer.
:::
