# Cours 22 - Git et librairies JS

## 🎨 Librairies JS

Les [notes de cours](../../static/files/4204W6_semaine12.pptx) sont disponibles sous format PowerPoint 😳👉👈

Vous n'aurez pas besoin de **Masonry** durant le **TP4**, seulement de **Glide JS**.

## 🔱🦑 Git à deux

La plupart des notions qui suivent seront à la fois abordées avec **GitKraken** et **Fork**.

Fonctionnement général :

* Nous n'allons jamais **merge** dans `main`. (Seulement une fois, à la fin du TP)
* À chaque nouvelle fonctionnalité à implémenter, on crée une **branche** à partir de la branche `dev`.
* Une fois une fonctionnalité terminée, on **merge** `dev` dans la branche de la fonctionnalité pour d'abord résoudre les conflits.
* Une fois les conflits résolus, on pourra faire l'inverse : **merge** la branche de la fonctionnalité dans `dev`.
* Puis on recommence pour la prochaine fonctionnalité.
* Chaque partenaire travaille toujours **seul(e) sur sa propre branche**.

<center>![Résumé du processus](../../static/img/cours22/git.png)</center>

:::tip

* N'oubliez pas de faire des **push** fréquents si vous souhaitez que votre partenaire puisse voir vos commits, branches et merges.
N'oubliez pas de faire un **pull** si vous souhaitez voir le progrès de votre partenaire. (Surtout avant de merge dans `dev`)

:::

### 🥚 Setup initial du repo

#### 🦑 GitKraken

1. Créez le repo Git et y insérer les fichiers de départ des projets.

<center>![Initialiser un repo](../../static/img/cours22/init.png)</center>

2. **Commit** les fichiers de départ sur `main`, puis créer une branche `dev`, puis **push** et ajouter le partenaire en collaborateur.

<center>![Fichiers de départ](../../static/img/cours22/fichierDepart.png)</center>

<center>![Commit dans main](../../static/img/cours22/commitMain.png)</center>

<center>![Création de branche](../../static/img/cours22/newBranch.png)</center>

<center>![Création de dev](../../static/img/cours22/commitDev.png)  
Initialement, `dev` et `main` seront superposés tant que ces deux branches n'auront aucun code différent.</center>
<br/>
<center>![Premier push](../../static/img/cours22/push.png)</center>

3. Le partenaire devra ensuite **cloner** le repo. (Assurez-vous de voir la branche `dev` tous les deux)

<center>![Branche dev](../../static/img/cours22/devVisible.png)</center>

4. Créer une sous-branche dans `dev` par fonctionnalité :

<center>![Sous-branche dans dev](../../static/img/cours22/branchInDev.png)</center>

<center>![Sous-branche dans dev](../../static/img/cours22/branche1.png)  
C'est seulement une fois que vous aurez fait un commit dans vos sous-branches qu'elles ne seront plus superposées verticalement !</center>

<center>![Sous-branche dans dev](../../static/img/cours22/branche2.png)</center>

:::danger

Attention de bien sélectionner (double-clic) la bonne branche avant de commencer à coder !

:::

#### 🔱 Fork

1. Créer le repo sur Github

<center>![Nouveau repository](../../static/img/cours22/newRepo.png)![Nouveau repository privé](../../static/img/cours22/private.png)</center>

<center>![URL pour cloner](../../static/img/cours22/url.png)</center>

2. Cloner le repo avec **Fork** et y glisser les fichiers de départ.

<center>![Cloner](../../static/img/cours22/cloner.png)</center>

<center>![Cloner](../../static/img/cours22/cloner2.png)</center>

3. Commit les fichiers de départ sur `main`, puis créer une branche `dev` puis push `dev`.

<center>![Commit dans main](../../static/img/cours22/commitMain2.png)</center>

<center>![Bouton pour commit](../../static/img/cours22/commitButton.png)</center>

<center>![Bouton nouvelle branche](../../static/img/cours22/newBranch2.png)</center>

<center>![Menu nouvelle branche](../../static/img/cours22/newBranchMeny.png)  
N'oubliez pas de push `dev` !</center>

<center>![Push la branche dev](../../static/img/cours22/pushDev.png)</center>

4. Ajouter le partenaire en collaborateur et cloner de son côté

5. Faire chacun votre sous-branche dans `dev`

<center>![Sous-branches dans dev](../../static/img/cours22/subBranchDev.png)</center>

