import { useState } from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
import GArrow from '../../assets/gArrow';
export default function PermissionsSettingPage({navigation, editNavigationStack, localNavigaton}){
    const [liveLoc_permit, setLiveLoc_permit] = useState(false);
    const [notifications_permit, setNotificattions_permit] = useState(false);
    const BackButton = (
        <TouchableOpacity style = {styles.backButton} onPress={() =>localNavigaton(0)}>
            <View style={{transform:"rotateZ(180deg)", alignItems:"center", justifyContent:"center", height:"fit-content", width:"fit-content"}}>
            <GArrow style={{height: 15, width:15, transform: "rotateZ(200deg)" }}  fill={"gray"} />
            </View>
                <Text style ={{fontSize: 15, color: "rgba(0,0,0, .65)"}}>Settings</Text>
        </TouchableOpacity>
    )
  const SettingOptionComponent = ({title, description, permit, onSwitchToggle}) =>{
    return(
         <View style={styles.componentsCont}>
            <View style = {styles.innerText_and_Button_cont}>
            <Text style={styles.componentsText}>{title}</Text>
            <Switch value={permit} onTouchEnd={onSwitchToggle} />
            </View>
            <Text>{description}</Text>
         </View>
    )
  }
    return(
        <View style = {styles.cont}>
            {BackButton}
            <View style = {styles.settingOptions}>
            <SettingOptionComponent onSwitchToggle = {()=>setLiveLoc_permit(!liveLoc_permit)} permit={liveLoc_permit} title={"Live Location"} description={"Live location tracks the users location with the device’s integrated gps system. This allows the functionality of services like the running tracker"} />
            <SettingOptionComponent onSwitchToggle = {()=>setNotificattions_permit(!notifications_permit)} permit={notifications_permit} title={"Notifications"} description={"Notifications permissions allows for fast and efficient way of communicating and alerting users of app updates and gym news, events and more!"} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        paddingVertical: 50,
        backgroundColor: "transparent",
        height: 401,
        paddingHorizontal: 25,
    
    },
    backButton:{
        display:"flex",
        flexDirection:"row",
        columnGap: 15,
        width:"auto",
        justifyContent:"flex-start",
        backgroundColor: "transparent",
        left: -140,
        marginVertical: 50,
        marginTop: 70
    },
    settingOptions:{
        display:"flex",
        flexDirection:"column",
        rowGap: 50,

    },
    componentsCont:{
        display:"flex",
        flexDirection:"column",
        rowGap: 15
    },
    innerText_and_Button_cont:{
        display: "flex",
        flexDirection:"row",
        columnGap: 25,
        textAlign:"center",
        alignItems:"center",
        justifyContent: "space-between",
        
    },
    componentsText:{
        fontSize: 15
    }
})