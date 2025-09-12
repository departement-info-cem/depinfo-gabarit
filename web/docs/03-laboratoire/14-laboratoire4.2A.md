---
title: A - Tableaux 1D - Simple
---

# 🧪 Labo 4.1A – Tableaux 1D

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

## 🟢 Exercice 3 – Utilisation de `Length`
🎯 **Objectif** : Utiliser la propriété `.Length` pour connaître le nombre d’éléments et faire un calcul simple.

🛠️ **Instructions** :
1. Déclarez un tableau `int` : `{ 2, 4, 6 }`.
2. Affichez le **nombre d’éléments** grâce à `Length`.


✅ **Exemple attendu** :
```
Nombre d’éléments : 3
```

---

## 🟢 Exercice 4 – Calcul de moyenne
🎯 **Objectif** : Manipuler des valeurs dans un tableau et faire un calcul.

🛠️ **Instructions** :
1. Déclarez un tableau `double` : `{ 12.5, 15.0, 20.0 }`.
2. Calculez la **moyenne manuellement** en additionnant les éléments du tableau et en divisant par le nombre d’éléments.
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

## 🟢 Exercice 6 – Remplacement d'une valeur
🎯 **Objectif** : Modifier un élément selon une logique définie.

🛠️ **Instructions** :
1. Déclarez un tableau `int` : `{ 1, 2, 3, 4 }`.
2. Remplacez le deuxième élément par la somme du premier et du troisième.
3. Affichez le tableau.

✅ **Exemple attendu** :
```
Valeurs : 1, 4, 3, 4
```

---

## 🟢 Exercice 7 – Remplacement d'une valeur en utilisant Length
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

---

## 🟢 Exercice 8 – Utilisation de `Split()`
🎯 **Objectif** : Transformer une chaîne en tableau.

🛠️ **Instructions** :
1. Créez une variable `string` contenant : `"pomme,banane,orange"`.
2. Utilisez `.Split(',')` pour créer un tableau de fruits.
3. Affichez chaque fruit sur une ligne.

✅ **Exemple attendu** :
```
pomme
banane
orange
```

---

## 🟢 Exercice 9 – Utilisation de `Array.Sort()`
🎯 **Objectif** : Trier un tableau.

🛠️ **Instructions** :
1. Déclarez un tableau `int` : `{ 42, 7, 19, 3 }`.
2. Utilisez `Array.Sort()` pour trier les éléments.
3. Affichez le tableau trié.

✅ **Exemple attendu** :
```
3
7
19
42
```

---

## 🟢 Exercice 10 – Utilisation de `string.Join()`
🎯 **Objectif** : Afficher un tableau sous forme de texte.

🛠️ **Instructions** :
1. Déclarez un tableau `string` : `"Alice", "Bob", "Charlie"`.
2. Utilisez `string.Join(", ", tableau)` pour afficher tous les éléments sur une seule ligne.
3. Testez avec différents séparateurs.

✅ **Exemple attendu** :
```
Alice, Bob, Charlie
```

---

## 🟢 Exercice 11 – Utilisation de constantes
🎯 **Objectif** : Comprendre l’utilité des constantes.

🛠️ **Instructions** :
1. Déclarez une constante `const double PI = 3.14159;`.
2. Demandez à l’utilisateur d’entrer un rayon.
3. Calculez et affichez la circonférence du cercle avec la formule `2 * PI * rayon`.

✅ **Exemple attendu** :
```
Entrez le rayon : 5
Circonférence = 31.42
```

---
