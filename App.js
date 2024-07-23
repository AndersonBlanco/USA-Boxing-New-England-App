import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SignIn({navigation}){
  return(
    <View>
      <Text>SigIn</Text>
      <Button onPress={()=>navigation.replace("SignUp")} title='SignUp'/> 
    </View>
  )
}

function SignUp({navigation}){
  return(
    <View>
      <Text>SignUp</Text>
     <Button onPress={() => navigation.replace("SignUp")} title='SignIn'/>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "SignIn" component={SignIn}/>
        <Stack.Screen name = "SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
