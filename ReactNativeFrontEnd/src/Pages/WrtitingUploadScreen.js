
import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  PermissionsAndroid,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
// import { Shapes } from 'react-native-background-shapes'
import LinearGradient from 'react-native-linear-gradient';
import DrawingCanvas3 from '../Components/DrawingCanvas3';
import Colorpick from '../Components/colorPicker';
import PensizePick from '../Components/pensizePicker';
import {
  playBackgroundMusic,
  stopBackgroundMusic,
} from '../Components/audioPlayer';
import ViewShot from 'react-native-view-shot';
import Timer from '../ArchiveCode/Timer';

const WrtitingUploadScreen = () => {
  useEffect(() => {
    playBackgroundMusic();

    return () => {
      stopBackgroundMusic();
    };
  }, []);

  const [capturedImage, setCapturedImage] = useState(null);
  const viewShotRef = useRef();
  const Writingcanvas3Ref = useRef();
  const [showColorPick, setColorPick] = useState(false);
  const [showpensize, setShowPenSize] = useState(false);
  const [pencolor, setPenColor] = useState('white');
  const [pensize, setPenSize] = useState(3);

  const triggerPensizePick = () => {
    setShowPenSize(!showpensize);
  };

  const triggerColorPick = () => {
    setColorPick(!showColorPick);
  };

  const triggerClearCanvas = () => {
    Writingcanvas3Ref.current.handleClearButtonClick();
  };

  const handleColorChange = newColor => {
    setPenColor(newColor); // Update the pencolor state in the parent component
  };

  const handlePensizeChange = newPensize => {
    setPenSize(newPensize);
  };

  const handleCaptureImage = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      console.log(uri);
      const formData = new FormData();
      formData.append('my-image-file', {
        uri: uri,
        type: 'image/png',
        name: 'captured_image.png',
      });

      try {
        const uploadResponse = await axios.post(
          'http://192.168.0.105:3001/image-upload',
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
    <LinearGradient
      colors={['#FF4d01', '#ff0044', '#ff0033']}
      style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <View style={styles.topRow}>
          <Text style={styles.pointsText}>Points:100</Text>
         <Timer/>
        </View>

        <View style={styles.centeredBox}>
          <View style={styles.sentenceHeader}>
            <Text style={styles.sentenceHeaderText}>Let's see you Write...</Text>
          </View>

          <View style={styles.sentenceContainer}>
            <Text style={styles.sentenceText}>"The fat hoe"</Text>
            <Image
              style={styles.vectorline}
              source={require('../Assests/audioscreenimages/vectorline.png')}
            />
          </View>

          <View style={styles.WriteContainer}>
            <ViewShot ref={viewShotRef} collapsable={false} options={{format: 'png', quality: 1}}>
                <DrawingCanvas3
                  ref={Writingcanvas3Ref}
                  pencolor={pencolor}
                  pensize={pensize}
                  style={styles.canvasContainer}
                />
            </ViewShot>

            {showColorPick && (
              <View style={styles.optionsPickContainer1}>
                <Colorpick
                  onColorChange={handleColorChange}
                  pencolor={pencolor}
                />
              </View>
            )}
            {showpensize && (
              <View style={styles.optionsPickContainer2}>
                <PensizePick
                  onSizeChange={handlePensizeChange}
                  size={pensize}
                />
              </View>
            )}
          </View>
        </View>
      </View>

      {/* //footer */}

      <View style={styles.OptionsContainer}>
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={triggerPensizePick}>
          <Image
            source={require('../Assests/drawPage/brush.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={triggerColorPick}>
          <Image
            source={require('../Assests/drawPage/color.png')} //
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={triggerClearCanvas}>
          <Image
            source={require('../Assests/drawPage/clear.png')} // Replace with your image source
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={triggerClearCanvas}>
          <Image
            source={require('../Assests/drawPage/help.png')} // Replace with your image source
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionsButton}
          onPress={handleCaptureImage}>
          <Image
            source={require('../Assests/drawPage/submit.png')} // Replace with your image source
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 25,
    flexDirection: 'column',
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
    alignItems:"center"
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
    overflow:'hidden'
  },
  sentenceHeader: {
    alignSelf: 'flex-start',
    margin:5,
  },
  sentenceHeaderText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    padding:10
  },
  sentenceText: {
    textAlign: 'center',
    color: '#FFFCAD',
    fontWeight: 'bold',
    fontSize: 24,
  },
  sentenceContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 10,
    marginTop:50,
    paddingHorizontal:10
  },
  vectorline: {
    marginTop: 25,
  },
  WriteContainer: {
    flex: 6,
    overflow: 'hidden',
    width:"100%",
    height:"100%"
  },
  optionsPickContainer1: {
    margin: "auto",
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  optionsPickContainer2: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  canvasContainer: {
    height: '100%',
    width: '100%',
    flex:1
  },
  OptionsContainer: {
    minHeight: 10,
    paddingBottom:10,
    minWidth: '100vw',

    display: 'flex',
    flexDirection: 'row',
    flex: 0,
    
  },
  optionsButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5,
    
  },
  imageStyle: {
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default WrtitingUploadScreen;


