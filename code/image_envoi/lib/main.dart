import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  // TODO voir le pubspec.yaml pour la dependance
  final picker = ImagePicker();

  // on met le fichier dans l'etat pour l'afficher dans la page
  var _imageFile;

  Future<String> sendPicture(int babyID, File file) async {
    FormData formData = FormData.fromMap({
      // TODO on peut ajouter d'autres champs que le fichier d'ou le nom multipart
      "babyID": babyID,
      // TODO on peut mettre le nom du fichier d'origine si necessaire
      "file": await MultipartFile.fromFile(file.path, filename: "image.jpg")
    });
    // TODO changer la base de l'url pour l'endroit ou roule ton serveur
    var url = "https://4n6.azurewebsites.net/exos/fileasmultipart";
    var response = await Dio().post(url, data: formData);
    print(response.data);
    return "";
  }

  Future getImage() async {
    print("ouverture du selecteur d'image");
    final pickedFile = await picker.pickImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      print("l'image a ete choisie ${pickedFile.path}");
      _imageFile = File(pickedFile.path);
      setState(() {});
      // TODO envoi au server
      print(
          "debut de l'envoi , pensez a indiquer a l'utilisateur que ca charge ${DateTime.now()}");
      sendPicture(12, _imageFile).then((res) {
        setState(() {
          print(
              "fin de l'envoi , pensez a indiquer a l'utilisateur que ca charge ${DateTime.now()}");

          // TODO mettre a jour interface graphique
        });
      }).catchError((err) {
        // TODO afficher un message a l'utilisateur pas marche
        print(err);
      });
    } else {
      print('Pas de choix effectue.');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('envoi image'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const Text(
            'appui sur le bouton en bas pour choisir une image à envoyer',
          ),
          _imageFile == null
              ? Container(
                  color: Colors.red,
                  height: 50,
                )
              : SizedBox(
                  height: 250,
                  child: Image.file(_imageFile),
                ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: getImage,
        tooltip: 'Pick Image',
        child: const Icon(Icons.add_a_photo),
      ),
    );
  }
}
