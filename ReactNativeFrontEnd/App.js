import React, { useEffect, useState } from 'react';
import MainStackNavigator from "./src/Routes/MainStack"
import LoginStackNavigator from './src/Routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/Pages/RegisterScreen';
import 'react-native-gesture-handler'
import LoginScreen from './src/Pages/LoginScreen';



const Stack = createStackNavigator();

function App() {
  const [isloggedin, setLogged] = useState(null)
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLogged(true)

    } else {
      setLogged(false)

    }

  }, [])
  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      
      </Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </NavigationContainer>
  );
}


export default App;
