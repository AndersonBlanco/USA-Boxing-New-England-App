import native, {TouchableOpacity, Text, View, Image, ImageBackground, StyleSheet, Dimensions} from "react-native"
//navigation icons 
import CalendarIcon from "../assets/calendarIcon.js";
import GearIcon from "../assets/gearIcon.js";
import HouseIcon from "../assets/house.js";
import HeadshotIcon from "../assets/headshot";

export default function MainNav({navigation, resources, routeName, extraStyle}){
    return(
        <View style = {[styles.cont, extraStyle]}>
            <TouchableOpacity onPress={()=>{navigation("Calendar")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Calendar" ? "rgba(0,0,0,0)" : "transparent"}]}><CalendarIcon fill={routeName == "Calendar"? "rgba(0,0,0,1)" : "transparent"} style = {styles.icon}/><Text style = {styles.iconSubText}>Calendar</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation("Home")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Home" ? "rgba(0,0,0,0)" : "transparent"}]}><HouseIcon fill={routeName == "Home"? "rgba(0,0,0,1)" : "transparent"} style = {styles.icon}/><Text style = {styles.iconSubText}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation("Profile")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Profile" ? "rgba(0,0,0,0)" : "transparent"}]}><HeadshotIcon fill={routeName == "Profile"? "rgba(0,0,0,1)" : "transparent"} style = {styles.icon}/><Text style = {styles.iconSubText}>Profile</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation("Settings")}} style={[styles.iconDirectCont, {backgroundColor: routeName == "Settings" ? "rgba(0,0,0,0)" : "transparent"}]}><GearIcon fill={routeName == "Settings"? "rgba(0,0,0,1)" : "transparent"} style = {styles.icon}/><Text style = {styles.iconSubText}>Settings</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0, 0.15)",
    width: "100%",
    height:"fit-content",
    backgroundColor:"white",
    position:"absolute", 
    textAlign:"center",
    alignItems:"center", 
    justifyContent:"flex",
    flexDirection: "row",
    paddingHorizontal: 34,
    columnGap: 40,
    width: "100%", alignItems:"center", justifyContent:"center", textAlign:"center",
    },

    icon:{
        height: 25,
        marginHorizontal: 0,
        right: -1,
         
        

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
        paddingVertical: 10,
  
        textAlign:"center"
    }
})