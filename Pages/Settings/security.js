import { useState } from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
import GArrow from '../../assets/gArrow';
export default function SecuritySettingPage({navigation, localNavigaton}){
    const [_2Auth, set_2Auth] = useState(false);

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
            <SettingOptionComponent onSwitchToggle={()=>set_2Auth(!_2Auth)} permit={_2Auth} title = {"20Auth Authentication"} description ={"20Authentication allows the user to maintain higher security than regular. Users will login with a second layer of security, that being the code sent to their phone number or email right after entering login credentials (ie email and password)"}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        paddingVertical: 0,
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
        marginBottom: 50,
         top: -30.1
    },
    settingOptions:{
        display:"flex",
        flexDirection:"column",
        rowGap: 50,
        top: -27

    },
    componentsCont:{
        display:"flex",
        flexDirection:"column",
        rowGap:20
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