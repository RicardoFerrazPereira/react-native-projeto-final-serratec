import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

export default function Login ({ navigation }) {
  
  const [senha, setSenha] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Login</Text>
      <Image
        source={require("../../../assets/logo.jpg")}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        label="Login"
        onChangeText={() => {}}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        label="Senha"
        secureTextEntry={senha} 
        onChangeText={value => {senha}}
        
        />
      <Ionicons style={styles.eye}
      name={senha ? "eye" : "eye-off"}
      onPress={() => setSenha(!senha)}
      size={22}
      />
       
      
      <Text style={styles.textLink}
        onPress={() => { }} >Esqueceu a Senha? Clique aqui</Text>
      <TouchableOpacity 
        style={styles.botao}
        // onPress={validate}
        onPress={() => navigation.navigate("TelaInicial")}
      >
        <Text style={styles.botaoText}>ENTRAR</Text>
      </TouchableOpacity>
      {/* <Text style={styles.textLink}
        onPress={() => { }}>Não possui cadastro? Cadastre-se!</Text> */}
    </View>
  );
}

