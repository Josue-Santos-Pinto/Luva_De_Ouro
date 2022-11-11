import React,{useEffect} from "react";
import { StatusBar,Text } from "react-native";
import C from './style'

import { useNavigation } from "@react-navigation/native";

import { useFonts } from "expo-font";



export default () => {

  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(()=>{
      navigation.reset({
        index: 1,
        routes:[{name: 'PreloadScreen'}]
      })
    },2000)
  },[])

  const [fontsLoaded] = useFonts({
    "Anton": require('../../fonts/Anton-Regular.ttf')
  })
  if(!fontsLoaded){
     return null
  }
  

    

    return (
        <C.Container>
          <StatusBar />
            <C.TitleArea>
              <Text style={{fontFamily:"Anton",fontSize:40,textAlign:'center'}}>Luva de Ouro</Text>
              <C.SubTitle>Vendas - Trocas - Doações</C.SubTitle>
            </C.TitleArea>
            <C.ImageArea>
              <C.Image 
                source={require('../../image/logo.png')}
                resizeMode='contain'
              />
            </C.ImageArea>
            <C.SloganArea>
              <C.Slogan>SUA ESTRUTURA</C.Slogan>
              <C.Slogan>NOSSA</C.Slogan>
              <C.Slogan>EXCELÊNCIA!</C.Slogan>
            </C.SloganArea>
        </C.Container>
    )
}