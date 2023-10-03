import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Pages/LoginScreen';
import HomeScreen from '../Pages/HomeScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>

  );
}
