import React , {Component} from "react";
import {View , Text , StyleSheet , Image} from "react-native";

export default class Header extends Component {
    render() {
        return(
            <View style={styles.header}>
                < Image style={styles.headerlogo} source={require('../../assets/reallogo.png')}>
                    </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        width: "100%" ,
        height: "23.5%" ,
        backgroundColor :"#fff" ,
        borderBottomLeftRadius : 5 ,
        borderBottomRightRadius : 5,
        position: "relative"
    } ,
    headerlogo : {
        position: "absolute",
        left: "2%",
        top: "0%" ,
        width: 100 ,
        height: 50,
        borderBottomLeftRadius :5
    }
})