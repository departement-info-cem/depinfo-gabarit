---
title: ✅ Solutions – Labo 4.1A – Boucles For
---

# ✅ Solutions – Labo 4.1A – Exercices simples Boucles For

---


### 🟢 Exercice 1 : Affichez des valeurs.
Affichez les valeurs de 1 à 6 dans la console avec une boucle for.
```CSharp
for (int i = 1; i <= 6; i++)
{
    Console.WriteLine(i);
}
```


### 🟢 Exercice 2 : Affichage sur une ligne.
Affichez sur UNE ligne, les valeurs de 10 à 20 (utiliser console.write())
```CSharp
for (int i = 10; i <= 20; i++)
{
    Console.Write(i + " "); // Écrit le chiffre ET un espace
}
```

### 🟢 Exercice 3 : Décrémentation d'index.
Faites un compte à rebours par bons de 2 en partant de 10 et incluant le 0.

```CSharp
for (int i = 10; i >= 0; i-=2) // index commence à 10 et diminue de 2 à chaque itération.
{
    Console.WriteLine(i); 
}
```


### 🟢 Exercice 4 : Incrémentation par bons.
Affichez les nombres pairs de 0 à 20 inclusivement.
```CSharp
for (int i = 0; i <= 20; i+=2)
{
    Console.WriteLine(i); 
}
```

### 🟢 Exercice 5 : Conditionnel dans une boucle.
Affichez les nombres impairs de 10 à 25 inclusivement.
```CSharp
for (int i = 10; i <= 25; i+=2)
{
    if ( i % 2 != 0) 
    
        Console.WriteLine(i); 
    }   
}
```

### 🟢 Exercice 6 : Conditionnel dans une boucle.
Affichez les nombres de 1 à 50 sur une ligne **sauf** les multiples de 3.
Vous devez vérifier si le nombre est divisible par 3 avec un modulo avant de l'afficher.
```CSharp
for (int i = 1; i <= 50; i+=2)
{
    if ( i % 3 != 0) 
    
        Console.WriteLine(i); 
    }
}
```

### 🟢 Exercice 7 : Accumulation de valeurs.
Faites la somme des chiffres de 1 à 50.
```CSharp
int total = 0;
for (int i = 0; i < 50; i++)
{
    total += i;
}
Console.WriteLine($"Total : {total}");
```

### 🟢 Exercice 8 : Accumulation d'entrées d'utilisateur.
Faites une boucle qui demande à l'utilisateur de rentrer 3 chiffres un après l'autre.

Faites la moyenne des chiffres entrés.
```CSharp
 double total = 0;
 for (int i = 0; i < 3; i++)
 {
     Console.Write("Entrez un chiffre : ");
     double chiffreSaisie = double.Parse(Console.ReadLine());
     total += chiffreSaisie;
 }
 double moyenne = total / 3;
 Console.WriteLine($"La moyenne est : {moyenne.ToString("F")}");
```



### 🟢 Exercice 9 : Boucles imbriquées
Utilisez deux boucles imbriquées pour faire un carré d'étoiles. 


```CSharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine();
    for (int j = 1; j <= 5; j++)
    {
        Console.Write("*");
    }
}

```




### 🟢 Exercice 10 : Boucles imbriquées
On fait une pyramide d'étoiles. Avec deux boucles imbriquées, on veut utiliser l'index de la première boucle dans la deuxième boucle. 

```CSharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine();
    for (int j = 1; j <= i; j++)  // La comparaison est différente de l'exercice précédent.
    {
        Console.Write("*");
    }
}

```
