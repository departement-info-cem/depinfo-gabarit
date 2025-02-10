# Laboratoire 6

Téléchargez le [projet de départ](../../static/files/labo6.zip) et lancez-le. 🧤⚾

Familiarisez-vous avec l'application Web : visitez les trois pages et essayez quelques requêtes. Notez que nous n'ajouterons
**aucune** fonctionnalité dans cette application Web à part compter le nombre de requête. (mini affichage en bas à gauche) Nous
allons principalement améliorer la structure du code à l'aide d'un service.

## 🤰 Étape 1 - Accoucher d'un service

### 🥚 1 - Créer un service 

[💡](/cours/rencontre3.2#-créer-un-nouveau-service) Créez un nouveau service nommé `magic`. Il doit être créé dans le
dossier existant nommé `services`.

## 🕊 Étape 2 - Déplacer le problème

### ✉ 2 - Déplacer des variables

[💡](/cours/rencontre3.2#-injecter-un-service-dans-un-composant) Dans les composants `index`, `byType` et `byName`, il y a des tableaux nommés `nameExamples` et `typeExamples`.
Ces variables sont répétitives parmi les trois composants. Transférez-les dans le `MagicService` et adaptez les
trois composants en conséquence.

Assurez-vous que l'application Web fonctionne toujours comme avant du point de vue de l'utilisateur.

### 📶 3 - Déplacer des requêtes

[💡](/cours/rencontre3.2#-transférer-une-requête-dans-un-service) Dans les composants `byType` et `byName`, il y a des requêtes HTTP.
Transférez toutes les requêtes HTTP dans le service `MagicService` et adaptez les composants en conséquence. Vous remarquerez d'ailleurs
qu'il y avait une requête qui se répétait.

Assurez-vous que l'application Web fonctionne toujours comme avant du point de vue de l'utilisateur.

## ⏫ Étape 3 - Mon laboratoire ne compte pas pour vous

### 🧮 4 - Implémenter le compteur de requêtes réalisées

Il y a déjà un petit affichage en bas à gauche de la page Web pour indiquer le nombre de requêtes qui ont été réalisées par
l'utilisateur depuis le début de la navigation sur l'application Web. Pour le moment, ce compteur ne fonctionne pas.

[💡](/cours/rencontre3.2#-services) Grâce au cycle de vie et à l'unique instance du `MagicService`, rendez fonctionnel
l'affichage qui compte le nombre de requêtes réalisées par l'utilisateur. 

En résumé, il faudra créer une variable dans le service pour noter le compte, l'afficher dans le bon template HTML et
modifier légèrement le code présent dans le service.

Bien entendu, gardez à l'esprit que lorsqu'on réinitialise la page Web, il n'y a rien à faire : le compte sera perdu et
retournera à 0.

## 🧠 Étape 4 - Donc les services ne servent à rien ?

👑 Bon travail ! N'oubliez pas de toujours intégrer les requêtes à des services à partir de maintenant. De plus, si vous remarquez
que certaines variables ou certaines fonctions se répètent à travers plusieurs composants, réunissez-les dans un ou plusieurs
services.