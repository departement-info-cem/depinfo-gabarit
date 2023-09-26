import 'package:flutter/material.dart';

import 'dto.dart';
import 'net.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('les dates c tough'),),
      body: const Text("tape le bouton pour vivre la magie"),
      floatingActionButton: FloatingActionButton(
        onPressed: _initiateTransfer,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }

  void _initiateTransfer() async {
    print('Transfer initiated');
    // on construit un objet pour l'aller
    TrucAvecUneDate aller = TrucAvecUneDate();
    aller.date = DateTime.now();
    print("object en JSON ${aller.toJson()}");
    try {
      TrucAvecUneDate retour = await envoiLeDonc(aller);
      print(retour.date.toIso8601String());
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(retour.date.toIso8601String())));
    } catch (e) {
      print(e);
    }
  }
}
