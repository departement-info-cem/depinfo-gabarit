
import 'package:flutter/material.dart';

// TODO Un ecran minimal avec un tres peu de code
class EcranA extends StatefulWidget {

  @override
  _EcranAState createState() => _EcranAState();
}

class _EcranAState extends State<EcranA> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Ecran A'),
      ),
      body: Text('Tu as navigué vers A'),
    );
  }
}
