import React from 'react'
import { Text, View } from 'react-native'

import styles from './style'

export default function Display({value, displayType}){
    const stylesDisplay = [styles.display]
    if(displayType == 'memory') stylesDisplay.push(styles.displayMemo)
    if(displayType == 'calculator') stylesDisplay.push(styles.displayCalc)

    return(
        
        <View style={stylesDisplay}>
            <Text style={styles.displayValue} numberOfLines={1}>
                {value}
            </Text>
        </View>

    )
} 
