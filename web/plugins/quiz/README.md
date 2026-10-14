# Plugin Quiz

Plugin Docusaurus permettant d'animer des quiz en direct (façon Wooclap/Kahoot) :
un·e enseignant·e démarre une session à partir d'un fichier de questions (markdown ou JSON), les
étudiant·e·s la rejoignent avec un code, et un classement se met à jour après
chaque question en fonction de la rapidité des bonnes réponses.

Aucun serveur à déployer : la communication se fait en pair-à-pair (WebRTC, via
[PeerJS](https://peerjs.com/)) directement entre le navigateur de l'enseignant·e
(qui agit comme hôte de la partie) et ceux des étudiant·e·s. C'est donc
compatible tel quel avec un hébergement 100% statique comme GitHub Pages.

> PeerJS a seulement besoin d'un petit service de « courtage » pour que les
> navigateurs se découvrent au tout début (avant que la connexion directe
> pair-à-pair ne s'établisse). Par défaut, ce plugin utilise le serveur de
> courtage public et gratuit fourni par PeerJS (`0.peerjs.com`) : rien à
> installer ni à héberger. Voir « Aller plus loin » ci-dessous pour héberger son
> propre serveur de courtage si besoin.

## Mise en place

1. Installer les dépendances (déjà ajoutées à `package.json`) : `peerjs`.
2. Déclarer le plugin dans `docusaurus.config.js` (déjà fait) :

   ```js
   plugins: [
     [require.resolve("./plugins/quiz"), {}],
   ],
   ```

3. Déposer les fichiers de questions dans `static/quiz/` (voir `static/quiz/exemple.md`).

4. Utiliser le composant dans une page ou un document :

   ```mdx
   <Quiz file="/quiz/exemple.md" />
   ```

   Un sélecteur permet ensuite de choisir le mode « enseignant » ou « étudiant ».
   Le mode enseignant charge le fichier de questions et affiche un code à
   partager (ex. `48213`) ; le mode étudiant permet de rejoindre avec ce code
   et un pseudonyme.

   Un troisième bouton, « Mode solo », permet de réviser seul·e (voir plus bas).

## Mode solo (révision)

Le mode solo permet à un·e étudiant·e de refaire le quiz seul·e, à son rythme,
pour réviser : aucune connexion ni code de session, aucun chronomètre. Après
chaque réponse, la bonne réponse est montrée aussitôt. À la fin, le résultat
s'affiche (ex. « 3 / 5 bonnes réponses ») avec deux boutons : réessayer
seulement les questions ratées, ou recommencer tout le quiz.

## Fonctionnement

- L'enseignant·e ouvre la page en mode « enseignant » : son navigateur charge
  le fichier de questions, devient l'hôte de la partie (`Peer` PeerJS avec un
  identifiant court dérivé du code affiché) et conserve l'état du jeu (scores,
  question courante, etc.).
- Chaque étudiant·e ouvre la page en mode « étudiant », saisit le code et un
  pseudonyme : son navigateur établit une connexion pair-à-pair directe avec
  celui de l'enseignant·e.
- Les questions, réponses et mises à jour du classement transitent uniquement
  entre les navigateurs concernés, sans passer par un serveur applicatif.
- On peut rejoindre une partie déjà commencée (mais pas une partie terminée) :
  la personne arrive directement sur la question en cours, avec le temps qu'il
  reste pour y répondre, et commence avec 0 point. Si elle arrive pendant la
  révélation d'une réponse, elle voit cette révélation puis participe à la
  question suivante.
- **La partie ne dure que le temps où l'onglet de l'enseignant·e reste ouvert** :
  fermer ou rafraîchir cet onglet met fin à la session pour tout le monde.

## Retirer un·e participant·e (pseudonyme obscène)

Comme les pseudonymes sont choisis librement, l'enseignant·e peut retirer
quelqu'un de la partie. Dans la liste des participant·e·s (salle d'attente) et
dans le classement affiché après chaque question, un bouton `✕` apparaît à
droite de chaque nom ; une confirmation est demandée avant le retrait.

Le retrait a trois effets :

- la personne est immédiatement exclue de la partie (elle disparaît du
  classement, ses réponses ne comptent plus) et voit le message « Vous avez été
  retiré du quiz par l'enseignant·e » ;
