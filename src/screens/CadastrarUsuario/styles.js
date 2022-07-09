import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(254,188,56,0.75);
  justify-content:space-between;
`;

export const ContainerInterno = styled.View`
flex:0.95;
justify-content: space-evenly;
`;

export const Cabecalho = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.Image`
width: 80px;
height: 80px;
align-self: center;
`;

export const Titulo = styled.Text`
font-size: 15px;
color:black;
font-weight:700;
justify-content: center;
`;

export const EntradaTexto = styled.TextInput`
height: 30px;
width: 60%;
border-radius: 7px;
border:1px solid black;
background-color:#fff;
padding-left: 5px;
align-self: center;
`;

export const Botao = styled.TouchableOpacity`
height: 30px;
width: 25%;
border:2px solid black;
background-color: #fff;
border-radius: 5px;
align-self: center;
padding: 3px;
`;

export const TextoBotao = styled.Text`
color:black;
align-self: center;
position: absolute;
font-size: 12px;
font-weight: 700;
align-items: center;
`;

export const BolinhaBranca = styled.TouchableOpacity`
width: 45px;
height: 45px;
border-radius: 50%;
background-color:#fff;
justify-content: center;
border:2px solid black;
align-items:center;
`;

export const ContainerModal = styled.View`
flex:1;
justify-content: center;
align-items: center;
`;

export const ContainerInternoModal = styled.View`
background-color:#f7a80a;
border: 2px black;
border-radius: 20;
align-items: center;
padding: 35px;
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const BotaoDeConfirmacao = styled.TouchableOpacity`
height: 35px;
width: 95px;
background-color:#fff;
border: 2px black;
border-radius: 10px;
justify-content: center;
align-items: center;
margin-top: 15px;
`;

export const TextoModal = styled.Text`
font-size: 16;
align-self: center;
font-weight: bold;
`;