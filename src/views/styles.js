import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
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
    borderRadius: 50,
    width: 41,
  },
  textInput: {
    color: '#7C8B99',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Cairo',
  },
  container2: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  iconNome: {
    height: 25.4,
    width: 25.54,
  },
  iconEmail: {
    width: 25.08,
    height: 17.24,
  },
  iconFone: {
    width: 24.14,
    height: 23.99,
  },
  iconBirthday: {
    width: 26,
    height: 26,
  },
  iconCpf: {
    width: 35,
    height: 39,
  },
});

export default Styles;
