import React, { useContext, useState } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesome} from '@expo/vector-icons'
import {api} from '../../services/api'
import { useEffect } from "react";




export default () => {

  

    const navigation = useNavigation()
   

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [hidePass,setHidePass] = useState(true)
    
    

   /* const handleLoginButton = async (e) => {
        e.preventDefault()
        setDisabled(true)
        const json = await api.login(email, password)
        if(json.error){
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }
    } */
    const handleLoginButton = () => {
      navigation.reset({
        index: 1,
        routes:[{name: 'MainDrawer'}]
      })
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

            <C.ButtonArea onPress={handleLoginButton}>
                <C.ButtonText>Entrar</C.ButtonText>
            </C.ButtonArea>

            <C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>Cadastrar-se</C.ButtonText>
            </C.ButtonArea>

        </C.Container>
    )
}