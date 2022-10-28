import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyAddScreen from "../screens/MyAddScreen";
import MyProductScreen from "../screens/MyProductScreen";


const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator screenOptions={{
            title:'',
            headerShown: false
            }}>
            <Stack.Screen 
                name='MyAddScreen' 
                component={MyAddScreen}
                options={{headerShown: false}} 
            />
           
            <Stack.Screen 
                name='MyProductScreen' 
                component={MyProductScreen}
                options={{headerShown: false}} 
            />
             
        </Stack.Navigator>
    )
}