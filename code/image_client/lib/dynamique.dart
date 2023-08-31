import 'package:flutter/material.dart';
import 'package:image_client/fixe.dart';

class DynamiquePage extends StatefulWidget {
  const DynamiquePage({Key? key}) : super(key: key);

  @override
  _DynamiquePageState createState() => _DynamiquePageState();
}

class _DynamiquePageState extends State<DynamiquePage> {
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
                    builder: (context) => FixePage(),
                  ),
                );
              },
              child: Text("Page avec tailles fixes")
          ),

          Expanded(
            child: ListView(
                children: [

                  Row(
                    children: [
                      Expanded(
                          flex:2,
                          child:
                              //TODO au lieu de mettre directement le widget Image.network, on l'encapsule (on le wrap)
                              // dans un LayoutBuilder. Le LayoutBuilder nous permet d'avoir un nouveau build context
                              // uniquement pour le widget.
                          LayoutBuilder(
                            builder: (BuildContext context, BoxConstraints constraints) {

                              //TODO La MediaQuery permet de connaitre la taille disponible dans le build context,
                              // ici build context est uniquement pour le widget Image.network, c'est donc la taille disponible
                              // pour l'image
                              var size = MediaQuery.of(context).size;

                              //TODO la taille est en double, il sera important de convertir la taille en int
                              // pour que le serveur prenne notre requête (ex: 390 au lieu de 390.0)
                              String width = size.width.toInt().toString();

                              //TODO Une fois la taille connue, il suffit de la spécifier dans l'URL
                              return Image.network("https://4n6.azurewebsites.net/exos/image?&width="+width, width: size.width,);
                            }
                          ),

                      ),
                      Spacer(),
                    ],
                  ),
                  Row(
                    children: [
                      Expanded(
                        child:
                        LayoutBuilder(
                            builder: (BuildContext context, BoxConstraints constraints) {
                              var size = MediaQuery.of(context).size;

                              String width = size.width.toInt().toString();

                              return Image.network("https://4n6.azurewebsites.net/exos/image?&width="+width, width: size.width,);
                            }
                        ),
                      ),
                      Spacer(),
                    ],
                  )
                ]),
          ),
        ],
      ),

    );
  }
}
