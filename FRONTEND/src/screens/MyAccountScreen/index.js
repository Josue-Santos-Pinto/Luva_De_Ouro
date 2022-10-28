import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    const [states,setStates] = useState([])
    const [state, setState] = useState('')
    const [changedName,setChangedName] = useState('')
    const [changedEmail,setChangedEmail] = useState('')
    const [changedTel,setChangedTel] = useState('')
    const [changedState,setChangedState] = useState('')
    
    const [modal,setModal] = useState(false)
    

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
            setState(result.state)
        }
        getUser()
    },[])
    
    useEffect(()=>{
        const changingInfo = async () => {
            setChangedName(name)
            setChangedEmail(email)
            
        }
        
        changingInfo()
    },[name,email])
   
   
  

    const changeAll = async () => {
         
        if(changedName != name){
            let result = await api.putUserName(changedName)
            if(result.error){
                alert(result.error)
            }
        }
        if(changedEmail != email){
            let result2 = await api.putUserEmail(changedEmail)
            if(result2.error){
                alert(result2.error)
            }
        }
        if(changedState != state){
            let result3 = await api.putUserState(changedState)
            console.log(changedState)
            if(result3.error){
                alert(result3.error)
            }
        } else {
            let result = await api.putUserName(changedName)
            let result2 = await api.putUserEmail(changedEmail)
            let result3 = await api.putUserState(changedState)
        }
                
        navigate.reset({
            index: 1,
            routes: [{name:'HomeScreen'}]
        })        
                 
    }
    const changeEmail = async () => {
        
               let result = await api.putUserEmail(changedEmail)
               if(result.error){
                   alert(result.error)
               }
                 
   }
   const changeState = async () => {
        
                let result = await api.putUserState(changedState)
                if(result.error){
                    alert(result.error)
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
                <C.TextValue>{state}</C.TextValue>
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
                            onChangeText={(e)=>setChangedName(e)}
                        />
                    </C.InputArea>
                        
                    <C.InputArea>
                        <C.Text>Email: </C.Text>
                        <C.Input 
                            value={changedEmail}
                            onChangeText={(txt)=>setChangedEmail(txt)}
                        />
                    </C.InputArea>
                        
                    <C.InputArea>
                        <C.Text>Telefone: </C.Text>
                        <C.Input 
                            value={changedTel}
                            onChangeText={(txt)=>setChangedTel(txt)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                    <C.Text>Região</C.Text>
                    <C.Select>
                        <Picker
                            
                            dropdownIconColor='#000'
                            selectedValue={changedState}
                            onValueChange={(itemValue)=>setChangedState(itemValue)}
                            
                        >
                        {changedState === undefined && <Picker.Item label="Selecione uma categoria" />}
                        {states && states.map(i => 
                            <Picker.Item key={i._id} label={i.name} value={i._id} />
                            )}
                        </Picker>
                    </C.Select>
                    </C.InputArea>
                    <C.Button onPress={changeAll}>
                            <C.ButtonText>Enviar</C.ButtonText>
                    </C.Button>
            </C.ModalArea>
            </Modal>
        </C.Container>
    )
}