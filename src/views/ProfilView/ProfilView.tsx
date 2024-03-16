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

const  ProfilView = () => {
  return (
    <View style = {styles.body}>
      {/* HEADER*/}
      <View style = {styles.Header}>
        <Text style={styles.HeaderTitle}>Mon Profil</Text>
        <Image source={require('../../assets/images/MapIcon.png')} style={styles.HeaderImage} /> 
      </View>

      {/*PROFIL INFORMATION*/}
      <View style={styles.profilPictureBox}>
        <Image source={require('../../assets/images/ProfilPicture.png')} style={styles.profilPicture} /> 
      </View>
      <View style={styles.profilNameBox}>
        <Text style={styles.profilName}>DUPUIT Mathéo</Text>
      </View>
      <View style={styles.line}></View>

      {/*COMPLETION*/}
      <View>
        <Text style={styles.completionTitle}>COMPLÉTION</Text>
        <View style={styles.mapCompletion}>
          <Text style={styles.mapText}>Carte :</Text>
          <View style={styles.FrancePictureBox}>
            <Image source={require('../../assets/images/BlackFrance.png')} style={styles.FrancePicture}/> 
          </View>
          <View style={styles.FrancePictureBoxWhite}>
            <Image source={require('../../assets/images/BlackFrance.png')} style={styles.FrancePictureWhite} resizeMode="cover"/> 
          </View>
          <Text style={styles.mapCompletionStat}>75 %</Text>
        </View>
        <View style={styles.BottleCompletion}>
          <Text style={styles.BottleText}>Taille de Bouteilles</Text>
          <Text style={styles.BottleTextDot}>:</Text>
          <View style={styles.BottlePictureBox}>
            <Image source={require('../../assets/images/3wineBottles.png')} style={styles.BottlePicture} />  
          </View>
          <View style={styles.BottlePictureBoxWhite}>
            <Image source={require('../../assets/images/3wineBottles.png')} style={styles.BottlePictureWhite} resizeMode="cover"/>  
          </View>
          <Text style={styles.BottleCompletionStat}>50 %</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor:"#444444",
    height:2000,
  },

  //HEADER
  Header: {
    elevation:10,
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
    marginLeft:"-70%",
  },

  //PROFIL PAGE
  profilPictureBox:{
    marginTop:15,
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  profilPicture: {
    width: 90, height: 90,
  },
  profilNameBox:{
    marginTop:10,
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  profilName:{
    fontSize:22,
    color:"#ffffff",
    fontFamily:'LT Afficher Neue Text'
  },
  line:{
    borderWidth: 0.5,
    borderColor: "#ffffff",
    marginTop: 15,
    marginBottom : 10,
    marginLeft: 15,
    marginRight: 15,
  },

  completionTitle:{
    marginTop:10,
    fontSize:26,
    color:"#ffffff",
    marginLeft:22,
    fontFamily:'LT Glockenspiel Black',
  },

  //MAP COMPLETION
  mapCompletion:{
    borderWidth:1.8,
    borderColor:"#727272",
    borderRadius:20,
    marginLeft: 22,
    marginRight: 22,
    marginTop:12,
    flexDirection:"row",
    justifyContent:"center",
  },
  mapText:{
    fontSize:23,
    color:"#ffffff",
    marginRight:22,
    textAlignVertical: 'center',
    fontFamily:'LT Afficher Neue Text'
  },
  FrancePictureBox:{
  },
  FrancePicture:{
    width: 90, height: 90,
    marginTop:8,
    marginBottom:4,
  },

  FrancePictureBoxWhite:{
    overflow: 'hidden', 
    bottom:-31.75,
    marginLeft:-90,
  },

  FrancePictureWhite:{
    width: 90, height: 90,
    bottom:31.75,
    marginTop:8,
    marginBottom:4,
    tintColor: '#CDCDCD'
  },
  mapCompletionStat:{
    fontSize:23,
    color:"#ffffff",
    textAlignVertical: 'center',
    fontFamily:'LT Glockenspiel Black',
  },

  //BOTTLE COMPLETION
  BottleCompletion:{
    borderWidth:1.8,
    borderColor:"#727272",
    borderRadius:20,
    marginLeft: 22,
    marginRight: 22,
    marginTop:12,
    flexDirection:"row",
    justifyContent:"center",
  },
  BottleText:{
    fontSize:23,
    color:"#ffffff",
    textAlignVertical: 'center',
    width:120,
    textAlign: 'center',
    marginTop: 22,
    marginBottom:22,
    fontFamily:'LT Afficher Neue Text'
  },
  BottleTextDot:{
    marginRight:0,
    fontSize:23,
    color:"#ffffff",
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text'
  },

  BottlePictureBox:{
  },
  BottlePicture:{
    width: 65, height: 65,
    marginTop: 18,
  },

  BottlePictureBoxWhite:{
    overflow: 'hidden', 
    bottom:-50.5,
    marginLeft:-65,
  },
  BottlePictureWhite:{
    width: 65, height: 65,
    marginTop: 18,
    bottom:50.5,
    tintColor: '#CDCDCD'
  },

  BottleCompletionStat:{
    fontSize:23,
    color:"#ffffff",
    textAlignVertical: 'center',
    marginLeft:10,
    paddingRight:20,
    fontFamily:'LT Glockenspiel Black',
  },
});


export default ProfilView;