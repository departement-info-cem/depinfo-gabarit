# Cours 7 - Stockage, i18n, token

### 💾 Stockage local

🧹 Tel que vu au cours 6, si on réinitialise la page Web lorsque notre application Angular est en exécution, toutes les données (contenu des variables) sont perdues.

⚙ Même le cycle de vie spécial des **services** ne permet pas de faire perdurer certaines données.

💡 C'est là que le **stockage local** et le **stockage de session** entrent en jeu ! Ces deux types
de stockage permettent de sauvegarder des données <u>dans le navigateur du client</u>.

* Le stockage local est **permanent**. Il ne se nettoie jamais par lui-même.
* Le stockage de session est **temporaire**. Il se nettoie lorsque le navigateur est fermé.

#### 📜 Sauvegarder une donnée de type `string`

Cette opération peut être exécutée dans la fonction TypeScript de votre choix.

```ts showLineNumbers
export class AppComponent{
    
    guestName : string = "";

    myFunctionToSaveSomeThings() : void{

        sessionStorage.setItem("username", this.guestName); // Stockage de session
        localStorage.setItem("nameOfTheUser", this.guestName); // Stockage local

    }

}
```

Pour les deux types de stockages, il suffit d'un paramètre servant de **clé** (vous pouvez
lui donner le nom de votre choix, mais assurez-vous que ce nom soit unique) et un deuxième
paramètre qui contient la **donnée** à sauvegarder.

`sessionStorage` et `localStorage` sont deux outils accessibles depuis n'importe quel
**composant** ou **service**. Pas besoin d'injection de dépendance ou d'importation
pour que ces deux outils fonctionnent.

#### 📫 Récupérer une donnée de type `string`

Cette opération est _généralement_ effectuée dans la fonction `ngOnInit()`, puisqu'on
souhaite accéder à certaines données dès le chargement d'un composant.

Il suffit de préciser **la clé** de la donnée à récupérer en paramètre.

```ts showLineNumbers
export class AppComponent implements OnInit{
    
    guestName : string | null = null;
    guestName2 : string | null = null;

    ngOnInit() : void{

        this.guestName = sessionStorage.getItem("username");
        this.guestName2 = localStorage.getItem("nameOfTheUser");

    }

}
```

:::warning

Comme la fonction `getItem()` retourne une donnée de type `string` ou `null` (puisqu'il n'y
a pas forcément une donnée avec la clé demandée), la variable dans laquelle on glisse la donnée
doit pouvoir être `null`.

:::

#### 💾📦 Sauvegarder une donnée d'un autre type que `string`

Pour toute autre donnée qu'un `string`, il faudra « stringifier » (convertir en `string`) la
donnée avant de la ranger grâce à `JSON.stringify(...)`. Ceci s'applique pour les `boolean`, `number`, tableau, objet personnalisé, etc.

```ts showLineNumbers
export class AppComponent{
    
    guestData : Guest | null = null;
    guestFavs : number[] = [];

    myFunctionToSaveSomeThings() : void{

        if(this.guestData != null){
            localStorage.setItem("guest", JSON.stringify(this.guestData));
        }
        localStorage.setItem("favs", JSON.stringify(this.guestFavs));

    }

}
```

#### 📫📦 Récupérer une donnée d'un autre type que `string`

Puisque la donnée que nous allons récupérer dans le stockage local a été convertie en `string`,
nous allons devoir la **reconvertir** en son type d'origine lorsqu'on la récupère grâce à `JSON.parse(...)`.

```ts showLineNumbers
export class AppComponent implements OnInit{
    
    guestData : Guest | null = null;

    ngOnInit() : void{

        // Récupérer la donnée qui est sous forme de string (ou inexistante)
        let guestStringData : string | null = localStorage.getItem("guest");

        if(this.guestStringData != null){
            // Reconvertir la donnée en son type d'origine
            this.guestData = JSON.parse(guestStringData);
        }

    }

}
```

:::warning

Remarquez qu'il a fallu procéder en **deux étapes** pour valider qu'une donnée existait avec la
clé demandée avant de la reconvertir en son type d'origine et la stocker dans notre variable
de classe.

:::

#### 🚮 Supprimer des données du stockage local

Que ce soit pour le stockage de session ou le stockage local, il est possible de supprimer
manuellement certaines données si on connait leur **clé** grâce à `removeItem(...)`.

```ts
localStorage.removeItem("preferredLanguage");
```

Si on souhaite vider le stockage **en entier**, on peut prendre le 🐂 par les cornes à
l'aide de `clear()` :

```ts
localStorage.clear();
```

#### 🔍 Vérifier le stockage local dans le navigateur

