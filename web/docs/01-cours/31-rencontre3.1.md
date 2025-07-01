# 🤔 Rencontre 3 – Conditions et débogage

## 🎯 Objectif
Apprendre à prendre des décisions dans un programme à l’aide de structures conditionnelles (`if`, `else`) et utiliser les outils de **débogage** pour repérer et corriger les erreurs.

---

## 🧠 Théorie – Opérateurs relationnels

Les opérateurs relationnels comparent deux valeurs et retournent un booléen (`true` ou `false`).

```csharp
// <, >, <=, >=, !=, ==

Console.WriteLine(5 < 2); // false
bool resultat = 5 < 2;     // false
```

Exemples plus pratiques :
```csharp
int agePersone = 12; // tester avec 18

bool estMineur = agePersone < 18;
bool estMajeur = agePersone >= 18;
bool estAgeDor = agePersone >= 65;
bool jai18ans = agePersone == 18;
bool jeNaiPas18ans = agePersone != 18;
```
👉 Voir plus : [Opérateurs relationnels](https://info.cegepmontpetit.ca/notions-csharp/documentation/operateur)

---

## 🧠 Théorie – Opérateurs logiques

Les opérateurs logiques permettent de combiner plusieurs conditions pour en former une plus complexe.

```csharp
bool resultatEt = 2 < 5 && 3 < 8;     // true
bool resultatOu = 2 < 5 || 3 > 10;    // true
bool resultatInverse = !(5 > 3);      // false
```

Autres exemples pratiques :
```csharp
int ageRobert = 25;
int ageLucie = 17;
bool sontMajeurs = ageRobert >= 18 && ageLucie >= 18;

int ageJean = 15;
bool estAdolescent = ageJean >= 13 && ageJean <= 17;
```
👉 Voir plus : [Opérateurs logiques](https://info.cegepmontpetit.ca/notions-csharp/documentation/operateur/logique)

---

## 🧠 Théorie – Structures conditionnelles

Permettent d’exécuter certaines instructions selon des conditions.

### Sélection simple :
```csharp
int age = 25;
if (age < 18)
{
    Console.WriteLine("Mineur");
}
```

### Sélection à deux branches :
```csharp
if (age < 18)
{
    Console.WriteLine("Mineur");
}
else
{
    Console.WriteLine("Majeur");
}
```

### Sélection imbriquée :
```csharp
if (age < 18)
{
    if (age < 13)
    {
        Console.WriteLine("Enfant");
    }
    else
    {
        Console.WriteLine("Adolescent");
    }
}
else
{
    Console.WriteLine("Adulte");
}
```

### Sélection en cascade :
```csharp
if (age < 13)
{
    Console.WriteLine("Enfant");
}
else if (age < 18)
{
    Console.WriteLine("Adolescent");
}
else
{
    Console.WriteLine("Adulte");
}
```

### Affectation basée sur condition :
```csharp
string reponse = "";
if (age < 18)
{
    reponse = "Mineur";
}
else
{
    reponse = "Majeur";
}
```
👉 Voir plus : [Structures de contrôle – if](https://info.cegepmontpetit.ca/notions-csharp/documentation/structures-de-controle/if)

---

## 🧮 Assignation composée

L’**assignation composée** permet de simplifier certaines écritures :
```csharp
int a = 7, b = 10;
a += b; // équivaut à a = a + b;
a *= 2;
a++;
a--;
```
👉 Explication complète : [Assignation composée](https://info.cegepmontpetit.ca/notions-csharp/documentation/operateur/assignation-composee)

---

## 🧭 Expression

Une **expression** est une combinaison d’éléments (opérateurs, variables, constantes) qui donne une valeur :
```csharp
int x = (a + b) * c - 5;
```
👉 En savoir plus : [Expression](https://info.cegepmontpetit.ca/notions-csharp/documentation/expression)

---

## 🔍 Débogage avec Visual Studio

Le **débogueur** permet d’exécuter étape par étape et d’observer les valeurs à tout moment :

### 🛠️ Guide pratique :
1. Placer un **point d'arrêt**
2. Lancer en mode débogage (`F5`)
3. Utiliser `F10` (**Step Over**) ou `F11` (**Step Into**)
4. Observer les variables via les fenêtres **Locals** ou **Autos**

👉 Guide détaillé : [Débogueur Visual Studio](https://info.cegepmontpetit.ca/notions-csharp/debug/debogueur-visual-studio/)