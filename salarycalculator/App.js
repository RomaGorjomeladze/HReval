import React ,{Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, KeyboardAvoidingView } from 'react-native';
import Exchange from "./components/current-exchange-rate/Exchange";
import SalaryGel from "./components/salary-gel/SalaryGel";
import TotalCost from "./components/total-cost/TotalCost";
import CostIncludes from "./components/cost-includes/CostIncludes";
import Wrapper from "./components/wrapper/Wrapper";
import {LinearGradient} from "expo-linear-gradient"
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

export default class App extends Component {
 
  render() {
    return (

      <KeyboardAvoidingView behavior = 'padding' enabled style = {styles.main}>
        <View style = {styles.globalView}>
          <View style = {[ styles.largeView]}>
            <Exchange />
          </View>
          <View style = {styles.wrapperView} >
            <SalaryGel />
            <TotalCost />
            <CostIncludes/>  
          </View>
        </View>
      </KeyboardAvoidingView>
      
    )
  }
}
{/* <KeyboardAvoidingView behavior = 'padding' enabled>
        <LinearGradient colors={[ "#0d0208", "#21151f", "#322237", "#3f3152", "#454370", "#494a79", "#4c5181", "#50588a", "#57547e", "#5a5172", "#5a4f66", "#574d5c"]} >
          <View style={styles.main}>
            <Wrapper />
            <View style={styles.exchangeWrapp}>
              <Exchange />
            </View>
            <View style={styles.background}>
              <KeyboardAvoidingView>
                <SalaryGel />
                <TotalCost />
                <CostIncludes />  
              </KeyboardAvoidingView>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView> */}

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: "#01061A",
//     flex: 1 ,
//     alignItems : "center" ,
//     justifyContent : 'flex-start' ,
//     fontFamily : "Roboto" ,
//     width: "100%"
    
// const styles = StyleSheet.create({
//   background: {
//     width: "100%",
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     backgroundColor: "red",
//     width: windowWidth,
//     height: windowHeight,
//     padding: 50,

//   }
// })
const styles = StyleSheet.create({
  main : {
    alignItems : "center" ,
    justifyContent: 'space-between',
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#01061A",
    paddingTop: 35
   
    
  },
  background: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  exchangeWrapp : {
    alignItems :"center",
    width: "100%"
  },
  globalView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  largeView: {
    width: '100%',
    alignItems: 'center'
  },
  wrapperView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%'
  }
})
