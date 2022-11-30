import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import DrawerCustom from "../components/DrawerCustom";
import SearchScreen from "../screens/SearchScreen";
import PostAdScreen from '../screens/PostAdScreen'
import MyAccountScreen from "../screens/MyAccountScreen";
import MyAddStack from "./MyAddStack";
import Dashboard from '../screens/Dashboard'

const Drawer = createDrawerNavigator()

export default () => {
    return (
        <Drawer.Navigator 
        drawerContent={(props)=><DrawerCustom {...props} />}
        screenOptions={{
            headerTitle: '',
            headerShown: true,
            headerTintColor:'#6e6d75',
            headerStyle: {
                backgroundColor:'#121214',
                shadowOpacity: 0,
                elevation: 0
            }
            
        }}>
            <Drawer.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <Drawer.Screen 
                name="ProductScreen"
                component={ProductScreen}
            />
            <Drawer.Screen 
                name="SearchScreen"
                component={SearchScreen}
            />
            <Drawer.Screen 
                name="PostAdScreen"
                component={PostAdScreen}
            />
            <Drawer.Screen 
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{title: 'Minha Conta'}}
            />
            <Drawer.Screen 
                name="MyAddStack"
                component={MyAddStack}
                options={{title: 'Minha Conta'}}
            />
            <Drawer.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{headerTintColor:'#6e6d75',headerTitle:true}}
            />
            
        </Drawer.Navigator>
    )
}