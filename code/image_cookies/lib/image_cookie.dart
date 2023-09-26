import 'dart:io';

import 'package:flutter/material.dart';

class ImageCookie extends StatefulWidget {
  const ImageCookie({Key? key, required this.imageURL, required this.cookie }) : super(key: key);

  final String imageURL;
  final Cookie cookie;

  @override
  State<ImageCookie> createState() => _ImageCookieState();
}

class _ImageCookieState extends State<ImageCookie> {
  @override
  Widget build(BuildContext context) {
    return Image.network(widget.imageURL, headers:{'Cookie':"${widget.cookie.name}=${widget.cookie.value}"});
  }
}
