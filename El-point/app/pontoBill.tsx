import {Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
import {useEffect, useState} from "react";
import {Link, router} from 'expo-router';


// templates
import {Templates} from "../assets/Styles/Templates";
// styles
import {Styles} from "../assets/Styles/styles";

// fonts
import {useFonts} from 'expo-font';

//time





//localização
export const Localizacao = "Colégio Estadual Leôncio Correia"

function onPress(){
    router.push('./ProximityBill');
}

export  function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
    return(formatTime(currentTime));
}


export default function App() {


        const Ponto = require("../assets/images/Relogio.png")


    const horario = Clock();


    return (
        <ScrollView >
            <View style={[Styles.App.MainView, {height: Dimensions.get('window').height * 0.25}]}>
                <Templates.AppName></Templates.AppName>
            </View>
            <View style={[{alignItems:"center"}, {marginTop:20}]}>
                <Image source={Ponto} style={Styles.zipzip.Relogio}></Image>
                <Text style={[{fontSize: 25}, {fontWeight: "bold"}]}>Bater ponto</Text>
                <Text style={[{fontSize: 25}, {fontWeight: "bold"}]}>{horario}</Text>
                <Text style={[{fontSize: 25}, {fontWeight: "bold"}]}>Localização: {Localizacao}</Text>
                <TouchableOpacity style={[Styles.App.button2, {marginTop:370, backgroundColor: "#4787EA", marginBottom: "20%"} ]} onPress={onPress}  >
                    <Text style={Styles.App.buttonText}>Bater Ponto</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );

}

