import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Item = styled.TouchableOpacity`
    flex-direction: row;
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
    align-items: center;
`
const Titulo = styled.Text`
    font-size: 20px;
    margin-left: 15px;
    margin-top: 15px;
    color: #000;
`
const Price = styled.Text`
    font-size: 20px;
    margin: 15px 10px;
    padding: 20px 0;
`
const Local = styled.Text``

export default (props) => {

    const navigation = useNavigation()

    const photos = props.data.photos[0]
    const productName = props.data.productName
    const price = props.data.price
    const local = props.data.local
    const userName = props.data.userName


    return (
        <Item onPress={()=>navigation.navigate('ProductScreen',{photos,productName,price,local,userName})}>
           
                <ItemArea>
                    <Photo source={photos} resizeMode='cover' />
                    <TextArea>
                        <Titulo>{productName}</Titulo>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        <Local>{local}</Local>
                    </TextArea>
                </ItemArea>
           
        </Item>
    )
}