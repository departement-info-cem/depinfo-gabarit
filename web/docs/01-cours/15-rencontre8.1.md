import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cours 15 - Relations et services

## 💍 Relations

Comme on utilise **Entity Framework**, nos classes doivent respecter certaines contraintes.

1. Posséder un `id` qui servira de **clé primaire** :

```cs showLineNumbers
public class Item{
    public int Id { get; set; } // Indispensable 😩
    public string Name { get; set; } = null!;
    ...
}
```

2. Si une classe possède des **relations**, précéder les **propriétés de navigation** du mot-clé `virtual` :

```cs showLineNumbers
public class NPC{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public virtual List<Item> SoldItems { get; set; } = new List<Item>(); // virtual !
    ...
}
```

:::info

Les « propriétés de navigation » sont des propriétés qui permettent de concrétiser la relation entre deux classes / entités.
C'est généralement une simple référence vers une autre classe (ex : `public virtual Item Item { get; set; }`) ou une liste
de références vers une autre classe. (Ex : `public virtual List<Item> Items { get; set; }`)

:::

Les prochaines sections abordent des exemples pour chaque type de relation possible.

### 🍒 One-To-One

Un `User` possède (optionnellement) une `Subscription`.

```cs showLineNumbers
public class User{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public virtual Subscription? Subscription { get; set; } // Propriété de navigation
}
```

:::note

Le `?` après le type `Subscription` permet d'indiquer que la propriété est optionnelle et donc peut être `null`.

:::

Une `Subscription` appartient forcément à un `User`.

```cs showLineNumbers
public class Subscription{
    public int Id { get; set; }
    public int Points { get; set; }
    public DateOnly StartDate { get; set; }
    public virtual User User { get; set; } = null!; // Propriété de navigation
}
```

### 🍇 One-To-Many

Un `Post` peut avoir plusieurs `Comment`.

```cs showLineNumbers
public class Post{
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public virtual List<Comment> Comments { get; set; } = new List<Comment>(); // Propriété de navigation (liste !)
}
```

Un `Comment` est associé à un seul `Post`.

```cs showLineNumbers
public class Comment{
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public virtual Post Post { get; set; } = null!; // Propriété de navigation
}
```

### 🍣 Many-To-Many

Un `Ingredient` peut faire partie de plusieurs `Recipe`.

```cs showLineNumbers
public class Ingredient{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public virtual List<Recipe> Recipes { get; set; } = new List<Recipe>(); // Propriété de navigation
}
```

Une `Recipe` peut contenir plusieurs `Ingredient`.

```cs showLineNumbers
public class Recipe{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public virtual List<Ingredient> Ingredients { get; set; } = new List<Ingredient>(); // Propriété de navigation
}
```

### 😵 Double relation

Lorsque (par exemple) deux classes partagent deux relations, il faut aider **Entity Framework** à déterminer quelles propriétés de navigation correspondent ensemble.

Disons qu'on a les classes `Parent` et `Child`. Un `Parent` a plusieurs `Child`, bien entendu, mais on aimerait aussi noter son `Child` préféré. Il existe donc deux relations entre `Parent` et `Child` :

1. Une relation **Many-To-Many** : Un `Parent` peut avoir plusieurs `Child`, un `Child` _appartient_ à plusieurs `Parent`.
2. Une relation **One-To-Many** : Un `Parent` a **un seul** `Child` préféré, un `Child` peut être l'enfant préféré de plusieurs `Parent`.

```cs showLineNumbers
public class Parent{
    public int Id { get; set; }
    public string Name { get; set; } = null!;

    [InverseProperty("Parents")]
    public virtual List<Child> Children { get; set; } = new List<Child>();

    [InverseProperty("FavoriteChildOf")]
    public virtual Child FavoriteChild { get; set; } = null!;
}
```

```cs showLineNumbers
public class Child{
    public int Id { get; set; }
    public string Name { get; set; } = null!;

    [InverseProperty("Children")]
    public virtual List<Parent> Parents { get; set; } = new List<Parent>();

    [InverseProperty("FavoriteChild")]
    public virtual List<Parent> FavoriteChildOf { get; set; } = new List<Parent>();
}
```

:::note

On remarque l'usage de l'annotation `[InverseProperty("NomDeLaPropriétéInverse")]` au-dessus des **propriétés de navigation**. Cette annotation sert à désigner quelle propriété de l'autre classe est associée à celle précédée de cette annotation. Sans cette annotation, **Entity Framework** n'aurait pas su si `Parents` (dans la classe `Child`) était associée à `Children` ou bien à `FavoriteChild`. (Dans la classe `Parent`)

Bien entendu, d'un point de vue sématique 🧐, les noms des propriétés peuvent nous aider, nous, humains, à comprendre quelles propriétés s'agencent ensemble.

:::


### 🌀 Objets JSON infinis

:::danger

Lorsqu'une **action** du serveur retournera un objet qui possède une relation avec un autre groupe, cela générera un **objet JSON infini**. Il faut donc utiliser l'annotation `[JsonIgnore]` stratégiquement pour éviter les **cycles** dans les objets JSON. Un exemple est abordé ci-dessous. 

:::

Reprenons l'exemple **One-To-Many** suivant :
« Un `Post` peut avoir plusieurs `Comment`. Un `Comment` est associé à un seul `Post`. »

