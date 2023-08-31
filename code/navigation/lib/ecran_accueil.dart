
import 'package:flutter/material.dart';
import 'package:navigation/ecran_a.dart';
import 'package:navigation/tiroir_nav.dart';

import 'ecran_b.dart';

class EcranAccueil extends StatefulWidget {

  @override
  _EcranAccueilState createState() => _EcranAccueilState();
}

class _EcranAccueilState extends State<EcranAccueil> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // TODO decommenter la ligne suivante
      drawer: LeTiroir(),
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text('Accueil'),
      ),
      body: Column(

        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          MaterialButton(
            onPressed: () {

              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => EcranA(),
                ),
              );

            },
            child: Text('Vers Ecran A'),
          ),
          MaterialButton(
            onPressed: () {

              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => EcranB(le_parametre: 'ef45ac',),
                ),
              );

            },
            child: Text('Vers Ecran B'),
          ),

          MaterialButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => EcranB(le_parametre: '12ef56',),
                ),
              );

            },
            child: Text('Vers Ecran B avec différente valeur du paramètre'),
          ),
          MaterialButton(
            onPressed: () {

              Navigator.pushNamed(
                context,
                '/ecranc',
                arguments: '98qw67',
              );
              
            },
            child: Text('Vers Ecran C'),
          ),

        ],
      ),
    );
  }
}
