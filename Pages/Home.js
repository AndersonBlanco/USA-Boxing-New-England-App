import * as React from "react";
import {View, Text, SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity, Modal, ImageBackground, ScrollView} from "react-native"; 
import MainNav from "../components/mainNavigation";
import PunchTrackerBackImg from "../assets/punchTrackerBackImg.png";
import RunningTrackerImgBack from "../assets/runningTrackerBackImg.png"
import NutritionbackImg from "../assets/nutrition.png"; 
export default function Home({navigation, resources, currentScreen}){
    const {userSelectedGym} = resources;
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [triggerModal, setTriggerModal] = React.useState(false);    
  
    const WeeklyScheduleList = (
        <FlatList
        scrollEnabled = {false}
        
        style = {styles.scheduleList}
        data = {resources.userSelectedGym.generalWeeklySchedule}
        renderItem={({item}) =>{
        
            return(
                <TouchableOpacity style = {styles.scheduleItemCont} onPress={() => setTriggerModal(true)}>
                    <Text style = {styles.itemText}>{item.day}</Text>
                    <Text style = {styles.itemText}>{item.workout}</Text>
                    </TouchableOpacity>
            )
        }}
        />
    );

    const Services = (
        <View style = {styles.services}>
        <TouchableOpacity style={styles.ImageBackgroundCont}>
        <ImageBackground blurRadius={0} resizeMode="cover" source={PunchTrackerBackImg} style={styles.ImageBackground}><Text style = {styles.ImageBackgroundText}>Punch Tracker</Text></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ImageBackgroundCont}>
            <ImageBackground blurRadius={0} resizeMode="cover" source={RunningTrackerImgBack} style={styles.ImageBackground}><Text style = {styles.ImageBackgroundText}>Punch Tracker</Text></ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.ImageBackgroundCont}>
            <ImageBackground blurRadius={0} resizeMode="cover" source={NutritionbackImg} style={styles.ImageBackground}><Text style = {styles.ImageBackgroundText}>Punch Tracker</Text></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ImageBackgroundCont, {opacity: 0}]}>
            <ImageBackground blurRadius={1} resizeMode="cover" source={PunchTrackerBackImg} style={styles.ImageBackground}><Text style = {styles.ImageBackgroundText}>Punch Tracker</Text></ImageBackground>
        </TouchableOpacity>

        </View>
    )
    return(
   
            <View style = {styles.cont}>
                <ScrollView horizontal={false} scrollEnabled style={styles.scrollView} scrollToOverflowEnabled={true} contentInsetAdjustmentBehavior="automatic">
                <View style = {[styles.cont, {paddingVertical: 34,overflow:"hidden", backgroundColor: "transparent" }]}>
                <Text style = {styles.scheduleTitle}>This week's schedule</Text>
                    
                   {WeeklyScheduleList}
                   
                   {Services}


                   <Modal
                   visible={triggerModal}
                   style = {styles.modal}
                   transparent
                   >
                    <View style = {styles.modalCont} onTouchEnd={() => setTriggerModal(false)}>
                        <View style={styles.innerMondalCont_Cont}>
                            <Text>4:30 PM - 7:00 PM</Text>
                        </View>
                    </View>


                   </Modal>
                   </View>
                  </ScrollView>
            </View>
          
    )
}

const styles = StyleSheet.create({
    scrollView:{
       textAlign:"center",
       alignContent:"center",
       overflow: "hidden",
       backgroundColor:"transparent"
    },

    cont:{
        backgroundColor: "transparent",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        width:"100%",
        
    },

    header:{
        
    },
    gymLogo:{
        height: 50,
        width: 50,
        borderRadius: 50,
        position:"relative",
        right:"-40%",
        top: -34
        
    },
    middle:{
    
    },
    scheduleList:{
        marginVertical: 10,
        borderColor: "rgba(0,0,0, .2)",
        borderWidth: 1,
        borderRadius: 10
    },
    scheduleItemCont:{
        borderWidth: 1,
        borderColor: "rgba(0,0,0, .2)",
        paddingVertical: 15,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        columnGap: 90,
    },
    itemText:{
        color: "black",
        textAlign:"center", 
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal: 20
    },
    modalCont:{
        height:"100%",
        width:"100%",
        textAlign:"center",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,.5)"

    },
    innerMondalCont_Cont:{
        backgroundColor:"white",
        height: "25%",
        width: "70%",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10,

    },

    services:{
        display:"flex",
        flexDirection:"column",
        rowGap:25,
        paddingVertical: 25
    },
    ImageBackgroundCont:{
        backgroundColor: "transparent",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
        display:"{flex", 
        padding: 0,
        width: "90%",
        borderRadius: 10,
        overflow:"hidden",
        

    },
    ImageBackground:{
        width: 370, 
        height: 115,
         borderRadius: 10,
         textAlign:"center",
         alignItems:"center",
        

        },
        ImageBackgroundText:{
            color: "white",
            top: 45,
            fontWeight:"500"
        },
        scheduleTitle:{
            textAlign:"left",
            backgroundColor: "transparent",
            width: "100%",
            paddingLeft: 20,
            fontSize: 15,
            fontWeight: "400", 
            paddingVertical: 10
        }
})