import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PortaitPaysage(),
    );
  }
}

class PortaitPaysage extends StatefulWidget {
  @override
  _PortaitPaysageState createState() => _PortaitPaysageState();
}

class _PortaitPaysageState extends State<PortaitPaysage> {

  var liste = new List<String>.generate(100, (i) => 'element ' + (i + 1).toString() );

  var _selected = null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('LayoutBuilder Example')),
      body: OrientationBuilder(
        builder: (context, orientation) {
          if (orientation == Orientation.landscape) {
            return _buildWideContainers();
          } else {
            return _buildNormalContainer(false);
          }
        },
      ),
    );
  }

  Widget _buildNormalContainer(bool avecDeuxPanneaux) {
    return ListView(
      children: liste.map(
        (e) => ListTile(
          tileColor: e == _selected ? Colors.black12 : Colors.transparent,
          leading: e == _selected ? Icon(Icons.arrow_right) : Icon(Icons.landscape),
          title: Text(e),
          subtitle: Text('super description'),
          onTap: () {
            if (avecDeuxPanneaux) {
              this._selected = e;                     // la reaction a la selection va se faire au setState
              setState(() {});
            } else {
              // TODO ecrire le code pour passer a un autre ecran de detail de l'objet selectionne
              ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Coucou')));
            }
          },
        )
      ).toList()
    );
  }

  Widget _buildWideContainers() {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Expanded(child: _buildNormalContainer(true)),        // reutilise la liste pour la partie gauche
          Expanded(
            flex: 2,
            child: this._selected == null ?                 // si on n'a rien de selectionne
              Text('selectionner un truc dans la liste') :
              Column(                                       // si on a une selection
              children: [
                Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: Text(this._selected),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    height: 50,
                    color: Colors.grey,
                  ),
                ),
                // TODO reste de la mise en page
              ],
            ),)
        ],
      ),
    );
  }
}
