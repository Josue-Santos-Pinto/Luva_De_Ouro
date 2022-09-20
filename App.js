import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/stacks/AuthStack';
import { AuthProvider } from './src/contexts/authContext';
import { UserProvider } from './src/contexts/userContext';




export default () => {

  

  return (
    
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>
            <AuthStack />
          </UserProvider>
        </AuthProvider>
      </NavigationContainer>
    
  )
}