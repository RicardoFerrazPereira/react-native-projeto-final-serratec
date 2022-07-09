import React from 'react';
import { Ball, Box, BoxAll, Container, Imagem, ImagemCateg,  TextBox, Title, Top,BallIcone } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import TabBar from '../../components/TabBar';


const Usuario = () => {

  const navigation = useNavigation();

  const TelaConsCateg = () => {
    navigation.navigate('ConsultarUsuario')
  }
  const TelaCadastrarUsuario = () => {
    navigation.navigate('CadastrarUsuario')
  }
  
  return ( 
    <Container>     
      <Top>
        <Ball><Ionicons name="md-caret-back-circle-sharp" size={34} color="black" /></Ball>
        <Title>Usuario</Title>
        <BallIcone>        <FontAwesome 
          name="user" 
          size={34} 
          color="black"
        /></BallIcone>
      </Top>
      <ImagemCateg>
        <Imagem source={require("../../../assets/pacman1.png")} /> 
       </ImagemCateg>

      <BoxAll>
        <Box>
          <TextBox onPress={TelaConsCateg}>Consultar USUARIO</TextBox>
        </Box>
        <Box>
          <TextBox onPress={TelaCadastrarUsuario}>Cadastrar USUARIO</TextBox>
        </Box>
      </BoxAll>
      
      <TabBar />
    </Container>

   );
}
 
export default Usuario;