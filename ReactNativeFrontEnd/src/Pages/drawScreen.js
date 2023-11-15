import React, {useState, useRef} from 'react';
import {View, Text, Button, Image} from 'react-native';
import ViewShot from 'react-native-view-shot';
import axios from 'axios';
import DrawingCanvas3 from '../Components/DrawingCanvas3';

function DrawScreen() {
  const [capturedImage, setCapturedImage] = useState(null);
  const viewShotRef = React.createRef();

  const drawingcanvas3Ref = useRef();
  const triggerClearCanvas = () => {
    // Call the function in the child component using the ref
    drawingcanvas3Ref.current.handleClearButtonClick();
  };

  const handleCaptureImage = async () => {
    try {
      const uri = await viewShotRef.current.capture();

      const formData = new FormData();
      formData.append('my-image-file', {
        uri: uri,
        type: 'image/png',
        name: 'captured_image.png',
      });

      try {
        
        const uploadResponse = await axios.post(
          'http://192.168.0.103:3001/image-upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        if (uploadResponse.status === 200) {
          console.log('Image uploaded successfully.');
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }

      setCapturedImage(uri);
    } catch (error) {
      console.error('Error capturing image: ', error);
    }
  };

  return (
    <View>
      <ViewShot ref={viewShotRef} options={{format: 'png', quality: 1}}>
        <View style={{height: '90%', width: '100%', backgroundColor: 'white'}}>
          <DrawingCanvas3 ref={drawingcanvas3Ref} />
        </View>
      </ViewShot>
      {capturedImage && (
        <Image
          source={{uri: capturedImage}}
          style={{flex: 1}}
          resizeMode="contain"
        />
      )}
      <Button title="Capture Image" onPress={handleCaptureImage} />
      <Button title="Clear Canvas" onPress={triggerClearCanvas} />
    </View>
  );
}

export default DrawScreen;
