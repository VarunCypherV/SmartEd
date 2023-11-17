import React, {useState, forwardRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const {height, width} = Dimensions.get('window');

const DrawingCanvas3 = React.forwardRef((props, ref) => {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [isClearButtonClicked, setClearButtonClicked] = useState(false);
//===============features
  const [pencolor , setPenColor] = useState("blue");
   React.useImperativeHandle(ref, () => ({
    handleClearButtonClick,
  }));

  const onTouchEnd = () => {
    paths.push(currentPath);
    setCurrentPath([]);
    setClearButtonClicked(false);
  };

  const onTouchMove = event => {
    const newPath = [...currentPath];
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${locationX.toFixed(
      0,
    )},${locationY.toFixed(0)} `;
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };

  const handleClearButtonClick = () => {
    setPaths([]);
    setCurrentPath([]);
    setClearButtonClicked(true);
  };

  return (
   
      <View
        style={styles.svgContainer}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
        <Svg height={height * 0.7} width={width}>
          <Path
            d={paths.join('')}
            stroke={isClearButtonClicked ? 'transparent' : pencolor}
            fill={'transparent'}
            strokeWidth={3}
            strokeLinejoin={'round'}
            strokeLinecap={'round'}
          />
          {paths.length > 0 &&
            paths.map((item, index) => (
              <Path
                key={`path-${index}`}
                d={currentPath.join('')}
                stroke={isClearButtonClicked ? 'transparent' : pencolor}
                fill={'transparent'}
                strokeWidth={2}
                strokeLinejoin={'round'}
                strokeLinecap={'round'}
              />
            ))}
        </Svg>
      </View>

  );
});

const styles = StyleSheet.create({
 
});

export default DrawingCanvas3;
