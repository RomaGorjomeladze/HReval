import React ,{Component} from "react";
import {View , StyleSheet , Text ,TextInput, KeyboardAvoidingView} from "react-native";

export default class CostIncludes extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>
                    CostIncludes
                </Text>
                <TextInput placeholder="rina">
                    asd
                </TextInput>
                <TextInput placeholder="gita">
                    aad
                </TextInput>
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
        height: '30%',
        backgroundColor: '#30355c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15

    }
})