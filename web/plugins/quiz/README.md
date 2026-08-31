# Plugin Quiz

Plugin Docusaurus permettant d'animer des quiz en direct (façon Wooclap/Kahoot) :
un·e enseignant·e démarre une session à partir d'un fichier JSON de questions, les
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

3. Déposer les fichiers de questions dans `static/quiz/` (voir `static/quiz/exemple.json`).

4. Utiliser le composant dans une page ou un document :

   ```mdx
   <Quiz file="/quiz/exemple.json" />
   ```

   Un sélecteur permet ensuite de choisir le mode « enseignant » ou « étudiant ».
   Le mode enseignant charge le fichier de questions et affiche un code à
   partager (ex. `48213`) ; le mode étudiant permet de rejoindre avec ce code
   et un pseudonyme.

## Fonctionnement

- L'enseignant·e ouvre la page en mode « enseignant » : son navigateur charge
  le fichier JSON, devient l'hôte de la partie (`Peer` PeerJS avec un
  identifiant court dérivé du code affiché) et conserve l'état du jeu (scores,
  question courante, etc.).
- Chaque étudiant·e ouvre la page en mode « étudiant », saisit le code et un
  pseudonyme : son navigateur établit une connexion pair-à-pair directe avec
  celui de l'enseignant·e.
- Les questions, réponses et mises à jour du classement transitent uniquement
  entre les navigateurs concernés, sans passer par un serveur applicatif.
- **La partie ne dure que le temps où l'onglet de l'enseignant·e reste ouvert** :
  fermer ou rafraîchir cet onglet met fin à la session pour tout le monde.

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
pour prendre le relais. Deux causes fréquentes :

1. **Réseau restrictif** : NAT symétrique, pare-feu d'entreprise/cégep, ou
   environnement de test dans une machine virtuelle/conteneur dont le réseau
   est isolé (pas d'accès UDP sortant réel vers Internet). Dans ce dernier
   cas, ça échoue même en testant deux onglets sur le même `localhost`,
   puisque WebRTC a quand même besoin d'un vrai accès réseau pour négocier.
   → Tester avec un navigateur ayant un accès Internet normal (pas dans un
   environnement de développement bac à sable) est la première chose à
   vérifier.
2. **Aucun TURN configuré** : par défaut, ce plugin ne configure qu'un STUN
   (`stun:stun.l.google.com:19302`), suffisant pour la majorité des réseaux
   mais pas pour les cas ci-dessus. Voir « Ajouter un serveur TURN » ci-dessous.

## Ajouter un serveur TURN

Pour les cas où un STUN seul ne suffit pas, on peut fournir ses propres
serveurs TURN via la prop `peerOptions` du composant `<Quiz />` (ou l'option
`peerOptions` du plugin dans `docusaurus.config.js`) :

```jsx
<Quiz
  file="/quiz/exemple.json"
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

```json
{
  "titre": "Quiz de révision",
  "questions": [
    {
      "texte": "Quelle structure de données fonctionne en LIFO ?",
      "choix": ["File", "Pile", "Arbre", "Graphe"],
      "reponse": 1,
      "duree": 20
    },
    {
      "texte": "Que retourne cette fonction ?\n\n```javascript\nfunction f(a, b) {\n  return a + b;\n}\nf(1, 2);\n```",
      "choix": ["1", "2", "3", "Une erreur"],
      "reponse": 2
    }
  ]
}
```

- `reponse` est l'index (0-based) du bon choix.
- `duree` (secondes) est optionnel, 20 secondes par défaut.
- `texte` supporte le markdown (gras, listes, blocs de code avec coloration
  syntaxique selon le langage indiqué après les ```` ``` ````, etc.).
- Les points d'une bonne réponse varient entre 500 et 1000 selon la rapidité
  (aucun point pour une mauvaise réponse ou une absence de réponse).
