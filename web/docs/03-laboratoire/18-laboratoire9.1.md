---
title: Écriture dans un fichier texte
---

# 🧪 Labo 9.1 – Écriture dans un fichier texte

📎 **Référence** : [Fichiers texte — StreamWriter](https://info.cegepmontpetit.ca/notions-csharp/documentation/fichier-texte#la-classe-streamwriter--%C3%A9criture-dans-un-fichier-texte)

---

## 🟢 Exercice 1 : Ciao Bye ✈️

**Objectif :** Écrire dans un fichier texte avec `WriteLine()`.

**Instructions :**
1. Créez un nouveau fichier texte intitulé `CiaoBye.txt`:
   - Ajoutez la ligne `using System.IO;` au début de votre projet.
   - Utilisez la classe `StreamWriter` pour créer et ouvrir le fichier texte en mode **écriture**.
2. Écrivez dans le fichier les réponses aux questions suivantes (une réponse par ligne) :
   - Quelle est votre destination voyage de rêve ?
   - Par quel moyen de transport vous y rendriez-vous ?
   - Pour combien de temps partiriez-vous ?
   - Partiriez-vous seul ou accompagné ? Avec qui ?
   - Quel accessoire/objet fétiche apporteriez-vous pendant votre voyage ?
3. Ouvrez le fichier manuellement et validez que vos réponses s’y trouvent.

✅ **Exemple CiaoBye.txt** :
```
Destination de rêve : Chili
Moyen de transport : Voilier
Durée du voyage : 3 mois
Compagnon de voyage : Mr. Léo
Objet fétiche : ma caméra !
```

---

## 🟢 Exercice 2 : Retranscrire un tableau 1D

**Objectif :** Écrire dans un fichier texte le contenu d’un tableau 1D à l’aide d’une boucle `for`.

**Instructions :**
1. Créez un tableau 1D contenant les titres de vos 5 séries/films préférés. 
2. Créez un fichier texte nommé `SeriesFavories.txt`.
3. Écrivez chaque élément du tableau dans le fichier texte, un élément par ligne.
4. Fermez le fichier.
5. Ouvrez manuellement le fichier pour vérifier le résultat.

✅ **Exemple SeriesFavories.txt** :
```
Game of Thrones
Empathie
Severance
True Detective
Avant le crash
```

---

## 🟡 Exercice 3 : MiniMoi 👶

**Objectif :** Écrire les informations entrées par l’utilisateur dans un fichier texte.

**Instructions :**
1. Demandez à l’utilisateur combien d’enfants il souhaite avoir.
2. Demandez-lui d’entrer un nom de fichier en spécifiant l'extension (.txt).
3. Créez un nouveau fichier texte avec le nom spécifié par l’utilisateur.
4. Pour chaque enfant, demandez un nom et écrivez-le dans le fichier.
5. Une fois les opérations complétées, affichez un message de validation dans la console.
6. Ouvrez manuellement le fichier pour vérifier le résultat.

✅ **Exemple Console** :
```
Combien d'enfants souhaitez-vous avoir ? 4
Entrez un nom de fichier (avec l'extension .txt) : MiniMoi.txt
Entrez le nom de l'enfant 1 : Junior
Entrez le nom de l'enfant 2 : X Æ A-11
Entrez le nom de l'enfant 3 : Hercule
Entrez le nom de l'enfant 4 : Jean Neige
Les noms ont été écrits avec succès.
```

✅ **Exemple MiniMoi.txt** :
```
Junior
X Æ A-11
Hercule
Jean Neige
```

---

## 🟡 Exercice 4 : L’ajout surprise 🎁

**Objectif :** Ajouter du contenu dans un fichier texte existant **sans écraser le contenu précédent**.

**Instructions :**
1. Dans votre programme, ouvrez le fichier créé à l'exercice précédent en mode ajout (*append*).
3. Ajoutez deux nouveaux noms d’enfants au fichier à l'aide d'une boucle `for`.
4. Validez manuellement le résultat.

✅ **Exemple Console** :
```
Entrez le nom de l'enfant 5 : Maximus Decimus Meridius
Entrez le nom de l'enfant 6 : Séraphin
Les noms ont été ajoutés avec succès.
```

✅ **Exemple MiniMoi.txt** :
```
Junior
X Æ A-11
Hercule
Jean Neige
Maximus Decimus Meridius
Séraphin
```

---

## 🔴 Exercice 5 : Les dés sont jetés 🎲

**Objectif :** Générer des nombres aléatoires et les écrire dans un fichier texte.

**Instructions :**
1. Demandez à l’utilisateur combien de lancers de dé **à 10 faces** il souhaite effectuer.
2. Pour chaque lancer, générez un nombre aléatoire entre 1 et 10.
3. Écrivez le résultat de chaque lancer dans un fichier `JeuDeDé.txt`.
4. Calculez la moyenne des valeurs obtenues et écrivez-la dans le fichier **(avec 2 décimales :smirk:)**.

✅ **Exemple Console** :
```
Combien de lancers souhaitez-vous effectuer ? 4
Les lancers ont été effectués avec succès, il est maintenant temps d'aller voir le fichier texte !
```

✅ **Exemple JeuDeDé.txt** :
```
Valeur du lancer 1 : 9
Valeur du lancer 2 : 3
Valeur du lancer 3 : 2
Valeur du lancer 4 : 7
Moyenne des lancers : 5,25
```

---

## 🔴 Exercice 6 : Journal des ventes

**Objectif :** Écrire plusieurs entrées structurées dans un fichier texte.

**Votre mission :**
Créer un petit journal des ventes quotidiennes pour une boutique de jeux vidéo 🎮.
Chaque fois qu’une vente est enregistrée, le programme ajoute une ligne au fichier texte sans écraser le contenu existant.

**Péalable**
Créez manuellement un fichier texte intitulé *journal_ventes.txt* et entrez les données suivantes:

```
Jeu “Spider-Man 2” (PS5) : 4 × 89,99 $ = 359,96 $
Carte cadeau PlayStation Store (50 $) : 5 × 50,00 $ = 250,00 $
Souris gamer Logitech G502 : 2 × 79,99 $ = 159,98 $
---------------------------------------------
```

**Instructions**
1. Dans votre programme, demandez à l’utilisateur le nom du fichier à utiliser (ex. : *journal_ventes.txt*).
2. Ouvrez ce fichier en prenant soin ne pas effacer les données existantes.
3. Demandez à l’utilisateur combien de ventes il souhaite enregistrer pour la journée.
4. Pour chaque vente:
         - Demandez le nom du produit.
         - Demandez le prix unitaire de ce produit.
         - Demandez la quantité vendue.
         - Calculez le total de la vente (prix × quantité).
         - Écrivez une ligne dans le fichier sous la forme:

               `nom_du_produit : quantité_vendue × prix_unitaire = total_vente`
5. Une fois toutes les ventes enregistrées, ajoutez une ligne de séparation(-------------------------------------).
6. Demandez à l'utilisateur s'il veut enregistrer de nouvelles ventes. **Si oui, le processus recommence ! 🎉**


✅ **Exemple Console** :
```
Nom du fichier (ex: journal_ventes.txt) : journal_ventes.txt
Combien de ventes souhaitez-vous enregistrer ? 2

--- Vente 1 ---
Nom du produit : Manette PS5
Prix unitaire : 79,99
Quantité : 3

--- Vente 2 ---
Nom du produit : Casque Bluetooth Beats
Prix unitaire : 129,99
Quantité : 2

Toutes les ventes ont été enregistrées dans le fichier journal_ventes.txt !
Souhaitez-vous enregistrer de nouvelles ventes (oui/non) ? oui

Combien de ventes souhaitez-vous enregistrer ? 4

--- Vente 1 ---
Nom du produit : Abonnement Xbox Game Pass – 3 mois
Prix unitaire : 44,99
Quantité : 3

--- Vente 2 ---
Nom du produit : Jeu “The Legend of Zelda: Tears of the Kingdom” (Switch)
Prix unitaire : 89,99
Quantité : 2

--- Vente 3 ---
Nom du produit : Manette Nintendo Switch Pro
Prix unitaire : 99,99
Quantité : 2

--- Vente 4 ---
Nom du produit : Casque VR Meta Quest 3 (128 Go)
Prix unitaire : 649,99
Quantité : 1

Toutes les ventes ont été enregistrées dans le fichier journal_ventes.txt !
Souhaitez-vous enregistrer de nouvelles ventes (oui/non) ? non

```

✅ **Exemple journal_ventes.txt** :
```
Jeu “Spider-Man 2” (PS5) : 4 × 89,99 $ = 359,96 $
Carte cadeau PlayStation Store (50 $) : 5 × 50,00 $ = 250,00 $
Souris gamer Logitech G502 : 2 × 79,99 $ = 159,98 $
---------------------------------------------
Manette PS5 : 3 × 79,99$ = 239,97$
Casque Bluetooth Beats : 2 × 129,99$ = 259,98$
---------------------------------------------
Abonnement Xbox Game Pass – 3 mois : 3 × 44,99 $ = 134,97 $
Jeu “The Legend of Zelda: Tears of the Kingdom” (Switch) : 2 × 89,99 $ = 179,98 $
Manette Nintendo Switch Pro : 2 × 99,99 $ = 199,98 $
Casque VR Meta Quest 3 (128 Go) : 1 × 649,99 $ = 649,99 $
---------------------------------------------
```
