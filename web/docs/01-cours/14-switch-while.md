---
description: Switch... case | While | Do... while | TryParse
---

# Switch... case | While | Do... while | TryParse

## 1️⃣ Rappel : La structure conditionnelle IF  
La structure `if` permet au programme de prendre des décisions si une condition est vraie.   
Lorsque nous devons comparer avec plus que 5 valeurs, le code commence à être long et plus compliqué à modifier.  
  
Prenons un exemple où l'utilisateur peut choisir parmi 10 options :  

```csharp
if (variable == 1)
    // bloc instructions
else if (variable == 2)
    // bloc instructins
else if (variable == 3)
    // bloc instructions
else if (variable == 4)
    // bloc instructions
else if (variable == 5)
    // bloc instructions
else if (variable == 6)
    // bloc instructions
...
else ...
```

Dans ce cas, l'utilisation d'un `if` imbriqué n'est pas conseillée, car le code devient moins lisible et plus difficile à déboguer.   


✅ **Solution** : Utiliser la structure `Switch... case`, qui elle peut avoir jusqu'a `n` valeurs différentes.  

## 2️⃣ L'instruction conditionnelle `Switch... case`  
 
L'instruction `switch` est utilisée lorsque le traitement nécessite plusieurs conditions.  

✔️ **Syntaxe**  
Le `switch` s'écrit généralement comme suit :  

```csharp
switch (variable)
{
case valeur1 :
  //bloc instructions;
  break;
case valeur2 :
  //bloc instructions;
  break;
case valeur3 :
  //bloc instructions;
  break;
...
default:
  //bloc instructions;
  break;
}
 ```

⚠️ **Note** Le `switch` peut ne pas inclure la clause `default`.

L'exécution d'une instruction `switch` implique les étapes suivantes :
* l'évaluation de l'expression à tester;
* la comparaison de sa valeur de l'expression avec les différentes étiquettes `case`;
* l'exécution du bloc d'instructions associé à l'étiquette correspondant à cette valeur;
* l'instruction `break` permet d'interrompre le `switch` et d'éviter l'exécution des autres blocs;
* si aucune étiquette ne correspond, le bloc associé au `default` est exécuté.
* Il peut y avoir un nombre *quelconque* d’étiquettes `case`;
* Chaque étiquette `case` doit avoir une valeur **unique**;  
* L’instruction `break` est nécessaire après chaque bloc;
* Les étiquettes `case` sont évaluées **dans l’ordre** d'apparition.



Voici un exemple où, selon l'option choisie, le programme effectuera un calcul différent :    


```csharp  
int nb1 = 4, nb2 = 2;
int resultat = 0;
char op = '*';

switch (op)
 {
     case '+':
         resultat = nb1 + nb2;
         break;
     case '-':
         resultat = nb1 - nb2;
         break;
     case '*':
         resultat = nb1 * nb2;
         break;
     case '/':
         resultat = nb1 / nb2;
         break;
 }
```

💡 Il est possible d'exécuter le même bloc d'instructions pour deux etiquettes (*cases*) différentes.   

  
  
Voici un exemple qui nous montre, selon la session suivie, si elle appartient au tronc commun ou au programme de formation spécifique :  

```csharp
int nombreSession = 2;
string session;

switch (nombreSession)
{
case 1:
case 2:
  session = "Tronc commun";
  break;
case 3:
case 4:
case 5:
case 6:
  session = "Formation spécifique";
  break;
default:
  session = "Erreur";
  break;
     }
```
---
## Les instructions de répétition

## 3️⃣ Rappel : L'instruction `for`  
La boucle `for` permet d'exécuter un bloc d'instructions, un nombre déterminé de fois. Mais il peut arriver des situations où la variable de condition change à n'importe quel moment.   

Prenons quelques exemples où nous voulons répéter un bloc d'instructions  :    
* Tant que l'utilisateur ne rentre pas la bonne réponse;
* tant que l'utilisateur ne rentre pas le bon type de données;
* tant qu'une condition est vraie;
* etc.

✅ **Solution** : Utiliser la structure `While` ou encore `Do... while`   

## 4️⃣ La structure `While`  

La boucle `While` exécute un bloc de code tant que :  
* la condition est vraie;
* la vérification est effectuée **avant** l'exécution de la boucle;
* elle peut **ne jamais s'executer** si la condition est fausse dès le départ;
* son utilisation rend le code **simple et lisible**.


