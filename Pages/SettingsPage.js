import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import GArrow from '../assets/gArrow';
export default function SettingsPage({navigation}){
    const Navs = (
        <View style = {styles.navs}>
        <TouchableOpacity style = {styles.pressable}><Text style = {styles.pressablmeTex}>Permissions</Text><GArrow style ={styles.gArrow} fill ="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity style = {styles.pressable}><Text style = {styles.pressablmeTex}>Privacy</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity style = {styles.pressable}><Text style = {styles.pressablmeTex}>Terms & Services</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <TouchableOpacity style = {styles.pressable}><Text style = {styles.pressablmeTex}>Software Details</Text><GArrow style ={styles.gArrow} fill="#5C5C5C"/></TouchableOpacity>
        <View style = {styles.account} id = "account">
        <TouchableOpacity onPress={()=>navigation("SignIn")} style = {[styles.pressable,  {borderTopWidth: 0}]}><Text style = {[styles.pressablmeTex, {color: "red"}]}>Sign Out</Text><GArrow style ={[styles.gArrow]} fill = "red"/></TouchableOpacity>
        <TouchableOpacity style = {styles.pressable}><Text style = {[styles.pressablmeTex, {color: "red"}]}>Delete Account</Text><GArrow style ={styles.gArrow} fill = "red" /></TouchableOpacity>
        </View>
        </View>
    );

    return(
        Navs
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
    bottom: 0,
    width:"100%",
    bottom: -270
}
})