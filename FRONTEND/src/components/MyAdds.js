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
const InputDesc = styled.TextInput`
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    height: 100px;
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
    const id = props.data.$__._id
    const date = props.data.dateCreated
    const url = props.data._doc.images[0].url
    const [image,setImage] = useState(`http://192.168.1.102:5000/media/${url}`)
    const [title,setTitle] = useState(props.data._doc.title)
    const [price,setPrice] = useState(props.data._doc.price)
    
    const [desc,setDesc] = useState(props.data._doc.description)
    const [category,setCategory] = useState(props.data._doc.category)
    const [state,setState] = useState(props.data._doc.state)
    const [states,setStates] = useState([])
    const [status,setStatus] = useState(props.data._doc.status)

    const [changedTitle,setChangedTitle] = useState('')
    const [changedPrice,setChangedPrice] = useState('')
    const [changedImage,setChangedImage] = useState('')
    const [changedDesc,setChangedDesc] = useState('')
    const [changedState,setChangedState] = useState('')

    const [unmaskedPrice,setUnmaskedPrice] = useState('')
    const priceRef = useRef()

    useEffect(()=>{
        setChangedTitle(title)
        setChangedPrice(price)
        setChangedDesc(desc)
        
    },[title,price,desc])

    useEffect(()=>{
        const getStates = async () => {
            const stat = await api.getStates()
            
            setStates(stat.states)
        }
        getStates()
    },[])
    
    useEffect(()=>{
        const putAdd = async () => {
            
            
            let result = await api.putItem(id)
            console.log(result.error)
        }
        
    },[])
    const deleteAdd = () => {
        
        
    }
    useEffect(()=>{
        console.log(id)
    },[id])
   

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
                            value={changedTitle}
                            onChangeText={(e)=>setChangedTitle(e)}
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
                        value={changedPrice}
                        onChangeText={text => setChangedPrice(text)}
                        ref={priceRef}
                        placeholder='R$'
                    />
                    </AddInfo>
                    <AddInfo>
                        <Text>Descrição: </Text>
                        <InputDesc 
                            value={changedDesc}
                            onChangeText={(e)=>setChangedDesc(e)}
                            multiline={true}
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