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
    margin-bottom: 5px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #CCC;
    overflow: hidden;
    background-color: #FFF;
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
const AddImageArea = styled.View`
    width: 100%;
    height: 250px;
    background-color: #DDD;
`
const AddImage = styled.Image`
    width:100%;
    height:100%;
`
const AddInfo = styled.View`
    padding: 10px;
`
const Text = styled.Text`
    font-size: 23px;
`
const Input = styled.TextInput`
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
`
const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    margin-top: 7px;
    margin-bottom: 7px;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.color};
`
const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
`

export default (props) => {

    const navigation = useNavigation()

    const [modal,setModal] = useState(false)
    const id = props.data.id
    const url = props.data.images[0].url
    const [image,setImage] = useState(`http://192.168.1.102:5000/media/${url}`)
    const [title,setTitle] = useState(props.data.title)
    const [price,setPrice] = useState(props.data.price)
    const [unmaskedPrice,setUnmaskedPrice] = useState('')
    const [desc,setDesc] = useState(props.data.description)
    const [category,setCategory] = useState(props.data.category)
    const [state,setState] = useState(props.data.state)
    const [states,setStates] = useState([])
    const [status,setStatus] = useState(props.data.status)
    const [data,setData] = useState([])

    const priceRef = useRef()

    const date = props.data.dateCreated

    useEffect(()=>{
        const getStates = async () => {
            const stat = await api.getStates()
            
            setStates(stat.states)
        }
        getStates()
    },[])
    
    useEffect(()=>{
        const putAdd = async () => {
            
            console.log(data)
            let result = await api.putItem(data,id)
            console.log(result.error)
        }
        putAdd()
    },[])
    const deleteAdd = () => {
        let newData = [...data]
        newData.push(status = false)
        setData(newData)
        console.log(status)
    }
   

    return (
        <>
        <Item onPress={()=>setModal(true)} activeOpacity={0.8}>
           
                <ItemArea>
                    <Photo source={{uri:image}} resizeMode='cover' />
                    <TextArea>
                        <Titulo>{title}</Titulo>
                        <Price>R$ {parseFloat(price).toFixed(2)}</Price>
                        
                    </TextArea>
                </ItemArea>
           
        </Item>
        <Modal
            visible={modal}
            animationType='fade'
            transparent={false}
            onRequestClose={() => {
                setModal(false);
            }}
        >
        <StatusBar backgroundColor='#000'/>
        <ScrollView>
        
                <AddImageArea>
                    <AddImage source={{uri:image}} resizeMode='cover'/>
                </AddImageArea>
                    <AddInfo>
                        <Text>Titulo: </Text>
                        <Input 
                            value={title}
                            
                        />
                    </AddInfo>
                    <AddInfo>
                        <Text>Price: </Text>
                        <TextInputMask 
                        style={{width:150,height: 40,borderWidth: 1,borderColor: '#000',borderRadius: 5,padding: 10}}
                        type={'money'}
                        options={{
                            maskType:'BRL'
                        }}
                        value={price}
                        onChangeText={text => setPrice(text)}
                        ref={priceRef}
                        placeholder='R$'
                    />
                    </AddInfo>
                    <AddInfo>
                        <Text>Descrição: </Text>
                        <Input 
                            value={desc}
                            
                        />
                    </AddInfo>
                    <AddInfo>
                        <Text>Localização: </Text>
                        <Picker
                            
                            dropdownIconColor='#000'
                            selectedValue={state}
                            onValueChange={(itemValue)=>setState(itemValue)}
                            
                        >
                        {state === undefined && <Picker.Item label="Selecione uma categoria" />}
                        {states && states.map(i => 
                            <Picker.Item key={i._id} label={i.name} value={i._id} />
                            )}
                        </Picker>
                    </AddInfo>
                    <AddInfo>
                        <Text>Telefone: </Text>
                        <Input 
                            value={null}
                            
                        />
                    </AddInfo>
                    <Button color={'#34af23'}>
                        <ButtonText>Alterar Anuncio</ButtonText>
                    </Button>
                    <Button color={'#FF0000'} onPress={deleteAdd}>
                        <ButtonText>Excluir Anuncio</ButtonText>
                    </Button>
                    </ScrollView>
                    
        </Modal>
        </>
    )
}