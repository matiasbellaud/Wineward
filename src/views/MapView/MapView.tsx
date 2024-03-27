import React, { useState, Component } from 'react';
// import { useFonts } from 'expo-font';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions
} from 'react-native';
import MapComponent from './components/Map'



class MapView extends Component  {
  componentDidMount() {
  }
  windowWidth = Dimensions.get('window').width;
  windowHeight = Dimensions.get('window').height;
  render() {
  return (
    <>
    <View style = {[styles.body, {height:this.windowHeight}]}>
      {/* HEADER */}
      <View style = {styles.Header}>
        <Text style={styles.HeaderTitle}>Ma Carte</Text>
        <Image source={require('../../assets/images/MapIcon.png')} style={styles.HeaderImage} />  
      </View>
      <MapComponent/>
    </View>
    </>
  );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor:"#444444",
  },

  Header: {
    backgroundColor: "#AC1E44",
    height: 105,
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  HeaderTitle: {
    marginTop:30,
    fontSize:35,
    color:"#ffffff",
    fontFamily:'LT Afficher Neue Text',
  },
  HeaderImage: {
    width: 43, height: 43,
    marginTop:"-12%",
    marginLeft:"-60%",
    
  }
});

export default MapView;