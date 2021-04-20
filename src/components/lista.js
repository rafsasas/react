import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import Styles from '../views/styles';
import Imagem from '../assets/pp.png';

const DATA = [
  {
    id: 1,
    title: 'Luciana abreu',
  },
  {
    id: 2,
    title: 'Tania afonso',
  },
  {
    id: 3,
    title: 'Katerine Ramos',
  },
];

const Item = ({title}) => (
  <View style={Styles.containerLista}>
    <Image source={Imagem} style={Styles.image} />
    <Text style={Styles.title}> {title} </Text>
  </View>
);

const Usuarios = () => {
  console.log('Usuarios');
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default Usuarios;