- sa connexion pair-à-pair est fermée ;
- son **pseudonyme est bloqué** : revenir avec le même nom est refusé
  (« Ce pseudonyme a été bloqué par l'enseignant·e. Choisissez-en un autre. »),
  mais la personne peut rejoindre de nouveau avec un pseudonyme correct — c'est
  le but : bloquer le nom, pas la personne.

Les pseudonymes bloqués sont listés sous le classement, avec un bouton `↺` pour
lever le blocage en cas d'erreur.

> Le blocage porte sur le pseudonyme (comparé sans tenir compte de la casse ni
> des espaces autour) et sur la connexion en cours. Il n'y a pas
> d'authentification des étudiant·e·s : quelqu'un de déterminé peut revenir avec
> une variante du nom. La liste est aussi propre à la session en cours : elle
> disparaît quand l'onglet de l'enseignant·e est fermé.

## Lenteur au démarrage

La première connexion au courtier public PeerJS peut prendre quelques
secondes (jusqu'à une dizaine) : c'est normal. Un délai maximal est appliqué
(environ 12 secondes) : passé ce délai, un message d'erreur explicite s'affiche
avec un bouton pour réessayer, au lieu de rester bloqué indéfiniment sur
« Création de la session… ».

Si c'est systématiquement très lent (plusieurs dizaines de secondes) ou en
échec, c'est généralement le réseau (pare-feu du cégep/de l'école qui bride ou
bloque l'accès à `0.peerjs.com`, ou aux serveurs STUN) qui est en cause plutôt
que le plugin. Dans ce cas, voir « Aller plus loin » ci-dessous : héberger son
propre serveur de courtage sur le réseau local élimine ce round-trip Internet
et accélère nettement la connexion.

## « Lost connection to server » / reconnexions

Une fois la connexion pair-à-pair établie entre l'enseignant·e et un·e
étudiant·e, les questions/réponses transitent directement entre les deux
navigateurs : le serveur de courtage PeerJS (`0.peerjs.com`) n'est plus
nécessaire pour continuer une partie déjà en cours. Il reste toutefois utile
pour accueillir de nouvelles connexions (nouveaux·elles étudiant·e·s qui
rejoignent).

Ce canal de signalisation (basé sur une connexion WebSocket vers le courtier)
peut se couper temporairement — réseau Wi-Fi instable, changement de réseau,
onglet mis en arrière-plan (les navigateurs limitent l'activité des onglets
inactifs, ce qui peut interrompre le battement de cœur de la connexion), ou
simplement une brève coupure côté serveur public. Le plugin détecte cette
déconnexion et tente automatiquement de se reconnecter (un message
« Reconnexion au serveur de signalisation… » s'affiche pendant ce temps) sans
interrompre la partie en cours. Une erreur fatale (avec bouton « Réessayer »)
ne s'affiche que si la reconnexion échoue ou si le problème n'est pas lié au
réseau.

## Limites à connaître

- Le réseau public de PeerJS (`0.peerjs.com`) est fourni gracieusement pour des
  usages légers comme celui-ci, sans garantie de disponibilité ; il ne convient
  pas à un usage intensif ou critique.
- WebRTC a besoin de traverser les pare-feux/NAT des réseaux des
  participant·e·s. Ça fonctionne bien dans la plupart des cas (réseau Wi-Fi
  d'un cégep, réseaux domestiques), mais peut échouer (erreur « ICE failed »)
  derrière certains réseaux très restrictifs (NAT symétrique, pare-feu
  d'entreprise, machine virtuelle/conteneur avec réseau limité) : il n'y a pas
  de serveur TURN de secours configuré par défaut, car les services gratuits
  « sans inscription » qui existaient (ex. Open Relay Project) ont fermé cet
  accès public. Voir « Ajouter un serveur TURN » ci-dessous.

## « ICE failed, add a TURN server » (about:webrtc / about:webrtc-internals)

Cette erreur signifie que les deux navigateurs n'ont trouvé aucun chemin
réseau direct pour se connecter et qu'aucun TURN (relais) n'était disponible
pour prendre le relais. Trois causes fréquentes :

1. **Réseau restrictif** : NAT symétrique, pare-feu d'entreprise/cégep, ou
   environnement de test dans une machine virtuelle/conteneur dont le réseau
   est isolé (pas d'accès UDP sortant réel vers Internet). Dans ce dernier
   cas, ça échoue même en testant deux onglets sur le même `localhost`,
   puisque WebRTC a quand même besoin d'un vrai accès réseau pour négocier.
   → Tester avec un navigateur ayant un accès Internet normal (pas dans un
   environnement de développement bac à sable) est la première chose à
   vérifier.
2. **Navigateur sans accès au réseau local (macOS)** : depuis macOS 15,
   chaque application doit être autorisée à accéder au réseau local
   (Réglages Système → Confidentialité et sécurité → Réseau local). Un
   navigateur non autorisé (souvent Firefox, si Chrome l'est déjà) ne peut pas
   joindre les autres appareils, ni un autre navigateur du même ordinateur :
   la connexion échoue avec « ICE failed ». Activer l'accès puis relancer le
   navigateur.
3. **Aucun TURN configuré** : par défaut, ce plugin ne configure qu'un STUN
   (`stun:stun.l.google.com:19302`), suffisant pour la majorité des réseaux
   mais pas pour les cas ci-dessus. Voir « Ajouter un serveur TURN » ci-dessous.

## Ajouter un serveur TURN

Pour les cas où un STUN seul ne suffit pas, on peut fournir ses propres
serveurs TURN via la prop `peerOptions` du composant `<Quiz />` (ou l'option
`peerOptions` du plugin dans `docusaurus.config.js`) :

```jsx
<Quiz
  file="/quiz/exemple.md"
  peerOptions={{
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: "turn:mon-turn.example.com:3478",
          username: "...",
          credential: "...",
        },
      ],
    },
  }}
/>
```

Plusieurs fournisseurs offrent un plan gratuit avec inscription (ex.
[Metered](https://www.metered.ca/tools/openrelay/), Twilio, Xirsys) : ils
fournissent une clé d'API permettant de récupérer dynamiquement une liste
`iceServers` à jour (avec identifiants temporaires) à passer telle quelle
dans `peerOptions.config.iceServers`. On peut aussi héberger son propre TURN
avec [coturn](https://github.com/coturn/coturn).

## Aller plus loin : héberger son propre serveur de courtage PeerJS

Pour plus de fiabilité (éviter les limites du service public, ou fonctionner
derrière un réseau qui bloque `0.peerjs.com`), on peut déployer son propre
serveur de courtage avec le paquet [`peer`](https://github.com/peers/peerjs-server)
(ex. sur Render/Railway/Fly.io) et le configurer via la prop `peerOptions` du
composant `<Quiz />`, ou via l'option `peerOptions` du plugin dans
`docusaurus.config.js` :

```js
[
  require.resolve("./plugins/quiz"),
  {
    peerOptions: {
      host: "mon-serveur-peerjs.example.com",
      port: 443,
      path: "/peerjs",
      secure: true,
    },
  },
],
```

Ce serveur ne fait que la mise en relation initiale (signalisation) ; il ne
voit jamais le contenu du quiz ni les réponses, qui continuent de transiter
en pair-à-pair une fois la connexion établie.

## Format du fichier de questions

Les quiz s'écrivent de préférence en markdown (fichier `.md`) : le code s'y
écrit comme dans n'importe quelle page du site, et l'aperçu markdown de VS Code
montre le quiz tel qu'il sera affiché.

````md
---
titre: Quiz de révision
duree: 20
---

## Quelle structure de données fonctionne en LIFO ?

- [ ] File
- [x] Pile
- [ ] Arbre
- [ ] Graphe

## Que retourne cette fonction ?

<!-- duree: 30 -->

```javascript
function f(a, b) {
  return a + b;
}
f(1, 2);
```

- [ ] `1`
- [ ] `2`
- [x] `3`
- [ ] Une erreur

## Laquelle de ces boucles affiche les nombres de 0 à 4 ?

- [x] Celle-ci :

  ```csharp
  for (int i = 0; i < 5; i++) Console.WriteLine(i);
  ```

- [ ] Celle-là :

  ```csharp
  for (int i = 1; i <= 5; i++) Console.WriteLine(i);
  ```
````

- L'en-tête (entre les `---`) donne le `titre` du quiz et la `duree` par
  défaut des questions, en secondes (20 secondes si absente). Les deux sont
  optionnels ; à défaut d'en-tête, un titre `# …` sert de titre du quiz.
- Chaque titre `## …` commence une question. Tout ce qui suit jusqu'aux choix
  (texte, blocs de code avec coloration syntaxique, listes, etc.) complète
  l'énoncé.
- Les choix sont une liste de cases à cocher : `- [ ]` pour un mauvais choix,
  `- [x]` pour **la** bonne réponse (exactement une par question, au moins deux
  choix). Un choix peut contenir du markdown : `code en ligne`, ou un bloc de
  code **indenté** sous le choix pour qu'il en fasse partie.
- `<!-- duree: 30 -->`, placé dans une question, change sa durée. Ce
  commentaire est invisible dans l'aperçu markdown.
- Les `##` et `- [ ]` à l'intérieur d'un bloc de code ne sont pas interprétés.
- Une erreur de format (aucune bonne réponse cochée, texte non indenté après
  les choix, etc.) s'affiche en mode enseignant, avec le numéro de la question
  et de la ligne en cause.
- Les points d'une bonne réponse varient entre 500 et 1000 selon la rapidité
  (aucun point pour une mauvaise réponse ou une absence de réponse).

### Format JSON

Les fichiers `.json` restent acceptés (le format est choisi selon l'extension) :

```json
{
  "titre": "Quiz de révision",
  "questions": [
    {
      "texte": "Quelle structure de données fonctionne en LIFO ?",
      "choix": ["File", "Pile", "Arbre", "Graphe"],
      "reponse": 1,
      "duree": 20
    }
  ]
}
```

- `reponse` est l'index (0-based) du bon choix.
- `duree` (secondes) est optionnel, 20 secondes par défaut.
- `texte` et `choix` supportent le markdown, mais les blocs de code y sont
  pénibles à écrire (`\n` et guillemets à échapper) : préférer le format
  markdown dès qu'une question contient du code.
