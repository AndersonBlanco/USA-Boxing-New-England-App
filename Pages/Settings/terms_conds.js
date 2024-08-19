import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
export default function Terms_Conds_SettingPage({navigation}){
//include this page in app's promo webpage.
    //use https://app.termly.io/dashboard/website/e3f6e641-80ac-402a-9855-374234febe99 for auto generating terms of use, refund plicies, copyright policies, and more. 
    const Usage = (
        <>
        <Text>Usage</Text>
        <Text></Text>
        </>
    )

    const Returns = (
        <>
        <Text>Returns</Text>
        <Text></Text>
        </>
    )
    return(
        <View style = {styles.cont}>
            {Usage}
            {Returns}
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