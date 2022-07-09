import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  ImagemLogo,
  Botoes,
  StyleBotoes,
  TextBotoes,
  Ball,
  BallIcone,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import TabBar from './../../components/TabBar/index';

const Produtos = () => {

  const navigation = useNavigation();

  function openScreenConsultaDeProdutos() {
    navigation.navigate("ConsultarProdutos");
  }

  function openScreenCadastrarProduto() {
    navigation.navigate("CadastrarProduto");
  }
  
  function openScreenTelaInicial() {
    navigation.navigate("TelaInicial");
  }

  return (
    <Container>
      <Header>
      <Ball><Ionicons name="md-caret-back-circle-sharp" size={34} color="black" onPress={openScreenTelaInicial} /></Ball>
        <Title>Produtos</Title>
        <BallIcone>
        <MaterialIcons 
          name="shopping-bag" 
          size={34} 
          color="black" 
        />
      </BallIcone>
      </Header>
      <ImagemLogo source={require("../../../assets/pacman1.png")} />
      <Botoes>
        <StyleBotoes onPress={openScreenConsultaDeProdutos}>
          <TextBotoes>Consultar Produto</TextBotoes>
        </StyleBotoes>
        <StyleBotoes onPress={openScreenCadastrarProduto}>
          <TextBotoes>Cadastrar Produto</TextBotoes>
        </StyleBotoes> 
      </Botoes>
      <TabBar />
    </Container>
  );
};

export default Produtos;
