import  {useEffect} from "react";
import { Link } from 'expo-router';
import {Styles} from "./styles";

// fonts
import { useFonts } from 'expo-font';
import {Button, Image, TouchableOpacity, View, } from "react-native";

export const Templates = {
    AppNameVoltar : function AppNameVoltar()
    {
        const Logo = require("../images/Logo.png")

        return (
            <View style={Styles.App.logotipoContainer}>
                <Image source={Logo} style={Styles.App.AppLogoVoltar}></Image>
            </View>
        )
    },
   AppName : function AppName()
{
    const Logo = require("../images/Logo.png")

    return (
        <View style={Styles.App.logotipoContainer}>
            <Image source={Logo} style={Styles.App.appLogo}></Image>
        </View>
    )
},
    AppIcon : function  AppIcon() {
    const Icon = require("../images/Icon.png")

    return (
        <View style={Styles.App.appIconContainer}>
            <Image source={Icon} style={Styles.App.appIcon}></Image>
        </View>
    )
},
    Sucesso : function  Sucesso() {
        const Icon = require("../images/Sucesso.gif")

        return (
            <View style={Styles.App.appIconContainer}>
                <Image source={Icon} style={Styles.App.appIcon}></Image>
            </View>
        )
    },
    Falha : function  Falha() {
        const Icon = require("../images/Falha.gif")

        return (
            <View style={Styles.App.appIconContainer}>
                <Image source={Icon} style={Styles.App.appIcon}></Image>
            </View>
        )
    },

 Voltar : function Voltar () {
     const Back = require("../images/Back.png")


     return (

        <View style={Styles.App.Voltar}>
            <TouchableOpacity>
                <Image source={Back} style={Styles.App.VoltarImg}></Image>
            </TouchableOpacity>
            <Templates.AppNameVoltar></Templates.AppNameVoltar>
      </View>

    )
 }




}