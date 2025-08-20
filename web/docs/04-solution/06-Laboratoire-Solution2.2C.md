# ✅ Solutions – Laboratoire 2.2C – Méthodes avec retour

---

## ➕ Exercice 1 – Somme de deux nombres

```csharp
static int Somme(int x, int y)
{
    return x + y;
}
```

---

## 🔍 Exercice 2 – Tester si un nombre est premier

```csharp
static bool EstPremier(int nombre)
{
    if (nombre <= 1) return false;
    for (int i = 2; i <= Math.Sqrt(nombre); i++)
    {
        if (nombre % i == 0) return false;
    }
    return true;
}
```

---

## 🔼 Exercice 3 – Plus grand de deux nombres

```csharp
static int Maximum(int a, int b)
{
    if (a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
```

---

## 🔼 Exercice 4 – Plus grand de trois nombres (surcharge)

```csharp
static int Maximum(int a, int b, int c)
{
    return Maximum(Maximum(a, b), c);
}
```

---

## 📅 Exercice 5 – Année bissextile

```csharp
static bool EstBissextile(int annee)
{
    return (annee % 400 == 0) || (annee % 4 == 0 && annee % 100 != 0);
}
```
