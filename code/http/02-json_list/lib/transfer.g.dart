// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transfer.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Truc _$TrucFromJson(Map<String, dynamic> json) {
  return Truc()
    ..a = json['a'] as int
    ..b = json['b'] as String
    ..c = (json['c'] as List<dynamic>).map((e) => e as int).toList();
}

Map<String, dynamic> _$TrucToJson(Truc instance) => <String, dynamic>{
      'a': instance.a,
      'b': instance.b,
      'c': instance.c,
    };
