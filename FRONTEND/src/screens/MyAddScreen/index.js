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
import MyAdds from "../../components/MyAdds";

export default () => {

    
    const [context, dispatch] = useStateValue()
    const [item,setItem] = useState([])
    
    
    const navigation = useNavigation()

    useEffect(()=>{
        const loadAlbum = async () => {
            let data = await api.getUser()
            let newItems = [...item]
            for(let i=0;i<data.ads.length;i++){
                newItems.push(data.ads[i]._doc)
                setItem(newItems)
            }
            
        }
        loadAlbum()
    },[])
    
    useEffect(()=>{
        console.log(item)
    },[item])
   
    

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
          
    },[])


    return (
        <C.Container>
           <C.ProductsList 
                data={item}
                renderItem={({item,index})=><MyAdds data={item} />}
                keyExtractor={(item,index)=>index}
            />
        </C.Container>
    )
}