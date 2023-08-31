import 'package:json_annotation/json_annotation.dart';

/// This allows the `User` class to access private members in
/// the generated file. The value for this is *.g.dart, where
/// the star denotes the source file name.
part 'transfer.g.dart';

/// An annotation for the code generator to know that this class needs the
/// JSON serialization logic to be generated.
@JsonSerializable()
class Truc {

  Truc();

  int a = 0;
  String b = '';
  List<int> c = [];

  factory Truc.fromJson(Map<String, dynamic> json) => _$TrucFromJson(json);
  Map<String, dynamic> toJson() => _$TrucToJson(this);
}


@JsonSerializable()
class SignupRequest {

  SignupRequest();

  String username = '';
  String password = '';

  factory SignupRequest.fromJson(Map<String, dynamic> json) => _$SignupRequestFromJson(json);
  Map<String, dynamic> toJson() => _$SignupRequestToJson(this);
}


@JsonSerializable()
class SignupResponse {

  SignupResponse();

  String username = '';

  factory SignupResponse.fromJson(Map<String, dynamic> json) => _$SignupResponseFromJson(json);
  Map<String, dynamic> toJson() => _$SignupResponseToJson(this);
}