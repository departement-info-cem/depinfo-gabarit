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

Il y a quelques idées à garder à l'esprit lorsqu'on souhaite sécuriser notre application Web :

* 🖥 Inutile de tenter de sécuriser l'application Angular ! Tout son code sera accessible à l'utilisateur de toute façon. **La sécurité passe par le serveur**.

* 🎁 Tout ce que le serveur retourne (sous forme de JSON) est accessible aux utilisateurs. (Que les données soient affichées par Angular ou non)

* 📶 N'importe qui peut envoyer n'importe quelle requête avec n'importe quels paramètres ! Certains outils comme le logiciel **Postman** rendent cela très simple.

### 🩲 Oversharing

Lorsqu'on retourne des données à l'application cliente, il faut faire attention au **oversharing**. (Transmettre plus de données que nécessaire)

Par exemple, disons que mon serveur retourne une liste de `Comment` :

```cs showLineNumbers
public class Comment{

    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public User Author { get; set; } = null!; // Danger ! Oversharing !
}
```

On a un problème : même si les données du `User Author` (numéro de téléphone, adresse courriel, hachage de mot de passe, etc.) ne sont pas toutes affichées avec le commentaire côté Angular, **elles ont quand même été envoyées au client et sont donc vulnérables**.

La solution est plutôt simple dans cette situation : utiliser `[JsonIgnore]` :

```cs showLineNumbers
public class Comment{

    public int Id { get; set; }
    public string Text { get; set; } = null!;

    [JsonIgnore]
    public User Author { get; set; } = null!;
}
```

:::note

Si jamais on souhaitait toutefois bel et bien envoyer certaines données de l'utilisateur pour les afficher (comme son `UserName`), il suffit de produire un `DTO` tel qu'abordé un peu plus haut dans ce cours.

:::

### 👮‍♂️ Access control

Que ce soit lors d'un `Get`, `Post`, `Put` ou `Delete`, il faut parfois vérifier **qui envoie la requête** pour s'assurer que cet utilisateur soit autorisé à manipuler les données.

Rappelez-vous de cette précieuse ligne de code pour déterminer **🕵️‍♂️ qui envoie la requête** (Utilisable dans un contrôleur) : 

```cs
User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
```

Bien entendu, si aucun token n'est fourni, `user` sera `null`.

:::warning

Pour pouvoir utiliser cette ligne de code, il faut avoir injecté `UserManager` dans son contrôleur. Cette classe fait office de « `UserService` » et existe déjà grâce à la librairie **Identity**.

:::

Tous les exemples qui suivent seront abordés **avec service** puisqu'ils vous serviront durant les **TPs**.

#### 📬 GET

Pour les actions de type `GET`, généralement utiliser une **propriété de navigation** ou encore effectuer un `.Where(...)` en se servant du pseudonyme de l'utilisateur qui envoie la requête permettra de s'assurer que seuls les utilisateurs autorisés ont accès à une donnée.

```cs showLineNumbers
[HttpGet]
public async Task<ActionResult<IEnumerable<Comment>>> GetMyComments()
{
    // Qui envoie la requête ?
    User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    if (user == null) return Unauthorized(); // Non authentifié ou token invalide

    return user.Comments; // Propriété de navigation utilisée
}
```

#### 📦 POST

En général, il n'y a pas vraiment de risque en terme d'**access control** lorsqu'on essaye de créer une nouvelle donnée. Assurez-vous simplement de bien **concrétiser le lien entre la donnée et l'utilisateur** qui la crée au cas où on souhaiterait limiter l'accès aux données plus tard.

Bien entendu, pour empêcher un utilisateur non authentifié de créer une donnée, `[Authorize]` règle le problème.

**⚙ Contrôleur :**

```cs showLineNumbers
[HttpPost]
public async Task<ActionResult<Comment>> PostComment(Comment comment)
{
    User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    if (user == null) return Unauthorized(); // Non authentifié ou token invalide

    // ✅ Le lien entre l'utilisateur est concrétisé par cette propriété de navigation !
    comment.User = user; // ou encore -> user.Comments.Add(comment);

    Comment? newComment = await _commentService.CreateComment(comment);

    if(newComment == null) return StatusCode(StatusCodes.Status500InternalServerError,
        new { Message = "Veuillez réessayer plus tard." }); // Problème avec la BD ?

    return Ok(newComment);
}
```

