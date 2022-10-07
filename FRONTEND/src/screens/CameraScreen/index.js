import React, { useState, useEffect, useRef, useContext } from "react";
import C from './style'
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import {UserContext} from '../../contexts/userContext'
import api from "../../services/api";
import { Modal, StatusBar } from "react-native";



export default () => {

    

    const navigation = useNavigation()
    const camRef = useRef(null)


    const [photoList,setPhotoList] = useState([])
    const [type,setType] = useState(Camera.Constants.Type.back)
    const [hasPermission,setHasPermission] = useState(null)
    const [openCamera,setOpenCamera] = useState(false)
    const [modal,setModal] = useState(false)
    


    useEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
        
    },[])

    useEffect(()=>{
        const permission = async () => {
            const {status} = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        permission()
        console.log(photoList)
        
    },[])

    if(hasPermission === null){
        return <C.View/>
    }
    if(hasPermission === false){
        return <C.Text>Acesso negado</C.Text>
    }

    const takePicture = async () => {
        if(camRef){
            const data = await camRef.current.takePictureAsync()
            console.log(data.uri)
            setPhotoList(data.uri)
           /* let result = await api.addPhoto(data.uri)
            if(result.error === ''){
                let list = [...photoList]
                list.push(result.photo)
                setPhotoList(list)
            } else {
                alert(result.error)
            }*/
            setModal(true)
        }
    }
    const sendPhoto = async () => {
        if(photoList){
            let result = await api.addPhoto(photoList)
            if(result.error === ''){
                let list = [...photoList]
                list.push(result.photo)
                setPhotoList(list)
            } else {
                alert(result.error)
            }
        }
    }
    

    return (
        <C.Container>
            <StatusBar />
            <Camera 
                style={{flex: 1}}
                type={type}
                ref={camRef}
            >
                {photoList &&
                    <Modal transparent={false} visible={modal} style={{flex:1,alignItems:"center"}}>
                        
                        <C.PhotoItem >
                                <C.Photo source={{uri: photoList}} resizeMode='cover' />
                            <C.CameraButtons>

                                <C.CamButton onPress={null}>
                                    <Ionicons name="remove-circle" size={40} color='#FF0000' />
                                </C.CamButton>

                                <C.CamButton onPress={sendPhoto}>
                                    <Ionicons name="camera" size={40} color='#000' />
                                </C.CamButton>

                            </C.CameraButtons>
                        </C.PhotoItem>
                        
                    </Modal>
                }
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
        </C.Container>
    )
}