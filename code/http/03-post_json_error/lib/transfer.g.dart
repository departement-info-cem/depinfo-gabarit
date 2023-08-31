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

SignupRequest _$SignupRequestFromJson(Map<String, dynamic> json) {
  return SignupRequest()
    ..username = json['username'] as String
    ..password = json['password'] as String;
}

Map<String, dynamic> _$SignupRequestToJson(SignupRequest instance) =>
    <String, dynamic>{
      'username': instance.username,
      'password': instance.password,
    };

SignupResponse _$SignupResponseFromJson(Map<String, dynamic> json) {
  return SignupResponse()..username = json['username'] as String;
}

Map<String, dynamic> _$SignupResponseToJson(SignupResponse instance) =>
    <String, dynamic>{
      'username': instance.username,
    };
