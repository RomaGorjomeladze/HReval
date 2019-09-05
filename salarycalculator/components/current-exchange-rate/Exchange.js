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
                    <Text style={styles.exchangeText}>2</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main : {
     flexDirection : "row" ,
     justifyContent :"space-around",
     width: "100%"

    },
    box : {
  height: 50,
  zIndex : 2 ,

    } , 
    textColor : {
        color: "white" ,
        fontSize : 20 ,
        lineHeight : 40 ,
    },
    exchangeBox : {
        width: 50 ,
        height: 50 ,
        justifyContent : 'center'
    } ,
    exchangeText: {
        backgroundColor : "#f2f2f2f2",
        borderRadius : 20 ,
        width: 50 ,
        alignItems : "center",
        textAlign : "center"
    }
})