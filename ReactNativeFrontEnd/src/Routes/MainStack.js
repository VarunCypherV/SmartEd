import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Pages/ProfileScreen';
import HomeScreen from '../Pages/HomeScreen';
import FileUploadTestScreen from '../Pages/FileUploadTestScreen';
import DrawScreen from '../Pages/drawScreen';
import DrawingCanvas from '../ArchiveCode/DrawingCanvas';


const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
      <Stack.Navigator>
        {/* <Stack.Screen name="DrawingCanvas" component={DrawingCanvas} options={{ headerShown: false }}/> */}
        <Stack.Screen name="Draw" component={DrawScreen} options={{ headerShown: false }}/>  
        <Stack.Screen name="FileUploadTest" component={FileUploadTestScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>  
      </Stack.Navigator>

  );
}
