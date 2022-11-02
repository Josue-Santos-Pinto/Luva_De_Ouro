import React,{useEffect, useState, useContext} from "react";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import ListaItem from "../../components/ListaItem";
import  api  from "../../services/api";
import AuthContext from "../../contexts/authContext";
import { useStateValue } from "../../contexts/StateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "react-native";

export default () => {

    
    const [context, dispatch] = useStateValue()
    const [item,setItem] = useState()
    
    
    const navigation = useNavigation()

    const loadAlbum = async () => {
        let data = await api.getAllProducts()
        setItem(data.ads)
    }
    

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: '',
            headerRight: () => (
                <C.ButtonsArea >
                    <C.SearchButton onPress={()=>navigation.navigate('SearchScreen')}>
                        <FontAwesome name='search' size={24} color='#6e6d75' />
                    </C.SearchButton>

                   
                </C.ButtonsArea>
            )
        })
        loadAlbum()  
    },[])


    return (
        <C.Container>
            <StatusBar backgroundColor='#121214' />
            <C.ProductsList 
                data={item}
                renderItem={({item,index})=><ListaItem data={item} />}
                keyExtractor={(item)=>item.id}
            />
        </C.Container>
    )
}