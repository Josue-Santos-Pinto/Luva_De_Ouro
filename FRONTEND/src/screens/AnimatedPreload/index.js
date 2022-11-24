import React,{useEffect} from "react";
import { StatusBar,Text,View,StyleSheet,Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useFonts } from "expo-font";
import {MotiView,MotiText} from 'moti'




export default () => {

  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(()=>{
      navigation.reset({
        index: 1,
        routes:[{name: 'PreloadScreen'}]
      })
    },3000)
  },[])

  const [fontsLoaded] = useFonts({
    "Anton": require('../../fonts/Anton-Regular.ttf')
  })
  if(!fontsLoaded){
     return null
  }
  

    

    return (
        <View style={styles.Container}>
          <StatusBar />
            <View>
              <MotiText 
                style={styles.Title}
                from={{
                    translateX: -400
                }}
                animate={{
                    translateX: 0 
                }} 
                transition={{
                    type:'timing',
                    duration: 800,
                    delay: 800
                }}       
                >
                  Luva de Ouro
              </MotiText>
              <MotiText
                style={styles.SubTitle}
                from={{
                  translateX: 300
              }}
              animate={{
                  translateX: 0 
              }} 
              transition={{
                  type:'timing',
                  duration: 800,
                  delay: 800
              }} 
              >
                Vendas - Trocas - Doações
              </MotiText>
            </View>
            <MotiView
              style={styles.ImageArea}
             from={{
              translateY: -150,
              opacity: 0
            }}
            animate={{
                translateY: 0,
                opacity: 1
            }} 
            transition={{
                type:'timing',
                duration: 800,
                delay: 200
            }} 
            >
              <Image 
                style={styles.Image}
                source={require('../../image/logo.png')}
                resizeMode='contain'
              />
            </MotiView>
            <MotiView 
              style={styles.SloganArea}
              from={{
                opacity: 0,
                translateY: 300
              }}
              animate={{
                opacity: 1,
                translateY: -50
              }} 
              transition={{
                  type:'timing',
                  duration: 800,
                  delay: 800
              }} 
            >
              <Text style={styles.Slogan}>SUA ESTRUTURA</Text>
              <Text style={styles.Slogan}>NOSSA</Text>
              <Text style={styles.Slogan}>EXCELÊNCIA!</Text>
            </MotiView>
        </View>
    )
    
}
const styles = StyleSheet.create({
      Container: {
        flex: 1
      },
      TitleArea: {
        width: '90%',
        height: 100,
        margin: '20px auto',
      },
      Title: {
        fontFamily:"Anton",
        fontSize:40,
        textAlign:'center'
      },
      SubTitle: {
        fontSize: 15,
        textAlign: 'center',
      },
      ImageArea: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom:20,
            marginLeft:'auto',
            marginRight:'auto'
      },
      Image: {
        minWidth: 250,
        minHeight: 250,
        width: '80%',
        height: '80%',
      },
      SloganArea: {
        width: '100%',
        height: 'auto',
        padding: 20,
      },
      Slogan: {
        fontSize: 30,
        textAlign: 'center',
      }
})