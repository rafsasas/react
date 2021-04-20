import React from 'react';
import {View} from 'react-native';
import Button2 from '../components/botao2';
import CardUser from '../components/cardUsers';
import Styles from '../views/styles';

const Screen2 = () => {
  return (
    <View style={Styles.container}>
      <CardUser />
      <Button2 />
    </View>
  );
};

export default Screen2;
