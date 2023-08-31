
import 'package:intl/intl.dart';
import 'package:json_annotation/json_annotation.dart';

part 'dto.g.dart';

// Ca commence avec une classe serializable classique
@JsonSerializable()
class TrucAvecUneDate {

  TrucAvecUneDate();

  // TODO c'est cette annotation qui permet de override la conversion par defaut
  @JsonKey(fromJson: _fromJson, toJson: _toJson)
  DateTime date = DateTime.now();

  factory TrucAvecUneDate.fromJson(Map<String, dynamic> json) => _$TrucAvecUneDateFromJson(json);
  Map<String, dynamic> toJson() => _$TrucAvecUneDateToJson(this);
}

// TODO ici on force le format de la date et on fournit les fonctions de conversion dans les 2 sens
final _dateFormatter = DateFormat("yyyy-MM-dd'T'HH:mm:ss");
DateTime _fromJson(String date) => _dateFormatter.parse(date);
String _toJson(DateTime date) => _dateFormatter.format(date);