<Tabs>
    <TabItem value="cs1" label="Classe Post" default>
        ```cs showLineNumbers
        public class Post{
            public int Id { get; set; }
            public string Text { get; set; } = null!;
            public virtual List<Comment> Comments { get; set; } = new List<Comment>(); // Propriété de navigation (liste !)
        }
        ```
    </TabItem>
    <TabItem value="cs2" label="Classe Comment">
        ```cs showLineNumbers
        public class Comment{
            public int Id { get; set; }
            public string Text { get; set; } = null!;
            public virtual Post Post { get; set; } = null!; // Propriété de navigation
        }
        ```
    </TabItem>
</Tabs>

Si une action quelconque dans un contrôleur retourne un `Post` qui possède un `Comment` (pour garder ça simple), à cause des **propriétés de navigation** `Comments` et `Post`, voici l'**objet JSON** qui sera généré :

```json showLineNumbers
{
    id : 1,
    text : "Salut les amis",
    comments : [
        {
            id : 1,
            text : "Ça va ?"
            post : {
                id : 1,
                text : "Salut les amis",
                comments : [
                    {
                        id : 1,
                        text : "Ça va ?"
                        post : {
                            id : 1,
                            text : "Salut les amis",
                            comments : [
                                {
                                    id : 1,
                                    text : "Ça va ?"
                                    post : {
                                        // etc ... à l'infini 💀
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}
```

Comment **briser le cycle** ? En utilisant l'annotation `[JsonIgnore]` au-dessus de **l'une des deux propriétés de navigation**. (Ou bien les deux... mais à ce moment impossible d'avoir un `post` ET ses `comment` simultanément)

Dans cette situation, on pourrait mettre l'annotation dans la classe `Comment` :

```cs showLineNumbers
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization; // Assurez-vous d'utiliser cette librairie et non Newtonsoft !

public class Comment{
    public int Id { get; set; }
    public string Text { get; set; } = null!;

    [JsonIgnore]
    public virtual Post Post { get; set; } // Propriété de navigation
}
```

Désormais, retourner le JSON d'un `Post` impliquera aussi ses `Comment`, mais `Comment` retourné ne contiendra pas son `Post`. 

## 📦 Data-Transfer Objects

Parfois les données qu'on souhaite envoyer au serveur ne correspondent pas exactement à la structure d'un model du serveur. Dans ce cas, l'action `Post` auto-générée lors de la création d'un contrôleur ne convient pas.

Quelques exemples :

* On souhaite envoyer et créer **deux objets** simultanément. (Sachant qu'il est impossible d'envoyer deux `body` dans la requête `Post`)
* On souhaite envoyer un **objet** et une **liste d'`ids`** qui représente ses relations.
* On souhaite envoyer un **objet** et un **fichier image**.

Reprenons l'exemple **Many-To-Many** suivant : 

« Un `Ingredient` peut faire partie de plusieurs `Recipe`. Une `Recipe` peut contenir plusieurs `Ingredient`. »

<Tabs>
    <TabItem value="cs1" label="Classe Ingredient" default>
        ```cs showLineNumbers
        public class Ingredient{
            public int Id { get; set; }
            public string Name { get; set; } = null!;
            public virtual List<Recipe> Recipes { get; set; } = new List<Recipe>(); // Propriété de navigation
        }
        ```
    </TabItem>
    <TabItem value="cs2" label="Classe Recipe">
        ```cs showLineNumbers
        public class Recipe{
            public int Id { get; set; }
            public string Name { get; set; } = null!;
            public virtual List<Ingredient> Ingredients { get; set; } = new List<Ingredient>(); // Propriété de navigation
        }
        ```
    </TabItem>
</Tabs>

Lorsqu'on souhaiter créer (`Post`) une `Recipe`, ce qu'on doit envoyer au serveur, c'est ... :

* Un `string` (le name `Name`)
* Une `List<int>` (l'`id` de chaque `Ingredient` faisant partie de cette `Recipe`)

Or, aucun modèle ne correspond à la combinaison de ces deux types. La solution est donc de créer une autre **classe** qui servira exclusivement à **transférer des données entre le client et le serveur**, d'où le nom **Data Transfer Object**.

<center>![Classe Data transfer object](../../static/img/cours15/dto1.png)</center>

```cs showLineNumbers
public class RecipeDTO
{
    public string Name { get; set; } = null!;
    public List<int> IngredientIds { get; set;} = new List<int>();
}
```

**Côté serveur**, on aura une action `Post` qui recevra un objet de ce type :

```cs showLineNumbers
[HttpPost]
public async Task<ActionResult> PostRecipe(RecipeDTO recipeDTO){
    ...
}
```

**Côté client**, on lancera une requête `Post` dont le corps sera un objet avec une **structure identique** ⚠ :

```ts showLineNumbers
async createRecipe(ids : number[], recipeName : string){

    // Ceci est un « objet anonyme », mais comme sa structure est identique au DTO, ça fonctionne.
    let recipeDTO = {
        name : recipeName,
        ingredientIds : ids
    }

    let x = await lastValueFrom(this.http.post<any>("https://localhost:6969/api/Recipes/PostRecipe", recipeDTO));
    console.log(x);
    ...
}
```

:::info

Pourquoi avoir utilisé un **objet anonyme** plutôt qu'avoir créé un modèle `export class RecipeDTO ...` ? Créer un modèle aurait été tout à fait acceptable. (C'est même plus propre !) Cela dit, généralement, un **DTO** risque d'avoir une utilité très limitée (utilisé à un ou deux endroits ?) alors se contenter d'un **objet anonyme** créé sur le pouce est acceptable. Si par contre on finit par utiliser le `RecipeDTO` à plusieurs endroits, vaut mieux en faire un modèle !

:::

## 💋 Gestion de relations

### 🥚 Création

### 💣 Suppression

## ⚙ Services

### 💉 Injection

### 🔍 Exemples