import React from 'react';
import MainStackNavigator from "./src/Routes/MainStack"
import {NavigationContainer} from '@react-navigation/native';



function App() {

  return (
         <NavigationContainer>
            <MainStackNavigator/>
         </NavigationContainer>
  );
}


export default App;
