import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);

  const [secondNumber, setSecondNumber] = useState(0);

  const [operator, setOperator] = useState('');

  const [finalNumber, setFinalNumber] = useState(0);

  const handleButton = (buttonValue) => {
    if (buttonValue == "=" && !operator) {
      return Alert.alert("Select operator!");
    } else if (buttonValue == "=" && operator) {
      if (operator == "+") {
        let finalNumber = firstNumber + secondNumber;
        return setFinalNumber(finalNumber)
      } else if (operator == "-") {
        let finalNumber = firstNumber - secondNumber;
        return setFinalNumber(finalNumber)
      }
    } else if (!firstNumber && !operator && buttonValue > 0 && buttonValue < 10) {
        
      return setFirstNumber(buttonValue)
    } else if (firstNumber && buttonValue == "+" || buttonValue == "-") {
      console.log("buttonValue: ", buttonValue);
      return setOperator(buttonValue)
    } else if (firstNumber && operator) {
      return setSecondNumber(buttonValue)
    }
  }

  const reset = () => {
    setFirstNumber(0);
    setSecondNumber(0);
    setFinalNumber(0);
    setOperator("");
  }

  return (
    <View style={styles.container}>
      <Text>First NUmber: {firstNumber}</Text>
      <Text>Second  NUmber: {secondNumber}</Text>

      <Text>Final NUmber: {finalNumber}</Text>

      <View style={{ margin: 50, flexDirection: "row" }}>
        <View style={{ margin: 50 }}>
          <Button
            title="1"
            onPress={() => handleButton(1)}
          />
        </View>
        <View style={{ margin: 50 }}>
          <Button
            title="2"
            onPress={() => handleButton(2)}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 50 }}>
          <Button
            title="+"
            onPress={() => handleButton("+")}
          />
        </View>
        <View style={{ margin: 50 }}>
          <Button
            title="-"
            onPress={() => handleButton("-")}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 50 }}>
          <Button
            title="="
            onPress={() => handleButton("=")}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <Button
            title="reset"
            onPress={() => reset("=")}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
