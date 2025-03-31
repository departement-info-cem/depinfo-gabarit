# Cours 17 - Retours, sécurité, seed

## 📬 Retours

En général, les actions des contrôleurs retournent le type `Task<IActionResult>` ou `Task<IActionResult<T>>`. Ça peut sembler vague.

* `Task<T>` signifie simplement que la méthode est asynchrone. (Comme les fonctions qui retournent `Promise<T>` en **TypeScript**)
* `IActionResult` est un interface implémenté par de nombreuses classes, ce qui permet de retourner une panoplie de choses différentes avec une action.

### 🔮 Retours possibles

**📦 Retourner des simples données JSON**

Lorsqu'on souhaite simplement retourner des données, on a deux options :

1. Simplement retourner la donnée. (Fonctionne si le type de retour de la méthode est `Task<IAction<TypeDeMaDonnée>>`)

> `return maListe;`

2. Retourner la donnée avec `Ok(...)`

> `return Ok(maListe);`

Ces deux manières de procéder sont **identiques en pratique**. Elle corresponde toutes les code à un **code 200**, qui signifie **✅ réussite** de la requête. Vous êtes toutefois encouragés à utiliser `Ok(...)` puisque c'est un peu plus **explicite**.

Si on vient de `Post` une donnée et qu'on souhaite la retourner pour montrer à l'application cliente ce qui vient d'être créé, on peut utiliser `Created(...)`

> `return Created(maNouvelleDonnee);`

Cela retourne un **code 201**, qui signifie la **✅ réussite** d'une requête avec création de donnée. Vous pouvez utiliser ceci dans ce cours si vous souhaitez être plus spécifique, mais ce n'est pas obligatoire.

**🌌 Retourner... rien ?**

Si on n'a rien de particulier à retourner (ex : une requête `Put` ou `Delete` qui a réussi), on peut utiliser `NoContent()`.

> `return NoContent();` 

Cela retourne un **code 204**, qui veut dire **✅ réussite** sans retour particulier.

**❌ Retourner une erreur**

Selon le type d'erreur, il existe plein de retours possibles. De plus, bien que ce soit optionnel, n'hésitez pas à glisser un **message d'erreur** en créant un objet JSON sur le pouce directement dans l'objet retourné.

* 🔍 Donnée inexistante, recherche non fructueuse, action inexistante, etc. (**code 404**) :

> `return NotFound(new { Message = "Aucune donnée n'a été trouvée."});`

* 🕵️‍♂️ Utilisateur non authentifié ou aucun utilisateur trouvé (**code 401**) :

> `return Unauthorized(new { Message = "Connectez-vous d'abord."});`

* 🔒 Utilisateur authentifié mais non autorisé à réaliser une opération (**code 403**) :

> `return Forbid(new { Message = "Hey hey tu n'as pas le droit de faire ça."});`

* ❓ Requête inadéquate (**code 400**) Paramètres inadéquats, requête envoyée au mauvais moment, etc.

> `return BadRequest(mew { Message = "Cette opération n'est pas possible."});`

* 🐞 Problème interne en lien avec le serveur. (**code 500 à 511**) Base de données ne répond pas, action non implémentée, stockage insuffisant, etc.

> `return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Une erreur est survenue. Veuillez réessayer le siècle prochain."});`

:::note

Bien entendu, il existe beaucoup d'autres retours possibles, mais ceux-ci couvrent déjà l'essentiel pour ce cours.

:::

### 🎁 Data-Transfer Objects

Nous avons abordé les **DTOs** dans le contexte où on souhaite envoyer de l'information depuis le client **vers le serveur**, mais il est également possible de faire l'inverse : créer un **DTO** pour envoyer des données **vers le client**.

Voici un exemple de classe qui **n'est pas adaptée pour être envoyée au client telle quelle** :

```cs showLineNumbers
public class Comment{

    public int Id { get; set; }
    public string Text { get; set; } = null!;
    
    [InverseProperty("Comments")]
    public User Author { get; set; } = null!;

    [InverseProperty("Upvotes")]
    public List<User> Upvoters { get; set; } = new List<User>();

    [InverseProperty("Downvotes")]
    public List<User> Downvoters { get; set; } = new List<User>();
}
```

Il y a trois propriétés inadéquates :

* On aimerait envoyer le **pseudo de l'auteur (`string`)** plutôt que `User` en entier.
* On aimerait envoyer le **nombre d'upvotes (`int`)** plutôt que la liste des `User` qui ont upvoté.
* On aimerait envoyer le **nombre de downvotes (`int`)** plutôt que la liste des `User` qui ont downvoté.

On produit donc un **DTO** qui contiendra les données adaptées :

```cs showLineNumbers
public class CommentDisplayDTO{

    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public string Author { get; set; } = null!;
    public int Upvotes { get; set; }
    public int Downvotes { get; set; }

    public CommentDisplayDTO(Comment comment){
        Id = comment.Id;
        Text = comment.Text;
        Author = comment.User.UserName;
        Upvotes = comment.Upvoters.Count;
        Downvotes = comment.Downvotes.Count;
    }
}
```

N'hésitez pas à ajouter un constructeur. Par exemple, dans ce cas, ça simplifiera (et ça centralisera) la conversion de `Comment` en `CommentDisplayDTO`.

:::tip

Vous pouvez utiliser le suffixe `DisplayDTO` plutôt que `DTO` (par exemple) si vous souhaitez pouvoir différencier facilement vos deux types de **DTOs**. (Ceux pour envoyer des données **vers le serveur** VS ceux pour envoyer des données **vers le client**)

:::

Une **action** qui retournerait une liste de `CommentDisplayDTO` pourrait procéder comme ceci :

```cs showLineNumbers
[HttpGet]
public async Task<ActionResult<IEnumerable<CommentDisplayDTO>>> GetAllComments(){

    IEnumerable<Comment> comments = await _context.Comment.ToListAsync();

    // Conversion de la liste de Comment en liste de CommentDisplayDTO
    return Ok(comments.Select(c => new CommentDisplayDTO(c)));

}
```

**Côté Angular**, le modèle pourrait tout simplement ressembler à ceci :

```ts showLineNumbers
export class Comment{

    constructor(
        public id : number,
        public text : string,
        public author : string,
        public upvotes : number,
        public downvotes : number
    ){}

}
```

## 🔒 Sécurité

### 🩲 Données de l'utilisateur

### 👮‍♂️ Protéger les objets

## 🌱 Seed

