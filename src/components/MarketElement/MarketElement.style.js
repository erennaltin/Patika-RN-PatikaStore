import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ElementContainer: {
    height: 350,
    flex: 1,
    backgroundColor: '#eee',
    margin: 8,
    justifyContent: 'space-evenly',
    borderRadius: 5,
    fontWeight: 'bold',
  },
  ElementPicture: {
    flex: 1,
    height: 300,
    width: '95%',
    margin: 8,
    borderRadius: 5,
    alignSelf: 'center',
  },
  ElementTitle: {
    height: 80,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  ElementPrice: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 8,
    paddingLeft: 8,
  },
  ElementStock: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    paddingLeft: 8,
  },
});

export default styles;
