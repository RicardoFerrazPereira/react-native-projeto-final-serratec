import {
  Container,
  Header,
  TituloPag,
  ContainerInput,
  Input,
  BotaoSalvar,
  TextoBotao,
  ContainerInterno,
  ContainerModal,
  BotaoOk,
  TextoModal,
  ContainerInternoModal,
} from "./styles";
import { useState, useEffect } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Modal } from "react-native";
import api from "./../../services/api";
import TabBar from './../../components/TabBar/index';
import { useNavigation } from "@react-navigation/native";

const EditarProduto = () => {

  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate("Produtos");
  };


  const [modalVisible, setModalVisible] = useState(false);

  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const [qtdEstoque, setQtdEstoque] = useState();
  const [descricao, setDescricao] = useState();
  const [foto, setFoto] = useState();

  useEffect(() => {
    api.get("/produto/1").then((response) => {
      console.log(response.data)
      setNome(response.data.nome)
      setPreco(response.data.preco)
      setQtdEstoque(response.data.qtdEstoque)
      setDescricao(response.data.descricao)
      setFoto(response.data.foto)
    });
  }, []); 

  
  const editarProduto = () => {
    try {
      api
        .put("/produto/1", { nome, preco, foto, qtdEstoque, descricao })
        .then((response) => {
          if (response.status === 200) {
            console.log(response)
            setModalVisible(true);
          }
        });
    } catch (err) {
      alert(err.data.message);
    }
  };
  
  return (
    <Container>
      <ContainerInterno>
        <Header>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" onPress={TelaAnterior} />
          <TituloPag>Editar Produto</TituloPag>
          <Feather name="shopping-bag" size={38} color="black" />
        </Header>
        <ContainerInput>
          <Input placeholder="nome" onChangeText={setNome} value={nome} />
          <Input
            placeholder="descrição"
            onChangeText={setDescricao}
            value={descricao}
          />
          <Input
            placeholder="estoque"
            onChangeText={setQtdEstoque}
            value={qtdEstoque}
          />
          <Input placeholder="preco" onChangeText={setPreco} value={preco} />
          <Input
            placeholder="link da foto"
            onChangeText={setFoto}
            value={foto}
          />
        </ContainerInput>
        <BotaoSalvar
          onPress={() => {
            editarProduto();
          }}
        >
          <TextoBotao>Editar</TextoBotao>
        </BotaoSalvar>
      </ContainerInterno>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ContainerModal>
          <ContainerInternoModal>
            <TextoModal>PRODUTO EDITADO COM SUCESSO</TextoModal>
            <BotaoOk onPress={() => setModalVisible(!modalVisible) }>
              <TextoModal>OK</TextoModal>
            </BotaoOk>
          </ContainerInternoModal>
        </ContainerModal>
      </Modal>
      <TabBar/>
    </Container>
  );
};

export default EditarProduto;
