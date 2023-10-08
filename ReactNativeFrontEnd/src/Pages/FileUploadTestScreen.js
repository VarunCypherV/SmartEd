import React, { useState } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

export default function FileUploadTestScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const imageUri = response.uri || response.assets[0].uri;
        setResponse(response.assets);
        setSelectedImage(imageUri);
      }
    });
  };

  const uploadImage = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('my-image-file', {
        uri: response[0].uri,
        type: response[0].type,
        name: response[0].fileName,
      });

      try {
        const uploadResponse = await axios.post(
          'http://192.168.1.101:3001/image-upload', // Correct the URL
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        if (uploadResponse.status === 200) {
          console.log('Image uploaded successfully.');
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.log('No image selected.');
    }
  };

  const fetchDataFromServer = async () => {
    try {
      console.log('Response from /simpleMongoDBcrud:', response);
      const serverResponse = await axios.get(
        'http://192.168.1.101:3001/simpletextresponse' // Correct the URL
      );
      console.log('Response from /simpleMongoDBcrud:', serverResponse.data);
    } catch (error) {
      console.error('Error fetching data from server:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ flex: 1 }} resizeMode="contain" />
      )}
      <View style={{ marginTop: 20 }}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Upload" onPress={uploadImage} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Fetch Data from Server" onPress={fetchDataFromServer} />
      </View>
    </View>
  );
}
