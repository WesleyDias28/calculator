import React, { useState, memo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.initialText}>Trabalho de PDM</Text>
        <Text style={styles.initialText}>Calculadora</Text>

      </View>

      

      <View style={styles.gotoContainer}>

        
          <TouchableOpacity 
            style={styles.menuButtons}
            onPress={() => navigation.navigate("Calculadora")}>

              <Text style={styles.textButton}>Calculadora</Text>

          </TouchableOpacity>
   
          <TouchableOpacity 
            style={styles.menuButtons}
            onPress={() => navigation.navigate("Memória")}>

              <Text style={styles.textButton}>Memória</Text>

          </TouchableOpacity>
        
          <TouchableOpacity 
            style={styles.menuButtons}
            onPress={() => navigation.navigate("Créditos")}>

            <Text style={styles.textButton}>Créditos</Text>

          </TouchableOpacity>

      </View>

    </View>
  );
}