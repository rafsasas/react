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
  {
    id: 4,
    title: 'Lucas Moreira',
  },
  {
    id: 5,
    title: 'Claudio Augusto',
  },
  {
    id: 6,
    title: 'Eva Suarez',
  },
  {
    id: 7,
    title: 'Katerine Ramos',
  },
  {
    id: 8,
    title: 'Lucas Moreira',
  },
];

const Item = ({title}) => (
  <View style={Styles.item}>
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
