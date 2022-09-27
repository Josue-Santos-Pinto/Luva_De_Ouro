import React, { useState, useEffect, useRef, useContext } from "react";
import C from './style'
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import {UserContext} from '../../contexts/userContext'



export default () => {

    const { getPhoto } = useContext(UserContext)

    const navigation = useNavigation()
    const camRef = useRef(null)

    const [capturedPhoto,setCapturedPhoto] = useState()

    const [photoList,setPhotoList] = useState([])
    const [type,setType] = useState(Camera.Constants.Type.back)
    const [hasPermission,setHasPermission] = useState(null)
    const [openCamera,setOpenCamera] = useState(false)
    


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
            
            getPhoto(data.uri)
            
            
        }
    }
    

    return (
        <C.Container>
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
        </C.Container>
    )
}