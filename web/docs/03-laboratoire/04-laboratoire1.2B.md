---
title: B - Conversion, permutation, opérations
---

# 🧪 Labo 1.2B – Conversion, permutation, opérations

---

### 🟡 1. Calcul d’une moyenne pondérée
🎯 **Objectif** : Appliquer la formule de moyenne pondérée avec des `double`.

🛠️ **Instructions** :
- Demandez à l’utilisateur trois notes (ex : sur 30 %, 30 %, 40 %)
- Utilisez `double.Parse()` pour convertir les entrées
- Calculez la moyenne avec les poids suivants : 30 %, 30 %, 40 %
- Affichez le résultat

✅ **Exemple attendu** :
```
Note 1 : 80
Note 2 : 70
Note 3 : 90
Moyenne : 81
```

---

### 🟡 2. Conversion de température 
🎯 **Objectif** : Appliquer une formule de conversion de température en manipulant des `double`.

🛠️ **Instructions** :
- Demandez à l’utilisateur une température en Celcius (nombre décimal)
- Affichez la conversion
  - `F = C * 9 / 5 + 32`
- L’utilisateur pourra ainsi voir le résultat

✅ **Exemple attendu** :
```
Température : 25,2
En Fahrenheit : 77,36

```

---

### 🟡 3. Calcul de taxes et pourboire
🎯 **Objectif** : Lire un prix, ajouter 15 % de taxes et 10 % de pourboire.

🛠️ **Instructions** :
- Demandez le prix d’un repas
- Calculez les taxes (15 %) et le pourboire (10 %)
- Affichez le total à payer

✅ **Exemple attendu** :
```
Prix du repas : 20
Total à payer : 25
```

---

### 🟡 4. Conversion de minutes
🎯 **Objectif** : Utiliser division entière pour convertir un nombre de minutes.

🛠️ **Instructions** :
- Demandez un nombre de minutes à l’utilisateur
- Calculez le nombre d’heures et de jours complets
- Affichez les résultats

✅ **Exemple attendu** :
```
Minutes : 1500
Heures : 25
Jours : 1
```

---

### 🟡 5. Permutation de trois variables
🎯 **Objectif** : Échanger les valeurs entre trois variables.

🛠️ **Instructions** :
- Demandez trois nombres à l’utilisateur
- Permutez les valeurs (A devient B, B devient C, C devient A)
- Affichez les nouvelles valeurs

✅ **Exemple attendu** :
```
A : 1
B : 2
C : 3
Après permutation : A = 2, B = 3, C = 1
```

---

### 🟡 6. Montant total avec plusieurs articles
🎯 **Objectif** : Multiplier quantités par prix unitaire, puis additionner.

🛠️ **Instructions** :
- Demandez la quantité et le prix pour deux articles
- Calculez le total
- Affichez le prix final

✅ **Exemple attendu** :
```
Article 1 - quantité : 2
Article 1 - prix : 4,5
Article 2 - quantité : 1
Article 2 - prix : 3,0
Total : 12
```

---

### 🟡 7. Division erronée (`int` vs `double`)
🎯 **Objectif** : Mettre en lumière la perte de précision si on oublie de convertir.

🛠️ **Instructions** :
- Déclarez deux entiers : 5 et 2
- Affichez le résultat de `5 / 2` (division entière)
- Convertissez en `double` et refaites le calcul

✅ **Exemple attendu** :
```
Division entière : 2
Division décimale : 2,5
```
