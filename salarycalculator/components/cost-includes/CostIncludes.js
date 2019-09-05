import React ,{Component} from "react";
import {View , StyleSheet , Text} from "react-native";

export default class CostIncludes extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>
                    CostIncludes
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
        width: '95%',
        height: '30%',
        backgroundColor: '#30355c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15

    }
})