Tant que vous n'aurez pas chacun fait un commit dans votre sous-branche, elles seront toutes embarqués les unes sur les autres comme ceci :
<center>![Sous-branches dans dev](../../static/img/cours22/subBranchDev2.png)</center>

<center>![Sous-branches dans dev](../../static/img/cours22/subBranchDev3.png)</center>

:::danger

Attention de bien sélectionner (double-clic) la bonne branche avant de commencer à coder !

:::

### 🌌 Merge de branches

#### 🦑 GitKraken

Il est crucial de **d'abord merge `dev` dans votre sous-branche**, de résoudre les conflits sur votre sous-branche, puis, une fois que vous avez tout testé, de finalement **merge votre sous-branche dans `dev`**. De cette manière, `dev` est censée être toujours fonctionnelle.

S'il n'y a aucun autre merge dans `dev` depuis que vous avez créé votre sous-branche, il n'y aura pas de conflits et vous pourrez directement **merge dans `dev`**.

1. Sélectionner votre branche et merge `dev` dedans :

<center>![Merge de dev dans une sous-branche](../../static/img/cours22/mergeKra1.png)</center>

<center>![Merge de dev dans une sous-branche](../../static/img/cours22/mergeKra2.png)</center>

<center>![Merge de dev dans une sous-branche](../../static/img/cours22/mergeKra3.png)</center>

<center>![Merge de dev dans une sous-branche](../../static/img/cours22/mergeKra4.png)</center>

