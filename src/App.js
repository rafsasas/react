import React from 'react';
import {Text, View} from 'react-native';
import Topo from './components';
import Styles from './views/styles';

const App = () => {
  return (
    <View style={Styles.container}>
      <Topo />
    </View>
  );
};

export default App;
