import React ,{Component} from "react";
import {View , StyleSheet , Text , TextInput} from "react-native";

export default class SalaryGel extends Component {
    render() {
        return(
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>
                    Salary 
                </Text>
                    <View>
                        <TextInput  
                         underlineColorAndroid = "transparent" 
                           placeholder="Salary GEL" 
                            style={styles.salaryInput}></TextInput>
                        <Text style={styles.gross}>
                           Salary GEL gross :
                           <Text style={styles.grossNumber}>1274</Text>
                           </Text>
                        <Text style={styles.taxes}>
                            Taxes: 
                        <Text style={styles.grossNumber}>1274</Text>
                        </Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize : 20 ,
        lineHeight: 30
    },
    wrapperView: {
        width: '70%',
        height: '20%',
        backgroundColor: '#30355c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15 ,
        justifyContent : "space-around",
        flexDirection :"row",
        alignItems :"center"
    } ,
    salaryInput : {
    width: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30, 
    backgroundColor :'white' ,
    paddingVertical: 0,
    paddingHorizontal: 15,
    height: 40,
    margin: 0,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'white',
    paddingLeft: 30
    },
    gross :{
        fontSize : 12,
        marginLeft: 12,
        color: "white",
        fontWeight: "bold"
    },
    grossNumber : {
        color: "#fff",
        fontWeight :"bold"
    } ,
    taxes : {
        fontSize : 12,
        textAlign: "center" ,
        color: "white",
        fontWeight: "bold"
    }
})