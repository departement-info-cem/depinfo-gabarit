import 'dart:math';

import 'package:flutter/material.dart';

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
      home: const DemoListe(title: 'Flutter Demo Home Page'),
    );
  }
}

class DemoListe extends StatefulWidget {
  const DemoListe({super.key, required this.title});

  final String title;

  @override
  State<DemoListe> createState() => _DemoListeState();
}

class ListeElement {
  late String nom;
  late int age;
  late bool doitSlider;
}

class _DemoListeState extends State<DemoListe> {
  List<ListeElement> listeEnMemoire = [];

  @override
  void initState() {
    super.initState();
    listeEnMemoire = [];
    for (var i = 0; i < 100; i++) {
      ListeElement element = ListeElement();
      element.age = (i + 5) * 10 + 3;
      element.nom =
          "element #${i.toRadixString(16)}"; // donne la repr d'un nombre en base 16 genre hexa quoi
      element.doitSlider = (i % 5 == 0);
      listeEnMemoire.add(element);
    }
  }

  void rafraichir() {
    listeEnMemoire = [];
    Random rand = Random();
    for (var i = 0; i < 20; i++) {
      ListeElement element = ListeElement();
      element.age = rand.nextInt(70) + 10;
      element.nom =
          "rafraichir #${element.age.toRadixString(2)}"; // donne la repr d'un nombre en base 16 genre hexa quoi
      element.doitSlider = (element.age % 3 == 0);
      listeEnMemoire.add(element);
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('DemoListe'),
      ),
      body: Center(
          child: ListView.builder(
        itemCount: listeEnMemoire.length,
        itemBuilder: (context, index) {
          return ListTile(title: Text('item #${listeEnMemoire[index].nom}'));
        },
      )),
      floatingActionButton: FloatingActionButton(
        onPressed: rafraichir,
        tooltip: 'Increment',
        child: const Icon(Icons.refresh),
      ),
    );
  }
}
