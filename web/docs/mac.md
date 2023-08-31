---
slug: /mac
---

# Notice Mac

## Se connecter sur le mac

- Allumer le mac, le petit bouton noir en haut à droite du clavier
- Si c'est la première fois que tu utilises un mac, demande à ton prof qui t'aidera à créer ton compte
  - souviens toi du mac sur lequel tu as tom compte, tu reprendras le même à chaque séance
- Si tu as déjà un compte, reprends le même mac et connecte toi.

## Se connecter au Wifi

Si le Wifi n'arrete pas de débarquer et rembarquer, redémarrer le mac. Tu peux te connecter sur Campus pour la plupart des cours.

## Cloner son projet

- Partir GitKraken ou Github Desktop
- Se connecter à son github
- Cloner le projet flutter localement.

## Flutter

- Pour éviter des conflits, chaque étudiant installe une version de Flutter quand tu utiliseras le mac pour la première fois
  - télécharge flutter pour mac depuis la page https://docs.flutter.dev/get-started/install
  - attention de bien prendre la version **Apple Silicon**
  - tu peux déplacer le dossier flutter téléchargé, juste se souvenir d'où il est
- Dans Intellij, il te demandera sans doute l'emplacement du SDK Flutter, il faudra indiquer le dossier

## IntelliJ

- Ouvrir le finder (le bonhomme qui sourit)
- Chercher le dossier Applications
- Dedans demarrer l’application IntelliJ IDEA

## Simulateur

- Appuyer sur command et espace en meme temps
- Dans le champ de recherche taper simul
- Selectionner l’app simulator et taper return pour la demarrer

Une fois le simulator demarre, vous devriez le voir dans les cibles sur IntelliJ

## Déployer sur un iPad ou iPhone

L’utilisation d’un appareil physique necessite un compte Apple ID gratuit

### Sur le mac

- Ouvrez votre projet dans Intellij
- Selectionner le dossier ios a la racine de votre projet et faites clic droit
- Dans le sous-menu flutter faites « open ios module in Xcode »
- Selectionner Runner dans le panneau de gauche
- Selectionner l’onglet Signing & capabilities dans la zone centrale
- Selectionner le bouton Team et faites « add an account »
- Entrez vos identifiants d’apple ID ou créer le si pas encore fait.
- Vous devriez maintenant pouvoir selectionner un iPhone dans les appareils cibles
- Branchez le iPhone ou l'iPad dans l'ordi
- Tentez de partir l'appli dans Xcode
- Tentez de partir l'appli dans Intellij en choisissant le iPhone

### Sur l'iPhone (iPad)

- brancher l'appareil sur le mac (cable usb-c lightning)
- deverouiller l'appareil (code = 000000)
- sur l'ecran d'accueil tapper l'engrenage (Reglages ou settings)

### Problèmes

Si en lançant l'appli depuis le mac sur l'iPhone vous avez un message d'erreur il faut:

- Aller dans parametres ≥ general ≥ gestion des XXX
- dans ce menu la il y a une option faire confiance a l'appli
