import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
container :{
    flex: 1,
    backgroundColor: '#2d2c2c',
    justifyContent: 'center',
    alignItems: 'center',
},
memory: {
    paddingBottom: 0,
    fontSize: Dimensions.get('window').height / 25,
    fontWeight: '700',
    color: '#fff',
},
memoryText: {
    paddingBottom:  Dimensions.get('window').height / 60,
    fontSize: Dimensions.get('window').height / 25,
    fontWeight: '700',
    color: '#bcc2cd',

}
})

export default style