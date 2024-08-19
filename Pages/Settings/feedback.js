import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Switch} from 'react-native';
export default function FeedbackSettingPage({navigation}){
    //include in app's promo page. 
    return(
        <View style = {styles.cont}>
            <Text>Feedback</Text>
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