import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalLine = (props) => {
  const { color } = props; // Extracting color from props

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // Set container styles as needed
      justifyContent: 'center', // Example: Centering the line vertically
    },
    line: {
      width: 1, // Width of the line
      backgroundColor: color, // Use the color from props
      // Flex property allows the line to expand vertically to fill the container
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

export default VerticalLine;