**🧰 Service :**

```cs showLineNumbers
public async Task<Comment?> CreateComment(Comment comment)
{
    if (IsCommentSetEmpty()) return null;

    _context.Comment.Add(comment);
    await _context.SaveChangesAsync();

    return comment;
}
```

#### 🚮 DELETE

Le problème potentiel est plutôt évident : on ne veut pas permettre à n'importe qui de supprimer une donnée !

**⚙ Contrôleur :**

```cs showLineNumbers
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteComment(int id)
{
    // Utilisateur qui fait la requête
    User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    // Commentaire à supprimer
    Comment? comment = await _commentService.GetComment(id);

    // Si le commentaire n'est pas trouvé
    if (comment == null) return NotFound();

    // 🛑 Si l'utilisateur n'est PAS propriétaire du commentaire
    if (user == null || !user.Comments.Contains(comment)) return Unauthorized(new {Message = "Hey touche pas, c'est pas à toi !"});

    // Supprimer le commentaire du DbContext
    Comment? deletedComment = await _commentService.DeleteComment(comment);

    if(deletedComment == null) return StatusCode(StatusCodes.Status500InternalServerError,
        new { Message = "Veuillez réessayer plus tard." }); // Problème avec la BD ?

    return Ok(new {Message = "Commentaire supprimé."});
}
```

**🧰 Service :**

```cs showLineNumbers
public async Task<Comment?> DeleteComment(Comment comment)
{
    if (IsCommentSetEmpty()) return null;

    _context.Remove(comment);
    await _context.SaveChangesAsync();
    return comment;
}
```

#### 📝 PUT

Avec un `Put`, il y a deux enjeux à surveiller :

**1 - ✋ Empêcher certains utilisateurs de modifier des données qui ne leur appartiennent pas.**

**⚙ Contrôleur :**

```cs showLineNumbers
[HttpPut("{id}")]
public async Task<IActionResult> PutComment(int id, Comment comment)
{
    User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    if (id != comment.Id) return BadRequest();

    Comment? oldComment = await _commentService.GetComment(id);

    if (oldComment == null) return NotFound();

    // 🛑 Utilisateur pas propriétaire du commentaire ?
    if(user == null || !user.Comments.Contains(oldComment)) return Unauthorized(new { Message = "Hey touche pas, c'est pas à toi !"});

    Comment? newComment = await _commentService.UpdateComment(id, comment);

    if(newComment == null) return StatusCode(StatusCodes.Status500InternalServerError,
        new { Message = "Veuillez réessayer plus tard." }); // Problème avec la BD ?

    return Ok(new {Message = "Commentaire modifié", Comment = newComment });
}
```

**🧰 Service :**

```cs showLineNumbers
public async Task<Comment?> UpdateComment(int id, Comment comment)
{
    if(IsCommentSetEmpty()) return null;

    // Important car on a déjà sorti le commentaire de la BD plus tôt
    _context.ChangeTracker.Clear();

    // On remplace l'ancien commentaire avec l'id (int id) par le (Comment comment) reçu
    _context.Entry(comment).State = EntityState.Modified;

    try
    {
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!await _context.Comment.AnyAsync(x => x.Id == id)) return null; // Commentaire n'existe plus ?
        else throw; // Erreur avec la BD
    }

    return comment;
}
```

**2 - ✏ Empêcher les utilisateurs de modifier certaines propriétés jugées immuables.**

En utilisant, par exemple, un **DTO** pour limiter les données qui sont reçues pour modifier la donnée, on peut empêcher les utilisateurs de modifier les propriétés qu'on juge immuables. (Ex : empêcher de changer l'auteur d'un `Comment`, le nombre d'upvotes, etc.)

**⚙ Contrôleur :**

