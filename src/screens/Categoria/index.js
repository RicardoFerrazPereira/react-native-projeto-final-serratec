import React from 'react';
import { Ball, Box, BoxAll, Container, Imagem, ImagemCateg,  TextBox, Title, Top,BallIcone } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import TabBar from '../../components/TabBar';


const Categoria = () => {

  const navigation = useNavigation();

  const TelaConsCateg = () => {
    navigation.navigate('ConsultarCategoria')
  }

  const CadastroCategoria = () => {
    navigation.navigate('CadastrarCategoria')
  }

  const TelaInicial = () => {
    navigation.navigate('TelaInicial')
  }
  
  return ( 
    <Container>     
      <Top>
        <Ball><Ionicons name="md-caret-back-circle-sharp" size={34} color="black" onPress={TelaInicial} /></Ball>
        <Title>Categoria</Title>
        <BallIcone><MaterialIcons name="category" size={34} color="black" /></BallIcone>
      </Top>
      <ImagemCateg>
        <Imagem source={require("../../../assets/pacman1.png")} /> 
       </ImagemCateg>
      <BoxAll>
        <Box>
          <TextBox onPress={TelaConsCateg}>Consultar Categoria</TextBox>
        </Box>
        <Box>
          <TextBox onPress={CadastroCategoria}>Cadastrar Categoria</TextBox>
        </Box>    
      </BoxAll> 
      <TabBar />
    </Container>

   );
}
 
export default Categoria;