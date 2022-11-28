import React, { useState, useEffect,useRef, useContext } from "react";
import C from './style'
import {FontAwesome,Ionicons} from '@expo/vector-icons'
import  Constants  from "expo-constants";
import * as ImagePicker from 'expo-image-picker'
import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";
import {TextInputMask} from 'react-native-masked-text'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "react-native";

export default () => {

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()

    

    const [categories,setCategories] = useState([])

    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [imageSplit,setImageSplit] = useState('')
    const [modal,setModal] = useState(false)
    const [price,setPrice] = useState('')
    const [unmaskedPrice,setUnmaskedPrice] = useState('')
    const [priceNegotiable,setPriceNegotiable] = useState(false)
    const [category,setCategory] = useState('')
    const [error,setError] = useState('')
    const [url,setUrl] = useState('')
    
    const [hasPermission,setHasPermission] = useState(null)
    const [openCamera,setOpenCamera] = useState(false)

    const [image,setImage] = useState('') 
    const priceRef = useRef()

   


    const ImagePickerCall = async () => {
        if(Constants.platform.ios){
            const {status} = await ImagePicker.requestCameraPermissionsAsync()
            if(status !== 'granted'){
                alert('É necessário permitir o uso da camera para prosseguir')
                return
            }
        }

       const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
        
       })
       if(data.cancelled){
        return
       }
       if(!data.uri){
        return
       }
        setUrl(data)
       
       setImage(data.uri)

    }
    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories()
            setCategories(cats.categories)
        }
        getCategories()
    },[])


    useEffect(()=>{
        if(price != undefined){
            const unmask = priceRef?.current.getRawValue()
            setUnmaskedPrice(unmask)
        }
        
    },[price])

    useEffect(()=>{
        console.log(url)
    },[url])
    
    
    const postAd = async () => {
        let errors = []
        if(!title.trim()){
            errors.push(`Adicione um titulo ` + `\n`)
        }
        if(!category || category == 'Selecione uma categoria'){
            errors.push(`selecione um categoria ` + `\n`)
        }
        if(!desc.trim()){
            errors.push(`Adicione um descrição ` +`\n`)
        }
        if(!unmaskedPrice){
            errors.push(`Adicione um preço` + `\n`)
        }
        if(!image){
            errors.push(`Selecione uma imagem` + `\n`)
        }
        if(errors.length === 0){
           console.log(image)
            const fData = new FormData()
            let token = await AsyncStorage.getItem('token')
            fData.append('token',token)
            fData.append('img',{
                uri: image,
                type: 'image/jpeg',
                name: 'photo.jpg'
            })
            fData.append('title',title)
            fData.append('price',unmaskedPrice)
            fData.append('priceneg',priceNegotiable)
            fData.append('cat',category)
            fData.append('desc',desc)
            console.log(fData)
            
            const json = await api.postNewAd(fData)

            alert('Anúncio postado com sucesso')
            navigation.reset({
                index: 1,
                routes:[{name: 'HomeScreen'}]
            })

        } else {
            setError(errors.join("\n"))
            alert(errors)
        }
       
    }

    return (
        <C.Container>
            <StatusBar backgroundColor='#121214' />
            <C.Scroll>
                {url === '' &&
                    <C.AddPhotoArea>
                        
                        <C.AddPhoto onPress={ImagePickerCall}>
                            <FontAwesome name='camera' size={24} color='#000' />
                            <C.Text>Adicionar Fotos</C.Text>
                        </C.AddPhoto>

                    </C.AddPhotoArea>
                }
                {url &&
                <C.AddPhotoArea>
                    <C.PhotoArea>
                        <C.Photo source={{uri:url.uri}} resizeMode='contain' />
                    </C.PhotoArea>
                    <C.ChangePhoto onPress={ImagePickerCall}>
                        <C.ChangePhotoText>Trocar Foto</C.ChangePhotoText>
                    </C.ChangePhoto>
                </C.AddPhotoArea>
                }
                
                    
                <C.NewItemInfo>
                    <C.ItemTitle>Titulo</C.ItemTitle>
                    <C.ItemField 
                        value={title}
                        onChangeText={(e)=>setTitle(e)}
                        placeholder='Ex: Tinta Suvinil'
                    />
                </C.NewItemInfo>
                <C.NewItemInfo>
                    <C.ItemTitle>Descrição</C.ItemTitle>
                    <C.ItemFieldDesc 
                        value={desc}
                        onChangeText={(e)=>setDesc(e)}
                        multiline={true}
                        placeholder='Ex: Tinta cor branca semi nova 3L'
                    />
                </C.NewItemInfo>
                <C.NewItemInfo>
                    <C.ItemTitle>Categoria</C.ItemTitle>
                   <Picker
                    selectedValue={category}
                    style={{width:200,height:50}}
                    onValueChange={(itemValue)=>setCategory(itemValue)}
                   >
                    {category === undefined && <Picker.Item label="Selecione uma categoria" />}
                    {categories && categories.map(i => 
                        <Picker.Item key={i._id} label={i.name} value={i._id} />
                        )}
                   

                   </Picker>
                    
                </C.NewItemInfo>
                <C.NewItemInfo>
                    <C.ItemTitle>Preço</C.ItemTitle>
                    <TextInputMask 
                        style={{width:150,height: 40,borderWidth: 1,borderColor: '#000',borderRadius: 5,padding: 10}}
                        type={'money'}
                        options={{
                            maskType:'BRL'
                        }}
                        value={price}
                        onChangeText={text => setPrice(text)}
                        ref={priceRef}
                        placeholder='R$'
                    />
                </C.NewItemInfo>
             
                <C.SendButtonArea>
                    <C.SendButton onPress={postAd}>
                        <C.SendButtonText>Enviar</C.SendButtonText>
                    </C.SendButton>
                </C.SendButtonArea>
               
            </C.Scroll>
        </C.Container>
    )
}