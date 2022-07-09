import {
  BolinhaBranca,
  Cabecalho,
  Container,
  Titulo,
  Logo,
  EntradaTexto,
  Botao,
  TextoBotao,
  ContainerModal,
  ContainerInterno,
  ContainerInternoModal,
  TextoModal,
  BotaoDeConfirmacao,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TabBar from "../../components/TabBar";
import { Modal } from "react-native";
import { useState } from "react";
import api from "../../services/api";
import { useNavigation } from '@react-navigation/native';

const CadastrarUsuario = () => {

  const navigation = useNavigation();

  const TelaUsuario = () => {
    navigation.navigate('Usuario')
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [dtNascimento, setDtNascimento] = useState();
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [foto, setFoto] = useState();

  const salvarUsuario = () => {
    try {
      api
        .post("/usuario", { nome, cpf, dtNascimento, login, senha })
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            setModalVisible(true);
          }
        });
    } catch (erro) {
      alert(erro.data.message);
    }
  };
  const Limpar = () => {
    setModalVisible(!modalVisible);
    setNome("");
    setCpf("");
    setDtNascimento("");
    setLogin("");
    setSenha("");
  };

  return (
    <>
      <Container>
        <ContainerInterno>
          <Cabecalho>
            <BolinhaBranca>
              <Ionicons
                name="arrow-back-circle-outline"
                size={30}
                color="black"
                onPress={TelaUsuario}
              />
            </BolinhaBranca>
            <Titulo>Cadastrar Usuário</Titulo>
            <BolinhaBranca>
              <FontAwesome5 name="user-circle" size={30} color="black" />
            </BolinhaBranca>
          </Cabecalho>
          <Logo source={require("../../../assets/adicionarUsuario.png")} />
          <EntradaTexto
            placeholder={"Nome"}
            onChangeText={setNome}
            value={nome}
          />
          <EntradaTexto
            placeholder={"Foto"}
            onChangeText={setFoto}
            value={foto}
          />
          <EntradaTexto placeholder={"CPF"} onChangeText={setCpf} value={cpf} />
          <EntradaTexto
            placeholder={"Data de nascimento"}
            onChangeText={setDtNascimento}
            value={dtNascimento}
          />
          <EntradaTexto
            placeholder={"Login"}
            onChangeText={setLogin}
            value={login}
          />
          <EntradaTexto
            placeholder={"Senha"}
            onChangeText={setSenha}
            value={senha}
          />
          <Botao
            onPress={() => {
              salvarUsuario();
            }}
          >
            <TextoBotao>SALVAR</TextoBotao>
          </Botao>
        </ContainerInterno>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ContainerModal>
            <ContainerInternoModal>
              <TextoModal>USUARIO CADASTRADO COM SUCESSO!</TextoModal>
              <BotaoDeConfirmacao
                onPress={() => {
                  Limpar();
                }}
              >
                <TextoModal>OK</TextoModal>
              </BotaoDeConfirmacao>
            </ContainerInternoModal>
          </ContainerModal>
        </Modal>
        <TabBar />
      </Container>
    </>
  );
};

export default CadastrarUsuario;