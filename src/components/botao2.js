import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from '../views/styles';

const Button2 = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.button2}>
      <Text style={Styles.buttonText}>Salvar</Text>
    </TouchableOpacity>
  );
};

export default Button2;
