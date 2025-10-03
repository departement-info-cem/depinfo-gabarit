---
title: 🔄 A - Intégration switch et while
---

# 🧪 Labo 8.1 📝 Les films de Denis
## 🎯 **Objectif :**
:::note Objectif    
 Pratiquer le Switch case, Do... while, les fonctions, les tableaux 2D, le parcours (par rangée et par colonne) et l'alignement de données  
 
🛠️ **Instructions :**   
* Déclarez le tableau suivant :
```csharp
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
```
:::
## Menu d'accueil
:::note Menu
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
```bash
**********************************************************
*            Les films de Denis Villeneuve               *
**********************************************************
1. Lister tous les films (résumé)
2. Lister tous les films (détails)
3. Fiche technique d'un film
4. Quitter

Votre choix : 
```
:::
## Résumé des films
:::note Choix 1
```bash
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
```
:::
## Détails des films
:::note Choix 2
```bash
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
```
:::
## Fiche d'un film
:::note Choix 3
```bash
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
```
:::
---
