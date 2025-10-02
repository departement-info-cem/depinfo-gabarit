---
title: B - Labo 7.2B - Switch... case, While et Do... while – Avancé  
---

# 🧪 Labo 7.2B - Switch... case, While et Do... while – Avancé

## 🔢Switch... case 
### 🟡 Exercice S2.1 – Calculer l’aire 2.0
🎯 **Objectif :** Pratiquer Switch ... case et les fonctions  
🛠️ **Instructions :**  
* Reprenez votre exercice « S1.3 Calculer l’aire 1.0 »  
* Renommez comme « S2.1 Calculer l’aire 2.0 »  
* Chaque case appellera une fonction qui demandera les informations nécessaires pour calculer l’aire de la forme choisie 
* Affichez le résultat obtenu  

✅ **Entrée / sortie attendue :**     
~~~
=== Bienvenue dans votre assistant de calcul d’aire v2.0! ===  
Pour quelle forme désirez-vous calculer l'aire :  
1.	Carré  
2.	Rectangle  
3.	Cercle  
4.	Triangle  

Votre choix : 2  

--- Calculer l'aire d'un rectangle ---  
Quelle est la longueur : 2  
Quelle est la largeur : 3  
L'aire d'un rectangle 2 X 3 est de : 6  

~~~
---

### 🟡 Exercice S2.2 – Classes de permis 2.0  
🎯 **Objectif :** Pratiquer Switch ... case, les tableaux 2D et les icônes    
🛠️ **Instructions :**   
* Reprenez l’exercice « S1.4 – Classes de permis 1.0 »  
* Renommez comme « S2.2 – Classes de permis 2.0 »
* Affichez le tableau au complet  
* À l'aide de Switch... case, demandez à l'utilisateur à quelle classe de permis il veut ajouter une icône
* Dans chaque case, appelez une fonction qui : 
  * Ajoutera une icône (représentant le véhicule en question) à côté de la classe de permis
  * Afficher ensuite:
    * Le numéro de classe, suivi de l'icône, suivi du titre du permis

➡️ Pour les icônes, voir section [Extra](https://info.cegepmontpetit.ca/1P6/extra/style)
	
✅ **Entrée / sortie attendue :**    
~~~
Classes de permis de conduire v2.0
*************************************
C  Véhicule
1  Tous
2  Autobus 24p+
3  Camion
4  Véhicules d'urgence
5  Automobiles
6  Motocyclettes
7  Apprenti
8  Tracteur


 Votre choix : 4
4 🚑 Véhicules d'urgence
~~~
---

### 🟡 Exercice S2.3 – Cinéma 2.0  
🎯 **Objectif :** Pratiquer le switch... case, les tableaux 1D et les couleurs  
🛠️ **Instructions :**  
* Reprenez l’exercice « S1.5 – Cinéma 1.0 »   
* Renommez comme « S2.3 –Cinéma 2.0 »  
* Créez un tableau. Ajoutez comme valeurs les titres des films.  
* Chaque film devra s’afficher dans la couleur qui correspond à l’index (à l’exception des titres de colonnes)  
    
➡️ Regardez `Console.ForegroundColor = (ConsoleColor)*index*` pour vous aider  
Ou encore la section [Extra](https://info.cegepmontpetit.ca/1P6/extra/style)  

✅ **Sortie attendue :**     
~~~
-----------------Les films de Harry Potter--------------------------

 Lequel des 8 films voulez-vous consulter : 5


 Le 5e film est :
l'Ordre du Phénix (2003)

~~~
---

### 🟡 Exercice W2.1 – Le sortilège de la journée 
🎯 **Objectif :** Pratiquer While, les tableaux 1D et la génération de nombres aléatoires  
🛠️ **Instructions :**  
* Déclarez le tableau suivant :   
`string [] sortileges = {"Accio", "Wingardium Leviosa", "Stupéfix", "Protego", "Endoloris"}`  
* Générez un nombre aléatoire pour choisir un des sortilèges présents dans le tableau    
* Demandez à l’utilisateur de deviner quel est sortilège de la journée   
* Répétez la question tant que le sortilège n'a pas été deviné 

✅ **Entrée / sortie attendue :**     
~~~
Devine le sortilège de la journée : Accio


 Mauvaise réponse. Essaie encore ! Protego


 Mauvaise réponse. Essaie encore ! Endoloris
Bonne réponse !

~~~
---

### 🟡 Exercice W2.2 – Devine le film de Ghibli  
🎯 **Objectif :** Pratiquer While, les tableaux 1D, la propriété length et les nombres aléatoires    
🛠️ **Instructions :**  
* Déclarez le tableau suivant :  
    `string [] films={"Kiki", "Porco Rosso", "Totoro", "Ponyo", "Mononoke"}`  
* Gênerez un chiffre aléatoire entre 1 et le nombre de films disponibles (en utilisant la propriété length)  
* Demandez à l’utilisateur de deviner quel est le film qui a été choisi aléatoirement  
* Répétez la question tant qu’il n’a pas deviné.

✅ **Entrée / sortie attendue :**     
~~~
Devinez quel film de Ghibli a été sélectionné :

Votre réponse : kiki
Ce n'est pas le bon film. Essayez encore !

Votre réponse : ponyo
Ce n'est pas le bon film. Essayez encore !

Votre réponse : porco rosso
Bravo ! Vous avez deviné

~~~
---

### 🟡 Exercice DW2.1 – Les sortilèges colorés 
🎯 **Objectif :** Pratiquer Do while, les tableaux 1D et les couleurs  
🛠️ **Instructions :**  
* Reprenez "W2.1 – Le sortilège de la journée"  
* Copiez et renommez comme "DW2.2 – Les sortilèges colorés"    
* Demandez à l’utilisateur de saisir un sortilège.   
* Tant que le sortilège saisi se trouve dans le tableau :  
 1. Changez la couleur de l’arrière-plan à l’aide de l'index + 1;  
 1. Réaffichez le sortilège choisi (en couleur)  
 1. Rétablissez les couleurs de la console aux valeurs par défaut  
 1. Redemandez de saisir un nouveau sortilège  
 1. Toute autre valeur qui ne se trouve pas dans la tableau, permettra de quitter l'application.  
 1. Envoyez un message avant que quitter.  
  
➡️ Regarder `Console.BackgroundColor = (ConsoleColor)index` pour vous aider

✅ **Entrée / sortie attendue :**     
~~~
Est-ce que ce sortilège est disponible : accio
Et oui!!!
Accio

Est-ce que ce sortilège est disponible : stupéfix
Et oui!!!
Stupéfix

Est-ce que ce sortilège est disponible : protego
Et oui!!!
Protego

Est-ce que ce sortilège est disponible : abracadabra
Ce sortilège n'est pas dans la liste. Au revoir !
~~~

---

### 🔴 Exercice S3.1 – Les films de Denis 
🎯 **Objectif :** Pratiquer le Switch case, Do... while, les fonctions, les tableaux 2D, le parcours (par rangée et par colonne) et l'alignement de données  
🛠️ **Instructions :**   
* Déclarez le tableau suivant :
~~~
string[,] filmsDenis = {
    { "Num", "Année", "Titre", "Directeur", "Scénariste", "Producteur" },
    { "1", "1998", "Un 32 août sur terre", "Oui", "Oui", "Non" },
    { "2", "2000", "Maelström", "Oui", "Oui", "Non" },
    { "3", "2009", "Polytechnique", "Oui", "Oui", "Non" },
    { "4", "2010", "Incendies", "Oui", "Oui", "Non" },
    { "5", "2013", "Prisoners", "Oui", "Non", "Non" },
    { "6", "2013", "Enemy", "Oui", "Non", "Non" },
    { "7", "2015", "Sicario", "Oui", "Non", "Non" },
    { "8", "2016", "Premier Contact (Arrival)", "Oui", "Non", "Non" },
    { "9", "2017", "Blade Runner 2049", "Oui", "Non", "Non" },
    { "10", "2021", "Dune", "Oui", "Oui", "Oui" },
    { "11", "2024", "Dune, deuxième partie", "Oui", "Oui", "Oui" }};
~~~
* Affichez le menu suivant à l’aide de `Do …  While` et réaffichez tant que l’utilisateur ne demande pas de quitter :
 1) Lister tous les films (résumé)
 2) Lister tous les films (détails)    
 3) Fiche technique d'un film  
 4) Quitter
