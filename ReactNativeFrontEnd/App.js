import React, { useEffect, useState } from 'react';
import MainStackNavigator from "./src/Routes/MainStack"
import LoginStackNavigator from './src/Routes/LoginStack';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/Pages/RegisterScreen';
import 'react-native-gesture-handler'
import LoginScreen from './src/Pages/LoginScreen';

const Stack = createStackNavigator();

function App() {
  const [isloggedin, setLogged] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchData();
  }, []);
  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
