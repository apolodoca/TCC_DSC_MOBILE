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
        Input: {

            flex:1,
            width: '95%',
            margin: 12,
            borderWidth: 2,
            padding: 10,
            fontSize:20,
            backgroundColor: "#F1F5F4",
            borderRadius: 25,
            borderColor: "#474747",

        },


    }),
    zipzip : StyleSheet.create({
        BoaVinda :{
            fontSize:25,
            fontWeight:'bold',
        },
        Cabecalho:{
            backgroundColor:"#515151",
            flexDirection:"row"
        },
        Images:{
            width:50,
            height:50
        }


    }),
}
