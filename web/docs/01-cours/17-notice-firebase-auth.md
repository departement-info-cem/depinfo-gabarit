# Prérequis

Avoir fait le premier fichier de configuration. S'assurer d'avoir réinstaller firebase-cli et flutterfire-cli.

## Installation de la librairie

Si ce n'est pas déjà fait (il faut regarder dans le pubspec pour voir s'il y a déjà la librairie auth de firebase) on va installer la librairie

- dans un terminal
- depuis le dossier du projet flutter
- taper : flutter pub add firebase_auth
- COMMIT PUSH

## Code de détection du status de login

- dans votre IDE
- dans le fichier dart de votre écran principal
- dans la fonction initState
- ajouter le code suivant (la doc de référence se trouve ici : https://firebase.google.com/docs/auth/flutter/start)

```dart
@override
void initState() {
  FirebaseAuth.instance
    .authStateChanges()
    .listen((User? user) {
      if (user == null) {
        print('User is currently signed out!');
      } else {
        print('User is signed in! ' + user.email!);
      }
    }
  );
  ...  reste de votre initState
}
```

- relancer votre application
- pour l'instant vous devriez toujours voir que c'est "currently signed out!" dans la console (onglet run dans l'IDE)
- COMMIT PUSH

## Ajout de google sign_in

- dans un navigateur
- aller dans la console firebase dans votre projet
- dans le volet authentication, cherche les méthodes de sign in
- activer le sign in de Google
- dans un navigateur aller à https://pub.dev/packages/google_sign_in
- copier la dépendance google_sign_in avec la bonne version dans votre pubspec.yaml
- taper : flutterfire configure
- copier la fonction suivante dans votre écran Flutter de départ

```dart
Future<UserCredential> signInWithGoogle() async {
  // Trigger the authentication flow
  final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();

  // Obtain the auth details from the request
  final GoogleSignInAuthentication? googleAuth = await googleUser?.authentication;

  // Create a new credential
  final credential = GoogleAuthProvider.credential(
    accessToken: googleAuth?.accessToken,
    idToken: googleAuth?.idToken,
  );

  // Once signed in, return the UserCredential
  return await FirebaseAuth.instance.signInWithCredential(credential);
}
```

- ajouter un bouton dans l'interface pour appeler la méthode signInWithGoogle
- relancer votre application
- déclencher le bouton pour appeler la méthode
- on vous demandera de vous connecter sur Google

### Configuration google_sign_in pour Android

- vous devriez avoir un message "PlatformException(sign_in_failed, com.google.android.gms.common.api.ApiException: 10: , null, null)"
- SHA1 : pour le sign in Google, il faut ajouter la signature SHA1 de l'application dans notre application Android
- SHA1 : avec Android Studio, fermer votre projet Flutter, ouvrir comme un projet le dossier android DANS le projet flutter, en sélectionnant le dossier "android" dans le dialogue d'ouverture de projet
- SHA1 : ouvrir le menu suivant : view -> tool windows -> gradle
- SHA1 : dans la vue gradle, cliquer sur l'éléphant
- SHA1 : taper : gradle signinReport dans le dialogue qui apparait
- copier la valeur du SHA1 de la tache google_sign_in_android
- fermer le projet Android et re-ouvrir le projet Flutter
- dans un navigateur
- dans la console firebase sélectionner l'application Android de votre projet, cliquer sur l'engrenage
- trouver le bouton "ajouter une empreinte"
- copier la valeur du SHA1 et valider
- relancer l'application et tenter une connexion, tout devrait fonctionner.
- COMMIT PUSH

### Configuration google_sign_in pour ios

- TODO add dans Xcode
- ouvrir le fichier ios > Runner > Info.plist
- à la fin du fichier ajouter quelques lignes vides juste au dessus de `</dict>`
- dans l'espace vide ajoutez le code suivant en remplaçant gnagnagna par la valeur sous "REVERSED_CLIENT_ID" dans le fichier ios > Runner > GoogleService-Info.plist

```xml
<key>CFBundleURLTypes</key>
    <array>
    	<dict>
    		<key>CFBundleTypeRole</key>
    		<string>Editor</string>
    		<key>CFBundleURLSchemes</key>
    		<array>
    			<!-- TODO Replace this value: -->
    			<!-- Copied from GoogleService-Info.plist key REVERSED_CLIENT_ID -->
    			<string>gnagnagna</string>
    		</array>
    	</dict>
    </array>
```

- lancer votre application sur un simulateur IOS ou un appareil IOS sur un mac
- si vous arrivez à vous connectez
- COMMIT PUSH

## Ajout d'un signout

- dans votre écran principal,
- ajouter un bouton qui déconnecte, par exemple

```dart
MaterialButton(
  onPressed: () async {
    await GoogleSignIn().signOut();
    await FirebaseAuth.instance.signOut();
    setState(() {});
  },
  child: Text("signout"),
),
```

- relancer l'application
- On devrait pouoir se connecter et se déconnecter et l'état se lit dans la console
- COMMIT PUSH

## Accéder directement a l'utilisateur connecté

- FirebaseAuth.instance.authStateChanges() vu plus haut permet de s'abonner aux changements d'état de connexion
- on peut aussi facilement accéder à l'utilisateur connecté avec FirebaseAuth.instance.currentUser
- son id est accessible avec FirebaseAuth.instance.currentUser?.uid. Ce qui permettra d'indiquer le propriétaire des données par la suite.
