import React, {useState} from 'react';
import {View, TextInput, Modal} from 'react-native';
import Button2 from '../components/botao2';
import Styles from '../views/styles';
import IconCpf from '../assets/CPF.svg';
import IconUser from '../assets/user.svg';
import IconEmail from '../assets/email.svg';
import IconFone from '../assets/telefone.svg';
import IconBirthday from '../assets/encontro.svg';
import {useRoute} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';

const Screen2 = () => {
  const route = useRoute();

  const [user, setUser] = useState(
    route.params
      ? route.params.user
      : {
          name: '',
          email: '',
          fone: '',
          birthday: '',
          cpf: '',
        },
  );

  const createUser = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      };
      const response = await fetch(
        'http://192.168.42.206:3001/users',
        requestOptions,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  };

  const putUser = async id => {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      };
      console.log(requestOptions);
      const response = await fetch(
        `http://192.168.42.206:3001/users/${user.id}`,
        requestOptions,
      );
      const json = await response.json();

      showMessage({
        message: 'Usuário atualizado',
        type: 'sucess',
        position: 'top',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeText = (name, value) => {
    setUser({...user, ...{[name]: value}});
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.container2}>
        <IconUser style={Styles.iconName} />
        <TextInput
          style={Styles.textInput}
          value={user.name}
          onChangeText={value => onChangeText('name', value)}
        />
      </View>
      <View style={Styles.container2}>
        <IconEmail style={Styles.iconEmail} />
        <TextInput
          style={Styles.textInput}
          value={user.email}
          onChangeText={value => onChangeText('email', value)}
        />
      </View>
      <View style={Styles.container2}>
        <IconFone style={Styles.iconFone} />
        <TextInput
          style={Styles.textInput}
          value={user.fone}
          onChangeText={value => onChangeText('fone', value)}
        />
      </View>
      <View style={Styles.container2}>
        <IconBirthday style={Styles.iconBirthday} />
        <TextInput
          style={Styles.textInput}
          value={user.birthday}
          onChangeText={value => onChangeText('birthday', value)}
        />
      </View>
      <View style={Styles.container2}>
        <IconCpf style={Styles.iconCpf} />
        <TextInput
          style={Styles.textInput}
          value={user.cpf}
          onChangeText={value => onChangeText('cpf', value)}
        />
      </View>
      <Button2 onPress={user.id ? putUser : createUser} />
    </View>
  );
};

export default Screen2;
