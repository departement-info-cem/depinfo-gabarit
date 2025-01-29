# Laboratoire 3

Commencez par télécharger le ⛔ [projet de départ](../../static/files/labo3.zip) pour ce laboratoire. 🎁

Clé d'API Last FM fournie : `9a8a3facebbccaf363bb9fd68fa37abf`

Requêtes à utiliser pendant le laboratoire :

* Obtenir les artistes similaires : [https://www.last.fm/api/show/artist.getSimilar](https://www.last.fm/api/show/artist.getSimilar)
* Obtenir les meilleures chansons pour un genre : [https://www.last.fm/api/show/tag.getTopTracks](https://www.last.fm/api/show/tag.getTopTracks)

## 🧠 Étape 0 - Version 200+ QI

Si vous vous sentez très confiant(e) et que vous n'avez pas besoin d'instructions pas-à-pas, voici
un résumé de la tâche à réaliser.

Avant d'envoyer la moindre requête, la page aura l'air de ceci :

<center>![État initial de la page Web](../../static/img/labo3/initialState.png)</center>

Si on envoie des requêtes valides, la page aura l'air de ceci :

<center>![Page Web lors de requêtes réussies](../../static/img/labo3/goodSearch.png)</center>

Si on envoie des requêtes invalides (ou avec 0 résultats), la page aura l'air de ceci :

<center>![Page Web lors de requêtes échouées](../../static/img/labo3/badSearch.png)</center>

## 👶 Étape 1 - Je veux du pas-à-pas s'il vous plait monsieur

Même les meilleurs ont besoin d'un coup de pouce ! 🤫

### **1 -** Télécharger et lancer le projet

Comme d'habitude, après avoir téléchargé le projet, nous pourrons lancer l'application suite à un judicieux mélange de
`npm install` et de `ng serve`. Il n'y a pas d'autres dépendances à installer.

### **2 -** Prérequis pour les requêtes

[💡](/cours/rencontre2.1#-prérequis-pour-faire-des-requêtes) Réaliser les deux prérequis nécessaires pour pouvoir
lancer des requêtes HTTP dans le composant `app` plus tard.

## 🤨 Étape 2 - [(ngModel)] ? Ça ne me dit rien

### **3 -** Compléter les formulaires

[💡](/cours/rencontre1.2#-two-way-binding) Avant de lancer les requêtes, pouvez-vous associez les champs (les `<input`>) avec les bonnes variables ? Ces variables nous serviront pour exploiter l'input de l'utilisateur lorsque nous lancerons une requête.

[💡](/cours/rencontre1.2#-événements) De plus, assurez-vous que cliquer sur les boutons appelle bel et bien la fonction approprié dans le code. (Bien que les fonctions en question soient vides pour le moment)

## 👻 Étape 3 - Esprit es-tu là ?

Nous allons maintenant envoyer des requêtes aux serveurs Web de Last FM pour obtenir des données à afficher dans la page.

Clé d'API Last FM fournie : `9a8a3facebbccaf363bb9fd68fa37abf`

Requêtes à utiliser pendant le laboratoire :

* Obtenir les artistes similaires : [https://www.last.fm/api/show/artist.getSimilar](https://www.last.fm/api/show/artist.getSimilar)
* Obtenir les meilleures chansons pour un genre : [https://www.last.fm/api/show/tag.getTopTracks](https://www.last.fm/api/show/tag.getTopTracks)

### **4 -** Artistes similaires

[💡](/cours/rencontre2.1#-envoyer-une-requête) Lancez la requête pour obtenir les artistes similaires à celui fourni par l'utilisateur.

[💡](/cours/rencontre2.1#-personnaliser-la-requête-choisir-linput) N'oubliez pas de bien utiliser l'input de l'utilisateur lors de la recherche.

[💡](/cours/rencontre2.1#-ranger-la-clé-dapi-dans-une-constante) Glissez la clé d'API dans une constante plutôt que de la _hardcoder_ dans la requête.

N'hésitez pas à commencer par visualiser **l'objet JSON** obtenu grâce à `console.log(x)`.

[💡](/cours/rencontre2.1#-extraire-un-tableau-de-données) Une fois l'objet JSON bien en vue, faites le nécessaire, avec une boucle, pour
extraire le nom de tous les artistes similaires. Il suffira de les ajouter dans le tableau de `string` nommé `similarArtists`. Comme ce
sont de simples `string`, la ligne de code dans la boucle ressemblera à `this.similarArtists.push(x...)`.

Le résultat d'une requête valide devrait ressembler à ceci :

<center>![Recherche d'artistes valide](../../static/img/labo3/artistGoodSearch.png)</center>

[💡](/cours/rencontre2.1#-gérer-les-erreurs) Si on utilise un artiste qui n'existe pas dans la requête, l'API Web de Last FM nous retournera
une erreur. Faites le nécessaire pour obtenir un affichage similaire si une erreur est obtenue suite à la recherche :

<center>![Recherche d'artistes invalide](../../static/img/labo3/artistBadSearch.png)</center>

Finalement, assurez-vous de vider le tableau `similarArtists` à chaque fois que vous lancez une nouvelle recherche ! Sinon les anciens
résultats vont s'accumuler avec les nouveaux. En TypeScript / JavaScript, on peut vider un tableau en faisant `monTableau = []`.

### **5 -** Meilleures chansons d'un genre

C'est à peu près les mêmes étapes à réaliser, mais avec deux défis supplémentaires.

[💡](/cours/rencontre2.1#-extraire-un-tableau-de-données) L'extraction des données dans l'objet JSON sera un peu plus sophistiquée.
Vous devrez d'ailleurs remplir la liste `topSongs` en créant des `new Song(...)` (la classe du model existe déjà) dans la boucle for
qui parcourera l'objet JSON.

Le résultat d'une requête valide devrait ressembler à ceci :

<center>![Requête de chansons valide](../../static/img/labo3/genreGoodSearch.png)</center>

Pour la gestion des erreurs, cette fois-ci, l'API Web de Last FM ne génèrera pas d'erreurs si on utilise un genre invalide. L'objet
JSON va tout simplement contenir 0 chansons à la place. Ainsi, pour afficher un message d'erreur, il faudra plutôt vérifier combien
de résultats ont été obtenus.

Le résultat d'une requête invalide devrait ressembler à ceci :

<center>![Requête de chansons invalide](../../static/img/labo3/genreBadSearch.png)</center>

## 🚌 Étape 4 - Commencer le TP1 ? Oublie ça mon autobus passe dans 5 minutes

Vous êtes désormais bien préparé pour réaliser le TP1. Il est à peu près de la même longueur que ce laboratoire.
N'hésitez pas à le commencer dès maintenant, mais sachez que le prochain cours sera entièrement consacré à réaliser le TP1.
(Pas de théorie, pas de labo)