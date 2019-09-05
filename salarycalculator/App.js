import React ,{Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Exchange from "./components/current-exchange-rate/Exchange";
import SalaryGel from "./components/salary-gel/SalaryGel";
import TotalCost from "./components/total-cost/TotalCost";
import CostIncludes from "./components/cost-includes/CostIncludes";
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

export default class App extends Component {
 
  render() {
    return (
      <View style = {styles.background}>
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
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#02071B',
    width: windowWidth,
    height: windowHeight,
    padding: 50,

  }
})
