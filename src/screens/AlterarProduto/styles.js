import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(254,188,56,0.75);
  flex: 1;
  justify-content: space-between;
`;

export const ContainerInterno = styled.View`
  flex: 0.85;
  justify-content: space-evenly;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TituloPag = styled.Text`
  font-size: 25;
`;

export const ContainerBody = styled.View`
  height: 300px;
`;


export const ContainerInput = styled.View`
  height: 250px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18;
  height: 35px;
  width: 215px;
`;

export const BotaoSalvar = styled.TouchableOpacity`
  height: 35px;
  width: 215px;
  background-color: #fff;
  border: 2px black;
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  margin-top: 15px;
`;

export const TextoBotao = styled.Text`
  font-size: 18;
  align-self: center;
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

export const TextoModal = styled.Text`
  font-size: 16;
  align-self: center;
  font-weight: bold;
`;
