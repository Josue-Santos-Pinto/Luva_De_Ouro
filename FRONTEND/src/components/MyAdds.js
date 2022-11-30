import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useEffect,useRef } from "react";
import { useState } from "react";
import { Modal, ScrollView, StatusBar } from "react-native";
import {TextInputMask} from 'react-native-masked-text'
import { Picker } from "@react-native-picker/picker";
import api from "../services/api";
import {format,parseISO} from 'date-fns'
import { ptBR } from "date-fns/locale";



const Item = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #CCC;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${props=>props.color};
`
const ItemArea = styled.View`
    flex-direction: row;
`
const Photo = styled.Image`
    height: 200px;
    width: 150px;
    justify-content: center;
    align-items: center;
`
const TextArea = styled.View`
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`
const Titulo = styled.Text`
    font-size: 15px;
    color: #000;
    width: 240px;
    min-height: 50px;
`
const Price = styled.Text`
    font-size: 20px;
    padding: 20px 0;
`
const Views = styled.Text`
    font-size: 9px;
`
const Date = styled.Text`
    font-size: 9px;
`
const TextInfos = styled.View``


export default (props) => {

    const navigation = useNavigation()

    
    const id = props.data.$__._id
    const date = props.data._doc.dateCreated
    const url = props.data._doc.images[0].url
    const image = `http://192.168.1.105:5000/media/${url}`
    const title = props.data._doc.title
    const price = props.data._doc.price
    const status = props.data._doc.status.toString()
    const views = props.data._doc.views
    
    useEffect(()=>{
        console.log(date)
    },[])
    

    
   

    return (
        <>
        
        <Item onPress={()=>navigation.navigate('MyProductScreen',{id,status})} activeOpacity={0.8}  color={status === 'true' ? '#FFF':'rgba(255,255,255,0.6)'}>
        
                <ItemArea>
                    <Photo source={{uri:image}} resizeMode='cover' />
                    <TextArea>
                        <Titulo>{title}</Titulo>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        <TextInfos>
                            <Views>Visualizações: {views}</Views>
                            <Date>{format(parseISO(date),'dd/MM/yyyy',{
                                locale: ptBR
                            })}</Date>
                        </TextInfos>
                    </TextArea>
                </ItemArea>
                
        </Item>
        
       </>
    )
}