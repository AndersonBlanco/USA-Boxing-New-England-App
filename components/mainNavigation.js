import native, {TouchableOpacity, Text, View, Image, ImageBackground, StyleSheet, Dimensions} from "react-native"
//navigation icons 
import CalendarIcon from "../assets/calendarIcon.js";
import GearIcon from "../assets/gearIcon.js";
import HouseIcon from "../assets/house.js";
import HeadshotIcon from "../assets/headshot";
export default function MainNav({navigation, route}){

    return(
        <View style = {[styles.cont, {width: "100%", alignItems:"center", justifyContent:"center", textAlign:"center"}]}>
            <TouchableOpacity style={styles.iconDirectCont}><CalendarIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Calendar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.iconDirectCont}><HouseIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Home</Text></TouchableOpacity>
            <TouchableOpacity style={styles.iconDirectCont}><HeadshotIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Profile</Text></TouchableOpacity>
            <TouchableOpacity style={styles.iconDirectCont}><GearIcon style = {styles.icon}/><Text style = {styles.iconSubText}>Settings</Text></TouchableOpacity>
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
    columnGap: 64
    },

    icon:{
        height: 25,
        marginHorizontal: 0,

    },
    iconSubText:{
        fontSize: 10
    },
    iconDirectCont:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        rowGap: 2
    }
})