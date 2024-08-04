import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
export default function PermissionsSettingPage({navigation}){
    const BackButton = (
        <TouchableOpacity>
            <Text>Settings</Text>
        </TouchableOpacity>
    )
    const Toggle = (action) => {
        <TouchableOpacity>
            <Switch />
        </TouchableOpacity>
    }

  const SettingOptionComponent = ({title, description}) =>{
    return(
         <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
        <Switch />
         </View>
    )
  }
    return(
        <View style = {styles.cont}>
            <SettingOptionComponent title={"Live Location"} description={"Live location tracks the users location with the device’s integrated gps system. This allows the functionality of services like the running tracker"} />
            <SettingOptionComponent title={"Notifications"} description={"Notifications permissions allows for fast and efficient way of communicating and alerting users of app updates and gym news, events and more!"} />
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        paddingVertical: 50,
        backgroundColor: "transparent",
        height: 401,
        paddingHorizontal: 25
    },
})