import {Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, ImageBackground} from "react-native"; 
import HeadshotIcon from "../assets/headshot";
export default function Profile(){
    return(
        <View>
            <Text>Profile</Text>
            <View style = {styles.profileImgCont}><HeadshotIcon style = {styles.headshotPlaceholder}/></View>
            <Image src= {{uri: ("../assets/edit_icon.png")}} height = {100} width={100}/>

        </View>
    )
}
const styles = StyleSheet.create({
    headshotPlaceholder:{
        height: 100,
        width: 100,
    },
    profileImgCont:{
          borderRadius: 100,
          backgroundColor: "red",
          width: 100,
          overflow: "hidden",
          alignItems:"center",
          justifyContent:"center",
          textAlign:"center"

    }
})