import React,{useEffect} from "react";
import { StatusBar } from "react-native";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import userReducer, { setToken, setUser } from "../../redux/reducers/userReducer";


export default () => {

    const navigation = useNavigation()
    

    useEffect(()=>{
      setTimeout(()=>{
        navigation.reset({
            index: 1,
            routes:[{name: 'LoginScreen'}]
        })
      },500)
    },[])

    return (
        <C.Container>
            <C.LoadingIcon color='#000' size='large' />
        </C.Container>
    )
}