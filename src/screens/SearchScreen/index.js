import React,{useEffect, useState} from "react";
import C from './style'

import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import FakeApi from "../../Api/FakeApi";
import ListaItem from "../../components/ListaItem";

export default () => {

    const navigation = useNavigation()
    const [items,setItems] = useState(FakeApi)
    const [list,setList] = useState(items)
    const [searchText,setSearchText] = useState('')

   


    useEffect(()=>{
        navigation.setOptions({
            headerTitle: '',
            headerRight: () => (
                <C.ButtonsArea >
                    <C.SearchButton>
                        
                            <C.InputText 
                                value={searchText}
                                placeholder='Procurar Produto'
                                onChangeText={(e)=>setSearchText(e)}
                            />
                            {searchText != '' &&
                                <C.SearchButtonIcon onPress={()=>setSearchText('')} >
                                    <FontAwesome name='close' size={24} color='#000' />
                                </C.SearchButtonIcon>
                            }
                           
                            
                        
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
        if(searchText === ''){
            setList(items)
        } else {
            setList(items.filter((item)=>{
                if((item.productName.toLowerCase().indexOf(searchText.toLowerCase()) > -1)){
                    return true
                } else {
                    return false
                }
                
            }))
        }
      
    },[searchText])

 
    


    return (
        <C.Container>
            <C.ProductsList 
                data={list}
                renderItem={({item,index})=><ListaItem data={item} />}
                keyExtractor={(item)=>item.id}
            />
        </C.Container>
    )
}