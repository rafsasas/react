import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';

import Botao from '../components/botao';
import Users from '../components/lista';
import Styles from '../views/styles';
import ButtonTour from '../components/botaoTour';
import {useTourGuideController} from 'rn-tourguide';
import Test from '../screens/AppTour';
import modalImage from '../assets/modalImage.png';

const Screen1 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={Styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.TextView}>
              <Text style={styles.TextModal}>
                Olá, Leonardo {'\n'}Quer participar {'\n'}do nosso tour ?
              </Text>
              <Text styles={styles.Subtitle}>
                É rapidinho, só vamos {'\n'}ambientar você {'\n'}com o app
              </Text>
            </View>
            <View style={styles.ViewImage}>
              <Image source={modalImage} style={styles.Image} />
            </View>
            <View style={styles.ViewButtons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
              <Pressable style={styles.Next}>
                <Text style={styles.NextText}>
                  Não valeu, deixa pra depois.
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <Botao onPress={() => navigation.navigate('Screen2')} />
      <Users />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    color: 'blue',
    width: '40%',
    height: '8%',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#0053B1',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Gaylon',
    fontWeight: 'bold',
  },
  TextModal: {
    color: 'blue',
    fontSize: 24,
    fontFamily: 'Gaylon',
    textAlign: 'left',
  },
  Subtitle: {
    color: '#0154AD',
    fontSize: 14,
    fontFamily: 'Cairo',
    textAlign: 'left',
  },
  Image: {
    width: '90%',
    height: '100%',
    left: 30,
  },
  Next: {
    width: '65%',
    height: '5%',
    alignItems: 'center',
  },
  NextText: {
    color: '#FF8500',
    fontSize: 12,
  },
  TextView: {
    width: '70%',
    height: '25%',
    left: 30,
  },
  ViewImage: {
    width: '100%',
    height: '50%',
  },
  ViewButtons: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default Screen1;
