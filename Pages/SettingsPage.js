import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { useState } from 'react';
import GArrow from '../assets/gArrow';
import PermissionsSettingPage from './Settings/permissions';
import FeedbackSettingPage from './Settings/feedback';
import PrivacySettingPage from './Settings/privacy';
import SoftwareDetailsSettingPage from './Settings/software_dets.js';
import Terms_Conds_SettingPage from './Settings/terms_conds';

export default function SettingsPage({navigation, currentScreen}){
    //  <TouchableOpacity style = {styles.pressable}><Text style = {[styles.pressablmeTex, {color: "red"}]}>Delete Account</Text><GArrow style ={styles.gArrow} fill = "red" /></TouchableOpacity>
    const [localSettingsCurrentPage, setLocalSettingsCurrentPage] = useState(0);

    /**
     * 0 =  
     * 1 = Permissions 
     * 2 = Privacy 
     * 3 = Terms & Services 
     * 4 = Feedback
     * 5 = Software Details
     */
    
    const Navs = (
        <View style = {styles.navs}>
        <TouchableOpacity onPress = {()=> setLocalSettingsCurrentPage(1)} style = {styles.pressable}><Text style = {styles.pressablmeTex}>Permissions</Text><GArrow style ={styles.gArrow} fill ="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity onPress = {()=> setLocalSettingsCurrentPage(2)} style = {styles.pressable}><Text style = {styles.pressablmeTex}>Privacy</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity onPress = {()=> setLocalSettingsCurrentPage(3)} style = {styles.pressable}><Text style = {styles.pressablmeTex}>Terms & Services</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity onPress = {()=> setLocalSettingsCurrentPage(4)} style = {styles.pressable}><Text style = {styles.pressablmeTex}>Feedback</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity onPress = {()=> setLocalSettingsCurrentPage(5)} style = {styles.pressable}><Text style = {styles.pressablmeTex}>Software Details</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <View style = {styles.account} id = "account">
        <TouchableOpacity onPress={()=>Alert.alert("Sign Out", "are you sure you want to sign out?", [{text: "No", style: "cancel"}, {text:"Yes", style:"destructive", onPress: ()=>navigation("") }])} style = {[styles.pressable,  {borderTopWidth: 0}]}><Text style = {[styles.pressablmeTex, {color: "red"}]}>Sign Out</Text><GArrow style ={[styles.gArrow]} fill = "red"/></TouchableOpacity>
        </View>
        </View>
    );

    return(
        <>
        {
            localSettingsCurrentPage == 1? <PermissionsSettingPage /> 
            :
            localSettingsCurrentPage == 2? <PrivacySettingPage />
            :
            localSettingsCurrentPage == 3? <Terms_Conds_SettingPage/>
            :
            localSettingsCurrentPage == 4? <FeedbackSettingPage />
            :
            localSettingsCurrentPage == 5? <SoftwareDetailsSettingPage />
            : 
            Navs
        }
        </>
    )
}
const styles = StyleSheet.create({
    navs:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "transparent",
        marginTop: 25
    
        
    },
    pressable:{
        textAlign:"left",
        borderColor: "gray",
        borderTopWidth: 1,
        width: "100%",
        padding: "5% 5%",
        justifyContent:"flex",
        flexDirection:"row",
        alignItems:"center",
        
    },
    gArrow:{
        position: "absolute",
        right: 25
        
    },
    pressablmeTex:{
        color: "rgba(0,0,0, .55)",
        fontSize: 14
    },
account:{
    position: "relative",
    width:"100%",
    bottom: -300
}
})