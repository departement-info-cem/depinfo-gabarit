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
  var liste = List<String>.generate(100, (i) => 'element ${i + 1}');

  var _selected;

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
        children: liste
            .map((e) => ListTile(
                  tileColor:
                      e == _selected ? Colors.black12 : Colors.transparent,
                  leading: e == _selected
                      ? const Icon(Icons.arrow_right)
                      : const Icon(Icons.landscape),
                  title: Text(e),
                  subtitle: const Text('super description'),
                  onTap: () {
                    if (avecDeuxPanneaux) {
                      _selected =
                          e; // la reaction a la selection va se faire au setState
                      setState(() {});
                    } else {
                      // TODO ecrire le code pour passer a un autre ecran de detail de l'objet selectionne
                      ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('Coucou')));
                    }
                  },
                ))
            .toList());
  }

  Widget _buildWideContainers() {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Expanded(child: _buildNormalContainer(true)),
          // reutilise la liste pour la partie gauche
          Expanded(
            flex: 2,
            child: _selected == null
                ? // si on n'a rien de selectionne
                const Text('selectionner un truc dans la liste')
                : Column(
                    // si on a une selection
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(18.0),
                        child: Text(_selected),
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
                  ),
          )
        ],
      ),
    );
  }
}
