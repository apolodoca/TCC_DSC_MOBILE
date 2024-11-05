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
      <View style={Styles.App.mainContainer}>
        <Templates.AppName></Templates.AppName>
        <Templates.AppIcon></Templates.AppIcon>
        <TouchableOpacity style={Styles.App.button1}>
          <Text style={Styles.App.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.App.button2}>
          <Text style={Styles.App.buttonText}> <Link href={"./Entrar"}>Entrar</Link>
          </Text>
        </TouchableOpacity>
      </View>
  );

}