* Capturez le choix de l'utilisateur à l'aide de `Switch... case`
* Chaque case appelle une fonction afin de faire la tâche demandée :
 1) Lister tous les films (résumé)
      * Lister **seulement** les 3 premières colonnes pour tous les films, à l’aide des boucles imbriquées (parcours par rangée)  
      * Alignez les informations par colonne (voir Note)  
 2) Lister tous les films (détails)
      * Lister toutes les informations pour tous les films, à l’aide des boucles imbriquées (parcours par rangée)  
      * Alignez les informations par colonne (voir Note)   
 3) Fiche technique d'un film
      * Demandez quel film on veut consulter, affichez la fiche détaillée du film (parcours par colonne, voir exemple plus bas)
 4) Quitter

* Nettoyez l'écran avant d'afficher les informations demandées. Demandez à l'utilisateur de peser sur une touche afin de retourner au menu principal.
➡️ NOTE : Pour aligner les informations, regardez : `String.Format(alignement, valeur)`

    
✅ **Entrée / sortie attendue :**     
~~~
**********************************************************
*            Les films de Denis Villeneuve               *
**********************************************************
1. Lister tous les films (résumé)
2. Lister tous les films (détails)
3. Fiche technique d'un film
4. Quitter

 Votre choix : 

~~~
**Choix 1**  
~~~
1.Lister tous les films (résumé)

**********************************************************
Num    Année  Titre
1      1998   Un 32 août sur terre
2      2000   Maelström
3      2009   Polytechnique
4      2010   Incendies
5      2013   Prisoners
6      2013   Enemy
7      2015   Sicario
8      2016   Premier Contact (Arrival)
9      2017   Blade Runner 2049
10     2021   Dune
11     2024   Dune, deuxième partie

...Peser sur une touche pour revenir au menu principal...
~~~

**Choix 2**  
~~~
2. Lister tous les films (détails)

**********************************************************
Num    Année  Titre                         Directeur      Scénariste     Producteur
1      1998   Un 32 août sur terre          Oui            Oui            Non
2      2000   Maelström                     Oui            Oui            Non
3      2009   Polytechnique                 Oui            Oui            Non
4      2010   Incendies                     Oui            Oui            Non
5      2013   Prisoners                     Oui            Non            Non
6      2013   Enemy                         Oui            Non            Non
7      2015   Sicario                       Oui            Non            Non
8      2016   Premier Contact (Arrival)     Oui            Non            Non
9      2017   Blade Runner 2049             Oui            Non            Non
10     2021   Dune                          Oui            Oui            Oui
11     2024   Dune, deuxième partie         Oui            Oui            Oui

 ...Peser sur une touche pour revenir au menu principal...

~~~
**Choix 3**  
~~~
3. Fiche technique d'un film

**********************************************************
Voici les informations pour le film : Maelström
Num : 2
Année : 2000
Titre : Maelström
Directeur : Oui
Scénariste : Oui
Producteur : Non

 ...Peser sur une touche pour revenir au menu principal...
~~~

---