import React, { useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import Bottle from './components/Bottle'

class AccessoryView extends Component  {
  componentDidMount() {
  }
  render() {

    return (
      <>
      <View style={styles.body}>
      
        {/* HEADER */}
        <View style={styles.Header}>
          <Text style={styles.HeaderTitle}>Autour du vin</Text>
          <Image source={require('../../assets/images/MapIcon.png')} style={styles.HeaderImage} />
        </View>
        {/* BOTTLE COMPONENTS */}
        <Bottle />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  
  body: {
    backgroundColor:"#444444",
    height:2000,
  },
  Header: {
    backgroundColor: "#AC1E44",
    height: 105,
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  HeaderTitle: {
    marginTop:10,
    fontSize:35,
    color:"#ffffff",
    width:200,
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text'
  },
  HeaderImage: {
    width: 43, height: 43,
    marginTop:"-17%",
    marginLeft:"-65%"
  },

});

export default AccessoryView;