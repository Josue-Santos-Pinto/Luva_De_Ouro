import React,{useEffect} from "react";
import { StatusBar } from "react-native";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import  api  from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";



export default () => {

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()
    

    useEffect(()=>{
      const checkLogin = async () => {
        let token = await api.getToken()

        if(token){

            let result = await api.validateToken()

            if(result.error === ''){

              dispatch({type:'setUser',payload:{user: result.email}})

              navigation.reset({
                index: 1,
                routes:[{name: 'MainDrawer'}]
              })

            } else {
              alert(result.error)
              dispatch({type:'setToken',payload:{token:''}})
              navigation.reset({
                index: 1,
                routes:[{name: 'LoginScreen'}]
              })
            }
        } else {
          navigation.reset({
            index: 1,
            routes:[{name: 'LoginScreen'}]
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