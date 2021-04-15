import React from 'react';
import {Button, Text, View} from 'react-native';
import Styles from '../views/styles';

const Topo = () => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>Usuários</Text>
      <Button title="Adicionar" style={Styles.button} />
    </View>
  );
};

export default Topo;
