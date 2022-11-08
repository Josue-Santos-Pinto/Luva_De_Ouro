import React, { useContext,useEffect,useState,useRef } from "react";
import styled from "styled-components/native";
import  api  from "../../services/api";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import { Alert, Linking,StatusBar,ScrollView } from "react-native";
import C from './style'

import { FontAwesome} from '@expo/vector-icons'
import {TextInputMask} from 'react-native-masked-text'
import { Picker } from "@react-native-picker/picker";


export default () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [category,setCategory] = useState('')
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [desc,setDesc] = useState('')
    const [images,setImages] = useState([])
    const [price,setPrice] = useState(0)
    const [priceNeg,setPriceNeg] = useState(false)
    const [state,setState] = useState('')
    const [states,setStates] = useState([])
    const [userInfo,setUserInfo] = useState({})
    const [views,setViews] = useState(0)
    
    const [changedStatus,setChangedStatus] = useState('')


    const id = route.params.id
    const status = route.params.status.toString()

    

    const [changedTitle,setChangedTitle] = useState('')
    const [changedPrice,setChangedPrice] = useState('')
    const [changedImage,setChangedImage] = useState('')
    const [changedDesc,setChangedDesc] = useState('')
    const [changedState,setChangedState] = useState(state)

    const [unmaskedPrice,setUnmaskedPrice] = useState('')
    const priceRef = useRef(null)

    useEffect(()=>{
        const getItem = async () => {
            
            let response = await api.getItem(id)
            
            setTitle(response.title)
            setCategory(response.category.name)
            setDate(response.dateCreated)
            setDesc(response.description)
            setImages(response.images)
            setPrice(response.price)
            setPriceNeg(response.priceNegotiable)
            setState(response.stateName)
            setUserInfo(response.userInfo)
            setViews(response.views)
            
        }
        getItem()
        
    },[id])

    useEffect(()=>{
        setChangedTitle(title)
        setChangedPrice(price.toFixed(2).toString())
        setChangedDesc(desc)
        
    },[title,desc,price])

    useEffect(()=>{
        const getStates = async () => {
            const stat = await api.getStates()
            
            setStates(stat.states)
        }
        getStates()
    },[])
    
    useEffect(()=>{
        
        if(changedPrice != ''){
            const unmask = priceRef?.current.getRawValue()
            setUnmaskedPrice(unmask)
        }
        
    },[changedPrice])

    useEffect(()=>{
        
        if(status == 'true'){
            setChangedStatus("false")
        } else {
            setChangedStatus("true")
        }
    },[])


    const changeAdd = async () => {
        let cleanAlerts = []
        if(changedTitle != title){
            let result = await api.putItemTitle(changedTitle,id)
            cleanAlerts.push('\n' + 'Titulo alterado com sucesso')
            if(result.error){
                alert(result.error)
            }
        }
        if(unmaskedPrice != price){
            
            let result2 = await api.putItemPrice(unmaskedPrice,id)
            cleanAlerts.push('\n' + 'Preço alterado com sucesso')
            
            if(result2.error){
                alert(result2.error)
            }
        }
        if(changedDesc != desc){
            let result3 = await api.putItemDesc(changedDesc,id)
            cleanAlerts.push('\n' + 'Descrição alterada com sucesso')
            if(result3.error){
                alert(result3.error)
            }
        }
        alert(cleanAlerts)
         
        navigation.reset({
            index: 1,
            routes:[{name: 'HomeScreen'}]
        })  
    }

    const disableAdd = async () => {
        
        
        let result = await api.putItemStatus(changedStatus,id)
        
        if(result.error){
            alert(result.error)
        }
        if(changedStatus === true){
            alert('Anúncio desativado')
        } else {
            alert('Anúncio ativado')
        }
        navigation.reset({
            index: 1,
            routes:[{name: 'HomeScreen'}]
        })
    }
    

    return(
        <C.Item>

            
                
           
        <StatusBar backgroundColor='#121214' />
        <ScrollView>
        
                <C.AddImageArea >
                    <C.AddImage source={{uri:images[0]}} resizeMode='cover'/>
                </C.AddImageArea>
                    <C.AddInfo>
                        <C.Text>Titulo: </C.Text>
                        <C.Input 
                            value={changedTitle}
                            onChangeText={(e)=>setChangedTitle(e)}
                        />
                    </C.AddInfo>
                    <C.AddInfo>
                        <C.Text>Price: </C.Text>
                        <TextInputMask 
                        style={{width:150,height: 40,borderWidth: 1,borderColor: '#000',borderRadius: 5,padding: 10}}
                        type={'money'}
                        options={{
                            maskType:'BRL'
                        }}
                        value={changedPrice}
                        onChangeText={txt => setChangedPrice(txt)}
                        ref={priceRef}
                        placeholder='R$'
                        
                    />
                    </C.AddInfo>
                    <C.AddInfo>
                        <C.Text>Descrição: </C.Text>
                        <C.InputDesc 
                            value={changedDesc}
                            onChangeText={(e)=>setChangedDesc(e)}
                            multiline={true}
                        />
                    </C.AddInfo>
                   
                    
                {status == 'true' &&
                    <>
                    <C.Button color={'#34af23'} onPress={changeAdd}>
                        <C.ButtonText>Alterar Anúncio</C.ButtonText>
                    </C.Button>
                  
                    <C.Button color={'#FF0000'} onPress={disableAdd} style={{marginBottom: 40}}>
                        <C.ButtonText>Desativar Anúncio</C.ButtonText>
                    </C.Button>
                    </>
                  }  
                  {status == 'false' &&
                    <C.Button color={'#34af23'} onPress={disableAdd} style={{marginBottom: 40}}>
                        <C.ButtonText>Ativar Anuncio</C.ButtonText>
                    </C.Button>
                  } 

                    </ScrollView>
                    
      
        

                </C.Item>     
        
    )

}