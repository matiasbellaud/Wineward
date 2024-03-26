import React, { Component, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert
} from 'react-native';


function LoginView() {
    // constructor(props : any) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: ""
    //     };
    // }
//   componentDidMount() {
//   }
//   render() {
    const [click,setClick] = useState(false);
    const [email,setEmail]=  useState("");
    const [password,setPassword]=  useState("");
  return (
    <>
    <View style={styles.body}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/wineBottle.png')} style={styles.logoTopLogin} resizeMode='contain' />
        </View>
        <View >
            <View style={styles.formContainer}>
                <Image source={require('../../assets/images/courrier.png')} style={styles.icon} resizeMode='contain' />
                <TextInput style={styles.form} 
                    placeholder='Email' 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCorrect={false}
                    autoCapitalize="none"
                    cursorColor="white"
                    maxLength={60}
                    textAlign="center"
                    placeholderTextColor="white"  />
            </View>
            <View style={styles.formContainer}>
                <Image source={require('../../assets/images/password.png')} style={styles.icon} resizeMode='contain' />
                <TextInput style={styles.form} 
                    placeholder='Mot de passe' 
                    value={password} 
                    onChangeText={setPassword} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                    secureTextEntry={true}
                    cursorColor="white"
                    maxLength={60}
                    textAlign="center"
                    placeholderTextColor="white" />
            </View>
            <View>
                <Pressable style={styles.forgotPasswordButton} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                    <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
                </Pressable>
            </View>
            
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.loginButton} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                <Text style={styles.loginButtonText}>Se connecter</Text>
            </Pressable>
        </View>
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Nouveau membre ?</Text>
            <Pressable style={styles.signUpButton} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                    <Text style={styles.signUpButtonText}>Créer votre compte</Text>
            </Pressable>
        </View>
                {/* <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
                    autoCapitalize='none' />
    

                <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable> */}
        
    </View>
    </>
  );
//   }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor:"#444444",
    height:"100%"
  },

  imageContainer: {
    alignItems : "center",
    paddingTop: 90,
    marginBottom:"5%"
  },
    logoTopLogin :{
        height : 170,
        width : 170,
        backgroundColor :"white",
        borderRadius:90,
    },

  formContainer:{
        marginTop:"5%",
        alignItems: "center",
        flexDirection:"row"
  },
  icon:{
        height : 30,
        width : 30,
        tintColor:"white",
        right:"-100%",
        marginTop:"2%"
    },
    form:{
        width:"80%",
        textAlign: 'center',
        fontFamily:'LT Afficher Neue Text',
        color:"white",
        borderBottomColor:"white",
        borderLeftColor:"#444444",
        borderRightColor:"#444444",
        borderTopColor:"#444444",
        borderWidth:0.5,
        marginLeft:"2%",
        paddingBottom:-10,
        
    },
    forgotPasswordButton:{
        marginTop:"2%",
    },
    forgotPasswordText: {
        marginLeft:"55%",
        fontSize:12,
        color:"#B2B2B2",
        textDecorationLine: 'underline',
        fontFamily:'LT Afficher Neue Text',        
    },


  buttonContainer: {
    marginTop: "12%",
    paddingHorizontal : 50
  },
  loginButton: {
    backgroundColor : "#AC1E44",
    height : 45,
    borderRadius : 45,
    alignItems : "center",
    justifyContent : "center"
  },
  loginButtonText:{
    color:"white",
    fontFamily:'LT Afficher Neue Text',
  },
  signUpContainer: {
    marginTop:"5%"
  },
  signUpText:{
    color:"white",
    fontFamily:'LT Afficher Neue Text',
    textAlign:"center",
  },
  signUpButton:{
    marginTop:"2%",
    alignItems : "center",
    justifyContent : "center"
  },
  signUpButtonText:{
    fontSize:12,
    color:"#B2B2B2",
    textDecorationLine: 'underline',
    fontFamily:'LT Afficher Neue Text',
  },
});

export default LoginView;