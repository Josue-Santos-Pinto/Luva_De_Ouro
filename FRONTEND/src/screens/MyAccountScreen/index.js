import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../services/api";
import C from './style'

export default () => {

    const [context, dispatch] = useStateValue()
    const navigate = useNavigation()
    const [userInfo,setUserInfo] = useState([])

    const [name,setName] = useState(context.user.name)
    const [email,setEmail] = useState(context.user.email)
    const [tel,setTel] = useState(context.user.tel)
    const [cep,setCep] = useState(context.user.state)

    useEffect(()=>{
        navigate.setOptions({
            headerTitle: 'Minha Conta'
        })  
    },[])

    const changeAccountInfo = () => {

    }


    return (
        <C.Container>
            <ScrollView>
            <C.AvatarArea>
                <C.Avatar />
            </C.AvatarArea>
            <C.InputArea>
                <C.Text>Nome: </C.Text>
                <C.Input 
                    value={name}
                />
            </C.InputArea>
            <C.InputArea>
                <C.Text>Email: </C.Text>
                <C.Input 
                    value={email}
                />
            </C.InputArea>
            <C.InputArea>
                <C.Text>Telefone: </C.Text>
                <C.Input 
                    value={tel}
                />
            </C.InputArea>
            <C.InputArea>
                <C.Text>CEP: </C.Text>
                <C.Input 
                    value={cep}
                />
            </C.InputArea>
            <C.Button onPress={changeAccountInfo}>
                <C.ButtonText>Alterar</C.ButtonText>
            </C.Button>
            </ScrollView>
        </C.Container>
    )
}