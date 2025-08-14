---
description: "Remise du TP1, tableaux 1D, chaînes de caractères 2e partie"
---

# 🗂️ Tableaux 1D

## 📦 Tableau 1D préinitialisé, indexation et `Length`

🔹 **Définition**  
Un **tableau à une dimension** est un regroupement d'éléments **de même type**.

📎 **Référence complète** : [Tableau 1D – Documentation C#](https://info.cegepmontpetit.ca/notions-csharp/documentation/tableau/tableau-1d)

---

### 🛠️ Déclaration d’un tableau préinitialisé

📌 Forme générale :  
```csharp
type[] nomTableau = { elt1, elt2, ..., eltN };
```

💡 **Exemple** :  
```csharp
int[] tabNbres = { 12, 0, 5, 76, 12, 5, 4 };
```

---

### 🔍 Accéder aux éléments

L’accès à un élément se fait par **indexation** :  
L’**index** est un nombre entier placé entre `[ ]` :

- `tabNbres[0]` → premier élément (**12**)  
- `tabNbres[1]` → deuxième élément (**0**)  
- `tabNbres[2]` → troisième élément (**5**)  

> ℹ️ **Important** : en C#, les index commencent à `0`.

---

### 📏 Propriété `Length`

- `tabNbres.Length` retourne le **nombre d’éléments** (ici **7**).
- Le **dernier élément** est à l’index `tabNbres.Length - 1` :
  - `tabNbres[tabNbres.Length - 1]` → dernier élément (**4**).

---

### ✏️ Modifier un élément

```csharp
tabNbres[6] = 4; // change le 7e élément
element = tabNbres[6]; // assigne la valeur du 7e élément à la variable "element"
```

> ⚠️ **Attention** : On ne peut pas assigner une valeur à un tableau complet en une seule instruction, seulement élément par élément.
