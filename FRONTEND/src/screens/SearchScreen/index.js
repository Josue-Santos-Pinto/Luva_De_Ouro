import React,{useEffect, useState} from "react";
import C from './style'

import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import ListaItem from "../../components/ListaItem";
import api from "../../services/api";

export default () => {

    const [items,setItems] = useState([])
    const navigation = useNavigation()
    const [list,setList] = useState(items)
    const [searchText,setSearchText] = useState('')

    
useEffect(()=>{
    const loadAlbum = async () => {
        let data = await api.getAllProducts()
        setItems(data.ads)
    }
    loadAlbum()
},[])
    


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

                 
                </C.ButtonsArea>
            )
        })
        if(searchText === ''){
            setList(items)
        } else {
            setList(items.filter((item)=>{
                if((item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)){
                    return true
                } else {
                    return false
                }
                
            }))
        }
      
    },[searchText])

 
    


    return (
        <C.Container>
            <StatusBar backgroundColor='#121214' />
            {searchText != '' &&
                <C.ProductsList 
                    data={list}
                    renderItem={({item,index})=><ListaItem data={item} />}
                    keyExtractor={(item)=>item.id}
                />
            }
            {searchText == '' &&
            <C.AlertArea>
                <C.Text>Pesquise algum produto</C.Text>
            </C.AlertArea>
            }
            {searchText != '' && list.length == 0 &&
            <C.AlertArea>
                <C.Text>Produto não encontrado</C.Text>
            </C.AlertArea>
            }
        </C.Container>
    )
}