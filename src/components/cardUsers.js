import React, {useState, useEffect} from 'react';
import {TextInput, View} from 'react-native';
import Styles from '../views/styles';
import IconCpf from '../assets/CPF.svg';
import IconUser from '../assets/user.svg';
import IconEmail from '../assets/email.svg';
import IconFone from '../assets/telefone.svg';
import IconBirthday from '../assets/encontro.svg';
import postUser from '../services/api';

const CardUser = ({usersa, onChange}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    fone: '',
    birthday: '',
    cpf: '',
  });
  console.log(user);

  const change = (name, value) => {
    setUser({...user, ...{[name]: value}});
  };

  return (
    <>
      <View style={Styles.container2}>
        <IconUser style={Styles.iconName} />
        <TextInput
          style={Styles.textInput}
          value={user.name}
          onChangeText={name => setUser({...user, ...{name}})}
        />
      </View>
      <View style={Styles.container2}>
        <IconEmail style={Styles.iconEmail} />
        <TextInput
          style={Styles.textInput}
          value={user.email}
          onChangeText={email => setUser({...user, ...{email}})}
        />
      </View>
      <View style={Styles.container2}>
        <IconFone style={Styles.iconFone} />
        <TextInput
          style={Styles.textInput}
          value={user.fone}
          onChangeText={fone => setUser({...user, ...{fone}})}
        />
      </View>
      <View style={Styles.container2}>
        <IconBirthday style={Styles.iconBirthday} />
        <TextInput
          style={Styles.textInput}
          value={user.birthday}
          onChangeText={birthday => setUser({...user, ...{birthday}})}
        />
      </View>
      <View style={Styles.container2}>
        <IconCpf style={Styles.iconCpf} />
        <TextInput
          style={Styles.textInput}
          value={user.cpf}
          onChangeText={cpf => setUser({...user, ...{cpf}})}
        />
      </View>
    </>
  );
};

export default CardUser;