```cs showLineNumbers
[HttpPut("{id}")]
public async Task<IActionResult> PutComment(EditCommentDTO editCommentDTO)
{
    User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    Comment? oldComment = await _commentService.GetComment(editCommentDTO.Id);

    if (oldComment == null) return NotFound();

    // 🛑 Utilisateur pas propriétaire du commentaire ?
    if(user == null || !user.Comments.Contains(oldComment)) return Unauthorized(new { Message = "Hey touche pas, c'est pas à toi !"});

    Comment? newComment = await _commentService.UpdateComment(editCommentDTO.NewText, comment);

    if(newComment == null) return StatusCode(StatusCodes.Status500InternalServerError,
        new { Message = "Veuillez réessayer plus tard." }); // Problème avec la BD ?

    return Ok(new {Message = "Commentaire modifié", Comment = newComment });
}
```

**🧰 Service :**

```cs showLineNumbers
public async Task<Comment?> UpdateComment(string newText, Comment comment)
{
    if(IsCommentSetEmpty()) return null;

    // ⛔ On remplace SEULEMENT la propriété modifiable plutôt que de remplacer la donnée en entier.
    comment.Text = newText;

    try
    {
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!await _context.Comment.AnyAsync(x => x.Id == id)) return null; // Commentaire n'existe plus ?
        else throw; // Erreur avec la BD
    }

    return comment;
}
```

## 🌱 Seed

Préparer un **seed** permet de peupler la base de données avec un **🎲 jeu de données** initial.

* Permet de créer des tests pour l'application.
* Accélère les tests manuels.

:::warning

Notez qu'à chaque fois que le seed est modifié, **une migration doit être générée** et **la base de données doit être mise à jour**.

Commandes : `dotnet ef migrations add nomDeLaMigration` et `dotnet ef database update`

:::

**1 - 🌱 Redéfinir la méthode `OnModelCreating` dans le `DbContext`**

```cs showLineNumbers
public class serveur16Context : IdentityDbContext<User>
{
    public serveur16Context(DbContextOptions<serveur16Context> options) : base(options){}

    // Ici
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder); // Conservez cette ligne de code en tout temps
    }

    public DbSet<Comment> Comment { get; set; }
}
```

**2 - 📦 Ajouter les données de test**

**👤 Modèle sans relation**

```cs showLineNumbers
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);

    builder.Entity<Comment>().HasData(new Comment()
    {
        Id = 1,
        Text = "Ce film a eu la pire note de l'histoire de IMDb",
        IsReported = false
    });
}
```

**👥 Deux modèles sans relation**

```cs showLineNumbers
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);

    builder.Entity<Comment>().HasData(
    new Comment(){
        Id = 1, Text = "Ce film a eu la pire note de l'histoire de IMDb", IsReported = false
    },
    new Comment(){
        Id = 2, Text = "N'allez pas à ce McDonalds, mon fils a attrapé la covid dans la piscine à balles.", IsReported = false
    });
}
```

**🧑👧 Utilisateur**

```cs showLineNumbers
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);

    // Préparation de l'utilisateur
    PasswordHasher<User> hasher = new PasswordHasher<User>(); // Si plusieurs utilisateurs, pas besoin de dupliquer cette ligne
    User u1 = new User{
        Id = "11111111-1111-1111-1111-111111111111", // Format GUID à respecter (8-4-4-4-12)
        UserName = "Bob69",
        Email = "bobibou@mail.com",
        NormalizedUserName = "BOB69", // Important
        NormalizedEmail = "BOBIBOU@MAIL.COM" // Important
    };

    // Hachage du mot de passe et ajout de l'utilisateur au seed
    u1.PasswordHash = hasher.HashPassword(u1, "Salut1!");
    builder.Entity<User>().HasData(u1);
}
```

:::tip

Si on souhaitait ajouter un 2e utilisateur dans le seed, sont `Id` pourrait être `11111111-1111-1111-1111-111111111112`.

Un `Id` d'utilisateur peut seulement contenir des symboles hexadécimaux, c'est-à-dire de 0 à 9 et de A à F.

:::

**🍒 Relation One-To-Many**

Sachant que :

* Le modèle `User` possède une liste de `Comment` nommée `Comments`.
* Le modèle `Comment` possède un `User` nommé `Author`.

