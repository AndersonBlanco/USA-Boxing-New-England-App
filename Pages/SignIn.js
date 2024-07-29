import * as React from "react";
import {View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput, TouchableOpacity, TouchableHighl} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_logo from "../assets/icon.png";
import GoogleLogo from "../assets/google_logo.png";
import AppleLogo from "../assets/apple_logo.png";

 const inputForm_from_top_Position = 64; 
export default function SignIn({navigation}){

 const SignInButton = (
    <TouchableOpacity style = {styles.SignInButton} onPress={() => navigation("RegisterUnderGym")}>
        <Text style = {styles.signInText}>SignIn</Text>
    </TouchableOpacity>
 )

 const SignUpButton = (
    <View style = {styles.signUp}>
        <Text>Don't jave an account?</Text>
    <TouchableOpacity style = {styles.signUpTextCont}>
        <Text style = {styles.signUpText} onPress={() => navigation("SignUp")}>SignUp</Text>
    </TouchableOpacity>
    </View>
 )

const ResetAcc = (
    <View style = {[styles.signUp, {top: inputForm_from_top_Position *2.27,}]}>
        <Text>Forgot username / password?</Text>
    <TouchableOpacity style = {styles.signUpTextCont}>
        <Text style = {styles.signUpText} onPress={() => navigation("SignUp")}>reset</Text>
    </TouchableOpacity>
    </View>

 )

 const AuthPartitioners = (
    <View style= {styles.authPartitionsSection}>
        <Image source = {GoogleLogo} style = {styles.authPartitionsIcons}/>
        <Image source = {AppleLogo} style = {styles.authPartitionsIcons}/>
    </View>
 )
    return(
        <SafeAreaView>
            <View style = {styles.cont}>
                <Image source={usaBoxingNE_logo} style={styles.logo}/>
                <View style = {styles.inputs}>
                    <TextInput placeholder="username" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                    <TextInput placeholder="password" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                </View>
                {SignInButton}
                {SignUpButton}
                {ResetAcc}
                {AuthPartitioners}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cont:{      
        backgroundColor: "white",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: 75
    },
    logo:{
        height: 125,
        width: 125,
 
    },

    inputs:{
        backgroundColor:"transparent",
        rowGap: 50,
        top: inputForm_from_top_Position
    },
    inputTags:{
        color: "rgba(255,255,255)",
        width: 255,
        textAlign: "left",
        borderBottomColor: "black",
        borderBottomWidth: 1.5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 15
    },
    SignInButton:{
        backgroundColor:"black",
        top: inputForm_from_top_Position *1.8,
        width: 250, 
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 20,
        paddingVertical: 10

    },
    signInText:{
        color: "white",
        fontSize: 15
    },
    signUp:{
        top: inputForm_from_top_Position *2.11,
        alignItems:"center",
        justifyContent:"flex",
        flexDirection:"row"
    },
    signUpTextCont:{
     marginLeft: 5
    },
    signUpText:{
        color: "blue",
        textDecorationLine:"underline",

    },
    authPartitionsSection:{
        justifyContent:"flex",
        flexDirection:"row",
        top: inputForm_from_top_Position *2.7,
        columnGap: 50
    },
    authPartitionsIcons:{
        height: 50,
        width: 50,
      
    }
})