import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "rgba(254,188,56,0.75)"
    },
    logo: {
      width: 125,
      height: 125,
      borderRadius: 100,
      marginTop: 10
    },
    botao: {
      width: 140,
      height: 42,
      backgroundColor: "white",
      marginTop: 80,
      borderRadius: 9,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      marginVertical: -30
    },
    botaoText: {
      fontSize: 15,
      fontWeight: "regular",
      color: "black",
      fontFamily: "Arvo"
    },
    input: {
      padding: 9,
      width: 220,
      backgroundColor: "white",
      fontSize: 16,
      borderRadius: 9,
      borderColor: "black",
      borderWidth: 2,
      margin: -28,
      fontFamily: "Arvo"
    },
    textLink: {
      fontSize: 14.7,
      fontWeight: "regular",
      color: "black",
      fontFamily: "Arvo",
      margin: -37
    },
    titulo: {
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      marginTop: -70
    },
    eye: { 
      color: "black",
      position: "absolute",
      marginStart: 175,
      paddingTop: 150
    }
  });

export default styles;