```cs showLineNumbers
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);

    // Le Modèle One-To- doit être créé AVANT pour que son id existe.
    PasswordHasher<User> hasher = new PasswordHasher<User>(); // Si plusieurs utilisateurs, pas besoin de dupliquer cette ligne
    User u1 = new User{
        Id = "11111111-1111-1111-1111-111111111111", // Format GUID à respecter (8-4-4-4-12)
        UserName = "Bob69",
        Email = "bobibou@mail.com",
        NormalizedUserName = "BOB69", // Important
        NormalizedEmail = "BOBIBOU@MAIL.COM" // Important
    };

    // Hachage du mot de passe et ajout de l'utilisateur au seed
    u1.PasswordHash = hasher.HashPassword(u1, "Salut1!");
    builder.Entity<User>().HasData(u1);

    // Le modèle -To-Many doit être créé APRÈS pour avoir accès à l'id du One-To- (créé plus haut)
    builder.Entity<Comment>().HasData(new
    {
        Id = 1,
        Text = "Ce film a eu la pire note de l'histoire de IMDb",
        IsReported = false,
        AuthorId = u1.Id // Remarquez u1.Id ! C'est ici que la relation est concrétisée
    });
}
```

Remarquez la structure de la classe `Comment` :

```cs showLineNumbers
public class Comment{

    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public bool IsReported { get; set; }

    [JsonIgnore]
    public User Author { get; set; } = null!;
}
```

:::info

Remarquez deux détails très importants :

* Au lieu de `new Comment(){ ... }`, on a simplement utilisé `new{ ... }`. Cela permet d'utiliser des noms de propriétés **qui n'existent pas dans la classe** telle que `AuthorId`.

* Dans la classe `Comment`, la propriété `AuthorId` n'existe pas, alors pourquoi on a utilisé ce nom ? Car **EntityFramework**, en créant la table `Comment`, va retirer la **propriété de navigation** nommé `Author` et va ajouter une colonne qui **combine le nom `Author` et `Id`**, ce qui donne `AuthorId`.

:::

**🍇 Relation Many-To-Many**

Cette fois-ci :

* Le modèle `Comment` possède une liste de `User` nommée `Upvoters`.
* Le modèle `User` possède une liste de `Comment` nommée `UpvotedComments`.

```cs showLineNumbers
protected override void OnModelCreating(ModelBuilder builder)
{
    base.OnModelCreating(builder);

    // Utilisateur
    PasswordHasher<User> hasher = new PasswordHasher<User>(); // Si plusieurs utilisateurs, pas besoin de dupliquer cette ligne
    User u1 = new User{
        Id = "11111111-1111-1111-1111-111111111111", // Format GUID à respecter (8-4-4-4-12)
        UserName = "Bob69",
        Email = "bobibou@mail.com",
        NormalizedUserName = "BOB69", // Important
        NormalizedEmail = "BOBIBOU@MAIL.COM" // Important
    };
    u1.PasswordHash = hasher.HashPassword(u1, "Salut1!");
    builder.Entity<User>().HasData(u1);

    // Comment
    builder.Entity<Comment>().HasData(
    new {
        Id = 1,
        Text = "Ce film a eu la pire note de l'histoire de IMDb",
        IsReported = false,
    }, 
    new {
        Id = 2,
        Text = "N'allez pas à ce McDonalds, mon fils a attrapé la covid dans la piscine à balles.",
        IsReported = false,
    });

    // Table de liaison 
    builder.Entity<Comment>()
        .HasMany(c => c.Upvoters)
        .WithMany(u => u.UpvotedComments)
        .UsingEntity(e => {
            // Ajouter une ligne pour chaque liaison (Ici, Bob69 a upvoté les deux commentaires existants)
            e.HasData(new { UpvotersId = u1.Id, UpvotedCommentsId = 1});
            e.HasData(new { UpvotersId = u1.Id, UpvotedCommentsId = 2});
        });
}
```

:::info

Encore une fois, dans la table de liaison, on remarque que les propriétés `UpvotersId` et `UpvotedCommentsId`, **qui n'existent pas** dans nos modèles, sont tout simplement **la combinaison du nom d'une propriété de navigation existante ainsi que de `Id`**.

:::