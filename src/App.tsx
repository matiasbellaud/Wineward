import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import Login from './views/LoginView/LoginView'
import SignUp from './views/SignUpView/SignUpView'
import { Menu } from './views/Menu'
import { UserProvider } from './views/context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const  App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
      {/* <View>
        <Login />
      </View> */}
    </>
  );
}

export default App;
