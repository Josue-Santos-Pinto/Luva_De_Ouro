import React, { useContext, useState } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesome} from '@expo/vector-icons'




export default () => {

   

  

    const navigation = useNavigation()
   

    const [fullName,setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass,setHidePass] = useState(true)
    const [confirmHidePass,setConfirmHidePass] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState('')
    
    

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

    const handleRegisterButton = () => {
        if(password === confirmPassword){
            navigation.navigate('LoginScreen')
        } else {
            alert('As senhas precisam ser iguais')
        }
        
    }

    return (
        <C.Container>
            
            <C.Logo 
                source={require('../../assets/logo.png')}
                resizeMode='contain'
            />
            <C.Field 
                placeholder='Digite seu nome completo'
                value={fullName}
                onChangeText={(e)=>setFullName(e)}
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

            <C.InputArea>
             <C.FieldPassword 
                placeholder='Confirme sua senha'
                secureTextEntry={confirmHidePass}
                value={confirmPassword}
                onChangeText={(e)=>setConfirmPassword(e)}
            />
            <C.IconShowPassword onPress={()=>setConfirmHidePass(!confirmHidePass)}>
                <FontAwesome name={confirmHidePass === true ? 'eye': 'eye-slash'} size={24} color='#000' />
            </C.IconShowPassword>
            </C.InputArea>


            <C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>Cadastrar-se</C.ButtonText>
            </C.ButtonArea>

        </C.Container>
    )
}