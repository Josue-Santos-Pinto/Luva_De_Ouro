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
    const [state, setState] = useState('')
    
    


    const handleRegisterButton = async () => {

        if(name && email && password && state){
            let result = await api.register(name,email,password,state)
            console.log(result.data.email)
            if(result.error === undefined || result.error === ''){

                dispatch({
                    type: 'setToken',
                    payload: {
                      token: result.data.token
                    }
                })

                dispatch({
                    type:'setUser',
                    payload:{
                        user: result.email
                    }
                })

                navigation.reset({
                    index: 1,
                    routes:[{name: 'MainDrawer'}]
                  })

                  console.log(result.data.token)
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
                placeholder='digite seu estado'
                secureTextEntry={confirmHidePass}
                value={state}
                onChangeText={(e)=>setState(e)}
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