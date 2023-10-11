import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';

const DrawingCanvas = () => {
  let signatureRef = null;

  const handleSignatureRef = (ref) => {
    signatureRef = ref;
  };

  const handleDrawComplete = () => {
    console.log("done");
  };

  return (
    <View style={styles.canvasContainer}>
      <SignatureCanvas
        ref={handleSignatureRef}
        backgroundColor="#FFFFFF"
        onOK={handleDrawComplete} 
        webStyle={styles.canvas}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  canvasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    borderWidth: 1,
  },
});

export default DrawingCanvas;
