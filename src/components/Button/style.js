import { Dimensions, StyleSheet, } from "react-native";

const style = StyleSheet.create({
    button:{
        fontSize: 30,
        height: Dimensions.get('window').width /5,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        paddingBottom: 4,
        textAlign: 'center',
        color: '#000000',
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#2d2c2c',
        backgroundColor: '#FFFFF0',
        shadowRadius: 20,
    },
    operationButton:{
        color: '#000000',
        backgroundColor: '#FAEBD7' ,
        paddingBottom: 4
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2,
        paddingBottom: 4,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3, 
        paddingBottom: 4,
    },
    displayButton:{
        color: '#000000',
        backgroundColor: '#ADD8E6' ,
        paddingBottom: 4
    },
    advancedButton:{
        color: '#000000',
        backgroundColor: '#ADD8E6' ,
        paddingBottom: 4
    }

})

export default style
