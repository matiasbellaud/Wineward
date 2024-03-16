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
        <Text style={styles.HeaderTitle}>Autour du vin</Text>
        <Image source={require('../../assets/images/MapIcon.png')} style={styles.HeaderImage} />  
      </View>
      <View>
        <Text style={styles.BottlesBoxTitle}>TAILLE DE BOUTEILLES</Text>
        <View>
            <View style={styles.BottlesNameBoxTop}>
              <Text style={styles.Bottle1NameTop}>Bouteille</Text>
              <Text style={styles.Bottle2NameTop}>Jéroboam</Text>
              <Text style={styles.Bottle3NameTop}>Mathusalem</Text>
              <Text style={styles.Bottle4NameTop}>Balthazar</Text>
              <Text style={styles.Bottle5NameTop}>Melchior</Text>
            </View>
            <View style={styles.BottlesTop}>
              <Text style={styles.Bottle1LiterTop}>0.2L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle1ImageTop}/>
              <Text style={styles.Bottle2LiterTop}>1.5L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle2ImageTop}/>
              <Text style={styles.Bottle3LiterTop}>4.5L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle3ImageTop}/>
              <Text style={styles.Bottle4LiterTop}>9L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle4ImageTop}/>
              <Text style={styles.Bottle5LiterTop}>15L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle5ImageTop}/>
              <Text style={styles.Bottle6LiterTop}>30L</Text>
            </View>
            <View style={styles.GraduateBarBottle}></View>
            <View style={styles.AllGraduations}>
              <View style={styles.Graduation1}></View>
              <View style={styles.Graduation2}></View>
              <View style={styles.Graduation3}></View>
              <View style={styles.Graduation4}></View>
              <View style={styles.Graduation5}></View>
              <View style={styles.Graduation6}></View>
              <View style={styles.Graduation7}></View>
              <View style={styles.Graduation8}></View>
              <View style={styles.Graduation9}></View>
              <View style={styles.Graduation10}></View>
              <View style={styles.Graduation11}></View>
            </View>
            <View style={styles.BottlesBottom}>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle1ImageBottom}/>
              <Text style={styles.Bottle1LiterBottom}>1.5L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle2ImageBottom}/>
              <Text style={styles.Bottle2LiterBottom}>4.5L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle3ImageBottom}/>
              <Text style={styles.Bottle3LiterBottom}>9L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle4ImageBottom}/>
              <Text style={styles.Bottle4LiterBottom}>15L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle5ImageBottom}/>
              <Text style={styles.Bottle5LiterBottom}>30L</Text>
              <Image source={require('../../assets/images/wineBottle.png')} style={styles.Bottle6ImageBottom}/>
            </View>
            <View style={styles.BottlesNameBoxBottom}>
              <Text style={styles.Bottle1NameBottom}>Piccolo</Text>
              <Text style={styles.Bottle2NameBottom}>Magnum</Text>
              <Text style={styles.Bottle3NameBottom}>Réhoboam</Text>
              <Text style={styles.Bottle4NameBottom}>Salmanazar</Text>
              <Text style={styles.Bottle5NameBottom}>Nabuchodonosor</Text>
              <Text style={styles.Bottle6NameBottom}>Melchisédech</Text>
            </View>
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

  BottlesBoxTitle:{
    fontSize:25,
    color:"#ffffff",
    marginTop:30,
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
  },

  Graduation1:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"8.5%",
  },
  Graduation2:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.9%",
  },
  Graduation3:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.9%",
  },
  Graduation4:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.9%",
  },
  Graduation5:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.9%",
  },
  Graduation6:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.9%",
  },
  Graduation7:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.9%",
  },
  Graduation8:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.8%",
  },
  Graduation9:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.8%",
  },
  Graduation10:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.8%",
  },
  Graduation11:{
    borderWidth:0.5,
    borderColor:"#ffffff",
    height:10,
    width:0,
    marginTop:-5,
    marginLeft:"7.8%",
  },
  
  BottlesNameBoxTop:{
    flexDirection:"row",
    marginTop:20,
  },
  BottlesTop:{
    flexDirection:"row",
  },
  GraduateBarBottle:{
    marginLeft:"4%",
    borderWidth:0.5,
    borderColor:"#ffffff",
    width:"91%",
  },
  BottlesBottom:{
    flexDirection:"row",
    marginTop:-5,
  },
  BottlesNameBoxBottom:{
    flexDirection:"row",
  },

  BottleName:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text'
  },
  AllGraduations:{
    flexDirection:"row",
  },

  //TOP BOTTLES
  Bottle1NameTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:25,
    bottom:-78,
  },
  Bottle2NameTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:0,
    bottom:-58,
  },
  Bottle3NameTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:-5,
    bottom:-38,
  },
  Bottle4NameTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:5,
    bottom:-18,
  },
  Bottle5NameTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:10,
    bottom:2,
  },

  Bottle1ImageTop:{
    width: "8.4%", height: 60,
    marginTop:80,
    marginLeft:"1%",
    tintColor: '#909368',
    transform: [{ scaleY: -1 }],
  },
  Bottle2ImageTop:{
    width: "8.4%", height: 80,
    marginTop:60,
    marginLeft:"1%",
    tintColor: '#000000',
    transform: [{ scaleY: -1 }],
  },
  Bottle3ImageTop:{
    width: "8.4%", height: 100,
    marginTop:40,
    marginBottom:0,
    tintColor: '#909368',
    transform: [{ scaleY: -1 }],
    marginLeft:"0.8%",
  },
  Bottle4ImageTop:{
    width: "10.5%", height: 120,
    marginTop:20,
    marginBottom:0,
    tintColor: '#909368',
    transform: [{ scaleY: -1 }],
    marginLeft:"0.8%",
  },
  Bottle5ImageTop:{
    width: "13.3%", height: 140,
    marginTop:0,
    marginBottom:8,
    tintColor: '#000000',
    transform: [{ scaleY: -1 }],
    marginLeft:"-0.8%",
  },

  Bottle1LiterTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:130,
    marginLeft:"5%",
  },
  Bottle2LiterTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:130,
    marginLeft:"1%",
  },
  Bottle3LiterTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:130,
    marginLeft:"0.5%",
  },
  Bottle4LiterTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:130,
    marginLeft:"2%",
  },
  Bottle5LiterTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:130,
    marginLeft:"0%",
  },
  Bottle6LiterTop:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:130,
    marginLeft:"-1.5%",
  },

  


  //BOTTOM BOTTLES
  Bottle1ImageBottom:{
    width: "8.4%", height: 50,
    tintColor: '#000000',
    marginTop:8,
    marginLeft:"4.2%",
  },
  Bottle2ImageBottom:{
    width: "8.4%", height: 70,
    tintColor: '#909368',
    marginTop:8,
    marginLeft:"1%",
  },
  Bottle3ImageBottom:{
    width: "8.4%", height: 90,
    tintColor: '#000000',
    marginTop:8,
    marginLeft:"1.1%",
  },
  Bottle4ImageBottom:{
    width: "8.4%", height: 110,
    tintColor: '#000000',
    marginTop:8,
    marginLeft:"1.6%",
  },
  Bottle5ImageBottom:{
    width: "10.5%", height: 130,
    tintColor: '#000000',
    marginTop:8,
    marginLeft:"0.3%",
  },
  Bottle6ImageBottom:{
    width: "13.3%", height: 150,
    tintColor: '#000000',
    marginTop:8,
    marginLeft:"-1.8%",
  },

  Bottle1LiterBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:5,
    marginLeft:"1%",
  },
  Bottle2LiterBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:5,
    marginLeft:"0.5%",
  },
  Bottle3LiterBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:5,
    marginLeft:"2%",
  },
  Bottle4LiterBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:5,
    marginLeft:"1.6%",
  },
  Bottle5LiterBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
    marginTop:5,
    marginLeft:"0%",
  },

  Bottle1NameBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:10,
    top:-98,
  },
  Bottle2NameBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:5,
    top:-78,
  },
  Bottle3NameBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:0,
    top:-58,
  },
  Bottle4NameBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:-5,
    top:-38,
  },
  Bottle5NameBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:-30,
    top:-18,
  },
  Bottle6NameBottom:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text',
    marginLeft:-25,
    top:2,
  },

});

export default AccessoryView;