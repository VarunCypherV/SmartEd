import React, {useState, forwardRef} from 'react';
import {View, Platform} from 'react-native';
import {TriangleColorPicker, toHsv, fromHsv} from 'react-native-color-picker';


const Colorpick = React.forwardRef(({onColorChange}, ref) => {
  const [color, setColor] = useState(color);

  function handleColorChange(newColor) {
    setColor(fromHsv(newColor));
    if (typeof onColorChange === 'function') {
      onColorChange(fromHsv(newColor));
    }
  }


  return (
        <TriangleColorPicker
          color={color}
          onColorChange={handleColorChange}
          onColorSelected={selectedColor =>
            alert(`Color selected: ${selectedColor}`)
          }
          onOldColorSelected={oldSelectedColor =>
            alert(`Old color selected: ${oldSelectedColor}`)
          }
          style={{
          flex: 1,
          padding: 45,
          backgroundColor: '#212021',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        />
  );
});
export default Colorpick;
