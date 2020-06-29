import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Calculator from '../screens/Calculator';
import Memory from '../screens/Memory';
import Credits from '../screens/Credits';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#FFA500',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Página Inicial"
          component={Home}
        />

        <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#FFA500',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Calculadora" 
          component={Calculator} 
        />

        <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#FFA500',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Memória" 
          component={Memory} 
        />

        <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#FFA500',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Créditos" 
          component={Credits} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;