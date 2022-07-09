import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#rgba(254,188,56,0.75)",
      paddingVertical: 25
    },
    logo: {
      width: 125,
      height: 125,
      borderRadius: 100,
      marginBottom: 50,
      marginTop: -55
    },
    botao: {
      width: 160,
      height: 42,
      backgroundColor: "white",
      marginTop: -50,
      borderRadius: 8,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      flexDirection: "column",
      margin: -45
    },
    botaoText: {
      fontSize: 15,
      color: "black",
      fontFamily: "Arvo"
    },
    titulo: {
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      marginTop: -70
    },
    botaoLogout: {
      width: 210,
      height: 42,
      backgroundColor: "white",
      borderRadius: 9,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2
    },
    botaoTextLogout: {
      fontSize: 18,
      fontWeight: "bold"
    },
    botaoHome: {
      paddingStart: 18,
      marginTop: -70, 
    },
    iconUser: {
      flexDirection: "row",
      marginEnd: 120,
      marginTop: -22
    },
    botaoUser: {
      fontSize: 15,
      color: "black",
      fontFamily: "Arvo",
      flexDirection: "row",
      paddingTop: 7
    },
    logout: {
      flexDirection: "row"
    },
    iconLogout: {
     paddingRight: 7
    }
});

  export default styles;
  