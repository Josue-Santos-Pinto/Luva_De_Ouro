import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect,useRef } from "react";
import { useState } from "react";
import { Modal, ScrollView, StatusBar } from "react-native";
import { useStateValue } from "../../contexts/StateContext";
import { Picker } from "@react-native-picker/picker";
import {TextInputMask} from 'react-native-masked-text'
import api from "../../services/api";
import C from './style'

export default () => {

    const [context, dispatch] = useStateValue()
    const navigate = useNavigation()
    const [userInfo,setUserInfo] = useState([])

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [tel,setTel] = useState('')
    const [cep,setCep] = useState('')
    const [changedName,setChangedName] = useState(name)
    const [changedEmail,setChangedEmail] = useState(email)
    const [changedTel,setChangedTel] = useState(tel)
    
    const [modal,setModal] = useState(false)
    const [states,setStates] = useState([])
    const [state, setState] = useState(cep)

    const telRef = useRef()

    useEffect(()=>{
        navigate.setOptions({
            headerTitle: 'Minha Conta'
        }) 
        const getStates = async () => {
            const stat = await api.getStates()
            
            setStates(stat.states)
        }
        getStates() 
    },[])
    useEffect(()=>{
        const getUser = async () => {
            let result = await api.getUser()
            
            setName(result.name)
            setEmail(result.email)
            setCep(result.state)
        }
        getUser()
    },[])
    useEffect(()=>{
        console.log(state)
    },[state])
   

    const changeAccountInfo = async () => {
        if((state == cep) && (changedEmail == email) && (changedName != name)){
            let result = await api.putUserName(changedName)
            alert('Nome alterado para: ' + changedName)
            
            setModal(false)
            if(result.error){
                alert(result.error)
            }
        }
        if((state == cep) && (changedEmail != email) && (changedName == name) ){
            let result = await api.putUserEmail(changedEmail)
            
            alert('Email alterado para: ' + changedEmail)
            setModal(false)
            if(result.error){
                alert(result.error)
            }
        }
        if((state != cep) && (changedEmail == email) && (changedName == name) ){
            let result = await api.putUserCep(state)
            console.log(state)
            
            alert('Região alterada para: ' + state)
            setModal(false)
            if(result.error){
                alert(result.error)
            }
        }
        if((state != cep) && (changedEmail != email) && (changedName != name) ){
            let result = await api.putUserAll(state,changedEmail,changedName)
            
            alert(`Nome alterado para: ${changedName} \n
                   Email alterado para: ${changedEmail} \n
                   Região alterada para: ${state}
            `)
            setModal(false)
            if(result.error){
                alert(result.error)
            }
        }

    }


    return (
        <C.Container>
            <ScrollView>
            <C.AvatarArea>
                <C.Avatar />
            </C.AvatarArea>
            <C.InputArea>
                <C.Text>Nome: </C.Text>
                <C.TextValue>{name}</C.TextValue>
            </C.InputArea>
            <C.InputArea>
                <C.Text>Email: </C.Text>
                <C.TextValue>{email}</C.TextValue>
            </C.InputArea>
            <C.InputArea>
                <C.Text>Telefone: </C.Text>
                <TextInputMask 
                        style={{width:150,height: 40,borderWidth: 1,borderColor: '#000',borderRadius: 5,padding: 10}}
                        type={'cel-phone'}
                        options={{
                            maskType:'BRL',
                            withDDD: true,
                            dddMask:"(99)"
                        }}
                        value={tel}
                        onChangeText={text => setTel(text)}
                        ref={telRef}
                        placeholder='(99) 9999-9999'
                    />
            </C.InputArea>
            <C.InputArea>
                <C.Text>CEP: </C.Text>
                <C.TextValue>{cep}</C.TextValue>
            </C.InputArea>
            <C.Button onPress={()=>setModal(!modal)}>
                <C.ButtonText>Alterar</C.ButtonText>
            </C.Button>
            
            </ScrollView>
            <Modal
                visible={modal}
                animationType='fade'
                transparent={false}
                onRequestClose={() => {
                    setModal(false);
                }}
            >
                <StatusBar />
                <C.ModalArea>
                    <C.ModalTitle>Alterar Informações</C.ModalTitle>
                    <C.InputArea>
                        <C.Text>Nome: </C.Text>
                        <C.Input 
                            value={changedName}
                            onChangeText={(n)=>setChangedName(n)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <C.Text>Email: </C.Text>
                        <C.Input 
                            value={changedEmail}
                            onChangeText={(e)=>setChangedEmail(e)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <C.Text>Telefone: </C.Text>
                        <C.Input 
                            value={changedTel}
                            onChangeText={(t)=>setChangedTel(t)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                    <C.Text>Região</C.Text>
                    <C.Select>
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
                    </C.Select>
                    </C.InputArea>
                    <C.Button onPress={changeAccountInfo}>
                        <C.ButtonText>Enviar</C.ButtonText>
                    </C.Button>
            </C.ModalArea>
            </Modal>
        </C.Container>
    )
}