import React, { useState } from "react";
import C from './style'
import {FontAwesome} from '@expo/vector-icons'
import { Modal } from "react-native";


export default () => {


    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [modal,setModal] = useState(false)
    const [cep,setCep] = useState('')

    return (
        <C.Container>
            <C.Scroll>
                <C.AddPhotoArea>
                    <C.AddPhoto>
                        <FontAwesome name='camera' size={24} color='#000' />
                        <C.Text>Adicionar Fotos</C.Text>
                    </C.AddPhoto>
                </C.AddPhotoArea>
                <C.NewItemInfo>
                    <C.ItemTitle>Titulo</C.ItemTitle>
                    <C.ItemField 
                        value={title}
                        onChangeText={(e)=>setTitle(e)}
                    />
                </C.NewItemInfo>
                <C.NewItemInfo>
                    <C.ItemTitle>Descrição</C.ItemTitle>
                    <C.ItemFieldDesc 
                        value={desc}
                        onChangeText={(e)=>setDesc(e)}
                        multiline={true}
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
                        <FontAwesome name="arrow-left" size={20} color='#000' />
                    </C.BackButton>
                    <C.CategoryButton>
                        <C.CategoryText>Category name</C.CategoryText>
                        <FontAwesome name="arrow-right" size={24} color='#DDD'/>
                    </C.CategoryButton>

                </Modal>
            </C.Scroll>
        </C.Container>
    )
}