---
title: B - Conditions, assignation composées
---

# 🧪 Labo 2.1B – Conditions, assignation composées

---

### 🟡 Exercice 1 – Devine le mot magique 🪄

🎯 **Objectif** : Comparer une chaîne de caractères avec `==`.

🛠️ Instructions :

* Demande à l’utilisateur d’écrire un mot
* Si le mot est exactement `"abracadabra"`, affiche `Tu connais la magie toi !`
* Sinon, affiche `Mot incorrect... essaie encore.`

✅ Exemple :

```

Quel est le mot magique ? abracadabra
Tu connais la magie toi !

```

---

### 🟡 Exercice 2 – Code secret 🔐

🎯 **Objectif** : Utiliser `&&` avec deux conditions.

🛠️ Instructions :

* Demande un prénom
* Demande un code secret (un nombre)
* Si le prénom est `"Alice"` **et** le code est `1234`, affiche `Accès accordé`
* Sinon, affiche `Accès refusé`

✅ Exemple :

```

Prénom : Alice
Code : 1234
Accès accordé

```

---

### 🟡 Exercice 3 – Loterie 🍀

🎯 **Objectif** : Comparer deux entiers et gérer les cas d’égalité.

🛠️ Instructions :

* Demande un chiffre entre 1 et 10
* Garde un nombre mystère (ex. : `7`)
* Si le chiffre correspond, affiche `Félicitations, tu as gagné !`
* Sinon, affiche `Désolé, ce n’est pas le bon numéro`

✅ Exemple :

```

Choisis un chiffre : 3
Désolé, ce n’est pas le bon numéro

```

---

### 🟡 Exercice 4 – Contrôle de température 🌡️

🎯 **Objectif** : Utiliser `else if` pour évaluer des plages de valeurs.

🛠️ Instructions :

* Demande une température
* Si température < 0 → `Il gèle dehors !`
* Si température entre 0 et 25 inclus → `Température agréable`
* Si température > 25 → `Il fait chaud !`

✅ Exemple :

```

Température : 26
Il fait chaud !

```

---

### 🟡 Exercice 5 – Film recommandé 🎬

🎯 **Objectif** : Combiner `if`, `else if`, et logique `||`.

🛠️ Instructions :

* Demande l’âge
* Si l’âge < 13 → `Tu peux regarder : Coco`
* Si entre 13 et 17 → `Tu peux regarder : Spider-Man`
* Si 18 ou plus → `Tu peux regarder : Inception`

✅ Exemple :

```

Quel est ton âge ? 15
Tu peux regarder : Spider-Man

```

---

### 🟡 Exercice 6 – Le plus grand des trois 🏆

🎯 **Objectif** : Comparer plusieurs entiers avec `if` imbriqués.

🛠️ Instructions :

* Demande trois nombres à l’utilisateur
* Affiche lequel est le plus grand

✅ Exemple :

```

Nombre A : 12
Nombre B : 5
Nombre C : 9
Le plus grand est : 12

```

---

### 🟡 Exercice 7 – Questionnaire éclair ⚡

🎯 **Objectif** : Combiner plusieurs réponses en un score.

🛠️ Instructions :

* Pose 3 questions à réponse oui/non (`true` ou `false`)
  - As-tu dormi 8h ?
  - As-tu mangé ce matin ?
  - As-tu fait tes devoirs ?
* Pour chaque réponse vraie, accorde 1 point
* Affiche le score final et un message :
  - 3 points : `Tu es prêt pour la journée !`
  - 1 ou 2 : `Pas mal, mais tu peux faire mieux !`
  - 0 : `Aïe... une journée difficile t'attend`

✅ Exemple :

```

As-tu dormi 8h ? true
As-tu mangé ce matin ? false
As-tu fait tes devoirs ? true
Score : 2
Pas mal, mais tu peux faire mieux !

```
---
### 🟡 Exercice 8 – Gym pour variables 🏋️

🎯 **Objectif** : Utiliser les opérateurs d’assignation composée (`+=`, `*=`, `++`, `--`).

🛠️ Instructions :

* Déclare une variable `score` avec une valeur initiale de 10
* Ajoute 5 au score (`+=`)
* Multiplie le score par 2 (`*=`)
* Incrémente le score (`++`)
* Décrémente ensuite deux fois (`--`)
* Affiche la valeur finale

✅ Exemple :

```

Score final : 29

```

