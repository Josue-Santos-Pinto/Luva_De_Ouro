import React, { useState, useEffect, useContext } from "react";
import C from './style'
import {FontAwesome} from '@expo/vector-icons'
import { Modal } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from '../../contexts/userContext'

export default () => {

    const navigation = useNavigation()
    const {photo} = useContext(UserContext)

    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [modal,setModal] = useState(false)
    const [cep,setCep] = useState('')
    const [photoList,setPhotoList] = useState([])
    const [type,setType] = useState(Camera.Constants.Type.back)
    const [hasPermission,setHasPermission] = useState(null)
    const [openCamera,setOpenCamera] = useState(false)

    

    return (
        <C.Container>
            <C.Scroll>
                
                    <C.AddPhotoArea>
                        {photo.length == 0 &&
                        <C.AddPhoto onPress={()=>navigation.navigate('CameraScreen')}>
                            <FontAwesome name='camera' size={24} color='#000' />
                            <C.Text>Adicionar Fotos</C.Text>
                        </C.AddPhoto>
                        }
                        {photo.length > 0 &&
                            <C.Photo 
                                source={{uri: photo}}
                                resizeMode='cover'
                            />
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
                    <C.CategoryButton onPress={()=>setModal(true)}>
                        <C.CategoryText>Selecione uma Categoria</C.CategoryText>
                    </C.CategoryButton>
                </C.NewItemInfo>
                <C.NewItemInfo>
                    <C.ItemTitle>CEP</C.ItemTitle>
                    <C.ItemFieldCep 
                        value={cep}
                        onChangeText={(e)=>setCep(e)}
                        keyboardType='numeric'
                    />
                </C.NewItemInfo>
                <C.SendButtonArea>
                    <C.SendButton >
                        <C.SendButtonText>Enviar</C.SendButtonText>
                    </C.SendButton>
                </C.SendButtonArea>
                <Modal 
                    animationType="fade"
                    transparent={false}
                    visible={modal}
                >
                    <C.BackButton onPress={()=>setModal(false)}>
                        <FontAwesome name="arrow-left" size={20} color='#333' />
                    </C.BackButton>
                    <C.CategoryListButton>
                        <C.CategoryListText>Category name</C.CategoryListText>
                        <FontAwesome name="arrow-right" size={24} color='#000'/>
                    </C.CategoryListButton>

                </Modal>
            </C.Scroll>
        </C.Container>
    )
}