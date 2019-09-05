import React ,{Component} from "react";
import {View , StyleSheet , Text} from "react-native";

export default class TotalCost extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>
                    TotalCost
                </Text>
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
        width: '70%',
        height: '15%',
        backgroundColor: '#30355c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15

    }
})