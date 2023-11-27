import Slider from '@react-native-community/slider';
import React, {useState, forwardRef} from 'react';
import {View, Platform , StyleSheet} from 'react-native';
// import Slider from 'react-native-slider';

const PensizePick = React.forwardRef((props, ref) => {
  const [size, setSize] = useState(props.size);

  function handleSizeChange(newSize) {
    setSize(newSize);
    if (typeof props.onSizeChange === 'function') {
      props.onSizeChange(newSize);
    }
  }
  const thumbImage = require('../Assests/loginImages/p2.png');
  return (
      <Slider
      style={{width: "100%", height: "100%" ,transform: [{ scaleY: 1.5 }], marginBottom:10,flex:1, backgroundColor:"#FAD4B3"}}
      minimumValue={0}
      maximumValue={10}
      onValueChange={handleSizeChange}
      minimumTrackTintColor="#FF7B1C"
      maximumTrackTintColor="#FF7B1C"
      step={1}
      tapToSeek={true}
      value={props.size}
      vertical={true}
      thumbImage={thumbImage}
    />
  );
});
export default PensizePick;
