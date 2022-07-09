import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: rgba(254,188,56,0.75);
`;

export const Header = styled.View`
   height:10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Ball = styled.TouchableOpacity`
 width: 45px;
 height: 45px;
 border-radius: 50%;
 background-color: #fff;
 justify-content: center;
 align-items: center;
 border: 2px solid;
`;

export const BallIcone = styled.View`
 width: 45px;
 height: 45px;
 border-radius: 50%;
 background-color: #fff;
 justify-content: center;
 align-items: center;
 border: 2px solid;
`;

export const Title = styled.Text`
  font-size: 22pt;
 font-weight: bold;
`;

export const ImagemLogo = styled.Image`
 height: 120px;
 width:120px;
 border-radius: 50%;
 align-self: center;
`;

export const Botoes = styled.View`
  height: 40%;
  justify-content: space-around;
  align-items: center;
`;

export const StyleBotoes = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
`;

export const TextBotoes = styled.Text`
  font-family: 'calibri';
  font-size: 16pt;
  font-weight: bold;
`;
