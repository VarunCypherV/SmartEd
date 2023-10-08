import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Pages/ProfileScreen';
import HomeScreen from '../Pages/HomeScreen';
import FileUploadTestScreen from '../Pages/FileUploadTestScreen';
const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="FileUploadTest" component={FileUploadTestScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>  
      </Stack.Navigator>

  );
}