2. Résoudre les conflits (s'il y en a)

Il faudra « fusionner » du code qui a été rédigé par vous avec du code rédigé par votre partenaire. La présence du partenaire est fortement souhaitable pour comprendre l'utilité, la compatibilité, l'incompatibilité et la redondance de certains morceaux de code !

Dans **GitKraken**, il y a un outil pour comparer les fichiers et faire des changements manuels au besoin.

<center>![Merge de dev dans une sous-branche](../../static/img/cours22/mergeKra5.png)</center>

<center>![Merge de dev dans une sous-branche](../../static/img/cours22/mergeKra6.png)  
(Votre objetif est de vous s'assurer que l'**output** correspond au résultat souhaité !)</center>
<br/>
:::warning

S'il y a plusieurs fichiers en conflit, réglez-les dans l'ordre suivant :

1. Modèles
2. Services
3. Contrôleurs / composants

Inutile de gérer les conflits pour les migrations ! Au pire, supprimez les migrations et recréez-en sur votre prochaine branche.

:::

3. ⛔ TESTEZ votre code.

S'il y a des bugs, faites un commit supplémentaire sur votre sous-branche pour les régler AVANT de **merge dans `dev`**.

4. Merge dans `dev`

<center>![Merge d'une sous-branche dans dev](../../static/img/cours22/mergeDev.png)</center>

:::tip

Dans le cas où vous terminé plusieurs fonctionnalités d'affilé sans que votre partenaire n'ait le temps de faire ses merges, vos merge seront sans conflits :

<center>![Merge d'une sous-branche dans dev](../../static/img/cours22/noConflicts.png)</center>

:::

#### 🔱 Fork

Il est crucial de **d'abord merge `dev` dans votre sous-branche**, de résoudre les conflits sur votre sous-branche, puis, une fois que vous avez tout testé, de finalement **merge votre sous-branche dans `dev`**. De cette manière, `dev` est censée être toujours fonctionnelle.

S'il n'y a aucun autre merge dans `dev` depuis que vous avez créé votre sous-branche, il n'y aura pas de conflits et vous pourrez directement **merge dans `dev`**.

1. Sélectionner votre branche et merge `dev` dedans :

<center>![Avant le merge](../../static/img/cours22/preMerge.png)</center>

<center>
    ![Sélectionner la bonne branche](../../static/img/cours22/selectBranch.png)
    ![Merge dev dans Etape-2](../../static/img/cours22/mergeIntoDev.png)
</center>

<center>![Avertissement de conflits](../../static/img/cours22/conflicts.png)</center>

2. Résoudre les conflits (s'il y en a)

🚪 Notez qu'il faudra faire la gestion de conflits dans `Visual Studio` et dans `VS Code`. L'exemple ci-dessous est avec `VS Code`.

<center>![VS Code avec conflits](../../static/img/cours22/vsCode.png)</center>
<center>![Bouton vers éditeur de fusion](../../static/img/cours22/fusion.png)</center>

L'objectif est de s'assurer que le **code en bas** correspond au résultat souhaité. Vous pouvez l'éditer manuellement au besoin en vous servant des deux versions en conflit qui sont en haut.

<center>![VS Code avec conflits](../../static/img/cours22/fusion2.png)</center>

Il va falloir faire un aller-retour entre VS Code et Fork **pour chaque fichier**.

:::warning

S'il y a plusieurs fichiers en conflit, réglez-les dans l'ordre suivant :

1. Modèles
2. Services
3. Contrôleurs / composants

Inutile de gérer les conflits pour les migrations ! Au pire, supprimez les migrations et recréez-en sur votre prochaine branche.

:::

3. Retourner dans **Fork** pour conclure le merge

<center>![Merge terminé dans Fork](../../static/img/cours22/endMerge.png)</center>

4. ⛔ TESTEZ votre code.

S'il y a des bugs, faites un commit supplémentaire sur votre sous-branche pour les régler AVANT de **merge dans `dev`**.

5. Merge dans `dev`

<center>![Merge dans dev](../../static/img/cours22/mergeIntoDev2.png)</center>

<center>![Merge dans dev terminé](../../static/img/cours22/mergeFinished.png)</center>

### 🤕 Erreurs fréquentes

#### 🌿 J'ai travaillé sur la mauvaise branche

Par exemple, avoir fait un commit sur `dev` plutôt que dans une sous-branche : 

<center>![Commit sur dev](../../static/img/cours22/mauvaiseBranche1.png)</center>

Commencez par **créer une nouvelle branche** à partir de ce commit de trop :

<center>![Nouvelle branche](../../static/img/cours22/mauvaiseBranche2.png)</center>

Sélectionner `dev` :

<center>![Branche dev sélectionnée](../../static/img/cours22/mauvaiseBranche3.png)</center>

Pour ensuite faire un clic-droit sur le **commit précédent** et réinitialiser la branche `dev` à ce commit :

<center>![Branche dev réinitialisée](../../static/img/cours22/mauvaiseBranche4.png)</center>

Pour le moment, cela va « dupliquer » la branche `dev` :

<center>![Branche dev dupliquée](../../static/img/cours22/mauvaiseBranche5.png)</center>

Il suffira de faire un **push** (« force push ») pour que seule la nouvelle branche `dev` soit conservée :

<center>![Force push](../../static/img/cours22/mauvaiseBranche6.png)</center>

<center>![Problème réglé](../../static/img/cours22/mauvaiseBranche7.png)</center>

#### ⏳ Revenir en arrière (annuler un commit)

Disons qu'on souhaite annuler le tout dernier commit qu'on a fait :

<center>![Mauvais commit](../../static/img/cours22/annulerCommit1.png)</center>

Faites un clic-droit sur le commit précédent et **réinitialisez votre branche** à celui-ci :

<center>![Réinitialiser le commit](../../static/img/cours22/annulerCommit2.png)</center>

Après avoir fait un **push** (force push), vous devriez avoir ce résultat :

<center>![Commit réinitialisé](../../static/img/cours22/annulerCommit3.png)</center>

#### 💥 Merge simultané accidentel

Disons que votre partenaire et vous avez fait un **merge** dans `dev` en même temps... Vous aurez des problèmes lors de votre prochain **pull** puisque la branche `dev` existera en deux versions !

Avant les merge :

<center>![Avant le double merge](../../static/img/cours22/doubleMerge1.png)</center>

Merge réalisé par la personne 1 :

<center>![Premier merge](../../static/img/cours22/doubleMerge2.png)</center>

Merge réalisé par la personne 2 :

<center>![Deuxième merge](../../static/img/cours22/doubleMerge3.png)</center>

Lorsque les deux personnes feront un **push**, la première personne qui fera un **pull** aura ce problème : il y a deux versions de `dev` !

<center>![Branche dev dupliquée](../../static/img/cours22/doubleMerge4.png)</center>

La solution sera de **merge** `dev` dans `dev` (oui oui) Alternativement, on peut aussi merge la branche `dev` générée par notre partenaire dans notre sous-branche à nous pour ne pas avoir à **gérer les conflits** directement sur `dev`. 

<center>![Merge dev dans dev](../../static/img/cours22/doubleMerge5.png)</center>

<center>![Merge dev dans dev](../../static/img/cours22/doubleMerge6.png)</center>

Résultat : (N'oubliez pas de **push** `dev` ensuite !)

<center>![Merge dev dans dev](../../static/img/cours22/doubleMerge7.png)</center>
