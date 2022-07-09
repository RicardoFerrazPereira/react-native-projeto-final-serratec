import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categoria from "../screens/Categoria";
import ConsultarCategoria from "../screens/ConsultarCategoria";
import Produtos from './../screens/Produtos/index';
import ConsultarProdutos from './../screens/ConsultarProdutos/index';
import Usuario from './../screens/Usuario/index';
import ConsultarUsuario from './../screens/ConsultarUsuario/index';
import CadastrarProduto from "../screens/CadastrarProduto";
import AlterarProduto from '../screens/AlterarProduto'
import CadastrarCategoria from "../screens/CadastrarCategoria";
import Login from "../screens/Login";
import TelaInicial from "../screens/TelaInicial";
import CadastrarUsuario from "../screens/CadastrarUsuario";
import EditarCategoria from './../screens/EditarCategoria/index';
import EditarProduto from './../screens/AlterarProduto/index';
const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Categoria'
        component={Categoria}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ConsultarCategoria'
        component={ConsultarCategoria}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='CadastrarCategoria'
        component={CadastrarCategoria}
        options={{
          headerShown: false
        }}
      />
         <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ConsultarProdutos"
        component={ConsultarProdutos}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Usuario"
        component={Usuario}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ConsultarUsuario"
        component={ConsultarUsuario}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="CadastrarProduto"
        component={CadastrarProduto}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="AlterarProduto"
        component={AlterarProduto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastrarUsuario"
        component={CadastrarUsuario}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="EditarProduto"
        component={EditarProduto}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="EditarCategoria"
        component={EditarCategoria}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}
export default Rotas;