import SignIn from "./Pages/SignIn"; 
import SignUp from "./Pages/SignUp"; 
import Home from "./Pages/Home"; 
import SelectAccType from './Pages/SelectAccType';
import RegisterUnderGym from './Pages/registerUnderGym';
import SettingsPage from "./Pages/SettingsPage";
import MainNav from "./components/mainNavigation";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Navigator, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import Profile from "./Pages/Profile";
import ImgIcon from "./assets/icon.png"
import CalendarPage from "./Pages/Calendar";
import NotificationsSVG from "./assets/notifications";
import PermissionsSettingPage from "./Pages/Settings/permissions.js";
export default function App() {
  const [screen, setScreen] = useState(["SignIn"]); //stack infastructure, later will aid in navigating back to previous screen as a record of screen navigations is maintained / recorded
  var currentScreen = screen[screen.length-1]; 
  const [screenResources, SetScreenResources] = useState({});
  const [newNotifications, setNewNotifications] = useState(false); 
  function navigate(screenName="SignIn", resources = screenResources){
    setScreen([...screen, screenName]);
    SetScreenResources(resources)
  };
  //console.log(screen);
  //<Image source={{uri: screenResources.userSelectedGym.img}} style = {styles.gymLogo}/>
  const NotificationDot = (
    <View style={{height: 7, width: 7, borderRadius: 100, backgroundColor:"red", top: -7, right: -11.5, display: newNotifications? "flex" : "none" }}></View>
  )
  function CommonHeader(){
    return(
      <View style = {styles.header}>
      <Image source={ImgIcon} style = {[styles.gymLogo, {left: 20, top: -1, position:"relative", heeight: 55, width:55}]}/>
      <TouchableOpacity style={{ position:"absolute", right: 15, top: 5}}><NotificationsSVG style ={{height: 30,width: 30}}  />{NotificationDot}</TouchableOpacity>
  </View>
    )
  }
  return (
    <>
    <SafeAreaView>          
    {
      currentScreen=='SignIn'? <SignIn navigation={navigate}/> 
      :
      currentScreen== 'SignUp'? <SignUp navigation={navigate}/>
      :
      currentScreen == 'SelectAccType'? <SelectAccType navigation={navigate}/>
      :
      currentScreen== 'RegisterUnderGym'? <RegisterUnderGym navigation={navigate} resources = {screenResources}/>
      :
      currentScreen == 'Home'? <><CommonHeader/><Home navigation={navigate} resources = {screenResources} currentScreen = {currentScreen}/><MainNav extraStyle = {{bottom: (Dimensions.get("screen").height * -.015), paddingBottom: 100}} navigation={navigate} routeName={currentScreen}/></>
      :
      currentScreen == "Settings"? <><CommonHeader/><SettingsPage currentScreen={currentScreen} navigation={navigate}/><MainNav navigation={navigate} routeName={currentScreen} extraStyle = {{bottom: -(Dimensions.get("screen").height * .419)}}/></>
      :
      currentScreen=='Profile'? <><CommonHeader/><Profile/><MainNav navigation={navigate} routeName={currentScreen} extraStyle = {{bottom: -(Dimensions.get("screen").height * .279)}}/></>
      :
      currentScreen == "Calendar"? <><CommonHeader/><CalendarPage/><MainNav navigation={navigate} routeName={currentScreen} extraStyle = {{bottom: -(Dimensions.get("screen").height * .347)}}/></>
      :
      <SignIn navigation={navigate}/>
    }
    </SafeAreaView>
    </>
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
    }
});
