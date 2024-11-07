import {Text, View, StyleSheet, Image, Button, TouchableOpacity,Pressable, ScrollView, Dimensions} from 'react-native';
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

export default function Zipzip() {
    const Perfil = require("../assets/images/Perfil.png")
    const Engrenagem = require("../assets/images/Engrenagem.png")
    const Ponto = require("../assets/images/Relogio.png")
    const onPress = function (){

        router.push("./pontoZipzip")


    }





    return(
        <ScrollView>
            <View style={[Styles.App.MainView, {height: Dimensions.get('window').height * 0.25}]}>
                <Templates.AppName></Templates.AppName>
            </View>


            <View style={{alignItems:"center", marginBottom:"20%"}}>
                <Templates.AppIcon></Templates.AppIcon>
                <Text style={Styles.zipzip.BoaVinda}>Sistema de ponto el-point</Text>
            </View>



            <View style={Styles.zipzip.Cabecalho}>
                <View style={[{marginRight: "13%"}, {alignItems:"center"}, {marginLeft:20}]}>
                    <Image source={Perfil} style={Styles.zipzip.Images}></Image>
                    <Text style={[{fontSize : 15}, {fontWeight: "bold"}]}>PERFIL</Text>
                </View>
                <TouchableOpacity style={[{marginRight:"10%"}, {alignItems:"center"}]} onPress={onPress}>
                    <Image source={Ponto} style={Styles.zipzip.Images}></Image>
                    <Text style={[{fontSize:15}, {fontWeight:"bold"}]}>BATER PONTO</Text>
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
                    <Image source={Engrenagem} style={Styles.zipzip.Images}></Image>
                    <Text style={[{fontSize : 15}, {fontWeight: "bold"}]}>CONFIGURAÇÕES</Text>
                </View>
            </View>
        </ScrollView>




    )


}