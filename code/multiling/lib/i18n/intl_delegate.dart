import 'dart:async';

import 'package:flutter/material.dart';

import 'intl_localization.dart';

class DemoDelegate extends LocalizationsDelegate<Locs> {
  const DemoDelegate();

  // TODO exo test si necesasire au bon fonctionnement IOS/Android EN/FR
  @override
  bool isSupported(Locale locale) => ['fr', 'en'].contains(locale.languageCode);

  @override
  Future<Locs> load(Locale locale) async {
    // TODO appeler la local
    Locs localizations = Locs(locale);
    await localizations.load();
    return localizations;
  }

  // TODO test si necessaire et qu'est-ce que ca fait?
  @override
  bool shouldReload(DemoDelegate old) => false;
}