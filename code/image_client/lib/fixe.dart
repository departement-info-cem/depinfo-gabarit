import 'package:flutter/material.dart';
import 'package:image_client/dynamique.dart';

class FixePage extends StatefulWidget {
  const FixePage({Key? key}) : super(key: key);

  @override
  _FixePageState createState() => _FixePageState();
}

class _FixePageState extends State<FixePage> {
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text('Gestion de la taille des images'),
      ),
      body: Column(
        children: [
          ElevatedButton(
              onPressed: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (context) => DynamiquePage(),
                  ),
                );
              },
              child: Text("Page avec tailles dynamiques")
          ),

          Expanded(
            child: ListView(
              children: [

                //TODO Pour utiliser des images de taille fixe, c'est plutôt simple,
                // il suffit de spécifier au serveur la taille d'image désirée
                // Soit la taille du contrôle
                Image.network("https://4n6.azurewebsites.net/exos/image?width=100", width: 100,),
                Image.network("https://4n6.azurewebsites.net/exos/image?width=150", width: 150,),
                Image.network("https://4n6.azurewebsites.net/exos/image?width=200", width: 200,),
                Image.network("https://4n6.azurewebsites.net/exos/image?width=300", width: 300,),
                Image.network("https://4n6.azurewebsites.net/exos/image?width=400", width: 400,),
              ]),
          ),
        ],
      ),

    );


  }
}
