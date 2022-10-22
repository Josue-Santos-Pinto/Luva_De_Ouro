import React,{useEffect} from "react";
import { StatusBar } from "react-native";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import  api  from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";
import { useState } from "react";



export default () => {

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()
    
    

    useEffect(()=>{
      const checkLogin = async () => {
        let token = await api.getToken()
        

        if(token){
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
            if(result.notallowed){
            
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