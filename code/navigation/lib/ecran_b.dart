import 'package:flutter/material.dart';

// TODO Un ecran qui peut accepter un parametre
class EcranB extends StatefulWidget {
  // TODO comme le parametre est necessaire pour le widget, par exemple l'ID de
  // l'objet a affiché, on le met final ce qui garantit une assignation
  final String leParametre;

  // TODO on specifie que le parametre est requis ici
  const EcranB({Key? key, required this.leParametre}) : super(key: key);

  @override
  State<EcranB> createState() => _EcranBState();
}

class _EcranBState extends State<EcranB> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Ecran B'),
      ),
      // TODO widget. donne accès aux paramètres du widget
      body: Text('Tu as navigué vers B avec ${widget.leParametre}'),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // TODO quand on pop, on revient à l'écran précédent
          // ca enleve un ecran de la pile de navigation
          Navigator.of(context).pop();
        },
        child: const Icon(Icons.arrow_back),
      ),
    );
  }
}
