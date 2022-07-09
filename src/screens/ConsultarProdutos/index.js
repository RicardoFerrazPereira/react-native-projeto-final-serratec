import React, { useState, useEffect } from "react";
import { Ionicons, Foundation, MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, Modal } from "react-native";
import { Informacoes, TextNameDescricao, TextNameEstoque, TextNameTitulo, TextNamePreco, Ball, BotaoOk, Caixa, Cards, Container, ContainerInternoModal, ContainerModal, Icones, IconesModificacao, TextName, TextoModal, Title, TitleIcon, Top, ViewApi, ViewCaixa } from "./styles";
import { useNavigation } from "@react-navigation/native";
import TabBar from "./../../components/TabBar/index";
import api from "../../services/api";

const ConsultarProdutos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate("Produtos");
  };

  const OpenScreenCadastrarProdutos = () => {
    navigation.navigate("CadastrarProduto");
  };

  const OpenScreenEditarProdutos = () => {
    navigation.navigate("EditarProduto");
  };

  const [produtos, setProdutos] = useState([]);

  const getProdutos = () => {
    api.get("/produto").then((response) => {
      setProdutos(response.data);
    });
  };
  const DeletarProduto = (id) => {
    api.delete(`produto/${id}`).then(() => {
      setModalVisible(true);
    });
  };

  const FecharModal = () => {
    setModalVisible(false)
    getCategoria()
  }

  useEffect(() => {
    getProdutos();
  }, []);

  const Item = ({ name, foto, description, price, inventory }) => (
    <Cards>
      <ViewApi>
      <Image
          style={{ width: 60, height: 60 }}
          source={{ uri: foto }}
        />
      </ViewApi>
      <Informacoes>
        <TextNameTitulo>{name}</TextNameTitulo>
        <TextNamePreco>Preço: {price}</TextNamePreco>
        <TextNameEstoque>Estoque: {inventory}</TextNameEstoque>
        <TextNameDescricao>Descrição: {description}</TextNameDescricao>
      </Informacoes>
      <ViewCaixa>
        <Caixa>
          <MaterialIcons name="edit" size={18} color="black" onPress={OpenScreenEditarProdutos} />
        </Caixa>
        <Caixa
          onPress={() => {
            DeletarProduto(id);
          }}
        >
          <Foundation name="trash" size={18} color="black" />
        </Caixa>
      </ViewCaixa>
    </Cards>
  );

  const ItemRenderizado = ({ item }) => (
    <Item
      name={item.nome}
      description={item.descricao}
      foto={item.foto}
      price={item.preco}
      inventory={item.qtdEstoque}
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
        <Title>Consultar Produtos</Title>
        <Ball>
          <MaterialIcons name="category" size={34} color="black" />
        </Ball>
      </Top>

      <FlatList
        data={produtos}
        renderItem={ItemRenderizado}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />

      <Icones>
        <IconesModificacao>
          <Ball>
            <MaterialIcons name="library-add" size={24} color="black" onPress={OpenScreenCadastrarProdutos} />
          </Ball>
          <TitleIcon>Adicionar</TitleIcon>
        </IconesModificacao>
      </Icones>
      <TabBar />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ContainerModal>
          <ContainerInternoModal>
            <TextoModal>PRODUTO EXCLUÍDO COM SUCESSO</TextoModal>
            <BotaoOk
              onPress={() => {
                FecharModal();
              }}
            >
              <TextoModal>OK</TextoModal>
            </BotaoOk>
          </ContainerInternoModal>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default ConsultarProdutos;
