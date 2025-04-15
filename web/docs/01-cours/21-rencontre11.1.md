# Cours 21 - Rôles et signaux

## 👮‍♀️👨‍🍳 Rôles

Identifier qui envoie la requête à l'aide de ...  
`User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);`  
... nous aide à limiter l'accès aux données, mais ce n'est pas suffisant : il faudra aussi utiliser les **rôles** pour limiter l'accès **aux actions**.

### 📦 Packages

Il n'y en a pas de nouveaux par rapport à avant ! Assurez-vous simplement que tout soit déjà installé.

<center>![Liste des packages NuGet nécessaires](../../static/img/cours16/nuget.png)</center>

:::warning

Comme toujours, assurez-vous d'utiliser la dernière version `8.X.X` pour tous les packages. (Sauf `Swashbuckle`)

:::

### 🤰 Créer un rôle

Il y plusieurs manières de le faire. Par souci de simplicité, on pourrait le faire avec **seed** :

```cs showLineNumbers
protected override void OnModelCreating(ModelBuilder builder){
    
    base.OnModelCreating(builder);

    // Rôles
    builder.Entity<IdentityRole>().HasData(
        new IdentityRole { Id = "1", Name = "admin", NormalizedName = "ADMIN" },
        new IdentityRole { Id = "2", Name = "moderator", NormalizedName = "MODERATOR" }
    );

    // Utilisateur(s)
    PasswordHasher<User> hasher = new PasswordHasher<User>();
    User u1 = new User{
        Id = "11111111-1111-1111-1111-111111111111",
        UserName = "Bob69",
        Email = "bobibou@mail.com",
        NormalizedUserName = "BOB69",
        NormalizedEmail = "BOBIBOU@MAIL.COM"
    };
    u1.PasswordHash = hasher.HashPassword(u1, "Salut1!");
    builder.Entity<User>().HasData(u1);

    // Relation entre utilisateurs et rôles
    builder.Entity<IdentityUserRole<string>>().HasData(
        new IdentityUserRole<string> { UserId = u1.Id, RoleId = "1" } // Bob69 est un admin ! Wouhou 🥳
    );

}
```

### 🔑 Inclure les rôles dans le token

On le faisait déjà ! Il suffit de continuer d'utiliser la même méthode pour la connexion :

```cs showLineNumbers
[HttpPost]
public async Task<ActionResult> Login(LoginDTO login)
{
    User? user = await _userManager.FindByNameAsync(login.Username);

    if (user != null && await _userManager.CheckPasswordAsync(user, login.Password))
    {
        // ⛔ Récupérer les rôles de l'utilisateur ⛔
        IList<string> roles = await _userManager.GetRolesAsync(user);
        List<Claim> authClaims = new List<Claim>();
        foreach (string role in roles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, role));
        }
        authClaims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));

        // Générer et chiffrer le token 
        SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes("LooOOongue Phrase SiNoN Ça ne Marchera PaAaAAAaAas !"));
        JwtSecurityToken token = new JwtSecurityToken(
            issuer: "https://localhost:6969",
            audience: "http://localhost:4200",
            claims: authClaims, // ⛔ Rôle(s) joint(s) au token !
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
            );

        // Envoyer le token à l'application cliente sous forme d'objet JSON
        return Ok(new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token),
            validTo = token.ValidTo
        });
    }
    else
    {
        return StatusCode(StatusCodes.Status400BadRequest,
            new { Message = "Le nom d'utilisateur ou le mot de passe est invalide." });
    }
}
```

### 🔒 Limiter l'accès aux actions

Pour limiter l'usage d'une action (donc d'une requête) à certains rôles, on utilise l'annotation `[Authorize(Roles = "...")]`.

Il faut être **admin** 👑 pour utiliser cette action : 

```cs showLineNumbers
[HttpGet]
[Authorize(Roles = "admin")]
public async Task<IActionResult> DoSomethingSus(){
    ...
}
```

Il faut être admin 👑 **OU** modérateur ⚖ pour utiliser cette action : 

```cs showLineNumbers
[HttpGet]
[Authorize(Roles = "admin, moderator")]
public async Task<IActionResult> DoSomethingSus(){
    ...
}
```

Il faut être admin 👑 **ET** modérateur ⚖ pour utiliser cette action : 

```cs showLineNumbers
[HttpGet]
[Authorize(Roles = "admin")]
[Authorize(Roles = "moderator")]
public async Task<IActionResult> DoSomethingSus(){
    ...
}
``` 

On peut également vérifier le rôle d'un utilisateur **dans le code de l'action**. C'est pratique dans certaines situations.

```cs showLineNumbers
User? user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
bool isAdmin = await _userManager.IsInRoleAsync(user, "admin");

// On n'a pas le droit d'exécuter l'opération si on est NI propriétaire de l'objet, NI modérateur.
if (myObject.User != user && !isModerator) return Unauthorized();
``` 

### 🏅 Assigner un rôle

```cs showLineNumbers
[HttpPut]
[Authorize(Roles = "admin")]
public async Task<IActionResult> MakeRedactor(string username){
    
    User? newRedactor = await _userManager.FindByNameAsync(username);
    if(newRedactor == null) return NotFound(new { Message = "Cet utilisateur n'existe pas. 👻" });

    await _userManager.AddToRoleAsync(newRedactor, "redactor");
    return Ok(new { Message = username = " est maintenant rédacteur / rédactrice ! ✍" });

}
``` 

:::tip

Pour retirer un rôle, c'est très similaire :

```cs
await _userManager.RemoveFromRoleAsync(newRedactor, "redactor");
```

:::

### 🥚 Créer un rôle dynamiquement

Il faudra utiliser le `RoleManager` pour y arriver. On peut l'**injecter dans un contrôleur** exactement comme le `UserManager`.

```cs showLineNumbers
[HttpPost]
[Authorize(Roles = "admin")]
public async Task<IActionResult> PostRole(string roleName){
    
    bool roleExists = await _roleManager.RoleExistsAsync(roleName);
    if(roleExists) return BadRequest(new { Message = "Le rôle existe déjà." });

    IdentityResult result = await _roleManager.CreateAsync(new IdentityRole { Name = rolename});
    if(result.Succeeded) return Ok(new { Message = "Rôle " + roleName + " créé !" });
    else return BadRequest(new { Message = "La création du rôle a échoué." });

}
```

### 🙈 Cacher des bidules côté Angular si on n'a pas un rôle

## 📶 Signaux


