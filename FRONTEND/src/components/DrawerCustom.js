import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons'
import api from  '../services/api'
import { useStateValue } from "../contexts/StateContext";
import { useState } from "react";

    const DrawerArea = styled.View`
        flex: 1;
        background-color: #FCF8E8;
    `
    const DrawerPerfilArea = styled.View`
        width: 100%;
        background-color: #CEE5D0;
    `
    const DrawerPerfilItems = styled.View`
        margin: 20px 10px;
        flex-direction: row;
        align-items: center;
    `
    const DrawerPerfilImgArea = styled.TouchableOpacity`
        width: 50px;
        height: 50px;
        border-radius: 25px;
        border: 2px solid #000;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
    `
    const DrawerPerfilImg = styled.Image``
    const DrawerPerfilInfo = styled.View`
        flex-direction: column;
    `
    const DrawerPerfilName = styled.Text`
        font-size: 20px;
        font-weight: bold;
    `
    const DrawePerfilEmail = styled.Text`
        font-size: 15px;
    `
    const DrawerScroller = styled.ScrollView``
    const MenuButton = styled.TouchableOpacity`
        flex-direction: row;
        margin-bottom: 5px;
        border-radius: 5px;
        align-items: center;
    `
    const MenuSquare = styled.View`
        width: 5px;
        height: 35px;
        margin-right: 20px;
        background-color: ${props=>props.active ? '#94B49F' : 'transparent'};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
`;
const MenuButtonText = styled.Text`
        font-size: 15px;
        margin-left: 10px;
        color: ${props=>props.active ? '#94B49F' : '#666E78'};
`;



export default (props) => {

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()
    const [user,setUser] = useState([])

    const menus = [
        {title: 'Anúncios', icon: 'home', screen: 'HomeScreen' },
        {title: 'Inserir Anúncio', icon: 'pencil', screen: 'PostAdScreen' },
        {title: 'Notificação', icon: 'bell-o', screen: 'NotificationScreen' },
        {title: 'Chat', icon: 'wechat', screen: 'ChatScreen' },
        {title: 'Favoritos', icon: 'heart-o', screen: 'FavScreen' },
        {title: 'Minha Conta', icon: 'user', screen: 'MyAccountScreen' }

    ]
   
    const handleLogoutButton = async () => {
        await api.logout()
        navigation.reset({
            index: 1,
            routes: [{name: 'LoginScreen'}]   
        })
    }
    useEffect(()=>{
        console.log(context)
    },[])

    return (
        <DrawerArea>
            <DrawerPerfilArea>
                <DrawerPerfilItems>
                    <DrawerPerfilImgArea>
                        {/*<DrawerPerfilImg />*/}
                        <FontAwesome name="user" size={25} color='#000' />
                    </DrawerPerfilImgArea>
                    <DrawerPerfilInfo>
                        <DrawerPerfilName>{context.user.name}</DrawerPerfilName>
                        <DrawePerfilEmail>{context.user.email}</DrawePerfilEmail>
                    </DrawerPerfilInfo>
                </DrawerPerfilItems>
            </DrawerPerfilArea>
            <DrawerScroller>
                {menus.map((item,index)=>(
                    <MenuButton key={index} onPress={()=>navigation.navigate(item.screen)}>
                        <MenuSquare 
                            active={props.state.routes[props.state.index].name === item.screen}></MenuSquare>
                        <FontAwesome name={item.icon} size={20} color={props.state.routes[props.state.index].name === item.screen ? '#94B49F' : '#666E78'} />
                        <MenuButtonText active={props.state.routes[props.state.index].name === item.screen}>{item.title}</MenuButtonText>
                    </MenuButton>
                ))}
                   <MenuButton onPress={handleLogoutButton}>
                        <MenuSquare></MenuSquare>
                        <FontAwesome name='arrow-left' size={20} color={'#333'} />
                        <MenuButtonText>Sair</MenuButtonText>
                    </MenuButton>
            </DrawerScroller>
        </DrawerArea>
    )
}