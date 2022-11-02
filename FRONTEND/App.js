import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/stacks/AuthStack';
import { AuthProvider } from './src/contexts/authContext';
import { UserProvider } from './src/contexts/userContext';
import { StateProvider } from './src/contexts/StateContext';
import { StatusBar } from 'react-native';




export default () => {

  

  return (
    
      <NavigationContainer>
        <StateProvider>
          <AuthProvider>
            <UserProvider>
              <StatusBar backgroundColor='#121214'/>
              <AuthStack />
            </UserProvider>
          </AuthProvider>
        </StateProvider>
      </NavigationContainer>
    
  )
}