import React, { useContext, useState,useEffect } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesome} from '@expo/vector-icons'
import api from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";




export default () => {

   

    useEffect(()=>{
        const getStates = async () => {
            const stat = await api.getStates()
            setStates(stat.states)
        }
        getStates()
    },[])

    useEffect(()=>{
        console.log(states)
    },[states])

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()
   
    const [states,setStates] = useState([])
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf,setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass,setHidePass] = useState(true)
    const [confirmHidePass,setConfirmHidePass] = useState(true)
    const [state, setState] = useState('')
    
    


    const handleRegisterButton = async () => {

        if(name && email && password && state){
            let result = await api.register(name,email,password,state)
            console.log(result)
            if(result.error === undefined || result.error === ''){
                alert('Cadastrado com sucesso')
                navigation.reset({
                    index: 1,
                    routes:[{name: 'LoginScreen'}]
                  })
            } else {
                alert(result.error)
            }
        } else {
            alert("Preencha os Campos")
        }
        
    }

    return (
        <C.Container>
            <ScrollView>
           
            <C.Field 
                placeholder='Digite seu nome completo'
                value={name}
                onChangeText={(e)=>setName(e)}
                keyboardType='email-address'
            />
            <C.Field 
                placeholder='Digite seu e-mail'
                value={email}
                onChangeText={(e)=>setEmail(e)}
                keyboardType='email-address'
            />
            
            <C.InputArea>
             <C.FieldPassword 
                placeholder='Digite sua senha'
                secureTextEntry={hidePass}
                value={password}
                onChangeText={(e)=>setPassword(e)}
            />
            <C.IconShowPassword onPress={()=>setHidePass(!hidePass)}>
                <FontAwesome name={hidePass === true ? 'eye': 'eye-slash'} size={24} color='#000' />
            </C.IconShowPassword>
            </C.InputArea>

            <C.Select>
                    <Picker
                        selectedValue={state}
                        
                        onValueChange={(itemValue)=>setState(itemValue)}
                    >
                    {state === undefined && <Picker.Item label="Selecione uma categoria" />}
                    {states && states.map(i => 
                        <Picker.Item key={i._id} label={i.name} value={i._id} />
                        )}
                    </Picker>
            </C.Select>


            <C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>Cadastrar-se</C.ButtonText>
            </C.ButtonArea>
            </ScrollView>
        </C.Container>
    )
}