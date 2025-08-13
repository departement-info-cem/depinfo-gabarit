---
description: Objets, propriétés, méthodes et apprendre à les utiliser
---

# Introduction à la programmation orientée objet

## Instanciation

   * Création d’un objet avec `new`.
   * [Documentation sur l’instanciation en C#](https://sites.google.com/site/notionscsharpcem/instanciation_objet)

## Accéder aux membres d’un objet

   * **Propriétés** : valeurs appartenant à l’objet.
   * **Méthodes** : actions que l’objet peut effectuer.
   * **Constantes** : accessibles via le **nom de la classe**, pas l’objet.

     ```csharp
     int valeur = MaClasse.NomConstante;
     ```
   * **Méthodes statiques** : accessibles via le **nom de la classe**, pas l’objet.

## Type valeur et type référence

   * **Type valeur** : stocke directement la valeur (ex. `int`, `char`, `decimal`, `bool`).
   * **Type référence** : stocke l’adresse de l’objet (ex. `string`, tableaux, classes).
   * Une référence `null` signifie que l’objet ne référence rien. Un objet déclaré mais non instancié a la valeur `null`.

## Variable locale vs variable membre

   * **Variable locale** : déclarée dans une méthode ou un bloc ; accessible uniquement à l’intérieur. Disparaît à la fin de l’exécution du bloc.
   * **Variable membre** : déclarée au niveau de la classe ; accessible dans toutes les méthodes de la classe. Préfixe conseillé : `m_` (ex. `m_prix`).

## Débogueur pour visualiser les membres d’un objet

   * Mettre un point d’arrêt et survoler l’objet pour voir les valeurs de ses propriétés.
   * Voir la structure de la classe via clic droit → “Atteindre la définition”.