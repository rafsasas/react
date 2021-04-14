import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import topo from './components';
import {Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <Header>{topo}</Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
