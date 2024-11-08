import {Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import  {useEffect, useState} from "react";
import { Link, router } from 'expo-router';
import * as Linking from 'expo-linking';

// Templates
import {Templates} from "../assets/Styles/Templates";

//Styles
import {Styles} from "../assets/Styles/styles";

// fonts
import { useFonts } from 'expo-font';

//zipzip.kepler@keplermail.com
//kepler123
export default function Entrar() {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink ] = useState('');
    const [loaded, error] = useFonts({

    });
    const onPress = function (){
        if(email == "zipzip.kepler@keplermail.com" && senha == "kepler123"){
            router.push("./zipzip");

        }
        else if (email == "bill.bora@gmail.com" && senha == "muie_do_bill"){
            router.push("./bill");
        }
        else {
            router.push("./Entrar");
        }
    };
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
            <TextInput  style={[Styles.Entrar.Input, {marginTop: 80} ] } onChangeText={newText => setEmail(newText) }  defaultValue={email} placeholder={"EMAIL"} ></TextInput>
            <TextInput style={[Styles.Entrar.Input, {marginTop: 30}]} defaultValue={senha} placeholder={"SENHA"} onChangeText={newText2 => setSenha(newText2) }></TextInput>
                <Text></Text>


                <TouchableOpacity style={[Styles.App.button2, {marginTop:370, backgroundColor: "#4787EA", marginBottom: "20%"} ]} onPress={onPress}  >
                <Text style={Styles.App.buttonText}>   Entrar     </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

