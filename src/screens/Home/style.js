import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2d2c2c',
  },
  textContainer: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 20,
    justifyContent: 'space-between',
    marginBottom: Dimensions.get('window').height  / 20,
  },
  initialText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width / 23,
    alignContent: 'center',
    alignItems: 'center',
    fontSize:  Dimensions.get('window').height  / 33,
    margin:  Dimensions.get('window').height  / 90,
  },
  logoContainer: {
    flex: 1,
    paddingTop: Dimensions.get('window').height  / 10,
    alignItems: 'center', 
  },
  logoProperties: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height  / 3,
  },
  gotoContainer: {
    flex: 1.3,
    alignItems: 'center',
    fontSize: 20,
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: Dimensions.get('window').height / 35,
    
  },
  menuButtons: {
    margin: 2,
    borderRadius: 0,
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width / 3.1,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: Dimensions.get('window').height / 35,
    fontWeight: '700',
    color: '#000000'
  }


})

export default style