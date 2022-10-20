import React, { useState, useEffect,useRef, useContext } from "react";
import C from './style'
import {FontAwesome,Ionicons} from '@expo/vector-icons'
import { Modal } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from '../../contexts/userContext'
import api from "../../services/api";
import { useStateValue } from "../../contexts/StateContext";

export default () => {

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()


    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [modal,setModal] = useState(false)
    const [price,setPrice] = useState('')
    const [priceneg,setPriceneg] = useState(true)
    const [cat,setCat] = useState('')
    
    const [hasPermission,setHasPermission] = useState(null)
    const [openCamera,setOpenCamera] = useState(false)

    const camRef = useRef(null)



    const [image,setImage] = useState(null)
    const [type,setType] = useState(Camera.Constants.Type.back)
    
    


   

    useEffect(()=>{
        const permission = async () => {
            const {status} = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        permission()
        
        
    },[])

    useEffect(()=>{
        console.log(image)
    },[image])

    if(hasPermission === null){
        return <C.View/>
    }
    if(hasPermission === false){
        return <C.Text>Acesso negado</C.Text>
    }

    const takePicture = async () => {
        if(camRef){
            const data = await camRef.current.takePictureAsync()
            
            
            setImage(data.uri)
               
            setModal(false)
            
        }
        
    }
    

    const ChangePhoto = () => {
  
    }
    const postAd = async () => {
        console.log(priceneg)
        if(title && price && desc && cat ){
            let result = await api.postNewAd(title,price,priceneg,desc,cat, image)
            
            setTitle('')
            setDesc('')
            setPrice('')
            setCat('')
            console.log(result)
        } else {
            alert('Preencha todos os campos')
        }
    }

    return (
        <C.Container>
            <C.Scroll>
                
                    <C.AddPhotoArea>
                        {image === null &&
                        <C.AddPhoto onPress={()=>setModal(true)}>
                            <FontAwesome name='camera' size={24} color='#000' />
                            <C.Text>Adicionar Fotos</C.Text>
                        </C.AddPhoto>
                        }
                        {image &&
                        <C.PhotoItem>
                            <C.PhotoArea>
                                <C.Photo source={{uri: image}}/>
                            </C.PhotoArea>
                        </C.PhotoItem>
                        }
                        <Modal
                            animationType="fade"
                            transparent={false}
                            visible={modal}
                        >
                            <Camera 
                                style={{flex: 1}}
                                type={type}
                                ref={camRef}
                            >
                                
                                <C.CameraButtons>

                                    <C.CamButton 
                                        onPress={()=>setType(
                                        type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back 
                                        )}
                                    >
                                        <Ionicons name="camera-reverse" size={40} color='#FFF' />
                                    </C.CamButton>

                                    <C.CamButton onPress={takePicture}>
                                        <Ionicons name="camera" size={40} color='#FFF' />
                                    </C.CamButton>

                                </C.CameraButtons>
                            </Camera>        

                        </Modal>
                      
                        {context.photo != undefined &&
                        <C.PhotoArea>
                            <C.Photo 
                                source={{uri: context.photo}}
                                resizeMode='cover'
                            />
                            <C.ChangePhoto onPress={()=>ChangePhoto}>
                                <C.IconArea>
                                    <FontAwesome name='camera' size={24} color='#000' />
                                    <C.Text>Trocar Foto</C.Text>
                                </C.IconArea>
                            </C.ChangePhoto>
                        </C.PhotoArea>
                        }
                    </C.AddPhotoArea>
                
                
                    
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
                   {/* <C.CategoryButton onPress={()=>setModal(true)}>
                        <C.CategoryText>Selecione uma Categoria</C.CategoryText>
                    </C.CategoryButton>*/}
                    <C.ItemFieldDesc 
                        value={cat}
                        onChangeText={(e)=>setCat(e)}
                        placeholder='Ex: car'
                    />
                </C.NewItemInfo>
                <C.NewItemInfo>
                    <C.ItemTitle>Preço</C.ItemTitle>
                    <C.ItemFieldCep 
                        value={price}
                        onChangeText={(e)=>setPrice(e)}
                        keyboardType='numeric'
                    />
                </C.NewItemInfo>
              {/*   <C.NewItemInfo style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <C.ItemTitle>Permitir negociação</C.ItemTitle>
                   <C.PricenegArea>
                    <C.PricenegButton onPress={()=>setPriceneg(!priceneg)} style={{backgroundColor: priceneg === true ? 'green':'#FFF'}} />
                    
                   </C.PricenegArea>
                </C.NewItemInfo>
                */}
                <C.SendButtonArea>
                    <C.SendButton onPress={postAd}>
                        <C.SendButtonText>Enviar</C.SendButtonText>
                    </C.SendButton>
                </C.SendButtonArea>
               
            </C.Scroll>
        </C.Container>
    )
}