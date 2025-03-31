# Cours 17 - Retours et sécurité

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

## 🔒 Sécurité

### 🩲 Données de l'utilisateur

### 👮‍♂️ Protéger les objets

## 🌱 Seed

