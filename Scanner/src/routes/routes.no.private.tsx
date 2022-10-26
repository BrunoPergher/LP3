import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { RoutesNoPrivateNavigationBetwensScreensParamsList } from "../models/RoutesNoPrivateNavigationBetwensScreensParamsList";
import HomeView from "../view/HomeView";
import SaveView from '../view/SaveView';
import ScannerView from "../view/ScannerView";

const Private = createNativeStackNavigator<RoutesNoPrivateNavigationBetwensScreensParamsList>();

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
                name="HomeView" component={HomeView}
            />

            <Private.Screen
                options={{
                    headerShown: false,
                }}
                name="ScannerView" component={ScannerView}
            />

            <Private.Screen
                options={{
                    headerShown: false,
                }}
                name="SaveView" component={SaveView}
            />

        </Private.Navigator>
    )
}