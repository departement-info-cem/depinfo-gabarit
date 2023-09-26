import 'package:dio/dio.dart';

import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:cookie_jar/cookie_jar.dart';

class SingletonDio {
  static var cookiemanager = CookieManager(CookieJar());

  static Dio getDio() {
    Dio dio = Dio();
    dio.interceptors.add(cookiemanager);

    return dio;
  }

  static Future<void> signUpAndGetCookie() async {
    await getDio().post('http://10.0.2.2:8080/api/id/signup',
        data: '{username: "bob${DateTime.now()}", password: "123456"}');
  }
}
