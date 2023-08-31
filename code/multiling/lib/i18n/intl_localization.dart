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

  Map<String, String> _sentences = Map();

  Future<bool> load() async {
    // recupere le JSON depuis l'url
    String data = await rootBundle.loadString('assets/i18n/${this.locale.languageCode}.json');
    // decode la string via json
    Map<String, dynamic> _result = json.decode(data);
    // copie les couples dans une map en memoire
    this._sentences = new Map();
    _result.forEach((String key, dynamic value) {
      this._sentences[key] = value.toString();
    });
    return true;
  }

  String trans(String key) {
    return this._sentences.containsKey(key) ? this._sentences[key]! : "TODO";
  }
}