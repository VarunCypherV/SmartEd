import React, {useState, useRef , useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ViewShot from 'react-native-view-shot';
import axios from 'axios';
import DrawingCanvas3 from '../Components/DrawingCanvas3';
import Colorpick from '../Components/colorPicker';
import PensizePick from '../Components/pensizePicker';
import { playBackgroundMusic , stopBackgroundMusic} from '../Components/audioPlayer';


function DrawScreen() {
  useEffect(() => {
    playBackgroundMusic();

    return () => {
      stopBackgroundMusic();
    };
  }, []);
  const [capturedImage, setCapturedImage] = useState(null);
  const viewShotRef = useRef();
  const drawingcanvas3Ref = useRef();
  const [showColorPick, setColorPick] = useState(false);
  const [showpensize , setShowPenSize] = useState(false);
  const [pencolor, setPenColor] = useState('red');
  const [pensize , setPenSize] = useState(3);

  const triggerPensizePick = () => {
    setShowPenSize(!showpensize)
  }

  const triggerColorPick = () => {
    
    setColorPick(!showColorPick);
  };

  const triggerClearCanvas = () => {
    drawingcanvas3Ref.current.handleClearButtonClick();
  };

  const handleColorChange = newColor => {
    setPenColor(newColor); // Update the pencolor state in the parent component
  };

  const handlePensizeChange = newPensize => {
    setPenSize(newPensize)
  }

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
          'http://192.168.0.101:3001/image-upload',
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
    <View style={styles.container}>
      <View style={styles.InstructionContainer}>
        <View style={styles.InstructionContainerNavBar}>
          <View style={styles.imageStyleNavBarview}>
            <Image
              source={require('../Assests/drawPage/home.png')} // Replace with your image source
              style={styles.imageStyleNavBar}
            />
          </View>
          <View style={styles.levelView}>
            <Text style={styles.level}>Level 1</Text>
          </View>
        </View>
        <View style={styles.InstructionContainerContentBar}>
          <Text style={styles.InstructionContainerContentBarHeadText}>
            Hi UserName!
          </Text>
          <Text style={styles.InstructionContainerContentBarContentText}>
            Lets Draw a "Ball"
          </Text>
        </View>
      </View>

      <View style={styles.DrawContainer}>
        <ViewShot ref={viewShotRef} options={{format: 'png', quality: 1}}>
          <View style={styles.canvasContainer}>
            <DrawingCanvas3 ref={drawingcanvas3Ref} pencolor={pencolor} pensize={pensize}/>
          </View>
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
    </View>
  );
}

export default DrawScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF7B1C',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  InstructionContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  InstructionContainerNavBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns children to the start and end of the container
    alignItems: 'center', // Aligns items along the cross axis (vertically in this case)
  },
  imageStyleNavBarview: {
    marginTop: 20,
    marginLeft: 20,
  },
  levelView: {
    marginTop: 20,
    marginRight: 20,
  },
  level: {
    fontSize: 18,
    color: 'white',
    fontWeight: '800',
  },
  InstructionContainerContentBar: {
    margin: 20,
  },
  InstructionContainerContentBarHeadText: {
    fontSize: 32,
    color: 'white',
    paddingBottom: 5,
    fontWeight: '600',
  },
  InstructionContainerContentBarContentText: {
    paddingTop: 5,
    fontSize: 26,
    color: 'white',
  },
  DrawContainer: {
    flex: 7,
    overflow: 'hidden',
    position: 'relative', // Ensures proper positioning of Colorpick
    display:"flex"
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
    flexDirection: 'row', // Adjust the direction of the container
    alignItems: 'center', // Align items along the cross-axis (vertically)
    position: 'absolute',
    bottom: 0,
    margin:5
  },
  canvasContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  OptionsContainer: {
    minHeight: 10,
    margin: 5,
    minWidth: '100vw',
    backgroundColor: '#FF7B1C',
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
  imageStyle: {},
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
