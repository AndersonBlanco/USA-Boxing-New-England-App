import * as React from "react";
import {View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput, TouchableOpacity, TouchableHighll, ImageBackground, FlatList, SectionList, ScrollView} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_icon from "../assets/icon.png"; 
import DumbellSVG from "../assets/DumbellSVG";
import IconSVG from "../assets/icon_svg";
import MagnifyingGlassnent
 from "../assets/magnifying_glass_svg";
export default function RegisterUnderGym(){

    const SearchBar = (
        <>
          <MagnifyingGlassnent style = {styles.search_icon} /> 
          <TextInput style = {styles.searchBar} placeholder="search gym" placeholderTextColor={styles.searchBar.color}/>
        </>
       
    )
    return(
        <SafeAreaView>

            <View style = {styles.cont}>
                <IconSVG height = {styles.icon.height}/>
            <Text style = {styles.topText}>Search your gym and enter the gym’s admission code</Text>

            {SearchBar}
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
     topText:{
        color: "rgba(0,0,0, .55)",
        fontSizee: 7,
        width: 300,
        marginVertical: 25
    },
    icon:{
        height: 125,
        width: 125
        
    },
    searchBar:{
        backgroundColor: "rgba(0,0,0, .07)",
        borderRadius: 25,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 2.5,
        color: "rgba(0,0,0, .45)",
        width: 250,
        
    },
    search_icon:{
        position: "relative",
        top: 18,
        left: -100
    }
})