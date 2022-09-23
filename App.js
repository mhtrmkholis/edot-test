/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'; 
import {
  SafeAreaView, 
  StyleSheet,
  Text,
  TouchableOpacity, 
  View,
  TextInput, 
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
 

const App = () => { 
  const [a, setA] = useState({ value: 0, isChecked: false })
  const [b, setB] = useState({ value: 0, isChecked: false })
  const [c, setC] = useState({ value: 0, isChecked: false })
  const [result, setResult] = useState(0)

  const buttons = [{
    operator: '+',
    action: () => calculate('+')
  }, {
    operator: '-',
    action: () => calculate('-') 
  }, {
    operator: 'X',
    action: () => calculate('*') 
  }, {
    operator: '/',
    action: () => calculate('/') 
  }] 

  const calculate = (operator) => { 
    switch (operator) {
      case '+':
        return setResult((a.isChecked ? a.value : 0) + (b.isChecked ? b.value : 0) + (c.isChecked ? c.value : 0)) 
      case '-':
        return setResult((a.isChecked ? a.value : 0) - (b.isChecked ? b.value : 0) - (c.isChecked ? c.value : 0)) 
      case '*':
        return setResult((a.isChecked ? a.value : 1) * (b.isChecked ? b.value : 1) * (c.isChecked ? c.value : 1))
      case '/':
        return setResult((a.isChecked ? a.value : 1) / (b.isChecked ? b.value : 1) / (c.isChecked ? c.value : 1))
      default:
        break;
    }
  }

  const RenderButton = () => {
    return (
      <>
        <View style={styles.buttonWraper}>
          {
            buttons.map((button, i) => (
              <TouchableOpacity key={i} onPress={() => button.action()} style={styles.buttonContainer}>
                <Text style={{fontSize: 16}}>{button.operator}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </>
    )
  } 

  const RenderResult = () => {
    return (
      <>
        <View style={{borderWidth: 1, width: '75%', marginVertical: 35}} />
        <View style={styles.resultContainer}>
          <Text style={{fontSize: 24}}>Hasil:</Text>
          <Text style={{fontSize: 24}}>{result}</Text>
        </View>
      </>
    )
  }

  return (
    <SafeAreaView> 
      <View style={{padding: 15}}> 
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInputContainer}
            keyboardType='numeric'
            value={a}
            onChangeText={(input) => setA({ ...a, value: +input })}
          />
          <CheckBox 
            disabled={false}
            value={a.isChecked} 
            onValueChange={() => setA({ ...a, isChecked: !a.isChecked })}
          />
        </View>


        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInputContainer}
            keyboardType='numeric'
            value={b.value}
            onChangeText={(input) => setB({ ...b, value: +input })}
          />
          <CheckBox
            disabled={false}
            value={b.isChecked} 
            onValueChange={() => setB({ ...b, isChecked: !b.isChecked })}
          />
        </View>


        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInputContainer}
            keyboardType='numeric'
            value={c.value}
            onChangeText={(input) => setC({ ...c, value: +input })}
          />
          <CheckBox
              disabled={false}
              value={c.isChecked} 
              onValueChange={() => setC({ ...c, isChecked: !c.isChecked })}
            />
        </View> 
        <RenderButton />
        <RenderResult />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ 
  buttonWraper: {
    marginTop: 35,
    flexDirection: 'row',
    width: '75%', 
    justifyContent: 'space-between'
  },
  buttonContainer: {
    borderWidth: 1, 
    width: 50, 
    height: 35, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 8
  },
  textInputContainer: {
    borderWidth: 1,
    padding: 8,
    width: '75%'
  },
  textInputWrapper: {
    marginTop: 25, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  resultContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '75%'
  }
});

export default App;
