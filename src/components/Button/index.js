import React from 'react'
import {
    Text,
    TouchableHighlight
} from 'react-native'

import styles from './style'

export default function Button({label, onPress, buttonType}){
    const stylesButton = [styles.button]
    if(buttonType == 'simple') stylesButton.push(styles.button)
    if(buttonType == 'double') stylesButton.push(styles.buttonDouble)
    if(buttonType == 'triple') stylesButton.push(styles.buttonTriple)
    if(buttonType == 'operation') stylesButton.push(styles.operationButton)
    if(buttonType == 'display') stylesButton.push(styles.displayButton)
    if(buttonType == 'advanced') stylesButton.push(styles.advancedButton)
    return(
        
        <TouchableHighlight onPress={onPress}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    )
}

   