---
title: WMI
sidebar_label: WMI
toc_max_heading_level: 2
---

Dans cet exercice, trouvez la commande PowerShell à utiliser pour obtenir l'information demandée à l'aide de WMI. Utilisez la commande `Get-CimInstance` dans vos réponses.

Vous pouvez vous aider de l'outil WMIExplorer: https://github.com/vinaypamnani/wmie2/releases/latest

Voici quelques classes qui pourraient vous être utiles:

```
Win32_ComputerSystem .................. Représente l'ordinateur
Win32_OperatingSystem ................. Représente le système d'exploitation
Win32_Processor ....................... Représente le processeur
Win32_SystemEnclosure ................. Représente le boîtier de l'ordinateur
Win32_BIOS ............................ Représente le BIOS de l'ordinateur
Win32_QuickFixEngineering ............. Représente les mises à jour du système d'exploitation
Win32_USBDevice ....................... Représente les périphériques USB
Win32_NetworkAdapterConfiguration ..... Représente la configuration des cartes réseau
Win32_TimeZone ........................ Représente la configuration du fuseau horaire
SoftwareLicensingProduct .............. Représente les licences des produits Microsoft Windows et Office
```

---

**a)** Quel est le fuseau horaire? 

> *Résultat attendu (exemple):*
> ```
> (UTC-05:00) Est  (É.-U. et Canada)
> ```

---

**b)** Trouvez le nom de fabricant de votre ordinateur

> *Résultat attendu (exemple):*
> ```
> Dell Inc.
> ```

---

**c)** Trouvez le nom de modèle de votre ordinateur

> *Résultat attendu (exemple):*
> ```
> Precision 5820 Tower
> ```

---

**d)** Quel est le numéro de version de Windows qui est installé sur le système?

> *Résultat attendu (exemple):*
> ```
> 10.0.26100
> ```

---

**e)** Quelle est la version du BIOS?

> *Résultat attendu (exemple):*
> ```
> 2.41.0
> ```

---

**f)** Quel est le numéro de série de la machine?

> *Résultat attendu (exemple):*
> ```
> CXDNKD3
> ```

---

**f)** Quel est la date d'installation du système d'exploitation?

> *Résultat attendu (exemple):*
> ```
> 2025-08-06 10:48:22
> ```

---


**h)** Quel est le modèle du processeur dans cet ordinateur?

> *Résultat attendu (exemple):*
> ```
> Intel(R) Xeon(R) W-2235 CPU @ 3.80GHz
> ```

---


**i)** Obtenez la quantité de mémoire RAM physique installée (en Go, arrondie).

> *Résultat attendu (exemple):*
> ```
> 32
> ```

---


**j)** Obtenez la liste des mises à jour de Windows installées (leur identifiant KBxxxx) ainsi que la date d'installation (attention, le nom de la classe n'est pas si évident que ça!)

> *Résultat attendu (exemple):*
> ```
> HotFixID  InstalledOn
> --------  -----------
> KB5066131 2025-11-04 00:00:00
> KB5050575 2025-05-07 00:00:00
> KB5054273 2025-05-07 00:00:00
> KB5059093 2025-05-07 00:00:00
> KB5066835 2025-11-04 00:00:00
> KB5067360 2025-11-04 00:00:00
> ```

---

**k)** Obtenez la liste des périphériques USB connectés

> *Résultat attendu (exemple):*
> ```
> Caption                                PNPDeviceID
> -------                                -----------
> Dispositif de stockage de masse USB    USB\VID_1D6B&PID_0104&MI_03\6&9F4824E&0&0003
> USB-Serial (Single Channel) Vendor 1   USB\VID_04B4&PID_0004&MI_00\8&24E875E0&0&0000
> Périphérique d’entrée USB              USB\VID_1D6B&PID_0104&MI_02\6&9F4824E&0&0002
> Périphérique USB composite             USB\VID_04B4&PID_0004\7&377061E&0&2
> Périphérique d’entrée USB              USB\VID_1D6B&PID_0104&MI_01\6&9F4824E&0&0001
> Périphérique d’entrée USB              USB\VID_1D6B&PID_0104&MI_00\6&9F4824E&0&0000
> USB-Serial (Single Channel) Vendor MFG USB\VID_04B4&PID_0004&MI_01\8&24E875E0&0&0001
> Concentrateur USB générique            USB\VID_04B4&PID_6570\6&1919E1C7&0&4
> Hub USB racine (USB 3.0)               USB\ROOT_HUB30\4&485095D&0&0
> Concentrateur USB SuperSpeed générique USB\VID_0BDA&PID_0411\5&129774C1&0&26
> PiKVM CD-ROM Drive USB Device          USBSTOR\CDROM&VEN_PIKVM&PROD_CD-ROM_DRIVE&REV_0515\7&11780A5B&0&CAFEBABE&0
> Realtek USB 3.0 Card Reader            USB\VID_0BDA&PID_0328\28203008282014000
> Hub USB racine (USB 3.0)               USB\ROOT_HUB30\5&33913090&0&0
> Périphérique USB composite             USB\VID_1D6B&PID_0104\CAFEBABE
> Concentrateur USB générique            USB\VID_0BDA&PID_5411\5&129774C1&0&10
> ```

---

**l)** En utilisant la classe `SoftwareLicensingProduct` (étrangement, son nom ne commence pas par "Win32_"), obtenez la liste des produits de Microsoft pour lesquels il y a une licence active (attribut LicenseStatus = 1) et montrez leur nom ainsi que la clé de produit partielle.

> *Résultat attendu (exemple):*
> ```
> Name                                                    PartialProductKey
> ----                                                    -----------------
> Windows(R), Education edition                           VCFB2
> Office 24, Office24VisioPro2024VL_KMS_Client_AE edition YY89G
> ```

---

**m)** Écrivez un script qui retourne les adresses IPv4 de la machine sous forme d'un tableau de string.

> *Résultat attendu (exemple):*
> ```
> PS C:\Scripts> .\ipaddr.ps1
> 10.10.59.149
> 192.168.221.1
> 192.168.220.2
> ```


