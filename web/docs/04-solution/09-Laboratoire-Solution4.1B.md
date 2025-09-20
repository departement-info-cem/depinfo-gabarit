---
title: ✅ Solutions – Labo 4.1B – Exercices plus complexes de boucles
---

# ✅ Solutions – Labo 4.1B – Exercices de boucles

---


### 🟡 Exercice 1 : Boucle dans une fonction.
Faire une fonction qui prend un int en paramètre et qui imprime la table de multiplication correspondante dans la console.
```CSharp
static void Main(string[] args)
{
    // Tester la fonction AfficherTableMultiplicationa avec 7
    AfficherTableMultiplication(7);
}
static void AfficherTableMultiplication(int nombre)
{
    for (int i = 1; i <= 12; i++)
    {
        Console.WriteLine($"{nombre} x {i} = {nombre * i}");
    }    
}
```


### 🟡 Exercice 2 : Fonction dans une boucle.
#### 🟡 Exercice 2-A : Fonction ComposerLigneÉtoile().
Faire une fonction qui prend un int en paramètre et qui retourne un string avec un nombre d'étoiles * correspondant.
```CSharp
static void Main(string[] args)
{
    // Tester la fonction avec 3
    Console.WriteLine(ComposerLigneEtoile(3));
    // Tester la fonction avec 5
    Console.WriteLine(ComposerLigneEtoile(5));
    // Tester la fonction avec 7
    Console.WriteLine(ComposerLigneEtoile(7));


}
static string ComposerLigneEtoile(int pNbrÉtoiles)
{
    string ligne = "";
    for (int i = 0; i < pNbrÉtoiles; i++)
    {
        ligne += "*";
    }
    return ligne;
}
```
#### 🟡 Exercice 2-B : Appel de fonction dans une boucle.
Faire un appel de la fonction ComposerLigneEtoile() dans une boucle pour faire une pyramide de taille 5.
```CSharp
static void Main(string[] args)
{
    for (int i = 1; i <= 5; i++)
    {
        Console.WriteLine(ComposerLigneEtoile(i));
    }
}
static string ComposerLigneEtoile(int pNbrÉtoiles)
{
    string ligne = "";
    for (int i = 0; i < pNbrÉtoiles; i++)
    {
        ligne += "*";
    }
    return ligne;
}
```

#### 🟡 Exercice 2-C : Appel de fonction dans une boucle.
Créer une fonction ImprimerPyramide() qui prend la taille de la pyramide en paramètre.
```CSharp
 static void Main(string[] args)
 {
     ImprimerPyramide(3);
     ImprimerPyramide(5);
 }
 static void ImprimerPyramide(int pTaillePyramide)
 {
     for (int i = 1; i <= pTaillePyramide; i++)
     {
         Console.WriteLine(ComposerLigneEtoile(i));
     }
 }
 static string ComposerLigneEtoile(int pNbrÉtoiles)
 {
     string ligne = "";
     for (int i = 0; i < pNbrÉtoiles; i++)
     {
         ligne += "*";
     }
     return ligne;
 }
```
#### 🟡 Exercice 2-D : Appel de fonction dans une boucle.
Créer une fonction ImprimerPyramideInverser() qui prend la taille de la pyramide en paramètre.
```CSharp
static void Main(string[] args)
{
    // Imprimer une pyramide inversée de taille 4
    ImprimerPyramideInverser(4);
    // Imprimer une pyramide de taille 3
    ImprimerPyramide(3);
    // Imprimer une pyramide inversée de taille 2
    ImprimerPyramideInverser(2);

}
static void ImprimerPyramideInverser(int pTaillePyramide)
{
    for (int i = pTaillePyramide; i >= 1; i--)
    {
        Console.WriteLine(ComposerLigneEtoile(i));
    }
}
static void ImprimerPyramide(int pTaillePyramide)
{
    for (int i = 1; i <= pTaillePyramide; i++)
    {
        Console.WriteLine(ComposerLigneEtoile(i));
    }
}
static string ComposerLigneEtoile(int pNbrÉtoiles)
{
    string ligne = "";
    for (int i = 0; i < pNbrÉtoiles; i++)
    {
        ligne += "*";
    }
    return ligne;
}
```