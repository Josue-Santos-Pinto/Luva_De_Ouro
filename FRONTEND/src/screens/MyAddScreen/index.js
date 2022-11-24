import React,{useEffect, useState, useContext} from "react";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import ListaItem from "../../components/ListaItem";
import  api  from "../../services/api";
import AuthContext from "../../contexts/authContext";
import { useStateValue } from "../../contexts/StateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyAdds from "../../components/MyAdds";
import { ActivityIndicator, StatusBar } from "react-native";

export default () => {

    
    const [context, dispatch] = useStateValue()
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)
    
    
    const navigation = useNavigation()

    useEffect(()=>{
        const loadAlbum = async () => {
            let data = await api.getUser()   
            setItem(data.ads)  
            setLoading(false)
        }
        loadAlbum()
    },[])
    
   
   
    

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
            <StatusBar backgroundColor='#121214' />
            {!loading && item.length > 0 &&
           <C.ProductsList 
                data={item}
                renderItem={({item,index})=><MyAdds data={item} />}
                keyExtractor={(item,index)=>index}
            />
            }
            {!loading && item.length == 0 &&
                <C.NoAdd>
                    <C.NoAddText>Sem Anúncios</C.NoAddText>
                </C.NoAdd>
            }
            {loading &&
                <C.ActivityArea>
                    <ActivityIndicator color='#FFF' size='large' />
                </C.ActivityArea>
            }
        </C.Container>
    )
}