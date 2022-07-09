import styled from "styled-components/native";

export const BaseBar = styled.View`
 flex-direction: row;
 justify-content: space-around;
 height: 60px;
 background-color: black;
 align-items: center;
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