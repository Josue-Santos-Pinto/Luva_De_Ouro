import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/stacks/AuthStack';
import { AuthProvider } from './src/contexts/authContext';
import { UserProvider } from './src/contexts/userContext';
import { StateProvider } from './src/contexts/StateContext';




export default () => {

  

  return (
    
      <NavigationContainer>
        <StateProvider>
          <AuthProvider>
            <UserProvider>
              <AuthStack />
            </UserProvider>
          </AuthProvider>
        </StateProvider>
      </NavigationContainer>
    
  )
}