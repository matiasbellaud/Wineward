import React, { Component, useContext, useState } from 'react';

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
import { UserContext } from '../context';
import CryptoJS from 'crypto-js';

function SignUpView({ route , navigation }:any) {

    const { setUser } = useContext(UserContext) as { setUser: React.Dispatch<React.SetStateAction<{ idUser: string }>> };

    const onSubmitHandler = () => {
        const hashPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        
        const user = {
            lastname,
            firstname,
            email,
            hashPassword
        };
        fetch(`http://192.168.1.28:5070/api/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(async res => { 
          console.log(res.status)
            try {
                const jsonRes = await res.json();
                if (res.status == 200) {
                    setUser({ idUser: jsonRes.results.rows[0].user_id });
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
    const [lastname,setLastname]=  useState("");
    const [firstname,setFirstname]=  useState("");
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
                    placeholder='Nom' 
                    value={lastname} 
                    onChangeText={setLastname} 
                    autoCorrect={false}
                    autoCapitalize="none"
                    cursorColor="white"
                    maxLength={60}
                    textAlign="center"
                    placeholderTextColor="white"  />
            </View>
            <View style={styles.formContainer}>
                <Image source={require('../../assets/images/courrier.png')} style={styles.icon} resizeMode='contain' />
                <TextInput style={styles.form} 
                    placeholder='Prénom' 
                    value={firstname} 
                    onChangeText={setFirstname} 
                    autoCorrect={false}
                    autoCapitalize="none"
                    cursorColor="white"
                    maxLength={60}
                    textAlign="center"
                    placeholderTextColor="white"  />
            </View>
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
            <Text style={styles.errorMessage}>{isError ? 'Email déja utilisé ou mot de passe insuffisant' : ''}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.loginButton} onPress={onSubmitHandler}>
                <Text style={styles.loginButtonText}>Se connecter</Text>
            </Pressable>
        </View>
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Déjà membre ?</Text>
            <Pressable style={styles.signUpButton} onPress={() => navigation.replace("Login", { screen: "Login" })}>
                    <Text style={styles.signUpButtonText}>Se connecter</Text>
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

export default SignUpView;