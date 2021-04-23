import React from 'react';
import {SafeAreaView} from 'react-native';
import Botao from '../components/botao';
import Users from '../components/lista';
import Styles from '../views/styles';

const Screen1 = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <Botao onPress={() => navigation.navigate('Screen2')} />
      <Users />
    </SafeAreaView>
  );
};

export default Screen1;
