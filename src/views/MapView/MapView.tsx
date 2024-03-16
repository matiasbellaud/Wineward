import React from 'react';
// import { useFonts } from 'expo-font';
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

const  MapView = () => {

  // const [isLoaded] = useFonts({
  //   "AfficherNeue": require("../../assets/fonts/LTAfficherNeue-BoldText.otf"),
  // });

  return (
    <View style = {styles.body}>
      {/* HEADER */}
      <View style = {styles.Header}>
        <Text style={styles.HeaderTitle}>Ma Carte</Text>
        <Image source={require('../../assets/images/MapIcon.png')} style={styles.HeaderImage} />  
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