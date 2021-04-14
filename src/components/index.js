import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

const topo = () => {
  return (
    <View style={styles.header}>
      <Header>Usuários</Header>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default topo;
