import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Pages/LoginScreen';
import RegisterScreen from '../Pages/RegisterScreen';

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>

  );
}
