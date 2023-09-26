import 'package:flutter/material.dart';
import 'package:navigation/ecran_a.dart';
import 'package:navigation/tiroir_nav.dart';

import 'ecran_b.dart';

class EcranAccueil extends StatefulWidget {
  const EcranAccueil({super.key});

  @override
  State<EcranAccueil> createState() => _EcranAccueilState();
}

class _EcranAccueilState extends State<EcranAccueil> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // TODO decommenter la ligne suivante
      drawer: const LeTiroir(),
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: const Text('Accueil'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          OutlinedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const EcranA(),
                ),
              );
            },
            child: const Text('Vers Ecran A'),
          ),
          OutlinedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const EcranB(
                    leParametre: 'ef45ac',
                  ),
                ),
              );
            },
            child: const Text('Vers Ecran B'),
          ),
          OutlinedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const EcranB(
                    leParametre: '12ef56',
                  ),
                ),
              );
            },
            child:
                const Text('Vers Ecran B avec différente valeur du paramètre'),
          ),
          OutlinedButton(
            onPressed: () {
              Navigator.pushNamed(
                context,
                '/ecranc',
                arguments: '98qw67',
              );
            },
            child: const Text('Vers Ecran C'),
          ),
        ],
      ),
    );
  }
}
