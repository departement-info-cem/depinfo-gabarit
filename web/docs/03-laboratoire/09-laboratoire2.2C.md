---
title: C - Fonctions avec retour
---

# 🧪 Labo 2.2C – Fonctions avec retour

Nous allons travailler une série d’exercices pour pratiquer la **définition de fonctions avec paramètres et retour de valeur**.



---

## 📌 Rappel : Syntaxe d’une fonction avec retour

```csharp
static TypeRetour NomDeLaFonction(type pParam1, type pParam2)
{
    // calculs
    return valeur;
}
````

### Exemple

```csharp
static double CalculerAireRectangle(double pLongueur, double pLargeur)
{
    double aire = pLongueur * pLargeur;
    return aire;
}
```

---

## 🧩 Exercices

### 🔹 Exercice 1 – Somme

Créez une fonction qui prend **deux entiers** en paramètres et retourne leur **somme**.

#### 💬 Exemple d’utilisation en console :

```
Entrez un premier nombre : 5
Entrez un deuxième nombre : 7
Résultat : 12
```

---

### 🔹 Exercice 2 – Nombre premier

Créez une fonction qui prend un entier et retourne un **booléen** indiquant si ce nombre est **premier ou non**.

#### 💬 Exemple d’utilisation en console :

```
Entrez un nombre : 11
Est premier : True
```

---

### 🔹 Exercice 3 – Maximum entre deux puis trois valeurs

1. Créez une fonction qui retourne le **maximum entre deux entiers**.
2. Utilisez cette fonction pour obtenir le **maximum entre trois entiers** (en appelant la fonction à l’intérieur d’un paramètre).

#### 💬 Exemple d’utilisation en console :

```
Entrez trois nombres : 12, 7, 4
Le plus grand est : 12
```

---

### 🔹 Exercice 4 – Surcharge de fonction

Dans le **même projet que l’exercice 3**, créez une **deuxième fonction** portant le **même nom**, mais prenant **trois paramètres**.
Elle doit retourner le **maximum des trois**. Ce procédé s'appelle une **surcharge**.

#### 💬 Exemple d’utilisation en console :

```
Entrez trois nombres : 9, 15, 10
Le maximum (avec fonction surchargée) est : 15
```

---

### 🔹 Exercice 5 – Année bissextile (retour)

Modifiez la fonction de l’exercice précédent sur les années bissextiles pour qu’elle **retourne un booléen** au lieu d’afficher le résultat.
La fonction retourne `true` si l’année est bissextile, sinon `false`.

#### 💬 Exemple d’utilisation en console :

```
Entrez une année : 2024
Bissextile : True
```

---

