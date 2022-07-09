import React, { useState, useEffect } from 'react';
import { Image, View, Text, FlatList } from 'react-native';
import { Ball, Box, BoxAll, Caixa, Cards, Container, FlatCard, Icones, IconesModificacao, Imagem, ImagemCard, ImagemCateg, Rodape, TextBox, TextCards, TextIcon, TextName, Title, TitleIcon, Top, ViewApi, ViewCaixa, ViewFlatList, ViewImagem, ViewImagens } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import TabBar from '../../components/TabBar';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const ConsultarUsuario = () => {

  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate('Usuario')
  }
  

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = () => {
    api.get('/usuario').then((response) => {
      //console.log("update categoria");
      // console.log(response.data);
      setUsuarios(response.data);
    });
  
} 
const Item = ({ nome, cpf, dtNascimento, login, ativo, senha, foto }) => (
  
  <Cards>
    <ViewApi>
      <Image
        style={{ width: 80, height: 80 }}
        source={{ uri: foto }}
      />
    </ViewApi>
    <View>
      <TextName>Nome: {nome}</TextName>
      <TextName>CPF: {cpf}</TextName>
      <TextName>Nasc.: {dtNascimento}</TextName>
      <TextName>Login: {login}</TextName>
      <TextName>{ativo}</TextName>
      <TextName>Senha: {senha}</TextName>
      <TextName>{foto.data}</TextName>
    </View>  

    <ViewCaixa>
      <Caixa>
        <MaterialIcons
          name="edit"
          size={18}
          color="black"          
        />
      </Caixa>
      <Caixa>
        <Foundation
          name="trash"
          size={18}
          color="black"
        />
      </Caixa>
    </ViewCaixa>
  </Cards>
);
  // fim teste

  // useEffect(() => {
  //   api.get('/categoria').then((response) => {
  //     //console.log("update categoria");
  //     // console.log(response.data);
  //     setCategorias(response.data);
  //   });
  // }, []);

  
  const ItemRenderizado = ({ item }) => (
    <Item
      nome={item.nome}
      cpf={item.cpf}
      dtNascimento={item.dtNascimento}
      login={item.login}
      ativo={item.ativo}
      senha={item.senha}
      foto={item.foto}
    />
  );

  return (
    <Container>
      <Top>
        <Ball>
          <Ionicons
            name="md-caret-back-circle-sharp"
            size={34}
            color="black"
            onPress={TelaAnterior}
            
          />
        </Ball>
        <Title>Consultar Usuario</Title>
        <Ball>
          <MaterialIcons
            name="category"
            size={34}
            color="black"
          />
        </Ball>
      </Top>
      
      <FlatList
        data={usuarios}
        renderItem={ItemRenderizado}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
      
      <Icones>
        <IconesModificacao>
          <Ball>
            <MaterialIcons name="library-add" size={24} color="black" />
          </Ball>
          <TitleIcon>Adicionar</TitleIcon>
        </IconesModificacao>        
      </Icones>
      <TabBar />
    </Container>

  );
  }
  
export default ConsultarUsuario;