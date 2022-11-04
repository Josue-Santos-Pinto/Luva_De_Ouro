import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useEffect } from "react";

const Item = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #CCC;
    border-radius: 10px;
    overflow: hidden;
    background-color: #FFF;
    
`
const ItemArea = styled.View`
    flex-direction: row;
`
const PhotoArea = styled.View`
    width: 200px;
    height: 150px;
    justify-content: center;
    align-items: center;
`
const Photo = styled.Image`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
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
    flex-wrap: wrap;
`
const Price = styled.Text`
    font-size: 20px;
    padding: 20px 0;
`
const State = styled.Text``

export default (props) => {

    const navigation = useNavigation()

    const id = props.data.id
    const image = props.data.image
    const title = props.data.title
    const price = props.data.price
    const state = props.data.state

    
   

    return (
        <Item onPress={()=>navigation.navigate('ProductScreen',{id})} activeOpacity={0.8}>
           
                <ItemArea>
                    <PhotoArea>
                        <Photo source={{uri:image}} resizeMode='cover' />
                    </PhotoArea>
                    <TextArea>
                        <Titulo>{title}</Titulo>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        <State>{state}</State>
                        
                    </TextArea>
                </ItemArea>
           
        </Item>
    )
}