✔️ **Syntaxe**  
```csharp  
while (condition) {  
  // bloc d'instructions à répéter  
}  
```  

**Exemple :**  
```csharp
int i=0;
while (i < 3) {
  Console.WriteLine("i vaut " + i);
  i++;
}
```

✅ **Résultat** : On affiche : 0, 1, 2 – La condition est testée avant chaque itération.

---

## 5️⃣ La structure `Do... while`  

La boucle `Do... while` exécutera un bloc de code  :  
* une première fois;
* la vérification est faite après l'exécution de la boucle;
* le code est simple et lisible.

✔️ **Syntaxe**   
```csharp
do {
  // instructions répétées au moins une fois
} while (condition);
```
  
**Exemple :**  
```csharp
int x = 5;
do {
  Console.WriteLine("x vaut " + x);
  x++;
} while (x < 3);
```
  
 ✅ **Résultat** : On affiche une seule fois « x vaut 5 », car la condition est testée après exécution, et le résultat est "faux".  
  
  
    
**Résumé**  
|Boucle|Vérifie avant|Exécute au moins 1 fois | Utilisation typique|  
|---|---|---|---|  
|`while` |✅ | ❌ |Tant qu'une condition est vraie|  
|`do... while` |❌ | ✅ |Quand on veut exécute au moins une fois|  
|`for` |✅ | ❌ |Quand on connaît le nombre d'itérations|   


---

## 6️⃣ La méthode `TryParse`  

La méthode `TryParse` tente de convertir une chaîne de caractères (string) en un type de données spécifique (ex. int, double, bool, char) **sans provoquer d’erreur si la conversion échoue**.  

La méthode retourne un booléen :  
* **true** si la conversion réussit
* **false** si la conversion échoue.

  
**Explication**  
* `TryParse` évite les erreurs d’exécution (exceptions) que provoquerait `Parse` si le texte est invalide.
* La variable de sortie (`out`) contient la valeur convertie **uniquement** si la conversion est **réussie**.
* Sinon, la variable reçoit la valeur par défaut du type (ex. 0 pour int, false pour bool, etc.).  

   
✔️ **Syntaxe** 
```csharp
Type.TryParse(stringValeur, out variable);
```

**Exemple 1 : Int**
```csharp
string texte = "123";  
bool reussi = int.TryParse(texte, out int nombre);
 
if (reussi)
    Console.WriteLine("Conversion réussie : " + nombre);
else
    Console.WriteLine("Échec de conversion.");
```

✅ **Résultat** : Conversion réussie : 123
  
  
     
**Exemple 2 : Double**  
```csharp
string texte = "3.14";
bool reussi = double.TryParse(texte, out double valeur);
 
if (reussi)
    Console.WriteLine("Conversion réussie : " + valeur);
else
    Console.WriteLine("Échec de conversion.");
```
✅ **Résultat**  : Conversion réussie : 3.14


    

**Exemple 3 : Bool**
```csharp
string texte = "true";
bool reussi = bool.TryParse(texte, out bool valeurBool);
 
if (reussi)
    Console.WriteLine("Conversion réussie : " + valeurBool);
else
    Console.WriteLine("Échec de conversion.");
```
✅ **Résultat**  :  Conversion réussie : True

    

**Exemple 4 : Char**
```csharp
string texte = "A";
bool reussi = char.TryParse(texte, out char caractere);
 
if (reussi)
    Console.WriteLine("Conversion réussie : " + caractere);
else
    Console.WriteLine("Échec de conversion.");
```

✅ **Résultat**  : Conversion réussie : A


 
**Résumé**
|Type|Exemple d'entrée|Conversion réussie ? | Résultat|  
|---|---|---|---|  
|`int` |"123" | ✅ |123| 
|`int` |"abc" | ❌ |0|  
|`double` |3.14 | ✅ |3.14|  
|`bool` |"true" | ✅ |True|    
|`char` |"A" | ✅ |'A'|  
  

  
  
📎 **Références :**   
[Switch... case](https://info.cegepmontpetit.ca/notions-csharp/documentation/structures-de-controle/switch-case)   |   [While](https://info.cegepmontpetit.ca/notions-csharp/documentation/structures-de-controle/while)  |  [Do... while](https://info.cegepmontpetit.ca/notions-csharp/documentation/structures-de-controle/do-while)  |  [TryParse](https://info.cegepmontpetit.ca/1P6/cours/integration-fonctions#-quest-ce-que-tryparse-)
