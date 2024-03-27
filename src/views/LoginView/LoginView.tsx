import React, { Component, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  Platform,
  
} from 'react-native';


function LoginView({ navigation }:any) {

    const onSubmitHandler = () => {
        const user = {
            email,
            password,
        };
        fetch(`http://192.168.183.30:5070/api/loginUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                console.log(jsonRes.results.rows)
                if (res.status == 200) {
                  navigation.replace("Menu", { screen: "Menu" })
                } else {
                  setIsError(true) 
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    };

    const [isError, setIsError] = useState(false);
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
                <Pressable style={styles.forgotPasswordButton} onPress={() => Alert.alert("change password")}>
                    <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
                </Pressable>
            </View>
            <Text style={styles.errorMessage}>{isError ? 'Email ou mot de passe érroné' : ''}</Text>
            
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.loginButton} onPress={onSubmitHandler}>
                <Text style={styles.loginButtonText}>Se connecter</Text>
            </Pressable>
        </View>
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Nouveau membre ?</Text>
            <Pressable style={styles.signUpButton} onPress={() => navigation.replace("SignUp", { screen: "SignUp" })}>
                    <Text style={styles.signUpButtonText}>Créer votre compte</Text>
            </Pressable>
        </View>
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

  errorMessage:{
    textAlign:"center",
    color:"white",
    marginTop: "10%",
  },

  buttonContainer: {
    marginTop: "2%",
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