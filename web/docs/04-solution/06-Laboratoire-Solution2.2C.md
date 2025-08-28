

# ✅ Solutions – Laboratoire 2.2C – Fonctions avec retour

---

## ➕ Exercice 1 – Somme de deux nombres

```csharp
static int Somme(int x, int y)
{
    return x + y;
}
```

---

## 🔼 Exercice 2 – Maximum entre deux puis trois valeurs

```csharp
static int MaximumDeux(int a, int b)
{
    if (a > b)
        return a;
    else
        return b;
}

static int MaximumTrois(int x, int y, int z)
{
    return MaximumDeux(x, MaximumDeux(y, z));
}
```

---

## 🔼 Exercice 3 – Plus grand de trois nombres (surcharge)

```csharp
static int Maximum(int a, int b)
{
    if (a > b)
        return a;
    else
        return b;
}

static int Maximum(int a, int b, int c)
{
    return Maximum(Maximum(a, b), c);
}
```

---

## 📅 Exercice 4 – Année bissextile

```csharp
static bool EstBissextile(int annee)
{
    return (annee % 400 == 0) || (annee % 4 == 0 && annee % 100 != 0);
}
```

---

## 🔄 Exercice 5 – Nombre palindrome

```csharp
static bool EstPalindrome(int nombre)
{
    int centaines = nombre / 100;
    int unites = nombre % 10;

   // Pour info seulement :
   // int dizaines = (nombre / 10) % 10;
    
    return centaines == unites;
}
```

---

## 🔺 Défi 6 – Triangle valide

```csharp
static bool EstTriangleValide(int a, int b, int c)
{
    return (a + b > c) && (a + c > b) && (b + c > a);
}
```

---

## 🎓 Défi 7 – Devine la moyenne

```csharp
static string DevineMoyenne(int note1, int note2)
{
    double moyenne = (note1 + note2) / 2.0;

    if (moyenne >= 90)
        return "A";
    else if (moyenne >= 80)
        return "B";
    else if (moyenne >= 70)
        return "C";
    else
        return "Échec";
}
```

---

