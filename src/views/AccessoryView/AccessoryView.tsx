import React, { useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
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
        <View style={{maxHeight:"84%"}}>
          <ScrollView >
            <Bottle />
          </ScrollView>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  
  body: {
    backgroundColor:"#444444",
    height:"100%",
  },
  Header: {
    backgroundColor: "#AC1E44",
    height: "15.8%",
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  HeaderTitle: {
    marginTop:"3%",
    fontSize:35,
    color:"#ffffff",
    width:"50%",
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