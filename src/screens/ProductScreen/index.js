import React, { useContext } from "react";
import styled from "styled-components/native";
import { useRoute } from "@react-navigation/native";
import C from './style'


export default () => {
    const route = useRoute()

    const productName = route.params.productName
    const photos = route.params.photos
    const local = route.params.local
    const price = route.params.price
    const userName = route.params.userName
    

    

    return(
        <C.Item>
            <C.ButtonArea>
                <C.ChatButton>
                    <C.ChatText>Chat</C.ChatText>
                </C.ChatButton>
            </C.ButtonArea>
            <C.Scroll>
                
                <C.Image 
                    source={photos}
                    resizeMode='contain'
                />
                
                <C.ItemTitle>
                    <C.Price>R$: {parseFloat(price).toFixed(2)}</C.Price>
                    <C.TextTitle>{productName}</C.TextTitle>                      
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
                        <C.ItemValue>0000000000</C.ItemValue>
                    </C.ItemArea>
                    <C.ItemArea>
                        <C.Desc>Municipio</C.Desc>
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
                        <C.ItemValue>{userName}</C.ItemValue>
                    </C.ItemArea>
                </C.Seller>
                
                </C.Scroll>

                </C.Item>     
        
    )

}