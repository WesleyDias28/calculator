import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2d2c2c'
  },
  topContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 20,
    marginTop: Dimensions.get('window').height / 40,
  },
  midContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 20,
    marginTop: Dimensions.get('window').height / 40,
  },
  boldText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width / 10,
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
  },
  semiBoldText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width / 11,
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
  },
  bottomContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 20,
    marginBottom: Dimensions.get('window').height / 40,
  },
  simpleText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: Dimensions.get('window').width / 20,
    alignContent: 'center',
    alignItems: 'center',
  }
})

export default style