import 'package:flutter/material.dart';

// TODO Un ecran qui peut accepter un parametre en utilisant le routage
class EcranC extends StatefulWidget {
  const EcranC({super.key});

// TODO on ne specifie pas le parametre ici, il sera lu juste avant le build

  @override
  State<EcranC> createState() => _EcranCState();
}

class _EcranCState extends State<EcranC> {
  @override
  Widget build(BuildContext context) {
    // TODO lecture du parametre
    final leParametre = ModalRoute.of(context)!.settings.arguments as String;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Ecran C'),
      ),
      // TODO widget. donne accès aux paramètres du widget
      body: Text('Tu as navigué vers C avec $leParametre'),
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
