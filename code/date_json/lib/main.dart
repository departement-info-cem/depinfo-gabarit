import 'package:date_json/dto.dart';
import 'package:flutter/material.dart';

import 'net.dart';

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


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('les dates c tough'),),
      body: Text("tape le bouton pour vivre la magie"),
      floatingActionButton: FloatingActionButton(
        onPressed: _initiateTransfer,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }

  void _initiateTransfer() async {
    print('Transfer initiated');
    // on construit un objet pour l'aller
    TrucAvecUneDate aller = TrucAvecUneDate();
    aller.date = DateTime.now();
    print("object en JSON " + aller.toJson().toString());
    try {
      TrucAvecUneDate retour = await envoiLeDonc(aller);
      print(retour.date.toIso8601String());
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(retour.date.toIso8601String())));
    } catch (e) {
      print(e);
    }
  }
}
