---
description: "Introduction aux tableaux 1D, pourquoi et comment les utiliser"
---

# 🗂️ Tableaux 1D – Introduction visuelle et progressive

📎 **Référence** : [Tableau 1D – Documentation C#](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-1d)

---

## 1. Pourquoi utiliser un tableau ?

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

## 2. Qu'est-ce qu'un tableau ?

Un tableau est une **collection ordonnée** d'éléments **du même type**, repérés par un **index**.

**Avantages :**
- Regrouper plusieurs valeurs sous un seul nom.
- Accès rapide à n'importe quel élément par son index.
- Taille connue via la propriété `.Length`.

---

## 3. Déclaration et préinitialisation

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

## 4. Indexation – Comment accéder aux éléments ?

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



## 5. Modifier un élément

```csharp
notes[2] = 80; // Change le 3e élément de 78 à 80
Console.WriteLine(notes[2]); // Affiche 80
```


---

## 6. Propriété `.Length`

`notes.Length` retourne le **nombre d'éléments** du tableau.
```csharp
Console.WriteLine(notes.Length); // Affiche 5
Console.WriteLine(notes[notes.Length - 1]); // Affiche 88, le dernier élément
```

📌 Ce tableau contient 5 valeurs, mais l'index commence à 0. Le dernier élément est donc à l'index 4 ou  `notes.Length - 1`.

---

## 7. Fonction `.Contains()`
La fonction `notes.Contains(*paramètre*)` retourne une booléenne **True** ou **False** selon si la valeur passée en paramètre est contenue dans le tableau ou non.

```csharp
int[] notes = { 85, 90, 78, 92, 88 };

Console.WriteLine(notes.Contains(70)); // False
Console.WriteLine(notes.Contains(88)); // True
```

Cette fonction est valide peu importe le type de tableau.
```csharp
char[] sigle = { 'A','B','C' };
Console.WriteLine(sigle.Contains('F')); // False
Console.WriteLine(sigle.Contains('A')); // True

string[] profs = {"David","Éric","Jamil"}
Console.WriteLine(sigle.Contains("Jean")); // False
Console.WriteLine(sigle.Contains("Éric")); // True
```

## 8. Fonctions numériques
Les fonctions `.Max()`, `.Min()`, et `.Sum()`  retournent **une** valeur du même type que les valeurs du tableau. Donc un tableau de **int[]** retournera un **int** tandis qu'un tableau de **double[]** retournera un **double**.
```csharp
int[] notes = { 85, 90, 78, 92, 88 };
Console.WriteLine(notes.Max()); // 92
Console.WriteLine(notes.Min()); // 78
Console.WriteLine(notes.Sum()); // 433
Console.WriteLine(notes.Average()); // 86.6
```
La fonction `.Average()` retourne toujours un type à virgule. 


## 9. Fonctions qui prennent des tableaux en paramètres
Deux fonctions très utiles lorsqu'on travaille avec des tableaux sont `string.Join()` et `Array.Sort()`.

`string.Join()` Nous retourne un **string** contenant toutes les valeurs du tableau, séparées par une chaine de caractères fournis. 

```csharp
int[] notes = { 85, 92, 88 };
// Le premier paramètre est le string qui va séparer les valeurs
Console.WriteLine(string.Join(", ", notes)); // 85, 92, 88
```

 `Array.Sort()` Ne retourne rien, mais change l'ordre des valeurs dans le tableau pour les mettre en ordre croissant.

```csharp
int[] notes = { 85, 2, 88, 55 };
Console.WriteLine(string.Join(", ", notes)); // 85, 2, 88, 55 

Array.Sort(notes)
Console.WriteLine(string.Join(", ", notes)); //  2, 55, 85, 88 

```
Vous devez réaliser les labos suivants :
 [🧪 Labo 4.1A](/laboratoire/laboratoire4.1A)
 [🧪 Labo 4.2B](/laboratoire/laboratoire4.1B)


