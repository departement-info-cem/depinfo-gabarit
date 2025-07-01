# 🧪 Laboratoire 2.2 – Niveau 2

---

### 🟡 1. Calcul d’une moyenne pondérée
🎯 **Objectif** : Appliquer la formule de moyenne pondérée avec des `double`.

🛠️ **Instructions** :
- Demandez à l’utilisateur trois notes (ex : sur 30 %, 30 %, 40 %)
- Utilisez `double.Parse()` pour convertir les entrées
- Calculez la moyenne avec les poids suivants : 30 %, 30 %, 40 %
- Affichez le résultat avec une précision de deux décimales

✅ **Exemple attendu** :
```
Note 1 : 80
Note 2 : 70
Note 3 : 90
Moyenne : 81.00
```

---

### 🟡 2. Conversion de température (version simplifiée)
🎯 **Objectif** : Appliquer deux formules de conversion de température en manipulant des `double`.

🛠️ **Instructions** :
- Demandez à l’utilisateur une température (nombre décimal)
- Demandez l’unité de cette température (C pour Celsius ou F pour Fahrenheit)
- Affichez **les deux conversions** possibles, sans choisir selon l’unité
  - `F = C * 9 / 5 + 32`
  - `C = (F - 32) * 5 / 9`
- L’utilisateur pourra ainsi voir les deux résultats

✅ **Exemple attendu** :
```
Température : 25
En Fahrenheit : 77
En Celsius : -3.89
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
Prix du repas : 20.00
Total à payer : 25.00
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
Article 1 : quantité = 2, prix = 4.5
Article 2 : quantité = 1, prix = 3.0
Total : 12.00
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
Division décimale : 2.5
```
