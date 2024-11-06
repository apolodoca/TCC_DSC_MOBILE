import {Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
import {useEffect} from "react";
import {Link} from 'expo-router';


// templates
import {Templates} from "../assets/Styles/Templates";
// styles
import {Styles} from "../assets/Styles/styles";

// fonts
import {useFonts} from 'expo-font';

export default function App() {

    const [loaded, error] = useFonts({});

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    return (
        <Text>amostradinho</Text>
    );

}