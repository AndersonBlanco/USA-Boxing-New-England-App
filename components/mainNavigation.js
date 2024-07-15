import native, {TouchableOpacity, Text, View, Image, ImageBackground, StyleSheet, Dimensions} from "react-native"
//navigation icons 
import CalendarIcon from "../assets/calendarIcon.js";
import GearIcon from "../assets/gearIcon.js";
import HouseIcon from "../assets/house.js";
import HeadshotIcon from "../assets/headshot";
import { useNavigation } from "@react-navigation/native";
export default function MainNav({navigation, route}){
    const {routeName} = route.params; 
    const r = useNavigation(); 
    return(
        <View style = {[styles.cont, {width: "100%", alignItems:"center", justifyContent:"center", textAlign:"center"}]}>
            <TouchableOpacity onPress={()=>{navigation.replace("Calendar")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Calendar" ? "rgba(0,0,0,.25)" : "transparent"}]}><CalendarIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Calendar</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.replace("Home")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Home" ? "rgba(0,0,0,.25)" : "transparent"}]}><HouseIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.replace("Profile")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Profile" ? "rgba(0,0,0,.25)" : "transparent"}]}><HeadshotIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Profile</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.replace("Settings")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Settings" ? "rgba(0,0,0,.25)" : "transparent"}]}><GearIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Settings</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0, 0.15)",
    width: "100%",
    height:"fit-content",
    backgroundColor:"transparent",
    position:"absolute", 
    bottom: -(Dimensions.get("screen").height * .46),
    textAlign:"center",
    alignItems:"center", 
    justifyContent:"flex",
    flexDirection: "row",
    paddingHorizontal: 34,
    paddingVertical: 15,
    columnGap: 40
    },

    icon:{
        height: 25,
        marginHorizontal: 0,
        right: -1

    },
    iconSubText:{
        fontSize: 10
    },
    iconDirectCont:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        rowGap: 2,
        borderRadius: "100%",
        paddingHorizontal: 10,
        paddingVertical: 7,
        textAlign:"center"
    }
})