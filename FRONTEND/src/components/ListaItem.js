import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useEffect } from "react";
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
    background-color: #FFF;
    
`
const ItemArea = styled.View`
    flex-direction: row;
`
const PhotoArea = styled.View`
    width: 170px;
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
    width: 70%;
    padding: 10px;
    overflow: hidden;
    
`
const TitleArea = styled.View`
    flex-direction: row;
    width: 60%;
`
const Titulo = styled.Text`
    font-size: 15px;
    color: #000;
    flex: 1;
    min-width: 140px;
    flex-wrap: wrap;
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

    const id = props.data.id
    const image = props.data.image
    const title = props.data.title
    const price = props.data.price
    const views = props.data.views
    const date = props.data.date

    
    
   

    return (
        <Item onPress={()=>navigation.navigate('ProductScreen',{id})} activeOpacity={0.8}>
           
                <ItemArea>
                    <PhotoArea>
                        <Photo source={{uri:image}} resizeMode='cover' />
                    </PhotoArea>
                    <TextArea>
                        <TitleArea>
                        <Titulo>{title}</Titulo>
                        </TitleArea>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        <TextInfos>
                            <Views>{` ${views == 0 ? 'Nenhuma visualiza????o': 'Visualiza????es: ' + views}`}</Views>
                            <Date>{format(parseISO(date),"dd/MM/yyyy",{
                                locale: ptBR
                            })}</Date>
                        </TextInfos>
                        
                    </TextArea>
                </ItemArea>
           
        </Item>
    )
}