import React from "react";
import {
  Container,
  ContainerModal,
  ContainerInternoModal,
  Ball,
  Header,
  Title,
  Body,
  BotaoSalvar,
  TextoBotaoSalvar,
  Input,
  TextoModal,
  BotaoOk,
} from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TabBar from "../../components/TabBar";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';

const EditarCategoria = ({ route }) => {
  const navigation = useNavigation();

  const { itemId } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const [nome, setNome] = useState();
  const [foto, setFoto] = useState();

  useEffect(() => {
    api.get(`categoria/${itemId.id}`).then((response) => {
      setNome(response.data.nome);
      setFoto(response.data.foto);
    });
  }, []);

  const editarCategoria = () => {
    try {
      api.put(`categoria/${itemId.id}`, { nome, foto }).then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          setModalVisible(true);
        }
      });
    } catch (err) {
      alert(err.data.message);
    }
  };

  const Categoria = () => {
    navigation.navigate("ConsultarCategoria");
  };

  const FecharModal = () => {
    setModalVisible(false);
    Categoria()
  };

  return (
    <Container>
      <Header>
        <Ball>
          <Ionicons name="md-caret-back-circle-sharp" size={40} color="black" />
        </Ball>
        <Title>Editar Categoria</Title>
        <Ball>
          <MaterialIcons name="category" size={40} color="black" />
        </Ball>
      </Header>

      <Body>
        <Input placeholder="nome" onChangeText={setNome} value={nome} />
        <Input placeholder="link da foto" onChangeText={setFoto} value={foto} />
        <BotaoSalvar
          onPress={() => {
            editarCategoria();
          }}
        >
          <TextoBotaoSalvar>Salvar</TextoBotaoSalvar>
        </BotaoSalvar>
      </Body>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ContainerModal>
          <ContainerInternoModal>
            <TextoModal>CATEGORIA ALTERADA COM SUCESSO</TextoModal>
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
      <TabBar />
    </Container>
  );
};

export default EditarCategoria;
