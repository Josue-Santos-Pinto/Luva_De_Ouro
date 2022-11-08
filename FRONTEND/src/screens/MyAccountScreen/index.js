import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useEffect,useRef } from "react";
import { useState } from "react";
import { Modal, ScrollView, StatusBar } from "react-native";
import { useStateValue } from "../../contexts/StateContext";
import { Picker } from "@react-native-picker/picker";
import {FontAwesome} from '@expo/vector-icons'
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
    const [states,setStates] = useState([])
    const [state, setState] = useState('')
    const [changedName,setChangedName] = useState('')
    const [changedEmail,setChangedEmail] = useState('')
    const [changedTel,setChangedTel] = useState('')
    const [changedCep,setChangedCep] = useState('')
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
            setTel(result.celular)
            setCep(result.cep)
        }
        getUser()
    },[])
    
    useEffect(()=>{
        const changingInfo = async () => {
            setChangedName(name)
            setChangedEmail(email)
            setChangedCep(cep)
            setChangedTel(tel)
            setChangedState(state)
        }
        
        changingInfo()
    },[name,email,cep,tel,state])
   
   
  

    const changeAll = async () => {
         let alerts = []
         let cleanAlerts = []
        if(changedName != name){
            let result = await api.putUserName(changedName)
            cleanAlerts.push('\n' + 'Nome alterado com sucesso')
            if(result.error){
                alerts.push(result.error + '\n')
            }
        }
        if(changedEmail != email){
            let result2 = await api.putUserEmail(changedEmail)
            cleanAlerts.push('\n' + 'Email alterado com sucesso')
            if(result2.error){
                alerts.push(result2.error + '\n')
            }
        }
        if(changedTel != tel){
            let result3 = await api.putUserTel(changedTel)
            cleanAlerts.push('\n' + 'Celular alterado com sucesso')
            if(result3.error){
                alerts.push(result3.error + '\n')
            }
        }
        if(changedCep != cep){
            let result4 = await api.putUserCep(changedCep)
            cleanAlerts.push('\n' + 'Cep alterado com sucesso')
            if(result4.error){
                alerts.push(result4.error + '\n')
            }
        }
        if(changedState != state){
            if(changedState != 0){
            let result5 = await api.putUserState(changedState)
           
                cleanAlerts.push('\n' + 'Cidade alterada com sucesso')
         
            if(result5.error){
                alerts.push(result5.error + '\n')
            }
        }
        } else {
            let result = await api.putUserName(changedName)
            let result2 = await api.putUserEmail(changedEmail)
            let result3 = await api.putUserState(changedState)
            let result4 = await api.putUserCep(changedCep)
            let result5 = await api.putUserState(changedState)
        }
               
        alert(cleanAlerts)
        navigate.reset({
            index: 1,
            routes: [{name:'HomeScreen'}]
        })        
                 
    }
  

    return (
        <C.Container>
            <StatusBar backgroundColor='#121214' />
            <ScrollView>
            <C.AvatarArea>
                <FontAwesome name="user" size={90} color='#000' />
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
                       
                        type={'cel-phone'}
                        options={{
                            maskType:'BRL',
                            withDDD: true,
                            dddMask:"(99)"
                        }}
                        value={tel}
                        ref={telRef}
                        placeholder='(99) 9999-9999'
                    />
            </C.InputArea>
            <C.InputArea>
                <C.Text>CEP: </C.Text>
                <C.TextValue>{cep}</C.TextValue>
            </C.InputArea>
            <C.InputArea></C.InputArea>
            <C.InputArea>
                <C.Text>Cidade: </C.Text>
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
                <ScrollView>
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
                        <C.Text>CEP: </C.Text>
                        <C.Input 
                            value={changedCep}
                            maxLength={9}
                            onChangeText={(txt)=>setChangedCep(txt)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                    <C.Text>Cidade</C.Text>
                    <C.Select>
                        <Picker
                            
                            dropdownIconColor='#000'
                            selectedValue={changedState}
                            onValueChange={(itemValue)=>setChangedState(itemValue)}
                            
                        >
                         <Picker.Item label="Selecione uma cidade" value={0} />
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
            </ScrollView>
            </Modal>
        </C.Container>
    )
}