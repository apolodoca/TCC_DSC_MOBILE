import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import  {useEffect} from "react";


// fonts
import { useFonts } from 'expo-font';


export function AppName (){
  const Logo = require("./assets/images/Logo.png")

  return(
      <View style={styles.logotipoContainer}>
        <Image source={Logo} style={styles.appLogo}></Image>
      </View>
  )
}
export function AppIcon (){
  const Icon = require("./assets/images/Icon.png")

  return(
      <View style={styles.appIconContainer}>
        <Image source={Icon} style={styles.appIcon}></Image>
      </View>
  )
}


export default function App() {

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
      <View style={styles.mainContainer}>
        <AppName></AppName>
        <AppIcon></AppIcon>
        <TouchableOpacity style={styles.button1} >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} >
          <Text style={styles.buttonText}>    Entrar    </Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#7A9DD2",
  },

  logotipoContainer:{
    alignItems: "center",
    justifyContent:"center",
    marginTop:"7%"

  },
  appLogo: {
    height: 200,
    width: 400,
    },
  appIcon : {
    height: 200,
    width: 300,
    marginTop: "15%"
  },
  appIconContainer:{
    alignItems: "center",
  },

  button1:{
    backgroundColor: "#FF9900",
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
    borderRadius: 20,
    marginTop: "30%"
  },
  button2:{
    backgroundColor: "#4B577E",
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
    borderRadius: 20,
    marginTop: "3%"
  },
  buttonText:{
    fontSize: 30,
    fontFamily: "Chewy",
    color: "#ffffff",

  },


});
