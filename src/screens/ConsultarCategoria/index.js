import React, { useEffect, useState } from "react";
import {
  Ball,
  Box,
  BoxAll,
  Container,
  Icones,
  IconesModificacao,
  Imagem,
  ImagemCateg,
  BallIcone,
  TextBox,
  Title,
  TitleIcon,
  Top,
  Cards,
  ViewApi,
  TextName,
  ViewCaixa,
  Caixa,
  ContainerModal,
  ContainerInternoModal,
  TextoModal,
  BotaoOk
} from "./styles";
import { Ionicons, MaterialIcons, Foundation } from "@expo/vector-icons";
import TabBar from "../../components/TabBar";
import { useNavigation } from "@react-navigation/native";
import { Modal, FlatList, Image } from "react-native";
import api from "../../services/api";

const ConsultarCategoria = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate("Categoria");
  };

  const OpenSreenCadastrarCategoria = () => {
    navigation.navigate("CadastrarCategoria");
  };

  const OpenSreenEditarCategoria = () => {
    navigation.navigate("EditarCategoria");
  };


  
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategoria();
  }, []);

  const getCategoria = () => {
    api.get("/categoria").then((response) => {
      setCategorias(response.data);
    });
  };

  const DeletarCategoria = (id) => {
    api.delete(`categoria/${id}`).then(() => {
      setModalVisible(true);
    });
  };

  const FecharModal = () => {
    setModalVisible(false)
    getCategoria()
  }
  const Item = ({ name, foto, id }) => (
    <Cards>
      <ViewApi>
        <Image style={{ width: 60, height: 60 }} source={{ uri: foto }} />
      </ViewApi>
      <TextName>{name}</TextName>
      <ViewCaixa>
        <Caixa
          onPress={() => {
            navigation.navigate("EditarCategoria", {
              itemId: { id },
            });
          }}
        >
          <MaterialIcons name="edit" size={18} color="black" onPress={OpenSreenEditarCategoria} />
        </Caixa>
        <Caixa
          onPress={() => {
            DeletarCategoria(id);
          }}
        >
          <Foundation name="trash" size={18} color="black" />
        </Caixa>
      </ViewCaixa>
    </Cards>
  );

  const ItemRenderizado = ({ item }) => (
    <Item name={item.nome} foto={item.foto} id={item.id} />
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
        <Title>Consultar Categoria</Title>
        <Ball>
          <MaterialIcons name="category" size={34} color="black" />
        </Ball>
      </Top>

      <FlatList
        data={categorias}
        renderItem={ItemRenderizado}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />

      <Icones>
        <IconesModificacao>
          <Ball>
            <MaterialIcons name="library-add" size={24} color="black" onPress={OpenSreenCadastrarCategoria} />
          </Ball>
          <TitleIcon>Adicionar</TitleIcon>
        </IconesModificacao>
      </Icones>
      <TabBar />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ContainerModal>
          <ContainerInternoModal>
            <TextoModal>CATEGORIA EXCLUÍDA COM SUCESSO</TextoModal>
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

export default ConsultarCategoria;
