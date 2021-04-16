import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  header: {
    height: 64,
    alignItems: 'center',
    paddingTop: 21,
    backgroundColor: '#0154AD',
  },
  text: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    lineHeight: 35,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7E1F',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cairo',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    color: '#0154AD',
    fontSize: 16,
    textAlign: 'left',
    justifyContent: 'center',
  },
  image: {
    height: 41,
    width: 41,
  },
});

export default Styles;
