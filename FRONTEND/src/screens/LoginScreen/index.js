import React, { useState } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";
import { Linking, ScrollView } from "react-native";
import {FontAwesome} from '@expo/vector-icons'
import api from '../../services/api'
import { useStateValue } from "../../contexts/StateContext";
import { useEffect } from "react";




export default () => {

  

    const navigation = useNavigation()
   
    const [context, dispatch] = useStateValue()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [hidePass,setHidePass] = useState(true)
    

    
    const handleLoginButton = async () => {

        if(email && password){
            let result = await api.loginLocal(email,password)
           
            
            console.log(result)
            if(result.error === undefined || result.error === ''){
                
                    dispatch({type: 'setToken',payload: {token: result.token}})
                    if(result.token){
                        let result = await api.getUser()
          
                        if(!result.notallowed){
                          
                          dispatch({type:'setEmail',payload:{email: result.email}})
                          dispatch({type:'setName',payload:{name: result.name}})
                          dispatch({type:'setState',payload:{state: result.state}})
                          dispatch({type:'setAds',payload:{ads: result.ads}})
            
                          navigation.reset({
                            index: 1,
                            routes:[{name: 'MainDrawer'}]
                          })
            
                        }
                    }
                    
                  
               

                
            } else{
                
                if(result.error.email){
                    alert(result.error.email.msg)
                } else if (result.error.password){
                    alert(result.error.password.msg)
                }else {
                    alert(result.error)
                }
            }
        } else {
            alert('Preencha os Campos')
        }
      
    }
    

    return (
        <C.Container>
            <ScrollView>
            <C.Logo 
                source={require('../../assets/logo.png')}
                resizeMode='contain'
            />
            <C.Title>Luva de Ouro</C.Title>
            <C.Label>Seu endereço de email</C.Label>
            <C.InputArea>
                
                <C.EmailIcon>
                    <FontAwesome name='envelope-o' size={24} color='#6e6d75' />
                </C.EmailIcon>

                <C.Field 
                    placeholder='Digite seu e-mail'
                    placeholderTextColor='#6e6d75'
                    value={email}
                    onChangeText={(e)=>setEmail(e)}
                    keyboardType='email-adress'
                />
                
            </C.InputArea>
            <C.Label>Sua Senha</C.Label>
            <C.InputArea>
            <C.IconShowPassword onPress={()=>setHidePass(!hidePass)}>
                <FontAwesome name={hidePass === true ? 'eye': 'eye-slash'} size={24} color='#6e6d75' />
            </C.IconShowPassword>
             <C.Field
                placeholder='Digite sua senha'
                placeholderTextColor='#6e6d75'
                secureTextEntry={hidePass}
                value={password}
                onChangeText={(e)=>setPassword(e)}
            />
            
            </C.InputArea>

            <C.ButtonArea onPress={handleLoginButton}>
                <C.ButtonText>Entrar</C.ButtonText>
            </C.ButtonArea>

            {/*<C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>Cadastrar-se</C.ButtonText>
            </C.ButtonArea>*/}
            
            <C.Text onPress={()=>{navigation.navigate('RegisterScreen')}}>Não possui conta ? Criar agora!</C.Text>
            </ScrollView>
        </C.Container>
    )
}