import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import SVG from "./assets/icon.png"; 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//pages import: 
import SignIn from "./Pages/SignIn"; 
import SignUp from "./Pages/SignUp"; 
import Home from "./Pages/Home"; 
import SelectAccType from './Pages/SelectAccType';
import RegisterUnderGym from './Pages/registerUnderGym';

export default function App({navigation}) {
  const Stack = createNativeStackNavigator(); 
  const DeafTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: "white",
      text:"black",
    }
  }
  //navigationKey={isSignedIn? "user" : "guest"} - removes all screens with set navigation key when condition is true / false
  return (
    <NavigationContainer theme={DeafTheme}>
      <Stack.Navigator screenOptions={{headerShown:false, animation:"none"}}>

        <Stack.Group name = "auth_and_acc_creation">
          <Stack.Screen name = 'SignIn' component={SignIn}/>
          <Stack.Screen name = 'SignUp' component={SignUp}/>
          <Stack.Screen name = 'SelectAccType' component={SelectAccType}/>
          <Stack.Screen name = 'RegisterUnderGym' component={RegisterUnderGym}/>
        </Stack.Group>

      <Stack.Screen name = 'Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  auth_screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"blue"
  },
});
 