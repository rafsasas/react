import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from '../views/styles';

const Botao = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.button}>
      <Text style={Styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  );
};

export default Botao;
