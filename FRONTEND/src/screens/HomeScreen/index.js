import React,{useEffect, useState, useContext} from "react";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import FakeApi from "../../Api/FakeApi";
import ListaItem from "../../components/ListaItem";
import  api  from "../../services/api";
import AuthContext from "../../contexts/authContext";
import { useStateValue } from "../../contexts/StateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {

    
    const [context, dispatch] = useStateValue()
    const [item,setItem] = useState()
    
    
    const navigation = useNavigation()

    const loadAlbum = async () => {
        let data = await api.getAlbums()
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

                    <C.NotificationButton onPress={()=>navigation.navigate('NotificationScreen')}>
                        <FontAwesome name='bell-o' size={24} color='#6e6d75' />
                    </C.NotificationButton>

                    <C.FavButton onPress={()=>navigation.navigate('FavoriteScreen')}>
                        <FontAwesome name='heart-o' size={24} color='#6e6d75' />
                    </C.FavButton>
                </C.ButtonsArea>
            )
        })
        loadAlbum()  
    },[])


    return (
        <C.Container>
            <C.ProductsList 
                data={item}
                renderItem={({item,index})=><ListaItem data={item} />}
                keyExtractor={(item)=>item.id}
            />
        </C.Container>
    )
}