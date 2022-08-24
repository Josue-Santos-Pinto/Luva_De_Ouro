import React,{useEffect} from "react";
import { StatusBar } from "react-native";
import C from './style'
import api from '../../services/api'
import { useNavigation } from "@react-navigation/native";
import userReducer, { setToken, setUser } from "../../redux/reducers/userReducer";
import { useSelector } from "react-redux";

export default () => {

    const navigation = useNavigation()
    const user = useSelector((state)=> state.user)

    useEffect(()=>{
        const checkLogin = async () => {
            let token = await api.getToken()
            if(token){
                let result = await api.validateToken()
                if(result.error === ''){
                    setUser(result.user)
                    navigation.reset({
                        index: 1,
                        routes: [{name: 'HomeScreen'}]   
                    })
                } else {
                    alert(result.error)
                    setToken('')
                    navigation.reset({
                        index: 1,
                        routes: [{name: 'LoginScreen'}]   
                    })
                }
            } else {
                navigation.reset({
                    index: 1,
                    routes: [{name: 'LoginScreen'}]   
                })
            }
        }
        checkLogin()
    },[])

    return (
        <C.Container>
            <C.LoadingIcon color='#000' size='large' />
        </C.Container>
    )
}