import React, { useContext, useState,useEffect,useRef } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesome} from '@expo/vector-icons'
import api from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {TextInputMask} from 'react-native-masked-text'




export default () => {

   const telRef = useRef()

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
    const [tel,setTel] = useState('')
    const [cep,setCep] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass,setHidePass] = useState(true)
    const [confirmHidePass,setConfirmHidePass] = useState(true)
    const [state, setState] = useState('')
    const [telMaskedOff,setTellMaskedOff] = useState()
    
    
    useEffect(()=>{
        if(tel){
            const maskOff = telRef?.current.getRawValue()
            setTellMaskedOff(maskOff)
        }
    },[tel])

    const handleRegisterButton = async () => {

        if(name && email && password && state && tel){
            
            let result = await api.register(name,email,password,state,telMaskedOff,cep)
            console.log(result)
            if(result.error === undefined || result.error === ''){
                alert('Cadastrado com sucesso')
                navigation.reset({
                    index: 1,
                    routes:[{name: 'LoginScreen'}]
                  })
            } else {
                if(result.error.celular){
                    alert(result.error.celular.msg)
                } else if (result.error.cep){
                    alert(result.error.cep.msg)
                }else if (result.error.email){
                    alert(result.error.email.msg)
                }
            }
        } else {
            alert("Preencha os Campos")
        }
        
    }

    return (
        <C.Container>
            <StatusBar backgroundColor='#121214' />
            <ScrollView>
           
            <C.Field 
                placeholder='Digite seu nome completo'
                placeholderTextColor='#6e6d75'
                value={name}
                onChangeText={(e)=>setName(e)}
                keyboardType='email-address'
            />
            <C.Field 
                placeholder='Digite seu e-mail'
                placeholderTextColor='#6e6d75'
                value={email}
                onChangeText={(e)=>setEmail(e)}
                keyboardType='email-address'
            />
            <C.Field 
                placeholder='Digite seu CEP'
                placeholderTextColor='#6e6d75'
                value={cep}
                maxLength={9}
                onChangeText={(e)=>setCep(e)}
            />
            <TextInputMask 
                style={{borderWidth: 1,borderColor: '#CCC',borderRadius: 5,padding: 10,color:'#FFF',backgroundColor:'#201f24'}}
                type={'cel-phone'}
                options={{
                    maskType:"BRL",
                    withDDD: true,
                    dddMask:'(99) '
                }}
                value={tel}
                onChangeText={text => setTel(text)}
                ref={telRef}
                placeholder='Digite seu celular'
                placeholderTextColor='#6e6d75'
            />
            
            <C.InputArea>
             <C.FieldPassword 
                placeholder='Digite sua senha'
                placeholderTextColor='#6e6d75'
                secureTextEntry={hidePass}
                value={password}
                onChangeText={(e)=>setPassword(e)}
            />
            <C.IconShowPassword onPress={()=>setHidePass(!hidePass)}>
                <FontAwesome name={hidePass === true ? 'eye': 'eye-slash'} size={24} color='#6e6d75' />
            </C.IconShowPassword>
            </C.InputArea>

            <C.Select>
                    <Picker
                        dropdownIconColor='#FFF'
                        itemStyle={{borderRadius:5,borderWidth:1}}
                        selectedValue={state}
                        style={{color:'#fff'}}
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