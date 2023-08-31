import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _indexLapin = Random().nextInt(4);

  int _flops = 0;
  int _pafs = 0;


  void gererTape(int index) {
    print('Bouton ' + index.toString());
    if (this._indexLapin == index) {
      this._pafs++;
      _indexLapin = Random().nextInt(4);
    } else {
      this._flops++;
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    print(this._indexLapin);
    var b0 = MaterialButton(
      onPressed: () {
        gererTape(0);
      },
      child: Text(this._indexLapin == 0 ? 'Lapin' : 'Taupe'),
    );
    var b1 = MaterialButton(
      onPressed: () {
        gererTape(1);
      },
      child: Text(this._indexLapin == 1 ? 'Lapin' : 'Taupe'),
    );
    var b2 = MaterialButton(
      onPressed: () {
        gererTape(2);
      },
      child: Text(this._indexLapin == 2 ? 'Lapin' : 'Taupe'),
    );
    var b3 = MaterialButton(
      onPressed: () {
        gererTape(3);
      },
      child: Text(this._indexLapin == 3 ? 'Lapin' : 'Taupe'),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text('Tape le lapin'),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            new Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text(
                    'Pafs: ' + this._pafs.toString(),
                    style: TextStyle(color: Colors.green, fontSize: 20),
                ),
                Text(
                    "Flops: " + this._flops.toString(),
                    style: TextStyle(color: Colors.red, fontSize: 20),
                )
              ],
            ),
            Text(
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
