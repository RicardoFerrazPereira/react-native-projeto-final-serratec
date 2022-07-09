import {
    Ball, Container, Header, Title, Body,
    BotaoSalvar, TextoBotaoSalvar,
    ContainerInternoModal, ContainerModal, TextoModal, BotaoOk, Input
} from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Modal } from "react-native";
import { useState } from "react";
import api from "./../../services/api";
import TabBar from './../../components/TabBar/index'


const CadastrarCategoria = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState();
    const [foto, setFoto] = useState();

    const salvarCategoria = () => {
        try {
            api
                .post("/categoria", { nome, foto })
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
        setNome("")
        setFoto("")
       
      }
        
    return (
        <Container>
            <Header>
                <Ball>
                    <Ionicons name="md-caret-back-circle-sharp" size={40} color="black" />
                </Ball>
                <Title>Cadastrar Categoria</Title>
                <Ball>
                    <MaterialIcons name="category" size={40} color="black" />
                </Ball>
            </Header>
           
            <Body>
                <Input 
                    placeholder="nome" 
                    onChangeText={setNome} 
                    value={nome} 
                />
                <Input
                    placeholder="link da foto"
                    onChangeText={setFoto}
                    value={foto}
          />
                <BotaoSalvar 
                    onPress={() => {
                    salvarCategoria();
                 }}
                >
                    <TextoBotaoSalvar>Salvar</TextoBotaoSalvar>
                </BotaoSalvar>
            </Body>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <ContainerModal>
                    <ContainerInternoModal>
                        <TextoModal>CATEGORIA SALVA COM SUCESSO</TextoModal>
                        <BotaoOk onPress={() => {Limpar()}}>
                            <TextoModal>OK</TextoModal>
                        </BotaoOk>
                    </ContainerInternoModal>
                </ContainerModal>
            </Modal>
            <TabBar />
        </Container>
    );
};

export default CadastrarCategoria;