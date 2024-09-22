import {Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, ImageBackground, Modal, TextInput, Button, Touchable} from "react-native"; 
import HeadshotIcon from "../assets/headshot";
import EditSVG from "../assets/EditSVG"; 
import UserLoc from "../assets/userLoc";
import CellIcon from "../assets/cell";
import EmailIcon from "../assets/email";
import { useState } from "react";
import ProfileImgPng from "../assets/prof.png"
import ProfileImgPng_2 from "../assets/prof.png"; 
import ExclamationIcon  from "../assets/exclamation";
//user object schema:
/*
{
name: ...,
address: ...,
telephone:...,
email: ....,
age: ...,
weight: ...,
class: ...
}
*/ 

export default function Profile(){
    const [usrProfileEditModal, setUsrProfileEditModal] = useState(false); 
    const pseudoUserProfileOBJ = {
        name: "Mario Vargas",
        address: "120 Verona st Lynn MA",
        tel: "781-577-1111",
        email: "ander@gmail.com",
        age: 19,
        weight: 100,
        class: "Group class"
    };
//<HeadshotIcon style = {styles.headshotPlaceholder}/>
    const ProfileImage = (
        <View style = {styles.profileImgCont}><Image source={ProfileImgPng_2} style={styles.headshotPlaceholder}/></View>
    )

    const SaveButton = (
        <TouchableOpacity style={styles.doneButton} onPress={() => setUsrProfileEditModal(false)}><Text style={[styles.doneButtonText, { right: "-84%", backgroundColor: "transparent", alignItems:"center", textAlign:"center", width: 45}]}>Save</Text></TouchableOpacity>
    )
    const CancelButton = (
        <TouchableOpacity style={[styles.doneButton,{left: 15, backgroundColor:"transparent", width:65, textAlign:"center"}]} onPress={() => setUsrProfileEditModal(false)}><Text style={[styles.doneButtonText, {color: "red"}]}>Cancel</Text></TouchableOpacity>
    )
    return(
        <View style = {styles.cont}>
        
            <View style = {{display:"flex", flexDirection: "column", rowGap: 20}}>
           {ProfileImage}
            <TouchableOpacity style={styles.editIcon} onPress={()=>setUsrProfileEditModal(true)}><EditSVG style = {{height: 43, width: 43}}/></TouchableOpacity>
            <Text>{pseudoUserProfileOBJ.name}</Text>
            </View>

            <View style ={styles.profileDataCont}>
                <View style = {styles.row_t1}><UserLoc style={styles.userlocIcon}/><Text>{pseudoUserProfileOBJ.address}</Text></View>
                <View style = {styles.row_t1}><CellIcon style={styles.userlocIcon}/><Text>{pseudoUserProfileOBJ.tel}</Text></View>
                <View style = {styles.row_t1}><EmailIcon style={styles.userlocIcon}/><Text>{pseudoUserProfileOBJ.email}</Text></View>
            </View>

            

            <Modal visible={usrProfileEditModal} style={styles.modal} transparent={true} animationType="fade">
            <View style = {styles.modalContOuter}>
                
                <View style = {styles.modalContInner}>
                    <Text style = {styles.title}>My info</Text>
                    <View style={{top: -25}}>{ProfileImage}<TouchableOpacity onPress={()=>alert("Click your profile image to select a new one")} style={{right: -10, position: "absolute", top: -40}}><ExclamationIcon style={{height:25, width: 25}} /></TouchableOpacity></View>
                    <View style={{backgroundColor: "transparent", width: "100%", paddingVertical: 10, position:"absolute", top: 0}}>{CancelButton}</View>
                    <View style={{backgroundColor: "transparent", width: "100%", paddingVertical: 10, position:"absolute", top: 0}}>{SaveButton}</View>
                    <View style = {styles.infoBlock}>
                    <TextInput style= {styles.inputField} value={pseudoUserProfileOBJ.name}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.address}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.tel}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.email}/>
                    <TextInput style = {styles.inputField} value={`${pseudoUserProfileOBJ.age} yrs`}/>
                    <TextInput style = {styles.inputField} value={`${pseudoUserProfileOBJ.weight} lbs`}/>
                    </View>
                </View>
            </View>
        </Modal>

        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
         alignItems:"center",
         justifyContent:"center",
         paddingTop: 20
    },
    editIcon:{
  position:"absolute",
  right: -7,
  bottom: 22
    },
    headshotPlaceholder:{
        height: 100,
        width: 100,
        
    },
    profileImgCont:{
          borderRadius: 100,
          backgroundColor: "lightgray",
          width: 100,
          overflow: "hidden",
          alignItems:"center",
          justifyContent:"center",
          textAlign:"center",
          paddingLeft:10

    },
    profileDataCont:{
         display: "flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
         paddingTop: 55,
         rowGap: 20,
         width:"100%",
         marginVertical: 10
    },

    row_t1:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        paddingHorizontal: 70,
        justifyContent:"flex-start",
        columnGap: 50
    },
    row_t2:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        paddingHorizontal: 70,
        justifyContent:"space-between"
    },
    userlocIcon:{
        height: 25, 
        width: 25
    },
    modal:{
     
    },
    modalContOuter:{
        height: "100%",
        width:"100%",
        backgroundColor: "rgba(0,0,0,.5)",   
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
        },
    modalContInner:{
        height:"70%",
        width:"90%",
        backgroundColor: "white",
        borderRadius: 25,
        alignItems:"center",
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        rowGap: 15,
       verticalAlign:"center",

        },
        inputField:{
            borderColor: "black",
            borderBottomWidth: 1,
            display:"flex",
            justifyContent:"flex-end",
            textAlign:"left",
            paddingLeft: 34
        },
        doneButton:{
            position:"relative",
       
        
        },
        doneButtonText:{
            color:"rgb(0, 125, 255)",
            fontSize: 15
        },
        infoBlock:{
            backgroundColor:"transparent",
            width: "100%",
            paddingHorizontal: 50,
            display:"flex",
            justifyContent:"flex-start",
            display:"flex",
            flexDirection:"column",
            rowGap: 25,
            
        },
        title:{
            top: -25,
            fontSize: 15,

        }

})