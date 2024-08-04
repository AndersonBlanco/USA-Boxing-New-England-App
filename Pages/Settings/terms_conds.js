import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
export default function Terms_Conds_SettingPage({navigation}){
    return(
        <View style = {styles.cont}>
            <Text>Terms & Conditions</Text>
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