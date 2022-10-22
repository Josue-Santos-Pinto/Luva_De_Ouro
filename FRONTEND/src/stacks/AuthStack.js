import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainDrawer from "./MainDrawer";
import PreloadScreen from "../screens/PreloadScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AnimatedPreload from "../screens/AnimatedPreload";


const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator screenOptions={{
            title:'',
            headerShown: false
            }}>
            <Stack.Screen 
                name='AnimatedPreload' 
                component={AnimatedPreload}
                options={{headerShown: false}} 
            />
           
            <Stack.Screen 
                name='PreloadScreen' 
                component={PreloadScreen}
                options={{headerShown: false}} 
            />
             <Stack.Screen 
                name='LoginScreen' 
                component={LoginScreen}
                options={{headerShown: false}} 
            />
            <Stack.Screen 
                name='RegisterScreen' 
                component={RegisterScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#FFF',
                    headerShadowVisible: false,
                    headerStyle: {
                        height: 40,
                        backgroundColor:'#121214'
                    }
                }} 
            />
            
            <Stack.Screen
                name="MainDrawer"
                component={MainDrawer}
            />
        </Stack.Navigator>
    )
}