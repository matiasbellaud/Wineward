import React, { useEffect } from 'react';
import { Image, View} from 'react-native';
import {MapView, AccessoryView, ProfilView } from '.';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import setNavigationBarColor from "react-native-navigation-bar-color"

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:55,
    backgroundColor:"#AC1E44"
  }
}
const  App = () => {
  useEffect(() => {
    // Changez la couleur de la barre de navigation
    setNavigationBarColor('#AC1E44', true); // Couleur et transparence
  }, []);
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="Map" 
            component={MapView}
            options={{
              tabBarIcon: ({focused}) =>{
                const image = focused ? require('./assets/images/MapIconFocus.png') : require('./assets/images/MapIcon.png')
                return (
                  <View 
                    style={{ 
                      alignItems: "center", justifyContent: "center",
                      backgroundColor:"#AC1E44",
                      height: focused? 90 : 0,
                      width : focused? 150 : 0,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    }}>
                    <Image
                      source={image}
                      style={{
                        width: 30, height: 30,
                      }}
                    />
                  </View>
                )
              } 
            }}/>
          <Tab.Screen 
            name="Accessory" 
            component={AccessoryView}
            options={{
              tabBarIcon: ({focused}) =>{
                const image = focused ? require('./assets/images/AccessoryIconFocus.png') : require('./assets/images/AccessoryIcon.png')
                return (
                  <View 
                    style={{ 
                      alignItems: "center", justifyContent: "center",
                      backgroundColor:"#AC1E44",
                      height: focused? 90 : 0,
                      width : focused? 150 : 0,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                     }}>
                    <Image
                      source={image}
                      style={{
                        width: 35, height: 35,
                        left:-4,
                      }}
                    />            
                  </View>
                )
              } 
            }}/>
          <Tab.Screen 
            name="Profil" 
            component={ProfilView}
            options={{
              tabBarIcon: ({focused}) =>{
                const image = focused ? require('./assets/images/ProfilIconFocus.png') : require('./assets/images/ProfilIcon.png')
                return (
                  <View 
                    style={{ 
                      alignItems: "center", justifyContent: "center",
                      backgroundColor:"#AC1E44",
                      height: focused? 90 : 0,
                      width : focused? 150 : 0,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    }}>
                    <Image
                      source={image}
                      style={{
                        width: 32, height: 32,
                      }}
                    />
                  </View>
                )
              } 
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
