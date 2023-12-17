import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Pages/ProfileScreen';
import HomeScreen from '../Pages/HomeScreen';
import AudioUploadTestScreen from '../Pages/AudioUploadTestScreen';
import DrawScreen from '../Pages/drawScreen';
import WrtitingUploadScreen from '../Pages/WrtitingUploadScreen';
import LevelListingScreen from '../Pages/LevelListingScreen';
import LeaderboardScreen from '../Pages/LeaderboardScreen';
import DrawScreenOld from '../ArchiveCode/drawScreenOld';
import Timer from '../ArchiveCode/Timer';
import LevelListingLevelDetail from '../Components/LevelListingLevelDetail';
import VerticalLine from '../Components/verticalLine';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LevelListing"
        component={LevelListingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen name="AudioUploadTest" component={AudioUploadTestScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen
        name="Draw"
        component={DrawScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WrtitingUploadScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
