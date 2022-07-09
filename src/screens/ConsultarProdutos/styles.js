import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: "rgba(254,188,56,0.75)";
  justify-content: space-between;  
`;

export const Top = styled.View`
  /* border: 2px solid black; */
  height:10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

`;

export const BoxAll = styled.View`
  /* border: 2px solid black; */
  height: 40%;
  justify-content: space-around;
  align-items: center;
`;

export const Box = styled.View`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
`;
export const TextBox = styled.Text`
  font-family: 'calibri';
  font-size: 16pt;
  font-weight: bold;
  justify-content: center;
 
`;

export const Title = styled.Text`
 font-size: 20pt;
 font-weight: bold;
 text-align: center;
 width: 150px;
`;



export const Imagem = styled.Image`
 height: 120px;
 width:120px;
 border-radius: 50%;
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

export const Icones = styled.View`
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 
`;

export const TextIcon = styled.View`
 flex-direction: row;
 justify-content: space-evenly;
 font-weight: bold;
 margin-top: 15px;
`;
export const TitleIcon = styled.Text`
 font-weight: bold;
 
 height: 10%;
 margin-top: 0px;
`;

export const IconesModificacao = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.View`
  margin: 15px;
  width: 90%;
  height: 100px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0px 5px 5px #FFA500;
  /* justify-content: flex-start; */  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
`;

export const TextName = styled.Text`  
  /* margin-left: 130px; */
  font-weight: bold;   
  font-size: 14pt;   
`;

export const Caixa = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  background-color: #fff;  
  border: 2px solid black;
  border-radius: 5px;
  align-items: center;
  margin: 5px;
`;

export const ViewCaixa = styled.View`
  /* align-items: flex-end; */
  flex-direction: column;  
  justify-content: flex-start;  
`;

export const ViewApi = styled.View`
  justify-content: center;
`;

export const Informacoes = styled.Text`

`;

export const TextNameTitulo = styled.Text`

`;

export const TextNamePreco = styled.Text`

`;

export const TextNameEstoque = styled.Text`

`;

export const TextNameDescricao = styled.Text`

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




