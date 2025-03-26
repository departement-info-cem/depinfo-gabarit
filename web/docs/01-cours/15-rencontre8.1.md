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
    public virtual List<Comment> Comments { get; set; } // Propriété de navigation (liste !)
}
```

Un `Comment` est associé à un seul `Post`.

```cs showLineNumbers
public class Comment{
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public virtual Post Post { get; set; } // Propriété de navigation
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

### 💋 Gestion de relations

## ⚙ Services

### 💉 Injection

### 🔍 Exemples