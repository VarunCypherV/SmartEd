import Slider from '@react-native-community/slider';
import React, {useState, forwardRef} from 'react';
import {View, Platform} from 'react-native';


const PensizePick = React.forwardRef(({onSizeChange}, ref) => {
  const [size, setSize] = useState(size);

  function handleSizeChange(newSize) {
    setSize(newSize);
    console.log(newSize)
    if (typeof onSizeChange === 'function') {
      onSizeChange(newSize);
    }
  }


  return (
    <Slider
    style={{width: "100%", height: "100%"}}
    minimumValue={0}
    maximumValue={10}
    onValueChange={handleSizeChange}
    minimumTrackTintColor="red"
    maximumTrackTintColor="orange"
  />
  );
});
export default PensizePick;
