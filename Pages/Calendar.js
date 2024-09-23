import DateTimePicker from "react-native-modal-datetime-picker";
import {Calendar} from "react-native-calendars";
import {View, Text, StyleSheet} from "react-native";

export default function CalendarPage(){
    
    const Keys = (
        <View style = {{display:"flex", flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"space-between", paddingVertical: 37.5, paddingHorizontal: 20}}>
            <View style = {styles.row}><View style = {[ styles.keyIcon, {backgroundColor:"cyan"}]}></View><Text style = {styles.keysText}>- Today</Text></View>
            <View style = {styles.row}><View style = {[ styles.keyIcon, {backgroundColor:"rgb(100, 70, 255)"}]}></View><Text style = {styles.keysText}>- Holiday</Text></View>
            <View style = {styles.row}><View style = {[ styles.keyIcon, {backgroundColor:"red"}]}></View><Text style = {styles.keysText}>- Gym Closed</Text></View>
        </View>
    )
    return(
        <View style={styles.cont}>
            <Calendar
            theme={{dayTextColor: "black", todayDotColor: "black", arrowColor:"black", todayTextColor: "white", todayBackgroundColor: "black" }}
            style = {styles.calendar}ß
            />
            {Keys}
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        paddingHorizontal: 10,
        paddingTop: 34,
        backgroundColor: "transparent",
        paddingBottom: 34,
    },
    calendar:{
        backgroundColor: "transparent",
     
       
        
    },
    row:{
        display:"flex",
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
        backgroundColor:"transparent",
        columnGap: 10
    },
    keyIcon:{
        height: 15, width: 15,
        borderRadius: 100
    },
    keysText:{
        fontSize: 10, 
        
    }
})