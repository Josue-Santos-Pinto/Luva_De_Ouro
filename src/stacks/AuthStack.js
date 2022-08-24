import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainDrawer from "./MainDrawer";
import PreloadScreen from "../screens/PreloadScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator screenOptions={{
            title:'',
            headerShown: false
            }}>
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
                name="MainDrawer"
                component={MainDrawer}
            />
        </Stack.Navigator>
    )
}