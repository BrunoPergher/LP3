import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesNoPrivateNavigationBetwensScreensParamsList } from "../models/RoutesNoPrivateNavigationBetwensScreensParamsList";

export function navigationNoPrivate() {
    const navigation = useNavigation<
        NativeStackNavigationProp<
            RoutesNoPrivateNavigationBetwensScreensParamsList>>();

    return navigation;
}