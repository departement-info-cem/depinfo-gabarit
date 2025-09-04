# ✅ Solution – Labo 4.2A


##  🟢 Exercice 1
```csharp
int[] tableauE1 = { 5, 10, 15, 20 };
Console.WriteLine("Premier élément : " + tableauE1[0]);
Console.WriteLine("Dernier élément : "+ tableauE1[tableauE1.Length-1]);
```
##  🟢 Exercice 2
```csharp
string[] jours = { "Lundi", "Mardi", "Mercredi" };
jours[2] = "Vendredi";
Console.WriteLine(jours[0]);
Console.WriteLine(jours[1]);
Console.WriteLine(jours[2]);
```
##  🟢 Exercice 3
```csharp
int[] tableauE3 = { 2, 4, 6 };
Console.WriteLine("Nombre d’éléments : " + tableauE3.Length);

int somme = tableauE3.Sum();
Console.WriteLine("Somme : " +  somme);
```
##  🟢 Exercice 4
```csharp
double[] tableauE4 = { 12.5, 15.0, 20.0 };
double moyenne = tableauE4.Average();
Console.WriteLine("Moyenne : " + moyenne.ToString("F2"));
```
##  🟢 Exercice 5
```csharp
string[] tableauE5 = new string[3];
Console.Write("Entrez le prénom 1 : ");
tableauE5[0] = Console.ReadLine();
Console.Write("Entrez le prénom 2 : ");
tableauE5[1] = Console.ReadLine();
Console.Write("Entrez le prénom 3 : ");
tableauE5[2] = Console.ReadLine();

Console.WriteLine("Les prénoms sont : " + string.Join(", ", tableauE5));
```
##  🟢 Exercice 6
```csharp
int[] tableauE6 = { 1, 2, 3, 4 };
tableauE6[1] = tableauE6[0] + tableauE6[2];

Console.WriteLine("Valeurs : " + string.Join(", ", tableauE6));
```
##  🟢 Exercice 7
```csharp
double[] tableauE7 = { 100.0, 200.0, 300.0 };
tableauE7[tableauE7.Length - 1] *= 1.1;
Console.WriteLine(tableauE7[0]);
Console.WriteLine(tableauE7[1]);
Console.WriteLine(tableauE7[2]);
```