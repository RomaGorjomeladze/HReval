import React ,{Component} from "react";
import {View , StyleSheet , TextInput,Text} from "react-native";

export default class TotalCost extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>
                    TotalCost
                </Text>
                <TextInput style = {styles.salaryInput}></TextInput>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    wrapperView: {
        width: '90%',
        height: '15%',
        backgroundColor: '#30355c',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row'

    },
    salaryInput : {
        width: '35%',
        borderRadius: 30, 
        backgroundColor :'white' ,
        height: 40,
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'white',
        paddingLeft: '7%'
        }
})