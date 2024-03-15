import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

const  AccessoryView = () => {


  return (
    <View style = {styles.body}>
      {/* HEADER */}
      <View style = {styles.Header}>
        <Image source={require('../../assets/images/MapIcon.png')} style={styles.HeaderImage} /> 
        <Text style={styles.HeaderTitle}>Autour du vin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor:"#444444",
    height:2000,
  },

  Header: {
    flexDirection: 'row',
    backgroundColor: "#AC1E44",
    height: 105,
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  HeaderTitle: {
    fontSize:35,
    color:"#ffffff",
    width:200,
    marginLeft:0,
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text'
  },
  HeaderImage: {
    width: 43, height: 43,
    left:-4,
    marginLeft:39,
  }
});

export default AccessoryView;