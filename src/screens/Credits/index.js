import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './style';

export default function Credits({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Text style={styles.boldText}>TRABALHO DE PDM</Text>
        <Text style={styles.semiBoldText}>PROGRAMAÇÃO </Text>
        <Text style={styles.semiBoldText}>PARA </Text>
        <Text style={styles.semiBoldText}>DISPOSITIVOS MÓVEIS</Text>
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.simpleText}> INTEGRANTES DO TRABALHO: </Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.boldText}> Leonardo Ronchini</Text>
        <Text style={styles.boldText}> Wesley Dias</Text>
      </View>

    </View>
  )
}