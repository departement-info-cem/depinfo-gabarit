import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
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
      appBar: AppBar(title: Text('Demo mise en page'),),
      body: Column(           // La plupart des layout pour telephones commencent avec une column
        // TODO jouer entre les differents valeurs de MainAxisAlignment
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Row(
            children: [
              Expanded(
                flex: 2,
                child:
                  Container(
                    margin: EdgeInsets.all(5),  // Ca prend un container pour les bordures et les marges
                    width: double.infinity,
                    child: Padding(             // Le padding se fait en encapsulant dans le widget Padding
                      padding: const EdgeInsets.all(8.0),
                      child: Text("Je prends 2/3"),
                    ),
                    color: Colors.blue,
                  ),
              ),
              Expanded(
                flex: 1, // pas forcement necessaire parce que 1 c'est la valeur par defaut
                child:
                MaterialButton(
                  child: Text('Super bouton'),
                  color: Colors.green,
                  onPressed: () {  },
                ),
              )
            ],
          ),
          Container(
            height: 200,
            color: Colors.red,
            margin: EdgeInsets.all(2),
            child: Padding(
              padding: const EdgeInsets.all(6.0),
              child: Row(
                children: [
                  Expanded(
                    flex: 3,
                    child:
                    // Pour avoir un container qui prend toute la hauteur du Row
                    // https://stackoverflow.com/questions/51155208/make-container-widget-fill-parent-vertically
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Text('salut'),
                        SizedBox(height:10),
                        Icon(Icons.star,),
                        SizedBox(height: 5,),
                        Text('yo'),
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 7, // pas forcement necessaire parce que 1 c'est la valeur par defaut
                    child:
                    Container(
                      margin: EdgeInsets.all(4),
                      color: Colors.amberAccent,
                      child: Column(
                        // TODO changer la valeur ici
                        // conclusion, des qu'un spacer ou un widget avec un flex qui prend tous les pixels
                        // restants le mainAxisalignement ne change plus rien
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text('Spacer prend de '),
                          Spacer(),
                          Icon(Icons.star,),
                          Spacer(flex: 4,), // va prendre 4 fois plus des pixels restants qu'un Spacer avec flex de 1
                          Text('l\'espace'),
                        ],
                      ),
                    ),
                  )
                ],
              ),
            ),
          ),

          Padding(
            padding: EdgeInsets.all(7),
            child: TextFormField(
              decoration: InputDecoration(
                  fillColor: Colors.blue[1], // chaque couleur vient avec des nuances accessibles par un index
                  filled: true,
                  labelText: 'Indice pour utilisateur',
                  contentPadding: EdgeInsets.all(10),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(9)),
                    borderSide: BorderSide(color: Colors.redAccent, width: 6.0),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(9)),
                    borderSide: BorderSide(color: Colors.blue, width: 3.0),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(9)),
                    borderSide: BorderSide(color: Colors.green, width: 2.0),
                  ),
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {}, // fonction anonyme qui ne fait rien
        tooltip: 'Increment',   // c'est pour les non voyants qu'ils sachent ce que fait le bouton
        child: Icon(Icons.add),
      ),
    );
  }
}
