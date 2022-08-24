import React,{useEffect} from "react";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'

export default () => {

    const navigation = useNavigation()

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
      
    },[])

    return (
        <C.Container>
            <C.Text>HomeScreen</C.Text>
        </C.Container>
    )
}