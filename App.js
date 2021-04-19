import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen2 from './src/screens/screen2';
import Screen1 from './src/screens/screen1';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            title: 'Usuários',
            headerStyle: {
              height: 64,
              backgroundColor: '#0154AD',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#FFFF',
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            title: 'Usuários',
            headerStyle: {
              height: 64,
              backgroundColor: '#0154AD',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#FFFF',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: -50,
              alignSelf: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
