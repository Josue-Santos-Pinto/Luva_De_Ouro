import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {FontAwesome5} from '@expo/vector-icons'
import api from  '../services/api'
import { useStateValue } from "../contexts/StateContext";
import { useState } from "react";

    const DrawerArea = styled.View`
        flex: 1;
        background-color: #6e6d75;
    `
    const DrawerPerfilArea = styled.View`
        width: 100%;
        background-color: #121214;
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
        border: 2px solid #FFF;
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
        color: #FFF;
    `
    const DrawePerfilEmail = styled.Text`
        font-size: 15px;
        color: #FFF;
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
        background-color: ${props=>props.active ? '#FFF' : 'transparent'};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
`;
const MenuButtonText = styled.Text`
        font-size: 15px;
        margin-left: 10px;
        color: ${props=>props.active ? '#FFF' : '#ceced0'};
`;



export default (props) => {

    const navigation = useNavigation()
    const [context,dispatch] = useStateValue()
    const [user,setUser] = useState([])

    const menus = [
        {title: 'Anúncios', icon: 'home', screen: 'HomeScreen' },
        {title: 'Inserir Anúncio', icon: 'pencil-alt', screen: 'PostAdScreen' },
        {title: 'Meus Anúncios', icon: 'th-large', screen: 'MyAddStack' },
        {title: 'Minha Conta', icon: 'user', screen: 'MyAccountScreen' }

    ]
   
    const handleLogoutButton = async () => {
        await api.logout()
        navigation.reset({
            index: 1,
            routes: [{name: 'LoginScreen'}]   
        })
    }
    

    return (
        <DrawerArea>
            <DrawerPerfilArea>
                <DrawerPerfilItems>
                    <DrawerPerfilImgArea>
                        {/*<DrawerPerfilImg />*/}
                        <FontAwesome5 name="user" size={25} color='#FFF' />
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
                        <FontAwesome5 name={item.icon} size={20} color={props.state.routes[props.state.index].name === item.screen ? '#FFF' : '#ceced0'} style={{width:25,height:25}} />
                        <MenuButtonText active={props.state.routes[props.state.index].name === item.screen}>{item.title}</MenuButtonText>
                    </MenuButton>
                ))}
                   <MenuButton onPress={handleLogoutButton}>
                        <MenuSquare></MenuSquare>
                        <FontAwesome5 name='arrow-left' size={20} color={'#ceced0'} style={{width:25,height:25}}/>
                        <MenuButtonText>Sair</MenuButtonText>
                    </MenuButton>
            </DrawerScroller>
        </DrawerArea>
    )
}