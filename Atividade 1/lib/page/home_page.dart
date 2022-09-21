import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:first_aplication/main.dart';
import 'package:first_aplication/provider/theme_provider.dart';
import 'package:first_aplication/widget/change_theme_button_widget.dart';

import 'navigationbar_widget.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final text = Provider.of<ThemeProvider>(context).themeMode == ThemeMode.dark
        ? 'Dark'
        : 'Light';

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text(MyApp.title),
        actions: [
          ChangeThemeButtonWidget(),
        ],
      ),
      body: Center(
        child: Text(
          'Theme: \n $text!',
          style: TextStyle(
            fontSize: 50,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
