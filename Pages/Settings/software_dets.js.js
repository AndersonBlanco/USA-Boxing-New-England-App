import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
export default function SoftwareDetailsSettingPage({navigation}){

    return(
        <View style = {styles.cont}>
            <Text>Software Details</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
})