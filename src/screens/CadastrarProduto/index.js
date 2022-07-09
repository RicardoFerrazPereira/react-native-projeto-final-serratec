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
import { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Modal } from "react-native";
import api from "./../../services/api";
import TabBar from './../../components/TabBar/index'

const CadastrarProduto = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const [qtdEstoque, setQtdEstoque] = useState();
  const [descricao, setDescricao] = useState();
  const [foto, setFoto] = useState();
  

  const salvarProduto = () => {
    try {
      api
        .post("/produto", { nome, preco, foto, qtdEstoque, descricao })
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

  const Limpar = () => {
    setModalVisible(!modalVisible)
    setDescricao("")
    setNome("")
    setFoto("")
    setQtdEstoque("")
    setPreco("")
  }
  
  return (
    <Container>
      <ContainerInterno>
        <Header>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
          <TituloPag>Cadastrar Produto</TituloPag>
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
            salvarProduto();
          }}
        >
          <TextoBotao>Cadastrar</TextoBotao>
        </BotaoSalvar>
      </ContainerInterno>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ContainerModal>
          <ContainerInternoModal>
            <TextoModal>PRODUTO SALVO COM SUCESSO</TextoModal>
            <BotaoOk onPress={() => {Limpar()}}>
              <TextoModal>OK</TextoModal>
            </BotaoOk>
          </ContainerInternoModal>
        </ContainerModal>
      </Modal>
      <TabBar/>
    </Container>
  );
};

export default CadastrarProduto;
