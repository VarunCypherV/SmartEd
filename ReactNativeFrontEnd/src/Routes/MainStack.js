import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Pages/ProfileScreen';
import HomeScreen from '../Pages/HomeScreen';
import AudioUploadTestScreen from '../Pages/AudioUploadTestScreen';
import DrawScreen from '../Pages/drawScreen';


const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AudioUploadTest" component={AudioUploadTestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Draw" component={DrawScreen} options={{ headerShown: false }} />

      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}
