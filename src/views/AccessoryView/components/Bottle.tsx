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

class Bottle extends React.Component  {
  componentDidMount() {
    this.state.button1=this.ButtonList[0]
    this.state.button2=this.ButtonList[1]
    this.state.button3=this.ButtonList[2]
    this.state.button4=this.ButtonList[3]
    this.state.button5=this.ButtonList[4]
    this.state.button6=this.ButtonList[5]
    this.state.button7=this.ButtonList[6]
    this.state.button8=this.ButtonList[7]
    this.state.button9=this.ButtonList[8]
    this.state.button10=this.ButtonList[9]
    this.state.button11=this.ButtonList[10]
    const newState = Object.assign({ [""]:[""]},)
    this.setState(newState);
  }
  
  ButtonList = [true,false,true,true,false,false,true,false,false,false,false];
  state = {
    button1: false,button2: false,button3: false,button4: false,button5: false,button6: false,button7: false,button8: false,button9: false,button10: false,button11: false,
  }

  activateButton = (buttonToActivate :any) => {
    if (buttonToActivate == 1){
      this.state.button1 ? this.state.button1 = false : this.state.button1 = true 
    } 
    if (buttonToActivate == 2){
      this.state.button2 ? this.state.button2 = false : this.state.button2 = true 
    }  
    if (buttonToActivate == 3){
      this.state.button3 ? this.state.button3 = false : this.state.button3 = true 
    }  
    if (buttonToActivate == 4){
      this.state.button4 ? this.state.button4 = false : this.state.button4 = true 
    }  
    if (buttonToActivate == 5){
      this.state.button5 ? this.state.button5 = false : this.state.button5 = true 
    }  
    if (buttonToActivate == 6){
      this.state.button6 ? this.state.button6 = false : this.state.button6 = true 
    }   
    if (buttonToActivate == 7){
      this.state.button7 ? this.state.button7 = false : this.state.button7 = true 
    } 
    if (buttonToActivate == 8){
      this.state.button8 ? this.state.button8 = false : this.state.button8 = true 
    } 
    if (buttonToActivate == 9){
      this.state.button9 ? this.state.button9 = false : this.state.button9 = true 
    } 
    if (buttonToActivate == 10){
      this.state.button10 ? this.state.button10 = false : this.state.button10 = true 
    } 
    if (buttonToActivate == 11){
      this.state.button11 ? this.state.button11 = false : this.state.button11 = true 
    } 
    const newState = Object.assign(
      { [buttonToActivate]:[buttonToActivate]},
    )
    this.setState(newState);
  }
  
