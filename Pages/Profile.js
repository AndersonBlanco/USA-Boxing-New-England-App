import {Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, ImageBackground, Modal, TextInput, Button, Touchable} from "react-native"; 
import HeadshotIcon from "../assets/headshot";
import EditSVG from "../assets/EditSVG"; 
import UserLoc from "../assets/userLoc";
import CellIcon from "../assets/cell";
import EmailIcon from "../assets/email";
import { useState } from "react";
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
    const [usrProfileEditModal, setUsrProfileEditModal] = useState(true); 
    const pseudoUserProfileOBJ = {
        name: "Mario Vargas",
        address: "120 Verona st Lynn MA",
        tel: "781-577-1111",
        email: "ander@gmail.com",
        age: 19,
        weight: 100,
        class: "Group class"
    };

    const DoneButton = (
        <TouchableOpacity style={styles.doneButton} onPress={() => setUsrProfileEditModal(false)}><Text style={styles.doneButtonText}>Done</Text></TouchableOpacity>
    )
    return(
        <View style = {styles.cont}>
        
            <View style = {{display:"flex", flexDirection: "column", rowGap: 20}}>
            <View style = {styles.profileImgCont}><HeadshotIcon style = {styles.headshotPlaceholder}/></View>
            <TouchableOpacity style={styles.editIcon} onPress={()=>setUsrProfileEditModal(true)}><EditSVG style = {{height: 43, width: 43}}/></TouchableOpacity>
            <Text>{pseudoUserProfileOBJ.name}</Text>
            </View>

            <View style ={styles.profileDataCont}>
                <View style = {styles.row_t1}><UserLoc style={styles.userlocIcon}/><Text>{pseudoUserProfileOBJ.address}</Text></View>
                <View style = {styles.row_t1}><CellIcon style={styles.userlocIcon}/><Text>{pseudoUserProfileOBJ.tel}</Text></View>
                <View style = {styles.row_t1}><EmailIcon style={styles.userlocIcon}/><Text>{pseudoUserProfileOBJ.email}</Text></View>
            </View>

            <View style = {styles.profileDataCont}>
                <View style = {styles.row_t2}><Text>Age: </Text><Text>{pseudoUserProfileOBJ.age}</Text></View>
                <View style = {styles.row_t2}><Text>Weight: </Text><Text>{pseudoUserProfileOBJ.weight}</Text></View>
                <View style = {styles.row_t2}><Text>Class: </Text><Text>{pseudoUserProfileOBJ.class}</Text></View>
            </View>

            <Modal visible={usrProfileEditModal} style={styles.modal} transparent={true}>
            <SafeAreaView style = {styles.modalContOuter}>
                
                <View style = {styles.modalContInner}>
                    <View style={{backgroundColor: "transparent", width: "100%", paddingVertical: 10}}>{DoneButton}</View>
                    <View style = {styles.infoBlock}>
                    <TextInput inputField value={pseudoUserProfileOBJ.name}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.address}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.tel}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.email}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.age}/>
                    <TextInput style = {styles.inputField} value={pseudoUserProfileOBJ.weight}/>
                    </View>
                </View>
            </SafeAreaView>
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
        justifyContent:"flex-start",
        flexDirection:"column",
        rowGap: 15,
       verticalAlign:"center",

        },
        inputField:{
            borderColor: "black",
            borderBottomWidth: 1,
            display:"flex",
            justifyContent:""
        },
        doneButton:{
            position:"relative",
           right: "-84%"
        
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
            rowGap: 25
        }

})