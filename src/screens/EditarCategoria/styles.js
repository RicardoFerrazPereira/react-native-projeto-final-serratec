import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: rgba(254, 188, 56, 0.75);
`;
export const Header = styled.View`
  /* align-items: center; */
  flex-direction: row;
  justify-content: space-around;
  width: 350;
  align-self: center;
  margin-top: 25px;
`;

export const Title = styled.Text`
  /* font-size: 35;
    color: #000; */

  width: 150;
  font-family: "Alatsi";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  padding: 2px;
`;
export const Body = styled.View`
  height: 300;
  justify-content: space-evenly;
  align-items: center;
`;

export const TextoSelecionarImagem = styled.Text`
  font-size: 15;
  color: #000;
  text-align: center;
`;

export const IconeTexto = styled.TouchableOpacity`
  align-items: center;
`;
export const BotaoSalvar = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 10px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  border-radius: 10px;
  background-color: #fff;
  width:60%;
  height: 40px;
  border: 2px solid #000000;
  padding: 5px;
`;

export const TextoBotaoSalvar = styled.Text`
  align-self: center;
  font-size: 20px;
`;

export const SelecaoImagem = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const Ball = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border: 3px solid;
`;
export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ContainerInternoModal = styled.View`
  background-color: #f7a80a;
  border: 2px black;
  border-radius: 20;
  align-items: center;
  padding: 35px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`;
export const TextoModal = styled.Text`
  font-size: 16;
  align-self: center;
  font-weight: bold;
`;
export const BotaoOk = styled.TouchableOpacity`
  height: 35px;
  width: 95px;
  background-color: #fff;
  border: 2px black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;