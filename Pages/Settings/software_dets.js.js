import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
export default function SoftwareDetailsSettingPage({navigation}){
//include this page in app's promo webiste / landing page
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