/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player'; // Import TrackPlayer





AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));


import { setupPlayer } from './src/Components/audioPlayer';
async function initializePlayer() {
  await setupPlayer();
}

initializePlayer();
