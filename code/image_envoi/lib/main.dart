import 'dart:io';

import 'package:dio/dio.dart';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

// TODO IOS necessite d'indiquer pourquoi on utilise les photos
// le fichier a modifier est dans ios/Runner/Info.plist
// suivre https://stackoverflow.com/questions/39519773/nsphotolibraryusagedescription-key-must-be-present-in-info-plist-to-use-camera-r

// important ne marche pas sur le simulator IOS mais marche sur les appareils
// https://github.com/flutter/flutter/issues/71943

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  // TODO voir le pubspec.yaml pour la dependance
  final picker = ImagePicker();

  // on met le fichier dans l'etat pour l'afficher dans la page
  var _imageFile = null;

  Future<String> sendPicture(int babyID, File file) async {
    FormData formData = FormData.fromMap({
      // TODO on peut ajouter d'autres champs que le fichier d'ou le nom multipart
      "babyID": babyID,
      // TODO on peut mettre le nom du fichier d'origine si necessaire
      "file" : await MultipartFile.fromFile(file.path ,filename: "image.jpg")
    });
    // TODO changer la base de l'url pour l'endroit ou roule ton serveur
    var url = "https://4n6.azurewebsites.net/exos/fileasmultipart";
    var response = await Dio().post(url, data: formData);
    print(response.data);
    return "";
  }

  Future getImage() async {
    print("ouverture du selecteur d'image");
    final pickedFile = await picker.getImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      print("l'image a ete choisie " + pickedFile.path.toString());
      _imageFile = File(pickedFile.path);
      setState(() {});
      // TODO envoi au server
      print("debut de l'envoi , pensez a indiquer a l'utilisateur que ca charge " + DateTime.now().toString() );
      sendPicture(12, _imageFile).then(
              (res) {
            setState(() {
              print("fin de l'envoi , pensez a indiquer a l'utilisateur que ca charge " + DateTime.now().toString() );

              // TODO mettre a jour interface graphique
            });
          }
      ).catchError(
              (err) {
                // TODO afficher un message a l'utilisateur pas marche
            print(err);
          }
      );
    } else {
      print('Pas de choix effectue.');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('envoi image'),
      ),
      body: Column(

        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'appui sur le bouton en bas pour choisir une image à envoyer',
          ),
          _imageFile == null ?
          Container(color: Colors.red, height: 50,) :
          SizedBox(
            child: Image.file(_imageFile),
            height: 250,
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: getImage,
        tooltip: 'Pick Image',
        child: Icon(Icons.add_a_photo),
      ),
    );
  }
}
