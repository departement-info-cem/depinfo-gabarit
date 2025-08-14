# 🧪 Labo 5.2 🎲 Mini-projet – Devine le nombre 

## 🎯 Objectif
Créer un programme console où **l’utilisateur doit deviner un nombre secret** entre 1 et 10.  
Le joueur a **3 tentatives maximum**, et le programme donne un indice (« plus grand » ou « plus petit ») après chaque essai.

⚠️ **Pas de boucles** : on écrit les trois tentatives de manière répétée.

Le programme doit utiliser :
- **plusieurs méthodes `static`** qui retournent des valeurs
- la classe **`Random`** pour générer le nombre secret

---

## 🔄 Introduction à `Random`
En C#, la classe **`Random`** permet de générer des nombres aléatoires.

Exemple :
```csharp
Random generateur = new Random();
int nombre = generateur.Next(1, 11); // génère un nombre entre 1 et 10
```
- `Next(min, max)` génère un nombre **aléatoire** inclusif sur le minimum, exclusif sur le maximum.
- Ici, `1` est inclus et `11` est exclus, donc on obtient un nombre **entre 1 et 10**.

---

## 🎮 Règles du jeu
- Le nombre secret est **généré avec `Random`** au début du programme.
- L’utilisateur entre un nombre entre 1 et 10.
- Après chaque tentative :
  - Si la proposition est correcte → afficher un message de victoire et terminer le jeu.
  - Sinon → indiquer si le nombre secret est **plus grand** ou **plus petit**.
- Après 3 tentatives infructueuses → afficher un message de défaite.

---

## 📋 Instructions
1. **Créer un objet `Random`** et générer le nombre secret.
2. **Demander une première tentative** à l’utilisateur.
3. **Utiliser `VerifierProposition`** pour savoir si c’est correct ou donner un indice.
4. Si c’est correct, afficher le message final et **ne pas faire les autres tentatives**.
5. Sinon, passer à la tentative suivante.
6. Répéter jusqu’à 3 tentatives.
7. **Afficher le résultat final** avec `AfficherResultatFinal`.

---

## 📝 Pseudo-code principal 
```
DEBUT

    créer generateur de nombres
    nombreSecret = generateur.Next(1, 11)
    trouve = FAUX

    AFFICHER "Tentative 1 : Entrez un nombre entre 1 et 10 : "
    LIRE proposition
    message = VerifierProposition(proposition, nombreSecret)
    AFFICHER message
    SI proposition EST ÉGAL À nombreSecret ALORS
        trouve = VRAI

    SI trouve EST FAUX ALORS
        AFFICHER "Tentative 2 : Entrez un nombre entre 1 et 10 : "
        LIRE proposition
        message = VerifierProposition(proposition, nombreSecret)
        AFFICHER message
        SI proposition EST ÉGAL À nombreSecret ALORS
            trouve = VRAI

    SI trouve EST FAUX ALORS
        AFFICHER "Tentative 3 : Entrez un nombre entre 1 et 10 : "
        LIRE proposition
        message = VerifierProposition(proposition, nombreSecret)
        AFFICHER message
        SI proposition EST ÉGAL À nombreSecret ALORS
            trouve = VRAI

    resultatFinal = AfficherResultatFinal(trouve, nombreSecret)
    AFFICHER resultatFinal

FIN
```

---

## 🛠️ Méthodes à créer 

### 1️⃣ `VerifierProposition`
```
SI proposition EST ÉGAL À nombreSecret ALORS
    RETOURNER "Bravo ! Vous avez trouvé le nombre secret."
SINON SI proposition PLUS PETIT QUE nombreSecret ALORS
    RETOURNER "Le nombre secret est plus grand."
SINON
    RETOURNER "Le nombre secret est plus petit."
```

---

### 2️⃣ `AfficherResultatFinal`
```
SI trouve EST VRAI ALORS
    RETOURNER "🎉 Félicitations, vous avez gagné !"
SINON
    RETOURNER "😢 Vous avez perdu. Le nombre secret était : " + nombreSecret
```

---

## 💡 Exemple d’exécution – Victoire
```
Tentative 1 : Entrez un nombre entre 1 et 10 : 5
Bravo ! Vous avez trouvé le nombre secret.
🎉 Félicitations, vous avez gagné !
```

---

## 💡 Exemple d’exécution – Défaite
```
Tentative 1 : Entrez un nombre entre 1 et 10 : 4
Le nombre secret est plus grand.

Tentative 2 : Entrez un nombre entre 1 et 10 : 7
Le nombre secret est plus petit.

Tentative 3 : Entrez un nombre entre 1 et 10 : 6
Le nombre secret est plus petit.
😢 Vous avez perdu. Le nombre secret était : 5
```
