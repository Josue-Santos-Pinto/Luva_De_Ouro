import React, { useContext, useState } from "react";
import C from './style'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesome} from '@expo/vector-icons'
import api from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";




export default () => {

   

  

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()
   

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf,setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass,setHidePass] = useState(true)
    const [confirmHidePass,setConfirmHidePass] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState('')
    
    


    const handleRegisterButton = async () => {

        if(name && email && cpf && password && confirmPassword){
            let result = await api.register(name,email,cpf,password,confirmPassword)
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
            alert("Preencha os Campos")
        }
        
    }

    return (
        <C.Container>
            
           
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
            <C.Field 
                placeholder='Digite seu CEP'
                value={cpf}
                onChangeText={(e)=>setCpf(e)}
                keyboardType='number'
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