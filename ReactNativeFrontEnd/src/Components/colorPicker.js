import React, { useState , forwardRef} from 'react';
import { View } from 'react-native';
import { TriangleColorPicker, toHsv } from 'react-native-color-picker';

const Colorpick = () => {
  const [color, setColor] = useState(toHsv('green'));

  function onColorChange(newColor) {
    setColor(newColor);
  }

  return (
    <View style={{ flex: 1, padding: 45, backgroundColor: '#212021' }}>
      <TriangleColorPicker
        oldColor="purple"
        color={color}
        onColorChange={onColorChange}
        onColorSelected={(selectedColor) => alert(`Color selected: ${selectedColor}`)}
        onOldColorSelected={(oldSelectedColor) => alert(`Old color selected: ${oldSelectedColor}`)}
        style={{ flex: 1 }}
      />
    </View>
  );
}
export default Colorpick;