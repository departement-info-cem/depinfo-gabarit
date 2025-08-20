---
description: "Introduction aux tableaux 1D, pourquoi et comment les utiliser"
---

# 🗂️ Tableaux 1D – Introduction visuelle et progressive

📎 **Référence** : [Tableau 1D – Documentation C#](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-1d)

---

## 1️⃣ Pourquoi utiliser un tableau ?

Imaginons que nous devions stocker les notes de 5 étudiants. Sans tableau, nous aurions :
```csharp
int note1 = 85;
int note2 = 90;
int note3 = 78;
int note4 = 92;
int note5 = 88;
```
❌ Inconvénients :
- Trop de variables à déclarer.
- Difficile à traiter automatiquement.
- Peu pratique si le nombre d'éléments change.

✅ Solution : utiliser **un seul conteneur** capable de stocker toutes les valeurs : **un tableau**.

---

## 2️⃣ Qu'est-ce qu'un tableau ?

Un tableau est une **collection ordonnée** d'éléments **du même type**, repérés par un **index**.

**Avantages :**
- Regrouper plusieurs valeurs sous un seul nom.
- Accès rapide à n'importe quel élément par son index.
- Taille connue via la propriété `.Length`.

---

## 3️⃣ Déclaration et préinitialisation

Forme générale pour un tableau **préinitialisé** :
```csharp
type[] nomTableau = { elt1, elt2, ..., eltN };
```

Exemple :
```csharp
int[] notes = { 85, 90, 78, 92, 88 };
```

Forme générale pour un tableau **vide** avec une taille définie :
```csharp
type[] nomTableau = new type[taille];
```

Exemple :
```csharp
int[] tabNombres = new int[10]; // Tableau de 10 entiers initialisés à 0
```

---

## 4️⃣ Indexation – Comment accéder aux éléments ?

📌 L'**index** commence toujours à `0`.

```csharp
Console.WriteLine(notes[0]); // Premier élément (85)
Console.WriteLine(notes[4]); // Dernier élément (88)
```

### Illustration :
```
┌────┬────┬────┬────┬────┐
│ 85 │ 90 │ 78 │ 92 │ 88 │   ← Valeurs
└────┴────┴────┴────┴────┘
 [0]  [1]  [2]  [3]  [4]    ← Index
```

---

## 5️⃣ Propriété `.Length`

`notes.Length` retourne le **nombre d'éléments** du tableau.
```csharp
Console.WriteLine(notes.Length); // Affiche 5
```

📌 Le dernier élément est à l'index `notes.Length - 1`.

---

## 6️⃣ Modifier un élément

```csharp
notes[2] = 80; // Change le 3e élément de 78 à 80
Console.WriteLine(notes[2]); // Affiche 80
```

> ⚠️ On ne peut pas assigner une valeur à un tableau complet en une seule instruction, seulement élément par élément.
