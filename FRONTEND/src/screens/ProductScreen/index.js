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
    const [category,setCategory] = useState('')
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [desc,setDesc] = useState('')
    const [cel,setCel] = useState('')
    const [cep,setCep] = useState('')
    const [images,setImages] = useState([])
    const [price,setPrice] = useState(0)
    const [priceNeg,setPriceNeg] = useState(false)
    const [state,setState] = useState('')
    const [userInfo,setUserInfo] = useState({})
    const [views,setViews] = useState(0)

    const contact = '+55022996102410'
    const message = `Olá ${userInfo.name}, vi o produto '${title}' no aplicativo Luva de Ouro e gostaria de saber mais sobre ele.`

    const id = route.params.id
    
    useEffect(()=>{
        const getItem = async () => {
            
            let response = await api.getItem(id)
            
            setTitle(response.title)
            setCategory(response.category.name)
            setDate(response.dateCreated)
            setDesc(response.description)
            setImages(response.images)
            setPrice(response.price)
            setPriceNeg(response.priceNegotiable)
            setState(response.stateName)
            setUserInfo(response.userInfo)
            setViews(response.views)
        }
        getItem()
        
    },[id])


    useEffect(()=>{
        console.log(cep,cel)
    },[cel,cep])
    
  
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
                    source={{uri:images[0]}}
                    resizeMode='contain'
                />
                
                <C.ItemTitle>
                    <C.Price>R$: {parseFloat(price).toFixed(2)}</C.Price>
                    <C.TextTitle>{title}</C.TextTitle>                      
                </C.ItemTitle>
                <C.ItemDesc>
                    <C.Text>Descrição</C.Text>
                    <C.Desc>{desc}</C.Desc>
                    <C.CategoryArea>
                        <C.CategoryText>Categoria: </C.CategoryText>
                        <C.CategoryValue>{category}</C.CategoryValue>
                    </C.CategoryArea>
                </C.ItemDesc>
                <C.ItemLocalization>
                    <C.Text>Localização</C.Text>
                    <C.ItemArea>
                        <C.Desc>CEP</C.Desc>
                        <C.ItemValue>{userInfo.cep}</C.ItemValue>
                    </C.ItemArea>
                    <C.ItemArea>
                        <C.Desc>Cidade</C.Desc>
                        <C.ItemValue>{state}</C.ItemValue>
                    </C.ItemArea>
                    
                </C.ItemLocalization>
                <C.Seller>
                    <C.Text>Anunciante</C.Text>
                    <C.ItemArea>
                        <C.Desc>Nome: </C.Desc>
                        <C.ItemValue>{userInfo.name}</C.ItemValue>
                    </C.ItemArea>
                    <C.ItemArea>
                        <C.Desc>Email: </C.Desc>
                        <C.ItemValue>{userInfo.email}</C.ItemValue>
                    </C.ItemArea>
                    <C.ItemArea>
                        <C.Desc>Telefone: </C.Desc>
                        <C.ItemValue>{userInfo.celular}</C.ItemValue>
                    </C.ItemArea>
                </C.Seller>

                <C.ButtonArea>
                    <C.ChatButton onPress={()=>{
                        Linking.openURL(`whatsapp://send?phone=+550${userInfo.celular}&text=${message}`)
                        }}>
                        <FontAwesome name="whatsapp" size={24} color='#FFF'/>
                        <C.ChatText>Whatsapp</C.ChatText>
                    </C.ChatButton>
                </C.ButtonArea>
                
                </C.Scroll>

                </C.Item>     
        
    )

}