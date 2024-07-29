import * as React from "react";
import {View, Text, SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity, Modal} from "react-native"; 
import MainNav from "../components/mainNavigation";
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
    )
    return(
   
            <View style = {styles.cont}>
                   
                    <Text>This week's schedule</Text>
                    
                   {WeeklyScheduleList}
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
          
    )
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor: "transparent",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: 50
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

    }
})