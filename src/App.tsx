import React, { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import Login from './views/LoginView/LoginView'


const  App = () => {

  return (
    <>
      <View>
        <Login />
      </View>
    </>
  );
}

export default App;