  render() {
    const {button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11} = this.state
    return (
        <View>
            <Text style={styles.BottlesBoxTitle}>TAILLE DE BOUTEILLES</Text>
            <View>
                <View style={styles.BottlesNameBoxTop}>
                  <Text style={[styles.Bottle1NameTop, styles.BottleText]}>Bouteille</Text>
                  <Text style={[styles.Bottle2NameTop, styles.BottleText]}>Jéroboam</Text>
                  <Text style={[styles.Bottle3NameTop, styles.BottleText]}>Mathusalem</Text>
                  <Text style={[styles.Bottle4NameTop, styles.BottleText]}>Balthazar</Text>
                  <Text style={[styles.Bottle5NameTop, styles.BottleText]}>Melchior</Text>
                </View>
                <View style={styles.BottlesTop}>
                <Text style={[styles.Bottle1LiterTop, styles.BottleText]}>0.2L</Text>
                <TouchableOpacity style={styles.buttonBottle1Top} activeOpacity={1} onPress={() => this.activateButton(1)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[ styles.Bottle1ImageTop, button1 && styles.bottleValidate   ]} />
                </TouchableOpacity>
                <Text style={[styles.Bottle2LiterTop, styles.BottleText]}>1.5L</Text>
                <TouchableOpacity style={styles.buttonBottle2Top} activeOpacity={1} onPress={() => this.activateButton(2)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle2ImageTop, button2 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle3LiterTop, styles.BottleText]}>4.5L</Text>
                <TouchableOpacity style={styles.buttonBottle3Top} activeOpacity={1} onPress={() => this.activateButton(3)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle3ImageTop, button3 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle4LiterTop, styles.BottleText]}>9L</Text>
                <TouchableOpacity style={styles.buttonBottle4Top} activeOpacity={1} onPress={() => this.activateButton(4)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle4ImageTop, button4 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle5LiterTop, styles.BottleText]}>15L</Text>
                <TouchableOpacity style={styles.buttonBottle5Top} activeOpacity={1} onPress={() => this.activateButton(5)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle5ImageTop, button5 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle6LiterTop, styles.BottleText]}>30L</Text>
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
                <TouchableOpacity style={styles.buttonBottle1Bottom} activeOpacity={1} onPress={() => this.activateButton(6)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle1ImageBottom, button6 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle1LiterBottom, styles.BottleText]}>0.75L</Text>
                <TouchableOpacity style={styles.buttonBottle2Bottom} activeOpacity={1} onPress={() => this.activateButton(7)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle2ImageBottom, button7 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle2LiterBottom, styles.BottleText]}>3L</Text>
                <TouchableOpacity style={styles.buttonBottle3Bottom} activeOpacity={1} onPress={() => this.activateButton(8)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle3ImageBottom, button8 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle3LiterBottom, styles.BottleText]}>6L</Text>
                <TouchableOpacity style={styles.buttonBottle4Bottom} activeOpacity={1} onPress={() => this.activateButton(9)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle4ImageBottom, button9 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle4LiterBottom, styles.BottleText]}>12L</Text>
                <TouchableOpacity style={styles.buttonBottle5Bottom} activeOpacity={1} onPress={() => this.activateButton(10)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle5ImageBottom, button10 && styles.bottleValidate]}/>
                </TouchableOpacity>
                <Text style={[styles.Bottle5LiterBottom, styles.BottleText]}>18L</Text>
                <TouchableOpacity style={styles.buttonBottle6Bottom} activeOpacity={1} onPress={() => this.activateButton(11)}>
                    <Image source={require('../../../assets/images/wineBottle.png')} style={[styles.Bottle6ImageBottom, button11 && styles.bottleValidate]}/>
                </TouchableOpacity>
                </View>
                <View style={styles.BottlesNameBoxBottom}>
                <Text style={[styles.Bottle1NameBottom, styles.BottleText]}>Piccolo</Text>
                <Text style={[styles.Bottle2NameBottom, styles.BottleText]}>Magnum</Text>
                <Text style={[styles.Bottle3NameBottom, styles.BottleText]}>Réhoboam</Text>
                <Text style={[styles.Bottle4NameBottom, styles.BottleText]}>Salmanazar</Text>
                <Text style={[styles.Bottle5NameBottom, styles.BottleText]}>Nabuchodonosor</Text>
                <Text style={[styles.Bottle6NameBottom, styles.BottleText]}>Melchisédech</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  BottlesBoxTitle:{
    fontSize:25,
    color:"#ffffff",
    marginTop:30,
    textAlign: 'center',
    fontFamily:'LT Glockenspiel Black',
  },
  bottleValidate:{
    tintColor: '#909368'
  },
  BottleText:{
    fontSize:12,
    color:"#ffffff",
    textAlign: 'center',
    fontFamily:'LT Afficher Neue Text'
  },

  //GRADUATION BAR
    GraduateBarBottle:{
      marginLeft:"4%",
      borderWidth:0.5,
      borderColor:"#ffffff",
      width:"91%",
    },
    AllGraduations:{
      flexDirection:"row",
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

  //TOP BOTTLES
  BottlesNameBoxTop:{
    flexDirection:"row",
    marginTop:20,
  },
  BottlesTop:{
    flexDirection:"row",
  },

    Bottle1NameTop:{
      marginLeft:"7%",
      bottom:-78,
    },
    Bottle2NameTop:{
      marginLeft:"0%",
      bottom:-58,
    },
    Bottle3NameTop:{
      marginLeft:"-1%",
      bottom:-38,
    },
    Bottle4NameTop:{
      marginLeft:"1%",
      bottom:-18,
    },
    Bottle5NameTop:{
      marginLeft:"3%",
      bottom:2,
    },

      buttonBottle1Top:{
        width: "8.4%", height: 60,
        marginTop:80,
        marginLeft:"1%",
      },
      Bottle1ImageTop:{
        width: "100%", height: "100%",
        transform: [{ scaleY: -1 }],
      },
      buttonBottle2Top:{
        width: "8.4%", height: 80,
        marginTop:60,
        marginLeft:"1%",
      },
      Bottle2ImageTop:{
        width: "100%", height: "100%",
        transform: [{ scaleY: -1 }],
      },
      buttonBottle3Top:{
        width: "8.4%", height: 100,
        marginTop:40,
        marginLeft:"0.8%",
      },
      Bottle3ImageTop:{
        width: "100%", height: "100%",
        transform: [{ scaleY: -1 }], 
      },
      buttonBottle4Top:{
        width: "8.4%", height: 120,
        marginTop:20,
        marginLeft:"0.8%",
      },
      Bottle4ImageTop:{
        width: "100%", height: "100%",
        transform: [{ scaleY: -1 }],
      },
      buttonBottle5Top:{
        width: "13.3%", height: 140,
        marginBottom:8,
        marginLeft:"-0.8%",
      },
      Bottle5ImageTop:{
        width: "100%", height: "100%",
        transform: [{ scaleY: -1 }],
      },
            
        Bottle1LiterTop:{
          marginTop:130,
          marginLeft:"5%",
        },
        Bottle2LiterTop:{
          marginTop:130,
          marginLeft:"1%",
        },
        Bottle3LiterTop:{
          marginTop:130,
          marginLeft:"0.5%",
        },
        Bottle4LiterTop:{
          marginTop:130,
          marginLeft:"2%",
        },
        Bottle5LiterTop:{
          marginTop:130,
          marginLeft:"2%",
        },
        Bottle6LiterTop:{
          marginTop:130,
          marginLeft:"-1.5%",
        },


  //BOTTOM BOTTLES
  BottlesBottom:{
    flexDirection:"row",
    marginTop:-5,
  },
  BottlesNameBoxBottom:{
    flexDirection:"row",
  },
      
    Bottle1NameBottom:{
      marginLeft:"2.5%",
      top:-98,
    },
    Bottle2NameBottom:{
      marginLeft:"1%",
      top:-78,
    },
    Bottle3NameBottom:{
      marginLeft:"0%",
      top:-58,
    },
    Bottle4NameBottom:{
      marginLeft:"-1%",
      top:-38,
    },
    Bottle5NameBottom:{
      marginLeft:"-8%",
      top:-18,
    },
    Bottle6NameBottom:{
      marginLeft:"-7%",
      top:2,
    },
        
      buttonBottle1Bottom:{
        width: "8.4%", height: 50,
        marginTop:8,
        marginLeft:"4.2%",
      },
      Bottle1ImageBottom:{
        width: "100%", height: "100%",
      },
      buttonBottle2Bottom:{
        width: "8.4%", height: 70,
        marginTop:8,
        marginLeft:"1%",
      },
      Bottle2ImageBottom:{
        width: "100%", height: "100%",
      },
      buttonBottle3Bottom:{
        width: "8.4%", height: 90,
        marginTop:8,
        marginLeft:"1.1%",
      },
      Bottle3ImageBottom:{
        width: "100%", height: "100%",
      },
      buttonBottle4Bottom:{
        width: "8.4%", height: 110,
        marginTop:8,
        marginLeft:"1.6%",
      },
      Bottle4ImageBottom:{
        width: "100%", height: "100%",
      },
      buttonBottle5Bottom:{
        width: "10.5%", height: 130,
        marginTop:8,
        marginLeft:"0.3%",
      },
      Bottle5ImageBottom:{
        width: "100%", height: "100%",
      },
      buttonBottle6Bottom:{
        width: "13.3%", height: 150,
        marginTop:8,
        marginLeft:"-1.8%",
      },
      Bottle6ImageBottom:{
        width: "100%", height: "100%",
      },

        Bottle1LiterBottom:{
          marginTop:5,
          marginLeft:"1%",
        },
        Bottle2LiterBottom:{
          marginTop:5,
          marginLeft:"0.5%",
        },
        Bottle3LiterBottom:{
          marginTop:5,
          marginLeft:"2%",
        },
        Bottle4LiterBottom:{
          marginTop:5,
          marginLeft:"1.6%",
        },
        Bottle5LiterBottom:{
          marginTop:5,
          marginLeft:"0%",
        },

});

export default Bottle;