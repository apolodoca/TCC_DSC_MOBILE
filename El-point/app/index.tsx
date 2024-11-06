import {Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
import {useEffect} from "react";
import {Link, router} from 'expo-router';


// templates
import {Templates} from "../assets/Styles/Templates";
// styles
import {Styles} from "../assets/Styles/styles";

// fonts
import {useFonts} from 'expo-font';

export default function App() {
    function onClick(){
        router.push("./Entrar");

    }




  return (
      <View style={Styles.App.mainContainer}>
        <Templates.AppName></Templates.AppName>
        <Templates.AppIcon></Templates.AppIcon>
        <TouchableOpacity style={Styles.App.button1}>
          <Text style={Styles.App.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.App.button2} onPress={onClick}>
          <Text style={Styles.App.buttonText}> Entrar
          </Text>
        </TouchableOpacity>
      </View>
  );

}

