import React from 'react';
import {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Styles from '../views/styles';
import Imagem from '../assets/pp.png';
import {getUsers} from '../services/api';
import IconDelete from '../assets/delete.svg';

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const start = async () => {
      const request = await getUsers();
      if (request) {
        setUsers(request);
      }
      setLoading(false);
    };
    start();
  }, []);

  const Item = ({item, navigation}) => (
    <View style={Styles.containerLista}>
      <Image source={Imagem} style={Styles.image} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2')}
        style={Styles.title}>
        <Text>{item.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.containerIcon}>
        <IconDelete width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users}
          keyExtractor={({id}, index) => id}
          renderItem={Item}
        />
      )}
    </>
  );
};
export default Users;
