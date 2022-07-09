import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #FEBC38;
  justify-content: space-between;  
`;

export const Top = styled.View`
  /* border: 2px solid black; */
  height:15%;
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
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
`;
export const TextBox = styled.View`
  font-family: 'calibri';
  font-size: 16pt;
  font-weight: bold;
  justify-content: center;
  margin: 15px ;
  
`;

export const Title = styled.Text`
 font-size: 20pt;
 font-weight: bold;
 text-align: center;
 width: 150px;
`;

export const ImagemCateg = styled.View`
 align-items: center;
 /* border: 1px solid; */
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

export const Icones = styled.View`
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center; 
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
// export const Cards = styled.View`
//   margin: 15px;
//   width: 40%;
//   height: 120px;
//   background-color: white;
//   border: 2px solid black;
//   border-radius: 5px;
//   box-shadow: 0px 5px 5px #2f4f4f;
//   /* justify-content: flex-start; */  
//   flex-direction: row;
//   justify-content: space-around;
// `;

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
  justify-content: space-around;
  align-items: center;  
`;

export const TextName = styled.Text`  
  /* margin-left: 130px; */
  font-weight: bold;   
  font-size: 10pt;   
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
 
  flex-direction: column;
`;




