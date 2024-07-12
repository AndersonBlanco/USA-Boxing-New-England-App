import { Modal, View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput, TouchableOpacity, TouchableHighll, ImageBackground, FlatList, SectionList, ScrollView, AccessibilityInfo} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_icon from "../assets/icon.png"; 
import DumbellSVG from "../assets/DumbellSVG";
import IconSVG from "../assets/icon_svg";
import MagnifyingGlassnent
 from "../assets/magnifying_glass_svg";
import {app, analytics, database} from "../services/firebase";
import {ref, onValue, get, child} from "firebase/database"
import { useState } from "react";
import ArrowSVG from "../assets/arrowSVG";
import * as AsyncStorage from "@react-native-async-storage/async-storage";
import parseJson from "parse-json";
import MainNav from "../components/mainNavigation";
export default function RegisterUnderGym({navigation}){
  const [data, setData] = useState('data'); 
  const [userSelectedGym, setUserSelectedGym] = useState(""); 
  const [triggerModal, setTriggerModal] = useState(false); 

    const SearchBar = (
        <>
          <MagnifyingGlassnent style = {styles.search_icon} /> 
          <TextInput style = {styles.searchBar} placeholder="search gym" placeholderTextColor={styles.searchBar.color}/>
        </>
       
    );

    const GetGymsData = () =>{
        const r = ref(database); 

        get(child(r, "gyms/"))
        .then(async snapshot =>{
            let jsonData = snapshot.val(); 
            if(snapshot.exists()){
                //console.log(d);
                setData(JSON.stringify(jsonData));
                //console.log(JSON.parse(data))
            
            }else{
                //console.log("No Val")
            }
        })
    };
    GetGymsData();

    const ContinueButton = (
        <TouchableOpacity style = {styles.SignUpButton} onPress={() => navigation.replace("Home")}>
            <Text style = {styles.signUpText}>Continue</Text>
        </TouchableOpacity>
    );


    const BackButton = (
        <TouchableOpacity style = {styles.SignUpButton} onPress={() => navigation.replace("SignIn")}>
            <Text style = {styles.signUpText}>Back</Text>
        </TouchableOpacity>
    );

    const GymList = (
        <FlatList
        style = {styles.flatList}
        data = {data != "data"? JSON.parse(data) : []}
        renderItem={({item}) =>{
            return(
                <TouchableOpacity style = {styles.listItemCont} onPress = {async ()=>{ await setTriggerModal(!triggerModal); await setUserSelectedGym((item))}}>
                    <Text style={styles.listItemText}>{item['name']}</Text>
                </TouchableOpacity>
            )
        }}

        />
    )

    const CloseModal = (
        <TouchableOpacity style = {[styles.SignUpButton, {position:"absolute",bottom: 20, left: 61}]} onPress={() => setTriggerModal(false)}>
        <Text style = {styles.signUpText}>Back</Text>
    </TouchableOpacity>
    )

    const AccpetGymCodeInput = (
        <TouchableOpacity style = {[styles.SignUpButton, {position:"absolute",bottom: 82, left: 61}]} onPress={() => navigation.replace("Home", {userSelectedGym: userSelectedGym, schedule: userSelectedGym.generalWeeklySchedule})}>
        <Text style = {styles.signUpText}>Continue</Text>
    </TouchableOpacity>
    )
    return(
        <SafeAreaView>

            <View style = {styles.cont}>
                <IconSVG height = {styles.icon.height}/>
            <Text style = {styles.topText}>Search your gym and enter the gym’s admission code</Text>

            {SearchBar}
            {GymList}

            {BackButton}
            </View>

            <Modal
            transparent
            visible = {triggerModal}
            animationType="fade"
            >
                <View
                style = {{
                    textAlign:"centere",
                    alignItems:"center",
                    justifyContent:"center",
                   backgroundColor: "rgba(0,0,0, .15)",
                   height: "100%"
                }}>
                <View
                    style={styles.modal}
                >
                    <View style = {styles.gymProfile}>
                    <Image source = {{uri: userSelectedGym.img}} height={100} width={100} />
        <Text>{((userSelectedGym)).name}</Text>
                    </View>
  
    

    <TextInput style = {styles.input} placeholder="access code" placeholderTextColor={"rgba(0,0,0,.25)"} />


                        {AccpetGymCodeInput}
                       {CloseModal}
                </View>               
                </View>
            </Modal>

      
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
    },
    flatList:{
        marginVertical: 25

    }, 
    listItemCont:{
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,.25)",
        paddingVertical: 15,
        paddingHorizontal: 34,
    },

    SignUpButton:{
        backgroundColor:"black",
        width: 250, 
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 20,
        paddingVertical: 10,
        left: 7,
        marginVertical: 10
    },

    signUpText:{
        color: "white",
        fontSize: 15,
        
    },
    modal:{
       paddingVertical: 50,
       paddingHorizontal: 25,
       textAlign:"center",
       alignItems:"center",
       justifyContent:"center",
      backgroundColor: "white",
      height: "50%",
      width: "90%",
      borderRadius: 25
   
    },
    input:{
        color: "rgba(255,255,255)",
        width: 255,
        textAlign: "left",
        borderBottomColor: "black",
        borderBottomWidth: 1.5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 15,
        bottom: 50,
        textAlign:"center"
    },
    gymProfile:{
        top: -100, 
        alignItems:"center",
        rowGap:25
    }
})