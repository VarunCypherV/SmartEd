import React from 'react';
import MainStackNavigator from "./src/Routes/MainStack"
import LoginStackNavigator from './src/Routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/Pages/RegisterScreen';
import 'react-native-gesture-handler'
import LoginScreen from './src/Pages/LoginScreen';


const Stack = createStackNavigator();

function App() {
  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
