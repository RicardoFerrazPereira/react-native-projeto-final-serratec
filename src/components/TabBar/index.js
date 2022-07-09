import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ball, BaseBar } from './styles';

const TabBar = () => {

  const navigation = useNavigation();

  const telaInicial = () => {
    navigation.navigate('TelaInicial')
  }
  const telaUsuario = () => {
    navigation.navigate('Usuario')
  }
  const telaProdutos = () => {
    navigation.navigate('Produtos')
  }
  const telaCategorias = () => {
    navigation.navigate('Categoria')
  }

  return ( 
    <BaseBar>
      <Ball>
        <Entypo 
          name="home" 
          size={34} 
          color="black" 
          onPress={telaInicial}
        />
      </Ball>
      <Ball>
        <FontAwesome 
          name="user" 
          size={34} 
          color="black" 
          onPress={telaUsuario}
        />
      </Ball>
      <Ball>
        <MaterialIcons 
          name="shopping-bag" 
          size={34} 
          color="black" 
          onPress={telaProdutos}
        />
      </Ball>
      <Ball>
        <MaterialIcons 
          name="category" 
          size={34} 
          color="black" 
          onPress={telaCategorias}
        />
      </Ball>
    </BaseBar>
  )
}
 
export default TabBar;