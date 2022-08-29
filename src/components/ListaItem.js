import React from "react";
import styled from "styled-components/native";

const Item = styled.TouchableOpacity`
    flex-direction: row;
    margin: 5px 0;
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
    return (
        <Item>
           
                <ItemArea>
                    <Photo source={props.data.photos[0]} resizeMode='cover' />
                    <TextArea>
                        <Titulo>{props.data.productName} [Peso: {props.data.weight}]  </Titulo>
                        <Price>R$ {parseFloat(props.data.price).toFixed(2)}</Price>
                        <Local>{props.data.local}</Local>
                    </TextArea>
                </ItemArea>
           
        </Item>
    )
}