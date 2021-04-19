import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Styles from '../views/styles';
import Icon from '../assets/CPF.svg';

const CardUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    fone: '',
    birthday: '',
    cpf: '',
  });

  console.log(user);

  const onChangeText = (name, value) => {
    setUser({...user, ...{[name]: value}});
  };

  return (
    <>
      <View style={Styles.container2}>
        <Icon style={Styles.iconNome} />
        <TextInput
          style={Styles.textInput}
          value={user.name}
          onChangeText={name => setUser({...user, ...{name}})}
        />
      </View>
      <View style={Styles.container2}>
        <Icon style={Styles.iconNome} />
        <TextInput
          style={Styles.textInput}
          value={user.name}
          onChangeText={name => setUser({...user, ...{name}})}
        />
      </View>
      <View style={Styles.container2}>
        <Icon style={Styles.iconNome} />
        <TextInput
          style={Styles.textInput}
          value={user.name}
          onChangeText={name => setUser({...user, ...{name}})}
        />
      </View>
      <View style={Styles.container2}>
        <Icon style={Styles.iconNome} />
        <TextInput
          style={Styles.textInput}
          value={user.name}
          onChangeText={name => setUser({...user, ...{name}})}
        />
      </View>
    </>
  );
};

export default CardUser;
