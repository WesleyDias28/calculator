import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '../../components/Button'
import Display from '../../components/Display'

import styles from './style';

export default function Calculator({navigation}) {

  const [currVal, setCurrVal] = useState('');
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);
  const [memory, setMemory] = useState('');

  storeData = async () => {
    try {
      await AsyncStorage.setItem('memory', currVal);
    } catch (e) {
      console.log('error!')
    }
  }

  handleTap = (type, value) => {
  
    if (type === 'number' && value === '.' && currVal.includes('.')) {
      return
    } else if (type === "number") {
      setCurrVal(`${currVal}${value}`);
    }

    if (type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal('');
    }

    if (type === "clear") {
      global.memory = ''
      setCurrVal('');
      setOperator(null);
      setPrevVal(null);
      setMemory('');
    }

    if (type === "memory") {

      if (value === "memorysave" && memory === '') {
        global.memory = currVal;
        setMemory(currVal);
        setCurrVal('');
        
      }

      if (value === "memorybackup" && currVal === '' && memory !== '') {
        setCurrVal(memory);
        setMemory('');
      }

    }

    if (type === "equal") {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === "+") {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "/") {
        setCurrVal(previous / current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "-") {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "*") {
        setCurrVal(previous * current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "power") {
        setCurrVal(Math.pow(previous * current));
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "log") {
        setCurrVal(Math.log(previous) / Math.log(current));
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "module") {
        setCurrVal(previous % current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "sqroot") {
        setCurrVal(Math.sqrt(current));
        setOperator(null);
        setPrevVal(null);
      }
    }

  }

  return (

    <View style={styles.container}>
      
      <Display value={currVal} displayType='calculator' />

      <View style={styles.buttons}>

        <Button label='AC' buttonType='display' onPress={() => handleTap('clear')} /> 
        <Button label='log' buttonType='advanced' onPress={() => handleTap('operator', 'log')} />
        <Button label='xⁿ' buttonType='advanced' onPress={() => handleTap('operator', 'power')} />
        <Button label='MS' buttonType='advanced' onPress={() => handleTap('memory', 'memorysave')} />
        

        <Button label='=' buttonType='display' onPress={() => handleTap('equal')} /> 
        <Button label='rest' buttonType='advanced' onPress={() => handleTap('operator', 'module')} />
        <Button label='√' buttonType='advanced' onPress={() => handleTap('operator', 'sqroot')} />
        <Button label='MR' buttonType='advanced' onPress={() => handleTap('memory', 'memorybackup')} />


        <Button label='7' buttonType='simple' onPress={() => handleTap("number", 7)} />
        <Button label='8' buttonType='simple' onPress={() => handleTap("number", 8)} />
        <Button label='9' buttonType='simple' onPress={() => handleTap("number", 9)} />
        <Button label='/' buttonType='operation' onPress={() => handleTap('operator', '/')} />

        <Button label='4' buttonType='simple' onPress={() => handleTap("number", 4)} />
        <Button label='5' buttonType='simple' onPress={() => handleTap("number", 5)} />
        <Button label='6' buttonType='simple' onPress={() => handleTap("number", 6)} />
        <Button label='*' buttonType='operation' onPress={() => handleTap('operator', '*')} />

        <Button label='1' buttonType='simple' onPress={() => handleTap("number", 1)} />
        <Button label='2' buttonType='simple' onPress={() => handleTap("number", 2)} />
        <Button label='3' buttonType='simple' onPress={() => handleTap("number", 3)} />
        <Button label='-' buttonType='operation' onPress={() => handleTap('operator', '-')} />

        <Button label='0' buttonType='double' onPress={() => handleTap("number", 0)} />
        <Button label='.' buttonType='simple' onPress={() => handleTap("number", '.')} />
        <Button label='+' buttonType='operation' onPress={() => handleTap('operator', '+')} />

      </View>
    </View>

  )
}