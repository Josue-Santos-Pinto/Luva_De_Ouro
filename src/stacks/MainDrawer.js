import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import DrawerCustom from "../components/DrawerCustom";

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
                name="AboutScreen"
                component={AboutScreen}
            />
        </Drawer.Navigator>
    )
}