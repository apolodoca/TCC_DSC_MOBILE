import {Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import  {useEffect} from "react";
import { Link } from 'expo-router';

// Templates
import {Templates} from "../assets/Styles/Templates";

//Styles
import {Styles} from "../assets/Styles/styles";

// fonts
import { useFonts } from 'expo-font';



export default function Entrar() {

    const [loaded, error] = useFonts({

    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <ScrollView style={Styles.App.MainView}>
        <View style={Styles.App.mainContainer}>
            <Templates.Voltar></Templates.Voltar>
            <TextInput style={Styles.Entrar.InputEmail} placeholder={"EMAIL"}></TextInput>
            <TextInput style={Styles.Entrar.InputSenha} placeholder={"SENHA"}></TextInput>




            <TouchableOpacity style={Styles.App.button2} >
                <Text style={Styles.App.buttonText}>   <Link href={"El-point/assets/pages/Entrar.tsx"}>Entrar</Link>     </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

