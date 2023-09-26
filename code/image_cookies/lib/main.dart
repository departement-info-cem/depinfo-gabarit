import 'dart:io';

import 'package:dio/dio.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';

import 'image_cookie.dart';
import 'lib_http.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String imageURL = "";
  Cookie? cookie;

  void getImageAndSend() async {
    FilePickerResult? result =
        await FilePicker.platform.pickFiles(type: FileType.image);

    if (result != null) {
      PlatformFile pickedImage = result.files.single;

      FormData formData = FormData.fromMap({
        "file": await MultipartFile.fromFile(pickedImage.path!,
            filename: pickedImage.name)
      });

      await SingletonDio.signUpAndGetCookie();

      Dio dio = SingletonDio.getDio();

      var response =
          await dio.post("http://10.0.2.2:8080/api/singleFile", data: formData);

      String id = response.data as String;

      imageURL = "http://10.0.2.2:8080/api/singleFile/$id";

      List<Cookie> cookies = await SingletonDio.cookiemanager.cookieJar
          .loadForRequest(Uri.parse(imageURL));
      cookie = cookies.first;

      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            (imageURL == "" || cookie == null)
                ? const Text("Sélectionner une image")
                : ImageCookie(imageURL: imageURL, cookie: cookie!)
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: getImageAndSend,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
