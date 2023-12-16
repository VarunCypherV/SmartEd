import React, { useState } from 'react';
import { Button, PermissionsAndroid, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
// import { Shapes } from 'react-native-background-shapes'
import { Audio } from 'expo-av';
import LinearGradient from 'react-native-linear-gradient'
import * as FileSystem from 'react-native-fs';
import Timer from '../ArchiveCode/Timer';

const AudioUploadTestScreen = () => {
    const { recording, setRecording } = useState < Audio.Recording | null > (null);


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
            const response = await fetch('http://192.168.0.105:3000/audio-upload', {
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
    const renderButtonContent = () => {
        if (recording) {
            return (
                <>
                    <Image style={styles.recordingImage} source={require('../Assests/audioscreenimages/recording.png')} />
                </>
            );
        } else {
            return (
                <>
                    <Image source={require('../Assests/audioscreenimages/mic.png')} style={styles.recordingImage} />
                </>
            );
        }
    };


    return (
        <LinearGradient
            colors={['#FF4d01', '#ff0044', '#ff0033']}
            style={{ flex: 1 }}

        >


            <View style={styles.mainContainer}>




                <View style={styles.topRow}>
                    <Text style={styles.pointsText}>Points:100</Text>
                    <Timer/>
                </View>

                <View style={styles.centeredBox}>

                    <View style={styles.sentenceHeader}>
                        <Text style={styles.sentenceHeaderText}>Let's hear you say...</Text>
                    </View>

                    <View style={styles.sentenceContainer}>
                        {/* <View style={styles.sentenceHeader}>
              <Text style={styles.sentenceHeaderText}>Lets hear you say</Text>

            </View> */}

                        <Text style={styles.sentenceText}>"The fat hoe jumped over the hairy chest"</Text>
                        <Image style={styles.vectorline} source={require('../Assests/audioscreenimages/vectorline.png')} />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={recording ? stopRecording : startRecording}>
                        {renderButtonContent()}
                    </TouchableOpacity>
                </View>

                {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      /> */}

            </View >
        </LinearGradient>


    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 25

    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 100,
        backgroundColor: '#FFFCAD',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 10,
        alignItems: 'center',
    },
    pointsText: {
        fontSize: 24,
        textAlignVertical: 'center',
        textAlign: 'right',
        color: 'black',
        fontFamily: 'Monospace',
        fontWeight: 'bold',
    },
    timerText: {
        fontSize: 24,
        textAlign: 'right',
        textAlignVertical: 'center',
        color: 'black',
        fontFamily: 'Monospace',
        fontWeight: 'bold',
    },
    centeredBox: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10, // Adjust as needed
        borderRadius: 25,
        backgroundColor: '#FF4000',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 12.5,
    },
    sentenceHeader: {
        alignSelf: 'flex-start',
        marginBottom: 25
    },
    sentenceHeaderText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },
    sentenceText: {
        textAlign: 'center',
        color: '#FFFCAD',
        fontWeight: 'bold',
        fontSize: 24

    },
    sentenceContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 50,
        marginHorizontal: 25,
        borderRadius: 25,
        marginBottom: 20,
    },
    vectorline: {
        marginTop: 25
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    },
    recordingImage: {
        width: 150,
        height: 150
    },
});
export default AudioUploadTestScreen;
