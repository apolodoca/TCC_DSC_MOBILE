import {StyleSheet} from "react-native";

export const Styles = {

    App : StyleSheet.create({
    mainContainer: {
        height: '100%',
        alignItems: 'center',
        backgroundColor:"#7A9DD2",
    },

    logotipoContainer:{
        alignItems: "center",
        justifyContent:"center",
        marginTop:"7%"

    },
    appLogo: {
        height: 130,
        width: 300,
    },
    appIcon : {
        height: 300,
        width: 400,
        marginTop: "15%"
    },
    appIconContainer:{
       marginTop: 0,
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
        paddingLeft: 70,
        paddingRight: 70,
        padding: 10,
        borderRadius: 20,
        marginTop: "3%"
    },
    buttonText:{
        fontSize: 30,
        color: "#ffffff",

    },
    Voltar:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    VoltarImg : {
        marginTop: 50,
        width: 100,
      height: 100,
    },
    AppLogoVoltar : {

        marginTop: 0,
        width: 220,
        height: 90,

    },
    MainView:{
        backgroundColor:"#7A9DD2",
    }

}),
    Entrar : StyleSheet.create({
        InputEmail: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        InputSenha: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize:20
        }

    })
}
