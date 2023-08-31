import 'package:flutter/material.dart';
import 'package:navigation/ecran_a.dart';
import 'package:navigation/ecran_accueil.dart';

import 'ecran_c.dart';

void main() {runApp(MyApp());}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: EcranAccueil(),
      routes: routes(),
    );
  }

  Map<String, WidgetBuilder> routes() {
    return {
      '/ecrana': (context) => EcranA(),
      '/ecranc': (context) => EcranC(),
      '/accueil': (context) => EcranAccueil(),
    };
  }
}
