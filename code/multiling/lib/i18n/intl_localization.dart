import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class Locs {
  Locs(this.locale);

  final Locale locale;

  static Locs of(BuildContext context) {
    return Localizations.of<Locs>(context, Locs)!;
  }

  Map<String, String> _sentences = {};

  Future<bool> load() async {
    // recupere le JSON depuis l'url
    String data =
        await rootBundle.loadString('assets/i18n/${locale.languageCode}.json');
    // decode la string via json
    Map<String, dynamic> result = json.decode(data);
    // copie les couples dans une map en memoire
    _sentences = <String, String>{};
    result.forEach((String key, dynamic value) {
      _sentences[key] = value.toString();
    });
    return true;
  }

  String trans(String key) {
    return _sentences.containsKey(key) ? _sentences[key]! : "TODO";
  }
}
