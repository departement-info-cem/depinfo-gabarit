---
description: "Série d’exercices – Tableaux 1D : manipulation et compréhension"
---

# 🧪 Labo 7.1 – Tableaux 1D

📎 **Référence** : [Tableau 1D – Documentation C#](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-1d)

---

## 🟢 Exercice 1 – Lecture et affichage simple
🎯 **Objectif** : Comprendre la déclaration et l’affichage d’éléments dans un tableau.

🛠️ **Instructions** :
1. Déclarez un tableau `int` préinitialisé avec les valeurs : `5, 10, 15, 20`.
2. Affichez le premier élément du tableau.
3. Affichez le dernier élément du tableau.

✅ **Exemple attendu** :
```
Premier élément : 5
Dernier élément : 20
```

---

## 🟢 Exercice 2 – Modification d’élément
🎯 **Objectif** : Savoir modifier une valeur dans un tableau.

🛠️ **Instructions** :
1. Déclarez un tableau `string` contenant : `"Lundi", "Mardi", "Mercredi"`.
2. Modifiez la valeur de `"Mercredi"` pour `"Vendredi"`.
3. Affichez le contenu du tableau (un élément par ligne).

✅ **Exemple attendu** :
```
Lundi
Mardi
Vendredi
```

---

## 🟢 Exercice 3 – Utilisation de `Length` (sans boucle)
🎯 **Objectif** : Utiliser la propriété `.Length` pour connaître le nombre d’éléments et faire un calcul simple.

🛠️ **Instructions** :
1. Déclarez un tableau `int` : `{ 2, 4, 6 }`.
2. Affichez le **nombre d’éléments** grâce à `Length`.
3. Calculez la somme des trois éléments **sans utiliser de boucle**.
4. Affichez la somme.

✅ **Exemple attendu** :
```
Nombre d’éléments : 3
Somme : 12
```

---

## 🟢 Exercice 4 – Calcul de moyenne
🎯 **Objectif** : Manipuler des valeurs dans un tableau et faire un calcul.

🛠️ **Instructions** :
1. Déclarez un tableau `double` : `{ 12.5, 15.0, 20.0 }`.
2. Calculez la moyenne des trois éléments **sans boucle**.
3. Affichez la moyenne.

✅ **Exemple attendu** :
```
Moyenne : 15.83
```

---

## 🟢 Exercice 5 – Interaction avec l’utilisateur
🎯 **Objectif** : Remplir un tableau avec des données saisies par l’utilisateur.

🛠️ **Instructions** :
1. Créez un tableau `string` de trois éléments.
2. Demandez à l’utilisateur d’entrer trois prénoms.
3. Affichez le tableau complet sur une seule ligne.

✅ **Exemple attendu** :
```
Entrez le prénom 1 : Alex
Entrez le prénom 2 : Sam
Entrez le prénom 3 : Léa
Les prénoms sont : Alex, Sam, Léa
```

---

## 🟢 Exercice 6 – Remplacement conditionnel
🎯 **Objectif** : Modifier un élément selon une logique définie.

🛠️ **Instructions** :
1. Déclarez un tableau `int` : `{ 1, 2, 3, 4 }`.
2. Remplacez le deuxième élément par la somme du premier et du troisième.
3. Affichez le tableau.

✅ **Exemple attendu** :
```
1
4
3
4
```

---

## 🟢 Exercice 7 – Index dynamique
🎯 **Objectif** : Utiliser `Length` pour cibler le dernier élément.

🛠️ **Instructions** :
1. Déclarez un tableau `double` : `{ 100.0, 200.0, 300.0 }`.
2. Multipliez le **dernier élément** par `1.1`.
3. Affichez le tableau modifié.

✅ **Exemple attendu** :
```
100
200
330
```
