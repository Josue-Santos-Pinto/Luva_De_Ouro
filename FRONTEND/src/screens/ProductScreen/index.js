import React, { useContext,useEffect,useState } from "react";
import styled from "styled-components/native";
import  api  from "../../services/api";
import { Link, useRoute } from "@react-navigation/native";
import { Alert, Linking } from "react-native";
import C from './style'
import UserContext from "../../contexts/userContext";
import { FontAwesome} from '@expo/vector-icons'


export default () => {
    const route = useRoute()
    const {name,city} = useContext(UserContext)
    
    const url = 'https://github.com/vishal-pawar'
    const contact = '+55022996102410'
    const message = 'Oi, gostaria de saber mais sobre o produto'

    const id = route.params.id
    const title = route.params.title
    const bigPhoto = route.params.bigPhoto
    const price = route.params.price
    const local = route.params.local
  
    const openURL = async (url) => {
        const isSupported = await Linking.canOpenURL(url)
        if(isSupported){
            await Linking.openURL(url)
        } else {
            Alert.alert(`Problemas ao abrir: ${url}`)
        }
    }

   
    

    return(
        <C.Item>

            <C.Scroll>
                
                <C.Image 
                    source={{uri: bigPhoto}}
                    resizeMode='contain'
                />
                
                <C.ItemTitle>
                    <C.Price>R$: {parseFloat(price).toFixed(2)}</C.Price>
                    <C.TextTitle>{title}</C.TextTitle>                      
                </C.ItemTitle>
                <C.ItemDesc>
                    <C.Text>Descrição</C.Text>
                    <C.Desc>lorem Ipsun</C.Desc>
                    <C.Desc>lorem Ipsun</C.Desc>
                    <C.Desc>lorem Ipsun</C.Desc>
                </C.ItemDesc>
                <C.ItemLocalization>
                    <C.Text>Localização</C.Text>
                    <C.ItemArea>
                        <C.Desc>CEP</C.Desc>
                        <C.ItemValue>0000000</C.ItemValue>
                    </C.ItemArea>
                    <C.ItemArea>
                        <C.Desc>Cidade</C.Desc>
                        <C.ItemValue>{local}</C.ItemValue>
                    </C.ItemArea>
                    <C.ItemArea>
                        <C.Desc>Bairro</C.Desc>
                        <C.ItemValue>0000000000</C.ItemValue>
                    </C.ItemArea>
                </C.ItemLocalization>
                <C.Seller>
                    <C.Text>Anunciante</C.Text>
                    <C.ItemArea>
                        <C.Desc>Nome: </C.Desc>
                        <C.ItemValue>{title}</C.ItemValue>
                    </C.ItemArea>
                </C.Seller>

                <C.ButtonArea>
                    <C.ChatButton onPress={()=>{
                        Linking.openURL(`whatsapp://send?phone=${contact}&text=${message}`)
                        }}>
                        <FontAwesome name="whatsapp" size={24} color='#FFF'/>
                        <C.ChatText>Whatsapp</C.ChatText>
                    </C.ChatButton>
                </C.ButtonArea>
                
                </C.Scroll>

                </C.Item>     
        
    )

}