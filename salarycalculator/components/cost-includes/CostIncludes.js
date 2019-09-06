import React ,{Component} from "react";
import {View , StyleSheet , Text ,TextInput, KeyboardAvoidingView} from "react-native";

export default class CostIncludes extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>
                    CostIncludes
                </Text>
               <View style = {styles.inputContainerGlobal}>
                    <View style = {styles.inputContainer}>
                        <TextInput 
                            style = {styles.salaryInput} 
                            placeholder="Your input">            
                        </TextInput>
                        <TextInput 
                            style = {styles.salaryInput} 
                            placeholder="Your input">
                        </TextInput>
                        
                    </View>
                    <View style = {styles.inputContainer}>
                        <TextInput style = {styles.salaryInput} placeholder="Your input">
                            
                        </TextInput>
                        <TextInput style = {styles.salaryInput}  placeholder="Your input">
                            
                        </TextInput>
                    </View>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: "flex-start",
        paddingLeft: 26
    },
    wrapperView: {
        width: '90%',
        height: '40%',
        backgroundColor: '#30355c',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15

    },
    inputContainerGlobal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    inputContainer: {
        width: '50%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },  
    salaryInput : {
        width: '70%',
        borderRadius: 30, 
        backgroundColor :'white' ,
        height: 40,
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'white',
        paddingLeft: '7%'
        },
})