import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Item = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    margin-bottom: 5px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #CCC;
    overflow: hidden;
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
const Local = styled.Text``

export default (props) => {

    const navigation = useNavigation()

    const id = props.data.id
    const photos = props.data.thumbnailUrl
    const bigPhoto = props.data.url
    const title = props.data.title
    const price = 55.2
    const local = 'aldeia'
    /*
    const photos = props.data.photos[0]
    const productName = props.data.productName
    const price = props.data.price
    const local = props.data.local
    const userName = props.data.userName
    */
   

    return (
        <Item onPress={()=>navigation.navigate('ProductScreen',{id,bigPhoto,title,price,local})}>
           
                <ItemArea>
                    <Photo source={{uri:photos}} resizeMode='cover' />
                    <TextArea>
                        <Titulo>{title}</Titulo>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        <Local>{local}</Local>
                    </TextArea>
                </ItemArea>
           
        </Item>
    )
}