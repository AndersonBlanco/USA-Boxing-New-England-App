import SignIn from "./Pages/SignIn"; 
import SignUp from "./Pages/SignUp"; 
import Home from "./Pages/Home"; 
import SelectAccType from './Pages/SelectAccType';
import RegisterUnderGym from './Pages/registerUnderGym';
import SettingsPage from "./Pages/SettingsPage";
import MainNav from "./components/mainNavigation";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Navigator, SafeAreaView, Image } from 'react-native';
import { Dimensions } from "react-native";
import Profile from "./Pages/Profile";

export default function App() {
  const [screen, setScreen] = useState(["SignIn"]); //stack infastructure, later will aid in navigating back to previous screen as a record of screen navigations is maintained / recorded
  var currentScreen = screen[screen.length-1]; 
  const [screenResources, SetScreenResources] = useState({});
  function navigate(screenName="SignIn", resources = screenResources){
    setScreen([...screen, screenName]);
    SetScreenResources(resources)
  };
  console.log(screen);
  function CommonHeader(){
    return(
      <View style = {styles.header}>
      <Image source={{uri: screenResources.userSelectedGym.img}} style = {styles.gymLogo}/>
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
      currentScreen == 'Home'? <><CommonHeader/><Home navigation={navigate} resources = {screenResources} currentScreen = {currentScreen}/><MainNav navigation={navigate} routeName={currentScreen}/></>
      :
      currentScreen == "Settings"? <><CommonHeader/><SettingsPage/><MainNav navigation={navigate} routeName={currentScreen} extraStyle = {{bottom: -(Dimensions.get("screen").height * .417)}}/></>
      :
      currentScreen=='Profile'? <><CommonHeader/><Profile/><MainNav navigation={navigate} routeName={currentScreen} extraStyle = {{bottom: -(Dimensions.get("screen").height * .842)}}/></>
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
