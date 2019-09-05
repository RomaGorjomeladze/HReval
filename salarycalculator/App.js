import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exchange from "./components/current-exchange-rate/Exchange";
import SalaryGel from "./components/salary-gel/SalaryGel";
import TotalCost from "./components/total-cost/TotalCost";
import CostIncludes from "./components/cost-includes/CostIncludes";


export default class App extends Component {
  render() {
    return (
      <View>
        <Exchange />
        <SalaryGel />
        <TotalCost />
        <CostIncludes />
      </View>
    )
  }
}
