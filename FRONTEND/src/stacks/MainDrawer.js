import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import AboutScreen from "../screens/AboutScreen";
import DrawerCustom from "../components/DrawerCustom";
import SearchScreen from "../screens/SearchScreen";
import PostAdScreen from '../screens/PostAdScreen'
import CameraScreen from "../screens/CameraScreen";

const Drawer = createDrawerNavigator()

export default () => {
    return (
        <Drawer.Navigator 
        drawerContent={(props)=><DrawerCustom {...props} />}
        screenOptions={{
            headerTitle: '',
            headerShown: true,
            headerStyle: {
                backgroundColor:'#94B49F',
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
                name="AboutScreen"
                component={AboutScreen}
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
                name="CameraScreen"
                component={CameraScreen}
            />
        </Drawer.Navigator>
    )
}