import SignIn from "./Pages/SignIn"; 
import SignUp from "./Pages/SignUp"; 
import Home from "./Pages/Home"; 
import SelectAccType from './Pages/SelectAccType';
import RegisterUnderGym from './Pages/registerUnderGym';
import SettingsPage from "./Pages/SettingsPage";
import MainNav from "./components/mainNavigation";
//import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Navigator, SafeAreaView, Image, Modal, FlatList, TouchableOpacity, TouchableOpacityComponent, Animated, PixelRatio, StatusBar} from 'react-native';
import { Dimensions } from "react-native";
import Profile from "./Pages/Profile";
import ImgIcon from "./assets/icon.png"
import CalendarPage from "./Pages/Calendar";
import NotificationsSVG from "./assets/notifications";
import PermissionsSettingPage from "./Pages/Settings/permissions.js";
import * as Animatable from "react-native-animatable"; 
export default function App() {
  StatusBar.setHidden(false, "fade")
  const [screen, setScreen] = useState(["SignIn"]); //stack infastructure, later will aid in navigating back to previous screen as a record of screen navigations is maintained / recorded
  var currentScreen = screen[screen.length-1]; 

  const [screenResources, SetScreenResources] = useState({});
  const [newNotifications, setNewNotifications] = useState(false); 
  function navigate(screenName="SignIn", resources = screenResources){
    setScreen([...screen, screenName]);
    SetScreenResources(resources); 
  };

  function editNavigationStack(){
    
  }

  //notification Panel: 
  const [notificationData, setNotificationData] = useState([{title: 'New Bill'}, {title: 'Message from Alex Sep'}]);
// ?? const V = (<TouchableOpacityComponent></TouchableOpacityComponent>)
  const [notificationPannelToggle, setNotificationPanel] = useState(false); 
  /*animatipn with React Native Animated:   "skewY(-10deg, 10deg)"
  const zoom = useRef(new Animated.Value(0)).current;
  const zoomIn = () =>{
    Animated.timing(zoom, {
      toValue: {transform: "skew(-10deg, 10deg)"},
      duration: 3000,
      useNativeDriver: true
    }).start()
  }

  const zoomOut = () =>{
    Animated.timing(zoom, {
      toValue: {transform: "skew(10deg, 0deg)"},
      duration: 3000,
      useNativeDriver: true
    }).start()
  }
*/


  const NotificationPanel =(
       <Animatable.View
       animation={"fadeIn"}
       
       duration={500}
       style = {[{
        backgroundColor: "white",
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderColor: "rgba(0,0,0,.5)",
        height: Dimensions.get("screen").height * .75,
        width: Dimensions.get("screen").width,
        borderRadius: 0,
        borderTopRightRadius: 0,
       display: notificationPannelToggle? "flex" :"none",
       position:"absolute",
       top: 111,
       right: 0,
       shadowOpacity: 0,
       shadowColor: "black", 
       shadowRadius: 300,
       shadowOffset: {width: 0, height: 0},
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",


       }]}>
       <FlatList
       style = {{
        backgroundColor: "transparent",
        width: "100%",
        padding: 50
       }}
       data = {notificationData}
       renderItem={({item}) =>
        <TouchableOpacity
        style = {{
          borderColor: "gray",
          borderTopWidth: 0,
          borderBottomWidth: 1,
          paddingVertical: 25
        }}
        ><Text>{item.title}</Text></TouchableOpacity>
       }
       />
 </Animatable.View>
    )

  //console.log(screen);
  //<Image source={{uri: screenResources.userSelectedGym.img}} style = {styles.gymLogo}/>
  const NotificationDot = (
    <View style={{height: 7, width: 7, borderRadius: 100, backgroundColor:"red", top: -7, right: -11.5, display: newNotifications? "flex" : "none" }}></View>
  )
  function CommonHeader(){
    return(
      <View style = {styles.header}>
      <Image source={ImgIcon} style = {[styles.gymLogo, {left: 20, top: -1, position:"relative", heeight: 55, width:55}]}/>
      <TouchableOpacity style={{ position:"absolute", right: 15, top: 5}} onPress={() => setNotificationPanel(!notificationPannelToggle)}><NotificationsSVG style ={{height: 30,width: 30}}  />{NotificationDot}</TouchableOpacity>
  </View>
    )
  };


  return (
    <SafeAreaView style={{}}>       
            {
        ["Home", "Settings", "Profile", "Calendar"].includes(currentScreen)? <View style = {styles.mainNavContainer}><MainNav navigation={navigate} routeName={currentScreen} extraStyle = {{bottom: (PixelRatio.getPixelSizeForLayoutSize(Dimensions.get("screen").scale) * -2), position: "absolute", paddingVertical: 15}}/></View>
          :
          null
         }
         
    {
      currentScreen=='SignIn'? <SignIn navigation={navigate}/> 
      :
      currentScreen== 'SignUp'? <SignUp navigation={navigate}/>
      :
      currentScreen == 'SelectAccType'? <SelectAccType navigation={navigate}/>
      :
      currentScreen== 'RegisterUnderGym'? <RegisterUnderGym navigation={navigate} resources = {screenResources}/>
      :
      currentScreen == 'Home'? <><CommonHeader/><Home navigation={navigate} resources = {screenResources} currentScreen = {currentScreen}/></>
      :
      currentScreen == "Settings"? <><CommonHeader/><SettingsPage editNavigationStack ={editNavigationStack} currentScreen={currentScreen} navigation={navigate}/></>
      :
      currentScreen=='Profile'? <><CommonHeader/><Profile/></>
      :
      currentScreen == "Calendar"? <><CommonHeader/><CalendarPage/></>
      :
      <SignIn navigation={navigate}/>
    }

         {NotificationPanel}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gymLogo:{
        height: 50,
        width: 50,
        borderRadius: 50,
        position:"relative",
        right:"-82%",
        backgroundColor:"red"
      
        
    },
    header:{
      backgroundColor: "transparent"
    },
    mainNavContainer:{
      backgroundColor: "green",
      padding: 0,
      position:"static",
      bottom: -Dimensions.get("screen").height * .95,
      zIndex: 1,
      
    }
});
