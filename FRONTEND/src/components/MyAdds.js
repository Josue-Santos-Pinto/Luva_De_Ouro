import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useEffect,useRef } from "react";
import { useState } from "react";
import { Modal, ScrollView, StatusBar } from "react-native";
import {TextInputMask} from 'react-native-masked-text'
import { Picker } from "@react-native-picker/picker";
import api from "../services/api";



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


export default (props) => {

    const navigation = useNavigation()

    
    const id = props.data.$__._id
    const date = props.data.dateCreated
    const url = props.data._doc.images[0].url
    const image = `https://luva-de-ouro.herokuapp.com/media/${url}`
    const title = props.data._doc.title
    const price = props.data._doc.price
    const status = props.data._doc.status.toString()
    

    
   

    return (
        <>
        
        <Item onPress={()=>navigation.navigate('MyProductScreen',{id,status})} activeOpacity={0.8}  color={status === 'true' ? '#FFF':'rgba(255,255,255,0.6)'}>
        
                <ItemArea>
                    <Photo source={{uri:image}} resizeMode='cover' />
                    <TextArea>
                        <Titulo>{title}</Titulo>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        
                    </TextArea>
                </ItemArea>
                
        </Item>
        
       </>
    )
}