import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DemoListe(),
    );
  }
}

class DemoListe extends StatefulWidget {
  @override
  _DemoListeState createState() => _DemoListeState();
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
    listeEnMemoire = [];
    for (var i = 0 ; i < 100 ; i++) {
      ListeElement element = ListeElement();
      element.age = (i+5)*10 +3;
      element.nom = "element #"+i.toRadixString(16); // donne la repr d'un nombre en base 16 genre hexa quoi
      element.doitSlider = (i%5 == 0);
      listeEnMemoire.add(element);
    }
  }

  void rafraichir() {
    listeEnMemoire = [];
    Random rand = Random();
    for (var i = 0 ; i < 20 ; i++) {
      ListeElement element = ListeElement();
      element.age = rand.nextInt(70) + 10;
      element.nom = "rafraichir #"+element.age.toRadixString(2); // donne la repr d'un nombre en base 16 genre hexa quoi
      element.doitSlider = (element.age%3 == 0);
      listeEnMemoire.add(element);
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text('DemoListe'),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: ListView(
          children: this.listeEnMemoire.map(
                  (e) {
                    if (e.doitSlider) {
                      return Slidable(
                        actionPane: SlidableDrawerActionPane(),
                        //actionExtentRatio: 0.25,
                        child: ListTile(
                          tileColor: Colors.greenAccent[100],
                          leading: Image.network('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png'),
                          title: Text(e.nom + ' ' + e.age.toString()),
                          subtitle: Text("A glisser vers gauche ou droite"),
                        ),
                        actions: <Widget>[
                          IconSlideAction(
                            caption: 'Stocke',
                            color: Colors.blue,
                            icon: Icons.archive,
                            onTap: () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('archive'))),
                          ),
                          IconSlideAction(
                            caption: 'Partage',
                            color: Colors.indigo,
                            icon: Icons.share,
                            onTap: () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('share'))),
                          ),
                        ],
                        secondaryActions: <Widget>[
                          IconSlideAction(
                            caption: 'Plus',
                            color: Colors.black45,
                            icon: Icons.more_horiz,
                            onTap: () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('gna'))),
                          ),
                          IconSlideAction(
                            caption: 'Supprime',
                            color: Colors.red,
                            icon: Icons.delete,
                            onTap: () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('gno'))),
                          ),
                        ],
                      );
                    }
                    else {
                      return ListTile(
                        dense: true,
                        leading: Icon(Icons.home_mini),
                        title: Text(e.nom),
                        subtitle: Text("On peut avoir plusieurs objets dans une liste"),
                        onTap: () {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text("TODO"))
                          );
                        },
                      );
                    }

                  }
          ).toList(),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: rafraichir,
        tooltip: 'Increment',
        child: Icon(Icons.refresh),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
