import React from 'react';
import MainStackNavigator from "./src/Routes/MainStack"
import LoginStackNavigator from './src/Routes/LoginStack';
import {NavigationContainer} from '@react-navigation/native';



function App() {
  const user = true;
  return (
         <NavigationContainer>
            {user?<MainStackNavigator/>:<LoginStackNavigator/>}
         </NavigationContainer>
  );
}


export default App;
