import React , {Component} from "react";
import {View , Text , StyleSheet } from "react-native";

export default class Wrapper extends Component {
    render() {
        return(
            <View style={styles.wrapper}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%" ,
        height: 50 ,
        backgroundColor : "blue"
    }
})