import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import AboutScreen from "../screens/AboutScreen";
import DrawerCustom from "../components/DrawerCustom";
import SearchScreen from "../screens/SearchScreen";
import PostAdScreen from "../screens/PostAdScreen";

const Tab = createBottomTabNavigator()
export default () => {
    return (
        <Tab.Navigator>
             <Tab.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen 
                name="ProductScreen"
                component={ProductScreen}
            />
             <Tab.Screen 
                name="AboutScreen"
                component={AboutScreen}
            />
            <Tab.Screen 
                name="SearchScreen"
                component={SearchScreen}
            />
            <Tab.Screen 
                name="PostAdScreen"
                component={PostAdScreen}
            />
        </Tab.Navigator>
    )
}