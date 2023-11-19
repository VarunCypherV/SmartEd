import TrackPlayer from 'react-native-track-player';

export async function setupPlayer() {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: 'backgroundMusic',
    url: require('../Assests/AudioFiles/test.mp3'),
    title: 'Background Music',
    loop:true
  });
}

export async function playBackgroundMusic() {
  await TrackPlayer.play();
}

export async function stopBackgroundMusic() {
  await TrackPlayer.stop();
}
