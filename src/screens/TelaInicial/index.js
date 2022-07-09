import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5, Fontisto } from '@expo/vector-icons';
import styles from "./styles";

export default function TelaInicial({ navigation }) {
  return (
  <View style={styles.container}>
    <View style={{flexDirection: "row"}}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      {/* <MaterialCommunityIcons style={styles.botaoHome}
      name="home-circle-outline" size={55} color="black" 
      onPress={() => navigation.navigate("Login")} /> */}
    </View>
    <Image
      source={require("../../../assets/logo.jpg")}
      style={styles.logo}
    />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Usuario")}
      >  
        <Text style={styles.botaoUser}>   USUÁRIO</Text>
      <FontAwesome5 style={styles.iconUser} name="user-circle" size={25} color="black" /> 
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Categoria")}
      >
        <Text style={styles.botaoText}>   CATEGORIA</Text>
        <Fontisto style={styles.iconUser} name="shopping-store" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.botaoText}>  PRODUTO</Text>
        <Fontisto style={styles.iconUser} name="shopping-bag" size={20} color="black" />
      </TouchableOpacity>
    <TouchableOpacity
      style={styles.botaoLogout}
      onPress={() => navigation.navigate("Login")}
    >
      <View style={styles.logout}>
        <AntDesign style={styles.iconLogout} name="logout" size={24} color="black" />
        <Text style={styles.botaoTextLogout}>LOGOUT</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};