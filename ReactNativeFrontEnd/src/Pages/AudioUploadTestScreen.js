import React, { useState } from 'react';
import { Button, PermissionsAndroid, View } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'react-native-fs';

const AudioUploadTestScreen = () => {
    const [recording, setRecording] = useState < Audio.Recording | null > (null);

    async function startRecording() {
        try {
            const perm = await Audio.requestPermissionsAsync();
            if (perm.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });


                console.log('Starting recording..');
                const recordingObject = new Audio.Recording();
                await recordingObject.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
                await recordingObject.startAsync();
                setRecording(recordingObject);
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(null)
        if (recording) {
            try {
                await recording.stopAndUnloadAsync();
                let allRecordi
                const uri = recording.getURI();
                console.log('Recording stopped and stored at', uri);

                if (uri) {

                    const audioBuffer = await FileSystem.readFile(uri, 'base64');
                    await audioUpload(uri);
                }
            } catch (error) {
                console.error('Failed to stop recording: ', error);
            } finally {
                setRecording(null);
            }
        }
    }

    async function audioUpload(uri) {
        const formData = new FormData();
        formData.append('audio', {
            uri: uri,
            type: 'audio/m4a', // Update the type to match the actual file extension ("m4a")
            name: 'audio.m4a',
        });

        try {
            const response = await fetch('http://192.168.0.103:3001/audio-upload', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = await response.json();
            console.log('Upload response:', data.message);

            // If the upload was successful, attempt to play the audio locally
            if (response.ok) {
                const { sound } = await Audio.Sound.createAsync(
                    { uri },
                    { shouldPlay: true }
                );
                await sound.playAsync();
            }
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />

        </View>
    );
};

export default AudioUploadTestScreen;
