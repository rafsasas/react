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
import {getUsers, deleteUser} from '../services/api';
import IconDelete from '../assets/delete.svg';
import {useNavigation} from '@react-navigation/native';

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const navigation = useNavigation();

  const fetchUsers = async () => {
    const request = await getUsers();
    if (request) {
      setUsers(request);
    }
    setLoading(false);
  };

  const removeUser = async id => {
    const request = await deleteUser(id);
    if (request) {
      fetchUsers();
    }
    console.log();
  };

  const Item = ({item}) => (
    <View style={Styles.containerLista}>
      <Image source={Imagem} style={Styles.image} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2', {user: item})}
        style={Styles.title}>
        <Text>{item.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => removeUser(item.id)}
        style={Styles.containerIcon}>
        <IconDelete width={20} height={20} flex={1} />
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
