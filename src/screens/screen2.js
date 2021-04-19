import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CardUser from '../components/cardUsers';
import Styles from '../views/styles';

const Screen2 = () => {
  return (
    <View style={Styles.container}>
      <CardUser />
    </View>
  );
};

export default Screen2;
