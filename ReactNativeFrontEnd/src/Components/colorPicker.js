import React, { useState } from 'react';
import { View, Button , TouchableOpacity , Text} from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';

const Colorpick = (props) => {
  const [color, setColor] = useState(props.pencolor);

  const handleComponentColor = (newColor) => {
    const formattedColor = fromHsv(newColor);
    setColor(formattedColor);
  }

  const handleColorChange = () => {
    if (typeof props.onColorChange === 'function') {
      props.onColorChange(color);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7, }}>
        <TriangleColorPicker
          oldColor={props.pencolor}
          color={color}
          onColorChange={handleComponentColor}
          onColorSelected={(selectedColor) =>
            alert(`Color selected: ${selectedColor}`)
          }
          onOldColorSelected={(oldSelectedColor) =>
            alert(`Old color selected: ${oldSelectedColor}`)
          }
          style={{
            width: '100%',
            height: '100%',
            padding: 45,
            backgroundColor: '#FAD4B3',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#FAD4B3' }}>
      <TouchableOpacity
          style={{
            borderRadius: 40,
            backgroundColor: '#FF7B1C',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          onPress={handleColorChange}
      >
      <Text style={{color:"white"}}>Save Color</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Colorpick;
