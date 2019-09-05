import React ,{Component} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import Exchange from "./components/current-exchange-rate/Exchange";
import SalaryGel from "./components/salary-gel/SalaryGel";
import TotalCost from "./components/total-cost/TotalCost";
import CostIncludes from "./components/cost-includes/CostIncludes";
import Wrapper from "./components/wrapper/Wrapper";



export default class App extends Component { 

  render() {
    return (
      <View style={styles.background}>
        <Wrapper />
        <Exchange />
        <SalaryGel />
        <TotalCost />
        <CostIncludes />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#01061A",
    flex: 1 ,
    alignItems : "center" ,
    justifyContent : 'flex-start' ,
    fontFamily : "Roboto" ,
    width: "100%"
    
  }
})
