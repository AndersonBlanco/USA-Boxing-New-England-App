import * as React from "react";
import { useState } from "react";
import {TouchableOpacity, View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_logo from "../assets/icon.png";
import GoogleLogo from "../assets/google_logo.png";
import AppleLogo from "../assets/apple_logo.png";
import ArrowSVG from "../assets/arrowSVG";
import DumbellSVG from "../assets/DumbellSVG";
import BoxingGloveSVG from "../assets/boxingGlove";

export default function SelectAccType({navigation}){


    //Account Types - START

    const [acc_type_select, set_acc_type_select] = useState(true);
    //true -> athlete 
    //false -> fitness

    function changeAccType(bool){
        set_acc_type_select(bool);
        console.log(acc_type_select)
    }
    const AthleteType = (
        <TouchableOpacity onPress={() => changeAccType(true)} style = {[styles.gymAccType, {backgroundColor: acc_type_select? "black" : "transparent"}]}>
        <Text style={[styles.gymAccType_title, {color: acc_type_select? "white" : "black"}]}>Athlete</Text>
        <BoxingGloveSVG height = {70} width={90} color = {acc_type_select? "white":"black"} />
       </TouchableOpacity>
    )

    const FitnessType = (
        <TouchableOpacity onPress={() => changeAccType(false)} style = {[styles.gymAccType, {backgroundColor: acc_type_select? "transparent" : "black"}]}>
        <Text style={[styles.gymAccType_title, {color: acc_type_select? "black" :"white"}]}>Fitness</Text>
        <DumbellSVG fill = {acc_type_select? "black":"white"} size = {85} style = {{marginBottom: -15}}/>
       </TouchableOpacity>
    )


    const Types = (
        <View style = {styles.row}>
            {FitnessType}
            {AthleteType}
        </View>
    )

    //Account types - END


    //buttons - START

    const NextButton = (
        <TouchableOpacity style={styles.button} onPress = {() => navigation.replace("Home")}>
            <Text style={styles.button_text}>Next</Text>
        </TouchableOpacity>
    )

    const BackButton = (
        <TouchableOpacity style={styles.button} onPress={()=> navigation.replace("SignIn")}>
            <Text style={styles.button_text}>Back</Text>
        </TouchableOpacity>
    )

    const Buttons = (
        <View style = {styles.column}>
            {NextButton}
            {BackButton}
        </View>
    )

    //buttons - END

    return(
        <SafeAreaView>
             <View style = {styles.cont}>
                    <Image source={usaBoxingNE_logo} style={styles.logo}/>
                    {Types}
                {Buttons}
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
    gymAccType:{
        borderColor: "black",
        borderWidth: 2,
        height: 270,
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal: 30,
        borderRadius: 10,

    },
    gymAccType_title:{
        textTransform:"uppercase",
        fontWeight: "500",
        top: -30,
        fontSize: 17
    },
    row:{
         display:"flex",
         flexDirection:"row",
         columnGap: 50,
         bottom: -50
    },
    column:{
        rowGap: 25,
    },
    button:{
        backgroundColor: "black",
         bottom: -100,
        width: 250, 
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 20,
        paddingVertical: 10,
    },
    button_text:{
        color: "white",
        fontSize: 15, 

    },


})