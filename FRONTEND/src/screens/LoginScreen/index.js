import React, { useState } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";

import {FontAwesome} from '@expo/vector-icons'
import api from '../../services/api'
import { useStateValue } from "../../contexts/StateContext";




export default () => {

  

    const navigation = useNavigation()
   
    const [context, dispatch] = useStateValue()

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const [hidePass,setHidePass] = useState(true)
    
    
    const handleLoginButton = async () => {

        if(cpf && password){
            let result = await api.login(cpf,password)
            if(result.error === ''){

                dispatch({
                    type: 'setToken',
                    payload: {
                      token: result.token
                    }
                })

                dispatch({
                    type:'setUser',
                    payload:{
                        user: result.user
                    }
                })

                navigation.reset({
                    index: 1,
                    routes:[{name: 'MainDrawer'}]
                  })
            } else {
                alert(result.error)
            }
        } else {
            alert('Preencha os Campos')
        }
      
    }
    const handleRegisterButton = () => {
        navigation.navigate('RegisterScreen')
    }

    return (
        <C.Container>
            
            <C.Logo 
                source={require('../../assets/logo.png')}
                resizeMode='contain'
            />
            <C.Field 
                placeholder='Digite seu e-mail'
                value={cpf}
                onChangeText={(e)=>setCpf(e)}
                keyboardType='email-adress'
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

            <C.ButtonArea onPress={handleLoginButton}>
                <C.ButtonText>Entrar</C.ButtonText>
            </C.ButtonArea>

            <C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>Cadastrar-se</C.ButtonText>
            </C.ButtonArea>

        </C.Container>
    )
}