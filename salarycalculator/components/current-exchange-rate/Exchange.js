import React ,{Component} from "react";
import {View, Text , StyleSheet} from "react-native";

export default class Exchange extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>Exhnage</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    wrapperView: {
        width: '100%',
        height: '15%',
        backgroundColor: '#30355c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15

    }
})