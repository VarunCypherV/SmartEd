import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioRecordingComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPath, setAudioPath] = useState('');

  const startRecording = async () => {
    const path = RNFS.DocumentDirectoryPath + '/audioFile.mp3'; // Change the file name and extension as needed
    try {
      await audioRecorderPlayer.startRecorder(path);
      setIsRecording(true);
      setAudioPath(path);
    } catch (error) {
      console.error('Error starting recording: ', error);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      if (result) {
        Alert.alert('Audio recorded successfully!');
      }
    } catch (error) {
      console.error('Error stopping recording: ', error);
    }
  };

  const saveAudio = async () => {
    try {
      const newPath = RNFS.DocumentDirectoryPath + '/Audio/savedAudio.mp3';
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/Audio');
      await RNFS.moveFile(audioPath, newPath);
      Alert.alert('Audio saved successfully!');
    } catch (error) {
      console.error('Error saving audio: ', error);
    }
  };
  
//   const saveAudio = async () => {
//     try {
//       const newPath = RNFS.DocumentDirectoryPath + '/Audio/savedAudio.mp3'; // Adjust the path accordingly
//       await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/Audio'); // Create the directory if it doesn't exist
//       await RNFS.moveFile(audioPath, newPath);
//       Alert.alert('Audio saved successfully!');
//     } catch (error) {
//       console.error('Error saving audio: ', error);
//     }
//   };
  

  return (
    <View>
      <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={isRecording ? stopRecording : startRecording} />
      {audioPath !== '' && (
        <Button title="Save Audio" onPress={saveAudio} disabled={isRecording} />
      )}
    </View>
  );
};

export default AudioRecordingComponent;
