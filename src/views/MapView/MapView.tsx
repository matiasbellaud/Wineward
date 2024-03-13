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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const  MapView = () => {

  // const [isLoaded] = useFonts({
  //   "AfficherNeue": require("../../assets/fonts/LTAfficherNeue-BoldText.otf"),
  // });

  return (
    <View>
      {/* NAVIGATION BAR */}
      <View style = {styles.navBar}>
        <Image source={require('../../assets/images/MapIcon.png')} style={styles.navBarImage} /> 
        <Text style={styles.navBarTitle}>Ma Carte</Text>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      backgroundColor: "#AC1E44",
      height: 105,
      alignItems: "center",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },
    navBarTitle: {
      fontSize:35,
      color:"#ffffff",
      // backgroundColor:"blue",
      marginLeft:22,
    },
    navBarImage: {
      width: 43, height: 43,
      left:-4,
      marginLeft:50,
    }
});

export default MapView;