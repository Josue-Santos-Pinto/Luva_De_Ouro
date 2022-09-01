import React,{useEffect, useState} from "react";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import FakeApi from "../../Api/FakeApi";
import ListaItem from "../../components/ListaItem";
import { api } from "../../services/api";

export default () => {

    const navigation = useNavigation()
    const [items,setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [albumInfo,setAlbumInfo] = useState({id: 0,title: '',userId: 0})
    


    const loadAlbum = async () => {
        setLoading(true)
        const albumInfo = await api.getAlbum()
        setAlbumInfo(albumInfo)
        setLoading(false)
    }
    const getPhotos = async () => {
        setLoading(true)
        const photo = await api.getPhotosFromAlbum()
        setItems(photo)
        setLoading(false)
    }
   


    useEffect(()=>{
        navigation.setOptions({
            headerTitle: '',
            headerRight: () => (
                <C.ButtonsArea >
                    <C.SearchButton onPress={()=>navigation.navigate('SearchScreen')}>
                        <FontAwesome name='search' size={24} color='#000' />
                    </C.SearchButton>

                    <C.NotificationButton onPress={()=>navigation.navigate('NotificationScreen')}>
                        <FontAwesome name='bell-o' size={24} color='#000' />
                    </C.NotificationButton>

                    <C.FavButton onPress={()=>navigation.navigate('FavoriteScreen')}>
                        <FontAwesome name='heart-o' size={24} color='#000' />
                    </C.FavButton>
                </C.ButtonsArea>
            )
        })
        loadAlbum()
        getPhotos()
    },[])


    return (
        <C.Container>
            <C.ProductsList 
                data={items}
                renderItem={({item,index})=><ListaItem data={item} />}
                keyExtractor={(item)=>item.id}
            />
        </C.Container>
    )
}