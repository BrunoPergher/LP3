import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RoutesNoPrivateNavigationBetwensScreensParamsList} from '../models/RoutesNoPrivateNavigationBetwensScreensParamsList';
import HomeView from '../view/HomeView';
import LoginView from '../view/LoginView';
import RegisterView from '../view/RegisterView';
import SaveView from '../view/SaveView';
import ScannerView from '../view/ScannerView';
import ShareView from '../view/ShareView';

const Private =
  createNativeStackNavigator<RoutesNoPrivateNavigationBetwensScreensParamsList>();

export default function RoutesPrivate() {
  return (
    <Private.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="LoginView"
        component={LoginView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="RegisterView"
        component={RegisterView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="HomeView"
        component={HomeView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="ScannerView"
        component={ScannerView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="SaveView"
        component={SaveView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="ShareView"
        component={ShareView}
      />
    </Private.Navigator>
  );
}
