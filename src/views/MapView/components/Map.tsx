import React, { useState, Component, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


class MapComponent extends React.Component  {
  componentDidMount() {
  }
  windowWidth = Dimensions.get('window').width;
  windowHeight = Dimensions.get('window').height;

  activateButton = () => {
    console.log("test de dingue")
  }

  render() {
    return (
      <View style={styles.container}>
        <ReactNativeZoomableView
          maxZoom={5.5}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          panBoundaryPadding={50}
          style={{
            backgroundColor: "#1B1A18"
          }}
        > 
          <Image
              style={{ height:"100%", resizeMode: 'contain' }}
              source={require('../../../assets/images/map.png' )}
              />
          <TouchableOpacity activeOpacity={1} onPress={() => this.activateButton()} style={styles.buttonTest}>
              <Text>jjfezifbezl</Text>
          </TouchableOpacity>
          
        </ReactNativeZoomableView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:"95%",
    backgroundColor: "#1B1A18",
    paddingBottom: 30
  },

  buttonTest: {
    top:-150,
    backgroundColor:"blue"

  }
  
    
});

export default MapComponent;