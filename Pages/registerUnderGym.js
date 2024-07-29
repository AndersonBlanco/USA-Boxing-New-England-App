import { Modal, View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput, TouchableOpacity, TouchableHighll, ImageBackground, FlatList, SectionList, ScrollView, AccessibilityInfo} from "react-native"; 
import IconSVG from "../assets/icon_svg";
import MagnifyingGlassnent
 from "../assets/magnifying_glass_svg";
import {database} from "../services/firebase";
import {ref, get, child} from "firebase/database"
import { useState } from "react";
import MainNav from "../components/mainNavigation";
import ExclamationIcon from "../assets/exclamation";
export default function RegisterUnderGym({navigation, resources}){
  const [data, setData] = useState('data'); 
  const [userSelectedGym, setUserSelectedGym] = useState(""); 
  const [triggerModal, setTriggerModal] = useState(false); 
  const [userEneteredAccessCode, setUserEneteredAccessCode] = useState(null); 
  const [userSelectedAccountType, setUserSelectedAccountType] = useState(0); 

    const SearchBar = (
        <>
          <MagnifyingGlassnent style = {styles.search_icon} /> 
          <TextInput style = {styles.searchBar} placeholder="search gym" placeholderTextColor={styles.searchBar.color}/>
        </>
       
    );

    const GetGymsData = () =>{ //api fetch all gyms from cloud database
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
        <TouchableOpacity style = {styles.SignUpButton} onPress={() => navigation("Home", {...resources, userSelectedGym: userSelectedGym})}>
            <Text style = {styles.signUpText}>Continue</Text>
        </TouchableOpacity>
    );


    const BackButton = ( 
        <TouchableOpacity style = {styles.SignUpButton} onPress={() => navigation("SignIn")}>
            <Text style = {styles.signUpText}>Back</Text>
        </TouchableOpacity>
    );

    const GymList = ( //list all gym names in list selection, below search bar 
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

    const AccpetGymCodeInput = ( //handle user eenetered gym access code verification 
        <TouchableOpacity style = {[styles.SignUpButton, {position:"absolute",bottom: 82, left: 61}]} onPress={() => {
            if(userEneteredAccessCode == userSelectedGym.accessKey){
                alert(userSelectedAccountType? "Coach" : "Non-Coach")
                navigation("Home", {...resources, userSelectedGym: userSelectedGym})
            
            }else{
                alert("Incorrect access key")
            }
            /*
            (userEneteredAccessCode) == (userSelectedGym.accessKey)?
            navigation.replace("Home", {userSelectedGym: userSelectedGym, schedule: userSelectedGym.generalWeeklySchedule})
            :
            alert("Incorrect access key")
            /**/
        }}>
        <Text style = {styles.signUpText}>Continue</Text>
    </TouchableOpacity>
    );


    //client , non-coach Buttons: 0 = none-coach, 1 = coach

    const AccountTypeSelection = (
        <View style= {{ top: "-23.5%", textAlign:"center", alignItems:"center" }}>
        <Text style={{color: "rgba(0,0,0, 0.5)", }}>Select Account Type<TouchableOpacity onPress = {() => alert("Account types will dictate the avaliable services to users. Coache and Non-Coach accounts have distinct permissions and features respective to their within the gym roles.")}><ExclamationIcon style = {{height: 20, width: 20, right: -5, bottom: -3}}/></TouchableOpacity></Text>
        <View style = {{justifyContent:"flex", flexDirection:"row",}}>
        <TouchableOpacity onPress={() => setUserSelectedAccountType(1)} style={[{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: userSelectedAccountType? "black" : "white", margin: 10, borderRadius: 10, textAlign:"center", justifyContent:"center", alignItems:"center",borderColor: "black", borderWidth: 2 }]}>
            <Text style = {{color: userSelectedAccountType? "white" : "black"}}>Coach</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setUserSelectedAccountType(0)} style={[{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: userSelectedAccountType? "white" : "black", margin: 10, borderRadius: 10, textAlign:"center", justifyContent:"center", alignItems:"center",borderColor: "black", borderWidth: 2 }]}>
                <Text style = {{color: userSelectedAccountType? "black" : "white"}}>Non Coach</Text>
            </TouchableOpacity>
            </View>
            </View>
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
  
    
     {AccountTypeSelection}
    <TextInput style = {styles.input} placeholder="access code" placeholderTextColor={"rgba(0,0,0,.25)"} onChangeText={(v)=>setUserEneteredAccessCode(v)} />

               
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
        fontSize: 12,
        width: "fit-content",
        paddingHorizontal:37,
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
        marginVertical: "10%"
    },

    signUpText:{
        color: "white",
        fontSize: 15,
        
    },
    modal:{
       paddingVertical: "10%",
       paddingHorizontal: 25,
       textAlign:"center",
       alignItems:"center",
       justifyContent:"center",
      backgroundColor: "white",
      height: "70%",
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
        bottom: "17%",
        textAlign:"center"
    },
    gymProfile:{
        top: "-30%", 
        alignItems:"center",
        rowGap:15
    }
})