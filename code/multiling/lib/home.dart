
import 'package:flutter/material.dart';
import 'package:multiling/i18n/intl_localization.dart';

class DemoMultiLing extends StatefulWidget {
  @override
  _DemoMultiLingState createState() => _DemoMultiLingState();
}

class _DemoMultiLingState extends State<DemoMultiLing> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(Locs.of(context).trans('TITLE')),
      ),
      body: Padding(
        padding: const EdgeInsets.all(25.0),
        child: Text(
          // TODO utiliser le code suivant pour avoir la traduction pour
          // le 'MESSAGE' voir dans le xx.json dans assets/i18n/
          Locs.of(context).trans('MESSAGE'),
        ),
      ),
    );
  }
}
