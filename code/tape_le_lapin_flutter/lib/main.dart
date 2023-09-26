import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _indexLapin = Random().nextInt(4);

  int _flops = 0;
  int _pafs = 0;

  void gererTape(int index) {
    print('Bouton $index');
    if (_indexLapin == index) {
      _pafs++;
      _indexLapin = Random().nextInt(4);
    } else {
      _flops++;
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    print(_indexLapin);
    var b0 = MaterialButton(
      onPressed: () {
        gererTape(0);
      },
      child: Text(_indexLapin == 0 ? 'Lapin' : 'Taupe'),
    );
    var b1 = MaterialButton(
      onPressed: () {
        gererTape(1);
      },
      child: Text(_indexLapin == 1 ? 'Lapin' : 'Taupe'),
    );
    var b2 = MaterialButton(
      onPressed: () {
        gererTape(2);
      },
      child: Text(_indexLapin == 2 ? 'Lapin' : 'Taupe'),
    );
    var b3 = MaterialButton(
      onPressed: () {
        gererTape(3);
      },
      child: Text(_indexLapin == 3 ? 'Lapin' : 'Taupe'),
    );
    return Scaffold(
      appBar: AppBar(
        title: const Text('Tape le lapin'),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text(
                  'Pafs: $_pafs',
                  style: const TextStyle(color: Colors.green, fontSize: 20),
                ),
                Text(
                  "Flops: $_flops",
                  style: const TextStyle(color: Colors.red, fontSize: 20),
                )
              ],
            ),
            const Text(
              'Tape le lapin',
              style: TextStyle(fontSize: 40, fontWeight: FontWeight.w900),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                b0,
                b1,
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                b2,
                b3,
              ],
            ),
          ],
        ),
      ),
    );
  }
}
