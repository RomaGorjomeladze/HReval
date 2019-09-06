import React ,{Component} from "react";
import {View, Text , StyleSheet} from "react-native";

export default class Exchange extends Component {
    render() {
        return(
            <View style={styles.main}>
                <View style={styles.box}>
                    <Text style={styles.textColor}>Calculate Total Cost</Text>
                </View>
                <View style={styles.exchangeBox}>
                    <Text style={styles.exchangeText}>NBG</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main : {
     flexDirection : "row" ,
     justifyContent :"space-around",
     width: "90%" ,
        backgroundColor: '#30355c',
        alignItems: 'center',
        borderRadius: 15 ,
        marginTop : 10
    },
    box : {
  height: 50,

 

    } , 
    textColor : {
        color: "white" ,
        fontSize : 20 ,
        lineHeight : 50,
        fontWeight : "bold",
    
    },
    exchangeBox : {
        width: 50 ,
        height: 50 ,
        justifyContent : 'center' ,
        lineHeight: 50 ,
        width: 70
    } ,
    exchangeText: {
        backgroundColor : "#f2f2f2f2",
        borderRadius : 20 ,
        width: 70 ,
        alignItems : "center",
        textAlign : "center",
    },
})